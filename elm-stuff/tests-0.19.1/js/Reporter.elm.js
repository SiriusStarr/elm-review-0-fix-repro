(function(scope){
'use strict';

function F(arity, fun, wrapper) {
  wrapper.a = arity;
  wrapper.f = fun;
  return wrapper;
}

function F2(fun) {
  return F(2, fun, function(a) { return function(b) { return fun(a,b); }; })
}
function F3(fun) {
  return F(3, fun, function(a) {
    return function(b) { return function(c) { return fun(a, b, c); }; };
  });
}
function F4(fun) {
  return F(4, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return fun(a, b, c, d); }; }; };
  });
}
function F5(fun) {
  return F(5, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return fun(a, b, c, d, e); }; }; }; };
  });
}
function F6(fun) {
  return F(6, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return function(f) {
    return fun(a, b, c, d, e, f); }; }; }; }; };
  });
}
function F7(fun) {
  return F(7, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return function(f) {
    return function(g) { return fun(a, b, c, d, e, f, g); }; }; }; }; }; };
  });
}
function F8(fun) {
  return F(8, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return function(f) {
    return function(g) { return function(h) {
    return fun(a, b, c, d, e, f, g, h); }; }; }; }; }; }; };
  });
}
function F9(fun) {
  return F(9, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return function(f) {
    return function(g) { return function(h) { return function(i) {
    return fun(a, b, c, d, e, f, g, h, i); }; }; }; }; }; }; }; };
  });
}

function A2(fun, a, b) {
  return fun.a === 2 ? fun.f(a, b) : fun(a)(b);
}
function A3(fun, a, b, c) {
  return fun.a === 3 ? fun.f(a, b, c) : fun(a)(b)(c);
}
function A4(fun, a, b, c, d) {
  return fun.a === 4 ? fun.f(a, b, c, d) : fun(a)(b)(c)(d);
}
function A5(fun, a, b, c, d, e) {
  return fun.a === 5 ? fun.f(a, b, c, d, e) : fun(a)(b)(c)(d)(e);
}
function A6(fun, a, b, c, d, e, f) {
  return fun.a === 6 ? fun.f(a, b, c, d, e, f) : fun(a)(b)(c)(d)(e)(f);
}
function A7(fun, a, b, c, d, e, f, g) {
  return fun.a === 7 ? fun.f(a, b, c, d, e, f, g) : fun(a)(b)(c)(d)(e)(f)(g);
}
function A8(fun, a, b, c, d, e, f, g, h) {
  return fun.a === 8 ? fun.f(a, b, c, d, e, f, g, h) : fun(a)(b)(c)(d)(e)(f)(g)(h);
}
function A9(fun, a, b, c, d, e, f, g, h, i) {
  return fun.a === 9 ? fun.f(a, b, c, d, e, f, g, h, i) : fun(a)(b)(c)(d)(e)(f)(g)(h)(i);
}

console.warn('Compiled in DEV mode. Follow the advice at https://elm-lang.org/0.19.1/optimize for better performance and smaller assets.');


var _JsArray_empty = [];

function _JsArray_singleton(value)
{
    return [value];
}

function _JsArray_length(array)
{
    return array.length;
}

var _JsArray_initialize = F3(function(size, offset, func)
{
    var result = new Array(size);

    for (var i = 0; i < size; i++)
    {
        result[i] = func(offset + i);
    }

    return result;
});

var _JsArray_initializeFromList = F2(function (max, ls)
{
    var result = new Array(max);

    for (var i = 0; i < max && ls.b; i++)
    {
        result[i] = ls.a;
        ls = ls.b;
    }

    result.length = i;
    return _Utils_Tuple2(result, ls);
});

var _JsArray_unsafeGet = F2(function(index, array)
{
    return array[index];
});

var _JsArray_unsafeSet = F3(function(index, value, array)
{
    var length = array.length;
    var result = new Array(length);

    for (var i = 0; i < length; i++)
    {
        result[i] = array[i];
    }

    result[index] = value;
    return result;
});

var _JsArray_push = F2(function(value, array)
{
    var length = array.length;
    var result = new Array(length + 1);

    for (var i = 0; i < length; i++)
    {
        result[i] = array[i];
    }

    result[length] = value;
    return result;
});

var _JsArray_foldl = F3(function(func, acc, array)
{
    var length = array.length;

    for (var i = 0; i < length; i++)
    {
        acc = A2(func, array[i], acc);
    }

    return acc;
});

var _JsArray_foldr = F3(function(func, acc, array)
{
    for (var i = array.length - 1; i >= 0; i--)
    {
        acc = A2(func, array[i], acc);
    }

    return acc;
});

var _JsArray_map = F2(function(func, array)
{
    var length = array.length;
    var result = new Array(length);

    for (var i = 0; i < length; i++)
    {
        result[i] = func(array[i]);
    }

    return result;
});

var _JsArray_indexedMap = F3(function(func, offset, array)
{
    var length = array.length;
    var result = new Array(length);

    for (var i = 0; i < length; i++)
    {
        result[i] = A2(func, offset + i, array[i]);
    }

    return result;
});

var _JsArray_slice = F3(function(from, to, array)
{
    return array.slice(from, to);
});

var _JsArray_appendN = F3(function(n, dest, source)
{
    var destLen = dest.length;
    var itemsToCopy = n - destLen;

    if (itemsToCopy > source.length)
    {
        itemsToCopy = source.length;
    }

    var size = destLen + itemsToCopy;
    var result = new Array(size);

    for (var i = 0; i < destLen; i++)
    {
        result[i] = dest[i];
    }

    for (var i = 0; i < itemsToCopy; i++)
    {
        result[i + destLen] = source[i];
    }

    return result;
});



// LOG

var _Debug_log_UNUSED = F2(function(tag, value)
{
	return value;
});

var _Debug_log = F2(function(tag, value)
{
	console.log(tag + ': ' + _Debug_toString(value));
	return value;
});


// TODOS

function _Debug_todo(moduleName, region)
{
	return function(message) {
		_Debug_crash(8, moduleName, region, message);
	};
}

function _Debug_todoCase(moduleName, region, value)
{
	return function(message) {
		_Debug_crash(9, moduleName, region, value, message);
	};
}


// TO STRING

function _Debug_toString_UNUSED(value)
{
	return '<internals>';
}

function _Debug_toString(value)
{
	return _Debug_toAnsiString(false, value);
}

function _Debug_toAnsiString(ansi, value)
{
	if (typeof value === 'function')
	{
		return _Debug_internalColor(ansi, '<function>');
	}

	if (typeof value === 'boolean')
	{
		return _Debug_ctorColor(ansi, value ? 'True' : 'False');
	}

	if (typeof value === 'number')
	{
		return _Debug_numberColor(ansi, value + '');
	}

	if (value instanceof String)
	{
		return _Debug_charColor(ansi, "'" + _Debug_addSlashes(value, true) + "'");
	}

	if (typeof value === 'string')
	{
		return _Debug_stringColor(ansi, '"' + _Debug_addSlashes(value, false) + '"');
	}

	if (typeof value === 'object' && '$' in value)
	{
		var tag = value.$;

		if (typeof tag === 'number')
		{
			return _Debug_internalColor(ansi, '<internals>');
		}

		if (tag[0] === '#')
		{
			var output = [];
			for (var k in value)
			{
				if (k === '$') continue;
				output.push(_Debug_toAnsiString(ansi, value[k]));
			}
			return '(' + output.join(',') + ')';
		}

		if (tag === 'Set_elm_builtin')
		{
			return _Debug_ctorColor(ansi, 'Set')
				+ _Debug_fadeColor(ansi, '.fromList') + ' '
				+ _Debug_toAnsiString(ansi, $elm$core$Set$toList(value));
		}

		if (tag === 'RBNode_elm_builtin' || tag === 'RBEmpty_elm_builtin')
		{
			return _Debug_ctorColor(ansi, 'Dict')
				+ _Debug_fadeColor(ansi, '.fromList') + ' '
				+ _Debug_toAnsiString(ansi, $elm$core$Dict$toList(value));
		}

		if (tag === 'Array_elm_builtin')
		{
			return _Debug_ctorColor(ansi, 'Array')
				+ _Debug_fadeColor(ansi, '.fromList') + ' '
				+ _Debug_toAnsiString(ansi, $elm$core$Array$toList(value));
		}

		if (tag === '::' || tag === '[]')
		{
			var output = '[';

			value.b && (output += _Debug_toAnsiString(ansi, value.a), value = value.b)

			for (; value.b; value = value.b) // WHILE_CONS
			{
				output += ',' + _Debug_toAnsiString(ansi, value.a);
			}
			return output + ']';
		}

		var output = '';
		for (var i in value)
		{
			if (i === '$') continue;
			var str = _Debug_toAnsiString(ansi, value[i]);
			var c0 = str[0];
			var parenless = c0 === '{' || c0 === '(' || c0 === '[' || c0 === '<' || c0 === '"' || str.indexOf(' ') < 0;
			output += ' ' + (parenless ? str : '(' + str + ')');
		}
		return _Debug_ctorColor(ansi, tag) + output;
	}

	if (typeof DataView === 'function' && value instanceof DataView)
	{
		return _Debug_stringColor(ansi, '<' + value.byteLength + ' bytes>');
	}

	if (typeof File !== 'undefined' && value instanceof File)
	{
		return _Debug_internalColor(ansi, '<' + value.name + '>');
	}

	if (typeof value === 'object')
	{
		var output = [];
		for (var key in value)
		{
			var field = key[0] === '_' ? key.slice(1) : key;
			output.push(_Debug_fadeColor(ansi, field) + ' = ' + _Debug_toAnsiString(ansi, value[key]));
		}
		if (output.length === 0)
		{
			return '{}';
		}
		return '{ ' + output.join(', ') + ' }';
	}

	return _Debug_internalColor(ansi, '<internals>');
}

