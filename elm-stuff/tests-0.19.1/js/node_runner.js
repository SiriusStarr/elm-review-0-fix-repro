const { parentPort } = require("worker_threads");
const { performance } = require("perf_hooks");

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


// Capture Debug.log from elm code
let logs = [];
console.elmlog = (str) => logs.push(str + "\n");

// Compiled by elm-test-rs from templates/Runner.elm
const { Elm } = require("./Runner.elm.js");

// Start the Elm app
const flags = { initialSeed: 1878105026, fuzzRuns: 100, filter: null };
const app = Elm.Runner.init({ flags: flags });

// Record the timing at which we received the last "runTest" message
let startTime;

// Communication from Supervisor to Elm runner via port
parentPort.on("message", (msg) => {
  if (msg.type_ == "askTestsCount") {
    app.ports.askTestsCount.send();
  } else if (msg.type_ == "runTest") {
    startTime = performance.now();
    app.ports.receiveRunTest.send(msg.id);
  } else {
    console.error("Invalid supervisor msg.type_:", msg.type_);
  }
});

// Communication from Elm runner to Supervisor via port
// Subscribe to outgoing Elm ports defined in templates/Runner.elm
app.ports.sendResult.subscribe((msg) => {
  msg.type_ = "testResult";
  msg.duration = performance.now() - startTime;
  msg.logs = logs;
  parentPort.postMessage(msg);
  logs.length = 0;
});
app.ports.sendTestsCount.subscribe((msg) => {
  msg.type_ = "testsCount";
  msg.logs = logs;
  parentPort.postMessage(msg);
  logs.length = 0;
});
