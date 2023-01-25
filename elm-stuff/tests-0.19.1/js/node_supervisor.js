process.chdir(__dirname);

// From templates/polyfills.js
// Apply Node polyfills as necessary.
var window = {
  Date: Date,
  addEventListener: function () {},
  removeEventListener: function () {},
};

var location = {
  href: "",
  host: "",
  hostname: "",
  protocol: "",
  origin: "",
  port: "",
  pathname: "",
  search: "",
  hash: "",
  username: "",
  password: "",
};

var document = {
  body: {},
  createTextNode: function () {},
  location: location,
};

var oldConsoleWarn = console.warn;
console.warn = function () {
  if (
    arguments.length === 1 &&
    arguments[0].indexOf("Compiled in DEV mode") === 0
  )
    return;
  return oldConsoleWarn.apply(console, arguments);
};

if (typeof FileList === "undefined") {
  var FileList = function () {};
}

if (typeof File === "undefined") {
  var File = function () {};
}

if (typeof XMLHttpRequest === "undefined") {
  var XMLHttpRequest = function () {
    return {
      addEventListener: function () {},
      open: function () {},
      send: function () {},
    };
  };
}

if (typeof FormData === "undefined") {
  var FormData = function () {
    this._data = [];
  };
  FormData.prototype.append = function () {
    this._data.push(Array.prototype.slice.call(arguments));
  };
}


const { Worker } = require("worker_threads");
const readline = require("readline");
const { performance } = require("perf_hooks");

// Global variables
let testsCount, todoTests;
let reporter;
let runners = [];
let working = false;
let workersCount = 16;
let startWorkCallback = function(){};
const verbosity = 0;

// Create a long lived reporter worker
const { Elm } = require("./Reporter.elm.js");
const flags = {
  initialSeed: 1878105026,
  fuzzRuns: 100,
  mode: "consoleColor",
  verbosity: verbosity,
  globs: [],
  paths: ["/home/erfrost/Documents/Areas/FOSS/elm-review-no-unsorted/tests/NoUnsortedCasesTest.elm","/home/erfrost/Documents/Areas/FOSS/elm-review-no-unsorted/tests/NoUnsortedRecordsTest.elm","/home/erfrost/Documents/Areas/FOSS/elm-review-no-unsorted/tests/NoUnsortedTopLevelDeclarationsTest.elm","/home/erfrost/Documents/Areas/FOSS/elm-review-no-unsorted/tests/NoUnsortedLetDeclarationsTest.elm"],
};
reporter = Elm.Reporter.init({ flags: flags });

// Pipe the Elm stdout port to stdout
reporter.ports.stdout.subscribe((str) => process.stdout.write(str));

// When the reporter has finished clean runners
reporter.ports.signalFinished.subscribe(async ({ exitCode, testsCount }) => {
  await Promise.all(runners.map((runner) => runner.terminate()));
  working = false;
  startWorkCallback();
  if (verbosity >= 1) {
    console.warn("Running duration (since Node.js start):", Math.round(performance.now()), "ms\n");
  }
  process.exit(exitCode);
});

// When receiving a CLI message, start test workers
// The message is a string containing "/path/to/node_runner.js"
const rl = readline.createInterface({ input: process.stdin });
rl.on("line", (runnerFile) => {
  working ? registerWork(runnerFile) : startWork(runnerFile);
});

function registerWork(runnerFile) {
  startWorkCallback = () => startWork(runnerFile);
}

function startWork(runnerFile) {
  startWorkCallback = function(){};
  working = true;
  // Start first runner worker and prevent piped stdout and sdterr
  runners[0] = new Worker(runnerFile, { stdout: true }); //, stderr: true });
  runners[0].on("message", (msg) =>
    handleRunnerMsg(runners[0], runnerFile, msg)
  );
  runners[0].on("online", () =>
    runners[0].postMessage({ type_: "askTestsCount" })
  );
}

// Handle a test result
function handleRunnerMsg(runner, runnerFile, msg) {
  if (msg.type_ == "testsCount") {
    if (msg.logs.length > 0) {
      console.warn("Debug logs captured when setting up tests: -----------\n");
      msg.logs.forEach((str) => process.stderr.write(str));
      console.warn("\n------------------------------------------------------\n");
    }
    setupWithTestsCount(runnerFile, msg);
  } else if (msg.type_ == "testResult") {
    dispatchWork(runner, todoTests.pop());
    reporter.ports.incomingResult.send(msg);
  } else {
    console.error("Invalid runner msg.type_:", msg.type_);
  }
}

// Reset supervisor tests count and reporter
// Start work on all runners
function setupWithTestsCount(runnerFile, msg) {
  // Reset supervisor tests
  testsCount = msg.testsCount;
  todoTests = Array(testsCount)
    .fill(0)
    .map((_, id) => id)
    .reverse();

  // Reset reporter
  reporter.ports.restart.send(msg);

  // Send first runner job
  if (testsCount == 0) {
    console.error("No exposed values of type Test was found. Did you forget to expose them?");
    return;
  } else {
    runners[0].postMessage({ type_: "runTest", id: todoTests.pop() });
  }

  // Create and send work to all other workers.
  let max_workers = Math.min(workersCount, testsCount);
  for (let i = 1; i < max_workers; i++) {
    let runner = new Worker(runnerFile); //, { stdout: true, stderr: true });
    runners[i] = runner;
    runner.on("message", (msg) =>
      handleRunnerMsg(runner, runnerFile, msg)
    );
    runner.on("online", () => dispatchWork(runner, todoTests.pop()));
  }
}

// Ask runner to run some test.
function dispatchWork(runner, testId) {
  if (testId != undefined) {
    runner.postMessage({ type_: "runTest", id: testId });
  }
}