function _Debug_addSlashes(str, isChar)
{
	var s = str
		.replace(/\\/g, '\\\\')
		.replace(/\n/g, '\\n')
		.replace(/\t/g, '\\t')
		.replace(/\r/g, '\\r')
		.replace(/\v/g, '\\v')
		.replace(/\0/g, '\\0');

	if (isChar)
	{
		return s.replace(/\'/g, '\\\'');
	}
	else
	{
		return s.replace(/\"/g, '\\"');
	}
}

function _Debug_ctorColor(ansi, string)
{
	return ansi ? '\x1b[96m' + string + '\x1b[0m' : string;
}

function _Debug_numberColor(ansi, string)
{
	return ansi ? '\x1b[95m' + string + '\x1b[0m' : string;
}

function _Debug_stringColor(ansi, string)
{
	return ansi ? '\x1b[93m' + string + '\x1b[0m' : string;
}

function _Debug_charColor(ansi, string)
{
	return ansi ? '\x1b[92m' + string + '\x1b[0m' : string;
}

function _Debug_fadeColor(ansi, string)
{
	return ansi ? '\x1b[37m' + string + '\x1b[0m' : string;
}

function _Debug_internalColor(ansi, string)
{
	return ansi ? '\x1b[36m' + string + '\x1b[0m' : string;
}

function _Debug_toHexDigit(n)
{
	return String.fromCharCode(n < 10 ? 48 + n : 55 + n);
}


// CRASH


function _Debug_crash_UNUSED(identifier)
{
	throw new Error('https://github.com/elm/core/blob/1.0.0/hints/' + identifier + '.md');
}


function _Debug_crash(identifier, fact1, fact2, fact3, fact4)
{
	switch(identifier)
	{
		case 0:
			throw new Error('What node should I take over? In JavaScript I need something like:\n\n    Elm.Main.init({\n        node: document.getElementById("elm-node")\n    })\n\nYou need to do this with any Browser.sandbox or Browser.element program.');

		case 1:
			throw new Error('Browser.application programs cannot handle URLs like this:\n\n    ' + document.location.href + '\n\nWhat is the root? The root of your file system? Try looking at this program with `elm reactor` or some other server.');

		case 2:
			var jsonErrorString = fact1;
			throw new Error('Problem with the flags given to your Elm program on initialization.\n\n' + jsonErrorString);

		case 3:
			var portName = fact1;
			throw new Error('There can only be one port named `' + portName + '`, but your program has multiple.');

		case 4:
			var portName = fact1;
			var problem = fact2;
			throw new Error('Trying to send an unexpected type of value through port `' + portName + '`:\n' + problem);

		case 5:
			throw new Error('Trying to use `(==)` on functions.\nThere is no way to know if functions are "the same" in the Elm sense.\nRead more about this at https://package.elm-lang.org/packages/elm/core/latest/Basics#== which describes why it is this way and what the better version will look like.');

		case 6:
			var moduleName = fact1;
			throw new Error('Your page is loading multiple Elm scripts with a module named ' + moduleName + '. Maybe a duplicate script is getting loaded accidentally? If not, rename one of them so I know which is which!');

		case 8:
			var moduleName = fact1;
			var region = fact2;
			var message = fact3;
			throw new Error('TODO in module `' + moduleName + '` ' + _Debug_regionToString(region) + '\n\n' + message);

		case 9:
			var moduleName = fact1;
			var region = fact2;
			var value = fact3;
			var message = fact4;
			throw new Error(
				'TODO in module `' + moduleName + '` from the `case` expression '
				+ _Debug_regionToString(region) + '\n\nIt received the following value:\n\n    '
				+ _Debug_toString(value).replace('\n', '\n    ')
				+ '\n\nBut the branch that handles it says:\n\n    ' + message.replace('\n', '\n    ')
			);

		case 10:
			throw new Error('Bug in https://github.com/elm/virtual-dom/issues');

		case 11:
			throw new Error('Cannot perform mod 0. Division by zero error.');
	}
}

function _Debug_regionToString(region)
{
	if (region.start.line === region.end.line)
	{
		return 'on line ' + region.start.line;
	}
	return 'on lines ' + region.start.line + ' through ' + region.end.line;
}



// EQUALITY

function _Utils_eq(x, y)
{
	for (
		var pair, stack = [], isEqual = _Utils_eqHelp(x, y, 0, stack);
		isEqual && (pair = stack.pop());
		isEqual = _Utils_eqHelp(pair.a, pair.b, 0, stack)
		)
	{}

	return isEqual;
}

function _Utils_eqHelp(x, y, depth, stack)
{
	if (x === y)
	{
		return true;
	}

	if (typeof x !== 'object' || x === null || y === null)
	{
		typeof x === 'function' && _Debug_crash(5);
		return false;
	}

	if (depth > 100)
	{
		stack.push(_Utils_Tuple2(x,y));
		return true;
	}

	/**/
	if (x.$ === 'Set_elm_builtin')
	{
		x = $elm$core$Set$toList(x);
		y = $elm$core$Set$toList(y);
	}
	if (x.$ === 'RBNode_elm_builtin' || x.$ === 'RBEmpty_elm_builtin')
	{
		x = $elm$core$Dict$toList(x);
		y = $elm$core$Dict$toList(y);
	}
	//*/

	/**_UNUSED/
	if (x.$ < 0)
	{
		x = $elm$core$Dict$toList(x);
		y = $elm$core$Dict$toList(y);
	}
	//*/

	for (var key in x)
	{
		if (!_Utils_eqHelp(x[key], y[key], depth + 1, stack))
		{
			return false;
		}
	}
	return true;
}

var _Utils_equal = F2(_Utils_eq);
var _Utils_notEqual = F2(function(a, b) { return !_Utils_eq(a,b); });



// COMPARISONS

// Code in Generate/JavaScript.hs, Basics.js, and List.js depends on
// the particular integer values assigned to LT, EQ, and GT.

function _Utils_cmp(x, y, ord)
{
	if (typeof x !== 'object')
	{
		return x === y ? /*EQ*/ 0 : x < y ? /*LT*/ -1 : /*GT*/ 1;
	}

	/**/
	if (x instanceof String)
	{
		var a = x.valueOf();
		var b = y.valueOf();
		return a === b ? 0 : a < b ? -1 : 1;
	}
	//*/

	/**_UNUSED/
	if (typeof x.$ === 'undefined')
	//*/
	/**/
	if (x.$[0] === '#')
	//*/
	{
		return (ord = _Utils_cmp(x.a, y.a))
			? ord
			: (ord = _Utils_cmp(x.b, y.b))
				? ord
				: _Utils_cmp(x.c, y.c);
	}

	// traverse conses until end of a list or a mismatch
	for (; x.b && y.b && !(ord = _Utils_cmp(x.a, y.a)); x = x.b, y = y.b) {} // WHILE_CONSES
	return ord || (x.b ? /*GT*/ 1 : y.b ? /*LT*/ -1 : /*EQ*/ 0);
}

var _Utils_lt = F2(function(a, b) { return _Utils_cmp(a, b) < 0; });
var _Utils_le = F2(function(a, b) { return _Utils_cmp(a, b) < 1; });
var _Utils_gt = F2(function(a, b) { return _Utils_cmp(a, b) > 0; });
var _Utils_ge = F2(function(a, b) { return _Utils_cmp(a, b) >= 0; });

var _Utils_compare = F2(function(x, y)
{
	var n = _Utils_cmp(x, y);
	return n < 0 ? $elm$core$Basics$LT : n ? $elm$core$Basics$GT : $elm$core$Basics$EQ;
});


// COMMON VALUES

var _Utils_Tuple0_UNUSED = 0;
var _Utils_Tuple0 = { $: '#0' };

function _Utils_Tuple2_UNUSED(a, b) { return { a: a, b: b }; }
function _Utils_Tuple2(a, b) { return { $: '#2', a: a, b: b }; }

function _Utils_Tuple3_UNUSED(a, b, c) { return { a: a, b: b, c: c }; }
function _Utils_Tuple3(a, b, c) { return { $: '#3', a: a, b: b, c: c }; }

function _Utils_chr_UNUSED(c) { return c; }
function _Utils_chr(c) { return new String(c); }


// RECORDS

function _Utils_update(oldRecord, updatedFields)
{
	var newRecord = {};

	for (var key in oldRecord)
	{
		newRecord[key] = oldRecord[key];
	}

	for (var key in updatedFields)
	{
		newRecord[key] = updatedFields[key];
	}

	return newRecord;
}


// APPEND

var _Utils_append = F2(_Utils_ap);

function _Utils_ap(xs, ys)
{
	// append Strings
	if (typeof xs === 'string')
	{
		return xs + ys;
	}

	// append Lists
	if (!xs.b)
	{
		return ys;
	}
	var root = _List_Cons(xs.a, ys);
	xs = xs.b
	for (var curr = root; xs.b; xs = xs.b) // WHILE_CONS
	{
		curr = curr.b = _List_Cons(xs.a, ys);
	}
	return root;
}



var _List_Nil_UNUSED = { $: 0 };
var _List_Nil = { $: '[]' };

function _List_Cons_UNUSED(hd, tl) { return { $: 1, a: hd, b: tl }; }
function _List_Cons(hd, tl) { return { $: '::', a: hd, b: tl }; }


var _List_cons = F2(_List_Cons);

function _List_fromArray(arr)
{
	var out = _List_Nil;
	for (var i = arr.length; i--; )
	{
		out = _List_Cons(arr[i], out);
	}
	return out;
}

function _List_toArray(xs)
{
	for (var out = []; xs.b; xs = xs.b) // WHILE_CONS
	{
		out.push(xs.a);
	}
	return out;
}

var _List_map2 = F3(function(f, xs, ys)
{
	for (var arr = []; xs.b && ys.b; xs = xs.b, ys = ys.b) // WHILE_CONSES
	{
		arr.push(A2(f, xs.a, ys.a));
	}
	return _List_fromArray(arr);
});

var _List_map3 = F4(function(f, xs, ys, zs)
{
	for (var arr = []; xs.b && ys.b && zs.b; xs = xs.b, ys = ys.b, zs = zs.b) // WHILE_CONSES
	{
		arr.push(A3(f, xs.a, ys.a, zs.a));
	}
	return _List_fromArray(arr);
});

var _List_map4 = F5(function(f, ws, xs, ys, zs)
{
	for (var arr = []; ws.b && xs.b && ys.b && zs.b; ws = ws.b, xs = xs.b, ys = ys.b, zs = zs.b) // WHILE_CONSES
	{
		arr.push(A4(f, ws.a, xs.a, ys.a, zs.a));
	}
	return _List_fromArray(arr);
});

var _List_map5 = F6(function(f, vs, ws, xs, ys, zs)
{
	for (var arr = []; vs.b && ws.b && xs.b && ys.b && zs.b; vs = vs.b, ws = ws.b, xs = xs.b, ys = ys.b, zs = zs.b) // WHILE_CONSES
	{
		arr.push(A5(f, vs.a, ws.a, xs.a, ys.a, zs.a));
	}
	return _List_fromArray(arr);
});

var _List_sortBy = F2(function(f, xs)
{
	return _List_fromArray(_List_toArray(xs).sort(function(a, b) {
		return _Utils_cmp(f(a), f(b));
	}));
});

var _List_sortWith = F2(function(f, xs)
{
	return _List_fromArray(_List_toArray(xs).sort(function(a, b) {
		var ord = A2(f, a, b);
		return ord === $elm$core$Basics$EQ ? 0 : ord === $elm$core$Basics$LT ? -1 : 1;
	}));
});



// MATH

var _Basics_add = F2(function(a, b) { return a + b; });
var _Basics_sub = F2(function(a, b) { return a - b; });
var _Basics_mul = F2(function(a, b) { return a * b; });
var _Basics_fdiv = F2(function(a, b) { return a / b; });
var _Basics_idiv = F2(function(a, b) { return (a / b) | 0; });
var _Basics_pow = F2(Math.pow);

var _Basics_remainderBy = F2(function(b, a) { return a % b; });

// https://www.microsoft.com/en-us/research/wp-content/uploads/2016/02/divmodnote-letter.pdf
var _Basics_modBy = F2(function(modulus, x)
{
	var answer = x % modulus;
	return modulus === 0
		? _Debug_crash(11)
		:
	((answer > 0 && modulus < 0) || (answer < 0 && modulus > 0))
		? answer + modulus
		: answer;
});


// TRIGONOMETRY

var _Basics_pi = Math.PI;
var _Basics_e = Math.E;
var _Basics_cos = Math.cos;
var _Basics_sin = Math.sin;
var _Basics_tan = Math.tan;
var _Basics_acos = Math.acos;
var _Basics_asin = Math.asin;
var _Basics_atan = Math.atan;
var _Basics_atan2 = F2(Math.atan2);


// MORE MATH

function _Basics_toFloat(x) { return x; }
function _Basics_truncate(n) { return n | 0; }
function _Basics_isInfinite(n) { return n === Infinity || n === -Infinity; }

var _Basics_ceiling = Math.ceil;
var _Basics_floor = Math.floor;
var _Basics_round = Math.round;
var _Basics_sqrt = Math.sqrt;
var _Basics_log = Math.log;
var _Basics_isNaN = isNaN;


// BOOLEANS

function _Basics_not(bool) { return !bool; }
var _Basics_and = F2(function(a, b) { return a && b; });
var _Basics_or  = F2(function(a, b) { return a || b; });
var _Basics_xor = F2(function(a, b) { return a !== b; });



var _String_cons = F2(function(chr, str)
{
	return chr + str;
});

function _String_uncons(string)
{
	var word = string.charCodeAt(0);
	return !isNaN(word)
		? $elm$core$Maybe$Just(
			0xD800 <= word && word <= 0xDBFF
				? _Utils_Tuple2(_Utils_chr(string[0] + string[1]), string.slice(2))
				: _Utils_Tuple2(_Utils_chr(string[0]), string.slice(1))
		)
		: $elm$core$Maybe$Nothing;
}

var _String_append = F2(function(a, b)
{
	return a + b;
});

function _String_length(str)
{
	return str.length;
}

var _String_map = F2(function(func, string)
{
	var len = string.length;
	var array = new Array(len);
	var i = 0;
	while (i < len)
	{
		var word = string.charCodeAt(i);
		if (0xD800 <= word && word <= 0xDBFF)
		{
			array[i] = func(_Utils_chr(string[i] + string[i+1]));
			i += 2;
			continue;
		}
		array[i] = func(_Utils_chr(string[i]));
		i++;
	}
	return array.join('');
});

var _String_filter = F2(function(isGood, str)
{
	var arr = [];
	var len = str.length;
	var i = 0;
	while (i < len)
	{
		var char = str[i];
		var word = str.charCodeAt(i);
		i++;
		if (0xD800 <= word && word <= 0xDBFF)
		{
			char += str[i];
			i++;
		}

		if (isGood(_Utils_chr(char)))
		{
			arr.push(char);
		}
	}
	return arr.join('');
});

function _String_reverse(str)
{
	var len = str.length;
	var arr = new Array(len);
	var i = 0;
	while (i < len)
	{
		var word = str.charCodeAt(i);
		if (0xD800 <= word && word <= 0xDBFF)
		{
			arr[len - i] = str[i + 1];
			i++;
			arr[len - i] = str[i - 1];
			i++;
		}
		else
		{
			arr[len - i] = str[i];
			i++;
		}
	}
	return arr.join('');
}

var _String_foldl = F3(function(func, state, string)
{
	var len = string.length;
	var i = 0;
	while (i < len)
	{
		var char = string[i];
		var word = string.charCodeAt(i);
		i++;
		if (0xD800 <= word && word <= 0xDBFF)
		{
			char += string[i];
			i++;
		}
		state = A2(func, _Utils_chr(char), state);
	}
	return state;
});

var _String_foldr = F3(function(func, state, string)
{
	var i = string.length;
	while (i--)
	{
		var char = string[i];
		var word = string.charCodeAt(i);
		if (0xDC00 <= word && word <= 0xDFFF)
		{
			i--;
			char = string[i] + char;
		}
		state = A2(func, _Utils_chr(char), state);
	}
	return state;
});

var _String_split = F2(function(sep, str)
{
	return str.split(sep);
});

var _String_join = F2(function(sep, strs)
{
	return strs.join(sep);
});

var _String_slice = F3(function(start, end, str) {
	return str.slice(start, end);
});

function _String_trim(str)
{
	return str.trim();
}

function _String_trimLeft(str)
{
	return str.replace(/^\s+/, '');
}

function _String_trimRight(str)
{
	return str.replace(/\s+$/, '');
}

function _String_words(str)
{
	return _List_fromArray(str.trim().split(/\s+/g));
}

function _String_lines(str)
{
	return _List_fromArray(str.split(/\r\n|\r|\n/g));
}

function _String_toUpper(str)
{
	return str.toUpperCase();
}

function _String_toLower(str)
{
	return str.toLowerCase();
}

var _String_any = F2(function(isGood, string)
{
	var i = string.length;
	while (i--)
	{
		var char = string[i];
		var word = string.charCodeAt(i);
		if (0xDC00 <= word && word <= 0xDFFF)
		{
			i--;
			char = string[i] + char;
		}
		if (isGood(_Utils_chr(char)))
		{
			return true;
		}
	}
	return false;
});

var _String_all = F2(function(isGood, string)
{
	var i = string.length;
	while (i--)
	{
		var char = string[i];
		var word = string.charCodeAt(i);
		if (0xDC00 <= word && word <= 0xDFFF)
		{
			i--;
			char = string[i] + char;
		}
		if (!isGood(_Utils_chr(char)))
		{
			return false;
		}
	}
	return true;
});

var _String_contains = F2(function(sub, str)
{
	return str.indexOf(sub) > -1;
});

var _String_startsWith = F2(function(sub, str)
{
	return str.indexOf(sub) === 0;
});

var _String_endsWith = F2(function(sub, str)
{
	return str.length >= sub.length &&
		str.lastIndexOf(sub) === str.length - sub.length;
});

var _String_indexes = F2(function(sub, str)
{
	var subLen = sub.length;

	if (subLen < 1)
	{
		return _List_Nil;
	}

	var i = 0;
	var is = [];

	while ((i = str.indexOf(sub, i)) > -1)
	{
		is.push(i);
		i = i + subLen;
	}

	return _List_fromArray(is);
});


// TO STRING

function _String_fromNumber(number)
{
	return number + '';
}


// INT CONVERSIONS

function _String_toInt(str)
{
	var total = 0;
	var code0 = str.charCodeAt(0);
	var start = code0 == 0x2B /* + */ || code0 == 0x2D /* - */ ? 1 : 0;

	for (var i = start; i < str.length; ++i)
	{
		var code = str.charCodeAt(i);
		if (code < 0x30 || 0x39 < code)
		{
			return $elm$core$Maybe$Nothing;
		}
		total = 10 * total + code - 0x30;
	}

	return i == start
		? $elm$core$Maybe$Nothing
		: $elm$core$Maybe$Just(code0 == 0x2D ? -total : total);
}


// FLOAT CONVERSIONS

function _String_toFloat(s)
{
	// check if it is a hex, octal, or binary number
	if (s.length === 0 || /[\sxbo]/.test(s))
	{
		return $elm$core$Maybe$Nothing;
	}
	var n = +s;
	// faster isNaN check
	return n === n ? $elm$core$Maybe$Just(n) : $elm$core$Maybe$Nothing;
}

function _String_fromList(chars)
{
	return _List_toArray(chars).join('');
}




function _Char_toCode(char)
{
	var code = char.charCodeAt(0);
	if (0xD800 <= code && code <= 0xDBFF)
	{
		return (code - 0xD800) * 0x400 + char.charCodeAt(1) - 0xDC00 + 0x10000
	}
	return code;
}

function _Char_fromCode(code)
{
	return _Utils_chr(
		(code < 0 || 0x10FFFF < code)
			? '\uFFFD'
			:
		(code <= 0xFFFF)
			? String.fromCharCode(code)
			:
		(code -= 0x10000,
			String.fromCharCode(Math.floor(code / 0x400) + 0xD800, code % 0x400 + 0xDC00)
		)
	);
}

function _Char_toUpper(char)
{
	return _Utils_chr(char.toUpperCase());
}

function _Char_toLower(char)
{
	return _Utils_chr(char.toLowerCase());
}

function _Char_toLocaleUpper(char)
{
	return _Utils_chr(char.toLocaleUpperCase());
}

function _Char_toLocaleLower(char)
{
	return _Utils_chr(char.toLocaleLowerCase());
}



/**/
function _Json_errorToString(error)
{
	return $elm$json$Json$Decode$errorToString(error);
}
//*/


// CORE DECODERS

function _Json_succeed(msg)
{
	return {
		$: 0,
		a: msg
	};
}

function _Json_fail(msg)
{
	return {
		$: 1,
		a: msg
	};
}

function _Json_decodePrim(decoder)
{
	return { $: 2, b: decoder };
}

var _Json_decodeInt = _Json_decodePrim(function(value) {
	return (typeof value !== 'number')
		? _Json_expecting('an INT', value)
		:
	(-2147483647 < value && value < 2147483647 && (value | 0) === value)
		? $elm$core$Result$Ok(value)
		:
	(isFinite(value) && !(value % 1))
		? $elm$core$Result$Ok(value)
		: _Json_expecting('an INT', value);
});

var _Json_decodeBool = _Json_decodePrim(function(value) {
	return (typeof value === 'boolean')
		? $elm$core$Result$Ok(value)
		: _Json_expecting('a BOOL', value);
});

var _Json_decodeFloat = _Json_decodePrim(function(value) {
	return (typeof value === 'number')
		? $elm$core$Result$Ok(value)
		: _Json_expecting('a FLOAT', value);
});

var _Json_decodeValue = _Json_decodePrim(function(value) {
	return $elm$core$Result$Ok(_Json_wrap(value));
});

var _Json_decodeString = _Json_decodePrim(function(value) {
	return (typeof value === 'string')
		? $elm$core$Result$Ok(value)
		: (value instanceof String)
			? $elm$core$Result$Ok(value + '')
			: _Json_expecting('a STRING', value);
});

function _Json_decodeList(decoder) { return { $: 3, b: decoder }; }
function _Json_decodeArray(decoder) { return { $: 4, b: decoder }; }

function _Json_decodeNull(value) { return { $: 5, c: value }; }

var _Json_decodeField = F2(function(field, decoder)
{
	return {
		$: 6,
		d: field,
		b: decoder
	};
});

var _Json_decodeIndex = F2(function(index, decoder)
{
	return {
		$: 7,
		e: index,
		b: decoder
	};
});

function _Json_decodeKeyValuePairs(decoder)
{
	return {
		$: 8,
		b: decoder
	};
}

function _Json_mapMany(f, decoders)
{
	return {
		$: 9,
		f: f,
		g: decoders
	};
}

var _Json_andThen = F2(function(callback, decoder)
{
	return {
		$: 10,
		b: decoder,
		h: callback
	};
});

function _Json_oneOf(decoders)
{
	return {
		$: 11,
		g: decoders
	};
}


// DECODING OBJECTS

var _Json_map1 = F2(function(f, d1)
{
	return _Json_mapMany(f, [d1]);
});

var _Json_map2 = F3(function(f, d1, d2)
{
	return _Json_mapMany(f, [d1, d2]);
});

var _Json_map3 = F4(function(f, d1, d2, d3)
{
	return _Json_mapMany(f, [d1, d2, d3]);
});

var _Json_map4 = F5(function(f, d1, d2, d3, d4)
{
	return _Json_mapMany(f, [d1, d2, d3, d4]);
});

var _Json_map5 = F6(function(f, d1, d2, d3, d4, d5)
{
	return _Json_mapMany(f, [d1, d2, d3, d4, d5]);
});

var _Json_map6 = F7(function(f, d1, d2, d3, d4, d5, d6)
{
	return _Json_mapMany(f, [d1, d2, d3, d4, d5, d6]);
});

var _Json_map7 = F8(function(f, d1, d2, d3, d4, d5, d6, d7)
{
	return _Json_mapMany(f, [d1, d2, d3, d4, d5, d6, d7]);
});

var _Json_map8 = F9(function(f, d1, d2, d3, d4, d5, d6, d7, d8)
{
	return _Json_mapMany(f, [d1, d2, d3, d4, d5, d6, d7, d8]);
});


// DECODE

var _Json_runOnString = F2(function(decoder, string)
{
	try
	{
		var value = JSON.parse(string);
		return _Json_runHelp(decoder, value);
	}
	catch (e)
	{
		return $elm$core$Result$Err(A2($elm$json$Json$Decode$Failure, 'This is not valid JSON! ' + e.message, _Json_wrap(string)));
	}
});

var _Json_run = F2(function(decoder, value)
{
	return _Json_runHelp(decoder, _Json_unwrap(value));
});

function _Json_runHelp(decoder, value)
{
	switch (decoder.$)
	{
		case 2:
			return decoder.b(value);

		case 5:
			return (value === null)
				? $elm$core$Result$Ok(decoder.c)
				: _Json_expecting('null', value);

		case 3:
			if (!_Json_isArray(value))
			{
				return _Json_expecting('a LIST', value);
			}
			return _Json_runArrayDecoder(decoder.b, value, _List_fromArray);

		case 4:
			if (!_Json_isArray(value))
			{
				return _Json_expecting('an ARRAY', value);
			}
			return _Json_runArrayDecoder(decoder.b, value, _Json_toElmArray);

		case 6:
			var field = decoder.d;
			if (typeof value !== 'object' || value === null || !(field in value))
			{
				return _Json_expecting('an OBJECT with a field named `' + field + '`', value);
			}
			var result = _Json_runHelp(decoder.b, value[field]);
			return ($elm$core$Result$isOk(result)) ? result : $elm$core$Result$Err(A2($elm$json$Json$Decode$Field, field, result.a));

		case 7:
			var index = decoder.e;
			if (!_Json_isArray(value))
			{
				return _Json_expecting('an ARRAY', value);
			}
			if (index >= value.length)
			{
				return _Json_expecting('a LONGER array. Need index ' + index + ' but only see ' + value.length + ' entries', value);
			}
			var result = _Json_runHelp(decoder.b, value[index]);
			return ($elm$core$Result$isOk(result)) ? result : $elm$core$Result$Err(A2($elm$json$Json$Decode$Index, index, result.a));

		case 8:
			if (typeof value !== 'object' || value === null || _Json_isArray(value))
			{
				return _Json_expecting('an OBJECT', value);
			}

			var keyValuePairs = _List_Nil;
			// TODO test perf of Object.keys and switch when support is good enough
			for (var key in value)
			{
				if (value.hasOwnProperty(key))
				{
					var result = _Json_runHelp(decoder.b, value[key]);
					if (!$elm$core$Result$isOk(result))
					{
						return $elm$core$Result$Err(A2($elm$json$Json$Decode$Field, key, result.a));
					}
					keyValuePairs = _List_Cons(_Utils_Tuple2(key, result.a), keyValuePairs);
				}
			}
			return $elm$core$Result$Ok($elm$core$List$reverse(keyValuePairs));

		case 9:
			var answer = decoder.f;
			var decoders = decoder.g;
			for (var i = 0; i < decoders.length; i++)
			{
				var result = _Json_runHelp(decoders[i], value);
				if (!$elm$core$Result$isOk(result))
				{
					return result;
				}
				answer = answer(result.a);
			}
			return $elm$core$Result$Ok(answer);

		case 10:
			var result = _Json_runHelp(decoder.b, value);
			return (!$elm$core$Result$isOk(result))
				? result
				: _Json_runHelp(decoder.h(result.a), value);

		case 11:
			var errors = _List_Nil;
			for (var temp = decoder.g; temp.b; temp = temp.b) // WHILE_CONS
			{
				var result = _Json_runHelp(temp.a, value);
				if ($elm$core$Result$isOk(result))
				{
					return result;
				}
				errors = _List_Cons(result.a, errors);
			}
			return $elm$core$Result$Err($elm$json$Json$Decode$OneOf($elm$core$List$reverse(errors)));

		case 1:
			return $elm$core$Result$Err(A2($elm$json$Json$Decode$Failure, decoder.a, _Json_wrap(value)));

		case 0:
			return $elm$core$Result$Ok(decoder.a);
	}
}

function _Json_runArrayDecoder(decoder, value, toElmValue)
{
	var len = value.length;
	var array = new Array(len);
	for (var i = 0; i < len; i++)
	{
		var result = _Json_runHelp(decoder, value[i]);
		if (!$elm$core$Result$isOk(result))
		{
			return $elm$core$Result$Err(A2($elm$json$Json$Decode$Index, i, result.a));
		}
		array[i] = result.a;
	}
	return $elm$core$Result$Ok(toElmValue(array));
}

function _Json_isArray(value)
{
	return Array.isArray(value) || (typeof FileList !== 'undefined' && value instanceof FileList);
}

function _Json_toElmArray(array)
{
	return A2($elm$core$Array$initialize, array.length, function(i) { return array[i]; });
}

function _Json_expecting(type, value)
{
	return $elm$core$Result$Err(A2($elm$json$Json$Decode$Failure, 'Expecting ' + type, _Json_wrap(value)));
}


// EQUALITY

function _Json_equality(x, y)
{
	if (x === y)
	{
		return true;
	}

	if (x.$ !== y.$)
	{
		return false;
	}

	switch (x.$)
	{
		case 0:
		case 1:
			return x.a === y.a;

		case 2:
			return x.b === y.b;

		case 5:
			return x.c === y.c;

		case 3:
		case 4:
		case 8:
			return _Json_equality(x.b, y.b);

		case 6:
			return x.d === y.d && _Json_equality(x.b, y.b);

		case 7:
			return x.e === y.e && _Json_equality(x.b, y.b);

		case 9:
			return x.f === y.f && _Json_listEquality(x.g, y.g);

		case 10:
			return x.h === y.h && _Json_equality(x.b, y.b);

		case 11:
			return _Json_listEquality(x.g, y.g);
	}
}

function _Json_listEquality(aDecoders, bDecoders)
{
	var len = aDecoders.length;
	if (len !== bDecoders.length)
	{
		return false;
	}
	for (var i = 0; i < len; i++)
	{
		if (!_Json_equality(aDecoders[i], bDecoders[i]))
		{
			return false;
		}
	}
	return true;
}


// ENCODE

var _Json_encode = F2(function(indentLevel, value)
{
	return JSON.stringify(_Json_unwrap(value), null, indentLevel) + '';
});

function _Json_wrap(value) { return { $: 0, a: value }; }
function _Json_unwrap(value) { return value.a; }

function _Json_wrap_UNUSED(value) { return value; }
function _Json_unwrap_UNUSED(value) { return value; }

function _Json_emptyArray() { return []; }
function _Json_emptyObject() { return {}; }

var _Json_addField = F3(function(key, value, object)
{
	object[key] = _Json_unwrap(value);
	return object;
});

function _Json_addEntry(func)
{
	return F2(function(entry, array)
	{
		array.push(_Json_unwrap(func(entry)));
		return array;
	});
}

var _Json_encodeNull = _Json_wrap(null);



// TASKS

function _Scheduler_succeed(value)
{
	return {
		$: 0,
		a: value
	};
}

function _Scheduler_fail(error)
{
	return {
		$: 1,
		a: error
	};
}

function _Scheduler_binding(callback)
{
	return {
		$: 2,
		b: callback,
		c: null
	};
}

var _Scheduler_andThen = F2(function(callback, task)
{
	return {
		$: 3,
		b: callback,
		d: task
	};
});

var _Scheduler_onError = F2(function(callback, task)
{
	return {
		$: 4,
		b: callback,
		d: task
	};
});

function _Scheduler_receive(callback)
{
	return {
		$: 5,
		b: callback
	};
}


// PROCESSES

var _Scheduler_guid = 0;

function _Scheduler_rawSpawn(task)
{
	var proc = {
		$: 0,
		e: _Scheduler_guid++,
		f: task,
		g: null,
		h: []
	};

	_Scheduler_enqueue(proc);

	return proc;
}

function _Scheduler_spawn(task)
{
	return _Scheduler_binding(function(callback) {
		callback(_Scheduler_succeed(_Scheduler_rawSpawn(task)));
	});
}

function _Scheduler_rawSend(proc, msg)
{
	proc.h.push(msg);
	_Scheduler_enqueue(proc);
}

var _Scheduler_send = F2(function(proc, msg)
{
	return _Scheduler_binding(function(callback) {
		_Scheduler_rawSend(proc, msg);
		callback(_Scheduler_succeed(_Utils_Tuple0));
	});
});

function _Scheduler_kill(proc)
{
	return _Scheduler_binding(function(callback) {
		var task = proc.f;
		if (task.$ === 2 && task.c)
		{
			task.c();
		}

		proc.f = null;

		callback(_Scheduler_succeed(_Utils_Tuple0));
	});
}


/* STEP PROCESSES

type alias Process =
  { $ : tag
  , id : unique_id
  , root : Task
  , stack : null | { $: SUCCEED | FAIL, a: callback, b: stack }
  , mailbox : [msg]
  }

*/


var _Scheduler_working = false;
var _Scheduler_queue = [];


function _Scheduler_enqueue(proc)
{
	_Scheduler_queue.push(proc);
	if (_Scheduler_working)
	{
		return;
	}
	_Scheduler_working = true;
	while (proc = _Scheduler_queue.shift())
	{
		_Scheduler_step(proc);
	}
	_Scheduler_working = false;
}


function _Scheduler_step(proc)
{
	while (proc.f)
	{
		var rootTag = proc.f.$;
		if (rootTag === 0 || rootTag === 1)
		{
			while (proc.g && proc.g.$ !== rootTag)
			{
				proc.g = proc.g.i;
			}
			if (!proc.g)
			{
				return;
			}
			proc.f = proc.g.b(proc.f.a);
			proc.g = proc.g.i;
		}
		else if (rootTag === 2)
		{
			proc.f.c = proc.f.b(function(newRoot) {
				proc.f = newRoot;
				_Scheduler_enqueue(proc);
			});
			return;
		}
		else if (rootTag === 5)
		{
			if (proc.h.length === 0)
			{
				return;
			}
			proc.f = proc.f.b(proc.h.shift());
		}
		else // if (rootTag === 3 || rootTag === 4)
		{
			proc.g = {
				$: rootTag === 3 ? 0 : 1,
				b: proc.f.b,
				i: proc.g
			};
			proc.f = proc.f.d;
		}
	}
}



function _Process_sleep(time)
{
	return _Scheduler_binding(function(callback) {
		var id = setTimeout(function() {
			callback(_Scheduler_succeed(_Utils_Tuple0));
		}, time);

		return function() { clearTimeout(id); };
	});
}




// PROGRAMS


var _Platform_worker = F4(function(impl, flagDecoder, debugMetadata, args)
{
	return _Platform_initialize(
		flagDecoder,
		args,
		impl.init,
		impl.update,
		impl.subscriptions,
		function() { return function() {} }
	);
});



// INITIALIZE A PROGRAM


function _Platform_initialize(flagDecoder, args, init, update, subscriptions, stepperBuilder)
{
	var result = A2(_Json_run, flagDecoder, _Json_wrap(args ? args['flags'] : undefined));
	$elm$core$Result$isOk(result) || _Debug_crash(2 /**/, _Json_errorToString(result.a) /**/);
	var managers = {};
	var initPair = init(result.a);
	var model = initPair.a;
	var stepper = stepperBuilder(sendToApp, model);
	var ports = _Platform_setupEffects(managers, sendToApp);

	function sendToApp(msg, viewMetadata)
	{
		var pair = A2(update, msg, model);
		stepper(model = pair.a, viewMetadata);
		_Platform_enqueueEffects(managers, pair.b, subscriptions(model));
	}

	_Platform_enqueueEffects(managers, initPair.b, subscriptions(model));

	return ports ? { ports: ports } : {};
}



// TRACK PRELOADS
//
// This is used by code in elm/browser and elm/http
// to register any HTTP requests that are triggered by init.
//


var _Platform_preload;


function _Platform_registerPreload(url)
{
	_Platform_preload.add(url);
}



// EFFECT MANAGERS


var _Platform_effectManagers = {};


function _Platform_setupEffects(managers, sendToApp)
{
	var ports;

	// setup all necessary effect managers
	for (var key in _Platform_effectManagers)
	{
		var manager = _Platform_effectManagers[key];

		if (manager.a)
		{
			ports = ports || {};
			ports[key] = manager.a(key, sendToApp);
		}

		managers[key] = _Platform_instantiateManager(manager, sendToApp);
	}

	return ports;
}


function _Platform_createManager(init, onEffects, onSelfMsg, cmdMap, subMap)
{
	return {
		b: init,
		c: onEffects,
		d: onSelfMsg,
		e: cmdMap,
		f: subMap
	};
}


function _Platform_instantiateManager(info, sendToApp)
{
	var router = {
		g: sendToApp,
		h: undefined
	};

	var onEffects = info.c;
	var onSelfMsg = info.d;
	var cmdMap = info.e;
	var subMap = info.f;

	function loop(state)
	{
		return A2(_Scheduler_andThen, loop, _Scheduler_receive(function(msg)
		{
			var value = msg.a;

			if (msg.$ === 0)
			{
				return A3(onSelfMsg, router, value, state);
			}

			return cmdMap && subMap
				? A4(onEffects, router, value.i, value.j, state)
				: A3(onEffects, router, cmdMap ? value.i : value.j, state);
		}));
	}

	return router.h = _Scheduler_rawSpawn(A2(_Scheduler_andThen, loop, info.b));
}



// ROUTING


var _Platform_sendToApp = F2(function(router, msg)
{
	return _Scheduler_binding(function(callback)
	{
		router.g(msg);
		callback(_Scheduler_succeed(_Utils_Tuple0));
	});
});


var _Platform_sendToSelf = F2(function(router, msg)
{
	return A2(_Scheduler_send, router.h, {
		$: 0,
		a: msg
	});
});



// BAGS


function _Platform_leaf(home)
{
	return function(value)
	{
		return {
			$: 1,
			k: home,
			l: value
		};
	};
}


function _Platform_batch(list)
{
	return {
		$: 2,
		m: list
	};
}


var _Platform_map = F2(function(tagger, bag)
{
	return {
		$: 3,
		n: tagger,
		o: bag
	}
});



// PIPE BAGS INTO EFFECT MANAGERS
//
// Effects must be queued!
//
// Say your init contains a synchronous command, like Time.now or Time.here
//
//   - This will produce a batch of effects (FX_1)
//   - The synchronous task triggers the subsequent `update` call
//   - This will produce a batch of effects (FX_2)
//
// If we just start dispatching FX_2, subscriptions from FX_2 can be processed
// before subscriptions from FX_1. No good! Earlier versions of this code had
// this problem, leading to these reports:
//
//   https://github.com/elm/core/issues/980
//   https://github.com/elm/core/pull/981
//   https://github.com/elm/compiler/issues/1776
//
// The queue is necessary to avoid ordering issues for synchronous commands.


// Why use true/false here? Why not just check the length of the queue?
// The goal is to detect "are we currently dispatching effects?" If we
// are, we need to bail and let the ongoing while loop handle things.
//
// Now say the queue has 1 element. When we dequeue the final element,
// the queue will be empty, but we are still actively dispatching effects.
// So you could get queue jumping in a really tricky category of cases.
//
var _Platform_effectsQueue = [];
var _Platform_effectsActive = false;


function _Platform_enqueueEffects(managers, cmdBag, subBag)
{
	_Platform_effectsQueue.push({ p: managers, q: cmdBag, r: subBag });

	if (_Platform_effectsActive) return;

	_Platform_effectsActive = true;
	for (var fx; fx = _Platform_effectsQueue.shift(); )
	{
		_Platform_dispatchEffects(fx.p, fx.q, fx.r);
	}
	_Platform_effectsActive = false;
}


function _Platform_dispatchEffects(managers, cmdBag, subBag)
{
	var effectsDict = {};
	_Platform_gatherEffects(true, cmdBag, effectsDict, null);
	_Platform_gatherEffects(false, subBag, effectsDict, null);

	for (var home in managers)
	{
		_Scheduler_rawSend(managers[home], {
			$: 'fx',
			a: effectsDict[home] || { i: _List_Nil, j: _List_Nil }
		});
	}
}


function _Platform_gatherEffects(isCmd, bag, effectsDict, taggers)
{
	switch (bag.$)
	{
		case 1:
			var home = bag.k;
			var effect = _Platform_toEffect(isCmd, home, taggers, bag.l);
			effectsDict[home] = _Platform_insert(isCmd, effect, effectsDict[home]);
			return;

		case 2:
			for (var list = bag.m; list.b; list = list.b) // WHILE_CONS
			{
				_Platform_gatherEffects(isCmd, list.a, effectsDict, taggers);
			}
			return;

		case 3:
			_Platform_gatherEffects(isCmd, bag.o, effectsDict, {
				s: bag.n,
				t: taggers
			});
			return;
	}
}


function _Platform_toEffect(isCmd, home, taggers, value)
{
	function applyTaggers(x)
	{
		for (var temp = taggers; temp; temp = temp.t)
		{
			x = temp.s(x);
		}
		return x;
	}

	var map = isCmd
		? _Platform_effectManagers[home].e
		: _Platform_effectManagers[home].f;

	return A2(map, applyTaggers, value)
}


function _Platform_insert(isCmd, newEffect, effects)
{
	effects = effects || { i: _List_Nil, j: _List_Nil };

	isCmd
		? (effects.i = _List_Cons(newEffect, effects.i))
		: (effects.j = _List_Cons(newEffect, effects.j));

	return effects;
}



// PORTS


function _Platform_checkPortName(name)
{
	if (_Platform_effectManagers[name])
	{
		_Debug_crash(3, name)
	}
}



// OUTGOING PORTS


function _Platform_outgoingPort(name, converter)
{
	_Platform_checkPortName(name);
	_Platform_effectManagers[name] = {
		e: _Platform_outgoingPortMap,
		u: converter,
		a: _Platform_setupOutgoingPort
	};
	return _Platform_leaf(name);
}


var _Platform_outgoingPortMap = F2(function(tagger, value) { return value; });


function _Platform_setupOutgoingPort(name)
{
	var subs = [];
	var converter = _Platform_effectManagers[name].u;

	// CREATE MANAGER

	var init = _Process_sleep(0);

	_Platform_effectManagers[name].b = init;
	_Platform_effectManagers[name].c = F3(function(router, cmdList, state)
	{
		for ( ; cmdList.b; cmdList = cmdList.b) // WHILE_CONS
		{
			// grab a separate reference to subs in case unsubscribe is called
			var currentSubs = subs;
			var value = _Json_unwrap(converter(cmdList.a));
			for (var i = 0; i < currentSubs.length; i++)
			{
				currentSubs[i](value);
			}
		}
		return init;
	});

	// PUBLIC API

	function subscribe(callback)
	{
		subs.push(callback);
	}

	function unsubscribe(callback)
	{
		// copy subs into a new array in case unsubscribe is called within a
		// subscribed callback
		subs = subs.slice();
		var index = subs.indexOf(callback);
		if (index >= 0)
		{
			subs.splice(index, 1);
		}
	}

	return {
		subscribe: subscribe,
		unsubscribe: unsubscribe
	};
}



// INCOMING PORTS


function _Platform_incomingPort(name, converter)
{
	_Platform_checkPortName(name);
	_Platform_effectManagers[name] = {
		f: _Platform_incomingPortMap,
		u: converter,
		a: _Platform_setupIncomingPort
	};
	return _Platform_leaf(name);
}


var _Platform_incomingPortMap = F2(function(tagger, finalTagger)
{
	return function(value)
	{
		return tagger(finalTagger(value));
	};
});


function _Platform_setupIncomingPort(name, sendToApp)
{
	var subs = _List_Nil;
	var converter = _Platform_effectManagers[name].u;

	// CREATE MANAGER

	var init = _Scheduler_succeed(null);

	_Platform_effectManagers[name].b = init;
	_Platform_effectManagers[name].c = F3(function(router, subList, state)
	{
		subs = subList;
		return init;
	});

	// PUBLIC API

	function send(incomingValue)
	{
		var result = A2(_Json_run, converter, _Json_wrap(incomingValue));

		$elm$core$Result$isOk(result) || _Debug_crash(4, name, result.a);

		var value = result.a;
		for (var temp = subs; temp.b; temp = temp.b) // WHILE_CONS
		{
			sendToApp(temp.a(value));
		}
	}

	return { send: send };
}



// EXPORT ELM MODULES
//
// Have DEBUG and PROD versions so that we can (1) give nicer errors in
// debug mode and (2) not pay for the bits needed for that in prod mode.
//


function _Platform_export_UNUSED(exports)
{
	scope['Elm']
		? _Platform_mergeExportsProd(scope['Elm'], exports)
		: scope['Elm'] = exports;
}


function _Platform_mergeExportsProd(obj, exports)
{
	for (var name in exports)
	{
		(name in obj)
			? (name == 'init')
				? _Debug_crash(6)
				: _Platform_mergeExportsProd(obj[name], exports[name])
			: (obj[name] = exports[name]);
	}
}


function _Platform_export(exports)
{
	scope['Elm']
		? _Platform_mergeExportsDebug('Elm', scope['Elm'], exports)
		: scope['Elm'] = exports;
}


function _Platform_mergeExportsDebug(moduleName, obj, exports)
{
	for (var name in exports)
	{
		(name in obj)
			? (name == 'init')
				? _Debug_crash(6, moduleName)
				: _Platform_mergeExportsDebug(moduleName + '.' + name, obj[name], exports[name])
			: (obj[name] = exports[name]);
	}
}



var _Bitwise_and = F2(function(a, b)
{
	return a & b;
});

var _Bitwise_or = F2(function(a, b)
{
	return a | b;
});

var _Bitwise_xor = F2(function(a, b)
{
	return a ^ b;
});

function _Bitwise_complement(a)
{
	return ~a;
};

var _Bitwise_shiftLeftBy = F2(function(offset, a)
{
	return a << offset;
});

var _Bitwise_shiftRightBy = F2(function(offset, a)
{
	return a >> offset;
});

var _Bitwise_shiftRightZfBy = F2(function(offset, a)
{
	return a >>> offset;
});
var $elm$core$List$cons = _List_cons;
var $elm$core$Elm$JsArray$foldr = _JsArray_foldr;
var $elm$core$Array$foldr = F3(
	function (func, baseCase, _v0) {
		var tree = _v0.c;
		var tail = _v0.d;
		var helper = F2(
			function (node, acc) {
				if (node.$ === 'SubTree') {
					var subTree = node.a;
					return A3($elm$core$Elm$JsArray$foldr, helper, acc, subTree);
				} else {
					var values = node.a;
					return A3($elm$core$Elm$JsArray$foldr, func, acc, values);
				}
			});
		return A3(
			$elm$core$Elm$JsArray$foldr,
			helper,
			A3($elm$core$Elm$JsArray$foldr, func, baseCase, tail),
			tree);
	});
var $elm$core$Array$toList = function (array) {
	return A3($elm$core$Array$foldr, $elm$core$List$cons, _List_Nil, array);
};
var $elm$core$Dict$foldr = F3(
	function (func, acc, t) {
		foldr:
		while (true) {
			if (t.$ === 'RBEmpty_elm_builtin') {
				return acc;
			} else {
				var key = t.b;
				var value = t.c;
				var left = t.d;
				var right = t.e;
				var $temp$func = func,
					$temp$acc = A3(
					func,
					key,
					value,
					A3($elm$core$Dict$foldr, func, acc, right)),
					$temp$t = left;
				func = $temp$func;
				acc = $temp$acc;
				t = $temp$t;
				continue foldr;
			}
		}
	});
var $elm$core$Dict$toList = function (dict) {
	return A3(
		$elm$core$Dict$foldr,
		F3(
			function (key, value, list) {
				return A2(
					$elm$core$List$cons,
					_Utils_Tuple2(key, value),
					list);
			}),
		_List_Nil,
		dict);
};
var $elm$core$Dict$keys = function (dict) {
	return A3(
		$elm$core$Dict$foldr,
		F3(
			function (key, value, keyList) {
				return A2($elm$core$List$cons, key, keyList);
			}),
		_List_Nil,
		dict);
};
var $elm$core$Set$toList = function (_v0) {
	var dict = _v0.a;
	return $elm$core$Dict$keys(dict);
};
var $elm$core$Basics$EQ = {$: 'EQ'};
var $elm$core$Basics$GT = {$: 'GT'};
var $elm$core$Basics$LT = {$: 'LT'};
var $elm$core$Result$Err = function (a) {
	return {$: 'Err', a: a};
};
var $elm$json$Json$Decode$Failure = F2(
	function (a, b) {
		return {$: 'Failure', a: a, b: b};
	});
var $elm$json$Json$Decode$Field = F2(
	function (a, b) {
		return {$: 'Field', a: a, b: b};
	});
var $elm$json$Json$Decode$Index = F2(
	function (a, b) {
		return {$: 'Index', a: a, b: b};
	});
var $elm$core$Result$Ok = function (a) {
	return {$: 'Ok', a: a};
};
var $elm$json$Json$Decode$OneOf = function (a) {
	return {$: 'OneOf', a: a};
};
var $elm$core$Basics$False = {$: 'False'};
var $elm$core$Basics$add = _Basics_add;
var $elm$core$Maybe$Just = function (a) {
	return {$: 'Just', a: a};
};
var $elm$core$Maybe$Nothing = {$: 'Nothing'};
var $elm$core$String$all = _String_all;
var $elm$core$Basics$and = _Basics_and;
var $elm$core$Basics$append = _Utils_append;
var $elm$json$Json$Encode$encode = _Json_encode;
var $elm$core$String$fromInt = _String_fromNumber;
var $elm$core$String$join = F2(
	function (sep, chunks) {
		return A2(
			_String_join,
			sep,
			_List_toArray(chunks));
	});
var $elm$core$String$split = F2(
	function (sep, string) {
		return _List_fromArray(
			A2(_String_split, sep, string));
	});
var $elm$json$Json$Decode$indent = function (str) {
	return A2(
		$elm$core$String$join,
		'\n    ',
		A2($elm$core$String$split, '\n', str));
};
var $elm$core$List$foldl = F3(
	function (func, acc, list) {
		foldl:
		while (true) {
			if (!list.b) {
				return acc;
			} else {
				var x = list.a;
				var xs = list.b;
				var $temp$func = func,
					$temp$acc = A2(func, x, acc),
					$temp$list = xs;
				func = $temp$func;
				acc = $temp$acc;
				list = $temp$list;
				continue foldl;
			}
		}
	});
var $elm$core$List$length = function (xs) {
	return A3(
		$elm$core$List$foldl,
		F2(
			function (_v0, i) {
				return i + 1;
			}),
		0,
		xs);
};
var $elm$core$List$map2 = _List_map2;
var $elm$core$Basics$le = _Utils_le;
var $elm$core$Basics$sub = _Basics_sub;
var $elm$core$List$rangeHelp = F3(
	function (lo, hi, list) {
		rangeHelp:
		while (true) {
			if (_Utils_cmp(lo, hi) < 1) {
				var $temp$lo = lo,
					$temp$hi = hi - 1,
					$temp$list = A2($elm$core$List$cons, hi, list);
				lo = $temp$lo;
				hi = $temp$hi;
				list = $temp$list;
				continue rangeHelp;
			} else {
				return list;
			}
		}
	});
var $elm$core$List$range = F2(
	function (lo, hi) {
		return A3($elm$core$List$rangeHelp, lo, hi, _List_Nil);
	});
var $elm$core$List$indexedMap = F2(
	function (f, xs) {
		return A3(
			$elm$core$List$map2,
			f,
			A2(
				$elm$core$List$range,
				0,
				$elm$core$List$length(xs) - 1),
			xs);
	});
var $elm$core$Char$toCode = _Char_toCode;
var $elm$core$Char$isLower = function (_char) {
	var code = $elm$core$Char$toCode(_char);
	return (97 <= code) && (code <= 122);
};
var $elm$core$Char$isUpper = function (_char) {
	var code = $elm$core$Char$toCode(_char);
	return (code <= 90) && (65 <= code);
};
var $elm$core$Basics$or = _Basics_or;
var $elm$core$Char$isAlpha = function (_char) {
	return $elm$core$Char$isLower(_char) || $elm$core$Char$isUpper(_char);
};
var $elm$core$Char$isDigit = function (_char) {
	var code = $elm$core$Char$toCode(_char);
	return (code <= 57) && (48 <= code);
};
var $elm$core$Char$isAlphaNum = function (_char) {
	return $elm$core$Char$isLower(_char) || ($elm$core$Char$isUpper(_char) || $elm$core$Char$isDigit(_char));
};
var $elm$core$List$reverse = function (list) {
	return A3($elm$core$List$foldl, $elm$core$List$cons, _List_Nil, list);
};
var $elm$core$String$uncons = _String_uncons;
var $elm$json$Json$Decode$errorOneOf = F2(
	function (i, error) {
		return '\n\n(' + ($elm$core$String$fromInt(i + 1) + (') ' + $elm$json$Json$Decode$indent(
			$elm$json$Json$Decode$errorToString(error))));
	});
var $elm$json$Json$Decode$errorToString = function (error) {
	return A2($elm$json$Json$Decode$errorToStringHelp, error, _List_Nil);
};
var $elm$json$Json$Decode$errorToStringHelp = F2(
	function (error, context) {
		errorToStringHelp:
		while (true) {
			switch (error.$) {
				case 'Field':
					var f = error.a;
					var err = error.b;
					var isSimple = function () {
						var _v1 = $elm$core$String$uncons(f);
						if (_v1.$ === 'Nothing') {
							return false;
						} else {
							var _v2 = _v1.a;
							var _char = _v2.a;
							var rest = _v2.b;
							return $elm$core$Char$isAlpha(_char) && A2($elm$core$String$all, $elm$core$Char$isAlphaNum, rest);
						}
					}();
					var fieldName = isSimple ? ('.' + f) : ('[\'' + (f + '\']'));
					var $temp$error = err,
						$temp$context = A2($elm$core$List$cons, fieldName, context);
					error = $temp$error;
					context = $temp$context;
					continue errorToStringHelp;
				case 'Index':
					var i = error.a;
					var err = error.b;
					var indexName = '[' + ($elm$core$String$fromInt(i) + ']');
					var $temp$error = err,
						$temp$context = A2($elm$core$List$cons, indexName, context);
					error = $temp$error;
					context = $temp$context;
					continue errorToStringHelp;
				case 'OneOf':
					var errors = error.a;
					if (!errors.b) {
						return 'Ran into a Json.Decode.oneOf with no possibilities' + function () {
							if (!context.b) {
								return '!';
							} else {
								return ' at json' + A2(
									$elm$core$String$join,
									'',
									$elm$core$List$reverse(context));
							}
						}();
					} else {
						if (!errors.b.b) {
							var err = errors.a;
							var $temp$error = err,
								$temp$context = context;
							error = $temp$error;
							context = $temp$context;
							continue errorToStringHelp;
						} else {
							var starter = function () {
								if (!context.b) {
									return 'Json.Decode.oneOf';
								} else {
									return 'The Json.Decode.oneOf at json' + A2(
										$elm$core$String$join,
										'',
										$elm$core$List$reverse(context));
								}
							}();
							var introduction = starter + (' failed in the following ' + ($elm$core$String$fromInt(
								$elm$core$List$length(errors)) + ' ways:'));
							return A2(
								$elm$core$String$join,
								'\n\n',
								A2(
									$elm$core$List$cons,
									introduction,
									A2($elm$core$List$indexedMap, $elm$json$Json$Decode$errorOneOf, errors)));
						}
					}
				default:
					var msg = error.a;
					var json = error.b;
					var introduction = function () {
						if (!context.b) {
							return 'Problem with the given value:\n\n';
						} else {
							return 'Problem with the value at json' + (A2(
								$elm$core$String$join,
								'',
								$elm$core$List$reverse(context)) + ':\n\n    ');
						}
					}();
					return introduction + ($elm$json$Json$Decode$indent(
						A2($elm$json$Json$Encode$encode, 4, json)) + ('\n\n' + msg));
			}
		}
	});
var $elm$core$Array$branchFactor = 32;
var $elm$core$Array$Array_elm_builtin = F4(
	function (a, b, c, d) {
		return {$: 'Array_elm_builtin', a: a, b: b, c: c, d: d};
	});
var $elm$core$Elm$JsArray$empty = _JsArray_empty;
var $elm$core$Basics$ceiling = _Basics_ceiling;
var $elm$core$Basics$fdiv = _Basics_fdiv;
var $elm$core$Basics$logBase = F2(
	function (base, number) {
		return _Basics_log(number) / _Basics_log(base);
	});
var $elm$core$Basics$toFloat = _Basics_toFloat;
var $elm$core$Array$shiftStep = $elm$core$Basics$ceiling(
	A2($elm$core$Basics$logBase, 2, $elm$core$Array$branchFactor));
var $elm$core$Array$empty = A4($elm$core$Array$Array_elm_builtin, 0, $elm$core$Array$shiftStep, $elm$core$Elm$JsArray$empty, $elm$core$Elm$JsArray$empty);
var $elm$core$Elm$JsArray$initialize = _JsArray_initialize;
var $elm$core$Array$Leaf = function (a) {
	return {$: 'Leaf', a: a};
};
var $elm$core$Basics$apL = F2(
	function (f, x) {
		return f(x);
	});
var $elm$core$Basics$apR = F2(
	function (x, f) {
		return f(x);
	});
var $elm$core$Basics$eq = _Utils_equal;
var $elm$core$Basics$floor = _Basics_floor;
var $elm$core$Elm$JsArray$length = _JsArray_length;
var $elm$core$Basics$gt = _Utils_gt;
var $elm$core$Basics$max = F2(
	function (x, y) {
		return (_Utils_cmp(x, y) > 0) ? x : y;
	});
var $elm$core$Basics$mul = _Basics_mul;
var $elm$core$Array$SubTree = function (a) {
	return {$: 'SubTree', a: a};
};
var $elm$core$Elm$JsArray$initializeFromList = _JsArray_initializeFromList;
var $elm$core$Array$compressNodes = F2(
	function (nodes, acc) {
		compressNodes:
		while (true) {
			var _v0 = A2($elm$core$Elm$JsArray$initializeFromList, $elm$core$Array$branchFactor, nodes);
			var node = _v0.a;
			var remainingNodes = _v0.b;
			var newAcc = A2(
				$elm$core$List$cons,
				$elm$core$Array$SubTree(node),
				acc);
			if (!remainingNodes.b) {
				return $elm$core$List$reverse(newAcc);
			} else {
				var $temp$nodes = remainingNodes,
					$temp$acc = newAcc;
				nodes = $temp$nodes;
				acc = $temp$acc;
				continue compressNodes;
			}
		}
	});
var $elm$core$Tuple$first = function (_v0) {
	var x = _v0.a;
	return x;
};
var $elm$core$Array$treeFromBuilder = F2(
	function (nodeList, nodeListSize) {
		treeFromBuilder:
		while (true) {
			var newNodeSize = $elm$core$Basics$ceiling(nodeListSize / $elm$core$Array$branchFactor);
			if (newNodeSize === 1) {
				return A2($elm$core$Elm$JsArray$initializeFromList, $elm$core$Array$branchFactor, nodeList).a;
			} else {
				var $temp$nodeList = A2($elm$core$Array$compressNodes, nodeList, _List_Nil),
					$temp$nodeListSize = newNodeSize;
				nodeList = $temp$nodeList;
				nodeListSize = $temp$nodeListSize;
				continue treeFromBuilder;
			}
		}
	});
var $elm$core$Array$builderToArray = F2(
	function (reverseNodeList, builder) {
		if (!builder.nodeListSize) {
			return A4(
				$elm$core$Array$Array_elm_builtin,
				$elm$core$Elm$JsArray$length(builder.tail),
				$elm$core$Array$shiftStep,
				$elm$core$Elm$JsArray$empty,
				builder.tail);
		} else {
			var treeLen = builder.nodeListSize * $elm$core$Array$branchFactor;
			var depth = $elm$core$Basics$floor(
				A2($elm$core$Basics$logBase, $elm$core$Array$branchFactor, treeLen - 1));
			var correctNodeList = reverseNodeList ? $elm$core$List$reverse(builder.nodeList) : builder.nodeList;
			var tree = A2($elm$core$Array$treeFromBuilder, correctNodeList, builder.nodeListSize);
			return A4(
				$elm$core$Array$Array_elm_builtin,
				$elm$core$Elm$JsArray$length(builder.tail) + treeLen,
				A2($elm$core$Basics$max, 5, depth * $elm$core$Array$shiftStep),
				tree,
				builder.tail);
		}
	});
var $elm$core$Basics$idiv = _Basics_idiv;
var $elm$core$Basics$lt = _Utils_lt;
var $elm$core$Array$initializeHelp = F5(
	function (fn, fromIndex, len, nodeList, tail) {
		initializeHelp:
		while (true) {
			if (fromIndex < 0) {
				return A2(
					$elm$core$Array$builderToArray,
					false,
					{nodeList: nodeList, nodeListSize: (len / $elm$core$Array$branchFactor) | 0, tail: tail});
			} else {
				var leaf = $elm$core$Array$Leaf(
					A3($elm$core$Elm$JsArray$initialize, $elm$core$Array$branchFactor, fromIndex, fn));
				var $temp$fn = fn,
					$temp$fromIndex = fromIndex - $elm$core$Array$branchFactor,
					$temp$len = len,
					$temp$nodeList = A2($elm$core$List$cons, leaf, nodeList),
					$temp$tail = tail;
				fn = $temp$fn;
				fromIndex = $temp$fromIndex;
				len = $temp$len;
				nodeList = $temp$nodeList;
				tail = $temp$tail;
				continue initializeHelp;
			}
		}
	});
var $elm$core$Basics$remainderBy = _Basics_remainderBy;
var $elm$core$Array$initialize = F2(
	function (len, fn) {
		if (len <= 0) {
			return $elm$core$Array$empty;
		} else {
			var tailLen = len % $elm$core$Array$branchFactor;
			var tail = A3($elm$core$Elm$JsArray$initialize, tailLen, len - tailLen, fn);
			var initialFromIndex = (len - tailLen) - $elm$core$Array$branchFactor;
			return A5($elm$core$Array$initializeHelp, fn, initialFromIndex, len, _List_Nil, tail);
		}
	});
var $elm$core$Basics$True = {$: 'True'};
var $elm$core$Result$isOk = function (result) {
	if (result.$ === 'Ok') {
		return true;
	} else {
		return false;
	}
};
var $elm$json$Json$Decode$andThen = _Json_andThen;
var $elm$json$Json$Decode$field = _Json_decodeField;
var $elm$json$Json$Decode$float = _Json_decodeFloat;
var $elm$json$Json$Decode$list = _Json_decodeList;
var $elm$json$Json$Decode$string = _Json_decodeString;
var $elm$json$Json$Decode$succeed = _Json_succeed;
var $elm$json$Json$Decode$value = _Json_decodeValue;
var $author$project$Reporter$incomingResult = _Platform_incomingPort(
	'incomingResult',
	A2(
		$elm$json$Json$Decode$andThen,
		function (result) {
			return A2(
				$elm$json$Json$Decode$andThen,
				function (logs) {
					return A2(
						$elm$json$Json$Decode$andThen,
						function (duration) {
							return $elm$json$Json$Decode$succeed(
								{duration: duration, logs: logs, result: result});
						},
						A2($elm$json$Json$Decode$field, 'duration', $elm$json$Json$Decode$float));
				},
				A2(
					$elm$json$Json$Decode$field,
					'logs',
					$elm$json$Json$Decode$list($elm$json$Json$Decode$string)));
		},
		A2($elm$json$Json$Decode$field, 'result', $elm$json$Json$Decode$value)));
var $elm$json$Json$Decode$int = _Json_decodeInt;
var $author$project$Reporter$restart = _Platform_incomingPort(
	'restart',
	A2(
		$elm$json$Json$Decode$andThen,
		function (testsCount) {
			return A2(
				$elm$json$Json$Decode$andThen,
				function (kind) {
					return $elm$json$Json$Decode$succeed(
						{kind: kind, testsCount: testsCount});
				},
				A2($elm$json$Json$Decode$field, 'kind', $elm$json$Json$Decode$string));
		},
		A2($elm$json$Json$Decode$field, 'testsCount', $elm$json$Json$Decode$int)));
var $elm$json$Json$Encode$int = _Json_wrap;
var $elm$json$Json$Encode$object = function (pairs) {
	return _Json_wrap(
		A3(
			$elm$core$List$foldl,
			F2(
				function (_v0, obj) {
					var k = _v0.a;
					var v = _v0.b;
					return A3(_Json_addField, k, v, obj);
				}),
			_Json_emptyObject(_Utils_Tuple0),
			pairs));
};
var $author$project$Reporter$signalFinished = _Platform_outgoingPort(
	'signalFinished',
	function ($) {
		return $elm$json$Json$Encode$object(
			_List_fromArray(
				[
					_Utils_Tuple2(
					'exitCode',
					$elm$json$Json$Encode$int($.exitCode)),
					_Utils_Tuple2(
					'testsCount',
					$elm$json$Json$Encode$int($.testsCount))
				]));
	});
var $elm$json$Json$Encode$string = _Json_wrap;
var $author$project$Reporter$stdout = _Platform_outgoingPort('stdout', $elm$json$Json$Encode$string);
var $mpizenberg$elm_test_runner$ElmTestRunner$Reporter$IncomingResult = function (a) {
	return {$: 'IncomingResult', a: a};
};
var $mpizenberg$elm_test_runner$ElmTestRunner$Reporter$Restart = function (a) {
	return {$: 'Restart', a: a};
};
var $elm$core$Platform$Sub$batch = _Platform_batch;
var $mpizenberg$elm_test_runner$ElmTestRunner$Reporter$Model = F5(
	function (ports, reporter, testsCount, testResults, kind) {
		return {kind: kind, ports: ports, reporter: reporter, testResults: testResults, testsCount: testsCount};
	});
var $mpizenberg$elm_test_runner$ElmTestRunner$SeededRunners$Plain = {$: 'Plain'};
var $mpizenberg$elm_test_runner$ElmTestRunner$Vendor$ConsoleText$Monochrome = {$: 'Monochrome'};
var $mpizenberg$elm_test_runner$ElmTestRunner$Vendor$ConsoleText$UseColor = {$: 'UseColor'};
var $elm$core$Basics$composeR = F3(
	function (f, g, x) {
		return g(
			f(x));
	});
var $elm$core$Maybe$map = F2(
	function (f, maybe) {
		if (maybe.$ === 'Just') {
			var value = maybe.a;
			return $elm$core$Maybe$Just(
				f(value));
		} else {
			return $elm$core$Maybe$Nothing;
		}
	});
var $mpizenberg$elm_test_runner$ElmTestRunner$Vendor$ConsoleText$Default = {$: 'Default'};
var $mpizenberg$elm_test_runner$ElmTestRunner$Vendor$ConsoleText$Normal = {$: 'Normal'};
var $mpizenberg$elm_test_runner$ElmTestRunner$Vendor$ConsoleText$Text = F2(
	function (a, b) {
		return {$: 'Text', a: a, b: b};
	});
var $mpizenberg$elm_test_runner$ElmTestRunner$Vendor$ConsoleText$plain = $mpizenberg$elm_test_runner$ElmTestRunner$Vendor$ConsoleText$Text(
	{background: $mpizenberg$elm_test_runner$ElmTestRunner$Vendor$ConsoleText$Default, foreground: $mpizenberg$elm_test_runner$ElmTestRunner$Vendor$ConsoleText$Default, modifiers: _List_Nil, style: $mpizenberg$elm_test_runner$ElmTestRunner$Vendor$ConsoleText$Normal});
var $elm$core$String$replace = F3(
	function (before, after, string) {
		return A2(
			$elm$core$String$join,
			after,
			A2($elm$core$String$split, before, string));
	});
var $mpizenberg$elm_test_runner$ElmTestRunner$Reporter$ConsoleColor$onBegin = F2(
	function (_v0, testsCount) {
		var seed = _v0.seed;
		var fuzzRuns = _v0.fuzzRuns;
		return $elm$core$Maybe$Just(
			$mpizenberg$elm_test_runner$ElmTestRunner$Vendor$ConsoleText$plain(
				A3(
					$elm$core$String$replace,
					'{{ fuzzRuns }}',
					$elm$core$String$fromInt(fuzzRuns),
					A3(
						$elm$core$String$replace,
						'{{ seed }}',
						$elm$core$String$fromInt(seed),
						A3(
							$elm$core$String$replace,
							'{{ testsCount }}',
							$elm$core$String$fromInt(testsCount),
							'\nRunning {{ testsCount }} tests. To reproduce these results later,\nrun elm-test-rs with --seed {{ seed }} and --fuzz {{ fuzzRuns }}\n\n')))));
	});
var $mpizenberg$elm_test_runner$ElmTestRunner$Vendor$ConsoleText$Texts = function (a) {
	return {$: 'Texts', a: a};
};
var $mpizenberg$elm_test_runner$ElmTestRunner$Vendor$ConsoleText$concat = $mpizenberg$elm_test_runner$ElmTestRunner$Vendor$ConsoleText$Texts;
var $mpizenberg$elm_test_runner$ElmTestRunner$Vendor$ConsoleText$Green = {$: 'Green'};
var $mpizenberg$elm_test_runner$ElmTestRunner$Vendor$ConsoleText$green = $mpizenberg$elm_test_runner$ElmTestRunner$Vendor$ConsoleText$Text(
	{background: $mpizenberg$elm_test_runner$ElmTestRunner$Vendor$ConsoleText$Default, foreground: $mpizenberg$elm_test_runner$ElmTestRunner$Vendor$ConsoleText$Green, modifiers: _List_Nil, style: $mpizenberg$elm_test_runner$ElmTestRunner$Vendor$ConsoleText$Normal});
var $mpizenberg$elm_test_runner$ElmTestRunner$Vendor$ConsoleText$Red = {$: 'Red'};
var $mpizenberg$elm_test_runner$ElmTestRunner$Vendor$ConsoleText$red = $mpizenberg$elm_test_runner$ElmTestRunner$Vendor$ConsoleText$Text(
	{background: $mpizenberg$elm_test_runner$ElmTestRunner$Vendor$ConsoleText$Default, foreground: $mpizenberg$elm_test_runner$ElmTestRunner$Vendor$ConsoleText$Red, modifiers: _List_Nil, style: $mpizenberg$elm_test_runner$ElmTestRunner$Vendor$ConsoleText$Normal});
var $elm$core$Basics$round = _Basics_round;
var $mpizenberg$elm_test_runner$ElmTestRunner$Vendor$ConsoleText$Dark = {$: 'Dark'};
var $elm$core$List$foldrHelper = F4(
	function (fn, acc, ctr, ls) {
		if (!ls.b) {
			return acc;
		} else {
			var a = ls.a;
			var r1 = ls.b;
			if (!r1.b) {
				return A2(fn, a, acc);
			} else {
				var b = r1.a;
				var r2 = r1.b;
				if (!r2.b) {
					return A2(
						fn,
						a,
						A2(fn, b, acc));
				} else {
					var c = r2.a;
					var r3 = r2.b;
					if (!r3.b) {
						return A2(
							fn,
							a,
							A2(
								fn,
								b,
								A2(fn, c, acc)));
					} else {
						var d = r3.a;
						var r4 = r3.b;
						var res = (ctr > 500) ? A3(
							$elm$core$List$foldl,
							fn,
							acc,
							$elm$core$List$reverse(r4)) : A4($elm$core$List$foldrHelper, fn, acc, ctr + 1, r4);
						return A2(
							fn,
							a,
							A2(
								fn,
								b,
								A2(
									fn,
									c,
									A2(fn, d, res))));
					}
				}
			}
		}
	});
var $elm$core$List$foldr = F3(
	function (fn, acc, ls) {
		return A4($elm$core$List$foldrHelper, fn, acc, 0, ls);
	});
var $elm$core$List$map = F2(
	function (f, xs) {
		return A3(
			$elm$core$List$foldr,
			F2(
				function (x, acc) {
					return A2(
						$elm$core$List$cons,
						f(x),
						acc);
				}),
			_List_Nil,
			xs);
	});
var $mpizenberg$elm_test_runner$ElmTestRunner$Vendor$ConsoleText$dark = function (txt) {
	if (txt.$ === 'Text') {
		var styles = txt.a;
		var str = txt.b;
		return A2(
			$mpizenberg$elm_test_runner$ElmTestRunner$Vendor$ConsoleText$Text,
			_Utils_update(
				styles,
				{
					modifiers: A2($elm$core$List$cons, $mpizenberg$elm_test_runner$ElmTestRunner$Vendor$ConsoleText$Dark, styles.modifiers)
				}),
			str);
	} else {
		var texts = txt.a;
		return $mpizenberg$elm_test_runner$ElmTestRunner$Vendor$ConsoleText$Texts(
			A2($elm$core$List$map, $mpizenberg$elm_test_runner$ElmTestRunner$Vendor$ConsoleText$dark, texts));
	}
};
var $mpizenberg$elm_test_runner$ElmTestRunner$Reporter$ConsoleColor$stat = F2(
	function (label, value) {
		return $mpizenberg$elm_test_runner$ElmTestRunner$Vendor$ConsoleText$concat(
			_List_fromArray(
				[
					$mpizenberg$elm_test_runner$ElmTestRunner$Vendor$ConsoleText$dark(
					$mpizenberg$elm_test_runner$ElmTestRunner$Vendor$ConsoleText$plain(label)),
					$mpizenberg$elm_test_runner$ElmTestRunner$Vendor$ConsoleText$plain(value + '\n')
				]));
	});
var $mpizenberg$elm_test_runner$ElmTestRunner$Vendor$ConsoleText$Underline = {$: 'Underline'};
var $mpizenberg$elm_test_runner$ElmTestRunner$Vendor$ConsoleText$underline = function (txt) {
	if (txt.$ === 'Text') {
		var styles = txt.a;
		var str = txt.b;
		return A2(
			$mpizenberg$elm_test_runner$ElmTestRunner$Vendor$ConsoleText$Text,
			_Utils_update(
				styles,
				{style: $mpizenberg$elm_test_runner$ElmTestRunner$Vendor$ConsoleText$Underline}),
			str);
	} else {
		var texts = txt.a;
		return $mpizenberg$elm_test_runner$ElmTestRunner$Vendor$ConsoleText$Texts(
			A2($elm$core$List$map, $mpizenberg$elm_test_runner$ElmTestRunner$Vendor$ConsoleText$dark, texts));
	}
};
var $mpizenberg$elm_test_runner$ElmTestRunner$Vendor$ConsoleText$Yellow = {$: 'Yellow'};
var $mpizenberg$elm_test_runner$ElmTestRunner$Vendor$ConsoleText$yellow = $mpizenberg$elm_test_runner$ElmTestRunner$Vendor$ConsoleText$Text(
	{background: $mpizenberg$elm_test_runner$ElmTestRunner$Vendor$ConsoleText$Default, foreground: $mpizenberg$elm_test_runner$ElmTestRunner$Vendor$ConsoleText$Yellow, modifiers: _List_Nil, style: $mpizenberg$elm_test_runner$ElmTestRunner$Vendor$ConsoleText$Normal});
var $mpizenberg$elm_test_runner$ElmTestRunner$Reporter$ConsoleColor$formatSummary = F2(
	function (kind, _v0) {
		var totalDuration = _v0.totalDuration;
		var passedCount = _v0.passedCount;
		var failedCount = _v0.failedCount;
		var todoCount = _v0.todoCount;
		var todoStats = (!todoCount) ? $mpizenberg$elm_test_runner$ElmTestRunner$Vendor$ConsoleText$plain('') : A2(
			$mpizenberg$elm_test_runner$ElmTestRunner$Reporter$ConsoleColor$stat,
			'Todo:     ',
			$elm$core$String$fromInt(todoCount));
		var headlineResult = function () {
			var _v3 = _Utils_Tuple3(kind, failedCount, todoCount);
			if (!_v3.b) {
				switch (_v3.a.$) {
					case 'Plain':
						switch (_v3.c) {
							case 0:
								var _v4 = _v3.a;
								return $elm$core$Result$Ok('TEST RUN PASSED');
							case 1:
								var _v5 = _v3.a;
								return $elm$core$Result$Err(
									_Utils_Tuple3($mpizenberg$elm_test_runner$ElmTestRunner$Vendor$ConsoleText$yellow, 'TEST RUN INCOMPLETE', ' because there is 1 TODO remaining'));
							default:
								var _v6 = _v3.a;
								var numTodos = _v3.c;
								return $elm$core$Result$Err(
									_Utils_Tuple3(
										$mpizenberg$elm_test_runner$ElmTestRunner$Vendor$ConsoleText$yellow,
										'TEST RUN INCOMPLETE',
										' because there are ' + ($elm$core$String$fromInt(numTodos) + ' TODOs remaining')));
						}
					case 'Only':
						var _v7 = _v3.a;
						return $elm$core$Result$Err(
							_Utils_Tuple3($mpizenberg$elm_test_runner$ElmTestRunner$Vendor$ConsoleText$yellow, 'TEST RUN INCOMPLETE', ' because Test.only was used'));
					default:
						var _v8 = _v3.a;
						return $elm$core$Result$Err(
							_Utils_Tuple3($mpizenberg$elm_test_runner$ElmTestRunner$Vendor$ConsoleText$yellow, 'TEST RUN INCOMPLETE', ' because Test.skip was used'));
				}
			} else {
				return $elm$core$Result$Err(
					_Utils_Tuple3($mpizenberg$elm_test_runner$ElmTestRunner$Vendor$ConsoleText$red, 'TEST RUN FAILED', ''));
			}
		}();
		var headline = function () {
			if (headlineResult.$ === 'Ok') {
				var str = headlineResult.a;
				return $mpizenberg$elm_test_runner$ElmTestRunner$Vendor$ConsoleText$underline(
					$mpizenberg$elm_test_runner$ElmTestRunner$Vendor$ConsoleText$green('\n' + (str + '\n\n')));
			} else {
				var _v2 = headlineResult.a;
				var colorize = _v2.a;
				var str = _v2.b;
				var suffix = _v2.c;
				return $mpizenberg$elm_test_runner$ElmTestRunner$Vendor$ConsoleText$concat(
					_List_fromArray(
						[
							$mpizenberg$elm_test_runner$ElmTestRunner$Vendor$ConsoleText$underline(
							colorize('\n' + str)),
							colorize(suffix + '\n\n')
						]));
			}
		}();
		return $mpizenberg$elm_test_runner$ElmTestRunner$Vendor$ConsoleText$concat(
			_List_fromArray(
				[
					headline,
					A2(
					$mpizenberg$elm_test_runner$ElmTestRunner$Reporter$ConsoleColor$stat,
					'Duration: ',
					$elm$core$String$fromInt(
						$elm$core$Basics$round(totalDuration)) + ' ms'),
					A2(
					$mpizenberg$elm_test_runner$ElmTestRunner$Reporter$ConsoleColor$stat,
					'Passed:   ',
					$elm$core$String$fromInt(passedCount)),
					A2(
					$mpizenberg$elm_test_runner$ElmTestRunner$Reporter$ConsoleColor$stat,
					'Failed:   ',
					$elm$core$String$fromInt(failedCount)),
					todoStats
				]));
	});
var $elm$core$String$concat = function (strings) {
	return A2($elm$core$String$join, '', strings);
};
var $elm$core$Bitwise$and = _Bitwise_and;
var $elm$core$Bitwise$shiftRightBy = _Bitwise_shiftRightBy;
var $elm$core$String$repeatHelp = F3(
	function (n, chunk, result) {
		return (n <= 0) ? result : A3(
			$elm$core$String$repeatHelp,
			n >> 1,
			_Utils_ap(chunk, chunk),
			(!(n & 1)) ? result : _Utils_ap(result, chunk));
	});
var $elm$core$String$repeat = F2(
	function (n, chunk) {
		return A3($elm$core$String$repeatHelp, n, chunk, '');
	});
var $mpizenberg$elm_test_runner$ElmTestRunner$Reporter$ConsoleColor$formatListingLine = F2(
	function (indentationLevel, testLine) {
		if (testLine.$ === 'Left') {
			var passed = testLine.a.passed;
			var label = testLine.a.label;
			return passed ? $mpizenberg$elm_test_runner$ElmTestRunner$Vendor$ConsoleText$plain(
				$elm$core$String$concat(
					_List_fromArray(
						[
							A2($elm$core$String$repeat, indentationLevel, '  '),
							'✓ PASSED: ',
							label,
							'\n'
						]))) : $mpizenberg$elm_test_runner$ElmTestRunner$Vendor$ConsoleText$red(
				$elm$core$String$concat(
					_List_fromArray(
						[
							A2($elm$core$String$repeat, indentationLevel, '  '),
							'✗ FAILED: ',
							label,
							'\n'
						])));
		} else {
			var groupName = testLine.a;
			return $mpizenberg$elm_test_runner$ElmTestRunner$Vendor$ConsoleText$plain(
				$elm$core$String$concat(
					_List_fromArray(
						[
							A2($elm$core$String$repeat, indentationLevel, '  '),
							'↓ ',
							groupName,
							'\n'
						])));
		}
	});
var $mpizenberg$elm_test_runner$ElmTestRunner$Reporter$ConsoleColor$Left = function (a) {
	return {$: 'Left', a: a};
};
var $mpizenberg$elm_test_runner$ElmTestRunner$Reporter$ConsoleColor$Right = function (a) {
	return {$: 'Right', a: a};
};
var $mpizenberg$elm_test_runner$ElmTestRunner$Reporter$ConsoleColor$listingTraversal = F4(
	function (f, initialLevel, _v0, acc) {
		var tests = _v0.a.tests;
		var groups = _v0.a.groups;
		var oneGroupTraversal = F2(
			function (_v1, subAcc) {
				var group = _v1.a;
				var subTree = _v1.b;
				return A4(
					$mpizenberg$elm_test_runner$ElmTestRunner$Reporter$ConsoleColor$listingTraversal,
					f,
					initialLevel + 1,
					subTree,
					A3(
						f,
						initialLevel,
						$mpizenberg$elm_test_runner$ElmTestRunner$Reporter$ConsoleColor$Right(group),
						subAcc));
			});
		var groupsTraversal = function (groupsAcc) {
			return A3(
				$elm$core$List$foldl,
				oneGroupTraversal,
				groupsAcc,
				$elm$core$Dict$toList(groups));
		};
		return groupsTraversal(
			A3(
				$elm$core$List$foldl,
				function (test) {
					return A2(
						f,
						initialLevel,
						$mpizenberg$elm_test_runner$ElmTestRunner$Reporter$ConsoleColor$Left(test));
				},
				acc,
				tests));
	});
var $elm$core$Basics$identity = function (x) {
	return x;
};
var $mpizenberg$elm_test_runner$ElmTestRunner$Reporter$ConsoleColor$TestListingTree = function (a) {
	return {$: 'TestListingTree', a: a};
};
var $elm$core$Dict$RBEmpty_elm_builtin = {$: 'RBEmpty_elm_builtin'};
var $elm$core$Dict$empty = $elm$core$Dict$RBEmpty_elm_builtin;
var $mpizenberg$elm_test_runner$ElmTestRunner$Reporter$ConsoleColor$emptyListingTree = $mpizenberg$elm_test_runner$ElmTestRunner$Reporter$ConsoleColor$TestListingTree(
	{groups: $elm$core$Dict$empty, tests: _List_Nil});
var $elm$core$Basics$compare = _Utils_compare;
var $elm$core$Dict$get = F2(
	function (targetKey, dict) {
		get:
		while (true) {
			if (dict.$ === 'RBEmpty_elm_builtin') {
				return $elm$core$Maybe$Nothing;
			} else {
				var key = dict.b;
				var value = dict.c;
				var left = dict.d;
				var right = dict.e;
				var _v1 = A2($elm$core$Basics$compare, targetKey, key);
				switch (_v1.$) {
					case 'LT':
						var $temp$targetKey = targetKey,
							$temp$dict = left;
						targetKey = $temp$targetKey;
						dict = $temp$dict;
						continue get;
					case 'EQ':
						return $elm$core$Maybe$Just(value);
					default:
						var $temp$targetKey = targetKey,
							$temp$dict = right;
						targetKey = $temp$targetKey;
						dict = $temp$dict;
						continue get;
				}
			}
		}
	});
var $elm$core$Dict$Black = {$: 'Black'};
var $elm$core$Dict$RBNode_elm_builtin = F5(
	function (a, b, c, d, e) {
		return {$: 'RBNode_elm_builtin', a: a, b: b, c: c, d: d, e: e};
	});
var $elm$core$Dict$Red = {$: 'Red'};
var $elm$core$Dict$balance = F5(
	function (color, key, value, left, right) {
		if ((right.$ === 'RBNode_elm_builtin') && (right.a.$ === 'Red')) {
			var _v1 = right.a;
			var rK = right.b;
			var rV = right.c;
			var rLeft = right.d;
			var rRight = right.e;
			if ((left.$ === 'RBNode_elm_builtin') && (left.a.$ === 'Red')) {
				var _v3 = left.a;
				var lK = left.b;
				var lV = left.c;
				var lLeft = left.d;
				var lRight = left.e;
				return A5(
					$elm$core$Dict$RBNode_elm_builtin,
					$elm$core$Dict$Red,
					key,
					value,
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Black, lK, lV, lLeft, lRight),
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Black, rK, rV, rLeft, rRight));
			} else {
				return A5(
					$elm$core$Dict$RBNode_elm_builtin,
					color,
					rK,
					rV,
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, key, value, left, rLeft),
					rRight);
			}
		} else {
			if ((((left.$ === 'RBNode_elm_builtin') && (left.a.$ === 'Red')) && (left.d.$ === 'RBNode_elm_builtin')) && (left.d.a.$ === 'Red')) {
				var _v5 = left.a;
				var lK = left.b;
				var lV = left.c;
				var _v6 = left.d;
				var _v7 = _v6.a;
				var llK = _v6.b;
				var llV = _v6.c;
				var llLeft = _v6.d;
				var llRight = _v6.e;
				var lRight = left.e;
				return A5(
					$elm$core$Dict$RBNode_elm_builtin,
					$elm$core$Dict$Red,
					lK,
					lV,
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Black, llK, llV, llLeft, llRight),
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Black, key, value, lRight, right));
			} else {
				return A5($elm$core$Dict$RBNode_elm_builtin, color, key, value, left, right);
			}
		}
	});
var $elm$core$Dict$insertHelp = F3(
	function (key, value, dict) {
		if (dict.$ === 'RBEmpty_elm_builtin') {
			return A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, key, value, $elm$core$Dict$RBEmpty_elm_builtin, $elm$core$Dict$RBEmpty_elm_builtin);
		} else {
			var nColor = dict.a;
			var nKey = dict.b;
			var nValue = dict.c;
			var nLeft = dict.d;
			var nRight = dict.e;
			var _v1 = A2($elm$core$Basics$compare, key, nKey);
			switch (_v1.$) {
				case 'LT':
					return A5(
						$elm$core$Dict$balance,
						nColor,
						nKey,
						nValue,
						A3($elm$core$Dict$insertHelp, key, value, nLeft),
						nRight);
				case 'EQ':
					return A5($elm$core$Dict$RBNode_elm_builtin, nColor, nKey, value, nLeft, nRight);
				default:
					return A5(
						$elm$core$Dict$balance,
						nColor,
						nKey,
						nValue,
						nLeft,
						A3($elm$core$Dict$insertHelp, key, value, nRight));
			}
		}
	});
var $elm$core$Dict$insert = F3(
	function (key, value, dict) {
		var _v0 = A3($elm$core$Dict$insertHelp, key, value, dict);
		if ((_v0.$ === 'RBNode_elm_builtin') && (_v0.a.$ === 'Red')) {
			var _v1 = _v0.a;
			var k = _v0.b;
			var v = _v0.c;
			var l = _v0.d;
			var r = _v0.e;
			return A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Black, k, v, l, r);
		} else {
			var x = _v0;
			return x;
		}
	});
var $elm$core$Maybe$withDefault = F2(
	function (_default, maybe) {
		if (maybe.$ === 'Just') {
			var value = maybe.a;
			return value;
		} else {
			return _default;
		}
	});
var $mpizenberg$elm_test_runner$ElmTestRunner$Reporter$ConsoleColor$insertTestInListing = F2(
	function (_v0, _v1) {
		var passed = _v0.passed;
		var labels = _v0.labels;
		var tests = _v1.a.tests;
		var groups = _v1.a.groups;
		if (!labels.b) {
			return $mpizenberg$elm_test_runner$ElmTestRunner$Reporter$ConsoleColor$emptyListingTree;
		} else {
			if (!labels.b.b) {
				var label = labels.a;
				return $mpizenberg$elm_test_runner$ElmTestRunner$Reporter$ConsoleColor$TestListingTree(
					{
						groups: groups,
						tests: A2(
							$elm$core$List$cons,
							{label: label, passed: passed},
							tests)
					});
			} else {
				var groupLabel = labels.a;
				var subLabels = labels.b;
				return $mpizenberg$elm_test_runner$ElmTestRunner$Reporter$ConsoleColor$TestListingTree(
					{
						groups: function () {
							var subTree = A2(
								$elm$core$Maybe$withDefault,
								$mpizenberg$elm_test_runner$ElmTestRunner$Reporter$ConsoleColor$emptyListingTree,
								A2($elm$core$Dict$get, groupLabel, groups));
							return A3(
								$elm$core$Dict$insert,
								groupLabel,
								A2(
									$mpizenberg$elm_test_runner$ElmTestRunner$Reporter$ConsoleColor$insertTestInListing,
									{labels: subLabels, passed: passed},
									subTree),
								groups);
						}(),
						tests: tests
					});
			}
		}
	});
var $mpizenberg$elm_test_runner$ElmTestRunner$Reporter$ConsoleColor$statusAndLabels = function (testResult) {
	if (testResult.$ === 'Failed') {
		var labels = testResult.a.labels;
		return {
			labels: $elm$core$List$reverse(labels),
			passed: false
		};
	} else {
		var labels = testResult.a.labels;
		return {
			labels: $elm$core$List$reverse(labels),
			passed: true
		};
	}
};
var $mpizenberg$elm_test_runner$ElmTestRunner$Reporter$ConsoleColor$toListingTree = function (testResults) {
	return A3(
		$elm$core$Array$foldr,
		A2($elm$core$Basics$composeR, $mpizenberg$elm_test_runner$ElmTestRunner$Reporter$ConsoleColor$statusAndLabels, $mpizenberg$elm_test_runner$ElmTestRunner$Reporter$ConsoleColor$insertTestInListing),
		$mpizenberg$elm_test_runner$ElmTestRunner$Reporter$ConsoleColor$emptyListingTree,
		testResults);
};
var $mpizenberg$elm_test_runner$ElmTestRunner$Reporter$ConsoleColor$formatTestListing = function (testResults) {
	var accumListingLine = F3(
		function (indentationLevel, testLine, accumText) {
			return A2(
				$elm$core$List$cons,
				A2($mpizenberg$elm_test_runner$ElmTestRunner$Reporter$ConsoleColor$formatListingLine, indentationLevel, testLine),
				accumText);
		});
	return $mpizenberg$elm_test_runner$ElmTestRunner$Vendor$ConsoleText$concat(
		$elm$core$List$reverse(
			A4(
				$mpizenberg$elm_test_runner$ElmTestRunner$Reporter$ConsoleColor$listingTraversal,
				accumListingLine,
				0,
				$mpizenberg$elm_test_runner$ElmTestRunner$Reporter$ConsoleColor$toListingTree(testResults),
				_List_Nil)));
};
var $elm$core$Array$isEmpty = function (_v0) {
	var len = _v0.a;
	return !len;
};
var $elm$core$List$isEmpty = function (xs) {
	if (!xs.b) {
		return true;
	} else {
		return false;
	}
};
var $mpizenberg$elm_test_runner$ElmTestRunner$Result$accumStats = F2(
	function (result, _v0) {
		var totalDuration = _v0.totalDuration;
		var passedCount = _v0.passedCount;
		var failedCount = _v0.failedCount;
		var todoCount = _v0.todoCount;
		if (result.$ === 'Passed') {
			var duration = result.a.duration;
			return {failedCount: failedCount, passedCount: passedCount + 1, todoCount: todoCount, totalDuration: totalDuration + duration};
		} else {
			var duration = result.a.duration;
			var todos = result.a.todos;
			var failures = result.a.failures;
			var newTodoCount = $elm$core$List$isEmpty(todos) ? todoCount : (todoCount + 1);
			var newFailedCount = $elm$core$List$isEmpty(failures) ? failedCount : (failedCount + 1);
			return {failedCount: newFailedCount, passedCount: passedCount, todoCount: newTodoCount, totalDuration: totalDuration + duration};
		}
	});
var $elm$core$Elm$JsArray$foldl = _JsArray_foldl;
var $elm$core$Array$foldl = F3(
	function (func, baseCase, _v0) {
		var tree = _v0.c;
		var tail = _v0.d;
		var helper = F2(
			function (node, acc) {
				if (node.$ === 'SubTree') {
					var subTree = node.a;
					return A3($elm$core$Elm$JsArray$foldl, helper, acc, subTree);
				} else {
					var values = node.a;
					return A3($elm$core$Elm$JsArray$foldl, func, acc, values);
				}
			});
		return A3(
			$elm$core$Elm$JsArray$foldl,
			func,
			A3($elm$core$Elm$JsArray$foldl, helper, baseCase, tree),
			tail);
	});
var $mpizenberg$elm_test_runner$ElmTestRunner$Result$summary = A2(
	$elm$core$Array$foldl,
	$mpizenberg$elm_test_runner$ElmTestRunner$Result$accumStats,
	{failedCount: 0, passedCount: 0, todoCount: 0, totalDuration: 0});
var $mpizenberg$elm_test_runner$ElmTestRunner$Reporter$ConsoleColor$onEnd = F3(
	function (verbosityLevel, kindResult, testResults) {
		if (kindResult.$ === 'Err') {
			var err = kindResult.a;
			return $elm$core$Maybe$Just(
				$mpizenberg$elm_test_runner$ElmTestRunner$Vendor$ConsoleText$plain('Your tests are invalid: ' + (err + '\n')));
		} else {
			var kind = kindResult.a;
			return $elm$core$Array$isEmpty(testResults) ? $elm$core$Maybe$Nothing : ((verbosityLevel <= 0) ? $elm$core$Maybe$Just(
				A2(
					$mpizenberg$elm_test_runner$ElmTestRunner$Reporter$ConsoleColor$formatSummary,
					kind,
					$mpizenberg$elm_test_runner$ElmTestRunner$Result$summary(testResults))) : $elm$core$Maybe$Just(
				$mpizenberg$elm_test_runner$ElmTestRunner$Vendor$ConsoleText$concat(
					_List_fromArray(
						[
							$mpizenberg$elm_test_runner$ElmTestRunner$Vendor$ConsoleText$plain('Tests listing:\n\n'),
							$mpizenberg$elm_test_runner$ElmTestRunner$Reporter$ConsoleColor$formatTestListing(testResults),
							A2(
							$mpizenberg$elm_test_runner$ElmTestRunner$Reporter$ConsoleColor$formatSummary,
							kind,
							$mpizenberg$elm_test_runner$ElmTestRunner$Result$summary(testResults))
						]))));
		}
	});
var $elm$core$List$append = F2(
	function (xs, ys) {
		if (!ys.b) {
			return xs;
		} else {
			return A3($elm$core$List$foldr, $elm$core$List$cons, ys, xs);
		}
	});
var $elm$core$List$concat = function (lists) {
	return A3($elm$core$List$foldr, $elm$core$List$append, _List_Nil, lists);
};
var $elm$core$List$filter = F2(
	function (isGood, list) {
		return A3(
			$elm$core$List$foldr,
			F2(
				function (x, xs) {
					return isGood(x) ? A2($elm$core$List$cons, x, xs) : xs;
				}),
			_List_Nil,
			list);
	});
var $elm_explorations$test$AsciiTable$AlignLeft = {$: 'AlignLeft'};
var $elm_explorations$test$AsciiTable$AlignRight = {$: 'AlignRight'};
var $elm_explorations$test$Test$Runner$Distribution$bars = 30;
var $elm$core$String$cons = _String_cons;
var $elm$core$String$fromChar = function (_char) {
	return A2($elm$core$String$cons, _char, '');
};
var $elm$core$String$length = _String_length;
var $elm$core$String$padRight = F3(
	function (n, _char, string) {
		return _Utils_ap(
			string,
			A2(
				$elm$core$String$repeat,
				n - $elm$core$String$length(string),
				$elm$core$String$fromChar(_char)));
	});
var $elm_explorations$test$Test$Runner$Distribution$barView = function (_v0) {
	var count = _v0.count;
	var runsElapsed = _v0.runsElapsed;
	var percentage = count / runsElapsed;
	var barsForPercentage = percentage * $elm_explorations$test$Test$Runner$Distribution$bars;
	var fullBars = $elm$core$Basics$round(barsForPercentage);
	return A3(
		$elm$core$String$padRight,
		$elm_explorations$test$Test$Runner$Distribution$bars,
		_Utils_chr('░'),
		A2($elm$core$String$repeat, fullBars, '█'));
};
var $elm$core$String$fromFloat = _String_fromNumber;
var $elm$core$List$map3 = _List_map3;
var $elm$core$List$maximum = function (list) {
	if (list.b) {
		var x = list.a;
		var xs = list.b;
		return $elm$core$Maybe$Just(
			A3($elm$core$List$foldl, $elm$core$Basics$max, x, xs));
	} else {
		return $elm$core$Maybe$Nothing;
	}
};
var $elm$core$String$padLeft = F3(
	function (n, _char, string) {
		return _Utils_ap(
			A2(
				$elm$core$String$repeat,
				n - $elm$core$String$length(string),
				$elm$core$String$fromChar(_char)),
			string);
	});
var $elm$core$List$repeatHelp = F3(
	function (result, n, value) {
		repeatHelp:
		while (true) {
			if (n <= 0) {
				return result;
			} else {
				var $temp$result = A2($elm$core$List$cons, value, result),
					$temp$n = n - 1,
					$temp$value = value;
				result = $temp$result;
				n = $temp$n;
				value = $temp$value;
				continue repeatHelp;
			}
		}
	});
var $elm$core$List$repeat = F2(
	function (n, value) {
		return A3($elm$core$List$repeatHelp, _List_Nil, n, value);
	});
var $elm_explorations$test$MicroListExtra$rowsLength = function (listOfLists) {
	if (!listOfLists.b) {
		return 0;
	} else {
		var x = listOfLists.a;
		return $elm$core$List$length(x);
	}
};
var $elm_explorations$test$MicroListExtra$transpose = function (listOfLists) {
	return A3(
		$elm$core$List$foldr,
		$elm$core$List$map2($elm$core$List$cons),
		A2(
			$elm$core$List$repeat,
			$elm_explorations$test$MicroListExtra$rowsLength(listOfLists),
			_List_Nil),
		listOfLists);
};
var $elm_explorations$test$AsciiTable$view = F2(
	function (columns, items) {
		var padFn = F3(
			function (length, align, string) {
				if (align.$ === 'AlignLeft') {
					return A3(
						$elm$core$String$padRight,
						length,
						_Utils_chr(' '),
						string);
				} else {
					return A3(
						$elm$core$String$padLeft,
						length,
						_Utils_chr(' '),
						string);
				}
			});
		var columnData = A2(
			$elm$core$List$map,
			function (col) {
				return A2($elm$core$List$map, col.toString, items);
			},
			columns);
		var columnLengths = A2(
			$elm$core$List$map,
			function (colRows) {
				return A2(
					$elm$core$Maybe$withDefault,
					0,
					$elm$core$List$maximum(
						A2($elm$core$List$map, $elm$core$String$length, colRows)));
			},
			columnData);
		var paddedColumnData = A4(
			$elm$core$List$map3,
			F3(
				function (col, colLength, colStrings) {
					return A2(
						$elm$core$List$map,
						A2(padFn, colLength, col.align),
						colStrings);
				}),
			columns,
			columnLengths,
			columnData);
		return A3(
			$elm$core$List$map2,
			F2(
				function (item, rowCells) {
					return {
						item: item,
						renderedRow: A2($elm$core$String$join, '  ', rowCells)
					};
				}),
			items,
			$elm_explorations$test$MicroListExtra$transpose(paddedColumnData));
	});
var $elm_explorations$test$Test$Runner$Distribution$viewLabels = function (labels) {
	return $elm$core$List$isEmpty(labels) ? '<uncategorized>' : A2($elm$core$String$join, ', ', labels);
};
var $elm_explorations$test$Test$Runner$Distribution$formatAsciiTable = F2(
	function (runsElapsed, items) {
		return A2(
			$elm_explorations$test$AsciiTable$view,
			_List_fromArray(
				[
					{
					align: $elm_explorations$test$AsciiTable$AlignLeft,
					toString: function (_v0) {
						var labels = _v0.a;
						return '  ' + ($elm_explorations$test$Test$Runner$Distribution$viewLabels(labels) + ':');
					}
				},
					{
					align: $elm_explorations$test$AsciiTable$AlignRight,
					toString: function (_v1) {
						var percentage = _v1.c;
						return $elm$core$String$fromFloat(percentage) + '%';
					}
				},
					{
					align: $elm_explorations$test$AsciiTable$AlignRight,
					toString: function (_v2) {
						var count = _v2.b;
						return '(' + ($elm$core$String$fromInt(count) + 'x)');
					}
				},
					{
					align: $elm_explorations$test$AsciiTable$AlignLeft,
					toString: function (_v3) {
						var count = _v3.b;
						return $elm_explorations$test$Test$Runner$Distribution$barView(
							{count: count, runsElapsed: runsElapsed});
					}
				}
				]),
			items);
	});
var $elm$core$List$any = F2(
	function (isOkay, list) {
		any:
		while (true) {
			if (!list.b) {
				return false;
			} else {
				var x = list.a;
				var xs = list.b;
				if (isOkay(x)) {
					return true;
				} else {
					var $temp$isOkay = isOkay,
						$temp$list = xs;
					isOkay = $temp$isOkay;
					list = $temp$list;
					continue any;
				}
			}
		}
	});
var $elm$core$Set$Set_elm_builtin = function (a) {
	return {$: 'Set_elm_builtin', a: a};
};
var $elm$core$Dict$foldl = F3(
	function (func, acc, dict) {
		foldl:
		while (true) {
			if (dict.$ === 'RBEmpty_elm_builtin') {
				return acc;
			} else {
				var key = dict.b;
				var value = dict.c;
				var left = dict.d;
				var right = dict.e;
				var $temp$func = func,
					$temp$acc = A3(
					func,
					key,
					value,
					A3($elm$core$Dict$foldl, func, acc, left)),
					$temp$dict = right;
				func = $temp$func;
				acc = $temp$acc;
				dict = $temp$dict;
				continue foldl;
			}
		}
	});
var $elm$core$Dict$getMin = function (dict) {
	getMin:
	while (true) {
		if ((dict.$ === 'RBNode_elm_builtin') && (dict.d.$ === 'RBNode_elm_builtin')) {
			var left = dict.d;
			var $temp$dict = left;
			dict = $temp$dict;
			continue getMin;
		} else {
			return dict;
		}
	}
};
var $elm$core$Dict$moveRedLeft = function (dict) {
	if (((dict.$ === 'RBNode_elm_builtin') && (dict.d.$ === 'RBNode_elm_builtin')) && (dict.e.$ === 'RBNode_elm_builtin')) {
		if ((dict.e.d.$ === 'RBNode_elm_builtin') && (dict.e.d.a.$ === 'Red')) {
			var clr = dict.a;
			var k = dict.b;
			var v = dict.c;
			var _v1 = dict.d;
			var lClr = _v1.a;
			var lK = _v1.b;
			var lV = _v1.c;
			var lLeft = _v1.d;
			var lRight = _v1.e;
			var _v2 = dict.e;
			var rClr = _v2.a;
			var rK = _v2.b;
			var rV = _v2.c;
			var rLeft = _v2.d;
			var _v3 = rLeft.a;
			var rlK = rLeft.b;
			var rlV = rLeft.c;
			var rlL = rLeft.d;
			var rlR = rLeft.e;
			var rRight = _v2.e;
			return A5(
				$elm$core$Dict$RBNode_elm_builtin,
				$elm$core$Dict$Red,
				rlK,
				rlV,
				A5(
					$elm$core$Dict$RBNode_elm_builtin,
					$elm$core$Dict$Black,
					k,
					v,
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, lK, lV, lLeft, lRight),
					rlL),
				A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Black, rK, rV, rlR, rRight));
		} else {
			var clr = dict.a;
			var k = dict.b;
			var v = dict.c;
			var _v4 = dict.d;
			var lClr = _v4.a;
			var lK = _v4.b;
			var lV = _v4.c;
			var lLeft = _v4.d;
			var lRight = _v4.e;
			var _v5 = dict.e;
			var rClr = _v5.a;
			var rK = _v5.b;
			var rV = _v5.c;
			var rLeft = _v5.d;
			var rRight = _v5.e;
			if (clr.$ === 'Black') {
				return A5(
					$elm$core$Dict$RBNode_elm_builtin,
					$elm$core$Dict$Black,
					k,
					v,
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, lK, lV, lLeft, lRight),
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, rK, rV, rLeft, rRight));
			} else {
				return A5(
					$elm$core$Dict$RBNode_elm_builtin,
					$elm$core$Dict$Black,
					k,
					v,
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, lK, lV, lLeft, lRight),
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, rK, rV, rLeft, rRight));
			}
		}
	} else {
		return dict;
	}
};
var $elm$core$Dict$moveRedRight = function (dict) {
	if (((dict.$ === 'RBNode_elm_builtin') && (dict.d.$ === 'RBNode_elm_builtin')) && (dict.e.$ === 'RBNode_elm_builtin')) {
		if ((dict.d.d.$ === 'RBNode_elm_builtin') && (dict.d.d.a.$ === 'Red')) {
			var clr = dict.a;
			var k = dict.b;
			var v = dict.c;
			var _v1 = dict.d;
			var lClr = _v1.a;
			var lK = _v1.b;
			var lV = _v1.c;
			var _v2 = _v1.d;
			var _v3 = _v2.a;
			var llK = _v2.b;
			var llV = _v2.c;
			var llLeft = _v2.d;
			var llRight = _v2.e;
			var lRight = _v1.e;
			var _v4 = dict.e;
			var rClr = _v4.a;
			var rK = _v4.b;
			var rV = _v4.c;
			var rLeft = _v4.d;
			var rRight = _v4.e;
			return A5(
				$elm$core$Dict$RBNode_elm_builtin,
				$elm$core$Dict$Red,
				lK,
				lV,
				A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Black, llK, llV, llLeft, llRight),
				A5(
					$elm$core$Dict$RBNode_elm_builtin,
					$elm$core$Dict$Black,
					k,
					v,
					lRight,
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, rK, rV, rLeft, rRight)));
		} else {
			var clr = dict.a;
			var k = dict.b;
			var v = dict.c;
			var _v5 = dict.d;
			var lClr = _v5.a;
			var lK = _v5.b;
			var lV = _v5.c;
			var lLeft = _v5.d;
			var lRight = _v5.e;
			var _v6 = dict.e;
			var rClr = _v6.a;
			var rK = _v6.b;
			var rV = _v6.c;
			var rLeft = _v6.d;
			var rRight = _v6.e;
			if (clr.$ === 'Black') {
				return A5(
					$elm$core$Dict$RBNode_elm_builtin,
					$elm$core$Dict$Black,
					k,
					v,
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, lK, lV, lLeft, lRight),
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, rK, rV, rLeft, rRight));
			} else {
				return A5(
					$elm$core$Dict$RBNode_elm_builtin,
					$elm$core$Dict$Black,
					k,
					v,
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, lK, lV, lLeft, lRight),
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, rK, rV, rLeft, rRight));
			}
		}
	} else {
		return dict;
	}
};
var $elm$core$Dict$removeHelpPrepEQGT = F7(
	function (targetKey, dict, color, key, value, left, right) {
		if ((left.$ === 'RBNode_elm_builtin') && (left.a.$ === 'Red')) {
			var _v1 = left.a;
			var lK = left.b;
			var lV = left.c;
			var lLeft = left.d;
			var lRight = left.e;
			return A5(
				$elm$core$Dict$RBNode_elm_builtin,
				color,
				lK,
				lV,
				lLeft,
				A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, key, value, lRight, right));
		} else {
			_v2$2:
			while (true) {
				if ((right.$ === 'RBNode_elm_builtin') && (right.a.$ === 'Black')) {
					if (right.d.$ === 'RBNode_elm_builtin') {
						if (right.d.a.$ === 'Black') {
							var _v3 = right.a;
							var _v4 = right.d;
							var _v5 = _v4.a;
							return $elm$core$Dict$moveRedRight(dict);
						} else {
							break _v2$2;
						}
					} else {
						var _v6 = right.a;
						var _v7 = right.d;
						return $elm$core$Dict$moveRedRight(dict);
					}
				} else {
					break _v2$2;
				}
			}
			return dict;
		}
	});
var $elm$core$Dict$removeMin = function (dict) {
	if ((dict.$ === 'RBNode_elm_builtin') && (dict.d.$ === 'RBNode_elm_builtin')) {
		var color = dict.a;
		var key = dict.b;
		var value = dict.c;
		var left = dict.d;
		var lColor = left.a;
		var lLeft = left.d;
		var right = dict.e;
		if (lColor.$ === 'Black') {
			if ((lLeft.$ === 'RBNode_elm_builtin') && (lLeft.a.$ === 'Red')) {
				var _v3 = lLeft.a;
				return A5(
					$elm$core$Dict$RBNode_elm_builtin,
					color,
					key,
					value,
					$elm$core$Dict$removeMin(left),
					right);
			} else {
				var _v4 = $elm$core$Dict$moveRedLeft(dict);
				if (_v4.$ === 'RBNode_elm_builtin') {
					var nColor = _v4.a;
					var nKey = _v4.b;
					var nValue = _v4.c;
					var nLeft = _v4.d;
					var nRight = _v4.e;
					return A5(
						$elm$core$Dict$balance,
						nColor,
						nKey,
						nValue,
						$elm$core$Dict$removeMin(nLeft),
						nRight);
				} else {
					return $elm$core$Dict$RBEmpty_elm_builtin;
				}
			}
		} else {
			return A5(
				$elm$core$Dict$RBNode_elm_builtin,
				color,
				key,
				value,
				$elm$core$Dict$removeMin(left),
				right);
		}
	} else {
		return $elm$core$Dict$RBEmpty_elm_builtin;
	}
};
var $elm$core$Dict$removeHelp = F2(
	function (targetKey, dict) {
		if (dict.$ === 'RBEmpty_elm_builtin') {
			return $elm$core$Dict$RBEmpty_elm_builtin;
		} else {
			var color = dict.a;
			var key = dict.b;
			var value = dict.c;
			var left = dict.d;
			var right = dict.e;
			if (_Utils_cmp(targetKey, key) < 0) {
				if ((left.$ === 'RBNode_elm_builtin') && (left.a.$ === 'Black')) {
					var _v4 = left.a;
					var lLeft = left.d;
					if ((lLeft.$ === 'RBNode_elm_builtin') && (lLeft.a.$ === 'Red')) {
						var _v6 = lLeft.a;
						return A5(
							$elm$core$Dict$RBNode_elm_builtin,
							color,
							key,
							value,
							A2($elm$core$Dict$removeHelp, targetKey, left),
							right);
					} else {
						var _v7 = $elm$core$Dict$moveRedLeft(dict);
						if (_v7.$ === 'RBNode_elm_builtin') {
							var nColor = _v7.a;
							var nKey = _v7.b;
							var nValue = _v7.c;
							var nLeft = _v7.d;
							var nRight = _v7.e;
							return A5(
								$elm$core$Dict$balance,
								nColor,
								nKey,
								nValue,
								A2($elm$core$Dict$removeHelp, targetKey, nLeft),
								nRight);
						} else {
							return $elm$core$Dict$RBEmpty_elm_builtin;
						}
					}
				} else {
					return A5(
						$elm$core$Dict$RBNode_elm_builtin,
						color,
						key,
						value,
						A2($elm$core$Dict$removeHelp, targetKey, left),
						right);
				}
			} else {
				return A2(
					$elm$core$Dict$removeHelpEQGT,
					targetKey,
					A7($elm$core$Dict$removeHelpPrepEQGT, targetKey, dict, color, key, value, left, right));
			}
		}
	});
var $elm$core$Dict$removeHelpEQGT = F2(
	function (targetKey, dict) {
		if (dict.$ === 'RBNode_elm_builtin') {
			var color = dict.a;
			var key = dict.b;
			var value = dict.c;
			var left = dict.d;
			var right = dict.e;
			if (_Utils_eq(targetKey, key)) {
				var _v1 = $elm$core$Dict$getMin(right);
				if (_v1.$ === 'RBNode_elm_builtin') {
					var minKey = _v1.b;
					var minValue = _v1.c;
					return A5(
						$elm$core$Dict$balance,
						color,
						minKey,
						minValue,
						left,
						$elm$core$Dict$removeMin(right));
				} else {
					return $elm$core$Dict$RBEmpty_elm_builtin;
				}
			} else {
				return A5(
					$elm$core$Dict$balance,
					color,
					key,
					value,
					left,
					A2($elm$core$Dict$removeHelp, targetKey, right));
			}
		} else {
			return $elm$core$Dict$RBEmpty_elm_builtin;
		}
	});
var $elm$core$Dict$remove = F2(
	function (key, dict) {
		var _v0 = A2($elm$core$Dict$removeHelp, key, dict);
		if ((_v0.$ === 'RBNode_elm_builtin') && (_v0.a.$ === 'Red')) {
			var _v1 = _v0.a;
			var k = _v0.b;
			var v = _v0.c;
			var l = _v0.d;
			var r = _v0.e;
			return A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Black, k, v, l, r);
		} else {
			var x = _v0;
			return x;
		}
	});
var $elm$core$Dict$diff = F2(
	function (t1, t2) {
		return A3(
			$elm$core$Dict$foldl,
			F3(
				function (k, v, t) {
					return A2($elm$core$Dict$remove, k, t);
				}),
			t1,
			t2);
	});
var $elm$core$Set$diff = F2(
	function (_v0, _v1) {
		var dict1 = _v0.a;
		var dict2 = _v1.a;
		return $elm$core$Set$Set_elm_builtin(
			A2($elm$core$Dict$diff, dict1, dict2));
	});
var $elm$core$Set$empty = $elm$core$Set$Set_elm_builtin($elm$core$Dict$empty);
var $elm$core$Set$insert = F2(
	function (key, _v0) {
		var dict = _v0.a;
		return $elm$core$Set$Set_elm_builtin(
			A3($elm$core$Dict$insert, key, _Utils_Tuple0, dict));
	});
var $elm$core$Set$fromList = function (list) {
	return A3($elm$core$List$foldl, $elm$core$Set$insert, $elm$core$Set$empty, list);
};
var $elm$core$Dict$isEmpty = function (dict) {
	if (dict.$ === 'RBEmpty_elm_builtin') {
		return true;
	} else {
		return false;
	}
};
var $elm$core$Set$isEmpty = function (_v0) {
	var dict = _v0.a;
	return $elm$core$Dict$isEmpty(dict);
};
var $elm$core$Basics$not = _Basics_not;
var $elm_explorations$test$Test$Runner$Distribution$isStrictSubset = F2(
	function (all, combination) {
		var combinationSet = $elm$core$Set$fromList(combination);
		var containsCombinationFully = function (set) {
			return (!$elm$core$Set$isEmpty(
				A2($elm$core$Set$diff, set, combinationSet))) && $elm$core$Set$isEmpty(
				A2($elm$core$Set$diff, combinationSet, set));
		};
		var allSets = A2(
			$elm$core$List$map,
			A2($elm$core$Basics$composeR, $elm$core$Tuple$first, $elm$core$Set$fromList),
			all);
		return A2($elm$core$List$any, containsCombinationFully, allSets);
	});
var $elm$core$Basics$negate = function (n) {
	return -n;
};
var $elm$core$List$partition = F2(
	function (pred, list) {
		var step = F2(
			function (x, _v0) {
				var trues = _v0.a;
				var falses = _v0.b;
				return pred(x) ? _Utils_Tuple2(
					A2($elm$core$List$cons, x, trues),
					falses) : _Utils_Tuple2(
					trues,
					A2($elm$core$List$cons, x, falses));
			});
		return A3(
			$elm$core$List$foldr,
			step,
			_Utils_Tuple2(_List_Nil, _List_Nil),
			list);
	});
var $elm$core$List$sortBy = _List_sortBy;
var $elm_explorations$test$MicroListExtra$findIndexHelp = F3(
	function (index, predicate, list) {
		findIndexHelp:
		while (true) {
			if (!list.b) {
				return $elm$core$Maybe$Nothing;
			} else {
				var x = list.a;
				var xs = list.b;
				if (predicate(x)) {
					return $elm$core$Maybe$Just(index);
				} else {
					var $temp$index = index + 1,
						$temp$predicate = predicate,
						$temp$list = xs;
					index = $temp$index;
					predicate = $temp$predicate;
					list = $temp$list;
					continue findIndexHelp;
				}
			}
		}
	});
var $elm_explorations$test$MicroListExtra$findIndex = $elm_explorations$test$MicroListExtra$findIndexHelp(0);
var $elm$core$List$drop = F2(
	function (n, list) {
		drop:
		while (true) {
			if (n <= 0) {
				return list;
			} else {
				if (!list.b) {
					return list;
				} else {
					var x = list.a;
					var xs = list.b;
					var $temp$n = n - 1,
						$temp$list = xs;
					n = $temp$n;
					list = $temp$list;
					continue drop;
				}
			}
		}
	});
var $elm$core$List$takeReverse = F3(
	function (n, list, kept) {
		takeReverse:
		while (true) {
			if (n <= 0) {
				return kept;
			} else {
				if (!list.b) {
					return kept;
				} else {
					var x = list.a;
					var xs = list.b;
					var $temp$n = n - 1,
						$temp$list = xs,
						$temp$kept = A2($elm$core$List$cons, x, kept);
					n = $temp$n;
					list = $temp$list;
					kept = $temp$kept;
					continue takeReverse;
				}
			}
		}
	});
var $elm$core$List$takeTailRec = F2(
	function (n, list) {
		return $elm$core$List$reverse(
			A3($elm$core$List$takeReverse, n, list, _List_Nil));
	});
var $elm$core$List$takeFast = F3(
	function (ctr, n, list) {
		if (n <= 0) {
			return _List_Nil;
		} else {
			var _v0 = _Utils_Tuple2(n, list);
			_v0$1:
			while (true) {
				_v0$5:
				while (true) {
					if (!_v0.b.b) {
						return list;
					} else {
						if (_v0.b.b.b) {
							switch (_v0.a) {
								case 1:
									break _v0$1;
								case 2:
									var _v2 = _v0.b;
									var x = _v2.a;
									var _v3 = _v2.b;
									var y = _v3.a;
									return _List_fromArray(
										[x, y]);
								case 3:
									if (_v0.b.b.b.b) {
										var _v4 = _v0.b;
										var x = _v4.a;
										var _v5 = _v4.b;
										var y = _v5.a;
										var _v6 = _v5.b;
										var z = _v6.a;
										return _List_fromArray(
											[x, y, z]);
									} else {
										break _v0$5;
									}
								default:
									if (_v0.b.b.b.b && _v0.b.b.b.b.b) {
										var _v7 = _v0.b;
										var x = _v7.a;
										var _v8 = _v7.b;
										var y = _v8.a;
										var _v9 = _v8.b;
										var z = _v9.a;
										var _v10 = _v9.b;
										var w = _v10.a;
										var tl = _v10.b;
										return (ctr > 1000) ? A2(
											$elm$core$List$cons,
											x,
											A2(
												$elm$core$List$cons,
												y,
												A2(
													$elm$core$List$cons,
													z,
													A2(
														$elm$core$List$cons,
														w,
														A2($elm$core$List$takeTailRec, n - 4, tl))))) : A2(
											$elm$core$List$cons,
											x,
											A2(
												$elm$core$List$cons,
												y,
												A2(
													$elm$core$List$cons,
													z,
													A2(
														$elm$core$List$cons,
														w,
														A3($elm$core$List$takeFast, ctr + 1, n - 4, tl)))));
									} else {
										break _v0$5;
									}
							}
						} else {
							if (_v0.a === 1) {
								break _v0$1;
							} else {
								break _v0$5;
							}
						}
					}
				}
				return list;
			}
			var _v1 = _v0.b;
			var x = _v1.a;
			return _List_fromArray(
				[x]);
		}
	});
var $elm$core$List$take = F2(
	function (n, list) {
		return A3($elm$core$List$takeFast, 0, n, list);
	});
var $elm_explorations$test$MicroListExtra$splitAt = F2(
	function (n, xs) {
		return _Utils_Tuple2(
			A2($elm$core$List$take, n, xs),
			A2($elm$core$List$drop, n, xs));
	});
var $elm_explorations$test$MicroListExtra$splitWhen = F2(
	function (predicate, list) {
		return A2(
			$elm$core$Maybe$map,
			function (i) {
				return A2($elm_explorations$test$MicroListExtra$splitAt, i, list);
			},
			A2($elm_explorations$test$MicroListExtra$findIndex, predicate, list));
	});
var $elm_explorations$test$Test$Runner$Distribution$formatTable = function (_v0) {
	var runsElapsed = _v0.runsElapsed;
	var distributionCount = _v0.distributionCount;
	var runsElapsed_ = runsElapsed;
	var distributionList = $elm$core$Dict$toList(distributionCount);
	var distribution = A2(
		$elm$core$List$map,
		function (_v8) {
			var labels = _v8.a;
			var count = _v8.b;
			var percentage = $elm$core$Basics$round((count / runsElapsed_) * 1000) / 10;
			return _Utils_Tuple3(labels, count, percentage);
		},
		A2(
			$elm$core$List$filter,
			function (_v7) {
				var labels = _v7.a;
				var count = _v7.b;
				return !(($elm$core$List$length(labels) === 1) && ((!count) && A2($elm_explorations$test$Test$Runner$Distribution$isStrictSubset, distributionList, labels)));
			},
			distributionList));
	var _v1 = A2(
		$elm$core$List$partition,
		function (_v3) {
			var labels = _v3.a;
			return $elm$core$List$length(labels) <= 1;
		},
		A2(
			$elm$core$List$sortBy,
			function (_v2) {
				var count = _v2.b;
				return -count;
			},
			distribution));
	var baseRows = _v1.a;
	var combinationsRows = _v1.b;
	var reorderedTable = _Utils_ap(baseRows, combinationsRows);
	var rawTable = A2($elm_explorations$test$Test$Runner$Distribution$formatAsciiTable, runsElapsed_, reorderedTable);
	var _v4 = A2(
		$elm$core$Maybe$withDefault,
		_Utils_Tuple2(rawTable, _List_Nil),
		A2(
			$elm_explorations$test$MicroListExtra$splitWhen,
			function (_v5) {
				var item = _v5.item;
				var _v6 = item;
				var labels = _v6.a;
				return $elm$core$List$length(labels) > 1;
			},
			rawTable));
	var base = _v4.a;
	var combinations = _v4.b;
	var baseString = A2(
		$elm$core$String$join,
		'\n',
		A2(
			$elm$core$List$map,
			function ($) {
				return $.renderedRow;
			},
			base));
	var combinationsString_ = $elm$core$List$isEmpty(combinations) ? '' : A3(
		$elm$core$String$replace,
		'{COMBINATIONS}',
		A2(
			$elm$core$String$join,
			'\n',
			A2(
				$elm$core$List$map,
				function ($) {
					return $.renderedRow;
				},
				combinations)),
		'\n\nCombinations (included in the above base counts):\n{COMBINATIONS}');
	var table = _Utils_ap(baseString, combinationsString_);
	return A3($elm$core$String$replace, '{CATEGORIES}', table, 'Distribution report:\n====================\n{CATEGORIES}');
};
var $elm_explorations$test$Test$Distribution$distributionReportTable = function (r) {
	return $elm_explorations$test$Test$Runner$Distribution$formatTable(r);
};
var $mpizenberg$elm_test_runner$ElmTestRunner$Reporter$ConsoleColor$distributionReportToString = function (distributionReport) {
	switch (distributionReport.$) {
		case 'NoDistribution':
			return $elm$core$Maybe$Nothing;
		case 'DistributionToReport':
			var r = distributionReport.a;
			return $elm$core$Maybe$Just(
				$elm_explorations$test$Test$Distribution$distributionReportTable(r));
		case 'DistributionCheckSucceeded':
			return $elm$core$Maybe$Nothing;
		default:
			var r = distributionReport.a;
			return $elm$core$Maybe$Just(
				$elm_explorations$test$Test$Distribution$distributionReportTable(r));
	}
};
var $elm$core$Basics$composeL = F3(
	function (g, f, x) {
		return g(
			f(x));
	});
var $elm$core$String$isEmpty = function (string) {
	return string === '';
};
var $elm_explorations$test$Test$Runner$formatLabels = F3(
	function (formatDescription, formatTest, labels) {
		var _v0 = A2(
			$elm$core$List$filter,
			A2($elm$core$Basics$composeL, $elm$core$Basics$not, $elm$core$String$isEmpty),
			labels);
		if (!_v0.b) {
			return _List_Nil;
		} else {
			var test = _v0.a;
			var descriptions = _v0.b;
			return $elm$core$List$reverse(
				A2(
					$elm$core$List$cons,
					formatTest(test),
					A2($elm$core$List$map, formatDescription, descriptions)));
		}
	});
var $mpizenberg$elm_test_runner$ElmTestRunner$Reporter$ConsoleColor$withChar = F2(
	function (icon, str) {
		return $elm$core$String$fromChar(icon) + (' ' + (str + '\n'));
	});
var $mpizenberg$elm_test_runner$ElmTestRunner$Reporter$ConsoleColor$failureLabelsToText = A2(
	$elm$core$Basics$composeR,
	A2(
		$elm_explorations$test$Test$Runner$formatLabels,
		A2(
			$elm$core$Basics$composeL,
			A2($elm$core$Basics$composeL, $mpizenberg$elm_test_runner$ElmTestRunner$Vendor$ConsoleText$dark, $mpizenberg$elm_test_runner$ElmTestRunner$Vendor$ConsoleText$plain),
			$mpizenberg$elm_test_runner$ElmTestRunner$Reporter$ConsoleColor$withChar(
				_Utils_chr('↓'))),
		A2(
			$elm$core$Basics$composeL,
			$mpizenberg$elm_test_runner$ElmTestRunner$Vendor$ConsoleText$red,
			$mpizenberg$elm_test_runner$ElmTestRunner$Reporter$ConsoleColor$withChar(
				_Utils_chr('✗')))),
	$mpizenberg$elm_test_runner$ElmTestRunner$Vendor$ConsoleText$concat);
var $elm$core$List$maybeCons = F3(
	function (f, mx, xs) {
		var _v0 = f(mx);
		if (_v0.$ === 'Just') {
			var x = _v0.a;
			return A2($elm$core$List$cons, x, xs);
		} else {
			return xs;
		}
	});
var $elm$core$List$filterMap = F2(
	function (f, xs) {
		return A3(
			$elm$core$List$foldr,
			$elm$core$List$maybeCons(f),
			_List_Nil,
			xs);
	});
var $elm$core$Basics$always = F2(
	function (a, _v0) {
		return a;
	});
var $elm$core$List$concatMap = F2(
	function (f, list) {
		return $elm$core$List$concat(
			A2($elm$core$List$map, f, list));
	});
var $elm$core$Array$fromListHelp = F3(
	function (list, nodeList, nodeListSize) {
		fromListHelp:
		while (true) {
			var _v0 = A2($elm$core$Elm$JsArray$initializeFromList, $elm$core$Array$branchFactor, list);
			var jsArray = _v0.a;
			var remainingItems = _v0.b;
			if (_Utils_cmp(
				$elm$core$Elm$JsArray$length(jsArray),
				$elm$core$Array$branchFactor) < 0) {
				return A2(
					$elm$core$Array$builderToArray,
					true,
					{nodeList: nodeList, nodeListSize: nodeListSize, tail: jsArray});
			} else {
				var $temp$list = remainingItems,
					$temp$nodeList = A2(
					$elm$core$List$cons,
					$elm$core$Array$Leaf(jsArray),
					nodeList),
					$temp$nodeListSize = nodeListSize + 1;
				list = $temp$list;
				nodeList = $temp$nodeList;
				nodeListSize = $temp$nodeListSize;
				continue fromListHelp;
			}
		}
	});
var $elm$core$Array$fromList = function (list) {
	if (!list.b) {
		return $elm$core$Array$empty;
	} else {
		return A3($elm$core$Array$fromListHelp, list, _List_Nil, 0);
	}
};
var $elm$core$Bitwise$shiftRightZfBy = _Bitwise_shiftRightZfBy;
var $elm$core$Array$bitMask = 4294967295 >>> (32 - $elm$core$Array$shiftStep);
var $elm$core$Basics$ge = _Utils_ge;
var $elm$core$Elm$JsArray$unsafeGet = _JsArray_unsafeGet;
var $elm$core$Array$getHelp = F3(
	function (shift, index, tree) {
		getHelp:
		while (true) {
			var pos = $elm$core$Array$bitMask & (index >>> shift);
			var _v0 = A2($elm$core$Elm$JsArray$unsafeGet, pos, tree);
			if (_v0.$ === 'SubTree') {
				var subTree = _v0.a;
				var $temp$shift = shift - $elm$core$Array$shiftStep,
					$temp$index = index,
					$temp$tree = subTree;
				shift = $temp$shift;
				index = $temp$index;
				tree = $temp$tree;
				continue getHelp;
			} else {
				var values = _v0.a;
				return A2($elm$core$Elm$JsArray$unsafeGet, $elm$core$Array$bitMask & index, values);
			}
		}
	});
var $elm$core$Bitwise$shiftLeftBy = _Bitwise_shiftLeftBy;
var $elm$core$Array$tailIndex = function (len) {
	return (len >>> 5) << 5;
};
var $elm$core$Array$get = F2(
	function (index, _v0) {
		var len = _v0.a;
		var startShift = _v0.b;
		var tree = _v0.c;
		var tail = _v0.d;
		return ((index < 0) || (_Utils_cmp(index, len) > -1)) ? $elm$core$Maybe$Nothing : ((_Utils_cmp(
			index,
			$elm$core$Array$tailIndex(len)) > -1) ? $elm$core$Maybe$Just(
			A2($elm$core$Elm$JsArray$unsafeGet, $elm$core$Array$bitMask & index, tail)) : $elm$core$Maybe$Just(
			A3($elm$core$Array$getHelp, startShift, index, tree)));
	});
var $elm$core$Array$length = function (_v0) {
	var len = _v0.a;
	return len;
};
var $mpizenberg$elm_test_runner$ElmTestRunner$Vendor$Diff$Added = function (a) {
	return {$: 'Added', a: a};
};
var $mpizenberg$elm_test_runner$ElmTestRunner$Vendor$Diff$CannotGetA = function (a) {
	return {$: 'CannotGetA', a: a};
};
var $mpizenberg$elm_test_runner$ElmTestRunner$Vendor$Diff$CannotGetB = function (a) {
	return {$: 'CannotGetB', a: a};
};
var $mpizenberg$elm_test_runner$ElmTestRunner$Vendor$Diff$NoChange = function (a) {
	return {$: 'NoChange', a: a};
};
var $mpizenberg$elm_test_runner$ElmTestRunner$Vendor$Diff$Removed = function (a) {
	return {$: 'Removed', a: a};
};
var $mpizenberg$elm_test_runner$ElmTestRunner$Vendor$Diff$UnexpectedPath = F2(
	function (a, b) {
		return {$: 'UnexpectedPath', a: a, b: b};
	});
var $mpizenberg$elm_test_runner$ElmTestRunner$Vendor$Diff$makeChangesHelp = F5(
	function (changes, getA, getB, _v0, path) {
		makeChangesHelp:
		while (true) {
			var x = _v0.a;
			var y = _v0.b;
			if (!path.b) {
				return $elm$core$Result$Ok(changes);
			} else {
				var _v2 = path.a;
				var prevX = _v2.a;
				var prevY = _v2.b;
				var tail = path.b;
				var change = function () {
					if (_Utils_eq(x - 1, prevX) && _Utils_eq(y - 1, prevY)) {
						var _v4 = getA(x);
						if (_v4.$ === 'Just') {
							var a = _v4.a;
							return $elm$core$Result$Ok(
								$mpizenberg$elm_test_runner$ElmTestRunner$Vendor$Diff$NoChange(a));
						} else {
							return $elm$core$Result$Err(
								$mpizenberg$elm_test_runner$ElmTestRunner$Vendor$Diff$CannotGetA(x));
						}
					} else {
						if (_Utils_eq(x, prevX)) {
							var _v5 = getB(y);
							if (_v5.$ === 'Just') {
								var b = _v5.a;
								return $elm$core$Result$Ok(
									$mpizenberg$elm_test_runner$ElmTestRunner$Vendor$Diff$Added(b));
							} else {
								return $elm$core$Result$Err(
									$mpizenberg$elm_test_runner$ElmTestRunner$Vendor$Diff$CannotGetB(y));
							}
						} else {
							if (_Utils_eq(y, prevY)) {
								var _v6 = getA(x);
								if (_v6.$ === 'Just') {
									var a = _v6.a;
									return $elm$core$Result$Ok(
										$mpizenberg$elm_test_runner$ElmTestRunner$Vendor$Diff$Removed(a));
								} else {
									return $elm$core$Result$Err(
										$mpizenberg$elm_test_runner$ElmTestRunner$Vendor$Diff$CannotGetA(x));
								}
							} else {
								return $elm$core$Result$Err(
									A2(
										$mpizenberg$elm_test_runner$ElmTestRunner$Vendor$Diff$UnexpectedPath,
										_Utils_Tuple2(x, y),
										path));
							}
						}
					}
				}();
				if (change.$ === 'Err') {
					var err = change.a;
					return $elm$core$Result$Err(err);
				} else {
					var c = change.a;
					var $temp$changes = A2($elm$core$List$cons, c, changes),
						$temp$getA = getA,
						$temp$getB = getB,
						$temp$_v0 = _Utils_Tuple2(prevX, prevY),
						$temp$path = tail;
					changes = $temp$changes;
					getA = $temp$getA;
					getB = $temp$getB;
					_v0 = $temp$_v0;
					path = $temp$path;
					continue makeChangesHelp;
				}
			}
		}
	});
var $mpizenberg$elm_test_runner$ElmTestRunner$Vendor$Diff$makeChanges = F3(
	function (getA, getB, path) {
		if (!path.b) {
			return $elm$core$Result$Ok(_List_Nil);
		} else {
			var latest = path.a;
			var tail = path.b;
			return A5($mpizenberg$elm_test_runner$ElmTestRunner$Vendor$Diff$makeChangesHelp, _List_Nil, getA, getB, latest, tail);
		}
	});
var $mpizenberg$elm_test_runner$ElmTestRunner$Vendor$Diff$Continue = function (a) {
	return {$: 'Continue', a: a};
};
var $mpizenberg$elm_test_runner$ElmTestRunner$Vendor$Diff$Found = function (a) {
	return {$: 'Found', a: a};
};
var $elm$core$Elm$JsArray$unsafeSet = _JsArray_unsafeSet;
var $elm$core$Array$setHelp = F4(
	function (shift, index, value, tree) {
		var pos = $elm$core$Array$bitMask & (index >>> shift);
		var _v0 = A2($elm$core$Elm$JsArray$unsafeGet, pos, tree);
		if (_v0.$ === 'SubTree') {
			var subTree = _v0.a;
			var newSub = A4($elm$core$Array$setHelp, shift - $elm$core$Array$shiftStep, index, value, subTree);
			return A3(
				$elm$core$Elm$JsArray$unsafeSet,
				pos,
				$elm$core$Array$SubTree(newSub),
				tree);
		} else {
			var values = _v0.a;
			var newLeaf = A3($elm$core$Elm$JsArray$unsafeSet, $elm$core$Array$bitMask & index, value, values);
			return A3(
				$elm$core$Elm$JsArray$unsafeSet,
				pos,
				$elm$core$Array$Leaf(newLeaf),
				tree);
		}
	});
var $elm$core$Array$set = F3(
	function (index, value, array) {
		var len = array.a;
		var startShift = array.b;
		var tree = array.c;
		var tail = array.d;
		return ((index < 0) || (_Utils_cmp(index, len) > -1)) ? array : ((_Utils_cmp(
			index,
			$elm$core$Array$tailIndex(len)) > -1) ? A4(
			$elm$core$Array$Array_elm_builtin,
			len,
			startShift,
			tree,
			A3($elm$core$Elm$JsArray$unsafeSet, $elm$core$Array$bitMask & index, value, tail)) : A4(
			$elm$core$Array$Array_elm_builtin,
			len,
			startShift,
			A4($elm$core$Array$setHelp, startShift, index, value, tree),
			tail));
	});
var $mpizenberg$elm_test_runner$ElmTestRunner$Vendor$Diff$step = F4(
	function (snake_, offset, k, v) {
		var fromTop = A2(
			$elm$core$Maybe$withDefault,
			_List_Nil,
			A2($elm$core$Array$get, (k + 1) + offset, v));
		var fromLeft = A2(
			$elm$core$Maybe$withDefault,
			_List_Nil,
			A2($elm$core$Array$get, (k - 1) + offset, v));
		var _v0 = function () {
			var _v2 = _Utils_Tuple2(fromLeft, fromTop);
			if (!_v2.a.b) {
				if (!_v2.b.b) {
					return _Utils_Tuple2(
						_List_Nil,
						_Utils_Tuple2(0, 0));
				} else {
					var _v3 = _v2.b;
					var _v4 = _v3.a;
					var topX = _v4.a;
					var topY = _v4.b;
					return _Utils_Tuple2(
						fromTop,
						_Utils_Tuple2(topX + 1, topY));
				}
			} else {
				if (!_v2.b.b) {
					var _v5 = _v2.a;
					var _v6 = _v5.a;
					var leftX = _v6.a;
					var leftY = _v6.b;
					return _Utils_Tuple2(
						fromLeft,
						_Utils_Tuple2(leftX, leftY + 1));
				} else {
					var _v7 = _v2.a;
					var _v8 = _v7.a;
					var leftX = _v8.a;
					var leftY = _v8.b;
					var _v9 = _v2.b;
					var _v10 = _v9.a;
					var topX = _v10.a;
					var topY = _v10.b;
					return (_Utils_cmp(leftY + 1, topY) > -1) ? _Utils_Tuple2(
						fromLeft,
						_Utils_Tuple2(leftX, leftY + 1)) : _Utils_Tuple2(
						fromTop,
						_Utils_Tuple2(topX + 1, topY));
				}
			}
		}();
		var path = _v0.a;
		var _v1 = _v0.b;
		var x = _v1.a;
		var y = _v1.b;
		var _v11 = A3(
			snake_,
			x + 1,
			y + 1,
			A2(
				$elm$core$List$cons,
				_Utils_Tuple2(x, y),
				path));
		var newPath = _v11.a;
		var goal = _v11.b;
		return goal ? $mpizenberg$elm_test_runner$ElmTestRunner$Vendor$Diff$Found(newPath) : $mpizenberg$elm_test_runner$ElmTestRunner$Vendor$Diff$Continue(
			A3($elm$core$Array$set, k + offset, newPath, v));
	});
var $mpizenberg$elm_test_runner$ElmTestRunner$Vendor$Diff$onpLoopK = F4(
	function (snake_, offset, ks, v) {
		onpLoopK:
		while (true) {
			if (!ks.b) {
				return $mpizenberg$elm_test_runner$ElmTestRunner$Vendor$Diff$Continue(v);
			} else {
				var k = ks.a;
				var ks_ = ks.b;
				var _v1 = A4($mpizenberg$elm_test_runner$ElmTestRunner$Vendor$Diff$step, snake_, offset, k, v);
				if (_v1.$ === 'Found') {
					var path = _v1.a;
					return $mpizenberg$elm_test_runner$ElmTestRunner$Vendor$Diff$Found(path);
				} else {
					var v_ = _v1.a;
					var $temp$snake_ = snake_,
						$temp$offset = offset,
						$temp$ks = ks_,
						$temp$v = v_;
					snake_ = $temp$snake_;
					offset = $temp$offset;
					ks = $temp$ks;
					v = $temp$v;
					continue onpLoopK;
				}
			}
		}
	});
var $mpizenberg$elm_test_runner$ElmTestRunner$Vendor$Diff$onpLoopP = F5(
	function (snake_, delta, offset, p, v) {
		onpLoopP:
		while (true) {
			var ks = (delta > 0) ? _Utils_ap(
				$elm$core$List$reverse(
					A2($elm$core$List$range, delta + 1, delta + p)),
				A2($elm$core$List$range, -p, delta)) : _Utils_ap(
				$elm$core$List$reverse(
					A2($elm$core$List$range, delta + 1, p)),
				A2($elm$core$List$range, (-p) + delta, delta));
			var _v0 = A4($mpizenberg$elm_test_runner$ElmTestRunner$Vendor$Diff$onpLoopK, snake_, offset, ks, v);
			if (_v0.$ === 'Found') {
				var path = _v0.a;
				return path;
			} else {
				var v_ = _v0.a;
				var $temp$snake_ = snake_,
					$temp$delta = delta,
					$temp$offset = offset,
					$temp$p = p + 1,
					$temp$v = v_;
				snake_ = $temp$snake_;
				delta = $temp$delta;
				offset = $temp$offset;
				p = $temp$p;
				v = $temp$v;
				continue onpLoopP;
			}
		}
	});
var $mpizenberg$elm_test_runner$ElmTestRunner$Vendor$Diff$snake = F5(
	function (getA, getB, nextX, nextY, path) {
		snake:
		while (true) {
			var _v0 = _Utils_Tuple2(
				getA(nextX),
				getB(nextY));
			_v0$2:
			while (true) {
				if (_v0.a.$ === 'Just') {
					if (_v0.b.$ === 'Just') {
						var a = _v0.a.a;
						var b = _v0.b.a;
						if (_Utils_eq(a, b)) {
							var $temp$getA = getA,
								$temp$getB = getB,
								$temp$nextX = nextX + 1,
								$temp$nextY = nextY + 1,
								$temp$path = A2(
								$elm$core$List$cons,
								_Utils_Tuple2(nextX, nextY),
								path);
							getA = $temp$getA;
							getB = $temp$getB;
							nextX = $temp$nextX;
							nextY = $temp$nextY;
							path = $temp$path;
							continue snake;
						} else {
							return _Utils_Tuple2(path, false);
						}
					} else {
						break _v0$2;
					}
				} else {
					if (_v0.b.$ === 'Nothing') {
						var _v1 = _v0.a;
						var _v2 = _v0.b;
						return _Utils_Tuple2(path, true);
					} else {
						break _v0$2;
					}
				}
			}
			return _Utils_Tuple2(path, false);
		}
	});
var $mpizenberg$elm_test_runner$ElmTestRunner$Vendor$Diff$onp = F4(
	function (getA, getB, m, n) {
		var v = A2(
			$elm$core$Array$initialize,
			(m + n) + 1,
			$elm$core$Basics$always(_List_Nil));
		var delta = n - m;
		return A5(
			$mpizenberg$elm_test_runner$ElmTestRunner$Vendor$Diff$onpLoopP,
			A2($mpizenberg$elm_test_runner$ElmTestRunner$Vendor$Diff$snake, getA, getB),
			delta,
			m,
			0,
			v);
	});
var $mpizenberg$elm_test_runner$ElmTestRunner$Vendor$Diff$testDiff = F2(
	function (a, b) {
		var arrB = $elm$core$Array$fromList(b);
		var getB = function (y) {
			return A2($elm$core$Array$get, y - 1, arrB);
		};
		var n = $elm$core$Array$length(arrB);
		var arrA = $elm$core$Array$fromList(a);
		var getA = function (x) {
			return A2($elm$core$Array$get, x - 1, arrA);
		};
		var m = $elm$core$Array$length(arrA);
		var path = A4($mpizenberg$elm_test_runner$ElmTestRunner$Vendor$Diff$onp, getA, getB, m, n);
		return A3($mpizenberg$elm_test_runner$ElmTestRunner$Vendor$Diff$makeChanges, getA, getB, path);
	});
var $mpizenberg$elm_test_runner$ElmTestRunner$Vendor$Diff$diff = F2(
	function (a, b) {
		var _v0 = A2($mpizenberg$elm_test_runner$ElmTestRunner$Vendor$Diff$testDiff, a, b);
		if (_v0.$ === 'Ok') {
			var changes = _v0.a;
			return changes;
		} else {
			return _List_Nil;
		}
	});
var $mpizenberg$elm_test_runner$ElmTestRunner$Vendor$Highlightable$Highlighted = function (a) {
	return {$: 'Highlighted', a: a};
};
var $mpizenberg$elm_test_runner$ElmTestRunner$Vendor$Highlightable$Plain = function (a) {
	return {$: 'Plain', a: a};
};
var $mpizenberg$elm_test_runner$ElmTestRunner$Vendor$Highlightable$fromDiff = function (diff) {
	switch (diff.$) {
		case 'Added':
			return _List_Nil;
		case 'Removed':
			var _char = diff.a;
			return _List_fromArray(
				[
					$mpizenberg$elm_test_runner$ElmTestRunner$Vendor$Highlightable$Highlighted(_char)
				]);
		default:
			var _char = diff.a;
			return _List_fromArray(
				[
					$mpizenberg$elm_test_runner$ElmTestRunner$Vendor$Highlightable$Plain(_char)
				]);
	}
};
var $mpizenberg$elm_test_runner$ElmTestRunner$Vendor$Highlightable$diffLists = F2(
	function (expected, actual) {
		return A2(
			$elm$core$List$concatMap,
			$mpizenberg$elm_test_runner$ElmTestRunner$Vendor$Highlightable$fromDiff,
			A2($mpizenberg$elm_test_runner$ElmTestRunner$Vendor$Diff$diff, expected, actual));
	});
var $elm$core$String$toFloat = _String_toFloat;
var $mpizenberg$elm_test_runner$ElmTestRunner$Vendor$ConsoleFormat$isFloat = function (str) {
	var _v0 = $elm$core$String$toFloat(str);
	if (_v0.$ === 'Just') {
		return true;
	} else {
		return false;
	}
};
var $mpizenberg$elm_test_runner$ElmTestRunner$Vendor$Highlightable$map = F2(
	function (transform, highlightable) {
		if (highlightable.$ === 'Highlighted') {
			var val = highlightable.a;
			return $mpizenberg$elm_test_runner$ElmTestRunner$Vendor$Highlightable$Highlighted(
				transform(val));
		} else {
			var val = highlightable.a;
			return $mpizenberg$elm_test_runner$ElmTestRunner$Vendor$Highlightable$Plain(
				transform(val));
		}
	});
var $elm$core$Basics$neq = _Utils_notEqual;
var $elm$core$Tuple$pair = F2(
	function (a, b) {
		return _Utils_Tuple2(a, b);
	});
var $mpizenberg$elm_test_runner$ElmTestRunner$Vendor$Highlightable$resolve = F2(
	function (_v0, highlightable) {
		var fromHighlighted = _v0.fromHighlighted;
		var fromPlain = _v0.fromPlain;
		if (highlightable.$ === 'Highlighted') {
			var val = highlightable.a;
			return fromHighlighted(val);
		} else {
			var val = highlightable.a;
			return fromPlain(val);
		}
	});
var $elm$core$String$foldr = _String_foldr;
var $elm$core$String$toList = function (string) {
	return A3($elm$core$String$foldr, $elm$core$List$cons, _List_Nil, string);
};
var $mpizenberg$elm_test_runner$ElmTestRunner$Vendor$ConsoleFormat$highlightEqual = F2(
	function (expected, actual) {
		if ((expected === '\"\"') || (actual === '\"\"')) {
			return $elm$core$Maybe$Nothing;
		} else {
			if ($mpizenberg$elm_test_runner$ElmTestRunner$Vendor$ConsoleFormat$isFloat(expected) && $mpizenberg$elm_test_runner$ElmTestRunner$Vendor$ConsoleFormat$isFloat(actual)) {
				return $elm$core$Maybe$Nothing;
			} else {
				var isHighlighted = $mpizenberg$elm_test_runner$ElmTestRunner$Vendor$Highlightable$resolve(
					{
						fromHighlighted: $elm$core$Basics$always(true),
						fromPlain: $elm$core$Basics$always(false)
					});
				var expectedChars = $elm$core$String$toList(expected);
				var edgeCount = function (highlightedString) {
					var highlights = A2($elm$core$List$map, isHighlighted, highlightedString);
					return $elm$core$List$length(
						A2(
							$elm$core$List$filter,
							function (_v0) {
								var lhs = _v0.a;
								var rhs = _v0.b;
								return !_Utils_eq(lhs, rhs);
							},
							A3(
								$elm$core$List$map2,
								$elm$core$Tuple$pair,
								A2($elm$core$List$drop, 1, highlights),
								highlights)));
				};
				var actualChars = $elm$core$String$toList(actual);
				var highlightedActual = A2(
					$elm$core$List$map,
					$mpizenberg$elm_test_runner$ElmTestRunner$Vendor$Highlightable$map($elm$core$String$fromChar),
					A2($mpizenberg$elm_test_runner$ElmTestRunner$Vendor$Highlightable$diffLists, actualChars, expectedChars));
				var highlightedExpected = A2(
					$elm$core$List$map,
					$mpizenberg$elm_test_runner$ElmTestRunner$Vendor$Highlightable$map($elm$core$String$fromChar),
					A2($mpizenberg$elm_test_runner$ElmTestRunner$Vendor$Highlightable$diffLists, expectedChars, actualChars));
				var plainCharCount = $elm$core$List$length(
					A2(
						$elm$core$List$filter,
						A2($elm$core$Basics$composeL, $elm$core$Basics$not, isHighlighted),
						highlightedExpected));
				return ((_Utils_cmp(
					edgeCount(highlightedActual),
					plainCharCount) > 0) || (_Utils_cmp(
					edgeCount(highlightedExpected),
					plainCharCount) > 0)) ? $elm$core$Maybe$Nothing : $elm$core$Maybe$Just(
					_Utils_Tuple2(highlightedExpected, highlightedActual));
			}
		}
	});
var $mpizenberg$elm_test_runner$ElmTestRunner$Vendor$ConsoleFormat$verticalBar = F3(
	function (comparison, expected, actual) {
		return A2(
			$elm$core$String$join,
			'\n',
			_List_fromArray(
				[actual, '╷', '│ ' + comparison, '╵', expected]));
	});
var $mpizenberg$elm_test_runner$ElmTestRunner$Vendor$ConsoleFormat$listDiffToString = F4(
	function (index, description, _v0, originals) {
		listDiffToString:
		while (true) {
			var expected = _v0.expected;
			var actual = _v0.actual;
			var _v1 = _Utils_Tuple2(expected, actual);
			if (!_v1.a.b) {
				if (!_v1.b.b) {
					return A2(
						$elm$core$String$join,
						'',
						_List_fromArray(
							[
								'Two lists were unequal previously, yet ended up equal later.',
								'This should never happen!',
								'Please report this bug to https://github.com/elm-community/elm-test/issues - and include these lists: ',
								'\n',
								A2($elm$core$String$join, ', ', originals.originalExpected),
								'\n',
								A2($elm$core$String$join, ', ', originals.originalActual)
							]));
				} else {
					var _v3 = _v1.b;
					return A3(
						$mpizenberg$elm_test_runner$ElmTestRunner$Vendor$ConsoleFormat$verticalBar,
						description + ' was longer than',
						A2($elm$core$String$join, ', ', originals.originalExpected),
						A2($elm$core$String$join, ', ', originals.originalActual));
				}
			} else {
				if (!_v1.b.b) {
					var _v2 = _v1.a;
					return A3(
						$mpizenberg$elm_test_runner$ElmTestRunner$Vendor$ConsoleFormat$verticalBar,
						description + ' was shorter than',
						A2($elm$core$String$join, ', ', originals.originalExpected),
						A2($elm$core$String$join, ', ', originals.originalActual));
				} else {
					var _v4 = _v1.a;
					var firstExpected = _v4.a;
					var restExpected = _v4.b;
					var _v5 = _v1.b;
					var firstActual = _v5.a;
					var restActual = _v5.b;
					if (_Utils_eq(firstExpected, firstActual)) {
						var $temp$index = index + 1,
							$temp$description = description,
							$temp$_v0 = {actual: restActual, expected: restExpected},
							$temp$originals = originals;
						index = $temp$index;
						description = $temp$description;
						_v0 = $temp$_v0;
						originals = $temp$originals;
						continue listDiffToString;
					} else {
						return A2(
							$elm$core$String$join,
							'',
							_List_fromArray(
								[
									A3(
									$mpizenberg$elm_test_runner$ElmTestRunner$Vendor$ConsoleFormat$verticalBar,
									description,
									A2($elm$core$String$join, ', ', originals.originalExpected),
									A2($elm$core$String$join, ', ', originals.originalActual)),
									'\n\nThe first diff is at index ',
									$elm$core$String$fromInt(index),
									': it was `',
									firstActual,
									'`, but `',
									firstExpected,
									'` was expected.'
								]));
					}
				}
			}
		}
	});
var $mpizenberg$elm_test_runner$ElmTestRunner$Vendor$ConsoleFormat$format = F3(
	function (formatEquality, description, reason) {
		switch (reason.$) {
			case 'Custom':
				return description;
			case 'Equality':
				var expected = reason.a;
				var actual = reason.b;
				var _v1 = A2($mpizenberg$elm_test_runner$ElmTestRunner$Vendor$ConsoleFormat$highlightEqual, expected, actual);
				if (_v1.$ === 'Nothing') {
					return A3($mpizenberg$elm_test_runner$ElmTestRunner$Vendor$ConsoleFormat$verticalBar, description, expected, actual);
				} else {
					var _v2 = _v1.a;
					var highlightedExpected = _v2.a;
					var highlightedActual = _v2.b;
					var _v3 = A2(formatEquality, highlightedExpected, highlightedActual);
					var formattedExpected = _v3.a;
					var formattedActual = _v3.b;
					return A3($mpizenberg$elm_test_runner$ElmTestRunner$Vendor$ConsoleFormat$verticalBar, description, formattedExpected, formattedActual);
				}
			case 'Comparison':
				var first = reason.a;
				var second = reason.b;
				return A3($mpizenberg$elm_test_runner$ElmTestRunner$Vendor$ConsoleFormat$verticalBar, description, first, second);
			case 'TODO':
				return description;
			case 'Invalid':
				if (reason.a.$ === 'BadDescription') {
					var _v4 = reason.a;
					return (description === '') ? 'The empty string is not a valid test description.' : ('This is an invalid test description: ' + description);
				} else {
					return description;
				}
			case 'ListDiff':
				var expected = reason.a;
				var actual = reason.b;
				return A4(
					$mpizenberg$elm_test_runner$ElmTestRunner$Vendor$ConsoleFormat$listDiffToString,
					0,
					description,
					{actual: actual, expected: expected},
					{originalActual: actual, originalExpected: expected});
			default:
				var expected = reason.a.expected;
				var actual = reason.a.actual;
				var extra = reason.a.extra;
				var missing = reason.a.missing;
				var missingStr = $elm$core$List$isEmpty(missing) ? '' : ('\nThese keys are missing: ' + function (d) {
					return '[ ' + (d + ' ]');
				}(
					A2($elm$core$String$join, ', ', missing)));
				var extraStr = $elm$core$List$isEmpty(extra) ? '' : ('\nThese keys are extra: ' + function (d) {
					return '[ ' + (d + ' ]');
				}(
					A2($elm$core$String$join, ', ', extra)));
				return A2(
					$elm$core$String$join,
					'',
					_List_fromArray(
						[
							A3($mpizenberg$elm_test_runner$ElmTestRunner$Vendor$ConsoleFormat$verticalBar, description, expected, actual),
							'\n',
							extraStr,
							missingStr
						]));
		}
	});
var $mpizenberg$elm_test_runner$ElmTestRunner$Vendor$NodeConsole$colorsInverted = function (str) {
	return A2(
		$elm$core$String$join,
		'',
		_List_fromArray(
			['\u001B[7m', str, '\u001B[27m']));
};
var $mpizenberg$elm_test_runner$ElmTestRunner$Vendor$FormatColor$fromHighlightable = $mpizenberg$elm_test_runner$ElmTestRunner$Vendor$Highlightable$resolve(
	{fromHighlighted: $mpizenberg$elm_test_runner$ElmTestRunner$Vendor$NodeConsole$colorsInverted, fromPlain: $elm$core$Basics$identity});
var $mpizenberg$elm_test_runner$ElmTestRunner$Vendor$FormatColor$formatEquality = F2(
	function (highlightedExpected, highlightedActual) {
		var formattedExpected = A2(
			$elm$core$String$join,
			'',
			A2($elm$core$List$map, $mpizenberg$elm_test_runner$ElmTestRunner$Vendor$FormatColor$fromHighlightable, highlightedExpected));
		var formattedActual = A2(
			$elm$core$String$join,
			'',
			A2($elm$core$List$map, $mpizenberg$elm_test_runner$ElmTestRunner$Vendor$FormatColor$fromHighlightable, highlightedActual));
		return _Utils_Tuple2(formattedExpected, formattedActual);
	});
var $mpizenberg$elm_test_runner$ElmTestRunner$Vendor$FormatMonochrome$fromHighlightable = function (indicator) {
	return $mpizenberg$elm_test_runner$ElmTestRunner$Vendor$Highlightable$resolve(
		{
			fromHighlighted: function (_char) {
				return _Utils_Tuple2(_char, indicator);
			},
			fromPlain: function (_char) {
				return _Utils_Tuple2(_char, ' ');
			}
		});
};
var $elm$core$List$unzip = function (pairs) {
	var step = F2(
		function (_v0, _v1) {
			var x = _v0.a;
			var y = _v0.b;
			var xs = _v1.a;
			var ys = _v1.b;
			return _Utils_Tuple2(
				A2($elm$core$List$cons, x, xs),
				A2($elm$core$List$cons, y, ys));
		});
	return A3(
		$elm$core$List$foldr,
		step,
		_Utils_Tuple2(_List_Nil, _List_Nil),
		pairs);
};
var $mpizenberg$elm_test_runner$ElmTestRunner$Vendor$FormatMonochrome$formatEquality = F2(
	function (highlightedExpected, highlightedActual) {
		var _v0 = $elm$core$List$unzip(
			A2(
				$elm$core$List$map,
				$mpizenberg$elm_test_runner$ElmTestRunner$Vendor$FormatMonochrome$fromHighlightable('▲'),
				highlightedExpected));
		var formattedExpected = _v0.a;
		var expectedIndicators = _v0.b;
		var combinedExpected = A2(
			$elm$core$String$join,
			'\n',
			_List_fromArray(
				[
					A2($elm$core$String$join, '', formattedExpected),
					A2($elm$core$String$join, '', expectedIndicators)
				]));
		var _v1 = $elm$core$List$unzip(
			A2(
				$elm$core$List$map,
				$mpizenberg$elm_test_runner$ElmTestRunner$Vendor$FormatMonochrome$fromHighlightable('▼'),
				highlightedActual));
		var formattedActual = _v1.a;
		var actualIndicators = _v1.b;
		var combinedActual = A2(
			$elm$core$String$join,
			'\n',
			_List_fromArray(
				[
					A2($elm$core$String$join, '', actualIndicators),
					A2($elm$core$String$join, '', formattedActual)
				]));
		return _Utils_Tuple2(combinedExpected, combinedActual);
	});
var $mpizenberg$elm_test_runner$ElmTestRunner$Reporter$ConsoleColor$indent = function (str) {
	return A2(
		$elm$core$String$join,
		'\n',
		A2(
			$elm$core$List$map,
			function (line) {
				return '    ' + line;
			},
			A2($elm$core$String$split, '\n', str)));
};
var $mpizenberg$elm_test_runner$ElmTestRunner$Reporter$ConsoleColor$failureToText = F3(
	function (useColor, _v0, distributionReport) {
		var given = _v0.given;
		var description = _v0.description;
		var reason = _v0.reason;
		var formatEquality = function () {
			if (useColor.$ === 'Monochrome') {
				return $mpizenberg$elm_test_runner$ElmTestRunner$Vendor$FormatMonochrome$formatEquality;
			} else {
				return $mpizenberg$elm_test_runner$ElmTestRunner$Vendor$FormatColor$formatEquality;
			}
		}();
		var messageText = $mpizenberg$elm_test_runner$ElmTestRunner$Vendor$ConsoleText$plain(
			'\n' + ($mpizenberg$elm_test_runner$ElmTestRunner$Reporter$ConsoleColor$indent(
				A3($mpizenberg$elm_test_runner$ElmTestRunner$Vendor$ConsoleFormat$format, formatEquality, description, reason)) + '\n\n'));
		return $mpizenberg$elm_test_runner$ElmTestRunner$Vendor$ConsoleText$concat(
			A2(
				$elm$core$List$filterMap,
				$elm$core$Basics$identity,
				_List_fromArray(
					[
						A2(
						$elm$core$Maybe$map,
						function (s) {
							return $mpizenberg$elm_test_runner$ElmTestRunner$Vendor$ConsoleText$dark(
								$mpizenberg$elm_test_runner$ElmTestRunner$Vendor$ConsoleText$plain(
									$mpizenberg$elm_test_runner$ElmTestRunner$Reporter$ConsoleColor$indent('\n' + (s + '\n'))));
						},
						$mpizenberg$elm_test_runner$ElmTestRunner$Reporter$ConsoleColor$distributionReportToString(distributionReport)),
						A2(
						$elm$core$Maybe$map,
						function (str) {
							return $mpizenberg$elm_test_runner$ElmTestRunner$Vendor$ConsoleText$dark(
								$mpizenberg$elm_test_runner$ElmTestRunner$Vendor$ConsoleText$plain('\nGiven ' + (str + '\n')));
						},
						given),
						$elm$core$Maybe$Just(messageText)
					])));
	});
var $mpizenberg$elm_test_runner$ElmTestRunner$Reporter$ConsoleColor$formatTodo = F2(
	function (labels, todo) {
		return $elm$core$String$concat(
			_List_fromArray(
				[
					'◦ ',
					$elm$core$String$concat(
					A2(
						$elm$core$List$map,
						function (l) {
							return l + ' → ';
						},
						labels)),
					'TODO: ',
					todo
				]));
	});
var $mpizenberg$elm_test_runner$ElmTestRunner$Reporter$ConsoleColor$logsToText = function (logs) {
	return $elm$core$List$isEmpty(logs) ? $mpizenberg$elm_test_runner$ElmTestRunner$Vendor$ConsoleText$plain('') : $mpizenberg$elm_test_runner$ElmTestRunner$Vendor$ConsoleText$plain(
		A2(
			$elm$core$String$join,
			'\n',
			_List_fromArray(
				[
					$mpizenberg$elm_test_runner$ElmTestRunner$Reporter$ConsoleColor$indent('with debug logs:\n'),
					$elm$core$String$concat(logs),
					''
				])));
};
var $mpizenberg$elm_test_runner$ElmTestRunner$Reporter$ConsoleColor$successLabelsToText = A2(
	$elm$core$Basics$composeR,
	A2(
		$elm_explorations$test$Test$Runner$formatLabels,
		A2(
			$elm$core$Basics$composeL,
			A2($elm$core$Basics$composeL, $mpizenberg$elm_test_runner$ElmTestRunner$Vendor$ConsoleText$dark, $mpizenberg$elm_test_runner$ElmTestRunner$Vendor$ConsoleText$plain),
			$mpizenberg$elm_test_runner$ElmTestRunner$Reporter$ConsoleColor$withChar(
				_Utils_chr('↓'))),
		A2(
			$elm$core$Basics$composeL,
			$mpizenberg$elm_test_runner$ElmTestRunner$Vendor$ConsoleText$green,
			$mpizenberg$elm_test_runner$ElmTestRunner$Reporter$ConsoleColor$withChar(
				_Utils_chr('✓')))),
	$mpizenberg$elm_test_runner$ElmTestRunner$Vendor$ConsoleText$concat);
var $mpizenberg$elm_test_runner$ElmTestRunner$Reporter$ConsoleColor$onResult = F2(
	function (useColor, testResult) {
		if (testResult.$ === 'Passed') {
			var labels = testResult.a.labels;
			var distributionReports = testResult.a.distributionReports;
			var successDistributionReports = A2($elm$core$List$filterMap, $mpizenberg$elm_test_runner$ElmTestRunner$Reporter$ConsoleColor$distributionReportToString, distributionReports);
			return $elm$core$List$isEmpty(successDistributionReports) ? $elm$core$Maybe$Nothing : $elm$core$Maybe$Just(
				$mpizenberg$elm_test_runner$ElmTestRunner$Vendor$ConsoleText$concat(
					_List_fromArray(
						[
							$mpizenberg$elm_test_runner$ElmTestRunner$Reporter$ConsoleColor$successLabelsToText(labels),
							$mpizenberg$elm_test_runner$ElmTestRunner$Vendor$ConsoleText$plain('\n'),
							$mpizenberg$elm_test_runner$ElmTestRunner$Vendor$ConsoleText$dark(
							$mpizenberg$elm_test_runner$ElmTestRunner$Vendor$ConsoleText$plain(
								$mpizenberg$elm_test_runner$ElmTestRunner$Reporter$ConsoleColor$indent(
									A2($elm$core$String$join, '\n\n\n', successDistributionReports)))),
							$mpizenberg$elm_test_runner$ElmTestRunner$Vendor$ConsoleText$plain('\n\n')
						])));
		} else {
			var labels = testResult.a.labels;
			var todos = testResult.a.todos;
			var failures = testResult.a.failures;
			var logs = testResult.a.logs;
			var distributionReports = testResult.a.distributionReports;
			return $elm$core$List$isEmpty(todos) ? $elm$core$Maybe$Just(
				$mpizenberg$elm_test_runner$ElmTestRunner$Vendor$ConsoleText$concat(
					$elm$core$List$concat(
						_List_fromArray(
							[
								_List_fromArray(
								[
									$mpizenberg$elm_test_runner$ElmTestRunner$Reporter$ConsoleColor$failureLabelsToText(labels)
								]),
								A3(
								$elm$core$List$map2,
								$mpizenberg$elm_test_runner$ElmTestRunner$Reporter$ConsoleColor$failureToText(useColor),
								failures,
								distributionReports),
								_List_fromArray(
								[
									$mpizenberg$elm_test_runner$ElmTestRunner$Reporter$ConsoleColor$logsToText(logs)
								])
							])))) : $elm$core$Maybe$Just(
				$mpizenberg$elm_test_runner$ElmTestRunner$Vendor$ConsoleText$plain(
					$elm$core$String$concat(
						A2(
							$elm$core$List$map,
							function (todo) {
								return A2($mpizenberg$elm_test_runner$ElmTestRunner$Reporter$ConsoleColor$formatTodo, labels, todo) + '\n';
							},
							todos))));
		}
	});
var $mpizenberg$elm_test_runner$ElmTestRunner$Vendor$NodeConsole$dark = function (str) {
	return A2(
		$elm$core$String$join,
		'',
		_List_fromArray(
			['\u001B[2m', str, '\u001B[22m']));
};
var $mpizenberg$elm_test_runner$ElmTestRunner$Vendor$ConsoleText$applyModifiersHelp = F2(
	function (modifier, str) {
		if (modifier.$ === 'Inverted') {
			return $mpizenberg$elm_test_runner$ElmTestRunner$Vendor$NodeConsole$colorsInverted(str);
		} else {
			return $mpizenberg$elm_test_runner$ElmTestRunner$Vendor$NodeConsole$dark(str);
		}
	});
var $mpizenberg$elm_test_runner$ElmTestRunner$Vendor$ConsoleText$applyModifiers = F2(
	function (modifiers, str) {
		return A3($elm$core$List$foldl, $mpizenberg$elm_test_runner$ElmTestRunner$Vendor$ConsoleText$applyModifiersHelp, str, modifiers);
	});
var $mpizenberg$elm_test_runner$ElmTestRunner$Vendor$NodeConsole$bold = function (str) {
	return A2(
		$elm$core$String$join,
		'',
		_List_fromArray(
			['\u001B[1m', str, '\u001B[22m']));
};
var $mpizenberg$elm_test_runner$ElmTestRunner$Vendor$NodeConsole$underline = function (str) {
	return A2(
		$elm$core$String$join,
		'',
		_List_fromArray(
			['\u001B[4m', str, '\u001B[24m']));
};
var $mpizenberg$elm_test_runner$ElmTestRunner$Vendor$ConsoleText$applyStyle = F2(
	function (style, str) {
		switch (style.$) {
			case 'Normal':
				return str;
			case 'Bold':
				return $mpizenberg$elm_test_runner$ElmTestRunner$Vendor$NodeConsole$bold(str);
			default:
				return $mpizenberg$elm_test_runner$ElmTestRunner$Vendor$NodeConsole$underline(str);
		}
	});
var $mpizenberg$elm_test_runner$ElmTestRunner$Vendor$NodeConsole$bgBlack = function (str) {
	return A2(
		$elm$core$String$join,
		'',
		_List_fromArray(
			['\u001B[40m', str, '\u001B[49m']));
};
var $mpizenberg$elm_test_runner$ElmTestRunner$Vendor$NodeConsole$bgBlue = function (str) {
	return A2(
		$elm$core$String$join,
		'',
		_List_fromArray(
			['\u001B[44m', str, '\u001B[49m']));
};
var $mpizenberg$elm_test_runner$ElmTestRunner$Vendor$NodeConsole$bgCyan = function (str) {
	return A2(
		$elm$core$String$join,
		'',
		_List_fromArray(
			['\u001B[46m', str, '\u001B[49m']));
};
var $mpizenberg$elm_test_runner$ElmTestRunner$Vendor$NodeConsole$bgGreen = function (str) {
	return A2(
		$elm$core$String$join,
		'',
		_List_fromArray(
			['\u001B[42m', str, '\u001B[49m']));
};
var $mpizenberg$elm_test_runner$ElmTestRunner$Vendor$NodeConsole$bgMagenta = function (str) {
	return A2(
		$elm$core$String$join,
		'',
		_List_fromArray(
			['\u001B[45m', str, '\u001B[49m']));
};
var $mpizenberg$elm_test_runner$ElmTestRunner$Vendor$NodeConsole$bgRed = function (str) {
	return A2(
		$elm$core$String$join,
		'',
		_List_fromArray(
			['\u001B[41m', str, '\u001B[49m']));
};
var $mpizenberg$elm_test_runner$ElmTestRunner$Vendor$NodeConsole$bgWhite = function (str) {
	return A2(
		$elm$core$String$join,
		'',
		_List_fromArray(
			['\u001B[47m', str, '\u001B[49m']));
};
var $mpizenberg$elm_test_runner$ElmTestRunner$Vendor$NodeConsole$bgYellow = function (str) {
	return A2(
		$elm$core$String$join,
		'',
		_List_fromArray(
			['\u001B[43m', str, '\u001B[49m']));
};
var $mpizenberg$elm_test_runner$ElmTestRunner$Vendor$ConsoleText$colorizeBackground = F2(
	function (color, str) {
		switch (color.$) {
			case 'Default':
				return str;
			case 'Red':
				return $mpizenberg$elm_test_runner$ElmTestRunner$Vendor$NodeConsole$bgRed(str);
			case 'Green':
				return $mpizenberg$elm_test_runner$ElmTestRunner$Vendor$NodeConsole$bgGreen(str);
			case 'Yellow':
				return $mpizenberg$elm_test_runner$ElmTestRunner$Vendor$NodeConsole$bgYellow(str);
			case 'Black':
				return $mpizenberg$elm_test_runner$ElmTestRunner$Vendor$NodeConsole$bgBlack(str);
			case 'Blue':
				return $mpizenberg$elm_test_runner$ElmTestRunner$Vendor$NodeConsole$bgBlue(str);
			case 'Magenta':
				return $mpizenberg$elm_test_runner$ElmTestRunner$Vendor$NodeConsole$bgMagenta(str);
			case 'Cyan':
				return $mpizenberg$elm_test_runner$ElmTestRunner$Vendor$NodeConsole$bgCyan(str);
			default:
				return $mpizenberg$elm_test_runner$ElmTestRunner$Vendor$NodeConsole$bgWhite(str);
		}
	});
var $mpizenberg$elm_test_runner$ElmTestRunner$Vendor$NodeConsole$black = function (str) {
	return A2(
		$elm$core$String$join,
		'',
		_List_fromArray(
			['\u001B[30m', str, '\u001B[39m']));
};
var $mpizenberg$elm_test_runner$ElmTestRunner$Vendor$NodeConsole$blue = function (str) {
	return A2(
		$elm$core$String$join,
		'',
		_List_fromArray(
			['\u001B[34m', str, '\u001B[39m']));
};
var $mpizenberg$elm_test_runner$ElmTestRunner$Vendor$NodeConsole$cyan = function (str) {
	return A2(
		$elm$core$String$join,
		'',
		_List_fromArray(
			['\u001B[36m', str, '\u001B[39m']));
};
var $mpizenberg$elm_test_runner$ElmTestRunner$Vendor$NodeConsole$green = function (str) {
	return A2(
		$elm$core$String$join,
		'',
		_List_fromArray(
			['\u001B[32m', str, '\u001B[39m']));
};
var $mpizenberg$elm_test_runner$ElmTestRunner$Vendor$NodeConsole$magenta = function (str) {
	return A2(
		$elm$core$String$join,
		'',
		_List_fromArray(
			['\u001B[35m', str, '\u001B[39m']));
};
var $mpizenberg$elm_test_runner$ElmTestRunner$Vendor$NodeConsole$red = function (str) {
	return A2(
		$elm$core$String$join,
		'',
		_List_fromArray(
			['\u001B[31m', str, '\u001B[39m']));
};
var $mpizenberg$elm_test_runner$ElmTestRunner$Vendor$NodeConsole$white = function (str) {
	return A2(
		$elm$core$String$join,
		'',
		_List_fromArray(
			['\u001B[37m', str, '\u001B[39m']));
};
var $mpizenberg$elm_test_runner$ElmTestRunner$Vendor$NodeConsole$yellow = function (str) {
	return A2(
		$elm$core$String$join,
		'',
		_List_fromArray(
			['\u001B[33m', str, '\u001B[39m']));
};
var $mpizenberg$elm_test_runner$ElmTestRunner$Vendor$ConsoleText$colorizeForeground = F2(
	function (color, str) {
		switch (color.$) {
			case 'Default':
				return str;
			case 'Red':
				return $mpizenberg$elm_test_runner$ElmTestRunner$Vendor$NodeConsole$red(str);
			case 'Green':
				return $mpizenberg$elm_test_runner$ElmTestRunner$Vendor$NodeConsole$green(str);
			case 'Yellow':
				return $mpizenberg$elm_test_runner$ElmTestRunner$Vendor$NodeConsole$yellow(str);
			case 'Black':
				return $mpizenberg$elm_test_runner$ElmTestRunner$Vendor$NodeConsole$black(str);
			case 'Blue':
				return $mpizenberg$elm_test_runner$ElmTestRunner$Vendor$NodeConsole$blue(str);
			case 'Magenta':
				return $mpizenberg$elm_test_runner$ElmTestRunner$Vendor$NodeConsole$magenta(str);
			case 'Cyan':
				return $mpizenberg$elm_test_runner$ElmTestRunner$Vendor$NodeConsole$cyan(str);
			default:
				return $mpizenberg$elm_test_runner$ElmTestRunner$Vendor$NodeConsole$white(str);
		}
	});
var $mpizenberg$elm_test_runner$ElmTestRunner$Vendor$ConsoleText$render = F2(
	function (useColor, txt) {
		if (txt.$ === 'Text') {
			var attrs = txt.a;
			var str = txt.b;
			if (useColor.$ === 'UseColor') {
				return A2(
					$mpizenberg$elm_test_runner$ElmTestRunner$Vendor$ConsoleText$applyStyle,
					attrs.style,
					A2(
						$mpizenberg$elm_test_runner$ElmTestRunner$Vendor$ConsoleText$applyModifiers,
						attrs.modifiers,
						A2(
							$mpizenberg$elm_test_runner$ElmTestRunner$Vendor$ConsoleText$colorizeForeground,
							attrs.foreground,
							A2($mpizenberg$elm_test_runner$ElmTestRunner$Vendor$ConsoleText$colorizeBackground, attrs.background, str))));
			} else {
				return str;
			}
		} else {
			var texts = txt.a;
			return A2(
				$elm$core$String$join,
				'',
				A2(
					$elm$core$List$map,
					$mpizenberg$elm_test_runner$ElmTestRunner$Vendor$ConsoleText$render(useColor),
					texts));
		}
	});
var $mpizenberg$elm_test_runner$ElmTestRunner$Reporter$ConsoleColor$implementation = F2(
	function (useColor, options) {
		return {
			onBegin: A2(
				$elm$core$Basics$composeR,
				$mpizenberg$elm_test_runner$ElmTestRunner$Reporter$ConsoleColor$onBegin(options),
				$elm$core$Maybe$map(
					$mpizenberg$elm_test_runner$ElmTestRunner$Vendor$ConsoleText$render(useColor))),
			onEnd: F2(
				function (kindResult, testResults) {
					return A2(
						$elm$core$Maybe$map,
						$mpizenberg$elm_test_runner$ElmTestRunner$Vendor$ConsoleText$render(useColor),
						A3($mpizenberg$elm_test_runner$ElmTestRunner$Reporter$ConsoleColor$onEnd, options.verbosity, kindResult, testResults));
				}),
			onResult: A2(
				$elm$core$Basics$composeR,
				$mpizenberg$elm_test_runner$ElmTestRunner$Reporter$ConsoleColor$onResult(useColor),
				$elm$core$Maybe$map(
					$mpizenberg$elm_test_runner$ElmTestRunner$Vendor$ConsoleText$render(useColor)))
		};
	});
var $mpizenberg$elm_test_runner$ElmTestRunner$Reporter$ConsoleDebug$onBegin = F2(
	function (_v0, testsCount) {
		var seed = _v0.seed;
		var fuzzRuns = _v0.fuzzRuns;
		return $elm$core$Maybe$Just(
			A3(
				$elm$core$String$replace,
				'{{ fuzzRuns }}',
				$elm$core$String$fromInt(fuzzRuns),
				A3(
					$elm$core$String$replace,
					'{{ seed }}',
					$elm$core$String$fromInt(seed),
					A3(
						$elm$core$String$replace,
						'{{ testsCount }}',
						$elm$core$String$fromInt(testsCount),
						'\nRunning {{ testsCount }} tests. To reproduce these results later,\nrun elm-test-rs with --seed {{ seed }} and --fuzz {{ fuzzRuns }}.\n'))));
	});
var $mpizenberg$elm_test_runner$ElmTestRunner$Reporter$ConsoleDebug$summaryTitle = F3(
	function (kind, failedCount, todoCount) {
		var _v0 = _Utils_Tuple3(kind, failedCount, todoCount);
		if (!_v0.b) {
			switch (_v0.a.$) {
				case 'Plain':
					switch (_v0.c) {
						case 0:
							var _v1 = _v0.a;
							return 'PASSED';
						case 1:
							var _v2 = _v0.a;
							return 'INCOMPLETE (because there is a Test.todo left)';
						default:
							var _v3 = _v0.a;
							return 'INCOMPLETE (because there are some Test.todo left)';
					}
				case 'Only':
					var _v4 = _v0.a;
					return 'INCOMPLETE (because Test.only was used)';
				default:
					var _v5 = _v0.a;
					return 'INCOMPLETE (because at least one test is skipped)';
			}
		} else {
			return 'FAILED';
		}
	});
var $mpizenberg$elm_test_runner$ElmTestRunner$Reporter$ConsoleDebug$formatSummary = F2(
	function (kind, _v0) {
		var totalDuration = _v0.totalDuration;
		var passedCount = _v0.passedCount;
		var failedCount = _v0.failedCount;
		var todoCount = _v0.todoCount;
		return A3(
			$elm$core$String$replace,
			'{{ failed }}',
			$elm$core$String$fromInt(failedCount),
			A3(
				$elm$core$String$replace,
				'{{ passed }}',
				$elm$core$String$fromInt(passedCount),
				A3(
					$elm$core$String$replace,
					'{{ duration }}',
					$elm$core$String$fromInt(
						$elm$core$Basics$round(totalDuration)),
					A3(
						$elm$core$String$replace,
						'{{ result }}',
						A3($mpizenberg$elm_test_runner$ElmTestRunner$Reporter$ConsoleDebug$summaryTitle, kind, failedCount, todoCount),
						'\nTEST RUN {{ result }}\n\nPassed:   {{ passed }}\nFailed:   {{ failed }}\nRunning duration (workers): {{ duration }} ms\n'))));
	});
var $mpizenberg$elm_test_runner$ElmTestRunner$Reporter$ConsoleDebug$onEnd = F2(
	function (kindResult, testResults) {
		if (kindResult.$ === 'Err') {
			var err = kindResult.a;
			return $elm$core$Maybe$Just('Your tests are invalid: ' + (err + '\n'));
		} else {
			var kind = kindResult.a;
			return $elm$core$Maybe$Just(
				A2(
					$mpizenberg$elm_test_runner$ElmTestRunner$Reporter$ConsoleDebug$formatSummary,
					kind,
					$mpizenberg$elm_test_runner$ElmTestRunner$Result$summary(testResults)));
		}
	});
var $elm$core$Debug$toString = _Debug_toString;
var $mpizenberg$elm_test_runner$ElmTestRunner$Reporter$ConsoleDebug$displayFailureContent = F4(
	function (todos, failures, distributionReports, logs) {
		return A3(
			$elm$core$String$replace,
			'{{ logs }}',
			$elm$core$String$concat(logs),
			A3(
				$elm$core$String$replace,
				'{{ distributionReports }}',
				$elm$core$Debug$toString(distributionReports),
				A3(
					$elm$core$String$replace,
					'{{ failures }}',
					$elm$core$Debug$toString(failures),
					A3(
						$elm$core$String$replace,
						'{{ todos }}',
						$elm$core$Debug$toString(todos),
						'with todos: {{ todos }}\nwith failures: {{ failures }}\nwith distribution reports: {{ distributionReports }}\nwith debug logs:\n\n{{ logs }}\n'))));
	});
var $mpizenberg$elm_test_runner$ElmTestRunner$Reporter$ConsoleDebug$formatLabelsHelp = F2(
	function (formattedLines, labels) {
		formatLabelsHelp:
		while (true) {
			var _v0 = _Utils_Tuple2(formattedLines, labels);
			if (!_v0.b.b) {
				return A2($elm$core$String$join, '\n', formattedLines);
			} else {
				if (!_v0.a.b) {
					var _v1 = _v0.b;
					var testName = _v1.a;
					var location = _v1.b;
					var $temp$formattedLines = _List_fromArray(
						['X ' + testName]),
						$temp$labels = location;
					formattedLines = $temp$formattedLines;
					labels = $temp$labels;
					continue formatLabelsHelp;
				} else {
					var _v2 = _v0.b;
					var loc = _v2.a;
					var location = _v2.b;
					var $temp$formattedLines = A2($elm$core$List$cons, '| ' + loc, formattedLines),
						$temp$labels = location;
					formattedLines = $temp$formattedLines;
					labels = $temp$labels;
					continue formatLabelsHelp;
				}
			}
		}
	});
var $mpizenberg$elm_test_runner$ElmTestRunner$Reporter$ConsoleDebug$formatLabels = $mpizenberg$elm_test_runner$ElmTestRunner$Reporter$ConsoleDebug$formatLabelsHelp(_List_Nil);
var $mpizenberg$elm_test_runner$ElmTestRunner$Reporter$ConsoleDebug$indent = function (str) {
	return A2(
		$elm$core$String$join,
		'\n',
		A2(
			$elm$core$List$map,
			function (line) {
				return '    ' + line;
			},
			A2($elm$core$String$split, '\n', str)));
};
var $mpizenberg$elm_test_runner$ElmTestRunner$Reporter$ConsoleDebug$onResult = function (result) {
	if (result.$ === 'Passed') {
		return $elm$core$Maybe$Nothing;
	} else {
		var labels = result.a.labels;
		var todos = result.a.todos;
		var failures = result.a.failures;
		var logs = result.a.logs;
		var distributionReports = result.a.distributionReports;
		return $elm$core$Maybe$Just(
			A2(
				$elm$core$String$join,
				'\n',
				_List_fromArray(
					[
						'',
						$mpizenberg$elm_test_runner$ElmTestRunner$Reporter$ConsoleDebug$formatLabels(labels),
						'',
						$mpizenberg$elm_test_runner$ElmTestRunner$Reporter$ConsoleDebug$indent(
						A4($mpizenberg$elm_test_runner$ElmTestRunner$Reporter$ConsoleDebug$displayFailureContent, todos, failures, distributionReports, logs))
					])));
	}
};
var $mpizenberg$elm_test_runner$ElmTestRunner$Reporter$ConsoleDebug$implementation = function (options) {
	return {
		onBegin: $mpizenberg$elm_test_runner$ElmTestRunner$Reporter$ConsoleDebug$onBegin(options),
		onEnd: $mpizenberg$elm_test_runner$ElmTestRunner$Reporter$ConsoleDebug$onEnd,
		onResult: $mpizenberg$elm_test_runner$ElmTestRunner$Reporter$ConsoleDebug$onResult
	};
};
var $elm$json$Json$Encode$array = F2(
	function (func, entries) {
		return _Json_wrap(
			A3(
				$elm$core$Array$foldl,
				_Json_addEntry(func),
				_Json_emptyArray(_Utils_Tuple0),
				entries));
	});
var $elm$json$Json$Encode$null = _Json_encodeNull;
var $mpizenberg$elm_test_runner$ElmTestRunner$Reporter$Exercism$encodeExercismResult = function (_v0) {
	var name = _v0.name;
	var taskId = _v0.taskId;
	var status = _v0.status;
	var message = _v0.message;
	var output = _v0.output;
	return $elm$json$Json$Encode$object(
		_List_fromArray(
			[
				_Utils_Tuple2(
				'name',
				$elm$json$Json$Encode$string(name)),
				_Utils_Tuple2(
				'task_id',
				A2(
					$elm$core$Maybe$withDefault,
					$elm$json$Json$Encode$null,
					A2($elm$core$Maybe$map, $elm$json$Json$Encode$int, taskId))),
				_Utils_Tuple2(
				'status',
				$elm$json$Json$Encode$string(status)),
				_Utils_Tuple2(
				'message',
				A2(
					$elm$core$Maybe$withDefault,
					$elm$json$Json$Encode$null,
					A2($elm$core$Maybe$map, $elm$json$Json$Encode$string, message))),
				_Utils_Tuple2(
				'output',
				A2(
					$elm$core$Maybe$withDefault,
					$elm$json$Json$Encode$null,
					A2($elm$core$Maybe$map, $elm$json$Json$Encode$string, output))),
				_Utils_Tuple2('test_code', $elm$json$Json$Encode$null)
			]));
};
var $elm$core$Elm$JsArray$map = _JsArray_map;
var $elm$core$Array$map = F2(
	function (func, _v0) {
		var len = _v0.a;
		var startShift = _v0.b;
		var tree = _v0.c;
		var tail = _v0.d;
		var helper = function (node) {
			if (node.$ === 'SubTree') {
				var subTree = node.a;
				return $elm$core$Array$SubTree(
					A2($elm$core$Elm$JsArray$map, helper, subTree));
			} else {
				var values = node.a;
				return $elm$core$Array$Leaf(
					A2($elm$core$Elm$JsArray$map, func, values));
			}
		};
		return A4(
			$elm$core$Array$Array_elm_builtin,
			len,
			startShift,
			A2($elm$core$Elm$JsArray$map, helper, tree),
			A2($elm$core$Elm$JsArray$map, func, tail));
	});
var $mpizenberg$elm_test_runner$ElmTestRunner$Reporter$Exercism$summaryStatus = F2(
	function (kind, _v0) {
		var failedCount = _v0.failedCount;
		var todoCount = _v0.todoCount;
		var _v1 = _Utils_Tuple3(kind, failedCount, todoCount);
		if (((_v1.a.$ === 'Plain') && (!_v1.b)) && (!_v1.c)) {
			var _v2 = _v1.a;
			return 'pass';
		} else {
			return 'fail';
		}
	});
var $elm$core$List$head = function (list) {
	if (list.b) {
		var x = list.a;
		var xs = list.b;
		return $elm$core$Maybe$Just(x);
	} else {
		return $elm$core$Maybe$Nothing;
	}
};
var $elm$core$String$toInt = _String_toInt;
var $mpizenberg$elm_test_runner$ElmTestRunner$Reporter$Exercism$extractTaskId = function (labels) {
	return $elm$core$List$head(
		A2($elm$core$List$filterMap, $elm$core$String$toInt, labels));
};
var $mpizenberg$elm_test_runner$ElmTestRunner$Reporter$Exercism$extractTestName = function (labels) {
	return A2(
		$elm$core$String$join,
		' > ',
		A2(
			$elm$core$List$drop,
			1,
			$elm$core$List$reverse(labels)));
};
var $mpizenberg$elm_test_runner$ElmTestRunner$Reporter$Exercism$indent = function (str) {
	return A2(
		$elm$core$String$join,
		'\n',
		A2(
			$elm$core$List$map,
			function (line) {
				return '    ' + line;
			},
			A2($elm$core$String$split, '\n', str)));
};
var $mpizenberg$elm_test_runner$ElmTestRunner$Reporter$Exercism$failureToText = F2(
	function (useColor, _v0) {
		var given = _v0.given;
		var description = _v0.description;
		var reason = _v0.reason;
		var formatEquality = function () {
			if (useColor.$ === 'Monochrome') {
				return $mpizenberg$elm_test_runner$ElmTestRunner$Vendor$FormatMonochrome$formatEquality;
			} else {
				return $mpizenberg$elm_test_runner$ElmTestRunner$Vendor$FormatColor$formatEquality;
			}
		}();
		var messageText = $mpizenberg$elm_test_runner$ElmTestRunner$Vendor$ConsoleText$plain(
			'\n' + ($mpizenberg$elm_test_runner$ElmTestRunner$Reporter$Exercism$indent(
				A3($mpizenberg$elm_test_runner$ElmTestRunner$Vendor$ConsoleFormat$format, formatEquality, description, reason)) + '\n\n'));
		if (given.$ === 'Nothing') {
			return messageText;
		} else {
			var givenStr = given.a;
			return $mpizenberg$elm_test_runner$ElmTestRunner$Vendor$ConsoleText$concat(
				_List_fromArray(
					[
						$mpizenberg$elm_test_runner$ElmTestRunner$Vendor$ConsoleText$dark(
						$mpizenberg$elm_test_runner$ElmTestRunner$Vendor$ConsoleText$plain('\nGiven ' + (givenStr + '\n'))),
						messageText
					]));
		}
	});
var $mpizenberg$elm_test_runner$ElmTestRunner$Reporter$Exercism$failureMessage = F2(
	function (failures, todos) {
		var useColor = $mpizenberg$elm_test_runner$ElmTestRunner$Vendor$ConsoleText$Monochrome;
		return (!$elm$core$List$isEmpty(failures)) ? A2(
			$mpizenberg$elm_test_runner$ElmTestRunner$Vendor$ConsoleText$render,
			useColor,
			$mpizenberg$elm_test_runner$ElmTestRunner$Vendor$ConsoleText$concat(
				A2(
					$elm$core$List$map,
					$mpizenberg$elm_test_runner$ElmTestRunner$Reporter$Exercism$failureToText(useColor),
					failures))) : A2($elm$core$String$join, '\n', todos);
	});
var $mpizenberg$elm_test_runner$ElmTestRunner$Reporter$Exercism$toExercismResult = function (testResult) {
	if (testResult.$ === 'Passed') {
		var labels = testResult.a.labels;
		return {
			message: $elm$core$Maybe$Nothing,
			name: $mpizenberg$elm_test_runner$ElmTestRunner$Reporter$Exercism$extractTestName(labels),
			output: $elm$core$Maybe$Nothing,
			status: 'pass',
			taskId: $mpizenberg$elm_test_runner$ElmTestRunner$Reporter$Exercism$extractTaskId(labels)
		};
	} else {
		var labels = testResult.a.labels;
		var failures = testResult.a.failures;
		var todos = testResult.a.todos;
		var logs = testResult.a.logs;
		var distributionReports = testResult.a.distributionReports;
		return {
			message: $elm$core$Maybe$Just(
				A2($mpizenberg$elm_test_runner$ElmTestRunner$Reporter$Exercism$failureMessage, failures, todos)),
			name: $mpizenberg$elm_test_runner$ElmTestRunner$Reporter$Exercism$extractTestName(labels),
			output: function () {
				if (!logs.b) {
					return $elm$core$Maybe$Nothing;
				} else {
					return $elm$core$Maybe$Just(
						A2($elm$core$String$join, '\n', logs));
				}
			}(),
			status: 'fail',
			taskId: $mpizenberg$elm_test_runner$ElmTestRunner$Reporter$Exercism$extractTaskId(labels)
		};
	}
};
var $mpizenberg$elm_test_runner$ElmTestRunner$Reporter$Exercism$summary = F2(
	function (kindOrErr, results) {
		if (kindOrErr.$ === 'Err') {
			var err = kindOrErr.a;
			return A2(
				$elm$json$Json$Encode$encode,
				2,
				$elm$json$Json$Encode$object(
					_List_fromArray(
						[
							_Utils_Tuple2(
							'version',
							$elm$json$Json$Encode$int(3)),
							_Utils_Tuple2(
							'status',
							$elm$json$Json$Encode$string('error')),
							_Utils_Tuple2(
							'message',
							$elm$json$Json$Encode$string(err))
						])));
		} else {
			var kind = kindOrErr.a;
			var tests = A2($elm$core$Array$map, $mpizenberg$elm_test_runner$ElmTestRunner$Reporter$Exercism$toExercismResult, results);
			var status = A2(
				$mpizenberg$elm_test_runner$ElmTestRunner$Reporter$Exercism$summaryStatus,
				kind,
				$mpizenberg$elm_test_runner$ElmTestRunner$Result$summary(results));
			return A2(
				$elm$json$Json$Encode$encode,
				2,
				$elm$json$Json$Encode$object(
					_List_fromArray(
						[
							_Utils_Tuple2(
							'version',
							$elm$json$Json$Encode$int(3)),
							_Utils_Tuple2(
							'status',
							$elm$json$Json$Encode$string(status)),
							_Utils_Tuple2(
							'tests',
							A2($elm$json$Json$Encode$array, $mpizenberg$elm_test_runner$ElmTestRunner$Reporter$Exercism$encodeExercismResult, tests))
						])));
		}
	});
var $mpizenberg$elm_test_runner$ElmTestRunner$Reporter$Exercism$implementation = {
	onBegin: $elm$core$Basics$always($elm$core$Maybe$Nothing),
	onEnd: F2(
		function (kind, result) {
			return $elm$core$Maybe$Just(
				A2($mpizenberg$elm_test_runner$ElmTestRunner$Reporter$Exercism$summary, kind, result));
		}),
	onResult: $elm$core$Basics$always($elm$core$Maybe$Nothing)
};
var $elm$json$Json$Encode$list = F2(
	function (func, entries) {
		return _Json_wrap(
			A3(
				$elm$core$List$foldl,
				_Json_addEntry(func),
				_Json_emptyArray(_Utils_Tuple0),
				entries));
	});
var $mpizenberg$elm_test_runner$ElmTestRunner$Reporter$Json$onBegin = F2(
	function (_v0, testsCount) {
		var seed = _v0.seed;
		var fuzzRuns = _v0.fuzzRuns;
		var globs = _v0.globs;
		var paths = _v0.paths;
		return $elm$core$Maybe$Just(
			A2(
				$elm$json$Json$Encode$encode,
				0,
				$elm$json$Json$Encode$object(
					_List_fromArray(
						[
							_Utils_Tuple2(
							'event',
							$elm$json$Json$Encode$string('runStart')),
							_Utils_Tuple2(
							'testCount',
							$elm$json$Json$Encode$string(
								$elm$core$String$fromInt(testsCount))),
							_Utils_Tuple2(
							'initialSeed',
							$elm$json$Json$Encode$string(
								$elm$core$String$fromInt(seed))),
							_Utils_Tuple2(
							'fuzzRuns',
							$elm$json$Json$Encode$string(
								$elm$core$String$fromInt(fuzzRuns))),
							_Utils_Tuple2(
							'globs',
							A2($elm$json$Json$Encode$list, $elm$json$Json$Encode$string, globs)),
							_Utils_Tuple2(
							'paths',
							A2($elm$json$Json$Encode$list, $elm$json$Json$Encode$string, paths))
						]))) + '\n');
	});
var $mpizenberg$elm_test_runner$ElmTestRunner$Reporter$Json$onEnd = F2(
	function (kind, results) {
		var autofail = function () {
			if (kind.$ === 'Ok') {
				switch (kind.a.$) {
					case 'Plain':
						var _v2 = kind.a;
						return $elm$json$Json$Encode$null;
					case 'Only':
						var _v3 = kind.a;
						return $elm$json$Json$Encode$string('Test.only was used');
					default:
						var _v4 = kind.a;
						return $elm$json$Json$Encode$string('Test.skip was used');
				}
			} else {
				var err = kind.a;
				return $elm$json$Json$Encode$string(err);
			}
		}();
		var _v0 = $mpizenberg$elm_test_runner$ElmTestRunner$Result$summary(results);
		var totalDuration = _v0.totalDuration;
		var passedCount = _v0.passedCount;
		var failedCount = _v0.failedCount;
		return $elm$core$Maybe$Just(
			A2(
				$elm$json$Json$Encode$encode,
				0,
				$elm$json$Json$Encode$object(
					_List_fromArray(
						[
							_Utils_Tuple2(
							'event',
							$elm$json$Json$Encode$string('runComplete')),
							_Utils_Tuple2(
							'passed',
							$elm$json$Json$Encode$string(
								$elm$core$String$fromInt(passedCount))),
							_Utils_Tuple2(
							'failed',
							$elm$json$Json$Encode$string(
								$elm$core$String$fromInt(failedCount))),
							_Utils_Tuple2(
							'duration',
							$elm$json$Json$Encode$string(
								$elm$core$String$fromFloat(totalDuration))),
							_Utils_Tuple2('autoFail', autofail)
						]))) + '\n');
	});
var $mpizenberg$elm_test_runner$ElmTestRunner$Reporter$Json$encodeDistributionCount = function (dict) {
	return A2(
		$elm$json$Json$Encode$list,
		function (_v0) {
			var labels = _v0.a;
			var count = _v0.b;
			return $elm$json$Json$Encode$object(
				_List_fromArray(
					[
						_Utils_Tuple2(
						'labels',
						A2($elm$json$Json$Encode$list, $elm$json$Json$Encode$string, labels)),
						_Utils_Tuple2(
						'count',
						$elm$json$Json$Encode$int(count))
					]));
		},
		$elm$core$Dict$toList(dict));
};
var $mpizenberg$elm_test_runner$ElmTestRunner$Reporter$Json$encodeSumType = F2(
	function (sumType, data) {
		return $elm$json$Json$Encode$object(
			_List_fromArray(
				[
					_Utils_Tuple2(
					'type',
					$elm$json$Json$Encode$string(sumType)),
					_Utils_Tuple2('data', data)
				]));
	});
var $elm$json$Json$Encode$float = _Json_wrap;
var $mpizenberg$elm_test_runner$ElmTestRunner$Reporter$Json$encodeDistributionReport = function (distributionReport) {
	switch (distributionReport.$) {
		case 'NoDistribution':
			return A2($mpizenberg$elm_test_runner$ElmTestRunner$Reporter$Json$encodeSumType, 'NoDistribution', $elm$json$Json$Encode$null);
		case 'DistributionToReport':
			var r = distributionReport.a;
			return A2(
				$mpizenberg$elm_test_runner$ElmTestRunner$Reporter$Json$encodeSumType,
				'DistributionToReport',
				$elm$json$Json$Encode$object(
					_List_fromArray(
						[
							_Utils_Tuple2(
							'distributionCount',
							$mpizenberg$elm_test_runner$ElmTestRunner$Reporter$Json$encodeDistributionCount(r.distributionCount)),
							_Utils_Tuple2(
							'runsElapsed',
							$elm$json$Json$Encode$int(r.runsElapsed))
						])));
		case 'DistributionCheckSucceeded':
			var r = distributionReport.a;
			return A2(
				$mpizenberg$elm_test_runner$ElmTestRunner$Reporter$Json$encodeSumType,
				'DistributionCheckSucceeded',
				$elm$json$Json$Encode$object(
					_List_fromArray(
						[
							_Utils_Tuple2(
							'distributionCount',
							$mpizenberg$elm_test_runner$ElmTestRunner$Reporter$Json$encodeDistributionCount(r.distributionCount)),
							_Utils_Tuple2(
							'runsElapsed',
							$elm$json$Json$Encode$int(r.runsElapsed))
						])));
		default:
			var r = distributionReport.a;
			return A2(
				$mpizenberg$elm_test_runner$ElmTestRunner$Reporter$Json$encodeSumType,
				'DistributionCheckFailed',
				$elm$json$Json$Encode$object(
					_List_fromArray(
						[
							_Utils_Tuple2(
							'distributionCount',
							$mpizenberg$elm_test_runner$ElmTestRunner$Reporter$Json$encodeDistributionCount(r.distributionCount)),
							_Utils_Tuple2(
							'runsElapsed',
							$elm$json$Json$Encode$int(r.runsElapsed)),
							_Utils_Tuple2(
							'badLabel',
							$elm$json$Json$Encode$string(r.badLabel)),
							_Utils_Tuple2(
							'badLabelPercentage',
							$elm$json$Json$Encode$float(r.badLabelPercentage)),
							_Utils_Tuple2(
							'expectedDistribution',
							$elm$json$Json$Encode$string(r.expectedDistribution))
						])));
	}
};
var $mpizenberg$elm_test_runner$ElmTestRunner$Reporter$Json$encodeReasonType = F2(
	function (reasonType, data) {
		return $elm$json$Json$Encode$object(
			_List_fromArray(
				[
					_Utils_Tuple2(
					'type',
					$elm$json$Json$Encode$string(reasonType)),
					_Utils_Tuple2('data', data)
				]));
	});
var $mpizenberg$elm_test_runner$ElmTestRunner$Reporter$Json$encodeReason = F2(
	function (description, reason) {
		switch (reason.$) {
			case 'Custom':
				return A2(
					$mpizenberg$elm_test_runner$ElmTestRunner$Reporter$Json$encodeReasonType,
					'Custom',
					$elm$json$Json$Encode$string(description));
			case 'Equality':
				var expected = reason.a;
				var actual = reason.b;
				return A2(
					$mpizenberg$elm_test_runner$ElmTestRunner$Reporter$Json$encodeReasonType,
					'Equality',
					$elm$json$Json$Encode$object(
						_List_fromArray(
							[
								_Utils_Tuple2(
								'expected',
								$elm$json$Json$Encode$string(expected)),
								_Utils_Tuple2(
								'actual',
								$elm$json$Json$Encode$string(actual)),
								_Utils_Tuple2(
								'comparison',
								$elm$json$Json$Encode$string(description))
							])));
			case 'Comparison':
				var first = reason.a;
				var second = reason.b;
				return A2(
					$mpizenberg$elm_test_runner$ElmTestRunner$Reporter$Json$encodeReasonType,
					'Comparison',
					$elm$json$Json$Encode$object(
						_List_fromArray(
							[
								_Utils_Tuple2(
								'first',
								$elm$json$Json$Encode$string(first)),
								_Utils_Tuple2(
								'second',
								$elm$json$Json$Encode$string(second)),
								_Utils_Tuple2(
								'comparison',
								$elm$json$Json$Encode$string(description))
							])));
			case 'TODO':
				return A2(
					$mpizenberg$elm_test_runner$ElmTestRunner$Reporter$Json$encodeReasonType,
					'TODO',
					$elm$json$Json$Encode$string(description));
			case 'Invalid':
				if (reason.a.$ === 'BadDescription') {
					var _v1 = reason.a;
					var explanation = (description === '') ? 'The empty string is not a valid test description.' : ('This is an invalid test description: ' + description);
					return A2(
						$mpizenberg$elm_test_runner$ElmTestRunner$Reporter$Json$encodeReasonType,
						'Invalid',
						$elm$json$Json$Encode$string(explanation));
				} else {
					return A2(
						$mpizenberg$elm_test_runner$ElmTestRunner$Reporter$Json$encodeReasonType,
						'Invalid',
						$elm$json$Json$Encode$string(description));
				}
			case 'ListDiff':
				var expected = reason.a;
				var actual = reason.b;
				return A2(
					$mpizenberg$elm_test_runner$ElmTestRunner$Reporter$Json$encodeReasonType,
					'ListDiff',
					$elm$json$Json$Encode$object(
						_List_fromArray(
							[
								_Utils_Tuple2(
								'expected',
								A2($elm$json$Json$Encode$list, $elm$json$Json$Encode$string, expected)),
								_Utils_Tuple2(
								'actual',
								A2($elm$json$Json$Encode$list, $elm$json$Json$Encode$string, actual))
							])));
			default:
				var expected = reason.a.expected;
				var actual = reason.a.actual;
				var extra = reason.a.extra;
				var missing = reason.a.missing;
				return A2(
					$mpizenberg$elm_test_runner$ElmTestRunner$Reporter$Json$encodeReasonType,
					'CollectionDiff',
					$elm$json$Json$Encode$object(
						_List_fromArray(
							[
								_Utils_Tuple2(
								'expected',
								$elm$json$Json$Encode$string(expected)),
								_Utils_Tuple2(
								'actual',
								$elm$json$Json$Encode$string(actual)),
								_Utils_Tuple2(
								'extra',
								A2($elm$json$Json$Encode$list, $elm$json$Json$Encode$string, extra)),
								_Utils_Tuple2(
								'missing',
								A2($elm$json$Json$Encode$list, $elm$json$Json$Encode$string, missing))
							])));
		}
	});
var $mpizenberg$elm_test_runner$ElmTestRunner$Reporter$Json$encodeFailure = function (_v0) {
	var given = _v0.given;
	var description = _v0.description;
	var reason = _v0.reason;
	return $elm$json$Json$Encode$object(
		_List_fromArray(
			[
				_Utils_Tuple2(
				'given',
				A2(
					$elm$core$Maybe$withDefault,
					$elm$json$Json$Encode$null,
					A2($elm$core$Maybe$map, $elm$json$Json$Encode$string, given))),
				_Utils_Tuple2(
				'message',
				$elm$json$Json$Encode$string(description)),
				_Utils_Tuple2(
				'reason',
				A2($mpizenberg$elm_test_runner$ElmTestRunner$Reporter$Json$encodeReason, description, reason))
			]));
};
var $mpizenberg$elm_test_runner$ElmTestRunner$Reporter$Json$onResult = function (result) {
	var _v0 = function () {
		if (result.$ === 'Passed') {
			var labels = result.a.labels;
			var duration = result.a.duration;
			var distributionReports = result.a.distributionReports;
			return {
				status: 'pass',
				testDistributionReports: A2($elm$json$Json$Encode$list, $mpizenberg$elm_test_runner$ElmTestRunner$Reporter$Json$encodeDistributionReport, distributionReports),
				testDuration: duration,
				testFailures: A2($elm$json$Json$Encode$list, $elm$json$Json$Encode$string, _List_Nil),
				testLabels: $elm$core$List$reverse(labels)
			};
		} else {
			var labels = result.a.labels;
			var duration = result.a.duration;
			var todos = result.a.todos;
			var failures = result.a.failures;
			var distributionReports = result.a.distributionReports;
			return (!$elm$core$List$isEmpty(todos)) ? {
				status: 'todo',
				testDistributionReports: A2($elm$json$Json$Encode$list, $elm$core$Basics$identity, _List_Nil),
				testDuration: duration,
				testFailures: A2($elm$json$Json$Encode$list, $elm$json$Json$Encode$string, todos),
				testLabels: $elm$core$List$reverse(labels)
			} : {
				status: 'fail',
				testDistributionReports: A2($elm$json$Json$Encode$list, $mpizenberg$elm_test_runner$ElmTestRunner$Reporter$Json$encodeDistributionReport, distributionReports),
				testDuration: duration,
				testFailures: A2($elm$json$Json$Encode$list, $mpizenberg$elm_test_runner$ElmTestRunner$Reporter$Json$encodeFailure, failures),
				testLabels: $elm$core$List$reverse(labels)
			};
		}
	}();
	var status = _v0.status;
	var testLabels = _v0.testLabels;
	var testFailures = _v0.testFailures;
	var testDistributionReports = _v0.testDistributionReports;
	var testDuration = _v0.testDuration;
	return $elm$core$Maybe$Just(
		A2(
			$elm$json$Json$Encode$encode,
			0,
			$elm$json$Json$Encode$object(
				_List_fromArray(
					[
						_Utils_Tuple2(
						'event',
						$elm$json$Json$Encode$string('testCompleted')),
						_Utils_Tuple2(
						'status',
						$elm$json$Json$Encode$string(status)),
						_Utils_Tuple2(
						'labels',
						A2($elm$json$Json$Encode$list, $elm$json$Json$Encode$string, testLabels)),
						_Utils_Tuple2('failures', testFailures),
						_Utils_Tuple2('distributionReports', testDistributionReports),
						_Utils_Tuple2(
						'duration',
						$elm$json$Json$Encode$string(
							$elm$core$String$fromFloat(testDuration)))
					]))) + '\n');
};
var $mpizenberg$elm_test_runner$ElmTestRunner$Reporter$Json$implementation = function (options) {
	return {
		onBegin: $mpizenberg$elm_test_runner$ElmTestRunner$Reporter$Json$onBegin(options),
		onEnd: $mpizenberg$elm_test_runner$ElmTestRunner$Reporter$Json$onEnd,
		onResult: $mpizenberg$elm_test_runner$ElmTestRunner$Reporter$Json$onResult
	};
};
var $mpizenberg$elm_test_runner$ElmTestRunner$Vendor$XmlEncode$boolToString = function (b) {
	return b ? 'true' : 'false';
};
var $mpizenberg$elm_test_runner$ElmTestRunner$Vendor$XmlEncode$needsIndent = function (nextValue) {
	switch (nextValue.$) {
		case 'Object':
			if (!nextValue.a.b) {
				return false;
			} else {
				return true;
			}
		case 'Tag':
			return true;
		default:
			return false;
	}
};
var $mpizenberg$elm_test_runner$ElmTestRunner$Vendor$XmlEncode$propToString = function (value) {
	switch (value.$) {
		case 'StrNode':
			var str = value.a;
			return str;
		case 'IntNode':
			var n = value.a;
			return $elm$core$String$fromInt(n);
		case 'BoolNode':
			var b = value.a;
			return $mpizenberg$elm_test_runner$ElmTestRunner$Vendor$XmlEncode$boolToString(b);
		case 'FloatNode':
			var f = value.a;
			return $elm$core$String$fromFloat(f);
		default:
			return '';
	}
};
var $mpizenberg$elm_test_runner$ElmTestRunner$Vendor$XmlEncode$propsToString = function (props) {
	return function (x) {
		return ($elm$core$String$length(x) > 0) ? (' ' + x) : '';
	}(
		A2(
			$elm$core$String$join,
			' ',
			A2(
				$elm$core$List$map,
				function (_v0) {
					var key = _v0.a;
					var value = _v0.b;
					return key + ('=\"' + ($mpizenberg$elm_test_runner$ElmTestRunner$Vendor$XmlEncode$propToString(value) + '\"'));
				},
				$elm$core$Dict$toList(props))));
};
var $mpizenberg$elm_test_runner$ElmTestRunner$Vendor$XmlEncode$valueToString = F3(
	function (level, indent, value) {
		switch (value.$) {
			case 'Tag':
				var name = value.a;
				var props = value.b;
				var nextValue = value.c;
				var indentString = $mpizenberg$elm_test_runner$ElmTestRunner$Vendor$XmlEncode$needsIndent(nextValue) ? '\n' : '';
				return '<' + (name + ($mpizenberg$elm_test_runner$ElmTestRunner$Vendor$XmlEncode$propsToString(props) + ('>' + (indentString + (A3($mpizenberg$elm_test_runner$ElmTestRunner$Vendor$XmlEncode$valueToString, level + 1, indent, nextValue) + (indentString + ('</' + (name + '>'))))))));
			case 'StrNode':
				var str = value.a;
				return str;
			case 'IntNode':
				var n = value.a;
				return $elm$core$String$fromInt(n);
			case 'FloatNode':
				var n = value.a;
				return $elm$core$String$fromFloat(n);
			case 'BoolNode':
				var b = value.a;
				return $mpizenberg$elm_test_runner$ElmTestRunner$Vendor$XmlEncode$boolToString(b);
			case 'Object':
				var xs = value.a;
				return A2(
					$elm$core$String$join,
					'\n',
					A2(
						$elm$core$List$map,
						$elm$core$Basics$append(
							A2($elm$core$String$repeat, level * indent, ' ')),
						A2(
							$elm$core$List$map,
							A2($mpizenberg$elm_test_runner$ElmTestRunner$Vendor$XmlEncode$valueToString, level + 1, indent),
							xs)));
			default:
				var name = value.a;
				var props = value.b;
				return '<?' + (name + ($mpizenberg$elm_test_runner$ElmTestRunner$Vendor$XmlEncode$propsToString(props) + '?>'));
		}
	});
var $mpizenberg$elm_test_runner$ElmTestRunner$Vendor$XmlEncode$encode = F2(
	function (indent, value) {
		return A3($mpizenberg$elm_test_runner$ElmTestRunner$Vendor$XmlEncode$valueToString, -1, indent, value);
	});
var $mpizenberg$elm_test_runner$ElmTestRunner$Reporter$Junit$classAndName = function (labels) {
	if (!labels.b) {
		return _Utils_Tuple2('', '');
	} else {
		var name = labels.a;
		var classLabels = labels.b;
		return _Utils_Tuple2(
			A2(
				$elm$core$String$join,
				' > ',
				$elm$core$List$reverse(classLabels)),
			name);
	}
};
var $mpizenberg$elm_test_runner$ElmTestRunner$Reporter$Junit$distributionReportToString = function (distributionReport) {
	switch (distributionReport.$) {
		case 'NoDistribution':
			return $elm$core$Maybe$Nothing;
		case 'DistributionToReport':
			var r = distributionReport.a;
			return $elm$core$Maybe$Just(
				$elm_explorations$test$Test$Distribution$distributionReportTable(r));
		case 'DistributionCheckSucceeded':
			return $elm$core$Maybe$Nothing;
		default:
			var r = distributionReport.a;
			return $elm$core$Maybe$Just(
				$elm_explorations$test$Test$Distribution$distributionReportTable(r));
	}
};
var $mpizenberg$elm_test_runner$ElmTestRunner$Reporter$Junit$reasonToString = F2(
	function (description, reason) {
		switch (reason.$) {
			case 'Custom':
				return description;
			case 'Equality':
				var expected = reason.a;
				var actual = reason.b;
				return expected + ('\n\nwas not equal to\n\n' + actual);
			case 'Comparison':
				var first = reason.a;
				var second = reason.b;
				return first + ('\n\nfailed when compared with ' + (description + (' on\n\n' + second)));
			case 'TODO':
				return 'TODO: ' + description;
			case 'Invalid':
				if (reason.a.$ === 'BadDescription') {
					var _v1 = reason.a;
					var explanation = (description === '') ? 'The empty string is not a valid test description.' : ('This is an invalid test description: ' + description);
					return 'Invalid test: ' + explanation;
				} else {
					return 'Invalid test: ' + description;
				}
			case 'ListDiff':
				var expected = reason.a;
				var actual = reason.b;
				return A2($elm$core$String$join, ', ', expected) + ('\n\nhad different elements than\n\n' + A2($elm$core$String$join, ', ', actual));
			default:
				var expected = reason.a.expected;
				var actual = reason.a.actual;
				var extra = reason.a.extra;
				var missing = reason.a.missing;
				return expected + ('\n\nhad different contents than\n\n' + (actual + ('\n\nthese were extra:\n\n' + (A2($elm$core$String$join, '\n', extra) + ('\n\nthese were missing:\n\n' + A2($elm$core$String$join, '\n', missing))))));
		}
	});
var $mpizenberg$elm_test_runner$ElmTestRunner$Reporter$Junit$formatFailure = function (_v0) {
	var given = _v0.given;
	var description = _v0.description;
	var reason = _v0.reason;
	var message = A2($mpizenberg$elm_test_runner$ElmTestRunner$Reporter$Junit$reasonToString, description, reason);
	if (given.$ === 'Just') {
		var str = given.a;
		return 'Given ' + (str + ('\n\n' + message));
	} else {
		return message;
	}
};
var $elm$core$Dict$fromList = function (assocs) {
	return A3(
		$elm$core$List$foldl,
		F2(
			function (_v0, dict) {
				var key = _v0.a;
				var value = _v0.b;
				return A3($elm$core$Dict$insert, key, value, dict);
			}),
		$elm$core$Dict$empty,
		assocs);
};
var $mpizenberg$elm_test_runner$ElmTestRunner$Vendor$XmlEncode$Object = function (a) {
	return {$: 'Object', a: a};
};
var $mpizenberg$elm_test_runner$ElmTestRunner$Vendor$XmlEncode$Tag = F3(
	function (a, b, c) {
		return {$: 'Tag', a: a, b: b, c: c};
	});
var $mpizenberg$elm_test_runner$ElmTestRunner$Vendor$XmlEncode$object = function (values) {
	return $mpizenberg$elm_test_runner$ElmTestRunner$Vendor$XmlEncode$Object(
		A2(
			$elm$core$List$map,
			function (_v0) {
				var name = _v0.a;
				var props = _v0.b;
				var value = _v0.c;
				return A3($mpizenberg$elm_test_runner$ElmTestRunner$Vendor$XmlEncode$Tag, name, props, value);
			},
			values));
};
var $mpizenberg$elm_test_runner$ElmTestRunner$Vendor$XmlEncode$null = $mpizenberg$elm_test_runner$ElmTestRunner$Vendor$XmlEncode$object(_List_Nil);
var $mpizenberg$elm_test_runner$ElmTestRunner$Vendor$XmlEncode$StrNode = function (a) {
	return {$: 'StrNode', a: a};
};
var $mpizenberg$elm_test_runner$ElmTestRunner$Vendor$XmlEncode$string = function (str) {
	return $mpizenberg$elm_test_runner$ElmTestRunner$Vendor$XmlEncode$StrNode(str);
};
var $mpizenberg$elm_test_runner$ElmTestRunner$Reporter$Junit$encodeFailures = F3(
	function (failures, distributionReports, todos) {
		var stdout = function () {
			var _v0 = A2($elm$core$List$filterMap, $mpizenberg$elm_test_runner$ElmTestRunner$Reporter$Junit$distributionReportToString, distributionReports);
			if (!_v0.b) {
				return $elm$core$Maybe$Nothing;
			} else {
				var list = _v0;
				return $elm$core$Maybe$Just(
					A2($elm$core$String$join, '\n\n\n', list));
			}
		}();
		var message = (!$elm$core$List$isEmpty(failures)) ? A2(
			$elm$core$String$join,
			'\n\n\n',
			A2($elm$core$List$map, $mpizenberg$elm_test_runner$ElmTestRunner$Reporter$Junit$formatFailure, failures)) : A2(
			$elm$core$String$join,
			'\n',
			A2(
				$elm$core$List$map,
				$elm$core$Basics$append('TODO: '),
				todos));
		var attributesDict = $elm$core$Dict$fromList(
			A2(
				$elm$core$List$filterMap,
				$elm$core$Basics$identity,
				_List_fromArray(
					[
						$elm$core$Maybe$Just(
						_Utils_Tuple2(
							'message',
							$mpizenberg$elm_test_runner$ElmTestRunner$Vendor$XmlEncode$string(message))),
						A2(
						$elm$core$Maybe$map,
						function (out) {
							return _Utils_Tuple2(
								'system-out',
								$mpizenberg$elm_test_runner$ElmTestRunner$Vendor$XmlEncode$string(out));
						},
						stdout)
					])));
		return $mpizenberg$elm_test_runner$ElmTestRunner$Vendor$XmlEncode$object(
			_List_fromArray(
				[
					_Utils_Tuple3('failure', attributesDict, $mpizenberg$elm_test_runner$ElmTestRunner$Vendor$XmlEncode$null)
				]));
	});
var $mpizenberg$elm_test_runner$ElmTestRunner$Vendor$XmlEncode$FloatNode = function (a) {
	return {$: 'FloatNode', a: a};
};
var $mpizenberg$elm_test_runner$ElmTestRunner$Vendor$XmlEncode$float = function (n) {
	return $mpizenberg$elm_test_runner$ElmTestRunner$Vendor$XmlEncode$FloatNode(n);
};
var $mpizenberg$elm_test_runner$ElmTestRunner$Reporter$Junit$encodeTestResult = function (result) {
	var _v0 = function () {
		if (result.$ === 'Passed') {
			var test = result.a;
			return {duration: test.duration, failures: $mpizenberg$elm_test_runner$ElmTestRunner$Vendor$XmlEncode$null, labels: test.labels, logs: test.logs};
		} else {
			var test = result.a;
			return {
				duration: test.duration,
				failures: A3($mpizenberg$elm_test_runner$ElmTestRunner$Reporter$Junit$encodeFailures, test.failures, test.distributionReports, test.todos),
				labels: test.labels,
				logs: test.logs
			};
		}
	}();
	var labels = _v0.labels;
	var duration = _v0.duration;
	var failures = _v0.failures;
	var logs = _v0.logs;
	var _v2 = $mpizenberg$elm_test_runner$ElmTestRunner$Reporter$Junit$classAndName(labels);
	var _class = _v2.a;
	var name = _v2.b;
	var attributesDict = $elm$core$Dict$fromList(
		_List_fromArray(
			[
				_Utils_Tuple2(
				'classname',
				$mpizenberg$elm_test_runner$ElmTestRunner$Vendor$XmlEncode$string(_class)),
				_Utils_Tuple2(
				'name',
				$mpizenberg$elm_test_runner$ElmTestRunner$Vendor$XmlEncode$string(name)),
				_Utils_Tuple2(
				'time',
				$mpizenberg$elm_test_runner$ElmTestRunner$Vendor$XmlEncode$float(duration / 1000)),
				_Utils_Tuple2(
				'system-out',
				$mpizenberg$elm_test_runner$ElmTestRunner$Vendor$XmlEncode$string(
					A2($elm$core$String$join, '\n', logs)))
			]));
	return $mpizenberg$elm_test_runner$ElmTestRunner$Vendor$XmlEncode$object(
		_List_fromArray(
			[
				_Utils_Tuple3('testcase', attributesDict, failures)
			]));
};
var $mpizenberg$elm_test_runner$ElmTestRunner$Vendor$XmlEncode$IntNode = function (a) {
	return {$: 'IntNode', a: a};
};
var $mpizenberg$elm_test_runner$ElmTestRunner$Vendor$XmlEncode$int = function (n) {
	return $mpizenberg$elm_test_runner$ElmTestRunner$Vendor$XmlEncode$IntNode(n);
};
var $mpizenberg$elm_test_runner$ElmTestRunner$Vendor$XmlEncode$list = function (values) {
	return $mpizenberg$elm_test_runner$ElmTestRunner$Vendor$XmlEncode$Object(values);
};
var $mpizenberg$elm_test_runner$ElmTestRunner$Reporter$Junit$summary = F2(
	function (kind, results) {
		var skipped = function () {
			_v1$2:
			while (true) {
				if (kind.$ === 'Ok') {
					switch (kind.a.$) {
						case 'Only':
							var _v2 = kind.a;
							return 1;
						case 'Skipping':
							var _v3 = kind.a;
							return 1;
						default:
							break _v1$2;
					}
				} else {
					break _v1$2;
				}
			}
			return 0;
		}();
		var encodedTests = $mpizenberg$elm_test_runner$ElmTestRunner$Vendor$XmlEncode$list(
			A2(
				$elm$core$List$map,
				$mpizenberg$elm_test_runner$ElmTestRunner$Reporter$Junit$encodeTestResult,
				$elm$core$Array$toList(results)));
		var _v0 = $mpizenberg$elm_test_runner$ElmTestRunner$Result$summary(results);
		var totalDuration = _v0.totalDuration;
		var failedCount = _v0.failedCount;
		var todoCount = _v0.todoCount;
		var suiteAttributes = $elm$core$Dict$fromList(
			_List_fromArray(
				[
					_Utils_Tuple2(
					'name',
					$mpizenberg$elm_test_runner$ElmTestRunner$Vendor$XmlEncode$string('elm-test-rs')),
					_Utils_Tuple2(
					'hostname',
					$mpizenberg$elm_test_runner$ElmTestRunner$Vendor$XmlEncode$string('localhost')),
					_Utils_Tuple2(
					'tests',
					$mpizenberg$elm_test_runner$ElmTestRunner$Vendor$XmlEncode$int(
						$elm$core$Array$length(results))),
					_Utils_Tuple2(
					'failures',
					$mpizenberg$elm_test_runner$ElmTestRunner$Vendor$XmlEncode$int(failedCount)),
					_Utils_Tuple2(
					'errors',
					$mpizenberg$elm_test_runner$ElmTestRunner$Vendor$XmlEncode$int(0)),
					_Utils_Tuple2(
					'skipped',
					$mpizenberg$elm_test_runner$ElmTestRunner$Vendor$XmlEncode$int(skipped)),
					_Utils_Tuple2(
					'time',
					$mpizenberg$elm_test_runner$ElmTestRunner$Vendor$XmlEncode$float(totalDuration / 1000))
				]));
		return A2(
			$mpizenberg$elm_test_runner$ElmTestRunner$Vendor$XmlEncode$encode,
			0,
			$mpizenberg$elm_test_runner$ElmTestRunner$Vendor$XmlEncode$list(
				_List_fromArray(
					[
						$mpizenberg$elm_test_runner$ElmTestRunner$Vendor$XmlEncode$string('<?xml version=\"1.0\"?>'),
						$mpizenberg$elm_test_runner$ElmTestRunner$Vendor$XmlEncode$object(
						_List_fromArray(
							[
								_Utils_Tuple3('testsuite', suiteAttributes, encodedTests)
							]))
					])));
	});
var $mpizenberg$elm_test_runner$ElmTestRunner$Reporter$Junit$implementation = {
	onBegin: $elm$core$Basics$always($elm$core$Maybe$Nothing),
	onEnd: F2(
		function (kind, result) {
			return $elm$core$Maybe$Just(
				A2($mpizenberg$elm_test_runner$ElmTestRunner$Reporter$Junit$summary, kind, result));
		}),
	onResult: $elm$core$Basics$always($elm$core$Maybe$Nothing)
};
var $mpizenberg$elm_test_runner$ElmTestRunner$Reporter$chooseReporter = function (_v0) {
	var initialSeed = _v0.initialSeed;
	var fuzzRuns = _v0.fuzzRuns;
	var mode = _v0.mode;
	var verbosity = _v0.verbosity;
	var globs = _v0.globs;
	var paths = _v0.paths;
	switch (mode) {
		case 'json':
			return $mpizenberg$elm_test_runner$ElmTestRunner$Reporter$Json$implementation(
				{fuzzRuns: fuzzRuns, globs: globs, paths: paths, seed: initialSeed});
		case 'junit':
			return $mpizenberg$elm_test_runner$ElmTestRunner$Reporter$Junit$implementation;
		case 'exercism':
			return $mpizenberg$elm_test_runner$ElmTestRunner$Reporter$Exercism$implementation;
		case 'consoleColor':
			return A2(
				$mpizenberg$elm_test_runner$ElmTestRunner$Reporter$ConsoleColor$implementation,
				$mpizenberg$elm_test_runner$ElmTestRunner$Vendor$ConsoleText$UseColor,
				{fuzzRuns: fuzzRuns, seed: initialSeed, verbosity: verbosity});
		case 'consoleNoColor':
			return A2(
				$mpizenberg$elm_test_runner$ElmTestRunner$Reporter$ConsoleColor$implementation,
				$mpizenberg$elm_test_runner$ElmTestRunner$Vendor$ConsoleText$Monochrome,
				{fuzzRuns: fuzzRuns, seed: initialSeed, verbosity: verbosity});
		default:
			return $mpizenberg$elm_test_runner$ElmTestRunner$Reporter$ConsoleDebug$implementation(
				{fuzzRuns: fuzzRuns, seed: initialSeed});
	}
};
var $elm$core$Platform$Cmd$batch = _Platform_batch;
var $elm$core$Platform$Cmd$none = $elm$core$Platform$Cmd$batch(_List_Nil);
var $mpizenberg$elm_test_runner$ElmTestRunner$Reporter$init = F2(
	function (ports, flags) {
		var reporter = $mpizenberg$elm_test_runner$ElmTestRunner$Reporter$chooseReporter(flags);
		return _Utils_Tuple2(
			A5(
				$mpizenberg$elm_test_runner$ElmTestRunner$Reporter$Model,
				ports,
				reporter,
				0,
				$elm$core$Array$empty,
				$elm$core$Result$Ok($mpizenberg$elm_test_runner$ElmTestRunner$SeededRunners$Plain)),
			$elm$core$Platform$Cmd$none);
	});
var $mpizenberg$elm_test_runner$ElmTestRunner$Reporter$Summarize = {$: 'Summarize'};
var $elm$json$Json$Decode$decodeValue = _Json_run;
var $mpizenberg$elm_test_runner$ElmTestRunner$Result$Failed = function (a) {
	return {$: 'Failed', a: a};
};
var $mpizenberg$elm_test_runner$ElmTestRunner$Result$Passed = function (a) {
	return {$: 'Passed', a: a};
};
var $mpizenberg$elm_test_runner$ElmTestRunner$Result$Record_labels_ListString_duration_Float_logs_ListString_distributionReports_ListDistributionReport_ = F4(
	function (labels, duration, logs, distributionReports) {
		return {distributionReports: distributionReports, duration: duration, labels: labels, logs: logs};
	});
var $elm_explorations$test$Test$Distribution$DistributionCheckFailed = function (a) {
	return {$: 'DistributionCheckFailed', a: a};
};
var $elm_explorations$test$Test$Distribution$DistributionCheckSucceeded = function (a) {
	return {$: 'DistributionCheckSucceeded', a: a};
};
var $elm_explorations$test$Test$Distribution$DistributionToReport = function (a) {
	return {$: 'DistributionToReport', a: a};
};
var $elm_explorations$test$Test$Distribution$NoDistribution = {$: 'NoDistribution'};
var $mpizenberg$elm_test_runner$ElmTestRunner$Result$Record_distributionCount_Dict_ListString_Int_runsElapsed_Int_ = F2(
	function (distributionCount, runsElapsed) {
		return {distributionCount: distributionCount, runsElapsed: runsElapsed};
	});
var $elm$json$Json$Decode$map = _Json_map1;
var $elm$json$Json$Decode$map2 = _Json_map2;
var $mpizenberg$elm_test_runner$ElmTestRunner$Result$decodeDict_ListString_Int = function () {
	var decodeDict_ListString_IntTuple = A3(
		$elm$json$Json$Decode$map2,
		F2(
			function (a1, a2) {
				return _Utils_Tuple2(a1, a2);
			}),
		A2(
			$elm$json$Json$Decode$field,
			'A1',
			$elm$json$Json$Decode$list($elm$json$Json$Decode$string)),
		A2($elm$json$Json$Decode$field, 'A2', $elm$json$Json$Decode$int));
	return A2(
		$elm$json$Json$Decode$map,
		$elm$core$Dict$fromList,
		$elm$json$Json$Decode$list(decodeDict_ListString_IntTuple));
}();
var $mpizenberg$elm_test_runner$ElmTestRunner$Result$decodeRecord_distributionCount_Dict_ListString_Int_runsElapsed_Int_ = A3(
	$elm$json$Json$Decode$map2,
	$mpizenberg$elm_test_runner$ElmTestRunner$Result$Record_distributionCount_Dict_ListString_Int_runsElapsed_Int_,
	A2($elm$json$Json$Decode$field, 'distributionCount', $mpizenberg$elm_test_runner$ElmTestRunner$Result$decodeDict_ListString_Int),
	A2($elm$json$Json$Decode$field, 'runsElapsed', $elm$json$Json$Decode$int));
var $mpizenberg$elm_test_runner$ElmTestRunner$Result$Record_distributionCount_Dict_ListString_Int_runsElapsed_Int_badLabel_String_badLabelPercentage_Float_expectedDistribution_String_ = F5(
	function (distributionCount, runsElapsed, badLabel, badLabelPercentage, expectedDistribution) {
		return {badLabel: badLabel, badLabelPercentage: badLabelPercentage, distributionCount: distributionCount, expectedDistribution: expectedDistribution, runsElapsed: runsElapsed};
	});
var $elm$json$Json$Decode$map5 = _Json_map5;
var $mpizenberg$elm_test_runner$ElmTestRunner$Result$decodeRecord_distributionCount_Dict_ListString_Int_runsElapsed_Int_badLabel_String_badLabelPercentage_Float_expectedDistribution_String_ = A6(
	$elm$json$Json$Decode$map5,
	$mpizenberg$elm_test_runner$ElmTestRunner$Result$Record_distributionCount_Dict_ListString_Int_runsElapsed_Int_badLabel_String_badLabelPercentage_Float_expectedDistribution_String_,
	A2($elm$json$Json$Decode$field, 'distributionCount', $mpizenberg$elm_test_runner$ElmTestRunner$Result$decodeDict_ListString_Int),
	A2($elm$json$Json$Decode$field, 'runsElapsed', $elm$json$Json$Decode$int),
	A2($elm$json$Json$Decode$field, 'badLabel', $elm$json$Json$Decode$string),
	A2($elm$json$Json$Decode$field, 'badLabelPercentage', $elm$json$Json$Decode$float),
	A2($elm$json$Json$Decode$field, 'expectedDistribution', $elm$json$Json$Decode$string));
var $elm$json$Json$Decode$fail = _Json_fail;
var $mpizenberg$elm_test_runner$ElmTestRunner$Result$decodeDistributionReportHelp = function (constructor) {
	switch (constructor) {
		case 'NoDistribution':
			return $elm$json$Json$Decode$succeed($elm_explorations$test$Test$Distribution$NoDistribution);
		case 'DistributionToReport':
			return A2(
				$elm$json$Json$Decode$map,
				$elm_explorations$test$Test$Distribution$DistributionToReport,
				A2($elm$json$Json$Decode$field, 'A1', $mpizenberg$elm_test_runner$ElmTestRunner$Result$decodeRecord_distributionCount_Dict_ListString_Int_runsElapsed_Int_));
		case 'DistributionCheckSucceeded':
			return A2(
				$elm$json$Json$Decode$map,
				$elm_explorations$test$Test$Distribution$DistributionCheckSucceeded,
				A2($elm$json$Json$Decode$field, 'A1', $mpizenberg$elm_test_runner$ElmTestRunner$Result$decodeRecord_distributionCount_Dict_ListString_Int_runsElapsed_Int_));
		case 'DistributionCheckFailed':
			return A2(
				$elm$json$Json$Decode$map,
				$elm_explorations$test$Test$Distribution$DistributionCheckFailed,
				A2($elm$json$Json$Decode$field, 'A1', $mpizenberg$elm_test_runner$ElmTestRunner$Result$decodeRecord_distributionCount_Dict_ListString_Int_runsElapsed_Int_badLabel_String_badLabelPercentage_Float_expectedDistribution_String_));
		default:
			var other = constructor;
			return $elm$json$Json$Decode$fail('Unknown constructor for type DistributionReport: ' + other);
	}
};
var $mpizenberg$elm_test_runner$ElmTestRunner$Result$decodeDistributionReport = A2(
	$elm$json$Json$Decode$andThen,
	$mpizenberg$elm_test_runner$ElmTestRunner$Result$decodeDistributionReportHelp,
	A2($elm$json$Json$Decode$field, 'Constructor', $elm$json$Json$Decode$string));
var $elm$json$Json$Decode$map4 = _Json_map4;
var $mpizenberg$elm_test_runner$ElmTestRunner$Result$decodeRecord_labels_ListString_duration_Float_logs_ListString_distributionReports_ListDistributionReport_ = A5(
	$elm$json$Json$Decode$map4,
	$mpizenberg$elm_test_runner$ElmTestRunner$Result$Record_labels_ListString_duration_Float_logs_ListString_distributionReports_ListDistributionReport_,
	A2(
		$elm$json$Json$Decode$field,
		'labels',
		$elm$json$Json$Decode$list($elm$json$Json$Decode$string)),
	A2($elm$json$Json$Decode$field, 'duration', $elm$json$Json$Decode$float),
	A2(
		$elm$json$Json$Decode$field,
		'logs',
		$elm$json$Json$Decode$list($elm$json$Json$Decode$string)),
	A2(
		$elm$json$Json$Decode$field,
		'distributionReports',
		$elm$json$Json$Decode$list($mpizenberg$elm_test_runner$ElmTestRunner$Result$decodeDistributionReport)));
var $mpizenberg$elm_test_runner$ElmTestRunner$Result$Record_labels_ListString_duration_Float_logs_ListString_todos_ListString_failures_ListFailure_distributionReports_ListDistributionReport_ = F6(
	function (labels, duration, logs, todos, failures, distributionReports) {
		return {distributionReports: distributionReports, duration: duration, failures: failures, labels: labels, logs: logs, todos: todos};
	});
var $mpizenberg$elm_test_runner$ElmTestRunner$Failure$Failure = F3(
	function (given, description, reason) {
		return {description: description, given: given, reason: reason};
	});
var $elm_explorations$test$Test$Runner$Failure$CollectionDiff = function (a) {
	return {$: 'CollectionDiff', a: a};
};
var $elm_explorations$test$Test$Runner$Failure$Comparison = F2(
	function (a, b) {
		return {$: 'Comparison', a: a, b: b};
	});
var $elm_explorations$test$Test$Runner$Failure$Custom = {$: 'Custom'};
var $elm_explorations$test$Test$Runner$Failure$Equality = F2(
	function (a, b) {
		return {$: 'Equality', a: a, b: b};
	});
var $elm_explorations$test$Test$Runner$Failure$Invalid = function (a) {
	return {$: 'Invalid', a: a};
};
var $elm_explorations$test$Test$Runner$Failure$ListDiff = F2(
	function (a, b) {
		return {$: 'ListDiff', a: a, b: b};
	});
var $elm_explorations$test$Test$Runner$Failure$TODO = {$: 'TODO'};
var $elm_explorations$test$Test$Runner$Failure$BadDescription = {$: 'BadDescription'};
var $elm_explorations$test$Test$Runner$Failure$DistributionBug = {$: 'DistributionBug'};
var $elm_explorations$test$Test$Runner$Failure$DistributionInsufficient = {$: 'DistributionInsufficient'};
var $elm_explorations$test$Test$Runner$Failure$DuplicatedName = {$: 'DuplicatedName'};
var $elm_explorations$test$Test$Runner$Failure$EmptyList = {$: 'EmptyList'};
var $elm_explorations$test$Test$Runner$Failure$InvalidFuzzer = {$: 'InvalidFuzzer'};
var $elm_explorations$test$Test$Runner$Failure$NonpositiveFuzzCount = {$: 'NonpositiveFuzzCount'};
var $mpizenberg$elm_test_runner$ElmTestRunner$Failure$decodeInvalidReason = function () {
	var recover = function (x) {
		switch (x) {
			case 'EmptyList':
				return $elm$json$Json$Decode$succeed($elm_explorations$test$Test$Runner$Failure$EmptyList);
			case 'NonpositiveFuzzCount':
				return $elm$json$Json$Decode$succeed($elm_explorations$test$Test$Runner$Failure$NonpositiveFuzzCount);
			case 'InvalidFuzzer':
				return $elm$json$Json$Decode$succeed($elm_explorations$test$Test$Runner$Failure$InvalidFuzzer);
			case 'BadDescription':
				return $elm$json$Json$Decode$succeed($elm_explorations$test$Test$Runner$Failure$BadDescription);
			case 'DuplicatedName':
				return $elm$json$Json$Decode$succeed($elm_explorations$test$Test$Runner$Failure$DuplicatedName);
			case 'DistributionInsufficient':
				return $elm$json$Json$Decode$succeed($elm_explorations$test$Test$Runner$Failure$DistributionInsufficient);
			case 'DistributionBug':
				return $elm$json$Json$Decode$succeed($elm_explorations$test$Test$Runner$Failure$DistributionBug);
			default:
				var other = x;
				return $elm$json$Json$Decode$fail('Unknown constructor for type InvalidReason: ' + other);
		}
	};
	return A2($elm$json$Json$Decode$andThen, recover, $elm$json$Json$Decode$string);
}();
var $mpizenberg$elm_test_runner$ElmTestRunner$Failure$Record_expected_String_actual_String_extra_ListString_missing_ListString_ = F4(
	function (expected, actual, extra, missing) {
		return {actual: actual, expected: expected, extra: extra, missing: missing};
	});
var $mpizenberg$elm_test_runner$ElmTestRunner$Failure$decodeRecord_expected_String_actual_String_extra_ListString_missing_ListString_ = A5(
	$elm$json$Json$Decode$map4,
	$mpizenberg$elm_test_runner$ElmTestRunner$Failure$Record_expected_String_actual_String_extra_ListString_missing_ListString_,
	A2($elm$json$Json$Decode$field, 'expected', $elm$json$Json$Decode$string),
	A2($elm$json$Json$Decode$field, 'actual', $elm$json$Json$Decode$string),
	A2(
		$elm$json$Json$Decode$field,
		'extra',
		$elm$json$Json$Decode$list($elm$json$Json$Decode$string)),
	A2(
		$elm$json$Json$Decode$field,
		'missing',
		$elm$json$Json$Decode$list($elm$json$Json$Decode$string)));
var $mpizenberg$elm_test_runner$ElmTestRunner$Failure$decodeReasonHelp = function (constructor) {
	switch (constructor) {
		case 'Custom':
			return $elm$json$Json$Decode$succeed($elm_explorations$test$Test$Runner$Failure$Custom);
		case 'Equality':
			return A3(
				$elm$json$Json$Decode$map2,
				$elm_explorations$test$Test$Runner$Failure$Equality,
				A2($elm$json$Json$Decode$field, 'A1', $elm$json$Json$Decode$string),
				A2($elm$json$Json$Decode$field, 'A2', $elm$json$Json$Decode$string));
		case 'Comparison':
			return A3(
				$elm$json$Json$Decode$map2,
				$elm_explorations$test$Test$Runner$Failure$Comparison,
				A2($elm$json$Json$Decode$field, 'A1', $elm$json$Json$Decode$string),
				A2($elm$json$Json$Decode$field, 'A2', $elm$json$Json$Decode$string));
		case 'ListDiff':
			return A3(
				$elm$json$Json$Decode$map2,
				$elm_explorations$test$Test$Runner$Failure$ListDiff,
				A2(
					$elm$json$Json$Decode$field,
					'A1',
					$elm$json$Json$Decode$list($elm$json$Json$Decode$string)),
				A2(
					$elm$json$Json$Decode$field,
					'A2',
					$elm$json$Json$Decode$list($elm$json$Json$Decode$string)));
		case 'CollectionDiff':
			return A2(
				$elm$json$Json$Decode$map,
				$elm_explorations$test$Test$Runner$Failure$CollectionDiff,
				A2($elm$json$Json$Decode$field, 'A1', $mpizenberg$elm_test_runner$ElmTestRunner$Failure$decodeRecord_expected_String_actual_String_extra_ListString_missing_ListString_));
		case 'TODO':
			return $elm$json$Json$Decode$succeed($elm_explorations$test$Test$Runner$Failure$TODO);
		case 'Invalid':
			return A2(
				$elm$json$Json$Decode$map,
				$elm_explorations$test$Test$Runner$Failure$Invalid,
				A2($elm$json$Json$Decode$field, 'A1', $mpizenberg$elm_test_runner$ElmTestRunner$Failure$decodeInvalidReason));
		default:
			var other = constructor;
			return $elm$json$Json$Decode$fail('Unknown constructor for type Reason: ' + other);
	}
};
var $mpizenberg$elm_test_runner$ElmTestRunner$Failure$decodeReason = A2(
	$elm$json$Json$Decode$andThen,
	$mpizenberg$elm_test_runner$ElmTestRunner$Failure$decodeReasonHelp,
	A2($elm$json$Json$Decode$field, 'Constructor', $elm$json$Json$Decode$string));
var $elm$json$Json$Decode$map3 = _Json_map3;
var $elm$json$Json$Decode$oneOf = _Json_oneOf;
var $elm$json$Json$Decode$maybe = function (decoder) {
	return $elm$json$Json$Decode$oneOf(
		_List_fromArray(
			[
				A2($elm$json$Json$Decode$map, $elm$core$Maybe$Just, decoder),
				$elm$json$Json$Decode$succeed($elm$core$Maybe$Nothing)
			]));
};
var $mpizenberg$elm_test_runner$ElmTestRunner$Failure$decodeFailure = A4(
	$elm$json$Json$Decode$map3,
	$mpizenberg$elm_test_runner$ElmTestRunner$Failure$Failure,
	A2(
		$elm$json$Json$Decode$field,
		'given',
		$elm$json$Json$Decode$maybe($elm$json$Json$Decode$string)),
	A2($elm$json$Json$Decode$field, 'description', $elm$json$Json$Decode$string),
	A2($elm$json$Json$Decode$field, 'reason', $mpizenberg$elm_test_runner$ElmTestRunner$Failure$decodeReason));
var $mpizenberg$elm_test_runner$ElmTestRunner$Failure$decoder = $mpizenberg$elm_test_runner$ElmTestRunner$Failure$decodeFailure;
var $mpizenberg$elm_test_runner$ElmTestRunner$Result$decodeFailure = $mpizenberg$elm_test_runner$ElmTestRunner$Failure$decoder;
var $elm$json$Json$Decode$map6 = _Json_map6;
var $mpizenberg$elm_test_runner$ElmTestRunner$Result$decodeRecord_labels_ListString_duration_Float_logs_ListString_todos_ListString_failures_ListFailure_distributionReports_ListDistributionReport_ = A7(
	$elm$json$Json$Decode$map6,
	$mpizenberg$elm_test_runner$ElmTestRunner$Result$Record_labels_ListString_duration_Float_logs_ListString_todos_ListString_failures_ListFailure_distributionReports_ListDistributionReport_,
	A2(
		$elm$json$Json$Decode$field,
		'labels',
		$elm$json$Json$Decode$list($elm$json$Json$Decode$string)),
	A2($elm$json$Json$Decode$field, 'duration', $elm$json$Json$Decode$float),
	A2(
		$elm$json$Json$Decode$field,
		'logs',
		$elm$json$Json$Decode$list($elm$json$Json$Decode$string)),
	A2(
		$elm$json$Json$Decode$field,
		'todos',
		$elm$json$Json$Decode$list($elm$json$Json$Decode$string)),
	A2(
		$elm$json$Json$Decode$field,
		'failures',
		$elm$json$Json$Decode$list($mpizenberg$elm_test_runner$ElmTestRunner$Result$decodeFailure)),
	A2(
		$elm$json$Json$Decode$field,
		'distributionReports',
		$elm$json$Json$Decode$list($mpizenberg$elm_test_runner$ElmTestRunner$Result$decodeDistributionReport)));
var $mpizenberg$elm_test_runner$ElmTestRunner$Result$decodeTestResultHelp = function (constructor) {
	switch (constructor) {
		case 'Passed':
			return A2(
				$elm$json$Json$Decode$map,
				$mpizenberg$elm_test_runner$ElmTestRunner$Result$Passed,
				A2($elm$json$Json$Decode$field, 'A1', $mpizenberg$elm_test_runner$ElmTestRunner$Result$decodeRecord_labels_ListString_duration_Float_logs_ListString_distributionReports_ListDistributionReport_));
		case 'Failed':
			return A2(
				$elm$json$Json$Decode$map,
				$mpizenberg$elm_test_runner$ElmTestRunner$Result$Failed,
				A2($elm$json$Json$Decode$field, 'A1', $mpizenberg$elm_test_runner$ElmTestRunner$Result$decodeRecord_labels_ListString_duration_Float_logs_ListString_todos_ListString_failures_ListFailure_distributionReports_ListDistributionReport_));
		default:
			var other = constructor;
			return $elm$json$Json$Decode$fail('Unknown constructor for type TestResult: ' + other);
	}
};
var $mpizenberg$elm_test_runner$ElmTestRunner$Result$decodeTestResult = A2(
	$elm$json$Json$Decode$andThen,
	$mpizenberg$elm_test_runner$ElmTestRunner$Result$decodeTestResultHelp,
	A2($elm$json$Json$Decode$field, 'Constructor', $elm$json$Json$Decode$string));
var $mpizenberg$elm_test_runner$ElmTestRunner$Result$decoder = $mpizenberg$elm_test_runner$ElmTestRunner$Result$decodeTestResult;
var $elm$core$Task$andThen = _Scheduler_andThen;
var $elm$core$Task$Perform = function (a) {
	return {$: 'Perform', a: a};
};
var $elm$core$Task$succeed = _Scheduler_succeed;
var $elm$core$Task$init = $elm$core$Task$succeed(_Utils_Tuple0);
var $elm$core$Task$map = F2(
	function (func, taskA) {
		return A2(
			$elm$core$Task$andThen,
			function (a) {
				return $elm$core$Task$succeed(
					func(a));
			},
			taskA);
	});
var $elm$core$Task$map2 = F3(
	function (func, taskA, taskB) {
		return A2(
			$elm$core$Task$andThen,
			function (a) {
				return A2(
					$elm$core$Task$andThen,
					function (b) {
						return $elm$core$Task$succeed(
							A2(func, a, b));
					},
					taskB);
			},
			taskA);
	});
var $elm$core$Task$sequence = function (tasks) {
	return A3(
		$elm$core$List$foldr,
		$elm$core$Task$map2($elm$core$List$cons),
		$elm$core$Task$succeed(_List_Nil),
		tasks);
};
var $elm$core$Platform$sendToApp = _Platform_sendToApp;
var $elm$core$Task$spawnCmd = F2(
	function (router, _v0) {
		var task = _v0.a;
		return _Scheduler_spawn(
			A2(
				$elm$core$Task$andThen,
				$elm$core$Platform$sendToApp(router),
				task));
	});
var $elm$core$Task$onEffects = F3(
	function (router, commands, state) {
		return A2(
			$elm$core$Task$map,
			function (_v0) {
				return _Utils_Tuple0;
			},
			$elm$core$Task$sequence(
				A2(
					$elm$core$List$map,
					$elm$core$Task$spawnCmd(router),
					commands)));
	});
var $elm$core$Task$onSelfMsg = F3(
	function (_v0, _v1, _v2) {
		return $elm$core$Task$succeed(_Utils_Tuple0);
	});
var $elm$core$Task$cmdMap = F2(
	function (tagger, _v0) {
		var task = _v0.a;
		return $elm$core$Task$Perform(
			A2($elm$core$Task$map, tagger, task));
	});
_Platform_effectManagers['Task'] = _Platform_createManager($elm$core$Task$init, $elm$core$Task$onEffects, $elm$core$Task$onSelfMsg, $elm$core$Task$cmdMap);
var $elm$core$Task$command = _Platform_leaf('Task');
var $elm$core$Task$perform = F2(
	function (toMessage, task) {
		return $elm$core$Task$command(
			$elm$core$Task$Perform(
				A2($elm$core$Task$map, toMessage, task)));
	});
var $elm$core$Process$sleep = _Process_sleep;
var $mpizenberg$elm_test_runner$ElmTestRunner$Reporter$delayedMsg = function (msg) {
	return A2(
		$elm$core$Task$perform,
		$elm$core$Basics$identity,
		A2(
			$elm$core$Task$andThen,
			function (_v0) {
				return $elm$core$Task$succeed(msg);
			},
			$elm$core$Process$sleep(0)));
};
var $elm$core$String$slice = _String_slice;
var $elm$core$String$dropLeft = F2(
	function (n, string) {
		return (n < 1) ? string : A3(
			$elm$core$String$slice,
			n,
			$elm$core$String$length(string),
			string);
	});
var $mpizenberg$elm_test_runner$ElmTestRunner$Reporter$errorCode = F2(
	function (kindResult, testResults) {
		var _v0 = $mpizenberg$elm_test_runner$ElmTestRunner$Result$summary(testResults);
		var failedCount = _v0.failedCount;
		var todoCount = _v0.todoCount;
		return $elm$core$Array$isEmpty(testResults) ? 2 : ((_Utils_eq(
			kindResult,
			$elm$core$Result$Ok($mpizenberg$elm_test_runner$ElmTestRunner$SeededRunners$Plain)) && (!(failedCount + todoCount))) ? 0 : 2);
	});
var $mpizenberg$elm_test_runner$ElmTestRunner$SeededRunners$Only = {$: 'Only'};
var $mpizenberg$elm_test_runner$ElmTestRunner$SeededRunners$Skipping = {$: 'Skipping'};
var $mpizenberg$elm_test_runner$ElmTestRunner$SeededRunners$kindFromString = function (input) {
	switch (input) {
		case 'Plain':
			return $elm$core$Result$Ok($mpizenberg$elm_test_runner$ElmTestRunner$SeededRunners$Plain);
		case 'Only':
			return $elm$core$Result$Ok($mpizenberg$elm_test_runner$ElmTestRunner$SeededRunners$Only);
		case 'Skipping':
			return $elm$core$Result$Ok($mpizenberg$elm_test_runner$ElmTestRunner$SeededRunners$Skipping);
		default:
			return $elm$core$Result$Err(input);
	}
};
var $elm$core$Result$map = F2(
	function (func, ra) {
		if (ra.$ === 'Ok') {
			var a = ra.a;
			return $elm$core$Result$Ok(
				func(a));
		} else {
			var e = ra.a;
			return $elm$core$Result$Err(e);
		}
	});
var $elm$core$Elm$JsArray$push = _JsArray_push;
var $elm$core$Elm$JsArray$singleton = _JsArray_singleton;
var $elm$core$Array$insertTailInTree = F4(
	function (shift, index, tail, tree) {
		var pos = $elm$core$Array$bitMask & (index >>> shift);
		if (_Utils_cmp(
			pos,
			$elm$core$Elm$JsArray$length(tree)) > -1) {
			if (shift === 5) {
				return A2(
					$elm$core$Elm$JsArray$push,
					$elm$core$Array$Leaf(tail),
					tree);
			} else {
				var newSub = $elm$core$Array$SubTree(
					A4($elm$core$Array$insertTailInTree, shift - $elm$core$Array$shiftStep, index, tail, $elm$core$Elm$JsArray$empty));
				return A2($elm$core$Elm$JsArray$push, newSub, tree);
			}
		} else {
			var value = A2($elm$core$Elm$JsArray$unsafeGet, pos, tree);
			if (value.$ === 'SubTree') {
				var subTree = value.a;
				var newSub = $elm$core$Array$SubTree(
					A4($elm$core$Array$insertTailInTree, shift - $elm$core$Array$shiftStep, index, tail, subTree));
				return A3($elm$core$Elm$JsArray$unsafeSet, pos, newSub, tree);
			} else {
				var newSub = $elm$core$Array$SubTree(
					A4(
						$elm$core$Array$insertTailInTree,
						shift - $elm$core$Array$shiftStep,
						index,
						tail,
						$elm$core$Elm$JsArray$singleton(value)));
				return A3($elm$core$Elm$JsArray$unsafeSet, pos, newSub, tree);
			}
		}
	});
var $elm$core$Array$unsafeReplaceTail = F2(
	function (newTail, _v0) {
		var len = _v0.a;
		var startShift = _v0.b;
		var tree = _v0.c;
		var tail = _v0.d;
		var originalTailLen = $elm$core$Elm$JsArray$length(tail);
		var newTailLen = $elm$core$Elm$JsArray$length(newTail);
		var newArrayLen = len + (newTailLen - originalTailLen);
		if (_Utils_eq(newTailLen, $elm$core$Array$branchFactor)) {
			var overflow = _Utils_cmp(newArrayLen >>> $elm$core$Array$shiftStep, 1 << startShift) > 0;
			if (overflow) {
				var newShift = startShift + $elm$core$Array$shiftStep;
				var newTree = A4(
					$elm$core$Array$insertTailInTree,
					newShift,
					len,
					newTail,
					$elm$core$Elm$JsArray$singleton(
						$elm$core$Array$SubTree(tree)));
				return A4($elm$core$Array$Array_elm_builtin, newArrayLen, newShift, newTree, $elm$core$Elm$JsArray$empty);
			} else {
				return A4(
					$elm$core$Array$Array_elm_builtin,
					newArrayLen,
					startShift,
					A4($elm$core$Array$insertTailInTree, startShift, len, newTail, tree),
					$elm$core$Elm$JsArray$empty);
			}
		} else {
			return A4($elm$core$Array$Array_elm_builtin, newArrayLen, startShift, tree, newTail);
		}
	});
var $elm$core$Array$push = F2(
	function (a, array) {
		var tail = array.d;
		return A2(
			$elm$core$Array$unsafeReplaceTail,
			A2($elm$core$Elm$JsArray$push, a, tail),
			array);
	});
var $mpizenberg$elm_test_runner$ElmTestRunner$Reporter$report = F2(
	function (stdout, content) {
		return A2(
			$elm$core$Maybe$withDefault,
			$elm$core$Platform$Cmd$none,
			A2($elm$core$Maybe$map, stdout, content));
	});
var $mpizenberg$elm_test_runner$ElmTestRunner$Reporter$reportAndThenSummarize = F2(
	function (stdout, content) {
		return $elm$core$Platform$Cmd$batch(
			_List_fromArray(
				[
					A2($mpizenberg$elm_test_runner$ElmTestRunner$Reporter$report, stdout, content),
					$mpizenberg$elm_test_runner$ElmTestRunner$Reporter$delayedMsg($mpizenberg$elm_test_runner$ElmTestRunner$Reporter$Summarize)
				]));
	});
var $mpizenberg$elm_test_runner$ElmTestRunner$Result$setDuration = F2(
	function (duration, testResult) {
		if (testResult.$ === 'Passed') {
			var labels = testResult.a.labels;
			var logs = testResult.a.logs;
			var distributionReports = testResult.a.distributionReports;
			return $mpizenberg$elm_test_runner$ElmTestRunner$Result$Passed(
				{distributionReports: distributionReports, duration: duration, labels: labels, logs: logs});
		} else {
			var labels = testResult.a.labels;
			var logs = testResult.a.logs;
			var todos = testResult.a.todos;
			var failures = testResult.a.failures;
			var distributionReports = testResult.a.distributionReports;
			return $mpizenberg$elm_test_runner$ElmTestRunner$Result$Failed(
				{distributionReports: distributionReports, duration: duration, failures: failures, labels: labels, logs: logs, todos: todos});
		}
	});
var $mpizenberg$elm_test_runner$ElmTestRunner$Result$setLogs = F2(
	function (logs, testResult) {
		if (testResult.$ === 'Passed') {
			var labels = testResult.a.labels;
			var duration = testResult.a.duration;
			var distributionReports = testResult.a.distributionReports;
			return $mpizenberg$elm_test_runner$ElmTestRunner$Result$Passed(
				{distributionReports: distributionReports, duration: duration, labels: labels, logs: logs});
		} else {
			var labels = testResult.a.labels;
			var duration = testResult.a.duration;
			var todos = testResult.a.todos;
			var failures = testResult.a.failures;
			var distributionReports = testResult.a.distributionReports;
			return $mpizenberg$elm_test_runner$ElmTestRunner$Result$Failed(
				{distributionReports: distributionReports, duration: duration, failures: failures, labels: labels, logs: logs, todos: todos});
		}
	});
var $elm$core$String$startsWith = _String_startsWith;
var $mpizenberg$elm_test_runner$ElmTestRunner$Reporter$Finished = {$: 'Finished'};
var $mpizenberg$elm_test_runner$ElmTestRunner$Reporter$summarize = F2(
	function (stdout, content) {
		if (content.$ === 'Just') {
			var string = content.a;
			return $elm$core$Platform$Cmd$batch(
				_List_fromArray(
					[
						stdout(string),
						$mpizenberg$elm_test_runner$ElmTestRunner$Reporter$delayedMsg($mpizenberg$elm_test_runner$ElmTestRunner$Reporter$Finished)
					]));
		} else {
			return $mpizenberg$elm_test_runner$ElmTestRunner$Reporter$delayedMsg($mpizenberg$elm_test_runner$ElmTestRunner$Reporter$Finished);
		}
	});
var $elm$core$Result$withDefault = F2(
	function (def, result) {
		if (result.$ === 'Ok') {
			var a = result.a;
			return a;
		} else {
			return def;
		}
	});
var $mpizenberg$elm_test_runner$ElmTestRunner$Reporter$update = F2(
	function (msg, model) {
		switch (msg.$) {
			case 'Restart':
				var kind = msg.a.kind;
				var testsCount = msg.a.testsCount;
				return A2($elm$core$String$startsWith, 'Invalid', kind) ? _Utils_Tuple2(
					_Utils_update(
						model,
						{
							kind: $elm$core$Result$Err(
								A2($elm$core$String$dropLeft, 7, kind))
						}),
					$mpizenberg$elm_test_runner$ElmTestRunner$Reporter$delayedMsg($mpizenberg$elm_test_runner$ElmTestRunner$Reporter$Summarize)) : ((!testsCount) ? _Utils_Tuple2(
					_Utils_update(
						model,
						{
							kind: $mpizenberg$elm_test_runner$ElmTestRunner$SeededRunners$kindFromString(kind)
						}),
					$mpizenberg$elm_test_runner$ElmTestRunner$Reporter$delayedMsg($mpizenberg$elm_test_runner$ElmTestRunner$Reporter$Summarize)) : _Utils_Tuple2(
					_Utils_update(
						model,
						{
							kind: $mpizenberg$elm_test_runner$ElmTestRunner$SeededRunners$kindFromString(kind),
							testsCount: testsCount
						}),
					A2(
						$mpizenberg$elm_test_runner$ElmTestRunner$Reporter$report,
						model.ports.stdout,
						model.reporter.onBegin(testsCount))));
			case 'IncomingResult':
				var duration = msg.a.duration;
				var result = msg.a.result;
				var logs = msg.a.logs;
				var testResultResult = A2(
					$elm$core$Result$map,
					A2(
						$elm$core$Basics$composeR,
						$mpizenberg$elm_test_runner$ElmTestRunner$Result$setLogs(logs),
						$mpizenberg$elm_test_runner$ElmTestRunner$Result$setDuration(duration)),
					A2($elm$json$Json$Decode$decodeValue, $mpizenberg$elm_test_runner$ElmTestRunner$Result$decoder, result));
				var allTestResults = function () {
					if (testResultResult.$ === 'Ok') {
						var testResult = testResultResult.a;
						return A2($elm$core$Array$push, testResult, model.testResults);
					} else {
						return model.testResults;
					}
				}();
				var updatedModel = _Utils_update(
					model,
					{testResults: allTestResults});
				return _Utils_eq(
					$elm$core$Array$length(updatedModel.testResults),
					model.testsCount) ? _Utils_Tuple2(
					updatedModel,
					A2(
						$elm$core$Result$withDefault,
						$elm$core$Platform$Cmd$none,
						A2(
							$elm$core$Result$map,
							$mpizenberg$elm_test_runner$ElmTestRunner$Reporter$reportAndThenSummarize(model.ports.stdout),
							A2($elm$core$Result$map, model.reporter.onResult, testResultResult)))) : _Utils_Tuple2(
					updatedModel,
					A2(
						$elm$core$Result$withDefault,
						$elm$core$Platform$Cmd$none,
						A2(
							$elm$core$Result$map,
							$mpizenberg$elm_test_runner$ElmTestRunner$Reporter$report(model.ports.stdout),
							A2($elm$core$Result$map, model.reporter.onResult, testResultResult))));
			case 'Summarize':
				return _Utils_Tuple2(
					model,
					A2(
						$mpizenberg$elm_test_runner$ElmTestRunner$Reporter$summarize,
						model.ports.stdout,
						A2(model.reporter.onEnd, model.kind, model.testResults)));
			default:
				return _Utils_Tuple2(
					model,
					model.ports.signalFinished(
						{
							exitCode: A2($mpizenberg$elm_test_runner$ElmTestRunner$Reporter$errorCode, model.kind, model.testResults),
							testsCount: model.testsCount
						}));
		}
	});
var $elm$core$Platform$worker = _Platform_worker;
var $mpizenberg$elm_test_runner$ElmTestRunner$Reporter$worker = function (ports) {
	var restart = ports.restart;
	var incomingResult = ports.incomingResult;
	return $elm$core$Platform$worker(
		{
			init: $mpizenberg$elm_test_runner$ElmTestRunner$Reporter$init(ports),
			subscriptions: function (_v0) {
				return $elm$core$Platform$Sub$batch(
					_List_fromArray(
						[
							restart($mpizenberg$elm_test_runner$ElmTestRunner$Reporter$Restart),
							incomingResult($mpizenberg$elm_test_runner$ElmTestRunner$Reporter$IncomingResult)
						]));
			},
			update: $mpizenberg$elm_test_runner$ElmTestRunner$Reporter$update
		});
};
var $author$project$Reporter$main = $mpizenberg$elm_test_runner$ElmTestRunner$Reporter$worker(
	{incomingResult: $author$project$Reporter$incomingResult, restart: $author$project$Reporter$restart, signalFinished: $author$project$Reporter$signalFinished, stdout: $author$project$Reporter$stdout});
_Platform_export({'Reporter':{'init':$author$project$Reporter$main(
	A2(
		$elm$json$Json$Decode$andThen,
		function (verbosity) {
			return A2(
				$elm$json$Json$Decode$andThen,
				function (paths) {
					return A2(
						$elm$json$Json$Decode$andThen,
						function (mode) {
							return A2(
								$elm$json$Json$Decode$andThen,
								function (initialSeed) {
									return A2(
										$elm$json$Json$Decode$andThen,
										function (globs) {
											return A2(
												$elm$json$Json$Decode$andThen,
												function (fuzzRuns) {
													return $elm$json$Json$Decode$succeed(
														{fuzzRuns: fuzzRuns, globs: globs, initialSeed: initialSeed, mode: mode, paths: paths, verbosity: verbosity});
												},
												A2($elm$json$Json$Decode$field, 'fuzzRuns', $elm$json$Json$Decode$int));
										},
										A2(
											$elm$json$Json$Decode$field,
											'globs',
											$elm$json$Json$Decode$list($elm$json$Json$Decode$string)));
								},
								A2($elm$json$Json$Decode$field, 'initialSeed', $elm$json$Json$Decode$int));
						},
						A2($elm$json$Json$Decode$field, 'mode', $elm$json$Json$Decode$string));
				},
				A2(
					$elm$json$Json$Decode$field,
					'paths',
					$elm$json$Json$Decode$list($elm$json$Json$Decode$string)));
		},
		A2($elm$json$Json$Decode$field, 'verbosity', $elm$json$Json$Decode$int)))(0)}});}(this));