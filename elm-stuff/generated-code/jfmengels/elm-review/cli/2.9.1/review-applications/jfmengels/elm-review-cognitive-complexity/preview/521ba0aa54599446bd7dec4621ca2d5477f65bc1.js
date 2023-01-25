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

var _Debug_log = F2(function(tag, value)
{
	return value;
});

var _Debug_log_UNUSED = F2(function(tag, value)
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

function _Debug_toString(value)
{
	return '<internals>';
}

function _Debug_toString_UNUSED(value)
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


function _Debug_crash(identifier)
{
	throw new Error('https://github.com/elm/core/blob/1.0.0/hints/' + identifier + '.md');
}


function _Debug_crash_UNUSED(identifier, fact1, fact2, fact3, fact4)
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
	if (region.bQ.aM === region.bu.aM)
	{
		return 'on line ' + region.bQ.aM;
	}
	return 'on lines ' + region.bQ.aM + ' through ' + region.bu.aM;
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

	/**_UNUSED/
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

	/**/
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

	/**_UNUSED/
	if (x instanceof String)
	{
		var a = x.valueOf();
		var b = y.valueOf();
		return a === b ? 0 : a < b ? -1 : 1;
	}
	//*/

	/**/
	if (typeof x.$ === 'undefined')
	//*/
	/**_UNUSED/
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

var _Utils_Tuple0 = 0;
var _Utils_Tuple0_UNUSED = { $: '#0' };

function _Utils_Tuple2(a, b) { return { a: a, b: b }; }
function _Utils_Tuple2_UNUSED(a, b) { return { $: '#2', a: a, b: b }; }

function _Utils_Tuple3(a, b, c) { return { a: a, b: b, c: c }; }
function _Utils_Tuple3_UNUSED(a, b, c) { return { $: '#3', a: a, b: b, c: c }; }

function _Utils_chr(c) { return c; }
function _Utils_chr_UNUSED(c) { return new String(c); }


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



var _List_Nil = { $: 0 };
var _List_Nil_UNUSED = { $: '[]' };

function _List_Cons(hd, tl) { return { $: 1, a: hd, b: tl }; }
function _List_Cons_UNUSED(hd, tl) { return { $: '::', a: hd, b: tl }; }


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



/**_UNUSED/
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

function _Json_wrap_UNUSED(value) { return { $: 0, a: value }; }
function _Json_unwrap_UNUSED(value) { return value.a; }

function _Json_wrap(value) { return value; }
function _Json_unwrap(value) { return value; }

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




// STRINGS


var _Parser_isSubString = F5(function(smallString, offset, row, col, bigString)
{
	var smallLength = smallString.length;
	var isGood = offset + smallLength <= bigString.length;

	for (var i = 0; isGood && i < smallLength; )
	{
		var code = bigString.charCodeAt(offset);
		isGood =
			smallString[i++] === bigString[offset++]
			&& (
				code === 0x000A /* \n */
					? ( row++, col=1 )
					: ( col++, (code & 0xF800) === 0xD800 ? smallString[i++] === bigString[offset++] : 1 )
			)
	}

	return _Utils_Tuple3(isGood ? offset : -1, row, col);
});



// CHARS


var _Parser_isSubChar = F3(function(predicate, offset, string)
{
	return (
		string.length <= offset
			? -1
			:
		(string.charCodeAt(offset) & 0xF800) === 0xD800
			? (predicate(_Utils_chr(string.substr(offset, 2))) ? offset + 2 : -1)
			:
		(predicate(_Utils_chr(string[offset]))
			? ((string[offset] === '\n') ? -2 : (offset + 1))
			: -1
		)
	);
});


var _Parser_isAsciiCode = F3(function(code, offset, string)
{
	return string.charCodeAt(offset) === code;
});



// NUMBERS


var _Parser_chompBase10 = F2(function(offset, string)
{
	for (; offset < string.length; offset++)
	{
		var code = string.charCodeAt(offset);
		if (code < 0x30 || 0x39 < code)
		{
			return offset;
		}
	}
	return offset;
});


var _Parser_consumeBase = F3(function(base, offset, string)
{
	for (var total = 0; offset < string.length; offset++)
	{
		var digit = string.charCodeAt(offset) - 0x30;
		if (digit < 0 || base <= digit) break;
		total = base * total + digit;
	}
	return _Utils_Tuple2(offset, total);
});


var _Parser_consumeBase16 = F2(function(offset, string)
{
	for (var total = 0; offset < string.length; offset++)
	{
		var code = string.charCodeAt(offset);
		if (0x30 <= code && code <= 0x39)
		{
			total = 16 * total + code - 0x30;
		}
		else if (0x41 <= code && code <= 0x46)
		{
			total = 16 * total + code - 55;
		}
		else if (0x61 <= code && code <= 0x66)
		{
			total = 16 * total + code - 87;
		}
		else
		{
			break;
		}
	}
	return _Utils_Tuple2(offset, total);
});



// FIND STRING


var _Parser_findSubString = F5(function(smallString, offset, row, col, bigString)
{
	var newOffset = bigString.indexOf(smallString, offset);
	var target = newOffset < 0 ? bigString.length : newOffset + smallString.length;

	while (offset < target)
	{
		var code = bigString.charCodeAt(offset++);
		code === 0x000A /* \n */
			? ( col=1, row++ )
			: ( col++, (code & 0xF800) === 0xD800 && offset++ )
	}

	return _Utils_Tuple3(newOffset, row, col);
});



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
		impl.e4,
		impl.fS,
		impl.fK,
		function() { return function() {} }
	);
});



// INITIALIZE A PROGRAM


function _Platform_initialize(flagDecoder, args, init, update, subscriptions, stepperBuilder)
{
	var result = A2(_Json_run, flagDecoder, _Json_wrap(args ? args['flags'] : undefined));
	$elm$core$Result$isOk(result) || _Debug_crash(2 /**_UNUSED/, _Json_errorToString(result.a) /**/);
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


function _Platform_export(exports)
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


function _Platform_export_UNUSED(exports)
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
var $elm$core$List$cons = _List_cons;
var $elm$core$Elm$JsArray$foldr = _JsArray_foldr;
var $elm$core$Array$foldr = F3(
	function (func, baseCase, _v0) {
		var tree = _v0.c;
		var tail = _v0.d;
		var helper = F2(
			function (node, acc) {
				if (!node.$) {
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
			if (t.$ === -2) {
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
	var dict = _v0;
	return $elm$core$Dict$keys(dict);
};
var $elm$core$Basics$EQ = 1;
var $elm$core$Basics$GT = 2;
var $elm$core$Basics$LT = 0;
var $author$project$Elm$Review$Reporter$ConfigurationError = {$: 2};
var $elm$core$Basics$False = 1;
var $author$project$Elm$Review$Main$HumanReadable = 0;
var $author$project$Elm$Review$Main$Mode_DontFix = 0;
var $author$project$Elm$Review$Main$NotAwaiting = {$: 0};
var $elm$core$Maybe$Nothing = {$: 1};
var $elm$core$Basics$identity = function (x) {
	return x;
};
var $author$project$Elm$Review$Reporter$Source = $elm$core$Basics$identity;
var $elm$core$Basics$True = 0;
var $author$project$Elm$Review$UnsuppressMode$UnsuppressNone = {$: 2};
var $author$project$Elm$Review$Reporter$WithoutDetails = 1;
var $elm$core$Result$Err = function (a) {
	return {$: 1, a: a};
};
var $elm$json$Json$Decode$Failure = F2(
	function (a, b) {
		return {$: 3, a: a, b: b};
	});
var $elm$json$Json$Decode$Field = F2(
	function (a, b) {
		return {$: 0, a: a, b: b};
	});
var $elm$json$Json$Decode$Index = F2(
	function (a, b) {
		return {$: 1, a: a, b: b};
	});
var $elm$core$Result$Ok = function (a) {
	return {$: 0, a: a};
};
var $elm$json$Json$Decode$OneOf = function (a) {
	return {$: 2, a: a};
};
var $elm$core$Basics$add = _Basics_add;
var $elm$core$Maybe$Just = function (a) {
	return {$: 0, a: a};
};
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
var $elm$core$List$indexedMap = F2(function (f, xs) {
  var tmp = _List_Cons(undefined, _List_Nil);
  var end = tmp;
  for (var i = 0; xs.b; i++, xs = xs.b) {
    var next = _List_Cons(A2(f, i, xs.a), _List_Nil);
    end.b = next;
    end = next;
  }
  return tmp.b;
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
				case 0:
					var f = error.a;
					var err = error.b;
					var isSimple = function () {
						var _v1 = $elm$core$String$uncons(f);
						if (_v1.$ === 1) {
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
				case 1:
					var i = error.a;
					var err = error.b;
					var indexName = '[' + ($elm$core$String$fromInt(i) + ']');
					var $temp$error = err,
						$temp$context = A2($elm$core$List$cons, indexName, context);
					error = $temp$error;
					context = $temp$context;
					continue errorToStringHelp;
				case 2:
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
		return {$: 0, a: a, b: b, c: c, d: d};
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
	return {$: 1, a: a};
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
	return {$: 0, a: a};
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
		if (!builder.B) {
			return A4(
				$elm$core$Array$Array_elm_builtin,
				$elm$core$Elm$JsArray$length(builder.D),
				$elm$core$Array$shiftStep,
				$elm$core$Elm$JsArray$empty,
				builder.D);
		} else {
			var treeLen = builder.B * $elm$core$Array$branchFactor;
			var depth = $elm$core$Basics$floor(
				A2($elm$core$Basics$logBase, $elm$core$Array$branchFactor, treeLen - 1));
			var correctNodeList = reverseNodeList ? $elm$core$List$reverse(builder.F) : builder.F;
			var tree = A2($elm$core$Array$treeFromBuilder, correctNodeList, builder.B);
			return A4(
				$elm$core$Array$Array_elm_builtin,
				$elm$core$Elm$JsArray$length(builder.D) + treeLen,
				A2($elm$core$Basics$max, 5, depth * $elm$core$Array$shiftStep),
				tree,
				builder.D);
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
					{F: nodeList, B: (len / $elm$core$Array$branchFactor) | 0, D: tail});
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
var $elm$core$Result$isOk = function (result) {
	if (!result.$) {
		return true;
	} else {
		return false;
	}
};
var $elm$json$Json$Encode$string = _Json_wrap;
var $author$project$Elm$Review$Main$abort = _Platform_outgoingPort('abort', $elm$json$Json$Encode$string);
var $author$project$Elm$Review$Main$abortForConfigurationErrors = _Platform_outgoingPort('abortForConfigurationErrors', $elm$core$Basics$identity);
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
			_Json_emptyObject(0),
			pairs));
};
var $author$project$Elm$Review$Main$abortWithDetails = _Platform_outgoingPort(
	'abortWithDetails',
	function ($) {
		return $elm$json$Json$Encode$object(
			_List_fromArray(
				[
					_Utils_Tuple2(
					'message',
					$elm$json$Json$Encode$string($.e8)),
					_Utils_Tuple2(
					'title',
					$elm$json$Json$Encode$string($.cc))
				]));
	});
var $elm$core$Basics$composeR = F3(
	function (f, g, x) {
		return g(
			f(x));
	});
var $elm$core$Dict$foldl = F3(
	function (func, acc, dict) {
		foldl:
		while (true) {
			if (dict.$ === -2) {
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
var $elm$json$Json$Encode$dict = F3(
	function (toKey, toValue, dictionary) {
		return _Json_wrap(
			A3(
				$elm$core$Dict$foldl,
				F3(
					function (key, value, obj) {
						return A3(
							_Json_addField,
							toKey(key),
							toValue(value),
							obj);
					}),
				_Json_emptyObject(0),
				dictionary));
	});
var $elm$json$Json$Encode$int = _Json_wrap;
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
var $elm$core$List$map = F2(function (f, xs) {
  var tmp = _List_Cons(undefined, _List_Nil);
  var end = tmp;
  for (; xs.b; xs = xs.b) {
    var next = _List_Cons(f(xs.a), _List_Nil);
    end.b = next;
    end = next;
  }
  return tmp.b;
});
var $elm$core$Basics$negate = function (n) {
	return -n;
};
var $elm$core$Tuple$second = function (_v0) {
	var y = _v0.b;
	return y;
};
var $elm$core$List$sortBy = _List_sortBy;
var $author$project$CognitiveComplexity$encodeComplexityDict = function (dict) {
	return $elm$json$Json$Encode$object(
		A2(
			$elm$core$List$map,
			function (_v0) {
				var name = _v0.a;
				var complexity = _v0.b;
				return _Utils_Tuple2(
					name,
					$elm$json$Json$Encode$int(complexity));
			},
			A2(
				$elm$core$List$sortBy,
				A2($elm$core$Basics$composeR, $elm$core$Tuple$second, $elm$core$Basics$negate),
				$elm$core$Dict$toList(dict))));
};
var $author$project$CognitiveComplexity$dataExtractor = function (projectContext) {
	return A3($elm$json$Json$Encode$dict, $elm$core$Basics$identity, $author$project$CognitiveComplexity$encodeComplexityDict, projectContext);
};
var $elm$core$Dict$Black = 1;
var $elm$core$Dict$RBNode_elm_builtin = F5(
	function (a, b, c, d, e) {
		return {$: -1, a: a, b: b, c: c, d: d, e: e};
	});
var $elm$core$Dict$RBEmpty_elm_builtin = {$: -2};
var $elm$core$Dict$Red = 0;
var $elm$core$Dict$balance = F5(
	function (color, key, value, left, right) {
		if ((right.$ === -1) && (!right.a)) {
			var _v1 = right.a;
			var rK = right.b;
			var rV = right.c;
			var rLeft = right.d;
			var rRight = right.e;
			if ((left.$ === -1) && (!left.a)) {
				var _v3 = left.a;
				var lK = left.b;
				var lV = left.c;
				var lLeft = left.d;
				var lRight = left.e;
				return A5(
					$elm$core$Dict$RBNode_elm_builtin,
					0,
					key,
					value,
					A5($elm$core$Dict$RBNode_elm_builtin, 1, lK, lV, lLeft, lRight),
					A5($elm$core$Dict$RBNode_elm_builtin, 1, rK, rV, rLeft, rRight));
			} else {
				return A5(
					$elm$core$Dict$RBNode_elm_builtin,
					color,
					rK,
					rV,
					A5($elm$core$Dict$RBNode_elm_builtin, 0, key, value, left, rLeft),
					rRight);
			}
		} else {
			if ((((left.$ === -1) && (!left.a)) && (left.d.$ === -1)) && (!left.d.a)) {
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
					0,
					lK,
					lV,
					A5($elm$core$Dict$RBNode_elm_builtin, 1, llK, llV, llLeft, llRight),
					A5($elm$core$Dict$RBNode_elm_builtin, 1, key, value, lRight, right));
			} else {
				return A5($elm$core$Dict$RBNode_elm_builtin, color, key, value, left, right);
			}
		}
	});
var $elm$core$Basics$compare = _Utils_compare;
var $elm$core$Dict$insertHelp = F3(
	function (key, value, dict) {
		if (dict.$ === -2) {
			return A5($elm$core$Dict$RBNode_elm_builtin, 0, key, value, $elm$core$Dict$RBEmpty_elm_builtin, $elm$core$Dict$RBEmpty_elm_builtin);
		} else {
			var nColor = dict.a;
			var nKey = dict.b;
			var nValue = dict.c;
			var nLeft = dict.d;
			var nRight = dict.e;
			var _v1 = A2($elm$core$Basics$compare, key, nKey);
			switch (_v1) {
				case 0:
					return A5(
						$elm$core$Dict$balance,
						nColor,
						nKey,
						nValue,
						A3($elm$core$Dict$insertHelp, key, value, nLeft),
						nRight);
				case 1:
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
		if ((_v0.$ === -1) && (!_v0.a)) {
			var _v1 = _v0.a;
			var k = _v0.b;
			var v = _v0.c;
			var l = _v0.d;
			var r = _v0.e;
			return A5($elm$core$Dict$RBNode_elm_builtin, 1, k, v, l, r);
		} else {
			var x = _v0;
			return x;
		}
	});
var $elm$core$Dict$union = F2(
	function (t1, t2) {
		return A3($elm$core$Dict$foldl, $elm$core$Dict$insert, t2, t1);
	});
var $author$project$CognitiveComplexity$foldProjectContexts = $elm$core$Dict$union;
var $author$project$CognitiveComplexity$IndirectRecursiveCall = function (a) {
	return {$: 5, a: a};
};
var $author$project$CognitiveComplexity$RecursiveCall = {$: 4};
var $elm$core$Set$foldl = F3(
	function (func, initialState, _v0) {
		var dict = _v0;
		return A3(
			$elm$core$Dict$foldl,
			F3(
				function (key, _v1, state) {
					return A2(func, key, state);
				}),
			initialState,
			dict);
	});
var $elm$core$Dict$get = F2(
	function (targetKey, dict) {
		get:
		while (true) {
			if (dict.$ === -2) {
				return $elm$core$Maybe$Nothing;
			} else {
				var key = dict.b;
				var value = dict.c;
				var left = dict.d;
				var right = dict.e;
				var _v1 = A2($elm$core$Basics$compare, targetKey, key);
				switch (_v1) {
					case 0:
						var $temp$targetKey = targetKey,
							$temp$dict = left;
						targetKey = $temp$targetKey;
						dict = $temp$dict;
						continue get;
					case 1:
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
var $stil4m$elm_syntax$Elm$Syntax$Node$value = function (_v0) {
	var v = _v0.b;
	return v;
};
var $author$project$CognitiveComplexity$computeIncreases = F2(
	function (allRecursiveCalls, _v0) {
		var functionName = _v0.aV;
		var increases = _v0.P;
		var references = _v0._;
		var _v1 = A2(
			$elm$core$Dict$get,
			$stil4m$elm_syntax$Elm$Syntax$Node$value(functionName),
			allRecursiveCalls);
		if (!_v1.$) {
			var recursiveCalls = _v1.a;
			return A3(
				$elm$core$Set$foldl,
				F2(
					function (reference, acc) {
						var _v2 = A2($elm$core$Dict$get, reference, references);
						if (!_v2.$) {
							var location = _v2.a;
							return A2(
								$elm$core$List$cons,
								{
									ay: 1,
									aZ: _Utils_eq(
										$stil4m$elm_syntax$Elm$Syntax$Node$value(functionName),
										reference) ? $author$project$CognitiveComplexity$RecursiveCall : $author$project$CognitiveComplexity$IndirectRecursiveCall(reference),
									aM: location,
									h: 0
								},
								acc);
						} else {
							return acc;
						}
					}),
				increases,
				recursiveCalls);
		} else {
			return increases;
		}
	});
var $elm$core$Dict$empty = $elm$core$Dict$RBEmpty_elm_builtin;
var $elm$core$Set$Set_elm_builtin = $elm$core$Basics$identity;
var $elm$core$Set$empty = $elm$core$Dict$empty;
var $elm$core$Dict$filter = F2(
	function (isGood, dict) {
		return A3(
			$elm$core$Dict$foldl,
			F3(
				function (k, v, d) {
					return A2(isGood, k, v) ? A3($elm$core$Dict$insert, k, v, d) : d;
				}),
			$elm$core$Dict$empty,
			dict);
	});
var $author$project$CognitiveComplexity$InStack = 0;
var $elm$core$Dict$merge = F6(
	function (leftStep, bothStep, rightStep, leftDict, rightDict, initialResult) {
		var stepState = F3(
			function (rKey, rValue, _v0) {
				stepState:
				while (true) {
					var list = _v0.a;
					var result = _v0.b;
					if (!list.b) {
						return _Utils_Tuple2(
							list,
							A3(rightStep, rKey, rValue, result));
					} else {
						var _v2 = list.a;
						var lKey = _v2.a;
						var lValue = _v2.b;
						var rest = list.b;
						if (_Utils_cmp(lKey, rKey) < 0) {
							var $temp$rKey = rKey,
								$temp$rValue = rValue,
								$temp$_v0 = _Utils_Tuple2(
								rest,
								A3(leftStep, lKey, lValue, result));
							rKey = $temp$rKey;
							rValue = $temp$rValue;
							_v0 = $temp$_v0;
							continue stepState;
						} else {
							if (_Utils_cmp(lKey, rKey) > 0) {
								return _Utils_Tuple2(
									list,
									A3(rightStep, rKey, rValue, result));
							} else {
								return _Utils_Tuple2(
									rest,
									A4(bothStep, lKey, lValue, rValue, result));
							}
						}
					}
				}
			});
		var _v3 = A3(
			$elm$core$Dict$foldl,
			stepState,
			_Utils_Tuple2(
				$elm$core$Dict$toList(leftDict),
				initialResult),
			rightDict);
		var leftovers = _v3.a;
		var intermediateResult = _v3.b;
		return A3(
			$elm$core$List$foldl,
			F2(
				function (_v4, result) {
					var k = _v4.a;
					var v = _v4.b;
					return A3(leftStep, k, v, result);
				}),
			intermediateResult,
			leftovers);
	});
var $elm$core$Set$union = F2(
	function (_v0, _v1) {
		var dict1 = _v0;
		var dict2 = _v1;
		return A2($elm$core$Dict$union, dict1, dict2);
	});
var $author$project$CognitiveComplexity$mergeRecursiveCallsDict = F2(
	function (left, right) {
		return A6(
			$elm$core$Dict$merge,
			F3(
				function (functionName, calls, dict) {
					return A3($elm$core$Dict$insert, functionName, calls, dict);
				}),
			F4(
				function (functionName, callsLeft, callsRight, dict) {
					return A3(
						$elm$core$Dict$insert,
						functionName,
						A2($elm$core$Set$union, callsLeft, callsRight),
						dict);
				}),
			F3(
				function (functionName, calls, dict) {
					return A3($elm$core$Dict$insert, functionName, calls, dict);
				}),
			left,
			right,
			$elm$core$Dict$empty);
	});
var $author$project$CognitiveComplexity$Done = 1;
var $elm$core$Maybe$andThen = F2(
	function (callback, maybeValue) {
		if (!maybeValue.$) {
			var value = maybeValue.a;
			return callback(value);
		} else {
			return $elm$core$Maybe$Nothing;
		}
	});
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
var $elm$core$List$head = function (list) {
	if (list.b) {
		var x = list.a;
		var xs = list.b;
		return $elm$core$Maybe$Just(x);
	} else {
		return $elm$core$Maybe$Nothing;
	}
};
var $elm$core$Set$insert = F2(
	function (key, _v0) {
		var dict = _v0;
		return A3($elm$core$Dict$insert, key, 0, dict);
	});
var $elm$core$Basics$neq = _Utils_notEqual;
var $author$project$CognitiveComplexity$takeTop = F3(
	function (stack, _v0, stopValue) {
		takeTop:
		while (true) {
			var previousValue = _v0.a;
			var previousValues = _v0.b;
			if (!stack.b) {
				return _Utils_Tuple2(previousValue, previousValues);
			} else {
				var x = stack.a;
				var xs = stack.b;
				if (!_Utils_eq(x, stopValue)) {
					var $temp$stack = xs,
						$temp$_v0 = _Utils_Tuple2(
						x,
						A2($elm$core$List$cons, previousValue, previousValues)),
						$temp$stopValue = stopValue;
					stack = $temp$stack;
					_v0 = $temp$_v0;
					stopValue = $temp$stopValue;
					continue takeTop;
				} else {
					return _Utils_Tuple2(
						x,
						A2($elm$core$List$cons, previousValue, previousValues));
				}
			}
		}
	});
var $author$project$CognitiveComplexity$toTuples = F3(
	function (x, _v0, result) {
		toTuples:
		while (true) {
			var first = _v0.a;
			var xs = _v0.b;
			if (!xs.b) {
				return A2(
					$elm$core$List$cons,
					_Utils_Tuple2(x, first),
					result);
			} else {
				var firstofXs = xs.a;
				var restOfXs = xs.b;
				var $temp$x = first,
					$temp$_v0 = _Utils_Tuple2(firstofXs, restOfXs),
					$temp$result = A2(
					$elm$core$List$cons,
					_Utils_Tuple2(x, first),
					result);
				x = $temp$x;
				_v0 = $temp$_v0;
				result = $temp$result;
				continue toTuples;
			}
		}
	});
var $elm$core$Dict$getMin = function (dict) {
	getMin:
	while (true) {
		if ((dict.$ === -1) && (dict.d.$ === -1)) {
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
	if (((dict.$ === -1) && (dict.d.$ === -1)) && (dict.e.$ === -1)) {
		if ((dict.e.d.$ === -1) && (!dict.e.d.a)) {
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
				0,
				rlK,
				rlV,
				A5(
					$elm$core$Dict$RBNode_elm_builtin,
					1,
					k,
					v,
					A5($elm$core$Dict$RBNode_elm_builtin, 0, lK, lV, lLeft, lRight),
					rlL),
				A5($elm$core$Dict$RBNode_elm_builtin, 1, rK, rV, rlR, rRight));
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
			if (clr === 1) {
				return A5(
					$elm$core$Dict$RBNode_elm_builtin,
					1,
					k,
					v,
					A5($elm$core$Dict$RBNode_elm_builtin, 0, lK, lV, lLeft, lRight),
					A5($elm$core$Dict$RBNode_elm_builtin, 0, rK, rV, rLeft, rRight));
			} else {
				return A5(
					$elm$core$Dict$RBNode_elm_builtin,
					1,
					k,
					v,
					A5($elm$core$Dict$RBNode_elm_builtin, 0, lK, lV, lLeft, lRight),
					A5($elm$core$Dict$RBNode_elm_builtin, 0, rK, rV, rLeft, rRight));
			}
		}
	} else {
		return dict;
	}
};
var $elm$core$Dict$moveRedRight = function (dict) {
	if (((dict.$ === -1) && (dict.d.$ === -1)) && (dict.e.$ === -1)) {
		if ((dict.d.d.$ === -1) && (!dict.d.d.a)) {
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
				0,
				lK,
				lV,
				A5($elm$core$Dict$RBNode_elm_builtin, 1, llK, llV, llLeft, llRight),
				A5(
					$elm$core$Dict$RBNode_elm_builtin,
					1,
					k,
					v,
					lRight,
					A5($elm$core$Dict$RBNode_elm_builtin, 0, rK, rV, rLeft, rRight)));
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
			if (clr === 1) {
				return A5(
					$elm$core$Dict$RBNode_elm_builtin,
					1,
					k,
					v,
					A5($elm$core$Dict$RBNode_elm_builtin, 0, lK, lV, lLeft, lRight),
					A5($elm$core$Dict$RBNode_elm_builtin, 0, rK, rV, rLeft, rRight));
			} else {
				return A5(
					$elm$core$Dict$RBNode_elm_builtin,
					1,
					k,
					v,
					A5($elm$core$Dict$RBNode_elm_builtin, 0, lK, lV, lLeft, lRight),
					A5($elm$core$Dict$RBNode_elm_builtin, 0, rK, rV, rLeft, rRight));
			}
		}
	} else {
		return dict;
	}
};
var $elm$core$Dict$removeHelpPrepEQGT = F7(
	function (targetKey, dict, color, key, value, left, right) {
		if ((left.$ === -1) && (!left.a)) {
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
				A5($elm$core$Dict$RBNode_elm_builtin, 0, key, value, lRight, right));
		} else {
			_v2$2:
			while (true) {
				if ((right.$ === -1) && (right.a === 1)) {
					if (right.d.$ === -1) {
						if (right.d.a === 1) {
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
	if ((dict.$ === -1) && (dict.d.$ === -1)) {
		var color = dict.a;
		var key = dict.b;
		var value = dict.c;
		var left = dict.d;
		var lColor = left.a;
		var lLeft = left.d;
		var right = dict.e;
		if (lColor === 1) {
			if ((lLeft.$ === -1) && (!lLeft.a)) {
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
				if (_v4.$ === -1) {
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
		if (dict.$ === -2) {
			return $elm$core$Dict$RBEmpty_elm_builtin;
		} else {
			var color = dict.a;
			var key = dict.b;
			var value = dict.c;
			var left = dict.d;
			var right = dict.e;
			if (_Utils_cmp(targetKey, key) < 0) {
				if ((left.$ === -1) && (left.a === 1)) {
					var _v4 = left.a;
					var lLeft = left.d;
					if ((lLeft.$ === -1) && (!lLeft.a)) {
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
						if (_v7.$ === -1) {
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
		if (dict.$ === -1) {
			var color = dict.a;
			var key = dict.b;
			var value = dict.c;
			var left = dict.d;
			var right = dict.e;
			if (_Utils_eq(targetKey, key)) {
				var _v1 = $elm$core$Dict$getMin(right);
				if (_v1.$ === -1) {
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
		if ((_v0.$ === -1) && (!_v0.a)) {
			var _v1 = _v0.a;
			var k = _v0.b;
			var v = _v0.c;
			var l = _v0.d;
			var r = _v0.e;
			return A5($elm$core$Dict$RBNode_elm_builtin, 1, k, v, l, r);
		} else {
			var x = _v0;
			return x;
		}
	});
var $elm$core$Dict$update = F3(
	function (targetKey, alter, dictionary) {
		var _v0 = alter(
			A2($elm$core$Dict$get, targetKey, dictionary));
		if (!_v0.$) {
			var value = _v0.a;
			return A3($elm$core$Dict$insert, targetKey, value, dictionary);
		} else {
			return A2($elm$core$Dict$remove, targetKey, dictionary);
		}
	});
var $elm$core$Maybe$withDefault = F2(
	function (_default, maybe) {
		if (!maybe.$) {
			var value = maybe.a;
			return value;
		} else {
			return _default;
		}
	});
var $author$project$CognitiveComplexity$insertCycle = F3(
	function (stack, vertice, recursiveCalls) {
		if (stack.b) {
			var x = stack.a;
			var xs = stack.b;
			return A3(
				$elm$core$List$foldl,
				F2(
					function (_v1, acc) {
						var functionName = _v1.a;
						var reference = _v1.b;
						return A3(
							$elm$core$Dict$update,
							functionName,
							A2(
								$elm$core$Basics$composeR,
								$elm$core$Maybe$withDefault($elm$core$Set$empty),
								A2(
									$elm$core$Basics$composeR,
									$elm$core$Set$insert(reference),
									$elm$core$Maybe$Just)),
							acc);
					}),
				recursiveCalls,
				A3(
					$author$project$CognitiveComplexity$toTuples,
					x,
					A3(
						$author$project$CognitiveComplexity$takeTop,
						xs,
						_Utils_Tuple2(x, _List_Nil),
						vertice),
					_List_Nil));
		} else {
			return recursiveCalls;
		}
	});
var $elm$core$Maybe$map = F2(
	function (f, maybe) {
		if (!maybe.$) {
			var value = maybe.a;
			return $elm$core$Maybe$Just(
				f(value));
		} else {
			return $elm$core$Maybe$Nothing;
		}
	});
var $author$project$CognitiveComplexity$processDFSTree = F3(
	function (graph, stack, visited) {
		var vertices = $elm$core$Dict$keys(
			A2(
				$elm$core$Maybe$withDefault,
				$elm$core$Dict$empty,
				A2(
					$elm$core$Maybe$andThen,
					function (v) {
						return A2($elm$core$Dict$get, v, graph);
					},
					$elm$core$List$head(stack))));
		return function (res) {
			return {
				aQ: res.aQ,
				fG: A2($elm$core$List$drop, 1, stack),
				bl: A2(
					$elm$core$Maybe$withDefault,
					res.bl,
					A2(
						$elm$core$Maybe$map,
						function (v) {
							return A3($elm$core$Dict$insert, v, 1, res.bl);
						},
						$elm$core$List$head(stack)))
			};
		}(
			A3(
				$elm$core$List$foldl,
				F2(
					function (vertice, acc) {
						var _v0 = A2($elm$core$Dict$get, vertice, visited);
						if (!_v0.$) {
							if (!_v0.a) {
								var _v1 = _v0.a;
								return _Utils_update(
									acc,
									{
										aQ: A3($author$project$CognitiveComplexity$insertCycle, stack, vertice, acc.aQ)
									});
							} else {
								var _v2 = _v0.a;
								return acc;
							}
						} else {
							var res = A3(
								$author$project$CognitiveComplexity$processDFSTree,
								graph,
								A2($elm$core$List$cons, vertice, stack),
								A3($elm$core$Dict$insert, vertice, 0, visited));
							return {
								aQ: A2($author$project$CognitiveComplexity$mergeRecursiveCallsDict, res.aQ, acc.aQ),
								bl: res.bl
							};
						}
					}),
				{aQ: $elm$core$Dict$empty, bl: visited},
				vertices));
	});
var $author$project$CognitiveComplexity$findRecursiveCalls = function (graph) {
	return A3(
		$elm$core$Dict$foldl,
		F3(
			function (vertice, _v0, _v1) {
				var recursiveCalls = _v1.a;
				var visited = _v1.b;
				var res = A3(
					$author$project$CognitiveComplexity$processDFSTree,
					graph,
					_List_fromArray(
						[vertice]),
					A3($elm$core$Dict$insert, vertice, 0, visited));
				return _Utils_Tuple2(
					A2($author$project$CognitiveComplexity$mergeRecursiveCallsDict, res.aQ, recursiveCalls),
					res.bl);
			}),
		_Utils_Tuple2($elm$core$Dict$empty, $elm$core$Dict$empty),
		graph).a;
};
var $elm$core$Dict$member = F2(
	function (key, dict) {
		var _v0 = A2($elm$core$Dict$get, key, dict);
		if (!_v0.$) {
			return true;
		} else {
			return false;
		}
	});
var $elm$core$Set$member = F2(
	function (key, _v0) {
		var dict = _v0;
		return A2($elm$core$Dict$member, key, dict);
	});
var $author$project$CognitiveComplexity$computeRecursiveCalls = function (context) {
	var potentialRecursiveFunctions = A3(
		$elm$core$List$foldl,
		F2(
			function (fn, acc) {
				return A2(
					$elm$core$Set$insert,
					$stil4m$elm_syntax$Elm$Syntax$Node$value(fn.aV),
					acc);
			}),
		$elm$core$Set$empty,
		context.aL);
	return $author$project$CognitiveComplexity$findRecursiveCalls(
		A3(
			$elm$core$List$foldl,
			F2(
				function (_v0, acc) {
					var functionName = _v0.aV;
					var references = _v0._;
					return A3(
						$elm$core$Dict$insert,
						$stil4m$elm_syntax$Elm$Syntax$Node$value(functionName),
						A2(
							$elm$core$Dict$filter,
							F2(
								function (name, _v1) {
									return A2($elm$core$Set$member, name, potentialRecursiveFunctions);
								}),
							references),
						acc);
				}),
			$elm$core$Dict$empty,
			context.aL));
};
var $jfmengels$elm_review$Review$Rule$ContextCreator = F2(
	function (a, b) {
		return {$: 0, a: a, b: b};
	});
var $elm$core$Basics$always = F2(
	function (a, _v0) {
		return a;
	});
var $jfmengels$elm_review$Review$RequestedData$RequestedData = $elm$core$Basics$identity;
var $jfmengels$elm_review$Review$RequestedData$none = {cU: false, cw: false, cC: false};
var $jfmengels$elm_review$Review$Rule$initContextCreator = function (fromProjectToModule) {
	return A2(
		$jfmengels$elm_review$Review$Rule$ContextCreator,
		$elm$core$Basics$always(fromProjectToModule),
		$jfmengels$elm_review$Review$RequestedData$none);
};
var $elm$core$Dict$singleton = F2(
	function (key, value) {
		return A5($elm$core$Dict$RBNode_elm_builtin, 1, key, value, $elm$core$Dict$RBEmpty_elm_builtin, $elm$core$Dict$RBEmpty_elm_builtin);
	});
var $jfmengels$elm_review$Review$Rule$moduleNameNode = function (node) {
	var _v0 = $stil4m$elm_syntax$Elm$Syntax$Node$value(node);
	switch (_v0.$) {
		case 0:
			var data = _v0.a;
			return data.cv;
		case 1:
			var data = _v0.a;
			return data.cv;
		default:
			var data = _v0.a;
			return data.cv;
	}
};
var $jfmengels$elm_review$Review$Rule$withModuleName = function (_v0) {
	var fn = _v0.a;
	var requestedData = _v0.b;
	return A2(
		$jfmengels$elm_review$Review$Rule$ContextCreator,
		function (data) {
			return A2(
				fn,
				data,
				$stil4m$elm_syntax$Elm$Syntax$Node$value(
					$jfmengels$elm_review$Review$Rule$moduleNameNode(data.eu.fc)));
		},
		requestedData);
};
var $author$project$CognitiveComplexity$fromModuleToProject = $jfmengels$elm_review$Review$Rule$withModuleName(
	$jfmengels$elm_review$Review$Rule$initContextCreator(
		F2(
			function (moduleName, moduleContext) {
				var recursiveCalls = $author$project$CognitiveComplexity$computeRecursiveCalls(moduleContext);
				return A2(
					$elm$core$Dict$singleton,
					A2($elm$core$String$join, '.', moduleName),
					A3(
						$elm$core$List$foldl,
						F2(
							function (functionToReport, acc) {
								var allIncreases = A2($author$project$CognitiveComplexity$computeIncreases, recursiveCalls, functionToReport);
								var finalComplexity = A3(
									$elm$core$List$foldl,
									F2(
										function (_v0, complexity) {
											var increase = _v0.ay;
											return increase + complexity;
										}),
									0,
									allIncreases);
								return A3(
									$elm$core$Dict$insert,
									$stil4m$elm_syntax$Elm$Syntax$Node$value(functionToReport.aV),
									finalComplexity,
									acc);
							}),
						$elm$core$Dict$empty,
						moduleContext.aL));
			})));
var $jfmengels$elm_review$Review$Rule$Rule = $elm$core$Basics$identity;
var $jfmengels$elm_review$Review$RequestedData$combineJust = F2(
	function (_v0, _v1) {
		var a = _v0;
		var b = _v1;
		return {cU: a.cU || b.cU, cw: a.cw || b.cw, cC: a.cC || b.cC};
	});
var $jfmengels$elm_review$Review$RequestedData$combine = F2(
	function (maybeA, maybeB) {
		if (maybeA.$ === 1) {
			return A2($elm$core$Maybe$withDefault, $jfmengels$elm_review$Review$RequestedData$none, maybeB);
		} else {
			var a = maybeA.a;
			if (!maybeB.$) {
				var b = maybeB.a;
				return A2($jfmengels$elm_review$Review$RequestedData$combineJust, a, b);
			} else {
				return a;
			}
		}
	});
var $jfmengels$elm_review$Review$Rule$emptyCache = {av: $elm$core$Maybe$Nothing, cg: $elm$core$Maybe$Nothing, dx: $elm$core$Maybe$Nothing, bx: $elm$core$Maybe$Nothing, A: $elm$core$Dict$empty, c2: $elm$core$Maybe$Nothing};
var $jfmengels$elm_review$Review$Rule$TraverseAllModulesInParallel = function (a) {
	return {$: 0, a: a};
};
var $jfmengels$elm_review$Review$Rule$TraverseImportedModulesFirst = function (a) {
	return {$: 1, a: a};
};
var $elm$core$List$isEmpty = function (xs) {
	if (!xs.b) {
		return true;
	} else {
		return false;
	}
};
var $stil4m$elm_syntax$Elm$Syntax$Exposing$Explicit = function (a) {
	return {$: 1, a: a};
};
var $jfmengels$elm_review$Review$Rule$ModuleKey = $elm$core$Basics$identity;
var $jfmengels$elm_review$Review$Rule$ModuleRuleSchema = $elm$core$Basics$identity;
var $stil4m$elm_syntax$Elm$Syntax$Node$Node = F2(
	function (a, b) {
		return {$: 0, a: a, b: b};
	});
var $stil4m$elm_syntax$Elm$Syntax$Module$NormalModule = function (a) {
	return {$: 0, a: a};
};
var $jfmengels$elm_review$Review$Rule$applyContextCreator = F3(
	function (data, _v0, from) {
		var fn = _v0.a;
		return A2(fn, data, from);
	});
var $jfmengels$elm_review$Review$ModuleNameLookupTable$Internal$ModuleNameLookupTable = F2(
	function (a, b) {
		return {$: 0, a: a, b: b};
	});
var $jfmengels$elm_review$Review$ModuleNameLookupTable$Internal$empty = function (currentModuleName) {
	return A2($jfmengels$elm_review$Review$ModuleNameLookupTable$Internal$ModuleNameLookupTable, currentModuleName, $elm$core$Dict$empty);
};
var $stil4m$elm_syntax$Elm$Syntax$Range$emptyRange = {
	bu: {eF: 0, d0: 0},
	bQ: {eF: 0, d0: 0}
};
var $elm$core$Basics$not = _Basics_not;
var $jfmengels$elm_review$Review$Rule$functionToExpression = function (_function) {
	return $stil4m$elm_syntax$Elm$Syntax$Node$value(_function.dm).eR;
};
var $jfmengels$elm_review$Review$Rule$expressionChildren = function (node) {
	var _v0 = $stil4m$elm_syntax$Elm$Syntax$Node$value(node);
	switch (_v0.$) {
		case 1:
			var expressions = _v0.a;
			return expressions;
		case 19:
			var elements = _v0.a;
			return elements;
		case 18:
			var fields = _v0.a;
			return A2(
				$elm$core$List$map,
				A2(
					$elm$core$Basics$composeR,
					$stil4m$elm_syntax$Elm$Syntax$Node$value,
					function (_v1) {
						var expr = _v1.b;
						return expr;
					}),
				fields);
		case 22:
			var setters = _v0.b;
			return A2(
				$elm$core$List$map,
				A2(
					$elm$core$Basics$composeR,
					$stil4m$elm_syntax$Elm$Syntax$Node$value,
					function (_v2) {
						var expr = _v2.b;
						return expr;
					}),
				setters);
		case 14:
			var expr = _v0.a;
			return _List_fromArray(
				[expr]);
		case 2:
			var direction = _v0.b;
			var left = _v0.c;
			var right = _v0.d;
			switch (direction) {
				case 0:
					return _List_fromArray(
						[left, right]);
				case 1:
					return _List_fromArray(
						[right, left]);
				default:
					return _List_fromArray(
						[left, right]);
			}
		case 4:
			var cond = _v0.a;
			var then_ = _v0.b;
			var else_ = _v0.c;
			return _List_fromArray(
				[cond, then_, else_]);
		case 15:
			var expression = _v0.a.eR;
			var declarations = _v0.a.eK;
			return A3(
				$elm$core$List$foldr,
				F2(
					function (declaration, acc) {
						var _v4 = $stil4m$elm_syntax$Elm$Syntax$Node$value(declaration);
						if (!_v4.$) {
							var _function = _v4.a;
							return A2(
								$elm$core$List$cons,
								$jfmengels$elm_review$Review$Rule$functionToExpression(_function),
								acc);
						} else {
							var expr = _v4.b;
							return A2($elm$core$List$cons, expr, acc);
						}
					}),
				_List_fromArray(
					[expression]),
				declarations);
		case 16:
			var expression = _v0.a.eR;
			var cases = _v0.a.eC;
			return A2(
				$elm$core$List$cons,
				expression,
				A2(
					$elm$core$List$map,
					function (_v5) {
						var caseExpression = _v5.b;
						return caseExpression;
					},
					cases));
		case 17:
			var expression = _v0.a.eR;
			return _List_fromArray(
				[expression]);
		case 13:
			var expressions = _v0.a;
			return expressions;
		case 10:
			var expr = _v0.a;
			return _List_fromArray(
				[expr]);
		case 20:
			var expr = _v0.a;
			return _List_fromArray(
				[expr]);
		default:
			return _List_Nil;
	}
};
var $stil4m$elm_syntax$Elm$Syntax$Node$range = function (_v0) {
	var r = _v0.a;
	return r;
};
var $elm$core$List$append = F2(function (xs, ys) {
  var tmp = _List_Cons(undefined, _List_Nil);
  var end = tmp;
  for (; xs.b; xs = xs.b) {
    var next = _List_Cons(xs.a, _List_Nil);
    end.b = next;
    end = next;
  }
  end.b = ys;

  return tmp.b;
});
var $jfmengels$elm_review$Review$Rule$accumulate = F2(
	function (visitor, _v0) {
		var previousErrors = _v0.a;
		var previousContext = _v0.b;
		var _v1 = visitor(previousContext);
		var newErrors = _v1.a;
		var newContext = _v1.b;
		return _Utils_Tuple2(
			A2($elm$core$List$append, newErrors, previousErrors),
			newContext);
	});
var $jfmengels$elm_review$Review$Rule$visitWithListOfVisitors = F3(
	function (visitors, a, initialErrorsAndContext) {
		return A3(
			$elm$core$List$foldl,
			function (visitor) {
				return $jfmengels$elm_review$Review$Rule$accumulate(
					visitor(a));
			},
			initialErrorsAndContext,
			visitors);
	});
var $jfmengels$elm_review$Review$Rule$visitWithListOfVisitors2 = F4(
	function (visitors, a, b, initialErrorsAndContext) {
		return A3(
			$elm$core$List$foldl,
			function (visitor) {
				return $jfmengels$elm_review$Review$Rule$accumulate(
					A2(visitor, a, b));
			},
			initialErrorsAndContext,
			visitors);
	});
var $jfmengels$elm_review$Review$Rule$visitCaseBranch = F4(
	function (expressionRelatedVisitors, caseBlockWithRange, caseBranch, errorsAndContext) {
		var caseExpression = caseBranch.b;
		return A4(
			$jfmengels$elm_review$Review$Rule$visitWithListOfVisitors2,
			expressionRelatedVisitors.ad,
			caseBlockWithRange,
			caseBranch,
			A3(
				$jfmengels$elm_review$Review$Rule$visitExpression,
				expressionRelatedVisitors,
				caseExpression,
				A4($jfmengels$elm_review$Review$Rule$visitWithListOfVisitors2, expressionRelatedVisitors.ac, caseBlockWithRange, caseBranch, errorsAndContext)));
	});
var $jfmengels$elm_review$Review$Rule$visitExpression = F3(
	function (expressionRelatedVisitors, node, errorsAndContext) {
		var _v1 = $stil4m$elm_syntax$Elm$Syntax$Node$value(node);
		switch (_v1.$) {
			case 15:
				var letBlock = _v1.a;
				return A3(
					$jfmengels$elm_review$Review$Rule$visitWithListOfVisitors,
					expressionRelatedVisitors.L,
					node,
					A3(
						$jfmengels$elm_review$Review$Rule$visitExpression,
						expressionRelatedVisitors,
						letBlock.eR,
						function (errorsAndContext_) {
							return A3(
								$elm$core$List$foldl,
								A2(
									$jfmengels$elm_review$Review$Rule$visitLetDeclaration,
									expressionRelatedVisitors,
									A2(
										$stil4m$elm_syntax$Elm$Syntax$Node$Node,
										$stil4m$elm_syntax$Elm$Syntax$Node$range(node),
										letBlock)),
								errorsAndContext_,
								letBlock.eK);
						}(
							A3($jfmengels$elm_review$Review$Rule$visitWithListOfVisitors, expressionRelatedVisitors.E, node, errorsAndContext))));
			case 16:
				var caseBlock = _v1.a;
				return A3(
					$jfmengels$elm_review$Review$Rule$visitWithListOfVisitors,
					expressionRelatedVisitors.L,
					node,
					function (errorsAndContext_) {
						return A3(
							$elm$core$List$foldl,
							A2(
								$jfmengels$elm_review$Review$Rule$visitCaseBranch,
								expressionRelatedVisitors,
								A2(
									$stil4m$elm_syntax$Elm$Syntax$Node$Node,
									$stil4m$elm_syntax$Elm$Syntax$Node$range(node),
									caseBlock)),
							errorsAndContext_,
							caseBlock.eC);
					}(
						A3(
							$jfmengels$elm_review$Review$Rule$visitExpression,
							expressionRelatedVisitors,
							caseBlock.eR,
							A3($jfmengels$elm_review$Review$Rule$visitWithListOfVisitors, expressionRelatedVisitors.E, node, errorsAndContext))));
			default:
				return A3(
					$jfmengels$elm_review$Review$Rule$visitWithListOfVisitors,
					expressionRelatedVisitors.L,
					node,
					function (errorsAndContext_) {
						return A3(
							$elm$core$List$foldl,
							$jfmengels$elm_review$Review$Rule$visitExpression(expressionRelatedVisitors),
							errorsAndContext_,
							$jfmengels$elm_review$Review$Rule$expressionChildren(node));
					}(
						A3($jfmengels$elm_review$Review$Rule$visitWithListOfVisitors, expressionRelatedVisitors.E, node, errorsAndContext)));
		}
	});
var $jfmengels$elm_review$Review$Rule$visitLetDeclaration = F4(
	function (expressionRelatedVisitors, letBlockWithRange, letDeclarationWithRange, errorsAndContext) {
		var letDeclaration = letDeclarationWithRange.b;
		var expressionNode = function () {
			if (!letDeclaration.$) {
				var _function = letDeclaration.a;
				return $jfmengels$elm_review$Review$Rule$functionToExpression(_function);
			} else {
				var expr = letDeclaration.b;
				return expr;
			}
		}();
		return A4(
			$jfmengels$elm_review$Review$Rule$visitWithListOfVisitors2,
			expressionRelatedVisitors.ak,
			letBlockWithRange,
			letDeclarationWithRange,
			A3(
				$jfmengels$elm_review$Review$Rule$visitExpression,
				expressionRelatedVisitors,
				expressionNode,
				A4($jfmengels$elm_review$Review$Rule$visitWithListOfVisitors2, expressionRelatedVisitors.aj, letBlockWithRange, letDeclarationWithRange, errorsAndContext)));
	});
var $jfmengels$elm_review$Review$Rule$visitOnlyExpressions = F4(
	function (expressionVisitorsOnEnter, expressionVisitorsOnExit, node, errorsAndContext) {
		return A3(
			$jfmengels$elm_review$Review$Rule$visitWithListOfVisitors,
			expressionVisitorsOnExit,
			node,
			function (errorsAndContext_) {
				return A3(
					$elm$core$List$foldl,
					A2($jfmengels$elm_review$Review$Rule$visitOnlyExpressions, expressionVisitorsOnEnter, expressionVisitorsOnExit),
					errorsAndContext_,
					$jfmengels$elm_review$Review$Rule$expressionChildren(node));
			}(
				A3($jfmengels$elm_review$Review$Rule$visitWithListOfVisitors, expressionVisitorsOnEnter, node, errorsAndContext)));
	});
var $jfmengels$elm_review$Review$Rule$expressionChildrenTCO = F2(
	function (nodesToVisit, acc) {
		expressionChildrenTCO:
		while (true) {
			if (!nodesToVisit.b) {
				return $elm$core$List$reverse(acc);
			} else {
				var head = nodesToVisit.a;
				var rest = nodesToVisit.b;
				var _v1 = $stil4m$elm_syntax$Elm$Syntax$Node$value(head);
				switch (_v1.$) {
					case 1:
						var expressions = _v1.a;
						var $temp$nodesToVisit = A2($elm$core$List$append, expressions, rest),
							$temp$acc = A2($elm$core$List$cons, head, acc);
						nodesToVisit = $temp$nodesToVisit;
						acc = $temp$acc;
						continue expressionChildrenTCO;
					case 19:
						var expressions = _v1.a;
						var $temp$nodesToVisit = A2($elm$core$List$append, expressions, rest),
							$temp$acc = A2($elm$core$List$cons, head, acc);
						nodesToVisit = $temp$nodesToVisit;
						acc = $temp$acc;
						continue expressionChildrenTCO;
					case 18:
						var fields = _v1.a;
						var $temp$nodesToVisit = A3(
							$elm$core$List$foldl,
							F2(
								function (_v2, toVisitAcc) {
									var _v3 = _v2.b;
									var expr = _v3.b;
									return A2($elm$core$List$cons, expr, toVisitAcc);
								}),
							rest,
							fields),
							$temp$acc = A2($elm$core$List$cons, head, acc);
						nodesToVisit = $temp$nodesToVisit;
						acc = $temp$acc;
						continue expressionChildrenTCO;
					case 22:
						var setters = _v1.b;
						var $temp$nodesToVisit = A3(
							$elm$core$List$foldl,
							F2(
								function (_v4, toVisitAcc) {
									var _v5 = _v4.b;
									var expr = _v5.b;
									return A2($elm$core$List$cons, expr, toVisitAcc);
								}),
							rest,
							setters),
							$temp$acc = A2($elm$core$List$cons, head, acc);
						nodesToVisit = $temp$nodesToVisit;
						acc = $temp$acc;
						continue expressionChildrenTCO;
					case 14:
						var expr = _v1.a;
						var $temp$nodesToVisit = A2($elm$core$List$cons, expr, rest),
							$temp$acc = A2($elm$core$List$cons, head, acc);
						nodesToVisit = $temp$nodesToVisit;
						acc = $temp$acc;
						continue expressionChildrenTCO;
					case 2:
						var direction = _v1.b;
						var left = _v1.c;
						var right = _v1.d;
						var nodeStack = function () {
							switch (direction) {
								case 0:
									return A2(
										$elm$core$List$cons,
										left,
										A2($elm$core$List$cons, right, rest));
								case 1:
									return A2(
										$elm$core$List$cons,
										right,
										A2($elm$core$List$cons, left, rest));
								default:
									return A2(
										$elm$core$List$cons,
										left,
										A2($elm$core$List$cons, right, rest));
							}
						}();
						var $temp$nodesToVisit = nodeStack,
							$temp$acc = A2($elm$core$List$cons, head, acc);
						nodesToVisit = $temp$nodesToVisit;
						acc = $temp$acc;
						continue expressionChildrenTCO;
					case 4:
						var cond = _v1.a;
						var then_ = _v1.b;
						var else_ = _v1.c;
						var $temp$nodesToVisit = A2(
							$elm$core$List$cons,
							cond,
							A2(
								$elm$core$List$cons,
								then_,
								A2($elm$core$List$cons, else_, rest))),
							$temp$acc = A2($elm$core$List$cons, head, acc);
						nodesToVisit = $temp$nodesToVisit;
						acc = $temp$acc;
						continue expressionChildrenTCO;
					case 15:
						var expression = _v1.a.eR;
						var declarations = _v1.a.eK;
						var $temp$nodesToVisit = A3(
							$elm$core$List$foldl,
							F2(
								function (declaration, toVisitAcc) {
									var _v7 = $stil4m$elm_syntax$Elm$Syntax$Node$value(declaration);
									if (!_v7.$) {
										var _function = _v7.a;
										return A2(
											$elm$core$List$cons,
											$jfmengels$elm_review$Review$Rule$functionToExpression(_function),
											toVisitAcc);
									} else {
										var expr = _v7.b;
										return A2($elm$core$List$cons, expr, toVisitAcc);
									}
								}),
							A2($elm$core$List$cons, expression, rest),
							declarations),
							$temp$acc = A2($elm$core$List$cons, head, acc);
						nodesToVisit = $temp$nodesToVisit;
						acc = $temp$acc;
						continue expressionChildrenTCO;
					case 16:
						var expression = _v1.a.eR;
						var cases = _v1.a.eC;
						var $temp$nodesToVisit = A2(
							$elm$core$List$cons,
							expression,
							A3(
								$elm$core$List$foldl,
								F2(
									function (_v8, toVisitAcc) {
										var caseExpression = _v8.b;
										return A2($elm$core$List$cons, caseExpression, toVisitAcc);
									}),
								rest,
								cases)),
							$temp$acc = A2($elm$core$List$cons, head, acc);
						nodesToVisit = $temp$nodesToVisit;
						acc = $temp$acc;
						continue expressionChildrenTCO;
					case 17:
						var expression = _v1.a.eR;
						var $temp$nodesToVisit = A2($elm$core$List$cons, expression, rest),
							$temp$acc = A2($elm$core$List$cons, head, acc);
						nodesToVisit = $temp$nodesToVisit;
						acc = $temp$acc;
						continue expressionChildrenTCO;
					case 13:
						var expressions = _v1.a;
						var $temp$nodesToVisit = A2($elm$core$List$append, expressions, rest),
							$temp$acc = A2($elm$core$List$cons, head, acc);
						nodesToVisit = $temp$nodesToVisit;
						acc = $temp$acc;
						continue expressionChildrenTCO;
					case 10:
						var expression = _v1.a;
						var $temp$nodesToVisit = A2($elm$core$List$cons, expression, rest),
							$temp$acc = A2($elm$core$List$cons, head, acc);
						nodesToVisit = $temp$nodesToVisit;
						acc = $temp$acc;
						continue expressionChildrenTCO;
					case 20:
						var expression = _v1.a;
						var $temp$nodesToVisit = A2($elm$core$List$cons, expression, rest),
							$temp$acc = A2($elm$core$List$cons, head, acc);
						nodesToVisit = $temp$nodesToVisit;
						acc = $temp$acc;
						continue expressionChildrenTCO;
					default:
						var $temp$nodesToVisit = rest,
							$temp$acc = A2($elm$core$List$cons, head, acc);
						nodesToVisit = $temp$nodesToVisit;
						acc = $temp$acc;
						continue expressionChildrenTCO;
				}
			}
		}
	});
var $jfmengels$elm_review$Review$Rule$visitOnlyExpressionsOnlyOnEnter = F3(
	function (expressionVisitorsOnEnter, node, errorsAndContext) {
		return A3(
			$elm$core$List$foldl,
			F2(
				function (exprNode, acc) {
					return A3($jfmengels$elm_review$Review$Rule$visitWithListOfVisitors, expressionVisitorsOnEnter, exprNode, acc);
				}),
			errorsAndContext,
			A2(
				$jfmengels$elm_review$Review$Rule$expressionChildrenTCO,
				_List_fromArray(
					[node]),
				_List_Nil));
	});
var $jfmengels$elm_review$Review$Rule$createExpressionVisitor = function (schema) {
	if ((!$elm$core$List$isEmpty(schema.aj)) || ((!$elm$core$List$isEmpty(schema.ak)) || ((!$elm$core$List$isEmpty(schema.ac)) || (!$elm$core$List$isEmpty(schema.ad))))) {
		var expressionRelatedVisitors = {
			ac: $elm$core$List$reverse(schema.ac),
			ad: schema.ad,
			E: $elm$core$List$reverse(schema.E),
			L: schema.L,
			aj: $elm$core$List$reverse(schema.aj),
			ak: schema.ak
		};
		return $elm$core$Maybe$Just(
			$jfmengels$elm_review$Review$Rule$visitExpression(expressionRelatedVisitors));
	} else {
		if (!$elm$core$List$isEmpty(schema.L)) {
			var exitVisitors = schema.L;
			var enterVisitors = $elm$core$List$reverse(schema.E);
			return $elm$core$Maybe$Just(
				A2($jfmengels$elm_review$Review$Rule$visitOnlyExpressions, enterVisitors, exitVisitors));
		} else {
			if (!$elm$core$List$isEmpty(schema.E)) {
				return $elm$core$Maybe$Just(
					$jfmengels$elm_review$Review$Rule$visitOnlyExpressionsOnlyOnEnter(
						$elm$core$List$reverse(schema.E)));
			} else {
				return $elm$core$Maybe$Nothing;
			}
		}
	}
};
var $jfmengels$elm_review$Review$Rule$shouldVisitDeclarations = function (schema) {
	return (!$elm$core$List$isEmpty(schema.au)) || (!$elm$core$List$isEmpty(schema.ae));
};
var $jfmengels$elm_review$Review$Rule$visitOnlyDeclaration = F4(
	function (declarationVisitorsOnEnter, declarationVisitorsOnExit, node, errorsAndContext) {
		return A3(
			$jfmengels$elm_review$Review$Rule$visitWithListOfVisitors,
			declarationVisitorsOnExit,
			node,
			A3($jfmengels$elm_review$Review$Rule$visitWithListOfVisitors, declarationVisitorsOnEnter, node, errorsAndContext));
	});
var $jfmengels$elm_review$Review$Rule$visitDeclaration = F5(
	function (declarationVisitorsOnEnter, declarationVisitorsOnExit, expressionVisitor, node, errorsAndContext) {
		var _v0 = $stil4m$elm_syntax$Elm$Syntax$Node$value(node);
		if (!_v0.$) {
			var _function = _v0.a;
			return A3(
				$jfmengels$elm_review$Review$Rule$visitWithListOfVisitors,
				declarationVisitorsOnExit,
				node,
				A2(
					expressionVisitor,
					$stil4m$elm_syntax$Elm$Syntax$Node$value(_function.dm).eR,
					A3($jfmengels$elm_review$Review$Rule$visitWithListOfVisitors, declarationVisitorsOnEnter, node, errorsAndContext)));
		} else {
			return A4($jfmengels$elm_review$Review$Rule$visitOnlyDeclaration, declarationVisitorsOnEnter, declarationVisitorsOnExit, node, errorsAndContext);
		}
	});
var $jfmengels$elm_review$Review$Rule$visitDeclarationButOnlyExpressions = F3(
	function (expressionVisitor, node, errorsAndContext) {
		var _v0 = $stil4m$elm_syntax$Elm$Syntax$Node$value(node);
		if (!_v0.$) {
			var _function = _v0.a;
			return A2(
				expressionVisitor,
				$stil4m$elm_syntax$Elm$Syntax$Node$value(_function.dm).eR,
				errorsAndContext);
		} else {
			return errorsAndContext;
		}
	});
var $jfmengels$elm_review$Review$Rule$createDeclarationAndExpressionVisitor = function (schema) {
	if ($jfmengels$elm_review$Review$Rule$shouldVisitDeclarations(schema)) {
		var declarationVisitorsOnEnter = $elm$core$List$reverse(schema.au);
		var _v0 = $jfmengels$elm_review$Review$Rule$createExpressionVisitor(schema);
		if (!_v0.$) {
			var expressionVisitor = _v0.a;
			return F2(
				function (nodes, initialErrorsAndContext) {
					return A3(
						$elm$core$List$foldl,
						A3($jfmengels$elm_review$Review$Rule$visitDeclaration, declarationVisitorsOnEnter, schema.ae, expressionVisitor),
						initialErrorsAndContext,
						nodes);
				});
		} else {
			var visitor = A2($jfmengels$elm_review$Review$Rule$visitOnlyDeclaration, declarationVisitorsOnEnter, schema.ae);
			return F2(
				function (nodes, initialErrorsAndContext) {
					return A3($elm$core$List$foldl, visitor, initialErrorsAndContext, nodes);
				});
		}
	} else {
		var _v1 = $jfmengels$elm_review$Review$Rule$createExpressionVisitor(schema);
		if (!_v1.$) {
			var expressionVisitor = _v1.a;
			return F2(
				function (nodes, initialErrorsAndContext) {
					return A3(
						$elm$core$List$foldl,
						$jfmengels$elm_review$Review$Rule$visitDeclarationButOnlyExpressions(expressionVisitor),
						initialErrorsAndContext,
						nodes);
				});
		} else {
			return F2(
				function (_v2, errorsAndContext) {
					return errorsAndContext;
				});
		}
	}
};
var $jfmengels$elm_review$Review$Rule$fromModuleRuleSchemaToRunnableModuleVisitor = function (_v0) {
	var schema = _v0;
	return {
		ao: $elm$core$List$reverse(schema.ao),
		cJ: $jfmengels$elm_review$Review$Rule$createDeclarationAndExpressionVisitor(schema),
		at: $elm$core$List$reverse(schema.at),
		w: $elm$core$List$reverse(schema.w),
		ax: $elm$core$List$reverse(schema.ax),
		az: $elm$core$List$reverse(schema.az),
		aA: $elm$core$List$reverse(schema.aA)
	};
};
var $jfmengels$elm_review$Review$Rule$mergeModuleVisitorsHelp = F3(
	function (initialProjectContext, moduleContextCreator, visitors) {
		var dummyAst = {
			eH: _List_Nil,
			eK: _List_Nil,
			e1: _List_Nil,
			fc: A2(
				$stil4m$elm_syntax$Elm$Syntax$Node$Node,
				$stil4m$elm_syntax$Elm$Syntax$Range$emptyRange,
				$stil4m$elm_syntax$Elm$Syntax$Module$NormalModule(
					{
						cN: A2(
							$stil4m$elm_syntax$Elm$Syntax$Node$Node,
							$stil4m$elm_syntax$Elm$Syntax$Range$emptyRange,
							$stil4m$elm_syntax$Elm$Syntax$Exposing$Explicit(_List_Nil)),
						cv: A2($stil4m$elm_syntax$Elm$Syntax$Node$Node, $stil4m$elm_syntax$Elm$Syntax$Range$emptyRange, _List_Nil)
					}))
		};
		var dummyAvailableData = {
			eu: dummyAst,
			ck: $elm$core$Basics$always('dummy'),
			eU: 'dummy file path',
			cn: false,
			cW: true,
			cu: 'dummy',
			cw: $jfmengels$elm_review$Review$ModuleNameLookupTable$Internal$empty(_List_Nil)
		};
		var initialModuleContext = A3($jfmengels$elm_review$Review$Rule$applyContextCreator, dummyAvailableData, moduleContextCreator, initialProjectContext);
		var emptyModuleVisitor = {
			ac: _List_Nil,
			ad: _List_Nil,
			ao: _List_Nil,
			at: _List_Nil,
			au: _List_Nil,
			ae: _List_Nil,
			H: _List_Nil,
			I: _List_Nil,
			J: _List_Nil,
			E: _List_Nil,
			L: _List_Nil,
			w: _List_Nil,
			ax: _List_Nil,
			b4: $elm$core$Maybe$Just(initialModuleContext),
			aj: _List_Nil,
			ak: _List_Nil,
			M: $jfmengels$elm_review$Review$Rule$initContextCreator(
				$elm$core$Basics$always(initialModuleContext)),
			az: _List_Nil,
			aA: _List_Nil,
			fe: '',
			n: false,
			N: _List_Nil
		};
		return _Utils_Tuple2(
			$jfmengels$elm_review$Review$Rule$fromModuleRuleSchemaToRunnableModuleVisitor(
				A3(
					$elm$core$List$foldl,
					F2(
						function (addVisitors, _v0) {
							var moduleVisitorSchema = _v0;
							return addVisitors(moduleVisitorSchema);
						}),
					emptyModuleVisitor,
					visitors)),
			moduleContextCreator);
	});
var $jfmengels$elm_review$Review$Rule$mergeModuleVisitors = F3(
	function (initialProjectContext, maybeModuleContextCreator, visitors) {
		if (maybeModuleContextCreator.$ === 1) {
			return $elm$core$Maybe$Nothing;
		} else {
			var moduleContextCreator = maybeModuleContextCreator.a;
			return $elm$core$List$isEmpty(visitors) ? $elm$core$Maybe$Nothing : $elm$core$Maybe$Just(
				A3($jfmengels$elm_review$Review$Rule$mergeModuleVisitorsHelp, initialProjectContext, moduleContextCreator, visitors));
		}
	});
var $jfmengels$elm_review$Review$Rule$fromProjectRuleSchemaToRunnableProjectVisitor = function (_v0) {
	var schema = _v0;
	return {
		as: schema.as,
		H: $elm$core$List$reverse(schema.H),
		I: $elm$core$List$reverse(schema.I),
		J: $elm$core$List$reverse(schema.J),
		w: $elm$core$List$reverse(schema.w),
		aX: schema.aX,
		bG: A3($jfmengels$elm_review$Review$Rule$mergeModuleVisitors, schema.aX, schema.M, schema.bH),
		fe: schema.fe,
		n: schema.n,
		N: $elm$core$List$reverse(schema.N),
		R: function () {
			var _v1 = schema.M;
			if (!_v1.$) {
				var _v2 = _v1.a;
				var requestedData = _v2.b;
				return requestedData;
			} else {
				return $jfmengels$elm_review$Review$RequestedData$none;
			}
		}(),
		bR: function () {
			var _v3 = _Utils_Tuple2(schema.cd, schema.aU);
			if (!_v3.a) {
				var _v4 = _v3.a;
				return $jfmengels$elm_review$Review$Rule$TraverseAllModulesInParallel(schema.aU);
			} else {
				if (!_v3.b.$) {
					var _v5 = _v3.a;
					var folder = _v3.b.a;
					return $jfmengels$elm_review$Review$Rule$TraverseImportedModulesFirst(folder);
				} else {
					var _v6 = _v3.a;
					var _v7 = _v3.b;
					return $jfmengels$elm_review$Review$Rule$TraverseAllModulesInParallel($elm$core$Maybe$Nothing);
				}
			}
		}()
	};
};
var $jfmengels$elm_review$Review$Exceptions$Exceptions = $elm$core$Basics$identity;
var $jfmengels$elm_review$Review$Exceptions$init = _List_Nil;
var $jfmengels$elm_review$Review$Rule$initialCacheMarker = F3(
  function (ruleName, ruleId, defaultCache) {
    return global.loadResultFromCache(ruleName, ruleId) || defaultCache;
  });
var $jfmengels$elm_review$Review$Project$Valid$doesModuleExist = F2(
	function (path, _v0) {
		var project = _v0;
		return A2($elm$core$Dict$member, path, project.aO);
	});
var $jfmengels$elm_review$Review$Rule$removeUnknownModulesFromInitialCache = F2(
	function (validProject, projectRuleCache) {
		return _Utils_update(
			projectRuleCache,
			{
				A: A2(
					$elm$core$Dict$filter,
					F2(
						function (path, _v0) {
							return A2($jfmengels$elm_review$Review$Project$Valid$doesModuleExist, path, validProject);
						}),
					projectRuleCache.A)
			});
	});
var $jfmengels$elm_review$Review$Rule$requestedDataFromContextCreator = function (_v0) {
	var requestedData = _v0.b;
	return requestedData;
};
var $jfmengels$elm_review$Review$Rule$ElmJson = function (a) {
	return {$: 0, a: a};
};
var $jfmengels$elm_review$Review$Rule$FinalProjectEvaluation = function (a) {
	return {$: 4, a: a};
};
var $jfmengels$elm_review$Review$Rule$Abort = {$: 6};
var $jfmengels$elm_review$Review$Rule$Modules = F2(
	function (a, b) {
		return {$: 3, a: a, b: b};
	});
var $jfmengels$elm_review$Review$Rule$Readme = function (a) {
	return {$: 1, a: a};
};
var $jfmengels$elm_review$Review$Rule$accumulateWithListOfVisitors = F3(
	function (visitors, element, initialErrorsAndContext) {
		return A3(
			$elm$core$List$foldl,
			F2(
				function (visitor, errorsAndContext) {
					return A2(
						$jfmengels$elm_review$Review$Rule$accumulate,
						visitor(element),
						errorsAndContext);
				}),
			initialErrorsAndContext,
			visitors);
	});
var $jfmengels$elm_review$Review$Cache$ContextHash$ContextHash = $elm$core$Basics$identity;
var $jfmengels$elm_review$Review$Cache$ContextHash$createContextHashMarker = function (context) {
  return jsonToHash(contextToJson(context));
};

const stringifyMap = new WeakMap();
function contextToJson(context) {
  const isObject = typeof context === 'object';
  if (!isObject) {
    return JSON.stringify(context);
  }
  if (stringifyMap.has(context)) {
    return stringifyMap.get(context);
  } else {
    const json = JSON.stringify(context, global.elmJsonReplacer);
    stringifyMap.set(context, json);
    return json;
  }
}

const contextHashMap = new Map();
function jsonToHash(json) {
  if (contextHashMap.has(json)) {
    return contextHashMap.get(json);
  }
  const hash = A2($jfmengels$elm_review$Vendor$Murmur3$hashString, 0, json);
  contextHashMap.set(json, hash);
  return hash;
}
var $jfmengels$elm_review$Review$Cache$ContextHash$create = function (context) {
	return $jfmengels$elm_review$Review$Cache$ContextHash$createContextHashMarker(context);
};
var $jfmengels$elm_review$Review$Cache$EntryMaybe = $elm$core$Basics$identity;
var $jfmengels$elm_review$Review$Cache$createEntryMaybe = function (entry) {
	return {
		bs: entry.bs,
		aT: entry.aT,
		bD: $jfmengels$elm_review$Review$Cache$ContextHash$create(entry.bD),
		bL: entry.bL
	};
};
var $jfmengels$elm_review$Review$Project$Valid$dependencies = function (_v0) {
	var project = _v0;
	return project.av;
};
var $jfmengels$elm_review$Review$Project$Valid$elmJsonHash = function (_v0) {
	var project = _v0;
	return A2($elm$core$Maybe$map, $elm$core$Tuple$second, project.cg);
};
var $jfmengels$elm_review$Review$Project$Valid$dependenciesHash = $jfmengels$elm_review$Review$Project$Valid$elmJsonHash;
var $jfmengels$elm_review$Review$Project$Valid$directDependencies = function (_v0) {
	var project = _v0;
	return project.aS;
};
var $jfmengels$elm_review$Review$Rule$errorFilePathInternal = function (_v0) {
	var err = _v0;
	return err.eU;
};
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
var $elm$core$Basics$composeL = F3(
	function (g, f, x) {
		return g(
			f(x));
	});
var $elm$core$List$all = F2(function (isOkay, list) {
  all: while (true) {
    if (!list.b) {
      return true;
    }
    else {
      var x = list.a;
      if (!isOkay(x)) {
        return false;
      }
      list = list.b;
      continue all;
    }
  }
});
var $elm$core$String$replace = F3(
	function (before, after, string) {
		return A2(
			$elm$core$String$join,
			after,
			A2($elm$core$String$split, before, string));
	});
var $jfmengels$elm_review$Path$makeOSAgnostic = function (path) {
	return A3($elm$core$String$replace, '\\', '/', path);
};
var $jfmengels$elm_review$Review$Exceptions$isFileWeWantReportsFor = F2(
	function (_v0, filePath) {
		var conditions = _v0;
		var allConditions = function (path) {
			return A2(
				$elm$core$List$all,
				function (condition) {
					return condition(path);
				},
				conditions);
		};
		return allConditions(
			$jfmengels$elm_review$Path$makeOSAgnostic(filePath));
	});
var $jfmengels$elm_review$Review$Rule$Error = $elm$core$Basics$identity;
var $jfmengels$elm_review$Review$Rule$mapInternalError = F2(
	function (fn, _v0) {
		var err = _v0;
		return fn(err);
	});
var $jfmengels$elm_review$Review$Rule$setRuleName = F2(
	function (ruleName_, error_) {
		return A2(
			$jfmengels$elm_review$Review$Rule$mapInternalError,
			function (err) {
				return _Utils_update(
					err,
					{c3: ruleName_});
			},
			error_);
	});
var $jfmengels$elm_review$Review$Rule$filterExceptionsAndSetName = F3(
	function (exceptions, name, errors) {
		return A3(
			$elm$core$List$foldl,
			F2(
				function (error_, acc) {
					return A2(
						$jfmengels$elm_review$Review$Exceptions$isFileWeWantReportsFor,
						exceptions,
						$jfmengels$elm_review$Review$Rule$errorFilePathInternal(error_)) ? A2(
						$elm$core$List$cons,
						A2($jfmengels$elm_review$Review$Rule$setRuleName, name, error_),
						acc) : acc;
				}),
			_List_Nil,
			errors);
	});
var $jfmengels$elm_review$Review$Rule$ShouldAbort = function (a) {
	return {$: 0, a: a};
};
var $jfmengels$elm_review$Review$Rule$ShouldContinue = function (a) {
	return {$: 1, a: a};
};
var $jfmengels$elm_review$Review$Rule$errorFilePath = function (_v0) {
	var err = _v0;
	return err.eU;
};
var $jfmengels$elm_review$Review$Rule$FixedElmJson = {$: 1};
var $jfmengels$elm_review$Review$Rule$FixedElmModule = F2(
	function (a, b) {
		return {$: 0, a: a, b: b};
	});
var $jfmengels$elm_review$Review$Rule$FixedReadme = {$: 2};
var $jfmengels$elm_review$Review$Project$Valid$ValidProject = $elm$core$Basics$identity;
var $jfmengels$elm_review$Review$Project$Valid$areDependenciesUnchanged = function (_v0) {
	var before = _v0.df;
	var after = _v0.db;
	var _v1 = _Utils_Tuple2(before, after);
	_v1$2:
	while (true) {
		if (!_v1.a.$) {
			if (!_v1.b.$) {
				var beforeApp = _v1.a.a;
				var afterApp = _v1.b.a;
				return _Utils_eq(beforeApp.dq, afterApp.dq) && (_Utils_eq(beforeApp.dr, afterApp.dr) && (_Utils_eq(beforeApp.eg, afterApp.eg) && _Utils_eq(beforeApp.eh, afterApp.eh)));
			} else {
				break _v1$2;
			}
		} else {
			if (_v1.b.$ === 1) {
				var beforePkg = _v1.a.a;
				var afterPkg = _v1.b.a;
				return _Utils_eq(beforePkg.dp, afterPkg.dp) && _Utils_eq(beforePkg.ef, afterPkg.ef);
			} else {
				break _v1$2;
			}
		}
	}
	return false;
};
var $jfmengels$elm_review$Review$Project$Dependency$modules = function (_v0) {
	var dependency = _v0;
	return dependency.aN;
};
var $jfmengels$elm_review$Review$Project$Valid$computeDependencyModules = function (directDependencies_) {
	return A3(
		$elm$core$Dict$foldl,
		F3(
			function (_v0, v, acc) {
				return A3(
					$elm$core$List$foldl,
					F2(
						function (mod, subAcc) {
							return A2(
								$elm$core$Set$insert,
								A2($elm$core$String$split, '.', mod.fe),
								subAcc);
						}),
					acc,
					$jfmengels$elm_review$Review$Project$Dependency$modules(v));
			}),
		$elm$core$Set$empty,
		directDependencies_);
};
var $elm$core$List$member = F2(
	function (x, xs) {
		return A2(
			$elm$core$List$any,
			function (a) {
				return _Utils_eq(a, x);
			},
			xs);
	});
var $elm$project_metadata_utils$Elm$Package$toString = function (_v0) {
	var user = _v0.a;
	var project = _v0.b;
	return user + ('/' + project);
};
var $jfmengels$elm_review$Review$Project$Valid$computeDirectDependencies = function (project) {
	var _v0 = A2(
		$elm$core$Maybe$map,
		function (_v1) {
			var elmJson_ = _v1.a;
			return elmJson_.e;
		},
		project.cg);
	if (!_v0.$) {
		if (!_v0.a.$) {
			var depsDirect = _v0.a.a.dq;
			var testDepsDirect = _v0.a.a.eg;
			var allDeps = A2(
				$elm$core$List$map,
				function (_v3) {
					var name = _v3.a;
					return $elm$project_metadata_utils$Elm$Package$toString(name);
				},
				_Utils_ap(depsDirect, testDepsDirect));
			return A2(
				$elm$core$Dict$filter,
				F2(
					function (depName, _v2) {
						return A2($elm$core$List$member, depName, allDeps);
					}),
				project.av);
		} else {
			var deps = _v0.a.a.dp;
			var testDeps = _v0.a.a.ef;
			var allDeps = A2(
				$elm$core$List$map,
				function (_v5) {
					var name = _v5.a;
					return $elm$project_metadata_utils$Elm$Package$toString(name);
				},
				_Utils_ap(deps, testDeps));
			return A2(
				$elm$core$Dict$filter,
				F2(
					function (depName, _v4) {
						return A2($elm$core$List$member, depName, allDeps);
					}),
				project.av);
		}
	} else {
		return project.av;
	}
};
var $jfmengels$elm_review$Review$Cache$ContentHash$ContentHash = $elm$core$Basics$identity;
var $jfmengels$elm_review$Vendor$Murmur3$HashData = F4(
	function (shift, seed, hash, charsProcessed) {
		return {bp: charsProcessed, bB: hash, d4: seed, bP: shift};
	});
var $jfmengels$elm_review$Vendor$Murmur3$c1 = 3432918353;
var $jfmengels$elm_review$Vendor$Murmur3$c2 = 461845907;
var $elm$core$Bitwise$and = _Bitwise_and;
var $elm$core$Bitwise$shiftLeftBy = _Bitwise_shiftLeftBy;
var $elm$core$Bitwise$shiftRightZfBy = _Bitwise_shiftRightZfBy;
var $jfmengels$elm_review$Vendor$Murmur3$multiplyBy = F2(
	function (b, a) {
		return ((a & 65535) * b) + ((((a >>> 16) * b) & 65535) << 16);
	});
var $elm$core$Bitwise$or = _Bitwise_or;
var $jfmengels$elm_review$Vendor$Murmur3$rotlBy = F2(
	function (b, a) {
		return (a << b) | (a >>> (32 - b));
	});
var $elm$core$Bitwise$xor = _Bitwise_xor;
var $jfmengels$elm_review$Vendor$Murmur3$finalize = function (data) {
	var acc = (!(!data.bB)) ? (data.d4 ^ A2(
		$jfmengels$elm_review$Vendor$Murmur3$multiplyBy,
		$jfmengels$elm_review$Vendor$Murmur3$c2,
		A2(
			$jfmengels$elm_review$Vendor$Murmur3$rotlBy,
			15,
			A2($jfmengels$elm_review$Vendor$Murmur3$multiplyBy, $jfmengels$elm_review$Vendor$Murmur3$c1, data.bB)))) : data.d4;
	var h0 = acc ^ data.bp;
	var h1 = A2($jfmengels$elm_review$Vendor$Murmur3$multiplyBy, 2246822507, h0 ^ (h0 >>> 16));
	var h2 = A2($jfmengels$elm_review$Vendor$Murmur3$multiplyBy, 3266489909, h1 ^ (h1 >>> 13));
	return (h2 ^ (h2 >>> 16)) >>> 0;
};
var $elm$core$String$foldl = _String_foldl;
var $jfmengels$elm_review$Vendor$Murmur3$mix = F2(
	function (h1, k1) {
		return A2(
			$jfmengels$elm_review$Vendor$Murmur3$multiplyBy,
			5,
			A2(
				$jfmengels$elm_review$Vendor$Murmur3$rotlBy,
				13,
				h1 ^ A2(
					$jfmengels$elm_review$Vendor$Murmur3$multiplyBy,
					$jfmengels$elm_review$Vendor$Murmur3$c2,
					A2(
						$jfmengels$elm_review$Vendor$Murmur3$rotlBy,
						15,
						A2($jfmengels$elm_review$Vendor$Murmur3$multiplyBy, $jfmengels$elm_review$Vendor$Murmur3$c1, k1))))) + 3864292196;
	});
var $jfmengels$elm_review$Vendor$Murmur3$hashFold = F2(
	function (c, data) {
		var res = data.bB | ((255 & $elm$core$Char$toCode(c)) << data.bP);
		var _v0 = data.bP;
		if (_v0 === 24) {
			return {
				bp: data.bp + 1,
				bB: 0,
				d4: A2($jfmengels$elm_review$Vendor$Murmur3$mix, data.d4, res),
				bP: 0
			};
		} else {
			return {bp: data.bp + 1, bB: res, d4: data.d4, bP: data.bP + 8};
		}
	});
var $jfmengels$elm_review$Vendor$Murmur3$hashString = F2(
	function (seed, str) {
		return $jfmengels$elm_review$Vendor$Murmur3$finalize(
			A3(
				$elm$core$String$foldl,
				$jfmengels$elm_review$Vendor$Murmur3$hashFold,
				A4($jfmengels$elm_review$Vendor$Murmur3$HashData, 0, seed, 0, 0),
				str));
	});
var $jfmengels$elm_review$Review$Cache$ContentHash$hash = function (source) {
	return A2($jfmengels$elm_review$Vendor$Murmur3$hashString, 0, source);
};
var $jfmengels$elm_review$Review$Project$Valid$computeUpdatedDependencies = F3(
	function (previousElmJsonProject, newElmJson, project) {
		if ($jfmengels$elm_review$Review$Project$Valid$areDependenciesUnchanged(
			{db: newElmJson.e, df: previousElmJsonProject})) {
			return $elm$core$Maybe$Just(
				{av: project.av, aH: project.aH, aS: project.aS});
		} else {
			var newDependencies = project.av;
			var directDependencies_ = $jfmengels$elm_review$Review$Project$Valid$computeDirectDependencies(
				{
					av: newDependencies,
					cg: $elm$core$Maybe$Just(
						_Utils_Tuple2(
							newElmJson,
							$jfmengels$elm_review$Review$Cache$ContentHash$hash(newElmJson.bN)))
				});
			return $elm$core$Maybe$Just(
				{
					av: newDependencies,
					aH: $jfmengels$elm_review$Review$Project$Valid$computeDependencyModules(directDependencies_),
					aS: directDependencies_
				});
		}
	});
var $elm$core$String$endsWith = _String_endsWith;
var $jfmengels$elm_review$Review$Project$Internal$endWithSlash = function (dir) {
	return A2($elm$core$String$endsWith, '/', dir) ? dir : (dir + '/');
};
var $elm$core$String$length = _String_length;
var $elm$core$String$slice = _String_slice;
var $elm$core$String$dropLeft = F2(
	function (n, string) {
		return (n < 1) ? string : A3(
			$elm$core$String$slice,
			n,
			$elm$core$String$length(string),
			string);
	});
var $elm$core$String$startsWith = _String_startsWith;
var $jfmengels$elm_review$Review$Project$Internal$removeDotSlashAtBeginning = function (dir) {
	return A2($elm$core$String$startsWith, './', dir) ? A2($elm$core$String$dropLeft, 2, dir) : dir;
};
var $jfmengels$elm_review$Review$Project$Internal$sourceDirectoriesForProject = function (elmJson_) {
	if (!elmJson_.$) {
		var dirs = elmJson_.a.ds;
		return A2(
			$elm$core$List$map,
			A2(
				$elm$core$Basics$composeR,
				$jfmengels$elm_review$Review$Project$Internal$removeDotSlashAtBeginning,
				A2($elm$core$Basics$composeR, $jfmengels$elm_review$Path$makeOSAgnostic, $jfmengels$elm_review$Review$Project$Internal$endWithSlash)),
			dirs);
	} else {
		return _List_fromArray(
			['src/']);
	}
};
var $jfmengels$elm_review$Review$Project$Valid$addElmJson = F2(
	function (elmJson_, _v0) {
		var project = _v0;
		var _v1 = A2(
			$elm$core$Maybe$map,
			function (_v2) {
				var e = _v2.a;
				return e.e;
			},
			project.cg);
		if (_v1.$ === 1) {
			return $elm$core$Maybe$Nothing;
		} else {
			var previousElmJson = _v1.a;
			var sourceDirectories = $jfmengels$elm_review$Review$Project$Internal$sourceDirectoriesForProject(elmJson_.e);
			return (!_Utils_eq(
				sourceDirectories,
				$jfmengels$elm_review$Review$Project$Internal$sourceDirectoriesForProject(previousElmJson))) ? $elm$core$Maybe$Nothing : A2(
				$elm$core$Maybe$map,
				function (updatedDependencies) {
					return _Utils_update(
						project,
						{
							av: updatedDependencies.av,
							aH: updatedDependencies.aH,
							aS: updatedDependencies.aS,
							cg: $elm$core$Maybe$Just(
								_Utils_Tuple2(
									elmJson_,
									$jfmengels$elm_review$Review$Cache$ContentHash$hash(elmJson_.bN))),
							c5: sourceDirectories
						});
				},
				A3($jfmengels$elm_review$Review$Project$Valid$computeUpdatedDependencies, previousElmJson, elmJson_, project));
		}
	});
var $jfmengels$elm_review$Vendor$Zipper$current = function (_v0) {
	var f = _v0.b;
	return f;
};
var $elm$core$Maybe$map2 = F3(
	function (func, ma, mb) {
		if (ma.$ === 1) {
			return $elm$core$Maybe$Nothing;
		} else {
			var a = ma.a;
			if (mb.$ === 1) {
				return $elm$core$Maybe$Nothing;
			} else {
				var b = mb.a;
				return $elm$core$Maybe$Just(
					A2(func, a, b));
			}
		}
	});
var $jfmengels$elm_review$Vendor$Zipper$Zipper = F3(
	function (a, b, c) {
		return {$: 0, a: a, b: b, c: c};
	});
var $jfmengels$elm_review$Vendor$Zipper$next = function (_v0) {
	var p = _v0.a;
	var f = _v0.b;
	var n = _v0.c;
	if (!n.b) {
		return $elm$core$Maybe$Nothing;
	} else {
		var h = n.a;
		var t = n.b;
		return $elm$core$Maybe$Just(
			A3(
				$jfmengels$elm_review$Vendor$Zipper$Zipper,
				A2($elm$core$List$cons, f, p),
				h,
				t));
	}
};
var $elm$core$Tuple$pair = F2(
	function (a, b) {
		return _Utils_Tuple2(a, b);
	});
var $jfmengels$elm_review$Review$Project$Valid$advanceZipper = F3(
	function (path, oldZipper, newZipper) {
		advanceZipper:
		while (true) {
			var current = $jfmengels$elm_review$Vendor$Zipper$current(newZipper).dV.b6;
			if (_Utils_eq(current, path) || (!_Utils_eq(
				current,
				$jfmengels$elm_review$Vendor$Zipper$current(oldZipper).dV.b6))) {
				return newZipper;
			} else {
				var _v0 = A3(
					$elm$core$Maybe$map2,
					$elm$core$Tuple$pair,
					$jfmengels$elm_review$Vendor$Zipper$next(oldZipper),
					$jfmengels$elm_review$Vendor$Zipper$next(newZipper));
				if (!_v0.$) {
					var _v1 = _v0.a;
					var old = _v1.a;
					var _new = _v1.b;
					var $temp$path = path,
						$temp$oldZipper = old,
						$temp$newZipper = _new;
					path = $temp$path;
					oldZipper = $temp$oldZipper;
					newZipper = $temp$newZipper;
					continue advanceZipper;
				} else {
					return newZipper;
				}
			}
		}
	});
var $jfmengels$elm_review$Vendor$Graph$Graph = $elm$core$Basics$identity;
var $jfmengels$elm_review$Vendor$Graph$NodeContext = F3(
	function (node, incoming, outgoing) {
		return {e2: incoming, dV: node, l: outgoing};
	});
var $jfmengels$elm_review$Vendor$IntDict$Empty = {$: 0};
var $jfmengels$elm_review$Vendor$IntDict$empty = $jfmengels$elm_review$Vendor$IntDict$Empty;
var $jfmengels$elm_review$Vendor$IntDict$Inner = function (a) {
	return {$: 2, a: a};
};
var $jfmengels$elm_review$Vendor$IntDict$size = function (dict) {
	switch (dict.$) {
		case 0:
			return 0;
		case 1:
			return 1;
		default:
			var i = dict.a;
			return i.bj;
	}
};
var $jfmengels$elm_review$Vendor$IntDict$inner = F3(
	function (p, l, r) {
		var _v0 = _Utils_Tuple2(l, r);
		if (!_v0.a.$) {
			var _v1 = _v0.a;
			return r;
		} else {
			if (!_v0.b.$) {
				var _v2 = _v0.b;
				return l;
			} else {
				return $jfmengels$elm_review$Vendor$IntDict$Inner(
					{
						f: l,
						k: p,
						g: r,
						bj: $jfmengels$elm_review$Vendor$IntDict$size(l) + $jfmengels$elm_review$Vendor$IntDict$size(r)
					});
			}
		}
	});
var $elm$core$Bitwise$complement = _Bitwise_complement;
var $jfmengels$elm_review$Vendor$IntDict$highestBitSet = function (n) {
	var shiftOr = F2(
		function (i, shift) {
			return i | (i >>> shift);
		});
	var n1 = A2(shiftOr, n, 1);
	var n2 = A2(shiftOr, n1, 2);
	var n3 = A2(shiftOr, n2, 4);
	var n4 = A2(shiftOr, n3, 8);
	var n5 = A2(shiftOr, n4, 16);
	return n5 & (~(n5 >>> 1));
};
var $jfmengels$elm_review$Vendor$IntDict$signBit = $jfmengels$elm_review$Vendor$IntDict$highestBitSet(-1);
var $jfmengels$elm_review$Vendor$IntDict$isBranchingBitSet = function (p) {
	return A2(
		$elm$core$Basics$composeR,
		$elm$core$Bitwise$xor($jfmengels$elm_review$Vendor$IntDict$signBit),
		A2(
			$elm$core$Basics$composeR,
			$elm$core$Bitwise$and(p.bo),
			$elm$core$Basics$neq(0)));
};
var $jfmengels$elm_review$Vendor$IntDict$higherBitMask = function (branchingBit) {
	return branchingBit ^ (~(branchingBit - 1));
};
var $jfmengels$elm_review$Vendor$IntDict$lcp = F2(
	function (x, y) {
		var branchingBit = $jfmengels$elm_review$Vendor$IntDict$highestBitSet(x ^ y);
		var mask = $jfmengels$elm_review$Vendor$IntDict$higherBitMask(branchingBit);
		var prefixBits = x & mask;
		return {bo: branchingBit, aC: prefixBits};
	});
var $jfmengels$elm_review$Vendor$IntDict$Leaf = function (a) {
	return {$: 1, a: a};
};
var $jfmengels$elm_review$Vendor$IntDict$leaf = F2(
	function (k, v) {
		return $jfmengels$elm_review$Vendor$IntDict$Leaf(
			{b5: k, b: v});
	});
var $jfmengels$elm_review$Vendor$IntDict$prefixMatches = F2(
	function (p, n) {
		return _Utils_eq(
			n & $jfmengels$elm_review$Vendor$IntDict$higherBitMask(p.bo),
			p.aC);
	});
var $jfmengels$elm_review$Vendor$IntDict$update = F3(
	function (key, alter, dict) {
		var join = F2(
			function (_v2, _v3) {
				var k1 = _v2.a;
				var l = _v2.b;
				var k2 = _v3.a;
				var r = _v3.b;
				var prefix = A2($jfmengels$elm_review$Vendor$IntDict$lcp, k1, k2);
				return A2($jfmengels$elm_review$Vendor$IntDict$isBranchingBitSet, prefix, k2) ? A3($jfmengels$elm_review$Vendor$IntDict$inner, prefix, l, r) : A3($jfmengels$elm_review$Vendor$IntDict$inner, prefix, r, l);
			});
		var alteredNode = function (mv) {
			var _v1 = alter(mv);
			if (!_v1.$) {
				var v = _v1.a;
				return A2($jfmengels$elm_review$Vendor$IntDict$leaf, key, v);
			} else {
				return $jfmengels$elm_review$Vendor$IntDict$empty;
			}
		};
		switch (dict.$) {
			case 0:
				return alteredNode($elm$core$Maybe$Nothing);
			case 1:
				var l = dict.a;
				return _Utils_eq(l.b5, key) ? alteredNode(
					$elm$core$Maybe$Just(l.b)) : A2(
					join,
					_Utils_Tuple2(
						key,
						alteredNode($elm$core$Maybe$Nothing)),
					_Utils_Tuple2(l.b5, dict));
			default:
				var i = dict.a;
				return A2($jfmengels$elm_review$Vendor$IntDict$prefixMatches, i.k, key) ? (A2($jfmengels$elm_review$Vendor$IntDict$isBranchingBitSet, i.k, key) ? A3(
					$jfmengels$elm_review$Vendor$IntDict$inner,
					i.k,
					i.f,
					A3($jfmengels$elm_review$Vendor$IntDict$update, key, alter, i.g)) : A3(
					$jfmengels$elm_review$Vendor$IntDict$inner,
					i.k,
					A3($jfmengels$elm_review$Vendor$IntDict$update, key, alter, i.f),
					i.g)) : A2(
					join,
					_Utils_Tuple2(
						key,
						alteredNode($elm$core$Maybe$Nothing)),
					_Utils_Tuple2(i.k.aC, dict));
		}
	});
var $jfmengels$elm_review$Vendor$IntDict$insert = F3(
	function (key, value, dict) {
		return A3(
			$jfmengels$elm_review$Vendor$IntDict$update,
			key,
			$elm$core$Basics$always(
				$elm$core$Maybe$Just(value)),
			dict);
	});
var $jfmengels$elm_review$Vendor$IntDict$get = F2(
	function (key, dict) {
		get:
		while (true) {
			switch (dict.$) {
				case 0:
					return $elm$core$Maybe$Nothing;
				case 1:
					var l = dict.a;
					return _Utils_eq(l.b5, key) ? $elm$core$Maybe$Just(l.b) : $elm$core$Maybe$Nothing;
				default:
					var i = dict.a;
					if (!A2($jfmengels$elm_review$Vendor$IntDict$prefixMatches, i.k, key)) {
						return $elm$core$Maybe$Nothing;
					} else {
						if (A2($jfmengels$elm_review$Vendor$IntDict$isBranchingBitSet, i.k, key)) {
							var $temp$key = key,
								$temp$dict = i.g;
							key = $temp$key;
							dict = $temp$dict;
							continue get;
						} else {
							var $temp$key = key,
								$temp$dict = i.f;
							key = $temp$key;
							dict = $temp$dict;
							continue get;
						}
					}
			}
		}
	});
var $jfmengels$elm_review$Vendor$IntDict$member = F2(
	function (key, dict) {
		var _v0 = A2($jfmengels$elm_review$Vendor$IntDict$get, key, dict);
		if (!_v0.$) {
			return true;
		} else {
			return false;
		}
	});
var $jfmengels$elm_review$Vendor$Graph$fromNodesAndEdges = F2(
	function (nodes_, edges_) {
		var nodeRep = A3(
			$elm$core$List$foldl,
			function (n) {
				return A2(
					$jfmengels$elm_review$Vendor$IntDict$insert,
					n.cm,
					A3($jfmengels$elm_review$Vendor$Graph$NodeContext, n, $jfmengels$elm_review$Vendor$IntDict$empty, $jfmengels$elm_review$Vendor$IntDict$empty));
			},
			$jfmengels$elm_review$Vendor$IntDict$empty,
			nodes_);
		var addEdge = F2(
			function (edge, rep) {
				var updateOutgoing = function (ctx) {
					return _Utils_update(
						ctx,
						{
							l: A3($jfmengels$elm_review$Vendor$IntDict$insert, edge.fO, edge.b6, ctx.l)
						});
				};
				var updateIncoming = function (ctx) {
					return _Utils_update(
						ctx,
						{
							e2: A3($jfmengels$elm_review$Vendor$IntDict$insert, edge.eX, edge.b6, ctx.e2)
						});
				};
				return A3(
					$jfmengels$elm_review$Vendor$IntDict$update,
					edge.fO,
					$elm$core$Maybe$map(updateIncoming),
					A3(
						$jfmengels$elm_review$Vendor$IntDict$update,
						edge.eX,
						$elm$core$Maybe$map(updateOutgoing),
						rep));
			});
		var addEdgeIfValid = F2(
			function (edge, rep) {
				return (A2($jfmengels$elm_review$Vendor$IntDict$member, edge.eX, rep) && A2($jfmengels$elm_review$Vendor$IntDict$member, edge.fO, rep)) ? A2(addEdge, edge, rep) : rep;
			});
		return A3($elm$core$List$foldl, addEdgeIfValid, nodeRep, edges_);
	});
var $stil4m$elm_syntax$Elm$Syntax$Module$moduleName = function (m) {
	switch (m.$) {
		case 0:
			var x = m.a;
			return $stil4m$elm_syntax$Elm$Syntax$Node$value(x.cv);
		case 1:
			var x = m.a;
			return $stil4m$elm_syntax$Elm$Syntax$Node$value(x.cv);
		default:
			var x = m.a;
			return $stil4m$elm_syntax$Elm$Syntax$Node$value(x.cv);
	}
};
var $jfmengels$elm_review$Review$Project$Valid$getModuleName = function (module_) {
	return $stil4m$elm_syntax$Elm$Syntax$Module$moduleName(
		$stil4m$elm_syntax$Elm$Syntax$Node$value(module_.eu.fc));
};
var $jfmengels$elm_review$Vendor$Graph$Edge = F3(
	function (from, to, label) {
		return {eX: from, b6: label, fO: to};
	});
var $jfmengels$elm_review$Vendor$Graph$Node = F2(
	function (id, label) {
		return {cm: id, b6: label};
	});
var $elm$core$List$maybeCons = F3(
	function (f, mx, xs) {
		var _v0 = f(mx);
		if (!_v0.$) {
			var x = _v0.a;
			return A2($elm$core$List$cons, x, xs);
		} else {
			return xs;
		}
	});
var $elm$core$List$filterMap = F2(function (f, xs) {
  var tmp = _List_Cons(undefined, _List_Nil);
  var end = tmp;
  for (; xs.b; xs = xs.b) {
    var m = f(xs.a);
    if (!m.$) {
      var next = _List_Cons(m.a, _List_Nil);
      end.b = next;
      end = next;
    }
  }
  return tmp.b;
});
var $jfmengels$elm_review$Review$Project$Valid$importedModules = function (module_) {
	return A2(
		$elm$core$List$map,
		A2(
			$elm$core$Basics$composeR,
			$stil4m$elm_syntax$Elm$Syntax$Node$value,
			A2(
				$elm$core$Basics$composeR,
				function ($) {
					return $.cv;
				},
				$stil4m$elm_syntax$Elm$Syntax$Node$value)),
		module_.eu.e1);
};
var $jfmengels$elm_review$Review$Project$Valid$nodesAndEdges = F3(
	function (getModuleId, module_, moduleId) {
		return _Utils_Tuple2(
			A2($jfmengels$elm_review$Vendor$Graph$Node, moduleId, module_.fr),
			A2(
				$elm$core$List$map,
				function (importedModuleId) {
					return A3($jfmengels$elm_review$Vendor$Graph$Edge, importedModuleId, moduleId, 0);
				},
				A2(
					$elm$core$List$filterMap,
					getModuleId,
					$jfmengels$elm_review$Review$Project$Valid$importedModules(module_))));
	});
var $jfmengels$elm_review$Review$Project$Valid$buildModuleGraph = function (mods) {
	var moduleIds = A3(
		$elm$core$Dict$foldl,
		F3(
			function (_v5, module_, _v6) {
				var index = _v6.a;
				var dict = _v6.b;
				return _Utils_Tuple2(
					index + 1,
					A3(
						$elm$core$Dict$insert,
						$jfmengels$elm_review$Review$Project$Valid$getModuleName(module_),
						index,
						dict));
			}),
		_Utils_Tuple2(0, $elm$core$Dict$empty),
		mods).b;
	var getModuleId = function (moduleName) {
		getModuleId:
		while (true) {
			var _v0 = A2($elm$core$Dict$get, moduleName, moduleIds);
			if (!_v0.$) {
				var moduleId = _v0.a;
				return moduleId;
			} else {
				var $temp$moduleName = moduleName;
				moduleName = $temp$moduleName;
				continue getModuleId;
			}
		}
	};
	var _v1 = A3(
		$elm$core$Dict$foldl,
		F3(
			function (_v2, module_, _v3) {
				var resNodes = _v3.a;
				var resEdges = _v3.b;
				var _v4 = A3(
					$jfmengels$elm_review$Review$Project$Valid$nodesAndEdges,
					function (moduleName) {
						return A2($elm$core$Dict$get, moduleName, moduleIds);
					},
					module_,
					getModuleId(
						$jfmengels$elm_review$Review$Project$Valid$getModuleName(module_)));
				var moduleNode = _v4.a;
				var modulesEdges = _v4.b;
				return _Utils_Tuple2(
					A2($elm$core$List$cons, moduleNode, resNodes),
					_Utils_ap(modulesEdges, resEdges));
			}),
		_Utils_Tuple2(_List_Nil, _List_Nil),
		mods);
	var nodes = _v1.a;
	var edges = _v1.b;
	return A2($jfmengels$elm_review$Vendor$Graph$fromNodesAndEdges, nodes, edges);
};
var $jfmengels$elm_review$Vendor$Graph$AcyclicGraph = F2(
	function (a, b) {
		return {$: 0, a: a, b: b};
	});
var $elm$core$Result$andThen = F2(
	function (callback, result) {
		if (!result.$) {
			var value = result.a;
			return callback(value);
		} else {
			var msg = result.a;
			return $elm$core$Result$Err(msg);
		}
	});
var $jfmengels$elm_review$Vendor$IntDict$findMin = function (dict) {
	findMin:
	while (true) {
		switch (dict.$) {
			case 0:
				return $elm$core$Maybe$Nothing;
			case 1:
				var l = dict.a;
				return $elm$core$Maybe$Just(
					_Utils_Tuple2(l.b5, l.b));
			default:
				var i = dict.a;
				var $temp$dict = i.f;
				dict = $temp$dict;
				continue findMin;
		}
	}
};
var $jfmengels$elm_review$Vendor$IntDict$Disjunct = F2(
	function (a, b) {
		return {$: 2, a: a, b: b};
	});
var $jfmengels$elm_review$Vendor$IntDict$Left = 0;
var $jfmengels$elm_review$Vendor$IntDict$Parent = F2(
	function (a, b) {
		return {$: 1, a: a, b: b};
	});
var $jfmengels$elm_review$Vendor$IntDict$Right = 1;
var $jfmengels$elm_review$Vendor$IntDict$SamePrefix = {$: 0};
var $jfmengels$elm_review$Vendor$IntDict$combineBits = F3(
	function (a, b, mask) {
		return (a & (~mask)) | (b & mask);
	});
var $jfmengels$elm_review$Vendor$IntDict$mostSignificantBranchingBit = F2(
	function (a, b) {
		return (_Utils_eq(a, $jfmengels$elm_review$Vendor$IntDict$signBit) || _Utils_eq(b, $jfmengels$elm_review$Vendor$IntDict$signBit)) ? $jfmengels$elm_review$Vendor$IntDict$signBit : A2($elm$core$Basics$max, a, b);
	});
var $jfmengels$elm_review$Vendor$IntDict$determineBranchRelation = F2(
	function (l, r) {
		var rp = r.k;
		var lp = l.k;
		var mask = $jfmengels$elm_review$Vendor$IntDict$highestBitSet(
			A2($jfmengels$elm_review$Vendor$IntDict$mostSignificantBranchingBit, lp.bo, rp.bo));
		var modifiedRightPrefix = A3($jfmengels$elm_review$Vendor$IntDict$combineBits, rp.aC, ~lp.aC, mask);
		var prefix = A2($jfmengels$elm_review$Vendor$IntDict$lcp, lp.aC, modifiedRightPrefix);
		var childEdge = F2(
			function (branchPrefix, c) {
				return A2($jfmengels$elm_review$Vendor$IntDict$isBranchingBitSet, branchPrefix, c.k.aC) ? 1 : 0;
			});
		return _Utils_eq(lp, rp) ? $jfmengels$elm_review$Vendor$IntDict$SamePrefix : (_Utils_eq(prefix, lp) ? A2(
			$jfmengels$elm_review$Vendor$IntDict$Parent,
			0,
			A2(childEdge, l.k, r)) : (_Utils_eq(prefix, rp) ? A2(
			$jfmengels$elm_review$Vendor$IntDict$Parent,
			1,
			A2(childEdge, r.k, l)) : A2(
			$jfmengels$elm_review$Vendor$IntDict$Disjunct,
			prefix,
			A2(childEdge, prefix, l))));
	});
var $jfmengels$elm_review$Vendor$IntDict$intersect = F2(
	function (l, r) {
		intersect:
		while (true) {
			var _v0 = _Utils_Tuple2(l, r);
			_v0$1:
			while (true) {
				_v0$2:
				while (true) {
					switch (_v0.a.$) {
						case 0:
							var _v1 = _v0.a;
							return $jfmengels$elm_review$Vendor$IntDict$Empty;
						case 1:
							switch (_v0.b.$) {
								case 0:
									break _v0$1;
								case 1:
									break _v0$2;
								default:
									break _v0$2;
							}
						default:
							switch (_v0.b.$) {
								case 0:
									break _v0$1;
								case 1:
									var lr = _v0.b.a;
									var _v3 = A2($jfmengels$elm_review$Vendor$IntDict$get, lr.b5, l);
									if (!_v3.$) {
										var v = _v3.a;
										return A2($jfmengels$elm_review$Vendor$IntDict$leaf, lr.b5, v);
									} else {
										return $jfmengels$elm_review$Vendor$IntDict$Empty;
									}
								default:
									var il = _v0.a.a;
									var ir = _v0.b.a;
									var _v4 = A2($jfmengels$elm_review$Vendor$IntDict$determineBranchRelation, il, ir);
									switch (_v4.$) {
										case 0:
											return A3(
												$jfmengels$elm_review$Vendor$IntDict$inner,
												il.k,
												A2($jfmengels$elm_review$Vendor$IntDict$intersect, il.f, ir.f),
												A2($jfmengels$elm_review$Vendor$IntDict$intersect, il.g, ir.g));
										case 1:
											if (!_v4.a) {
												if (_v4.b === 1) {
													var _v5 = _v4.a;
													var _v6 = _v4.b;
													var $temp$l = il.g,
														$temp$r = r;
													l = $temp$l;
													r = $temp$r;
													continue intersect;
												} else {
													var _v9 = _v4.a;
													var _v10 = _v4.b;
													var $temp$l = il.f,
														$temp$r = r;
													l = $temp$l;
													r = $temp$r;
													continue intersect;
												}
											} else {
												if (_v4.b === 1) {
													var _v7 = _v4.a;
													var _v8 = _v4.b;
													var $temp$l = l,
														$temp$r = ir.g;
													l = $temp$l;
													r = $temp$r;
													continue intersect;
												} else {
													var _v11 = _v4.a;
													var _v12 = _v4.b;
													var $temp$l = l,
														$temp$r = ir.f;
													l = $temp$l;
													r = $temp$r;
													continue intersect;
												}
											}
										default:
											return $jfmengels$elm_review$Vendor$IntDict$Empty;
									}
							}
					}
				}
				var ll = _v0.a.a;
				return A2($jfmengels$elm_review$Vendor$IntDict$member, ll.b5, r) ? l : $jfmengels$elm_review$Vendor$IntDict$Empty;
			}
			var _v2 = _v0.b;
			return $jfmengels$elm_review$Vendor$IntDict$Empty;
		}
	});
var $elm$core$Result$map = F2(
	function (func, ra) {
		if (!ra.$) {
			var a = ra.a;
			return $elm$core$Result$Ok(
				func(a));
		} else {
			var e = ra.a;
			return $elm$core$Result$Err(e);
		}
	});
var $jfmengels$elm_review$Vendor$Graph$crashHack = function (msg) {
	crashHack:
	while (true) {
		var $temp$msg = msg;
		msg = $temp$msg;
		continue crashHack;
	}
};
var $jfmengels$elm_review$Vendor$Graph$unGraph = function (graph) {
	var rep = graph;
	return rep;
};
var $jfmengels$elm_review$Vendor$Graph$get = function (nodeId) {
	return A2(
		$elm$core$Basics$composeR,
		$jfmengels$elm_review$Vendor$Graph$unGraph,
		$jfmengels$elm_review$Vendor$IntDict$get(nodeId));
};
var $jfmengels$elm_review$Vendor$Graph$unsafeGet = F3(
	function (msg, id, graph) {
		var _v0 = A2($jfmengels$elm_review$Vendor$Graph$get, id, graph);
		if (_v0.$ === 1) {
			return $jfmengels$elm_review$Vendor$Graph$crashHack(msg);
		} else {
			var ctx = _v0.a;
			return ctx;
		}
	});
var $jfmengels$elm_review$Vendor$Graph$checkForBackEdges = F2(
	function (ordering, graph) {
		var success = function (_v3) {
			return A2($jfmengels$elm_review$Vendor$Graph$AcyclicGraph, graph, ordering);
		};
		var check = F2(
			function (id, _v2) {
				var backSet = _v2.a;
				var error = 'Graph.checkForBackEdges: `ordering` didn\'t contain `id`';
				var ctx = A3($jfmengels$elm_review$Vendor$Graph$unsafeGet, error, id, graph);
				var backSetWithId = A3($jfmengels$elm_review$Vendor$IntDict$insert, id, 0, backSet);
				var backEdges = A2($jfmengels$elm_review$Vendor$IntDict$intersect, ctx.l, backSetWithId);
				var _v0 = $jfmengels$elm_review$Vendor$IntDict$findMin(backEdges);
				if (_v0.$ === 1) {
					return $elm$core$Result$Ok(
						_Utils_Tuple2(backSetWithId, 0));
				} else {
					var _v1 = _v0.a;
					var to = _v1.a;
					var label = _v1.b;
					return $elm$core$Result$Err(
						A3($jfmengels$elm_review$Vendor$Graph$Edge, id, to, label));
				}
			});
		return A2(
			$elm$core$Result$map,
			success,
			A3(
				$elm$core$List$foldl,
				F2(
					function (id, res) {
						return A2(
							$elm$core$Result$andThen,
							check(id),
							res);
					}),
				$elm$core$Result$Ok(
					_Utils_Tuple2($jfmengels$elm_review$Vendor$IntDict$empty, 0)),
				ordering));
	});
var $jfmengels$elm_review$Vendor$IntDict$foldr = F3(
	function (f, acc, dict) {
		foldr:
		while (true) {
			switch (dict.$) {
				case 0:
					return acc;
				case 1:
					var l = dict.a;
					return A3(f, l.b5, l.b, acc);
				default:
					var i = dict.a;
					var $temp$f = f,
						$temp$acc = A3($jfmengels$elm_review$Vendor$IntDict$foldr, f, acc, i.g),
						$temp$dict = i.f;
					f = $temp$f;
					acc = $temp$acc;
					dict = $temp$dict;
					continue foldr;
			}
		}
	});
var $jfmengels$elm_review$Vendor$IntDict$keys = function (dict) {
	return A3(
		$jfmengels$elm_review$Vendor$IntDict$foldr,
		F3(
			function (key, value, keyList) {
				return A2($elm$core$List$cons, key, keyList);
			}),
		_List_Nil,
		dict);
};
var $jfmengels$elm_review$Vendor$Graph$alongOutgoingEdges = function (ctx) {
	return $jfmengels$elm_review$Vendor$IntDict$keys(ctx.l);
};
var $jfmengels$elm_review$Vendor$IntDict$foldl = F3(
	function (f, acc, dict) {
		foldl:
		while (true) {
			switch (dict.$) {
				case 0:
					return acc;
				case 1:
					var l = dict.a;
					return A3(f, l.b5, l.b, acc);
				default:
					var i = dict.a;
					var $temp$f = f,
						$temp$acc = A3($jfmengels$elm_review$Vendor$IntDict$foldl, f, acc, i.f),
						$temp$dict = i.g;
					f = $temp$f;
					acc = $temp$acc;
					dict = $temp$dict;
					continue foldl;
			}
		}
	});
var $jfmengels$elm_review$Vendor$Graph$applyEdgeDiff = F3(
	function (nodeId, diff, graphRep) {
		var updateOutgoingEdge = F2(
			function (upd, node) {
				return _Utils_update(
					node,
					{
						l: A3($jfmengels$elm_review$Vendor$IntDict$update, nodeId, upd, node.l)
					});
			});
		var updateIncomingEdge = F2(
			function (upd, node) {
				return _Utils_update(
					node,
					{
						e2: A3($jfmengels$elm_review$Vendor$IntDict$update, nodeId, upd, node.e2)
					});
			});
		var flippedFoldl = F3(
			function (f, dict, acc) {
				return A3($jfmengels$elm_review$Vendor$IntDict$foldl, f, acc, dict);
			});
		var edgeUpdateToMaybe = function (edgeUpdate) {
			if (!edgeUpdate.$) {
				var lbl = edgeUpdate.a;
				return $elm$core$Maybe$Just(lbl);
			} else {
				return $elm$core$Maybe$Nothing;
			}
		};
		var updateAdjacency = F3(
			function (updateEdge, updatedId, edgeUpdate) {
				var updateLbl = updateEdge(
					$elm$core$Basics$always(
						edgeUpdateToMaybe(edgeUpdate)));
				return A2(
					$jfmengels$elm_review$Vendor$IntDict$update,
					updatedId,
					$elm$core$Maybe$map(updateLbl));
			});
		return A3(
			flippedFoldl,
			updateAdjacency(updateOutgoingEdge),
			diff.l,
			A3(
				flippedFoldl,
				updateAdjacency(updateIncomingEdge),
				diff.e2,
				graphRep));
	});
var $jfmengels$elm_review$Vendor$Graph$Insert = function (a) {
	return {$: 0, a: a};
};
var $jfmengels$elm_review$Vendor$Graph$Remove = function (a) {
	return {$: 1, a: a};
};
var $jfmengels$elm_review$Vendor$Graph$emptyDiff = {e2: $jfmengels$elm_review$Vendor$IntDict$empty, l: $jfmengels$elm_review$Vendor$IntDict$empty};
var $jfmengels$elm_review$Vendor$Graph$computeEdgeDiff = F2(
	function (old, _new) {
		var collectUpdates = F3(
			function (edgeUpdate, updatedId, label) {
				var replaceUpdate = function (old_) {
					var _v5 = _Utils_Tuple2(
						old_,
						edgeUpdate(label));
					if (!_v5.a.$) {
						if (_v5.a.a.$ === 1) {
							if (!_v5.b.$) {
								var oldLbl = _v5.a.a.a;
								var newLbl = _v5.b.a;
								return _Utils_eq(oldLbl, newLbl) ? $elm$core$Maybe$Nothing : $elm$core$Maybe$Just(
									$jfmengels$elm_review$Vendor$Graph$Insert(newLbl));
							} else {
								return $jfmengels$elm_review$Vendor$Graph$crashHack('Graph.computeEdgeDiff: Collected two removals for the same edge. This is an error in the implementation of Graph and you should file a bug report!');
							}
						} else {
							return $jfmengels$elm_review$Vendor$Graph$crashHack('Graph.computeEdgeDiff: Collected inserts before removals. This is an error in the implementation of Graph and you should file a bug report!');
						}
					} else {
						var _v6 = _v5.a;
						var eu = _v5.b;
						return $elm$core$Maybe$Just(eu);
					}
				};
				return A2($jfmengels$elm_review$Vendor$IntDict$update, updatedId, replaceUpdate);
			});
		var collect = F3(
			function (edgeUpdate, adj, updates) {
				return A3(
					$jfmengels$elm_review$Vendor$IntDict$foldl,
					collectUpdates(edgeUpdate),
					updates,
					adj);
			});
		var _v0 = _Utils_Tuple2(old, _new);
		if (_v0.a.$ === 1) {
			if (_v0.b.$ === 1) {
				var _v1 = _v0.a;
				var _v2 = _v0.b;
				return $jfmengels$elm_review$Vendor$Graph$emptyDiff;
			} else {
				var _v4 = _v0.a;
				var ins = _v0.b.a;
				return {
					e2: A3(collect, $jfmengels$elm_review$Vendor$Graph$Insert, ins.l, $jfmengels$elm_review$Vendor$IntDict$empty),
					l: A3(collect, $jfmengels$elm_review$Vendor$Graph$Insert, ins.e2, $jfmengels$elm_review$Vendor$IntDict$empty)
				};
			}
		} else {
			if (_v0.b.$ === 1) {
				var rem = _v0.a.a;
				var _v3 = _v0.b;
				return {
					e2: A3(collect, $jfmengels$elm_review$Vendor$Graph$Remove, rem.l, $jfmengels$elm_review$Vendor$IntDict$empty),
					l: A3(collect, $jfmengels$elm_review$Vendor$Graph$Remove, rem.e2, $jfmengels$elm_review$Vendor$IntDict$empty)
				};
			} else {
				var rem = _v0.a.a;
				var ins = _v0.b.a;
				return _Utils_eq(rem, ins) ? $jfmengels$elm_review$Vendor$Graph$emptyDiff : {
					e2: A3(
						collect,
						$jfmengels$elm_review$Vendor$Graph$Insert,
						ins.l,
						A3(collect, $jfmengels$elm_review$Vendor$Graph$Remove, rem.l, $jfmengels$elm_review$Vendor$IntDict$empty)),
					l: A3(
						collect,
						$jfmengels$elm_review$Vendor$Graph$Insert,
						ins.e2,
						A3(collect, $jfmengels$elm_review$Vendor$Graph$Remove, rem.e2, $jfmengels$elm_review$Vendor$IntDict$empty))
				};
			}
		}
	});
var $jfmengels$elm_review$Vendor$IntDict$filter = F2(
	function (predicate, dict) {
		var add = F3(
			function (k, v, d) {
				return A2(predicate, k, v) ? A3($jfmengels$elm_review$Vendor$IntDict$insert, k, v, d) : d;
			});
		return A3($jfmengels$elm_review$Vendor$IntDict$foldl, add, $jfmengels$elm_review$Vendor$IntDict$empty, dict);
	});
var $jfmengels$elm_review$Vendor$Graph$update = F2(
	function (nodeId, updater) {
		var wrappedUpdater = function (rep) {
			var old = A2($jfmengels$elm_review$Vendor$IntDict$get, nodeId, rep);
			var filterInvalidEdges = function (ctx) {
				return $jfmengels$elm_review$Vendor$IntDict$filter(
					F2(
						function (id, _v0) {
							return _Utils_eq(id, ctx.dV.cm) || A2($jfmengels$elm_review$Vendor$IntDict$member, id, rep);
						}));
			};
			var cleanUpEdges = function (ctx) {
				return _Utils_update(
					ctx,
					{
						e2: A2(filterInvalidEdges, ctx, ctx.e2),
						l: A2(filterInvalidEdges, ctx, ctx.l)
					});
			};
			var _new = A2(
				$elm$core$Maybe$map,
				cleanUpEdges,
				updater(old));
			var diff = A2($jfmengels$elm_review$Vendor$Graph$computeEdgeDiff, old, _new);
			return A3(
				$jfmengels$elm_review$Vendor$IntDict$update,
				nodeId,
				$elm$core$Basics$always(_new),
				A3($jfmengels$elm_review$Vendor$Graph$applyEdgeDiff, nodeId, diff, rep));
		};
		return A2(
			$elm$core$Basics$composeR,
			$jfmengels$elm_review$Vendor$Graph$unGraph,
			A2($elm$core$Basics$composeR, wrappedUpdater, $elm$core$Basics$identity));
	});
var $jfmengels$elm_review$Vendor$Graph$remove = F2(
	function (nodeId, graph) {
		return A3(
			$jfmengels$elm_review$Vendor$Graph$update,
			nodeId,
			$elm$core$Basics$always($elm$core$Maybe$Nothing),
			graph);
	});
var $jfmengels$elm_review$Vendor$Graph$guidedDfs = F5(
	function (selectNeighbors, visitNode, startingSeeds, startingAcc, startingGraph) {
		var go = F3(
			function (seeds, acc, graph) {
				go:
				while (true) {
					if (!seeds.b) {
						return _Utils_Tuple2(acc, graph);
					} else {
						var next = seeds.a;
						var seeds1 = seeds.b;
						var _v1 = A2($jfmengels$elm_review$Vendor$Graph$get, next, graph);
						if (_v1.$ === 1) {
							var $temp$seeds = seeds1,
								$temp$acc = acc,
								$temp$graph = graph;
							seeds = $temp$seeds;
							acc = $temp$acc;
							graph = $temp$graph;
							continue go;
						} else {
							var ctx = _v1.a;
							var _v2 = A2(visitNode, ctx, acc);
							var accAfterDiscovery = _v2.a;
							var finishNode = _v2.b;
							var _v3 = A3(
								go,
								selectNeighbors(ctx),
								accAfterDiscovery,
								A2($jfmengels$elm_review$Vendor$Graph$remove, next, graph));
							var accBeforeFinish = _v3.a;
							var graph1 = _v3.b;
							var accAfterFinish = finishNode(accBeforeFinish);
							var $temp$seeds = seeds1,
								$temp$acc = accAfterFinish,
								$temp$graph = graph1;
							seeds = $temp$seeds;
							acc = $temp$acc;
							graph = $temp$graph;
							continue go;
						}
					}
				}
			});
		return A3(go, startingSeeds, startingAcc, startingGraph);
	});
var $jfmengels$elm_review$Vendor$Graph$nodeIds = A2($elm$core$Basics$composeR, $jfmengels$elm_review$Vendor$Graph$unGraph, $jfmengels$elm_review$Vendor$IntDict$keys);
var $jfmengels$elm_review$Vendor$Graph$dfs = F3(
	function (visitNode, acc, graph) {
		return A5(
			$jfmengels$elm_review$Vendor$Graph$guidedDfs,
			$jfmengels$elm_review$Vendor$Graph$alongOutgoingEdges,
			visitNode,
			$jfmengels$elm_review$Vendor$Graph$nodeIds(graph),
			acc,
			graph).a;
	});
var $jfmengels$elm_review$Vendor$Graph$onFinish = F3(
	function (visitor, ctx, acc) {
		return _Utils_Tuple2(
			acc,
			visitor(ctx));
	});
var $jfmengels$elm_review$Vendor$Graph$checkAcyclic = function (graph) {
	var reversePostOrder = A3(
		$jfmengels$elm_review$Vendor$Graph$dfs,
		$jfmengels$elm_review$Vendor$Graph$onFinish(
			A2(
				$elm$core$Basics$composeR,
				function ($) {
					return $.dV;
				},
				A2(
					$elm$core$Basics$composeR,
					function ($) {
						return $.cm;
					},
					$elm$core$List$cons))),
		_List_Nil,
		graph);
	return A2($jfmengels$elm_review$Vendor$Graph$checkForBackEdges, reversePostOrder, graph);
};
var $jfmengels$elm_review$Vendor$Zipper$focusr = F2(
	function (fc, zipper) {
		focusr:
		while (true) {
			if (fc(
				$jfmengels$elm_review$Vendor$Zipper$current(zipper))) {
				return $elm$core$Maybe$Just(zipper);
			} else {
				var _v0 = $jfmengels$elm_review$Vendor$Zipper$next(zipper);
				if (!_v0.$) {
					var z = _v0.a;
					var $temp$fc = fc,
						$temp$zipper = z;
					fc = $temp$fc;
					zipper = $temp$zipper;
					continue focusr;
				} else {
					return $elm$core$Maybe$Nothing;
				}
			}
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
		var dict1 = _v0;
		var dict2 = _v1;
		return A2($elm$core$Dict$diff, dict1, dict2);
	});
var $jfmengels$elm_review$Review$Project$Valid$importedModulesSet = F2(
	function (ast, dependencyModules) {
		return A2(
			$elm$core$Set$diff,
			A3(
				$elm$core$List$foldl,
				F2(
					function (import_, set) {
						return A2(
							$elm$core$Set$insert,
							$stil4m$elm_syntax$Elm$Syntax$Node$value(
								$stil4m$elm_syntax$Elm$Syntax$Node$value(import_).cv),
							set);
					}),
				$elm$core$Set$empty,
				ast.e1),
			dependencyModules);
	});
var $jfmengels$elm_review$Review$Project$Internal$positionAsInt = function (_v0) {
	var row = _v0.d0;
	var column = _v0.eF;
	return (row * 1000000) + column;
};
var $jfmengels$elm_review$Review$Project$Internal$sanitizeModule = function (ast) {
	return _Utils_update(
		ast,
		{
			eH: A2(
				$elm$core$List$sortBy,
				function (_v0) {
					var range = _v0.a;
					return $jfmengels$elm_review$Review$Project$Internal$positionAsInt(range.bQ);
				},
				ast.eH)
		});
};
var $jfmengels$elm_review$Vendor$Zipper$prev = function (_v0) {
	var p = _v0.a;
	var f = _v0.b;
	var n = _v0.c;
	if (!p.b) {
		return $elm$core$Maybe$Nothing;
	} else {
		var h = p.a;
		var t = p.b;
		return $elm$core$Maybe$Just(
			A3(
				$jfmengels$elm_review$Vendor$Zipper$Zipper,
				t,
				h,
				A2($elm$core$List$cons, f, n)));
	}
};
var $jfmengels$elm_review$Vendor$Zipper$toEndHelper = F2(
	function (f, acc) {
		toEndHelper:
		while (true) {
			var _v0 = f(acc);
			if (!_v0.$) {
				var val = _v0.a;
				var $temp$f = f,
					$temp$acc = val;
				f = $temp$f;
				acc = $temp$acc;
				continue toEndHelper;
			} else {
				return acc;
			}
		}
	});
var $jfmengels$elm_review$Vendor$Zipper$start = $jfmengels$elm_review$Vendor$Zipper$toEndHelper($jfmengels$elm_review$Vendor$Zipper$prev);
var $jfmengels$elm_review$Vendor$Graph$topologicalSort = function (_v0) {
	var graph = _v0.a;
	var ordering = _v0.b;
	var error = 'Graph.topologicalSort: Invalid `AcyclicGraph`, where the ordering contained nodes not present in the graph';
	return A2(
		$elm$core$List$map,
		function (id) {
			return A3($jfmengels$elm_review$Vendor$Graph$unsafeGet, error, id, graph);
		},
		ordering);
};
var $jfmengels$elm_review$Vendor$NonEmpty$fromList = function (xs) {
	if (xs.b) {
		var h = xs.a;
		var t = xs.b;
		return $elm$core$Maybe$Just(
			_Utils_Tuple2(h, t));
	} else {
		return $elm$core$Maybe$Nothing;
	}
};
var $jfmengels$elm_review$Vendor$Zipper$fromNonEmpty = function (_v0) {
	var h = _v0.a;
	var t = _v0.b;
	return A3($jfmengels$elm_review$Vendor$Zipper$Zipper, _List_Nil, h, t);
};
var $jfmengels$elm_review$Vendor$Zipper$fromList = A2(
	$elm$core$Basics$composeL,
	$elm$core$Maybe$map($jfmengels$elm_review$Vendor$Zipper$fromNonEmpty),
	$jfmengels$elm_review$Vendor$NonEmpty$fromList);
var $jfmengels$elm_review$Review$Project$Valid$unsafeCreateZipper = function (sortedModules) {
	unsafeCreateZipper:
	while (true) {
		var _v0 = $jfmengels$elm_review$Vendor$Zipper$fromList(sortedModules);
		if (!_v0.$) {
			var zipper = _v0.a;
			return zipper;
		} else {
			var $temp$sortedModules = sortedModules;
			sortedModules = $temp$sortedModules;
			continue unsafeCreateZipper;
		}
	}
};
var $jfmengels$elm_review$Review$Project$Valid$addParsedModule = F3(
	function (_v0, maybeModuleZipper, _v1) {
		var path = _v0.fr;
		var source = _v0.fE;
		var ast = _v0.eu;
		var project = _v1;
		var _v2 = A2($elm$core$Dict$get, path, project.aO);
		if (!_v2.$) {
			var existingModule = _v2.a;
			var osAgnosticPath = $jfmengels$elm_review$Path$makeOSAgnostic(path);
			var module_ = {
				eu: $jfmengels$elm_review$Review$Project$Internal$sanitizeModule(ast),
				bs: $jfmengels$elm_review$Review$Cache$ContentHash$hash(source),
				cW: A2(
					$elm$core$List$any,
					function (dir) {
						return A2(
							$elm$core$String$startsWith,
							$jfmengels$elm_review$Path$makeOSAgnostic(dir),
							osAgnosticPath);
					},
					project.c5),
				fr: path,
				fE: source
			};
			var newProject = _Utils_update(
				project,
				{
					aO: A3($elm$core$Dict$insert, path, module_, project.aO)
				});
			if (_Utils_eq(
				A2($jfmengels$elm_review$Review$Project$Valid$importedModulesSet, existingModule.eu, project.aH),
				A2($jfmengels$elm_review$Review$Project$Valid$importedModulesSet, ast, project.aH))) {
				var newModuleZipper = function () {
					if (!maybeModuleZipper.$) {
						var moduleZipper_ = maybeModuleZipper.a;
						return moduleZipper_;
					} else {
						var moduleZipper_ = $jfmengels$elm_review$Review$Project$Valid$unsafeCreateZipper(newProject.cb);
						return A2(
							$elm$core$Maybe$withDefault,
							moduleZipper_,
							A2(
								$jfmengels$elm_review$Vendor$Zipper$focusr,
								function (mod) {
									return _Utils_eq(mod.dV.b6, path);
								},
								moduleZipper_));
					}
				}();
				return $elm$core$Maybe$Just(
					_Utils_Tuple2(newProject, newModuleZipper));
			} else {
				var graph = $jfmengels$elm_review$Review$Project$Valid$buildModuleGraph(newProject.aO);
				var _v4 = $jfmengels$elm_review$Vendor$Graph$checkAcyclic(graph);
				if (_v4.$ === 1) {
					return $elm$core$Maybe$Nothing;
				} else {
					var acyclicGraph = _v4.a;
					var sortedModules = $jfmengels$elm_review$Vendor$Graph$topologicalSort(acyclicGraph);
					var moduleZipper_ = $jfmengels$elm_review$Review$Project$Valid$unsafeCreateZipper(sortedModules);
					var newModuleZipper = function () {
						if (!maybeModuleZipper.$) {
							var prevModuleZipper = maybeModuleZipper.a;
							return A3(
								$jfmengels$elm_review$Review$Project$Valid$advanceZipper,
								path,
								$jfmengels$elm_review$Vendor$Zipper$start(prevModuleZipper),
								moduleZipper_);
						} else {
							return A2(
								$elm$core$Maybe$withDefault,
								moduleZipper_,
								A2(
									$jfmengels$elm_review$Vendor$Zipper$focusr,
									function (mod) {
										return _Utils_eq(mod.dV.b6, path);
									},
									moduleZipper_));
						}
					}();
					return $elm$core$Maybe$Just(
						_Utils_Tuple2(
							_Utils_update(
								newProject,
								{dQ: graph, cb: sortedModules}),
							newModuleZipper));
				}
			}
		} else {
			return $elm$core$Maybe$Nothing;
		}
	});
var $jfmengels$elm_review$Review$Project$Valid$addReadme = F2(
	function (readme_, _v0) {
		var project = _v0;
		return _Utils_update(
			project,
			{
				c2: $elm$core$Maybe$Just(
					_Utils_Tuple2(
						readme_,
						$jfmengels$elm_review$Review$Cache$ContentHash$hash(readme_.br)))
			});
	});
var $jfmengels$elm_review$Review$Project$Valid$elmJson = function (_v0) {
	var project = _v0;
	return A2($elm$core$Maybe$map, $elm$core$Tuple$first, project.cg);
};
var $jfmengels$elm_review$Review$Error$ReviewError = $elm$core$Basics$identity;
var $jfmengels$elm_review$Review$Rule$errorToReviewError = function (_v0) {
	var err = _v0;
	return err;
};
var $elm$json$Json$Decode$decodeString = _Json_runOnString;
var $elm$json$Json$Decode$andThen = _Json_andThen;
var $elm$project_metadata_utils$Elm$Project$Application = function (a) {
	return {$: 0, a: a};
};
var $elm$project_metadata_utils$Elm$Project$Package = function (a) {
	return {$: 1, a: a};
};
var $elm$project_metadata_utils$Elm$Project$ApplicationInfo = F6(
	function (elm, dirs, depsDirect, depsIndirect, testDepsDirect, testDepsIndirect) {
		return {dq: depsDirect, dr: depsIndirect, ds: dirs, cf: elm, eg: testDepsDirect, eh: testDepsIndirect};
	});
var $elm$json$Json$Decode$field = _Json_decodeField;
var $elm$json$Json$Decode$at = F2(
	function (fields, decoder) {
		return A3($elm$core$List$foldr, $elm$json$Json$Decode$field, decoder, fields);
	});
var $elm$json$Json$Decode$fail = _Json_fail;
var $elm$project_metadata_utils$Elm$Version$Version = F3(
	function (a, b, c) {
		return {$: 0, a: a, b: b, c: c};
	});
var $elm$core$Basics$ge = _Utils_ge;
var $elm$project_metadata_utils$Elm$Version$checkNumbers = F3(
	function (major, minor, patch) {
		return ((major >= 0) && ((minor >= 0) && (patch >= 0))) ? $elm$core$Maybe$Just(
			A3($elm$project_metadata_utils$Elm$Version$Version, major, minor, patch)) : $elm$core$Maybe$Nothing;
	});
var $elm$core$String$toInt = _String_toInt;
var $elm$project_metadata_utils$Elm$Version$fromString = function (string) {
	var _v0 = A2(
		$elm$core$List$map,
		$elm$core$String$toInt,
		A2($elm$core$String$split, '.', string));
	if ((((((_v0.b && (!_v0.a.$)) && _v0.b.b) && (!_v0.b.a.$)) && _v0.b.b.b) && (!_v0.b.b.a.$)) && (!_v0.b.b.b.b)) {
		var major = _v0.a.a;
		var _v1 = _v0.b;
		var minor = _v1.a.a;
		var _v2 = _v1.b;
		var patch = _v2.a.a;
		return A3($elm$project_metadata_utils$Elm$Version$checkNumbers, major, minor, patch);
	} else {
		return $elm$core$Maybe$Nothing;
	}
};
var $elm$json$Json$Decode$succeed = _Json_succeed;
var $elm$project_metadata_utils$Elm$Version$decoderHelp = function (string) {
	var _v0 = $elm$project_metadata_utils$Elm$Version$fromString(string);
	if (!_v0.$) {
		var version = _v0.a;
		return $elm$json$Json$Decode$succeed(version);
	} else {
		return $elm$json$Json$Decode$fail('I need a valid version like \"2.0.1\"');
	}
};
var $elm$json$Json$Decode$string = _Json_decodeString;
var $elm$project_metadata_utils$Elm$Version$decoder = A2($elm$json$Json$Decode$andThen, $elm$project_metadata_utils$Elm$Version$decoderHelp, $elm$json$Json$Decode$string);
var $elm$json$Json$Decode$keyValuePairs = _Json_decodeKeyValuePairs;
var $elm$project_metadata_utils$Elm$Package$Name = F2(
	function (a, b) {
		return {$: 0, a: a, b: b};
	});
var $elm$core$String$any = _String_any;
var $elm$core$String$contains = _String_contains;
var $elm$project_metadata_utils$Elm$Package$isBadChar = function (_char) {
	return $elm$core$Char$isUpper(_char) || ((_char === '.') || (_char === '_'));
};
var $elm$project_metadata_utils$Elm$Package$isBadProjectName = function (project) {
	var _v0 = $elm$core$String$uncons(project);
	if (_v0.$ === 1) {
		return true;
	} else {
		var _v1 = _v0.a;
		var c = _v1.a;
		return A2($elm$core$String$contains, '--', project) || (A2($elm$core$String$any, $elm$project_metadata_utils$Elm$Package$isBadChar, project) || (A2($elm$core$String$startsWith, '-', project) || (!$elm$core$Char$isLower(c))));
	}
};
var $elm$project_metadata_utils$Elm$Package$fromString = function (string) {
	var _v0 = A2($elm$core$String$split, '/', string);
	if ((_v0.b && _v0.b.b) && (!_v0.b.b.b)) {
		var author = _v0.a;
		var _v1 = _v0.b;
		var project = _v1.a;
		return $elm$project_metadata_utils$Elm$Package$isBadProjectName(project) ? $elm$core$Maybe$Nothing : $elm$core$Maybe$Just(
			A2($elm$project_metadata_utils$Elm$Package$Name, author, project));
	} else {
		return $elm$core$Maybe$Nothing;
	}
};
var $elm$project_metadata_utils$Elm$Project$verifyDepNames = F2(
	function (revDeps, pairs) {
		verifyDepNames:
		while (true) {
			if (!pairs.b) {
				return $elm$json$Json$Decode$succeed(
					$elm$core$List$reverse(revDeps));
			} else {
				var _v1 = pairs.a;
				var key = _v1.a;
				var con = _v1.b;
				var otherPairs = pairs.b;
				var _v2 = $elm$project_metadata_utils$Elm$Package$fromString(key);
				if (!_v2.$) {
					var pkg = _v2.a;
					var $temp$revDeps = A2(
						$elm$core$List$cons,
						_Utils_Tuple2(pkg, con),
						revDeps),
						$temp$pairs = otherPairs;
					revDeps = $temp$revDeps;
					pairs = $temp$pairs;
					continue verifyDepNames;
				} else {
					return $elm$json$Json$Decode$fail('\"' + (key + '\" is not a valid package name.'));
				}
			}
		}
	});
var $elm$project_metadata_utils$Elm$Project$depsDecoder = function (constraintDecoder) {
	return A2(
		$elm$json$Json$Decode$andThen,
		$elm$project_metadata_utils$Elm$Project$verifyDepNames(_List_Nil),
		$elm$json$Json$Decode$keyValuePairs(constraintDecoder));
};
var $elm$json$Json$Decode$list = _Json_decodeList;
var $elm$json$Json$Decode$map6 = _Json_map6;
var $elm$project_metadata_utils$Elm$Project$applicationDecoder = A7(
	$elm$json$Json$Decode$map6,
	$elm$project_metadata_utils$Elm$Project$ApplicationInfo,
	A2($elm$json$Json$Decode$field, 'elm-version', $elm$project_metadata_utils$Elm$Version$decoder),
	A2(
		$elm$json$Json$Decode$field,
		'source-directories',
		$elm$json$Json$Decode$list($elm$json$Json$Decode$string)),
	A2(
		$elm$json$Json$Decode$at,
		_List_fromArray(
			['dependencies', 'direct']),
		$elm$project_metadata_utils$Elm$Project$depsDecoder($elm$project_metadata_utils$Elm$Version$decoder)),
	A2(
		$elm$json$Json$Decode$at,
		_List_fromArray(
			['dependencies', 'indirect']),
		$elm$project_metadata_utils$Elm$Project$depsDecoder($elm$project_metadata_utils$Elm$Version$decoder)),
	A2(
		$elm$json$Json$Decode$at,
		_List_fromArray(
			['test-dependencies', 'direct']),
		$elm$project_metadata_utils$Elm$Project$depsDecoder($elm$project_metadata_utils$Elm$Version$decoder)),
	A2(
		$elm$json$Json$Decode$at,
		_List_fromArray(
			['test-dependencies', 'indirect']),
		$elm$project_metadata_utils$Elm$Project$depsDecoder($elm$project_metadata_utils$Elm$Version$decoder)));
var $elm$json$Json$Decode$map = _Json_map1;
var $elm$project_metadata_utils$Elm$Project$PackageInfo = F8(
	function (name, summary, license, version, exposed, deps, testDeps, elm) {
		return {dp: deps, cf: elm, dw: exposed, dP: license, fe: name, ea: summary, ef: testDeps, en: version};
	});
var $elm$project_metadata_utils$Elm$Constraint$Constraint = F4(
	function (a, b, c, d) {
		return {$: 0, a: a, b: b, c: c, d: d};
	});
var $elm$project_metadata_utils$Elm$Version$compare = F2(
	function (_v0, _v1) {
		var major1 = _v0.a;
		var minor1 = _v0.b;
		var patch1 = _v0.c;
		var major2 = _v1.a;
		var minor2 = _v1.b;
		var patch2 = _v1.c;
		var _v2 = A2($elm$core$Basics$compare, major1, major2);
		switch (_v2) {
			case 0:
				return 0;
			case 2:
				return 2;
			default:
				var _v3 = A2($elm$core$Basics$compare, minor1, minor2);
				switch (_v3) {
					case 0:
						return 0;
					case 1:
						return A2($elm$core$Basics$compare, patch1, patch2);
					default:
						return 2;
				}
		}
	});
var $elm$project_metadata_utils$Elm$Constraint$checkConstraint = function (constraint) {
	var lower = constraint.a;
	var upper = constraint.d;
	var _v0 = A2($elm$project_metadata_utils$Elm$Version$compare, lower, upper);
	switch (_v0) {
		case 0:
			return $elm$core$Maybe$Just(constraint);
		case 1:
			return $elm$core$Maybe$Just(constraint);
		default:
			return $elm$core$Maybe$Nothing;
	}
};
var $elm$core$Maybe$map4 = F5(
	function (func, ma, mb, mc, md) {
		if (ma.$ === 1) {
			return $elm$core$Maybe$Nothing;
		} else {
			var a = ma.a;
			if (mb.$ === 1) {
				return $elm$core$Maybe$Nothing;
			} else {
				var b = mb.a;
				if (mc.$ === 1) {
					return $elm$core$Maybe$Nothing;
				} else {
					var c = mc.a;
					if (md.$ === 1) {
						return $elm$core$Maybe$Nothing;
					} else {
						var d = md.a;
						return $elm$core$Maybe$Just(
							A4(func, a, b, c, d));
					}
				}
			}
		}
	});
var $elm$project_metadata_utils$Elm$Constraint$LessOrEq = 1;
var $elm$project_metadata_utils$Elm$Constraint$LessThan = 0;
var $elm$project_metadata_utils$Elm$Constraint$opFromString = function (op) {
	switch (op) {
		case '<':
			return $elm$core$Maybe$Just(0);
		case '<=':
			return $elm$core$Maybe$Just(1);
		default:
			return $elm$core$Maybe$Nothing;
	}
};
var $elm$project_metadata_utils$Elm$Constraint$fromString = function (string) {
	var _v0 = A2($elm$core$String$split, ' ', string);
	if ((((((_v0.b && _v0.b.b) && _v0.b.b.b) && (_v0.b.b.a === 'v')) && _v0.b.b.b.b) && _v0.b.b.b.b.b) && (!_v0.b.b.b.b.b.b)) {
		var lower = _v0.a;
		var _v1 = _v0.b;
		var lop = _v1.a;
		var _v2 = _v1.b;
		var _v3 = _v2.b;
		var uop = _v3.a;
		var _v4 = _v3.b;
		var upper = _v4.a;
		return A2(
			$elm$core$Maybe$andThen,
			$elm$project_metadata_utils$Elm$Constraint$checkConstraint,
			A5(
				$elm$core$Maybe$map4,
				$elm$project_metadata_utils$Elm$Constraint$Constraint,
				$elm$project_metadata_utils$Elm$Version$fromString(lower),
				$elm$project_metadata_utils$Elm$Constraint$opFromString(lop),
				$elm$project_metadata_utils$Elm$Constraint$opFromString(uop),
				$elm$project_metadata_utils$Elm$Version$fromString(upper)));
	} else {
		return $elm$core$Maybe$Nothing;
	}
};
var $elm$project_metadata_utils$Elm$Constraint$decoderHelp = function (string) {
	var _v0 = $elm$project_metadata_utils$Elm$Constraint$fromString(string);
	if (!_v0.$) {
		var constraint = _v0.a;
		return $elm$json$Json$Decode$succeed(constraint);
	} else {
		return $elm$json$Json$Decode$fail('I need a valid constraint like \"1.0.0 <= v < 2.0.0\"');
	}
};
var $elm$project_metadata_utils$Elm$Constraint$decoder = A2($elm$json$Json$Decode$andThen, $elm$project_metadata_utils$Elm$Constraint$decoderHelp, $elm$json$Json$Decode$string);
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
var $elm$project_metadata_utils$Elm$License$License = F2(
	function (a, b) {
		return {$: 0, a: a, b: b};
	});
var $elm$project_metadata_utils$Elm$License$osiApprovedSpdxLicenses = _List_fromArray(
	[
		A2($elm$project_metadata_utils$Elm$License$License, 'AFL-1.1', 'Academic Free License v1.1'),
		A2($elm$project_metadata_utils$Elm$License$License, 'AFL-1.2', 'Academic Free License v1.2'),
		A2($elm$project_metadata_utils$Elm$License$License, 'AFL-2.0', 'Academic Free License v2.0'),
		A2($elm$project_metadata_utils$Elm$License$License, 'AFL-2.1', 'Academic Free License v2.1'),
		A2($elm$project_metadata_utils$Elm$License$License, 'AFL-3.0', 'Academic Free License v3.0'),
		A2($elm$project_metadata_utils$Elm$License$License, 'APL-1.0', 'Adaptive Public License 1.0'),
		A2($elm$project_metadata_utils$Elm$License$License, 'Apache-1.1', 'Apache License 1.1'),
		A2($elm$project_metadata_utils$Elm$License$License, 'Apache-2.0', 'Apache License 2.0'),
		A2($elm$project_metadata_utils$Elm$License$License, 'APSL-1.0', 'Apple Public Source License 1.0'),
		A2($elm$project_metadata_utils$Elm$License$License, 'APSL-1.1', 'Apple Public Source License 1.1'),
		A2($elm$project_metadata_utils$Elm$License$License, 'APSL-1.2', 'Apple Public Source License 1.2'),
		A2($elm$project_metadata_utils$Elm$License$License, 'APSL-2.0', 'Apple Public Source License 2.0'),
		A2($elm$project_metadata_utils$Elm$License$License, 'Artistic-1.0', 'Artistic License 1.0'),
		A2($elm$project_metadata_utils$Elm$License$License, 'Artistic-1.0-Perl', 'Artistic License 1.0 (Perl)'),
		A2($elm$project_metadata_utils$Elm$License$License, 'Artistic-1.0-cl8', 'Artistic License 1.0 w/clause 8'),
		A2($elm$project_metadata_utils$Elm$License$License, 'Artistic-2.0', 'Artistic License 2.0'),
		A2($elm$project_metadata_utils$Elm$License$License, 'AAL', 'Attribution Assurance License'),
		A2($elm$project_metadata_utils$Elm$License$License, 'BSL-1.0', 'Boost Software License 1.0'),
		A2($elm$project_metadata_utils$Elm$License$License, 'BSD-2-Clause', 'BSD 2-clause \"Simplified\" License'),
		A2($elm$project_metadata_utils$Elm$License$License, 'BSD-3-Clause', 'BSD 3-clause \"New\" or \"Revised\" License'),
		A2($elm$project_metadata_utils$Elm$License$License, '0BSD', 'BSD Zero Clause License'),
		A2($elm$project_metadata_utils$Elm$License$License, 'CECILL-2.1', 'CeCILL Free Software License Agreement v2.1'),
		A2($elm$project_metadata_utils$Elm$License$License, 'CNRI-Python', 'CNRI Python License'),
		A2($elm$project_metadata_utils$Elm$License$License, 'CDDL-1.0', 'Common Development and Distribution License 1.0'),
		A2($elm$project_metadata_utils$Elm$License$License, 'CPAL-1.0', 'Common Public Attribution License 1.0'),
		A2($elm$project_metadata_utils$Elm$License$License, 'CPL-1.0', 'Common Public License 1.0'),
		A2($elm$project_metadata_utils$Elm$License$License, 'CATOSL-1.1', 'Computer Associates Trusted Open Source License 1.1'),
		A2($elm$project_metadata_utils$Elm$License$License, 'CUA-OPL-1.0', 'CUA Office Public License v1.0'),
		A2($elm$project_metadata_utils$Elm$License$License, 'EPL-1.0', 'Eclipse Public License 1.0'),
		A2($elm$project_metadata_utils$Elm$License$License, 'ECL-1.0', 'Educational Community License v1.0'),
		A2($elm$project_metadata_utils$Elm$License$License, 'ECL-2.0', 'Educational Community License v2.0'),
		A2($elm$project_metadata_utils$Elm$License$License, 'EFL-1.0', 'Eiffel Forum License v1.0'),
		A2($elm$project_metadata_utils$Elm$License$License, 'EFL-2.0', 'Eiffel Forum License v2.0'),
		A2($elm$project_metadata_utils$Elm$License$License, 'Entessa', 'Entessa Public License v1.0'),
		A2($elm$project_metadata_utils$Elm$License$License, 'EUDatagrid', 'EU DataGrid Software License'),
		A2($elm$project_metadata_utils$Elm$License$License, 'EUPL-1.1', 'European Union Public License 1.1'),
		A2($elm$project_metadata_utils$Elm$License$License, 'Fair', 'Fair License'),
		A2($elm$project_metadata_utils$Elm$License$License, 'Frameworx-1.0', 'Frameworx Open License 1.0'),
		A2($elm$project_metadata_utils$Elm$License$License, 'AGPL-3.0', 'GNU Affero General Public License v3.0'),
		A2($elm$project_metadata_utils$Elm$License$License, 'GPL-2.0', 'GNU General Public License v2.0 only'),
		A2($elm$project_metadata_utils$Elm$License$License, 'GPL-3.0', 'GNU General Public License v3.0 only'),
		A2($elm$project_metadata_utils$Elm$License$License, 'LGPL-2.1', 'GNU Lesser General Public License v2.1 only'),
		A2($elm$project_metadata_utils$Elm$License$License, 'LGPL-3.0', 'GNU Lesser General Public License v3.0 only'),
		A2($elm$project_metadata_utils$Elm$License$License, 'LGPL-2.0', 'GNU Library General Public License v2 only'),
		A2($elm$project_metadata_utils$Elm$License$License, 'HPND', 'Historic Permission Notice and Disclaimer'),
		A2($elm$project_metadata_utils$Elm$License$License, 'IPL-1.0', 'IBM Public License v1.0'),
		A2($elm$project_metadata_utils$Elm$License$License, 'Intel', 'Intel Open Source License'),
		A2($elm$project_metadata_utils$Elm$License$License, 'IPA', 'IPA Font License'),
		A2($elm$project_metadata_utils$Elm$License$License, 'ISC', 'ISC License'),
		A2($elm$project_metadata_utils$Elm$License$License, 'LPPL-1.3c', 'LaTeX Project Public License v1.3c'),
		A2($elm$project_metadata_utils$Elm$License$License, 'LiLiQ-P-1.1', 'Licence Libre du Québec – Permissive version 1.1'),
		A2($elm$project_metadata_utils$Elm$License$License, 'LiLiQ-Rplus-1.1', 'Licence Libre du Québec – Réciprocité forte version 1.1'),
		A2($elm$project_metadata_utils$Elm$License$License, 'LiLiQ-R-1.1', 'Licence Libre du Québec – Réciprocité version 1.1'),
		A2($elm$project_metadata_utils$Elm$License$License, 'LPL-1.02', 'Lucent Public License v1.02'),
		A2($elm$project_metadata_utils$Elm$License$License, 'LPL-1.0', 'Lucent Public License Version 1.0'),
		A2($elm$project_metadata_utils$Elm$License$License, 'MS-PL', 'Microsoft Public License'),
		A2($elm$project_metadata_utils$Elm$License$License, 'MS-RL', 'Microsoft Reciprocal License'),
		A2($elm$project_metadata_utils$Elm$License$License, 'MirOS', 'MirOS Licence'),
		A2($elm$project_metadata_utils$Elm$License$License, 'MIT', 'MIT License'),
		A2($elm$project_metadata_utils$Elm$License$License, 'Motosoto', 'Motosoto License'),
		A2($elm$project_metadata_utils$Elm$License$License, 'MPL-1.0', 'Mozilla Public License 1.0'),
		A2($elm$project_metadata_utils$Elm$License$License, 'MPL-1.1', 'Mozilla Public License 1.1'),
		A2($elm$project_metadata_utils$Elm$License$License, 'MPL-2.0', 'Mozilla Public License 2.0'),
		A2($elm$project_metadata_utils$Elm$License$License, 'MPL-2.0-no-copyleft-exception', 'Mozilla Public License 2.0 (no copyleft exception)'),
		A2($elm$project_metadata_utils$Elm$License$License, 'Multics', 'Multics License'),
		A2($elm$project_metadata_utils$Elm$License$License, 'NASA-1.3', 'NASA Open Source Agreement 1.3'),
		A2($elm$project_metadata_utils$Elm$License$License, 'Naumen', 'Naumen Public License'),
		A2($elm$project_metadata_utils$Elm$License$License, 'NGPL', 'Nethack General Public License'),
		A2($elm$project_metadata_utils$Elm$License$License, 'Nokia', 'Nokia Open Source License'),
		A2($elm$project_metadata_utils$Elm$License$License, 'NPOSL-3.0', 'Non-Profit Open Software License 3.0'),
		A2($elm$project_metadata_utils$Elm$License$License, 'NTP', 'NTP License'),
		A2($elm$project_metadata_utils$Elm$License$License, 'OCLC-2.0', 'OCLC Research Public License 2.0'),
		A2($elm$project_metadata_utils$Elm$License$License, 'OGTSL', 'Open Group Test Suite License'),
		A2($elm$project_metadata_utils$Elm$License$License, 'OSL-1.0', 'Open Software License 1.0'),
		A2($elm$project_metadata_utils$Elm$License$License, 'OSL-2.0', 'Open Software License 2.0'),
		A2($elm$project_metadata_utils$Elm$License$License, 'OSL-2.1', 'Open Software License 2.1'),
		A2($elm$project_metadata_utils$Elm$License$License, 'OSL-3.0', 'Open Software License 3.0'),
		A2($elm$project_metadata_utils$Elm$License$License, 'OSET-PL-2.1', 'OSET Public License version 2.1'),
		A2($elm$project_metadata_utils$Elm$License$License, 'PHP-3.0', 'PHP License v3.0'),
		A2($elm$project_metadata_utils$Elm$License$License, 'PostgreSQL', 'PostgreSQL License'),
		A2($elm$project_metadata_utils$Elm$License$License, 'Python-2.0', 'Python License 2.0'),
		A2($elm$project_metadata_utils$Elm$License$License, 'QPL-1.0', 'Q Public License 1.0'),
		A2($elm$project_metadata_utils$Elm$License$License, 'RPSL-1.0', 'RealNetworks Public Source License v1.0'),
		A2($elm$project_metadata_utils$Elm$License$License, 'RPL-1.1', 'Reciprocal Public License 1.1'),
		A2($elm$project_metadata_utils$Elm$License$License, 'RPL-1.5', 'Reciprocal Public License 1.5'),
		A2($elm$project_metadata_utils$Elm$License$License, 'RSCPL', 'Ricoh Source Code Public License'),
		A2($elm$project_metadata_utils$Elm$License$License, 'OFL-1.1', 'SIL Open Font License 1.1'),
		A2($elm$project_metadata_utils$Elm$License$License, 'SimPL-2.0', 'Simple Public License 2.0'),
		A2($elm$project_metadata_utils$Elm$License$License, 'Sleepycat', 'Sleepycat License'),
		A2($elm$project_metadata_utils$Elm$License$License, 'SISSL', 'Sun Industry Standards Source License v1.1'),
		A2($elm$project_metadata_utils$Elm$License$License, 'SPL-1.0', 'Sun Public License v1.0'),
		A2($elm$project_metadata_utils$Elm$License$License, 'Watcom-1.0', 'Sybase Open Watcom Public License 1.0'),
		A2($elm$project_metadata_utils$Elm$License$License, 'UPL-1.0', 'Universal Permissive License v1.0'),
		A2($elm$project_metadata_utils$Elm$License$License, 'NCSA', 'University of Illinois/NCSA Open Source License'),
		A2($elm$project_metadata_utils$Elm$License$License, 'VSL-1.0', 'Vovida Software License v1.0'),
		A2($elm$project_metadata_utils$Elm$License$License, 'W3C', 'W3C Software Notice and License (2002-12-31)'),
		A2($elm$project_metadata_utils$Elm$License$License, 'Xnet', 'X.Net License'),
		A2($elm$project_metadata_utils$Elm$License$License, 'Zlib', 'zlib License'),
		A2($elm$project_metadata_utils$Elm$License$License, 'ZPL-2.0', 'Zope Public License 2.0')
	]);
var $elm$project_metadata_utils$Elm$License$spdxDict = $elm$core$Dict$fromList(
	A2(
		$elm$core$List$map,
		function (license) {
			var abbr = license.a;
			return _Utils_Tuple2(abbr, license);
		},
		$elm$project_metadata_utils$Elm$License$osiApprovedSpdxLicenses));
var $elm$project_metadata_utils$Elm$License$fromString = function (string) {
	return A2($elm$core$Dict$get, string, $elm$project_metadata_utils$Elm$License$spdxDict);
};
var $elm$project_metadata_utils$Elm$License$decoderHelp = function (string) {
	var _v0 = $elm$project_metadata_utils$Elm$License$fromString(string);
	if (!_v0.$) {
		var license = _v0.a;
		return $elm$json$Json$Decode$succeed(license);
	} else {
		return $elm$json$Json$Decode$fail('I need an OSI approved license in SPDX format <https://spdx.org/licenses/>');
	}
};
var $elm$project_metadata_utils$Elm$License$decoder = A2($elm$json$Json$Decode$andThen, $elm$project_metadata_utils$Elm$License$decoderHelp, $elm$json$Json$Decode$string);
var $elm$project_metadata_utils$Elm$Package$decoderHelp = function (string) {
	var _v0 = $elm$project_metadata_utils$Elm$Package$fromString(string);
	if (!_v0.$) {
		var name = _v0.a;
		return $elm$json$Json$Decode$succeed(name);
	} else {
		return $elm$json$Json$Decode$fail('I need a valid package name like \"elm/core\"');
	}
};
var $elm$project_metadata_utils$Elm$Package$decoder = A2($elm$json$Json$Decode$andThen, $elm$project_metadata_utils$Elm$Package$decoderHelp, $elm$json$Json$Decode$string);
var $elm$project_metadata_utils$Elm$Project$ExposedDict = function (a) {
	return {$: 1, a: a};
};
var $elm$project_metadata_utils$Elm$Project$ExposedList = function (a) {
	return {$: 0, a: a};
};
var $elm$project_metadata_utils$Elm$Project$checkHeaders = function (dict) {
	checkHeaders:
	while (true) {
		if (!dict.b) {
			return $elm$core$Maybe$Nothing;
		} else {
			var _v1 = dict.a;
			var header = _v1.a;
			var others = dict.b;
			if ($elm$core$String$length(header) < 20) {
				var $temp$dict = others;
				dict = $temp$dict;
				continue checkHeaders;
			} else {
				return $elm$core$Maybe$Just(header);
			}
		}
	}
};
var $elm$project_metadata_utils$Elm$Project$checkExposedDict = function (dict) {
	var _v0 = $elm$project_metadata_utils$Elm$Project$checkHeaders(dict);
	if (_v0.$ === 1) {
		return $elm$json$Json$Decode$succeed(dict);
	} else {
		var badHeader = _v0.a;
		return $elm$json$Json$Decode$fail('The \"' + (badHeader + '\" header is too long. Twenty characters max!'));
	}
};
var $elm$project_metadata_utils$Elm$Module$Name = $elm$core$Basics$identity;
var $elm$project_metadata_utils$Elm$Module$isInner = function (_char) {
	return $elm$core$Char$isAlphaNum(_char) || (_char === '_');
};
var $elm$project_metadata_utils$Elm$Module$isGoodChunk = function (chunk) {
	var _v0 = $elm$core$String$uncons(chunk);
	if (_v0.$ === 1) {
		return false;
	} else {
		var _v1 = _v0.a;
		var _char = _v1.a;
		var rest = _v1.b;
		return $elm$core$Char$isUpper(_char) && A2($elm$core$String$all, $elm$project_metadata_utils$Elm$Module$isInner, rest);
	}
};
var $elm$project_metadata_utils$Elm$Module$fromString = function (string) {
	return A2(
		$elm$core$List$all,
		$elm$project_metadata_utils$Elm$Module$isGoodChunk,
		A2($elm$core$String$split, '.', string)) ? $elm$core$Maybe$Just(string) : $elm$core$Maybe$Nothing;
};
var $elm$project_metadata_utils$Elm$Module$decoderHelp = function (string) {
	var _v0 = $elm$project_metadata_utils$Elm$Module$fromString(string);
	if (!_v0.$) {
		var name = _v0.a;
		return $elm$json$Json$Decode$succeed(name);
	} else {
		return $elm$json$Json$Decode$fail('I need a valid module name like \"Json.Decode\"');
	}
};
var $elm$project_metadata_utils$Elm$Module$decoder = A2($elm$json$Json$Decode$andThen, $elm$project_metadata_utils$Elm$Module$decoderHelp, $elm$json$Json$Decode$string);
var $elm$json$Json$Decode$oneOf = _Json_oneOf;
var $elm$project_metadata_utils$Elm$Project$exposedDecoder = $elm$json$Json$Decode$oneOf(
	_List_fromArray(
		[
			A2(
			$elm$json$Json$Decode$map,
			$elm$project_metadata_utils$Elm$Project$ExposedList,
			$elm$json$Json$Decode$list($elm$project_metadata_utils$Elm$Module$decoder)),
			A2(
			$elm$json$Json$Decode$map,
			$elm$project_metadata_utils$Elm$Project$ExposedDict,
			A2(
				$elm$json$Json$Decode$andThen,
				$elm$project_metadata_utils$Elm$Project$checkExposedDict,
				$elm$json$Json$Decode$keyValuePairs(
					$elm$json$Json$Decode$list($elm$project_metadata_utils$Elm$Module$decoder))))
		]));
var $elm$json$Json$Decode$map8 = _Json_map8;
var $elm$project_metadata_utils$Elm$Project$summaryCheck = function (summary) {
	return ($elm$core$String$length(summary) < 80) ? $elm$json$Json$Decode$succeed(summary) : $elm$json$Json$Decode$fail('The \"summary\" field must have fewer than 80 characters.');
};
var $elm$project_metadata_utils$Elm$Project$summaryDecoder = A2($elm$json$Json$Decode$andThen, $elm$project_metadata_utils$Elm$Project$summaryCheck, $elm$json$Json$Decode$string);
var $elm$project_metadata_utils$Elm$Project$packageDecoder = A9(
	$elm$json$Json$Decode$map8,
	$elm$project_metadata_utils$Elm$Project$PackageInfo,
	A2($elm$json$Json$Decode$field, 'name', $elm$project_metadata_utils$Elm$Package$decoder),
	A2($elm$json$Json$Decode$field, 'summary', $elm$project_metadata_utils$Elm$Project$summaryDecoder),
	A2($elm$json$Json$Decode$field, 'license', $elm$project_metadata_utils$Elm$License$decoder),
	A2($elm$json$Json$Decode$field, 'version', $elm$project_metadata_utils$Elm$Version$decoder),
	A2($elm$json$Json$Decode$field, 'exposed-modules', $elm$project_metadata_utils$Elm$Project$exposedDecoder),
	A2(
		$elm$json$Json$Decode$field,
		'dependencies',
		$elm$project_metadata_utils$Elm$Project$depsDecoder($elm$project_metadata_utils$Elm$Constraint$decoder)),
	A2(
		$elm$json$Json$Decode$field,
		'test-dependencies',
		$elm$project_metadata_utils$Elm$Project$depsDecoder($elm$project_metadata_utils$Elm$Constraint$decoder)),
	A2($elm$json$Json$Decode$field, 'elm-version', $elm$project_metadata_utils$Elm$Constraint$decoder));
var $elm$project_metadata_utils$Elm$Project$decoderHelp = function (tipe) {
	switch (tipe) {
		case 'application':
			return A2($elm$json$Json$Decode$map, $elm$project_metadata_utils$Elm$Project$Application, $elm$project_metadata_utils$Elm$Project$applicationDecoder);
		case 'package':
			return A2($elm$json$Json$Decode$map, $elm$project_metadata_utils$Elm$Project$Package, $elm$project_metadata_utils$Elm$Project$packageDecoder);
		default:
			var other = tipe;
			return $elm$json$Json$Decode$fail('The "type" field must be either "application" or "package", so ' + ('\"' + (other + '\" is not acceptable.')));
	}
};
var $elm$project_metadata_utils$Elm$Project$decoder = A2(
	$elm$json$Json$Decode$andThen,
	$elm$project_metadata_utils$Elm$Project$decoderHelp,
	A2($elm$json$Json$Decode$field, 'type', $elm$json$Json$Decode$string));
var $elm$core$List$concat = function (lists) {
  if (!lists.b) {
    return _List_Nil;
  }
  var tmp = _List_Cons(undefined, _List_Nil);
  var end = tmp;
  for (; lists.b.b; lists = lists.b) {
    var xs = lists.a;
    for (; xs.b; xs = xs.b) {
      var next = _List_Cons(xs.a, _List_Nil);
      end.b = next;
      end = next;
    }
  }
  end.b = lists.a;

  return tmp.b;
};
var $elm$core$String$fromList = _String_fromList;
var $elm$core$String$foldr = _String_foldr;
var $elm$core$String$toList = function (string) {
	return A3($elm$core$String$foldr, $elm$core$List$cons, _List_Nil, string);
};
var $jfmengels$elm_review$Unicode$dropLeft = F2(
	function (n, string) {
		return $elm$core$String$fromList(
			A2(
				$elm$core$List$drop,
				n,
				$elm$core$String$toList(string)));
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
					{F: nodeList, B: nodeListSize, D: jsArray});
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
var $elm$core$Array$bitMask = 4294967295 >>> (32 - $elm$core$Array$shiftStep);
var $elm$core$Elm$JsArray$unsafeGet = _JsArray_unsafeGet;
var $elm$core$Array$getHelp = F3(
	function (shift, index, tree) {
		getHelp:
		while (true) {
			var pos = $elm$core$Array$bitMask & (index >>> shift);
			var _v0 = A2($elm$core$Elm$JsArray$unsafeGet, pos, tree);
			if (!_v0.$) {
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
var $elm$core$String$trim = _String_trim;
var $jfmengels$elm_review$Review$Fix$Internal$getRowAtLine = F2(
	function (lines, rowIndex) {
		var _v0 = A2(
			$elm$core$Array$get,
			rowIndex,
			$elm$core$Array$fromList(lines));
		if (!_v0.$) {
			var line = _v0.a;
			return ($elm$core$String$trim(line) !== '') ? line : '';
		} else {
			return '';
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
var $elm$core$List$take = F2(function(n, xs) {
  var tmp = _List_Cons(undefined, _List_Nil);
  var end = tmp;
  for (var i = 0; i < n && xs.b; xs = xs.b, i++) {
    var next = _List_Cons(xs.a, _List_Nil);
    end.b = next;
    end = next;
  }
  return tmp.b;
});
var $jfmengels$elm_review$Unicode$left = F2(
	function (n, string) {
		return $elm$core$String$fromList(
			A2(
				$elm$core$List$take,
				n,
				$elm$core$String$toList(string)));
	});
var $elm$core$String$lines = _String_lines;
var $jfmengels$elm_review$Review$Fix$Internal$applyReplace = F3(
	function (range, replacement, lines) {
		var startLine = A2(
			$jfmengels$elm_review$Unicode$left,
			range.bQ.eF - 1,
			A2($jfmengels$elm_review$Review$Fix$Internal$getRowAtLine, lines, range.bQ.d0 - 1));
		var linesBefore = A2($elm$core$List$take, range.bQ.d0 - 1, lines);
		var linesAfter = A2($elm$core$List$drop, range.bu.d0, lines);
		var endLine = A2(
			$jfmengels$elm_review$Unicode$dropLeft,
			range.bu.eF - 1,
			A2($jfmengels$elm_review$Review$Fix$Internal$getRowAtLine, lines, range.bu.d0 - 1));
		return $elm$core$List$concat(
			_List_fromArray(
				[
					linesBefore,
					$elm$core$String$lines(
					_Utils_ap(
						startLine,
						_Utils_ap(replacement, endLine))),
					linesAfter
				]));
	});
var $jfmengels$elm_review$Review$Fix$Internal$applyFix = F2(
	function (fix_, lines) {
		switch (fix_.$) {
			case 1:
				var range = fix_.a;
				var replacement = fix_.b;
				return A3($jfmengels$elm_review$Review$Fix$Internal$applyReplace, range, replacement, lines);
			case 0:
				var range = fix_.a;
				return A3($jfmengels$elm_review$Review$Fix$Internal$applyReplace, range, '', lines);
			default:
				var position = fix_.a;
				var insertion = fix_.b;
				return A3(
					$jfmengels$elm_review$Review$Fix$Internal$applyReplace,
					{bu: position, bQ: position},
					insertion,
					lines);
		}
	});
var $jfmengels$elm_review$Vendor$ListExtra$anyCombination = F2(
	function (predicate, xs) {
		anyCombination:
		while (true) {
			if (!xs.b) {
				return false;
			} else {
				var x = xs.a;
				var xs_ = xs.b;
				if (A2(
					$elm$core$List$any,
					function (y) {
						return A2(predicate, x, y);
					},
					xs_)) {
					return true;
				} else {
					var $temp$predicate = predicate,
						$temp$xs = xs_;
					predicate = $temp$predicate;
					xs = $temp$xs;
					continue anyCombination;
				}
			}
		}
	});
var $jfmengels$elm_review$Review$Fix$Internal$comparePosition = F2(
	function (a, b) {
		var _v0 = A2($elm$core$Basics$compare, a.d0, b.d0);
		if (_v0 === 1) {
			return A2($elm$core$Basics$compare, a.eF, b.eF);
		} else {
			var order = _v0;
			return order;
		}
	});
var $jfmengels$elm_review$Review$Fix$Internal$collide = F2(
	function (a, b) {
		var _v0 = A2($jfmengels$elm_review$Review$Fix$Internal$comparePosition, a.bu, b.bQ);
		switch (_v0) {
			case 0:
				return false;
			case 1:
				return false;
			default:
				var _v1 = A2($jfmengels$elm_review$Review$Fix$Internal$comparePosition, b.bu, a.bQ);
				switch (_v1) {
					case 0:
						return false;
					case 1:
						return false;
					default:
						return true;
				}
		}
	});
var $jfmengels$elm_review$Review$Fix$Internal$getFixRange = function (fix_) {
	switch (fix_.$) {
		case 1:
			var range = fix_.a;
			return range;
		case 0:
			var range = fix_.a;
			return range;
		default:
			var position = fix_.a;
			return {bu: position, bQ: position};
	}
};
var $jfmengels$elm_review$Review$Fix$Internal$containRangeCollisions = function (fixes) {
	return A2(
		$jfmengels$elm_review$Vendor$ListExtra$anyCombination,
		$jfmengels$elm_review$Review$Fix$Internal$collide,
		A2($elm$core$List$map, $jfmengels$elm_review$Review$Fix$Internal$getFixRange, fixes));
};
var $jfmengels$elm_review$Review$Fix$Internal$positionAsInt = function (_v0) {
	var row = _v0.d0;
	var column = _v0.eF;
	return (row * 1000000) + column;
};
var $jfmengels$elm_review$Review$Fix$Internal$rangePosition = function (fix_) {
	return $jfmengels$elm_review$Review$Fix$Internal$positionAsInt(
		function () {
			switch (fix_.$) {
				case 1:
					var range = fix_.a;
					return range.bQ;
				case 0:
					var range = fix_.a;
					return range.bQ;
				default:
					var position = fix_.a;
					return position;
			}
		}());
};
var $jfmengels$elm_review$Review$Fix$Internal$tryToApplyFix = F2(
	function (fixes, sourceCode) {
		if ($jfmengels$elm_review$Review$Fix$Internal$containRangeCollisions(fixes)) {
			return $elm$core$Maybe$Nothing;
		} else {
			var resultAfterFix = A2(
				$elm$core$String$join,
				'\n',
				A3(
					$elm$core$List$foldl,
					$jfmengels$elm_review$Review$Fix$Internal$applyFix,
					$elm$core$String$lines(sourceCode),
					A2(
						$elm$core$List$sortBy,
						A2($elm$core$Basics$composeR, $jfmengels$elm_review$Review$Fix$Internal$rangePosition, $elm$core$Basics$negate),
						fixes)));
			return _Utils_eq(sourceCode, resultAfterFix) ? $elm$core$Maybe$Nothing : $elm$core$Maybe$Just(resultAfterFix);
		}
	});
var $jfmengels$elm_review$Review$Fix$Internal$fixElmJson = F2(
	function (fixes, originalSourceCode) {
		var _v0 = A2($jfmengels$elm_review$Review$Fix$Internal$tryToApplyFix, fixes, originalSourceCode);
		if (!_v0.$) {
			var resultAfterFix = _v0.a;
			var _v1 = A2($elm$json$Json$Decode$decodeString, $elm$project_metadata_utils$Elm$Project$decoder, resultAfterFix);
			if (!_v1.$) {
				var project = _v1.a;
				return $elm$core$Maybe$Just(
					{e: project, bN: resultAfterFix});
			} else {
				return $elm$core$Maybe$Nothing;
			}
		} else {
			return $elm$core$Maybe$Nothing;
		}
	});
var $stil4m$elm_syntax$Elm$Processing$ProcessContext = $elm$core$Basics$identity;
var $stil4m$elm_syntax$Elm$Processing$addDependency = F2(
	function (dep, _v0) {
		var x = _v0;
		return A2($elm$core$Dict$union, dep.cV, x);
	});
var $stil4m$elm_syntax$Elm$Syntax$Infix$Left = 0;
var $stil4m$elm_syntax$Elm$Syntax$Infix$Non = 2;
var $stil4m$elm_syntax$Elm$Interface$Operator = function (a) {
	return {$: 3, a: a};
};
var $stil4m$elm_syntax$Elm$Syntax$Infix$Right = 1;
var $jfmengels$elm_review$Review$Dependencies$elmCore = {
	cV: $elm$core$Dict$fromList(
		_List_fromArray(
			[
				_Utils_Tuple2(
				_List_fromArray(
					['Basics']),
				_List_fromArray(
					[
						$stil4m$elm_syntax$Elm$Interface$Operator(
						{
							eM: A2($stil4m$elm_syntax$Elm$Syntax$Node$Node, $stil4m$elm_syntax$Elm$Syntax$Range$emptyRange, 1),
							e_: A2($stil4m$elm_syntax$Elm$Syntax$Node$Node, $stil4m$elm_syntax$Elm$Syntax$Range$emptyRange, 'apL'),
							fp: A2($stil4m$elm_syntax$Elm$Syntax$Node$Node, $stil4m$elm_syntax$Elm$Syntax$Range$emptyRange, '<|'),
							ft: A2($stil4m$elm_syntax$Elm$Syntax$Node$Node, $stil4m$elm_syntax$Elm$Syntax$Range$emptyRange, 0)
						}),
						$stil4m$elm_syntax$Elm$Interface$Operator(
						{
							eM: A2($stil4m$elm_syntax$Elm$Syntax$Node$Node, $stil4m$elm_syntax$Elm$Syntax$Range$emptyRange, 0),
							e_: A2($stil4m$elm_syntax$Elm$Syntax$Node$Node, $stil4m$elm_syntax$Elm$Syntax$Range$emptyRange, 'apR'),
							fp: A2($stil4m$elm_syntax$Elm$Syntax$Node$Node, $stil4m$elm_syntax$Elm$Syntax$Range$emptyRange, '|>'),
							ft: A2($stil4m$elm_syntax$Elm$Syntax$Node$Node, $stil4m$elm_syntax$Elm$Syntax$Range$emptyRange, 0)
						}),
						$stil4m$elm_syntax$Elm$Interface$Operator(
						{
							eM: A2($stil4m$elm_syntax$Elm$Syntax$Node$Node, $stil4m$elm_syntax$Elm$Syntax$Range$emptyRange, 1),
							e_: A2($stil4m$elm_syntax$Elm$Syntax$Node$Node, $stil4m$elm_syntax$Elm$Syntax$Range$emptyRange, 'or'),
							fp: A2($stil4m$elm_syntax$Elm$Syntax$Node$Node, $stil4m$elm_syntax$Elm$Syntax$Range$emptyRange, '||'),
							ft: A2($stil4m$elm_syntax$Elm$Syntax$Node$Node, $stil4m$elm_syntax$Elm$Syntax$Range$emptyRange, 2)
						}),
						$stil4m$elm_syntax$Elm$Interface$Operator(
						{
							eM: A2($stil4m$elm_syntax$Elm$Syntax$Node$Node, $stil4m$elm_syntax$Elm$Syntax$Range$emptyRange, 1),
							e_: A2($stil4m$elm_syntax$Elm$Syntax$Node$Node, $stil4m$elm_syntax$Elm$Syntax$Range$emptyRange, 'and'),
							fp: A2($stil4m$elm_syntax$Elm$Syntax$Node$Node, $stil4m$elm_syntax$Elm$Syntax$Range$emptyRange, '&&'),
							ft: A2($stil4m$elm_syntax$Elm$Syntax$Node$Node, $stil4m$elm_syntax$Elm$Syntax$Range$emptyRange, 3)
						}),
						$stil4m$elm_syntax$Elm$Interface$Operator(
						{
							eM: A2($stil4m$elm_syntax$Elm$Syntax$Node$Node, $stil4m$elm_syntax$Elm$Syntax$Range$emptyRange, 2),
							e_: A2($stil4m$elm_syntax$Elm$Syntax$Node$Node, $stil4m$elm_syntax$Elm$Syntax$Range$emptyRange, 'eq'),
							fp: A2($stil4m$elm_syntax$Elm$Syntax$Node$Node, $stil4m$elm_syntax$Elm$Syntax$Range$emptyRange, '=='),
							ft: A2($stil4m$elm_syntax$Elm$Syntax$Node$Node, $stil4m$elm_syntax$Elm$Syntax$Range$emptyRange, 4)
						}),
						$stil4m$elm_syntax$Elm$Interface$Operator(
						{
							eM: A2($stil4m$elm_syntax$Elm$Syntax$Node$Node, $stil4m$elm_syntax$Elm$Syntax$Range$emptyRange, 2),
							e_: A2($stil4m$elm_syntax$Elm$Syntax$Node$Node, $stil4m$elm_syntax$Elm$Syntax$Range$emptyRange, 'neq'),
							fp: A2($stil4m$elm_syntax$Elm$Syntax$Node$Node, $stil4m$elm_syntax$Elm$Syntax$Range$emptyRange, '/='),
							ft: A2($stil4m$elm_syntax$Elm$Syntax$Node$Node, $stil4m$elm_syntax$Elm$Syntax$Range$emptyRange, 4)
						}),
						$stil4m$elm_syntax$Elm$Interface$Operator(
						{
							eM: A2($stil4m$elm_syntax$Elm$Syntax$Node$Node, $stil4m$elm_syntax$Elm$Syntax$Range$emptyRange, 2),
							e_: A2($stil4m$elm_syntax$Elm$Syntax$Node$Node, $stil4m$elm_syntax$Elm$Syntax$Range$emptyRange, 'lt'),
							fp: A2($stil4m$elm_syntax$Elm$Syntax$Node$Node, $stil4m$elm_syntax$Elm$Syntax$Range$emptyRange, '<'),
							ft: A2($stil4m$elm_syntax$Elm$Syntax$Node$Node, $stil4m$elm_syntax$Elm$Syntax$Range$emptyRange, 4)
						}),
						$stil4m$elm_syntax$Elm$Interface$Operator(
						{
							eM: A2($stil4m$elm_syntax$Elm$Syntax$Node$Node, $stil4m$elm_syntax$Elm$Syntax$Range$emptyRange, 2),
							e_: A2($stil4m$elm_syntax$Elm$Syntax$Node$Node, $stil4m$elm_syntax$Elm$Syntax$Range$emptyRange, 'gt'),
							fp: A2($stil4m$elm_syntax$Elm$Syntax$Node$Node, $stil4m$elm_syntax$Elm$Syntax$Range$emptyRange, '>'),
							ft: A2($stil4m$elm_syntax$Elm$Syntax$Node$Node, $stil4m$elm_syntax$Elm$Syntax$Range$emptyRange, 4)
						}),
						$stil4m$elm_syntax$Elm$Interface$Operator(
						{
							eM: A2($stil4m$elm_syntax$Elm$Syntax$Node$Node, $stil4m$elm_syntax$Elm$Syntax$Range$emptyRange, 2),
							e_: A2($stil4m$elm_syntax$Elm$Syntax$Node$Node, $stil4m$elm_syntax$Elm$Syntax$Range$emptyRange, 'le'),
							fp: A2($stil4m$elm_syntax$Elm$Syntax$Node$Node, $stil4m$elm_syntax$Elm$Syntax$Range$emptyRange, '<='),
							ft: A2($stil4m$elm_syntax$Elm$Syntax$Node$Node, $stil4m$elm_syntax$Elm$Syntax$Range$emptyRange, 4)
						}),
						$stil4m$elm_syntax$Elm$Interface$Operator(
						{
							eM: A2($stil4m$elm_syntax$Elm$Syntax$Node$Node, $stil4m$elm_syntax$Elm$Syntax$Range$emptyRange, 2),
							e_: A2($stil4m$elm_syntax$Elm$Syntax$Node$Node, $stil4m$elm_syntax$Elm$Syntax$Range$emptyRange, 'ge'),
							fp: A2($stil4m$elm_syntax$Elm$Syntax$Node$Node, $stil4m$elm_syntax$Elm$Syntax$Range$emptyRange, '>='),
							ft: A2($stil4m$elm_syntax$Elm$Syntax$Node$Node, $stil4m$elm_syntax$Elm$Syntax$Range$emptyRange, 4)
						}),
						$stil4m$elm_syntax$Elm$Interface$Operator(
						{
							eM: A2($stil4m$elm_syntax$Elm$Syntax$Node$Node, $stil4m$elm_syntax$Elm$Syntax$Range$emptyRange, 1),
							e_: A2($stil4m$elm_syntax$Elm$Syntax$Node$Node, $stil4m$elm_syntax$Elm$Syntax$Range$emptyRange, 'append'),
							fp: A2($stil4m$elm_syntax$Elm$Syntax$Node$Node, $stil4m$elm_syntax$Elm$Syntax$Range$emptyRange, '++'),
							ft: A2($stil4m$elm_syntax$Elm$Syntax$Node$Node, $stil4m$elm_syntax$Elm$Syntax$Range$emptyRange, 5)
						}),
						$stil4m$elm_syntax$Elm$Interface$Operator(
						{
							eM: A2($stil4m$elm_syntax$Elm$Syntax$Node$Node, $stil4m$elm_syntax$Elm$Syntax$Range$emptyRange, 0),
							e_: A2($stil4m$elm_syntax$Elm$Syntax$Node$Node, $stil4m$elm_syntax$Elm$Syntax$Range$emptyRange, 'add'),
							fp: A2($stil4m$elm_syntax$Elm$Syntax$Node$Node, $stil4m$elm_syntax$Elm$Syntax$Range$emptyRange, '+'),
							ft: A2($stil4m$elm_syntax$Elm$Syntax$Node$Node, $stil4m$elm_syntax$Elm$Syntax$Range$emptyRange, 6)
						}),
						$stil4m$elm_syntax$Elm$Interface$Operator(
						{
							eM: A2($stil4m$elm_syntax$Elm$Syntax$Node$Node, $stil4m$elm_syntax$Elm$Syntax$Range$emptyRange, 0),
							e_: A2($stil4m$elm_syntax$Elm$Syntax$Node$Node, $stil4m$elm_syntax$Elm$Syntax$Range$emptyRange, 'sub'),
							fp: A2($stil4m$elm_syntax$Elm$Syntax$Node$Node, $stil4m$elm_syntax$Elm$Syntax$Range$emptyRange, '-'),
							ft: A2($stil4m$elm_syntax$Elm$Syntax$Node$Node, $stil4m$elm_syntax$Elm$Syntax$Range$emptyRange, 6)
						}),
						$stil4m$elm_syntax$Elm$Interface$Operator(
						{
							eM: A2($stil4m$elm_syntax$Elm$Syntax$Node$Node, $stil4m$elm_syntax$Elm$Syntax$Range$emptyRange, 0),
							e_: A2($stil4m$elm_syntax$Elm$Syntax$Node$Node, $stil4m$elm_syntax$Elm$Syntax$Range$emptyRange, 'mul'),
							fp: A2($stil4m$elm_syntax$Elm$Syntax$Node$Node, $stil4m$elm_syntax$Elm$Syntax$Range$emptyRange, '*'),
							ft: A2($stil4m$elm_syntax$Elm$Syntax$Node$Node, $stil4m$elm_syntax$Elm$Syntax$Range$emptyRange, 7)
						}),
						$stil4m$elm_syntax$Elm$Interface$Operator(
						{
							eM: A2($stil4m$elm_syntax$Elm$Syntax$Node$Node, $stil4m$elm_syntax$Elm$Syntax$Range$emptyRange, 0),
							e_: A2($stil4m$elm_syntax$Elm$Syntax$Node$Node, $stil4m$elm_syntax$Elm$Syntax$Range$emptyRange, 'fdiv'),
							fp: A2($stil4m$elm_syntax$Elm$Syntax$Node$Node, $stil4m$elm_syntax$Elm$Syntax$Range$emptyRange, '/'),
							ft: A2($stil4m$elm_syntax$Elm$Syntax$Node$Node, $stil4m$elm_syntax$Elm$Syntax$Range$emptyRange, 7)
						}),
						$stil4m$elm_syntax$Elm$Interface$Operator(
						{
							eM: A2($stil4m$elm_syntax$Elm$Syntax$Node$Node, $stil4m$elm_syntax$Elm$Syntax$Range$emptyRange, 0),
							e_: A2($stil4m$elm_syntax$Elm$Syntax$Node$Node, $stil4m$elm_syntax$Elm$Syntax$Range$emptyRange, 'idiv'),
							fp: A2($stil4m$elm_syntax$Elm$Syntax$Node$Node, $stil4m$elm_syntax$Elm$Syntax$Range$emptyRange, '//'),
							ft: A2($stil4m$elm_syntax$Elm$Syntax$Node$Node, $stil4m$elm_syntax$Elm$Syntax$Range$emptyRange, 7)
						}),
						$stil4m$elm_syntax$Elm$Interface$Operator(
						{
							eM: A2($stil4m$elm_syntax$Elm$Syntax$Node$Node, $stil4m$elm_syntax$Elm$Syntax$Range$emptyRange, 1),
							e_: A2($stil4m$elm_syntax$Elm$Syntax$Node$Node, $stil4m$elm_syntax$Elm$Syntax$Range$emptyRange, 'pow'),
							fp: A2($stil4m$elm_syntax$Elm$Syntax$Node$Node, $stil4m$elm_syntax$Elm$Syntax$Range$emptyRange, '^'),
							ft: A2($stil4m$elm_syntax$Elm$Syntax$Node$Node, $stil4m$elm_syntax$Elm$Syntax$Range$emptyRange, 8)
						}),
						$stil4m$elm_syntax$Elm$Interface$Operator(
						{
							eM: A2($stil4m$elm_syntax$Elm$Syntax$Node$Node, $stil4m$elm_syntax$Elm$Syntax$Range$emptyRange, 0),
							e_: A2($stil4m$elm_syntax$Elm$Syntax$Node$Node, $stil4m$elm_syntax$Elm$Syntax$Range$emptyRange, 'composeL'),
							fp: A2($stil4m$elm_syntax$Elm$Syntax$Node$Node, $stil4m$elm_syntax$Elm$Syntax$Range$emptyRange, '<<'),
							ft: A2($stil4m$elm_syntax$Elm$Syntax$Node$Node, $stil4m$elm_syntax$Elm$Syntax$Range$emptyRange, 9)
						}),
						$stil4m$elm_syntax$Elm$Interface$Operator(
						{
							eM: A2($stil4m$elm_syntax$Elm$Syntax$Node$Node, $stil4m$elm_syntax$Elm$Syntax$Range$emptyRange, 1),
							e_: A2($stil4m$elm_syntax$Elm$Syntax$Node$Node, $stil4m$elm_syntax$Elm$Syntax$Range$emptyRange, 'composeR'),
							fp: A2($stil4m$elm_syntax$Elm$Syntax$Node$Node, $stil4m$elm_syntax$Elm$Syntax$Range$emptyRange, '>>'),
							ft: A2($stil4m$elm_syntax$Elm$Syntax$Node$Node, $stil4m$elm_syntax$Elm$Syntax$Range$emptyRange, 9)
						})
					])),
				_Utils_Tuple2(
				_List_fromArray(
					['List']),
				_List_fromArray(
					[
						$stil4m$elm_syntax$Elm$Interface$Operator(
						{
							eM: A2($stil4m$elm_syntax$Elm$Syntax$Node$Node, $stil4m$elm_syntax$Elm$Syntax$Range$emptyRange, 1),
							e_: A2($stil4m$elm_syntax$Elm$Syntax$Node$Node, $stil4m$elm_syntax$Elm$Syntax$Range$emptyRange, 'cons'),
							fp: A2($stil4m$elm_syntax$Elm$Syntax$Node$Node, $stil4m$elm_syntax$Elm$Syntax$Range$emptyRange, '::'),
							ft: A2($stil4m$elm_syntax$Elm$Syntax$Node$Node, $stil4m$elm_syntax$Elm$Syntax$Range$emptyRange, 5)
						})
					]))
			])),
	fe: 'elm/core',
	en: '1.0.0'
};
var $jfmengels$elm_review$Review$Dependencies$elmParser = {
	cV: $elm$core$Dict$fromList(
		_List_fromArray(
			[
				_Utils_Tuple2(
				_List_fromArray(
					['Parser']),
				_List_fromArray(
					[
						$stil4m$elm_syntax$Elm$Interface$Operator(
						{
							eM: A2($stil4m$elm_syntax$Elm$Syntax$Node$Node, $stil4m$elm_syntax$Elm$Syntax$Range$emptyRange, 0),
							e_: A2($stil4m$elm_syntax$Elm$Syntax$Node$Node, $stil4m$elm_syntax$Elm$Syntax$Range$emptyRange, 'keeper'),
							fp: A2($stil4m$elm_syntax$Elm$Syntax$Node$Node, $stil4m$elm_syntax$Elm$Syntax$Range$emptyRange, '|='),
							ft: A2($stil4m$elm_syntax$Elm$Syntax$Node$Node, $stil4m$elm_syntax$Elm$Syntax$Range$emptyRange, 5)
						}),
						$stil4m$elm_syntax$Elm$Interface$Operator(
						{
							eM: A2($stil4m$elm_syntax$Elm$Syntax$Node$Node, $stil4m$elm_syntax$Elm$Syntax$Range$emptyRange, 0),
							e_: A2($stil4m$elm_syntax$Elm$Syntax$Node$Node, $stil4m$elm_syntax$Elm$Syntax$Range$emptyRange, 'ignorer'),
							fp: A2($stil4m$elm_syntax$Elm$Syntax$Node$Node, $stil4m$elm_syntax$Elm$Syntax$Range$emptyRange, '|.'),
							ft: A2($stil4m$elm_syntax$Elm$Syntax$Node$Node, $stil4m$elm_syntax$Elm$Syntax$Range$emptyRange, 6)
						})
					])),
				_Utils_Tuple2(
				_List_fromArray(
					['Parser', 'Advanced']),
				_List_fromArray(
					[
						$stil4m$elm_syntax$Elm$Interface$Operator(
						{
							eM: A2($stil4m$elm_syntax$Elm$Syntax$Node$Node, $stil4m$elm_syntax$Elm$Syntax$Range$emptyRange, 0),
							e_: A2($stil4m$elm_syntax$Elm$Syntax$Node$Node, $stil4m$elm_syntax$Elm$Syntax$Range$emptyRange, 'keeper'),
							fp: A2($stil4m$elm_syntax$Elm$Syntax$Node$Node, $stil4m$elm_syntax$Elm$Syntax$Range$emptyRange, '|='),
							ft: A2($stil4m$elm_syntax$Elm$Syntax$Node$Node, $stil4m$elm_syntax$Elm$Syntax$Range$emptyRange, 5)
						}),
						$stil4m$elm_syntax$Elm$Interface$Operator(
						{
							eM: A2($stil4m$elm_syntax$Elm$Syntax$Node$Node, $stil4m$elm_syntax$Elm$Syntax$Range$emptyRange, 0),
							e_: A2($stil4m$elm_syntax$Elm$Syntax$Node$Node, $stil4m$elm_syntax$Elm$Syntax$Range$emptyRange, 'ignorer'),
							fp: A2($stil4m$elm_syntax$Elm$Syntax$Node$Node, $stil4m$elm_syntax$Elm$Syntax$Range$emptyRange, '|.'),
							ft: A2($stil4m$elm_syntax$Elm$Syntax$Node$Node, $stil4m$elm_syntax$Elm$Syntax$Range$emptyRange, 6)
						})
					]))
			])),
	fe: 'elm/parser',
	en: '1.0.0'
};
var $jfmengels$elm_review$Review$Dependencies$elmUrl = {
	cV: $elm$core$Dict$fromList(
		_List_fromArray(
			[
				_Utils_Tuple2(
				_List_fromArray(
					['Url', 'Parser']),
				_List_fromArray(
					[
						$stil4m$elm_syntax$Elm$Interface$Operator(
						{
							eM: A2($stil4m$elm_syntax$Elm$Syntax$Node$Node, $stil4m$elm_syntax$Elm$Syntax$Range$emptyRange, 1),
							e_: A2($stil4m$elm_syntax$Elm$Syntax$Node$Node, $stil4m$elm_syntax$Elm$Syntax$Range$emptyRange, 'slash'),
							fp: A2($stil4m$elm_syntax$Elm$Syntax$Node$Node, $stil4m$elm_syntax$Elm$Syntax$Range$emptyRange, '</>'),
							ft: A2($stil4m$elm_syntax$Elm$Syntax$Node$Node, $stil4m$elm_syntax$Elm$Syntax$Range$emptyRange, 7)
						}),
						$stil4m$elm_syntax$Elm$Interface$Operator(
						{
							eM: A2($stil4m$elm_syntax$Elm$Syntax$Node$Node, $stil4m$elm_syntax$Elm$Syntax$Range$emptyRange, 0),
							e_: A2($stil4m$elm_syntax$Elm$Syntax$Node$Node, $stil4m$elm_syntax$Elm$Syntax$Range$emptyRange, 'questionMark'),
							fp: A2($stil4m$elm_syntax$Elm$Syntax$Node$Node, $stil4m$elm_syntax$Elm$Syntax$Range$emptyRange, '<?>'),
							ft: A2($stil4m$elm_syntax$Elm$Syntax$Node$Node, $stil4m$elm_syntax$Elm$Syntax$Range$emptyRange, 8)
						})
					]))
			])),
	fe: 'elm/url',
	en: '1.0.0'
};
var $stil4m$elm_syntax$Elm$Processing$init = $elm$core$Dict$empty;
var $jfmengels$elm_review$Review$FileParser$elmProcessContext = A2(
	$stil4m$elm_syntax$Elm$Processing$addDependency,
	$jfmengels$elm_review$Review$Dependencies$elmParser,
	A2(
		$stil4m$elm_syntax$Elm$Processing$addDependency,
		$jfmengels$elm_review$Review$Dependencies$elmUrl,
		A2($stil4m$elm_syntax$Elm$Processing$addDependency, $jfmengels$elm_review$Review$Dependencies$elmCore, $stil4m$elm_syntax$Elm$Processing$init)));
var $stil4m$elm_syntax$Elm$Parser$State$State = $elm$core$Basics$identity;
var $stil4m$elm_syntax$Elm$Parser$State$emptyState = {eH: _List_Nil, bc: _List_Nil};
var $stil4m$elm_syntax$Elm$Syntax$File$File = F4(
	function (moduleDefinition, imports, declarations, comments) {
		return {eH: comments, eK: declarations, e1: imports, fc: moduleDefinition};
	});
var $stil4m$elm_syntax$Combine$Parser = $elm$core$Basics$identity;
var $elm$parser$Parser$Advanced$Bad = F2(
	function (a, b) {
		return {$: 1, a: a, b: b};
	});
var $elm$parser$Parser$Advanced$Good = F3(
	function (a, b, c) {
		return {$: 0, a: a, b: b, c: c};
	});
var $elm$parser$Parser$Advanced$Parser = $elm$core$Basics$identity;
var $elm$parser$Parser$Advanced$andThen = F2(
	function (callback, _v0) {
		var parseA = _v0;
		return function (s0) {
			var _v1 = parseA(s0);
			if (_v1.$ === 1) {
				var p = _v1.a;
				var x = _v1.b;
				return A2($elm$parser$Parser$Advanced$Bad, p, x);
			} else {
				var p1 = _v1.a;
				var a = _v1.b;
				var s1 = _v1.c;
				var _v2 = callback(a);
				var parseB = _v2;
				var _v3 = parseB(s1);
				if (_v3.$ === 1) {
					var p2 = _v3.a;
					var x = _v3.b;
					return A2($elm$parser$Parser$Advanced$Bad, p1 || p2, x);
				} else {
					var p2 = _v3.a;
					var b = _v3.b;
					var s2 = _v3.c;
					return A3($elm$parser$Parser$Advanced$Good, p1 || p2, b, s2);
				}
			}
		};
	});
var $elm$parser$Parser$andThen = $elm$parser$Parser$Advanced$andThen;
var $elm$parser$Parser$Advanced$map = F2(
	function (func, _v0) {
		var parse = _v0;
		return function (s0) {
			var _v1 = parse(s0);
			if (!_v1.$) {
				var p = _v1.a;
				var a = _v1.b;
				var s1 = _v1.c;
				return A3(
					$elm$parser$Parser$Advanced$Good,
					p,
					func(a),
					s1);
			} else {
				var p = _v1.a;
				var x = _v1.b;
				return A2($elm$parser$Parser$Advanced$Bad, p, x);
			}
		};
	});
var $elm$parser$Parser$map = $elm$parser$Parser$Advanced$map;
var $elm$core$Tuple$mapSecond = F2(
	function (func, _v0) {
		var x = _v0.a;
		var y = _v0.b;
		return _Utils_Tuple2(
			x,
			func(y));
	});
var $stil4m$elm_syntax$Combine$andMap = F2(
	function (_v0, _v1) {
		var rp = _v0;
		var lp = _v1;
		return function (state) {
			return A2(
				$elm$parser$Parser$andThen,
				function (_v2) {
					var newState = _v2.a;
					var a = _v2.b;
					return A2(
						$elm$parser$Parser$map,
						$elm$core$Tuple$mapSecond(a),
						rp(newState));
				},
				lp(state));
		};
	});
var $stil4m$elm_syntax$Elm$Parser$State$getComments = function (_v0) {
	var s = _v0;
	return $elm$core$List$reverse(s.eH);
};
var $elm$parser$Parser$Advanced$succeed = function (a) {
	return function (s) {
		return A3($elm$parser$Parser$Advanced$Good, false, a, s);
	};
};
var $elm$parser$Parser$succeed = $elm$parser$Parser$Advanced$succeed;
var $stil4m$elm_syntax$Combine$succeed = function (res) {
	return function (state) {
		return $elm$parser$Parser$succeed(
			_Utils_Tuple2(state, res));
	};
};
var $stil4m$elm_syntax$Combine$withState = function (f) {
	return function (state) {
		return function (_v0) {
			var p = _v0;
			return p(state);
		}(
			f(state));
	};
};
var $stil4m$elm_syntax$Elm$Parser$File$collectComments = $stil4m$elm_syntax$Combine$withState(
	A2($elm$core$Basics$composeR, $stil4m$elm_syntax$Elm$Parser$State$getComments, $stil4m$elm_syntax$Combine$succeed));
var $stil4m$elm_syntax$Elm$Syntax$Declaration$AliasDeclaration = function (a) {
	return {$: 1, a: a};
};
var $stil4m$elm_syntax$Elm$Syntax$Declaration$CustomTypeDeclaration = function (a) {
	return {$: 2, a: a};
};
var $elm$parser$Parser$Advanced$Empty = {$: 0};
var $elm$parser$Parser$Advanced$Append = F2(
	function (a, b) {
		return {$: 2, a: a, b: b};
	});
var $elm$parser$Parser$Advanced$oneOfHelp = F3(
	function (s0, bag, parsers) {
		oneOfHelp:
		while (true) {
			if (!parsers.b) {
				return A2($elm$parser$Parser$Advanced$Bad, false, bag);
			} else {
				var parse = parsers.a;
				var remainingParsers = parsers.b;
				var _v1 = parse(s0);
				if (!_v1.$) {
					var step = _v1;
					return step;
				} else {
					var step = _v1;
					var p = step.a;
					var x = step.b;
					if (p) {
						return step;
					} else {
						var $temp$s0 = s0,
							$temp$bag = A2($elm$parser$Parser$Advanced$Append, bag, x),
							$temp$parsers = remainingParsers;
						s0 = $temp$s0;
						bag = $temp$bag;
						parsers = $temp$parsers;
						continue oneOfHelp;
					}
				}
			}
		}
	});
var $elm$parser$Parser$Advanced$oneOf = function (parsers) {
	return function (s) {
		return A3($elm$parser$Parser$Advanced$oneOfHelp, s, $elm$parser$Parser$Advanced$Empty, parsers);
	};
};
var $elm$parser$Parser$oneOf = $elm$parser$Parser$Advanced$oneOf;
var $stil4m$elm_syntax$Combine$choice = function (xs) {
	return function (state) {
		return $elm$parser$Parser$oneOf(
			A2(
				$elm$core$List$map,
				function (_v0) {
					var x = _v0;
					return x(state);
				},
				xs));
	};
};
var $stil4m$elm_syntax$Elm$Syntax$Declaration$Destructuring = F2(
	function (a, b) {
		return {$: 5, a: a, b: b};
	});
var $stil4m$elm_syntax$Elm$Syntax$Range$Range = F2(
	function (start, end) {
		return {bu: end, bQ: start};
	});
var $stil4m$elm_syntax$Elm$Syntax$Range$compareLocations = F2(
	function (left, right) {
		return (_Utils_cmp(left.d0, right.d0) < 0) ? 0 : ((_Utils_cmp(left.d0, right.d0) > 0) ? 2 : A2($elm$core$Basics$compare, left.eF, right.eF));
	});
var $elm$core$List$sortWith = _List_sortWith;
var $stil4m$elm_syntax$Elm$Syntax$Range$sortLocations = $elm$core$List$sortWith($stil4m$elm_syntax$Elm$Syntax$Range$compareLocations);
var $stil4m$elm_syntax$Elm$Syntax$Range$combine = function (ranges) {
	var starts = $stil4m$elm_syntax$Elm$Syntax$Range$sortLocations(
		A2(
			$elm$core$List$map,
			function ($) {
				return $.bQ;
			},
			ranges));
	var ends = $elm$core$List$reverse(
		$stil4m$elm_syntax$Elm$Syntax$Range$sortLocations(
			A2(
				$elm$core$List$map,
				function ($) {
					return $.bu;
				},
				ranges)));
	return A2(
		$elm$core$Maybe$withDefault,
		$stil4m$elm_syntax$Elm$Syntax$Range$emptyRange,
		A3(
			$elm$core$Maybe$map2,
			$stil4m$elm_syntax$Elm$Syntax$Range$Range,
			$elm$core$List$head(starts),
			$elm$core$List$head(ends)));
};
var $stil4m$elm_syntax$Elm$Syntax$Node$combine = F3(
	function (f, a, b) {
		var r1 = a.a;
		var r2 = b.a;
		return A2(
			$stil4m$elm_syntax$Elm$Syntax$Node$Node,
			$stil4m$elm_syntax$Elm$Syntax$Range$combine(
				_List_fromArray(
					[r1, r2])),
			A2(f, a, b));
	});
var $stil4m$elm_syntax$Elm$Syntax$Expression$Application = function (a) {
	return {$: 1, a: a};
};
var $stil4m$elm_syntax$Elm$Syntax$Expression$CaseBlock = F2(
	function (expression, cases) {
		return {eC: cases, eR: expression};
	});
var $stil4m$elm_syntax$Elm$Syntax$Expression$CaseExpression = function (a) {
	return {$: 16, a: a};
};
var $stil4m$elm_syntax$Combine$Done = function (a) {
	return {$: 1, a: a};
};
var $stil4m$elm_syntax$Elm$Syntax$Expression$Function = F3(
	function (documentation, signature, declaration) {
		return {dm: declaration, cL: documentation, fD: signature};
	});
var $stil4m$elm_syntax$Elm$Syntax$Expression$FunctionImplementation = F3(
	function (name, _arguments, expression) {
		return {es: _arguments, eR: expression, fe: name};
	});
var $stil4m$elm_syntax$Elm$Syntax$Expression$IfBlock = F3(
	function (a, b, c) {
		return {$: 4, a: a, b: b, c: c};
	});
var $stil4m$elm_syntax$Elm$Syntax$Expression$Lambda = F2(
	function (args, expression) {
		return {er: args, eR: expression};
	});
var $stil4m$elm_syntax$Elm$Syntax$Expression$LambdaExpression = function (a) {
	return {$: 17, a: a};
};
var $stil4m$elm_syntax$Elm$Syntax$Expression$LetBlock = F2(
	function (declarations, expression) {
		return {eK: declarations, eR: expression};
	});
var $stil4m$elm_syntax$Elm$Syntax$Expression$LetDestructuring = F2(
	function (a, b) {
		return {$: 1, a: a, b: b};
	});
var $stil4m$elm_syntax$Elm$Syntax$Expression$LetExpression = function (a) {
	return {$: 15, a: a};
};
var $stil4m$elm_syntax$Elm$Syntax$Expression$LetFunction = function (a) {
	return {$: 0, a: a};
};
var $stil4m$elm_syntax$Elm$Syntax$Expression$ListExpr = function (a) {
	return {$: 19, a: a};
};
var $stil4m$elm_syntax$Combine$Loop = function (a) {
	return {$: 0, a: a};
};
var $stil4m$elm_syntax$Elm$Syntax$Expression$Negation = function (a) {
	return {$: 10, a: a};
};
var $stil4m$elm_syntax$Elm$Syntax$Expression$Operator = function (a) {
	return {$: 6, a: a};
};
var $stil4m$elm_syntax$Elm$Syntax$Expression$ParenthesizedExpression = function (a) {
	return {$: 14, a: a};
};
var $stil4m$elm_syntax$Elm$Syntax$Expression$PrefixOperator = function (a) {
	return {$: 5, a: a};
};
var $stil4m$elm_syntax$Elm$Syntax$Expression$RecordExpr = function (a) {
	return {$: 18, a: a};
};
var $stil4m$elm_syntax$Elm$Syntax$Expression$RecordUpdateExpression = F2(
	function (a, b) {
		return {$: 22, a: a, b: b};
	});
var $stil4m$elm_syntax$Elm$Syntax$Expression$TupledExpression = function (a) {
	return {$: 13, a: a};
};
var $stil4m$elm_syntax$Elm$Syntax$Expression$UnitExpr = {$: 0};
var $stil4m$elm_syntax$Combine$andThen = F2(
	function (f, _v0) {
		var p = _v0;
		return function (state) {
			return A2(
				$elm$parser$Parser$andThen,
				function (_v1) {
					var s = _v1.a;
					var a = _v1.b;
					return function (_v2) {
						var x = _v2;
						return x(s);
					}(
						f(a));
				},
				p(state));
		};
	});
var $elm$parser$Parser$Advanced$backtrackable = function (_v0) {
	var parse = _v0;
	return function (s0) {
		var _v1 = parse(s0);
		if (_v1.$ === 1) {
			var x = _v1.b;
			return A2($elm$parser$Parser$Advanced$Bad, false, x);
		} else {
			var a = _v1.b;
			var s1 = _v1.c;
			return A3($elm$parser$Parser$Advanced$Good, false, a, s1);
		}
	};
};
var $elm$parser$Parser$backtrackable = $elm$parser$Parser$Advanced$backtrackable;
var $stil4m$elm_syntax$Combine$backtrackable = function (_v0) {
	var p = _v0;
	return function (state) {
		return $elm$parser$Parser$backtrackable(
			p(state));
	};
};
var $elm$parser$Parser$Advanced$mapChompedString = F2(
	function (func, _v0) {
		var parse = _v0;
		return function (s0) {
			var _v1 = parse(s0);
			if (_v1.$ === 1) {
				var p = _v1.a;
				var x = _v1.b;
				return A2($elm$parser$Parser$Advanced$Bad, p, x);
			} else {
				var p = _v1.a;
				var a = _v1.b;
				var s1 = _v1.c;
				return A3(
					$elm$parser$Parser$Advanced$Good,
					p,
					A2(
						func,
						A3($elm$core$String$slice, s0.d, s1.d, s0.c),
						a),
					s1);
			}
		};
	});
var $elm$parser$Parser$Advanced$getChompedString = function (parser) {
	return A2($elm$parser$Parser$Advanced$mapChompedString, $elm$core$Basics$always, parser);
};
var $elm$parser$Parser$getChompedString = $elm$parser$Parser$Advanced$getChompedString;
var $elm$parser$Parser$Expecting = function (a) {
	return {$: 0, a: a};
};
var $elm$parser$Parser$Advanced$Token = F2(
	function (a, b) {
		return {$: 0, a: a, b: b};
	});
var $elm$parser$Parser$toToken = function (str) {
	return A2(
		$elm$parser$Parser$Advanced$Token,
		str,
		$elm$parser$Parser$Expecting(str));
};
var $elm$parser$Parser$Advanced$AddRight = F2(
	function (a, b) {
		return {$: 1, a: a, b: b};
	});
var $elm$parser$Parser$Advanced$DeadEnd = F4(
	function (row, col, problem, contextStack) {
		return {dj: col, eJ: contextStack, dY: problem, d0: row};
	});
var $elm$parser$Parser$Advanced$fromState = F2(
	function (s, x) {
		return A2(
			$elm$parser$Parser$Advanced$AddRight,
			$elm$parser$Parser$Advanced$Empty,
			A4($elm$parser$Parser$Advanced$DeadEnd, s.d0, s.dj, x, s.j));
	});
var $elm$core$String$isEmpty = function (string) {
	return string === '';
};
var $elm$parser$Parser$Advanced$isSubString = _Parser_isSubString;
var $elm$parser$Parser$Advanced$token = function (_v0) {
	var str = _v0.a;
	var expecting = _v0.b;
	var progress = !$elm$core$String$isEmpty(str);
	return function (s) {
		var _v1 = A5($elm$parser$Parser$Advanced$isSubString, str, s.d, s.d0, s.dj, s.c);
		var newOffset = _v1.a;
		var newRow = _v1.b;
		var newCol = _v1.c;
		return _Utils_eq(newOffset, -1) ? A2(
			$elm$parser$Parser$Advanced$Bad,
			false,
			A2($elm$parser$Parser$Advanced$fromState, s, expecting)) : A3(
			$elm$parser$Parser$Advanced$Good,
			progress,
			0,
			{dj: newCol, j: s.j, o: s.o, d: newOffset, d0: newRow, c: s.c});
	};
};
var $elm$parser$Parser$token = function (str) {
	return $elm$parser$Parser$Advanced$token(
		$elm$parser$Parser$toToken(str));
};
var $stil4m$elm_syntax$Combine$string = function (s) {
	return function (state) {
		return A2(
			$elm$parser$Parser$map,
			function (x) {
				return _Utils_Tuple2(state, x);
			},
			$elm$parser$Parser$getChompedString(
				$elm$parser$Parser$token(s)));
	};
};
var $stil4m$elm_syntax$Elm$Parser$Tokens$caseToken = $stil4m$elm_syntax$Combine$string('case');
var $stil4m$elm_syntax$Elm$Syntax$Expression$CharLiteral = function (a) {
	return {$: 12, a: a};
};
var $elm$parser$Parser$Problem = function (a) {
	return {$: 12, a: a};
};
var $elm$parser$Parser$Advanced$problem = function (x) {
	return function (s) {
		return A2(
			$elm$parser$Parser$Advanced$Bad,
			false,
			A2($elm$parser$Parser$Advanced$fromState, s, x));
	};
};
var $elm$parser$Parser$problem = function (msg) {
	return $elm$parser$Parser$Advanced$problem(
		$elm$parser$Parser$Problem(msg));
};
var $stil4m$elm_syntax$Combine$fail = function (m) {
	return function (state) {
		return A2(
			$elm$parser$Parser$map,
			function (x) {
				return _Utils_Tuple2(state, x);
			},
			$elm$parser$Parser$problem(m));
	};
};
var $elm$parser$Parser$UnexpectedChar = {$: 11};
var $elm$parser$Parser$Advanced$isSubChar = _Parser_isSubChar;
var $elm$parser$Parser$Advanced$chompIf = F2(
	function (isGood, expecting) {
		return function (s) {
			var newOffset = A3($elm$parser$Parser$Advanced$isSubChar, isGood, s.d, s.c);
			return _Utils_eq(newOffset, -1) ? A2(
				$elm$parser$Parser$Advanced$Bad,
				false,
				A2($elm$parser$Parser$Advanced$fromState, s, expecting)) : (_Utils_eq(newOffset, -2) ? A3(
				$elm$parser$Parser$Advanced$Good,
				true,
				0,
				{dj: 1, j: s.j, o: s.o, d: s.d + 1, d0: s.d0 + 1, c: s.c}) : A3(
				$elm$parser$Parser$Advanced$Good,
				true,
				0,
				{dj: s.dj + 1, j: s.j, o: s.o, d: newOffset, d0: s.d0, c: s.c}));
		};
	});
var $elm$parser$Parser$chompIf = function (isGood) {
	return A2($elm$parser$Parser$Advanced$chompIf, isGood, $elm$parser$Parser$UnexpectedChar);
};
var $elm$parser$Parser$Advanced$map2 = F3(
	function (func, _v0, _v1) {
		var parseA = _v0;
		var parseB = _v1;
		return function (s0) {
			var _v2 = parseA(s0);
			if (_v2.$ === 1) {
				var p = _v2.a;
				var x = _v2.b;
				return A2($elm$parser$Parser$Advanced$Bad, p, x);
			} else {
				var p1 = _v2.a;
				var a = _v2.b;
				var s1 = _v2.c;
				var _v3 = parseB(s1);
				if (_v3.$ === 1) {
					var p2 = _v3.a;
					var x = _v3.b;
					return A2($elm$parser$Parser$Advanced$Bad, p1 || p2, x);
				} else {
					var p2 = _v3.a;
					var b = _v3.b;
					var s2 = _v3.c;
					return A3(
						$elm$parser$Parser$Advanced$Good,
						p1 || p2,
						A2(func, a, b),
						s2);
				}
			}
		};
	});
var $elm$parser$Parser$Advanced$keeper = F2(
	function (parseFunc, parseArg) {
		return A3($elm$parser$Parser$Advanced$map2, $elm$core$Basics$apL, parseFunc, parseArg);
	});
var $elm$parser$Parser$keeper = $elm$parser$Parser$Advanced$keeper;
var $stil4m$elm_syntax$Combine$fromCore = function (p) {
	return function (state) {
		return A2(
			$elm$parser$Parser$keeper,
			$elm$parser$Parser$succeed(
				function (v) {
					return _Utils_Tuple2(state, v);
				}),
			p);
	};
};
var $stil4m$elm_syntax$Combine$Char$satisfy = function (pred) {
	return $stil4m$elm_syntax$Combine$fromCore(
		A2(
			$elm$parser$Parser$andThen,
			function (s) {
				var _v0 = $elm$core$String$toList(s);
				if (!_v0.b) {
					return $elm$parser$Parser$succeed($elm$core$Maybe$Nothing);
				} else {
					var c = _v0.a;
					return $elm$parser$Parser$succeed(
						$elm$core$Maybe$Just(c));
				}
			},
			$elm$parser$Parser$getChompedString(
				$elm$parser$Parser$chompIf(pred))));
};
var $stil4m$elm_syntax$Combine$Char$anyChar = A2(
	$stil4m$elm_syntax$Combine$andThen,
	A2(
		$elm$core$Basics$composeR,
		$elm$core$Maybe$map($stil4m$elm_syntax$Combine$succeed),
		$elm$core$Maybe$withDefault(
			$stil4m$elm_syntax$Combine$fail('expected any character'))),
	$stil4m$elm_syntax$Combine$Char$satisfy(
		$elm$core$Basics$always(true)));
var $stil4m$elm_syntax$Combine$Char$char = function (c) {
	return A2(
		$stil4m$elm_syntax$Combine$andThen,
		A2(
			$elm$core$Basics$composeR,
			$elm$core$Maybe$map($stil4m$elm_syntax$Combine$succeed),
			$elm$core$Maybe$withDefault(
				$stil4m$elm_syntax$Combine$fail(
					'expected \'' + ($elm$core$String$fromList(
						_List_fromArray(
							[c])) + '\'')))),
		$stil4m$elm_syntax$Combine$Char$satisfy(
			$elm$core$Basics$eq(c)));
};
var $stil4m$elm_syntax$Combine$map = F2(
	function (f, _v0) {
		var p = _v0;
		return function (state) {
			return A2(
				$elm$parser$Parser$map,
				function (_v1) {
					var s = _v1.a;
					var a = _v1.b;
					return _Utils_Tuple2(
						s,
						f(a));
				},
				p(state));
		};
	});
var $stil4m$elm_syntax$Combine$continueWith = F2(
	function (target, dropped) {
		return A2(
			$stil4m$elm_syntax$Combine$andMap,
			target,
			A2(
				$stil4m$elm_syntax$Combine$map,
				F2(
					function (_v0, a) {
						return a;
					}),
				dropped));
	});
var $stil4m$elm_syntax$Combine$ignore = F2(
	function (dropped, target) {
		return A2(
			$stil4m$elm_syntax$Combine$andMap,
			dropped,
			A2($stil4m$elm_syntax$Combine$map, $elm$core$Basics$always, target));
	});
var $stil4m$elm_syntax$Combine$or = F2(
	function (_v0, _v1) {
		var lp = _v0;
		var rp = _v1;
		return function (state) {
			return $elm$parser$Parser$oneOf(
				_List_fromArray(
					[
						lp(state),
						rp(state)
					]));
		};
	});
var $elm$parser$Parser$Advanced$chompWhileHelp = F5(
	function (isGood, offset, row, col, s0) {
		chompWhileHelp:
		while (true) {
			var newOffset = A3($elm$parser$Parser$Advanced$isSubChar, isGood, offset, s0.c);
			if (_Utils_eq(newOffset, -1)) {
				return A3(
					$elm$parser$Parser$Advanced$Good,
					_Utils_cmp(s0.d, offset) < 0,
					0,
					{dj: col, j: s0.j, o: s0.o, d: offset, d0: row, c: s0.c});
			} else {
				if (_Utils_eq(newOffset, -2)) {
					var $temp$isGood = isGood,
						$temp$offset = offset + 1,
						$temp$row = row + 1,
						$temp$col = 1,
						$temp$s0 = s0;
					isGood = $temp$isGood;
					offset = $temp$offset;
					row = $temp$row;
					col = $temp$col;
					s0 = $temp$s0;
					continue chompWhileHelp;
				} else {
					var $temp$isGood = isGood,
						$temp$offset = newOffset,
						$temp$row = row,
						$temp$col = col + 1,
						$temp$s0 = s0;
					isGood = $temp$isGood;
					offset = $temp$offset;
					row = $temp$row;
					col = $temp$col;
					s0 = $temp$s0;
					continue chompWhileHelp;
				}
			}
		}
	});
var $elm$parser$Parser$Advanced$chompWhile = function (isGood) {
	return function (s) {
		return A5($elm$parser$Parser$Advanced$chompWhileHelp, isGood, s.d, s.d0, s.dj, s);
	};
};
var $elm$parser$Parser$chompWhile = $elm$parser$Parser$Advanced$chompWhile;
var $elm$core$Char$fromCode = _Char_fromCode;
var $elm$core$String$cons = _String_cons;
var $elm$core$String$fromChar = function (_char) {
	return A2($elm$core$String$cons, _char, '');
};
var $elm$core$Basics$pow = _Basics_pow;
var $rtfeldman$elm_hex$Hex$fromStringHelp = F3(
	function (position, chars, accumulated) {
		fromStringHelp:
		while (true) {
			if (!chars.b) {
				return $elm$core$Result$Ok(accumulated);
			} else {
				var _char = chars.a;
				var rest = chars.b;
				switch (_char) {
					case '0':
						var $temp$position = position - 1,
							$temp$chars = rest,
							$temp$accumulated = accumulated;
						position = $temp$position;
						chars = $temp$chars;
						accumulated = $temp$accumulated;
						continue fromStringHelp;
					case '1':
						var $temp$position = position - 1,
							$temp$chars = rest,
							$temp$accumulated = accumulated + A2($elm$core$Basics$pow, 16, position);
						position = $temp$position;
						chars = $temp$chars;
						accumulated = $temp$accumulated;
						continue fromStringHelp;
					case '2':
						var $temp$position = position - 1,
							$temp$chars = rest,
							$temp$accumulated = accumulated + (2 * A2($elm$core$Basics$pow, 16, position));
						position = $temp$position;
						chars = $temp$chars;
						accumulated = $temp$accumulated;
						continue fromStringHelp;
					case '3':
						var $temp$position = position - 1,
							$temp$chars = rest,
							$temp$accumulated = accumulated + (3 * A2($elm$core$Basics$pow, 16, position));
						position = $temp$position;
						chars = $temp$chars;
						accumulated = $temp$accumulated;
						continue fromStringHelp;
					case '4':
						var $temp$position = position - 1,
							$temp$chars = rest,
							$temp$accumulated = accumulated + (4 * A2($elm$core$Basics$pow, 16, position));
						position = $temp$position;
						chars = $temp$chars;
						accumulated = $temp$accumulated;
						continue fromStringHelp;
					case '5':
						var $temp$position = position - 1,
							$temp$chars = rest,
							$temp$accumulated = accumulated + (5 * A2($elm$core$Basics$pow, 16, position));
						position = $temp$position;
						chars = $temp$chars;
						accumulated = $temp$accumulated;
						continue fromStringHelp;
					case '6':
						var $temp$position = position - 1,
							$temp$chars = rest,
							$temp$accumulated = accumulated + (6 * A2($elm$core$Basics$pow, 16, position));
						position = $temp$position;
						chars = $temp$chars;
						accumulated = $temp$accumulated;
						continue fromStringHelp;
					case '7':
						var $temp$position = position - 1,
							$temp$chars = rest,
							$temp$accumulated = accumulated + (7 * A2($elm$core$Basics$pow, 16, position));
						position = $temp$position;
						chars = $temp$chars;
						accumulated = $temp$accumulated;
						continue fromStringHelp;
					case '8':
						var $temp$position = position - 1,
							$temp$chars = rest,
							$temp$accumulated = accumulated + (8 * A2($elm$core$Basics$pow, 16, position));
						position = $temp$position;
						chars = $temp$chars;
						accumulated = $temp$accumulated;
						continue fromStringHelp;
					case '9':
						var $temp$position = position - 1,
							$temp$chars = rest,
							$temp$accumulated = accumulated + (9 * A2($elm$core$Basics$pow, 16, position));
						position = $temp$position;
						chars = $temp$chars;
						accumulated = $temp$accumulated;
						continue fromStringHelp;
					case 'a':
						var $temp$position = position - 1,
							$temp$chars = rest,
							$temp$accumulated = accumulated + (10 * A2($elm$core$Basics$pow, 16, position));
						position = $temp$position;
						chars = $temp$chars;
						accumulated = $temp$accumulated;
						continue fromStringHelp;
					case 'b':
						var $temp$position = position - 1,
							$temp$chars = rest,
							$temp$accumulated = accumulated + (11 * A2($elm$core$Basics$pow, 16, position));
						position = $temp$position;
						chars = $temp$chars;
						accumulated = $temp$accumulated;
						continue fromStringHelp;
					case 'c':
						var $temp$position = position - 1,
							$temp$chars = rest,
							$temp$accumulated = accumulated + (12 * A2($elm$core$Basics$pow, 16, position));
						position = $temp$position;
						chars = $temp$chars;
						accumulated = $temp$accumulated;
						continue fromStringHelp;
					case 'd':
						var $temp$position = position - 1,
							$temp$chars = rest,
							$temp$accumulated = accumulated + (13 * A2($elm$core$Basics$pow, 16, position));
						position = $temp$position;
						chars = $temp$chars;
						accumulated = $temp$accumulated;
						continue fromStringHelp;
					case 'e':
						var $temp$position = position - 1,
							$temp$chars = rest,
							$temp$accumulated = accumulated + (14 * A2($elm$core$Basics$pow, 16, position));
						position = $temp$position;
						chars = $temp$chars;
						accumulated = $temp$accumulated;
						continue fromStringHelp;
					case 'f':
						var $temp$position = position - 1,
							$temp$chars = rest,
							$temp$accumulated = accumulated + (15 * A2($elm$core$Basics$pow, 16, position));
						position = $temp$position;
						chars = $temp$chars;
						accumulated = $temp$accumulated;
						continue fromStringHelp;
					default:
						var nonHex = _char;
						return $elm$core$Result$Err(
							$elm$core$String$fromChar(nonHex) + ' is not a valid hexadecimal character.');
				}
			}
		}
	});
var $elm$core$Result$mapError = F2(
	function (f, result) {
		if (!result.$) {
			var v = result.a;
			return $elm$core$Result$Ok(v);
		} else {
			var e = result.a;
			return $elm$core$Result$Err(
				f(e));
		}
	});
var $elm$core$List$tail = function (list) {
	if (list.b) {
		var x = list.a;
		var xs = list.b;
		return $elm$core$Maybe$Just(xs);
	} else {
		return $elm$core$Maybe$Nothing;
	}
};
var $rtfeldman$elm_hex$Hex$fromString = function (str) {
	if ($elm$core$String$isEmpty(str)) {
		return $elm$core$Result$Err('Empty strings are not valid hexadecimal strings.');
	} else {
		var result = function () {
			if (A2($elm$core$String$startsWith, '-', str)) {
				var list = A2(
					$elm$core$Maybe$withDefault,
					_List_Nil,
					$elm$core$List$tail(
						$elm$core$String$toList(str)));
				return A2(
					$elm$core$Result$map,
					$elm$core$Basics$negate,
					A3(
						$rtfeldman$elm_hex$Hex$fromStringHelp,
						$elm$core$List$length(list) - 1,
						list,
						0));
			} else {
				return A3(
					$rtfeldman$elm_hex$Hex$fromStringHelp,
					$elm$core$String$length(str) - 1,
					$elm$core$String$toList(str),
					0);
			}
		}();
		var formatError = function (err) {
			return A2(
				$elm$core$String$join,
				' ',
				_List_fromArray(
					['\"' + (str + '\"'), 'is not a valid hexadecimal string because', err]));
		};
		return A2($elm$core$Result$mapError, formatError, result);
	}
};
var $elm$parser$Parser$Advanced$ignorer = F2(
	function (keepParser, ignoreParser) {
		return A3($elm$parser$Parser$Advanced$map2, $elm$core$Basics$always, keepParser, ignoreParser);
	});
var $elm$parser$Parser$ignorer = $elm$parser$Parser$Advanced$ignorer;
var $elm$parser$Parser$ExpectingSymbol = function (a) {
	return {$: 8, a: a};
};
var $elm$parser$Parser$Advanced$symbol = $elm$parser$Parser$Advanced$token;
var $elm$parser$Parser$symbol = function (str) {
	return $elm$parser$Parser$Advanced$symbol(
		A2(
			$elm$parser$Parser$Advanced$Token,
			str,
			$elm$parser$Parser$ExpectingSymbol(str)));
};
var $elm$core$String$toLower = _String_toLower;
var $elm$core$Result$withDefault = F2(
	function (def, result) {
		if (!result.$) {
			var a = result.a;
			return a;
		} else {
			return def;
		}
	});
var $stil4m$elm_syntax$Elm$Parser$Tokens$escapedCharValue = $elm$parser$Parser$oneOf(
	_List_fromArray(
		[
			A2(
			$elm$parser$Parser$ignorer,
			$elm$parser$Parser$succeed('\''),
			$elm$parser$Parser$symbol('\'')),
			A2(
			$elm$parser$Parser$ignorer,
			$elm$parser$Parser$succeed('\"'),
			$elm$parser$Parser$symbol('\"')),
			A2(
			$elm$parser$Parser$ignorer,
			$elm$parser$Parser$succeed('\n'),
			$elm$parser$Parser$symbol('n')),
			A2(
			$elm$parser$Parser$ignorer,
			$elm$parser$Parser$succeed('\t'),
			$elm$parser$Parser$symbol('t')),
			A2(
			$elm$parser$Parser$ignorer,
			$elm$parser$Parser$succeed('\u000D'),
			$elm$parser$Parser$symbol('r')),
			A2(
			$elm$parser$Parser$ignorer,
			$elm$parser$Parser$succeed('\\'),
			$elm$parser$Parser$symbol('\\')),
			A2(
			$elm$parser$Parser$keeper,
			A2(
				$elm$parser$Parser$ignorer,
				A2(
					$elm$parser$Parser$ignorer,
					$elm$parser$Parser$succeed(
						A2(
							$elm$core$Basics$composeR,
							$elm$core$String$toLower,
							A2(
								$elm$core$Basics$composeR,
								$rtfeldman$elm_hex$Hex$fromString,
								A2(
									$elm$core$Basics$composeR,
									$elm$core$Result$withDefault(0),
									$elm$core$Char$fromCode)))),
					$elm$parser$Parser$symbol('u')),
				$elm$parser$Parser$symbol('{')),
			A2(
				$elm$parser$Parser$ignorer,
				$elm$parser$Parser$getChompedString(
					$elm$parser$Parser$chompWhile(
						function (c) {
							return A2(
								$elm$core$String$any,
								$elm$core$Basics$eq(c),
								'0123456789ABCDEFabcdef');
						})),
				$elm$parser$Parser$symbol('}')))
		]));
var $elm$core$List$singleton = function (value) {
	return _List_fromArray(
		[value]);
};
var $stil4m$elm_syntax$Elm$Parser$Tokens$quotedSingleQuote = $stil4m$elm_syntax$Combine$fromCore(
	A2(
		$elm$parser$Parser$keeper,
		A2(
			$elm$parser$Parser$ignorer,
			$elm$parser$Parser$succeed(
				A2(
					$elm$core$Basics$composeR,
					$elm$core$String$toList,
					A2(
						$elm$core$Basics$composeR,
						$elm$core$List$head,
						$elm$core$Maybe$withDefault(' ')))),
			$elm$parser$Parser$symbol('\'')),
		A2(
			$elm$parser$Parser$ignorer,
			$elm$parser$Parser$oneOf(
				_List_fromArray(
					[
						A2(
						$elm$parser$Parser$keeper,
						A2(
							$elm$parser$Parser$ignorer,
							$elm$parser$Parser$succeed(
								A2($elm$core$Basics$composeR, $elm$core$List$singleton, $elm$core$String$fromList)),
							$elm$parser$Parser$symbol('\\')),
						$stil4m$elm_syntax$Elm$Parser$Tokens$escapedCharValue),
						$elm$parser$Parser$getChompedString(
						$elm$parser$Parser$chompIf(
							$elm$core$Basics$always(true)))
					])),
			$elm$parser$Parser$symbol('\''))));
var $stil4m$elm_syntax$Elm$Parser$Tokens$characterLiteral = A2(
	$stil4m$elm_syntax$Combine$or,
	$stil4m$elm_syntax$Elm$Parser$Tokens$quotedSingleQuote,
	A2(
		$stil4m$elm_syntax$Combine$ignore,
		$stil4m$elm_syntax$Combine$Char$char('\''),
		A2(
			$stil4m$elm_syntax$Combine$continueWith,
			$stil4m$elm_syntax$Combine$Char$anyChar,
			$stil4m$elm_syntax$Combine$Char$char('\''))));
var $stil4m$elm_syntax$Elm$Parser$Node$asPointerLocation = function (_v0) {
	var line = _v0.aM;
	var column = _v0.eF;
	return {eF: column, d0: line};
};
var $stil4m$elm_syntax$Combine$app = function (_v0) {
	var inner = _v0;
	return inner;
};
var $elm$parser$Parser$Advanced$getPosition = function (s) {
	return A3(
		$elm$parser$Parser$Advanced$Good,
		false,
		_Utils_Tuple2(s.d0, s.dj),
		s);
};
var $elm$parser$Parser$getPosition = $elm$parser$Parser$Advanced$getPosition;
var $stil4m$elm_syntax$Combine$withLocation = function (f) {
	return function (state) {
		return A2(
			$elm$parser$Parser$andThen,
			function (loc) {
				return A2(
					$stil4m$elm_syntax$Combine$app,
					f(loc),
					state);
			},
			A2(
				$elm$parser$Parser$map,
				function (_v0) {
					var row = _v0.a;
					var col = _v0.b;
					return {eF: col, aM: row};
				},
				$elm$parser$Parser$getPosition));
	};
};
var $stil4m$elm_syntax$Elm$Parser$Node$parser = function (p) {
	return $stil4m$elm_syntax$Combine$withLocation(
		function (start) {
			return A2(
				$stil4m$elm_syntax$Combine$andMap,
				$stil4m$elm_syntax$Combine$withLocation(
					function (end) {
						return $stil4m$elm_syntax$Combine$succeed(
							{
								bu: $stil4m$elm_syntax$Elm$Parser$Node$asPointerLocation(end),
								bQ: $stil4m$elm_syntax$Elm$Parser$Node$asPointerLocation(start)
							});
					}),
				A2(
					$stil4m$elm_syntax$Combine$andMap,
					p,
					$stil4m$elm_syntax$Combine$succeed(
						F2(
							function (v, r) {
								return A2($stil4m$elm_syntax$Elm$Syntax$Node$Node, r, v);
							}))));
		});
};
var $stil4m$elm_syntax$Elm$Parser$Declarations$charLiteralExpression = $stil4m$elm_syntax$Elm$Parser$Node$parser(
	A2($stil4m$elm_syntax$Combine$map, $stil4m$elm_syntax$Elm$Syntax$Expression$CharLiteral, $stil4m$elm_syntax$Elm$Parser$Tokens$characterLiteral));
var $stil4m$elm_syntax$Elm$Parser$Tokens$elseToken = $stil4m$elm_syntax$Combine$string('else');
var $stil4m$elm_syntax$Elm$Parser$State$currentIndent = function (_v0) {
	var indents = _v0.bc;
	return A2(
		$elm$core$Maybe$withDefault,
		0,
		$elm$core$List$head(indents));
};
var $stil4m$elm_syntax$Elm$Parser$State$expectedColumn = A2(
	$elm$core$Basics$composeR,
	$stil4m$elm_syntax$Elm$Parser$State$currentIndent,
	$elm$core$Basics$add(1));
var $stil4m$elm_syntax$Elm$Syntax$Pattern$AllPattern = {$: 0};
var $stil4m$elm_syntax$Elm$Syntax$Pattern$AsPattern = F2(
	function (a, b) {
		return {$: 13, a: a, b: b};
	});
var $stil4m$elm_syntax$Elm$Syntax$Pattern$CharPattern = function (a) {
	return {$: 2, a: a};
};
var $stil4m$elm_syntax$Elm$Syntax$Pattern$ListPattern = function (a) {
	return {$: 10, a: a};
};
var $stil4m$elm_syntax$Elm$Syntax$Pattern$NamedPattern = F2(
	function (a, b) {
		return {$: 12, a: a, b: b};
	});
var $stil4m$elm_syntax$Elm$Syntax$Pattern$ParenthesizedPattern = function (a) {
	return {$: 14, a: a};
};
var $stil4m$elm_syntax$Elm$Syntax$Pattern$QualifiedNameRef = F2(
	function (moduleName, name) {
		return {cv: moduleName, fe: name};
	});
var $stil4m$elm_syntax$Elm$Syntax$Pattern$StringPattern = function (a) {
	return {$: 3, a: a};
};
var $stil4m$elm_syntax$Elm$Syntax$Pattern$TuplePattern = function (a) {
	return {$: 7, a: a};
};
var $stil4m$elm_syntax$Elm$Syntax$Pattern$UnConsPattern = F2(
	function (a, b) {
		return {$: 9, a: a, b: b};
	});
var $stil4m$elm_syntax$Elm$Syntax$Pattern$UnitPattern = {$: 1};
var $stil4m$elm_syntax$Combine$between = F3(
	function (lp, rp, p) {
		return A2(
			$stil4m$elm_syntax$Combine$ignore,
			rp,
			A2($stil4m$elm_syntax$Combine$continueWith, p, lp));
	});
var $elm$core$Set$fromList = function (list) {
	return A3($elm$core$List$foldl, $elm$core$Set$insert, $elm$core$Set$empty, list);
};
var $elm$core$Basics$modBy = _Basics_modBy;
var $miniBill$elm_unicode$Unicode$isAlphaNum = function (c) {
	var code = $elm$core$Char$toCode(c);
	var e = function (hex) {
		return _Utils_eq(hex, code);
	};
	var l = function (hex) {
		return _Utils_cmp(code, hex) < 0;
	};
	var r = F2(
		function (from, to) {
			return (_Utils_cmp(from, code) < 1) && (_Utils_cmp(code, to) < 1);
		});
	return l(256) ? ((((((((((A2(r, 48, 57) || A2(r, 65, 90)) || A2(r, 97, 122)) || e(170)) || A2(r, 178, 179)) || e(181)) || A2(r, 185, 186)) || A2(r, 188, 190)) || A2(r, 192, 214)) || A2(r, 216, 246)) || A2(r, 248, 255)) : (l(43761) ? (l(4695) ? (l(2876) ? (l(2383) ? (l(1648) ? (l(930) ? (((((((((((A2(r, 256, 705) || A2(r, 710, 721)) || A2(r, 736, 740)) || A2(r, 880, 884)) || A2(r, 886, 887)) || A2(r, 890, 893)) || e(895)) || e(902)) || A2(r, 904, 906)) || e(908)) || A2(r, 910, 929)) || ((!A2($elm$core$Basics$modBy, 2, code)) && A2(r, 748, 750))) : ((((((((((A2(r, 931, 1013) || A2(r, 1015, 1153)) || A2(r, 1162, 1327)) || A2(r, 1329, 1366)) || e(1369)) || A2(r, 1376, 1416)) || A2(r, 1488, 1514)) || A2(r, 1519, 1522)) || A2(r, 1568, 1610)) || A2(r, 1632, 1641)) || A2(r, 1646, 1647))) : (l(2041) ? ((((((((((A2(r, 1649, 1747) || e(1749)) || A2(r, 1765, 1766)) || A2(r, 1774, 1788)) || e(1791)) || e(1808)) || A2(r, 1810, 1839)) || A2(r, 1869, 1957)) || e(1969)) || A2(r, 1984, 2026)) || A2(r, 2036, 2037)) : (((((((((((e(2042) || A2(r, 2048, 2069)) || e(2074)) || e(2084)) || e(2088)) || A2(r, 2112, 2136)) || A2(r, 2144, 2154)) || A2(r, 2160, 2183)) || A2(r, 2185, 2190)) || A2(r, 2208, 2249)) || A2(r, 2308, 2361)) || e(2365)))) : (l(2612) ? (l(2509) ? ((((((((((e(2384) || A2(r, 2392, 2401)) || A2(r, 2406, 2415)) || A2(r, 2417, 2432)) || A2(r, 2437, 2444)) || A2(r, 2447, 2448)) || A2(r, 2451, 2472)) || A2(r, 2474, 2480)) || e(2482)) || A2(r, 2486, 2489)) || e(2493)) : ((((((((((e(2510) || A2(r, 2524, 2525)) || A2(r, 2527, 2529)) || A2(r, 2534, 2545)) || A2(r, 2548, 2553)) || e(2556)) || A2(r, 2565, 2570)) || A2(r, 2575, 2576)) || A2(r, 2579, 2600)) || A2(r, 2602, 2608)) || A2(r, 2610, 2611))) : (l(2740) ? ((((((((((A2(r, 2613, 2614) || A2(r, 2616, 2617)) || A2(r, 2649, 2652)) || e(2654)) || A2(r, 2662, 2671)) || A2(r, 2674, 2676)) || A2(r, 2693, 2701)) || A2(r, 2703, 2705)) || A2(r, 2707, 2728)) || A2(r, 2730, 2736)) || A2(r, 2738, 2739)) : (((((((((((A2(r, 2741, 2745) || e(2749)) || e(2768)) || A2(r, 2784, 2785)) || A2(r, 2790, 2799)) || e(2809)) || A2(r, 2821, 2828)) || A2(r, 2831, 2832)) || A2(r, 2835, 2856)) || A2(r, 2858, 2864)) || A2(r, 2866, 2867)) || A2(r, 2869, 2873))))) : (l(3429) ? (l(3159) ? (l(2973) ? ((((((((((e(2877) || A2(r, 2908, 2909)) || A2(r, 2911, 2913)) || A2(r, 2918, 2927)) || A2(r, 2929, 2935)) || e(2947)) || A2(r, 2949, 2954)) || A2(r, 2958, 2960)) || A2(r, 2962, 2965)) || A2(r, 2969, 2970)) || e(2972)) : ((((((((((A2(r, 2974, 2975) || A2(r, 2979, 2980)) || A2(r, 2984, 2986)) || A2(r, 2990, 3001)) || e(3024)) || A2(r, 3046, 3058)) || A2(r, 3077, 3084)) || A2(r, 3086, 3088)) || A2(r, 3090, 3112)) || A2(r, 3114, 3129)) || e(3133))) : (l(3260) ? ((((((((((A2(r, 3160, 3162) || e(3165)) || A2(r, 3168, 3169)) || A2(r, 3174, 3183)) || A2(r, 3192, 3198)) || e(3200)) || A2(r, 3205, 3212)) || A2(r, 3214, 3216)) || A2(r, 3218, 3240)) || A2(r, 3242, 3251)) || A2(r, 3253, 3257)) : (((((((((((e(3261) || A2(r, 3293, 3294)) || A2(r, 3296, 3297)) || A2(r, 3302, 3311)) || A2(r, 3313, 3314)) || A2(r, 3332, 3340)) || A2(r, 3342, 3344)) || A2(r, 3346, 3386)) || e(3389)) || e(3406)) || A2(r, 3412, 3414)) || A2(r, 3416, 3425)))) : (l(3803) ? (l(3663) ? ((((((((((A2(r, 3430, 3448) || A2(r, 3450, 3455)) || A2(r, 3461, 3478)) || A2(r, 3482, 3505)) || A2(r, 3507, 3515)) || e(3517)) || A2(r, 3520, 3526)) || A2(r, 3558, 3567)) || A2(r, 3585, 3632)) || A2(r, 3634, 3635)) || A2(r, 3648, 3654)) : (((((((((((A2(r, 3664, 3673) || A2(r, 3713, 3714)) || e(3716)) || A2(r, 3718, 3722)) || A2(r, 3724, 3747)) || e(3749)) || A2(r, 3751, 3760)) || A2(r, 3762, 3763)) || e(3773)) || A2(r, 3776, 3780)) || e(3782)) || A2(r, 3792, 3801))) : (l(4196) ? ((((((((((A2(r, 3804, 3807) || e(3840)) || A2(r, 3872, 3891)) || A2(r, 3904, 3911)) || A2(r, 3913, 3948)) || A2(r, 3976, 3980)) || A2(r, 4096, 4138)) || A2(r, 4159, 4169)) || A2(r, 4176, 4181)) || A2(r, 4186, 4189)) || e(4193)) : (((((((((((A2(r, 4197, 4198) || A2(r, 4206, 4208)) || A2(r, 4213, 4225)) || e(4238)) || A2(r, 4240, 4249)) || A2(r, 4256, 4293)) || e(4295)) || e(4301)) || A2(r, 4304, 4346)) || A2(r, 4348, 4680)) || A2(r, 4682, 4685)) || A2(r, 4688, 4694)))))) : (l(8489) ? (l(6687) ? (l(5887) ? (l(4881) ? ((((((((((e(4696) || A2(r, 4698, 4701)) || A2(r, 4704, 4744)) || A2(r, 4746, 4749)) || A2(r, 4752, 4784)) || A2(r, 4786, 4789)) || A2(r, 4792, 4798)) || e(4800)) || A2(r, 4802, 4805)) || A2(r, 4808, 4822)) || A2(r, 4824, 4880)) : ((((((((((A2(r, 4882, 4885) || A2(r, 4888, 4954)) || A2(r, 4969, 4988)) || A2(r, 4992, 5007)) || A2(r, 5024, 5109)) || A2(r, 5112, 5117)) || A2(r, 5121, 5740)) || A2(r, 5743, 5759)) || A2(r, 5761, 5786)) || A2(r, 5792, 5866)) || A2(r, 5870, 5880))) : (l(6175) ? ((((((((((A2(r, 5888, 5905) || A2(r, 5919, 5937)) || A2(r, 5952, 5969)) || A2(r, 5984, 5996)) || A2(r, 5998, 6000)) || A2(r, 6016, 6067)) || e(6103)) || e(6108)) || A2(r, 6112, 6121)) || A2(r, 6128, 6137)) || A2(r, 6160, 6169)) : (((((((((((A2(r, 6176, 6264) || A2(r, 6272, 6276)) || A2(r, 6279, 6312)) || e(6314)) || A2(r, 6320, 6389)) || A2(r, 6400, 6430)) || A2(r, 6470, 6509)) || A2(r, 6512, 6516)) || A2(r, 6528, 6571)) || A2(r, 6576, 6601)) || A2(r, 6608, 6618)) || A2(r, 6656, 6678)))) : (l(7967) ? (l(7244) ? ((((((((((A2(r, 6688, 6740) || A2(r, 6784, 6793)) || A2(r, 6800, 6809)) || e(6823)) || A2(r, 6917, 6963)) || A2(r, 6981, 6988)) || A2(r, 6992, 7001)) || A2(r, 7043, 7072)) || A2(r, 7086, 7141)) || A2(r, 7168, 7203)) || A2(r, 7232, 7241)) : ((((((((((A2(r, 7245, 7293) || A2(r, 7296, 7304)) || A2(r, 7312, 7354)) || A2(r, 7357, 7359)) || A2(r, 7401, 7404)) || A2(r, 7406, 7411)) || A2(r, 7413, 7414)) || e(7418)) || A2(r, 7424, 7615)) || A2(r, 7680, 7957)) || A2(r, 7960, 7965))) : (l(8159) ? (((((((((((A2(r, 7968, 8005) || A2(r, 8008, 8013)) || A2(r, 8016, 8023)) || A2(r, 8032, 8061)) || A2(r, 8064, 8116)) || A2(r, 8118, 8124)) || e(8126)) || A2(r, 8130, 8132)) || A2(r, 8134, 8140)) || A2(r, 8144, 8147)) || A2(r, 8150, 8155)) || ((A2($elm$core$Basics$modBy, 2, code) === 1) && A2(r, 8025, 8031))) : ((((((((((((A2(r, 8160, 8172) || A2(r, 8178, 8180)) || A2(r, 8182, 8188)) || A2(r, 8304, 8305)) || A2(r, 8308, 8313)) || A2(r, 8319, 8329)) || A2(r, 8336, 8348)) || e(8450)) || e(8455)) || A2(r, 8458, 8467)) || e(8469)) || A2(r, 8473, 8477)) || ((!A2($elm$core$Basics$modBy, 2, code)) && A2(r, 8484, 8488)))))) : (l(12976) ? (l(11703) ? (l(11505) ? ((((((((((A2(r, 8490, 8493) || A2(r, 8495, 8505)) || A2(r, 8508, 8511)) || A2(r, 8517, 8521)) || e(8526)) || A2(r, 8528, 8585)) || A2(r, 9312, 9371)) || A2(r, 9450, 9471)) || A2(r, 10102, 10131)) || A2(r, 11264, 11492)) || A2(r, 11499, 11502)) : ((((((((((A2(r, 11506, 11507) || e(11517)) || A2(r, 11520, 11557)) || e(11559)) || e(11565)) || A2(r, 11568, 11623)) || e(11631)) || A2(r, 11648, 11670)) || A2(r, 11680, 11686)) || A2(r, 11688, 11694)) || A2(r, 11696, 11702))) : (l(12444) ? ((((((((((A2(r, 11704, 11710) || A2(r, 11712, 11718)) || A2(r, 11720, 11726)) || A2(r, 11728, 11734)) || A2(r, 11736, 11742)) || e(11823)) || A2(r, 12293, 12295)) || A2(r, 12321, 12329)) || A2(r, 12337, 12341)) || A2(r, 12344, 12348)) || A2(r, 12353, 12438)) : (((((((((((A2(r, 12445, 12447) || A2(r, 12449, 12538)) || A2(r, 12540, 12543)) || A2(r, 12549, 12591)) || A2(r, 12593, 12686)) || A2(r, 12690, 12693)) || A2(r, 12704, 12735)) || A2(r, 12784, 12799)) || A2(r, 12832, 12841)) || A2(r, 12872, 12879)) || A2(r, 12881, 12895)) || A2(r, 12928, 12937)))) : (l(43215) ? (l(42774) ? ((((((((((A2(r, 12977, 12991) || e(13312)) || e(19903)) || e(19968)) || A2(r, 40959, 42124)) || A2(r, 42192, 42237)) || A2(r, 42240, 42508)) || A2(r, 42512, 42539)) || A2(r, 42560, 42606)) || A2(r, 42623, 42653)) || A2(r, 42656, 42735)) : ((((((((((((A2(r, 42775, 42783) || A2(r, 42786, 42888)) || A2(r, 42891, 42954)) || A2(r, 42960, 42961)) || A2(r, 42966, 42969)) || A2(r, 42994, 43009)) || A2(r, 43011, 43013)) || A2(r, 43015, 43018)) || A2(r, 43020, 43042)) || A2(r, 43056, 43061)) || A2(r, 43072, 43123)) || A2(r, 43138, 43187)) || ((A2($elm$core$Basics$modBy, 2, code) === 1) && A2(r, 42963, 42965)))) : (l(43519) ? ((((((((((A2(r, 43216, 43225) || A2(r, 43250, 43255)) || e(43259)) || A2(r, 43261, 43262)) || A2(r, 43264, 43301)) || A2(r, 43312, 43334)) || A2(r, 43360, 43388)) || A2(r, 43396, 43442)) || A2(r, 43471, 43481)) || A2(r, 43488, 43492)) || A2(r, 43494, 43518)) : ((((((((((((A2(r, 43520, 43560) || A2(r, 43584, 43586)) || A2(r, 43588, 43595)) || A2(r, 43600, 43609)) || A2(r, 43616, 43638)) || e(43642)) || A2(r, 43646, 43695)) || e(43697)) || A2(r, 43701, 43702)) || A2(r, 43705, 43709)) || A2(r, 43739, 43741)) || A2(r, 43744, 43754)) || ((!A2($elm$core$Basics$modBy, 2, code)) && A2(r, 43712, 43714)))))))) : (l(71839) ? (l(67827) ? (l(65615) ? (l(64317) ? (l(55202) ? ((((((((((A2(r, 43762, 43764) || A2(r, 43777, 43782)) || A2(r, 43785, 43790)) || A2(r, 43793, 43798)) || A2(r, 43808, 43814)) || A2(r, 43816, 43822)) || A2(r, 43824, 43866)) || A2(r, 43868, 43881)) || A2(r, 43888, 44002)) || A2(r, 44016, 44025)) || e(44032)) : ((((((((((e(55203) || A2(r, 55216, 55238)) || A2(r, 55243, 55291)) || A2(r, 63744, 64109)) || A2(r, 64112, 64217)) || A2(r, 64256, 64262)) || A2(r, 64275, 64279)) || e(64285)) || A2(r, 64287, 64296)) || A2(r, 64298, 64310)) || A2(r, 64312, 64316))) : (l(65312) ? ((((((((((e(64318) || A2(r, 64320, 64321)) || A2(r, 64323, 64324)) || A2(r, 64326, 64433)) || A2(r, 64467, 64829)) || A2(r, 64848, 64911)) || A2(r, 64914, 64967)) || A2(r, 65008, 65019)) || A2(r, 65136, 65140)) || A2(r, 65142, 65276)) || A2(r, 65296, 65305)) : (((((((((((A2(r, 65313, 65338) || A2(r, 65345, 65370)) || A2(r, 65382, 65470)) || A2(r, 65474, 65479)) || A2(r, 65482, 65487)) || A2(r, 65490, 65495)) || A2(r, 65498, 65500)) || A2(r, 65536, 65547)) || A2(r, 65549, 65574)) || A2(r, 65576, 65594)) || A2(r, 65596, 65597)) || A2(r, 65599, 65613)))) : (l(66939) ? (l(66431) ? ((((((((((A2(r, 65616, 65629) || A2(r, 65664, 65786)) || A2(r, 65799, 65843)) || A2(r, 65856, 65912)) || A2(r, 65930, 65931)) || A2(r, 66176, 66204)) || A2(r, 66208, 66256)) || A2(r, 66273, 66299)) || A2(r, 66304, 66339)) || A2(r, 66349, 66378)) || A2(r, 66384, 66421)) : ((((((((((A2(r, 66432, 66461) || A2(r, 66464, 66499)) || A2(r, 66504, 66511)) || A2(r, 66513, 66517)) || A2(r, 66560, 66717)) || A2(r, 66720, 66729)) || A2(r, 66736, 66771)) || A2(r, 66776, 66811)) || A2(r, 66816, 66855)) || A2(r, 66864, 66915)) || A2(r, 66928, 66938))) : (l(67462) ? ((((((((((A2(r, 66940, 66954) || A2(r, 66956, 66962)) || A2(r, 66964, 66965)) || A2(r, 66967, 66977)) || A2(r, 66979, 66993)) || A2(r, 66995, 67001)) || A2(r, 67003, 67004)) || A2(r, 67072, 67382)) || A2(r, 67392, 67413)) || A2(r, 67424, 67431)) || A2(r, 67456, 67461)) : (((((((((((A2(r, 67463, 67504) || A2(r, 67506, 67514)) || A2(r, 67584, 67589)) || e(67592)) || A2(r, 67594, 67637)) || A2(r, 67639, 67640)) || e(67644)) || A2(r, 67647, 67669)) || A2(r, 67672, 67702)) || A2(r, 67705, 67742)) || A2(r, 67751, 67759)) || A2(r, 67808, 67826))))) : (l(69967) ? (l(68799) ? (l(68223) ? ((((((((((A2(r, 67828, 67829) || A2(r, 67835, 67867)) || A2(r, 67872, 67897)) || A2(r, 67968, 68023)) || A2(r, 68028, 68047)) || A2(r, 68050, 68096)) || A2(r, 68112, 68115)) || A2(r, 68117, 68119)) || A2(r, 68121, 68149)) || A2(r, 68160, 68168)) || A2(r, 68192, 68222)) : ((((((((((A2(r, 68224, 68255) || A2(r, 68288, 68295)) || A2(r, 68297, 68324)) || A2(r, 68331, 68335)) || A2(r, 68352, 68405)) || A2(r, 68416, 68437)) || A2(r, 68440, 68466)) || A2(r, 68472, 68497)) || A2(r, 68521, 68527)) || A2(r, 68608, 68680)) || A2(r, 68736, 68786))) : (l(69599) ? ((((((((((A2(r, 68800, 68850) || A2(r, 68858, 68899)) || A2(r, 68912, 68921)) || A2(r, 69216, 69246)) || A2(r, 69248, 69289)) || A2(r, 69296, 69297)) || A2(r, 69376, 69415)) || A2(r, 69424, 69445)) || A2(r, 69457, 69460)) || A2(r, 69488, 69505)) || A2(r, 69552, 69579)) : (((((((((((A2(r, 69600, 69622) || A2(r, 69635, 69687)) || A2(r, 69714, 69743)) || A2(r, 69745, 69746)) || e(69749)) || A2(r, 69763, 69807)) || A2(r, 69840, 69864)) || A2(r, 69872, 69881)) || A2(r, 69891, 69926)) || A2(r, 69942, 69951)) || e(69956)) || e(69959)))) : (l(70460) ? (l(70279) ? ((((((((((A2(r, 69968, 70002) || e(70006)) || A2(r, 70019, 70066)) || A2(r, 70081, 70084)) || A2(r, 70096, 70106)) || e(70108)) || A2(r, 70113, 70132)) || A2(r, 70144, 70161)) || A2(r, 70163, 70187)) || A2(r, 70207, 70208)) || A2(r, 70272, 70278)) : (((((((((((e(70280) || A2(r, 70282, 70285)) || A2(r, 70287, 70301)) || A2(r, 70303, 70312)) || A2(r, 70320, 70366)) || A2(r, 70384, 70393)) || A2(r, 70405, 70412)) || A2(r, 70415, 70416)) || A2(r, 70419, 70440)) || A2(r, 70442, 70448)) || A2(r, 70450, 70451)) || A2(r, 70453, 70457))) : (l(71039) ? ((((((((((e(70461) || e(70480)) || A2(r, 70493, 70497)) || A2(r, 70656, 70708)) || A2(r, 70727, 70730)) || A2(r, 70736, 70745)) || A2(r, 70751, 70753)) || A2(r, 70784, 70831)) || A2(r, 70852, 70853)) || e(70855)) || A2(r, 70864, 70873)) : (((((((((((A2(r, 71040, 71086) || A2(r, 71128, 71131)) || A2(r, 71168, 71215)) || e(71236)) || A2(r, 71248, 71257)) || A2(r, 71296, 71338)) || e(71352)) || A2(r, 71360, 71369)) || A2(r, 71424, 71450)) || A2(r, 71472, 71483)) || A2(r, 71488, 71494)) || A2(r, 71680, 71723)))))) : (l(119981) ? (l(92159) ? (l(72967) ? (l(72249) ? (((((((((((A2(r, 71840, 71922) || A2(r, 71935, 71942)) || e(71945)) || A2(r, 71948, 71955)) || A2(r, 71957, 71958)) || A2(r, 71960, 71983)) || A2(r, 72016, 72025)) || A2(r, 72096, 72103)) || A2(r, 72106, 72144)) || e(72192)) || A2(r, 72203, 72242)) || ((A2($elm$core$Basics$modBy, 2, code) === 1) && (A2(r, 71999, 72001) || A2(r, 72161, 72163)))) : ((((((((((e(72250) || e(72272)) || A2(r, 72284, 72329)) || e(72349)) || A2(r, 72368, 72440)) || A2(r, 72704, 72712)) || A2(r, 72714, 72750)) || e(72768)) || A2(r, 72784, 72812)) || A2(r, 72818, 72847)) || A2(r, 72960, 72966))) : (l(73475) ? ((((((((((A2(r, 72968, 72969) || A2(r, 72971, 73008)) || e(73030)) || A2(r, 73040, 73049)) || A2(r, 73056, 73061)) || A2(r, 73063, 73064)) || A2(r, 73066, 73097)) || e(73112)) || A2(r, 73120, 73129)) || A2(r, 73440, 73458)) || e(73474)) : (((((((((((A2(r, 73476, 73488) || A2(r, 73490, 73523)) || A2(r, 73552, 73561)) || e(73648)) || A2(r, 73664, 73684)) || A2(r, 73728, 74649)) || A2(r, 74752, 74862)) || A2(r, 74880, 75075)) || A2(r, 77712, 77808)) || A2(r, 77824, 78895)) || A2(r, 78913, 78918)) || A2(r, 82944, 83526)))) : (l(101639) ? (l(93052) ? ((((((((((A2(r, 92160, 92728) || A2(r, 92736, 92766)) || A2(r, 92768, 92777)) || A2(r, 92784, 92862)) || A2(r, 92864, 92873)) || A2(r, 92880, 92909)) || A2(r, 92928, 92975)) || A2(r, 92992, 92995)) || A2(r, 93008, 93017)) || A2(r, 93019, 93025)) || A2(r, 93027, 93047)) : ((((((((((A2(r, 93053, 93071) || A2(r, 93760, 93846)) || A2(r, 93952, 94026)) || e(94032)) || A2(r, 94099, 94111)) || A2(r, 94176, 94177)) || e(94179)) || e(94208)) || e(100343)) || A2(r, 100352, 101589)) || e(101632))) : (l(113775) ? ((((((((((e(101640) || A2(r, 110576, 110579)) || A2(r, 110581, 110587)) || A2(r, 110589, 110590)) || A2(r, 110592, 110882)) || e(110898)) || A2(r, 110928, 110930)) || e(110933)) || A2(r, 110948, 110951)) || A2(r, 110960, 111355)) || A2(r, 113664, 113770)) : (((((((((((A2(r, 113776, 113788) || A2(r, 113792, 113800)) || A2(r, 113808, 113817)) || A2(r, 119488, 119507)) || A2(r, 119520, 119539)) || A2(r, 119648, 119672)) || A2(r, 119808, 119892)) || A2(r, 119894, 119964)) || A2(r, 119966, 119967)) || e(119970)) || A2(r, 119973, 119974)) || A2(r, 119977, 119980))))) : (l(125263) ? (l(120745) ? (l(120137) ? ((((((((((A2(r, 119982, 119993) || e(119995)) || A2(r, 119997, 120003)) || A2(r, 120005, 120069)) || A2(r, 120071, 120074)) || A2(r, 120077, 120084)) || A2(r, 120086, 120092)) || A2(r, 120094, 120121)) || A2(r, 120123, 120126)) || A2(r, 120128, 120132)) || e(120134)) : ((((((((((A2(r, 120138, 120144) || A2(r, 120146, 120485)) || A2(r, 120488, 120512)) || A2(r, 120514, 120538)) || A2(r, 120540, 120570)) || A2(r, 120572, 120596)) || A2(r, 120598, 120628)) || A2(r, 120630, 120654)) || A2(r, 120656, 120686)) || A2(r, 120688, 120712)) || A2(r, 120714, 120744))) : (l(123583) ? ((((((((((A2(r, 120746, 120770) || A2(r, 120772, 120779)) || A2(r, 120782, 120831)) || A2(r, 122624, 122654)) || A2(r, 122661, 122666)) || A2(r, 122928, 122989)) || A2(r, 123136, 123180)) || A2(r, 123191, 123197)) || A2(r, 123200, 123209)) || e(123214)) || A2(r, 123536, 123565)) : (((((((((((A2(r, 123584, 123627) || A2(r, 123632, 123641)) || A2(r, 124112, 124139)) || A2(r, 124144, 124153)) || A2(r, 124896, 124902)) || A2(r, 124904, 124907)) || A2(r, 124909, 124910)) || A2(r, 124912, 124926)) || A2(r, 124928, 125124)) || A2(r, 125127, 125135)) || A2(r, 125184, 125251)) || e(125259)))) : (l(126589) ? (l(126504) ? ((((((((((A2(r, 125264, 125273) || A2(r, 126065, 126123)) || A2(r, 126125, 126127)) || A2(r, 126129, 126132)) || A2(r, 126209, 126253)) || A2(r, 126255, 126269)) || A2(r, 126464, 126467)) || A2(r, 126469, 126495)) || A2(r, 126497, 126498)) || e(126500)) || e(126503)) : ((((((((((((A2(r, 126505, 126514) || A2(r, 126516, 126519)) || e(126530)) || A2(r, 126541, 126543)) || A2(r, 126545, 126546)) || e(126548)) || A2(r, 126561, 126562)) || e(126564)) || A2(r, 126567, 126570)) || A2(r, 126572, 126578)) || A2(r, 126580, 126583)) || A2(r, 126585, 126588)) || ((A2($elm$core$Basics$modBy, 2, code) === 1) && ((A2(r, 126521, 126523) || A2(r, 126535, 126539)) || A2(r, 126551, 126559))))) : (l(177976) ? ((((((((((e(126590) || A2(r, 126592, 126601)) || A2(r, 126603, 126619)) || A2(r, 126625, 126627)) || A2(r, 126629, 126633)) || A2(r, 126635, 126651)) || A2(r, 127232, 127244)) || A2(r, 130032, 130041)) || e(131072)) || e(173791)) || e(173824)) : (((((((((((e(177977) || e(177984)) || e(178205)) || e(178208)) || e(183969)) || e(183984)) || e(191456)) || A2(r, 194560, 195101)) || e(196608)) || e(201546)) || e(201552)) || e(205743))))))));
};
var $elm$core$Char$toLower = _Char_toLower;
var $elm$core$Char$toUpper = _Char_toUpper;
var $miniBill$elm_unicode$Unicode$isLower = function (c) {
	var simple = _Utils_eq(
		$elm$core$Char$toLower(c),
		c) && (!_Utils_eq(
		$elm$core$Char$toUpper(c),
		c));
	var code = $elm$core$Char$toCode(c);
	var e = function (hex) {
		return _Utils_eq(hex, code);
	};
	var l = function (hex) {
		return _Utils_cmp(code, hex) < 0;
	};
	var r = F2(
		function (from, to) {
			return (_Utils_cmp(from, code) < 1) && (_Utils_cmp(code, to) < 1);
		});
	return (simple && ((((code <= 836) || A2(r, 838, 8559)) || A2(r, 8576, 9423)) || A2(r, 9450, 983040))) || (l(43001) ? (l(8457) ? (l(590) ? (((((((A2(r, 311, 312) || A2(r, 396, 397)) || A2(r, 409, 411)) || A2(r, 426, 427)) || A2(r, 441, 442)) || A2(r, 445, 447)) || e(545)) || A2(r, 563, 569)) : ((((((((A2(r, 591, 659) || A2(r, 661, 687)) || A2(r, 1019, 1020)) || A2(r, 1376, 1416)) || A2(r, 7424, 7467)) || A2(r, 7531, 7543)) || A2(r, 7545, 7578)) || A2(r, 7829, 7837)) || e(7839))) : (l(11376) ? (((((((e(8458) || A2(r, 8462, 8463)) || e(8467)) || e(8495)) || e(8500)) || e(8505)) || A2(r, 8508, 8509)) || A2(r, 8518, 8521)) : (((((((((e(11377) || A2(r, 11379, 11380)) || A2(r, 11382, 11387)) || A2(r, 11491, 11492)) || A2(r, 42799, 42801)) || A2(r, 42865, 42872)) || e(42894)) || A2(r, 42899, 42901)) || e(42927)) || ((A2($elm$core$Basics$modBy, 2, code) === 1) && A2(r, 42963, 42965))))) : (l(120353) ? (l(119994) ? (((((((e(43002) || A2(r, 43824, 43866)) || A2(r, 43872, 43880)) || A2(r, 119834, 119859)) || A2(r, 119886, 119892)) || A2(r, 119894, 119911)) || A2(r, 119938, 119963)) || A2(r, 119990, 119993)) : ((((((((e(119995) || A2(r, 119997, 120003)) || A2(r, 120005, 120015)) || A2(r, 120042, 120067)) || A2(r, 120094, 120119)) || A2(r, 120146, 120171)) || A2(r, 120198, 120223)) || A2(r, 120250, 120275)) || A2(r, 120302, 120327))) : (l(120655) ? (((((((A2(r, 120354, 120379) || A2(r, 120406, 120431)) || A2(r, 120458, 120485)) || A2(r, 120514, 120538)) || A2(r, 120540, 120545)) || A2(r, 120572, 120596)) || A2(r, 120598, 120603)) || A2(r, 120630, 120654)) : ((((((((A2(r, 120656, 120661) || A2(r, 120688, 120712)) || A2(r, 120714, 120719)) || A2(r, 120746, 120770)) || A2(r, 120772, 120777)) || e(120779)) || A2(r, 122624, 122633)) || A2(r, 122635, 122654)) || A2(r, 122661, 122666)))));
};
var $stil4m$elm_syntax$Elm$Parser$Tokens$reservedList = _List_fromArray(
	['module', 'exposing', 'import', 'as', 'if', 'then', 'else', 'let', 'in', 'case', 'of', 'port', 'type', 'where']);
var $elm$parser$Parser$ExpectingVariable = {$: 7};
var $elm$parser$Parser$Advanced$varHelp = F7(
	function (isGood, offset, row, col, src, indent, context) {
		varHelp:
		while (true) {
			var newOffset = A3($elm$parser$Parser$Advanced$isSubChar, isGood, offset, src);
			if (_Utils_eq(newOffset, -1)) {
				return {dj: col, j: context, o: indent, d: offset, d0: row, c: src};
			} else {
				if (_Utils_eq(newOffset, -2)) {
					var $temp$isGood = isGood,
						$temp$offset = offset + 1,
						$temp$row = row + 1,
						$temp$col = 1,
						$temp$src = src,
						$temp$indent = indent,
						$temp$context = context;
					isGood = $temp$isGood;
					offset = $temp$offset;
					row = $temp$row;
					col = $temp$col;
					src = $temp$src;
					indent = $temp$indent;
					context = $temp$context;
					continue varHelp;
				} else {
					var $temp$isGood = isGood,
						$temp$offset = newOffset,
						$temp$row = row,
						$temp$col = col + 1,
						$temp$src = src,
						$temp$indent = indent,
						$temp$context = context;
					isGood = $temp$isGood;
					offset = $temp$offset;
					row = $temp$row;
					col = $temp$col;
					src = $temp$src;
					indent = $temp$indent;
					context = $temp$context;
					continue varHelp;
				}
			}
		}
	});
var $elm$parser$Parser$Advanced$variable = function (i) {
	return function (s) {
		var firstOffset = A3($elm$parser$Parser$Advanced$isSubChar, i.bQ, s.d, s.c);
		if (_Utils_eq(firstOffset, -1)) {
			return A2(
				$elm$parser$Parser$Advanced$Bad,
				false,
				A2($elm$parser$Parser$Advanced$fromState, s, i.dv));
		} else {
			var s1 = _Utils_eq(firstOffset, -2) ? A7($elm$parser$Parser$Advanced$varHelp, i.dJ, s.d + 1, s.d0 + 1, 1, s.c, s.o, s.j) : A7($elm$parser$Parser$Advanced$varHelp, i.dJ, firstOffset, s.d0, s.dj + 1, s.c, s.o, s.j);
			var name = A3($elm$core$String$slice, s.d, s1.d, s.c);
			return A2($elm$core$Set$member, name, i.d$) ? A2(
				$elm$parser$Parser$Advanced$Bad,
				false,
				A2($elm$parser$Parser$Advanced$fromState, s, i.dv)) : A3($elm$parser$Parser$Advanced$Good, true, name, s1);
		}
	};
};
var $elm$parser$Parser$variable = function (i) {
	return $elm$parser$Parser$Advanced$variable(
		{dv: $elm$parser$Parser$ExpectingVariable, dJ: i.dJ, d$: i.d$, bQ: i.bQ});
};
var $stil4m$elm_syntax$Elm$Parser$Tokens$functionName = $stil4m$elm_syntax$Combine$fromCore(
	$elm$parser$Parser$variable(
		{
			dJ: function (c) {
				return $miniBill$elm_unicode$Unicode$isAlphaNum(c) || (c === '_');
			},
			d$: $elm$core$Set$fromList($stil4m$elm_syntax$Elm$Parser$Tokens$reservedList),
			bQ: $miniBill$elm_unicode$Unicode$isLower
		}));
var $elm$parser$Parser$ExpectingKeyword = function (a) {
	return {$: 9, a: a};
};
var $elm$parser$Parser$Advanced$keyword = function (_v0) {
	var kwd = _v0.a;
	var expecting = _v0.b;
	var progress = !$elm$core$String$isEmpty(kwd);
	return function (s) {
		var _v1 = A5($elm$parser$Parser$Advanced$isSubString, kwd, s.d, s.d0, s.dj, s.c);
		var newOffset = _v1.a;
		var newRow = _v1.b;
		var newCol = _v1.c;
		return (_Utils_eq(newOffset, -1) || (0 <= A3(
			$elm$parser$Parser$Advanced$isSubChar,
			function (c) {
				return $elm$core$Char$isAlphaNum(c) || (c === '_');
			},
			newOffset,
			s.c))) ? A2(
			$elm$parser$Parser$Advanced$Bad,
			false,
			A2($elm$parser$Parser$Advanced$fromState, s, expecting)) : A3(
			$elm$parser$Parser$Advanced$Good,
			progress,
			0,
			{dj: newCol, j: s.j, o: s.o, d: newOffset, d0: newRow, c: s.c});
	};
};
var $elm$parser$Parser$keyword = function (kwd) {
	return $elm$parser$Parser$Advanced$keyword(
		A2(
			$elm$parser$Parser$Advanced$Token,
			kwd,
			$elm$parser$Parser$ExpectingKeyword(kwd)));
};
var $elm$parser$Parser$Advanced$lazy = function (thunk) {
	return function (s) {
		var _v0 = thunk(0);
		var parse = _v0;
		return parse(s);
	};
};
var $elm$parser$Parser$lazy = $elm$parser$Parser$Advanced$lazy;
var $stil4m$elm_syntax$Combine$lazy = function (t) {
	return function (state) {
		return $elm$parser$Parser$lazy(
			function (_v0) {
				return function (_v1) {
					var t_ = _v1;
					return t_(state);
				}(
					t(0));
			});
	};
};
var $elm$parser$Parser$Nestable = 1;
var $elm$parser$Parser$Advanced$findSubString = _Parser_findSubString;
var $elm$parser$Parser$Advanced$fromInfo = F4(
	function (row, col, x, context) {
		return A2(
			$elm$parser$Parser$Advanced$AddRight,
			$elm$parser$Parser$Advanced$Empty,
			A4($elm$parser$Parser$Advanced$DeadEnd, row, col, x, context));
	});
var $elm$parser$Parser$Advanced$chompUntil = function (_v0) {
	var str = _v0.a;
	var expecting = _v0.b;
	return function (s) {
		var _v1 = A5($elm$parser$Parser$Advanced$findSubString, str, s.d, s.d0, s.dj, s.c);
		var newOffset = _v1.a;
		var newRow = _v1.b;
		var newCol = _v1.c;
		return _Utils_eq(newOffset, -1) ? A2(
			$elm$parser$Parser$Advanced$Bad,
			false,
			A4($elm$parser$Parser$Advanced$fromInfo, newRow, newCol, expecting, s.j)) : A3(
			$elm$parser$Parser$Advanced$Good,
			_Utils_cmp(s.d, newOffset) < 0,
			0,
			{dj: newCol, j: s.j, o: s.o, d: newOffset, d0: newRow, c: s.c});
	};
};
var $elm$parser$Parser$Advanced$isChar = function (_char) {
	return true;
};
var $elm$parser$Parser$Advanced$revAlways = F2(
	function (_v0, b) {
		return b;
	});
var $elm$parser$Parser$Advanced$skip = F2(
	function (iParser, kParser) {
		return A3($elm$parser$Parser$Advanced$map2, $elm$parser$Parser$Advanced$revAlways, iParser, kParser);
	});
var $elm$parser$Parser$Advanced$nestableHelp = F5(
	function (isNotRelevant, open, close, expectingClose, nestLevel) {
		return A2(
			$elm$parser$Parser$Advanced$skip,
			$elm$parser$Parser$Advanced$chompWhile(isNotRelevant),
			$elm$parser$Parser$Advanced$oneOf(
				_List_fromArray(
					[
						(nestLevel === 1) ? close : A2(
						$elm$parser$Parser$Advanced$andThen,
						function (_v0) {
							return A5($elm$parser$Parser$Advanced$nestableHelp, isNotRelevant, open, close, expectingClose, nestLevel - 1);
						},
						close),
						A2(
						$elm$parser$Parser$Advanced$andThen,
						function (_v1) {
							return A5($elm$parser$Parser$Advanced$nestableHelp, isNotRelevant, open, close, expectingClose, nestLevel + 1);
						},
						open),
						A2(
						$elm$parser$Parser$Advanced$andThen,
						function (_v2) {
							return A5($elm$parser$Parser$Advanced$nestableHelp, isNotRelevant, open, close, expectingClose, nestLevel);
						},
						A2($elm$parser$Parser$Advanced$chompIf, $elm$parser$Parser$Advanced$isChar, expectingClose))
					])));
	});
var $elm$parser$Parser$Advanced$nestableComment = F2(
	function (open, close) {
		var oStr = open.a;
		var oX = open.b;
		var cStr = close.a;
		var cX = close.b;
		var _v0 = $elm$core$String$uncons(oStr);
		if (_v0.$ === 1) {
			return $elm$parser$Parser$Advanced$problem(oX);
		} else {
			var _v1 = _v0.a;
			var openChar = _v1.a;
			var _v2 = $elm$core$String$uncons(cStr);
			if (_v2.$ === 1) {
				return $elm$parser$Parser$Advanced$problem(cX);
			} else {
				var _v3 = _v2.a;
				var closeChar = _v3.a;
				var isNotRelevant = function (_char) {
					return (!_Utils_eq(_char, openChar)) && (!_Utils_eq(_char, closeChar));
				};
				var chompOpen = $elm$parser$Parser$Advanced$token(open);
				return A2(
					$elm$parser$Parser$Advanced$ignorer,
					chompOpen,
					A5(
						$elm$parser$Parser$Advanced$nestableHelp,
						isNotRelevant,
						chompOpen,
						$elm$parser$Parser$Advanced$token(close),
						cX,
						1));
			}
		}
	});
var $elm$parser$Parser$Advanced$multiComment = F3(
	function (open, close, nestable) {
		if (!nestable) {
			return A2(
				$elm$parser$Parser$Advanced$ignorer,
				$elm$parser$Parser$Advanced$token(open),
				$elm$parser$Parser$Advanced$chompUntil(close));
		} else {
			return A2($elm$parser$Parser$Advanced$nestableComment, open, close);
		}
	});
var $elm$parser$Parser$Advanced$Nestable = 1;
var $elm$parser$Parser$Advanced$NotNestable = 0;
var $elm$parser$Parser$toAdvancedNestable = function (nestable) {
	if (!nestable) {
		return 0;
	} else {
		return 1;
	}
};
var $elm$parser$Parser$multiComment = F3(
	function (open, close, nestable) {
		return A3(
			$elm$parser$Parser$Advanced$multiComment,
			$elm$parser$Parser$toToken(open),
			$elm$parser$Parser$toToken(close),
			$elm$parser$Parser$toAdvancedNestable(nestable));
	});
var $stil4m$elm_syntax$Elm$Parser$Comments$multilineCommentInner = $stil4m$elm_syntax$Combine$fromCore(
	$elm$parser$Parser$getChompedString(
		A3($elm$parser$Parser$multiComment, '{-', '-}', 1)));
var $stil4m$elm_syntax$Elm$Parser$State$addComment = F2(
	function (pair, _v0) {
		var s = _v0;
		return _Utils_update(
			s,
			{
				eH: A2($elm$core$List$cons, pair, s.eH)
			});
	});
var $stil4m$elm_syntax$Combine$modifyState = function (f) {
	return function (state) {
		return $elm$parser$Parser$succeed(
			_Utils_Tuple2(
				f(state),
				0));
	};
};
var $stil4m$elm_syntax$Elm$Parser$Comments$addCommentToState = function (p) {
	return A2(
		$stil4m$elm_syntax$Combine$andThen,
		function (pair) {
			return A2(
				$stil4m$elm_syntax$Combine$continueWith,
				$stil4m$elm_syntax$Combine$succeed(0),
				$stil4m$elm_syntax$Combine$modifyState(
					$stil4m$elm_syntax$Elm$Parser$State$addComment(pair)));
		},
		p);
};
var $stil4m$elm_syntax$Elm$Parser$Comments$parseComment = function (commentParser) {
	return $stil4m$elm_syntax$Elm$Parser$Comments$addCommentToState(
		$stil4m$elm_syntax$Elm$Parser$Node$parser(commentParser));
};
var $stil4m$elm_syntax$Elm$Parser$Comments$multilineComment = $stil4m$elm_syntax$Combine$lazy(
	function (_v0) {
		return $stil4m$elm_syntax$Elm$Parser$Comments$parseComment($stil4m$elm_syntax$Elm$Parser$Comments$multilineCommentInner);
	});
var $stil4m$elm_syntax$Elm$Parser$Whitespace$untilNewlineToken = $stil4m$elm_syntax$Combine$fromCore(
	$elm$parser$Parser$getChompedString(
		$elm$parser$Parser$chompWhile(
			function (c) {
				return (c !== '\u000D') && (c !== '\n');
			})));
var $stil4m$elm_syntax$Elm$Parser$Comments$singleLineComment = $stil4m$elm_syntax$Elm$Parser$Comments$parseComment(
	A2(
		$stil4m$elm_syntax$Combine$andMap,
		$stil4m$elm_syntax$Elm$Parser$Whitespace$untilNewlineToken,
		A2(
			$stil4m$elm_syntax$Combine$andMap,
			$stil4m$elm_syntax$Combine$string('--'),
			$stil4m$elm_syntax$Combine$succeed($elm$core$Basics$append))));
var $stil4m$elm_syntax$Elm$Parser$Layout$anyComment = A2($stil4m$elm_syntax$Combine$or, $stil4m$elm_syntax$Elm$Parser$Comments$singleLineComment, $stil4m$elm_syntax$Elm$Parser$Comments$multilineComment);
var $elm$parser$Parser$Done = function (a) {
	return {$: 1, a: a};
};
var $elm$parser$Parser$Loop = function (a) {
	return {$: 0, a: a};
};
var $elm$parser$Parser$Advanced$loopHelp = F4(
	function (p, state, callback, s0) {
		loopHelp:
		while (true) {
			var _v0 = callback(state);
			var parse = _v0;
			var _v1 = parse(s0);
			if (!_v1.$) {
				var p1 = _v1.a;
				var step = _v1.b;
				var s1 = _v1.c;
				if (!step.$) {
					var newState = step.a;
					var $temp$p = p || p1,
						$temp$state = newState,
						$temp$callback = callback,
						$temp$s0 = s1;
					p = $temp$p;
					state = $temp$state;
					callback = $temp$callback;
					s0 = $temp$s0;
					continue loopHelp;
				} else {
					var result = step.a;
					return A3($elm$parser$Parser$Advanced$Good, p || p1, result, s1);
				}
			} else {
				var p1 = _v1.a;
				var x = _v1.b;
				return A2($elm$parser$Parser$Advanced$Bad, p || p1, x);
			}
		}
	});
var $elm$parser$Parser$Advanced$loop = F2(
	function (state, callback) {
		return function (s) {
			return A4($elm$parser$Parser$Advanced$loopHelp, false, state, callback, s);
		};
	});
var $elm$parser$Parser$Advanced$Done = function (a) {
	return {$: 1, a: a};
};
var $elm$parser$Parser$Advanced$Loop = function (a) {
	return {$: 0, a: a};
};
var $elm$parser$Parser$toAdvancedStep = function (step) {
	if (!step.$) {
		var s = step.a;
		return $elm$parser$Parser$Advanced$Loop(s);
	} else {
		var a = step.a;
		return $elm$parser$Parser$Advanced$Done(a);
	}
};
var $elm$parser$Parser$loop = F2(
	function (state, callback) {
		return A2(
			$elm$parser$Parser$Advanced$loop,
			state,
			function (s) {
				return A2(
					$elm$parser$Parser$map,
					$elm$parser$Parser$toAdvancedStep,
					callback(s));
			});
	});
var $stil4m$elm_syntax$Combine$many = function (p) {
	var helper = function (_v2) {
		var oldState = _v2.a;
		var items = _v2.b;
		return $elm$parser$Parser$oneOf(
			_List_fromArray(
				[
					A2(
					$elm$parser$Parser$keeper,
					$elm$parser$Parser$succeed(
						function (_v0) {
							var newState = _v0.a;
							var item = _v0.b;
							return $elm$parser$Parser$Loop(
								_Utils_Tuple2(
									newState,
									A2($elm$core$List$cons, item, items)));
						}),
					A2($stil4m$elm_syntax$Combine$app, p, oldState)),
					A2(
					$elm$parser$Parser$map,
					function (_v1) {
						return $elm$parser$Parser$Done(
							_Utils_Tuple2(
								oldState,
								$elm$core$List$reverse(items)));
					},
					$elm$parser$Parser$succeed(0))
				]));
	};
	return function (state) {
		return A2(
			$elm$parser$Parser$loop,
			_Utils_Tuple2(state, _List_Nil),
			helper);
	};
};
var $stil4m$elm_syntax$Combine$many1 = function (p) {
	return A2(
		$stil4m$elm_syntax$Combine$andMap,
		$stil4m$elm_syntax$Combine$many(p),
		A2(
			$stil4m$elm_syntax$Combine$andMap,
			p,
			$stil4m$elm_syntax$Combine$succeed($elm$core$List$cons)));
};
var $stil4m$elm_syntax$Elm$Parser$Whitespace$many1Spaces = $stil4m$elm_syntax$Combine$fromCore(
	A2(
		$elm$parser$Parser$ignorer,
		$elm$parser$Parser$token(' '),
		$elm$parser$Parser$chompWhile(
			function (c) {
				return c === ' ';
			})));
var $stil4m$elm_syntax$Elm$Parser$Whitespace$realNewLine = $stil4m$elm_syntax$Combine$fromCore(
	$elm$parser$Parser$getChompedString(
		A2(
			$elm$parser$Parser$ignorer,
			A2(
				$elm$parser$Parser$ignorer,
				$elm$parser$Parser$succeed(0),
				$elm$parser$Parser$oneOf(
					_List_fromArray(
						[
							$elm$parser$Parser$chompIf(
							$elm$core$Basics$eq('\u000D')),
							$elm$parser$Parser$succeed(0)
						]))),
			$elm$parser$Parser$symbol('\n'))));
var $stil4m$elm_syntax$Elm$Parser$Layout$verifyIndent = function (f) {
	return $stil4m$elm_syntax$Combine$withState(
		function (s) {
			return $stil4m$elm_syntax$Combine$withLocation(
				function (l) {
					return A2(
						f,
						$stil4m$elm_syntax$Elm$Parser$State$expectedColumn(s),
						l.eF) ? $stil4m$elm_syntax$Combine$succeed(0) : $stil4m$elm_syntax$Combine$fail(
						'Expected higher indent than ' + $elm$core$String$fromInt(l.eF));
				});
		});
};
var $stil4m$elm_syntax$Elm$Parser$Layout$layout = A2(
	$stil4m$elm_syntax$Combine$continueWith,
	$stil4m$elm_syntax$Elm$Parser$Layout$verifyIndent(
		F2(
			function (stateIndent, current) {
				return _Utils_cmp(stateIndent, current) < 0;
			})),
	$stil4m$elm_syntax$Combine$many1(
		$stil4m$elm_syntax$Combine$choice(
			_List_fromArray(
				[
					$stil4m$elm_syntax$Elm$Parser$Layout$anyComment,
					A2(
					$stil4m$elm_syntax$Combine$continueWith,
					$stil4m$elm_syntax$Combine$choice(
						_List_fromArray(
							[$stil4m$elm_syntax$Elm$Parser$Whitespace$many1Spaces, $stil4m$elm_syntax$Elm$Parser$Layout$anyComment])),
					$stil4m$elm_syntax$Combine$many1($stil4m$elm_syntax$Elm$Parser$Whitespace$realNewLine)),
					$stil4m$elm_syntax$Elm$Parser$Whitespace$many1Spaces
				]))));
var $stil4m$elm_syntax$Combine$maybe = function (_v0) {
	var p = _v0;
	return function (state) {
		return $elm$parser$Parser$oneOf(
			_List_fromArray(
				[
					A2(
					$elm$parser$Parser$map,
					function (_v1) {
						var c = _v1.a;
						var v = _v1.b;
						return _Utils_Tuple2(
							c,
							$elm$core$Maybe$Just(v));
					},
					p(state)),
					$elm$parser$Parser$succeed(
					_Utils_Tuple2(state, $elm$core$Maybe$Nothing))
				]));
	};
};
var $stil4m$elm_syntax$Elm$Parser$Layout$maybeAroundBothSides = function (x) {
	return A2(
		$stil4m$elm_syntax$Combine$ignore,
		$stil4m$elm_syntax$Combine$maybe($stil4m$elm_syntax$Elm$Parser$Layout$layout),
		A2(
			$stil4m$elm_syntax$Combine$continueWith,
			x,
			$stil4m$elm_syntax$Combine$maybe($stil4m$elm_syntax$Elm$Parser$Layout$layout)));
};
var $stil4m$elm_syntax$Elm$Syntax$Pattern$FloatPattern = function (a) {
	return {$: 6, a: a};
};
var $stil4m$elm_syntax$Elm$Syntax$Pattern$HexPattern = function (a) {
	return {$: 5, a: a};
};
var $stil4m$elm_syntax$Elm$Syntax$Pattern$IntPattern = function (a) {
	return {$: 4, a: a};
};
var $elm$parser$Parser$ExpectingBinary = {$: 4};
var $elm$parser$Parser$ExpectingFloat = {$: 5};
var $elm$parser$Parser$ExpectingHex = {$: 2};
var $elm$parser$Parser$ExpectingInt = {$: 1};
var $elm$parser$Parser$ExpectingNumber = {$: 6};
var $elm$parser$Parser$ExpectingOctal = {$: 3};
var $elm$core$Result$fromMaybe = F2(
	function (err, maybe) {
		if (!maybe.$) {
			var v = maybe.a;
			return $elm$core$Result$Ok(v);
		} else {
			return $elm$core$Result$Err(err);
		}
	});
var $elm$parser$Parser$Advanced$consumeBase = _Parser_consumeBase;
var $elm$parser$Parser$Advanced$consumeBase16 = _Parser_consumeBase16;
var $elm$parser$Parser$Advanced$bumpOffset = F2(
	function (newOffset, s) {
		return {dj: s.dj + (newOffset - s.d), j: s.j, o: s.o, d: newOffset, d0: s.d0, c: s.c};
	});
var $elm$parser$Parser$Advanced$chompBase10 = _Parser_chompBase10;
var $elm$parser$Parser$Advanced$isAsciiCode = _Parser_isAsciiCode;
var $elm$parser$Parser$Advanced$consumeExp = F2(
	function (offset, src) {
		if (A3($elm$parser$Parser$Advanced$isAsciiCode, 101, offset, src) || A3($elm$parser$Parser$Advanced$isAsciiCode, 69, offset, src)) {
			var eOffset = offset + 1;
			var expOffset = (A3($elm$parser$Parser$Advanced$isAsciiCode, 43, eOffset, src) || A3($elm$parser$Parser$Advanced$isAsciiCode, 45, eOffset, src)) ? (eOffset + 1) : eOffset;
			var newOffset = A2($elm$parser$Parser$Advanced$chompBase10, expOffset, src);
			return _Utils_eq(expOffset, newOffset) ? (-newOffset) : newOffset;
		} else {
			return offset;
		}
	});
var $elm$parser$Parser$Advanced$consumeDotAndExp = F2(
	function (offset, src) {
		return A3($elm$parser$Parser$Advanced$isAsciiCode, 46, offset, src) ? A2(
			$elm$parser$Parser$Advanced$consumeExp,
			A2($elm$parser$Parser$Advanced$chompBase10, offset + 1, src),
			src) : A2($elm$parser$Parser$Advanced$consumeExp, offset, src);
	});
var $elm$parser$Parser$Advanced$finalizeInt = F5(
	function (invalid, handler, startOffset, _v0, s) {
		var endOffset = _v0.a;
		var n = _v0.b;
		if (handler.$ === 1) {
			var x = handler.a;
			return A2(
				$elm$parser$Parser$Advanced$Bad,
				true,
				A2($elm$parser$Parser$Advanced$fromState, s, x));
		} else {
			var toValue = handler.a;
			return _Utils_eq(startOffset, endOffset) ? A2(
				$elm$parser$Parser$Advanced$Bad,
				_Utils_cmp(s.d, startOffset) < 0,
				A2($elm$parser$Parser$Advanced$fromState, s, invalid)) : A3(
				$elm$parser$Parser$Advanced$Good,
				true,
				toValue(n),
				A2($elm$parser$Parser$Advanced$bumpOffset, endOffset, s));
		}
	});
var $elm$core$String$toFloat = _String_toFloat;
var $elm$parser$Parser$Advanced$finalizeFloat = F6(
	function (invalid, expecting, intSettings, floatSettings, intPair, s) {
		var intOffset = intPair.a;
		var floatOffset = A2($elm$parser$Parser$Advanced$consumeDotAndExp, intOffset, s.c);
		if (floatOffset < 0) {
			return A2(
				$elm$parser$Parser$Advanced$Bad,
				true,
				A4($elm$parser$Parser$Advanced$fromInfo, s.d0, s.dj - (floatOffset + s.d), invalid, s.j));
		} else {
			if (_Utils_eq(s.d, floatOffset)) {
				return A2(
					$elm$parser$Parser$Advanced$Bad,
					false,
					A2($elm$parser$Parser$Advanced$fromState, s, expecting));
			} else {
				if (_Utils_eq(intOffset, floatOffset)) {
					return A5($elm$parser$Parser$Advanced$finalizeInt, invalid, intSettings, s.d, intPair, s);
				} else {
					if (floatSettings.$ === 1) {
						var x = floatSettings.a;
						return A2(
							$elm$parser$Parser$Advanced$Bad,
							true,
							A2($elm$parser$Parser$Advanced$fromState, s, invalid));
					} else {
						var toValue = floatSettings.a;
						var _v1 = $elm$core$String$toFloat(
							A3($elm$core$String$slice, s.d, floatOffset, s.c));
						if (_v1.$ === 1) {
							return A2(
								$elm$parser$Parser$Advanced$Bad,
								true,
								A2($elm$parser$Parser$Advanced$fromState, s, invalid));
						} else {
							var n = _v1.a;
							return A3(
								$elm$parser$Parser$Advanced$Good,
								true,
								toValue(n),
								A2($elm$parser$Parser$Advanced$bumpOffset, floatOffset, s));
						}
					}
				}
			}
		}
	});
var $elm$parser$Parser$Advanced$number = function (c) {
	return function (s) {
		if (A3($elm$parser$Parser$Advanced$isAsciiCode, 48, s.d, s.c)) {
			var zeroOffset = s.d + 1;
			var baseOffset = zeroOffset + 1;
			return A3($elm$parser$Parser$Advanced$isAsciiCode, 120, zeroOffset, s.c) ? A5(
				$elm$parser$Parser$Advanced$finalizeInt,
				c.e5,
				c.dG,
				baseOffset,
				A2($elm$parser$Parser$Advanced$consumeBase16, baseOffset, s.c),
				s) : (A3($elm$parser$Parser$Advanced$isAsciiCode, 111, zeroOffset, s.c) ? A5(
				$elm$parser$Parser$Advanced$finalizeInt,
				c.e5,
				c.dW,
				baseOffset,
				A3($elm$parser$Parser$Advanced$consumeBase, 8, baseOffset, s.c),
				s) : (A3($elm$parser$Parser$Advanced$isAsciiCode, 98, zeroOffset, s.c) ? A5(
				$elm$parser$Parser$Advanced$finalizeInt,
				c.e5,
				c.dg,
				baseOffset,
				A3($elm$parser$Parser$Advanced$consumeBase, 2, baseOffset, s.c),
				s) : A6(
				$elm$parser$Parser$Advanced$finalizeFloat,
				c.e5,
				c.dv,
				c.dK,
				c.dB,
				_Utils_Tuple2(zeroOffset, 0),
				s)));
		} else {
			return A6(
				$elm$parser$Parser$Advanced$finalizeFloat,
				c.e5,
				c.dv,
				c.dK,
				c.dB,
				A3($elm$parser$Parser$Advanced$consumeBase, 10, s.d, s.c),
				s);
		}
	};
};
var $elm$parser$Parser$number = function (i) {
	return $elm$parser$Parser$Advanced$number(
		{
			dg: A2($elm$core$Result$fromMaybe, $elm$parser$Parser$ExpectingBinary, i.dg),
			dv: $elm$parser$Parser$ExpectingNumber,
			dB: A2($elm$core$Result$fromMaybe, $elm$parser$Parser$ExpectingFloat, i.dB),
			dG: A2($elm$core$Result$fromMaybe, $elm$parser$Parser$ExpectingHex, i.dG),
			dK: A2($elm$core$Result$fromMaybe, $elm$parser$Parser$ExpectingInt, i.dK),
			e5: $elm$parser$Parser$ExpectingNumber,
			dW: A2($elm$core$Result$fromMaybe, $elm$parser$Parser$ExpectingOctal, i.dW)
		});
};
var $stil4m$elm_syntax$Elm$Parser$Numbers$raw = F3(
	function (floatf, intf, hexf) {
		return $elm$parser$Parser$number(
			{
				dg: $elm$core$Maybe$Nothing,
				dB: $elm$core$Maybe$Just(floatf),
				dG: $elm$core$Maybe$Just(hexf),
				dK: $elm$core$Maybe$Just(intf),
				dW: $elm$core$Maybe$Nothing
			});
	});
var $stil4m$elm_syntax$Elm$Parser$Numbers$number = F3(
	function (floatf, intf, hexf) {
		return $stil4m$elm_syntax$Combine$fromCore(
			A3($stil4m$elm_syntax$Elm$Parser$Numbers$raw, floatf, intf, hexf));
	});
var $stil4m$elm_syntax$Elm$Parser$Patterns$numberPart = A3($stil4m$elm_syntax$Elm$Parser$Numbers$number, $stil4m$elm_syntax$Elm$Syntax$Pattern$FloatPattern, $stil4m$elm_syntax$Elm$Syntax$Pattern$IntPattern, $stil4m$elm_syntax$Elm$Syntax$Pattern$HexPattern);
var $stil4m$elm_syntax$Combine$parens = A2(
	$stil4m$elm_syntax$Combine$between,
	$stil4m$elm_syntax$Combine$string('('),
	$stil4m$elm_syntax$Combine$string(')'));
var $stil4m$elm_syntax$Elm$Syntax$Pattern$RecordPattern = function (a) {
	return {$: 8, a: a};
};
var $stil4m$elm_syntax$Combine$sepBy1 = F2(
	function (sep, p) {
		return A2(
			$stil4m$elm_syntax$Combine$andMap,
			$stil4m$elm_syntax$Combine$many(
				A2($stil4m$elm_syntax$Combine$continueWith, p, sep)),
			A2(
				$stil4m$elm_syntax$Combine$andMap,
				p,
				$stil4m$elm_syntax$Combine$succeed($elm$core$List$cons)));
	});
var $stil4m$elm_syntax$Combine$sepBy = F2(
	function (sep, p) {
		return A2(
			$stil4m$elm_syntax$Combine$or,
			A2($stil4m$elm_syntax$Combine$sepBy1, sep, p),
			$stil4m$elm_syntax$Combine$succeed(_List_Nil));
	});
var $stil4m$elm_syntax$Elm$Parser$Patterns$recordPattern = $stil4m$elm_syntax$Combine$lazy(
	function (_v0) {
		return $stil4m$elm_syntax$Elm$Parser$Node$parser(
			A2(
				$stil4m$elm_syntax$Combine$map,
				$stil4m$elm_syntax$Elm$Syntax$Pattern$RecordPattern,
				A3(
					$stil4m$elm_syntax$Combine$between,
					A2(
						$stil4m$elm_syntax$Combine$continueWith,
						$stil4m$elm_syntax$Combine$maybe($stil4m$elm_syntax$Elm$Parser$Layout$layout),
						$stil4m$elm_syntax$Combine$string('{')),
					$stil4m$elm_syntax$Combine$string('}'),
					A2(
						$stil4m$elm_syntax$Combine$sepBy,
						$stil4m$elm_syntax$Combine$string(','),
						$stil4m$elm_syntax$Elm$Parser$Layout$maybeAroundBothSides(
							$stil4m$elm_syntax$Elm$Parser$Node$parser($stil4m$elm_syntax$Elm$Parser$Tokens$functionName))))));
	});
var $elm$core$String$concat = function (strings) {
	return A2($elm$core$String$join, '', strings);
};
var $elm$parser$Parser$Advanced$getOffset = function (s) {
	return A3($elm$parser$Parser$Advanced$Good, false, s.d, s);
};
var $elm$parser$Parser$getOffset = $elm$parser$Parser$Advanced$getOffset;
var $stil4m$elm_syntax$Elm$Parser$Tokens$stringLiteral = function () {
	var helper = function (s) {
		return s.K ? A2(
			$elm$parser$Parser$map,
			function (v) {
				return $elm$parser$Parser$Loop(
					{
						K: false,
						x: A2(
							$elm$core$List$cons,
							$elm$core$String$fromList(
								_List_fromArray(
									[v])),
							s.x)
					});
			},
			$stil4m$elm_syntax$Elm$Parser$Tokens$escapedCharValue) : $elm$parser$Parser$oneOf(
			_List_fromArray(
				[
					A2(
					$elm$parser$Parser$map,
					function (_v0) {
						return $elm$parser$Parser$Done(
							$elm$core$String$concat(
								$elm$core$List$reverse(s.x)));
					},
					$elm$parser$Parser$symbol('\"')),
					A2(
					$elm$parser$Parser$map,
					function (_v1) {
						return $elm$parser$Parser$Loop(
							{K: true, x: s.x});
					},
					$elm$parser$Parser$getChompedString(
						$elm$parser$Parser$symbol('\\'))),
					A2(
					$elm$parser$Parser$andThen,
					function (_v2) {
						var start = _v2.a;
						var value = _v2.b;
						var end = _v2.c;
						return _Utils_eq(start, end) ? $elm$parser$Parser$problem('Expected a string character or a double quote') : $elm$parser$Parser$succeed(
							$elm$parser$Parser$Loop(
								{
									K: s.K,
									x: A2($elm$core$List$cons, value, s.x)
								}));
					},
					A2(
						$elm$parser$Parser$keeper,
						A2(
							$elm$parser$Parser$keeper,
							A2(
								$elm$parser$Parser$keeper,
								$elm$parser$Parser$succeed(
									F3(
										function (start, value, end) {
											return _Utils_Tuple3(start, value, end);
										})),
								$elm$parser$Parser$getOffset),
							$elm$parser$Parser$getChompedString(
								$elm$parser$Parser$chompWhile(
									function (c) {
										return (c !== '\"') && (c !== '\\');
									}))),
						$elm$parser$Parser$getOffset))
				]));
	};
	return $stil4m$elm_syntax$Combine$fromCore(
		A2(
			$elm$parser$Parser$keeper,
			A2(
				$elm$parser$Parser$ignorer,
				$elm$parser$Parser$succeed($elm$core$Basics$identity),
				$elm$parser$Parser$symbol('\"')),
			A2(
				$elm$parser$Parser$loop,
				{K: false, x: _List_Nil},
				helper)));
}();
var $miniBill$elm_unicode$Unicode$isUpper = function (c) {
	var simple = _Utils_eq(
		$elm$core$Char$toUpper(c),
		c) && (!_Utils_eq(
		$elm$core$Char$toLower(c),
		c));
	var code = $elm$core$Char$toCode(c);
	var e = function (hex) {
		return _Utils_eq(hex, code);
	};
	var l = function (hex) {
		return _Utils_cmp(code, hex) < 0;
	};
	var r = F2(
		function (from, to) {
			return (_Utils_cmp(from, code) < 1) && (_Utils_cmp(code, to) < 1);
		});
	return (simple && (((code <= 8543) || A2(r, 8560, 9397)) || A2(r, 9424, 983040))) || (l(120015) ? (l(8509) ? ((((((((((A2(r, 978, 980) || e(8450)) || e(8455)) || A2(r, 8459, 8461)) || A2(r, 8464, 8466)) || e(8469)) || A2(r, 8473, 8477)) || e(8484)) || e(8488)) || A2(r, 8490, 8493)) || A2(r, 8496, 8499)) : ((((((((((A2(r, 8510, 8511) || e(8517)) || A2(r, 119808, 119833)) || A2(r, 119860, 119885)) || A2(r, 119912, 119937)) || e(119964)) || A2(r, 119966, 119967)) || e(119970)) || A2(r, 119973, 119974)) || A2(r, 119977, 119980)) || A2(r, 119982, 119989))) : (l(120223) ? ((((((((((A2(r, 120016, 120041) || A2(r, 120068, 120069)) || A2(r, 120071, 120074)) || A2(r, 120077, 120084)) || A2(r, 120086, 120092)) || A2(r, 120120, 120121)) || A2(r, 120123, 120126)) || A2(r, 120128, 120132)) || e(120134)) || A2(r, 120138, 120144)) || A2(r, 120172, 120197)) : ((((((((((A2(r, 120224, 120249) || A2(r, 120276, 120301)) || A2(r, 120328, 120353)) || A2(r, 120380, 120405)) || A2(r, 120432, 120457)) || A2(r, 120488, 120512)) || A2(r, 120546, 120570)) || A2(r, 120604, 120628)) || A2(r, 120662, 120686)) || A2(r, 120720, 120744)) || e(120778))));
};
var $stil4m$elm_syntax$Elm$Parser$Tokens$typeName = $stil4m$elm_syntax$Combine$fromCore(
	$elm$parser$Parser$variable(
		{
			dJ: function (c) {
				return $miniBill$elm_unicode$Unicode$isAlphaNum(c) || (c === '_');
			},
			d$: $elm$core$Set$fromList($stil4m$elm_syntax$Elm$Parser$Tokens$reservedList),
			bQ: $miniBill$elm_unicode$Unicode$isUpper
		}));
var $stil4m$elm_syntax$Elm$Parser$Base$typeIndicator = function () {
	var helper = function (_v0) {
		var n = _v0.a;
		var xs = _v0.b;
		return $stil4m$elm_syntax$Combine$choice(
			_List_fromArray(
				[
					A2(
					$stil4m$elm_syntax$Combine$andThen,
					function (t) {
						return helper(
							_Utils_Tuple2(
								t,
								A2($elm$core$List$cons, n, xs)));
					},
					A2(
						$stil4m$elm_syntax$Combine$continueWith,
						$stil4m$elm_syntax$Elm$Parser$Tokens$typeName,
						$stil4m$elm_syntax$Combine$string('.'))),
					$stil4m$elm_syntax$Combine$succeed(
					_Utils_Tuple2(n, xs))
				]));
	};
	return A2(
		$stil4m$elm_syntax$Combine$map,
		function (_v1) {
			var t = _v1.a;
			var xs = _v1.b;
			return _Utils_Tuple2(
				$elm$core$List$reverse(xs),
				t);
		},
		A2(
			$stil4m$elm_syntax$Combine$andThen,
			function (t) {
				return helper(
					_Utils_Tuple2(t, _List_Nil));
			},
			$stil4m$elm_syntax$Elm$Parser$Tokens$typeName));
}();
var $stil4m$elm_syntax$Elm$Syntax$Pattern$VarPattern = function (a) {
	return {$: 11, a: a};
};
var $stil4m$elm_syntax$Elm$Parser$Patterns$variablePart = $stil4m$elm_syntax$Elm$Parser$Node$parser(
	A2($stil4m$elm_syntax$Combine$map, $stil4m$elm_syntax$Elm$Syntax$Pattern$VarPattern, $stil4m$elm_syntax$Elm$Parser$Tokens$functionName));
var $stil4m$elm_syntax$Elm$Parser$Patterns$qualifiedPattern = function (consumeArgs) {
	return A2(
		$stil4m$elm_syntax$Combine$andThen,
		function (_v0) {
			var range = _v0.a;
			var _v1 = _v0.b;
			var mod = _v1.a;
			var name = _v1.b;
			return A2(
				$stil4m$elm_syntax$Combine$map,
				function (args) {
					return A2(
						$stil4m$elm_syntax$Elm$Syntax$Node$Node,
						$stil4m$elm_syntax$Elm$Syntax$Range$combine(
							A2(
								$elm$core$List$cons,
								range,
								A2(
									$elm$core$List$map,
									function (_v2) {
										var r = _v2.a;
										return r;
									},
									args))),
						A2(
							$stil4m$elm_syntax$Elm$Syntax$Pattern$NamedPattern,
							A2($stil4m$elm_syntax$Elm$Syntax$Pattern$QualifiedNameRef, mod, name),
							args));
				},
				consumeArgs ? $stil4m$elm_syntax$Combine$many(
					A2(
						$stil4m$elm_syntax$Combine$ignore,
						$stil4m$elm_syntax$Combine$maybe($stil4m$elm_syntax$Elm$Parser$Layout$layout),
						$stil4m$elm_syntax$Elm$Parser$Patterns$cyclic$qualifiedPatternArg())) : $stil4m$elm_syntax$Combine$succeed(_List_Nil));
		},
		A2(
			$stil4m$elm_syntax$Combine$ignore,
			$stil4m$elm_syntax$Combine$maybe($stil4m$elm_syntax$Elm$Parser$Layout$layout),
			$stil4m$elm_syntax$Elm$Parser$Node$parser($stil4m$elm_syntax$Elm$Parser$Base$typeIndicator)));
};
var $stil4m$elm_syntax$Elm$Parser$Patterns$tryToCompose = function (x) {
	return A2(
		$stil4m$elm_syntax$Combine$continueWith,
		$stil4m$elm_syntax$Combine$choice(
			_List_fromArray(
				[
					A2(
					$stil4m$elm_syntax$Combine$map,
					function (y) {
						return A3($stil4m$elm_syntax$Elm$Syntax$Node$combine, $stil4m$elm_syntax$Elm$Syntax$Pattern$AsPattern, x, y);
					},
					A2(
						$stil4m$elm_syntax$Combine$continueWith,
						$stil4m$elm_syntax$Elm$Parser$Node$parser($stil4m$elm_syntax$Elm$Parser$Tokens$functionName),
						A2(
							$stil4m$elm_syntax$Combine$ignore,
							$stil4m$elm_syntax$Elm$Parser$Layout$layout,
							$stil4m$elm_syntax$Combine$fromCore(
								$elm$parser$Parser$keyword('as'))))),
					A2(
					$stil4m$elm_syntax$Combine$map,
					function (y) {
						return A3($stil4m$elm_syntax$Elm$Syntax$Node$combine, $stil4m$elm_syntax$Elm$Syntax$Pattern$UnConsPattern, x, y);
					},
					A2(
						$stil4m$elm_syntax$Combine$continueWith,
						$stil4m$elm_syntax$Elm$Parser$Patterns$cyclic$pattern(),
						A2(
							$stil4m$elm_syntax$Combine$ignore,
							$stil4m$elm_syntax$Combine$maybe($stil4m$elm_syntax$Elm$Parser$Layout$layout),
							$stil4m$elm_syntax$Combine$fromCore(
								$elm$parser$Parser$symbol('::'))))),
					$stil4m$elm_syntax$Combine$succeed(x)
				])),
		$stil4m$elm_syntax$Combine$maybe($stil4m$elm_syntax$Elm$Parser$Layout$layout));
};
function $stil4m$elm_syntax$Elm$Parser$Patterns$cyclic$pattern() {
	return A2(
		$stil4m$elm_syntax$Combine$andThen,
		$stil4m$elm_syntax$Elm$Parser$Patterns$tryToCompose,
		$stil4m$elm_syntax$Elm$Parser$Patterns$cyclic$composablePattern());
}
function $stil4m$elm_syntax$Elm$Parser$Patterns$cyclic$composablePattern() {
	return $stil4m$elm_syntax$Combine$choice(
		_List_fromArray(
			[
				$stil4m$elm_syntax$Elm$Parser$Patterns$variablePart,
				$stil4m$elm_syntax$Elm$Parser$Patterns$qualifiedPattern(true),
				$stil4m$elm_syntax$Elm$Parser$Node$parser(
				A2($stil4m$elm_syntax$Combine$map, $stil4m$elm_syntax$Elm$Syntax$Pattern$StringPattern, $stil4m$elm_syntax$Elm$Parser$Tokens$stringLiteral)),
				$stil4m$elm_syntax$Elm$Parser$Node$parser(
				A2($stil4m$elm_syntax$Combine$map, $stil4m$elm_syntax$Elm$Syntax$Pattern$CharPattern, $stil4m$elm_syntax$Elm$Parser$Tokens$characterLiteral)),
				$stil4m$elm_syntax$Elm$Parser$Node$parser($stil4m$elm_syntax$Elm$Parser$Patterns$numberPart),
				$stil4m$elm_syntax$Elm$Parser$Node$parser(
				A2(
					$stil4m$elm_syntax$Combine$map,
					$elm$core$Basics$always($stil4m$elm_syntax$Elm$Syntax$Pattern$UnitPattern),
					$stil4m$elm_syntax$Combine$fromCore(
						$elm$parser$Parser$symbol('()')))),
				$stil4m$elm_syntax$Elm$Parser$Node$parser(
				A2(
					$stil4m$elm_syntax$Combine$map,
					$elm$core$Basics$always($stil4m$elm_syntax$Elm$Syntax$Pattern$AllPattern),
					$stil4m$elm_syntax$Combine$fromCore(
						$elm$parser$Parser$symbol('_')))),
				$stil4m$elm_syntax$Elm$Parser$Patterns$recordPattern,
				$stil4m$elm_syntax$Elm$Parser$Patterns$cyclic$listPattern(),
				$stil4m$elm_syntax$Elm$Parser$Patterns$cyclic$parensPattern()
			]));
}
function $stil4m$elm_syntax$Elm$Parser$Patterns$cyclic$qualifiedPatternArg() {
	return $stil4m$elm_syntax$Combine$choice(
		_List_fromArray(
			[
				$stil4m$elm_syntax$Elm$Parser$Patterns$variablePart,
				$stil4m$elm_syntax$Elm$Parser$Patterns$qualifiedPattern(false),
				$stil4m$elm_syntax$Elm$Parser$Node$parser(
				A2($stil4m$elm_syntax$Combine$map, $stil4m$elm_syntax$Elm$Syntax$Pattern$StringPattern, $stil4m$elm_syntax$Elm$Parser$Tokens$stringLiteral)),
				$stil4m$elm_syntax$Elm$Parser$Node$parser(
				A2($stil4m$elm_syntax$Combine$map, $stil4m$elm_syntax$Elm$Syntax$Pattern$CharPattern, $stil4m$elm_syntax$Elm$Parser$Tokens$characterLiteral)),
				$stil4m$elm_syntax$Elm$Parser$Node$parser($stil4m$elm_syntax$Elm$Parser$Patterns$numberPart),
				$stil4m$elm_syntax$Elm$Parser$Node$parser(
				A2(
					$stil4m$elm_syntax$Combine$map,
					$elm$core$Basics$always($stil4m$elm_syntax$Elm$Syntax$Pattern$UnitPattern),
					$stil4m$elm_syntax$Combine$fromCore(
						$elm$parser$Parser$symbol('()')))),
				$stil4m$elm_syntax$Elm$Parser$Node$parser(
				A2(
					$stil4m$elm_syntax$Combine$map,
					$elm$core$Basics$always($stil4m$elm_syntax$Elm$Syntax$Pattern$AllPattern),
					$stil4m$elm_syntax$Combine$fromCore(
						$elm$parser$Parser$symbol('_')))),
				$stil4m$elm_syntax$Elm$Parser$Patterns$recordPattern,
				$stil4m$elm_syntax$Elm$Parser$Patterns$cyclic$listPattern(),
				$stil4m$elm_syntax$Elm$Parser$Patterns$cyclic$parensPattern()
			]));
}
function $stil4m$elm_syntax$Elm$Parser$Patterns$cyclic$listPattern() {
	return $stil4m$elm_syntax$Combine$lazy(
		function (_v5) {
			return $stil4m$elm_syntax$Elm$Parser$Node$parser(
				A3(
					$stil4m$elm_syntax$Combine$between,
					A2(
						$stil4m$elm_syntax$Combine$ignore,
						$stil4m$elm_syntax$Combine$maybe($stil4m$elm_syntax$Elm$Parser$Layout$layout),
						$stil4m$elm_syntax$Combine$string('[')),
					$stil4m$elm_syntax$Combine$string(']'),
					A2(
						$stil4m$elm_syntax$Combine$map,
						$stil4m$elm_syntax$Elm$Syntax$Pattern$ListPattern,
						A2(
							$stil4m$elm_syntax$Combine$sepBy,
							$stil4m$elm_syntax$Combine$string(','),
							$stil4m$elm_syntax$Elm$Parser$Layout$maybeAroundBothSides(
								$stil4m$elm_syntax$Elm$Parser$Patterns$cyclic$pattern())))));
		});
}
function $stil4m$elm_syntax$Elm$Parser$Patterns$cyclic$parensPattern() {
	return $stil4m$elm_syntax$Combine$lazy(
		function (_v3) {
			return $stil4m$elm_syntax$Elm$Parser$Node$parser(
				A2(
					$stil4m$elm_syntax$Combine$map,
					function (c) {
						if (c.b && (!c.b.b)) {
							var x = c.a;
							return $stil4m$elm_syntax$Elm$Syntax$Pattern$ParenthesizedPattern(x);
						} else {
							return $stil4m$elm_syntax$Elm$Syntax$Pattern$TuplePattern(c);
						}
					},
					$stil4m$elm_syntax$Combine$parens(
						A2(
							$stil4m$elm_syntax$Combine$sepBy,
							$stil4m$elm_syntax$Combine$string(','),
							$stil4m$elm_syntax$Elm$Parser$Layout$maybeAroundBothSides(
								$stil4m$elm_syntax$Elm$Parser$Patterns$cyclic$pattern())))));
		});
}
var $stil4m$elm_syntax$Elm$Parser$Patterns$pattern = $stil4m$elm_syntax$Elm$Parser$Patterns$cyclic$pattern();
$stil4m$elm_syntax$Elm$Parser$Patterns$cyclic$pattern = function () {
	return $stil4m$elm_syntax$Elm$Parser$Patterns$pattern;
};
var $stil4m$elm_syntax$Elm$Parser$Patterns$composablePattern = $stil4m$elm_syntax$Elm$Parser$Patterns$cyclic$composablePattern();
$stil4m$elm_syntax$Elm$Parser$Patterns$cyclic$composablePattern = function () {
	return $stil4m$elm_syntax$Elm$Parser$Patterns$composablePattern;
};
var $stil4m$elm_syntax$Elm$Parser$Patterns$qualifiedPatternArg = $stil4m$elm_syntax$Elm$Parser$Patterns$cyclic$qualifiedPatternArg();
$stil4m$elm_syntax$Elm$Parser$Patterns$cyclic$qualifiedPatternArg = function () {
	return $stil4m$elm_syntax$Elm$Parser$Patterns$qualifiedPatternArg;
};
var $stil4m$elm_syntax$Elm$Parser$Patterns$listPattern = $stil4m$elm_syntax$Elm$Parser$Patterns$cyclic$listPattern();
$stil4m$elm_syntax$Elm$Parser$Patterns$cyclic$listPattern = function () {
	return $stil4m$elm_syntax$Elm$Parser$Patterns$listPattern;
};
var $stil4m$elm_syntax$Elm$Parser$Patterns$parensPattern = $stil4m$elm_syntax$Elm$Parser$Patterns$cyclic$parensPattern();
$stil4m$elm_syntax$Elm$Parser$Patterns$cyclic$parensPattern = function () {
	return $stil4m$elm_syntax$Elm$Parser$Patterns$parensPattern;
};
var $stil4m$elm_syntax$Elm$Parser$Declarations$functionArgument = $stil4m$elm_syntax$Elm$Parser$Patterns$pattern;
var $stil4m$elm_syntax$Elm$Syntax$Expression$functionRange = function (_function) {
	return $stil4m$elm_syntax$Elm$Syntax$Range$combine(
		_List_fromArray(
			[
				function () {
				var _v0 = _function.cL;
				if (!_v0.$) {
					var documentation = _v0.a;
					return $stil4m$elm_syntax$Elm$Syntax$Node$range(documentation);
				} else {
					return A2(
						$elm$core$Maybe$withDefault,
						function (_v3) {
							var r = _v3.a;
							return r;
						}(
							$stil4m$elm_syntax$Elm$Syntax$Node$value(_function.dm).fe),
						A2(
							$elm$core$Maybe$map,
							function (_v1) {
								var value = _v1.b;
								var _v2 = value.fe;
								var r = _v2.a;
								return r;
							},
							_function.fD));
				}
			}(),
				function (_v4) {
				var r = _v4.a;
				return r;
			}(
				$stil4m$elm_syntax$Elm$Syntax$Node$value(_function.dm).eR)
			]));
};
var $stil4m$elm_syntax$Elm$Syntax$Signature$Signature = F2(
	function (name, typeAnnotation) {
		return {fe: name, ek: typeAnnotation};
	});
var $stil4m$elm_syntax$Elm$Parser$TypeAnnotation$Eager = 0;
var $stil4m$elm_syntax$Elm$Syntax$TypeAnnotation$FunctionTypeAnnotation = F2(
	function (a, b) {
		return {$: 6, a: a, b: b};
	});
var $stil4m$elm_syntax$Elm$Syntax$TypeAnnotation$GenericRecord = F2(
	function (a, b) {
		return {$: 5, a: a, b: b};
	});
var $stil4m$elm_syntax$Elm$Parser$TypeAnnotation$Lazy = 1;
var $stil4m$elm_syntax$Elm$Syntax$TypeAnnotation$Record = function (a) {
	return {$: 4, a: a};
};
var $stil4m$elm_syntax$Elm$Syntax$TypeAnnotation$Typed = F2(
	function (a, b) {
		return {$: 1, a: a, b: b};
	});
var $stil4m$elm_syntax$Elm$Syntax$TypeAnnotation$Unit = {$: 2};
var $stil4m$elm_syntax$Elm$Syntax$TypeAnnotation$Tupled = function (a) {
	return {$: 3, a: a};
};
var $stil4m$elm_syntax$Elm$Parser$TypeAnnotation$asTypeAnnotation = F2(
	function (x, xs) {
		var value = x.b;
		if (!xs.b) {
			return value;
		} else {
			return $stil4m$elm_syntax$Elm$Syntax$TypeAnnotation$Tupled(
				A2($elm$core$List$cons, x, xs));
		}
	});
var $stil4m$elm_syntax$Elm$Syntax$TypeAnnotation$GenericType = function (a) {
	return {$: 0, a: a};
};
var $stil4m$elm_syntax$Elm$Parser$TypeAnnotation$genericTypeAnnotation = $stil4m$elm_syntax$Combine$lazy(
	function (_v0) {
		return $stil4m$elm_syntax$Elm$Parser$Node$parser(
			A2($stil4m$elm_syntax$Combine$map, $stil4m$elm_syntax$Elm$Syntax$TypeAnnotation$GenericType, $stil4m$elm_syntax$Elm$Parser$Tokens$functionName));
	});
var $stil4m$elm_syntax$Elm$Parser$Layout$Indented = 1;
var $stil4m$elm_syntax$Elm$Parser$Layout$Strict = 0;
var $stil4m$elm_syntax$Elm$Parser$State$storedColumns = function (_v0) {
	var indents = _v0.bc;
	return A2(
		$elm$core$List$map,
		$elm$core$Basics$add(1),
		indents);
};
var $stil4m$elm_syntax$Elm$Parser$Layout$compute = $stil4m$elm_syntax$Combine$withState(
	function (s) {
		return $stil4m$elm_syntax$Combine$withLocation(
			function (l) {
				var known = A2(
					$elm$core$List$cons,
					1,
					$stil4m$elm_syntax$Elm$Parser$State$storedColumns(s));
				return A2($elm$core$List$member, l.eF, known) ? $stil4m$elm_syntax$Combine$succeed(0) : $stil4m$elm_syntax$Combine$succeed(1);
			});
	});
var $stil4m$elm_syntax$Elm$Parser$Layout$optimisticLayout = A2(
	$stil4m$elm_syntax$Combine$continueWith,
	$stil4m$elm_syntax$Elm$Parser$Layout$compute,
	$stil4m$elm_syntax$Combine$many(
		$stil4m$elm_syntax$Combine$choice(
			_List_fromArray(
				[
					$stil4m$elm_syntax$Elm$Parser$Layout$anyComment,
					A2(
					$stil4m$elm_syntax$Combine$continueWith,
					$stil4m$elm_syntax$Combine$choice(
						_List_fromArray(
							[
								$stil4m$elm_syntax$Elm$Parser$Whitespace$many1Spaces,
								$stil4m$elm_syntax$Elm$Parser$Layout$anyComment,
								$stil4m$elm_syntax$Combine$succeed(0)
							])),
					$stil4m$elm_syntax$Combine$many1($stil4m$elm_syntax$Elm$Parser$Whitespace$realNewLine)),
					$stil4m$elm_syntax$Elm$Parser$Whitespace$many1Spaces
				]))));
var $stil4m$elm_syntax$Elm$Parser$Layout$optimisticLayoutWith = F2(
	function (onStrict, onIndented) {
		return A2(
			$stil4m$elm_syntax$Combine$andThen,
			function (ind) {
				if (!ind) {
					return onStrict(0);
				} else {
					return onIndented(0);
				}
			},
			$stil4m$elm_syntax$Elm$Parser$Layout$optimisticLayout);
	});
var $stil4m$elm_syntax$Elm$Parser$TypeAnnotation$typeAnnotationNoFn = function (mode) {
	return $stil4m$elm_syntax$Combine$lazy(
		function (_v7) {
			return $stil4m$elm_syntax$Combine$choice(
				_List_fromArray(
					[
						$stil4m$elm_syntax$Elm$Parser$TypeAnnotation$cyclic$parensTypeAnnotation(),
						$stil4m$elm_syntax$Elm$Parser$TypeAnnotation$typedTypeAnnotation(mode),
						$stil4m$elm_syntax$Elm$Parser$TypeAnnotation$genericTypeAnnotation,
						$stil4m$elm_syntax$Elm$Parser$TypeAnnotation$cyclic$recordTypeAnnotation()
					]));
		});
};
var $stil4m$elm_syntax$Elm$Parser$TypeAnnotation$typedTypeAnnotation = function (mode) {
	return $stil4m$elm_syntax$Combine$lazy(
		function (_v0) {
			var nodeRanges = $elm$core$List$map(
				function (_v6) {
					var r = _v6.a;
					return r;
				});
			var genericHelper = function (items) {
				return A2(
					$stil4m$elm_syntax$Combine$or,
					A2(
						$stil4m$elm_syntax$Combine$andThen,
						function (next) {
							return A2(
								$stil4m$elm_syntax$Combine$ignore,
								$stil4m$elm_syntax$Combine$maybe($stil4m$elm_syntax$Elm$Parser$Layout$layout),
								A2(
									$stil4m$elm_syntax$Elm$Parser$Layout$optimisticLayoutWith,
									function (_v1) {
										return $stil4m$elm_syntax$Combine$succeed(
											$elm$core$List$reverse(
												A2($elm$core$List$cons, next, items)));
									},
									function (_v2) {
										return genericHelper(
											A2($elm$core$List$cons, next, items));
									}));
						},
						$stil4m$elm_syntax$Elm$Parser$TypeAnnotation$typeAnnotationNoFn(1)),
					$stil4m$elm_syntax$Combine$succeed(
						$elm$core$List$reverse(items)));
			};
			return A2(
				$stil4m$elm_syntax$Combine$andThen,
				function (original) {
					var tir = original.a;
					return A2(
						$stil4m$elm_syntax$Elm$Parser$Layout$optimisticLayoutWith,
						function (_v3) {
							return $stil4m$elm_syntax$Combine$succeed(
								A2(
									$stil4m$elm_syntax$Elm$Syntax$Node$Node,
									tir,
									A2($stil4m$elm_syntax$Elm$Syntax$TypeAnnotation$Typed, original, _List_Nil)));
						},
						function (_v4) {
							if (!mode) {
								return A2(
									$stil4m$elm_syntax$Combine$map,
									function (args) {
										return A2(
											$stil4m$elm_syntax$Elm$Syntax$Node$Node,
											$stil4m$elm_syntax$Elm$Syntax$Range$combine(
												A2(
													$elm$core$List$cons,
													tir,
													nodeRanges(args))),
											A2($stil4m$elm_syntax$Elm$Syntax$TypeAnnotation$Typed, original, args));
									},
									genericHelper(_List_Nil));
							} else {
								return $stil4m$elm_syntax$Combine$succeed(
									A2(
										$stil4m$elm_syntax$Elm$Syntax$Node$Node,
										tir,
										A2($stil4m$elm_syntax$Elm$Syntax$TypeAnnotation$Typed, original, _List_Nil)));
							}
						});
				},
				$stil4m$elm_syntax$Elm$Parser$Node$parser($stil4m$elm_syntax$Elm$Parser$Base$typeIndicator));
		});
};
function $stil4m$elm_syntax$Elm$Parser$TypeAnnotation$cyclic$parensTypeAnnotation() {
	return $stil4m$elm_syntax$Combine$lazy(
		function (_v14) {
			var commaSep = $stil4m$elm_syntax$Combine$many(
				A2(
					$stil4m$elm_syntax$Combine$ignore,
					$stil4m$elm_syntax$Combine$maybe($stil4m$elm_syntax$Elm$Parser$Layout$layout),
					A2(
						$stil4m$elm_syntax$Combine$continueWith,
						$stil4m$elm_syntax$Elm$Parser$TypeAnnotation$cyclic$typeAnnotation(),
						A2(
							$stil4m$elm_syntax$Combine$ignore,
							$stil4m$elm_syntax$Combine$maybe($stil4m$elm_syntax$Elm$Parser$Layout$layout),
							$stil4m$elm_syntax$Combine$string(',')))));
			var nested = A2(
				$stil4m$elm_syntax$Combine$andMap,
				commaSep,
				A2(
					$stil4m$elm_syntax$Combine$ignore,
					$stil4m$elm_syntax$Combine$maybe($stil4m$elm_syntax$Elm$Parser$Layout$layout),
					A2(
						$stil4m$elm_syntax$Combine$andMap,
						$stil4m$elm_syntax$Elm$Parser$TypeAnnotation$cyclic$typeAnnotation(),
						A2(
							$stil4m$elm_syntax$Combine$ignore,
							$stil4m$elm_syntax$Combine$maybe($stil4m$elm_syntax$Elm$Parser$Layout$layout),
							$stil4m$elm_syntax$Combine$succeed($stil4m$elm_syntax$Elm$Parser$TypeAnnotation$asTypeAnnotation)))));
			return $stil4m$elm_syntax$Elm$Parser$Node$parser(
				A2(
					$stil4m$elm_syntax$Combine$continueWith,
					$stil4m$elm_syntax$Combine$choice(
						_List_fromArray(
							[
								A2(
								$stil4m$elm_syntax$Combine$map,
								$elm$core$Basics$always($stil4m$elm_syntax$Elm$Syntax$TypeAnnotation$Unit),
								$stil4m$elm_syntax$Combine$string(')')),
								A2(
								$stil4m$elm_syntax$Combine$ignore,
								$stil4m$elm_syntax$Combine$string(')'),
								nested)
							])),
					$stil4m$elm_syntax$Combine$string('(')));
		});
}
function $stil4m$elm_syntax$Elm$Parser$TypeAnnotation$cyclic$recordFieldDefinition() {
	return $stil4m$elm_syntax$Combine$lazy(
		function (_v13) {
			return A2(
				$stil4m$elm_syntax$Combine$andMap,
				A2(
					$stil4m$elm_syntax$Combine$continueWith,
					$stil4m$elm_syntax$Elm$Parser$TypeAnnotation$cyclic$typeAnnotation(),
					A2(
						$stil4m$elm_syntax$Combine$continueWith,
						$stil4m$elm_syntax$Combine$maybe($stil4m$elm_syntax$Elm$Parser$Layout$layout),
						A2(
							$stil4m$elm_syntax$Combine$continueWith,
							$stil4m$elm_syntax$Combine$string(':'),
							$stil4m$elm_syntax$Combine$maybe($stil4m$elm_syntax$Elm$Parser$Layout$layout)))),
				A2(
					$stil4m$elm_syntax$Combine$andMap,
					A2(
						$stil4m$elm_syntax$Combine$continueWith,
						$stil4m$elm_syntax$Elm$Parser$Node$parser($stil4m$elm_syntax$Elm$Parser$Tokens$functionName),
						$stil4m$elm_syntax$Combine$maybe($stil4m$elm_syntax$Elm$Parser$Layout$layout)),
					$stil4m$elm_syntax$Combine$succeed($elm$core$Tuple$pair)));
		});
}
function $stil4m$elm_syntax$Elm$Parser$TypeAnnotation$cyclic$recordFieldsTypeAnnotation() {
	return $stil4m$elm_syntax$Combine$lazy(
		function (_v12) {
			return A2(
				$stil4m$elm_syntax$Combine$sepBy1,
				$stil4m$elm_syntax$Combine$string(','),
				$stil4m$elm_syntax$Elm$Parser$Layout$maybeAroundBothSides(
					$stil4m$elm_syntax$Elm$Parser$Node$parser(
						$stil4m$elm_syntax$Elm$Parser$TypeAnnotation$cyclic$recordFieldDefinition())));
		});
}
function $stil4m$elm_syntax$Elm$Parser$TypeAnnotation$cyclic$recordTypeAnnotation() {
	return $stil4m$elm_syntax$Combine$lazy(
		function (_v11) {
			return $stil4m$elm_syntax$Elm$Parser$Node$parser(
				A2(
					$stil4m$elm_syntax$Combine$continueWith,
					$stil4m$elm_syntax$Combine$choice(
						_List_fromArray(
							[
								A2(
								$stil4m$elm_syntax$Combine$continueWith,
								$stil4m$elm_syntax$Combine$succeed(
									$stil4m$elm_syntax$Elm$Syntax$TypeAnnotation$Record(_List_Nil)),
								$stil4m$elm_syntax$Combine$string('}')),
								A2(
								$stil4m$elm_syntax$Combine$andThen,
								function (fname) {
									return $stil4m$elm_syntax$Combine$choice(
										_List_fromArray(
											[
												A2(
												$stil4m$elm_syntax$Combine$ignore,
												$stil4m$elm_syntax$Combine$string('}'),
												A2(
													$stil4m$elm_syntax$Combine$andMap,
													$stil4m$elm_syntax$Elm$Parser$Node$parser(
														$stil4m$elm_syntax$Elm$Parser$TypeAnnotation$cyclic$recordFieldsTypeAnnotation()),
													A2(
														$stil4m$elm_syntax$Combine$ignore,
														$stil4m$elm_syntax$Combine$string('|'),
														$stil4m$elm_syntax$Combine$succeed(
															$stil4m$elm_syntax$Elm$Syntax$TypeAnnotation$GenericRecord(fname))))),
												A2(
												$stil4m$elm_syntax$Combine$andThen,
												function (ta) {
													return A2(
														$stil4m$elm_syntax$Combine$map,
														function (rest) {
															return $stil4m$elm_syntax$Elm$Syntax$TypeAnnotation$Record(
																A2(
																	$elm$core$List$cons,
																	A3($stil4m$elm_syntax$Elm$Syntax$Node$combine, $elm$core$Tuple$pair, fname, ta),
																	rest));
														},
														A2(
															$stil4m$elm_syntax$Combine$ignore,
															$stil4m$elm_syntax$Combine$string('}'),
															$stil4m$elm_syntax$Combine$choice(
																_List_fromArray(
																	[
																		A2(
																		$stil4m$elm_syntax$Combine$continueWith,
																		$stil4m$elm_syntax$Elm$Parser$TypeAnnotation$cyclic$recordFieldsTypeAnnotation(),
																		$stil4m$elm_syntax$Combine$string(',')),
																		$stil4m$elm_syntax$Combine$succeed(_List_Nil)
																	]))));
												},
												A2(
													$stil4m$elm_syntax$Combine$ignore,
													$stil4m$elm_syntax$Combine$maybe($stil4m$elm_syntax$Elm$Parser$Layout$layout),
													A2(
														$stil4m$elm_syntax$Combine$continueWith,
														$stil4m$elm_syntax$Elm$Parser$TypeAnnotation$cyclic$typeAnnotation(),
														A2(
															$stil4m$elm_syntax$Combine$ignore,
															$stil4m$elm_syntax$Combine$maybe($stil4m$elm_syntax$Elm$Parser$Layout$layout),
															$stil4m$elm_syntax$Combine$string(':')))))
											]));
								},
								A2(
									$stil4m$elm_syntax$Combine$ignore,
									$stil4m$elm_syntax$Combine$maybe($stil4m$elm_syntax$Elm$Parser$Layout$layout),
									$stil4m$elm_syntax$Elm$Parser$Node$parser($stil4m$elm_syntax$Elm$Parser$Tokens$functionName)))
							])),
					A2(
						$stil4m$elm_syntax$Combine$ignore,
						$stil4m$elm_syntax$Combine$maybe($stil4m$elm_syntax$Elm$Parser$Layout$layout),
						$stil4m$elm_syntax$Combine$string('{'))));
		});
}
function $stil4m$elm_syntax$Elm$Parser$TypeAnnotation$cyclic$typeAnnotation() {
	return $stil4m$elm_syntax$Combine$lazy(
		function (_v8) {
			return A2(
				$stil4m$elm_syntax$Combine$andThen,
				function (typeRef) {
					return A2(
						$stil4m$elm_syntax$Elm$Parser$Layout$optimisticLayoutWith,
						function (_v9) {
							return $stil4m$elm_syntax$Combine$succeed(typeRef);
						},
						function (_v10) {
							return A2(
								$stil4m$elm_syntax$Combine$or,
								A2(
									$stil4m$elm_syntax$Combine$map,
									function (ta) {
										return A3($stil4m$elm_syntax$Elm$Syntax$Node$combine, $stil4m$elm_syntax$Elm$Syntax$TypeAnnotation$FunctionTypeAnnotation, typeRef, ta);
									},
									A2(
										$stil4m$elm_syntax$Combine$continueWith,
										$stil4m$elm_syntax$Elm$Parser$TypeAnnotation$cyclic$typeAnnotation(),
										A2(
											$stil4m$elm_syntax$Combine$ignore,
											$stil4m$elm_syntax$Combine$maybe($stil4m$elm_syntax$Elm$Parser$Layout$layout),
											$stil4m$elm_syntax$Combine$string('->')))),
								$stil4m$elm_syntax$Combine$succeed(typeRef));
						});
				},
				$stil4m$elm_syntax$Elm$Parser$TypeAnnotation$typeAnnotationNoFn(0));
		});
}
var $stil4m$elm_syntax$Elm$Parser$TypeAnnotation$parensTypeAnnotation = $stil4m$elm_syntax$Elm$Parser$TypeAnnotation$cyclic$parensTypeAnnotation();
$stil4m$elm_syntax$Elm$Parser$TypeAnnotation$cyclic$parensTypeAnnotation = function () {
	return $stil4m$elm_syntax$Elm$Parser$TypeAnnotation$parensTypeAnnotation;
};
var $stil4m$elm_syntax$Elm$Parser$TypeAnnotation$recordFieldDefinition = $stil4m$elm_syntax$Elm$Parser$TypeAnnotation$cyclic$recordFieldDefinition();
$stil4m$elm_syntax$Elm$Parser$TypeAnnotation$cyclic$recordFieldDefinition = function () {
	return $stil4m$elm_syntax$Elm$Parser$TypeAnnotation$recordFieldDefinition;
};
var $stil4m$elm_syntax$Elm$Parser$TypeAnnotation$recordFieldsTypeAnnotation = $stil4m$elm_syntax$Elm$Parser$TypeAnnotation$cyclic$recordFieldsTypeAnnotation();
$stil4m$elm_syntax$Elm$Parser$TypeAnnotation$cyclic$recordFieldsTypeAnnotation = function () {
	return $stil4m$elm_syntax$Elm$Parser$TypeAnnotation$recordFieldsTypeAnnotation;
};
var $stil4m$elm_syntax$Elm$Parser$TypeAnnotation$recordTypeAnnotation = $stil4m$elm_syntax$Elm$Parser$TypeAnnotation$cyclic$recordTypeAnnotation();
$stil4m$elm_syntax$Elm$Parser$TypeAnnotation$cyclic$recordTypeAnnotation = function () {
	return $stil4m$elm_syntax$Elm$Parser$TypeAnnotation$recordTypeAnnotation;
};
var $stil4m$elm_syntax$Elm$Parser$TypeAnnotation$typeAnnotation = $stil4m$elm_syntax$Elm$Parser$TypeAnnotation$cyclic$typeAnnotation();
$stil4m$elm_syntax$Elm$Parser$TypeAnnotation$cyclic$typeAnnotation = function () {
	return $stil4m$elm_syntax$Elm$Parser$TypeAnnotation$typeAnnotation;
};
var $stil4m$elm_syntax$Elm$Parser$Declarations$functionSignatureFromVarPointer = function (varPointer) {
	return A2(
		$stil4m$elm_syntax$Combine$andMap,
		$stil4m$elm_syntax$Elm$Parser$TypeAnnotation$typeAnnotation,
		A2(
			$stil4m$elm_syntax$Combine$ignore,
			$stil4m$elm_syntax$Combine$maybe($stil4m$elm_syntax$Elm$Parser$Layout$layout),
			A2(
				$stil4m$elm_syntax$Combine$ignore,
				$stil4m$elm_syntax$Combine$string(':'),
				$stil4m$elm_syntax$Combine$succeed(
					function (ta) {
						return A3($stil4m$elm_syntax$Elm$Syntax$Node$combine, $stil4m$elm_syntax$Elm$Syntax$Signature$Signature, varPointer, ta);
					}))));
};
var $stil4m$elm_syntax$Elm$Syntax$Expression$GLSLExpression = function (a) {
	return {$: 23, a: a};
};
var $elm$parser$Parser$NotNestable = 0;
var $stil4m$elm_syntax$Elm$Parser$Declarations$glslExpression = function () {
	var start = '[glsl|';
	var end = '|]';
	return $stil4m$elm_syntax$Elm$Parser$Node$parser(
		A2(
			$stil4m$elm_syntax$Combine$ignore,
			$stil4m$elm_syntax$Combine$string(end),
			A2(
				$stil4m$elm_syntax$Combine$map,
				A2(
					$elm$core$Basics$composeR,
					$elm$core$String$dropLeft(
						$elm$core$String$length(start)),
					$stil4m$elm_syntax$Elm$Syntax$Expression$GLSLExpression),
				$stil4m$elm_syntax$Combine$fromCore(
					$elm$parser$Parser$getChompedString(
						A3($elm$parser$Parser$multiComment, start, end, 0))))));
}();
var $stil4m$elm_syntax$Elm$Parser$Tokens$ifToken = $stil4m$elm_syntax$Combine$string('if');
var $stil4m$elm_syntax$Elm$Parser$Tokens$allowedOperatorTokens = _List_fromArray(
	['+', '-', ':', '/', '*', '>', '<', '=', '/', '&', '^', '%', '|', '!', '.', '#', '$', '≡', '~', '?', '@']);
var $stil4m$elm_syntax$Elm$Parser$Tokens$excludedOperators = _List_fromArray(
	[':', '->', '--', '=']);
var $stil4m$elm_syntax$Combine$Char$oneOf = function (cs) {
	return A2(
		$stil4m$elm_syntax$Combine$andThen,
		A2(
			$elm$core$Basics$composeR,
			$elm$core$Maybe$map($stil4m$elm_syntax$Combine$succeed),
			$elm$core$Maybe$withDefault(
				$stil4m$elm_syntax$Combine$fail(
					'expected one of \'' + ($elm$core$String$fromList(cs) + '\'')))),
		$stil4m$elm_syntax$Combine$Char$satisfy(
			function (a) {
				return A2($elm$core$List$member, a, cs);
			}));
};
var $stil4m$elm_syntax$Elm$Parser$Tokens$operatorTokenFromList = function (allowedChars) {
	return A2(
		$stil4m$elm_syntax$Combine$andThen,
		function (m) {
			return A2($elm$core$List$member, m, $stil4m$elm_syntax$Elm$Parser$Tokens$excludedOperators) ? $stil4m$elm_syntax$Combine$fail('operator is not allowed') : $stil4m$elm_syntax$Combine$succeed(m);
		},
		A2(
			$stil4m$elm_syntax$Combine$map,
			$elm$core$String$fromList,
			$stil4m$elm_syntax$Combine$many1(
				$stil4m$elm_syntax$Combine$Char$oneOf(allowedChars))));
};
var $stil4m$elm_syntax$Elm$Parser$Tokens$infixOperatorToken = $stil4m$elm_syntax$Elm$Parser$Tokens$operatorTokenFromList($stil4m$elm_syntax$Elm$Parser$Tokens$allowedOperatorTokens);
var $stil4m$elm_syntax$Elm$Parser$Layout$layoutStrict = A2(
	$stil4m$elm_syntax$Combine$continueWith,
	$stil4m$elm_syntax$Elm$Parser$Layout$verifyIndent(
		F2(
			function (stateIndent, current) {
				return _Utils_eq(stateIndent, current);
			})),
	$stil4m$elm_syntax$Combine$many1(
		$stil4m$elm_syntax$Combine$choice(
			_List_fromArray(
				[
					$stil4m$elm_syntax$Elm$Parser$Layout$anyComment,
					A2(
					$stil4m$elm_syntax$Combine$continueWith,
					$stil4m$elm_syntax$Combine$succeed(0),
					$stil4m$elm_syntax$Combine$many1($stil4m$elm_syntax$Elm$Parser$Whitespace$realNewLine)),
					$stil4m$elm_syntax$Elm$Parser$Whitespace$many1Spaces
				]))));
var $stil4m$elm_syntax$Elm$Syntax$Expression$RecordAccess = F2(
	function (a, b) {
		return {$: 20, a: a, b: b};
	});
var $stil4m$elm_syntax$Elm$Parser$Declarations$liftRecordAccess = function (e) {
	return $stil4m$elm_syntax$Combine$lazy(
		function (_v0) {
			return A2(
				$stil4m$elm_syntax$Combine$or,
				A2(
					$stil4m$elm_syntax$Combine$andThen,
					$stil4m$elm_syntax$Elm$Parser$Declarations$liftRecordAccess,
					A2(
						$stil4m$elm_syntax$Combine$map,
						function (f) {
							return A3($stil4m$elm_syntax$Elm$Syntax$Node$combine, $stil4m$elm_syntax$Elm$Syntax$Expression$RecordAccess, e, f);
						},
						A2(
							$stil4m$elm_syntax$Combine$continueWith,
							$stil4m$elm_syntax$Elm$Parser$Node$parser($stil4m$elm_syntax$Elm$Parser$Tokens$functionName),
							$stil4m$elm_syntax$Combine$string('.')))),
				$stil4m$elm_syntax$Combine$succeed(e));
		});
};
var $stil4m$elm_syntax$Elm$Syntax$Expression$Literal = function (a) {
	return {$: 11, a: a};
};
var $stil4m$elm_syntax$Elm$Parser$Tokens$multiLineStringLiteral = function () {
	var helper = function (s) {
		return s.K ? A2(
			$elm$parser$Parser$map,
			function (v) {
				return $elm$parser$Parser$Loop(
					{
						ar: s.ar,
						K: false,
						x: A2(
							$elm$core$List$cons,
							$elm$core$String$fromChar(v),
							s.x)
					});
			},
			$stil4m$elm_syntax$Elm$Parser$Tokens$escapedCharValue) : $elm$parser$Parser$oneOf(
			_List_fromArray(
				[
					A2(
					$elm$parser$Parser$map,
					function (_v0) {
						return $elm$parser$Parser$Done(
							$elm$core$String$concat(
								$elm$core$List$reverse(s.x)));
					},
					$elm$parser$Parser$symbol('\"\"\"')),
					A2(
					$elm$parser$Parser$map,
					function (v) {
						return $elm$parser$Parser$Loop(
							{
								ar: s.ar + 1,
								K: s.K,
								x: A2($elm$core$List$cons, v, s.x)
							});
					},
					$elm$parser$Parser$getChompedString(
						$elm$parser$Parser$symbol('\"'))),
					A2(
					$elm$parser$Parser$map,
					function (_v1) {
						return $elm$parser$Parser$Loop(
							{ar: s.ar + 1, K: true, x: s.x});
					},
					$elm$parser$Parser$getChompedString(
						$elm$parser$Parser$symbol('\\'))),
					A2(
					$elm$parser$Parser$andThen,
					function (_v2) {
						var start = _v2.a;
						var value = _v2.b;
						var end = _v2.c;
						return _Utils_eq(start, end) ? $elm$parser$Parser$problem('Expected a string character or a triple double quote') : $elm$parser$Parser$succeed(
							$elm$parser$Parser$Loop(
								{
									ar: s.ar + 1,
									K: s.K,
									x: A2($elm$core$List$cons, value, s.x)
								}));
					},
					A2(
						$elm$parser$Parser$keeper,
						A2(
							$elm$parser$Parser$keeper,
							A2(
								$elm$parser$Parser$keeper,
								$elm$parser$Parser$succeed(
									F3(
										function (start, value, end) {
											return _Utils_Tuple3(start, value, end);
										})),
								$elm$parser$Parser$getOffset),
							$elm$parser$Parser$getChompedString(
								$elm$parser$Parser$chompWhile(
									function (c) {
										return (c !== '\"') && (c !== '\\');
									}))),
						$elm$parser$Parser$getOffset))
				]));
	};
	return $stil4m$elm_syntax$Combine$fromCore(
		A2(
			$elm$parser$Parser$keeper,
			A2(
				$elm$parser$Parser$ignorer,
				$elm$parser$Parser$succeed($elm$core$Basics$identity),
				$elm$parser$Parser$symbol('\"\"\"')),
			A2(
				$elm$parser$Parser$loop,
				{ar: 0, K: false, x: _List_Nil},
				helper)));
}();
var $stil4m$elm_syntax$Elm$Parser$Declarations$literalExpression = $stil4m$elm_syntax$Combine$lazy(
	function (_v0) {
		return $stil4m$elm_syntax$Elm$Parser$Node$parser(
			A2(
				$stil4m$elm_syntax$Combine$map,
				$stil4m$elm_syntax$Elm$Syntax$Expression$Literal,
				A2($stil4m$elm_syntax$Combine$or, $stil4m$elm_syntax$Elm$Parser$Tokens$multiLineStringLiteral, $stil4m$elm_syntax$Elm$Parser$Tokens$stringLiteral)));
	});
var $stil4m$elm_syntax$Combine$loop = F2(
	function (init, stepper) {
		var wrapper = function (_v3) {
			var oldState = _v3.a;
			var v = _v3.b;
			var _v0 = stepper(v);
			var p = _v0;
			return A2(
				$elm$parser$Parser$map,
				function (_v1) {
					var newState = _v1.a;
					var r = _v1.b;
					if (!r.$) {
						var l = r.a;
						return $elm$parser$Parser$Loop(
							_Utils_Tuple2(newState, l));
					} else {
						var d = r.a;
						return $elm$parser$Parser$Done(
							_Utils_Tuple2(newState, d));
					}
				},
				p(oldState));
		};
		return function (state) {
			return A2(
				$elm$parser$Parser$loop,
				_Utils_Tuple2(state, init),
				wrapper);
		};
	});
var $stil4m$elm_syntax$Elm$Parser$Whitespace$manySpaces = $stil4m$elm_syntax$Combine$fromCore(
	$elm$parser$Parser$chompWhile(
		function (c) {
			return c === ' ';
		}));
var $stil4m$elm_syntax$Elm$Syntax$Expression$Floatable = function (a) {
	return {$: 9, a: a};
};
var $stil4m$elm_syntax$Elm$Syntax$Expression$Hex = function (a) {
	return {$: 8, a: a};
};
var $stil4m$elm_syntax$Elm$Syntax$Expression$Integer = function (a) {
	return {$: 7, a: a};
};
var $stil4m$elm_syntax$Elm$Parser$Numbers$forgivingNumber = F3(
	function (floatf, intf, hexf) {
		return $stil4m$elm_syntax$Combine$fromCore(
			$elm$parser$Parser$backtrackable(
				A3($stil4m$elm_syntax$Elm$Parser$Numbers$raw, floatf, intf, hexf)));
	});
var $stil4m$elm_syntax$Elm$Parser$Declarations$numberExpression = $stil4m$elm_syntax$Elm$Parser$Node$parser(
	A3($stil4m$elm_syntax$Elm$Parser$Numbers$forgivingNumber, $stil4m$elm_syntax$Elm$Syntax$Expression$Floatable, $stil4m$elm_syntax$Elm$Syntax$Expression$Integer, $stil4m$elm_syntax$Elm$Syntax$Expression$Hex));
var $stil4m$elm_syntax$Elm$Parser$Tokens$ofToken = $stil4m$elm_syntax$Combine$string('of');
var $stil4m$elm_syntax$Elm$Parser$Tokens$allowedPrefixOperatorTokens = A2($elm$core$List$cons, ',', $stil4m$elm_syntax$Elm$Parser$Tokens$allowedOperatorTokens);
var $stil4m$elm_syntax$Elm$Parser$Tokens$prefixOperatorToken = $stil4m$elm_syntax$Elm$Parser$Tokens$operatorTokenFromList($stil4m$elm_syntax$Elm$Parser$Tokens$allowedPrefixOperatorTokens);
var $stil4m$elm_syntax$Elm$Syntax$Expression$RecordAccessFunction = function (a) {
	return {$: 21, a: a};
};
var $stil4m$elm_syntax$Elm$Parser$Declarations$recordAccessFunctionExpression = $stil4m$elm_syntax$Elm$Parser$Node$parser(
	A2(
		$stil4m$elm_syntax$Combine$map,
		A2(
			$elm$core$Basics$composeR,
			$elm$core$Basics$append('.'),
			$stil4m$elm_syntax$Elm$Syntax$Expression$RecordAccessFunction),
		A2(
			$stil4m$elm_syntax$Combine$continueWith,
			$stil4m$elm_syntax$Elm$Parser$Tokens$functionName,
			$stil4m$elm_syntax$Combine$string('.'))));
var $stil4m$elm_syntax$Elm$Syntax$Expression$FunctionOrValue = F2(
	function (a, b) {
		return {$: 3, a: a, b: b};
	});
var $stil4m$elm_syntax$Elm$Parser$Declarations$reference = function () {
	var justFunction = A2(
		$stil4m$elm_syntax$Combine$map,
		function (v) {
			return _Utils_Tuple2(_List_Nil, v);
		},
		$stil4m$elm_syntax$Elm$Parser$Tokens$functionName);
	var helper = function (_v0) {
		var n = _v0.a;
		var xs = _v0.b;
		return $stil4m$elm_syntax$Combine$choice(
			_List_fromArray(
				[
					A2(
					$stil4m$elm_syntax$Combine$continueWith,
					$stil4m$elm_syntax$Combine$choice(
						_List_fromArray(
							[
								A2(
								$stil4m$elm_syntax$Combine$andThen,
								function (t) {
									return helper(
										_Utils_Tuple2(
											t,
											A2($elm$core$List$cons, n, xs)));
								},
								$stil4m$elm_syntax$Elm$Parser$Tokens$typeName),
								A2(
								$stil4m$elm_syntax$Combine$map,
								function (t) {
									return _Utils_Tuple2(
										t,
										A2($elm$core$List$cons, n, xs));
								},
								$stil4m$elm_syntax$Elm$Parser$Tokens$functionName)
							])),
					$stil4m$elm_syntax$Combine$string('.')),
					$stil4m$elm_syntax$Combine$succeed(
					_Utils_Tuple2(n, xs))
				]));
	};
	var recurring = A2(
		$stil4m$elm_syntax$Combine$map,
		function (_v1) {
			var t = _v1.a;
			var xs = _v1.b;
			return _Utils_Tuple2(
				$elm$core$List$reverse(xs),
				t);
		},
		A2(
			$stil4m$elm_syntax$Combine$andThen,
			function (t) {
				return helper(
					_Utils_Tuple2(t, _List_Nil));
			},
			$stil4m$elm_syntax$Elm$Parser$Tokens$typeName));
	return $stil4m$elm_syntax$Combine$choice(
		_List_fromArray(
			[recurring, justFunction]));
}();
var $stil4m$elm_syntax$Elm$Parser$Declarations$referenceExpression = $stil4m$elm_syntax$Elm$Parser$Node$parser(
	A2(
		$stil4m$elm_syntax$Combine$map,
		function (_v0) {
			var xs = _v0.a;
			var x = _v0.b;
			return A2($stil4m$elm_syntax$Elm$Syntax$Expression$FunctionOrValue, xs, x);
		},
		$stil4m$elm_syntax$Elm$Parser$Declarations$reference));
var $stil4m$elm_syntax$Elm$Parser$Tokens$thenToken = $stil4m$elm_syntax$Combine$string('then');
var $stil4m$elm_syntax$Elm$Parser$Ranges$asPointerLocation = function (_v0) {
	var line = _v0.aM;
	var column = _v0.eF;
	return {eF: column, d0: line};
};
var $stil4m$elm_syntax$Elm$Parser$Ranges$withCurrentPoint = function (p) {
	return $stil4m$elm_syntax$Combine$withLocation(
		function (start) {
			var k = $stil4m$elm_syntax$Elm$Parser$Ranges$asPointerLocation(start);
			return p(
				{bu: k, bQ: k});
		});
};
var $stil4m$elm_syntax$Elm$Parser$State$popIndent = function (_v0) {
	var s = _v0;
	return _Utils_update(
		s,
		{
			bc: A2($elm$core$List$drop, 1, s.bc)
		});
};
var $stil4m$elm_syntax$Elm$Parser$State$pushIndent = F2(
	function (x, _v0) {
		var s = _v0;
		return _Utils_update(
			s,
			{
				bc: A2($elm$core$List$cons, x, s.bc)
			});
	});
var $stil4m$elm_syntax$Elm$Parser$State$pushColumn = F2(
	function (col, state) {
		return A2($stil4m$elm_syntax$Elm$Parser$State$pushIndent, col - 1, state);
	});
var $stil4m$elm_syntax$Elm$Parser$Declarations$withIndentedState = function (p) {
	return $stil4m$elm_syntax$Combine$withLocation(
		function (location) {
			return A2(
				$stil4m$elm_syntax$Combine$ignore,
				$stil4m$elm_syntax$Combine$modifyState($stil4m$elm_syntax$Elm$Parser$State$popIndent),
				A2(
					$stil4m$elm_syntax$Combine$continueWith,
					p,
					$stil4m$elm_syntax$Combine$modifyState(
						$stil4m$elm_syntax$Elm$Parser$State$pushColumn(location.eF))));
		});
};
var $stil4m$elm_syntax$Elm$Parser$Declarations$functionWithNameNode = function (pointer) {
	var functionImplementationFromVarPointer = function (varPointer) {
		return A2(
			$stil4m$elm_syntax$Combine$andMap,
			$stil4m$elm_syntax$Elm$Parser$Declarations$cyclic$expression(),
			A2(
				$stil4m$elm_syntax$Combine$ignore,
				$stil4m$elm_syntax$Combine$maybe($stil4m$elm_syntax$Elm$Parser$Layout$layout),
				A2(
					$stil4m$elm_syntax$Combine$ignore,
					$stil4m$elm_syntax$Combine$string('='),
					A2(
						$stil4m$elm_syntax$Combine$andMap,
						$stil4m$elm_syntax$Combine$many(
							A2(
								$stil4m$elm_syntax$Combine$ignore,
								$stil4m$elm_syntax$Combine$maybe($stil4m$elm_syntax$Elm$Parser$Layout$layout),
								$stil4m$elm_syntax$Elm$Parser$Declarations$functionArgument)),
						$stil4m$elm_syntax$Combine$succeed(
							F2(
								function (args, expr) {
									return A2(
										$stil4m$elm_syntax$Elm$Syntax$Node$Node,
										$stil4m$elm_syntax$Elm$Syntax$Range$combine(
											_List_fromArray(
												[
													$stil4m$elm_syntax$Elm$Syntax$Node$range(varPointer),
													$stil4m$elm_syntax$Elm$Syntax$Node$range(expr)
												])),
										A3($stil4m$elm_syntax$Elm$Syntax$Expression$FunctionImplementation, varPointer, args, expr));
								}))))));
	};
	var functionWithoutSignature = function (varPointer) {
		return A2(
			$stil4m$elm_syntax$Combine$map,
			A2($stil4m$elm_syntax$Elm$Syntax$Expression$Function, $elm$core$Maybe$Nothing, $elm$core$Maybe$Nothing),
			functionImplementationFromVarPointer(varPointer));
	};
	var fromParts = F2(
		function (sig, decl) {
			return {
				dm: decl,
				cL: $elm$core$Maybe$Nothing,
				fD: $elm$core$Maybe$Just(sig)
			};
		});
	var functionWithSignature = function (varPointer) {
		return A2(
			$stil4m$elm_syntax$Combine$andThen,
			function (sig) {
				return A2(
					$stil4m$elm_syntax$Combine$map,
					fromParts(sig),
					A2(
						$stil4m$elm_syntax$Combine$andThen,
						functionImplementationFromVarPointer,
						A2(
							$stil4m$elm_syntax$Combine$ignore,
							$stil4m$elm_syntax$Combine$maybe($stil4m$elm_syntax$Elm$Parser$Layout$layout),
							A2(
								$stil4m$elm_syntax$Combine$continueWith,
								$stil4m$elm_syntax$Elm$Parser$Node$parser($stil4m$elm_syntax$Elm$Parser$Tokens$functionName),
								$stil4m$elm_syntax$Combine$maybe($stil4m$elm_syntax$Elm$Parser$Layout$layoutStrict)))));
			},
			$stil4m$elm_syntax$Elm$Parser$Declarations$functionSignatureFromVarPointer(varPointer));
	};
	return $stil4m$elm_syntax$Combine$choice(
		_List_fromArray(
			[
				functionWithSignature(pointer),
				functionWithoutSignature(pointer)
			]));
};
var $stil4m$elm_syntax$Elm$Parser$Declarations$letDestructuringDeclarationWithPattern = function (p) {
	return $stil4m$elm_syntax$Combine$lazy(
		function (_v7) {
			return A2(
				$stil4m$elm_syntax$Combine$andMap,
				$stil4m$elm_syntax$Elm$Parser$Declarations$cyclic$expression(),
				A2(
					$stil4m$elm_syntax$Combine$ignore,
					$stil4m$elm_syntax$Combine$maybe($stil4m$elm_syntax$Elm$Parser$Layout$layout),
					A2(
						$stil4m$elm_syntax$Combine$ignore,
						$stil4m$elm_syntax$Combine$string('='),
						A2(
							$stil4m$elm_syntax$Combine$ignore,
							$stil4m$elm_syntax$Combine$maybe($stil4m$elm_syntax$Elm$Parser$Layout$layout),
							$stil4m$elm_syntax$Combine$succeed(
								$stil4m$elm_syntax$Elm$Syntax$Expression$LetDestructuring(p))))));
		});
};
function $stil4m$elm_syntax$Elm$Parser$Declarations$cyclic$caseBlock() {
	return $stil4m$elm_syntax$Combine$lazy(
		function (_v28) {
			return A2(
				$stil4m$elm_syntax$Combine$ignore,
				$stil4m$elm_syntax$Elm$Parser$Tokens$ofToken,
				A2(
					$stil4m$elm_syntax$Combine$continueWith,
					$stil4m$elm_syntax$Elm$Parser$Declarations$cyclic$expression(),
					A2($stil4m$elm_syntax$Combine$continueWith, $stil4m$elm_syntax$Elm$Parser$Layout$layout, $stil4m$elm_syntax$Elm$Parser$Tokens$caseToken)));
		});
}
function $stil4m$elm_syntax$Elm$Parser$Declarations$cyclic$caseExpression() {
	return $stil4m$elm_syntax$Combine$lazy(
		function (_v26) {
			return A2(
				$stil4m$elm_syntax$Combine$andThen,
				function (_v27) {
					var start = _v27.a;
					return A2(
						$stil4m$elm_syntax$Combine$map,
						function (cb) {
							return A2(
								$stil4m$elm_syntax$Elm$Syntax$Node$Node,
								$stil4m$elm_syntax$Elm$Syntax$Range$combine(
									A2(
										$elm$core$List$cons,
										start,
										A2(
											$elm$core$List$map,
											A2($elm$core$Basics$composeR, $elm$core$Tuple$second, $stil4m$elm_syntax$Elm$Syntax$Node$range),
											cb.eC))),
								$stil4m$elm_syntax$Elm$Syntax$Expression$CaseExpression(cb));
						},
						A2(
							$stil4m$elm_syntax$Combine$andMap,
							A2(
								$stil4m$elm_syntax$Combine$continueWith,
								$stil4m$elm_syntax$Elm$Parser$Declarations$withIndentedState(
									$stil4m$elm_syntax$Elm$Parser$Declarations$cyclic$caseStatements()),
								$stil4m$elm_syntax$Elm$Parser$Layout$layout),
							A2(
								$stil4m$elm_syntax$Combine$andMap,
								$stil4m$elm_syntax$Elm$Parser$Declarations$cyclic$caseBlock(),
								$stil4m$elm_syntax$Combine$succeed($stil4m$elm_syntax$Elm$Syntax$Expression$CaseBlock))));
				},
				$stil4m$elm_syntax$Elm$Parser$Node$parser(
					$stil4m$elm_syntax$Combine$succeed(0)));
		});
}
function $stil4m$elm_syntax$Elm$Parser$Declarations$cyclic$caseStatement() {
	return $stil4m$elm_syntax$Combine$lazy(
		function (_v25) {
			return A2(
				$stil4m$elm_syntax$Combine$andMap,
				A2(
					$stil4m$elm_syntax$Combine$continueWith,
					$stil4m$elm_syntax$Elm$Parser$Declarations$cyclic$expression(),
					A2(
						$stil4m$elm_syntax$Combine$continueWith,
						$stil4m$elm_syntax$Combine$maybe($stil4m$elm_syntax$Elm$Parser$Layout$layout),
						A2(
							$stil4m$elm_syntax$Combine$continueWith,
							$stil4m$elm_syntax$Combine$string('->'),
							$stil4m$elm_syntax$Combine$maybe(
								A2($stil4m$elm_syntax$Combine$or, $stil4m$elm_syntax$Elm$Parser$Layout$layout, $stil4m$elm_syntax$Elm$Parser$Layout$layoutStrict))))),
				A2(
					$stil4m$elm_syntax$Combine$andMap,
					$stil4m$elm_syntax$Elm$Parser$Patterns$pattern,
					$stil4m$elm_syntax$Combine$succeed($elm$core$Tuple$pair)));
		});
}
function $stil4m$elm_syntax$Elm$Parser$Declarations$cyclic$caseStatements() {
	return $stil4m$elm_syntax$Combine$lazy(
		function (_v24) {
			var helper = function (last) {
				return $stil4m$elm_syntax$Combine$withState(
					function (s) {
						return $stil4m$elm_syntax$Combine$withLocation(
							function (l) {
								return _Utils_eq(
									$stil4m$elm_syntax$Elm$Parser$State$expectedColumn(s),
									l.eF) ? $stil4m$elm_syntax$Combine$choice(
									_List_fromArray(
										[
											A2(
											$stil4m$elm_syntax$Combine$map,
											function (c) {
												return $stil4m$elm_syntax$Combine$Loop(
													A2($elm$core$List$cons, c, last));
											},
											$stil4m$elm_syntax$Elm$Parser$Declarations$cyclic$caseStatement()),
											$stil4m$elm_syntax$Combine$succeed(
											$stil4m$elm_syntax$Combine$Done(
												$elm$core$List$reverse(last)))
										])) : $stil4m$elm_syntax$Combine$succeed(
									$stil4m$elm_syntax$Combine$Done(
										$elm$core$List$reverse(last)));
							});
					});
			};
			return A2(
				$stil4m$elm_syntax$Combine$andThen,
				function (v) {
					return A2($stil4m$elm_syntax$Combine$loop, v, helper);
				},
				A2(
					$stil4m$elm_syntax$Combine$map,
					$elm$core$List$singleton,
					$stil4m$elm_syntax$Elm$Parser$Declarations$cyclic$caseStatement()));
		});
}
function $stil4m$elm_syntax$Elm$Parser$Declarations$cyclic$expression() {
	return $stil4m$elm_syntax$Combine$lazy(
		function (_v18) {
			return A2(
				$stil4m$elm_syntax$Combine$andThen,
				function (first) {
					var complete = function (rest) {
						if (!rest.b) {
							return $stil4m$elm_syntax$Combine$succeed(first);
						} else {
							if (rest.a.b.$ === 6) {
								var _v23 = rest.a;
								return $stil4m$elm_syntax$Combine$fail('Expression should not end with an operator');
							} else {
								return $stil4m$elm_syntax$Combine$succeed(
									A2(
										$stil4m$elm_syntax$Elm$Syntax$Node$Node,
										$stil4m$elm_syntax$Elm$Syntax$Range$combine(
											A2(
												$elm$core$List$cons,
												$stil4m$elm_syntax$Elm$Syntax$Node$range(first),
												A2($elm$core$List$map, $stil4m$elm_syntax$Elm$Syntax$Node$range, rest))),
										$stil4m$elm_syntax$Elm$Syntax$Expression$Application(
											A2(
												$elm$core$List$cons,
												first,
												$elm$core$List$reverse(rest)))));
							}
						}
					};
					var promoter = function (rest) {
						return A2(
							$stil4m$elm_syntax$Elm$Parser$Layout$optimisticLayoutWith,
							function (_v19) {
								return complete(rest);
							},
							function (_v20) {
								return A2(
									$stil4m$elm_syntax$Combine$or,
									A2(
										$stil4m$elm_syntax$Combine$andThen,
										function (next) {
											return promoter(
												A2($elm$core$List$cons, next, rest));
										},
										$stil4m$elm_syntax$Elm$Parser$Declarations$cyclic$expressionNotApplication()),
									complete(rest));
							});
					};
					if (first.b.$ === 6) {
						return $stil4m$elm_syntax$Combine$fail('Expression should not start with an operator');
					} else {
						return promoter(_List_Nil);
					}
				},
				$stil4m$elm_syntax$Elm$Parser$Declarations$cyclic$expressionNotApplication());
		});
}
function $stil4m$elm_syntax$Elm$Parser$Declarations$cyclic$expressionNotApplication() {
	return $stil4m$elm_syntax$Combine$lazy(
		function (_v17) {
			return A2(
				$stil4m$elm_syntax$Combine$andThen,
				$stil4m$elm_syntax$Elm$Parser$Declarations$liftRecordAccess,
				$stil4m$elm_syntax$Combine$choice(
					_List_fromArray(
						[
							$stil4m$elm_syntax$Elm$Parser$Declarations$numberExpression,
							$stil4m$elm_syntax$Elm$Parser$Declarations$referenceExpression,
							$stil4m$elm_syntax$Elm$Parser$Declarations$cyclic$ifBlockExpression(),
							$stil4m$elm_syntax$Elm$Parser$Declarations$cyclic$tupledExpression(),
							$stil4m$elm_syntax$Elm$Parser$Declarations$recordAccessFunctionExpression,
							$stil4m$elm_syntax$Elm$Parser$Declarations$cyclic$operatorExpression(),
							$stil4m$elm_syntax$Elm$Parser$Declarations$cyclic$letExpression(),
							$stil4m$elm_syntax$Elm$Parser$Declarations$cyclic$lambdaExpression(),
							$stil4m$elm_syntax$Elm$Parser$Declarations$literalExpression,
							$stil4m$elm_syntax$Elm$Parser$Declarations$charLiteralExpression,
							$stil4m$elm_syntax$Elm$Parser$Declarations$cyclic$recordExpression(),
							$stil4m$elm_syntax$Elm$Parser$Declarations$glslExpression,
							$stil4m$elm_syntax$Elm$Parser$Declarations$cyclic$listExpression(),
							$stil4m$elm_syntax$Elm$Parser$Declarations$cyclic$caseExpression()
						])));
		});
}
function $stil4m$elm_syntax$Elm$Parser$Declarations$cyclic$ifBlockExpression() {
	return $stil4m$elm_syntax$Elm$Parser$Ranges$withCurrentPoint(
		function (current) {
			return A2(
				$stil4m$elm_syntax$Combine$continueWith,
				$stil4m$elm_syntax$Combine$lazy(
					function (_v16) {
						return A2(
							$stil4m$elm_syntax$Combine$andMap,
							A2(
								$stil4m$elm_syntax$Combine$continueWith,
								$stil4m$elm_syntax$Elm$Parser$Declarations$cyclic$expression(),
								A2($stil4m$elm_syntax$Combine$continueWith, $stil4m$elm_syntax$Elm$Parser$Layout$layout, $stil4m$elm_syntax$Elm$Parser$Tokens$elseToken)),
							A2(
								$stil4m$elm_syntax$Combine$ignore,
								$stil4m$elm_syntax$Combine$maybe($stil4m$elm_syntax$Elm$Parser$Layout$layout),
								A2(
									$stil4m$elm_syntax$Combine$andMap,
									$stil4m$elm_syntax$Elm$Parser$Declarations$cyclic$expression(),
									A2(
										$stil4m$elm_syntax$Combine$ignore,
										$stil4m$elm_syntax$Combine$maybe($stil4m$elm_syntax$Elm$Parser$Layout$layout),
										A2(
											$stil4m$elm_syntax$Combine$ignore,
											$stil4m$elm_syntax$Elm$Parser$Tokens$thenToken,
											A2(
												$stil4m$elm_syntax$Combine$ignore,
												$stil4m$elm_syntax$Combine$maybe($stil4m$elm_syntax$Elm$Parser$Layout$layout),
												A2(
													$stil4m$elm_syntax$Combine$andMap,
													$stil4m$elm_syntax$Elm$Parser$Declarations$cyclic$expression(),
													A2(
														$stil4m$elm_syntax$Combine$ignore,
														$stil4m$elm_syntax$Combine$maybe($stil4m$elm_syntax$Elm$Parser$Layout$layout),
														$stil4m$elm_syntax$Combine$succeed(
															F3(
																function (condition, ifTrue, ifFalse) {
																	return A2(
																		$stil4m$elm_syntax$Elm$Syntax$Node$Node,
																		{
																			bu: $stil4m$elm_syntax$Elm$Syntax$Node$range(ifFalse).bu,
																			bQ: current.bQ
																		},
																		A3($stil4m$elm_syntax$Elm$Syntax$Expression$IfBlock, condition, ifTrue, ifFalse));
																}))))))))));
					}),
				$stil4m$elm_syntax$Elm$Parser$Tokens$ifToken);
		});
}
function $stil4m$elm_syntax$Elm$Parser$Declarations$cyclic$lambdaExpression() {
	return $stil4m$elm_syntax$Combine$lazy(
		function (_v15) {
			return $stil4m$elm_syntax$Elm$Parser$Ranges$withCurrentPoint(
				function (current) {
					return A2(
						$stil4m$elm_syntax$Combine$andMap,
						A2(
							$stil4m$elm_syntax$Combine$continueWith,
							$stil4m$elm_syntax$Elm$Parser$Declarations$cyclic$expression(),
							$stil4m$elm_syntax$Elm$Parser$Layout$maybeAroundBothSides(
								$stil4m$elm_syntax$Combine$string('->'))),
						A2(
							$stil4m$elm_syntax$Combine$andMap,
							A2(
								$stil4m$elm_syntax$Combine$sepBy1,
								$stil4m$elm_syntax$Combine$maybe($stil4m$elm_syntax$Elm$Parser$Layout$layout),
								$stil4m$elm_syntax$Elm$Parser$Declarations$functionArgument),
							A2(
								$stil4m$elm_syntax$Combine$ignore,
								$stil4m$elm_syntax$Combine$maybe($stil4m$elm_syntax$Elm$Parser$Layout$layout),
								A2(
									$stil4m$elm_syntax$Combine$ignore,
									$stil4m$elm_syntax$Combine$string('\\'),
									$stil4m$elm_syntax$Combine$succeed(
										F2(
											function (args, expr) {
												return A2(
													$stil4m$elm_syntax$Elm$Syntax$Node$Node,
													{
														bu: $stil4m$elm_syntax$Elm$Syntax$Node$range(expr).bu,
														bQ: current.bQ
													},
													$stil4m$elm_syntax$Elm$Syntax$Expression$LambdaExpression(
														A2($stil4m$elm_syntax$Elm$Syntax$Expression$Lambda, args, expr)));
											}))))));
				});
		});
}
function $stil4m$elm_syntax$Elm$Parser$Declarations$cyclic$letBlock() {
	return $stil4m$elm_syntax$Combine$lazy(
		function (_v14) {
			return A2(
				$stil4m$elm_syntax$Combine$ignore,
				A2(
					$stil4m$elm_syntax$Combine$continueWith,
					$stil4m$elm_syntax$Combine$string('in'),
					$stil4m$elm_syntax$Combine$choice(
						_List_fromArray(
							[$stil4m$elm_syntax$Elm$Parser$Layout$layout, $stil4m$elm_syntax$Elm$Parser$Whitespace$manySpaces]))),
				A2(
					$stil4m$elm_syntax$Combine$continueWith,
					$stil4m$elm_syntax$Elm$Parser$Declarations$withIndentedState(
						$stil4m$elm_syntax$Elm$Parser$Declarations$cyclic$letBody()),
					A2(
						$stil4m$elm_syntax$Combine$continueWith,
						$stil4m$elm_syntax$Elm$Parser$Layout$layout,
						$stil4m$elm_syntax$Combine$string('let'))));
		});
}
function $stil4m$elm_syntax$Elm$Parser$Declarations$cyclic$letBody() {
	return $stil4m$elm_syntax$Combine$lazy(
		function (_v8) {
			var blockElement = A2(
				$stil4m$elm_syntax$Combine$andThen,
				function (_v12) {
					var r = _v12.a;
					var p = _v12.b;
					if (p.$ === 11) {
						var v = p.a;
						return A2(
							$stil4m$elm_syntax$Combine$map,
							$stil4m$elm_syntax$Elm$Syntax$Expression$LetFunction,
							$stil4m$elm_syntax$Elm$Parser$Declarations$functionWithNameNode(
								A2($stil4m$elm_syntax$Elm$Syntax$Node$Node, r, v)));
					} else {
						return $stil4m$elm_syntax$Elm$Parser$Declarations$letDestructuringDeclarationWithPattern(
							A2($stil4m$elm_syntax$Elm$Syntax$Node$Node, r, p));
					}
				},
				$stil4m$elm_syntax$Elm$Parser$Patterns$pattern);
			var addRange = function (letDeclaration) {
				return A2(
					$stil4m$elm_syntax$Elm$Syntax$Node$Node,
					function () {
						if (!letDeclaration.$) {
							var letFunction = letDeclaration.a;
							return $stil4m$elm_syntax$Elm$Syntax$Expression$functionRange(letFunction);
						} else {
							var _v10 = letDeclaration.a;
							var patternRange = _v10.a;
							var _v11 = letDeclaration.b;
							var expressionRange = _v11.a;
							return $stil4m$elm_syntax$Elm$Syntax$Range$combine(
								_List_fromArray(
									[patternRange, expressionRange]));
						}
					}(),
					letDeclaration);
			};
			return A2(
				$stil4m$elm_syntax$Combine$andMap,
				$stil4m$elm_syntax$Combine$many(
					A2(
						$stil4m$elm_syntax$Combine$ignore,
						$stil4m$elm_syntax$Combine$maybe($stil4m$elm_syntax$Elm$Parser$Layout$layout),
						A2($stil4m$elm_syntax$Combine$map, addRange, blockElement))),
				A2(
					$stil4m$elm_syntax$Combine$andMap,
					A2($stil4m$elm_syntax$Combine$map, addRange, blockElement),
					$stil4m$elm_syntax$Combine$succeed($elm$core$List$cons)));
		});
}
function $stil4m$elm_syntax$Elm$Parser$Declarations$cyclic$letExpression() {
	return $stil4m$elm_syntax$Combine$lazy(
		function (_v6) {
			return $stil4m$elm_syntax$Elm$Parser$Ranges$withCurrentPoint(
				function (current) {
					return A2(
						$stil4m$elm_syntax$Combine$andMap,
						A2(
							$stil4m$elm_syntax$Combine$continueWith,
							$stil4m$elm_syntax$Elm$Parser$Declarations$cyclic$expression(),
							$stil4m$elm_syntax$Elm$Parser$Layout$layout),
						A2(
							$stil4m$elm_syntax$Combine$andMap,
							$stil4m$elm_syntax$Elm$Parser$Declarations$cyclic$letBlock(),
							$stil4m$elm_syntax$Combine$succeed(
								F2(
									function (decls, expr) {
										return A2(
											$stil4m$elm_syntax$Elm$Syntax$Node$Node,
											{
												bu: $stil4m$elm_syntax$Elm$Syntax$Node$range(expr).bu,
												bQ: current.bQ
											},
											$stil4m$elm_syntax$Elm$Syntax$Expression$LetExpression(
												A2($stil4m$elm_syntax$Elm$Syntax$Expression$LetBlock, decls, expr)));
									}))));
				});
		});
}
function $stil4m$elm_syntax$Elm$Parser$Declarations$cyclic$listExpression() {
	return $stil4m$elm_syntax$Combine$lazy(
		function (_v5) {
			var innerExpressions = A2(
				$stil4m$elm_syntax$Combine$map,
				$stil4m$elm_syntax$Elm$Syntax$Expression$ListExpr,
				A2(
					$stil4m$elm_syntax$Combine$andMap,
					$stil4m$elm_syntax$Combine$many(
						A2(
							$stil4m$elm_syntax$Combine$continueWith,
							$stil4m$elm_syntax$Elm$Parser$Declarations$cyclic$expression(),
							A2(
								$stil4m$elm_syntax$Combine$ignore,
								$stil4m$elm_syntax$Combine$maybe($stil4m$elm_syntax$Elm$Parser$Layout$layout),
								$stil4m$elm_syntax$Combine$string(',')))),
					A2(
						$stil4m$elm_syntax$Combine$ignore,
						$stil4m$elm_syntax$Combine$maybe($stil4m$elm_syntax$Elm$Parser$Layout$layout),
						A2(
							$stil4m$elm_syntax$Combine$andMap,
							$stil4m$elm_syntax$Elm$Parser$Declarations$cyclic$expression(),
							$stil4m$elm_syntax$Combine$succeed($elm$core$List$cons)))));
			return $stil4m$elm_syntax$Elm$Parser$Node$parser(
				A2(
					$stil4m$elm_syntax$Combine$continueWith,
					$stil4m$elm_syntax$Combine$choice(
						_List_fromArray(
							[
								A2(
								$stil4m$elm_syntax$Combine$map,
								$elm$core$Basics$always(
									$stil4m$elm_syntax$Elm$Syntax$Expression$ListExpr(_List_Nil)),
								$stil4m$elm_syntax$Combine$string(']')),
								A2(
								$stil4m$elm_syntax$Combine$ignore,
								$stil4m$elm_syntax$Combine$string(']'),
								innerExpressions)
							])),
					A2(
						$stil4m$elm_syntax$Combine$ignore,
						$stil4m$elm_syntax$Combine$maybe($stil4m$elm_syntax$Elm$Parser$Layout$layout),
						$stil4m$elm_syntax$Combine$string('['))));
		});
}
function $stil4m$elm_syntax$Elm$Parser$Declarations$cyclic$operatorExpression() {
	var negationExpression = $stil4m$elm_syntax$Combine$lazy(
		function (_v4) {
			return A2(
				$stil4m$elm_syntax$Combine$map,
				$stil4m$elm_syntax$Elm$Syntax$Expression$Negation,
				A2(
					$stil4m$elm_syntax$Combine$andThen,
					$stil4m$elm_syntax$Elm$Parser$Declarations$liftRecordAccess,
					$stil4m$elm_syntax$Combine$choice(
						_List_fromArray(
							[
								$stil4m$elm_syntax$Elm$Parser$Declarations$referenceExpression,
								$stil4m$elm_syntax$Elm$Parser$Declarations$numberExpression,
								$stil4m$elm_syntax$Elm$Parser$Declarations$cyclic$tupledExpression()
							]))));
		});
	return $stil4m$elm_syntax$Combine$lazy(
		function (_v3) {
			return $stil4m$elm_syntax$Combine$choice(
				_List_fromArray(
					[
						$stil4m$elm_syntax$Elm$Parser$Node$parser(
						A2(
							$stil4m$elm_syntax$Combine$continueWith,
							$stil4m$elm_syntax$Combine$choice(
								_List_fromArray(
									[
										negationExpression,
										A2(
										$stil4m$elm_syntax$Combine$ignore,
										$stil4m$elm_syntax$Elm$Parser$Layout$layout,
										$stil4m$elm_syntax$Combine$succeed(
											$stil4m$elm_syntax$Elm$Syntax$Expression$Operator('-')))
									])),
							$stil4m$elm_syntax$Combine$string('-'))),
						$stil4m$elm_syntax$Elm$Parser$Node$parser(
						A2($stil4m$elm_syntax$Combine$map, $stil4m$elm_syntax$Elm$Syntax$Expression$Operator, $stil4m$elm_syntax$Elm$Parser$Tokens$infixOperatorToken))
					]));
		});
}
function $stil4m$elm_syntax$Elm$Parser$Declarations$cyclic$recordExpression() {
	return $stil4m$elm_syntax$Elm$Parser$Node$parser(
		$stil4m$elm_syntax$Combine$lazy(
			function (_v2) {
				var recordField = $stil4m$elm_syntax$Elm$Parser$Node$parser(
					A2(
						$stil4m$elm_syntax$Combine$andMap,
						$stil4m$elm_syntax$Elm$Parser$Declarations$cyclic$expression(),
						A2(
							$stil4m$elm_syntax$Combine$ignore,
							$stil4m$elm_syntax$Combine$maybe($stil4m$elm_syntax$Elm$Parser$Layout$layout),
							A2(
								$stil4m$elm_syntax$Combine$ignore,
								$stil4m$elm_syntax$Combine$string('='),
								A2(
									$stil4m$elm_syntax$Combine$ignore,
									$stil4m$elm_syntax$Combine$maybe($stil4m$elm_syntax$Elm$Parser$Layout$layout),
									A2(
										$stil4m$elm_syntax$Combine$andMap,
										$stil4m$elm_syntax$Elm$Parser$Node$parser($stil4m$elm_syntax$Elm$Parser$Tokens$functionName),
										$stil4m$elm_syntax$Combine$succeed($elm$core$Tuple$pair)))))));
				var recordFields = A2(
					$stil4m$elm_syntax$Combine$andMap,
					$stil4m$elm_syntax$Combine$many(
						A2(
							$stil4m$elm_syntax$Combine$ignore,
							$stil4m$elm_syntax$Combine$maybe($stil4m$elm_syntax$Elm$Parser$Layout$layout),
							A2(
								$stil4m$elm_syntax$Combine$continueWith,
								recordField,
								A2(
									$stil4m$elm_syntax$Combine$ignore,
									$stil4m$elm_syntax$Combine$maybe($stil4m$elm_syntax$Elm$Parser$Layout$layout),
									$stil4m$elm_syntax$Combine$string(','))))),
					A2(
						$stil4m$elm_syntax$Combine$ignore,
						$stil4m$elm_syntax$Combine$maybe($stil4m$elm_syntax$Elm$Parser$Layout$layout),
						A2(
							$stil4m$elm_syntax$Combine$andMap,
							recordField,
							$stil4m$elm_syntax$Combine$succeed($elm$core$List$cons))));
				var recordUpdateSyntaxParser = function (fname) {
					return A2(
						$stil4m$elm_syntax$Combine$ignore,
						$stil4m$elm_syntax$Combine$string('}'),
						A2(
							$stil4m$elm_syntax$Combine$map,
							function (e) {
								return A2($stil4m$elm_syntax$Elm$Syntax$Expression$RecordUpdateExpression, fname, e);
							},
							A2(
								$stil4m$elm_syntax$Combine$continueWith,
								recordFields,
								A2(
									$stil4m$elm_syntax$Combine$ignore,
									$stil4m$elm_syntax$Combine$maybe($stil4m$elm_syntax$Elm$Parser$Layout$layout),
									$stil4m$elm_syntax$Combine$string('|')))));
				};
				var recordContents = A2(
					$stil4m$elm_syntax$Combine$andThen,
					function (fname) {
						return $stil4m$elm_syntax$Combine$choice(
							_List_fromArray(
								[
									recordUpdateSyntaxParser(fname),
									A2(
									$stil4m$elm_syntax$Combine$andThen,
									function (fieldUpdate) {
										return $stil4m$elm_syntax$Combine$choice(
											_List_fromArray(
												[
													A2(
													$stil4m$elm_syntax$Combine$map,
													$elm$core$Basics$always(
														$stil4m$elm_syntax$Elm$Syntax$Expression$RecordExpr(
															_List_fromArray(
																[fieldUpdate]))),
													$stil4m$elm_syntax$Combine$string('}')),
													A2(
													$stil4m$elm_syntax$Combine$ignore,
													$stil4m$elm_syntax$Combine$string('}'),
													A2(
														$stil4m$elm_syntax$Combine$map,
														function (fieldUpdates) {
															return $stil4m$elm_syntax$Elm$Syntax$Expression$RecordExpr(
																A2($elm$core$List$cons, fieldUpdate, fieldUpdates));
														},
														A2(
															$stil4m$elm_syntax$Combine$continueWith,
															recordFields,
															A2(
																$stil4m$elm_syntax$Combine$ignore,
																$stil4m$elm_syntax$Combine$maybe($stil4m$elm_syntax$Elm$Parser$Layout$layout),
																$stil4m$elm_syntax$Combine$string(',')))))
												]));
									},
									A2(
										$stil4m$elm_syntax$Combine$ignore,
										$stil4m$elm_syntax$Combine$maybe($stil4m$elm_syntax$Elm$Parser$Layout$layout),
										A2(
											$stil4m$elm_syntax$Combine$continueWith,
											A2(
												$stil4m$elm_syntax$Combine$map,
												function (e) {
													return A3($stil4m$elm_syntax$Elm$Syntax$Node$combine, $elm$core$Tuple$pair, fname, e);
												},
												$stil4m$elm_syntax$Elm$Parser$Declarations$cyclic$expression()),
											A2(
												$stil4m$elm_syntax$Combine$ignore,
												$stil4m$elm_syntax$Combine$maybe($stil4m$elm_syntax$Elm$Parser$Layout$layout),
												$stil4m$elm_syntax$Combine$string('=')))))
								]));
					},
					A2(
						$stil4m$elm_syntax$Combine$ignore,
						$stil4m$elm_syntax$Combine$maybe($stil4m$elm_syntax$Elm$Parser$Layout$layout),
						$stil4m$elm_syntax$Elm$Parser$Node$parser($stil4m$elm_syntax$Elm$Parser$Tokens$functionName)));
				return A2(
					$stil4m$elm_syntax$Combine$continueWith,
					$stil4m$elm_syntax$Combine$choice(
						_List_fromArray(
							[
								A2(
								$stil4m$elm_syntax$Combine$map,
								$elm$core$Basics$always(
									$stil4m$elm_syntax$Elm$Syntax$Expression$RecordExpr(_List_Nil)),
								$stil4m$elm_syntax$Combine$string('}')),
								recordContents
							])),
					A2(
						$stil4m$elm_syntax$Combine$ignore,
						$stil4m$elm_syntax$Combine$maybe($stil4m$elm_syntax$Elm$Parser$Layout$layout),
						$stil4m$elm_syntax$Combine$string('{')));
			}));
}
function $stil4m$elm_syntax$Elm$Parser$Declarations$cyclic$tupledExpression() {
	return $stil4m$elm_syntax$Combine$lazy(
		function (_v0) {
			var commaSep = $stil4m$elm_syntax$Combine$many(
				A2(
					$stil4m$elm_syntax$Combine$ignore,
					$stil4m$elm_syntax$Combine$maybe($stil4m$elm_syntax$Elm$Parser$Layout$layout),
					A2(
						$stil4m$elm_syntax$Combine$continueWith,
						$stil4m$elm_syntax$Elm$Parser$Declarations$cyclic$expression(),
						A2(
							$stil4m$elm_syntax$Combine$ignore,
							$stil4m$elm_syntax$Combine$maybe($stil4m$elm_syntax$Elm$Parser$Layout$layout),
							$stil4m$elm_syntax$Combine$string(',')))));
			var closingParen = $stil4m$elm_syntax$Combine$fromCore(
				$elm$parser$Parser$symbol(')'));
			var asExpression = F2(
				function (x, xs) {
					if (!xs.b) {
						return $stil4m$elm_syntax$Elm$Syntax$Expression$ParenthesizedExpression(x);
					} else {
						return $stil4m$elm_syntax$Elm$Syntax$Expression$TupledExpression(
							A2($elm$core$List$cons, x, xs));
					}
				});
			var nested = A2(
				$stil4m$elm_syntax$Combine$andMap,
				commaSep,
				A2(
					$stil4m$elm_syntax$Combine$ignore,
					$stil4m$elm_syntax$Combine$maybe($stil4m$elm_syntax$Elm$Parser$Layout$layout),
					A2(
						$stil4m$elm_syntax$Combine$andMap,
						$stil4m$elm_syntax$Elm$Parser$Declarations$cyclic$expression(),
						A2(
							$stil4m$elm_syntax$Combine$ignore,
							$stil4m$elm_syntax$Combine$maybe($stil4m$elm_syntax$Elm$Parser$Layout$layout),
							$stil4m$elm_syntax$Combine$succeed(asExpression)))));
			return $stil4m$elm_syntax$Elm$Parser$Node$parser(
				A2(
					$stil4m$elm_syntax$Combine$continueWith,
					$stil4m$elm_syntax$Combine$choice(
						_List_fromArray(
							[
								A2(
								$stil4m$elm_syntax$Combine$map,
								$elm$core$Basics$always($stil4m$elm_syntax$Elm$Syntax$Expression$UnitExpr),
								closingParen),
								$stil4m$elm_syntax$Combine$backtrackable(
								A2(
									$stil4m$elm_syntax$Combine$map,
									$stil4m$elm_syntax$Elm$Syntax$Expression$PrefixOperator,
									A2($stil4m$elm_syntax$Combine$ignore, closingParen, $stil4m$elm_syntax$Elm$Parser$Tokens$prefixOperatorToken))),
								A2($stil4m$elm_syntax$Combine$ignore, closingParen, nested)
							])),
					$stil4m$elm_syntax$Combine$fromCore(
						$elm$parser$Parser$symbol('('))));
		});
}
var $stil4m$elm_syntax$Elm$Parser$Declarations$caseBlock = $stil4m$elm_syntax$Elm$Parser$Declarations$cyclic$caseBlock();
$stil4m$elm_syntax$Elm$Parser$Declarations$cyclic$caseBlock = function () {
	return $stil4m$elm_syntax$Elm$Parser$Declarations$caseBlock;
};
var $stil4m$elm_syntax$Elm$Parser$Declarations$caseExpression = $stil4m$elm_syntax$Elm$Parser$Declarations$cyclic$caseExpression();
$stil4m$elm_syntax$Elm$Parser$Declarations$cyclic$caseExpression = function () {
	return $stil4m$elm_syntax$Elm$Parser$Declarations$caseExpression;
};
var $stil4m$elm_syntax$Elm$Parser$Declarations$caseStatement = $stil4m$elm_syntax$Elm$Parser$Declarations$cyclic$caseStatement();
$stil4m$elm_syntax$Elm$Parser$Declarations$cyclic$caseStatement = function () {
	return $stil4m$elm_syntax$Elm$Parser$Declarations$caseStatement;
};
var $stil4m$elm_syntax$Elm$Parser$Declarations$caseStatements = $stil4m$elm_syntax$Elm$Parser$Declarations$cyclic$caseStatements();
$stil4m$elm_syntax$Elm$Parser$Declarations$cyclic$caseStatements = function () {
	return $stil4m$elm_syntax$Elm$Parser$Declarations$caseStatements;
};
var $stil4m$elm_syntax$Elm$Parser$Declarations$expression = $stil4m$elm_syntax$Elm$Parser$Declarations$cyclic$expression();
$stil4m$elm_syntax$Elm$Parser$Declarations$cyclic$expression = function () {
	return $stil4m$elm_syntax$Elm$Parser$Declarations$expression;
};
var $stil4m$elm_syntax$Elm$Parser$Declarations$expressionNotApplication = $stil4m$elm_syntax$Elm$Parser$Declarations$cyclic$expressionNotApplication();
$stil4m$elm_syntax$Elm$Parser$Declarations$cyclic$expressionNotApplication = function () {
	return $stil4m$elm_syntax$Elm$Parser$Declarations$expressionNotApplication;
};
var $stil4m$elm_syntax$Elm$Parser$Declarations$ifBlockExpression = $stil4m$elm_syntax$Elm$Parser$Declarations$cyclic$ifBlockExpression();
$stil4m$elm_syntax$Elm$Parser$Declarations$cyclic$ifBlockExpression = function () {
	return $stil4m$elm_syntax$Elm$Parser$Declarations$ifBlockExpression;
};
var $stil4m$elm_syntax$Elm$Parser$Declarations$lambdaExpression = $stil4m$elm_syntax$Elm$Parser$Declarations$cyclic$lambdaExpression();
$stil4m$elm_syntax$Elm$Parser$Declarations$cyclic$lambdaExpression = function () {
	return $stil4m$elm_syntax$Elm$Parser$Declarations$lambdaExpression;
};
var $stil4m$elm_syntax$Elm$Parser$Declarations$letBlock = $stil4m$elm_syntax$Elm$Parser$Declarations$cyclic$letBlock();
$stil4m$elm_syntax$Elm$Parser$Declarations$cyclic$letBlock = function () {
	return $stil4m$elm_syntax$Elm$Parser$Declarations$letBlock;
};
var $stil4m$elm_syntax$Elm$Parser$Declarations$letBody = $stil4m$elm_syntax$Elm$Parser$Declarations$cyclic$letBody();
$stil4m$elm_syntax$Elm$Parser$Declarations$cyclic$letBody = function () {
	return $stil4m$elm_syntax$Elm$Parser$Declarations$letBody;
};
var $stil4m$elm_syntax$Elm$Parser$Declarations$letExpression = $stil4m$elm_syntax$Elm$Parser$Declarations$cyclic$letExpression();
$stil4m$elm_syntax$Elm$Parser$Declarations$cyclic$letExpression = function () {
	return $stil4m$elm_syntax$Elm$Parser$Declarations$letExpression;
};
var $stil4m$elm_syntax$Elm$Parser$Declarations$listExpression = $stil4m$elm_syntax$Elm$Parser$Declarations$cyclic$listExpression();
$stil4m$elm_syntax$Elm$Parser$Declarations$cyclic$listExpression = function () {
	return $stil4m$elm_syntax$Elm$Parser$Declarations$listExpression;
};
var $stil4m$elm_syntax$Elm$Parser$Declarations$operatorExpression = $stil4m$elm_syntax$Elm$Parser$Declarations$cyclic$operatorExpression();
$stil4m$elm_syntax$Elm$Parser$Declarations$cyclic$operatorExpression = function () {
	return $stil4m$elm_syntax$Elm$Parser$Declarations$operatorExpression;
};
var $stil4m$elm_syntax$Elm$Parser$Declarations$recordExpression = $stil4m$elm_syntax$Elm$Parser$Declarations$cyclic$recordExpression();
$stil4m$elm_syntax$Elm$Parser$Declarations$cyclic$recordExpression = function () {
	return $stil4m$elm_syntax$Elm$Parser$Declarations$recordExpression;
};
var $stil4m$elm_syntax$Elm$Parser$Declarations$tupledExpression = $stil4m$elm_syntax$Elm$Parser$Declarations$cyclic$tupledExpression();
$stil4m$elm_syntax$Elm$Parser$Declarations$cyclic$tupledExpression = function () {
	return $stil4m$elm_syntax$Elm$Parser$Declarations$tupledExpression;
};
var $stil4m$elm_syntax$Elm$Parser$Declarations$destructuringDeclaration = $stil4m$elm_syntax$Combine$lazy(
	function (_v0) {
		return A2(
			$stil4m$elm_syntax$Combine$andMap,
			$stil4m$elm_syntax$Elm$Parser$Declarations$expression,
			A2(
				$stil4m$elm_syntax$Combine$ignore,
				$stil4m$elm_syntax$Elm$Parser$Layout$layout,
				A2(
					$stil4m$elm_syntax$Combine$ignore,
					$stil4m$elm_syntax$Combine$string('='),
					A2(
						$stil4m$elm_syntax$Combine$andMap,
						$stil4m$elm_syntax$Elm$Parser$Patterns$pattern,
						$stil4m$elm_syntax$Combine$succeed(
							F2(
								function (x, y) {
									return A3($stil4m$elm_syntax$Elm$Syntax$Node$combine, $stil4m$elm_syntax$Elm$Syntax$Declaration$Destructuring, x, y);
								}))))));
	});
var $stil4m$elm_syntax$Elm$Syntax$Declaration$FunctionDeclaration = function (a) {
	return {$: 0, a: a};
};
var $stil4m$elm_syntax$Elm$Parser$Declarations$function = $stil4m$elm_syntax$Combine$lazy(
	function (_v0) {
		return A2(
			$stil4m$elm_syntax$Combine$map,
			function (f) {
				return A2(
					$stil4m$elm_syntax$Elm$Syntax$Node$Node,
					$stil4m$elm_syntax$Elm$Syntax$Expression$functionRange(f),
					$stil4m$elm_syntax$Elm$Syntax$Declaration$FunctionDeclaration(f));
			},
			A2(
				$stil4m$elm_syntax$Combine$andThen,
				$stil4m$elm_syntax$Elm$Parser$Declarations$functionWithNameNode,
				A2(
					$stil4m$elm_syntax$Combine$ignore,
					$stil4m$elm_syntax$Combine$maybe($stil4m$elm_syntax$Elm$Parser$Layout$layout),
					$stil4m$elm_syntax$Elm$Parser$Node$parser($stil4m$elm_syntax$Elm$Parser$Tokens$functionName))));
	});
var $stil4m$elm_syntax$Elm$Syntax$Declaration$InfixDeclaration = function (a) {
	return {$: 4, a: a};
};
var $stil4m$elm_syntax$Elm$Syntax$Infix$Infix = F4(
	function (direction, precedence, operator, _function) {
		return {eM: direction, e_: _function, fp: operator, ft: precedence};
	});
var $stil4m$elm_syntax$Elm$Parser$Infix$infixDirection = $stil4m$elm_syntax$Combine$choice(
	_List_fromArray(
		[
			A2(
			$stil4m$elm_syntax$Combine$ignore,
			$stil4m$elm_syntax$Combine$string('right'),
			$stil4m$elm_syntax$Combine$succeed(1)),
			A2(
			$stil4m$elm_syntax$Combine$ignore,
			$stil4m$elm_syntax$Combine$string('left'),
			$stil4m$elm_syntax$Combine$succeed(0)),
			A2(
			$stil4m$elm_syntax$Combine$ignore,
			$stil4m$elm_syntax$Combine$string('non'),
			$stil4m$elm_syntax$Combine$succeed(2))
		]));
var $elm$parser$Parser$Advanced$int = F2(
	function (expecting, invalid) {
		return $elm$parser$Parser$Advanced$number(
			{
				dg: $elm$core$Result$Err(invalid),
				dv: expecting,
				dB: $elm$core$Result$Err(invalid),
				dG: $elm$core$Result$Err(invalid),
				dK: $elm$core$Result$Ok($elm$core$Basics$identity),
				e5: invalid,
				dW: $elm$core$Result$Err(invalid)
			});
	});
var $elm$parser$Parser$int = A2($elm$parser$Parser$Advanced$int, $elm$parser$Parser$ExpectingInt, $elm$parser$Parser$ExpectingInt);
var $stil4m$elm_syntax$Combine$Num$int = $stil4m$elm_syntax$Combine$fromCore($elm$parser$Parser$int);
var $stil4m$elm_syntax$Elm$Parser$Infix$infixDefinition = A2(
	$stil4m$elm_syntax$Combine$andMap,
	$stil4m$elm_syntax$Elm$Parser$Node$parser($stil4m$elm_syntax$Elm$Parser$Tokens$functionName),
	A2(
		$stil4m$elm_syntax$Combine$ignore,
		$stil4m$elm_syntax$Elm$Parser$Layout$layout,
		A2(
			$stil4m$elm_syntax$Combine$ignore,
			$stil4m$elm_syntax$Combine$string('='),
			A2(
				$stil4m$elm_syntax$Combine$ignore,
				$stil4m$elm_syntax$Elm$Parser$Layout$layout,
				A2(
					$stil4m$elm_syntax$Combine$andMap,
					$stil4m$elm_syntax$Elm$Parser$Node$parser(
						$stil4m$elm_syntax$Combine$parens($stil4m$elm_syntax$Elm$Parser$Tokens$prefixOperatorToken)),
					A2(
						$stil4m$elm_syntax$Combine$ignore,
						$stil4m$elm_syntax$Elm$Parser$Layout$layout,
						A2(
							$stil4m$elm_syntax$Combine$andMap,
							$stil4m$elm_syntax$Elm$Parser$Node$parser($stil4m$elm_syntax$Combine$Num$int),
							A2(
								$stil4m$elm_syntax$Combine$ignore,
								$stil4m$elm_syntax$Elm$Parser$Layout$layout,
								A2(
									$stil4m$elm_syntax$Combine$andMap,
									$stil4m$elm_syntax$Elm$Parser$Node$parser($stil4m$elm_syntax$Elm$Parser$Infix$infixDirection),
									A2(
										$stil4m$elm_syntax$Combine$ignore,
										$stil4m$elm_syntax$Elm$Parser$Layout$layout,
										A2(
											$stil4m$elm_syntax$Combine$ignore,
											$stil4m$elm_syntax$Combine$fromCore(
												$elm$parser$Parser$keyword('infix')),
											$stil4m$elm_syntax$Combine$succeed($stil4m$elm_syntax$Elm$Syntax$Infix$Infix))))))))))));
var $stil4m$elm_syntax$Elm$Parser$Declarations$infixDeclaration = $stil4m$elm_syntax$Elm$Parser$Ranges$withCurrentPoint(
	function (current) {
		return A2(
			$stil4m$elm_syntax$Combine$map,
			function (inf) {
				return A2(
					$stil4m$elm_syntax$Elm$Syntax$Node$Node,
					$stil4m$elm_syntax$Elm$Syntax$Range$combine(
						_List_fromArray(
							[
								current,
								$stil4m$elm_syntax$Elm$Syntax$Node$range(inf.e_)
							])),
					$stil4m$elm_syntax$Elm$Syntax$Declaration$InfixDeclaration(inf));
			},
			$stil4m$elm_syntax$Elm$Parser$Infix$infixDefinition);
	});
var $stil4m$elm_syntax$Elm$Syntax$Declaration$PortDeclaration = function (a) {
	return {$: 3, a: a};
};
var $stil4m$elm_syntax$Elm$Parser$Tokens$portToken = $stil4m$elm_syntax$Combine$string('port');
var $stil4m$elm_syntax$Elm$Parser$Declarations$signature = A2(
	$stil4m$elm_syntax$Combine$andMap,
	A2(
		$stil4m$elm_syntax$Combine$continueWith,
		$stil4m$elm_syntax$Elm$Parser$TypeAnnotation$typeAnnotation,
		A2(
			$stil4m$elm_syntax$Combine$continueWith,
			$stil4m$elm_syntax$Combine$maybe($stil4m$elm_syntax$Elm$Parser$Layout$layout),
			$stil4m$elm_syntax$Elm$Parser$Layout$maybeAroundBothSides(
				$stil4m$elm_syntax$Combine$string(':')))),
	A2(
		$stil4m$elm_syntax$Combine$andMap,
		$stil4m$elm_syntax$Elm$Parser$Node$parser($stil4m$elm_syntax$Elm$Parser$Tokens$functionName),
		$stil4m$elm_syntax$Combine$succeed($stil4m$elm_syntax$Elm$Syntax$Signature$Signature)));
var $stil4m$elm_syntax$Elm$Parser$Declarations$portDeclaration = $stil4m$elm_syntax$Elm$Parser$Ranges$withCurrentPoint(
	function (current) {
		return A2(
			$stil4m$elm_syntax$Combine$map,
			function (sig) {
				return A2(
					$stil4m$elm_syntax$Elm$Syntax$Node$Node,
					$stil4m$elm_syntax$Elm$Syntax$Range$combine(
						_List_fromArray(
							[
								current,
								function (_v0) {
								var r = _v0.a;
								return r;
							}(sig.ek)
							])),
					$stil4m$elm_syntax$Elm$Syntax$Declaration$PortDeclaration(sig));
			},
			A2(
				$stil4m$elm_syntax$Combine$continueWith,
				$stil4m$elm_syntax$Elm$Parser$Declarations$signature,
				A2($stil4m$elm_syntax$Combine$ignore, $stil4m$elm_syntax$Elm$Parser$Layout$layout, $stil4m$elm_syntax$Elm$Parser$Tokens$portToken)));
	});
var $stil4m$elm_syntax$Elm$Parser$Typings$DefinedAlias = F2(
	function (a, b) {
		return {$: 1, a: a, b: b};
	});
var $stil4m$elm_syntax$Elm$Parser$Typings$DefinedType = F2(
	function (a, b) {
		return {$: 0, a: a, b: b};
	});
var $stil4m$elm_syntax$Elm$Syntax$Type$Type = F4(
	function (documentation, name, generics, constructors) {
		return {eI: constructors, cL: documentation, dC: generics, fe: name};
	});
var $stil4m$elm_syntax$Elm$Syntax$TypeAlias$TypeAlias = F4(
	function (documentation, name, generics, typeAnnotation) {
		return {cL: documentation, dC: generics, fe: name, ek: typeAnnotation};
	});
var $stil4m$elm_syntax$Elm$Parser$Typings$genericList = $stil4m$elm_syntax$Combine$many(
	A2(
		$stil4m$elm_syntax$Combine$ignore,
		$stil4m$elm_syntax$Combine$maybe($stil4m$elm_syntax$Elm$Parser$Layout$layout),
		$stil4m$elm_syntax$Elm$Parser$Node$parser($stil4m$elm_syntax$Elm$Parser$Tokens$functionName)));
var $stil4m$elm_syntax$Elm$Parser$Typings$typePrefix = A2(
	$stil4m$elm_syntax$Combine$continueWith,
	$stil4m$elm_syntax$Elm$Parser$Layout$layout,
	$stil4m$elm_syntax$Combine$string('type'));
var $stil4m$elm_syntax$Elm$Syntax$Type$ValueConstructor = F2(
	function (name, _arguments) {
		return {es: _arguments, fe: name};
	});
var $stil4m$elm_syntax$Elm$Parser$TypeAnnotation$typeAnnotationNonGreedy = $stil4m$elm_syntax$Combine$choice(
	_List_fromArray(
		[
			$stil4m$elm_syntax$Elm$Parser$TypeAnnotation$parensTypeAnnotation,
			$stil4m$elm_syntax$Elm$Parser$TypeAnnotation$typedTypeAnnotation(1),
			$stil4m$elm_syntax$Elm$Parser$TypeAnnotation$genericTypeAnnotation,
			$stil4m$elm_syntax$Elm$Parser$TypeAnnotation$recordTypeAnnotation
		]));
var $stil4m$elm_syntax$Elm$Parser$Typings$valueConstructor = A2(
	$stil4m$elm_syntax$Combine$andThen,
	function (tnn) {
		var range = tnn.a;
		var complete = function (args) {
			return $stil4m$elm_syntax$Combine$succeed(
				A2(
					$stil4m$elm_syntax$Elm$Syntax$Node$Node,
					$stil4m$elm_syntax$Elm$Syntax$Range$combine(
						A2(
							$elm$core$List$cons,
							range,
							A2($elm$core$List$map, $stil4m$elm_syntax$Elm$Syntax$Node$range, args))),
					A2($stil4m$elm_syntax$Elm$Syntax$Type$ValueConstructor, tnn, args)));
		};
		var argHelper = function (xs) {
			return A2(
				$stil4m$elm_syntax$Combine$continueWith,
				$stil4m$elm_syntax$Combine$choice(
					_List_fromArray(
						[
							A2(
							$stil4m$elm_syntax$Combine$andThen,
							function (ta) {
								return A2(
									$stil4m$elm_syntax$Elm$Parser$Layout$optimisticLayoutWith,
									function (_v0) {
										return $stil4m$elm_syntax$Combine$succeed(
											$elm$core$List$reverse(
												A2($elm$core$List$cons, ta, xs)));
									},
									function (_v1) {
										return argHelper(
											A2($elm$core$List$cons, ta, xs));
									});
							},
							$stil4m$elm_syntax$Elm$Parser$TypeAnnotation$typeAnnotationNonGreedy),
							$stil4m$elm_syntax$Combine$succeed(
							$elm$core$List$reverse(xs))
						])),
				$stil4m$elm_syntax$Combine$succeed(0));
		};
		return A2(
			$stil4m$elm_syntax$Elm$Parser$Layout$optimisticLayoutWith,
			function (_v2) {
				return complete(_List_Nil);
			},
			function (_v3) {
				return A2(
					$stil4m$elm_syntax$Combine$andThen,
					complete,
					argHelper(_List_Nil));
			});
	},
	A2(
		$stil4m$elm_syntax$Combine$continueWith,
		$stil4m$elm_syntax$Elm$Parser$Node$parser($stil4m$elm_syntax$Elm$Parser$Tokens$typeName),
		$stil4m$elm_syntax$Combine$succeed($stil4m$elm_syntax$Elm$Syntax$Type$ValueConstructor)));
var $stil4m$elm_syntax$Elm$Parser$Typings$valueConstructors = A2(
	$stil4m$elm_syntax$Combine$sepBy1,
	A2(
		$stil4m$elm_syntax$Combine$ignore,
		$stil4m$elm_syntax$Combine$maybe($stil4m$elm_syntax$Elm$Parser$Layout$layout),
		$stil4m$elm_syntax$Combine$string('|')),
	$stil4m$elm_syntax$Elm$Parser$Typings$valueConstructor);
var $stil4m$elm_syntax$Elm$Parser$Typings$typeDefinition = $stil4m$elm_syntax$Elm$Parser$Ranges$withCurrentPoint(
	function (start) {
		return A2(
			$stil4m$elm_syntax$Combine$continueWith,
			$stil4m$elm_syntax$Combine$choice(
				_List_fromArray(
					[
						A2(
						$stil4m$elm_syntax$Combine$map,
						function (typeAlias) {
							return A2(
								$stil4m$elm_syntax$Elm$Parser$Typings$DefinedAlias,
								$stil4m$elm_syntax$Elm$Syntax$Range$combine(
									_List_fromArray(
										[
											start,
											$stil4m$elm_syntax$Elm$Syntax$Node$range(typeAlias.ek)
										])),
								typeAlias);
						},
						A2(
							$stil4m$elm_syntax$Combine$andMap,
							$stil4m$elm_syntax$Elm$Parser$TypeAnnotation$typeAnnotation,
							A2(
								$stil4m$elm_syntax$Combine$ignore,
								$stil4m$elm_syntax$Combine$maybe($stil4m$elm_syntax$Elm$Parser$Layout$layout),
								A2(
									$stil4m$elm_syntax$Combine$ignore,
									$stil4m$elm_syntax$Combine$string('='),
									A2(
										$stil4m$elm_syntax$Combine$andMap,
										$stil4m$elm_syntax$Elm$Parser$Typings$genericList,
										A2(
											$stil4m$elm_syntax$Combine$ignore,
											$stil4m$elm_syntax$Combine$maybe($stil4m$elm_syntax$Elm$Parser$Layout$layout),
											A2(
												$stil4m$elm_syntax$Combine$andMap,
												A2(
													$stil4m$elm_syntax$Combine$ignore,
													$stil4m$elm_syntax$Combine$maybe($stil4m$elm_syntax$Elm$Parser$Layout$layout),
													$stil4m$elm_syntax$Elm$Parser$Node$parser($stil4m$elm_syntax$Elm$Parser$Tokens$typeName)),
												A2(
													$stil4m$elm_syntax$Combine$ignore,
													A2(
														$stil4m$elm_syntax$Combine$continueWith,
														$stil4m$elm_syntax$Elm$Parser$Layout$layout,
														$stil4m$elm_syntax$Combine$string('alias')),
													$stil4m$elm_syntax$Combine$succeed(
														$stil4m$elm_syntax$Elm$Syntax$TypeAlias$TypeAlias($elm$core$Maybe$Nothing)))))))))),
						A2(
						$stil4m$elm_syntax$Combine$map,
						function (tipe) {
							return A2(
								$stil4m$elm_syntax$Elm$Parser$Typings$DefinedType,
								$stil4m$elm_syntax$Elm$Syntax$Range$combine(
									A2(
										$elm$core$List$cons,
										start,
										A2(
											$elm$core$List$map,
											function (_v0) {
												var r = _v0.a;
												return r;
											},
											tipe.eI))),
								tipe);
						},
						A2(
							$stil4m$elm_syntax$Combine$andMap,
							$stil4m$elm_syntax$Elm$Parser$Typings$valueConstructors,
							A2(
								$stil4m$elm_syntax$Combine$ignore,
								A2(
									$stil4m$elm_syntax$Combine$ignore,
									$stil4m$elm_syntax$Combine$maybe($stil4m$elm_syntax$Elm$Parser$Layout$layout),
									$stil4m$elm_syntax$Combine$string('=')),
								A2(
									$stil4m$elm_syntax$Combine$ignore,
									$stil4m$elm_syntax$Combine$maybe($stil4m$elm_syntax$Elm$Parser$Layout$layout),
									A2(
										$stil4m$elm_syntax$Combine$andMap,
										$stil4m$elm_syntax$Elm$Parser$Typings$genericList,
										A2(
											$stil4m$elm_syntax$Combine$ignore,
											$stil4m$elm_syntax$Combine$maybe($stil4m$elm_syntax$Elm$Parser$Layout$layout),
											A2(
												$stil4m$elm_syntax$Combine$andMap,
												$stil4m$elm_syntax$Elm$Parser$Node$parser($stil4m$elm_syntax$Elm$Parser$Tokens$typeName),
												$stil4m$elm_syntax$Combine$succeed(
													$stil4m$elm_syntax$Elm$Syntax$Type$Type($elm$core$Maybe$Nothing)))))))))
					])),
			$stil4m$elm_syntax$Elm$Parser$Typings$typePrefix);
	});
var $stil4m$elm_syntax$Elm$Parser$Declarations$declaration = $stil4m$elm_syntax$Combine$lazy(
	function (_v0) {
		return $stil4m$elm_syntax$Combine$choice(
			_List_fromArray(
				[
					$stil4m$elm_syntax$Elm$Parser$Declarations$infixDeclaration,
					$stil4m$elm_syntax$Elm$Parser$Declarations$function,
					A2(
					$stil4m$elm_syntax$Combine$map,
					function (v) {
						if (!v.$) {
							var r = v.a;
							var t = v.b;
							return A2(
								$stil4m$elm_syntax$Elm$Syntax$Node$Node,
								r,
								$stil4m$elm_syntax$Elm$Syntax$Declaration$CustomTypeDeclaration(t));
						} else {
							var r = v.a;
							var a = v.b;
							return A2(
								$stil4m$elm_syntax$Elm$Syntax$Node$Node,
								r,
								$stil4m$elm_syntax$Elm$Syntax$Declaration$AliasDeclaration(a));
						}
					},
					$stil4m$elm_syntax$Elm$Parser$Typings$typeDefinition),
					$stil4m$elm_syntax$Elm$Parser$Declarations$portDeclaration,
					$stil4m$elm_syntax$Elm$Parser$Declarations$destructuringDeclaration
				]));
	});
var $stil4m$elm_syntax$Elm$Parser$File$fileDeclarations = $stil4m$elm_syntax$Combine$many(
	A2(
		$stil4m$elm_syntax$Combine$ignore,
		$stil4m$elm_syntax$Combine$maybe($stil4m$elm_syntax$Elm$Parser$Layout$layoutStrict),
		$stil4m$elm_syntax$Elm$Parser$Declarations$declaration));
var $stil4m$elm_syntax$Elm$Syntax$Import$Import = F3(
	function (moduleName, moduleAlias, exposingList) {
		return {cN: exposingList, fb: moduleAlias, cv: moduleName};
	});
var $stil4m$elm_syntax$Elm$Parser$Tokens$asToken = $stil4m$elm_syntax$Combine$fromCore(
	$elm$parser$Parser$keyword('as'));
var $stil4m$elm_syntax$Elm$Syntax$Exposing$All = function (a) {
	return {$: 0, a: a};
};
var $stil4m$elm_syntax$Elm$Syntax$Exposing$FunctionExpose = function (a) {
	return {$: 1, a: a};
};
var $stil4m$elm_syntax$Elm$Parser$Expose$functionExpose = $stil4m$elm_syntax$Elm$Parser$Node$parser(
	A2($stil4m$elm_syntax$Combine$map, $stil4m$elm_syntax$Elm$Syntax$Exposing$FunctionExpose, $stil4m$elm_syntax$Elm$Parser$Tokens$functionName));
var $stil4m$elm_syntax$Elm$Syntax$Exposing$InfixExpose = function (a) {
	return {$: 0, a: a};
};
var $stil4m$elm_syntax$Combine$while = function (pred) {
	return function (state) {
		return A2(
			$elm$parser$Parser$map,
			function (x) {
				return _Utils_Tuple2(state, x);
			},
			$elm$parser$Parser$getChompedString(
				$elm$parser$Parser$chompWhile(pred)));
	};
};
var $stil4m$elm_syntax$Elm$Parser$Expose$infixExpose = $stil4m$elm_syntax$Combine$lazy(
	function (_v0) {
		return $stil4m$elm_syntax$Elm$Parser$Node$parser(
			A2(
				$stil4m$elm_syntax$Combine$map,
				$stil4m$elm_syntax$Elm$Syntax$Exposing$InfixExpose,
				$stil4m$elm_syntax$Combine$parens(
					$stil4m$elm_syntax$Combine$while(
						$elm$core$Basics$neq(')')))));
	});
var $stil4m$elm_syntax$Elm$Syntax$Exposing$ExposedType = F2(
	function (name, open) {
		return {fe: name, fo: open};
	});
var $stil4m$elm_syntax$Elm$Syntax$Exposing$TypeExpose = function (a) {
	return {$: 3, a: a};
};
var $stil4m$elm_syntax$Elm$Syntax$Exposing$TypeOrAliasExpose = function (a) {
	return {$: 2, a: a};
};
var $stil4m$elm_syntax$Elm$Syntax$Node$map = F2(
	function (f, _v0) {
		var r = _v0.a;
		var a = _v0.b;
		return A2(
			$stil4m$elm_syntax$Elm$Syntax$Node$Node,
			r,
			f(a));
	});
var $stil4m$elm_syntax$Elm$Parser$Expose$typeExpose = A2(
	$stil4m$elm_syntax$Combine$andThen,
	function (tipe) {
		return $stil4m$elm_syntax$Combine$choice(
			_List_fromArray(
				[
					A2(
					$stil4m$elm_syntax$Combine$map,
					function (openRange) {
						return A2(
							$stil4m$elm_syntax$Elm$Syntax$Node$Node,
							$stil4m$elm_syntax$Elm$Syntax$Range$combine(
								_List_fromArray(
									[
										$stil4m$elm_syntax$Elm$Syntax$Node$range(tipe),
										openRange
									])),
							$stil4m$elm_syntax$Elm$Syntax$Exposing$TypeExpose(
								A2(
									$stil4m$elm_syntax$Elm$Syntax$Exposing$ExposedType,
									$stil4m$elm_syntax$Elm$Syntax$Node$value(tipe),
									$elm$core$Maybe$Just(openRange))));
					},
					A2(
						$stil4m$elm_syntax$Combine$map,
						$stil4m$elm_syntax$Elm$Syntax$Node$range,
						$stil4m$elm_syntax$Elm$Parser$Node$parser(
							$stil4m$elm_syntax$Combine$parens(
								$stil4m$elm_syntax$Elm$Parser$Layout$maybeAroundBothSides(
									$stil4m$elm_syntax$Combine$string('..')))))),
					$stil4m$elm_syntax$Combine$succeed(
					A2($stil4m$elm_syntax$Elm$Syntax$Node$map, $stil4m$elm_syntax$Elm$Syntax$Exposing$TypeOrAliasExpose, tipe))
				]));
	},
	A2(
		$stil4m$elm_syntax$Combine$ignore,
		$stil4m$elm_syntax$Combine$maybe($stil4m$elm_syntax$Elm$Parser$Layout$layout),
		$stil4m$elm_syntax$Elm$Parser$Node$parser($stil4m$elm_syntax$Elm$Parser$Tokens$typeName)));
var $stil4m$elm_syntax$Elm$Parser$Expose$exposable = $stil4m$elm_syntax$Combine$lazy(
	function (_v0) {
		return $stil4m$elm_syntax$Combine$choice(
			_List_fromArray(
				[$stil4m$elm_syntax$Elm$Parser$Expose$typeExpose, $stil4m$elm_syntax$Elm$Parser$Expose$infixExpose, $stil4m$elm_syntax$Elm$Parser$Expose$functionExpose]));
	});
var $stil4m$elm_syntax$Elm$Parser$Ranges$withRange = function (p) {
	return $stil4m$elm_syntax$Combine$withLocation(
		function (start) {
			return A2(
				$stil4m$elm_syntax$Combine$andMap,
				$stil4m$elm_syntax$Combine$withLocation(
					function (end) {
						return $stil4m$elm_syntax$Combine$succeed(
							{
								bu: $stil4m$elm_syntax$Elm$Parser$Ranges$asPointerLocation(end),
								bQ: $stil4m$elm_syntax$Elm$Parser$Ranges$asPointerLocation(start)
							});
					}),
				p);
		});
};
var $stil4m$elm_syntax$Elm$Parser$Expose$exposingListInner = A2(
	$stil4m$elm_syntax$Combine$or,
	$stil4m$elm_syntax$Elm$Parser$Ranges$withRange(
		A2(
			$stil4m$elm_syntax$Combine$ignore,
			$stil4m$elm_syntax$Elm$Parser$Layout$maybeAroundBothSides(
				$stil4m$elm_syntax$Combine$string('..')),
			$stil4m$elm_syntax$Combine$succeed($stil4m$elm_syntax$Elm$Syntax$Exposing$All))),
	A2(
		$stil4m$elm_syntax$Combine$map,
		$stil4m$elm_syntax$Elm$Syntax$Exposing$Explicit,
		A2(
			$stil4m$elm_syntax$Combine$sepBy,
			$stil4m$elm_syntax$Combine$Char$char(','),
			$stil4m$elm_syntax$Elm$Parser$Layout$maybeAroundBothSides($stil4m$elm_syntax$Elm$Parser$Expose$exposable))));
var $stil4m$elm_syntax$Elm$Parser$Expose$exposeListWith = $stil4m$elm_syntax$Combine$parens(
	A2(
		$stil4m$elm_syntax$Combine$ignore,
		$stil4m$elm_syntax$Elm$Parser$Layout$optimisticLayout,
		A2($stil4m$elm_syntax$Combine$continueWith, $stil4m$elm_syntax$Elm$Parser$Expose$exposingListInner, $stil4m$elm_syntax$Elm$Parser$Layout$optimisticLayout)));
var $stil4m$elm_syntax$Elm$Parser$Tokens$exposingToken = $stil4m$elm_syntax$Combine$string('exposing');
var $stil4m$elm_syntax$Elm$Parser$Expose$exposeDefinition = A2(
	$stil4m$elm_syntax$Combine$continueWith,
	$stil4m$elm_syntax$Elm$Parser$Expose$exposeListWith,
	A2(
		$stil4m$elm_syntax$Combine$continueWith,
		$stil4m$elm_syntax$Combine$maybe($stil4m$elm_syntax$Elm$Parser$Layout$layout),
		$stil4m$elm_syntax$Elm$Parser$Tokens$exposingToken));
var $stil4m$elm_syntax$Elm$Parser$Tokens$importToken = $stil4m$elm_syntax$Combine$fromCore(
	$elm$parser$Parser$keyword('import'));
var $stil4m$elm_syntax$Elm$Parser$Base$moduleName = A2(
	$stil4m$elm_syntax$Combine$sepBy1,
	$stil4m$elm_syntax$Combine$string('.'),
	$stil4m$elm_syntax$Elm$Parser$Tokens$typeName);
var $stil4m$elm_syntax$Elm$Parser$Imports$setupNode = F2(
	function (start, imp) {
		var allRanges = _List_fromArray(
			[
				$elm$core$Maybe$Just(start),
				$elm$core$Maybe$Just(
				$stil4m$elm_syntax$Elm$Syntax$Node$range(imp.cv)),
				A2($elm$core$Maybe$map, $stil4m$elm_syntax$Elm$Syntax$Node$range, imp.cN),
				A2($elm$core$Maybe$map, $stil4m$elm_syntax$Elm$Syntax$Node$range, imp.fb)
			]);
		return A2(
			$stil4m$elm_syntax$Elm$Syntax$Node$Node,
			$stil4m$elm_syntax$Elm$Syntax$Range$combine(
				A2($elm$core$List$filterMap, $elm$core$Basics$identity, allRanges)),
			imp);
	});
var $stil4m$elm_syntax$Elm$Parser$Imports$importDefinition = function () {
	var parseExposingDefinition = F2(
		function (mod, asDef) {
			return $stil4m$elm_syntax$Combine$choice(
				_List_fromArray(
					[
						A2(
						$stil4m$elm_syntax$Combine$map,
						A2(
							$elm$core$Basics$composeR,
							$elm$core$Maybe$Just,
							A2($stil4m$elm_syntax$Elm$Syntax$Import$Import, mod, asDef)),
						$stil4m$elm_syntax$Elm$Parser$Node$parser($stil4m$elm_syntax$Elm$Parser$Expose$exposeDefinition)),
						$stil4m$elm_syntax$Combine$succeed(
						A3($stil4m$elm_syntax$Elm$Syntax$Import$Import, mod, asDef, $elm$core$Maybe$Nothing))
					]));
		});
	var importAndModuleName = A2(
		$stil4m$elm_syntax$Combine$continueWith,
		$stil4m$elm_syntax$Elm$Parser$Node$parser($stil4m$elm_syntax$Elm$Parser$Base$moduleName),
		A2($stil4m$elm_syntax$Combine$continueWith, $stil4m$elm_syntax$Elm$Parser$Layout$layout, $stil4m$elm_syntax$Elm$Parser$Tokens$importToken));
	var asDefinition = A2(
		$stil4m$elm_syntax$Combine$continueWith,
		$stil4m$elm_syntax$Elm$Parser$Node$parser($stil4m$elm_syntax$Elm$Parser$Base$moduleName),
		A2($stil4m$elm_syntax$Combine$continueWith, $stil4m$elm_syntax$Elm$Parser$Layout$layout, $stil4m$elm_syntax$Elm$Parser$Tokens$asToken));
	var parseAsDefinition = function (mod) {
		return $stil4m$elm_syntax$Combine$choice(
			_List_fromArray(
				[
					A2(
					$stil4m$elm_syntax$Combine$andThen,
					A2(
						$elm$core$Basics$composeR,
						$elm$core$Maybe$Just,
						parseExposingDefinition(mod)),
					A2($stil4m$elm_syntax$Combine$ignore, $stil4m$elm_syntax$Elm$Parser$Layout$optimisticLayout, asDefinition)),
					A2(parseExposingDefinition, mod, $elm$core$Maybe$Nothing)
				]));
	};
	return A2(
		$stil4m$elm_syntax$Combine$andThen,
		function (_v0) {
			var start = _v0.a;
			return A2(
				$stil4m$elm_syntax$Combine$map,
				$stil4m$elm_syntax$Elm$Parser$Imports$setupNode(start),
				A2(
					$stil4m$elm_syntax$Combine$andThen,
					parseAsDefinition,
					A2($stil4m$elm_syntax$Combine$ignore, $stil4m$elm_syntax$Elm$Parser$Layout$optimisticLayout, importAndModuleName)));
		},
		$stil4m$elm_syntax$Elm$Parser$Node$parser(
			$stil4m$elm_syntax$Combine$succeed(0)));
}();
var $stil4m$elm_syntax$Elm$Syntax$Module$EffectModule = function (a) {
	return {$: 2, a: a};
};
var $stil4m$elm_syntax$Elm$Parser$Modules$effectWhereClause = A2(
	$stil4m$elm_syntax$Combine$andMap,
	A2(
		$stil4m$elm_syntax$Combine$continueWith,
		$stil4m$elm_syntax$Elm$Parser$Node$parser($stil4m$elm_syntax$Elm$Parser$Tokens$typeName),
		$stil4m$elm_syntax$Elm$Parser$Layout$maybeAroundBothSides(
			$stil4m$elm_syntax$Combine$string('='))),
	A2(
		$stil4m$elm_syntax$Combine$andMap,
		$stil4m$elm_syntax$Elm$Parser$Tokens$functionName,
		$stil4m$elm_syntax$Combine$succeed($elm$core$Tuple$pair)));
var $elm$core$List$filter = F2(function (f, xs) {
  var tmp = _List_Cons(undefined, _List_Nil);
  var end = tmp;
  for (; xs.b; xs = xs.b) {
    if (f(xs.a)) {
      var next = _List_Cons(xs.a, _List_Nil);
      end.b = next;
      end = next;
    }
  }
  return tmp.b;
});
var $stil4m$elm_syntax$Elm$Parser$Modules$whereBlock = A2(
	$stil4m$elm_syntax$Combine$map,
	function (pairs) {
		return {
			eG: A2(
				$elm$core$Maybe$map,
				$elm$core$Tuple$second,
				$elm$core$List$head(
					A2(
						$elm$core$List$filter,
						A2(
							$elm$core$Basics$composeR,
							$elm$core$Tuple$first,
							$elm$core$Basics$eq('command')),
						pairs))),
			fJ: A2(
				$elm$core$Maybe$map,
				$elm$core$Tuple$second,
				$elm$core$List$head(
					A2(
						$elm$core$List$filter,
						A2(
							$elm$core$Basics$composeR,
							$elm$core$Tuple$first,
							$elm$core$Basics$eq('subscription')),
						pairs)))
		};
	},
	A3(
		$stil4m$elm_syntax$Combine$between,
		$stil4m$elm_syntax$Combine$string('{'),
		$stil4m$elm_syntax$Combine$string('}'),
		A2(
			$stil4m$elm_syntax$Combine$sepBy1,
			$stil4m$elm_syntax$Combine$string(','),
			$stil4m$elm_syntax$Elm$Parser$Layout$maybeAroundBothSides($stil4m$elm_syntax$Elm$Parser$Modules$effectWhereClause))));
var $stil4m$elm_syntax$Elm$Parser$Modules$effectWhereClauses = A2(
	$stil4m$elm_syntax$Combine$continueWith,
	$stil4m$elm_syntax$Elm$Parser$Modules$whereBlock,
	A2(
		$stil4m$elm_syntax$Combine$continueWith,
		$stil4m$elm_syntax$Elm$Parser$Layout$layout,
		$stil4m$elm_syntax$Combine$string('where')));
var $stil4m$elm_syntax$Elm$Parser$Tokens$moduleToken = $stil4m$elm_syntax$Combine$string('module');
var $stil4m$elm_syntax$Elm$Parser$Modules$effectModuleDefinition = function () {
	var createEffectModule = F3(
		function (name, whereClauses, exp) {
			return $stil4m$elm_syntax$Elm$Syntax$Module$EffectModule(
				{eG: whereClauses.eG, cN: exp, cv: name, fJ: whereClauses.fJ});
		});
	return A2(
		$stil4m$elm_syntax$Combine$andMap,
		$stil4m$elm_syntax$Elm$Parser$Node$parser($stil4m$elm_syntax$Elm$Parser$Expose$exposeDefinition),
		A2(
			$stil4m$elm_syntax$Combine$ignore,
			$stil4m$elm_syntax$Elm$Parser$Layout$layout,
			A2(
				$stil4m$elm_syntax$Combine$andMap,
				$stil4m$elm_syntax$Elm$Parser$Modules$effectWhereClauses,
				A2(
					$stil4m$elm_syntax$Combine$ignore,
					$stil4m$elm_syntax$Elm$Parser$Layout$layout,
					A2(
						$stil4m$elm_syntax$Combine$andMap,
						$stil4m$elm_syntax$Elm$Parser$Node$parser($stil4m$elm_syntax$Elm$Parser$Base$moduleName),
						A2(
							$stil4m$elm_syntax$Combine$ignore,
							$stil4m$elm_syntax$Elm$Parser$Layout$layout,
							A2(
								$stil4m$elm_syntax$Combine$ignore,
								$stil4m$elm_syntax$Elm$Parser$Tokens$moduleToken,
								A2(
									$stil4m$elm_syntax$Combine$ignore,
									$stil4m$elm_syntax$Elm$Parser$Layout$layout,
									A2(
										$stil4m$elm_syntax$Combine$ignore,
										$stil4m$elm_syntax$Combine$string('effect'),
										$stil4m$elm_syntax$Combine$succeed(createEffectModule))))))))));
}();
var $stil4m$elm_syntax$Elm$Syntax$Module$DefaultModuleData = F2(
	function (moduleName, exposingList) {
		return {cN: exposingList, cv: moduleName};
	});
var $stil4m$elm_syntax$Elm$Parser$Modules$normalModuleDefinition = A2(
	$stil4m$elm_syntax$Combine$map,
	$stil4m$elm_syntax$Elm$Syntax$Module$NormalModule,
	A2(
		$stil4m$elm_syntax$Combine$andMap,
		$stil4m$elm_syntax$Elm$Parser$Node$parser($stil4m$elm_syntax$Elm$Parser$Expose$exposeDefinition),
		A2(
			$stil4m$elm_syntax$Combine$ignore,
			$stil4m$elm_syntax$Elm$Parser$Layout$layout,
			A2(
				$stil4m$elm_syntax$Combine$andMap,
				$stil4m$elm_syntax$Elm$Parser$Node$parser($stil4m$elm_syntax$Elm$Parser$Base$moduleName),
				A2(
					$stil4m$elm_syntax$Combine$ignore,
					$stil4m$elm_syntax$Elm$Parser$Layout$layout,
					A2(
						$stil4m$elm_syntax$Combine$ignore,
						$stil4m$elm_syntax$Elm$Parser$Tokens$moduleToken,
						$stil4m$elm_syntax$Combine$succeed($stil4m$elm_syntax$Elm$Syntax$Module$DefaultModuleData)))))));
var $stil4m$elm_syntax$Elm$Syntax$Module$PortModule = function (a) {
	return {$: 1, a: a};
};
var $stil4m$elm_syntax$Elm$Parser$Modules$portModuleDefinition = A2(
	$stil4m$elm_syntax$Combine$map,
	$stil4m$elm_syntax$Elm$Syntax$Module$PortModule,
	A2(
		$stil4m$elm_syntax$Combine$andMap,
		$stil4m$elm_syntax$Elm$Parser$Node$parser($stil4m$elm_syntax$Elm$Parser$Expose$exposeDefinition),
		A2(
			$stil4m$elm_syntax$Combine$ignore,
			$stil4m$elm_syntax$Elm$Parser$Layout$layout,
			A2(
				$stil4m$elm_syntax$Combine$andMap,
				$stil4m$elm_syntax$Elm$Parser$Node$parser($stil4m$elm_syntax$Elm$Parser$Base$moduleName),
				A2(
					$stil4m$elm_syntax$Combine$ignore,
					$stil4m$elm_syntax$Elm$Parser$Layout$layout,
					A2(
						$stil4m$elm_syntax$Combine$ignore,
						$stil4m$elm_syntax$Elm$Parser$Tokens$moduleToken,
						A2(
							$stil4m$elm_syntax$Combine$ignore,
							$stil4m$elm_syntax$Elm$Parser$Layout$layout,
							A2(
								$stil4m$elm_syntax$Combine$ignore,
								$stil4m$elm_syntax$Elm$Parser$Tokens$portToken,
								$stil4m$elm_syntax$Combine$succeed($stil4m$elm_syntax$Elm$Syntax$Module$DefaultModuleData)))))))));
var $stil4m$elm_syntax$Elm$Parser$Modules$moduleDefinition = $stil4m$elm_syntax$Combine$choice(
	_List_fromArray(
		[$stil4m$elm_syntax$Elm$Parser$Modules$normalModuleDefinition, $stil4m$elm_syntax$Elm$Parser$Modules$portModuleDefinition, $stil4m$elm_syntax$Elm$Parser$Modules$effectModuleDefinition]));
var $stil4m$elm_syntax$Elm$Parser$File$file = A2(
	$stil4m$elm_syntax$Combine$ignore,
	$stil4m$elm_syntax$Elm$Parser$Layout$optimisticLayout,
	A2(
		$stil4m$elm_syntax$Combine$andMap,
		$stil4m$elm_syntax$Elm$Parser$File$collectComments,
		A2(
			$stil4m$elm_syntax$Combine$andMap,
			$stil4m$elm_syntax$Elm$Parser$File$fileDeclarations,
			A2(
				$stil4m$elm_syntax$Combine$ignore,
				$stil4m$elm_syntax$Combine$maybe($stil4m$elm_syntax$Elm$Parser$Layout$layoutStrict),
				A2(
					$stil4m$elm_syntax$Combine$andMap,
					$stil4m$elm_syntax$Combine$many(
						A2($stil4m$elm_syntax$Combine$ignore, $stil4m$elm_syntax$Elm$Parser$Layout$optimisticLayout, $stil4m$elm_syntax$Elm$Parser$Imports$importDefinition)),
					A2(
						$stil4m$elm_syntax$Combine$ignore,
						$stil4m$elm_syntax$Combine$maybe($stil4m$elm_syntax$Elm$Parser$Layout$layoutStrict),
						A2(
							$stil4m$elm_syntax$Combine$andMap,
							$stil4m$elm_syntax$Elm$Parser$Node$parser($stil4m$elm_syntax$Elm$Parser$Modules$moduleDefinition),
							A2(
								$stil4m$elm_syntax$Combine$ignore,
								$stil4m$elm_syntax$Combine$maybe($stil4m$elm_syntax$Elm$Parser$Layout$layoutStrict),
								$stil4m$elm_syntax$Combine$succeed($stil4m$elm_syntax$Elm$Syntax$File$File)))))))));
var $stil4m$elm_syntax$Elm$Internal$RawFile$Raw = $elm$core$Basics$identity;
var $stil4m$elm_syntax$Elm$Internal$RawFile$fromFile = $elm$core$Basics$identity;
var $elm$parser$Parser$DeadEnd = F3(
	function (row, col, problem) {
		return {dj: col, dY: problem, d0: row};
	});
var $elm$parser$Parser$problemToDeadEnd = function (p) {
	return A3($elm$parser$Parser$DeadEnd, p.d0, p.dj, p.dY);
};
var $elm$parser$Parser$Advanced$bagToList = F2(
	function (bag, list) {
		bagToList:
		while (true) {
			switch (bag.$) {
				case 0:
					return list;
				case 1:
					var bag1 = bag.a;
					var x = bag.b;
					var $temp$bag = bag1,
						$temp$list = A2($elm$core$List$cons, x, list);
					bag = $temp$bag;
					list = $temp$list;
					continue bagToList;
				default:
					var bag1 = bag.a;
					var bag2 = bag.b;
					var $temp$bag = bag1,
						$temp$list = A2($elm$parser$Parser$Advanced$bagToList, bag2, list);
					bag = $temp$bag;
					list = $temp$list;
					continue bagToList;
			}
		}
	});
var $elm$parser$Parser$Advanced$run = F2(
	function (_v0, src) {
		var parse = _v0;
		var _v1 = parse(
			{dj: 1, j: _List_Nil, o: 1, d: 0, d0: 1, c: src});
		if (!_v1.$) {
			var value = _v1.b;
			return $elm$core$Result$Ok(value);
		} else {
			var bag = _v1.b;
			return $elm$core$Result$Err(
				A2($elm$parser$Parser$Advanced$bagToList, bag, _List_Nil));
		}
	});
var $elm$parser$Parser$run = F2(
	function (parser, source) {
		var _v0 = A2($elm$parser$Parser$Advanced$run, parser, source);
		if (!_v0.$) {
			var a = _v0.a;
			return $elm$core$Result$Ok(a);
		} else {
			var problems = _v0.a;
			return $elm$core$Result$Err(
				A2($elm$core$List$map, $elm$parser$Parser$problemToDeadEnd, problems));
		}
	});
var $stil4m$elm_syntax$Combine$runParser = F3(
	function (_v0, st, s) {
		var p = _v0;
		return A2(
			$elm$parser$Parser$run,
			p(st),
			s);
	});
var $elm$parser$Parser$ExpectingEnd = {$: 10};
var $elm$parser$Parser$Advanced$end = function (x) {
	return function (s) {
		return _Utils_eq(
			$elm$core$String$length(s.c),
			s.d) ? A3($elm$parser$Parser$Advanced$Good, false, 0, s) : A2(
			$elm$parser$Parser$Advanced$Bad,
			false,
			A2($elm$parser$Parser$Advanced$fromState, s, x));
	};
};
var $elm$parser$Parser$end = $elm$parser$Parser$Advanced$end($elm$parser$Parser$ExpectingEnd);
var $stil4m$elm_syntax$Combine$end = function (state) {
	return A2(
		$elm$parser$Parser$map,
		function (x) {
			return _Utils_Tuple2(state, x);
		},
		$elm$parser$Parser$end);
};
var $stil4m$elm_syntax$Elm$Parser$withEnd = function (p) {
	return A2(
		$stil4m$elm_syntax$Combine$ignore,
		$stil4m$elm_syntax$Combine$withLocation(
			function (_v0) {
				return $stil4m$elm_syntax$Combine$end;
			}),
		p);
};
var $stil4m$elm_syntax$Elm$Parser$parse = function (input) {
	var _v0 = A3(
		$stil4m$elm_syntax$Combine$runParser,
		$stil4m$elm_syntax$Elm$Parser$withEnd($stil4m$elm_syntax$Elm$Parser$File$file),
		$stil4m$elm_syntax$Elm$Parser$State$emptyState,
		input + '\n');
	if (!_v0.$) {
		var _v1 = _v0.a;
		var r = _v1.b;
		return $elm$core$Result$Ok(
			$stil4m$elm_syntax$Elm$Internal$RawFile$fromFile(r));
	} else {
		var s = _v0.a;
		return $elm$core$Result$Err(s);
	}
};
var $stil4m$elm_syntax$Elm$Processing$findDocumentationForRange = F3(
	function (range, comments, previousComments) {
		findDocumentationForRange:
		while (true) {
			if (!comments.b) {
				return _Utils_Tuple3(previousComments, $elm$core$Maybe$Nothing, _List_Nil);
			} else {
				var comment = comments.a;
				var commentRange = comment.a;
				var commentText = comment.b;
				var restOfComments = comments.b;
				var _v1 = A2($elm$core$Basics$compare, commentRange.bu.d0 + 1, range.bQ.d0);
				switch (_v1) {
					case 1:
						return A2($elm$core$String$startsWith, '{-|', commentText) ? _Utils_Tuple3(
							previousComments,
							$elm$core$Maybe$Just(comment),
							restOfComments) : _Utils_Tuple3(
							previousComments,
							$elm$core$Maybe$Nothing,
							A2($elm$core$List$cons, comment, restOfComments));
					case 0:
						var $temp$range = range,
							$temp$comments = restOfComments,
							$temp$previousComments = A2($elm$core$List$cons, comment, previousComments);
						range = $temp$range;
						comments = $temp$comments;
						previousComments = $temp$previousComments;
						continue findDocumentationForRange;
					default:
						return _Utils_Tuple3(
							previousComments,
							$elm$core$Maybe$Nothing,
							A2($elm$core$List$cons, comment, restOfComments));
				}
			}
		}
	});
var $stil4m$elm_syntax$Elm$Processing$addDocumentation = F3(
	function (howToUpdate, declaration, file) {
		var _v0 = A3(
			$stil4m$elm_syntax$Elm$Processing$findDocumentationForRange,
			$stil4m$elm_syntax$Elm$Syntax$Node$range(declaration),
			file.aa,
			_List_Nil);
		var previous = _v0.a;
		var maybeDoc = _v0.b;
		var remaining = _v0.c;
		if (!maybeDoc.$) {
			var doc = maybeDoc.a;
			return {
				eK: A2(
					$elm$core$List$cons,
					A2(
						$stil4m$elm_syntax$Elm$Syntax$Node$Node,
						$stil4m$elm_syntax$Elm$Syntax$Range$combine(
							_List_fromArray(
								[
									$stil4m$elm_syntax$Elm$Syntax$Node$range(doc),
									$stil4m$elm_syntax$Elm$Syntax$Node$range(declaration)
								])),
						howToUpdate(doc)),
					file.eK),
				Y: A2($elm$core$List$cons, previous, file.Y),
				aa: remaining
			};
		} else {
			return {
				eK: A2($elm$core$List$cons, declaration, file.eK),
				Y: A2($elm$core$List$cons, previous, file.Y),
				aa: remaining
			};
		}
	});
var $stil4m$elm_syntax$Elm$Syntax$Expression$OperatorApplication = F4(
	function (a, b, c, d) {
		return {$: 2, a: a, b: b, c: c, d: d};
	});
var $stil4m$elm_syntax$Elm$Processing$expressionOperators = function (_v0) {
	var expression = _v0.b;
	if (expression.$ === 6) {
		var s = expression.a;
		return $elm$core$Maybe$Just(s);
	} else {
		return $elm$core$Maybe$Nothing;
	}
};
var $elm_community$list_extra$List$Extra$dropWhile = F2(
	function (predicate, list) {
		dropWhile:
		while (true) {
			if (!list.b) {
				return _List_Nil;
			} else {
				var x = list.a;
				var xs = list.b;
				if (predicate(x)) {
					var $temp$predicate = predicate,
						$temp$list = xs;
					predicate = $temp$predicate;
					list = $temp$list;
					continue dropWhile;
				} else {
					return list;
				}
			}
		}
	});
var $elm_community$list_extra$List$Extra$takeWhile = function (predicate) {
	var takeWhileMemo = F2(
		function (memo, list) {
			takeWhileMemo:
			while (true) {
				if (!list.b) {
					return $elm$core$List$reverse(memo);
				} else {
					var x = list.a;
					var xs = list.b;
					if (predicate(x)) {
						var $temp$memo = A2($elm$core$List$cons, x, memo),
							$temp$list = xs;
						memo = $temp$memo;
						list = $temp$list;
						continue takeWhileMemo;
					} else {
						return $elm$core$List$reverse(memo);
					}
				}
			}
		});
	return takeWhileMemo(_List_Nil);
};
var $stil4m$elm_syntax$Elm$Processing$findNextSplit = F2(
	function (dict, exps) {
		var assocDirection = A2(
			$elm$core$Maybe$withDefault,
			1,
			A2(
				$elm$core$Maybe$map,
				$stil4m$elm_syntax$Elm$Syntax$Node$value,
				$elm$core$List$head(
					A2(
						$elm$core$List$map,
						A2(
							$elm$core$Basics$composeR,
							$elm$core$Tuple$second,
							function ($) {
								return $.eM;
							}),
						$elm$core$Dict$toList(dict)))));
		var prefix = function () {
			if (!assocDirection) {
				return $elm$core$List$reverse(
					A2(
						$elm$core$List$drop,
						1,
						A2(
							$elm_community$list_extra$List$Extra$dropWhile,
							function (x) {
								return _Utils_eq(
									$elm$core$Maybe$Nothing,
									A2(
										$elm$core$Maybe$andThen,
										function (key) {
											return A2($elm$core$Dict$get, key, dict);
										},
										$stil4m$elm_syntax$Elm$Processing$expressionOperators(x)));
							},
							$elm$core$List$reverse(exps))));
			} else {
				return A2(
					$elm_community$list_extra$List$Extra$takeWhile,
					function (x) {
						return _Utils_eq(
							$elm$core$Maybe$Nothing,
							A2(
								$elm$core$Maybe$andThen,
								function (key) {
									return A2($elm$core$Dict$get, key, dict);
								},
								$stil4m$elm_syntax$Elm$Processing$expressionOperators(x)));
					},
					exps);
			}
		}();
		var suffix = A2(
			$elm$core$List$drop,
			$elm$core$List$length(prefix) + 1,
			exps);
		return A2(
			$elm$core$Maybe$map,
			function (x) {
				return _Utils_Tuple3(prefix, x, suffix);
			},
			A2(
				$elm$core$Maybe$andThen,
				function (x) {
					return A2($elm$core$Dict$get, x, dict);
				},
				A2(
					$elm$core$Maybe$andThen,
					$stil4m$elm_syntax$Elm$Processing$expressionOperators,
					$elm$core$List$head(
						A2(
							$elm$core$List$drop,
							$elm$core$List$length(prefix),
							exps)))));
	});
var $elm$core$Dict$isEmpty = function (dict) {
	if (dict.$ === -2) {
		return true;
	} else {
		return false;
	}
};
var $elm$core$Basics$min = F2(
	function (x, y) {
		return (_Utils_cmp(x, y) < 0) ? x : y;
	});
var $elm$core$List$minimum = function (list) {
	if (list.b) {
		var x = list.a;
		var xs = list.b;
		return $elm$core$Maybe$Just(
			A3($elm$core$List$foldl, $elm$core$Basics$min, x, xs));
	} else {
		return $elm$core$Maybe$Nothing;
	}
};
var $stil4m$elm_syntax$Elm$Processing$lowestPrecedence = function (input) {
	return $elm$core$Dict$fromList(
		A2(
			$elm$core$Maybe$withDefault,
			_List_Nil,
			A2(
				$elm$core$Maybe$map,
				function (m) {
					return A2(
						$elm$core$List$filter,
						A2(
							$elm$core$Basics$composeR,
							$elm$core$Tuple$second,
							A2(
								$elm$core$Basics$composeR,
								function ($) {
									return $.ft;
								},
								A2(
									$elm$core$Basics$composeR,
									$stil4m$elm_syntax$Elm$Syntax$Node$value,
									$elm$core$Basics$eq(m)))),
						input);
				},
				$elm$core$List$minimum(
					A2(
						$elm$core$List$map,
						A2(
							$elm$core$Basics$composeR,
							$elm$core$Tuple$second,
							A2(
								$elm$core$Basics$composeR,
								function ($) {
									return $.ft;
								},
								$stil4m$elm_syntax$Elm$Syntax$Node$value)),
						input)))));
};
var $stil4m$elm_syntax$Elm$Processing$fixApplication = F2(
	function (operators, expressions) {
		var ops = $stil4m$elm_syntax$Elm$Processing$lowestPrecedence(
			A2(
				$elm$core$List$map,
				function (x) {
					return _Utils_Tuple2(
						x,
						A2(
							$elm$core$Maybe$withDefault,
							{
								eM: A2($stil4m$elm_syntax$Elm$Syntax$Node$Node, $stil4m$elm_syntax$Elm$Syntax$Range$emptyRange, 0),
								e_: A2($stil4m$elm_syntax$Elm$Syntax$Node$Node, $stil4m$elm_syntax$Elm$Syntax$Range$emptyRange, 'todo'),
								fp: A2($stil4m$elm_syntax$Elm$Syntax$Node$Node, $stil4m$elm_syntax$Elm$Syntax$Range$emptyRange, x),
								ft: A2($stil4m$elm_syntax$Elm$Syntax$Node$Node, $stil4m$elm_syntax$Elm$Syntax$Range$emptyRange, 5)
							},
							A2($elm$core$Dict$get, x, operators)));
				},
				A2($elm$core$List$filterMap, $stil4m$elm_syntax$Elm$Processing$expressionOperators, expressions)));
		var fixExprs = function (exps) {
			if (exps.b && (!exps.b.b)) {
				var _v2 = exps.a;
				var x = _v2.b;
				return x;
			} else {
				return $stil4m$elm_syntax$Elm$Syntax$Expression$Application(exps);
			}
		};
		var divideAndConquer = function (exps) {
			return $elm$core$Dict$isEmpty(ops) ? fixExprs(exps) : A2(
				$elm$core$Maybe$withDefault,
				fixExprs(exps),
				A2(
					$elm$core$Maybe$map,
					function (_v0) {
						var p = _v0.a;
						var infix_ = _v0.b;
						var s = _v0.c;
						return A4(
							$stil4m$elm_syntax$Elm$Syntax$Expression$OperatorApplication,
							$stil4m$elm_syntax$Elm$Syntax$Node$value(infix_.fp),
							$stil4m$elm_syntax$Elm$Syntax$Node$value(infix_.eM),
							A2(
								$stil4m$elm_syntax$Elm$Syntax$Node$Node,
								$stil4m$elm_syntax$Elm$Syntax$Range$combine(
									A2($elm$core$List$map, $stil4m$elm_syntax$Elm$Syntax$Node$range, p)),
								divideAndConquer(p)),
							A2(
								$stil4m$elm_syntax$Elm$Syntax$Node$Node,
								$stil4m$elm_syntax$Elm$Syntax$Range$combine(
									A2($elm$core$List$map, $stil4m$elm_syntax$Elm$Syntax$Node$range, s)),
								divideAndConquer(s)));
					},
					A2($stil4m$elm_syntax$Elm$Processing$findNextSplit, ops, exps)));
		};
		return divideAndConquer(expressions);
	});
var $stil4m$elm_syntax$Elm$Processing$visitExpression = F2(
	function (table, expression) {
		return A2(
			$stil4m$elm_syntax$Elm$Processing$visitExpressionInner,
			table,
			function () {
				if (expression.b.$ === 1) {
					var r = expression.a;
					var args = expression.b.a;
					return A2(
						$stil4m$elm_syntax$Elm$Syntax$Node$Node,
						r,
						A2($stil4m$elm_syntax$Elm$Processing$fixApplication, table, args));
				} else {
					return expression;
				}
			}());
	});
var $stil4m$elm_syntax$Elm$Processing$visitExpressionInner = F2(
	function (table, _v2) {
		var range = _v2.a;
		var expression = _v2.b;
		return A2(
			$stil4m$elm_syntax$Elm$Syntax$Node$Node,
			range,
			function () {
				switch (expression.$) {
					case 1:
						var expressionList = expression.a;
						return $stil4m$elm_syntax$Elm$Syntax$Expression$Application(
							A2(
								$elm$core$List$map,
								$stil4m$elm_syntax$Elm$Processing$visitExpression(table),
								expressionList));
					case 2:
						var op = expression.a;
						var dir = expression.b;
						var left = expression.c;
						var right = expression.d;
						return A4(
							$stil4m$elm_syntax$Elm$Syntax$Expression$OperatorApplication,
							op,
							dir,
							A2($stil4m$elm_syntax$Elm$Processing$visitExpression, table, left),
							A2($stil4m$elm_syntax$Elm$Processing$visitExpression, table, right));
					case 4:
						var e1 = expression.a;
						var e2 = expression.b;
						var e3 = expression.c;
						return A3(
							$stil4m$elm_syntax$Elm$Syntax$Expression$IfBlock,
							A2($stil4m$elm_syntax$Elm$Processing$visitExpression, table, e1),
							A2($stil4m$elm_syntax$Elm$Processing$visitExpression, table, e2),
							A2($stil4m$elm_syntax$Elm$Processing$visitExpression, table, e3));
					case 13:
						var expressionList = expression.a;
						return $stil4m$elm_syntax$Elm$Syntax$Expression$TupledExpression(
							A2(
								$elm$core$List$map,
								$stil4m$elm_syntax$Elm$Processing$visitExpression(table),
								expressionList));
					case 14:
						var expr1 = expression.a;
						return $stil4m$elm_syntax$Elm$Syntax$Expression$ParenthesizedExpression(
							A2($stil4m$elm_syntax$Elm$Processing$visitExpression, table, expr1));
					case 15:
						var letBlock = expression.a;
						return $stil4m$elm_syntax$Elm$Syntax$Expression$LetExpression(
							{
								eK: A2($stil4m$elm_syntax$Elm$Processing$visitLetDeclarations, table, letBlock.eK),
								eR: A2($stil4m$elm_syntax$Elm$Processing$visitExpression, table, letBlock.eR)
							});
					case 16:
						var caseBlock = expression.a;
						return $stil4m$elm_syntax$Elm$Syntax$Expression$CaseExpression(
							{
								eC: A2(
									$elm$core$List$map,
									$elm$core$Tuple$mapSecond(
										$stil4m$elm_syntax$Elm$Processing$visitExpression(table)),
									caseBlock.eC),
								eR: A2($stil4m$elm_syntax$Elm$Processing$visitExpression, table, caseBlock.eR)
							});
					case 17:
						var lambda = expression.a;
						return $stil4m$elm_syntax$Elm$Syntax$Expression$LambdaExpression(
							_Utils_update(
								lambda,
								{
									eR: A2($stil4m$elm_syntax$Elm$Processing$visitExpression, table, lambda.eR)
								}));
					case 18:
						var expressionStringList = expression.a;
						return $stil4m$elm_syntax$Elm$Syntax$Expression$RecordExpr(
							A2(
								$elm$core$List$map,
								$stil4m$elm_syntax$Elm$Syntax$Node$map(
									$elm$core$Tuple$mapSecond(
										$stil4m$elm_syntax$Elm$Processing$visitExpression(table))),
								expressionStringList));
					case 19:
						var expressionList = expression.a;
						return $stil4m$elm_syntax$Elm$Syntax$Expression$ListExpr(
							A2(
								$elm$core$List$map,
								$stil4m$elm_syntax$Elm$Processing$visitExpression(table),
								expressionList));
					case 22:
						var name = expression.a;
						var updates = expression.b;
						return A2(
							$stil4m$elm_syntax$Elm$Syntax$Expression$RecordUpdateExpression,
							name,
							A2(
								$elm$core$List$map,
								$stil4m$elm_syntax$Elm$Syntax$Node$map(
									$elm$core$Tuple$mapSecond(
										$stil4m$elm_syntax$Elm$Processing$visitExpression(table))),
								updates));
					case 10:
						var expr = expression.a;
						return $stil4m$elm_syntax$Elm$Syntax$Expression$Negation(
							A2($stil4m$elm_syntax$Elm$Processing$visitExpression, table, expr));
					case 20:
						var expr = expression.a;
						var name = expression.b;
						return A2(
							$stil4m$elm_syntax$Elm$Syntax$Expression$RecordAccess,
							A2($stil4m$elm_syntax$Elm$Processing$visitExpression, table, expr),
							name);
					default:
						return expression;
				}
			}());
	});
var $stil4m$elm_syntax$Elm$Processing$visitFunctionDecl = F2(
	function (table, _function) {
		var newFunctionDeclaration = A2(
			$stil4m$elm_syntax$Elm$Syntax$Node$map,
			$stil4m$elm_syntax$Elm$Processing$visitFunctionDeclaration(table),
			_function.dm);
		return _Utils_update(
			_function,
			{dm: newFunctionDeclaration});
	});
var $stil4m$elm_syntax$Elm$Processing$visitFunctionDeclaration = F2(
	function (table, functionDeclaration) {
		var newExpression = A2($stil4m$elm_syntax$Elm$Processing$visitExpression, table, functionDeclaration.eR);
		return _Utils_update(
			functionDeclaration,
			{eR: newExpression});
	});
var $stil4m$elm_syntax$Elm$Processing$visitLetDeclaration = F2(
	function (table, _v0) {
		var range = _v0.a;
		var declaration = _v0.b;
		return A2(
			$stil4m$elm_syntax$Elm$Syntax$Node$Node,
			range,
			function () {
				if (!declaration.$) {
					var _function = declaration.a;
					return $stil4m$elm_syntax$Elm$Syntax$Expression$LetFunction(
						A2($stil4m$elm_syntax$Elm$Processing$visitFunctionDecl, table, _function));
				} else {
					var pattern = declaration.a;
					var expression = declaration.b;
					return A2(
						$stil4m$elm_syntax$Elm$Syntax$Expression$LetDestructuring,
						pattern,
						A2($stil4m$elm_syntax$Elm$Processing$visitExpression, table, expression));
				}
			}());
	});
var $stil4m$elm_syntax$Elm$Processing$visitLetDeclarations = F2(
	function (table, declarations) {
		return A2(
			$elm$core$List$map,
			$stil4m$elm_syntax$Elm$Processing$visitLetDeclaration(table),
			declarations);
	});
var $stil4m$elm_syntax$Elm$Processing$attachDocumentationAndFixOperators = F3(
	function (table, declaration, context) {
		var _v0 = $stil4m$elm_syntax$Elm$Syntax$Node$value(declaration);
		switch (_v0.$) {
			case 0:
				var functionBeforeOperatorFix = _v0.a;
				var _function = A2($stil4m$elm_syntax$Elm$Processing$visitFunctionDecl, table, functionBeforeOperatorFix);
				return A3(
					$stil4m$elm_syntax$Elm$Processing$addDocumentation,
					function (doc) {
						return $stil4m$elm_syntax$Elm$Syntax$Declaration$FunctionDeclaration(
							_Utils_update(
								_function,
								{
									cL: $elm$core$Maybe$Just(doc)
								}));
					},
					A2(
						$stil4m$elm_syntax$Elm$Syntax$Node$Node,
						$stil4m$elm_syntax$Elm$Syntax$Node$range(declaration),
						$stil4m$elm_syntax$Elm$Syntax$Declaration$FunctionDeclaration(_function)),
					context);
			case 1:
				var typeAlias = _v0.a;
				return A3(
					$stil4m$elm_syntax$Elm$Processing$addDocumentation,
					function (doc) {
						return $stil4m$elm_syntax$Elm$Syntax$Declaration$AliasDeclaration(
							_Utils_update(
								typeAlias,
								{
									cL: $elm$core$Maybe$Just(doc)
								}));
					},
					declaration,
					context);
			case 2:
				var typeDecl = _v0.a;
				return A3(
					$stil4m$elm_syntax$Elm$Processing$addDocumentation,
					function (doc) {
						return $stil4m$elm_syntax$Elm$Syntax$Declaration$CustomTypeDeclaration(
							_Utils_update(
								typeDecl,
								{
									cL: $elm$core$Maybe$Just(doc)
								}));
					},
					declaration,
					context);
			case 3:
				return {
					eK: A2($elm$core$List$cons, declaration, context.eK),
					Y: context.Y,
					aa: context.aa
				};
			case 4:
				return {
					eK: A2($elm$core$List$cons, declaration, context.eK),
					Y: context.Y,
					aa: context.aa
				};
			default:
				return {
					eK: A2($elm$core$List$cons, declaration, context.eK),
					Y: context.Y,
					aa: context.aa
				};
		}
	});
var $stil4m$elm_syntax$Elm$Interface$operators = $elm$core$List$filterMap(
	function (_interface) {
		if (_interface.$ === 3) {
			var operator = _interface.a;
			return $elm$core$Maybe$Just(operator);
		} else {
			return $elm$core$Maybe$Nothing;
		}
	});
var $stil4m$elm_syntax$Elm$Syntax$Exposing$operator = function (t) {
	if (!t.$) {
		var s = t.a;
		return $elm$core$Maybe$Just(s);
	} else {
		return $elm$core$Maybe$Nothing;
	}
};
var $stil4m$elm_syntax$Elm$Syntax$Exposing$operators = function (l) {
	return A2($elm$core$List$filterMap, $stil4m$elm_syntax$Elm$Syntax$Exposing$operator, l);
};
var $stil4m$elm_syntax$Elm$Processing$buildSingle = F2(
	function (moduleIndex, imp) {
		var _v0 = A2($elm$core$Maybe$map, $stil4m$elm_syntax$Elm$Syntax$Node$value, imp.cN);
		if (_v0.$ === 1) {
			return _List_Nil;
		} else {
			if (!_v0.a.$) {
				var _v1 = A2(
					$elm$core$Dict$get,
					$stil4m$elm_syntax$Elm$Syntax$Node$value(imp.cv),
					moduleIndex);
				if (!_v1.$) {
					var module_ = _v1.a;
					return $stil4m$elm_syntax$Elm$Interface$operators(module_);
				} else {
					return _List_Nil;
				}
			} else {
				var l = _v0.a.a;
				var _v2 = A2(
					$elm$core$Dict$get,
					$stil4m$elm_syntax$Elm$Syntax$Node$value(imp.cv),
					moduleIndex);
				if (!_v2.$) {
					var module_ = _v2.a;
					var importedOperators = $stil4m$elm_syntax$Elm$Syntax$Exposing$operators(
						A2($elm$core$List$map, $stil4m$elm_syntax$Elm$Syntax$Node$value, l));
					return A2(
						$elm$core$List$filter,
						function (elem) {
							return A2(
								$elm$core$List$member,
								$stil4m$elm_syntax$Elm$Syntax$Node$value(elem.fp),
								importedOperators);
						},
						$stil4m$elm_syntax$Elm$Interface$operators(module_));
				} else {
					return _List_Nil;
				}
			}
		}
	});
var $elm$core$List$concatMap = F2(function (f, lists) {
  if (!lists.b) {
    return _List_Nil;
  }
  var tmp = _List_Cons(undefined, _List_Nil);
  var end = tmp;
  for (; lists.b.b; lists = lists.b) {
    var xs = f(lists.a);
    for (; xs.b; xs = xs.b) {
      var next = _List_Cons(xs.a, _List_Nil);
      end.b = next;
      end = next;
    }
  }
  end.b = f(lists.a);

  return tmp.b;
});
var $stil4m$elm_syntax$Elm$DefaultImports$defaults = _List_fromArray(
	[
		{
		cN: $elm$core$Maybe$Just(
			A2(
				$stil4m$elm_syntax$Elm$Syntax$Node$Node,
				$stil4m$elm_syntax$Elm$Syntax$Range$emptyRange,
				$stil4m$elm_syntax$Elm$Syntax$Exposing$All($stil4m$elm_syntax$Elm$Syntax$Range$emptyRange))),
		fb: $elm$core$Maybe$Nothing,
		cv: A2(
			$stil4m$elm_syntax$Elm$Syntax$Node$Node,
			$stil4m$elm_syntax$Elm$Syntax$Range$emptyRange,
			_List_fromArray(
				['Basics']))
	},
		{
		cN: $elm$core$Maybe$Just(
			A2(
				$stil4m$elm_syntax$Elm$Syntax$Node$Node,
				$stil4m$elm_syntax$Elm$Syntax$Range$emptyRange,
				$stil4m$elm_syntax$Elm$Syntax$Exposing$Explicit(
					_List_fromArray(
						[
							A2(
							$stil4m$elm_syntax$Elm$Syntax$Node$Node,
							$stil4m$elm_syntax$Elm$Syntax$Range$emptyRange,
							$stil4m$elm_syntax$Elm$Syntax$Exposing$TypeExpose(
								A2($stil4m$elm_syntax$Elm$Syntax$Exposing$ExposedType, 'List', $elm$core$Maybe$Nothing))),
							A2(
							$stil4m$elm_syntax$Elm$Syntax$Node$Node,
							$stil4m$elm_syntax$Elm$Syntax$Range$emptyRange,
							$stil4m$elm_syntax$Elm$Syntax$Exposing$InfixExpose('::'))
						])))),
		fb: $elm$core$Maybe$Nothing,
		cv: A2(
			$stil4m$elm_syntax$Elm$Syntax$Node$Node,
			$stil4m$elm_syntax$Elm$Syntax$Range$emptyRange,
			_List_fromArray(
				['List']))
	},
		{
		cN: $elm$core$Maybe$Just(
			A2(
				$stil4m$elm_syntax$Elm$Syntax$Node$Node,
				$stil4m$elm_syntax$Elm$Syntax$Range$emptyRange,
				$stil4m$elm_syntax$Elm$Syntax$Exposing$Explicit(
					_List_fromArray(
						[
							A2(
							$stil4m$elm_syntax$Elm$Syntax$Node$Node,
							$stil4m$elm_syntax$Elm$Syntax$Range$emptyRange,
							$stil4m$elm_syntax$Elm$Syntax$Exposing$TypeExpose(
								A2(
									$stil4m$elm_syntax$Elm$Syntax$Exposing$ExposedType,
									'Maybe',
									$elm$core$Maybe$Just($stil4m$elm_syntax$Elm$Syntax$Range$emptyRange))))
						])))),
		fb: $elm$core$Maybe$Nothing,
		cv: A2(
			$stil4m$elm_syntax$Elm$Syntax$Node$Node,
			$stil4m$elm_syntax$Elm$Syntax$Range$emptyRange,
			_List_fromArray(
				['Maybe']))
	},
		{
		cN: $elm$core$Maybe$Just(
			A2(
				$stil4m$elm_syntax$Elm$Syntax$Node$Node,
				$stil4m$elm_syntax$Elm$Syntax$Range$emptyRange,
				$stil4m$elm_syntax$Elm$Syntax$Exposing$Explicit(
					_List_fromArray(
						[
							A2(
							$stil4m$elm_syntax$Elm$Syntax$Node$Node,
							$stil4m$elm_syntax$Elm$Syntax$Range$emptyRange,
							$stil4m$elm_syntax$Elm$Syntax$Exposing$TypeExpose(
								A2(
									$stil4m$elm_syntax$Elm$Syntax$Exposing$ExposedType,
									'Result',
									$elm$core$Maybe$Just($stil4m$elm_syntax$Elm$Syntax$Range$emptyRange))))
						])))),
		fb: $elm$core$Maybe$Nothing,
		cv: A2(
			$stil4m$elm_syntax$Elm$Syntax$Node$Node,
			$stil4m$elm_syntax$Elm$Syntax$Range$emptyRange,
			_List_fromArray(
				['Result']))
	},
		{
		cN: $elm$core$Maybe$Nothing,
		fb: $elm$core$Maybe$Nothing,
		cv: A2(
			$stil4m$elm_syntax$Elm$Syntax$Node$Node,
			$stil4m$elm_syntax$Elm$Syntax$Range$emptyRange,
			_List_fromArray(
				['String']))
	},
		{
		cN: $elm$core$Maybe$Nothing,
		fb: $elm$core$Maybe$Nothing,
		cv: A2(
			$stil4m$elm_syntax$Elm$Syntax$Node$Node,
			$stil4m$elm_syntax$Elm$Syntax$Range$emptyRange,
			_List_fromArray(
				['Tuple']))
	},
		{
		cN: $elm$core$Maybe$Nothing,
		fb: $elm$core$Maybe$Nothing,
		cv: A2(
			$stil4m$elm_syntax$Elm$Syntax$Node$Node,
			$stil4m$elm_syntax$Elm$Syntax$Range$emptyRange,
			_List_fromArray(
				['Debug']))
	},
		{
		cN: $elm$core$Maybe$Just(
			A2(
				$stil4m$elm_syntax$Elm$Syntax$Node$Node,
				$stil4m$elm_syntax$Elm$Syntax$Range$emptyRange,
				$stil4m$elm_syntax$Elm$Syntax$Exposing$Explicit(
					_List_fromArray(
						[
							A2(
							$stil4m$elm_syntax$Elm$Syntax$Node$Node,
							$stil4m$elm_syntax$Elm$Syntax$Range$emptyRange,
							$stil4m$elm_syntax$Elm$Syntax$Exposing$TypeExpose(
								A2($stil4m$elm_syntax$Elm$Syntax$Exposing$ExposedType, 'Program', $elm$core$Maybe$Nothing)))
						])))),
		fb: $elm$core$Maybe$Nothing,
		cv: A2(
			$stil4m$elm_syntax$Elm$Syntax$Node$Node,
			$stil4m$elm_syntax$Elm$Syntax$Range$emptyRange,
			_List_fromArray(
				['Platform']))
	},
		{
		cN: $elm$core$Maybe$Just(
			A2(
				$stil4m$elm_syntax$Elm$Syntax$Node$Node,
				$stil4m$elm_syntax$Elm$Syntax$Range$emptyRange,
				$stil4m$elm_syntax$Elm$Syntax$Exposing$Explicit(
					_List_fromArray(
						[
							A2(
							$stil4m$elm_syntax$Elm$Syntax$Node$Node,
							$stil4m$elm_syntax$Elm$Syntax$Range$emptyRange,
							$stil4m$elm_syntax$Elm$Syntax$Exposing$TypeExpose(
								A2($stil4m$elm_syntax$Elm$Syntax$Exposing$ExposedType, 'Cmd', $elm$core$Maybe$Nothing))),
							A2(
							$stil4m$elm_syntax$Elm$Syntax$Node$Node,
							$stil4m$elm_syntax$Elm$Syntax$Range$emptyRange,
							$stil4m$elm_syntax$Elm$Syntax$Exposing$InfixExpose('!'))
						])))),
		fb: $elm$core$Maybe$Nothing,
		cv: A2(
			$stil4m$elm_syntax$Elm$Syntax$Node$Node,
			$stil4m$elm_syntax$Elm$Syntax$Range$emptyRange,
			_List_fromArray(
				['Platform', 'Cmd']))
	},
		{
		cN: $elm$core$Maybe$Just(
			A2(
				$stil4m$elm_syntax$Elm$Syntax$Node$Node,
				$stil4m$elm_syntax$Elm$Syntax$Range$emptyRange,
				$stil4m$elm_syntax$Elm$Syntax$Exposing$Explicit(
					_List_fromArray(
						[
							A2(
							$stil4m$elm_syntax$Elm$Syntax$Node$Node,
							$stil4m$elm_syntax$Elm$Syntax$Range$emptyRange,
							$stil4m$elm_syntax$Elm$Syntax$Exposing$TypeExpose(
								A2($stil4m$elm_syntax$Elm$Syntax$Exposing$ExposedType, 'Sub', $elm$core$Maybe$Nothing)))
						])))),
		fb: $elm$core$Maybe$Nothing,
		cv: A2(
			$stil4m$elm_syntax$Elm$Syntax$Node$Node,
			$stil4m$elm_syntax$Elm$Syntax$Range$emptyRange,
			_List_fromArray(
				['Platform', 'Sub']))
	}
	]);
var $stil4m$elm_syntax$Elm$RawFile$imports = function (_v0) {
	var file = _v0;
	return A2($elm$core$List$map, $stil4m$elm_syntax$Elm$Syntax$Node$value, file.e1);
};
var $stil4m$elm_syntax$Elm$Processing$tableForFile = F2(
	function (rawFile, _v0) {
		var moduleIndex = _v0;
		return $elm$core$Dict$fromList(
			A2(
				$elm$core$List$map,
				function (x) {
					return _Utils_Tuple2(
						$stil4m$elm_syntax$Elm$Syntax$Node$value(x.fp),
						x);
				},
				A2(
					$elm$core$List$concatMap,
					$stil4m$elm_syntax$Elm$Processing$buildSingle(moduleIndex),
					_Utils_ap(
						$stil4m$elm_syntax$Elm$DefaultImports$defaults,
						$stil4m$elm_syntax$Elm$RawFile$imports(rawFile)))));
	});
var $stil4m$elm_syntax$Elm$Processing$process = F2(
	function (processContext, rawFile) {
		var file = rawFile;
		var table = A2($stil4m$elm_syntax$Elm$Processing$tableForFile, rawFile, processContext);
		var changes = A3(
			$elm$core$List$foldl,
			$stil4m$elm_syntax$Elm$Processing$attachDocumentationAndFixOperators(table),
			{eK: _List_Nil, Y: _List_Nil, aa: file.eH},
			file.eK);
		return {
			eH: $elm$core$List$concat(
				$elm$core$List$reverse(
					A2($elm$core$List$cons, changes.aa, changes.Y))),
			eK: $elm$core$List$reverse(changes.eK),
			e1: file.e1,
			fc: file.fc
		};
	});
var $jfmengels$elm_review$Review$FileParser$parse = function (source) {
	var _v0 = $stil4m$elm_syntax$Elm$Parser$parse(source);
	if (!_v0.$) {
		var file = _v0.a;
		return $elm$core$Result$Ok(
			A2($stil4m$elm_syntax$Elm$Processing$process, $jfmengels$elm_review$Review$FileParser$elmProcessContext, file));
	} else {
		return $elm$core$Result$Err(0);
	}
};
var $jfmengels$elm_review$Review$Fix$Internal$fixModule = F2(
	function (fixes, originalSourceCode) {
		var _v0 = A2($jfmengels$elm_review$Review$Fix$Internal$tryToApplyFix, fixes, originalSourceCode);
		if (!_v0.$) {
			var fixedSourceCode = _v0.a;
			var _v1 = $jfmengels$elm_review$Review$FileParser$parse(fixedSourceCode);
			if (!_v1.$) {
				var ast = _v1.a;
				return $elm$core$Maybe$Just(
					{eu: ast, fE: fixedSourceCode});
			} else {
				return $elm$core$Maybe$Nothing;
			}
		} else {
			return $elm$core$Maybe$Nothing;
		}
	});
var $jfmengels$elm_review$Review$Fix$Internal$fixReadme = F2(
	function (fixes, originalSourceCode) {
		return A2($jfmengels$elm_review$Review$Fix$Internal$tryToApplyFix, fixes, originalSourceCode);
	});
var $jfmengels$elm_review$Review$Project$Valid$getModuleByPath = F2(
	function (path, _v0) {
		var project = _v0;
		return A2($elm$core$Dict$get, path, project.aO);
	});
var $jfmengels$elm_review$Review$Rule$isFixable = F2(
	function (predicate, err) {
		var _v0 = err.cQ;
		if (!_v0.$) {
			return predicate(
				{eL: err.eL, eU: err.eU, e8: err.e8, c1: err.c1, c3: err.c3}) ? err.cQ : $elm$core$Maybe$Nothing;
		} else {
			return $elm$core$Maybe$Nothing;
		}
	});
var $jfmengels$elm_review$Review$Project$Valid$readme = function (_v0) {
	var project = _v0;
	return A2($elm$core$Maybe$map, $elm$core$Tuple$first, project.c2);
};
var $jfmengels$elm_review$Review$Rule$findFixHelp = F4(
	function (project, fixablePredicate, errors, maybeModuleZipper) {
		findFixHelp:
		while (true) {
			if (!errors.b) {
				return $elm$core$Maybe$Nothing;
			} else {
				var headError = errors.a;
				var restOfErrors = errors.b;
				var _v1 = A2($jfmengels$elm_review$Review$Rule$isFixable, fixablePredicate, headError);
				if (_v1.$ === 1) {
					var $temp$project = project,
						$temp$fixablePredicate = fixablePredicate,
						$temp$errors = restOfErrors,
						$temp$maybeModuleZipper = maybeModuleZipper;
					project = $temp$project;
					fixablePredicate = $temp$fixablePredicate;
					errors = $temp$errors;
					maybeModuleZipper = $temp$maybeModuleZipper;
					continue findFixHelp;
				} else {
					var fixes = _v1.a;
					var _v2 = headError.ee;
					switch (_v2) {
						case 0:
							var _v3 = A2($jfmengels$elm_review$Review$Project$Valid$getModuleByPath, headError.eU, project);
							if (_v3.$ === 1) {
								var $temp$project = project,
									$temp$fixablePredicate = fixablePredicate,
									$temp$errors = restOfErrors,
									$temp$maybeModuleZipper = maybeModuleZipper;
								project = $temp$project;
								fixablePredicate = $temp$fixablePredicate;
								errors = $temp$errors;
								maybeModuleZipper = $temp$maybeModuleZipper;
								continue findFixHelp;
							} else {
								var file = _v3.a;
								var _v4 = A2(
									$elm$core$Maybe$andThen,
									function (fixResult) {
										return A2(
											$elm$core$Maybe$map,
											function (_v5) {
												var newProject = _v5.a;
												var newModuleZipper = _v5.b;
												return {
													cM: $jfmengels$elm_review$Review$Rule$errorToReviewError(headError),
													a5: A2($jfmengels$elm_review$Review$Rule$FixedElmModule, fixResult, newModuleZipper),
													e: newProject
												};
											},
											A3(
												$jfmengels$elm_review$Review$Project$Valid$addParsedModule,
												{eu: fixResult.eu, fr: headError.eU, fE: fixResult.fE},
												maybeModuleZipper,
												project));
									},
									A2($jfmengels$elm_review$Review$Fix$Internal$fixModule, fixes, file.fE));
								if (_v4.$ === 1) {
									var $temp$project = project,
										$temp$fixablePredicate = fixablePredicate,
										$temp$errors = restOfErrors,
										$temp$maybeModuleZipper = maybeModuleZipper;
									project = $temp$project;
									fixablePredicate = $temp$fixablePredicate;
									errors = $temp$errors;
									maybeModuleZipper = $temp$maybeModuleZipper;
									continue findFixHelp;
								} else {
									var fixResult = _v4.a;
									return $elm$core$Maybe$Just(fixResult);
								}
							}
						case 1:
							var _v6 = $jfmengels$elm_review$Review$Project$Valid$elmJson(project);
							if (_v6.$ === 1) {
								var $temp$project = project,
									$temp$fixablePredicate = fixablePredicate,
									$temp$errors = restOfErrors,
									$temp$maybeModuleZipper = maybeModuleZipper;
								project = $temp$project;
								fixablePredicate = $temp$fixablePredicate;
								errors = $temp$errors;
								maybeModuleZipper = $temp$maybeModuleZipper;
								continue findFixHelp;
							} else {
								var elmJson = _v6.a;
								var _v7 = A2(
									$elm$core$Maybe$andThen,
									function (fixResult) {
										return A2(
											$jfmengels$elm_review$Review$Project$Valid$addElmJson,
											{fr: elmJson.fr, e: fixResult.e, bN: fixResult.bN},
											project);
									},
									A2($jfmengels$elm_review$Review$Fix$Internal$fixElmJson, fixes, elmJson.bN));
								if (_v7.$ === 1) {
									var $temp$project = project,
										$temp$fixablePredicate = fixablePredicate,
										$temp$errors = restOfErrors,
										$temp$maybeModuleZipper = maybeModuleZipper;
									project = $temp$project;
									fixablePredicate = $temp$fixablePredicate;
									errors = $temp$errors;
									maybeModuleZipper = $temp$maybeModuleZipper;
									continue findFixHelp;
								} else {
									var newProject = _v7.a;
									return $elm$core$Maybe$Just(
										{
											cM: $jfmengels$elm_review$Review$Rule$errorToReviewError(headError),
											a5: $jfmengels$elm_review$Review$Rule$FixedElmJson,
											e: newProject
										});
								}
							}
						case 2:
							var _v8 = $jfmengels$elm_review$Review$Project$Valid$readme(project);
							if (_v8.$ === 1) {
								var $temp$project = project,
									$temp$fixablePredicate = fixablePredicate,
									$temp$errors = restOfErrors,
									$temp$maybeModuleZipper = maybeModuleZipper;
								project = $temp$project;
								fixablePredicate = $temp$fixablePredicate;
								errors = $temp$errors;
								maybeModuleZipper = $temp$maybeModuleZipper;
								continue findFixHelp;
							} else {
								var readme = _v8.a;
								var _v9 = A2($jfmengels$elm_review$Review$Fix$Internal$fixReadme, fixes, readme.br);
								if (_v9.$ === 1) {
									var $temp$project = project,
										$temp$fixablePredicate = fixablePredicate,
										$temp$errors = restOfErrors,
										$temp$maybeModuleZipper = maybeModuleZipper;
									project = $temp$project;
									fixablePredicate = $temp$fixablePredicate;
									errors = $temp$errors;
									maybeModuleZipper = $temp$maybeModuleZipper;
									continue findFixHelp;
								} else {
									var content = _v9.a;
									return $elm$core$Maybe$Just(
										{
											cM: $jfmengels$elm_review$Review$Rule$errorToReviewError(headError),
											a5: $jfmengels$elm_review$Review$Rule$FixedReadme,
											e: A2(
												$jfmengels$elm_review$Review$Project$Valid$addReadme,
												{br: content, fr: readme.fr},
												project)
										});
								}
							}
						default:
							var $temp$project = project,
								$temp$fixablePredicate = fixablePredicate,
								$temp$errors = restOfErrors,
								$temp$maybeModuleZipper = maybeModuleZipper;
							project = $temp$project;
							fixablePredicate = $temp$fixablePredicate;
							errors = $temp$errors;
							maybeModuleZipper = $temp$maybeModuleZipper;
							continue findFixHelp;
					}
				}
			}
		}
	});
var $jfmengels$elm_review$Review$Fix$FixedErrors$count = function (_v0) {
	var fixCount = _v0.a;
	return fixCount;
};
var $jfmengels$elm_review$Review$Rule$fixedError = F2(
	function (fixedErrors, data) {
		return _List_fromArray(
			[
				_Utils_Tuple2(
				'type',
				$elm$json$Json$Encode$string('apply-fix')),
				_Utils_Tuple2(
				'ruleName',
				$elm$json$Json$Encode$string(data.c3)),
				_Utils_Tuple2(
				'filePath',
				$elm$json$Json$Encode$string(data.eU)),
				_Utils_Tuple2(
				'count',
				$elm$json$Json$Encode$int(
					$jfmengels$elm_review$Review$Fix$FixedErrors$count(fixedErrors)))
			]);
	});
var $jfmengels$elm_review$Review$Fix$FixedErrors$FixedErrors = F2(
	function (a, b) {
		return {$: 0, a: a, b: b};
	});
var $jfmengels$elm_review$Review$Fix$FixedErrors$insert = F2(
	function (error, _v0) {
		var filePath = error.eU;
		var fixCount = _v0.a;
		var fixedErrors = _v0.b;
		return A2(
			$jfmengels$elm_review$Review$Fix$FixedErrors$FixedErrors,
			fixCount + 1,
			A3(
				$elm$core$Dict$update,
				filePath,
				function (errors) {
					return $elm$core$Maybe$Just(
						A2(
							$elm$core$List$cons,
							error,
							A2($elm$core$Maybe$withDefault, _List_Nil, errors)));
				},
				fixedErrors));
	});
var $jfmengels$elm_review$Review$Logger$log = F3(
	function (_v0, message, data) {
		var logFn = _v0;
		return A2(
			$elm$core$Basics$always,
			data,
			logFn(message));
	});
var $jfmengels$elm_review$Review$Options$Internal$shouldAbort = F2(
	function (reviewOptionsData, fixedErrors) {
		var _v0 = reviewOptionsData.aw;
		if (_v0.$ === 1) {
			if (!_v0.a.$) {
				var fixLimit = _v0.a.a;
				return _Utils_cmp(
					fixLimit,
					$jfmengels$elm_review$Review$Fix$FixedErrors$count(fixedErrors)) < 1;
			} else {
				var _v1 = _v0.a;
				return false;
			}
		} else {
			return false;
		}
	});
var $jfmengels$elm_review$Review$Options$Internal$shouldApplyFix = F2(
	function (projectVisitor, reviewOptionsData) {
		var _v0 = reviewOptionsData.aw;
		if (_v0.$ === 1) {
			return $elm$core$Dict$isEmpty(reviewOptionsData.ec) ? $elm$core$Maybe$Just(
				function (err) {
					return !reviewOptionsData.dH(err);
				}) : $elm$core$Maybe$Just(
				function (err) {
					return (!A2(
						$elm$core$Dict$member,
						_Utils_Tuple2(projectVisitor.fe, err.eU),
						reviewOptionsData.ec)) && (!reviewOptionsData.dH(err));
				});
		} else {
			return $elm$core$Maybe$Nothing;
		}
	});
var $jfmengels$elm_review$Review$Rule$findFix = F6(
	function (reviewOptions, projectVisitor, project, errors, fixedErrors, maybeModuleZipper) {
		return A2(
			$elm$core$Maybe$map,
			function (fixResult) {
				var newFixedErrors = A2($jfmengels$elm_review$Review$Fix$FixedErrors$insert, fixResult.cM, fixedErrors);
				return A2($jfmengels$elm_review$Review$Options$Internal$shouldAbort, reviewOptions, newFixedErrors) ? _Utils_Tuple2(
					$jfmengels$elm_review$Review$Rule$ShouldAbort(newFixedErrors),
					fixResult) : A3(
					$jfmengels$elm_review$Review$Logger$log,
					reviewOptions.cX,
					A2(
						$jfmengels$elm_review$Review$Rule$fixedError,
						newFixedErrors,
						{
							eU: $jfmengels$elm_review$Review$Rule$errorFilePath(fixResult.cM),
							c3: projectVisitor.fe
						}),
					_Utils_Tuple2(
						$jfmengels$elm_review$Review$Rule$ShouldContinue(newFixedErrors),
						fixResult));
			},
			A2(
				$elm$core$Maybe$andThen,
				function (fixablePredicate) {
					return A4($jfmengels$elm_review$Review$Rule$findFixHelp, project, fixablePredicate, errors, maybeModuleZipper);
				},
				A2($jfmengels$elm_review$Review$Options$Internal$shouldApplyFix, projectVisitor, reviewOptions)));
	});
var $jfmengels$elm_review$Review$Cache$ContextHash$areEqual = F2(
	function (_v0, _v1) {
		var a = _v0;
		var b = _v1;
		return _Utils_eq(a, b);
	});
var $jfmengels$elm_review$Review$Cache$ContentHash$areEqualForMaybe = F2(
	function (a, b) {
		var _v0 = _Utils_Tuple2(a, b);
		_v0$2:
		while (true) {
			if (!_v0.a.$) {
				if (!_v0.b.$) {
					var a_ = _v0.a.a;
					var b_ = _v0.b.a;
					return _Utils_eq(a_, b_);
				} else {
					break _v0$2;
				}
			} else {
				if (_v0.b.$ === 1) {
					var _v1 = _v0.a;
					var _v2 = _v0.b;
					return true;
				} else {
					break _v0$2;
				}
			}
		}
		return false;
	});
var $jfmengels$elm_review$Review$Cache$matchMaybe = F3(
	function (contentHash, context, _v0) {
		var entry = _v0;
		return A2($jfmengels$elm_review$Review$Cache$ContentHash$areEqualForMaybe, contentHash, entry.bs) && A2($jfmengels$elm_review$Review$Cache$ContextHash$areEqual, context, entry.bD);
	});
var $jfmengels$elm_review$Review$Project$Valid$moduleZipper = function (_v0) {
	var project = _v0;
	return $jfmengels$elm_review$Review$Project$Valid$unsafeCreateZipper(project.cb);
};
var $jfmengels$elm_review$Review$Cache$outputContextMaybe = function (_v0) {
	var entry = _v0;
	return entry.bL;
};
var $jfmengels$elm_review$Review$Rule$reuseProjectRuleCache = F3(
	function (predicate, getter, cache) {
		var _v0 = getter(cache);
		if (_v0.$ === 1) {
			return $elm$core$Maybe$Nothing;
		} else {
			var value = _v0.a;
			return predicate(value) ? $elm$core$Maybe$Just(value) : $elm$core$Maybe$Nothing;
		}
	});
var $jfmengels$elm_review$Review$Rule$computeDependencies = F5(
	function (_v0, project, contexts, cache, fixedErrors) {
		var reviewOptions = _v0.S;
		var projectVisitor = _v0.t;
		var exceptions = _v0.r;
		var modulesAsNextStep = function (projectContext) {
			return A2(
				$jfmengels$elm_review$Review$Rule$Modules,
				{dp: projectContext, cg: contexts.cg, p: contexts.p, c2: contexts.c2},
				$jfmengels$elm_review$Review$Project$Valid$moduleZipper(project));
		};
		var inputContext = contexts.c2;
		var cachePredicate = function (entry) {
			return A3(
				$jfmengels$elm_review$Review$Cache$matchMaybe,
				$jfmengels$elm_review$Review$Project$Valid$dependenciesHash(project),
				$jfmengels$elm_review$Review$Cache$ContextHash$create(inputContext),
				entry);
		};
		var _v1 = A3(
			$jfmengels$elm_review$Review$Rule$reuseProjectRuleCache,
			cachePredicate,
			function ($) {
				return $.av;
			},
			cache);
		if (!_v1.$) {
			var entry = _v1.a;
			return {
				eA: cache,
				eV: fixedErrors,
				e: project,
				q: modulesAsNextStep(
					$jfmengels$elm_review$Review$Cache$outputContextMaybe(entry))
			};
		} else {
			var dependencies = $jfmengels$elm_review$Review$Project$Valid$dependencies(project);
			var accumulateWithDirectDependencies = function () {
				var _v9 = projectVisitor.I;
				if (!_v9.b) {
					return $elm$core$Basics$identity;
				} else {
					var visitors = _v9;
					return A2(
						$jfmengels$elm_review$Review$Rule$accumulateWithListOfVisitors,
						visitors,
						$jfmengels$elm_review$Review$Project$Valid$directDependencies(project));
				}
			}();
			var _v2 = A3(
				$jfmengels$elm_review$Review$Rule$accumulateWithListOfVisitors,
				projectVisitor.H,
				dependencies,
				accumulateWithDirectDependencies(
					_Utils_Tuple2(_List_Nil, inputContext)));
			var errorsForVisitor = _v2.a;
			var outputContext = _v2.b;
			var errors = A3($jfmengels$elm_review$Review$Rule$filterExceptionsAndSetName, exceptions, projectVisitor.fe, errorsForVisitor);
			var updateCache = function (_v8) {
				var dependenciesEntry = $jfmengels$elm_review$Review$Cache$createEntryMaybe(
					{
						bs: $jfmengels$elm_review$Review$Project$Valid$dependenciesHash(project),
						aT: errors,
						bD: inputContext,
						bL: outputContext
					});
				return _Utils_update(
					cache,
					{
						av: $elm$core$Maybe$Just(dependenciesEntry)
					});
			};
			var resultWhenNoFix = function (_v7) {
				return {
					eA: updateCache(0),
					eV: fixedErrors,
					e: project,
					q: modulesAsNextStep(outputContext)
				};
			};
			var _v3 = A6($jfmengels$elm_review$Review$Rule$findFix, reviewOptions, projectVisitor, project, errors, fixedErrors, $elm$core$Maybe$Nothing);
			if (!_v3.$) {
				var _v4 = _v3.a;
				var postFixStatus = _v4.a;
				var fixResult = _v4.b;
				if (!postFixStatus.$) {
					var newFixedErrors = postFixStatus.a;
					return {
						eA: updateCache(0),
						eV: newFixedErrors,
						e: fixResult.e,
						q: $jfmengels$elm_review$Review$Rule$Abort
					};
				} else {
					var newFixedErrors = postFixStatus.a;
					var _v6 = fixResult.a5;
					switch (_v6.$) {
						case 1:
							return {
								eA: updateCache(0),
								eV: newFixedErrors,
								e: fixResult.e,
								q: $jfmengels$elm_review$Review$Rule$ElmJson(
									{p: contexts.p})
							};
						case 2:
							return {
								eA: updateCache(0),
								eV: newFixedErrors,
								e: fixResult.e,
								q: $jfmengels$elm_review$Review$Rule$Readme(
									{cg: contexts.cg, p: contexts.p})
							};
						default:
							return resultWhenNoFix(0);
					}
				}
			} else {
				return resultWhenNoFix(0);
			}
		}
	});
var $jfmengels$elm_review$Review$Rule$ElmJsonKey = $elm$core$Basics$identity;
var $jfmengels$elm_review$Review$Rule$computeElmJson = F5(
	function (dataToComputeProject, project, inputContext, cache, fixedErrors) {
		computeElmJson:
		while (true) {
			var reviewOptions = dataToComputeProject.S;
			var projectVisitor = dataToComputeProject.t;
			var exceptions = dataToComputeProject.r;
			var cachePredicate = function (elmJson) {
				return A3(
					$jfmengels$elm_review$Review$Cache$matchMaybe,
					$jfmengels$elm_review$Review$Project$Valid$elmJsonHash(project),
					$jfmengels$elm_review$Review$Cache$ContextHash$create(inputContext),
					elmJson);
			};
			var _v0 = A3(
				$jfmengels$elm_review$Review$Rule$reuseProjectRuleCache,
				cachePredicate,
				function ($) {
					return $.cg;
				},
				cache);
			if (!_v0.$) {
				var entry = _v0.a;
				return {
					eA: cache,
					eV: fixedErrors,
					e: project,
					q: $jfmengels$elm_review$Review$Rule$Readme(
						{
							cg: $jfmengels$elm_review$Review$Cache$outputContextMaybe(entry),
							p: inputContext
						})
				};
			} else {
				var projectElmJson = $jfmengels$elm_review$Review$Project$Valid$elmJson(project);
				var elmJsonData = A2(
					$elm$core$Maybe$map,
					function (elmJson) {
						return {eO: elmJson, e: elmJson.e};
					},
					projectElmJson);
				var _v1 = A3(
					$jfmengels$elm_review$Review$Rule$accumulateWithListOfVisitors,
					projectVisitor.J,
					elmJsonData,
					_Utils_Tuple2(_List_Nil, inputContext));
				var errorsForVisitor = _v1.a;
				var outputContext = _v1.b;
				var errors = A3($jfmengels$elm_review$Review$Rule$filterExceptionsAndSetName, exceptions, projectVisitor.fe, errorsForVisitor);
				var updateCache = function (_v5) {
					var elmJsonEntry = $jfmengels$elm_review$Review$Cache$createEntryMaybe(
						{
							bs: $jfmengels$elm_review$Review$Project$Valid$elmJsonHash(project),
							aT: errors,
							bD: inputContext,
							bL: outputContext
						});
					return _Utils_update(
						cache,
						{
							cg: $elm$core$Maybe$Just(elmJsonEntry)
						});
				};
				var _v2 = A6($jfmengels$elm_review$Review$Rule$findFix, reviewOptions, projectVisitor, project, errors, fixedErrors, $elm$core$Maybe$Nothing);
				if (!_v2.$) {
					var _v3 = _v2.a;
					var postFixStatus = _v3.a;
					var fixResult = _v3.b;
					if (postFixStatus.$ === 1) {
						var newFixedErrors = postFixStatus.a;
						var $temp$dataToComputeProject = dataToComputeProject,
							$temp$project = fixResult.e,
							$temp$inputContext = inputContext,
							$temp$cache = cache,
							$temp$fixedErrors = newFixedErrors;
						dataToComputeProject = $temp$dataToComputeProject;
						project = $temp$project;
						inputContext = $temp$inputContext;
						cache = $temp$cache;
						fixedErrors = $temp$fixedErrors;
						continue computeElmJson;
					} else {
						var newFixedErrors = postFixStatus.a;
						return {
							eA: updateCache(0),
							eV: newFixedErrors,
							e: fixResult.e,
							q: $jfmengels$elm_review$Review$Rule$Abort
						};
					}
				} else {
					return {
						eA: updateCache(0),
						eV: fixedErrors,
						e: project,
						q: $jfmengels$elm_review$Review$Rule$Readme(
							{cg: outputContext, p: inputContext})
					};
				}
			}
		}
	});
var $jfmengels$elm_review$Review$Rule$getFolderFromTraversal = function (traversalAndFolder) {
	if (!traversalAndFolder.$) {
		var maybeFolder = traversalAndFolder.a;
		return maybeFolder;
	} else {
		var folder = traversalAndFolder.a;
		return $elm$core$Maybe$Just(folder);
	}
};
var $jfmengels$elm_review$Review$Cache$outputContext = function (_v0) {
	var entry = _v0;
	return entry.bL;
};
var $jfmengels$elm_review$Review$Rule$computeFinalContext = F3(
	function (projectVisitor, cache, projectContext) {
		var _v0 = $jfmengels$elm_review$Review$Rule$getFolderFromTraversal(projectVisitor.bR);
		if (!_v0.$) {
			var foldProjectContexts = _v0.a.eW;
			return A3(
				$elm$core$Dict$foldl,
				F3(
					function (_v1, cacheEntry, acc) {
						return A2(
							foldProjectContexts,
							$jfmengels$elm_review$Review$Cache$outputContext(cacheEntry),
							acc);
					}),
				projectContext,
				cache.A);
		} else {
			return projectContext;
		}
	});
var $jfmengels$elm_review$Review$Error$doesPreventExtract = function (error_) {
	return error_.cx;
};
var $jfmengels$elm_review$Review$Rule$doesPreventExtract = function (_v0) {
	var err = _v0;
	return $jfmengels$elm_review$Review$Error$doesPreventExtract(err);
};
var $jfmengels$elm_review$Review$Rule$computeExtract = F5(
	function (reviewOptions, projectVisitor, context, errors, cache) {
		var _v0 = projectVisitor.as;
		if (!_v0.$) {
			var dataExtractor = _v0.a;
			if (reviewOptions.dx && (!A2($elm$core$List$any, $jfmengels$elm_review$Review$Rule$doesPreventExtract, errors))) {
				var inputContext = function () {
					if (!context.$) {
						var projectContext = context.a;
						return projectContext;
					} else {
						var projectContext = context.a;
						return A3($jfmengels$elm_review$Review$Rule$computeFinalContext, projectVisitor, cache, projectContext);
					}
				}();
				var cachePredicate = function (extract) {
					return _Utils_eq(
						extract.bD,
						$jfmengels$elm_review$Review$Cache$ContextHash$create(inputContext));
				};
				var _v1 = A3(
					$jfmengels$elm_review$Review$Rule$reuseProjectRuleCache,
					cachePredicate,
					function ($) {
						return $.dx;
					},
					cache);
				if (!_v1.$) {
					return cache;
				} else {
					return _Utils_update(
						cache,
						{
							dx: $elm$core$Maybe$Just(
								{
									dx: dataExtractor(inputContext),
									bD: $jfmengels$elm_review$Review$Cache$ContextHash$create(inputContext)
								})
						});
				}
			} else {
				return cache;
			}
		} else {
			return cache;
		}
	});
var $jfmengels$elm_review$Review$Rule$Combined = function (a) {
	return {$: 0, a: a};
};
var $jfmengels$elm_review$Review$Rule$DataExtract = function (a) {
	return {$: 5, a: a};
};
var $jfmengels$elm_review$Review$Rule$ToCombineStartingFrom = function (a) {
	return {$: 1, a: a};
};
var $jfmengels$elm_review$Review$Cache$EntryNoOutputContext = $elm$core$Basics$identity;
var $jfmengels$elm_review$Review$Cache$createNoOutput = F2(
	function (inputContext, output) {
		return {
			j: $jfmengels$elm_review$Review$Cache$ContextHash$create(inputContext),
			dX: output
		};
	});
var $jfmengels$elm_review$Review$Cache$matchNoOutput = F2(
	function (context, _v0) {
		var entry = _v0;
		return A2($jfmengels$elm_review$Review$Cache$ContextHash$areEqual, context, entry.j);
	});
var $jfmengels$elm_review$Review$Rule$computeFinalProjectEvaluation = F5(
	function (_v0, project, projectContexts, cache, fixedErrors) {
		var reviewOptions = _v0.S;
		var projectVisitor = _v0.t;
		var exceptions = _v0.r;
		if ($elm$core$List$isEmpty(projectVisitor.w)) {
			return {
				eA: cache,
				eV: fixedErrors,
				e: project,
				q: $jfmengels$elm_review$Review$Rule$DataExtract(
					$jfmengels$elm_review$Review$Rule$ToCombineStartingFrom(projectContexts.dp))
			};
		} else {
			var finalContext = A3($jfmengels$elm_review$Review$Rule$computeFinalContext, projectVisitor, cache, projectContexts.dp);
			var cachePredicate = function (entry) {
				return A2(
					$jfmengels$elm_review$Review$Cache$matchNoOutput,
					$jfmengels$elm_review$Review$Cache$ContextHash$create(finalContext),
					entry);
			};
			var _v1 = A3(
				$jfmengels$elm_review$Review$Rule$reuseProjectRuleCache,
				cachePredicate,
				function ($) {
					return $.bx;
				},
				cache);
			if (!_v1.$) {
				return {
					eA: cache,
					eV: fixedErrors,
					e: project,
					q: $jfmengels$elm_review$Review$Rule$DataExtract(
						$jfmengels$elm_review$Review$Rule$Combined(finalContext))
				};
			} else {
				var errors = A2(
					$elm$core$List$concatMap,
					function (finalEvaluationFn) {
						return A3(
							$jfmengels$elm_review$Review$Rule$filterExceptionsAndSetName,
							exceptions,
							projectVisitor.fe,
							finalEvaluationFn(finalContext));
					},
					projectVisitor.w);
				var _v2 = A6($jfmengels$elm_review$Review$Rule$findFix, reviewOptions, projectVisitor, project, errors, fixedErrors, $elm$core$Maybe$Nothing);
				if (!_v2.$) {
					var _v3 = _v2.a;
					var postFixStatus = _v3.a;
					var fixResult = _v3.b;
					var _v4 = function () {
						if (!postFixStatus.$) {
							var newFixedErrors_ = postFixStatus.a;
							return _Utils_Tuple2(newFixedErrors_, $jfmengels$elm_review$Review$Rule$Abort);
						} else {
							var newFixedErrors_ = postFixStatus.a;
							return _Utils_Tuple2(
								newFixedErrors_,
								function () {
									var _v6 = fixResult.a5;
									switch (_v6.$) {
										case 0:
											var moduleZipper = _v6.b;
											return A2($jfmengels$elm_review$Review$Rule$Modules, projectContexts, moduleZipper);
										case 1:
											return $jfmengels$elm_review$Review$Rule$ElmJson(
												{p: projectContexts.p});
										default:
											return $jfmengels$elm_review$Review$Rule$Readme(
												{cg: projectContexts.cg, p: projectContexts.p});
									}
								}());
						}
					}();
					var newFixedErrors = _v4.a;
					var step = _v4.b;
					return {
						eA: _Utils_update(
							cache,
							{
								bx: $elm$core$Maybe$Just(
									A2($jfmengels$elm_review$Review$Cache$createNoOutput, finalContext, errors))
							}),
						eV: newFixedErrors,
						e: fixResult.e,
						q: step
					};
				} else {
					return {
						eA: _Utils_update(
							cache,
							{
								bx: $elm$core$Maybe$Just(
									A2($jfmengels$elm_review$Review$Cache$createNoOutput, finalContext, errors))
							}),
						eV: fixedErrors,
						e: project,
						q: $jfmengels$elm_review$Review$Rule$DataExtract(
							$jfmengels$elm_review$Review$Rule$Combined(finalContext))
					};
				}
			}
		}
	});
var $jfmengels$elm_review$Review$Rule$ModuleVisitStep = function (a) {
	return {$: 0, a: a};
};
var $jfmengels$elm_review$Review$Rule$BackToElmJson = {$: 1};
var $jfmengels$elm_review$Review$Rule$BackToReadme = {$: 2};
var $jfmengels$elm_review$Review$Rule$NextStepAbort = {$: 3};
var $jfmengels$elm_review$Review$ModuleNameLookupTable$Compute$CustomTypeConstructor = 1;
var $jfmengels$elm_review$Review$ModuleNameLookupTable$Compute$Port = 5;
var $jfmengels$elm_review$Review$ModuleNameLookupTable$Compute$TopLevelVariable = 0;
var $jfmengels$elm_review$NonEmpty$Nonempty = F2(
	function (a, b) {
		return {$: 0, a: a, b: b};
	});
var $jfmengels$elm_review$NonEmpty$mapHead = F2(
	function (fn, _v0) {
		var x = _v0.a;
		var xs = _v0.b;
		return A2(
			$jfmengels$elm_review$NonEmpty$Nonempty,
			fn(x),
			xs);
	});
var $jfmengels$elm_review$Review$ModuleNameLookupTable$Compute$registerVariable = F3(
	function (variableInfo, name, scopes) {
		return A2(
			$jfmengels$elm_review$NonEmpty$mapHead,
			function (scope) {
				return _Utils_update(
					scope,
					{
						bf: A3($elm$core$Dict$insert, name, variableInfo, scope.bf)
					});
			},
			scopes);
	});
var $jfmengels$elm_review$Review$ModuleNameLookupTable$Compute$addToScope = F2(
	function (variableData, innerContext) {
		var newScopes = A3(
			$jfmengels$elm_review$Review$ModuleNameLookupTable$Compute$registerVariable,
			variableData,
			$stil4m$elm_syntax$Elm$Syntax$Node$value(variableData.dV),
			innerContext.v);
		return _Utils_update(
			innerContext,
			{v: newScopes});
	});
var $jfmengels$elm_review$Review$ModuleNameLookupTable$Compute$registerExposedCustomType = F3(
	function (constructors, name, innerContext) {
		return _Utils_update(
			innerContext,
			{
				b$: A2(
					$elm$core$List$cons,
					{
						er: _List_Nil,
						bq: '',
						fe: name,
						fN: A2(
							$elm$core$List$map,
							function (constructor) {
								return _Utils_Tuple2(
									$stil4m$elm_syntax$Elm$Syntax$Node$value(
										$stil4m$elm_syntax$Elm$Syntax$Node$value(constructor).fe),
									_List_Nil);
							},
							constructors)
					},
					innerContext.b$)
			});
	});
var $elm$project_metadata_utils$Elm$Type$Tuple = function (a) {
	return {$: 2, a: a};
};
var $jfmengels$elm_review$Review$ModuleNameLookupTable$Compute$registerExposedTypeAlias = F2(
	function (name, innerContext) {
		return _Utils_update(
			innerContext,
			{
				b_: A2(
					$elm$core$List$cons,
					{
						er: _List_Nil,
						bq: '',
						fe: name,
						c9: $elm$project_metadata_utils$Elm$Type$Tuple(_List_Nil)
					},
					innerContext.b_)
			});
	});
var $elm$project_metadata_utils$Elm$Type$Lambda = F2(
	function (a, b) {
		return {$: 1, a: a, b: b};
	});
var $elm$project_metadata_utils$Elm$Type$Record = F2(
	function (a, b) {
		return {$: 4, a: a, b: b};
	});
var $elm$project_metadata_utils$Elm$Type$Type = F2(
	function (a, b) {
		return {$: 3, a: a, b: b};
	});
var $elm$project_metadata_utils$Elm$Type$Var = function (a) {
	return {$: 0, a: a};
};
var $jfmengels$elm_review$Vendor$ListExtra$find = F2(
	function (predicate, list) {
		find:
		while (true) {
			if (!list.b) {
				return $elm$core$Maybe$Nothing;
			} else {
				var first = list.a;
				var rest = list.b;
				if (predicate(first)) {
					return $elm$core$Maybe$Just(first);
				} else {
					var $temp$predicate = predicate,
						$temp$list = rest;
					predicate = $temp$predicate;
					list = $temp$list;
					continue find;
				}
			}
		}
	});
var $jfmengels$elm_review$Review$ModuleNameLookupTable$Compute$isTypeDeclaredInModule = F2(
	function (typeName, module_) {
		return A2(
			$elm$core$List$any,
			A2(
				$elm$core$Basics$composeR,
				function ($) {
					return $.fe;
				},
				$elm$core$Basics$eq(typeName)),
			module_.dc) || A2(
			$elm$core$List$any,
			A2(
				$elm$core$Basics$composeR,
				function ($) {
					return $.fe;
				},
				$elm$core$Basics$eq(typeName)),
			module_.el);
	});
var $jfmengels$elm_review$Review$ModuleNameLookupTable$Compute$joinModuleName = function (name) {
	return A2($elm$core$String$join, '.', name);
};
var $jfmengels$elm_review$Review$ModuleNameLookupTable$Compute$moduleNameForType = F3(
	function (context, typeName, moduleName) {
		if (!moduleName.b) {
			return A2($elm$core$Set$member, typeName, context.be) ? _List_Nil : A2(
				$elm$core$Maybe$withDefault,
				_List_Nil,
				A2($elm$core$Dict$get, typeName, context.bb));
		} else {
			if (!moduleName.b.b) {
				var _v1 = A2(
					$elm$core$Dict$get,
					$jfmengels$elm_review$Review$ModuleNameLookupTable$Compute$joinModuleName(moduleName),
					context.aW);
				if (!_v1.$) {
					if (_v1.a.b && (!_v1.a.b.b)) {
						var _v2 = _v1.a;
						var aliasedModuleName = _v2.a;
						return aliasedModuleName;
					} else {
						var aliases = _v1.a;
						var _v3 = A2(
							$jfmengels$elm_review$Vendor$ListExtra$find,
							function (aliasedModuleName) {
								var _v4 = A2($elm$core$Dict$get, aliasedModuleName, context.aN);
								if (!_v4.$) {
									var module_ = _v4.a;
									return A2($jfmengels$elm_review$Review$ModuleNameLookupTable$Compute$isTypeDeclaredInModule, typeName, module_);
								} else {
									return false;
								}
							},
							aliases);
						if (!_v3.$) {
							var aliasedModuleName = _v3.a;
							return aliasedModuleName;
						} else {
							return A2(
								$elm$core$Maybe$withDefault,
								moduleName,
								$elm$core$List$head(aliases));
						}
					}
				} else {
					return moduleName;
				}
			} else {
				return moduleName;
			}
		}
	});
var $jfmengels$elm_review$Review$ModuleNameLookupTable$Compute$recordUpdateToDocsType = F2(
	function (innerContext, updates) {
		return A2(
			$elm$core$List$map,
			function (_v6) {
				var _v7 = _v6.b;
				var name = _v7.a;
				var typeAnnotation = _v7.b;
				return _Utils_Tuple2(
					$stil4m$elm_syntax$Elm$Syntax$Node$value(name),
					A2($jfmengels$elm_review$Review$ModuleNameLookupTable$Compute$syntaxTypeAnnotationToDocsType, innerContext, typeAnnotation));
			},
			updates);
	});
var $jfmengels$elm_review$Review$ModuleNameLookupTable$Compute$syntaxTypeAnnotationToDocsType = F2(
	function (innerContext, _v0) {
		var typeAnnotation = _v0.b;
		switch (typeAnnotation.$) {
			case 0:
				var name = typeAnnotation.a;
				return $elm$project_metadata_utils$Elm$Type$Var(name);
			case 1:
				var _v2 = typeAnnotation.a;
				var _v3 = _v2.b;
				var moduleName = _v3.a;
				var typeName = _v3.b;
				var typeParameters = typeAnnotation.b;
				var realModuleName = A3($jfmengels$elm_review$Review$ModuleNameLookupTable$Compute$moduleNameForType, innerContext, typeName, moduleName);
				return A2(
					$elm$project_metadata_utils$Elm$Type$Type,
					A2($elm$core$String$join, '.', realModuleName) + ('.' + typeName),
					A2(
						$elm$core$List$map,
						$jfmengels$elm_review$Review$ModuleNameLookupTable$Compute$syntaxTypeAnnotationToDocsType(innerContext),
						typeParameters));
			case 2:
				return $elm$project_metadata_utils$Elm$Type$Tuple(_List_Nil);
			case 3:
				var list = typeAnnotation.a;
				return $elm$project_metadata_utils$Elm$Type$Tuple(
					A2(
						$elm$core$List$map,
						$jfmengels$elm_review$Review$ModuleNameLookupTable$Compute$syntaxTypeAnnotationToDocsType(innerContext),
						list));
			case 4:
				var updates = typeAnnotation.a;
				return A2(
					$elm$project_metadata_utils$Elm$Type$Record,
					A2($jfmengels$elm_review$Review$ModuleNameLookupTable$Compute$recordUpdateToDocsType, innerContext, updates),
					$elm$core$Maybe$Nothing);
			case 5:
				var _v4 = typeAnnotation.a;
				var generic = _v4.b;
				var _v5 = typeAnnotation.b;
				var updates = _v5.b;
				return A2(
					$elm$project_metadata_utils$Elm$Type$Record,
					A2($jfmengels$elm_review$Review$ModuleNameLookupTable$Compute$recordUpdateToDocsType, innerContext, updates),
					$elm$core$Maybe$Just(generic));
			default:
				var left = typeAnnotation.a;
				var right = typeAnnotation.b;
				return A2(
					$elm$project_metadata_utils$Elm$Type$Lambda,
					A2($jfmengels$elm_review$Review$ModuleNameLookupTable$Compute$syntaxTypeAnnotationToDocsType, innerContext, left),
					A2($jfmengels$elm_review$Review$ModuleNameLookupTable$Compute$syntaxTypeAnnotationToDocsType, innerContext, right));
		}
	});
var $jfmengels$elm_review$Review$ModuleNameLookupTable$Compute$convertTypeSignatureToDocsType = F2(
	function (innerContext, maybeSignature) {
		if (!maybeSignature.$) {
			var signature = maybeSignature.a;
			return A2(
				$jfmengels$elm_review$Review$ModuleNameLookupTable$Compute$syntaxTypeAnnotationToDocsType,
				innerContext,
				$stil4m$elm_syntax$Elm$Syntax$Node$value(signature).ek);
		} else {
			return $elm$project_metadata_utils$Elm$Type$Tuple(_List_Nil);
		}
	});
var $jfmengels$elm_review$Review$ModuleNameLookupTable$Compute$registerExposedValue = F3(
	function (_function, name, innerContext) {
		return _Utils_update(
			innerContext,
			{
				b0: A2(
					$elm$core$List$cons,
					{
						bq: function () {
							var _v0 = _function.cL;
							if (!_v0.$) {
								var strNode = _v0.a;
								return $stil4m$elm_syntax$Elm$Syntax$Node$value(strNode);
							} else {
								return '';
							}
						}(),
						fe: name,
						c9: A2($jfmengels$elm_review$Review$ModuleNameLookupTable$Compute$convertTypeSignatureToDocsType, innerContext, _function.fD)
					},
					innerContext.b0)
			});
	});
var $jfmengels$elm_review$Review$ModuleNameLookupTable$Compute$registerIfExposed = F3(
	function (registerFn, name, innerContext) {
		return (innerContext.cj || A2($elm$core$Set$member, name, innerContext.ci)) ? A2(registerFn, name, innerContext) : innerContext;
	});
var $jfmengels$elm_review$Review$ModuleNameLookupTable$Compute$registerDeclaration = F2(
	function (declaration, innerContext) {
		var _v0 = $stil4m$elm_syntax$Elm$Syntax$Node$value(declaration);
		switch (_v0.$) {
			case 0:
				var _function = _v0.a;
				var nameNode = $stil4m$elm_syntax$Elm$Syntax$Node$value(_function.dm).fe;
				return A3(
					$jfmengels$elm_review$Review$ModuleNameLookupTable$Compute$registerIfExposed,
					$jfmengels$elm_review$Review$ModuleNameLookupTable$Compute$registerExposedValue(_function),
					$stil4m$elm_syntax$Elm$Syntax$Node$value(nameNode),
					A2(
						$jfmengels$elm_review$Review$ModuleNameLookupTable$Compute$addToScope,
						{dV: nameNode, aR: 0},
						innerContext));
			case 1:
				var alias = _v0.a;
				return A3(
					$jfmengels$elm_review$Review$ModuleNameLookupTable$Compute$registerIfExposed,
					$jfmengels$elm_review$Review$ModuleNameLookupTable$Compute$registerExposedTypeAlias,
					$stil4m$elm_syntax$Elm$Syntax$Node$value(alias.fe),
					function (ctx) {
						var _v1 = $stil4m$elm_syntax$Elm$Syntax$Node$value(alias.ek);
						if (_v1.$ === 4) {
							return A2(
								$jfmengels$elm_review$Review$ModuleNameLookupTable$Compute$addToScope,
								{dV: alias.fe, aR: 0},
								ctx);
						} else {
							return ctx;
						}
					}(
						_Utils_update(
							innerContext,
							{
								be: A2(
									$elm$core$Set$insert,
									$stil4m$elm_syntax$Elm$Syntax$Node$value(alias.fe),
									innerContext.be)
							})));
			case 2:
				var name = _v0.a.fe;
				var constructors = _v0.a.eI;
				return A3(
					$jfmengels$elm_review$Review$ModuleNameLookupTable$Compute$registerIfExposed,
					$jfmengels$elm_review$Review$ModuleNameLookupTable$Compute$registerExposedCustomType(constructors),
					$stil4m$elm_syntax$Elm$Syntax$Node$value(name),
					A3(
						$elm$core$List$foldl,
						F2(
							function (constructor, innerContext_) {
								var constructorName = $stil4m$elm_syntax$Elm$Syntax$Node$value(constructor).fe;
								return A2(
									$jfmengels$elm_review$Review$ModuleNameLookupTable$Compute$addToScope,
									{dV: constructorName, aR: 1},
									innerContext_);
							}),
						_Utils_update(
							innerContext,
							{
								be: A2(
									$elm$core$Set$insert,
									$stil4m$elm_syntax$Elm$Syntax$Node$value(name),
									innerContext.be)
							}),
						constructors));
			case 3:
				var signature = _v0.a;
				return A3(
					$jfmengels$elm_review$Review$ModuleNameLookupTable$Compute$registerIfExposed,
					$jfmengels$elm_review$Review$ModuleNameLookupTable$Compute$registerExposedValue(
						{
							cL: $elm$core$Maybe$Nothing,
							fD: $elm$core$Maybe$Just(
								A2(
									$stil4m$elm_syntax$Elm$Syntax$Node$Node,
									$stil4m$elm_syntax$Elm$Syntax$Node$range(declaration),
									signature))
						}),
					$stil4m$elm_syntax$Elm$Syntax$Node$value(signature.fe),
					A2(
						$jfmengels$elm_review$Review$ModuleNameLookupTable$Compute$addToScope,
						{dV: signature.fe, aR: 5},
						innerContext));
			case 4:
				return innerContext;
			default:
				return innerContext;
		}
	});
var $jfmengels$elm_review$Review$ModuleNameLookupTable$Compute$declarationListVisitor = F2(
	function (declarations, innerContext) {
		return A3($elm$core$List$foldl, $jfmengels$elm_review$Review$ModuleNameLookupTable$Compute$registerDeclaration, innerContext, declarations);
	});
var $jfmengels$elm_review$Review$ModuleNameLookupTable$Compute$createFakeImport = function (_v0) {
	var moduleName = _v0.cv;
	var moduleAlias = _v0.fb;
	var exposingList = _v0.cN;
	return A2(
		$stil4m$elm_syntax$Elm$Syntax$Node$Node,
		$stil4m$elm_syntax$Elm$Syntax$Range$emptyRange,
		{
			cN: A2(
				$elm$core$Maybe$map,
				$stil4m$elm_syntax$Elm$Syntax$Node$Node($stil4m$elm_syntax$Elm$Syntax$Range$emptyRange),
				exposingList),
			fb: A2(
				$elm$core$Maybe$map,
				A2(
					$elm$core$Basics$composeR,
					$elm$core$List$singleton,
					$stil4m$elm_syntax$Elm$Syntax$Node$Node($stil4m$elm_syntax$Elm$Syntax$Range$emptyRange)),
				moduleAlias),
			cv: A2($stil4m$elm_syntax$Elm$Syntax$Node$Node, $stil4m$elm_syntax$Elm$Syntax$Range$emptyRange, moduleName)
		});
};
var $jfmengels$elm_review$Review$ModuleNameLookupTable$Compute$elmCorePrelude = function () {
	var explicit = function (exposed) {
		return $elm$core$Maybe$Just(
			$stil4m$elm_syntax$Elm$Syntax$Exposing$Explicit(
				A2(
					$elm$core$List$map,
					$stil4m$elm_syntax$Elm$Syntax$Node$Node($stil4m$elm_syntax$Elm$Syntax$Range$emptyRange),
					exposed)));
	};
	return _List_fromArray(
		[
			$jfmengels$elm_review$Review$ModuleNameLookupTable$Compute$createFakeImport(
			{
				cN: $elm$core$Maybe$Just(
					$stil4m$elm_syntax$Elm$Syntax$Exposing$All($stil4m$elm_syntax$Elm$Syntax$Range$emptyRange)),
				fb: $elm$core$Maybe$Nothing,
				cv: _List_fromArray(
					['Basics'])
			}),
			$jfmengels$elm_review$Review$ModuleNameLookupTable$Compute$createFakeImport(
			{
				cN: explicit(
					_List_fromArray(
						[
							$stil4m$elm_syntax$Elm$Syntax$Exposing$TypeExpose(
							{fe: 'List', fo: $elm$core$Maybe$Nothing}),
							$stil4m$elm_syntax$Elm$Syntax$Exposing$InfixExpose('::')
						])),
				fb: $elm$core$Maybe$Nothing,
				cv: _List_fromArray(
					['List'])
			}),
			$jfmengels$elm_review$Review$ModuleNameLookupTable$Compute$createFakeImport(
			{
				cN: explicit(
					_List_fromArray(
						[
							$stil4m$elm_syntax$Elm$Syntax$Exposing$TypeExpose(
							{
								fe: 'Maybe',
								fo: $elm$core$Maybe$Just($stil4m$elm_syntax$Elm$Syntax$Range$emptyRange)
							})
						])),
				fb: $elm$core$Maybe$Nothing,
				cv: _List_fromArray(
					['Maybe'])
			}),
			$jfmengels$elm_review$Review$ModuleNameLookupTable$Compute$createFakeImport(
			{
				cN: explicit(
					_List_fromArray(
						[
							$stil4m$elm_syntax$Elm$Syntax$Exposing$TypeExpose(
							{
								fe: 'Result',
								fo: $elm$core$Maybe$Just($stil4m$elm_syntax$Elm$Syntax$Range$emptyRange)
							})
						])),
				fb: $elm$core$Maybe$Nothing,
				cv: _List_fromArray(
					['Result'])
			}),
			$jfmengels$elm_review$Review$ModuleNameLookupTable$Compute$createFakeImport(
			{
				cN: explicit(
					_List_fromArray(
						[
							$stil4m$elm_syntax$Elm$Syntax$Exposing$TypeExpose(
							{fe: 'String', fo: $elm$core$Maybe$Nothing})
						])),
				fb: $elm$core$Maybe$Nothing,
				cv: _List_fromArray(
					['String'])
			}),
			$jfmengels$elm_review$Review$ModuleNameLookupTable$Compute$createFakeImport(
			{
				cN: explicit(
					_List_fromArray(
						[
							$stil4m$elm_syntax$Elm$Syntax$Exposing$TypeExpose(
							{fe: 'Char', fo: $elm$core$Maybe$Nothing})
						])),
				fb: $elm$core$Maybe$Nothing,
				cv: _List_fromArray(
					['Char'])
			}),
			$jfmengels$elm_review$Review$ModuleNameLookupTable$Compute$createFakeImport(
			{
				cN: $elm$core$Maybe$Nothing,
				fb: $elm$core$Maybe$Nothing,
				cv: _List_fromArray(
					['Tuple'])
			}),
			$jfmengels$elm_review$Review$ModuleNameLookupTable$Compute$createFakeImport(
			{
				cN: $elm$core$Maybe$Nothing,
				fb: $elm$core$Maybe$Nothing,
				cv: _List_fromArray(
					['Debug'])
			}),
			$jfmengels$elm_review$Review$ModuleNameLookupTable$Compute$createFakeImport(
			{
				cN: explicit(
					_List_fromArray(
						[
							$stil4m$elm_syntax$Elm$Syntax$Exposing$TypeExpose(
							{fe: 'Program', fo: $elm$core$Maybe$Nothing})
						])),
				fb: $elm$core$Maybe$Nothing,
				cv: _List_fromArray(
					['Platform'])
			}),
			$jfmengels$elm_review$Review$ModuleNameLookupTable$Compute$createFakeImport(
			{
				cN: explicit(
					_List_fromArray(
						[
							$stil4m$elm_syntax$Elm$Syntax$Exposing$TypeExpose(
							{fe: 'Cmd', fo: $elm$core$Maybe$Nothing})
						])),
				fb: $elm$core$Maybe$Just('Cmd'),
				cv: _List_fromArray(
					['Platform', 'Cmd'])
			}),
			$jfmengels$elm_review$Review$ModuleNameLookupTable$Compute$createFakeImport(
			{
				cN: explicit(
					_List_fromArray(
						[
							$stil4m$elm_syntax$Elm$Syntax$Exposing$TypeExpose(
							{fe: 'Sub', fo: $elm$core$Maybe$Nothing})
						])),
				fb: $elm$core$Maybe$Just('Sub'),
				cv: _List_fromArray(
					['Platform', 'Sub'])
			})
		]);
}();
var $jfmengels$elm_review$Review$ModuleNameLookupTable$Compute$registerImportAlias = F2(
	function (import_, innerContext) {
		var _v0 = import_.fb;
		if (_v0.$ === 1) {
			var moduleName = $stil4m$elm_syntax$Elm$Syntax$Node$value(import_.cv);
			if (moduleName.b && (!moduleName.b.b)) {
				var singleSegmentModuleName = moduleName.a;
				return _Utils_update(
					innerContext,
					{
						aW: A3(
							$elm$core$Dict$update,
							singleSegmentModuleName,
							function (previousValue) {
								return $elm$core$Maybe$Just(
									A2(
										$elm$core$List$cons,
										moduleName,
										A2($elm$core$Maybe$withDefault, _List_Nil, previousValue)));
							},
							innerContext.aW)
					});
			} else {
				return innerContext;
			}
		} else {
			var alias = _v0.a;
			return _Utils_update(
				innerContext,
				{
					aW: A3(
						$elm$core$Dict$update,
						$jfmengels$elm_review$Review$ModuleNameLookupTable$Compute$joinModuleName(
							$stil4m$elm_syntax$Elm$Syntax$Node$value(alias)),
						function (previousValue) {
							return $elm$core$Maybe$Just(
								A2(
									$elm$core$List$cons,
									$stil4m$elm_syntax$Elm$Syntax$Node$value(import_.cv),
									A2($elm$core$Maybe$withDefault, _List_Nil, previousValue)));
						},
						innerContext.aW)
				});
		}
	});
var $jfmengels$elm_review$Review$ModuleNameLookupTable$Compute$typesFromExposingList = function (topLevelExpose) {
	var _v0 = $stil4m$elm_syntax$Elm$Syntax$Node$value(topLevelExpose);
	switch (_v0.$) {
		case 0:
			return $elm$core$Maybe$Nothing;
		case 1:
			return $elm$core$Maybe$Nothing;
		case 2:
			var name = _v0.a;
			return $elm$core$Maybe$Just(name);
		default:
			var name = _v0.a.fe;
			return $elm$core$Maybe$Just(name);
	}
};
var $jfmengels$elm_review$Review$ModuleNameLookupTable$Compute$valuesFromExposingList = F4(
	function (moduleName, module_, topLevelExposeList, acc) {
		valuesFromExposingList:
		while (true) {
			if (!topLevelExposeList.b) {
				return acc;
			} else {
				var topLevelExpose = topLevelExposeList.a;
				var rest = topLevelExposeList.b;
				var _v1 = $stil4m$elm_syntax$Elm$Syntax$Node$value(topLevelExpose);
				switch (_v1.$) {
					case 0:
						var operator = _v1.a;
						var $temp$moduleName = moduleName,
							$temp$module_ = module_,
							$temp$topLevelExposeList = rest,
							$temp$acc = A3($elm$core$Dict$insert, operator, moduleName, acc);
						moduleName = $temp$moduleName;
						module_ = $temp$module_;
						topLevelExposeList = $temp$topLevelExposeList;
						acc = $temp$acc;
						continue valuesFromExposingList;
					case 1:
						var _function = _v1.a;
						var $temp$moduleName = moduleName,
							$temp$module_ = module_,
							$temp$topLevelExposeList = rest,
							$temp$acc = A3($elm$core$Dict$insert, _function, moduleName, acc);
						moduleName = $temp$moduleName;
						module_ = $temp$module_;
						topLevelExposeList = $temp$topLevelExposeList;
						acc = $temp$acc;
						continue valuesFromExposingList;
					case 2:
						var name = _v1.a;
						if (A2(
							$elm$core$List$any,
							function (alias) {
								return _Utils_eq(alias.fe, name);
							},
							module_.dc)) {
							var $temp$moduleName = moduleName,
								$temp$module_ = module_,
								$temp$topLevelExposeList = rest,
								$temp$acc = A3($elm$core$Dict$insert, name, moduleName, acc);
							moduleName = $temp$moduleName;
							module_ = $temp$module_;
							topLevelExposeList = $temp$topLevelExposeList;
							acc = $temp$acc;
							continue valuesFromExposingList;
						} else {
							var $temp$moduleName = moduleName,
								$temp$module_ = module_,
								$temp$topLevelExposeList = rest,
								$temp$acc = acc;
							moduleName = $temp$moduleName;
							module_ = $temp$module_;
							topLevelExposeList = $temp$topLevelExposeList;
							acc = $temp$acc;
							continue valuesFromExposingList;
						}
					default:
						var name = _v1.a.fe;
						var open = _v1.a.fo;
						if (!open.$) {
							var newAcc = A3(
								$elm$core$List$foldl,
								F2(
									function (union, subAcc) {
										return _Utils_eq(union.fe, name) ? A3(
											$elm$core$List$foldl,
											F2(
												function (_v3, subSubAcc) {
													var tag = _v3.a;
													return A3($elm$core$Dict$insert, tag, moduleName, subSubAcc);
												}),
											subAcc,
											union.fN) : subAcc;
									}),
								acc,
								module_.el);
							var $temp$moduleName = moduleName,
								$temp$module_ = module_,
								$temp$topLevelExposeList = rest,
								$temp$acc = newAcc;
							moduleName = $temp$moduleName;
							module_ = $temp$module_;
							topLevelExposeList = $temp$topLevelExposeList;
							acc = $temp$acc;
							continue valuesFromExposingList;
						} else {
							var $temp$moduleName = moduleName,
								$temp$module_ = module_,
								$temp$topLevelExposeList = rest,
								$temp$acc = acc;
							moduleName = $temp$moduleName;
							module_ = $temp$module_;
							topLevelExposeList = $temp$topLevelExposeList;
							acc = $temp$acc;
							continue valuesFromExposingList;
						}
				}
			}
		}
	});
var $jfmengels$elm_review$Review$ModuleNameLookupTable$Compute$registerImportExposed = F2(
	function (import_, innerContext) {
		var _v0 = A2($elm$core$Maybe$map, $stil4m$elm_syntax$Elm$Syntax$Node$value, import_.cN);
		if (_v0.$ === 1) {
			return innerContext;
		} else {
			var exposing_ = _v0.a;
			var moduleName = $stil4m$elm_syntax$Elm$Syntax$Node$value(import_.cv);
			var module_ = A2(
				$elm$core$Maybe$withDefault,
				{
					dc: _List_Nil,
					dh: _List_Nil,
					bq: '',
					fe: $jfmengels$elm_review$Review$ModuleNameLookupTable$Compute$joinModuleName(moduleName),
					el: _List_Nil,
					em: _List_Nil
				},
				A2($elm$core$Dict$get, moduleName, innerContext.aN));
			if (!exposing_.$) {
				var foldIntoDict = F2(
					function (list, dict) {
						return A3(
							$elm$core$List$foldl,
							F2(
								function (_v3, acc) {
									var name = _v3.fe;
									return A3($elm$core$Dict$insert, name, moduleName, acc);
								}),
							dict,
							list);
					});
				var importedTypes = A2(
					foldIntoDict,
					module_.dc,
					A2(foldIntoDict, module_.el, innerContext.bb));
				var foldCustomTypesIntoDict = F2(
					function (unions, dict) {
						return A3(
							$elm$core$List$foldl,
							F2(
								function (union, acc) {
									return A3(
										$elm$core$List$foldl,
										F2(
											function (_v2, subAcc) {
												var name = _v2.a;
												return A3($elm$core$Dict$insert, name, moduleName, subAcc);
											}),
										acc,
										union.fN);
								}),
							dict,
							unions);
					});
				var importedFunctions = A2(
					foldCustomTypesIntoDict,
					module_.el,
					A2(
						foldIntoDict,
						module_.dc,
						A2(
							foldIntoDict,
							module_.dh,
							A2(foldIntoDict, module_.em, innerContext.ba))));
				return _Utils_update(
					innerContext,
					{ba: importedFunctions, bb: importedTypes});
			} else {
				var topLevelExposeList = exposing_.a;
				var importedTypes = A3(
					$elm$core$List$foldl,
					F2(
						function (topLevelExpose, acc) {
							var _v4 = $jfmengels$elm_review$Review$ModuleNameLookupTable$Compute$typesFromExposingList(topLevelExpose);
							if (!_v4.$) {
								var name = _v4.a;
								return A3($elm$core$Dict$insert, name, moduleName, acc);
							} else {
								return acc;
							}
						}),
					innerContext.bb,
					topLevelExposeList);
				var importedFunctions = A4($jfmengels$elm_review$Review$ModuleNameLookupTable$Compute$valuesFromExposingList, moduleName, module_, topLevelExposeList, innerContext.ba);
				return _Utils_update(
					innerContext,
					{ba: importedFunctions, bb: importedTypes});
			}
		}
	});
var $jfmengels$elm_review$Review$ModuleNameLookupTable$Compute$importVisitor = F2(
	function (_v0, innerContext) {
		var import_ = _v0.b;
		return A2(
			$jfmengels$elm_review$Review$ModuleNameLookupTable$Compute$registerImportExposed,
			import_,
			A2($jfmengels$elm_review$Review$ModuleNameLookupTable$Compute$registerImportAlias, import_, innerContext));
	});
var $jfmengels$elm_review$Review$ModuleNameLookupTable$Compute$exposedElements = function (nodes) {
	return A3(
		$elm$core$List$foldl,
		F2(
			function (node, acc) {
				var _v0 = $stil4m$elm_syntax$Elm$Syntax$Node$value(node);
				switch (_v0.$) {
					case 1:
						var name = _v0.a;
						return A2($elm$core$Set$insert, name, acc);
					case 2:
						var name = _v0.a;
						return A2($elm$core$Set$insert, name, acc);
					case 3:
						var name = _v0.a.fe;
						return A2($elm$core$Set$insert, name, acc);
					default:
						return acc;
				}
			}),
		$elm$core$Set$empty,
		nodes);
};
var $stil4m$elm_syntax$Elm$Syntax$Module$exposingList = function (m) {
	switch (m.$) {
		case 0:
			var x = m.a;
			return $stil4m$elm_syntax$Elm$Syntax$Node$value(x.cN);
		case 1:
			var x = m.a;
			return $stil4m$elm_syntax$Elm$Syntax$Node$value(x.cN);
		default:
			var x = m.a;
			return $stil4m$elm_syntax$Elm$Syntax$Node$value(x.cN);
	}
};
var $jfmengels$elm_review$Review$ModuleNameLookupTable$Compute$moduleDefinitionVisitor = F2(
	function (node, innerContext) {
		var _v0 = $stil4m$elm_syntax$Elm$Syntax$Module$exposingList(
			$stil4m$elm_syntax$Elm$Syntax$Node$value(node));
		if (!_v0.$) {
			return _Utils_update(
				innerContext,
				{cj: true});
		} else {
			var list = _v0.a;
			return _Utils_update(
				innerContext,
				{
					ci: $jfmengels$elm_review$Review$ModuleNameLookupTable$Compute$exposedElements(list)
				});
		}
	});
var $jfmengels$elm_review$Review$ModuleNameLookupTable$Internal$toRangeLike = function (_v0) {
	var start = _v0.bQ;
	var end = _v0.bu;
	return _Utils_Tuple2((start.d0 << 16) + start.eF, (end.d0 << 16) + end.eF);
};
var $jfmengels$elm_review$Review$ModuleNameLookupTable$Internal$add = F3(
	function (range, moduleName, _v0) {
		var currentModuleName = _v0.a;
		var moduleNameLookupTable = _v0.b;
		return A2(
			$jfmengels$elm_review$Review$ModuleNameLookupTable$Internal$ModuleNameLookupTable,
			currentModuleName,
			A3(
				$elm$core$Dict$insert,
				$jfmengels$elm_review$Review$ModuleNameLookupTable$Internal$toRangeLike(range),
				moduleName,
				moduleNameLookupTable));
	});
var $jfmengels$elm_review$NonEmpty$any = F2(
	function (f, _v0) {
		var x = _v0.a;
		var xs = _v0.b;
		return f(x) || A2($elm$core$List$any, f, xs);
	});
var $jfmengels$elm_review$Review$ModuleNameLookupTable$Compute$isInScope = F2(
	function (name, scopes) {
		return A2(
			$jfmengels$elm_review$NonEmpty$any,
			A2(
				$elm$core$Basics$composeR,
				function ($) {
					return $.bf;
				},
				$elm$core$Dict$member(name)),
			scopes);
	});
var $jfmengels$elm_review$Review$ModuleNameLookupTable$Compute$isValueDeclaredInModule = F2(
	function (valueName, module_) {
		return A2(
			$elm$core$List$any,
			A2(
				$elm$core$Basics$composeR,
				function ($) {
					return $.fe;
				},
				$elm$core$Basics$eq(valueName)),
			module_.em) || (A2(
			$elm$core$List$any,
			A2(
				$elm$core$Basics$composeR,
				function ($) {
					return $.fe;
				},
				$elm$core$Basics$eq(valueName)),
			module_.dc) || A2(
			$elm$core$List$any,
			function (union) {
				return A2(
					$elm$core$List$any,
					A2(
						$elm$core$Basics$composeR,
						$elm$core$Tuple$first,
						$elm$core$Basics$eq(valueName)),
					union.fN);
			},
			module_.el));
	});
var $jfmengels$elm_review$Review$ModuleNameLookupTable$Compute$moduleNameForValue = F3(
	function (context, valueName, moduleName) {
		if (!moduleName.b) {
			return A2($jfmengels$elm_review$Review$ModuleNameLookupTable$Compute$isInScope, valueName, context.v) ? _List_Nil : A2(
				$elm$core$Maybe$withDefault,
				_List_Nil,
				A2($elm$core$Dict$get, valueName, context.ba));
		} else {
			if (!moduleName.b.b) {
				var moduleNameOrAlias = moduleName.a;
				var _v1 = A2($elm$core$Dict$get, moduleNameOrAlias, context.aW);
				if (!_v1.$) {
					if (_v1.a.b && (!_v1.a.b.b)) {
						var _v2 = _v1.a;
						var aliasedModuleName = _v2.a;
						return aliasedModuleName;
					} else {
						var aliases = _v1.a;
						var _v3 = A2(
							$jfmengels$elm_review$Vendor$ListExtra$find,
							function (aliasedModuleName) {
								var _v4 = A2($elm$core$Dict$get, aliasedModuleName, context.aN);
								if (!_v4.$) {
									var module_ = _v4.a;
									return A2($jfmengels$elm_review$Review$ModuleNameLookupTable$Compute$isValueDeclaredInModule, valueName, module_);
								} else {
									return false;
								}
							},
							aliases);
						if (!_v3.$) {
							var aliasedModuleName = _v3.a;
							return aliasedModuleName;
						} else {
							return A2(
								$elm$core$Maybe$withDefault,
								moduleName,
								$elm$core$List$head(aliases));
						}
					}
				} else {
					return moduleName;
				}
			} else {
				return moduleName;
			}
		}
	});
var $jfmengels$elm_review$Review$ModuleNameLookupTable$Compute$collectModuleNamesFromPattern = F3(
	function (context, patternsToVisit, acc) {
		collectModuleNamesFromPattern:
		while (true) {
			if (patternsToVisit.b) {
				var pattern = patternsToVisit.a;
				var restOfPatternsToVisit = patternsToVisit.b;
				var _v1 = $stil4m$elm_syntax$Elm$Syntax$Node$value(pattern);
				switch (_v1.$) {
					case 12:
						var moduleName = _v1.a.cv;
						var name = _v1.a.fe;
						var subPatterns = _v1.b;
						var $temp$context = context,
							$temp$patternsToVisit = A2($elm$core$List$append, subPatterns, restOfPatternsToVisit),
							$temp$acc = A3(
							$jfmengels$elm_review$Review$ModuleNameLookupTable$Internal$add,
							$stil4m$elm_syntax$Elm$Syntax$Node$range(pattern),
							A3($jfmengels$elm_review$Review$ModuleNameLookupTable$Compute$moduleNameForValue, context, name, moduleName),
							acc);
						context = $temp$context;
						patternsToVisit = $temp$patternsToVisit;
						acc = $temp$acc;
						continue collectModuleNamesFromPattern;
					case 9:
						var left = _v1.a;
						var right = _v1.b;
						var $temp$context = context,
							$temp$patternsToVisit = A2(
							$elm$core$List$cons,
							left,
							A2($elm$core$List$cons, right, restOfPatternsToVisit)),
							$temp$acc = acc;
						context = $temp$context;
						patternsToVisit = $temp$patternsToVisit;
						acc = $temp$acc;
						continue collectModuleNamesFromPattern;
					case 7:
						var subPatterns = _v1.a;
						var $temp$context = context,
							$temp$patternsToVisit = A2($elm$core$List$append, subPatterns, restOfPatternsToVisit),
							$temp$acc = acc;
						context = $temp$context;
						patternsToVisit = $temp$patternsToVisit;
						acc = $temp$acc;
						continue collectModuleNamesFromPattern;
					case 14:
						var subPattern = _v1.a;
						var $temp$context = context,
							$temp$patternsToVisit = A2($elm$core$List$cons, subPattern, restOfPatternsToVisit),
							$temp$acc = acc;
						context = $temp$context;
						patternsToVisit = $temp$patternsToVisit;
						acc = $temp$acc;
						continue collectModuleNamesFromPattern;
					case 13:
						var subPattern = _v1.a;
						var $temp$context = context,
							$temp$patternsToVisit = A2($elm$core$List$cons, subPattern, restOfPatternsToVisit),
							$temp$acc = acc;
						context = $temp$context;
						patternsToVisit = $temp$patternsToVisit;
						acc = $temp$acc;
						continue collectModuleNamesFromPattern;
					case 10:
						var subPatterns = _v1.a;
						var $temp$context = context,
							$temp$patternsToVisit = A2($elm$core$List$append, subPatterns, restOfPatternsToVisit),
							$temp$acc = acc;
						context = $temp$context;
						patternsToVisit = $temp$patternsToVisit;
						acc = $temp$acc;
						continue collectModuleNamesFromPattern;
					default:
						var $temp$context = context,
							$temp$patternsToVisit = restOfPatternsToVisit,
							$temp$acc = acc;
						context = $temp$context;
						patternsToVisit = $temp$patternsToVisit;
						acc = $temp$acc;
						continue collectModuleNamesFromPattern;
				}
			} else {
				return acc;
			}
		}
	});
var $jfmengels$elm_review$Vendor$ListExtra$orderIndependentMapAppend = F3(
	function (fn, left, right) {
		return A3(
			$elm$core$List$foldl,
			F2(
				function (element, acc) {
					return A2(
						$elm$core$List$cons,
						fn(element),
						acc);
				}),
			right,
			left);
	});
var $jfmengels$elm_review$Review$ModuleNameLookupTable$Compute$collectModuleNamesFromTypeAnnotation = F3(
	function (context, typeAnnotationsToVisit, acc) {
		collectModuleNamesFromTypeAnnotation:
		while (true) {
			if (typeAnnotationsToVisit.b) {
				var typeAnnotationNode = typeAnnotationsToVisit.a;
				var remainingTypeAnnotationsToVisit = typeAnnotationsToVisit.b;
				var _v1 = $stil4m$elm_syntax$Elm$Syntax$Node$value(typeAnnotationNode);
				switch (_v1.$) {
					case 1:
						var _v2 = _v1.a;
						var range = _v2.a;
						var _v3 = _v2.b;
						var moduleName = _v3.a;
						var name = _v3.b;
						var args = _v1.b;
						var $temp$context = context,
							$temp$typeAnnotationsToVisit = A2($elm$core$List$append, args, remainingTypeAnnotationsToVisit),
							$temp$acc = A3(
							$jfmengels$elm_review$Review$ModuleNameLookupTable$Internal$add,
							range,
							A3($jfmengels$elm_review$Review$ModuleNameLookupTable$Compute$moduleNameForType, context, name, moduleName),
							acc);
						context = $temp$context;
						typeAnnotationsToVisit = $temp$typeAnnotationsToVisit;
						acc = $temp$acc;
						continue collectModuleNamesFromTypeAnnotation;
					case 3:
						var nodes = _v1.a;
						var $temp$context = context,
							$temp$typeAnnotationsToVisit = A2($elm$core$List$append, nodes, remainingTypeAnnotationsToVisit),
							$temp$acc = acc;
						context = $temp$context;
						typeAnnotationsToVisit = $temp$typeAnnotationsToVisit;
						acc = $temp$acc;
						continue collectModuleNamesFromTypeAnnotation;
					case 4:
						var fields = _v1.a;
						var $temp$context = context,
							$temp$typeAnnotationsToVisit = A3(
							$jfmengels$elm_review$Vendor$ListExtra$orderIndependentMapAppend,
							function (field) {
								return $stil4m$elm_syntax$Elm$Syntax$Node$value(field).b;
							},
							fields,
							remainingTypeAnnotationsToVisit),
							$temp$acc = acc;
						context = $temp$context;
						typeAnnotationsToVisit = $temp$typeAnnotationsToVisit;
						acc = $temp$acc;
						continue collectModuleNamesFromTypeAnnotation;
					case 5:
						var fields = _v1.b;
						var $temp$context = context,
							$temp$typeAnnotationsToVisit = A3(
							$jfmengels$elm_review$Vendor$ListExtra$orderIndependentMapAppend,
							function (field) {
								return $stil4m$elm_syntax$Elm$Syntax$Node$value(field).b;
							},
							$stil4m$elm_syntax$Elm$Syntax$Node$value(fields),
							remainingTypeAnnotationsToVisit),
							$temp$acc = acc;
						context = $temp$context;
						typeAnnotationsToVisit = $temp$typeAnnotationsToVisit;
						acc = $temp$acc;
						continue collectModuleNamesFromTypeAnnotation;
					case 6:
						var left = _v1.a;
						var right = _v1.b;
						var $temp$context = context,
							$temp$typeAnnotationsToVisit = A2(
							$elm$core$List$cons,
							left,
							A2($elm$core$List$cons, right, remainingTypeAnnotationsToVisit)),
							$temp$acc = acc;
						context = $temp$context;
						typeAnnotationsToVisit = $temp$typeAnnotationsToVisit;
						acc = $temp$acc;
						continue collectModuleNamesFromTypeAnnotation;
					default:
						var $temp$context = context,
							$temp$typeAnnotationsToVisit = remainingTypeAnnotationsToVisit,
							$temp$acc = acc;
						context = $temp$context;
						typeAnnotationsToVisit = $temp$typeAnnotationsToVisit;
						acc = $temp$acc;
						continue collectModuleNamesFromTypeAnnotation;
				}
			} else {
				return acc;
			}
		}
	});
var $jfmengels$elm_review$NonEmpty$cons = F2(
	function (y, _v0) {
		var x = _v0.a;
		var xs = _v0.b;
		return A2(
			$jfmengels$elm_review$NonEmpty$Nonempty,
			y,
			A2($elm$core$List$cons, x, xs));
	});
var $jfmengels$elm_review$Review$ModuleNameLookupTable$Compute$emptyScope = {
	ce: A2(
		$stil4m$elm_syntax$Elm$Syntax$Node$Node,
		$stil4m$elm_syntax$Elm$Syntax$Range$emptyRange,
		$stil4m$elm_syntax$Elm$Syntax$Expression$Literal('root')),
	eC: _List_Nil,
	bf: $elm$core$Dict$empty
};
var $jfmengels$elm_review$Review$ModuleNameLookupTable$Compute$FunctionParameter = 2;
var $jfmengels$elm_review$Review$ModuleNameLookupTable$Compute$collectNamesFromPattern = F3(
	function (variableType, patternsToVisit, acc) {
		collectNamesFromPattern:
		while (true) {
			if (patternsToVisit.b) {
				var pattern = patternsToVisit.a;
				var restOfPatternsToVisit = patternsToVisit.b;
				var _v1 = $stil4m$elm_syntax$Elm$Syntax$Node$value(pattern);
				switch (_v1.$) {
					case 11:
						var name = _v1.a;
						var $temp$variableType = variableType,
							$temp$patternsToVisit = restOfPatternsToVisit,
							$temp$acc = A3(
							$elm$core$Dict$insert,
							name,
							{
								dV: A2(
									$stil4m$elm_syntax$Elm$Syntax$Node$Node,
									$stil4m$elm_syntax$Elm$Syntax$Node$range(pattern),
									name),
								aR: variableType
							},
							acc);
						variableType = $temp$variableType;
						patternsToVisit = $temp$patternsToVisit;
						acc = $temp$acc;
						continue collectNamesFromPattern;
					case 12:
						var subPatterns = _v1.b;
						var $temp$variableType = variableType,
							$temp$patternsToVisit = A2($elm$core$List$append, subPatterns, restOfPatternsToVisit),
							$temp$acc = acc;
						variableType = $temp$variableType;
						patternsToVisit = $temp$patternsToVisit;
						acc = $temp$acc;
						continue collectNamesFromPattern;
					case 8:
						var names = _v1.a;
						var $temp$variableType = variableType,
							$temp$patternsToVisit = restOfPatternsToVisit,
							$temp$acc = A3(
							$elm$core$List$foldl,
							F2(
								function (nameNode, subAcc) {
									return A3(
										$elm$core$Dict$insert,
										$stil4m$elm_syntax$Elm$Syntax$Node$value(nameNode),
										{dV: nameNode, aR: variableType},
										subAcc);
								}),
							acc,
							names);
						variableType = $temp$variableType;
						patternsToVisit = $temp$patternsToVisit;
						acc = $temp$acc;
						continue collectNamesFromPattern;
					case 14:
						var subPattern = _v1.a;
						var $temp$variableType = variableType,
							$temp$patternsToVisit = A2($elm$core$List$cons, subPattern, restOfPatternsToVisit),
							$temp$acc = acc;
						variableType = $temp$variableType;
						patternsToVisit = $temp$patternsToVisit;
						acc = $temp$acc;
						continue collectNamesFromPattern;
					case 13:
						var subPattern = _v1.a;
						var alias = _v1.b;
						var $temp$variableType = variableType,
							$temp$patternsToVisit = A2($elm$core$List$cons, subPattern, restOfPatternsToVisit),
							$temp$acc = A3(
							$elm$core$Dict$insert,
							$stil4m$elm_syntax$Elm$Syntax$Node$value(alias),
							{dV: alias, aR: variableType},
							acc);
						variableType = $temp$variableType;
						patternsToVisit = $temp$patternsToVisit;
						acc = $temp$acc;
						continue collectNamesFromPattern;
					case 7:
						var subPatterns = _v1.a;
						var $temp$variableType = variableType,
							$temp$patternsToVisit = A2($elm$core$List$append, subPatterns, restOfPatternsToVisit),
							$temp$acc = acc;
						variableType = $temp$variableType;
						patternsToVisit = $temp$patternsToVisit;
						acc = $temp$acc;
						continue collectNamesFromPattern;
					case 9:
						var left = _v1.a;
						var right = _v1.b;
						var $temp$variableType = variableType,
							$temp$patternsToVisit = A2(
							$elm$core$List$cons,
							left,
							A2($elm$core$List$cons, right, restOfPatternsToVisit)),
							$temp$acc = acc;
						variableType = $temp$variableType;
						patternsToVisit = $temp$patternsToVisit;
						acc = $temp$acc;
						continue collectNamesFromPattern;
					case 10:
						var subPatterns = _v1.a;
						var $temp$variableType = variableType,
							$temp$patternsToVisit = A2($elm$core$List$append, subPatterns, restOfPatternsToVisit),
							$temp$acc = acc;
						variableType = $temp$variableType;
						patternsToVisit = $temp$patternsToVisit;
						acc = $temp$acc;
						continue collectNamesFromPattern;
					default:
						var $temp$variableType = variableType,
							$temp$patternsToVisit = restOfPatternsToVisit,
							$temp$acc = acc;
						variableType = $temp$variableType;
						patternsToVisit = $temp$patternsToVisit;
						acc = $temp$acc;
						continue collectNamesFromPattern;
				}
			} else {
				return acc;
			}
		}
	});
var $jfmengels$elm_review$Review$ModuleNameLookupTable$Compute$parameters = function (patterns) {
	return A3($jfmengels$elm_review$Review$ModuleNameLookupTable$Compute$collectNamesFromPattern, 2, patterns, $elm$core$Dict$empty);
};
var $jfmengels$elm_review$Review$ModuleNameLookupTable$Compute$updateScope = F2(
	function (innerContext, scopes) {
		return _Utils_update(
			innerContext,
			{v: scopes});
	});
var $jfmengels$elm_review$Review$ModuleNameLookupTable$Compute$declarationEnterVisitor = F2(
	function (node, context) {
		var _v0 = $stil4m$elm_syntax$Elm$Syntax$Node$value(node);
		switch (_v0.$) {
			case 0:
				var _function = _v0.a;
				var newScope = _Utils_update(
					$jfmengels$elm_review$Review$ModuleNameLookupTable$Compute$emptyScope,
					{
						bf: $jfmengels$elm_review$Review$ModuleNameLookupTable$Compute$parameters(
							$stil4m$elm_syntax$Elm$Syntax$Node$value(_function.dm).es)
					});
				var newContext = A2(
					$jfmengels$elm_review$Review$ModuleNameLookupTable$Compute$updateScope,
					context,
					A2($jfmengels$elm_review$NonEmpty$cons, newScope, context.v));
				var lookupTableAfterArguments = A3(
					$jfmengels$elm_review$Review$ModuleNameLookupTable$Compute$collectModuleNamesFromPattern,
					newContext,
					$stil4m$elm_syntax$Elm$Syntax$Node$value(_function.dm).es,
					newContext.m);
				var finalLookupTable = function () {
					var _v1 = _function.fD;
					if (!_v1.$) {
						var signature = _v1.a;
						return A3(
							$jfmengels$elm_review$Review$ModuleNameLookupTable$Compute$collectModuleNamesFromTypeAnnotation,
							context,
							_List_fromArray(
								[
									$stil4m$elm_syntax$Elm$Syntax$Node$value(signature).ek
								]),
							lookupTableAfterArguments);
					} else {
						return lookupTableAfterArguments;
					}
				}();
				return _Utils_update(
					newContext,
					{m: finalLookupTable});
			case 2:
				var constructors = _v0.a.eI;
				return _Utils_update(
					context,
					{
						m: A3(
							$elm$core$List$foldl,
							F2(
								function (_v2, acc) {
									var constructor = _v2.b;
									return A3($jfmengels$elm_review$Review$ModuleNameLookupTable$Compute$collectModuleNamesFromTypeAnnotation, context, constructor.es, acc);
								}),
							context.m,
							constructors)
					});
			case 1:
				var typeAnnotation = _v0.a.ek;
				return _Utils_update(
					context,
					{
						m: A3(
							$jfmengels$elm_review$Review$ModuleNameLookupTable$Compute$collectModuleNamesFromTypeAnnotation,
							context,
							_List_fromArray(
								[typeAnnotation]),
							context.m)
					});
			case 3:
				var signature = _v0.a;
				return _Utils_update(
					context,
					{
						m: A3(
							$jfmengels$elm_review$Review$ModuleNameLookupTable$Compute$collectModuleNamesFromTypeAnnotation,
							context,
							_List_fromArray(
								[signature.ek]),
							context.m)
					});
			default:
				return context;
		}
	});
var $jfmengels$elm_review$NonEmpty$pop = function (_v0) {
	var x = _v0.a;
	var xs = _v0.b;
	if (!xs.b) {
		return A2($jfmengels$elm_review$NonEmpty$Nonempty, x, xs);
	} else {
		var y = xs.a;
		var ys = xs.b;
		return A2($jfmengels$elm_review$NonEmpty$Nonempty, y, ys);
	}
};
var $jfmengels$elm_review$Review$ModuleNameLookupTable$Compute$declarationExitVisitor = F2(
	function (node, context) {
		var _v0 = $stil4m$elm_syntax$Elm$Syntax$Node$value(node);
		if (!_v0.$) {
			return _Utils_update(
				context,
				{
					v: $jfmengels$elm_review$NonEmpty$pop(context.v)
				});
		} else {
			return context;
		}
	});
var $jfmengels$elm_review$Review$ModuleNameLookupTable$Compute$functionToExpression = function (_function) {
	return $stil4m$elm_syntax$Elm$Syntax$Node$value(_function.dm).eR;
};
var $jfmengels$elm_review$Review$ModuleNameLookupTable$Compute$expressionChildren = function (node) {
	var _v0 = $stil4m$elm_syntax$Elm$Syntax$Node$value(node);
	switch (_v0.$) {
		case 1:
			var expressions = _v0.a;
			return expressions;
		case 19:
			var elements = _v0.a;
			return elements;
		case 18:
			var fields = _v0.a;
			return A2(
				$elm$core$List$map,
				A2(
					$elm$core$Basics$composeR,
					$stil4m$elm_syntax$Elm$Syntax$Node$value,
					function (_v1) {
						var expr = _v1.b;
						return expr;
					}),
				fields);
		case 22:
			var setters = _v0.b;
			return A2(
				$elm$core$List$map,
				A2(
					$elm$core$Basics$composeR,
					$stil4m$elm_syntax$Elm$Syntax$Node$value,
					function (_v2) {
						var expr = _v2.b;
						return expr;
					}),
				setters);
		case 14:
			var expr = _v0.a;
			return _List_fromArray(
				[expr]);
		case 2:
			var direction = _v0.b;
			var left = _v0.c;
			var right = _v0.d;
			switch (direction) {
				case 0:
					return _List_fromArray(
						[left, right]);
				case 1:
					return _List_fromArray(
						[right, left]);
				default:
					return _List_fromArray(
						[left, right]);
			}
		case 4:
			var cond = _v0.a;
			var then_ = _v0.b;
			var else_ = _v0.c;
			return _List_fromArray(
				[cond, then_, else_]);
		case 15:
			var expression = _v0.a.eR;
			var declarations = _v0.a.eK;
			return A3(
				$elm$core$List$foldr,
				F2(
					function (declaration, acc) {
						var _v4 = $stil4m$elm_syntax$Elm$Syntax$Node$value(declaration);
						if (!_v4.$) {
							var _function = _v4.a;
							return A2(
								$elm$core$List$cons,
								$jfmengels$elm_review$Review$ModuleNameLookupTable$Compute$functionToExpression(_function),
								acc);
						} else {
							var expr = _v4.b;
							return A2($elm$core$List$cons, expr, acc);
						}
					}),
				_List_fromArray(
					[expression]),
				declarations);
		case 16:
			var expression = _v0.a.eR;
			var cases = _v0.a.eC;
			return A2(
				$elm$core$List$cons,
				expression,
				A2(
					$elm$core$List$map,
					function (_v5) {
						var caseExpression = _v5.b;
						return caseExpression;
					},
					cases));
		case 17:
			var expression = _v0.a.eR;
			return _List_fromArray(
				[expression]);
		case 13:
			var expressions = _v0.a;
			return expressions;
		case 10:
			var expr = _v0.a;
			return _List_fromArray(
				[expr]);
		case 20:
			var expr = _v0.a;
			return _List_fromArray(
				[expr]);
		default:
			return _List_Nil;
	}
};
var $jfmengels$elm_review$Review$ModuleNameLookupTable$Compute$LetVariable = 3;
var $jfmengels$elm_review$Review$ModuleNameLookupTable$Compute$PatternVariable = 4;
var $jfmengels$elm_review$Review$ModuleNameLookupTable$Compute$expressionEnterVisitor = F2(
	function (node, context) {
		var _v0 = $stil4m$elm_syntax$Elm$Syntax$Node$value(node);
		switch (_v0.$) {
			case 15:
				var declarations = _v0.a.eK;
				var newContext = A2(
					$jfmengels$elm_review$Review$ModuleNameLookupTable$Compute$updateScope,
					context,
					A3(
						$elm$core$List$foldl,
						F2(
							function (declaration, scopes) {
								var _v3 = $stil4m$elm_syntax$Elm$Syntax$Node$value(declaration);
								if (!_v3.$) {
									var _function = _v3.a;
									var nameNode = $stil4m$elm_syntax$Elm$Syntax$Node$value(_function.dm).fe;
									return A3(
										$jfmengels$elm_review$Review$ModuleNameLookupTable$Compute$registerVariable,
										{dV: nameNode, aR: 3},
										$stil4m$elm_syntax$Elm$Syntax$Node$value(nameNode),
										scopes);
								} else {
									return scopes;
								}
							}),
						A2($jfmengels$elm_review$NonEmpty$cons, $jfmengels$elm_review$Review$ModuleNameLookupTable$Compute$emptyScope, context.v),
						declarations));
				var lookupTable = A3(
					$elm$core$List$foldl,
					F2(
						function (declaration, acc) {
							var _v1 = $stil4m$elm_syntax$Elm$Syntax$Node$value(declaration);
							if (!_v1.$) {
								var _function = _v1.a;
								var withDeclarationModuleName = A3(
									$jfmengels$elm_review$Review$ModuleNameLookupTable$Compute$collectModuleNamesFromPattern,
									newContext,
									$stil4m$elm_syntax$Elm$Syntax$Node$value(_function.dm).es,
									acc);
								var _v2 = _function.fD;
								if (!_v2.$) {
									var signature = _v2.a;
									return A3(
										$jfmengels$elm_review$Review$ModuleNameLookupTable$Compute$collectModuleNamesFromTypeAnnotation,
										context,
										_List_fromArray(
											[
												$stil4m$elm_syntax$Elm$Syntax$Node$value(signature).ek
											]),
										withDeclarationModuleName);
								} else {
									return withDeclarationModuleName;
								}
							} else {
								var pattern = _v1.a;
								return A3(
									$jfmengels$elm_review$Review$ModuleNameLookupTable$Compute$collectModuleNamesFromPattern,
									newContext,
									_List_fromArray(
										[pattern]),
									acc);
							}
						}),
					newContext.m,
					declarations);
				return _Utils_update(
					newContext,
					{m: lookupTable});
			case 16:
				var caseBlock = _v0.a;
				var _v4 = A3(
					$elm$core$List$foldl,
					F2(
						function (_v5, _v6) {
							var pattern = _v5.a;
							var expression = _v5.b;
							var casesAcc = _v6.a;
							var lookupTableAcc = _v6.b;
							return _Utils_Tuple2(
								A2(
									$elm$core$List$cons,
									_Utils_Tuple2(
										expression,
										A3(
											$jfmengels$elm_review$Review$ModuleNameLookupTable$Compute$collectNamesFromPattern,
											4,
											_List_fromArray(
												[pattern]),
											$elm$core$Dict$empty)),
									casesAcc),
								A3(
									$jfmengels$elm_review$Review$ModuleNameLookupTable$Compute$collectModuleNamesFromPattern,
									context,
									_List_fromArray(
										[pattern]),
									lookupTableAcc));
						}),
					_Utils_Tuple2(_List_Nil, context.m),
					caseBlock.eC);
				var cases = _v4.a;
				var lookupTable = _v4.b;
				return _Utils_update(
					context,
					{
						m: lookupTable,
						v: A2(
							$jfmengels$elm_review$NonEmpty$mapHead,
							function (scope) {
								return _Utils_update(
									scope,
									{eC: cases});
							},
							context.v)
					});
			case 3:
				var moduleName = _v0.a;
				var name = _v0.b;
				return _Utils_update(
					context,
					{
						m: A3(
							$jfmengels$elm_review$Review$ModuleNameLookupTable$Internal$add,
							$stil4m$elm_syntax$Elm$Syntax$Node$range(node),
							A3($jfmengels$elm_review$Review$ModuleNameLookupTable$Compute$moduleNameForValue, context, name, moduleName),
							context.m)
					});
			case 22:
				var _v7 = _v0.a;
				var range = _v7.a;
				var name = _v7.b;
				return _Utils_update(
					context,
					{
						m: A3(
							$jfmengels$elm_review$Review$ModuleNameLookupTable$Internal$add,
							range,
							A3($jfmengels$elm_review$Review$ModuleNameLookupTable$Compute$moduleNameForValue, context, name, _List_Nil),
							context.m)
					});
			case 17:
				var args = _v0.a.er;
				return _Utils_update(
					context,
					{
						m: A3($jfmengels$elm_review$Review$ModuleNameLookupTable$Compute$collectModuleNamesFromPattern, context, args, context.m)
					});
			case 5:
				var op = _v0.a;
				return _Utils_update(
					context,
					{
						m: A3(
							$jfmengels$elm_review$Review$ModuleNameLookupTable$Internal$add,
							$stil4m$elm_syntax$Elm$Syntax$Node$range(node),
							A3($jfmengels$elm_review$Review$ModuleNameLookupTable$Compute$moduleNameForValue, context, op, _List_Nil),
							context.m)
					});
			case 2:
				var op = _v0.a;
				return _Utils_update(
					context,
					{
						m: A3(
							$jfmengels$elm_review$Review$ModuleNameLookupTable$Internal$add,
							$stil4m$elm_syntax$Elm$Syntax$Node$range(node),
							A3($jfmengels$elm_review$Review$ModuleNameLookupTable$Compute$moduleNameForValue, context, op, _List_Nil),
							context.m)
					});
			default:
				return context;
		}
	});
var $jfmengels$elm_review$Review$ModuleNameLookupTable$Compute$expressionExitVisitor = F2(
	function (node, context) {
		var _v0 = $stil4m$elm_syntax$Elm$Syntax$Node$value(node);
		switch (_v0.$) {
			case 15:
				return _Utils_update(
					context,
					{
						v: $jfmengels$elm_review$NonEmpty$pop(context.v)
					});
			case 16:
				return _Utils_update(
					context,
					{
						v: A2(
							$jfmengels$elm_review$NonEmpty$mapHead,
							function (scope) {
								return _Utils_update(
									scope,
									{eC: _List_Nil});
							},
							context.v)
					});
			default:
				return context;
		}
	});
var $jfmengels$elm_review$NonEmpty$head = function (_v0) {
	var x = _v0.a;
	return x;
};
var $jfmengels$elm_review$Review$ModuleNameLookupTable$Compute$popScopeEnter = F2(
	function (node, context) {
		var currentScope = $jfmengels$elm_review$NonEmpty$head(context.v);
		var caseExpression = A2(
			$jfmengels$elm_review$Vendor$ListExtra$find,
			function (_v2) {
				var expressionNode = _v2.a;
				return _Utils_eq(node, expressionNode);
			},
			currentScope.eC);
		if (caseExpression.$ === 1) {
			return context;
		} else {
			var _v1 = caseExpression.a;
			var names = _v1.b;
			return _Utils_update(
				context,
				{
					v: A2(
						$jfmengels$elm_review$NonEmpty$cons,
						_Utils_update(
							$jfmengels$elm_review$Review$ModuleNameLookupTable$Compute$emptyScope,
							{ce: node, bf: names}),
						context.v)
				});
		}
	});
var $jfmengels$elm_review$Review$ModuleNameLookupTable$Compute$popScopeExit = F2(
	function (node, context) {
		var currentScope = $jfmengels$elm_review$NonEmpty$head(context.v);
		return _Utils_eq(node, currentScope.ce) ? _Utils_update(
			context,
			{
				v: $jfmengels$elm_review$NonEmpty$pop(context.v)
			}) : context;
	});
var $jfmengels$elm_review$Review$ModuleNameLookupTable$Compute$visitExpressions = F2(
	function (node, context) {
		return A2(
			$jfmengels$elm_review$Review$ModuleNameLookupTable$Compute$expressionExitVisitor,
			node,
			A2(
				$jfmengels$elm_review$Review$ModuleNameLookupTable$Compute$popScopeExit,
				node,
				function (newContext) {
					return A3(
						$elm$core$List$foldl,
						$jfmengels$elm_review$Review$ModuleNameLookupTable$Compute$visitExpressions,
						newContext,
						$jfmengels$elm_review$Review$ModuleNameLookupTable$Compute$expressionChildren(node));
				}(
					A2(
						$jfmengels$elm_review$Review$ModuleNameLookupTable$Compute$expressionEnterVisitor,
						node,
						A2($jfmengels$elm_review$Review$ModuleNameLookupTable$Compute$popScopeEnter, node, context)))));
	});
var $jfmengels$elm_review$Review$ModuleNameLookupTable$Compute$visitDeclarationsAndExpressions = F2(
	function (declarations, context) {
		return A3(
			$elm$core$List$foldl,
			F2(
				function (declaration, ctx) {
					var _v0 = $stil4m$elm_syntax$Elm$Syntax$Node$value(declaration);
					if (!_v0.$) {
						var _function = _v0.a;
						return A2(
							$jfmengels$elm_review$Review$ModuleNameLookupTable$Compute$declarationExitVisitor,
							declaration,
							A2(
								$jfmengels$elm_review$Review$ModuleNameLookupTable$Compute$visitExpressions,
								$stil4m$elm_syntax$Elm$Syntax$Node$value(_function.dm).eR,
								A2($jfmengels$elm_review$Review$ModuleNameLookupTable$Compute$declarationEnterVisitor, declaration, ctx)));
					} else {
						return A2($jfmengels$elm_review$Review$ModuleNameLookupTable$Compute$declarationEnterVisitor, declaration, ctx);
					}
				}),
			context,
			declarations);
	});
var $jfmengels$elm_review$Review$ModuleNameLookupTable$Compute$collectLookupTable = F2(
	function (ast, context) {
		return A2(
			$jfmengels$elm_review$Review$ModuleNameLookupTable$Compute$visitDeclarationsAndExpressions,
			ast.eK,
			A2(
				$jfmengels$elm_review$Review$ModuleNameLookupTable$Compute$declarationListVisitor,
				ast.eK,
				A2(
					$jfmengels$elm_review$Review$ModuleNameLookupTable$Compute$moduleDefinitionVisitor,
					ast.fc,
					A3(
						$elm$core$List$foldl,
						$jfmengels$elm_review$Review$ModuleNameLookupTable$Compute$importVisitor,
						context,
						_Utils_ap($jfmengels$elm_review$Review$ModuleNameLookupTable$Compute$elmCorePrelude, ast.e1)))));
	});
var $jfmengels$elm_review$Review$ModuleNameLookupTable$Compute$computeDependencies = function (project) {
	return A3(
		$elm$core$List$foldl,
		F2(
			function (dependencyModule, acc) {
				return A3(
					$elm$core$Dict$insert,
					A2($elm$core$String$split, '.', dependencyModule.fe),
					dependencyModule,
					acc);
			}),
		$elm$core$Dict$empty,
		A3(
			$elm$core$Dict$foldl,
			F3(
				function (_v0, dep, acc) {
					return A2(
						$elm$core$List$append,
						$jfmengels$elm_review$Review$Project$Dependency$modules(dep),
						acc);
				}),
			_List_Nil,
			$jfmengels$elm_review$Review$Project$Valid$directDependencies(project)));
};
var $jfmengels$elm_review$NonEmpty$fromElement = function (x) {
	return A2($jfmengels$elm_review$NonEmpty$Nonempty, x, _List_Nil);
};
var $jfmengels$elm_review$Review$ModuleNameLookupTable$Compute$fromProjectToModule = F2(
	function (moduleName, modules) {
		return {
			b_: _List_Nil,
			ci: $elm$core$Set$empty,
			b$: _List_Nil,
			b0: _List_Nil,
			cj: false,
			aW: $elm$core$Dict$empty,
			ba: $elm$core$Dict$empty,
			bb: $elm$core$Dict$empty,
			be: $elm$core$Set$empty,
			m: $jfmengels$elm_review$Review$ModuleNameLookupTable$Internal$empty(moduleName),
			aN: modules,
			v: $jfmengels$elm_review$NonEmpty$fromElement($jfmengels$elm_review$Review$ModuleNameLookupTable$Compute$emptyScope)
		};
	});
var $jfmengels$elm_review$Review$Project$Valid$projectCache = function (_v0) {
	var project = _v0;
	return project.b8;
};
var $jfmengels$elm_review$Review$Project$Valid$updateProjectCache = F2(
	function (projectCache_, _v0) {
		var project = _v0;
		return _Utils_update(
			project,
			{b8: projectCache_});
	});
var $jfmengels$elm_review$Review$ModuleNameLookupTable$Compute$compute = F3(
	function (moduleName, module_, project) {
		var projectCache = $jfmengels$elm_review$Review$Project$Valid$projectCache(project);
		var elmJsonRaw = A2(
			$elm$core$Maybe$map,
			function ($) {
				return $.bN;
			},
			$jfmengels$elm_review$Review$Project$Valid$elmJson(project));
		var deps = function () {
			var _v6 = projectCache.$7;
			if (!_v6.$) {
				var cache = _v6.a;
				return _Utils_eq(elmJsonRaw, cache.du) ? cache.dp : $jfmengels$elm_review$Review$ModuleNameLookupTable$Compute$computeDependencies(project);
			} else {
				return $jfmengels$elm_review$Review$ModuleNameLookupTable$Compute$computeDependencies(project);
			}
		}();
		var imported = A3(
			$elm$core$List$foldl,
			F2(
				function (_v3, acc) {
					var import_ = _v3.b;
					var importedModuleName = $stil4m$elm_syntax$Elm$Syntax$Node$value(import_.cv);
					var maybeImportedModule = function () {
						var _v5 = A2($elm$core$Dict$get, importedModuleName, projectCache.aN);
						if (!_v5.$) {
							var importedModule = _v5.a;
							return $elm$core$Maybe$Just(importedModule);
						} else {
							return A2($elm$core$Dict$get, importedModuleName, deps);
						}
					}();
					if (!maybeImportedModule.$) {
						var importedModule = maybeImportedModule.a;
						return A3($elm$core$Dict$insert, importedModuleName, importedModule, acc);
					} else {
						return acc;
					}
				}),
			$elm$core$Dict$empty,
			_Utils_ap($jfmengels$elm_review$Review$ModuleNameLookupTable$Compute$elmCorePrelude, module_.eu.e1));
		var computeLookupTableForModule = function (_v2) {
			var moduleContext = A2(
				$jfmengels$elm_review$Review$ModuleNameLookupTable$Compute$collectLookupTable,
				module_.eu,
				A2($jfmengels$elm_review$Review$ModuleNameLookupTable$Compute$fromProjectToModule, moduleName, imported));
			return _Utils_Tuple2(
				moduleContext.m,
				A3(
					$elm$core$Dict$insert,
					moduleName,
					{
						dc: moduleContext.b_,
						dh: _List_Nil,
						bq: '',
						fe: A2($elm$core$String$join, '.', moduleName),
						el: moduleContext.b$,
						em: moduleContext.b0
					},
					projectCache.aN));
		};
		var cacheKey = {e0: imported, fE: module_.fE};
		var _v0 = function () {
			var _v1 = A2($elm$core$Dict$get, moduleName, projectCache.cY);
			if (!_v1.$) {
				var cache = _v1.a;
				return _Utils_eq(cache.b5, cacheKey) ? _Utils_Tuple2(cache.m, projectCache.aN) : computeLookupTableForModule(0);
			} else {
				return computeLookupTableForModule(0);
			}
		}();
		var lookupTable = _v0.a;
		var modules = _v0.b;
		var newProjectCache = {
			$7: $elm$core$Maybe$Just(
				{dp: deps, du: elmJsonRaw}),
			cY: A3(
				$elm$core$Dict$insert,
				moduleName,
				{b5: cacheKey, m: lookupTable},
				projectCache.cY),
			aN: modules
		};
		return _Utils_Tuple2(
			lookupTable,
			A2($jfmengels$elm_review$Review$Project$Valid$updateProjectCache, newProjectCache, project));
	});
var $jfmengels$elm_review$Review$Cache$ModuleEntry = $elm$core$Basics$identity;
var $jfmengels$elm_review$Review$Cache$createModuleEntry = function (entry) {
	return {
		bs: entry.bs,
		aT: entry.aT,
		bD: $jfmengels$elm_review$Review$Cache$ContextHash$create(entry.bD),
		cn: entry.cn,
		bL: entry.bL
	};
};
var $jfmengels$elm_review$Review$Rule$mapLast = F2(
	function (mapper, lines) {
		var _v0 = $elm$core$List$reverse(lines);
		if (!_v0.b) {
			return lines;
		} else {
			var first = _v0.a;
			var rest = _v0.b;
			return $elm$core$List$reverse(
				A2(
					$elm$core$List$cons,
					mapper(first),
					rest));
		}
	});
var $jfmengels$elm_review$Review$Rule$extractSourceCode = F2(
	function (lines, range) {
		return A2(
			$elm$core$String$dropLeft,
			range.bQ.eF - 1,
			A2(
				$elm$core$String$join,
				'\n',
				A2(
					$jfmengels$elm_review$Review$Rule$mapLast,
					A2($elm$core$String$slice, 0, range.bu.eF - 1),
					A2(
						$elm$core$List$take,
						(range.bu.d0 - range.bQ.d0) + 1,
						A2($elm$core$List$drop, range.bQ.d0 - 1, lines)))));
	});
var $jfmengels$elm_review$Vendor$Zipper$focusl = F2(
	function (fc, zipper) {
		focusl:
		while (true) {
			if (fc(
				$jfmengels$elm_review$Vendor$Zipper$current(zipper))) {
				return $elm$core$Maybe$Just(zipper);
			} else {
				var _v0 = $jfmengels$elm_review$Vendor$Zipper$prev(zipper);
				if (!_v0.$) {
					var z = _v0.a;
					var $temp$fc = fc,
						$temp$zipper = z;
					fc = $temp$fc;
					zipper = $temp$zipper;
					continue focusl;
				} else {
					return $elm$core$Maybe$Nothing;
				}
			}
		}
	});
var $jfmengels$elm_review$Review$Rule$setFilePathIfUnset = F2(
	function (module_, rawError) {
		var err = rawError;
		return (err.eU === '') ? _Utils_update(
			err,
			{eU: module_.fr}) : rawError;
	});
var $jfmengels$elm_review$Review$Rule$accumulateList = F3(
	function (visitor, elements, errorAndContext) {
		return A3(
			$elm$core$List$foldl,
			$jfmengels$elm_review$Review$Rule$visitWithListOfVisitors(visitor),
			errorAndContext,
			elements);
	});
var $jfmengels$elm_review$Review$Rule$findModuleDocumentationBeforeCutOffLine = F2(
	function (cutOffLine, comments) {
		findModuleDocumentationBeforeCutOffLine:
		while (true) {
			if (!comments.b) {
				return $elm$core$Maybe$Nothing;
			} else {
				var comment = comments.a;
				var range = comment.a;
				var content = comment.b;
				var restOfComments = comments.b;
				if (_Utils_cmp(range.bQ.d0, cutOffLine) > 0) {
					return $elm$core$Maybe$Nothing;
				} else {
					if (A2($elm$core$String$startsWith, '{-|', content)) {
						return $elm$core$Maybe$Just(comment);
					} else {
						var $temp$cutOffLine = cutOffLine,
							$temp$comments = restOfComments;
						cutOffLine = $temp$cutOffLine;
						comments = $temp$comments;
						continue findModuleDocumentationBeforeCutOffLine;
					}
				}
			}
		}
	});
var $jfmengels$elm_review$Review$Rule$findModuleDocumentation = function (ast) {
	var cutOffLine = function () {
		var _v0 = ast.e1;
		if (_v0.b) {
			var firstImport = _v0.a;
			return $stil4m$elm_syntax$Elm$Syntax$Node$range(firstImport).bQ.d0;
		} else {
			var _v1 = ast.eK;
			if (_v1.b) {
				var firstDeclaration = _v1.a;
				return $stil4m$elm_syntax$Elm$Syntax$Node$range(firstDeclaration).bQ.d0;
			} else {
				return 0;
			}
		}
	}();
	return A2($jfmengels$elm_review$Review$Rule$findModuleDocumentationBeforeCutOffLine, cutOffLine, ast.eH);
};
var $jfmengels$elm_review$Review$Rule$accumulateModuleDocumentationVisitor = F3(
	function (visitors, ast, initialErrorsAndContext) {
		if ($elm$core$List$isEmpty(visitors)) {
			return initialErrorsAndContext;
		} else {
			var moduleDocumentation = $jfmengels$elm_review$Review$Rule$findModuleDocumentation(ast);
			return A3(
				$elm$core$List$foldl,
				F2(
					function (visitor, errorsAndContext) {
						return A2(
							$jfmengels$elm_review$Review$Rule$accumulate,
							visitor(moduleDocumentation),
							errorsAndContext);
					}),
				initialErrorsAndContext,
				visitors);
		}
	});
var $jfmengels$elm_review$Vendor$ListExtra$orderIndependentConcatMapAppend = F3(
	function (fn, left, right) {
		return A3(
			$elm$core$List$foldl,
			F2(
				function (item, acc) {
					return A2(
						$elm$core$List$append,
						fn(item),
						acc);
				}),
			right,
			left);
	});
var $jfmengels$elm_review$Review$Rule$makeFinalModuleEvaluation = F3(
	function (finalEvaluationFns, previousErrors, context) {
		return A3(
			$jfmengels$elm_review$Vendor$ListExtra$orderIndependentConcatMapAppend,
			function (visitor) {
				return visitor(context);
			},
			finalEvaluationFns,
			previousErrors);
	});
var $jfmengels$elm_review$Review$Rule$visitModuleForProjectRule = F3(
	function (schema, initialContext, module_) {
		return function (_v0) {
			var errors = _v0.a;
			var moduleContext = _v0.b;
			return _Utils_Tuple2(
				A3($jfmengels$elm_review$Review$Rule$makeFinalModuleEvaluation, schema.w, errors, moduleContext),
				moduleContext);
		}(
			A2(
				schema.cJ,
				module_.eu.eK,
				A3(
					$jfmengels$elm_review$Review$Rule$accumulateWithListOfVisitors,
					schema.at,
					module_.eu.eK,
					A3(
						$jfmengels$elm_review$Review$Rule$accumulateList,
						schema.ax,
						module_.eu.e1,
						A3(
							$jfmengels$elm_review$Review$Rule$accumulateWithListOfVisitors,
							schema.ao,
							module_.eu.eH,
							A3(
								$jfmengels$elm_review$Review$Rule$accumulateModuleDocumentationVisitor,
								schema.aA,
								module_.eu,
								A3(
									$jfmengels$elm_review$Review$Rule$accumulateWithListOfVisitors,
									schema.az,
									module_.eu.fc,
									_Utils_Tuple2(_List_Nil, initialContext))))))));
	});
var $jfmengels$elm_review$Review$Rule$computeModule = F7(
	function (dataToComputeModules, module_, isFileIgnored, projectContext, project, moduleZipper, fixedErrors) {
		computeModule:
		while (true) {
			var moduleName = $stil4m$elm_syntax$Elm$Syntax$Node$value(
				$jfmengels$elm_review$Review$Rule$moduleNameNode(module_.eu.fc));
			var _v0 = dataToComputeModules.t.R;
			var requestedData = _v0;
			var _v1 = requestedData.cw ? A3($jfmengels$elm_review$Review$ModuleNameLookupTable$Compute$compute, moduleName, module_, project) : _Utils_Tuple2(
				$jfmengels$elm_review$Review$ModuleNameLookupTable$Internal$empty(moduleName),
				project);
			var moduleNameLookupTable = _v1.a;
			var newProject = _v1.b;
			var availableData = {
				eu: module_.eu,
				ck: requestedData.cC ? $jfmengels$elm_review$Review$Rule$extractSourceCode(
					$elm$core$String$lines(module_.fE)) : $elm$core$Basics$always(''),
				eU: module_.fr,
				cn: isFileIgnored,
				cW: module_.cW,
				cu: module_.fr,
				cw: moduleNameLookupTable
			};
			var initialModuleContext = A3($jfmengels$elm_review$Review$Rule$applyContextCreator, availableData, dataToComputeModules.M, projectContext);
			var _v2 = A3($jfmengels$elm_review$Review$Rule$visitModuleForProjectRule, dataToComputeModules.bG, initialModuleContext, module_);
			var moduleErrors = _v2.a;
			var resultModuleContext = _v2.b;
			var errors = A3(
				$jfmengels$elm_review$Review$Rule$filterExceptionsAndSetName,
				dataToComputeModules.r,
				dataToComputeModules.t.fe,
				A2(
					$elm$core$List$map,
					$jfmengels$elm_review$Review$Rule$setFilePathIfUnset(module_),
					moduleErrors));
			var analysis = function (_v10) {
				return $jfmengels$elm_review$Review$Cache$createModuleEntry(
					{
						bs: module_.bs,
						aT: errors,
						bD: projectContext,
						cn: isFileIgnored,
						bL: function () {
							var _v9 = $jfmengels$elm_review$Review$Rule$getFolderFromTraversal(dataToComputeModules.t.bR);
							if (!_v9.$) {
								var fromModuleToProject = _v9.a.eY;
								return A3($jfmengels$elm_review$Review$Rule$applyContextCreator, availableData, fromModuleToProject, resultModuleContext);
							} else {
								return projectContext;
							}
						}()
					});
			};
			var resultWhenNoFix = function (_v8) {
				return {
					bn: analysis(0),
					eV: fixedErrors,
					aP: $jfmengels$elm_review$Review$Rule$ModuleVisitStep(
						$jfmengels$elm_review$Vendor$Zipper$next(moduleZipper)),
					e: newProject
				};
			};
			var _v3 = A6(
				$jfmengels$elm_review$Review$Rule$findFix,
				dataToComputeModules.S,
				dataToComputeModules.t,
				newProject,
				errors,
				fixedErrors,
				$elm$core$Maybe$Just(moduleZipper));
			if (!_v3.$) {
				var _v4 = _v3.a;
				var postFixStatus = _v4.a;
				var fixResult = _v4.b;
				if (!postFixStatus.$) {
					var newFixedErrors = postFixStatus.a;
					return {
						bn: analysis(0),
						eV: newFixedErrors,
						aP: $jfmengels$elm_review$Review$Rule$NextStepAbort,
						e: fixResult.e
					};
				} else {
					var newFixedErrors = postFixStatus.a;
					var _v6 = fixResult.a5;
					switch (_v6.$) {
						case 0:
							var source = _v6.a.fE;
							var ast = _v6.a.eu;
							var newModuleZipper_ = _v6.b;
							var filePath = $jfmengels$elm_review$Review$Rule$errorFilePath(fixResult.cM);
							if (_Utils_eq(module_.fr, filePath)) {
								var $temp$dataToComputeModules = dataToComputeModules,
									$temp$module_ = _Utils_update(
									module_,
									{eu: ast, fE: source}),
									$temp$isFileIgnored = isFileIgnored,
									$temp$projectContext = projectContext,
									$temp$project = fixResult.e,
									$temp$moduleZipper = newModuleZipper_,
									$temp$fixedErrors = newFixedErrors;
								dataToComputeModules = $temp$dataToComputeModules;
								module_ = $temp$module_;
								isFileIgnored = $temp$isFileIgnored;
								projectContext = $temp$projectContext;
								project = $temp$project;
								moduleZipper = $temp$moduleZipper;
								fixedErrors = $temp$fixedErrors;
								continue computeModule;
							} else {
								var _v7 = A2(
									$jfmengels$elm_review$Vendor$Zipper$focusl,
									function (mod) {
										return _Utils_eq(mod.dV.b6, filePath);
									},
									moduleZipper);
								if (!_v7.$) {
									var newModuleZipper = _v7.a;
									return A3(
										$jfmengels$elm_review$Review$Logger$log,
										dataToComputeModules.S.cX,
										A2(
											$jfmengels$elm_review$Review$Rule$fixedError,
											newFixedErrors,
											{eU: filePath, c3: dataToComputeModules.t.fe}),
										{
											bn: analysis(0),
											eV: newFixedErrors,
											aP: $jfmengels$elm_review$Review$Rule$ModuleVisitStep(
												$elm$core$Maybe$Just(newModuleZipper)),
											e: fixResult.e
										});
								} else {
									return resultWhenNoFix(0);
								}
							}
						case 1:
							return {
								bn: analysis(0),
								eV: A2($jfmengels$elm_review$Review$Fix$FixedErrors$insert, fixResult.cM, fixedErrors),
								aP: $jfmengels$elm_review$Review$Rule$BackToElmJson,
								e: fixResult.e
							};
						default:
							return {
								bn: analysis(0),
								eV: A2($jfmengels$elm_review$Review$Fix$FixedErrors$insert, fixResult.cM, fixedErrors),
								aP: $jfmengels$elm_review$Review$Rule$BackToReadme,
								e: fixResult.e
							};
					}
				}
			} else {
				return resultWhenNoFix(0);
			}
		}
	});
var $jfmengels$elm_review$Review$Project$Valid$moduleGraph = function (_v0) {
	var project = _v0;
	return project.dQ;
};
var $jfmengels$elm_review$Review$Rule$computeProjectContext = F5(
	function (traversalAndFolder, project, cache, incoming, initial) {
		if (!traversalAndFolder.$) {
			return initial;
		} else {
			var foldProjectContexts = traversalAndFolder.a.eW;
			var graph = $jfmengels$elm_review$Review$Project$Valid$moduleGraph(project);
			return A3(
				$jfmengels$elm_review$Vendor$IntDict$foldl,
				F3(
					function (key, _v1, accContext) {
						var _v2 = A2(
							$elm$core$Maybe$andThen,
							function (graphModule) {
								return A2($elm$core$Dict$get, graphModule.dV.b6, cache);
							},
							A2($jfmengels$elm_review$Vendor$Graph$get, key, graph));
						if (!_v2.$) {
							var importedModuleCache = _v2.a;
							return A2(
								foldProjectContexts,
								$jfmengels$elm_review$Review$Cache$outputContext(importedModuleCache),
								accContext);
						} else {
							return accContext;
						}
					}),
				initial,
				incoming);
		}
	});
var $jfmengels$elm_review$Review$Cache$ContentHash$areEqual = F2(
	function (_v0, _v1) {
		var a = _v0;
		var b = _v1;
		return _Utils_eq(a, b);
	});
var $jfmengels$elm_review$Review$Cache$match = F4(
	function (contentHash, context, _v0, _v1) {
		var entry = _v0;
		var isFileIgnored = _v1.cn;
		var rulesCareAboutIgnoredFiles = _v1.fC;
		return A2($jfmengels$elm_review$Review$Cache$ContentHash$areEqual, contentHash, entry.bs) && (A2($jfmengels$elm_review$Review$Cache$ContextHash$areEqual, context, entry.bD) && ((!rulesCareAboutIgnoredFiles) || _Utils_eq(isFileIgnored, entry.cn)));
	});
var $jfmengels$elm_review$Review$Rule$reuseCache = F2(
	function (predicate, maybeCacheEntry) {
		if (maybeCacheEntry.$ === 1) {
			return false;
		} else {
			var cacheEntry = maybeCacheEntry.a;
			return predicate(cacheEntry);
		}
	});
var $jfmengels$elm_review$Review$Rule$shouldIgnoreModule = F2(
	function (dataToComputeModules, path) {
		var _v0 = dataToComputeModules.t.bR;
		if (!_v0.$) {
			if (_v0.a.$ === 1) {
				var _v1 = _v0.a;
				return !A2($jfmengels$elm_review$Review$Exceptions$isFileWeWantReportsFor, dataToComputeModules.r, path);
			} else {
				return false;
			}
		} else {
			return false;
		}
	});
var $jfmengels$elm_review$Review$Rule$computeModuleAndCacheResult = F6(
	function (dataToComputeModules, inputProjectContext, moduleZipper, project, moduleContexts, fixedErrors) {
		var ignoreModule = function (_v3) {
			return {
				eV: fixedErrors,
				A: moduleContexts,
				aP: $jfmengels$elm_review$Review$Rule$ModuleVisitStep(
					$jfmengels$elm_review$Vendor$Zipper$next(moduleZipper)),
				e: project
			};
		};
		var _v0 = $jfmengels$elm_review$Vendor$Zipper$current(moduleZipper);
		var node = _v0.dV;
		var incoming = _v0.e2;
		var _v1 = A2($jfmengels$elm_review$Review$Project$Valid$getModuleByPath, node.b6, project);
		if (_v1.$ === 1) {
			return ignoreModule(0);
		} else {
			var module_ = _v1.a;
			if (A2($jfmengels$elm_review$Review$Rule$shouldIgnoreModule, dataToComputeModules, module_.fr)) {
				return ignoreModule(0);
			} else {
				var projectContext = A5($jfmengels$elm_review$Review$Rule$computeProjectContext, dataToComputeModules.t.bR, project, moduleContexts, incoming, inputProjectContext);
				var isFileIgnored = !A2($jfmengels$elm_review$Review$Exceptions$isFileWeWantReportsFor, dataToComputeModules.r, module_.fr);
				var _v2 = dataToComputeModules.t.R;
				var requestedData = _v2;
				if (A2(
					$jfmengels$elm_review$Review$Rule$reuseCache,
					function (cacheEntry) {
						return A4(
							$jfmengels$elm_review$Review$Cache$match,
							module_.bs,
							$jfmengels$elm_review$Review$Cache$ContextHash$create(projectContext),
							cacheEntry,
							{cn: isFileIgnored, fC: requestedData.cU});
					},
					A2($elm$core$Dict$get, module_.fr, moduleContexts))) {
					return ignoreModule(0);
				} else {
					var result = A7($jfmengels$elm_review$Review$Rule$computeModule, dataToComputeModules, module_, isFileIgnored, projectContext, project, moduleZipper, fixedErrors);
					return {
						eV: result.eV,
						A: A3($elm$core$Dict$insert, module_.fr, result.bn, moduleContexts),
						aP: result.aP,
						e: result.e
					};
				}
			}
		}
	});
var $jfmengels$elm_review$Review$Rule$computeModules = F6(
	function (dataToComputeModules, projectContexts, maybeModuleZipper, initialProject, initialModuleContexts, fixedErrors) {
		computeModules:
		while (true) {
			if (maybeModuleZipper.$ === 1) {
				return {
					eV: fixedErrors,
					A: initialModuleContexts,
					e: initialProject,
					q: $jfmengels$elm_review$Review$Rule$FinalProjectEvaluation(projectContexts)
				};
			} else {
				var moduleZipper = maybeModuleZipper.a;
				var result = A6($jfmengels$elm_review$Review$Rule$computeModuleAndCacheResult, dataToComputeModules, projectContexts.dp, moduleZipper, initialProject, initialModuleContexts, fixedErrors);
				var _v1 = result.aP;
				switch (_v1.$) {
					case 0:
						var newModuleZipper = _v1.a;
						var $temp$dataToComputeModules = dataToComputeModules,
							$temp$projectContexts = projectContexts,
							$temp$maybeModuleZipper = newModuleZipper,
							$temp$initialProject = result.e,
							$temp$initialModuleContexts = result.A,
							$temp$fixedErrors = result.eV;
						dataToComputeModules = $temp$dataToComputeModules;
						projectContexts = $temp$projectContexts;
						maybeModuleZipper = $temp$maybeModuleZipper;
						initialProject = $temp$initialProject;
						initialModuleContexts = $temp$initialModuleContexts;
						fixedErrors = $temp$fixedErrors;
						continue computeModules;
					case 1:
						return {
							eV: result.eV,
							A: result.A,
							e: result.e,
							q: $jfmengels$elm_review$Review$Rule$ElmJson(
								{p: projectContexts.p})
						};
					case 2:
						return {
							eV: result.eV,
							A: result.A,
							e: result.e,
							q: $jfmengels$elm_review$Review$Rule$Readme(
								{cg: projectContexts.cg, p: projectContexts.p})
						};
					default:
						return {eV: result.eV, A: result.A, e: result.e, q: $jfmengels$elm_review$Review$Rule$Abort};
				}
			}
		}
	});
var $jfmengels$elm_review$Review$Rule$Dependencies = function (a) {
	return {$: 2, a: a};
};
var $jfmengels$elm_review$Review$Rule$ReadmeKey = $elm$core$Basics$identity;
var $jfmengels$elm_review$Review$Project$Valid$readmeHash = function (_v0) {
	var project = _v0;
	return A2($elm$core$Maybe$map, $elm$core$Tuple$second, project.c2);
};
var $jfmengels$elm_review$Review$Rule$computeReadme = F5(
	function (dataToComputeProject, project, contexts, cache, fixedErrors) {
		computeReadme:
		while (true) {
			var reviewOptions = dataToComputeProject.S;
			var projectVisitor = dataToComputeProject.t;
			var exceptions = dataToComputeProject.r;
			var inputContext = contexts.cg;
			var cachePredicate = function (entry) {
				return A3(
					$jfmengels$elm_review$Review$Cache$matchMaybe,
					$jfmengels$elm_review$Review$Project$Valid$readmeHash(project),
					$jfmengels$elm_review$Review$Cache$ContextHash$create(inputContext),
					entry);
			};
			var _v0 = A3(
				$jfmengels$elm_review$Review$Rule$reuseProjectRuleCache,
				cachePredicate,
				function ($) {
					return $.c2;
				},
				cache);
			if (!_v0.$) {
				var entry = _v0.a;
				return {
					eA: cache,
					eV: fixedErrors,
					e: project,
					q: $jfmengels$elm_review$Review$Rule$Dependencies(
						{
							cg: contexts.cg,
							p: contexts.p,
							c2: $jfmengels$elm_review$Review$Cache$outputContextMaybe(entry)
						})
				};
			} else {
				var projectReadme = $jfmengels$elm_review$Review$Project$Valid$readme(project);
				var readmeData = A2(
					$elm$core$Maybe$map,
					function (readme) {
						return {
							br: readme.br,
							fv: {br: readme.br, fr: readme.fr}
						};
					},
					projectReadme);
				var _v1 = A3(
					$jfmengels$elm_review$Review$Rule$accumulateWithListOfVisitors,
					projectVisitor.N,
					readmeData,
					_Utils_Tuple2(_List_Nil, inputContext));
				var errorsForVisitor = _v1.a;
				var outputContext = _v1.b;
				var errors = A3($jfmengels$elm_review$Review$Rule$filterExceptionsAndSetName, exceptions, projectVisitor.fe, errorsForVisitor);
				var updateCache = function (_v7) {
					var readmeEntry = $jfmengels$elm_review$Review$Cache$createEntryMaybe(
						{
							bs: $jfmengels$elm_review$Review$Project$Valid$readmeHash(project),
							aT: errors,
							bD: inputContext,
							bL: outputContext
						});
					return _Utils_update(
						cache,
						{
							c2: $elm$core$Maybe$Just(readmeEntry)
						});
				};
				var resultWhenNoFix = function (_v6) {
					return {
						eA: updateCache(0),
						eV: fixedErrors,
						e: project,
						q: $jfmengels$elm_review$Review$Rule$Dependencies(
							{cg: contexts.cg, p: contexts.p, c2: outputContext})
					};
				};
				var _v2 = A6($jfmengels$elm_review$Review$Rule$findFix, reviewOptions, projectVisitor, project, errors, fixedErrors, $elm$core$Maybe$Nothing);
				if (!_v2.$) {
					var _v3 = _v2.a;
					var postFixStatus = _v3.a;
					var fixResult = _v3.b;
					if (!postFixStatus.$) {
						var newFixedErrors = postFixStatus.a;
						return {
							eA: updateCache(0),
							eV: newFixedErrors,
							e: fixResult.e,
							q: $jfmengels$elm_review$Review$Rule$Abort
						};
					} else {
						var newFixedErrors = postFixStatus.a;
						var _v5 = fixResult.a5;
						switch (_v5.$) {
							case 1:
								return {
									eA: updateCache(0),
									eV: newFixedErrors,
									e: fixResult.e,
									q: $jfmengels$elm_review$Review$Rule$ElmJson(
										{p: contexts.p})
								};
							case 2:
								var $temp$dataToComputeProject = dataToComputeProject,
									$temp$project = fixResult.e,
									$temp$contexts = contexts,
									$temp$cache = updateCache(0),
									$temp$fixedErrors = newFixedErrors;
								dataToComputeProject = $temp$dataToComputeProject;
								project = $temp$project;
								contexts = $temp$contexts;
								cache = $temp$cache;
								fixedErrors = $temp$fixedErrors;
								continue computeReadme;
							default:
								return resultWhenNoFix(0);
						}
					}
				} else {
					return resultWhenNoFix(0);
				}
			}
		}
	});
var $jfmengels$elm_review$Review$Cache$errors = function (_v0) {
	var entry = _v0;
	return entry.aT;
};
var $jfmengels$elm_review$Review$Cache$errorsMaybe = function (maybeEntry) {
	if (!maybeEntry.$) {
		var entry = maybeEntry.a;
		return entry.aT;
	} else {
		return _List_Nil;
	}
};
var $jfmengels$elm_review$Review$Cache$outputForNoOutput = function (_v0) {
	var entry = _v0;
	return entry.dX;
};
var $jfmengels$elm_review$Review$Rule$errorsFromCache = function (cache) {
	return $elm$core$List$concat(
		_List_fromArray(
			[
				A3(
				$elm$core$Dict$foldl,
				F3(
					function (_v0, cacheEntry, acc) {
						return A2(
							$elm$core$List$append,
							$jfmengels$elm_review$Review$Cache$errors(cacheEntry),
							acc);
					}),
				_List_Nil,
				cache.A),
				$jfmengels$elm_review$Review$Cache$errorsMaybe(cache.cg),
				$jfmengels$elm_review$Review$Cache$errorsMaybe(cache.c2),
				$jfmengels$elm_review$Review$Cache$errorsMaybe(cache.av),
				A2(
				$elm$core$Maybe$withDefault,
				_List_Nil,
				A2($elm$core$Maybe$map, $jfmengels$elm_review$Review$Cache$outputForNoOutput, cache.bx))
			]));
};
var $jfmengels$elm_review$Review$Rule$computeStepsForProject = F2(
	function (dataToComputeProject, acc) {
		computeStepsForProject:
		while (true) {
			var project = acc.e;
			var cache = acc.eA;
			var fixedErrors = acc.eV;
			var step = acc.q;
			switch (step.$) {
				case 0:
					var contexts = step.a;
					var $temp$dataToComputeProject = dataToComputeProject,
						$temp$acc = A5($jfmengels$elm_review$Review$Rule$computeElmJson, dataToComputeProject, project, contexts.p, cache, fixedErrors);
					dataToComputeProject = $temp$dataToComputeProject;
					acc = $temp$acc;
					continue computeStepsForProject;
				case 1:
					var contexts = step.a;
					var $temp$dataToComputeProject = dataToComputeProject,
						$temp$acc = A5($jfmengels$elm_review$Review$Rule$computeReadme, dataToComputeProject, project, contexts, cache, fixedErrors);
					dataToComputeProject = $temp$dataToComputeProject;
					acc = $temp$acc;
					continue computeStepsForProject;
				case 2:
					var contexts = step.a;
					var $temp$dataToComputeProject = dataToComputeProject,
						$temp$acc = A5($jfmengels$elm_review$Review$Rule$computeDependencies, dataToComputeProject, project, contexts, cache, fixedErrors);
					dataToComputeProject = $temp$dataToComputeProject;
					acc = $temp$acc;
					continue computeStepsForProject;
				case 3:
					var contexts = step.a;
					var moduleZipper = step.b;
					var _v1 = dataToComputeProject.t.bG;
					if (_v1.$ === 1) {
						var $temp$dataToComputeProject = dataToComputeProject,
							$temp$acc = {
							eA: acc.eA,
							eV: acc.eV,
							e: acc.e,
							q: $jfmengels$elm_review$Review$Rule$FinalProjectEvaluation(contexts)
						};
						dataToComputeProject = $temp$dataToComputeProject;
						acc = $temp$acc;
						continue computeStepsForProject;
					} else {
						var _v2 = _v1.a;
						var moduleVisitor = _v2.a;
						var moduleContextCreator = _v2.b;
						var result = A6(
							$jfmengels$elm_review$Review$Rule$computeModules,
							{r: dataToComputeProject.r, M: moduleContextCreator, bG: moduleVisitor, t: dataToComputeProject.t, S: dataToComputeProject.S},
							contexts,
							$elm$core$Maybe$Just(moduleZipper),
							project,
							cache.A,
							fixedErrors);
						var $temp$dataToComputeProject = dataToComputeProject,
							$temp$acc = {
							eA: _Utils_update(
								cache,
								{A: result.A}),
							eV: result.eV,
							e: result.e,
							q: result.q
						};
						dataToComputeProject = $temp$dataToComputeProject;
						acc = $temp$acc;
						continue computeStepsForProject;
					}
				case 4:
					var contexts = step.a;
					var $temp$dataToComputeProject = dataToComputeProject,
						$temp$acc = A5($jfmengels$elm_review$Review$Rule$computeFinalProjectEvaluation, dataToComputeProject, project, contexts, cache, fixedErrors);
					dataToComputeProject = $temp$dataToComputeProject;
					acc = $temp$acc;
					continue computeStepsForProject;
				case 5:
					var context = step.a;
					var errors = $jfmengels$elm_review$Review$Rule$errorsFromCache(cache);
					var cacheWithExtract = A5($jfmengels$elm_review$Review$Rule$computeExtract, dataToComputeProject.S, dataToComputeProject.t, context, errors, cache);
					return {eA: cacheWithExtract, aT: errors, eV: acc.eV, e: acc.e};
				default:
					return {eA: cache, aT: _List_Nil, eV: acc.eV, e: acc.e};
			}
		}
	});
var $jfmengels$elm_review$Review$Rule$endedRule = function (name) {
	return _List_fromArray(
		[
			_Utils_Tuple2(
			'type',
			$elm$json$Json$Encode$string('timer-end')),
			_Utils_Tuple2(
			'metric',
			$elm$json$Json$Encode$string('Running ' + name))
		]);
};
var $jfmengels$elm_review$Review$Rule$finalCacheMarker = F3(
  function (ruleName, ruleId, cacheEntry) {
    global.saveResultToCache(ruleName, ruleId, cacheEntry);
    return cacheEntry;
  });
var $jfmengels$elm_review$Review$Rule$startedRule = function (name) {
	return _List_fromArray(
		[
			_Utils_Tuple2(
			'type',
			$elm$json$Json$Encode$string('timer-start')),
			_Utils_Tuple2(
			'metric',
			$elm$json$Json$Encode$string('Running ' + name))
		]);
};
var $jfmengels$elm_review$Review$Rule$runProjectVisitor = F5(
	function (dataToComputeProject, ruleId, cache, fixedErrors, project) {
		return A3(
			$jfmengels$elm_review$Review$Logger$log,
			dataToComputeProject.S.cX,
			$jfmengels$elm_review$Review$Rule$endedRule(dataToComputeProject.t.fe),
			A5(
				$jfmengels$elm_review$Review$Rule$runProjectVisitorHelp,
				dataToComputeProject,
				ruleId,
				cache,
				fixedErrors,
				A3(
					$jfmengels$elm_review$Review$Logger$log,
					dataToComputeProject.S.cX,
					$jfmengels$elm_review$Review$Rule$startedRule(dataToComputeProject.t.fe),
					project)));
	});
var $jfmengels$elm_review$Review$Rule$runProjectVisitorHelp = F5(
	function (dataToComputeProject, ruleId, initialCache, initialFixedErrors, initialProject) {
		var projectVisitor = dataToComputeProject.t;
		var exceptions = dataToComputeProject.r;
		var _v0 = A2(
			$jfmengels$elm_review$Review$Rule$computeStepsForProject,
			dataToComputeProject,
			{
				eA: initialCache,
				eV: initialFixedErrors,
				e: initialProject,
				q: $jfmengels$elm_review$Review$Rule$ElmJson(
					{p: projectVisitor.aX})
			});
		var project = _v0.e;
		var errors = _v0.aT;
		var cache = _v0.eA;
		var fixedErrors = _v0.eV;
		return {
			aT: errors,
			dx: A2(
				$elm$core$Maybe$map,
				function ($) {
					return $.dx;
				},
				A3($jfmengels$elm_review$Review$Rule$finalCacheMarker, projectVisitor.fe, ruleId, cache).dx),
			eV: fixedErrors,
			e: project,
			b9: {
				aq: $elm$core$Maybe$Nothing,
				r: exceptions,
				aJ: !_Utils_eq(projectVisitor.as, $elm$core$Maybe$Nothing),
				cm: ruleId,
				fe: projectVisitor.fe,
				n: projectVisitor.n,
				R: projectVisitor.R,
				aD: F5(
					function (newReviewOptions, newRuleId, newExceptions, newFixedErrors, newProjectArg) {
						return A5(
							$jfmengels$elm_review$Review$Rule$runProjectVisitor,
							{r: newExceptions, t: projectVisitor, S: newReviewOptions},
							newRuleId,
							cache,
							newFixedErrors,
							newProjectArg);
					})
			}
		};
	});
var $jfmengels$elm_review$Review$Rule$fromProjectRuleSchema = function (projectRuleSchema) {
	var schema = projectRuleSchema;
	return {
		aq: $elm$core$Maybe$Nothing,
		r: $jfmengels$elm_review$Review$Exceptions$init,
		aJ: !_Utils_eq(schema.as, $elm$core$Maybe$Nothing),
		cm: 0,
		fe: schema.fe,
		n: schema.n,
		R: A2(
			$jfmengels$elm_review$Review$RequestedData$combine,
			A2($elm$core$Maybe$map, $jfmengels$elm_review$Review$Rule$requestedDataFromContextCreator, schema.M),
			A2(
				$elm$core$Maybe$map,
				A2(
					$elm$core$Basics$composeR,
					function ($) {
						return $.eY;
					},
					$jfmengels$elm_review$Review$Rule$requestedDataFromContextCreator),
				schema.aU)),
		aD: F5(
			function (reviewOptions, ruleId, exceptions, fixedErrors, project) {
				return A5(
					$jfmengels$elm_review$Review$Rule$runProjectVisitor,
					{
						r: exceptions,
						t: $jfmengels$elm_review$Review$Rule$fromProjectRuleSchemaToRunnableProjectVisitor(projectRuleSchema),
						S: reviewOptions
					},
					ruleId,
					A2(
						$jfmengels$elm_review$Review$Rule$removeUnknownModulesFromInitialCache,
						project,
						A3($jfmengels$elm_review$Review$Rule$initialCacheMarker, schema.fe, ruleId, $jfmengels$elm_review$Review$Rule$emptyCache)),
					fixedErrors,
					project);
			})
	};
};
var $author$project$CognitiveComplexity$fromProjectToModule = $jfmengels$elm_review$Review$Rule$initContextCreator(
	$elm$core$Basics$always(
		{aI: _List_Nil, aL: _List_Nil, P: _List_Nil, h: 0, bJ: _List_Nil, bg: _List_Nil, _: $elm$core$Dict$empty}));
var $author$project$CognitiveComplexity$initialContext = $elm$core$Dict$empty;
var $author$project$CognitiveComplexity$declarationExitVisitor = F2(
	function (node, context) {
		var functionsToReport = function () {
			var _v0 = $stil4m$elm_syntax$Elm$Syntax$Node$value(node);
			if (!_v0.$) {
				var _function = _v0.a;
				return A2(
					$elm$core$List$cons,
					{
						aV: $stil4m$elm_syntax$Elm$Syntax$Node$value(_function.dm).fe,
						P: context.P,
						_: context._
					},
					context.aL);
			} else {
				return context.aL;
			}
		}();
		return _Utils_Tuple2(
			_List_Nil,
			{aI: _List_Nil, aL: functionsToReport, P: _List_Nil, h: 0, bJ: _List_Nil, bg: _List_Nil, _: $elm$core$Dict$empty});
	});
var $author$project$CognitiveComplexity$Case = {$: 2};
var $author$project$CognitiveComplexity$ElseIf = {$: 1};
var $author$project$CognitiveComplexity$If = {$: 0};
var $author$project$CognitiveComplexity$Operator = function (a) {
	return {$: 3, a: a};
};
var $author$project$CognitiveComplexity$computeRangesForLetDeclarations = function (declarations) {
	return A2(
		$elm$core$List$filterMap,
		function (letDecl) {
			var _v0 = $stil4m$elm_syntax$Elm$Syntax$Node$value(letDecl);
			if (!_v0.$) {
				var declaration = _v0.a.dm;
				return $elm$core$List$isEmpty(
					$stil4m$elm_syntax$Elm$Syntax$Node$value(declaration).es) ? $elm$core$Maybe$Nothing : $elm$core$Maybe$Just(
					$stil4m$elm_syntax$Elm$Syntax$Node$range(
						$stil4m$elm_syntax$Elm$Syntax$Node$value(declaration).eR));
			} else {
				return $elm$core$Maybe$Nothing;
			}
		},
		declarations);
};
var $author$project$CognitiveComplexity$incrementAndIgnore = F2(
	function (parentOperator, node) {
		var _v2 = $stil4m$elm_syntax$Elm$Syntax$Node$value(node);
		if (_v2.$ === 2) {
			var operator = _v2.a;
			var left = _v2.c;
			var right = _v2.d;
			if ((operator === '&&') || (operator === '||')) {
				var newOperatorIncrease = _Utils_eq(operator, parentOperator) ? _List_Nil : _List_fromArray(
					[
						{
						ay: 1,
						aZ: $author$project$CognitiveComplexity$Operator(operator),
						aM: $stil4m$elm_syntax$Elm$Syntax$Node$range(node).bQ,
						h: 0
					}
					]);
				return A4($author$project$CognitiveComplexity$incrementAndIgnoreForOperands, operator, newOperatorIncrease, left, right);
			} else {
				return _Utils_Tuple2(_List_Nil, _List_Nil);
			}
		} else {
			return _Utils_Tuple2(_List_Nil, _List_Nil);
		}
	});
var $author$project$CognitiveComplexity$incrementAndIgnoreForOperands = F4(
	function (operator, increases, left, right) {
		var _v0 = A2($author$project$CognitiveComplexity$incrementAndIgnore, operator, right);
		var rightIncreases = _v0.a;
		var rightIgnore = _v0.b;
		var _v1 = A2($author$project$CognitiveComplexity$incrementAndIgnore, operator, left);
		var leftIncreases = _v1.a;
		var leftIgnore = _v1.b;
		return _Utils_Tuple2(
			$elm$core$List$concat(
				_List_fromArray(
					[leftIncreases, rightIncreases, increases])),
			A2(
				$elm$core$List$cons,
				$stil4m$elm_syntax$Elm$Syntax$Node$range(left),
				A2(
					$elm$core$List$cons,
					$stil4m$elm_syntax$Elm$Syntax$Node$range(right),
					_Utils_ap(leftIgnore, rightIgnore))));
	});
var $author$project$CognitiveComplexity$expressionEnterVisitorHelp = F2(
	function (node, context) {
		var _v0 = $stil4m$elm_syntax$Elm$Syntax$Node$value(node);
		_v0$6:
		while (true) {
			switch (_v0.$) {
				case 4:
					var else_ = _v0.c;
					return (!A2(
						$elm$core$List$member,
						$stil4m$elm_syntax$Elm$Syntax$Node$range(node),
						context.aI)) ? _Utils_update(
						context,
						{
							aI: A2(
								$elm$core$List$cons,
								$stil4m$elm_syntax$Elm$Syntax$Node$range(else_),
								context.aI),
							P: A2(
								$elm$core$List$cons,
								{
									ay: context.h + 1,
									aZ: $author$project$CognitiveComplexity$If,
									aM: $stil4m$elm_syntax$Elm$Syntax$Node$range(node).bQ,
									h: context.h
								},
								context.P),
							h: context.h + 1
						}) : _Utils_update(
						context,
						{
							aI: A2(
								$elm$core$List$cons,
								$stil4m$elm_syntax$Elm$Syntax$Node$range(else_),
								context.aI),
							P: A2(
								$elm$core$List$cons,
								{
									ay: context.h,
									aZ: $author$project$CognitiveComplexity$ElseIf,
									aM: $stil4m$elm_syntax$Elm$Syntax$Node$range(node).bQ,
									h: context.h - 1
								},
								context.P)
						});
				case 16:
					return _Utils_update(
						context,
						{
							P: A2(
								$elm$core$List$cons,
								{
									ay: context.h + 1,
									aZ: $author$project$CognitiveComplexity$Case,
									aM: $stil4m$elm_syntax$Elm$Syntax$Node$range(node).bQ,
									h: context.h
								},
								context.P),
							h: context.h + 1
						});
				case 15:
					var declarations = _v0.a.eK;
					return _Utils_update(
						context,
						{
							bg: _Utils_ap(
								$author$project$CognitiveComplexity$computeRangesForLetDeclarations(declarations),
								context.bg)
						});
				case 2:
					var operator = _v0.a;
					var left = _v0.c;
					var right = _v0.d;
					if (((operator === '&&') || (operator === '||')) && (!A2(
						$elm$core$List$member,
						$stil4m$elm_syntax$Elm$Syntax$Node$range(node),
						context.bJ))) {
						var _v1 = A4($author$project$CognitiveComplexity$incrementAndIgnoreForOperands, operator, _List_Nil, left, right);
						var increases = _v1.a;
						var operandsToIgnore = _v1.b;
						return _Utils_update(
							context,
							{
								P: A2(
									$elm$core$List$cons,
									{
										ay: 1,
										aZ: $author$project$CognitiveComplexity$Operator(operator),
										aM: $stil4m$elm_syntax$Elm$Syntax$Node$range(node).bQ,
										h: 0
									},
									_Utils_ap(increases, context.P)),
								bJ: _Utils_ap(operandsToIgnore, context.bJ)
							});
					} else {
						return context;
					}
				case 17:
					return _Utils_update(
						context,
						{h: context.h + 1});
				case 3:
					if (!_v0.a.b) {
						var name = _v0.b;
						return _Utils_update(
							context,
							{
								_: A2($elm$core$Dict$member, name, context._) ? context._ : A3(
									$elm$core$Dict$insert,
									name,
									$stil4m$elm_syntax$Elm$Syntax$Node$range(node).bQ,
									context._)
							});
					} else {
						break _v0$6;
					}
				default:
					break _v0$6;
			}
		}
		return context;
	});
var $author$project$CognitiveComplexity$expressionEnterVisitor = F2(
	function (node, context) {
		return A2(
			$elm$core$List$member,
			$stil4m$elm_syntax$Elm$Syntax$Node$range(node),
			context.bg) ? _Utils_Tuple2(
			_List_Nil,
			A2(
				$author$project$CognitiveComplexity$expressionEnterVisitorHelp,
				node,
				_Utils_update(
					context,
					{h: context.h + 1}))) : _Utils_Tuple2(
			_List_Nil,
			A2($author$project$CognitiveComplexity$expressionEnterVisitorHelp, node, context));
	});
var $author$project$CognitiveComplexity$expressionExitVisitorHelp = F2(
	function (node, context) {
		var _v0 = $stil4m$elm_syntax$Elm$Syntax$Node$value(node);
		switch (_v0.$) {
			case 4:
				return (!A2(
					$elm$core$List$member,
					$stil4m$elm_syntax$Elm$Syntax$Node$range(node),
					context.aI)) ? _Utils_update(
					context,
					{h: context.h - 1}) : context;
			case 16:
				return _Utils_update(
					context,
					{h: context.h - 1});
			case 17:
				return _Utils_update(
					context,
					{h: context.h - 1});
			default:
				return context;
		}
	});
var $author$project$CognitiveComplexity$expressionExitVisitor = F2(
	function (node, context) {
		return A2(
			$elm$core$List$member,
			$stil4m$elm_syntax$Elm$Syntax$Node$range(node),
			context.bg) ? _Utils_Tuple2(
			_List_Nil,
			A2(
				$author$project$CognitiveComplexity$expressionExitVisitorHelp,
				node,
				_Utils_update(
					context,
					{h: context.h - 1}))) : _Utils_Tuple2(
			_List_Nil,
			A2($author$project$CognitiveComplexity$expressionExitVisitorHelp, node, context));
	});
var $jfmengels$elm_review$Review$Error$Module = 0;
var $jfmengels$elm_review$Review$Rule$error = F2(
	function (_v0, range) {
		var message = _v0.e8;
		var details = _v0.eL;
		return {eL: details, eU: '', cQ: $elm$core$Maybe$Nothing, e8: message, cx: false, c1: range, c3: '', ee: 0};
	});
var $author$project$CognitiveComplexity$kindToString = function (kind) {
	switch (kind.$) {
		case 0:
			return 'if expression';
		case 1:
			return 'else if expression';
		case 2:
			return 'case expression';
		case 3:
			var operator = kind.a;
			return 'use of `' + (operator + '`');
		case 4:
			return 'recursive call';
		default:
			var fnName = kind.a;
			return 'indirect recursive call to ' + fnName;
	}
};
var $author$project$CognitiveComplexity$mentionNesting = function (nesting) {
	return (!nesting) ? '' : (' (including ' + ($elm$core$String$fromInt(nesting) + ' for nesting)'));
};
var $author$project$CognitiveComplexity$explain = function (increase) {
	return 'Line ' + ($elm$core$String$fromInt(increase.aM.d0) + (': +' + ($elm$core$String$fromInt(increase.ay) + (' for the ' + ($author$project$CognitiveComplexity$kindToString(increase.aZ) + $author$project$CognitiveComplexity$mentionNesting(increase.h))))));
};
var $author$project$CognitiveComplexity$explanation = _List_fromArray(
	['This metric is a heuristic to measure how easy to understand a piece of code is, primarily through increments for breaks in the linear flow and for nesting those breaks.', 'The most common ways to reduce complexity is to extract sections into functions and to unnest control flow structures. Following is a breakdown of where complexity was found:']);
var $author$project$CognitiveComplexity$finalModuleEvaluation = F2(
	function (threshold, context) {
		var recursiveCalls = $author$project$CognitiveComplexity$computeRecursiveCalls(context);
		return A2(
			$elm$core$List$filterMap,
			function (functionToReport) {
				var allIncreases = A2($author$project$CognitiveComplexity$computeIncreases, recursiveCalls, functionToReport);
				var finalComplexity = A3(
					$elm$core$List$foldl,
					F2(
						function (_v1, acc) {
							var increase = _v1.ay;
							return increase + acc;
						}),
					0,
					allIncreases);
				return (_Utils_cmp(finalComplexity, threshold) > 0) ? $elm$core$Maybe$Just(
					A2(
						$jfmengels$elm_review$Review$Rule$error,
						{
							eL: $elm$core$List$isEmpty(allIncreases) ? $author$project$CognitiveComplexity$explanation : _Utils_ap(
								$author$project$CognitiveComplexity$explanation,
								_List_fromArray(
									[
										A2(
										$elm$core$String$join,
										'\n',
										A2(
											$elm$core$List$map,
											$author$project$CognitiveComplexity$explain,
											A2(
												$elm$core$List$sortBy,
												function (_v0) {
													var line = _v0.aM;
													return _Utils_Tuple2(line.d0, line.eF);
												},
												allIncreases)))
									])),
							e8: $stil4m$elm_syntax$Elm$Syntax$Node$value(functionToReport.aV) + (' has a cognitive complexity of ' + ($elm$core$String$fromInt(finalComplexity) + (', higher than the allowed ' + $elm$core$String$fromInt(threshold))))
						},
						$stil4m$elm_syntax$Elm$Syntax$Node$range(functionToReport.aV))) : $elm$core$Maybe$Nothing;
			},
			context.aL);
	});
var $jfmengels$elm_review$Review$Rule$withDeclarationExitVisitor = F2(
	function (visitor, _v0) {
		var schema = _v0;
		return _Utils_update(
			schema,
			{
				ae: A2($elm$core$List$cons, visitor, schema.ae)
			});
	});
var $jfmengels$elm_review$Review$Rule$withExpressionEnterVisitor = F2(
	function (visitor, _v0) {
		var schema = _v0;
		return _Utils_update(
			schema,
			{
				E: A2($elm$core$List$cons, visitor, schema.E)
			});
	});
var $jfmengels$elm_review$Review$Rule$withExpressionExitVisitor = F2(
	function (visitor, _v0) {
		var schema = _v0;
		return _Utils_update(
			schema,
			{
				L: A2($elm$core$List$cons, visitor, schema.L)
			});
	});
var $jfmengels$elm_review$Review$Rule$withFinalModuleEvaluation = F2(
	function (visitor, _v0) {
		var schema = _v0;
		return _Utils_update(
			schema,
			{
				w: A2($elm$core$List$cons, visitor, schema.w)
			});
	});
var $author$project$CognitiveComplexity$moduleVisitor = F2(
	function (threshold, schema) {
		return A2(
			$jfmengels$elm_review$Review$Rule$withFinalModuleEvaluation,
			$author$project$CognitiveComplexity$finalModuleEvaluation(threshold),
			A2(
				$jfmengels$elm_review$Review$Rule$withExpressionExitVisitor,
				$author$project$CognitiveComplexity$expressionExitVisitor,
				A2(
					$jfmengels$elm_review$Review$Rule$withExpressionEnterVisitor,
					$author$project$CognitiveComplexity$expressionEnterVisitor,
					A2($jfmengels$elm_review$Review$Rule$withDeclarationExitVisitor, $author$project$CognitiveComplexity$declarationExitVisitor, schema))));
	});
var $jfmengels$elm_review$Review$Rule$AllModulesInParallel = 0;
var $jfmengels$elm_review$Review$Rule$ProjectRuleSchema = $elm$core$Basics$identity;
var $jfmengels$elm_review$Review$Rule$newProjectRuleSchema = F2(
	function (name, initialProjectContext) {
		return {as: $elm$core$Maybe$Nothing, H: _List_Nil, I: _List_Nil, J: _List_Nil, w: _List_Nil, aU: $elm$core$Maybe$Nothing, aX: initialProjectContext, M: $elm$core$Maybe$Nothing, bH: _List_Nil, fe: name, n: false, N: _List_Nil, cd: 0};
	});
var $jfmengels$elm_review$Review$Rule$Extract = $elm$core$Basics$identity;
var $jfmengels$elm_review$Review$Rule$withDataExtractor = F2(
	function (dataExtractor, _v0) {
		var schema = _v0;
		return _Utils_update(
			schema,
			{
				as: $elm$core$Maybe$Just(
					function (context) {
						return dataExtractor(context);
					})
			});
	});
var $jfmengels$elm_review$Review$Rule$withModuleContextUsingContextCreator = F2(
	function (functions, _v0) {
		var schema = _v0;
		return _Utils_update(
			schema,
			{
				aU: $elm$core$Maybe$Just(
					{eW: functions.eW, eY: functions.eY}),
				M: $elm$core$Maybe$Just(functions.eZ)
			});
	});
var $jfmengels$elm_review$Review$Rule$removeExtensibleRecordTypeVariable = function (_function) {
	return A2(
		$elm$core$Basics$composeR,
		_function,
		function (_v0) {
			var param = _v0;
			return param;
		});
};
var $jfmengels$elm_review$Review$Rule$withModuleVisitor = F2(
	function (visitor, _v0) {
		var schema = _v0;
		return _Utils_update(
			schema,
			{
				bH: A2(
					$elm$core$List$cons,
					$jfmengels$elm_review$Review$Rule$removeExtensibleRecordTypeVariable(visitor),
					schema.bH)
			});
	});
var $author$project$CognitiveComplexity$rule = function (threshold) {
	return $jfmengels$elm_review$Review$Rule$fromProjectRuleSchema(
		A2(
			$jfmengels$elm_review$Review$Rule$withDataExtractor,
			$author$project$CognitiveComplexity$dataExtractor,
			A2(
				$jfmengels$elm_review$Review$Rule$withModuleContextUsingContextCreator,
				{eW: $author$project$CognitiveComplexity$foldProjectContexts, eY: $author$project$CognitiveComplexity$fromModuleToProject, eZ: $author$project$CognitiveComplexity$fromProjectToModule},
				A2(
					$jfmengels$elm_review$Review$Rule$withModuleVisitor,
					$author$project$CognitiveComplexity$moduleVisitor(threshold),
					A2($jfmengels$elm_review$Review$Rule$newProjectRuleSchema, 'CognitiveComplexity', $author$project$CognitiveComplexity$initialContext)))));
};
var $author$project$ReviewConfig$config = _List_fromArray(
	[
		$author$project$CognitiveComplexity$rule(15)
	]);
var $author$project$Elm$Review$Main$DecodedFlags = function (fixMode) {
	return function (fixLimit) {
		return function (enableExtract) {
			return function (unsuppressMode) {
				return function (detailsMode) {
					return function (reportMode) {
						return function (ignoreProblematicDependencies) {
							return function (rulesFilter) {
								return function (ignoredDirs) {
									return function (ignoredFiles) {
										return function (writeSuppressionFiles) {
											return function (logger) {
												return {U: detailsMode, bt: enableExtract, a4: fixLimit, aw: fixMode, bC: ignoreProblematicDependencies, cT: ignoredDirs, cU: ignoredFiles, cX: logger, a1: reportMode, c4: rulesFilter, an: unsuppressMode, bT: writeSuppressionFiles};
											};
										};
									};
								};
							};
						};
					};
				};
			};
		};
	};
};
var $elm$json$Json$Decode$bool = _Json_decodeBool;
var $author$project$Elm$Review$Reporter$WithDetails = 0;
var $author$project$Elm$Review$Main$decodeDetailsMode = A2(
	$elm$json$Json$Decode$andThen,
	function (detailsMode) {
		switch (detailsMode) {
			case 'with-details':
				return $elm$json$Json$Decode$succeed(0);
			case 'without-details':
				return $elm$json$Json$Decode$succeed(1);
			default:
				return $elm$json$Json$Decode$fail('I could not understand the following details mode: ' + detailsMode);
		}
	},
	$elm$json$Json$Decode$string);
var $author$project$Elm$Review$Main$Mode_Fix = 1;
var $author$project$Elm$Review$Main$Mode_FixAll = 2;
var $author$project$Elm$Review$Main$decodeFix = A2(
	$elm$json$Json$Decode$andThen,
	function (fixMode) {
		switch (fixMode) {
			case 'dontfix':
				return $elm$json$Json$Decode$succeed(0);
			case 'fix':
				return $elm$json$Json$Decode$succeed(1);
			case 'fixAll':
				return $elm$json$Json$Decode$succeed(2);
			default:
				return $elm$json$Json$Decode$fail('I could not understand the following fix mode: ' + fixMode);
		}
	},
	$elm$json$Json$Decode$string);
var $elm$json$Json$Decode$int = _Json_decodeInt;
var $elm$json$Json$Decode$null = _Json_decodeNull;
var $author$project$Elm$Review$Main$decodeFixLimit = $elm$json$Json$Decode$oneOf(
	_List_fromArray(
		[
			A2(
			$elm$json$Json$Decode$map,
			function (n) {
				return $elm$core$Maybe$Just(
					A2($elm$core$Basics$max, 1, n));
			},
			$elm$json$Json$Decode$int),
			$elm$json$Json$Decode$null($elm$core$Maybe$Nothing)
		]));
var $author$project$Elm$Review$Main$Json = 1;
var $author$project$Elm$Review$Main$decodeReportMode = A2(
	$elm$json$Json$Decode$andThen,
	function (reportMode) {
		switch (reportMode) {
			case 'human':
				return $elm$json$Json$Decode$succeed(0);
			case 'json':
				return $elm$json$Json$Decode$succeed(1);
			default:
				return $elm$json$Json$Decode$fail('I could not understand the following report mode: ' + reportMode);
		}
	},
	$elm$json$Json$Decode$string);
var $author$project$Elm$Review$Main$decodeRulesFilter = $elm$json$Json$Decode$oneOf(
	_List_fromArray(
		[
			A2(
			$elm$json$Json$Decode$map,
			A2($elm$core$Basics$composeR, $elm$core$Set$fromList, $elm$core$Maybe$Just),
			$elm$json$Json$Decode$list($elm$json$Json$Decode$string)),
			$elm$json$Json$Decode$null($elm$core$Maybe$Nothing)
		]));
var $author$project$Elm$Review$CliCommunication$Key = $elm$core$Basics$identity;
var $elm$json$Json$Decode$value = _Json_decodeValue;
var $author$project$Elm$Review$CliCommunication$decoder = A2($elm$json$Json$Decode$map, $elm$core$Basics$identity, $elm$json$Json$Decode$value);
var $author$project$Elm$Review$UnsuppressMode$UnsuppressAll = {$: 0};
var $author$project$Elm$Review$UnsuppressMode$UnsuppressRules = function (a) {
	return {$: 1, a: a};
};
var $author$project$Elm$Review$UnsuppressMode$decoder = $elm$json$Json$Decode$oneOf(
	_List_fromArray(
		[
			A2(
			$elm$json$Json$Decode$map,
			A2($elm$core$Basics$composeR, $elm$core$Set$fromList, $author$project$Elm$Review$UnsuppressMode$UnsuppressRules),
			$elm$json$Json$Decode$list($elm$json$Json$Decode$string)),
			A2(
			$elm$json$Json$Decode$map,
			function (bool) {
				return bool ? $author$project$Elm$Review$UnsuppressMode$UnsuppressAll : $author$project$Elm$Review$UnsuppressMode$UnsuppressNone;
			},
			$elm$json$Json$Decode$bool)
		]));
var $elm$json$Json$Decode$map2 = _Json_map2;
var $author$project$Elm$Review$Main$field = F3(
	function (key, valDecoder, decoder) {
		return A3(
			$elm$json$Json$Decode$map2,
			$elm$core$Basics$apR,
			A2($elm$json$Json$Decode$field, key, valDecoder),
			decoder);
	});
var $author$project$Elm$Review$Main$decodeFlags = A3(
	$author$project$Elm$Review$Main$field,
	'logger',
	$author$project$Elm$Review$CliCommunication$decoder,
	A3(
		$author$project$Elm$Review$Main$field,
		'writeSuppressionFiles',
		$elm$json$Json$Decode$bool,
		A3(
			$author$project$Elm$Review$Main$field,
			'ignoredFiles',
			$elm$json$Json$Decode$list($elm$json$Json$Decode$string),
			A3(
				$author$project$Elm$Review$Main$field,
				'ignoredDirs',
				$elm$json$Json$Decode$list($elm$json$Json$Decode$string),
				A3(
					$author$project$Elm$Review$Main$field,
					'rulesFilter',
					$author$project$Elm$Review$Main$decodeRulesFilter,
					A3(
						$author$project$Elm$Review$Main$field,
						'ignoreProblematicDependencies',
						$elm$json$Json$Decode$bool,
						A3(
							$author$project$Elm$Review$Main$field,
							'report',
							$author$project$Elm$Review$Main$decodeReportMode,
							A3(
								$author$project$Elm$Review$Main$field,
								'detailsMode',
								$author$project$Elm$Review$Main$decodeDetailsMode,
								A3(
									$author$project$Elm$Review$Main$field,
									'unsuppress',
									$author$project$Elm$Review$UnsuppressMode$decoder,
									A3(
										$author$project$Elm$Review$Main$field,
										'enableExtract',
										$elm$json$Json$Decode$bool,
										A3(
											$author$project$Elm$Review$Main$field,
											'fixLimit',
											$author$project$Elm$Review$Main$decodeFixLimit,
											A3(
												$author$project$Elm$Review$Main$field,
												'fixMode',
												$author$project$Elm$Review$Main$decodeFix,
												$elm$json$Json$Decode$succeed($author$project$Elm$Review$Main$DecodedFlags)))))))))))));
var $elm$json$Json$Decode$decodeValue = _Json_run;
var $elm$json$Json$Encode$bool = _Json_wrap;
var $author$project$Elm$Review$CliCommunication$dummy = $elm$json$Json$Encode$bool(true);
var $author$project$Elm$Review$RefusedErrorFixes$RefusedErrorFixes = $elm$core$Basics$identity;
var $author$project$Elm$Review$RefusedErrorFixes$empty = $elm$core$Set$empty;
var $author$project$Elm$Review$SuppressedErrors$SuppressedErrors = $elm$core$Basics$identity;
var $author$project$Elm$Review$SuppressedErrors$empty = $elm$core$Dict$empty;
var $author$project$Elm$Review$Main$encodePosition = function (position) {
	return $elm$json$Json$Encode$object(
		_List_fromArray(
			[
				_Utils_Tuple2(
				'line',
				$elm$json$Json$Encode$int(position.d0)),
				_Utils_Tuple2(
				'column',
				$elm$json$Json$Encode$int(position.eF))
			]));
};
var $author$project$Elm$Review$Main$encodeRange = function (range) {
	return $elm$json$Json$Encode$object(
		_List_fromArray(
			[
				_Utils_Tuple2(
				'start',
				$author$project$Elm$Review$Main$encodePosition(range.bQ)),
				_Utils_Tuple2(
				'end',
				$author$project$Elm$Review$Main$encodePosition(range.bu))
			]));
};
var $author$project$Elm$Review$Main$encodeReportPart = function (_v0) {
	var str = _v0.fH;
	var color = _v0.eE;
	var href = _v0.e$;
	return (_Utils_eq(color, $elm$core$Maybe$Nothing) && _Utils_eq(href, $elm$core$Maybe$Nothing)) ? $elm$json$Json$Encode$string(str) : $elm$json$Json$Encode$object(
		A2(
			$elm$core$List$filterMap,
			$elm$core$Basics$identity,
			_List_fromArray(
				[
					$elm$core$Maybe$Just(
					_Utils_Tuple2(
						'string',
						$elm$json$Json$Encode$string(str))),
					A2(
					$elm$core$Maybe$map,
					A2(
						$elm$core$Basics$composeR,
						$elm$json$Json$Encode$string,
						$elm$core$Tuple$pair('color')),
					color),
					A2(
					$elm$core$Maybe$map,
					A2(
						$elm$core$Basics$composeR,
						$elm$json$Json$Encode$string,
						$elm$core$Tuple$pair('href')),
					href)
				])));
};
var $elm$json$Json$Encode$list = F2(
	function (func, entries) {
		return _Json_wrap(
			A3(
				$elm$core$List$foldl,
				_Json_addEntry(func),
				_Json_emptyArray(0),
				entries));
	});
var $author$project$Elm$Review$Main$encodeReport = function (texts) {
	return A2($elm$json$Json$Encode$list, $author$project$Elm$Review$Main$encodeReportPart, texts);
};
var $author$project$Elm$Review$Reporter$Reviewing = 0;
var $author$project$Elm$Review$Text$Text = $elm$core$Basics$identity;
var $author$project$Elm$Review$Text$from = function (value) {
	return {eE: $elm$core$Maybe$Nothing, e$: $elm$core$Maybe$Nothing, fH: value};
};
var $elm$core$String$trimLeft = _String_trimLeft;
var $author$project$Elm$Review$Reporter$getIndexOfFirstNonSpace = function (string) {
	return $elm$core$String$length(string) - $elm$core$String$length(
		$elm$core$String$trimLeft(string));
};
var $elm$core$List$intersperse = F2(function (sep, xs) {
  if (!xs.b) {
    return xs;
  }
  var tmp = _List_Cons(undefined, _List_Nil);
  var end = tmp;

  end.b = _List_Cons(xs.a, _List_Nil);
  end = end.b;
  xs = xs.b;

  for (; xs.b; xs = xs.b) {
    var valNode = _List_Cons(xs.a, _List_Nil);
    var sepNode = _List_Cons(sep, valNode);
    end.b = sepNode;
    end = valNode;
  }

  return tmp.b;
});
var $author$project$Elm$Review$Text$join = F2(
	function (sep, chunks) {
		return $elm$core$List$concat(
			A2(
				$elm$core$List$intersperse,
				_List_fromArray(
					[
						$author$project$Elm$Review$Text$from(sep)
					]),
				chunks));
	});
var $author$project$Elm$Review$Reporter$lengthOfLineNumber = function (lineNumber) {
	return $elm$core$String$length(
		$elm$core$String$fromInt(lineNumber));
};
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
var $elm$core$String$padLeft = F3(
	function (n, _char, string) {
		return _Utils_ap(
			A2(
				$elm$core$String$repeat,
				n - $elm$core$String$length(string),
				$elm$core$String$fromChar(_char)),
			string);
	});
var $author$project$Elm$Review$Reporter$lineNumberPrefix = F2(
	function (maxLineNumberLength, rowIndex) {
		return A3(
			$elm$core$String$padLeft,
			maxLineNumberLength,
			' ',
			$elm$core$String$fromInt(rowIndex + 1)) + '| ';
	});
var $elm$core$String$trimRight = _String_trimRight;
var $author$project$Elm$Review$Text$inRed = function (_v0) {
	var text = _v0;
	return _Utils_update(
		text,
		{
			eE: $elm$core$Maybe$Just('#FF0000')
		});
};
var $author$project$Elm$Review$Reporter$underline = F2(
	function (gutterLength, _v0) {
		var start = _v0.bQ;
		var end = _v0.bu;
		var lineContent = _v0.cq;
		var lineChars = $elm$core$String$toList(lineContent);
		var preText = A2($elm$core$List$take, (gutterLength + start) - 1, lineChars);
		var unicodePreOffset = $elm$core$String$length(
			$elm$core$String$fromList(preText)) - $elm$core$List$length(preText);
		var inText = A2(
			$elm$core$List$take,
			end - start,
			A2($elm$core$List$drop, (gutterLength + start) - 1, lineChars));
		var unicodeInOffset = $elm$core$String$length(
			$elm$core$String$fromList(inText)) - $elm$core$List$length(inText);
		return _List_fromArray(
			[
				$author$project$Elm$Review$Text$from(
				A2($elm$core$String$repeat, ((gutterLength + unicodePreOffset) + start) - 1, ' ')),
				$author$project$Elm$Review$Text$inRed(
				$author$project$Elm$Review$Text$from(
					A2($elm$core$String$repeat, (unicodeInOffset + end) - start, '^')))
			]);
	});
var $author$project$Elm$Review$Reporter$underlineWholeLine = F2(
	function (gutterLength, line) {
		var start = $author$project$Elm$Review$Reporter$getIndexOfFirstNonSpace(line);
		var end = $elm$core$String$length(line);
		return _List_fromArray(
			[
				$author$project$Elm$Review$Text$from(
				A2($elm$core$String$repeat, gutterLength + start, ' ')),
				$author$project$Elm$Review$Text$inRed(
				$author$project$Elm$Review$Text$from(
					A2($elm$core$String$repeat, end - start, '^')))
			]);
	});
var $author$project$Elm$Review$Reporter$codeExtract = function (_v0) {
	var source = _v0;
	var lines = $elm$core$Array$fromList(
		$elm$core$String$lines(source));
	var getRowAtLine = function (rowIndex) {
		var _v2 = A2($elm$core$Array$get, rowIndex, lines);
		if (!_v2.$) {
			var line = _v2.a;
			return $elm$core$String$trimRight(line);
		} else {
			return '';
		}
	};
	return function (_v1) {
		var start = _v1.bQ;
		var end = _v1.bu;
		var maxLineNumber = $elm$core$String$isEmpty(
			getRowAtLine(end.d0 + 1)) ? end.d0 : (end.d0 + 1);
		var maxLineNumberLength = $author$project$Elm$Review$Reporter$lengthOfLineNumber(maxLineNumber);
		var gutterLength = $elm$core$String$length(
			A2($author$project$Elm$Review$Reporter$lineNumberPrefix, maxLineNumberLength, maxLineNumber));
		var getRowWithLineNumberUnlessEmpty = function (rowIndex) {
			var line = getRowAtLine(rowIndex);
			return $elm$core$String$isEmpty(line) ? _List_Nil : _List_fromArray(
				[
					$author$project$Elm$Review$Text$from(
					_Utils_ap(
						A2($author$project$Elm$Review$Reporter$lineNumberPrefix, maxLineNumberLength, rowIndex),
						line))
				]);
		};
		var getRowWithLineNumber = function (rowIndex) {
			return _Utils_ap(
				A2($author$project$Elm$Review$Reporter$lineNumberPrefix, maxLineNumberLength, rowIndex),
				getRowAtLine(rowIndex));
		};
		if (_Utils_eq(start.d0, end.d0)) {
			if (_Utils_eq(start.eF, end.eF)) {
				return _List_Nil;
			} else {
				var lineContent = getRowWithLineNumber(start.d0 - 1);
				return A2(
					$author$project$Elm$Review$Text$join,
					'\n',
					A2(
						$elm$core$List$filter,
						A2($elm$core$Basics$composeL, $elm$core$Basics$not, $elm$core$List$isEmpty),
						_List_fromArray(
							[
								getRowWithLineNumberUnlessEmpty(start.d0 - 2),
								_List_fromArray(
								[
									$author$project$Elm$Review$Text$from(lineContent)
								]),
								A2(
								$author$project$Elm$Review$Reporter$underline,
								gutterLength,
								{bu: end.eF, cq: lineContent, bQ: start.eF}),
								getRowWithLineNumberUnlessEmpty(end.d0)
							])));
			}
		} else {
			var startLineNumber = start.d0 - 1;
			var startLineContent = getRowAtLine(startLineNumber);
			var startLineContentWithLineNumber = _Utils_ap(
				A2($author$project$Elm$Review$Reporter$lineNumberPrefix, maxLineNumberLength, startLineNumber),
				startLineContent);
			var linesBetweenStartAndEnd = A2($elm$core$List$range, start.d0, end.d0 - 2);
			var endLine = end.d0 - 1;
			var endLineContent = getRowAtLine(endLine);
			var endLineContentWithLineNumber = _Utils_ap(
				A2($author$project$Elm$Review$Reporter$lineNumberPrefix, maxLineNumberLength, endLine),
				endLineContent);
			return A2(
				$author$project$Elm$Review$Text$join,
				'\n',
				A2(
					$elm$core$List$filter,
					A2($elm$core$Basics$composeL, $elm$core$Basics$not, $elm$core$List$isEmpty),
					_List_fromArray(
						[
							getRowWithLineNumberUnlessEmpty(startLineNumber - 1),
							_List_fromArray(
							[
								$author$project$Elm$Review$Text$from(startLineContentWithLineNumber)
							]),
							A2(
							$author$project$Elm$Review$Reporter$underline,
							gutterLength,
							{
								bu: $elm$core$List$length(
									$elm$core$String$toList(startLineContent)) + 1,
								cq: startLineContentWithLineNumber,
								bQ: start.eF
							}),
							A2(
							$author$project$Elm$Review$Text$join,
							'\n',
							A2(
								$elm$core$List$map,
								function (middleLine) {
									var line = getRowAtLine(middleLine);
									return $elm$core$String$isEmpty(line) ? _List_fromArray(
										[
											$author$project$Elm$Review$Text$from(
											getRowWithLineNumber(middleLine))
										]) : A2(
										$elm$core$List$cons,
										$author$project$Elm$Review$Text$from(
											getRowWithLineNumber(middleLine)),
										A2(
											$elm$core$List$cons,
											$author$project$Elm$Review$Text$from('\n'),
											A2($author$project$Elm$Review$Reporter$underlineWholeLine, gutterLength, line)));
								},
								linesBetweenStartAndEnd)),
							_List_fromArray(
							[
								$author$project$Elm$Review$Text$from(endLineContentWithLineNumber)
							]),
							A2(
							$author$project$Elm$Review$Reporter$underline,
							gutterLength,
							{
								bu: end.eF,
								cq: endLineContentWithLineNumber,
								bQ: $author$project$Elm$Review$Reporter$getIndexOfFirstNonSpace(endLineContent) + 1
							}),
							getRowWithLineNumberUnlessEmpty(endLine + 1)
						])));
		}
	};
};
var $author$project$Elm$Review$Text$inBlue = function (_v0) {
	var text = _v0;
	return _Utils_update(
		text,
		{
			eE: $elm$core$Maybe$Just('#33BBC8')
		});
};
var $author$project$Elm$Review$Text$inYellow = function (_v0) {
	var text = _v0;
	return _Utils_update(
		text,
		{
			eE: $elm$core$Maybe$Just('#E8C338')
		});
};
var $author$project$Elm$Review$Reporter$addFixPrefix = F4(
	function (fixProblemDict, mode, error, previous) {
		var _v0 = error.dA;
		if (!_v0.$) {
			var fixKey = _v0.a;
			if (mode === 1) {
				return previous;
			} else {
				return A2($elm$core$Dict$member, fixKey, fixProblemDict) ? A2(
					$elm$core$List$cons,
					$author$project$Elm$Review$Text$inYellow(
						$author$project$Elm$Review$Text$from('(FIX FAILED) ')),
					previous) : A2(
					$elm$core$List$cons,
					$author$project$Elm$Review$Text$inBlue(
						$author$project$Elm$Review$Text$from('(fix) ')),
					previous);
			}
		} else {
			return previous;
		}
	});
var $author$project$Elm$Review$Text$inOrange = function (_v0) {
	var text = _v0;
	return _Utils_update(
		text,
		{
			eE: $elm$core$Maybe$Just('#FFA500')
		});
};
var $author$project$Elm$Review$Reporter$addSuppressedPrefix = F2(
	function (error, previous) {
		return error.eb ? A2(
			$elm$core$List$cons,
			$author$project$Elm$Review$Text$inOrange(
				$author$project$Elm$Review$Text$from('(unsuppressed) ')),
			previous) : previous;
	});
var $author$project$Elm$Review$Text$withLink = F2(
	function (maybeLink, _v0) {
		var text = _v0;
		return _Utils_update(
			text,
			{e$: maybeLink});
	});
var $author$project$Elm$Review$Reporter$formatErrorTitle = F3(
	function (fixProblemDict, mode, error) {
		return A2(
			$author$project$Elm$Review$Reporter$addSuppressedPrefix,
			error,
			A4(
				$author$project$Elm$Review$Reporter$addFixPrefix,
				fixProblemDict,
				mode,
				error,
				_List_fromArray(
					[
						A2(
						$author$project$Elm$Review$Text$withLink,
						error.d1,
						$author$project$Elm$Review$Text$inRed(
							$author$project$Elm$Review$Text$from(error.c3))),
						$author$project$Elm$Review$Text$from(': ' + error.e8)
					])));
	});
var $author$project$Elm$Review$Reporter$reasonFromProblem = function (problem) {
	switch (problem.$) {
		case 0:
			return 'it resulted in the same source code.';
		case 1:
			return 'it resulted in invalid Elm code.';
		default:
			return 'it was invalid.';
	}
};
var $author$project$Elm$Review$Reporter$formatErrorWithExtract = F5(
	function (fixProblemDict, detailsMode, mode, source, error) {
		var fixFailMessage = function () {
			var _v2 = error.dA;
			if (!_v2.$) {
				var fixKey = _v2.a;
				if (mode === 1) {
					return _List_Nil;
				} else {
					var _v4 = A2($elm$core$Dict$get, fixKey, fixProblemDict);
					if (!_v4.$) {
						var problem = _v4.a;
						return _List_fromArray(
							[
								$author$project$Elm$Review$Text$from('\n\n'),
								$author$project$Elm$Review$Text$inYellow(
								$author$project$Elm$Review$Text$from(
									'I failed to apply the automatic fix because ' + $author$project$Elm$Review$Reporter$reasonFromProblem(problem)))
							]);
					} else {
						return _List_Nil;
					}
				}
			} else {
				return _List_Nil;
			}
		}();
		var details = function () {
			if (!detailsMode) {
				return A2(
					$elm$core$List$cons,
					$author$project$Elm$Review$Text$from('\n\n'),
					A2(
						$elm$core$List$intersperse,
						$author$project$Elm$Review$Text$from('\n\n'),
						A2($elm$core$List$map, $author$project$Elm$Review$Text$from, error.eL)));
			} else {
				return _List_Nil;
			}
		}();
		var codeExtract_ = function () {
			var _v0 = A2($author$project$Elm$Review$Reporter$codeExtract, source, error.c1);
			if (!_v0.b) {
				return _List_Nil;
			} else {
				var sourceCodeExtract = _v0;
				return A2(
					$elm$core$List$cons,
					$author$project$Elm$Review$Text$from('\n\n'),
					sourceCodeExtract);
			}
		}();
		return $elm$core$List$concat(
			_List_fromArray(
				[
					A3($author$project$Elm$Review$Reporter$formatErrorTitle, fixProblemDict, mode, error),
					codeExtract_,
					details,
					fixFailMessage
				]));
	});
var $author$project$Elm$Review$Text$simplifyHelp = F3(
	function (previousTexts, lastText, chunks) {
		simplifyHelp:
		while (true) {
			if (!chunks.b) {
				return A2($elm$core$List$cons, lastText, previousTexts);
			} else {
				var newLastText = chunks.a;
				var restOfChunks = chunks.b;
				if (_Utils_eq(lastText.eE, newLastText.eE) && _Utils_eq(lastText.e$, newLastText.e$)) {
					var $temp$previousTexts = previousTexts,
						$temp$lastText = {
						eE: lastText.eE,
						e$: lastText.e$,
						fH: _Utils_ap(lastText.fH, newLastText.fH)
					},
						$temp$chunks = restOfChunks;
					previousTexts = $temp$previousTexts;
					lastText = $temp$lastText;
					chunks = $temp$chunks;
					continue simplifyHelp;
				} else {
					var $temp$previousTexts = A2($elm$core$List$cons, lastText, previousTexts),
						$temp$lastText = newLastText,
						$temp$chunks = restOfChunks;
					previousTexts = $temp$previousTexts;
					lastText = $temp$lastText;
					chunks = $temp$chunks;
					continue simplifyHelp;
				}
			}
		}
	});
var $author$project$Elm$Review$Text$simplify = function (chunks) {
	if (!chunks.b) {
		return _List_Nil;
	} else {
		var chunk = chunks.a;
		var restOfChunks = chunks.b;
		return $elm$core$List$reverse(
			A3($author$project$Elm$Review$Text$simplifyHelp, _List_Nil, chunk, restOfChunks));
	}
};
var $author$project$Elm$Review$Text$toRecord = function (_v0) {
	var text = _v0;
	return text;
};
var $author$project$Elm$Review$Reporter$formatIndividualError = F4(
	function (fixProblemDict, detailsMode, source, error) {
		return A2(
			$elm$core$List$map,
			$author$project$Elm$Review$Text$toRecord,
			$author$project$Elm$Review$Text$simplify(
				A5($author$project$Elm$Review$Reporter$formatErrorWithExtract, fixProblemDict, detailsMode, 0, source, error)));
	});
var $author$project$Elm$Review$Main$encodeConfigurationError = F2(
	function (detailsMode, error) {
		return $elm$json$Json$Encode$object(
			_List_fromArray(
				[
					_Utils_Tuple2(
					'rule',
					$elm$json$Json$Encode$string(error.c3)),
					_Utils_Tuple2(
					'message',
					$elm$json$Json$Encode$string(error.e8)),
					_Utils_Tuple2(
					'details',
					A2($elm$json$Json$Encode$list, $elm$json$Json$Encode$string, error.eL)),
					_Utils_Tuple2(
					'region',
					$author$project$Elm$Review$Main$encodeRange($stil4m$elm_syntax$Elm$Syntax$Range$emptyRange)),
					_Utils_Tuple2(
					'formatted',
					$author$project$Elm$Review$Main$encodeReport(
						A4($author$project$Elm$Review$Reporter$formatIndividualError, $elm$core$Dict$empty, detailsMode, '', error)))
				]));
	});
var $elm$json$Json$Encode$null = _Json_encodeNull;
var $author$project$Elm$Review$Main$encodeFilePath = function (filePath) {
	switch (filePath.$) {
		case 0:
			var path = filePath.a;
			return $elm$json$Json$Encode$string(path);
		case 1:
			return $elm$json$Json$Encode$null;
		default:
			return $elm$json$Json$Encode$null;
	}
};
var $author$project$Elm$Review$Main$encodeConfigurationErrors = F2(
	function (detailsMode, errors) {
		return $elm$json$Json$Encode$object(
			_List_fromArray(
				[
					_Utils_Tuple2(
					'path',
					$author$project$Elm$Review$Main$encodeFilePath($author$project$Elm$Review$Reporter$ConfigurationError)),
					_Utils_Tuple2(
					'errors',
					A2(
						$elm$json$Json$Encode$list,
						$author$project$Elm$Review$Main$encodeConfigurationError(detailsMode),
						errors))
				]));
	});
var $author$project$Elm$Review$Reporter$classifyFixesHelp = F3(
	function (fixProblemDict, errors, acc) {
		classifyFixesHelp:
		while (true) {
			if (!errors.b) {
				return acc;
			} else {
				var error = errors.a;
				var rest = errors.b;
				var isInvalid = function () {
					var _v1 = error.dA;
					if (!_v1.$) {
						var fixesHash = _v1.a;
						return A2($elm$core$Dict$member, fixesHash, fixProblemDict);
					} else {
						return false;
					}
				}();
				if (isInvalid) {
					var $temp$fixProblemDict = fixProblemDict,
						$temp$errors = rest,
						$temp$acc = {
						a8: acc.a8,
						aY: A2($elm$core$List$cons, error, acc.aY)
					};
					fixProblemDict = $temp$fixProblemDict;
					errors = $temp$errors;
					acc = $temp$acc;
					continue classifyFixesHelp;
				} else {
					var $temp$fixProblemDict = fixProblemDict,
						$temp$errors = rest,
						$temp$acc = {a8: true, aY: acc.aY};
					fixProblemDict = $temp$fixProblemDict;
					errors = $temp$errors;
					acc = $temp$acc;
					continue classifyFixesHelp;
				}
			}
		}
	});
var $author$project$Elm$Review$Reporter$classifyFixes = F2(
	function (fixProblemDict, errors) {
		var _v0 = A3(
			$author$project$Elm$Review$Reporter$classifyFixesHelp,
			fixProblemDict,
			errors,
			{a8: false, aY: _List_Nil});
		var invalidFixableErrors = _v0.aY;
		var hasIgnoredFixableErrors = _v0.a8;
		return {
			a8: hasIgnoredFixableErrors,
			aY: $elm$core$List$reverse(invalidFixableErrors)
		};
	});
var $author$project$Elm$Review$Reporter$filePath = function (path_) {
	switch (path_.$) {
		case 0:
			var str = path_.a;
			return str;
		case 1:
			return '';
		default:
			return '';
	}
};
var $author$project$Elm$Review$Reporter$fixableErrors = function (files) {
	return A2(
		$elm$core$List$concatMap,
		A2(
			$elm$core$Basics$composeR,
			function ($) {
				return $.aT;
			},
			$elm$core$List$filter(
				function (error) {
					return !_Utils_eq(error.dA, $elm$core$Maybe$Nothing);
				})),
		files);
};
var $elm$core$List$sum = function (numbers) {
	return A3($elm$core$List$foldl, $elm$core$Basics$add, 0, numbers);
};
var $elm$core$Dict$values = function (dict) {
	return A3(
		$elm$core$Dict$foldr,
		F3(
			function (key, value, valueList) {
				return A2($elm$core$List$cons, value, valueList);
			}),
		_List_Nil,
		dict);
};
var $author$project$Elm$Review$SuppressedErrors$count = function (_v0) {
	var suppressedErrors = _v0;
	return $elm$core$List$sum(
		$elm$core$Dict$values(suppressedErrors));
};
var $author$project$Elm$Review$Text$inGreen = function (_v0) {
	var text = _v0;
	return _Utils_update(
		text,
		{
			eE: $elm$core$Maybe$Just('#008000')
		});
};
var $author$project$Elm$Review$Reporter$pluralizeEnding = F2(
	function (n, word) {
		return (n > 1) ? (word + 's') : word;
	});
var $author$project$Elm$Review$Reporter$formatNoErrors = F3(
	function (suppressedErrors, originalNumberOfSuppressedErrors, errorsHaveBeenFixedPreviously) {
		var numberOfSuppressedErrors = $author$project$Elm$Review$SuppressedErrors$count(suppressedErrors);
		var suppressedErrorMessage = function () {
			if (!numberOfSuppressedErrors) {
				return _List_Nil;
			} else {
				var are = (numberOfSuppressedErrors === 1) ? 'is' : 'are';
				return $elm$core$List$concat(
					_List_fromArray(
						[
							_List_fromArray(
							[
								$author$project$Elm$Review$Text$from('\n\nThere ' + (are + ' still ')),
								$author$project$Elm$Review$Text$inOrange(
								$author$project$Elm$Review$Text$from(
									$elm$core$String$fromInt(numberOfSuppressedErrors) + (' suppressed ' + A2($author$project$Elm$Review$Reporter$pluralizeEnding, numberOfSuppressedErrors, 'error')))),
								$author$project$Elm$Review$Text$from(' to address')
							]),
							(_Utils_cmp(numberOfSuppressedErrors, originalNumberOfSuppressedErrors) < 0) ? _List_fromArray(
							[
								$author$project$Elm$Review$Text$from(', and you just fixed '),
								$author$project$Elm$Review$Text$inGreen(
								$author$project$Elm$Review$Text$from(
									$elm$core$String$fromInt(originalNumberOfSuppressedErrors - numberOfSuppressedErrors))),
								$author$project$Elm$Review$Text$from('!')
							]) : _List_fromArray(
							[
								$author$project$Elm$Review$Text$from('.')
							])
						]));
			}
		}();
		var mainMessage = errorsHaveBeenFixedPreviously ? 'I found no more errors!' : 'I found no errors!';
		return A2(
			$elm$core$List$map,
			$author$project$Elm$Review$Text$toRecord,
			A2(
				$elm$core$List$cons,
				$author$project$Elm$Review$Text$from(mainMessage),
				suppressedErrorMessage));
	});
var $author$project$Elm$Review$Reporter$fileSeparator = F2(
	function (pathAbove, pathBelow) {
		return _List_fromArray(
			[
				$author$project$Elm$Review$Text$from(
				'\n\n' + A2(
					$elm$core$String$repeat,
					73 - $elm$core$String$length(
						$author$project$Elm$Review$Reporter$filePath(pathAbove)),
					' ')),
				$author$project$Elm$Review$Text$inRed(
				$author$project$Elm$Review$Text$from(
					($author$project$Elm$Review$Reporter$filePath(pathAbove) + '  ↑') + ('\n====o======================================================================o====' + ('\n    ↓  ' + $author$project$Elm$Review$Reporter$filePath(pathBelow))))),
				$author$project$Elm$Review$Text$from('\n\n\n')
			]);
	});
var $author$project$Elm$Review$Reporter$compareRange = F2(
	function (a, b) {
		return (_Utils_cmp(a.bQ.d0, b.bQ.d0) < 0) ? 0 : ((_Utils_cmp(a.bQ.d0, b.bQ.d0) > 0) ? 2 : ((_Utils_cmp(a.bQ.eF, b.bQ.eF) < 0) ? 0 : ((_Utils_cmp(a.bQ.eF, b.bQ.eF) > 0) ? 2 : ((_Utils_cmp(a.bu.d0, b.bu.d0) < 0) ? 0 : ((_Utils_cmp(a.bu.d0, b.bu.d0) > 0) ? 2 : ((_Utils_cmp(a.bu.eF, b.bu.eF) < 0) ? 0 : ((_Utils_cmp(a.bu.eF, b.bu.eF) > 0) ? 2 : 1)))))));
	});
var $author$project$Elm$Review$Reporter$compareErrorPositions = F2(
	function (a, b) {
		return A2($author$project$Elm$Review$Reporter$compareRange, a.c1, b.c1);
	});
var $author$project$Elm$Review$Reporter$firstErrorPrefix = '-- ELM-REVIEW ERROR -';
var $author$project$Elm$Review$Reporter$header = F3(
	function (isFirstError, filePath_, range) {
		var position = function () {
			switch (filePath_.$) {
				case 0:
					var str = filePath_.a;
					return ' ' + (str + (':' + ($elm$core$String$fromInt(range.bQ.d0) + (':' + $elm$core$String$fromInt(range.bQ.eF)))));
				case 1:
					return ' GLOBAL ERROR';
				default:
					return ' CONFIGURATION ERROR';
			}
		}();
		return isFirstError ? $author$project$Elm$Review$Text$inBlue(
			$author$project$Elm$Review$Text$from(
				_Utils_ap(
					$author$project$Elm$Review$Reporter$firstErrorPrefix,
					A3(
						$elm$core$String$padLeft,
						80 - $elm$core$String$length($author$project$Elm$Review$Reporter$firstErrorPrefix),
						'-',
						position)))) : $author$project$Elm$Review$Text$from(
			'────' + A3($elm$core$String$padLeft, 76, '─', position));
	});
var $author$project$Elm$Review$Reporter$formatReportForFileWithExtract = F4(
	function (fixProblemDict, detailsMode, mode, file) {
		return A2(
			$author$project$Elm$Review$Text$join,
			'\n\n',
			A2(
				$elm$core$List$indexedMap,
				F2(
					function (index, error) {
						return A2(
							$author$project$Elm$Review$Text$join,
							'\n\n',
							_List_fromArray(
								[
									_List_fromArray(
									[
										A3($author$project$Elm$Review$Reporter$header, !index, file.fr, error.c1)
									]),
									A5($author$project$Elm$Review$Reporter$formatErrorWithExtract, fixProblemDict, detailsMode, mode, file.fE, error)
								]));
					}),
				A2($elm$core$List$sortWith, $author$project$Elm$Review$Reporter$compareErrorPositions, file.aT)));
	});
var $author$project$Elm$Review$Reporter$formatReports = F3(
	function (fixProblemDict, detailsMode, files) {
		if (!files.b) {
			return _List_Nil;
		} else {
			if (!files.b.b) {
				var file = files.a;
				return A4($author$project$Elm$Review$Reporter$formatReportForFileWithExtract, fixProblemDict, detailsMode, 0, file);
			} else {
				var firstFile = files.a;
				var _v1 = files.b;
				var secondFile = _v1.a;
				var restOfFiles = _v1.b;
				return $elm$core$List$concat(
					_List_fromArray(
						[
							A4($author$project$Elm$Review$Reporter$formatReportForFileWithExtract, fixProblemDict, detailsMode, 0, firstFile),
							A2($author$project$Elm$Review$Reporter$fileSeparator, firstFile.fr, secondFile.fr),
							A3(
							$author$project$Elm$Review$Reporter$formatReports,
							fixProblemDict,
							detailsMode,
							A2($elm$core$List$cons, secondFile, restOfFiles))
						]));
			}
		}
	});
var $author$project$Elm$Review$Reporter$pluralize = F2(
	function (n, word) {
		return $elm$core$String$fromInt(n) + (' ' + A2($author$project$Elm$Review$Reporter$pluralizeEnding, n, word));
	});
var $author$project$Elm$Review$Reporter$showUnsuppressedWarning = F2(
	function (unsuppressMode, files) {
		switch (unsuppressMode.$) {
			case 0:
				return false;
			case 1:
				var set = unsuppressMode.a;
				return A2(
					$elm$core$List$any,
					function (file) {
						return A2(
							$elm$core$List$any,
							function (error) {
								return error.eb && (!A2($elm$core$Set$member, error.c3, set));
							},
							file.aT);
					},
					files);
			default:
				return A2(
					$elm$core$List$any,
					function (file) {
						return A2(
							$elm$core$List$any,
							function (error) {
								return error.eb;
							},
							file.aT);
					},
					files);
		}
	});
var $author$project$Elm$Review$Reporter$totalNumberOfErrorsHelp = F2(
	function (files, acc) {
		totalNumberOfErrorsHelp:
		while (true) {
			if (!files.b) {
				return acc;
			} else {
				var file = files.a;
				var xs = files.b;
				var $temp$files = xs,
					$temp$acc = acc + $elm$core$List$length(file.aT);
				files = $temp$files;
				acc = $temp$acc;
				continue totalNumberOfErrorsHelp;
			}
		}
	});
var $author$project$Elm$Review$Reporter$totalNumberOfErrors = function (files) {
	return A2($author$project$Elm$Review$Reporter$totalNumberOfErrorsHelp, files, 0);
};
var $author$project$Elm$Review$Reporter$formatReport = F2(
	function (_v0, files) {
		var suppressedErrors = _v0.C;
		var unsuppressMode = _v0.an;
		var originalNumberOfSuppressedErrors = _v0.bK;
		var detailsMode = _v0.U;
		var errorsHaveBeenFixedPreviously = _v0.bv;
		var fixProblemDict = _v0.dz;
		var numberOfErrors = $author$project$Elm$Review$Reporter$totalNumberOfErrors(files);
		var filesWithErrors = A2(
			$elm$core$List$sortBy,
			A2(
				$elm$core$Basics$composeR,
				function ($) {
					return $.fr;
				},
				$author$project$Elm$Review$Reporter$filePath),
			A2(
				$elm$core$List$filter,
				A2(
					$elm$core$Basics$composeR,
					function ($) {
						return $.aT;
					},
					A2($elm$core$Basics$composeR, $elm$core$List$isEmpty, $elm$core$Basics$not)),
				files));
		if (!numberOfErrors) {
			return A3($author$project$Elm$Review$Reporter$formatNoErrors, suppressedErrors, originalNumberOfSuppressedErrors, errorsHaveBeenFixedPreviously);
		} else {
			var _v1 = A2(
				$author$project$Elm$Review$Reporter$classifyFixes,
				fixProblemDict,
				$author$project$Elm$Review$Reporter$fixableErrors(files));
			var invalidFixableErrors = _v1.aY;
			var hasIgnoredFixableErrors = _v1.a8;
			return A2(
				$elm$core$List$map,
				$author$project$Elm$Review$Text$toRecord,
				$author$project$Elm$Review$Text$simplify(
					A2(
						$author$project$Elm$Review$Text$join,
						'\n\n',
						A2(
							$elm$core$List$filterMap,
							$elm$core$Basics$identity,
							_List_fromArray(
								[
									$elm$core$Maybe$Just(
									A3($author$project$Elm$Review$Reporter$formatReports, fixProblemDict, detailsMode, filesWithErrors)),
									A2($author$project$Elm$Review$Reporter$showUnsuppressedWarning, unsuppressMode, files) ? $elm$core$Maybe$Just(
									_List_fromArray(
										[
											$author$project$Elm$Review$Text$inOrange(
											$author$project$Elm$Review$Text$from('Errors marked with (unsuppressed) were previously suppressed, but you introduced new errors for the same rule and file. There are now more of those than what I previously allowed. Please fix them until you have at most as many errors as before. Maybe fix a few more while you\'re there?'))
										])) : $elm$core$Maybe$Nothing,
									hasIgnoredFixableErrors ? $elm$core$Maybe$Just(
									_List_fromArray(
										[
											$author$project$Elm$Review$Text$inBlue(
											$author$project$Elm$Review$Text$from('Errors marked with (fix) can be fixed automatically using `elm-review --fix`.'))
										])) : $elm$core$Maybe$Nothing,
									function () {
									if (!$elm$core$List$isEmpty(invalidFixableErrors)) {
										var ruleNames = $elm$core$Set$toList(
											$elm$core$Set$fromList(
												A2(
													$elm$core$List$map,
													function ($) {
														return $.c3;
													},
													invalidFixableErrors)));
										return $elm$core$Maybe$Just(
											_List_fromArray(
												[
													$author$project$Elm$Review$Text$inYellow(
													$author$project$Elm$Review$Text$from(
														'I tried applying some fixes but they failed in ways the author(s) didn\'t expect. Please let the author(s) of the following rules know:\n- ' + A2($elm$core$String$join, '\n- ', ruleNames)))
												]));
									} else {
										return $elm$core$Maybe$Nothing;
									}
								}(),
									$elm$core$Maybe$Just(
									_List_fromArray(
										[
											$author$project$Elm$Review$Text$from('I found '),
											$author$project$Elm$Review$Text$inRed(
											$author$project$Elm$Review$Text$from(
												A2($author$project$Elm$Review$Reporter$pluralize, numberOfErrors, 'error'))),
											$author$project$Elm$Review$Text$from(' in '),
											$author$project$Elm$Review$Text$inYellow(
											$author$project$Elm$Review$Text$from(
												A2(
													$author$project$Elm$Review$Reporter$pluralize,
													$elm$core$List$length(filesWithErrors),
													'file'))),
											$author$project$Elm$Review$Text$from('.')
										]))
								])))));
		}
	});
var $jfmengels$elm_review$Review$Rule$getConfigurationError = function (_v0) {
	var rule = _v0;
	return rule.aq;
};
var $jfmengels$elm_review$Review$Rule$ruleName = function (_v0) {
	var rule = _v0;
	return rule.fe;
};
var $author$project$Elm$Review$Main$getConfigurationError = function (rule) {
	var _v0 = $jfmengels$elm_review$Review$Rule$getConfigurationError(rule);
	if (!_v0.$) {
		var configurationError = _v0.a;
		return $elm$core$Maybe$Just(
			{
				eL: configurationError.eL,
				dA: $elm$core$Maybe$Nothing,
				e8: configurationError.e8,
				c1: $stil4m$elm_syntax$Elm$Syntax$Range$emptyRange,
				d1: $elm$core$Maybe$Nothing,
				c3: $jfmengels$elm_review$Review$Rule$ruleName(rule),
				eb: false
			});
	} else {
		return $elm$core$Maybe$Nothing;
	}
};
var $jfmengels$elm_review$Review$Exceptions$addFilter = F2(
	function (condition, _v0) {
		var conditions = _v0;
		return A2($elm$core$List$cons, condition, conditions);
	});
var $jfmengels$elm_review$Review$Exceptions$isInAnIgnoredDirectory = F2(
	function (directories, path) {
		return A2(
			$elm$core$List$any,
			function (dir) {
				return A2($elm$core$String$startsWith, dir, path);
			},
			directories);
	});
var $jfmengels$elm_review$Review$Exceptions$addDirectories = function (directories) {
	var cleanedDirectories = A2(
		$elm$core$List$map,
		A2(
			$elm$core$Basics$composeR,
			$jfmengels$elm_review$Path$makeOSAgnostic,
			function (dir) {
				return A2($elm$core$String$endsWith, '/', dir) ? dir : (dir + '/');
			}),
		directories);
	return $jfmengels$elm_review$Review$Exceptions$addFilter(
		A2(
			$elm$core$Basics$composeR,
			$jfmengels$elm_review$Review$Exceptions$isInAnIgnoredDirectory(cleanedDirectories),
			$elm$core$Basics$not));
};
var $jfmengels$elm_review$Review$Rule$ignoreErrorsForDirectories = F2(
	function (directories, _v0) {
		var rule = _v0;
		return {
			aq: rule.aq,
			r: A2($jfmengels$elm_review$Review$Exceptions$addDirectories, directories, rule.r),
			aJ: rule.aJ,
			cm: rule.cm,
			fe: rule.fe,
			n: rule.n,
			R: rule.R,
			aD: rule.aD
		};
	});
var $jfmengels$elm_review$Review$Exceptions$addFiles = function (files) {
	var cleanedFiles = $elm$core$Set$fromList(
		A2($elm$core$List$map, $jfmengels$elm_review$Path$makeOSAgnostic, files));
	return $jfmengels$elm_review$Review$Exceptions$addFilter(
		function (file) {
			return !A2($elm$core$Set$member, file, cleanedFiles);
		});
};
var $jfmengels$elm_review$Review$Rule$ignoreErrorsForFiles = F2(
	function (files, _v0) {
		var rule = _v0;
		return {
			aq: rule.aq,
			r: A2($jfmengels$elm_review$Review$Exceptions$addFiles, files, rule.r),
			aJ: rule.aJ,
			cm: rule.cm,
			fe: rule.fe,
			n: rule.n,
			R: rule.R,
			aD: rule.aD
		};
	});
var $jfmengels$elm_review$Review$Project$Internal$Project = $elm$core$Basics$identity;
var $jfmengels$elm_review$Review$Project$ProjectCache$empty = {$7: $elm$core$Maybe$Nothing, cY: $elm$core$Dict$empty, aN: $elm$core$Dict$empty};
var $jfmengels$elm_review$Review$Project$new = {
	eA: $jfmengels$elm_review$Review$Project$ProjectCache$empty,
	av: $elm$core$Dict$empty,
	cg: $elm$core$Maybe$Nothing,
	dQ: $elm$core$Maybe$Nothing,
	aN: $elm$core$Dict$empty,
	bI: _List_Nil,
	c2: $elm$core$Maybe$Nothing,
	c5: _List_fromArray(
		['src/'])
};
var $elm$core$Platform$Cmd$batch = _Platform_batch;
var $elm$core$Platform$Cmd$none = $elm$core$Platform$Cmd$batch(_List_Nil);
var $author$project$Elm$Review$Vendor$Table$Table = F2(
	function (a, b) {
		return {$: 0, a: a, b: b};
	});
var $elm$core$Array$repeat = F2(
	function (n, e) {
		return A2(
			$elm$core$Array$initialize,
			n,
			function (_v0) {
				return e;
			});
	});
var $author$project$Elm$Review$Vendor$Table$empty = function (_v0) {
	var sizeA = _v0.a;
	var sizeB = _v0.b;
	var arraySize = ((sizeA + 1) * (sizeB + 1)) - 1;
	return A2(
		$author$project$Elm$Review$Vendor$Table$Table,
		sizeB + 1,
		A2($elm$core$Array$repeat, arraySize, -1));
};
var $elm$core$Elm$JsArray$unsafeSet = _JsArray_unsafeSet;
var $elm$core$Array$setHelp = F4(
	function (shift, index, value, tree) {
		var pos = $elm$core$Array$bitMask & (index >>> shift);
		var _v0 = A2($elm$core$Elm$JsArray$unsafeGet, pos, tree);
		if (!_v0.$) {
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
var $author$project$Elm$Review$Vendor$Table$fetch = F3(
	function (key, builder, table) {
		var iKey = key.a;
		var jKey = key.b;
		var dimension = table.a;
		var store = table.b;
		var index = (iKey * dimension) + jKey;
		var _v0 = A2($elm$core$Array$get, index, store);
		if (!_v0.$) {
			var value = _v0.a;
			if (_Utils_eq(value, -1)) {
				var _v1 = A2(builder, table, key);
				var _v2 = _v1.a;
				var newStore = _v2.b;
				var newValue = _v1.b;
				return _Utils_Tuple2(
					A2(
						$author$project$Elm$Review$Vendor$Table$Table,
						dimension,
						A3($elm$core$Array$set, index, newValue, newStore)),
					newValue);
			} else {
				return _Utils_Tuple2(table, value);
			}
		} else {
			return _Utils_Tuple2(table, -1);
		}
	});
var $elm$core$Array$length = function (_v0) {
	var len = _v0.a;
	return len;
};
var $author$project$Elm$Review$Vendor$Levenshtein$distanceHelper = F2(
	function (arr1, arr2) {
		var indecesForLastChars = _Utils_Tuple2(
			$elm$core$Array$length(arr1),
			$elm$core$Array$length(arr2));
		var calculateEditDistanceForChars = F2(
			function (table, _v0) {
				var i = _v0.a;
				var j = _v0.b;
				var _v1 = _Utils_Tuple2(
					A2($elm$core$Array$get, i - 1, arr1),
					A2($elm$core$Array$get, j - 1, arr2));
				if ((!_v1.a.$) && (!_v1.b.$)) {
					var chr1 = _v1.a.a;
					var chr2 = _v1.b.a;
					var _v2 = A3(
						$author$project$Elm$Review$Vendor$Table$fetch,
						_Utils_Tuple2(i - 1, j),
						calculateEditDistanceForChars,
						table);
					var table1 = _v2.a;
					var dist1 = _v2.b;
					var _v3 = A3(
						$author$project$Elm$Review$Vendor$Table$fetch,
						_Utils_Tuple2(i, j - 1),
						calculateEditDistanceForChars,
						table1);
					var table2 = _v3.a;
					var dist2 = _v3.b;
					var _v4 = A3(
						$author$project$Elm$Review$Vendor$Table$fetch,
						_Utils_Tuple2(i - 1, j - 1),
						calculateEditDistanceForChars,
						table2);
					var table3 = _v4.a;
					var dist3 = _v4.b;
					return _Utils_Tuple2(
						table3,
						(_Utils_cmp(dist3, dist1) < 0) ? ((_Utils_cmp(dist3, dist2) < 0) ? ((!_Utils_eq(chr1, chr2)) ? (dist3 + 1) : dist3) : (dist2 + 1)) : ((_Utils_cmp(dist1, dist2) > 0) ? (dist2 + 1) : (dist1 + 1)));
				} else {
					return _Utils_Tuple2(
						table,
						A2($elm$core$Basics$max, i, j));
				}
			});
		return A2(
			calculateEditDistanceForChars,
			$author$project$Elm$Review$Vendor$Table$empty(indecesForLastChars),
			indecesForLastChars).b;
	});
var $author$project$Elm$Review$Vendor$Levenshtein$distance = F2(
	function (str1, str2) {
		return _Utils_eq(str1, str2) ? 0 : A2(
			$author$project$Elm$Review$Vendor$Levenshtein$distanceHelper,
			$elm$core$Array$fromList(
				$elm$core$String$toList(str1)),
			$elm$core$Array$fromList(
				$elm$core$String$toList(str2)));
	});
var $author$project$Elm$Review$Main$closestNames = F2(
	function (names, name) {
		return A2(
			$elm$core$List$take,
			3,
			A2(
				$elm$core$List$sortBy,
				$author$project$Elm$Review$Vendor$Levenshtein$distance(name),
				names));
	});
var $author$project$Elm$Review$Main$unknownRulesFilterMessage = function (_v0) {
	var ruleNames = _v0.d2;
	var filterNames = _v0.dy;
	var unknownRulesMessage = A2(
		$elm$core$String$join,
		'\n\n',
		A2(
			$elm$core$List$map,
			function (filterName) {
				return '- ' + (filterName + ('. Did you mean:\n  - ' + A2(
					$elm$core$String$join,
					'\n  - ',
					A2($author$project$Elm$Review$Main$closestNames, ruleNames, filterName))));
			},
			filterNames));
	return {e8: 'You requested to only run several rules, but I could not find some of them.\n\n' + unknownRulesMessage, cc: 'UNKNOWN FILTERED RULE(S)'};
};
var $jfmengels$elm_review$Review$Rule$withRuleId = F2(
	function (id, _v0) {
		var rule = _v0;
		return _Utils_update(
			rule,
			{cm: id});
	});
var $author$project$Elm$Review$Main$init = function (rawFlags) {
	var rulesWithIds = A2($elm$core$List$indexedMap, $jfmengels$elm_review$Review$Rule$withRuleId, $author$project$ReviewConfig$config);
	var _v0 = function () {
		var _v1 = A2($elm$json$Json$Decode$decodeValue, $author$project$Elm$Review$Main$decodeFlags, rawFlags);
		if (!_v1.$) {
			var decodedFlags = _v1.a;
			return _Utils_Tuple2(decodedFlags, $elm$core$Platform$Cmd$none);
		} else {
			var error = _v1.a;
			return _Utils_Tuple2(
				{U: 1, bt: false, a4: $elm$core$Maybe$Nothing, aw: 0, bC: false, cT: _List_Nil, cU: _List_Nil, cX: $author$project$Elm$Review$CliCommunication$dummy, a1: 0, c4: $elm$core$Maybe$Nothing, an: $author$project$Elm$Review$UnsuppressMode$UnsuppressNone, bT: false},
				$author$project$Elm$Review$Main$abort(
					'Problem decoding the flags when running the elm-review runner:\n  ' + $elm$json$Json$Decode$errorToString(error)));
		}
	}();
	var flags = _v0.a;
	var cmd = _v0.b;
	var _v2 = function () {
		var _v3 = flags.c4;
		if (!_v3.$) {
			var rulesToEnable = _v3.a;
			var ruleNames = $elm$core$Set$fromList(
				A2($elm$core$List$map, $jfmengels$elm_review$Review$Rule$ruleName, rulesWithIds));
			return _Utils_Tuple2(
				A2(
					$elm$core$List$filter,
					function (rule) {
						return A2(
							$elm$core$Set$member,
							$jfmengels$elm_review$Review$Rule$ruleName(rule),
							rulesToEnable);
					},
					rulesWithIds),
				$elm$core$Set$toList(
					A2($elm$core$Set$diff, rulesToEnable, ruleNames)));
		} else {
			return _Utils_Tuple2(rulesWithIds, _List_Nil);
		}
	}();
	var rulesFromConfig = _v2.a;
	var filterNames = _v2.b;
	var rules = A2(
		$elm$core$List$map,
		A2(
			$elm$core$Basics$composeR,
			$jfmengels$elm_review$Review$Rule$ignoreErrorsForDirectories(flags.cT),
			$jfmengels$elm_review$Review$Rule$ignoreErrorsForFiles(flags.cU)),
		rulesFromConfig);
	return _Utils_Tuple2(
		{ap: flags.cX, U: flags.U, bt: flags.bt, ah: $author$project$Elm$Review$Main$NotAwaiting, bv: false, b1: $elm$core$Dict$empty, W: $elm$core$Dict$empty, X: $jfmengels$elm_review$Review$Project$new, by: rules, a4: flags.a4, aw: flags.aw, bC: flags.bC, co: true, a_: $elm$core$Dict$empty, bK: 0, e: $jfmengels$elm_review$Review$Project$new, bh: $author$project$Elm$Review$RefusedErrorFixes$empty, a1: flags.a1, bi: _List_Nil, ab: _List_Nil, aE: rules, C: $author$project$Elm$Review$SuppressedErrors$empty, an: flags.an, bT: flags.bT},
		function () {
			if ($elm$core$List$isEmpty($author$project$ReviewConfig$config)) {
				return $author$project$Elm$Review$Main$abortWithDetails(
					{e8: 'Your configuration contains no rules. You can add rules by editing the ReviewConfig.elm file.\n\nI recommend you take a look at the following documents:\n  - How to configure elm-review: https://github.com/jfmengels/elm-review/#Configuration\n  - When to write or enable a rule: https://github.com/jfmengels/elm-review/#when-to-write-or-enable-a-rule', cc: 'CONFIGURATION IS EMPTY'});
			} else {
				if (!$elm$core$List$isEmpty(filterNames)) {
					return $author$project$Elm$Review$Main$abortWithDetails(
						$author$project$Elm$Review$Main$unknownRulesFilterMessage(
							{
								dy: filterNames,
								d2: $elm$core$Set$toList(
									$elm$core$Set$fromList(
										A2($elm$core$List$map, $jfmengels$elm_review$Review$Rule$ruleName, $author$project$ReviewConfig$config)))
							}));
				} else {
					var _v4 = A2($elm$core$List$filterMap, $author$project$Elm$Review$Main$getConfigurationError, $author$project$ReviewConfig$config);
					if (!_v4.b) {
						return cmd;
					} else {
						var configurationErrors = _v4;
						return $author$project$Elm$Review$Main$abortForConfigurationErrors(
							function () {
								var _v5 = flags.a1;
								if (!_v5) {
									return $author$project$Elm$Review$Main$encodeReport(
										A2(
											$author$project$Elm$Review$Reporter$formatReport,
											{U: flags.U, bv: false, dz: $elm$core$Dict$empty, bK: 0, C: $author$project$Elm$Review$SuppressedErrors$empty, an: flags.an},
											_List_fromArray(
												[
													{aT: configurationErrors, fr: $author$project$Elm$Review$Reporter$ConfigurationError, fE: ''}
												])));
								} else {
									return A2($author$project$Elm$Review$Main$encodeConfigurationErrors, flags.U, configurationErrors);
								}
							}());
					}
				}
			}
		}());
};
var $author$project$Elm$Review$Main$GotRequestToGenerateSuppressionErrors = {$: 9};
var $author$project$Elm$Review$Main$GotRequestToReview = {$: 8};
var $author$project$Elm$Review$Main$ReceivedDependencies = function (a) {
	return {$: 4, a: a};
};
var $author$project$Elm$Review$Main$ReceivedElmJson = function (a) {
	return {$: 2, a: a};
};
var $author$project$Elm$Review$Main$ReceivedFile = function (a) {
	return {$: 0, a: a};
};
var $author$project$Elm$Review$Main$ReceivedLinks = function (a) {
	return {$: 7, a: a};
};
var $author$project$Elm$Review$Main$ReceivedReadme = function (a) {
	return {$: 3, a: a};
};
var $author$project$Elm$Review$Main$ReceivedSuppressedErrors = function (a) {
	return {$: 5, a: a};
};
var $author$project$Elm$Review$Main$RemovedFile = function (a) {
	return {$: 1, a: a};
};
var $author$project$Elm$Review$Main$RequestedToKnowIfAFixConfirmationIsExpected = {$: 11};
var $author$project$Elm$Review$Main$UpdateSuppressedErrors = function (a) {
	return {$: 6, a: a};
};
var $author$project$Elm$Review$Main$UserConfirmedFix = function (a) {
	return {$: 10, a: a};
};
var $author$project$Elm$Review$Main$askForFixConfirmationStatus = _Platform_incomingPort(
	'askForFixConfirmationStatus',
	$elm$json$Json$Decode$null(0));
var $elm$core$Platform$Sub$batch = _Platform_batch;
var $author$project$Elm$Review$Main$collectDependencies = _Platform_incomingPort('collectDependencies', $elm$json$Json$Decode$value);
var $author$project$Elm$Review$Main$collectElmJson = _Platform_incomingPort('collectElmJson', $elm$json$Json$Decode$value);
var $author$project$Elm$Review$Main$collectFile = _Platform_incomingPort('collectFile', $elm$json$Json$Decode$value);
var $author$project$Elm$Review$Main$collectLinks = _Platform_incomingPort('collectLinks', $elm$json$Json$Decode$value);
var $author$project$Elm$Review$Main$collectReadme = _Platform_incomingPort('collectReadme', $elm$json$Json$Decode$value);
var $author$project$Elm$Review$Main$collectSuppressedErrors = _Platform_incomingPort('collectSuppressedErrors', $elm$json$Json$Decode$value);
var $author$project$Elm$Review$Main$removeFile = _Platform_incomingPort('removeFile', $elm$json$Json$Decode$string);
var $author$project$Elm$Review$Main$startGeneratingSuppressions = _Platform_incomingPort(
	'startGeneratingSuppressions',
	$elm$json$Json$Decode$null(0));
var $author$project$Elm$Review$Main$startReview = _Platform_incomingPort(
	'startReview',
	$elm$json$Json$Decode$null(0));
var $author$project$Elm$Review$Main$updateSuppressedErrors = _Platform_incomingPort('updateSuppressedErrors', $elm$json$Json$Decode$value);
var $author$project$Elm$Review$Main$userConfirmedFix = _Platform_incomingPort('userConfirmedFix', $elm$json$Json$Decode$value);
var $author$project$Elm$Review$Main$subscriptions = $elm$core$Platform$Sub$batch(
	_List_fromArray(
		[
			$author$project$Elm$Review$Main$collectFile($author$project$Elm$Review$Main$ReceivedFile),
			$author$project$Elm$Review$Main$removeFile($author$project$Elm$Review$Main$RemovedFile),
			$author$project$Elm$Review$Main$collectElmJson($author$project$Elm$Review$Main$ReceivedElmJson),
			$author$project$Elm$Review$Main$collectReadme($author$project$Elm$Review$Main$ReceivedReadme),
			$author$project$Elm$Review$Main$collectDependencies($author$project$Elm$Review$Main$ReceivedDependencies),
			$author$project$Elm$Review$Main$collectSuppressedErrors($author$project$Elm$Review$Main$ReceivedSuppressedErrors),
			$author$project$Elm$Review$Main$updateSuppressedErrors($author$project$Elm$Review$Main$UpdateSuppressedErrors),
			$author$project$Elm$Review$Main$collectLinks($author$project$Elm$Review$Main$ReceivedLinks),
			$author$project$Elm$Review$Main$startReview(
			$elm$core$Basics$always($author$project$Elm$Review$Main$GotRequestToReview)),
			$author$project$Elm$Review$Main$startGeneratingSuppressions(
			$elm$core$Basics$always($author$project$Elm$Review$Main$GotRequestToGenerateSuppressionErrors)),
			$author$project$Elm$Review$Main$userConfirmedFix($author$project$Elm$Review$Main$UserConfirmedFix),
			$author$project$Elm$Review$Main$askForFixConfirmationStatus(
			$elm$core$Basics$always($author$project$Elm$Review$Main$RequestedToKnowIfAFixConfirmationIsExpected))
		]));
var $author$project$Elm$Review$Main$acknowledgeFileReceipt = _Platform_outgoingPort('acknowledgeFileReceipt', $elm$core$Basics$identity);
var $jfmengels$elm_review$Review$Project$Dependency$name = function (_v0) {
	var dependency = _v0;
	return dependency.fe;
};
var $jfmengels$elm_review$Review$Project$addDependency = F2(
	function (dependency, _v0) {
		var project = _v0;
		return _Utils_update(
			project,
			{
				av: A3(
					$elm$core$Dict$insert,
					$jfmengels$elm_review$Review$Project$Dependency$name(dependency),
					dependency,
					project.av)
			});
	});
var $elm$core$Dict$map = F2(
	function (func, dict) {
		if (dict.$ === -2) {
			return $elm$core$Dict$RBEmpty_elm_builtin;
		} else {
			var color = dict.a;
			var key = dict.b;
			var value = dict.c;
			var left = dict.d;
			var right = dict.e;
			return A5(
				$elm$core$Dict$RBNode_elm_builtin,
				color,
				key,
				A2(func, key, value),
				A2($elm$core$Dict$map, func, left),
				A2($elm$core$Dict$map, func, right));
		}
	});
var $jfmengels$elm_review$Review$Project$addElmJson = F2(
	function (elmJson_, _v0) {
		var project = _v0;
		var sourceDirectories = $jfmengels$elm_review$Review$Project$Internal$sourceDirectoriesForProject(elmJson_.e);
		var modules_ = _Utils_eq(project.c5, sourceDirectories) ? project.aN : A2(
			$elm$core$Dict$map,
			F2(
				function (_v1, value) {
					var osAgnosticPath = $jfmengels$elm_review$Path$makeOSAgnostic(value.fr);
					return _Utils_update(
						value,
						{
							cW: A2(
								$elm$core$List$any,
								function (dir) {
									return A2($elm$core$String$startsWith, dir, osAgnosticPath);
								},
								sourceDirectories)
						});
				}),
			project.aN);
		return _Utils_update(
			project,
			{
				cg: $elm$core$Maybe$Just(
					_Utils_Tuple2(
						elmJson_,
						$jfmengels$elm_review$Review$Cache$ContentHash$hash(elmJson_.bN))),
				aN: modules_,
				c5: sourceDirectories
			});
	});
var $jfmengels$elm_review$Review$Project$addFileThatFailedToParse = F2(
	function (_v0, _v1) {
		var path = _v0.fr;
		var source = _v0.fE;
		var project = _v1;
		return _Utils_update(
			project,
			{
				bI: A2(
					$elm$core$List$cons,
					{fr: path, fE: source},
					project.bI)
			});
	});
var $jfmengels$elm_review$Review$Project$addModuleToProject = F2(
	function (module_, _v0) {
		var project = _v0;
		return _Utils_update(
			project,
			{
				aN: A3(
					$elm$core$Dict$insert,
					module_.fr,
					_Utils_update(
						module_,
						{
							eu: $jfmengels$elm_review$Review$Project$Internal$sanitizeModule(module_.eu)
						}),
					project.aN)
			});
	});
var $jfmengels$elm_review$Review$Project$forceModuleGraphRecomputation = function (_v0) {
	var project = _v0;
	return _Utils_update(
		project,
		{dQ: $elm$core$Maybe$Nothing});
};
var $jfmengels$elm_review$Review$Project$removeFileFromFilesThatFailedToParse = F2(
	function (path, _v0) {
		var project = _v0;
		return _Utils_update(
			project,
			{
				bI: A2(
					$elm$core$List$filter,
					function (file) {
						return !_Utils_eq(file.fr, path);
					},
					project.bI)
			});
	});
var $jfmengels$elm_review$Review$Project$removeFileFromProject = F2(
	function (path, _v0) {
		var project = _v0;
		return A2(
			$jfmengels$elm_review$Review$Project$removeFileFromFilesThatFailedToParse,
			path,
			_Utils_update(
				project,
				{
					aN: A2($elm$core$Dict$remove, path, project.aN)
				}));
	});
var $jfmengels$elm_review$Review$Project$Internal$sourceDirectories = function (_v0) {
	var project = _v0;
	return project.c5;
};
var $jfmengels$elm_review$Review$Project$addModule = F2(
	function (_v0, project) {
		var path = _v0.fr;
		var source = _v0.fE;
		var _v1 = $jfmengels$elm_review$Review$FileParser$parse(source);
		if (!_v1.$) {
			var ast = _v1.a;
			var osAgnosticPath = $jfmengels$elm_review$Path$makeOSAgnostic(path);
			return $jfmengels$elm_review$Review$Project$forceModuleGraphRecomputation(
				A2(
					$jfmengels$elm_review$Review$Project$removeFileFromFilesThatFailedToParse,
					path,
					A2(
						$jfmengels$elm_review$Review$Project$addModuleToProject,
						{
							eu: ast,
							bs: $jfmengels$elm_review$Review$Cache$ContentHash$hash(source),
							cW: A2(
								$elm$core$List$any,
								function (dir) {
									return A2(
										$elm$core$String$startsWith,
										$jfmengels$elm_review$Path$makeOSAgnostic(dir),
										osAgnosticPath);
								},
								$jfmengels$elm_review$Review$Project$Internal$sourceDirectories(project)),
							fr: path,
							fE: source
						},
						project)));
		} else {
			return $jfmengels$elm_review$Review$Project$forceModuleGraphRecomputation(
				A2(
					$jfmengels$elm_review$Review$Project$addFileThatFailedToParse,
					{fr: path, fE: source},
					A2($jfmengels$elm_review$Review$Project$removeFileFromProject, path, project)));
		}
	});
var $jfmengels$elm_review$Review$Project$addParsedModule = F2(
	function (_v0, project) {
		var path = _v0.fr;
		var source = _v0.fE;
		var ast = _v0.eu;
		var osAgnosticPath = $jfmengels$elm_review$Path$makeOSAgnostic(path);
		return $jfmengels$elm_review$Review$Project$forceModuleGraphRecomputation(
			A2(
				$jfmengels$elm_review$Review$Project$addModuleToProject,
				{
					eu: ast,
					bs: $jfmengels$elm_review$Review$Cache$ContentHash$hash(source),
					cW: A2(
						$elm$core$List$any,
						function (dir) {
							return A2(
								$elm$core$String$startsWith,
								$jfmengels$elm_review$Path$makeOSAgnostic(dir),
								osAgnosticPath);
						},
						$jfmengels$elm_review$Review$Project$Internal$sourceDirectories(project)),
					fr: path,
					fE: source
				},
				A2($jfmengels$elm_review$Review$Project$removeFileFromFilesThatFailedToParse, path, project)));
	});
var $jfmengels$elm_review$Review$Project$addReadme = F2(
	function (readme_, _v0) {
		var project = _v0;
		return _Utils_update(
			project,
			{
				c2: $elm$core$Maybe$Just(
					_Utils_Tuple2(
						readme_,
						$jfmengels$elm_review$Review$Cache$ContentHash$hash(readme_.br)))
			});
	});
var $author$project$Elm$Review$Main$addElmFile = F2(
	function (file, project) {
		return A2(
			$jfmengels$elm_review$Review$Project$addModule,
			{fr: file.fr, fE: file.fE},
			project);
	});
var $jfmengels$elm_review$Review$Project$elmJson = function (_v0) {
	var project = _v0;
	return A2($elm$core$Maybe$map, $elm$core$Tuple$first, project.cg);
};
var $jfmengels$elm_review$Review$Project$readme = function (_v0) {
	var project = _v0;
	return A2($elm$core$Maybe$map, $elm$core$Tuple$first, project.c2);
};
var $jfmengels$elm_review$Review$Project$removeDependency = F2(
	function (dependencyName, _v0) {
		var project = _v0;
		return _Utils_update(
			project,
			{
				av: A2($elm$core$Dict$remove, dependencyName, project.av)
			});
	});
var $author$project$Elm$Review$Main$getPackageName = function (deps) {
	return A2(
		$elm$core$List$map,
		A2($elm$core$Basics$composeR, $elm$core$Tuple$first, $elm$project_metadata_utils$Elm$Package$toString),
		deps);
};
var $author$project$Elm$Review$Main$projectDependencies = function (project) {
	if (!project.$) {
		var application = project.a;
		return $elm$core$Set$fromList(
			$elm$core$List$concat(
				_List_fromArray(
					[
						$author$project$Elm$Review$Main$getPackageName(application.dq),
						$author$project$Elm$Review$Main$getPackageName(application.dr),
						$author$project$Elm$Review$Main$getPackageName(application.eg),
						$author$project$Elm$Review$Main$getPackageName(application.eh)
					])));
	} else {
		var packageInfo = project.a;
		return $elm$core$Set$fromList(
			$elm$core$List$concat(
				_List_fromArray(
					[
						$author$project$Elm$Review$Main$getPackageName(packageInfo.dp),
						$author$project$Elm$Review$Main$getPackageName(packageInfo.ef)
					])));
	}
};
var $author$project$Elm$Review$Main$removedDependencies = F2(
	function (old, _new) {
		return $elm$core$Set$toList(
			A2(
				$elm$core$Set$diff,
				$author$project$Elm$Review$Main$projectDependencies(old),
				$author$project$Elm$Review$Main$projectDependencies(_new)));
	});
var $author$project$Elm$Review$Main$addUpdatedFileToProject = F2(
	function (file, project) {
		if (_Utils_eq(
			$elm$core$Maybe$Just(file.fr),
			A2(
				$elm$core$Maybe$map,
				function ($) {
					return $.fr;
				},
				$jfmengels$elm_review$Review$Project$readme(project)))) {
			return A2(
				$jfmengels$elm_review$Review$Project$addReadme,
				{br: file.fE, fr: file.fr},
				project);
		} else {
			var _v0 = $jfmengels$elm_review$Review$Project$elmJson(project);
			if (!_v0.$) {
				var oldElmJson = _v0.a;
				if (_Utils_eq(file.fr, oldElmJson.fr)) {
					var _v1 = A2($elm$json$Json$Decode$decodeString, $elm$project_metadata_utils$Elm$Project$decoder, file.fE);
					if (!_v1.$) {
						var newElmJson = _v1.a;
						return A3(
							$elm$core$List$foldl,
							$jfmengels$elm_review$Review$Project$removeDependency,
							A2(
								$jfmengels$elm_review$Review$Project$addElmJson,
								{fr: file.fr, e: newElmJson, bN: file.fE},
								project),
							A2($author$project$Elm$Review$Main$removedDependencies, oldElmJson.e, newElmJson));
					} else {
						return project;
					}
				} else {
					return A2($author$project$Elm$Review$Main$addElmFile, file, project);
				}
			} else {
				return A2($author$project$Elm$Review$Main$addElmFile, file, project);
			}
		}
	});
var $jfmengels$elm_review$Review$Rule$errorRuleName = function (_v0) {
	var err = _v0;
	return err.c3;
};
var $elm$core$List$partition = F2(function (f, xs) {
  var truesHead = _List_Cons(undefined, _List_Nil);
  var falsesHead = _List_Cons(undefined, _List_Nil);
  var truesEnd = truesHead;
  var falsesEnd = falsesHead;
  for (; xs.b; xs = xs.b) {
    var next = _List_Cons(xs.a, _List_Nil);
    if (f(xs.a)) {
      truesEnd.b = next;
      truesEnd = next;
    } else {
      falsesEnd.b = next;
      falsesEnd = next;
    }
  }
  return _Utils_Tuple2(truesHead.b, falsesHead.b);
});
var $author$project$Elm$Review$Vendor$List$Extra$gatherWith = F2(
	function (testFn, list) {
		var helper = F2(
			function (scattered, gathered) {
				helper:
				while (true) {
					if (!scattered.b) {
						return $elm$core$List$reverse(gathered);
					} else {
						var toGather = scattered.a;
						var population = scattered.b;
						var _v1 = A2(
							$elm$core$List$partition,
							testFn(toGather),
							population);
						var gathering = _v1.a;
						var remaining = _v1.b;
						var $temp$scattered = remaining,
							$temp$gathered = A2(
							$elm$core$List$cons,
							_Utils_Tuple2(toGather, gathering),
							gathered);
						scattered = $temp$scattered;
						gathered = $temp$gathered;
						continue helper;
					}
				}
			});
		return A2(helper, list, _List_Nil);
	});
var $author$project$Elm$Review$SuppressedErrors$applyHelp = F2(
	function (suppressedErrors, errors) {
		return A2(
			$elm$core$List$concatMap,
			function (_v0) {
				var head = _v0.a;
				var tail = _v0.b;
				var _v1 = A2(
					$elm$core$Dict$get,
					_Utils_Tuple2(
						$jfmengels$elm_review$Review$Rule$errorRuleName(head),
						$jfmengels$elm_review$Review$Rule$errorFilePath(head)),
					suppressedErrors);
				if (!_v1.$) {
					var nbSuppressedErrors = _v1.a;
					return (_Utils_cmp(
						$elm$core$List$length(tail),
						nbSuppressedErrors - 1) < 1) ? _List_Nil : A2($elm$core$List$cons, head, tail);
				} else {
					return A2($elm$core$List$cons, head, tail);
				}
			},
			A2(
				$author$project$Elm$Review$Vendor$List$Extra$gatherWith,
				F2(
					function (a, b) {
						return _Utils_eq(
							$jfmengels$elm_review$Review$Rule$errorFilePath(a),
							$jfmengels$elm_review$Review$Rule$errorFilePath(b)) && _Utils_eq(
							$jfmengels$elm_review$Review$Rule$errorRuleName(a),
							$jfmengels$elm_review$Review$Rule$errorRuleName(b));
					}),
				errors));
	});
var $author$project$Elm$Review$SuppressedErrors$filterSuppressed = F2(
	function (ruleNames, suppressedErrors) {
		return A2(
			$elm$core$Dict$filter,
			F2(
				function (_v0, _v1) {
					var ruleName = _v0.a;
					return !A2($elm$core$Set$member, ruleName, ruleNames);
				}),
			suppressedErrors);
	});
var $author$project$Elm$Review$SuppressedErrors$apply = F3(
	function (unsuppressMode, _v0, errors) {
		var suppressedErrors = _v0;
		if ($elm$core$Dict$isEmpty(suppressedErrors)) {
			return errors;
		} else {
			switch (unsuppressMode.$) {
				case 0:
					return errors;
				case 1:
					var ruleNames = unsuppressMode.a;
					return A2(
						$author$project$Elm$Review$SuppressedErrors$applyHelp,
						A2($author$project$Elm$Review$SuppressedErrors$filterSuppressed, ruleNames, suppressedErrors),
						errors);
				default:
					return A2($author$project$Elm$Review$SuppressedErrors$applyHelp, suppressedErrors, errors);
			}
		}
	});
var $author$project$Elm$Review$Vendor$Serialize$getJsonEncoder = function (_v0) {
	var m = _v0;
	return m.bd;
};
var $author$project$Elm$Review$Vendor$Serialize$version = 1;
var $author$project$Elm$Review$Vendor$Serialize$encodeToJson = F2(
	function (codec, value) {
		return A2(
			$elm$json$Json$Encode$list,
			$elm$core$Basics$identity,
			_List_fromArray(
				[
					$elm$json$Json$Encode$int($author$project$Elm$Review$Vendor$Serialize$version),
					A2($author$project$Elm$Review$Vendor$Serialize$getJsonEncoder, codec, value)
				]));
	});
var $author$project$Elm$Review$Vendor$Serialize$CustomTypeCodec = $elm$core$Basics$identity;
var $author$project$Elm$Review$Vendor$Serialize$customType = function (match) {
	return {
		b3: 0,
		ai: function (_v0) {
			return $elm$core$Basics$identity;
		},
		cp: match
	};
};
var $author$project$Elm$Review$AstCodec$InvalidChar = 0;
var $author$project$Elm$Review$Vendor$Serialize$CustomError = function (a) {
	return {$: 0, a: a};
};
var $author$project$Elm$Review$Vendor$Serialize$Codec = $elm$core$Basics$identity;
var $author$project$Elm$Review$Vendor$Serialize$build = F2(
	function (jsonEncoder, jsonDecoder) {
		return {ai: jsonDecoder, bd: jsonEncoder};
	});
var $author$project$Elm$Review$Vendor$Serialize$getJsonDecoder = function (_v0) {
	var m = _v0;
	return m.ai;
};
var $author$project$Elm$Review$Vendor$Serialize$mapValid = F3(
	function (fromBytes_, toBytes_, codec) {
		return A2(
			$author$project$Elm$Review$Vendor$Serialize$build,
			function (v) {
				return A2(
					$author$project$Elm$Review$Vendor$Serialize$getJsonEncoder,
					codec,
					toBytes_(v));
			},
			A2(
				$elm$json$Json$Decode$map,
				function (value) {
					if (!value.$) {
						var ok = value.a;
						return A2(
							$elm$core$Result$mapError,
							$author$project$Elm$Review$Vendor$Serialize$CustomError,
							fromBytes_(ok));
					} else {
						var err = value.a;
						return $elm$core$Result$Err(err);
					}
				},
				$author$project$Elm$Review$Vendor$Serialize$getJsonDecoder(codec)));
	});
var $author$project$Elm$Review$Vendor$Serialize$string = A2(
	$author$project$Elm$Review$Vendor$Serialize$build,
	$elm$json$Json$Encode$string,
	A2($elm$json$Json$Decode$map, $elm$core$Result$Ok, $elm$json$Json$Decode$string));
var $author$project$Elm$Review$AstCodec$char = A3(
	$author$project$Elm$Review$Vendor$Serialize$mapValid,
	function (string) {
		var _v0 = $elm$core$String$toList(string);
		if (_v0.b) {
			var head = _v0.a;
			return $elm$core$Result$Ok(head);
		} else {
			return $elm$core$Result$Err(0);
		}
	},
	$elm$core$String$fromChar,
	$author$project$Elm$Review$Vendor$Serialize$string);
var $author$project$Elm$Review$Vendor$Serialize$RecordCodec = $elm$core$Basics$identity;
var $elm$json$Json$Decode$index = _Json_decodeIndex;
var $author$project$Elm$Review$Vendor$Serialize$field = F3(
	function (getter, codec, _v0) {
		var recordCodec = _v0;
		return {
			cl: recordCodec.cl + 1,
			ai: A3(
				$elm$json$Json$Decode$map2,
				F2(
					function (f, x) {
						var _v1 = _Utils_Tuple2(f, x);
						if (!_v1.a.$) {
							if (!_v1.b.$) {
								var fOk = _v1.a.a;
								var xOk = _v1.b.a;
								return $elm$core$Result$Ok(
									fOk(xOk));
							} else {
								var err = _v1.b.a;
								return $elm$core$Result$Err(err);
							}
						} else {
							var err = _v1.a.a;
							return $elm$core$Result$Err(err);
						}
					}),
				recordCodec.ai,
				A2(
					$elm$json$Json$Decode$index,
					recordCodec.cl,
					$author$project$Elm$Review$Vendor$Serialize$getJsonDecoder(codec))),
			bd: function (v) {
				return A2(
					$elm$core$List$cons,
					A2(
						$author$project$Elm$Review$Vendor$Serialize$getJsonEncoder,
						codec,
						getter(v)),
					recordCodec.bd(v));
			}
		};
	});
var $author$project$Elm$Review$Vendor$Serialize$DataCorrupted = {$: 1};
var $author$project$Elm$Review$Vendor$Serialize$finishCustomType = function (_v0) {
	var am = _v0;
	return A2(
		$author$project$Elm$Review$Vendor$Serialize$build,
		A2(
			$elm$core$Basics$composeR,
			am.cp,
			function (_v1) {
				var _v2 = _v1;
				var a = _v2.b;
				return a;
			}),
		A2(
			$elm$json$Json$Decode$andThen,
			function (tag) {
				return A2(
					am.ai,
					tag,
					$elm$json$Json$Decode$succeed(
						$elm$core$Result$Err($author$project$Elm$Review$Vendor$Serialize$DataCorrupted)));
			},
			A2($elm$json$Json$Decode$index, 0, $elm$json$Json$Decode$int)));
};
var $author$project$Elm$Review$Vendor$Serialize$finishRecord = function (_v0) {
	var codec = _v0;
	return {
		ai: codec.ai,
		bd: A2(
			$elm$core$Basics$composeR,
			codec.bd,
			A2(
				$elm$core$Basics$composeR,
				$elm$core$List$reverse,
				$elm$json$Json$Encode$list($elm$core$Basics$identity)))
	};
};
var $elm$json$Json$Decode$float = _Json_decodeFloat;
var $elm$json$Json$Encode$float = _Json_wrap;
var $author$project$Elm$Review$Vendor$Serialize$float = A2(
	$author$project$Elm$Review$Vendor$Serialize$build,
	$elm$json$Json$Encode$float,
	A2($elm$json$Json$Decode$map, $elm$core$Result$Ok, $elm$json$Json$Decode$float));
var $author$project$Elm$Review$Vendor$Serialize$findIndexHelp = F3(
	function (index, predicate, list_) {
		findIndexHelp:
		while (true) {
			if (!list_.b) {
				return $elm$core$Maybe$Nothing;
			} else {
				var x = list_.a;
				var xs = list_.b;
				if (predicate(x)) {
					return $elm$core$Maybe$Just(index);
				} else {
					var $temp$index = index + 1,
						$temp$predicate = predicate,
						$temp$list_ = xs;
					index = $temp$index;
					predicate = $temp$predicate;
					list_ = $temp$list_;
					continue findIndexHelp;
				}
			}
		}
	});
var $author$project$Elm$Review$Vendor$Serialize$findIndex = $author$project$Elm$Review$Vendor$Serialize$findIndexHelp(0);
var $author$project$Elm$Review$Vendor$Serialize$getAt = F2(
	function (idx, xs) {
		return (idx < 0) ? $elm$core$Maybe$Nothing : $elm$core$List$head(
			A2($elm$core$List$drop, idx, xs));
	});
var $author$project$Elm$Review$Vendor$Serialize$enum = F2(
	function (defaultItem, items) {
		var getItem = function (index) {
			return (index < 0) ? $elm$core$Result$Err($author$project$Elm$Review$Vendor$Serialize$DataCorrupted) : ((_Utils_cmp(
				index,
				$elm$core$List$length(items)) > 0) ? $elm$core$Result$Err($author$project$Elm$Review$Vendor$Serialize$DataCorrupted) : $elm$core$Result$Ok(
				A2(
					$elm$core$Maybe$withDefault,
					defaultItem,
					A2($author$project$Elm$Review$Vendor$Serialize$getAt, index - 1, items))));
		};
		var getIndex = function (value) {
			return 1 + A2(
				$elm$core$Maybe$withDefault,
				-1,
				A2(
					$author$project$Elm$Review$Vendor$Serialize$findIndex,
					$elm$core$Basics$eq(value),
					items));
		};
		return A2(
			$author$project$Elm$Review$Vendor$Serialize$build,
			A2($elm$core$Basics$composeR, getIndex, $elm$json$Json$Encode$int),
			A2($elm$json$Json$Decode$map, getItem, $elm$json$Json$Decode$int));
	});
var $author$project$Elm$Review$AstCodec$infixDirection = A2(
	$author$project$Elm$Review$Vendor$Serialize$enum,
	0,
	_List_fromArray(
		[1, 2]));
var $author$project$Elm$Review$Vendor$Serialize$int = A2(
	$author$project$Elm$Review$Vendor$Serialize$build,
	$elm$json$Json$Encode$int,
	A2($elm$json$Json$Decode$map, $elm$core$Result$Ok, $elm$json$Json$Decode$int));
var $author$project$Elm$Review$Vendor$Serialize$lazy = function (f) {
	return A2(
		$author$project$Elm$Review$Vendor$Serialize$build,
		function (value) {
			return A2(
				$author$project$Elm$Review$Vendor$Serialize$getJsonEncoder,
				f(0),
				value);
		},
		A2(
			$elm$json$Json$Decode$andThen,
			function (_v0) {
				return $author$project$Elm$Review$Vendor$Serialize$getJsonDecoder(
					f(0));
			},
			$elm$json$Json$Decode$succeed(0)));
};
var $author$project$Elm$Review$Vendor$Serialize$list = function (codec) {
	return A2(
		$author$project$Elm$Review$Vendor$Serialize$build,
		$elm$json$Json$Encode$list(
			$author$project$Elm$Review$Vendor$Serialize$getJsonEncoder(codec)),
		A2(
			$elm$json$Json$Decode$map,
			A2(
				$elm$core$List$foldr,
				F2(
					function (value, state) {
						var _v0 = _Utils_Tuple2(value, state);
						if (_v0.b.$ === 1) {
							return state;
						} else {
							if (!_v0.a.$) {
								var ok = _v0.a.a;
								var okState = _v0.b.a;
								return $elm$core$Result$Ok(
									A2($elm$core$List$cons, ok, okState));
							} else {
								var error = _v0.a.a;
								return $elm$core$Result$Err(error);
							}
						}
					}),
				$elm$core$Result$Ok(_List_Nil)),
			$elm$json$Json$Decode$list(
				$author$project$Elm$Review$Vendor$Serialize$getJsonDecoder(codec))));
};
var $author$project$Elm$Review$Vendor$Serialize$VariantEncoder = $elm$core$Basics$identity;
var $author$project$Elm$Review$Vendor$Serialize$variant = F3(
	function (matchJsonPiece, jsonDecoderPiece, _v0) {
		var am = _v0;
		var jsonEnc = function (v) {
			return _Utils_Tuple2(
				0,
				A2(
					$elm$json$Json$Encode$list,
					$elm$core$Basics$identity,
					A2(
						$elm$core$List$cons,
						$elm$json$Json$Encode$int(am.b3),
						v)));
		};
		var jsonDecoder_ = F2(
			function (tag, orElse) {
				return _Utils_eq(tag, am.b3) ? jsonDecoderPiece : A2(am.ai, tag, orElse);
			});
		return {
			b3: am.b3 + 1,
			ai: jsonDecoder_,
			cp: am.cp(
				matchJsonPiece(jsonEnc))
		};
	});
var $author$project$Elm$Review$Vendor$Serialize$variant0 = function (ctor) {
	return A2(
		$author$project$Elm$Review$Vendor$Serialize$variant,
		function (c) {
			return c(_List_Nil);
		},
		$elm$json$Json$Decode$succeed(
			$elm$core$Result$Ok(ctor)));
};
var $author$project$Elm$Review$Vendor$Serialize$result1 = F2(
	function (ctor, value) {
		if (!value.$) {
			var ok = value.a;
			return $elm$core$Result$Ok(
				ctor(ok));
		} else {
			var err = value.a;
			return $elm$core$Result$Err(err);
		}
	});
var $author$project$Elm$Review$Vendor$Serialize$variant1 = F2(
	function (ctor, m1) {
		return A2(
			$author$project$Elm$Review$Vendor$Serialize$variant,
			F2(
				function (c, v) {
					return c(
						_List_fromArray(
							[
								A2($author$project$Elm$Review$Vendor$Serialize$getJsonEncoder, m1, v)
							]));
				}),
			A2(
				$elm$json$Json$Decode$map,
				$author$project$Elm$Review$Vendor$Serialize$result1(ctor),
				A2(
					$elm$json$Json$Decode$index,
					1,
					$author$project$Elm$Review$Vendor$Serialize$getJsonDecoder(m1))));
	});
var $author$project$Elm$Review$Vendor$Serialize$maybe = function (justCodec) {
	return $author$project$Elm$Review$Vendor$Serialize$finishCustomType(
		A3(
			$author$project$Elm$Review$Vendor$Serialize$variant1,
			$elm$core$Maybe$Just,
			justCodec,
			A2(
				$author$project$Elm$Review$Vendor$Serialize$variant0,
				$elm$core$Maybe$Nothing,
				$author$project$Elm$Review$Vendor$Serialize$customType(
					F3(
						function (nothingEncoder, justEncoder, value) {
							if (value.$ === 1) {
								return nothingEncoder;
							} else {
								var value_ = value.a;
								return justEncoder(value_);
							}
						})))));
};
var $author$project$Elm$Review$Vendor$Serialize$record = function (ctor) {
	return {
		cl: 0,
		ai: $elm$json$Json$Decode$succeed(
			$elm$core$Result$Ok(ctor)),
		bd: function (_v0) {
			return _List_Nil;
		}
	};
};
var $author$project$Elm$Review$AstCodec$node = function (codec) {
	return $author$project$Elm$Review$Vendor$Serialize$finishRecord(
		A3(
			$author$project$Elm$Review$Vendor$Serialize$field,
			function (_v4) {
				var a = _v4.b;
				return a;
			},
			codec,
			A3(
				$author$project$Elm$Review$Vendor$Serialize$field,
				function (_v3) {
					var range_ = _v3.a;
					return range_.bu.eF;
				},
				$author$project$Elm$Review$Vendor$Serialize$int,
				A3(
					$author$project$Elm$Review$Vendor$Serialize$field,
					function (_v2) {
						var range_ = _v2.a;
						return range_.bu.d0;
					},
					$author$project$Elm$Review$Vendor$Serialize$int,
					A3(
						$author$project$Elm$Review$Vendor$Serialize$field,
						function (_v1) {
							var range_ = _v1.a;
							return range_.bQ.eF;
						},
						$author$project$Elm$Review$Vendor$Serialize$int,
						A3(
							$author$project$Elm$Review$Vendor$Serialize$field,
							function (_v0) {
								var range_ = _v0.a;
								return range_.bQ.d0;
							},
							$author$project$Elm$Review$Vendor$Serialize$int,
							$author$project$Elm$Review$Vendor$Serialize$record(
								F5(
									function (a, b, c, d, e) {
										return A2(
											$stil4m$elm_syntax$Elm$Syntax$Node$Node,
											{
												bu: {eF: d, d0: c},
												bQ: {eF: b, d0: a}
											},
											e);
									}))))))));
};
var $author$project$Elm$Review$AstCodec$qualifiedNameRef = $author$project$Elm$Review$Vendor$Serialize$finishRecord(
	A3(
		$author$project$Elm$Review$Vendor$Serialize$field,
		function ($) {
			return $.fe;
		},
		$author$project$Elm$Review$Vendor$Serialize$string,
		A3(
			$author$project$Elm$Review$Vendor$Serialize$field,
			function ($) {
				return $.cv;
			},
			$author$project$Elm$Review$Vendor$Serialize$list($author$project$Elm$Review$Vendor$Serialize$string),
			$author$project$Elm$Review$Vendor$Serialize$record($stil4m$elm_syntax$Elm$Syntax$Pattern$QualifiedNameRef))));
var $author$project$Elm$Review$Vendor$Serialize$result2 = F3(
	function (ctor, v1, v2) {
		var _v0 = _Utils_Tuple2(v1, v2);
		if (!_v0.a.$) {
			if (!_v0.b.$) {
				var ok1 = _v0.a.a;
				var ok2 = _v0.b.a;
				return $elm$core$Result$Ok(
					A2(ctor, ok1, ok2));
			} else {
				var err = _v0.b.a;
				return $elm$core$Result$Err(err);
			}
		} else {
			var err = _v0.a.a;
			return $elm$core$Result$Err(err);
		}
	});
var $author$project$Elm$Review$Vendor$Serialize$variant2 = F3(
	function (ctor, m1, m2) {
		return A2(
			$author$project$Elm$Review$Vendor$Serialize$variant,
			F3(
				function (c, v1, v2) {
					return c(
						_List_fromArray(
							[
								A2($author$project$Elm$Review$Vendor$Serialize$getJsonEncoder, m1, v1),
								A2($author$project$Elm$Review$Vendor$Serialize$getJsonEncoder, m2, v2)
							]));
				}),
			A3(
				$elm$json$Json$Decode$map2,
				$author$project$Elm$Review$Vendor$Serialize$result2(ctor),
				A2(
					$elm$json$Json$Decode$index,
					1,
					$author$project$Elm$Review$Vendor$Serialize$getJsonDecoder(m1)),
				A2(
					$elm$json$Json$Decode$index,
					2,
					$author$project$Elm$Review$Vendor$Serialize$getJsonDecoder(m2))));
	});
function $author$project$Elm$Review$AstCodec$cyclic$pattern() {
	return $author$project$Elm$Review$Vendor$Serialize$finishCustomType(
		A3(
			$author$project$Elm$Review$Vendor$Serialize$variant1,
			$stil4m$elm_syntax$Elm$Syntax$Pattern$ParenthesizedPattern,
			$author$project$Elm$Review$AstCodec$node(
				$author$project$Elm$Review$AstCodec$cyclic$lazyPattern()),
			A4(
				$author$project$Elm$Review$Vendor$Serialize$variant2,
				$stil4m$elm_syntax$Elm$Syntax$Pattern$AsPattern,
				$author$project$Elm$Review$AstCodec$node(
					$author$project$Elm$Review$AstCodec$cyclic$lazyPattern()),
				$author$project$Elm$Review$AstCodec$node($author$project$Elm$Review$Vendor$Serialize$string),
				A4(
					$author$project$Elm$Review$Vendor$Serialize$variant2,
					$stil4m$elm_syntax$Elm$Syntax$Pattern$NamedPattern,
					$author$project$Elm$Review$AstCodec$qualifiedNameRef,
					$author$project$Elm$Review$Vendor$Serialize$list(
						$author$project$Elm$Review$AstCodec$node(
							$author$project$Elm$Review$AstCodec$cyclic$lazyPattern())),
					A3(
						$author$project$Elm$Review$Vendor$Serialize$variant1,
						$stil4m$elm_syntax$Elm$Syntax$Pattern$VarPattern,
						$author$project$Elm$Review$Vendor$Serialize$string,
						A3(
							$author$project$Elm$Review$Vendor$Serialize$variant1,
							$stil4m$elm_syntax$Elm$Syntax$Pattern$ListPattern,
							$author$project$Elm$Review$Vendor$Serialize$list(
								$author$project$Elm$Review$AstCodec$node(
									$author$project$Elm$Review$AstCodec$cyclic$lazyPattern())),
							A4(
								$author$project$Elm$Review$Vendor$Serialize$variant2,
								$stil4m$elm_syntax$Elm$Syntax$Pattern$UnConsPattern,
								$author$project$Elm$Review$AstCodec$node(
									$author$project$Elm$Review$AstCodec$cyclic$lazyPattern()),
								$author$project$Elm$Review$AstCodec$node(
									$author$project$Elm$Review$AstCodec$cyclic$lazyPattern()),
								A3(
									$author$project$Elm$Review$Vendor$Serialize$variant1,
									$stil4m$elm_syntax$Elm$Syntax$Pattern$RecordPattern,
									$author$project$Elm$Review$Vendor$Serialize$list(
										$author$project$Elm$Review$AstCodec$node($author$project$Elm$Review$Vendor$Serialize$string)),
									A3(
										$author$project$Elm$Review$Vendor$Serialize$variant1,
										$stil4m$elm_syntax$Elm$Syntax$Pattern$TuplePattern,
										$author$project$Elm$Review$Vendor$Serialize$list(
											$author$project$Elm$Review$AstCodec$node(
												$author$project$Elm$Review$AstCodec$cyclic$lazyPattern())),
										A3(
											$author$project$Elm$Review$Vendor$Serialize$variant1,
											$stil4m$elm_syntax$Elm$Syntax$Pattern$FloatPattern,
											$author$project$Elm$Review$Vendor$Serialize$float,
											A3(
												$author$project$Elm$Review$Vendor$Serialize$variant1,
												$stil4m$elm_syntax$Elm$Syntax$Pattern$HexPattern,
												$author$project$Elm$Review$Vendor$Serialize$int,
												A3(
													$author$project$Elm$Review$Vendor$Serialize$variant1,
													$stil4m$elm_syntax$Elm$Syntax$Pattern$IntPattern,
													$author$project$Elm$Review$Vendor$Serialize$int,
													A3(
														$author$project$Elm$Review$Vendor$Serialize$variant1,
														$stil4m$elm_syntax$Elm$Syntax$Pattern$StringPattern,
														$author$project$Elm$Review$Vendor$Serialize$string,
														A3(
															$author$project$Elm$Review$Vendor$Serialize$variant1,
															$stil4m$elm_syntax$Elm$Syntax$Pattern$CharPattern,
															$author$project$Elm$Review$AstCodec$char,
															A2(
																$author$project$Elm$Review$Vendor$Serialize$variant0,
																$stil4m$elm_syntax$Elm$Syntax$Pattern$UnitPattern,
																A2(
																	$author$project$Elm$Review$Vendor$Serialize$variant0,
																	$stil4m$elm_syntax$Elm$Syntax$Pattern$AllPattern,
																	$author$project$Elm$Review$Vendor$Serialize$customType(
																		function (e0) {
																			return function (e1) {
																				return function (e2) {
																					return function (e3) {
																						return function (e4) {
																							return function (e5) {
																								return function (e6) {
																									return function (e7) {
																										return function (e8) {
																											return function (e9) {
																												return function (e10) {
																													return function (e11) {
																														return function (e12) {
																															return function (e13) {
																																return function (e14) {
																																	return function (value) {
																																		switch (value.$) {
																																			case 0:
																																				return e0;
																																			case 1:
																																				return e1;
																																			case 2:
																																				var a = value.a;
																																				return e2(a);
																																			case 3:
																																				var a = value.a;
																																				return e3(a);
																																			case 4:
																																				var a = value.a;
																																				return e4(a);
																																			case 5:
																																				var a = value.a;
																																				return e5(a);
																																			case 6:
																																				var a = value.a;
																																				return e6(a);
																																			case 7:
																																				var a = value.a;
																																				return e7(a);
																																			case 8:
																																				var a = value.a;
																																				return e8(a);
																																			case 9:
																																				var a = value.a;
																																				var b = value.b;
																																				return A2(e9, a, b);
																																			case 10:
																																				var a = value.a;
																																				return e10(a);
																																			case 11:
																																				var a = value.a;
																																				return e11(a);
																																			case 12:
																																				var a = value.a;
																																				var b = value.b;
																																				return A2(e12, a, b);
																																			case 13:
																																				var a = value.a;
																																				var b = value.b;
																																				return A2(e13, a, b);
																																			default:
																																				var a = value.a;
																																				return e14(a);
																																		}
																																	};
																																};
																															};
																														};
																													};
																												};
																											};
																										};
																									};
																								};
																							};
																						};
																					};
																				};
																			};
																		})))))))))))))))));
}
function $author$project$Elm$Review$AstCodec$cyclic$lazyPattern() {
	return $author$project$Elm$Review$Vendor$Serialize$lazy(
		function (_v0) {
			return $author$project$Elm$Review$AstCodec$cyclic$pattern();
		});
}
var $author$project$Elm$Review$AstCodec$pattern = $author$project$Elm$Review$AstCodec$cyclic$pattern();
$author$project$Elm$Review$AstCodec$cyclic$pattern = function () {
	return $author$project$Elm$Review$AstCodec$pattern;
};
var $author$project$Elm$Review$AstCodec$lazyPattern = $author$project$Elm$Review$AstCodec$cyclic$lazyPattern();
$author$project$Elm$Review$AstCodec$cyclic$lazyPattern = function () {
	return $author$project$Elm$Review$AstCodec$lazyPattern;
};
var $author$project$Elm$Review$Vendor$Serialize$tuple = F2(
	function (codecFirst, codecSecond) {
		return $author$project$Elm$Review$Vendor$Serialize$finishRecord(
			A3(
				$author$project$Elm$Review$Vendor$Serialize$field,
				$elm$core$Tuple$second,
				codecSecond,
				A3(
					$author$project$Elm$Review$Vendor$Serialize$field,
					$elm$core$Tuple$first,
					codecFirst,
					$author$project$Elm$Review$Vendor$Serialize$record($elm$core$Tuple$pair))));
	});
function $author$project$Elm$Review$AstCodec$cyclic$typeAnnotation() {
	return $author$project$Elm$Review$Vendor$Serialize$finishCustomType(
		A4(
			$author$project$Elm$Review$Vendor$Serialize$variant2,
			$stil4m$elm_syntax$Elm$Syntax$TypeAnnotation$FunctionTypeAnnotation,
			$author$project$Elm$Review$AstCodec$node(
				$author$project$Elm$Review$AstCodec$cyclic$lazyTypeAnnotation()),
			$author$project$Elm$Review$AstCodec$node(
				$author$project$Elm$Review$AstCodec$cyclic$lazyTypeAnnotation()),
			A4(
				$author$project$Elm$Review$Vendor$Serialize$variant2,
				$stil4m$elm_syntax$Elm$Syntax$TypeAnnotation$GenericRecord,
				$author$project$Elm$Review$AstCodec$node($author$project$Elm$Review$Vendor$Serialize$string),
				$author$project$Elm$Review$AstCodec$node(
					$author$project$Elm$Review$AstCodec$cyclic$recordDefinition()),
				A3(
					$author$project$Elm$Review$Vendor$Serialize$variant1,
					$stil4m$elm_syntax$Elm$Syntax$TypeAnnotation$Record,
					$author$project$Elm$Review$AstCodec$cyclic$recordDefinition(),
					A3(
						$author$project$Elm$Review$Vendor$Serialize$variant1,
						$stil4m$elm_syntax$Elm$Syntax$TypeAnnotation$Tupled,
						$author$project$Elm$Review$Vendor$Serialize$list(
							$author$project$Elm$Review$AstCodec$node(
								$author$project$Elm$Review$AstCodec$cyclic$lazyTypeAnnotation())),
						A2(
							$author$project$Elm$Review$Vendor$Serialize$variant0,
							$stil4m$elm_syntax$Elm$Syntax$TypeAnnotation$Unit,
							A4(
								$author$project$Elm$Review$Vendor$Serialize$variant2,
								$stil4m$elm_syntax$Elm$Syntax$TypeAnnotation$Typed,
								$author$project$Elm$Review$AstCodec$node(
									A2(
										$author$project$Elm$Review$Vendor$Serialize$tuple,
										$author$project$Elm$Review$Vendor$Serialize$list($author$project$Elm$Review$Vendor$Serialize$string),
										$author$project$Elm$Review$Vendor$Serialize$string)),
								$author$project$Elm$Review$Vendor$Serialize$list(
									$author$project$Elm$Review$AstCodec$node(
										$author$project$Elm$Review$AstCodec$cyclic$lazyTypeAnnotation())),
								A3(
									$author$project$Elm$Review$Vendor$Serialize$variant1,
									$stil4m$elm_syntax$Elm$Syntax$TypeAnnotation$GenericType,
									$author$project$Elm$Review$Vendor$Serialize$string,
									$author$project$Elm$Review$Vendor$Serialize$customType(
										F8(
											function (e0, e1, e2, e3, e4, e5, e6, value) {
												switch (value.$) {
													case 0:
														var a = value.a;
														return e0(a);
													case 1:
														var a = value.a;
														var b = value.b;
														return A2(e1, a, b);
													case 2:
														return e2;
													case 3:
														var a = value.a;
														return e3(a);
													case 4:
														var a = value.a;
														return e4(a);
													case 5:
														var a = value.a;
														var b = value.b;
														return A2(e5, a, b);
													default:
														var a = value.a;
														var b = value.b;
														return A2(e6, a, b);
												}
											}))))))))));
}
function $author$project$Elm$Review$AstCodec$cyclic$recordDefinition() {
	return $author$project$Elm$Review$Vendor$Serialize$list(
		$author$project$Elm$Review$AstCodec$node(
			A2(
				$author$project$Elm$Review$Vendor$Serialize$tuple,
				$author$project$Elm$Review$AstCodec$node($author$project$Elm$Review$Vendor$Serialize$string),
				$author$project$Elm$Review$AstCodec$node(
					$author$project$Elm$Review$AstCodec$cyclic$lazyTypeAnnotation()))));
}
function $author$project$Elm$Review$AstCodec$cyclic$lazyTypeAnnotation() {
	return $author$project$Elm$Review$Vendor$Serialize$lazy(
		function (_v0) {
			return $author$project$Elm$Review$AstCodec$cyclic$typeAnnotation();
		});
}
var $author$project$Elm$Review$AstCodec$typeAnnotation = $author$project$Elm$Review$AstCodec$cyclic$typeAnnotation();
$author$project$Elm$Review$AstCodec$cyclic$typeAnnotation = function () {
	return $author$project$Elm$Review$AstCodec$typeAnnotation;
};
var $author$project$Elm$Review$AstCodec$recordDefinition = $author$project$Elm$Review$AstCodec$cyclic$recordDefinition();
$author$project$Elm$Review$AstCodec$cyclic$recordDefinition = function () {
	return $author$project$Elm$Review$AstCodec$recordDefinition;
};
var $author$project$Elm$Review$AstCodec$lazyTypeAnnotation = $author$project$Elm$Review$AstCodec$cyclic$lazyTypeAnnotation();
$author$project$Elm$Review$AstCodec$cyclic$lazyTypeAnnotation = function () {
	return $author$project$Elm$Review$AstCodec$lazyTypeAnnotation;
};
var $author$project$Elm$Review$AstCodec$signature = $author$project$Elm$Review$Vendor$Serialize$finishRecord(
	A3(
		$author$project$Elm$Review$Vendor$Serialize$field,
		function ($) {
			return $.ek;
		},
		$author$project$Elm$Review$AstCodec$node($author$project$Elm$Review$AstCodec$typeAnnotation),
		A3(
			$author$project$Elm$Review$Vendor$Serialize$field,
			function ($) {
				return $.fe;
			},
			$author$project$Elm$Review$AstCodec$node($author$project$Elm$Review$Vendor$Serialize$string),
			$author$project$Elm$Review$Vendor$Serialize$record($stil4m$elm_syntax$Elm$Syntax$Signature$Signature))));
var $elm$json$Json$Decode$map3 = _Json_map3;
var $author$project$Elm$Review$Vendor$Serialize$result3 = F4(
	function (ctor, v1, v2, v3) {
		var _v0 = _Utils_Tuple3(v1, v2, v3);
		if (!_v0.a.$) {
			if (!_v0.b.$) {
				if (!_v0.c.$) {
					var ok1 = _v0.a.a;
					var ok2 = _v0.b.a;
					var ok3 = _v0.c.a;
					return $elm$core$Result$Ok(
						A3(ctor, ok1, ok2, ok3));
				} else {
					var err = _v0.c.a;
					return $elm$core$Result$Err(err);
				}
			} else {
				var err = _v0.b.a;
				return $elm$core$Result$Err(err);
			}
		} else {
			var err = _v0.a.a;
			return $elm$core$Result$Err(err);
		}
	});
var $author$project$Elm$Review$Vendor$Serialize$variant3 = F4(
	function (ctor, m1, m2, m3) {
		return A2(
			$author$project$Elm$Review$Vendor$Serialize$variant,
			F4(
				function (c, v1, v2, v3) {
					return c(
						_List_fromArray(
							[
								A2($author$project$Elm$Review$Vendor$Serialize$getJsonEncoder, m1, v1),
								A2($author$project$Elm$Review$Vendor$Serialize$getJsonEncoder, m2, v2),
								A2($author$project$Elm$Review$Vendor$Serialize$getJsonEncoder, m3, v3)
							]));
				}),
			A4(
				$elm$json$Json$Decode$map3,
				$author$project$Elm$Review$Vendor$Serialize$result3(ctor),
				A2(
					$elm$json$Json$Decode$index,
					1,
					$author$project$Elm$Review$Vendor$Serialize$getJsonDecoder(m1)),
				A2(
					$elm$json$Json$Decode$index,
					2,
					$author$project$Elm$Review$Vendor$Serialize$getJsonDecoder(m2)),
				A2(
					$elm$json$Json$Decode$index,
					3,
					$author$project$Elm$Review$Vendor$Serialize$getJsonDecoder(m3))));
	});
var $elm$json$Json$Decode$map4 = _Json_map4;
var $author$project$Elm$Review$Vendor$Serialize$T4 = F4(
	function (a, b, c, d) {
		return {$: 0, a: a, b: b, c: c, d: d};
	});
var $author$project$Elm$Review$Vendor$Serialize$result4 = F5(
	function (ctor, v1, v2, v3, v4) {
		var _v0 = A4($author$project$Elm$Review$Vendor$Serialize$T4, v1, v2, v3, v4);
		if (!_v0.a.$) {
			if (!_v0.b.$) {
				if (!_v0.c.$) {
					if (!_v0.d.$) {
						var ok1 = _v0.a.a;
						var ok2 = _v0.b.a;
						var ok3 = _v0.c.a;
						var ok4 = _v0.d.a;
						return $elm$core$Result$Ok(
							A4(ctor, ok1, ok2, ok3, ok4));
					} else {
						var err = _v0.d.a;
						return $elm$core$Result$Err(err);
					}
				} else {
					var err = _v0.c.a;
					return $elm$core$Result$Err(err);
				}
			} else {
				var err = _v0.b.a;
				return $elm$core$Result$Err(err);
			}
		} else {
			var err = _v0.a.a;
			return $elm$core$Result$Err(err);
		}
	});
var $author$project$Elm$Review$Vendor$Serialize$variant4 = F5(
	function (ctor, m1, m2, m3, m4) {
		return A2(
			$author$project$Elm$Review$Vendor$Serialize$variant,
			F5(
				function (c, v1, v2, v3, v4) {
					return c(
						_List_fromArray(
							[
								A2($author$project$Elm$Review$Vendor$Serialize$getJsonEncoder, m1, v1),
								A2($author$project$Elm$Review$Vendor$Serialize$getJsonEncoder, m2, v2),
								A2($author$project$Elm$Review$Vendor$Serialize$getJsonEncoder, m3, v3),
								A2($author$project$Elm$Review$Vendor$Serialize$getJsonEncoder, m4, v4)
							]));
				}),
			A5(
				$elm$json$Json$Decode$map4,
				$author$project$Elm$Review$Vendor$Serialize$result4(ctor),
				A2(
					$elm$json$Json$Decode$index,
					1,
					$author$project$Elm$Review$Vendor$Serialize$getJsonDecoder(m1)),
				A2(
					$elm$json$Json$Decode$index,
					2,
					$author$project$Elm$Review$Vendor$Serialize$getJsonDecoder(m2)),
				A2(
					$elm$json$Json$Decode$index,
					3,
					$author$project$Elm$Review$Vendor$Serialize$getJsonDecoder(m3)),
				A2(
					$elm$json$Json$Decode$index,
					4,
					$author$project$Elm$Review$Vendor$Serialize$getJsonDecoder(m4))));
	});
function $author$project$Elm$Review$AstCodec$cyclic$expression() {
	return $author$project$Elm$Review$Vendor$Serialize$finishCustomType(
		A3(
			$author$project$Elm$Review$Vendor$Serialize$variant1,
			$stil4m$elm_syntax$Elm$Syntax$Expression$Operator,
			$author$project$Elm$Review$Vendor$Serialize$string,
			A3(
				$author$project$Elm$Review$Vendor$Serialize$variant1,
				$stil4m$elm_syntax$Elm$Syntax$Expression$GLSLExpression,
				$author$project$Elm$Review$Vendor$Serialize$string,
				A4(
					$author$project$Elm$Review$Vendor$Serialize$variant2,
					$stil4m$elm_syntax$Elm$Syntax$Expression$RecordUpdateExpression,
					$author$project$Elm$Review$AstCodec$node($author$project$Elm$Review$Vendor$Serialize$string),
					$author$project$Elm$Review$Vendor$Serialize$list(
						$author$project$Elm$Review$AstCodec$node(
							$author$project$Elm$Review$AstCodec$cyclic$recordSetter())),
					A3(
						$author$project$Elm$Review$Vendor$Serialize$variant1,
						$stil4m$elm_syntax$Elm$Syntax$Expression$RecordAccessFunction,
						$author$project$Elm$Review$Vendor$Serialize$string,
						A4(
							$author$project$Elm$Review$Vendor$Serialize$variant2,
							$stil4m$elm_syntax$Elm$Syntax$Expression$RecordAccess,
							$author$project$Elm$Review$AstCodec$node(
								$author$project$Elm$Review$AstCodec$cyclic$lazyExpression()),
							$author$project$Elm$Review$AstCodec$node($author$project$Elm$Review$Vendor$Serialize$string),
							A3(
								$author$project$Elm$Review$Vendor$Serialize$variant1,
								$stil4m$elm_syntax$Elm$Syntax$Expression$LambdaExpression,
								$author$project$Elm$Review$AstCodec$cyclic$lambda(),
								A3(
									$author$project$Elm$Review$Vendor$Serialize$variant1,
									$stil4m$elm_syntax$Elm$Syntax$Expression$CaseExpression,
									$author$project$Elm$Review$AstCodec$cyclic$caseBlock(),
									A3(
										$author$project$Elm$Review$Vendor$Serialize$variant1,
										$stil4m$elm_syntax$Elm$Syntax$Expression$LetExpression,
										$author$project$Elm$Review$AstCodec$cyclic$letBlock(),
										A3(
											$author$project$Elm$Review$Vendor$Serialize$variant1,
											$stil4m$elm_syntax$Elm$Syntax$Expression$CharLiteral,
											$author$project$Elm$Review$AstCodec$char,
											A3(
												$author$project$Elm$Review$Vendor$Serialize$variant1,
												$stil4m$elm_syntax$Elm$Syntax$Expression$Negation,
												$author$project$Elm$Review$AstCodec$node(
													$author$project$Elm$Review$AstCodec$cyclic$lazyExpression()),
												A3(
													$author$project$Elm$Review$Vendor$Serialize$variant1,
													$stil4m$elm_syntax$Elm$Syntax$Expression$Hex,
													$author$project$Elm$Review$Vendor$Serialize$int,
													A3(
														$author$project$Elm$Review$Vendor$Serialize$variant1,
														$stil4m$elm_syntax$Elm$Syntax$Expression$PrefixOperator,
														$author$project$Elm$Review$Vendor$Serialize$string,
														A5(
															$author$project$Elm$Review$Vendor$Serialize$variant3,
															$stil4m$elm_syntax$Elm$Syntax$Expression$IfBlock,
															$author$project$Elm$Review$AstCodec$node(
																$author$project$Elm$Review$AstCodec$cyclic$lazyExpression()),
															$author$project$Elm$Review$AstCodec$node(
																$author$project$Elm$Review$AstCodec$cyclic$lazyExpression()),
															$author$project$Elm$Review$AstCodec$node(
																$author$project$Elm$Review$AstCodec$cyclic$lazyExpression()),
															A2(
																$author$project$Elm$Review$Vendor$Serialize$variant0,
																$stil4m$elm_syntax$Elm$Syntax$Expression$UnitExpr,
																A3(
																	$author$project$Elm$Review$Vendor$Serialize$variant1,
																	$stil4m$elm_syntax$Elm$Syntax$Expression$ListExpr,
																	$author$project$Elm$Review$Vendor$Serialize$list(
																		$author$project$Elm$Review$AstCodec$node(
																			$author$project$Elm$Review$AstCodec$cyclic$lazyExpression())),
																	A3(
																		$author$project$Elm$Review$Vendor$Serialize$variant1,
																		$stil4m$elm_syntax$Elm$Syntax$Expression$RecordExpr,
																		$author$project$Elm$Review$Vendor$Serialize$list(
																			$author$project$Elm$Review$AstCodec$node(
																				$author$project$Elm$Review$AstCodec$cyclic$recordSetter())),
																		A3(
																			$author$project$Elm$Review$Vendor$Serialize$variant1,
																			$stil4m$elm_syntax$Elm$Syntax$Expression$ParenthesizedExpression,
																			$author$project$Elm$Review$AstCodec$node(
																				$author$project$Elm$Review$AstCodec$cyclic$lazyExpression()),
																			A3(
																				$author$project$Elm$Review$Vendor$Serialize$variant1,
																				$stil4m$elm_syntax$Elm$Syntax$Expression$TupledExpression,
																				$author$project$Elm$Review$Vendor$Serialize$list(
																					$author$project$Elm$Review$AstCodec$node(
																						$author$project$Elm$Review$AstCodec$cyclic$lazyExpression())),
																				A3(
																					$author$project$Elm$Review$Vendor$Serialize$variant1,
																					$stil4m$elm_syntax$Elm$Syntax$Expression$Literal,
																					$author$project$Elm$Review$Vendor$Serialize$string,
																					A3(
																						$author$project$Elm$Review$Vendor$Serialize$variant1,
																						$stil4m$elm_syntax$Elm$Syntax$Expression$Floatable,
																						$author$project$Elm$Review$Vendor$Serialize$float,
																						A3(
																							$author$project$Elm$Review$Vendor$Serialize$variant1,
																							$stil4m$elm_syntax$Elm$Syntax$Expression$Integer,
																							$author$project$Elm$Review$Vendor$Serialize$int,
																							A4(
																								$author$project$Elm$Review$Vendor$Serialize$variant2,
																								$stil4m$elm_syntax$Elm$Syntax$Expression$FunctionOrValue,
																								$author$project$Elm$Review$Vendor$Serialize$list($author$project$Elm$Review$Vendor$Serialize$string),
																								$author$project$Elm$Review$Vendor$Serialize$string,
																								A6(
																									$author$project$Elm$Review$Vendor$Serialize$variant4,
																									$stil4m$elm_syntax$Elm$Syntax$Expression$OperatorApplication,
																									$author$project$Elm$Review$Vendor$Serialize$string,
																									$author$project$Elm$Review$AstCodec$infixDirection,
																									$author$project$Elm$Review$AstCodec$node(
																										$author$project$Elm$Review$AstCodec$cyclic$lazyExpression()),
																									$author$project$Elm$Review$AstCodec$node(
																										$author$project$Elm$Review$AstCodec$cyclic$lazyExpression()),
																									A3(
																										$author$project$Elm$Review$Vendor$Serialize$variant1,
																										$stil4m$elm_syntax$Elm$Syntax$Expression$Application,
																										$author$project$Elm$Review$Vendor$Serialize$list(
																											$author$project$Elm$Review$AstCodec$node(
																												$author$project$Elm$Review$AstCodec$cyclic$lazyExpression())),
																										$author$project$Elm$Review$Vendor$Serialize$customType(
																											function (application) {
																												return function (operatorApplication) {
																													return function (functionOrValue) {
																														return function (integer) {
																															return function (floatable) {
																																return function (literal) {
																																	return function (tuple) {
																																		return function (parenthesized) {
																																			return function (record) {
																																				return function (listExpr) {
																																					return function (unit) {
																																						return function (ifBlock) {
																																							return function (prefixOperator) {
																																								return function (hex) {
																																									return function (negation) {
																																										return function (charExpr) {
																																											return function (letExpr) {
																																												return function (caseExpr) {
																																													return function (lambdaExpr) {
																																														return function (recordAccess) {
																																															return function (recordAccessFunction) {
																																																return function (recordUpdateExpr) {
																																																	return function (glsl) {
																																																		return function (operator) {
																																																			return function (value) {
																																																				switch (value.$) {
																																																					case 1:
																																																						var a = value.a;
																																																						return application(a);
																																																					case 2:
																																																						var a = value.a;
																																																						var b = value.b;
																																																						var c = value.c;
																																																						var d = value.d;
																																																						return A4(operatorApplication, a, b, c, d);
																																																					case 3:
																																																						var a = value.a;
																																																						var b = value.b;
																																																						return A2(functionOrValue, a, b);
																																																					case 7:
																																																						var a = value.a;
																																																						return integer(a);
																																																					case 9:
																																																						var a = value.a;
																																																						return floatable(a);
																																																					case 11:
																																																						var a = value.a;
																																																						return literal(a);
																																																					case 13:
																																																						var a = value.a;
																																																						return tuple(a);
																																																					case 14:
																																																						var a = value.a;
																																																						return parenthesized(a);
																																																					case 18:
																																																						var a = value.a;
																																																						return record(a);
																																																					case 19:
																																																						var a = value.a;
																																																						return listExpr(a);
																																																					case 0:
																																																						return unit;
																																																					case 5:
																																																						var a = value.a;
																																																						return prefixOperator(a);
																																																					case 8:
																																																						var a = value.a;
																																																						return hex(a);
																																																					case 10:
																																																						var a = value.a;
																																																						return negation(a);
																																																					case 12:
																																																						var a = value.a;
																																																						return charExpr(a);
																																																					case 15:
																																																						var a = value.a;
																																																						return letExpr(a);
																																																					case 16:
																																																						var a = value.a;
																																																						return caseExpr(a);
																																																					case 17:
																																																						var a = value.a;
																																																						return lambdaExpr(a);
																																																					case 4:
																																																						var a = value.a;
																																																						var b = value.b;
																																																						var c = value.c;
																																																						return A3(ifBlock, a, b, c);
																																																					case 20:
																																																						var a = value.a;
																																																						var b = value.b;
																																																						return A2(recordAccess, a, b);
																																																					case 21:
																																																						var a = value.a;
																																																						return recordAccessFunction(a);
																																																					case 22:
																																																						var a = value.a;
																																																						var b = value.b;
																																																						return A2(recordUpdateExpr, a, b);
																																																					case 23:
																																																						var a = value.a;
																																																						return glsl(a);
																																																					default:
																																																						var a = value.a;
																																																						return operator(a);
																																																				}
																																																			};
																																																		};
																																																	};
																																																};
																																															};
																																														};
																																													};
																																												};
																																											};
																																										};
																																									};
																																								};
																																							};
																																						};
																																					};
																																				};
																																			};
																																		};
																																	};
																																};
																															};
																														};
																													};
																												};
																											}))))))))))))))))))))))))));
}
function $author$project$Elm$Review$AstCodec$cyclic$caseBlock() {
	return $author$project$Elm$Review$Vendor$Serialize$finishRecord(
		A3(
			$author$project$Elm$Review$Vendor$Serialize$field,
			function ($) {
				return $.eC;
			},
			$author$project$Elm$Review$Vendor$Serialize$list(
				A2(
					$author$project$Elm$Review$Vendor$Serialize$tuple,
					$author$project$Elm$Review$AstCodec$node($author$project$Elm$Review$AstCodec$pattern),
					$author$project$Elm$Review$AstCodec$node(
						$author$project$Elm$Review$AstCodec$cyclic$lazyExpression()))),
			A3(
				$author$project$Elm$Review$Vendor$Serialize$field,
				function ($) {
					return $.eR;
				},
				$author$project$Elm$Review$AstCodec$node(
					$author$project$Elm$Review$AstCodec$cyclic$lazyExpression()),
				$author$project$Elm$Review$Vendor$Serialize$record($stil4m$elm_syntax$Elm$Syntax$Expression$CaseBlock))));
}
function $author$project$Elm$Review$AstCodec$cyclic$letBlock() {
	return $author$project$Elm$Review$Vendor$Serialize$finishRecord(
		A3(
			$author$project$Elm$Review$Vendor$Serialize$field,
			function ($) {
				return $.eR;
			},
			$author$project$Elm$Review$AstCodec$node(
				$author$project$Elm$Review$AstCodec$cyclic$lazyExpression()),
			A3(
				$author$project$Elm$Review$Vendor$Serialize$field,
				function ($) {
					return $.eK;
				},
				$author$project$Elm$Review$Vendor$Serialize$list(
					$author$project$Elm$Review$AstCodec$node(
						$author$project$Elm$Review$AstCodec$cyclic$letDeclaration())),
				$author$project$Elm$Review$Vendor$Serialize$record($stil4m$elm_syntax$Elm$Syntax$Expression$LetBlock))));
}
function $author$project$Elm$Review$AstCodec$cyclic$letDeclaration() {
	return $author$project$Elm$Review$Vendor$Serialize$finishCustomType(
		A4(
			$author$project$Elm$Review$Vendor$Serialize$variant2,
			$stil4m$elm_syntax$Elm$Syntax$Expression$LetDestructuring,
			$author$project$Elm$Review$AstCodec$node($author$project$Elm$Review$AstCodec$pattern),
			$author$project$Elm$Review$AstCodec$node(
				$author$project$Elm$Review$AstCodec$cyclic$lazyExpression()),
			A3(
				$author$project$Elm$Review$Vendor$Serialize$variant1,
				$stil4m$elm_syntax$Elm$Syntax$Expression$LetFunction,
				$author$project$Elm$Review$AstCodec$cyclic$function(),
				$author$project$Elm$Review$Vendor$Serialize$customType(
					F3(
						function (e0, e1, value) {
							if (!value.$) {
								var a = value.a;
								return e0(a);
							} else {
								var a = value.a;
								var b = value.b;
								return A2(e1, a, b);
							}
						})))));
}
function $author$project$Elm$Review$AstCodec$cyclic$function() {
	return $author$project$Elm$Review$Vendor$Serialize$finishRecord(
		A3(
			$author$project$Elm$Review$Vendor$Serialize$field,
			function ($) {
				return $.dm;
			},
			$author$project$Elm$Review$AstCodec$node(
				$author$project$Elm$Review$AstCodec$cyclic$functionImplementation()),
			A3(
				$author$project$Elm$Review$Vendor$Serialize$field,
				function ($) {
					return $.fD;
				},
				$author$project$Elm$Review$Vendor$Serialize$maybe(
					$author$project$Elm$Review$AstCodec$node($author$project$Elm$Review$AstCodec$signature)),
				A3(
					$author$project$Elm$Review$Vendor$Serialize$field,
					function ($) {
						return $.cL;
					},
					$author$project$Elm$Review$Vendor$Serialize$maybe(
						$author$project$Elm$Review$AstCodec$node($author$project$Elm$Review$Vendor$Serialize$string)),
					$author$project$Elm$Review$Vendor$Serialize$record($stil4m$elm_syntax$Elm$Syntax$Expression$Function)))));
}
function $author$project$Elm$Review$AstCodec$cyclic$functionImplementation() {
	return $author$project$Elm$Review$Vendor$Serialize$finishRecord(
		A3(
			$author$project$Elm$Review$Vendor$Serialize$field,
			function ($) {
				return $.eR;
			},
			$author$project$Elm$Review$AstCodec$node(
				$author$project$Elm$Review$AstCodec$cyclic$lazyExpression()),
			A3(
				$author$project$Elm$Review$Vendor$Serialize$field,
				function ($) {
					return $.es;
				},
				$author$project$Elm$Review$Vendor$Serialize$list(
					$author$project$Elm$Review$AstCodec$node($author$project$Elm$Review$AstCodec$pattern)),
				A3(
					$author$project$Elm$Review$Vendor$Serialize$field,
					function ($) {
						return $.fe;
					},
					$author$project$Elm$Review$AstCodec$node($author$project$Elm$Review$Vendor$Serialize$string),
					$author$project$Elm$Review$Vendor$Serialize$record($stil4m$elm_syntax$Elm$Syntax$Expression$FunctionImplementation)))));
}
function $author$project$Elm$Review$AstCodec$cyclic$lambda() {
	return $author$project$Elm$Review$Vendor$Serialize$finishRecord(
		A3(
			$author$project$Elm$Review$Vendor$Serialize$field,
			function ($) {
				return $.eR;
			},
			$author$project$Elm$Review$AstCodec$node(
				$author$project$Elm$Review$AstCodec$cyclic$lazyExpression()),
			A3(
				$author$project$Elm$Review$Vendor$Serialize$field,
				function ($) {
					return $.er;
				},
				$author$project$Elm$Review$Vendor$Serialize$list(
					$author$project$Elm$Review$AstCodec$node($author$project$Elm$Review$AstCodec$pattern)),
				$author$project$Elm$Review$Vendor$Serialize$record($stil4m$elm_syntax$Elm$Syntax$Expression$Lambda))));
}
function $author$project$Elm$Review$AstCodec$cyclic$recordSetter() {
	return A2(
		$author$project$Elm$Review$Vendor$Serialize$tuple,
		$author$project$Elm$Review$AstCodec$node($author$project$Elm$Review$Vendor$Serialize$string),
		$author$project$Elm$Review$AstCodec$node(
			$author$project$Elm$Review$AstCodec$cyclic$lazyExpression()));
}
function $author$project$Elm$Review$AstCodec$cyclic$lazyExpression() {
	return $author$project$Elm$Review$Vendor$Serialize$lazy(
		function (_v0) {
			return $author$project$Elm$Review$AstCodec$cyclic$expression();
		});
}
var $author$project$Elm$Review$AstCodec$expression = $author$project$Elm$Review$AstCodec$cyclic$expression();
$author$project$Elm$Review$AstCodec$cyclic$expression = function () {
	return $author$project$Elm$Review$AstCodec$expression;
};
var $author$project$Elm$Review$AstCodec$caseBlock = $author$project$Elm$Review$AstCodec$cyclic$caseBlock();
$author$project$Elm$Review$AstCodec$cyclic$caseBlock = function () {
	return $author$project$Elm$Review$AstCodec$caseBlock;
};
var $author$project$Elm$Review$AstCodec$letBlock = $author$project$Elm$Review$AstCodec$cyclic$letBlock();
$author$project$Elm$Review$AstCodec$cyclic$letBlock = function () {
	return $author$project$Elm$Review$AstCodec$letBlock;
};
var $author$project$Elm$Review$AstCodec$letDeclaration = $author$project$Elm$Review$AstCodec$cyclic$letDeclaration();
$author$project$Elm$Review$AstCodec$cyclic$letDeclaration = function () {
	return $author$project$Elm$Review$AstCodec$letDeclaration;
};
var $author$project$Elm$Review$AstCodec$function = $author$project$Elm$Review$AstCodec$cyclic$function();
$author$project$Elm$Review$AstCodec$cyclic$function = function () {
	return $author$project$Elm$Review$AstCodec$function;
};
var $author$project$Elm$Review$AstCodec$functionImplementation = $author$project$Elm$Review$AstCodec$cyclic$functionImplementation();
$author$project$Elm$Review$AstCodec$cyclic$functionImplementation = function () {
	return $author$project$Elm$Review$AstCodec$functionImplementation;
};
var $author$project$Elm$Review$AstCodec$lambda = $author$project$Elm$Review$AstCodec$cyclic$lambda();
$author$project$Elm$Review$AstCodec$cyclic$lambda = function () {
	return $author$project$Elm$Review$AstCodec$lambda;
};
var $author$project$Elm$Review$AstCodec$recordSetter = $author$project$Elm$Review$AstCodec$cyclic$recordSetter();
$author$project$Elm$Review$AstCodec$cyclic$recordSetter = function () {
	return $author$project$Elm$Review$AstCodec$recordSetter;
};
var $author$project$Elm$Review$AstCodec$lazyExpression = $author$project$Elm$Review$AstCodec$cyclic$lazyExpression();
$author$project$Elm$Review$AstCodec$cyclic$lazyExpression = function () {
	return $author$project$Elm$Review$AstCodec$lazyExpression;
};
var $author$project$Elm$Review$AstCodec$infix_ = $author$project$Elm$Review$Vendor$Serialize$finishRecord(
	A3(
		$author$project$Elm$Review$Vendor$Serialize$field,
		function ($) {
			return $.e_;
		},
		$author$project$Elm$Review$AstCodec$node($author$project$Elm$Review$Vendor$Serialize$string),
		A3(
			$author$project$Elm$Review$Vendor$Serialize$field,
			function ($) {
				return $.fp;
			},
			$author$project$Elm$Review$AstCodec$node($author$project$Elm$Review$Vendor$Serialize$string),
			A3(
				$author$project$Elm$Review$Vendor$Serialize$field,
				function ($) {
					return $.ft;
				},
				$author$project$Elm$Review$AstCodec$node($author$project$Elm$Review$Vendor$Serialize$int),
				A3(
					$author$project$Elm$Review$Vendor$Serialize$field,
					function ($) {
						return $.eM;
					},
					$author$project$Elm$Review$AstCodec$node($author$project$Elm$Review$AstCodec$infixDirection),
					$author$project$Elm$Review$Vendor$Serialize$record($stil4m$elm_syntax$Elm$Syntax$Infix$Infix))))));
var $author$project$Elm$Review$AstCodec$typeAlias = $author$project$Elm$Review$Vendor$Serialize$finishRecord(
	A3(
		$author$project$Elm$Review$Vendor$Serialize$field,
		function ($) {
			return $.ek;
		},
		$author$project$Elm$Review$AstCodec$node($author$project$Elm$Review$AstCodec$typeAnnotation),
		A3(
			$author$project$Elm$Review$Vendor$Serialize$field,
			function ($) {
				return $.dC;
			},
			$author$project$Elm$Review$Vendor$Serialize$list(
				$author$project$Elm$Review$AstCodec$node($author$project$Elm$Review$Vendor$Serialize$string)),
			A3(
				$author$project$Elm$Review$Vendor$Serialize$field,
				function ($) {
					return $.fe;
				},
				$author$project$Elm$Review$AstCodec$node($author$project$Elm$Review$Vendor$Serialize$string),
				A3(
					$author$project$Elm$Review$Vendor$Serialize$field,
					function ($) {
						return $.cL;
					},
					$author$project$Elm$Review$Vendor$Serialize$maybe(
						$author$project$Elm$Review$AstCodec$node($author$project$Elm$Review$Vendor$Serialize$string)),
					$author$project$Elm$Review$Vendor$Serialize$record($stil4m$elm_syntax$Elm$Syntax$TypeAlias$TypeAlias))))));
var $author$project$Elm$Review$AstCodec$valueConstructor = $author$project$Elm$Review$Vendor$Serialize$finishRecord(
	A3(
		$author$project$Elm$Review$Vendor$Serialize$field,
		function ($) {
			return $.es;
		},
		$author$project$Elm$Review$Vendor$Serialize$list(
			$author$project$Elm$Review$AstCodec$node($author$project$Elm$Review$AstCodec$typeAnnotation)),
		A3(
			$author$project$Elm$Review$Vendor$Serialize$field,
			function ($) {
				return $.fe;
			},
			$author$project$Elm$Review$AstCodec$node($author$project$Elm$Review$Vendor$Serialize$string),
			$author$project$Elm$Review$Vendor$Serialize$record($stil4m$elm_syntax$Elm$Syntax$Type$ValueConstructor))));
var $author$project$Elm$Review$AstCodec$type_ = $author$project$Elm$Review$Vendor$Serialize$finishRecord(
	A3(
		$author$project$Elm$Review$Vendor$Serialize$field,
		function ($) {
			return $.eI;
		},
		$author$project$Elm$Review$Vendor$Serialize$list(
			$author$project$Elm$Review$AstCodec$node($author$project$Elm$Review$AstCodec$valueConstructor)),
		A3(
			$author$project$Elm$Review$Vendor$Serialize$field,
			function ($) {
				return $.dC;
			},
			$author$project$Elm$Review$Vendor$Serialize$list(
				$author$project$Elm$Review$AstCodec$node($author$project$Elm$Review$Vendor$Serialize$string)),
			A3(
				$author$project$Elm$Review$Vendor$Serialize$field,
				function ($) {
					return $.fe;
				},
				$author$project$Elm$Review$AstCodec$node($author$project$Elm$Review$Vendor$Serialize$string),
				A3(
					$author$project$Elm$Review$Vendor$Serialize$field,
					function ($) {
						return $.cL;
					},
					$author$project$Elm$Review$Vendor$Serialize$maybe(
						$author$project$Elm$Review$AstCodec$node($author$project$Elm$Review$Vendor$Serialize$string)),
					$author$project$Elm$Review$Vendor$Serialize$record($stil4m$elm_syntax$Elm$Syntax$Type$Type))))));
var $author$project$Elm$Review$AstCodec$declaration = $author$project$Elm$Review$Vendor$Serialize$finishCustomType(
	A4(
		$author$project$Elm$Review$Vendor$Serialize$variant2,
		$stil4m$elm_syntax$Elm$Syntax$Declaration$Destructuring,
		$author$project$Elm$Review$AstCodec$node($author$project$Elm$Review$AstCodec$pattern),
		$author$project$Elm$Review$AstCodec$node($author$project$Elm$Review$AstCodec$expression),
		A3(
			$author$project$Elm$Review$Vendor$Serialize$variant1,
			$stil4m$elm_syntax$Elm$Syntax$Declaration$InfixDeclaration,
			$author$project$Elm$Review$AstCodec$infix_,
			A3(
				$author$project$Elm$Review$Vendor$Serialize$variant1,
				$stil4m$elm_syntax$Elm$Syntax$Declaration$PortDeclaration,
				$author$project$Elm$Review$AstCodec$signature,
				A3(
					$author$project$Elm$Review$Vendor$Serialize$variant1,
					$stil4m$elm_syntax$Elm$Syntax$Declaration$CustomTypeDeclaration,
					$author$project$Elm$Review$AstCodec$type_,
					A3(
						$author$project$Elm$Review$Vendor$Serialize$variant1,
						$stil4m$elm_syntax$Elm$Syntax$Declaration$AliasDeclaration,
						$author$project$Elm$Review$AstCodec$typeAlias,
						A3(
							$author$project$Elm$Review$Vendor$Serialize$variant1,
							$stil4m$elm_syntax$Elm$Syntax$Declaration$FunctionDeclaration,
							$author$project$Elm$Review$AstCodec$function,
							$author$project$Elm$Review$Vendor$Serialize$customType(
								F7(
									function (e0, e1, e2, e3, e4, e5, value) {
										switch (value.$) {
											case 0:
												var a = value.a;
												return e0(a);
											case 1:
												var a = value.a;
												return e1(a);
											case 2:
												var a = value.a;
												return e2(a);
											case 3:
												var a = value.a;
												return e3(a);
											case 4:
												var a = value.a;
												return e4(a);
											default:
												var a = value.a;
												var b = value.b;
												return A2(e5, a, b);
										}
									})))))))));
var $author$project$Elm$Review$AstCodec$range = $author$project$Elm$Review$Vendor$Serialize$finishRecord(
	A3(
		$author$project$Elm$Review$Vendor$Serialize$field,
		A2(
			$elm$core$Basics$composeR,
			function ($) {
				return $.bu;
			},
			function ($) {
				return $.eF;
			}),
		$author$project$Elm$Review$Vendor$Serialize$int,
		A3(
			$author$project$Elm$Review$Vendor$Serialize$field,
			A2(
				$elm$core$Basics$composeR,
				function ($) {
					return $.bu;
				},
				function ($) {
					return $.d0;
				}),
			$author$project$Elm$Review$Vendor$Serialize$int,
			A3(
				$author$project$Elm$Review$Vendor$Serialize$field,
				A2(
					$elm$core$Basics$composeR,
					function ($) {
						return $.bQ;
					},
					function ($) {
						return $.eF;
					}),
				$author$project$Elm$Review$Vendor$Serialize$int,
				A3(
					$author$project$Elm$Review$Vendor$Serialize$field,
					A2(
						$elm$core$Basics$composeR,
						function ($) {
							return $.bQ;
						},
						function ($) {
							return $.d0;
						}),
					$author$project$Elm$Review$Vendor$Serialize$int,
					$author$project$Elm$Review$Vendor$Serialize$record(
						F4(
							function (startRow, startColumn, endRow, endColumn) {
								return {
									bu: {eF: endColumn, d0: endRow},
									bQ: {eF: startColumn, d0: startRow}
								};
							})))))));
var $author$project$Elm$Review$AstCodec$exposedType = $author$project$Elm$Review$Vendor$Serialize$finishRecord(
	A3(
		$author$project$Elm$Review$Vendor$Serialize$field,
		function ($) {
			return $.fo;
		},
		$author$project$Elm$Review$Vendor$Serialize$maybe($author$project$Elm$Review$AstCodec$range),
		A3(
			$author$project$Elm$Review$Vendor$Serialize$field,
			function ($) {
				return $.fe;
			},
			$author$project$Elm$Review$Vendor$Serialize$string,
			$author$project$Elm$Review$Vendor$Serialize$record($stil4m$elm_syntax$Elm$Syntax$Exposing$ExposedType))));
var $author$project$Elm$Review$AstCodec$topLevelExpose = $author$project$Elm$Review$Vendor$Serialize$finishCustomType(
	A3(
		$author$project$Elm$Review$Vendor$Serialize$variant1,
		$stil4m$elm_syntax$Elm$Syntax$Exposing$TypeExpose,
		$author$project$Elm$Review$AstCodec$exposedType,
		A3(
			$author$project$Elm$Review$Vendor$Serialize$variant1,
			$stil4m$elm_syntax$Elm$Syntax$Exposing$TypeOrAliasExpose,
			$author$project$Elm$Review$Vendor$Serialize$string,
			A3(
				$author$project$Elm$Review$Vendor$Serialize$variant1,
				$stil4m$elm_syntax$Elm$Syntax$Exposing$FunctionExpose,
				$author$project$Elm$Review$Vendor$Serialize$string,
				A3(
					$author$project$Elm$Review$Vendor$Serialize$variant1,
					$stil4m$elm_syntax$Elm$Syntax$Exposing$InfixExpose,
					$author$project$Elm$Review$Vendor$Serialize$string,
					$author$project$Elm$Review$Vendor$Serialize$customType(
						F5(
							function (e0, e1, e2, e3, value) {
								switch (value.$) {
									case 0:
										var a = value.a;
										return e0(a);
									case 1:
										var a = value.a;
										return e1(a);
									case 2:
										var a = value.a;
										return e2(a);
									default:
										var a = value.a;
										return e3(a);
								}
							})))))));
var $author$project$Elm$Review$AstCodec$exposing_ = $author$project$Elm$Review$Vendor$Serialize$finishCustomType(
	A3(
		$author$project$Elm$Review$Vendor$Serialize$variant1,
		$stil4m$elm_syntax$Elm$Syntax$Exposing$Explicit,
		$author$project$Elm$Review$Vendor$Serialize$list(
			$author$project$Elm$Review$AstCodec$node($author$project$Elm$Review$AstCodec$topLevelExpose)),
		A3(
			$author$project$Elm$Review$Vendor$Serialize$variant1,
			$stil4m$elm_syntax$Elm$Syntax$Exposing$All,
			$author$project$Elm$Review$AstCodec$range,
			$author$project$Elm$Review$Vendor$Serialize$customType(
				F3(
					function (e0, e1, value) {
						if (!value.$) {
							var a = value.a;
							return e0(a);
						} else {
							var a = value.a;
							return e1(a);
						}
					})))));
var $author$project$Elm$Review$AstCodec$import_ = $author$project$Elm$Review$Vendor$Serialize$finishRecord(
	A3(
		$author$project$Elm$Review$Vendor$Serialize$field,
		function ($) {
			return $.cN;
		},
		$author$project$Elm$Review$Vendor$Serialize$maybe(
			$author$project$Elm$Review$AstCodec$node($author$project$Elm$Review$AstCodec$exposing_)),
		A3(
			$author$project$Elm$Review$Vendor$Serialize$field,
			function ($) {
				return $.fb;
			},
			$author$project$Elm$Review$Vendor$Serialize$maybe(
				$author$project$Elm$Review$AstCodec$node(
					$author$project$Elm$Review$Vendor$Serialize$list($author$project$Elm$Review$Vendor$Serialize$string))),
			A3(
				$author$project$Elm$Review$Vendor$Serialize$field,
				function ($) {
					return $.cv;
				},
				$author$project$Elm$Review$AstCodec$node(
					$author$project$Elm$Review$Vendor$Serialize$list($author$project$Elm$Review$Vendor$Serialize$string)),
				$author$project$Elm$Review$Vendor$Serialize$record($stil4m$elm_syntax$Elm$Syntax$Import$Import)))));
var $author$project$Elm$Review$AstCodec$defaultModuleData = $author$project$Elm$Review$Vendor$Serialize$finishRecord(
	A3(
		$author$project$Elm$Review$Vendor$Serialize$field,
		function ($) {
			return $.cN;
		},
		$author$project$Elm$Review$AstCodec$node($author$project$Elm$Review$AstCodec$exposing_),
		A3(
			$author$project$Elm$Review$Vendor$Serialize$field,
			function ($) {
				return $.cv;
			},
			$author$project$Elm$Review$AstCodec$node(
				$author$project$Elm$Review$Vendor$Serialize$list($author$project$Elm$Review$Vendor$Serialize$string)),
			$author$project$Elm$Review$Vendor$Serialize$record($stil4m$elm_syntax$Elm$Syntax$Module$DefaultModuleData))));
var $stil4m$elm_syntax$Elm$Syntax$Module$EffectModuleData = F4(
	function (moduleName, exposingList, command, subscription) {
		return {eG: command, cN: exposingList, cv: moduleName, fJ: subscription};
	});
var $author$project$Elm$Review$AstCodec$effectModuleData = $author$project$Elm$Review$Vendor$Serialize$finishRecord(
	A3(
		$author$project$Elm$Review$Vendor$Serialize$field,
		function ($) {
			return $.fJ;
		},
		$author$project$Elm$Review$Vendor$Serialize$maybe(
			$author$project$Elm$Review$AstCodec$node($author$project$Elm$Review$Vendor$Serialize$string)),
		A3(
			$author$project$Elm$Review$Vendor$Serialize$field,
			function ($) {
				return $.eG;
			},
			$author$project$Elm$Review$Vendor$Serialize$maybe(
				$author$project$Elm$Review$AstCodec$node($author$project$Elm$Review$Vendor$Serialize$string)),
			A3(
				$author$project$Elm$Review$Vendor$Serialize$field,
				function ($) {
					return $.cN;
				},
				$author$project$Elm$Review$AstCodec$node($author$project$Elm$Review$AstCodec$exposing_),
				A3(
					$author$project$Elm$Review$Vendor$Serialize$field,
					function ($) {
						return $.cv;
					},
					$author$project$Elm$Review$AstCodec$node(
						$author$project$Elm$Review$Vendor$Serialize$list($author$project$Elm$Review$Vendor$Serialize$string)),
					$author$project$Elm$Review$Vendor$Serialize$record($stil4m$elm_syntax$Elm$Syntax$Module$EffectModuleData))))));
var $author$project$Elm$Review$AstCodec$module_ = $author$project$Elm$Review$Vendor$Serialize$finishCustomType(
	A3(
		$author$project$Elm$Review$Vendor$Serialize$variant1,
		$stil4m$elm_syntax$Elm$Syntax$Module$EffectModule,
		$author$project$Elm$Review$AstCodec$effectModuleData,
		A3(
			$author$project$Elm$Review$Vendor$Serialize$variant1,
			$stil4m$elm_syntax$Elm$Syntax$Module$PortModule,
			$author$project$Elm$Review$AstCodec$defaultModuleData,
			A3(
				$author$project$Elm$Review$Vendor$Serialize$variant1,
				$stil4m$elm_syntax$Elm$Syntax$Module$NormalModule,
				$author$project$Elm$Review$AstCodec$defaultModuleData,
				$author$project$Elm$Review$Vendor$Serialize$customType(
					F4(
						function (e0, e1, e2, value) {
							switch (value.$) {
								case 0:
									var a = value.a;
									return e0(a);
								case 1:
									var a = value.a;
									return e1(a);
								default:
									var a = value.a;
									return e2(a);
							}
						}))))));
var $author$project$Elm$Review$AstCodec$file = $author$project$Elm$Review$Vendor$Serialize$finishRecord(
	A3(
		$author$project$Elm$Review$Vendor$Serialize$field,
		function ($) {
			return $.eH;
		},
		$author$project$Elm$Review$Vendor$Serialize$list(
			$author$project$Elm$Review$AstCodec$node($author$project$Elm$Review$Vendor$Serialize$string)),
		A3(
			$author$project$Elm$Review$Vendor$Serialize$field,
			function ($) {
				return $.eK;
			},
			$author$project$Elm$Review$Vendor$Serialize$list(
				$author$project$Elm$Review$AstCodec$node($author$project$Elm$Review$AstCodec$declaration)),
			A3(
				$author$project$Elm$Review$Vendor$Serialize$field,
				function ($) {
					return $.e1;
				},
				$author$project$Elm$Review$Vendor$Serialize$list(
					$author$project$Elm$Review$AstCodec$node($author$project$Elm$Review$AstCodec$import_)),
				A3(
					$author$project$Elm$Review$Vendor$Serialize$field,
					function ($) {
						return $.fc;
					},
					$author$project$Elm$Review$AstCodec$node($author$project$Elm$Review$AstCodec$module_),
					$author$project$Elm$Review$Vendor$Serialize$record($stil4m$elm_syntax$Elm$Syntax$File$File))))));
var $author$project$Elm$Review$AstCodec$encode = function (file_) {
	return A2($author$project$Elm$Review$Vendor$Serialize$encodeToJson, $author$project$Elm$Review$AstCodec$file, file_);
};
var $author$project$Elm$Review$Main$find = F2(
	function (predicate, list) {
		find:
		while (true) {
			if (!list.b) {
				return $elm$core$Maybe$Nothing;
			} else {
				var first = list.a;
				var rest = list.b;
				if (predicate(first)) {
					return $elm$core$Maybe$Just(first);
				} else {
					var $temp$predicate = predicate,
						$temp$list = rest;
					predicate = $temp$predicate;
					list = $temp$list;
					continue find;
				}
			}
		}
	});
var $jfmengels$elm_review$Review$Project$modules = function (_v0) {
	var project = _v0;
	return $elm$core$Dict$values(project.aN);
};
var $author$project$Elm$Review$Main$cacheFileRequest = F2(
	function (project, source) {
		var _v0 = A2(
			$author$project$Elm$Review$Main$find,
			function (module_) {
				return _Utils_eq(module_.fE, source);
			},
			$jfmengels$elm_review$Review$Project$modules(project));
		if (!_v0.$) {
			var ast = _v0.a.eu;
			return $elm$json$Json$Encode$object(
				_List_fromArray(
					[
						_Utils_Tuple2(
						'source',
						$elm$json$Json$Encode$string(source)),
						_Utils_Tuple2(
						'ast',
						$author$project$Elm$Review$AstCodec$encode(ast))
					]));
		} else {
			return $elm$json$Json$Encode$null;
		}
	});
var $author$project$Elm$Review$Main$Accepted = function (a) {
	return {$: 0, a: a};
};
var $author$project$Elm$Review$Main$Refused = {$: 1};
var $author$project$Elm$Review$Vendor$Serialize$SerializerOutOfDate = {$: 2};
var $author$project$Elm$Review$Vendor$Serialize$decodeFromJson = F2(
	function (codec, json) {
		var decoder = A2(
			$elm$json$Json$Decode$andThen,
			function (value) {
				return (value <= 0) ? $elm$json$Json$Decode$succeed(
					$elm$core$Result$Err($author$project$Elm$Review$Vendor$Serialize$DataCorrupted)) : (_Utils_eq(value, $author$project$Elm$Review$Vendor$Serialize$version) ? A2(
					$elm$json$Json$Decode$index,
					1,
					$author$project$Elm$Review$Vendor$Serialize$getJsonDecoder(codec)) : $elm$json$Json$Decode$succeed(
					$elm$core$Result$Err($author$project$Elm$Review$Vendor$Serialize$SerializerOutOfDate)));
			},
			A2($elm$json$Json$Decode$index, 0, $elm$json$Json$Decode$int));
		var _v0 = A2($elm$json$Json$Decode$decodeValue, decoder, json);
		if (!_v0.$) {
			var value = _v0.a;
			return value;
		} else {
			return $elm$core$Result$Err($author$project$Elm$Review$Vendor$Serialize$DataCorrupted);
		}
	});
var $author$project$Elm$Review$AstCodec$decode = A2(
	$elm$json$Json$Decode$andThen,
	function (data) {
		var _v0 = A2($author$project$Elm$Review$Vendor$Serialize$decodeFromJson, $author$project$Elm$Review$AstCodec$file, data);
		if (!_v0.$) {
			var res = _v0.a;
			return $elm$json$Json$Decode$succeed(res);
		} else {
			return $elm$json$Json$Decode$fail('Not a valid file');
		}
	},
	$elm$json$Json$Decode$value);
var $author$project$Elm$Review$File$decode = A4(
	$elm$json$Json$Decode$map3,
	F3(
		function (path, source, ast) {
			return {eu: ast, fr: path, fE: source};
		}),
	A2($elm$json$Json$Decode$field, 'path', $elm$json$Json$Decode$string),
	A2($elm$json$Json$Decode$field, 'source', $elm$json$Json$Decode$string),
	$elm$json$Json$Decode$oneOf(
		_List_fromArray(
			[
				A2(
				$elm$json$Json$Decode$field,
				'ast',
				A2($elm$json$Json$Decode$map, $elm$core$Maybe$Just, $author$project$Elm$Review$AstCodec$decode)),
				$elm$json$Json$Decode$succeed($elm$core$Maybe$Nothing)
			])));
var $author$project$Elm$Review$Main$confirmationDecoder = A2(
	$elm$json$Json$Decode$andThen,
	function (accepted) {
		return accepted ? A2(
			$elm$json$Json$Decode$map,
			$author$project$Elm$Review$Main$Accepted,
			A2(
				$elm$json$Json$Decode$field,
				'files',
				$elm$json$Json$Decode$list($author$project$Elm$Review$File$decode))) : $elm$json$Json$Decode$succeed($author$project$Elm$Review$Main$Refused);
	},
	A2($elm$json$Json$Decode$field, 'answer', $elm$json$Json$Decode$bool));
var $jfmengels$elm_review$Review$Project$Dependency$Dependency = $elm$core$Basics$identity;
var $jfmengels$elm_review$Review$Project$Dependency$create = F3(
	function (name_, elmJson_, modules_) {
		return {cg: elmJson_, aN: modules_, fe: name_};
	});
var $elm$project_metadata_utils$Elm$Docs$Module = F6(
	function (name, comment, unions, aliases, values, binops) {
		return {dc: aliases, dh: binops, bq: comment, fe: name, el: unions, em: values};
	});
var $elm$project_metadata_utils$Elm$Docs$Alias = F4(
	function (name, comment, args, tipe) {
		return {er: args, bq: comment, fe: name, c9: tipe};
	});
var $elm$parser$Parser$Forbidden = 0;
var $elm$project_metadata_utils$Elm$Type$arrow = $elm$parser$Parser$symbol('->');
var $elm$project_metadata_utils$Elm$Type$comma = $elm$parser$Parser$symbol(',');
var $elm$project_metadata_utils$Elm$Type$isInnerVarChar = function (_char) {
	return $elm$core$Char$isAlphaNum(_char) || (_char === '_');
};
var $elm$project_metadata_utils$Elm$Type$var = function (isFirst) {
	return $elm$parser$Parser$variable(
		{dJ: $elm$project_metadata_utils$Elm$Type$isInnerVarChar, d$: $elm$core$Set$empty, bQ: isFirst});
};
var $elm$project_metadata_utils$Elm$Type$lowVar = $elm$project_metadata_utils$Elm$Type$var($elm$core$Char$isLower);
var $elm$project_metadata_utils$Elm$Type$spaces = $elm$parser$Parser$chompWhile(
	function (_char) {
		return _char === ' ';
	});
var $elm$project_metadata_utils$Elm$Type$extension = $elm$parser$Parser$oneOf(
	_List_fromArray(
		[
			A2(
			$elm$parser$Parser$keeper,
			$elm$parser$Parser$succeed($elm$core$Maybe$Just),
			A2(
				$elm$parser$Parser$ignorer,
				A2(
					$elm$parser$Parser$ignorer,
					A2(
						$elm$parser$Parser$ignorer,
						$elm$parser$Parser$backtrackable($elm$project_metadata_utils$Elm$Type$lowVar),
						$elm$parser$Parser$backtrackable($elm$project_metadata_utils$Elm$Type$spaces)),
					$elm$parser$Parser$symbol('|')),
				$elm$project_metadata_utils$Elm$Type$spaces)),
			$elm$parser$Parser$succeed($elm$core$Maybe$Nothing)
		]));
var $elm$project_metadata_utils$Elm$Type$capVar = $elm$project_metadata_utils$Elm$Type$var($elm$core$Char$isUpper);
var $elm$project_metadata_utils$Elm$Type$qualifiedCapVarHelp = function (_v0) {
	return $elm$parser$Parser$oneOf(
		_List_fromArray(
			[
				A2(
				$elm$parser$Parser$ignorer,
				A2(
					$elm$parser$Parser$ignorer,
					$elm$parser$Parser$succeed(
						$elm$parser$Parser$Loop(0)),
					$elm$parser$Parser$symbol('.')),
				$elm$project_metadata_utils$Elm$Type$capVar),
				$elm$parser$Parser$succeed(
				$elm$parser$Parser$Done(0))
			]));
};
var $elm$project_metadata_utils$Elm$Type$qualifiedCapVar = $elm$parser$Parser$getChompedString(
	A2(
		$elm$parser$Parser$ignorer,
		$elm$project_metadata_utils$Elm$Type$capVar,
		A2($elm$parser$Parser$loop, 0, $elm$project_metadata_utils$Elm$Type$qualifiedCapVarHelp)));
var $elm$parser$Parser$Advanced$sequenceEndForbidden = F5(
	function (ender, ws, parseItem, sep, revItems) {
		var chompRest = function (item) {
			return A5(
				$elm$parser$Parser$Advanced$sequenceEndForbidden,
				ender,
				ws,
				parseItem,
				sep,
				A2($elm$core$List$cons, item, revItems));
		};
		return A2(
			$elm$parser$Parser$Advanced$skip,
			ws,
			$elm$parser$Parser$Advanced$oneOf(
				_List_fromArray(
					[
						A2(
						$elm$parser$Parser$Advanced$skip,
						sep,
						A2(
							$elm$parser$Parser$Advanced$skip,
							ws,
							A2(
								$elm$parser$Parser$Advanced$map,
								function (item) {
									return $elm$parser$Parser$Advanced$Loop(
										A2($elm$core$List$cons, item, revItems));
								},
								parseItem))),
						A2(
						$elm$parser$Parser$Advanced$map,
						function (_v0) {
							return $elm$parser$Parser$Advanced$Done(
								$elm$core$List$reverse(revItems));
						},
						ender)
					])));
	});
var $elm$parser$Parser$Advanced$sequenceEndMandatory = F4(
	function (ws, parseItem, sep, revItems) {
		return $elm$parser$Parser$Advanced$oneOf(
			_List_fromArray(
				[
					A2(
					$elm$parser$Parser$Advanced$map,
					function (item) {
						return $elm$parser$Parser$Advanced$Loop(
							A2($elm$core$List$cons, item, revItems));
					},
					A2(
						$elm$parser$Parser$Advanced$ignorer,
						parseItem,
						A2(
							$elm$parser$Parser$Advanced$ignorer,
							ws,
							A2($elm$parser$Parser$Advanced$ignorer, sep, ws)))),
					A2(
					$elm$parser$Parser$Advanced$map,
					function (_v0) {
						return $elm$parser$Parser$Advanced$Done(
							$elm$core$List$reverse(revItems));
					},
					$elm$parser$Parser$Advanced$succeed(0))
				]));
	});
var $elm$parser$Parser$Advanced$sequenceEndOptional = F5(
	function (ender, ws, parseItem, sep, revItems) {
		var parseEnd = A2(
			$elm$parser$Parser$Advanced$map,
			function (_v0) {
				return $elm$parser$Parser$Advanced$Done(
					$elm$core$List$reverse(revItems));
			},
			ender);
		return A2(
			$elm$parser$Parser$Advanced$skip,
			ws,
			$elm$parser$Parser$Advanced$oneOf(
				_List_fromArray(
					[
						A2(
						$elm$parser$Parser$Advanced$skip,
						sep,
						A2(
							$elm$parser$Parser$Advanced$skip,
							ws,
							$elm$parser$Parser$Advanced$oneOf(
								_List_fromArray(
									[
										A2(
										$elm$parser$Parser$Advanced$map,
										function (item) {
											return $elm$parser$Parser$Advanced$Loop(
												A2($elm$core$List$cons, item, revItems));
										},
										parseItem),
										parseEnd
									])))),
						parseEnd
					])));
	});
var $elm$parser$Parser$Advanced$sequenceEnd = F5(
	function (ender, ws, parseItem, sep, trailing) {
		var chompRest = function (item) {
			switch (trailing) {
				case 0:
					return A2(
						$elm$parser$Parser$Advanced$loop,
						_List_fromArray(
							[item]),
						A4($elm$parser$Parser$Advanced$sequenceEndForbidden, ender, ws, parseItem, sep));
				case 1:
					return A2(
						$elm$parser$Parser$Advanced$loop,
						_List_fromArray(
							[item]),
						A4($elm$parser$Parser$Advanced$sequenceEndOptional, ender, ws, parseItem, sep));
				default:
					return A2(
						$elm$parser$Parser$Advanced$ignorer,
						A2(
							$elm$parser$Parser$Advanced$skip,
							ws,
							A2(
								$elm$parser$Parser$Advanced$skip,
								sep,
								A2(
									$elm$parser$Parser$Advanced$skip,
									ws,
									A2(
										$elm$parser$Parser$Advanced$loop,
										_List_fromArray(
											[item]),
										A3($elm$parser$Parser$Advanced$sequenceEndMandatory, ws, parseItem, sep))))),
						ender);
			}
		};
		return $elm$parser$Parser$Advanced$oneOf(
			_List_fromArray(
				[
					A2($elm$parser$Parser$Advanced$andThen, chompRest, parseItem),
					A2(
					$elm$parser$Parser$Advanced$map,
					function (_v0) {
						return _List_Nil;
					},
					ender)
				]));
	});
var $elm$parser$Parser$Advanced$sequence = function (i) {
	return A2(
		$elm$parser$Parser$Advanced$skip,
		$elm$parser$Parser$Advanced$token(i.bQ),
		A2(
			$elm$parser$Parser$Advanced$skip,
			i.d7,
			A5(
				$elm$parser$Parser$Advanced$sequenceEnd,
				$elm$parser$Parser$Advanced$token(i.bu),
				i.d7,
				i.dM,
				$elm$parser$Parser$Advanced$token(i.d5),
				i.ej)));
};
var $elm$parser$Parser$Advanced$Forbidden = 0;
var $elm$parser$Parser$Advanced$Mandatory = 2;
var $elm$parser$Parser$Advanced$Optional = 1;
var $elm$parser$Parser$toAdvancedTrailing = function (trailing) {
	switch (trailing) {
		case 0:
			return 0;
		case 1:
			return 1;
		default:
			return 2;
	}
};
var $elm$parser$Parser$sequence = function (i) {
	return $elm$parser$Parser$Advanced$sequence(
		{
			bu: $elm$parser$Parser$toToken(i.bu),
			dM: i.dM,
			d5: $elm$parser$Parser$toToken(i.d5),
			d7: i.d7,
			bQ: $elm$parser$Parser$toToken(i.bQ),
			ej: $elm$parser$Parser$toAdvancedTrailing(i.ej)
		});
};
var $elm$project_metadata_utils$Elm$Type$tuplize = function (args) {
	if (args.b && (!args.b.b)) {
		var arg = args.a;
		return arg;
	} else {
		return $elm$project_metadata_utils$Elm$Type$Tuple(args);
	}
};
var $elm$project_metadata_utils$Elm$Type$chompArgs = function (revArgs) {
	return $elm$parser$Parser$oneOf(
		_List_fromArray(
			[
				A2(
				$elm$parser$Parser$map,
				function (arg) {
					return $elm$parser$Parser$Loop(
						A2($elm$core$List$cons, arg, revArgs));
				},
				A2(
					$elm$parser$Parser$keeper,
					A2(
						$elm$parser$Parser$ignorer,
						$elm$parser$Parser$succeed($elm$core$Basics$identity),
						$elm$parser$Parser$backtrackable($elm$project_metadata_utils$Elm$Type$spaces)),
					$elm$project_metadata_utils$Elm$Type$cyclic$term())),
				A2(
				$elm$parser$Parser$map,
				function (_v2) {
					return $elm$parser$Parser$Done(
						$elm$core$List$reverse(revArgs));
				},
				$elm$parser$Parser$succeed(0))
			]));
};
var $elm$project_metadata_utils$Elm$Type$recordEndHelp = function (revFields) {
	return $elm$parser$Parser$oneOf(
		_List_fromArray(
			[
				A2(
				$elm$parser$Parser$keeper,
				A2(
					$elm$parser$Parser$ignorer,
					A2(
						$elm$parser$Parser$ignorer,
						$elm$parser$Parser$succeed(
							function (f) {
								return $elm$parser$Parser$Loop(
									A2($elm$core$List$cons, f, revFields));
							}),
						$elm$project_metadata_utils$Elm$Type$comma),
					$elm$project_metadata_utils$Elm$Type$spaces),
				A2(
					$elm$parser$Parser$ignorer,
					$elm$project_metadata_utils$Elm$Type$cyclic$field(),
					$elm$project_metadata_utils$Elm$Type$spaces)),
				A2(
				$elm$parser$Parser$keeper,
				$elm$parser$Parser$succeed(
					function (_v1) {
						return $elm$parser$Parser$Done(
							$elm$core$List$reverse(revFields));
					}),
				$elm$parser$Parser$symbol('}'))
			]));
};
var $elm$project_metadata_utils$Elm$Type$tipeHelp = function (t) {
	return $elm$parser$Parser$oneOf(
		_List_fromArray(
			[
				A2(
				$elm$parser$Parser$map,
				$elm$project_metadata_utils$Elm$Type$Lambda(t),
				$elm$project_metadata_utils$Elm$Type$cyclic$arrowAndType()),
				$elm$parser$Parser$succeed(t)
			]));
};
function $elm$project_metadata_utils$Elm$Type$cyclic$arrowAndType() {
	return A2(
		$elm$parser$Parser$keeper,
		A2(
			$elm$parser$Parser$ignorer,
			A2(
				$elm$parser$Parser$ignorer,
				A2(
					$elm$parser$Parser$ignorer,
					$elm$parser$Parser$succeed($elm$core$Basics$identity),
					$elm$parser$Parser$backtrackable($elm$project_metadata_utils$Elm$Type$spaces)),
				$elm$project_metadata_utils$Elm$Type$arrow),
			$elm$project_metadata_utils$Elm$Type$spaces),
		$elm$project_metadata_utils$Elm$Type$cyclic$tipe());
}
function $elm$project_metadata_utils$Elm$Type$cyclic$tipeTerm() {
	return $elm$parser$Parser$oneOf(
		_List_fromArray(
			[
				A2($elm$parser$Parser$map, $elm$project_metadata_utils$Elm$Type$Var, $elm$project_metadata_utils$Elm$Type$lowVar),
				A2(
				$elm$parser$Parser$keeper,
				A2(
					$elm$parser$Parser$keeper,
					$elm$parser$Parser$succeed($elm$project_metadata_utils$Elm$Type$Type),
					$elm$project_metadata_utils$Elm$Type$qualifiedCapVar),
				A2($elm$parser$Parser$loop, _List_Nil, $elm$project_metadata_utils$Elm$Type$chompArgs)),
				$elm$project_metadata_utils$Elm$Type$cyclic$record(),
				$elm$project_metadata_utils$Elm$Type$cyclic$tuple()
			]));
}
function $elm$project_metadata_utils$Elm$Type$cyclic$term() {
	return $elm$parser$Parser$oneOf(
		_List_fromArray(
			[
				A2($elm$parser$Parser$map, $elm$project_metadata_utils$Elm$Type$Var, $elm$project_metadata_utils$Elm$Type$lowVar),
				A2(
				$elm$parser$Parser$map,
				function (name) {
					return A2($elm$project_metadata_utils$Elm$Type$Type, name, _List_Nil);
				},
				$elm$project_metadata_utils$Elm$Type$qualifiedCapVar),
				$elm$project_metadata_utils$Elm$Type$cyclic$record(),
				$elm$project_metadata_utils$Elm$Type$cyclic$tuple()
			]));
}
function $elm$project_metadata_utils$Elm$Type$cyclic$record() {
	return A2(
		$elm$parser$Parser$keeper,
		A2(
			$elm$parser$Parser$keeper,
			A2(
				$elm$parser$Parser$ignorer,
				A2(
					$elm$parser$Parser$ignorer,
					$elm$parser$Parser$succeed(
						F2(
							function (ext, fs) {
								return A2($elm$project_metadata_utils$Elm$Type$Record, fs, ext);
							})),
					$elm$parser$Parser$symbol('{')),
				$elm$project_metadata_utils$Elm$Type$spaces),
			$elm$project_metadata_utils$Elm$Type$extension),
		$elm$project_metadata_utils$Elm$Type$cyclic$recordEnd());
}
function $elm$project_metadata_utils$Elm$Type$cyclic$recordEnd() {
	return $elm$parser$Parser$oneOf(
		_List_fromArray(
			[
				A2(
				$elm$parser$Parser$andThen,
				function (f) {
					return A2(
						$elm$parser$Parser$loop,
						_List_fromArray(
							[f]),
						$elm$project_metadata_utils$Elm$Type$recordEndHelp);
				},
				A2(
					$elm$parser$Parser$ignorer,
					$elm$project_metadata_utils$Elm$Type$cyclic$field(),
					$elm$project_metadata_utils$Elm$Type$spaces)),
				A2(
				$elm$parser$Parser$ignorer,
				$elm$parser$Parser$succeed(_List_Nil),
				$elm$parser$Parser$symbol('}'))
			]));
}
function $elm$project_metadata_utils$Elm$Type$cyclic$field() {
	return A2(
		$elm$parser$Parser$keeper,
		A2(
			$elm$parser$Parser$keeper,
			$elm$parser$Parser$succeed($elm$core$Tuple$pair),
			A2(
				$elm$parser$Parser$ignorer,
				A2(
					$elm$parser$Parser$ignorer,
					A2($elm$parser$Parser$ignorer, $elm$project_metadata_utils$Elm$Type$lowVar, $elm$project_metadata_utils$Elm$Type$spaces),
					$elm$parser$Parser$symbol(':')),
				$elm$project_metadata_utils$Elm$Type$spaces)),
		$elm$project_metadata_utils$Elm$Type$cyclic$tipe());
}
function $elm$project_metadata_utils$Elm$Type$cyclic$tuple() {
	return A2(
		$elm$parser$Parser$map,
		$elm$project_metadata_utils$Elm$Type$tuplize,
		$elm$parser$Parser$sequence(
			{
				bu: ')',
				dM: $elm$project_metadata_utils$Elm$Type$cyclic$tipe(),
				d5: ',',
				d7: $elm$project_metadata_utils$Elm$Type$spaces,
				bQ: '(',
				ej: 0
			}));
}
function $elm$project_metadata_utils$Elm$Type$cyclic$tipe() {
	return $elm$parser$Parser$lazy(
		function (_v0) {
			return A2(
				$elm$parser$Parser$andThen,
				$elm$project_metadata_utils$Elm$Type$tipeHelp,
				$elm$project_metadata_utils$Elm$Type$cyclic$tipeTerm());
		});
}
var $elm$project_metadata_utils$Elm$Type$arrowAndType = $elm$project_metadata_utils$Elm$Type$cyclic$arrowAndType();
$elm$project_metadata_utils$Elm$Type$cyclic$arrowAndType = function () {
	return $elm$project_metadata_utils$Elm$Type$arrowAndType;
};
var $elm$project_metadata_utils$Elm$Type$tipeTerm = $elm$project_metadata_utils$Elm$Type$cyclic$tipeTerm();
$elm$project_metadata_utils$Elm$Type$cyclic$tipeTerm = function () {
	return $elm$project_metadata_utils$Elm$Type$tipeTerm;
};
var $elm$project_metadata_utils$Elm$Type$term = $elm$project_metadata_utils$Elm$Type$cyclic$term();
$elm$project_metadata_utils$Elm$Type$cyclic$term = function () {
	return $elm$project_metadata_utils$Elm$Type$term;
};
var $elm$project_metadata_utils$Elm$Type$record = $elm$project_metadata_utils$Elm$Type$cyclic$record();
$elm$project_metadata_utils$Elm$Type$cyclic$record = function () {
	return $elm$project_metadata_utils$Elm$Type$record;
};
var $elm$project_metadata_utils$Elm$Type$recordEnd = $elm$project_metadata_utils$Elm$Type$cyclic$recordEnd();
$elm$project_metadata_utils$Elm$Type$cyclic$recordEnd = function () {
	return $elm$project_metadata_utils$Elm$Type$recordEnd;
};
var $elm$project_metadata_utils$Elm$Type$field = $elm$project_metadata_utils$Elm$Type$cyclic$field();
$elm$project_metadata_utils$Elm$Type$cyclic$field = function () {
	return $elm$project_metadata_utils$Elm$Type$field;
};
var $elm$project_metadata_utils$Elm$Type$tuple = $elm$project_metadata_utils$Elm$Type$cyclic$tuple();
$elm$project_metadata_utils$Elm$Type$cyclic$tuple = function () {
	return $elm$project_metadata_utils$Elm$Type$tuple;
};
var $elm$project_metadata_utils$Elm$Type$tipe = $elm$project_metadata_utils$Elm$Type$cyclic$tipe();
$elm$project_metadata_utils$Elm$Type$cyclic$tipe = function () {
	return $elm$project_metadata_utils$Elm$Type$tipe;
};
var $elm$project_metadata_utils$Elm$Type$parse = function (source) {
	return A2($elm$parser$Parser$run, $elm$project_metadata_utils$Elm$Type$tipe, source);
};
var $elm$project_metadata_utils$Elm$Type$decoderHelp = function (string) {
	var _v0 = $elm$project_metadata_utils$Elm$Type$parse(string);
	if (_v0.$ === 1) {
		var error = _v0.a;
		return $elm$json$Json$Decode$fail('TODO');
	} else {
		var actualType = _v0.a;
		return $elm$json$Json$Decode$succeed(actualType);
	}
};
var $elm$project_metadata_utils$Elm$Type$decoder = A2($elm$json$Json$Decode$andThen, $elm$project_metadata_utils$Elm$Type$decoderHelp, $elm$json$Json$Decode$string);
var $elm$project_metadata_utils$Elm$Docs$aliasDecoder = A5(
	$elm$json$Json$Decode$map4,
	$elm$project_metadata_utils$Elm$Docs$Alias,
	A2($elm$json$Json$Decode$field, 'name', $elm$json$Json$Decode$string),
	A2($elm$json$Json$Decode$field, 'comment', $elm$json$Json$Decode$string),
	A2(
		$elm$json$Json$Decode$field,
		'args',
		$elm$json$Json$Decode$list($elm$json$Json$Decode$string)),
	A2($elm$json$Json$Decode$field, 'type', $elm$project_metadata_utils$Elm$Type$decoder));
var $elm$project_metadata_utils$Elm$Docs$Binop = F5(
	function (name, comment, tipe, associativity, precedence) {
		return {et: associativity, bq: comment, fe: name, ft: precedence, c9: tipe};
	});
var $elm$project_metadata_utils$Elm$Docs$Left = 0;
var $elm$project_metadata_utils$Elm$Docs$None = 1;
var $elm$project_metadata_utils$Elm$Docs$Right = 2;
var $elm$project_metadata_utils$Elm$Docs$toAssoc = function (str) {
	switch (str) {
		case 'left':
			return $elm$json$Json$Decode$succeed(0);
		case 'non':
			return $elm$json$Json$Decode$succeed(1);
		case 'right':
			return $elm$json$Json$Decode$succeed(2);
		default:
			return $elm$json$Json$Decode$fail('expecting one of the following values: left, non, right');
	}
};
var $elm$project_metadata_utils$Elm$Docs$assocDecoder = A2($elm$json$Json$Decode$andThen, $elm$project_metadata_utils$Elm$Docs$toAssoc, $elm$json$Json$Decode$string);
var $elm$json$Json$Decode$map5 = _Json_map5;
var $elm$project_metadata_utils$Elm$Docs$binopDecoder = A6(
	$elm$json$Json$Decode$map5,
	$elm$project_metadata_utils$Elm$Docs$Binop,
	A2($elm$json$Json$Decode$field, 'name', $elm$json$Json$Decode$string),
	A2($elm$json$Json$Decode$field, 'comment', $elm$json$Json$Decode$string),
	A2($elm$json$Json$Decode$field, 'type', $elm$project_metadata_utils$Elm$Type$decoder),
	A2($elm$json$Json$Decode$field, 'associativity', $elm$project_metadata_utils$Elm$Docs$assocDecoder),
	A2($elm$json$Json$Decode$field, 'precedence', $elm$json$Json$Decode$int));
var $elm$project_metadata_utils$Elm$Docs$Union = F4(
	function (name, comment, args, tags) {
		return {er: args, bq: comment, fe: name, fN: tags};
	});
var $elm$project_metadata_utils$Elm$Docs$tagDecoder = A3(
	$elm$json$Json$Decode$map2,
	F2(
		function (a, b) {
			return _Utils_Tuple2(a, b);
		}),
	A2($elm$json$Json$Decode$index, 0, $elm$json$Json$Decode$string),
	A2(
		$elm$json$Json$Decode$index,
		1,
		$elm$json$Json$Decode$list($elm$project_metadata_utils$Elm$Type$decoder)));
var $elm$project_metadata_utils$Elm$Docs$unionDecoder = A5(
	$elm$json$Json$Decode$map4,
	$elm$project_metadata_utils$Elm$Docs$Union,
	A2($elm$json$Json$Decode$field, 'name', $elm$json$Json$Decode$string),
	A2($elm$json$Json$Decode$field, 'comment', $elm$json$Json$Decode$string),
	A2(
		$elm$json$Json$Decode$field,
		'args',
		$elm$json$Json$Decode$list($elm$json$Json$Decode$string)),
	A2(
		$elm$json$Json$Decode$field,
		'cases',
		$elm$json$Json$Decode$list($elm$project_metadata_utils$Elm$Docs$tagDecoder)));
var $elm$project_metadata_utils$Elm$Docs$Value = F3(
	function (name, comment, tipe) {
		return {bq: comment, fe: name, c9: tipe};
	});
var $elm$project_metadata_utils$Elm$Docs$valueDecoder = A4(
	$elm$json$Json$Decode$map3,
	$elm$project_metadata_utils$Elm$Docs$Value,
	A2($elm$json$Json$Decode$field, 'name', $elm$json$Json$Decode$string),
	A2($elm$json$Json$Decode$field, 'comment', $elm$json$Json$Decode$string),
	A2($elm$json$Json$Decode$field, 'type', $elm$project_metadata_utils$Elm$Type$decoder));
var $elm$project_metadata_utils$Elm$Docs$decoder = A7(
	$elm$json$Json$Decode$map6,
	$elm$project_metadata_utils$Elm$Docs$Module,
	A2($elm$json$Json$Decode$field, 'name', $elm$json$Json$Decode$string),
	A2($elm$json$Json$Decode$field, 'comment', $elm$json$Json$Decode$string),
	A2(
		$elm$json$Json$Decode$field,
		'unions',
		$elm$json$Json$Decode$list($elm$project_metadata_utils$Elm$Docs$unionDecoder)),
	A2(
		$elm$json$Json$Decode$field,
		'aliases',
		$elm$json$Json$Decode$list($elm$project_metadata_utils$Elm$Docs$aliasDecoder)),
	A2(
		$elm$json$Json$Decode$field,
		'values',
		$elm$json$Json$Decode$list($elm$project_metadata_utils$Elm$Docs$valueDecoder)),
	A2(
		$elm$json$Json$Decode$field,
		'binops',
		$elm$json$Json$Decode$list($elm$project_metadata_utils$Elm$Docs$binopDecoder)));
var $author$project$Elm$Review$SuppressedErrors$fileEntryDecoder = A3(
	$elm$json$Json$Decode$map2,
	$elm$core$Tuple$pair,
	A2($elm$json$Json$Decode$field, 'filePath', $elm$json$Json$Decode$string),
	A2($elm$json$Json$Decode$field, 'count', $elm$json$Json$Decode$int));
var $author$project$Elm$Review$SuppressedErrors$suppressedErrorEntryDecoder = A3(
	$elm$json$Json$Decode$map2,
	F2(
		function (rule, suppressions) {
			return A2(
				$elm$core$List$map,
				function (_v0) {
					var filePath = _v0.a;
					var nbSuppressedErrors = _v0.b;
					return _Utils_Tuple2(
						_Utils_Tuple2(rule, filePath),
						nbSuppressedErrors);
				},
				suppressions);
		}),
	A2($elm$json$Json$Decode$field, 'rule', $elm$json$Json$Decode$string),
	A2(
		$elm$json$Json$Decode$field,
		'suppressions',
		$elm$json$Json$Decode$list($author$project$Elm$Review$SuppressedErrors$fileEntryDecoder)));
var $author$project$Elm$Review$SuppressedErrors$decoder = A2(
	$elm$json$Json$Decode$map,
	A2(
		$elm$core$Basics$composeR,
		$elm$core$List$concat,
		A2($elm$core$Basics$composeR, $elm$core$Dict$fromList, $elm$core$Basics$identity)),
	$elm$json$Json$Decode$list($author$project$Elm$Review$SuppressedErrors$suppressedErrorEntryDecoder));
var $elm$json$Json$Decode$dict = function (decoder) {
	return A2(
		$elm$json$Json$Decode$map,
		$elm$core$Dict$fromList,
		$elm$json$Json$Decode$keyValuePairs(decoder));
};
var $author$project$Elm$Review$Main$elmJsonDecoder = A4(
	$elm$json$Json$Decode$map3,
	F3(
		function (path, raw, project) {
			return {fr: path, e: project, bN: raw};
		}),
	A2($elm$json$Json$Decode$field, 'path', $elm$json$Json$Decode$string),
	A2($elm$json$Json$Decode$field, 'raw', $elm$json$Json$Decode$string),
	A2($elm$json$Json$Decode$field, 'project', $elm$project_metadata_utils$Elm$Project$decoder));
var $author$project$Elm$Review$SuppressedErrors$encodeFileSuppression = function (_v0) {
	var nbSuppressedErrors = _v0.a;
	var path = _v0.b;
	return $elm$json$Json$Encode$object(
		_List_fromArray(
			[
				_Utils_Tuple2(
				'count',
				$elm$json$Json$Encode$int(nbSuppressedErrors)),
				_Utils_Tuple2(
				'filePath',
				$elm$json$Json$Encode$string(path))
			]));
};
var $author$project$Elm$Review$SuppressedErrors$encodeFileSuppressions = function (countPerFile) {
	return A2($elm$json$Json$Encode$list, $author$project$Elm$Review$SuppressedErrors$encodeFileSuppression, countPerFile);
};
var $author$project$Elm$Review$SuppressedErrors$encodeRuleSuppression = F2(
	function (ruleName, fileSuppressions) {
		return $elm$json$Json$Encode$object(
			_List_fromArray(
				[
					_Utils_Tuple2(
					'rule',
					$elm$json$Json$Encode$string(ruleName)),
					_Utils_Tuple2('suppressions', fileSuppressions)
				]));
	});
var $author$project$Elm$Review$SuppressedErrors$encode = F2(
	function (ruleNames, _v0) {
		var suppressedErrors = _v0;
		var suppressedErrorsList = $elm$core$Dict$toList(suppressedErrors);
		var suppressionsPerRule = $elm$core$Dict$toList(
			A3(
				$elm$core$List$foldl,
				F2(
					function (_v2, acc) {
						var _v3 = _v2.a;
						var ruleName = _v3.a;
						var path = _v3.b;
						var nbSuppressedErrors = _v2.b;
						return A3(
							$elm$core$Dict$update,
							ruleName,
							A2(
								$elm$core$Basics$composeR,
								$elm$core$Maybe$withDefault(_List_Nil),
								A2(
									$elm$core$Basics$composeR,
									$elm$core$List$cons(
										_Utils_Tuple2(nbSuppressedErrors, path)),
									$elm$core$Maybe$Just)),
							acc);
					}),
				$elm$core$Dict$empty,
				suppressedErrorsList));
		var rulesWithSuppressions = $elm$core$Set$fromList(
			A2(
				$elm$core$List$map,
				A2($elm$core$Basics$composeR, $elm$core$Tuple$first, $elm$core$Tuple$first),
				suppressedErrorsList));
		var rulesWithoutSuppressions = A2(
			$elm$core$List$map,
			function (ruleName) {
				return _Utils_Tuple2(ruleName, _List_Nil);
			},
			A2(
				$elm$core$List$filter,
				function (ruleName) {
					return !A2($elm$core$Set$member, ruleName, rulesWithSuppressions);
				},
				ruleNames));
		return A2(
			$elm$json$Json$Encode$list,
			function (_v1) {
				var ruleName = _v1.a;
				var fileSuppressions = _v1.b;
				return A2(
					$author$project$Elm$Review$SuppressedErrors$encodeRuleSuppression,
					ruleName,
					$author$project$Elm$Review$SuppressedErrors$encodeFileSuppressions(fileSuppressions));
			},
			_Utils_ap(suppressionsPerRule, rulesWithoutSuppressions));
	});
var $author$project$Elm$Review$Main$fixConfirmationStatus = _Platform_outgoingPort('fixConfirmationStatus', $elm$json$Json$Encode$bool);
var $author$project$Elm$Review$Main$AwaitingError = function (a) {
	return {$: 1, a: a};
};
var $author$project$Elm$Review$Reporter$FilePath = function (a) {
	return {$: 0, a: a};
};
var $author$project$Elm$Review$Main$askConfirmationToFix = _Platform_outgoingPort('askConfirmationToFix', $elm$core$Basics$identity);
var $author$project$Elm$Review$Main$encodeChangedFile = function (changedFile) {
	var _v0 = changedFile.fE;
	var source = _v0;
	return $elm$json$Json$Encode$object(
		_List_fromArray(
			[
				_Utils_Tuple2(
				'path',
				$author$project$Elm$Review$Main$encodeFilePath(changedFile.fr)),
				_Utils_Tuple2(
				'source',
				$elm$json$Json$Encode$string(source))
			]));
};
var $jfmengels$elm_review$Review$Rule$errorFixes = function (_v0) {
	var err = _v0;
	return err.cQ;
};
var $jfmengels$elm_review$Review$Rule$errorTarget = function (_v0) {
	var err = _v0;
	return err.ee;
};
var $jfmengels$elm_review$Review$Fix$Errored = function (a) {
	return {$: 1, a: a};
};
var $jfmengels$elm_review$Review$Fix$Unchanged = {$: 0};
var $elm$core$Result$toMaybe = function (result) {
	if (!result.$) {
		var v = result.a;
		return $elm$core$Maybe$Just(v);
	} else {
		return $elm$core$Maybe$Nothing;
	}
};
var $jfmengels$elm_review$Review$Fix$HasCollisionsInFixRanges = {$: 2};
var $jfmengels$elm_review$Review$Fix$SourceCodeIsNotValid = function (a) {
	return {$: 1, a: a};
};
var $jfmengels$elm_review$Review$Fix$Successful = function (a) {
	return {$: 0, a: a};
};
var $jfmengels$elm_review$Review$Fix$tryToApplyFix = F3(
	function (fixes, sourceCode, isValidSourceCode) {
		if ($jfmengels$elm_review$Review$Fix$Internal$containRangeCollisions(fixes)) {
			return $jfmengels$elm_review$Review$Fix$Errored($jfmengels$elm_review$Review$Fix$HasCollisionsInFixRanges);
		} else {
			var resultAfterFix = A2(
				$elm$core$String$join,
				'\n',
				A3(
					$elm$core$List$foldl,
					$jfmengels$elm_review$Review$Fix$Internal$applyFix,
					$elm$core$String$lines(sourceCode),
					A2(
						$elm$core$List$sortBy,
						A2($elm$core$Basics$composeR, $jfmengels$elm_review$Review$Fix$Internal$rangePosition, $elm$core$Basics$negate),
						fixes)));
			return _Utils_eq(sourceCode, resultAfterFix) ? $jfmengels$elm_review$Review$Fix$Errored($jfmengels$elm_review$Review$Fix$Unchanged) : (isValidSourceCode(resultAfterFix) ? $jfmengels$elm_review$Review$Fix$Successful(resultAfterFix) : $jfmengels$elm_review$Review$Fix$Errored(
				$jfmengels$elm_review$Review$Fix$SourceCodeIsNotValid(resultAfterFix)));
		}
	});
var $jfmengels$elm_review$Review$Fix$fix = F3(
	function (target, fixes, sourceCode) {
		switch (target) {
			case 0:
				return A3(
					$jfmengels$elm_review$Review$Fix$tryToApplyFix,
					fixes,
					sourceCode,
					function (resultAfterFix) {
						return !_Utils_eq(
							$elm$core$Result$toMaybe(
								$stil4m$elm_syntax$Elm$Parser$parse(resultAfterFix)),
							$elm$core$Maybe$Nothing);
					});
			case 2:
				return A3(
					$jfmengels$elm_review$Review$Fix$tryToApplyFix,
					fixes,
					sourceCode,
					$elm$core$Basics$always(true));
			case 1:
				return A3(
					$jfmengels$elm_review$Review$Fix$tryToApplyFix,
					fixes,
					sourceCode,
					function (resultAfterFix) {
						return !_Utils_eq(
							$elm$core$Result$toMaybe(
								A2($elm$json$Json$Decode$decodeString, $elm$project_metadata_utils$Elm$Project$decoder, resultAfterFix)),
							$elm$core$Maybe$Nothing);
					});
			case 3:
				return $jfmengels$elm_review$Review$Fix$Errored($jfmengels$elm_review$Review$Fix$Unchanged);
			default:
				return $jfmengels$elm_review$Review$Fix$Errored($jfmengels$elm_review$Review$Fix$Unchanged);
		}
	});
var $author$project$Elm$Review$Reporter$hashRange = function (range) {
	return A2(
		$elm$core$String$join,
		'-',
		A2(
			$elm$core$List$map,
			$elm$core$String$fromInt,
			_List_fromArray(
				[range.bQ.d0, range.bQ.eF, range.bu.d0, range.bu.eF])));
};
var $author$project$Elm$Review$Reporter$hashFix = function (_v0) {
	var range = _v0.c1;
	var replacement = _v0.fz;
	return $author$project$Elm$Review$Reporter$hashRange(range) + ('-' + replacement);
};
var $jfmengels$elm_review$Review$Fix$toRecord = function (fix_) {
	switch (fix_.$) {
		case 1:
			var range = fix_.a;
			var replacement = fix_.b;
			return {c1: range, fz: replacement};
		case 0:
			var range = fix_.a;
			return {c1: range, fz: ''};
		default:
			var position = fix_.a;
			var replacement = fix_.b;
			return {
				c1: {bu: position, bQ: position},
				fz: replacement
			};
	}
};
var $author$project$Elm$Review$Reporter$hashFixes = function (fixes) {
	return A2(
		$elm$core$String$join,
		'$$$$$$elm-review$$$$$$',
		A2(
			$elm$core$List$map,
			A2($elm$core$Basics$composeR, $jfmengels$elm_review$Review$Fix$toRecord, $author$project$Elm$Review$Reporter$hashFix),
			fixes));
};
var $jfmengels$elm_review$Review$Rule$errorDetails = function (_v0) {
	var err = _v0;
	return err.eL;
};
var $jfmengels$elm_review$Review$Rule$errorMessage = function (_v0) {
	var err = _v0;
	return err.e8;
};
var $jfmengels$elm_review$Review$Rule$errorRange = function (_v0) {
	var err = _v0;
	return err.c1;
};
var $author$project$Elm$Review$RefusedErrorFixes$errorKey = function (error) {
	var range = $jfmengels$elm_review$Review$Rule$errorRange(error);
	return A2(
		$elm$core$String$join,
		'###',
		_List_fromArray(
			[
				$jfmengels$elm_review$Review$Rule$errorRuleName(error),
				$jfmengels$elm_review$Review$Rule$errorFilePath(error),
				$jfmengels$elm_review$Review$Rule$errorMessage(error),
				A2(
				$elm$core$String$join,
				'\n',
				$jfmengels$elm_review$Review$Rule$errorDetails(error)),
				A2(
				$elm$core$String$join,
				'-',
				A2(
					$elm$core$List$map,
					$elm$core$String$fromInt,
					_List_fromArray(
						[range.bQ.d0, range.bQ.eF, range.bu.d0, range.bu.eF])))
			]));
};
var $author$project$Elm$Review$RefusedErrorFixes$member = F2(
	function (error, _v0) {
		var refusedErrorFixes = _v0;
		return A2(
			$elm$core$Set$member,
			$author$project$Elm$Review$RefusedErrorFixes$errorKey(error),
			refusedErrorFixes);
	});
var $author$project$Elm$Review$Main$findFix = F4(
	function (failedFixesDict, refusedErrorFixes, files, errors) {
		findFix:
		while (true) {
			if (!errors.b) {
				return _Utils_Tuple2(failedFixesDict, $elm$core$Maybe$Nothing);
			} else {
				var error = errors.a;
				var restOfErrors = errors.b;
				var _v1 = $jfmengels$elm_review$Review$Rule$errorFixes(error);
				if (!_v1.$) {
					var fixes = _v1.a;
					if (A2($author$project$Elm$Review$RefusedErrorFixes$member, error, refusedErrorFixes)) {
						var $temp$failedFixesDict = failedFixesDict,
							$temp$refusedErrorFixes = refusedErrorFixes,
							$temp$files = files,
							$temp$errors = restOfErrors;
						failedFixesDict = $temp$failedFixesDict;
						refusedErrorFixes = $temp$refusedErrorFixes;
						files = $temp$files;
						errors = $temp$errors;
						continue findFix;
					} else {
						var _v2 = A2(
							$elm$core$Dict$get,
							$jfmengels$elm_review$Review$Rule$errorFilePath(error),
							files);
						if (_v2.$ === 1) {
							var $temp$failedFixesDict = failedFixesDict,
								$temp$refusedErrorFixes = refusedErrorFixes,
								$temp$files = files,
								$temp$errors = restOfErrors;
							failedFixesDict = $temp$failedFixesDict;
							refusedErrorFixes = $temp$refusedErrorFixes;
							files = $temp$files;
							errors = $temp$errors;
							continue findFix;
						} else {
							var file = _v2.a;
							var _v3 = A3(
								$jfmengels$elm_review$Review$Fix$fix,
								$jfmengels$elm_review$Review$Rule$errorTarget(error),
								fixes,
								file.fE);
							if (_v3.$ === 1) {
								var problem = _v3.a;
								var $temp$failedFixesDict = A3(
									$elm$core$Dict$insert,
									$author$project$Elm$Review$Reporter$hashFixes(fixes),
									problem,
									failedFixesDict),
									$temp$refusedErrorFixes = refusedErrorFixes,
									$temp$files = files,
									$temp$errors = restOfErrors;
								failedFixesDict = $temp$failedFixesDict;
								refusedErrorFixes = $temp$refusedErrorFixes;
								files = $temp$files;
								errors = $temp$errors;
								continue findFix;
							} else {
								var fixedSource = _v3.a;
								return _Utils_Tuple2(
									failedFixesDict,
									$elm$core$Maybe$Just(
										{
											cM: error,
											cP: {fr: file.fr, fE: file.fE},
											aK: fixedSource
										}));
							}
						}
					}
				} else {
					var $temp$failedFixesDict = failedFixesDict,
						$temp$refusedErrorFixes = refusedErrorFixes,
						$temp$files = files,
						$temp$errors = restOfErrors;
					failedFixesDict = $temp$failedFixesDict;
					refusedErrorFixes = $temp$refusedErrorFixes;
					files = $temp$files;
					errors = $temp$errors;
					continue findFix;
				}
			}
		}
	});
var $author$project$Elm$Review$Main$fixableFilesInProject = function (project) {
	var readme = A2(
		$elm$core$Maybe$withDefault,
		{fr: '$$Not a valid module name$$', fE: ''},
		A2(
			$elm$core$Maybe$map,
			function (r) {
				return {fr: r.fr, fE: r.br};
			},
			$jfmengels$elm_review$Review$Project$readme(project)));
	var moduleFiles = A2(
		$elm$core$List$map,
		function (module_) {
			return _Utils_Tuple2(
				module_.fr,
				{fr: module_.fr, fE: module_.fE});
		},
		$jfmengels$elm_review$Review$Project$modules(project));
	var elmJson = A2(
		$elm$core$Maybe$withDefault,
		{fr: '$$Not a valid module name$$', fE: ''},
		A2(
			$elm$core$Maybe$map,
			function (r) {
				return {fr: r.fr, fE: r.bN};
			},
			$jfmengels$elm_review$Review$Project$elmJson(project)));
	return $elm$core$Dict$fromList(
		A2(
			$elm$core$List$cons,
			_Utils_Tuple2(elmJson.fr, elmJson),
			A2(
				$elm$core$List$cons,
				_Utils_Tuple2(readme.fr, readme),
				moduleFiles)));
};
var $author$project$Elm$Review$Reporter$Fixing = 1;
var $author$project$Elm$Review$Vendor$Diff$Added = function (a) {
	return {$: 0, a: a};
};
var $author$project$Elm$Review$Vendor$Diff$NoChange = function (a) {
	return {$: 2, a: a};
};
var $author$project$Elm$Review$Vendor$Diff$Removed = function (a) {
	return {$: 1, a: a};
};
var $author$project$Elm$Review$Reporter$findIndexInternal = F3(
	function (predicate, index, list) {
		findIndexInternal:
		while (true) {
			if (!list.b) {
				return $elm$core$Maybe$Nothing;
			} else {
				var item = list.a;
				var rest = list.b;
				if (predicate(item)) {
					return $elm$core$Maybe$Just(index);
				} else {
					var $temp$predicate = predicate,
						$temp$index = index + 1,
						$temp$list = rest;
					predicate = $temp$predicate;
					index = $temp$index;
					list = $temp$list;
					continue findIndexInternal;
				}
			}
		}
	});
var $author$project$Elm$Review$Reporter$findIndex = F2(
	function (predicate, list) {
		return A3($author$project$Elm$Review$Reporter$findIndexInternal, predicate, 0, list);
	});
var $author$project$Elm$Review$Reporter$isNoChange = function (change) {
	switch (change.$) {
		case 2:
			return true;
		case 1:
			return false;
		default:
			return false;
	}
};
var $author$project$Elm$Review$Reporter$dropNonInterestingUnchangedLines = function (changes) {
	var _v0 = A2(
		$author$project$Elm$Review$Reporter$findIndex,
		A2($elm$core$Basics$composeL, $elm$core$Basics$not, $author$project$Elm$Review$Reporter$isNoChange),
		changes);
	if (_v0.$ === 1) {
		return changes;
	} else {
		var index = _v0.a;
		return A2($elm$core$List$drop, index - 1, changes);
	}
};
var $author$project$Elm$Review$Reporter$removeUnchangedLines = F2(
	function (maxLineNumberLength, list) {
		return ($elm$core$List$length(list) >= 4) ? _Utils_ap(
			A2($elm$core$List$take, 1, list),
			A2(
				$elm$core$List$cons,
				$author$project$Elm$Review$Vendor$Diff$NoChange(
					$author$project$Elm$Review$Text$from(
						A2($elm$core$String$repeat, maxLineNumberLength + 1, '·'))),
				A2(
					$elm$core$List$take,
					1,
					$elm$core$List$reverse(list)))) : list;
	});
var $author$project$Elm$Review$Reporter$addLineNumbers = function (changes) {
	var maxLineNumberLength = $author$project$Elm$Review$Reporter$lengthOfLineNumber(
		A3(
			$elm$core$List$foldl,
			F2(
				function (change, _v3) {
					var currentMax = _v3.a;
					var lineNumber = _v3.b;
					switch (change.$) {
						case 2:
							return _Utils_Tuple2(currentMax, lineNumber + 1);
						case 1:
							return _Utils_Tuple2(lineNumber + 1, lineNumber + 1);
						default:
							return _Utils_Tuple2(lineNumber, lineNumber);
					}
				}),
			_Utils_Tuple2(0, 0),
			changes).a);
	var _v0 = A3(
		$elm$core$List$foldl,
		F2(
			function (change, _v1) {
				var lineNumber = _v1.a;
				var previousUnchangedLines = _v1.b;
				var accDiffLines = _v1.c;
				switch (change.$) {
					case 2:
						var str = change.a;
						return _Utils_Tuple3(
							lineNumber + 1,
							A2(
								$elm$core$List$cons,
								$author$project$Elm$Review$Vendor$Diff$NoChange(
									$author$project$Elm$Review$Text$from(
										_Utils_ap(
											A2($author$project$Elm$Review$Reporter$lineNumberPrefix, maxLineNumberLength, lineNumber),
											str))),
								previousUnchangedLines),
							accDiffLines);
					case 1:
						var str = change.a;
						var line = $author$project$Elm$Review$Text$inRed(
							$author$project$Elm$Review$Text$from(
								_Utils_ap(
									A2($author$project$Elm$Review$Reporter$lineNumberPrefix, maxLineNumberLength, lineNumber),
									str)));
						return _Utils_Tuple3(
							lineNumber + 1,
							_List_Nil,
							A2(
								$elm$core$List$cons,
								$author$project$Elm$Review$Vendor$Diff$Removed(line),
								_Utils_ap(
									A2($author$project$Elm$Review$Reporter$removeUnchangedLines, maxLineNumberLength, previousUnchangedLines),
									accDiffLines)));
					default:
						var str = change.a;
						var line = $author$project$Elm$Review$Text$inGreen(
							$author$project$Elm$Review$Text$from(
								_Utils_ap(
									A2($author$project$Elm$Review$Reporter$lineNumberPrefix, maxLineNumberLength, lineNumber),
									str)));
						return _Utils_Tuple3(
							lineNumber,
							_List_Nil,
							A2(
								$elm$core$List$cons,
								$author$project$Elm$Review$Vendor$Diff$Added(line),
								_Utils_ap(
									A2($author$project$Elm$Review$Reporter$removeUnchangedLines, maxLineNumberLength, previousUnchangedLines),
									accDiffLines)));
				}
			}),
		_Utils_Tuple3(0, _List_Nil, _List_Nil),
		changes);
	var unchangedLines = _v0.b;
	var diffLines = _v0.c;
	return $author$project$Elm$Review$Reporter$dropNonInterestingUnchangedLines(
		$elm$core$List$reverse(
			$author$project$Elm$Review$Reporter$dropNonInterestingUnchangedLines(
				_Utils_ap(unchangedLines, diffLines))));
};
var $author$project$Elm$Review$Vendor$Diff$CannotGetA = function (a) {
	return {$: 0, a: a};
};
var $author$project$Elm$Review$Vendor$Diff$CannotGetB = function (a) {
	return {$: 1, a: a};
};
var $author$project$Elm$Review$Vendor$Diff$UnexpectedPath = F2(
	function (a, b) {
		return {$: 2, a: a, b: b};
	});
var $author$project$Elm$Review$Vendor$Diff$makeChangesHelp = F5(
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
						if (!_v4.$) {
							var a = _v4.a;
							return $elm$core$Result$Ok(
								$author$project$Elm$Review$Vendor$Diff$NoChange(a));
						} else {
							return $elm$core$Result$Err(
								$author$project$Elm$Review$Vendor$Diff$CannotGetA(x));
						}
					} else {
						if (_Utils_eq(x, prevX)) {
							var _v5 = getB(y);
							if (!_v5.$) {
								var b = _v5.a;
								return $elm$core$Result$Ok(
									$author$project$Elm$Review$Vendor$Diff$Added(b));
							} else {
								return $elm$core$Result$Err(
									$author$project$Elm$Review$Vendor$Diff$CannotGetB(y));
							}
						} else {
							if (_Utils_eq(y, prevY)) {
								var _v6 = getA(x);
								if (!_v6.$) {
									var a = _v6.a;
									return $elm$core$Result$Ok(
										$author$project$Elm$Review$Vendor$Diff$Removed(a));
								} else {
									return $elm$core$Result$Err(
										$author$project$Elm$Review$Vendor$Diff$CannotGetA(x));
								}
							} else {
								return $elm$core$Result$Err(
									A2(
										$author$project$Elm$Review$Vendor$Diff$UnexpectedPath,
										_Utils_Tuple2(x, y),
										path));
							}
						}
					}
				}();
				if (!change.$) {
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
				} else {
					var e = change.a;
					return $elm$core$Result$Err(e);
				}
			}
		}
	});
var $author$project$Elm$Review$Vendor$Diff$makeChanges = F3(
	function (getA, getB, path) {
		if (!path.b) {
			return $elm$core$Result$Ok(_List_Nil);
		} else {
			var latest = path.a;
			var tail = path.b;
			return A5($author$project$Elm$Review$Vendor$Diff$makeChangesHelp, _List_Nil, getA, getB, latest, tail);
		}
	});
var $author$project$Elm$Review$Vendor$Diff$Continue = function (a) {
	return {$: 0, a: a};
};
var $author$project$Elm$Review$Vendor$Diff$Found = function (a) {
	return {$: 1, a: a};
};
var $author$project$Elm$Review$Vendor$Diff$step = F4(
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
		return goal ? $author$project$Elm$Review$Vendor$Diff$Found(newPath) : $author$project$Elm$Review$Vendor$Diff$Continue(
			A3($elm$core$Array$set, k + offset, newPath, v));
	});
var $author$project$Elm$Review$Vendor$Diff$onpLoopK = F4(
	function (snake_, offset, ks, v) {
		onpLoopK:
		while (true) {
			if (!ks.b) {
				return $author$project$Elm$Review$Vendor$Diff$Continue(v);
			} else {
				var k = ks.a;
				var ks_ = ks.b;
				var _v1 = A4($author$project$Elm$Review$Vendor$Diff$step, snake_, offset, k, v);
				if (_v1.$ === 1) {
					var path = _v1.a;
					return $author$project$Elm$Review$Vendor$Diff$Found(path);
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
var $author$project$Elm$Review$Vendor$Diff$onpLoopP = F5(
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
			var _v0 = A4($author$project$Elm$Review$Vendor$Diff$onpLoopK, snake_, offset, ks, v);
			if (_v0.$ === 1) {
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
var $author$project$Elm$Review$Vendor$Diff$snake = F5(
	function (getA, getB, nextX, nextY, path) {
		snake:
		while (true) {
			var _v0 = _Utils_Tuple2(
				getA(nextX),
				getB(nextY));
			_v0$2:
			while (true) {
				if (!_v0.a.$) {
					if (!_v0.b.$) {
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
					if (_v0.b.$ === 1) {
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
var $author$project$Elm$Review$Vendor$Diff$onp = F4(
	function (getA, getB, m, n) {
		var v = A2(
			$elm$core$Array$initialize,
			(m + n) + 1,
			$elm$core$Basics$always(_List_Nil));
		var delta = n - m;
		return A5(
			$author$project$Elm$Review$Vendor$Diff$onpLoopP,
			A2($author$project$Elm$Review$Vendor$Diff$snake, getA, getB),
			delta,
			m,
			0,
			v);
	});
var $author$project$Elm$Review$Vendor$Diff$testDiff = F2(
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
		var path = A4($author$project$Elm$Review$Vendor$Diff$onp, getA, getB, m, n);
		return A3($author$project$Elm$Review$Vendor$Diff$makeChanges, getA, getB, path);
	});
var $author$project$Elm$Review$Vendor$Diff$diff = F2(
	function (a, b) {
		var _v0 = A2($author$project$Elm$Review$Vendor$Diff$testDiff, a, b);
		if (!_v0.$) {
			var changes = _v0.a;
			return changes;
		} else {
			return _List_Nil;
		}
	});
var $author$project$Elm$Review$Vendor$Diff$diffLines = F2(
	function (a, b) {
		return A2(
			$author$project$Elm$Review$Vendor$Diff$diff,
			$elm$core$String$lines(a),
			$elm$core$String$lines(b));
	});
var $author$project$Elm$Review$Reporter$extractValueFromChange = function (change) {
	switch (change.$) {
		case 2:
			var value = change.a;
			return value;
		case 1:
			var value = change.a;
			return value;
		default:
			var value = change.a;
			return value;
	}
};
var $author$project$Elm$Review$Reporter$diff = F2(
	function (_v0, _v1) {
		var before = _v0;
		var after = _v1;
		return A2(
			$elm$core$List$intersperse,
			$author$project$Elm$Review$Text$from('\n'),
			A2(
				$elm$core$List$map,
				$author$project$Elm$Review$Reporter$extractValueFromChange,
				$author$project$Elm$Review$Reporter$addLineNumbers(
					A2($author$project$Elm$Review$Vendor$Diff$diffLines, before, after))));
	});
var $author$project$Elm$Review$Reporter$formatFixProposal = F4(
	function (detailsMode, file, error, fixedSource) {
		return A2(
			$elm$core$List$map,
			$author$project$Elm$Review$Text$toRecord,
			$elm$core$List$concat(
				_List_fromArray(
					[
						A2(
						$author$project$Elm$Review$Text$join,
						'\n\n',
						_List_fromArray(
							[
								A4(
								$author$project$Elm$Review$Reporter$formatReportForFileWithExtract,
								$elm$core$Dict$empty,
								detailsMode,
								1,
								{
									aT: _List_fromArray(
										[error]),
									fr: file.fr,
									fE: file.fE
								}),
								_List_fromArray(
								[
									$author$project$Elm$Review$Text$inBlue(
									$author$project$Elm$Review$Text$from('I think I can fix this. Here is my proposal:'))
								]),
								A2($author$project$Elm$Review$Reporter$diff, file.fE, fixedSource)
							])),
						_List_fromArray(
						[
							$author$project$Elm$Review$Text$from('\n')
						])
					])));
	});
var $author$project$Elm$Review$Main$linkToRule = F2(
	function (links, error) {
		return A2(
			$elm$core$Dict$get,
			$jfmengels$elm_review$Review$Rule$errorRuleName(error),
			links);
	});
var $author$project$Elm$Review$SuppressedErrors$member = F2(
	function (error, _v0) {
		var suppressedErrors = _v0;
		return A2(
			$elm$core$Dict$member,
			_Utils_Tuple2(
				$jfmengels$elm_review$Review$Rule$errorRuleName(error),
				$jfmengels$elm_review$Review$Rule$errorFilePath(error)),
			suppressedErrors);
	});
var $author$project$Elm$Review$Main$fromReviewError = F3(
	function (suppressedErrors, links, error) {
		return {
			eL: $jfmengels$elm_review$Review$Rule$errorDetails(error),
			dA: A2(
				$elm$core$Maybe$map,
				$author$project$Elm$Review$Reporter$hashFixes,
				$jfmengels$elm_review$Review$Rule$errorFixes(error)),
			e8: $jfmengels$elm_review$Review$Rule$errorMessage(error),
			c1: $jfmengels$elm_review$Review$Rule$errorRange(error),
			d1: A2($author$project$Elm$Review$Main$linkToRule, links, error),
			c3: $jfmengels$elm_review$Review$Rule$errorRuleName(error),
			eb: A2($author$project$Elm$Review$SuppressedErrors$member, error, suppressedErrors)
		};
	});
var $author$project$Elm$Review$Main$encodeFix = function (_v0) {
	var range = _v0.c1;
	var replacement = _v0.fz;
	return $elm$json$Json$Encode$object(
		_List_fromArray(
			[
				_Utils_Tuple2(
				'range',
				$author$project$Elm$Review$Main$encodeRange(range)),
				_Utils_Tuple2(
				'string',
				$elm$json$Json$Encode$string(replacement))
			]));
};
var $author$project$Elm$Review$Main$encodeFixes = function (fixes) {
	return A2(
		$elm$json$Json$Encode$list,
		A2($elm$core$Basics$composeR, $jfmengels$elm_review$Review$Fix$toRecord, $author$project$Elm$Review$Main$encodeFix),
		fixes);
};
var $author$project$Elm$Review$Main$encodeError = F5(
	function (_v0, links, detailsMode, source, error) {
		var suppressedErrors = _v0.C;
		var reviewErrorsAfterSuppression = _v0.ab;
		var originallySuppressed = A2($author$project$Elm$Review$SuppressedErrors$member, error, suppressedErrors);
		return $elm$json$Json$Encode$object(
			A2(
				$elm$core$List$filterMap,
				$elm$core$Basics$identity,
				_List_fromArray(
					[
						$elm$core$Maybe$Just(
						_Utils_Tuple2(
							'rule',
							$elm$json$Json$Encode$string(
								$jfmengels$elm_review$Review$Rule$errorRuleName(error)))),
						$elm$core$Maybe$Just(
						_Utils_Tuple2(
							'message',
							$elm$json$Json$Encode$string(
								$jfmengels$elm_review$Review$Rule$errorMessage(error)))),
						A2(
						$elm$core$Maybe$map,
						A2(
							$elm$core$Basics$composeR,
							$elm$json$Json$Encode$string,
							$elm$core$Tuple$pair('ruleLink')),
						A2($author$project$Elm$Review$Main$linkToRule, links, error)),
						$elm$core$Maybe$Just(
						_Utils_Tuple2(
							'details',
							A2(
								$elm$json$Json$Encode$list,
								$elm$json$Json$Encode$string,
								$jfmengels$elm_review$Review$Rule$errorDetails(error)))),
						$elm$core$Maybe$Just(
						_Utils_Tuple2(
							'region',
							$author$project$Elm$Review$Main$encodeRange(
								$jfmengels$elm_review$Review$Rule$errorRange(error)))),
						A2(
						$elm$core$Maybe$map,
						A2(
							$elm$core$Basics$composeR,
							$author$project$Elm$Review$Main$encodeFixes,
							$elm$core$Tuple$pair('fix')),
						$jfmengels$elm_review$Review$Rule$errorFixes(error)),
						$elm$core$Maybe$Just(
						_Utils_Tuple2(
							'formatted',
							$author$project$Elm$Review$Main$encodeReport(
								A4(
									$author$project$Elm$Review$Reporter$formatIndividualError,
									$elm$core$Dict$empty,
									detailsMode,
									source,
									A3($author$project$Elm$Review$Main$fromReviewError, suppressedErrors, links, error))))),
						$elm$core$Maybe$Just(
						_Utils_Tuple2(
							'suppressed',
							$elm$json$Json$Encode$bool(
								originallySuppressed && (!A2($elm$core$List$member, error, reviewErrorsAfterSuppression))))),
						$elm$core$Maybe$Just(
						_Utils_Tuple2(
							'originallySuppressed',
							$elm$json$Json$Encode$bool(originallySuppressed)))
					])));
	});
var $author$project$Elm$Review$Main$encodeErrorByFile = F4(
	function (suppressedErrorsData, links, detailsMode, file) {
		return $elm$json$Json$Encode$object(
			_List_fromArray(
				[
					_Utils_Tuple2(
					'path',
					$author$project$Elm$Review$Main$encodeFilePath(file.fr)),
					_Utils_Tuple2(
					'errors',
					A2(
						$elm$json$Json$Encode$list,
						A4($author$project$Elm$Review$Main$encodeError, suppressedErrorsData, links, detailsMode, file.fE),
						file.aT))
				]));
	});
var $author$project$Elm$Review$SuppressedErrors$fromReviewErrors = function (reviewErrors) {
	return A3(
		$elm$core$List$foldl,
		F2(
			function (error, acc) {
				return A3(
					$elm$core$Dict$update,
					_Utils_Tuple2(
						$jfmengels$elm_review$Review$Rule$errorRuleName(error),
						$jfmengels$elm_review$Review$Rule$errorFilePath(error)),
					A2(
						$elm$core$Basics$composeR,
						$elm$core$Maybe$withDefault(0),
						A2(
							$elm$core$Basics$composeR,
							$elm$core$Basics$add(1),
							$elm$core$Maybe$Just)),
					acc);
			}),
		$elm$core$Dict$empty,
		reviewErrors);
};
var $author$project$Elm$Review$Reporter$Global = {$: 1};
var $jfmengels$elm_review$Review$Project$modulesThatFailedToParse = function (_v0) {
	var project = _v0;
	return project.bI;
};
var $author$project$Elm$Review$Main$groupErrorsByFile = F2(
	function (project, errors) {
		var files = $elm$core$List$concat(
			_List_fromArray(
				[
					A2(
					$elm$core$List$map,
					function (file) {
						return {fr: file.fr, fE: file.fE};
					},
					$jfmengels$elm_review$Review$Project$modules(project)),
					_List_fromArray(
					[
						{fr: 'GLOBAL ERROR', fE: ''},
						{fr: 'CONFIGURATION ERROR', fE: ''}
					]),
					function () {
					var _v0 = $jfmengels$elm_review$Review$Project$elmJson(project);
					if (!_v0.$) {
						var path = _v0.a.fr;
						var raw = _v0.a.bN;
						return _List_fromArray(
							[
								{fr: path, fE: raw}
							]);
					} else {
						return _List_Nil;
					}
				}(),
					function () {
					var _v1 = $jfmengels$elm_review$Review$Project$readme(project);
					if (!_v1.$) {
						var path = _v1.a.fr;
						var content = _v1.a.br;
						return _List_fromArray(
							[
								{fr: path, fE: content}
							]);
					} else {
						return _List_Nil;
					}
				}(),
					$jfmengels$elm_review$Review$Project$modulesThatFailedToParse(project)
				]));
		return A2(
			$elm$core$List$filter,
			function (file) {
				return !$elm$core$List$isEmpty(file.aT);
			},
			A2(
				$elm$core$List$map,
				function (file) {
					return {
						aT: A2(
							$elm$core$List$filter,
							function (error) {
								return _Utils_eq(
									file.fr,
									$jfmengels$elm_review$Review$Rule$errorFilePath(error));
							},
							errors),
						fr: (file.fr === 'GLOBAL ERROR') ? $author$project$Elm$Review$Reporter$Global : ((file.fr === 'CONFIGURATION ERROR') ? $author$project$Elm$Review$Reporter$ConfigurationError : $author$project$Elm$Review$Reporter$FilePath(file.fr)),
						fE: file.fE
					};
				},
				files));
	});
var $author$project$Elm$Review$Main$reviewReport = _Platform_outgoingPort('reviewReport', $elm$core$Basics$identity);
var $author$project$Elm$Review$Main$makeReport = F2(
	function (failedFixesDict, model) {
		var _v0 = function () {
			if ($elm$core$List$isEmpty(model.ab) && model.bT) {
				var suppressedErrors = $author$project$Elm$Review$SuppressedErrors$fromReviewErrors(model.bi);
				return _Utils_Tuple2(
					_Utils_update(
						model,
						{aE: model.by, C: suppressedErrors}),
					A2(
						$author$project$Elm$Review$SuppressedErrors$encode,
						A2($elm$core$List$map, $jfmengels$elm_review$Review$Rule$ruleName, model.aE),
						suppressedErrors));
			} else {
				return _Utils_Tuple2(
					_Utils_update(
						model,
						{aE: model.by}),
					$elm$json$Json$Encode$null);
			}
		}();
		var newModel = _v0.a;
		var suppressedErrorsForJson = _v0.b;
		return _Utils_Tuple2(
			newModel,
			$author$project$Elm$Review$Main$reviewReport(
				$elm$json$Json$Encode$object(
					_List_fromArray(
						[
							_Utils_Tuple2(
							'success',
							$elm$json$Json$Encode$bool(
								$elm$core$List$isEmpty(model.ab))),
							_Utils_Tuple2(
							'errors',
							function () {
								var _v1 = newModel.a1;
								if (!_v1) {
									var errorsByFile = A2($author$project$Elm$Review$Main$groupErrorsByFile, model.e, model.ab);
									var filesWithError = A2(
										$elm$core$List$map,
										function (file) {
											return {
												aT: A2(
													$elm$core$List$map,
													A2($author$project$Elm$Review$Main$fromReviewError, newModel.C, newModel.a_),
													file.aT),
												fr: file.fr,
												fE: file.fE
											};
										},
										errorsByFile);
									return $author$project$Elm$Review$Main$encodeReport(
										A2(
											$author$project$Elm$Review$Reporter$formatReport,
											{U: newModel.U, bv: newModel.bv, dz: failedFixesDict, bK: newModel.bK, C: newModel.C, an: newModel.an},
											filesWithError));
								} else {
									var errorsByFile = A2($author$project$Elm$Review$Main$groupErrorsByFile, model.e, model.bi);
									return A2(
										$elm$json$Json$Encode$list,
										A3(
											$author$project$Elm$Review$Main$encodeErrorByFile,
											{ab: model.ab, C: newModel.C},
											newModel.a_,
											newModel.U),
										errorsByFile);
								}
							}()),
							_Utils_Tuple2(
							'extracts',
							A3($elm$json$Json$Encode$dict, $elm$core$Basics$identity, $elm$core$Basics$identity, newModel.b1)),
							_Utils_Tuple2('suppressedErrors', suppressedErrorsForJson)
						]))));
	});
var $author$project$Elm$Review$Main$fixOneByOne = function (model) {
	var _v0 = A4(
		$author$project$Elm$Review$Main$findFix,
		$elm$core$Dict$empty,
		model.bh,
		$author$project$Elm$Review$Main$fixableFilesInProject(model.e),
		model.ab).b;
	if (!_v0.$) {
		var file = _v0.a.cP;
		var error = _v0.a.cM;
		var fixedSource = _v0.a.aK;
		return _Utils_Tuple2(
			_Utils_update(
				model,
				{
					ah: $author$project$Elm$Review$Main$AwaitingError(error)
				}),
			$author$project$Elm$Review$Main$askConfirmationToFix(
				$elm$json$Json$Encode$object(
					_List_fromArray(
						[
							_Utils_Tuple2(
							'confirmationMessage',
							$author$project$Elm$Review$Main$encodeReport(
								A4(
									$author$project$Elm$Review$Reporter$formatFixProposal,
									model.U,
									{
										fr: $author$project$Elm$Review$Reporter$FilePath(file.fr),
										fE: file.fE
									},
									A3($author$project$Elm$Review$Main$fromReviewError, model.C, model.a_, error),
									fixedSource))),
							_Utils_Tuple2(
							'changedFiles',
							A2(
								$elm$json$Json$Encode$list,
								$author$project$Elm$Review$Main$encodeChangedFile,
								_List_fromArray(
									[
										{
										fr: $author$project$Elm$Review$Reporter$FilePath(file.fr),
										fE: fixedSource
									}
									]))),
							_Utils_Tuple2(
							'count',
							$elm$json$Json$Encode$int(1))
						]))));
	} else {
		return A2($author$project$Elm$Review$Main$makeReport, $elm$core$Dict$empty, model);
	}
};
var $jfmengels$elm_review$Review$Project$precomputeModuleGraph = function (project) {
	return project;
};
var $author$project$Elm$Review$RefusedErrorFixes$insert = F2(
	function (error, _v0) {
		var refusedErrorFixes = _v0;
		return A2(
			$elm$core$Set$insert,
			$author$project$Elm$Review$RefusedErrorFixes$errorKey(error),
			refusedErrorFixes);
	});
var $author$project$Elm$Review$Main$refuseError = F2(
	function (error, model) {
		return _Utils_update(
			model,
			{
				bh: A2($author$project$Elm$Review$RefusedErrorFixes$insert, error, model.bh)
			});
	});
var $jfmengels$elm_review$Review$Project$removeDependencies = function (_v0) {
	var project = _v0;
	return _Utils_update(
		project,
		{av: $elm$core$Dict$empty});
};
var $jfmengels$elm_review$Review$Project$removeModule = F2(
	function (path, project) {
		return $jfmengels$elm_review$Review$Project$forceModuleGraphRecomputation(
			A2($jfmengels$elm_review$Review$Project$removeFileFromProject, path, project));
	});
var $author$project$Elm$Review$Main$AwaitingFixAll = {$: 2};
var $author$project$Elm$Review$CliCommunication$sendLoggerMessage = F2(
	function (_v0, message) {
		var hackyJson = _v0;
		return A2(
			$elm$json$Json$Decode$decodeValue,
			A2(
				$elm$json$Json$Decode$field,
				message,
				$elm$json$Json$Decode$null(0)),
			hackyJson);
	});
var $author$project$Elm$Review$CliCommunication$logInPipe = F3(
	function (key, fields, a) {
		return A2(
			$elm$core$Basics$always,
			a,
			A2(
				$author$project$Elm$Review$CliCommunication$sendLoggerMessage,
				key,
				A2(
					$elm$json$Json$Encode$encode,
					0,
					$elm$json$Json$Encode$object(fields))));
	});
var $author$project$Elm$Review$CliCommunication$appliedFix = F3(
	function (key, errorCount, error) {
		return A3(
			$author$project$Elm$Review$CliCommunication$logInPipe,
			key,
			_List_fromArray(
				[
					_Utils_Tuple2(
					'type',
					$elm$json$Json$Encode$string('apply-fix')),
					_Utils_Tuple2(
					'ruleName',
					$elm$json$Json$Encode$string(
						$jfmengels$elm_review$Review$Rule$errorRuleName(error))),
					_Utils_Tuple2(
					'filePath',
					$elm$json$Json$Encode$string(
						$jfmengels$elm_review$Review$Rule$errorFilePath(error))),
					_Utils_Tuple2(
					'count',
					$elm$json$Json$Encode$int(errorCount))
				]),
			error);
	});
var $author$project$Elm$Review$Main$countErrors = function (dict) {
	return A3(
		$elm$core$Dict$foldl,
		F3(
			function (_v0, errors, count) {
				return $elm$core$List$length(errors) + count;
			}),
		0,
		dict);
};
var $author$project$Elm$Review$Main$addFixedErrorForFile = F3(
	function (path, error, model) {
		var errorsForFile = A2(
			$elm$core$List$cons,
			A3(
				$author$project$Elm$Review$CliCommunication$appliedFix,
				model.ap,
				$author$project$Elm$Review$Main$countErrors(model.W),
				error),
			A2(
				$elm$core$Maybe$withDefault,
				_List_Nil,
				A2($elm$core$Dict$get, path, model.W)));
		return _Utils_update(
			model,
			{
				W: A3($elm$core$Dict$insert, path, errorsForFile, model.W)
			});
	});
var $author$project$Elm$Review$Main$DependenciesChanged = 1;
var $author$project$Elm$Review$Main$SourceDirectoriesChanged = 0;
var $author$project$Elm$Review$Main$normalizeApplicationDeps = function (application) {
	return _List_fromArray(
		[
			$elm$core$Dict$fromList(
			A2(
				$elm$core$List$map,
				function (_v0) {
					var name = _v0.a;
					var version = _v0.b;
					return _Utils_Tuple2(
						$elm$project_metadata_utils$Elm$Package$toString(name),
						version);
				},
				application.dq)),
			$elm$core$Dict$fromList(
			A2(
				$elm$core$List$map,
				function (_v1) {
					var name = _v1.a;
					var version = _v1.b;
					return _Utils_Tuple2(
						$elm$project_metadata_utils$Elm$Package$toString(name),
						version);
				},
				application.dr)),
			$elm$core$Dict$fromList(
			A2(
				$elm$core$List$map,
				function (_v2) {
					var name = _v2.a;
					var version = _v2.b;
					return _Utils_Tuple2(
						$elm$project_metadata_utils$Elm$Package$toString(name),
						version);
				},
				application.eg)),
			$elm$core$Dict$fromList(
			A2(
				$elm$core$List$map,
				function (_v3) {
					var name = _v3.a;
					var version = _v3.b;
					return _Utils_Tuple2(
						$elm$project_metadata_utils$Elm$Package$toString(name),
						version);
				},
				application.eh))
		]);
};
var $author$project$Elm$Review$Main$normalizePackageDeps = function (application) {
	return _List_fromArray(
		[
			$elm$core$Dict$fromList(
			A2(
				$elm$core$List$map,
				function (_v0) {
					var name = _v0.a;
					var constraint = _v0.b;
					return _Utils_Tuple2(
						$elm$project_metadata_utils$Elm$Package$toString(name),
						constraint);
				},
				application.dp)),
			$elm$core$Dict$fromList(
			A2(
				$elm$core$List$map,
				function (_v1) {
					var name = _v1.a;
					var constraint = _v1.b;
					return _Utils_Tuple2(
						$elm$project_metadata_utils$Elm$Package$toString(name),
						constraint);
				},
				application.ef))
		]);
};
var $author$project$Elm$Review$Main$changesToElm = F2(
	function (oldProject, newProject) {
		var _v0 = A3(
			$elm$core$Maybe$map2,
			$elm$core$Tuple$pair,
			$jfmengels$elm_review$Review$Project$elmJson(oldProject),
			$jfmengels$elm_review$Review$Project$elmJson(newProject));
		if (!_v0.$) {
			var _v1 = _v0.a;
			var oldElmJson = _v1.a;
			var newElmJson = _v1.b;
			if (_Utils_eq(oldElmJson, newElmJson)) {
				return _List_Nil;
			} else {
				var _v2 = _Utils_Tuple2(oldElmJson.e, newElmJson.e);
				_v2$2:
				while (true) {
					if (!_v2.a.$) {
						if (!_v2.b.$) {
							var oldApp = _v2.a.a;
							var newApp = _v2.b.a;
							return A2(
								$elm$core$List$filterMap,
								$elm$core$Basics$identity,
								_List_fromArray(
									[
										_Utils_eq(
										$elm$core$Set$fromList(oldApp.ds),
										$elm$core$Set$fromList(newApp.ds)) ? $elm$core$Maybe$Nothing : $elm$core$Maybe$Just(0),
										_Utils_eq(
										$author$project$Elm$Review$Main$normalizeApplicationDeps(oldApp),
										$author$project$Elm$Review$Main$normalizeApplicationDeps(newApp)) ? $elm$core$Maybe$Nothing : $elm$core$Maybe$Just(1)
									]));
						} else {
							break _v2$2;
						}
					} else {
						if (_v2.b.$ === 1) {
							var oldPackage = _v2.a.a;
							var newPackage = _v2.b.a;
							return A2(
								$elm$core$List$filterMap,
								$elm$core$Basics$identity,
								_List_fromArray(
									[
										_Utils_eq(
										$author$project$Elm$Review$Main$normalizePackageDeps(oldPackage),
										$author$project$Elm$Review$Main$normalizePackageDeps(newPackage)) ? $elm$core$Maybe$Nothing : $elm$core$Maybe$Just(1)
									]));
						} else {
							break _v2$2;
						}
					}
				}
				return _List_fromArray(
					[0, 1]);
			}
		} else {
			return _List_Nil;
		}
	});
var $jfmengels$elm_review$Review$Options$Internal$ReviewOptionsInternal = $elm$core$Basics$identity;
var $jfmengels$elm_review$Review$Options$withSuppressedErrors = F2(
	function (suppressions, _v0) {
		var reviewOptions = _v0;
		return _Utils_update(
			reviewOptions,
			{ec: suppressions});
	});
var $author$project$Elm$Review$SuppressedErrors$addToReviewOptions = F2(
	function (_v0, reviewOptions) {
		var suppressedErrors = _v0;
		return A2($jfmengels$elm_review$Review$Options$withSuppressedErrors, suppressedErrors, reviewOptions);
	});
var $jfmengels$elm_review$Review$Options$Internal$Disabled = {$: 0};
var $jfmengels$elm_review$Review$Logger$Logger = $elm$core$Basics$identity;
var $jfmengels$elm_review$Review$Logger$none = $elm$core$Basics$identity;
var $jfmengels$elm_review$Review$Options$defaults = {
	dx: false,
	aw: $jfmengels$elm_review$Review$Options$Internal$Disabled,
	dH: $elm$core$Basics$always(false),
	cX: $jfmengels$elm_review$Review$Logger$none,
	ec: $elm$core$Dict$empty
};
var $author$project$Elm$Review$RefusedErrorFixes$errorKeyUsingRecord = function (error) {
	return A2(
		$elm$core$String$join,
		'###',
		_List_fromArray(
			[
				error.c3,
				error.eU,
				error.e8,
				A2($elm$core$String$join, '\n', error.eL),
				A2(
				$elm$core$String$join,
				'-',
				A2(
					$elm$core$List$map,
					$elm$core$String$fromInt,
					_List_fromArray(
						[error.c1.bQ.d0, error.c1.bQ.eF, error.c1.bu.d0, error.c1.bu.eF])))
			]));
};
var $author$project$Elm$Review$RefusedErrorFixes$memberUsingRecord = F2(
	function (error, _v0) {
		var refusedErrorFixes = _v0;
		return A2(
			$elm$core$Set$member,
			$author$project$Elm$Review$RefusedErrorFixes$errorKeyUsingRecord(error),
			refusedErrorFixes);
	});
var $jfmengels$elm_review$Review$Error$Global = 3;
var $jfmengels$elm_review$Review$Rule$checkForConfigurationErrors = function (rules) {
	var errors = A2(
		$elm$core$List$filterMap,
		function (rule) {
			return A2(
				$elm$core$Maybe$map,
				function (_v0) {
					var message = _v0.e8;
					var details = _v0.eL;
					return {
						eL: details,
						eU: 'CONFIGURATION ERROR',
						cQ: $elm$core$Maybe$Nothing,
						e8: message,
						cx: false,
						c1: $stil4m$elm_syntax$Elm$Syntax$Range$emptyRange,
						c3: $jfmengels$elm_review$Review$Rule$ruleName(rule),
						ee: 3
					};
				},
				$jfmengels$elm_review$Review$Rule$getConfigurationError(rule));
		},
		rules);
	return $elm$core$List$isEmpty(errors) ? $elm$core$Result$Ok(0) : $elm$core$Result$Err(errors);
};
var $jfmengels$elm_review$Review$Rule$elmReviewGlobalError = function (_v0) {
	var message = _v0.e8;
	var details = _v0.eL;
	return {eL: details, eU: 'GLOBAL ERROR', cQ: $elm$core$Maybe$Nothing, e8: message, cx: false, c1: $stil4m$elm_syntax$Elm$Syntax$Range$emptyRange, c3: '', ee: 3};
};
var $elm$core$List$sort = function (xs) {
	return A2($elm$core$List$sortBy, $elm$core$Basics$identity, xs);
};
var $jfmengels$elm_review$Review$Rule$duplicateModulesGlobalError = function (duplicate) {
	var paths = $elm$core$String$concat(
		A2(
			$elm$core$List$map,
			function (s) {
				return '\n  - ' + s;
			},
			$elm$core$List$sort(duplicate.fs)));
	return $jfmengels$elm_review$Review$Rule$errorToReviewError(
		$jfmengels$elm_review$Review$Rule$elmReviewGlobalError(
			{
				eL: _List_fromArray(
					[
						'I found several modules with the name `' + (A2($elm$core$String$join, '.', duplicate.cv) + '`. Depending on how I choose to resolve this, I might give you different reports. Since this is a compiler error anyway, I require this problem to be solved. Please fix this then try running `elm-review` again.'),
						'Here are the paths to some of the files that share a module name:' + paths,
						'It is possible that you requested me to look at several projects, and that modules from each project share the same name. I don\'t recommend reviewing several projects at the same time, as I can only handle one `elm.json`. I instead suggest running `elm-review` twice, once for each project.'
					]),
				e8: 'Found several modules named `' + (A2($elm$core$String$join, '.', duplicate.cv) + '`')
			}));
};
var $jfmengels$elm_review$Review$ImportCycle$wrapInCycle = function (string) {
	return '    ┌─────┐\n    │    ' + (string + '\n    └─────┘');
};
var $jfmengels$elm_review$Ansi$noColor = '\u001B[39m';
var $jfmengels$elm_review$Ansi$applyColor = F2(
	function (color, string) {
		return $elm$core$String$concat(
			_List_fromArray(
				['\u001B[' + (color + 'm'), string, $jfmengels$elm_review$Ansi$noColor]));
	});
var $jfmengels$elm_review$Ansi$yellow = $jfmengels$elm_review$Ansi$applyColor('33');
var $jfmengels$elm_review$Review$ImportCycle$printCycle = function (moduleNames) {
	return $jfmengels$elm_review$Review$ImportCycle$wrapInCycle(
		A2(
			$elm$core$String$join,
			'\n    │     ↓\n    │    ',
			A2(
				$elm$core$List$map,
				A2(
					$elm$core$Basics$composeR,
					$elm$core$String$join('.'),
					$jfmengels$elm_review$Ansi$yellow),
				moduleNames)));
};
var $jfmengels$elm_review$Review$ImportCycle$error = function (cycle) {
	return {
		eL: _List_fromArray(
			[
				$jfmengels$elm_review$Review$ImportCycle$printCycle(cycle),
				'Learn more about why this is disallowed and how to break cycles here:<https://elm-lang.org/0.19.1/import-cycles>'
			]),
		e8: 'Your module imports form a cycle'
	};
};
var $jfmengels$elm_review$Review$Rule$importCycleError = function (cycle) {
	return $jfmengels$elm_review$Review$Rule$errorToReviewError(
		A2(
			$jfmengels$elm_review$Review$Rule$setRuleName,
			'Incorrect project',
			$jfmengels$elm_review$Review$Rule$elmReviewGlobalError(
				$jfmengels$elm_review$Review$ImportCycle$error(cycle))));
};
var $jfmengels$elm_review$Review$Project$InvalidProjectError$DuplicateModuleNames = function (a) {
	return {$: 1, a: a};
};
var $jfmengels$elm_review$Review$Project$InvalidProjectError$ImportCycleError = function (a) {
	return {$: 2, a: a};
};
var $jfmengels$elm_review$Review$Project$InvalidProjectError$NoModulesError = {$: 3};
var $jfmengels$elm_review$Review$Project$InvalidProjectError$SomeModulesFailedToParse = function (a) {
	return {$: 0, a: a};
};
var $jfmengels$elm_review$Review$Project$Valid$duplicateModuleNames = F2(
	function (visitedModules, projectModules) {
		duplicateModuleNames:
		while (true) {
			if (!projectModules.b) {
				return $elm$core$Maybe$Nothing;
			} else {
				var projectModule = projectModules.a;
				var restOfModules = projectModules.b;
				var moduleName = $jfmengels$elm_review$Review$Project$Valid$getModuleName(projectModule);
				var _v1 = A2($elm$core$Dict$get, moduleName, visitedModules);
				if (_v1.$ === 1) {
					var $temp$visitedModules = A3($elm$core$Dict$insert, moduleName, projectModule.fr, visitedModules),
						$temp$projectModules = restOfModules;
					visitedModules = $temp$visitedModules;
					projectModules = $temp$projectModules;
					continue duplicateModuleNames;
				} else {
					var path = _v1.a;
					return $elm$core$Maybe$Just(
						{
							cv: moduleName,
							fs: A2(
								$elm$core$List$cons,
								path,
								A2(
									$elm$core$List$cons,
									projectModule.fr,
									A2(
										$elm$core$List$map,
										function ($) {
											return $.fr;
										},
										A2(
											$elm$core$List$filter,
											function (p) {
												return _Utils_eq(
													$jfmengels$elm_review$Review$Project$Valid$getModuleName(p),
													moduleName);
											},
											restOfModules))))
						});
				}
			}
		}
	});
var $jfmengels$elm_review$Vendor$Graph$alongIncomingEdges = function (ctx) {
	return $jfmengels$elm_review$Vendor$IntDict$keys(ctx.e2);
};
var $jfmengels$elm_review$Vendor$Fifo$Fifo = F2(
	function (a, b) {
		return {$: 0, a: a, b: b};
	});
var $jfmengels$elm_review$Vendor$Fifo$empty = A2($jfmengels$elm_review$Vendor$Fifo$Fifo, _List_Nil, _List_Nil);
var $jfmengels$elm_review$Vendor$Fifo$insert = F2(
	function (a, _v0) {
		var front = _v0.a;
		var back = _v0.b;
		return A2(
			$jfmengels$elm_review$Vendor$Fifo$Fifo,
			front,
			A2($elm$core$List$cons, a, back));
	});
var $jfmengels$elm_review$Vendor$Fifo$remove = function (fifo) {
	if (!fifo.a.b) {
		if (!fifo.b.b) {
			return _Utils_Tuple2($elm$core$Maybe$Nothing, $jfmengels$elm_review$Vendor$Fifo$empty);
		} else {
			var back = fifo.b;
			return $jfmengels$elm_review$Vendor$Fifo$remove(
				A2(
					$jfmengels$elm_review$Vendor$Fifo$Fifo,
					$elm$core$List$reverse(back),
					_List_Nil));
		}
	} else {
		var _v1 = fifo.a;
		var next = _v1.a;
		var rest = _v1.b;
		var back = fifo.b;
		return _Utils_Tuple2(
			$elm$core$Maybe$Just(next),
			A2($jfmengels$elm_review$Vendor$Fifo$Fifo, rest, back));
	}
};
var $jfmengels$elm_review$Vendor$Graph$guidedBfs = F5(
	function (selectNeighbors, visitNode, startingSeeds, startingAcc, startingGraph) {
		var enqueueMany = F4(
			function (distance, parentPath, nodeIds_, queue) {
				return A3(
					$elm$core$List$foldl,
					$jfmengels$elm_review$Vendor$Fifo$insert,
					queue,
					A2(
						$elm$core$List$map,
						function (id) {
							return _Utils_Tuple3(id, parentPath, distance);
						},
						nodeIds_));
			});
		var go = F3(
			function (seeds, acc, graph) {
				go:
				while (true) {
					var _v0 = $jfmengels$elm_review$Vendor$Fifo$remove(seeds);
					if (_v0.a.$ === 1) {
						var _v1 = _v0.a;
						return _Utils_Tuple2(acc, graph);
					} else {
						var _v2 = _v0.a.a;
						var next = _v2.a;
						var parentPath = _v2.b;
						var distance = _v2.c;
						var seeds1 = _v0.b;
						var _v3 = A2($jfmengels$elm_review$Vendor$Graph$get, next, graph);
						if (_v3.$ === 1) {
							var $temp$seeds = seeds1,
								$temp$acc = acc,
								$temp$graph = graph;
							seeds = $temp$seeds;
							acc = $temp$acc;
							graph = $temp$graph;
							continue go;
						} else {
							var ctx = _v3.a;
							var path = A2($elm$core$List$cons, ctx, parentPath);
							var seeds2 = A4(
								enqueueMany,
								distance + 1,
								path,
								selectNeighbors(ctx),
								seeds1);
							var accAfterVisit = A3(visitNode, path, distance, acc);
							var $temp$seeds = seeds2,
								$temp$acc = accAfterVisit,
								$temp$graph = A2($jfmengels$elm_review$Vendor$Graph$remove, next, graph);
							seeds = $temp$seeds;
							acc = $temp$acc;
							graph = $temp$graph;
							continue go;
						}
					}
				}
			});
		return A3(
			go,
			A4(enqueueMany, 0, _List_Nil, startingSeeds, $jfmengels$elm_review$Vendor$Fifo$empty),
			startingAcc,
			startingGraph);
	});
var $jfmengels$elm_review$Review$ImportCycle$reachedTarget = F2(
	function (targetNode, path) {
		var _v0 = $elm$core$List$head(path);
		if (!_v0.$) {
			var node = _v0.a;
			return _Utils_eq(node.dV.cm, targetNode);
		} else {
			return false;
		}
	});
var $jfmengels$elm_review$Review$ImportCycle$visitorDiscoverCycle = F4(
	function (targetNode, path, distance, acc) {
		if ($elm$core$List$isEmpty(acc)) {
			if (!distance) {
				var _v0 = $elm$core$List$head(path);
				if (!_v0.$) {
					var head = _v0.a;
					return A2($jfmengels$elm_review$Vendor$IntDict$member, head.dV.cm, head.e2) ? _List_fromArray(
						[head.dV]) : acc;
				} else {
					return acc;
				}
			} else {
				if (A2($jfmengels$elm_review$Review$ImportCycle$reachedTarget, targetNode, path)) {
					return A2(
						$elm$core$List$map,
						function ($) {
							return $.dV;
						},
						path);
				} else {
					return _List_Nil;
				}
			}
		} else {
			return acc;
		}
	});
var $jfmengels$elm_review$Review$ImportCycle$findSmallerCycle = F3(
	function (graph, currentBest, nodesToVisit) {
		findSmallerCycle:
		while (true) {
			if (!nodesToVisit.b) {
				return currentBest;
			} else {
				var startingNode = nodesToVisit.a;
				var restOfNodes = nodesToVisit.b;
				var cycle = A5(
					$jfmengels$elm_review$Vendor$Graph$guidedBfs,
					$jfmengels$elm_review$Vendor$Graph$alongIncomingEdges,
					$jfmengels$elm_review$Review$ImportCycle$visitorDiscoverCycle(startingNode.cm),
					_List_fromArray(
						[startingNode.cm]),
					_List_Nil,
					graph).a;
				var newBest = (($elm$core$List$length(cycle) > 0) && (_Utils_cmp(
					$elm$core$List$length(cycle),
					$elm$core$List$length(currentBest)) < 0)) ? cycle : currentBest;
				if ($elm$core$List$length(newBest) === 1) {
					return newBest;
				} else {
					var $temp$graph = graph,
						$temp$currentBest = newBest,
						$temp$nodesToVisit = restOfNodes;
					graph = $temp$graph;
					currentBest = $temp$currentBest;
					nodesToVisit = $temp$nodesToVisit;
					continue findSmallerCycle;
				}
			}
		}
	});
var $jfmengels$elm_review$Review$ImportCycle$findCycle = F2(
	function (graph, edge) {
		var initialCycle = A5(
			$jfmengels$elm_review$Vendor$Graph$guidedBfs,
			$jfmengels$elm_review$Vendor$Graph$alongIncomingEdges,
			$jfmengels$elm_review$Review$ImportCycle$visitorDiscoverCycle(edge.fO),
			_List_fromArray(
				[edge.eX]),
			_List_Nil,
			graph).a;
		return A2(
			$elm$core$List$map,
			function ($) {
				return $.b6;
			},
			A3($jfmengels$elm_review$Review$ImportCycle$findSmallerCycle, graph, initialCycle, initialCycle));
	});
var $jfmengels$elm_review$Review$Project$Valid$fromProjectAndGraph = F3(
	function (moduleGraph_, acyclicGraph, _v0) {
		var project = _v0;
		var directDependencies_ = $jfmengels$elm_review$Review$Project$Valid$computeDirectDependencies(project);
		return {
			av: project.av,
			aH: $jfmengels$elm_review$Review$Project$Valid$computeDependencyModules(directDependencies_),
			aS: directDependencies_,
			cg: project.cg,
			dQ: moduleGraph_,
			aO: project.aN,
			b8: project.eA,
			c2: project.c2,
			cb: $jfmengels$elm_review$Vendor$Graph$topologicalSort(acyclicGraph),
			c5: project.c5
		};
	});
var $jfmengels$elm_review$Review$Project$Valid$parse = function (project) {
	var p = project;
	if (!$elm$core$List$isEmpty(p.bI)) {
		return $elm$core$Result$Err(
			$jfmengels$elm_review$Review$Project$InvalidProjectError$SomeModulesFailedToParse(
				A2(
					$elm$core$List$map,
					function ($) {
						return $.fr;
					},
					p.bI)));
	} else {
		if ($elm$core$Dict$isEmpty(p.aN)) {
			return $elm$core$Result$Err($jfmengels$elm_review$Review$Project$InvalidProjectError$NoModulesError);
		} else {
			var projectModules = $elm$core$Dict$values(p.aN);
			var _v0 = A2($jfmengels$elm_review$Review$Project$Valid$duplicateModuleNames, $elm$core$Dict$empty, projectModules);
			if (!_v0.$) {
				var duplicate = _v0.a;
				return $elm$core$Result$Err(
					$jfmengels$elm_review$Review$Project$InvalidProjectError$DuplicateModuleNames(duplicate));
			} else {
				var graph = $jfmengels$elm_review$Review$Project$Valid$buildModuleGraph(p.aN);
				var _v1 = $jfmengels$elm_review$Vendor$Graph$checkAcyclic(graph);
				if (_v1.$ === 1) {
					var edge = _v1.a;
					return $elm$core$Result$Err(
						$jfmengels$elm_review$Review$Project$InvalidProjectError$ImportCycleError(
							A2(
								$elm$core$List$filterMap,
								function (path) {
									return A2(
										$elm$core$Maybe$map,
										$jfmengels$elm_review$Review$Project$Valid$getModuleName,
										A2($elm$core$Dict$get, path, p.aN));
								},
								A2($jfmengels$elm_review$Review$ImportCycle$findCycle, graph, edge))));
				} else {
					var acyclicGraph = _v1.a;
					var _v2 = $jfmengels$elm_review$Vendor$Zipper$fromList(
						$jfmengels$elm_review$Vendor$Graph$topologicalSort(acyclicGraph));
					if (_v2.$ === 1) {
						return $elm$core$Result$Err($jfmengels$elm_review$Review$Project$InvalidProjectError$NoModulesError);
					} else {
						var zipper = _v2.a;
						return $elm$core$Result$Ok(
							_Utils_Tuple2(
								A3($jfmengels$elm_review$Review$Project$Valid$fromProjectAndGraph, graph, acyclicGraph, project),
								zipper));
					}
				}
			}
		}
	}
};
var $jfmengels$elm_review$Review$Rule$parsingError = function (path) {
	return {
		eL: _List_fromArray(
			['I could not understand the content of this file, and this prevents me from analyzing it. It is highly likely that the contents of the file is not correct Elm code.', 'I need this file to be fixed before analyzing the rest of the project. If I didn\'t, I would potentially report incorrect things.', 'Hint: Try running `elm make`. The compiler should give you better hints on how to resolve the problem.']),
		eU: path,
		cQ: $elm$core$Maybe$Nothing,
		e8: path + ' is not a correct Elm module',
		cx: false,
		c1: $stil4m$elm_syntax$Elm$Syntax$Range$emptyRange,
		c3: 'ParsingError',
		ee: 0
	};
};
var $jfmengels$elm_review$Review$Rule$getModulesSortedByImport = function (project) {
	var _v0 = $jfmengels$elm_review$Review$Project$Valid$parse(project);
	if (_v0.$ === 1) {
		switch (_v0.a.$) {
			case 0:
				var pathsThatFailedToParse = _v0.a.a;
				return $elm$core$Result$Err(
					A2($elm$core$List$map, $jfmengels$elm_review$Review$Rule$parsingError, pathsThatFailedToParse));
			case 1:
				var duplicate = _v0.a.a;
				return $elm$core$Result$Err(
					_List_fromArray(
						[
							$jfmengels$elm_review$Review$Rule$duplicateModulesGlobalError(duplicate)
						]));
			case 2:
				var cycle = _v0.a.a;
				return $elm$core$Result$Err(
					_List_fromArray(
						[
							$jfmengels$elm_review$Review$Rule$importCycleError(cycle)
						]));
			default:
				var _v1 = _v0.a;
				return $elm$core$Result$Err(
					_List_fromArray(
						[
							$jfmengels$elm_review$Review$Rule$errorToReviewError(
							A2(
								$jfmengels$elm_review$Review$Rule$setRuleName,
								'Incorrect project',
								$jfmengels$elm_review$Review$Rule$elmReviewGlobalError(
									{
										eL: _List_fromArray(
											['I need to look at some Elm modules. Maybe you have specified folders that do not exist?']),
										e8: 'This project does not contain any Elm modules'
									})))
						]));
		}
	} else {
		var result = _v0.a;
		return $elm$core$Result$Ok(result);
	}
};
var $jfmengels$elm_review$Review$Fix$FixedErrors$empty = A2($jfmengels$elm_review$Review$Fix$FixedErrors$FixedErrors, 0, $elm$core$Dict$empty);
var $jfmengels$elm_review$Review$Rule$moveFixableRulesFirst = function (rules) {
	return A2(
		$elm$core$List$sortBy,
		function (_v0) {
			var rule = _v0;
			return (rule.fe === 'NoUnused.Variables') ? 0 : ((rule.fe === 'NoUnused.Exports') ? 1 : (rule.n ? 2 : 3));
		},
		rules);
};
var $jfmengels$elm_review$Review$Fix$FixedErrors$hasChanged = F2(
	function (_v0, _v1) {
		var beforeCount = _v0.a;
		var afterCount = _v1.a;
		return !_Utils_eq(beforeCount, afterCount);
	});
var $jfmengels$elm_review$Review$Rule$runRulesHelp = F3(
	function (reviewOptions, remainingRules, acc) {
		runRulesHelp:
		while (true) {
			if (!remainingRules.b) {
				return acc;
			} else {
				var name = remainingRules.a.fe;
				var id = remainingRules.a.cm;
				var exceptions = remainingRules.a.r;
				var ruleImplementation = remainingRules.a.aD;
				var restOfRules = remainingRules.b;
				var result = A5(ruleImplementation, reviewOptions, id, exceptions, acc.eV, acc.e);
				var errors = A3($jfmengels$elm_review$Vendor$ListExtra$orderIndependentMapAppend, $jfmengels$elm_review$Review$Rule$errorToReviewError, result.aT, acc.aT);
				if (A2($jfmengels$elm_review$Review$Options$Internal$shouldAbort, reviewOptions, result.eV)) {
					return {
						aT: errors,
						b1: acc.b1,
						eV: result.eV,
						e: result.e,
						aE: _Utils_ap(
							restOfRules,
							A2($elm$core$List$cons, result.b9, acc.aE))
					};
				} else {
					if (A2($jfmengels$elm_review$Review$Fix$FixedErrors$hasChanged, result.eV, acc.eV)) {
						var $temp$reviewOptions = reviewOptions,
							$temp$remainingRules = _Utils_ap(
							$elm$core$List$reverse(acc.aE),
							restOfRules),
							$temp$acc = {
							aT: errors,
							b1: acc.b1,
							eV: result.eV,
							e: result.e,
							aE: _List_fromArray(
								[result.b9])
						};
						reviewOptions = $temp$reviewOptions;
						remainingRules = $temp$remainingRules;
						acc = $temp$acc;
						continue runRulesHelp;
					} else {
						var $temp$reviewOptions = reviewOptions,
							$temp$remainingRules = restOfRules,
							$temp$acc = {
							aT: errors,
							b1: function () {
								var _v1 = result.dx;
								if (!_v1.$) {
									var extract = _v1.a;
									return A3($elm$core$Dict$insert, name, extract, acc.b1);
								} else {
									return acc.b1;
								}
							}(),
							eV: result.eV,
							e: result.e,
							aE: A2($elm$core$List$cons, result.b9, acc.aE)
						};
						reviewOptions = $temp$reviewOptions;
						remainingRules = $temp$remainingRules;
						acc = $temp$acc;
						continue runRulesHelp;
					}
				}
			}
		}
	});
var $jfmengels$elm_review$Review$Rule$runRules = F3(
	function (_v0, rules, project) {
		var reviewOptions = _v0;
		return A3(
			$jfmengels$elm_review$Review$Rule$runRulesHelp,
			reviewOptions,
			$jfmengels$elm_review$Review$Rule$moveFixableRulesFirst(rules),
			{aT: _List_Nil, b1: $elm$core$Dict$empty, eV: $jfmengels$elm_review$Review$Fix$FixedErrors$empty, e: project, aE: _List_Nil});
	});
var $jfmengels$elm_review$Review$Fix$FixedErrors$toDict = function (_v0) {
	var dict = _v0.b;
	return dict;
};
var $jfmengels$elm_review$Review$Project$Valid$toRegularProject = function (_v0) {
	var validProject = _v0;
	return {
		eA: validProject.b8,
		av: validProject.av,
		cg: validProject.cg,
		dQ: $elm$core$Maybe$Just(validProject.dQ),
		aN: validProject.aO,
		bI: _List_Nil,
		c2: validProject.c2,
		c5: validProject.c5
	};
};
var $jfmengels$elm_review$Review$Rule$reviewV3 = F3(
	function (reviewOptions, rules, project) {
		var _v0 = A2(
			$elm$core$Result$andThen,
			function (_v1) {
				return $jfmengels$elm_review$Review$Rule$getModulesSortedByImport(project);
			},
			$jfmengels$elm_review$Review$Rule$checkForConfigurationErrors(rules));
		if (!_v0.$) {
			var _v2 = _v0.a;
			var validProject = _v2.a;
			var result = A3($jfmengels$elm_review$Review$Rule$runRules, reviewOptions, rules, validProject);
			return {
				aT: result.aT,
				b1: result.b1,
				eV: $jfmengels$elm_review$Review$Fix$FixedErrors$toDict(result.eV),
				e: $jfmengels$elm_review$Review$Project$Valid$toRegularProject(result.e),
				aE: result.aE
			};
		} else {
			var errors = _v0.a;
			return {aT: errors, b1: $elm$core$Dict$empty, eV: $elm$core$Dict$empty, e: project, aE: rules};
		}
	});
var $author$project$Elm$Review$CliCommunication$send = function (key) {
	return function (message) {
		return A2(
			$elm$core$Basics$always,
			message,
			A2(
				$author$project$Elm$Review$CliCommunication$sendLoggerMessage,
				key,
				A2(
					$elm$json$Json$Encode$encode,
					0,
					$elm$json$Json$Encode$object(message))));
	};
};
var $author$project$Elm$Review$CliCommunication$timerEnd = F3(
	function (key, metric, a) {
		return A3(
			$author$project$Elm$Review$CliCommunication$logInPipe,
			key,
			_List_fromArray(
				[
					_Utils_Tuple2(
					'type',
					$elm$json$Json$Encode$string('timer-end')),
					_Utils_Tuple2(
					'metric',
					$elm$json$Json$Encode$string(metric))
				]),
			a);
	});
var $author$project$Elm$Review$CliCommunication$timerStart = F3(
	function (key, metric, a) {
		return A3(
			$author$project$Elm$Review$CliCommunication$logInPipe,
			key,
			_List_fromArray(
				[
					_Utils_Tuple2(
					'type',
					$elm$json$Json$Encode$string('timer-start')),
					_Utils_Tuple2(
					'metric',
					$elm$json$Json$Encode$string(metric))
				]),
			a);
	});
var $jfmengels$elm_review$Review$Options$fixedDisabled = $jfmengels$elm_review$Review$Options$Internal$Disabled;
var $jfmengels$elm_review$Review$Options$Internal$Enabled = function (a) {
	return {$: 1, a: a};
};
var $jfmengels$elm_review$Review$Options$fixesEnabledWithLimit = function (limit) {
	return $jfmengels$elm_review$Review$Options$Internal$Enabled(
		$elm$core$Maybe$Just(limit));
};
var $jfmengels$elm_review$Review$Options$fixesEnabledWithoutLimits = $jfmengels$elm_review$Review$Options$Internal$Enabled($elm$core$Maybe$Nothing);
var $author$project$Elm$Review$Main$toReviewOptionsFixMode = F2(
	function (fixAllAllowed, model) {
		if (!fixAllAllowed) {
			return $jfmengels$elm_review$Review$Options$fixedDisabled;
		} else {
			var _v0 = model.aw;
			switch (_v0) {
				case 0:
					return $jfmengels$elm_review$Review$Options$fixedDisabled;
				case 1:
					var _v1 = model.a4;
					if (!_v1.$) {
						var fixLimit = _v1.a;
						return $jfmengels$elm_review$Review$Options$fixesEnabledWithLimit(fixLimit);
					} else {
						return $jfmengels$elm_review$Review$Options$fixesEnabledWithLimit(1);
					}
				default:
					var _v2 = model.a4;
					if (!_v2.$) {
						var fixLimit = _v2.a;
						return $jfmengels$elm_review$Review$Options$fixesEnabledWithLimit(fixLimit);
					} else {
						return $jfmengels$elm_review$Review$Options$fixesEnabledWithoutLimits;
					}
			}
		}
	});
var $jfmengels$elm_review$Review$Options$withDataExtraction = F2(
	function (extract, _v0) {
		var reviewOptions = _v0;
		return _Utils_update(
			reviewOptions,
			{dx: extract});
	});
var $jfmengels$elm_review$Review$Options$withFixes = F2(
	function (fixMode, _v0) {
		var reviewOptions = _v0;
		return _Utils_update(
			reviewOptions,
			{aw: fixMode});
	});
var $jfmengels$elm_review$Review$Options$withIgnoredFixes = F2(
	function (ignoreFix, _v0) {
		var reviewOptions = _v0;
		return _Utils_update(
			reviewOptions,
			{dH: ignoreFix});
	});
var $jfmengels$elm_review$Review$Logger$fromFn = $elm$core$Basics$identity;
var $jfmengels$elm_review$Review$Options$withLogger = F2(
	function (maybeLogger, _v0) {
		var reviewOptions = _v0;
		return _Utils_update(
			reviewOptions,
			{
				cX: function () {
					if (!maybeLogger.$) {
						var fn = maybeLogger.a;
						return $jfmengels$elm_review$Review$Logger$fromFn(fn);
					} else {
						return $jfmengels$elm_review$Review$Logger$none;
					}
				}()
			});
	});
var $author$project$Elm$Review$Main$runReview = F3(
	function (_v0, initialProject, model) {
		var fixesAllowed = _v0.a6;
		var _v1 = A3(
			$author$project$Elm$Review$CliCommunication$timerEnd,
			model.ap,
			'run-review',
			A3(
				$jfmengels$elm_review$Review$Rule$reviewV3,
				A2(
					$author$project$Elm$Review$SuppressedErrors$addToReviewOptions,
					model.C,
					A2(
						$jfmengels$elm_review$Review$Options$withIgnoredFixes,
						function (error) {
							return A2($author$project$Elm$Review$RefusedErrorFixes$memberUsingRecord, error, model.bh);
						},
						A2(
							$jfmengels$elm_review$Review$Options$withFixes,
							A2($author$project$Elm$Review$Main$toReviewOptionsFixMode, fixesAllowed, model),
							A2(
								$jfmengels$elm_review$Review$Options$withLogger,
								$elm$core$Maybe$Just(
									$author$project$Elm$Review$CliCommunication$send(model.ap)),
								A2($jfmengels$elm_review$Review$Options$withDataExtraction, model.bt && (model.a1 === 1), $jfmengels$elm_review$Review$Options$defaults))))),
				model.aE,
				A3($author$project$Elm$Review$CliCommunication$timerStart, model.ap, 'run-review', initialProject)));
		var errors = _v1.aT;
		var rules = _v1.aE;
		var project = _v1.e;
		var extracts = _v1.b1;
		var fixedErrors = _v1.eV;
		return _Utils_update(
			model,
			{
				ah: $author$project$Elm$Review$Main$NotAwaiting,
				b1: extracts,
				W: fixedErrors,
				X: project,
				by: rules,
				co: false,
				e: (!model.aw) ? project : model.e,
				bi: errors,
				ab: A3(
					$author$project$Elm$Review$CliCommunication$timerEnd,
					model.ap,
					'apply-suppressions',
					A3(
						$author$project$Elm$Review$SuppressedErrors$apply,
						model.an,
						model.C,
						A3($author$project$Elm$Review$CliCommunication$timerStart, model.ap, 'apply-suppressions', errors))),
				aE: (model.co || (!model.aw)) ? rules : model.aE
			});
	});
var $author$project$Elm$Review$Main$applyAllFixes = F2(
	function (failedFixesDict, model) {
		applyAllFixes:
		while (true) {
			var _v0 = A4(
				$author$project$Elm$Review$Main$findFix,
				failedFixesDict,
				model.bh,
				$author$project$Elm$Review$Main$fixableFilesInProject(model.X),
				model.ab);
			if (!_v0.b.$) {
				var newFailedFixesDict = _v0.a;
				var file = _v0.b.a.cP;
				var error = _v0.b.a.cM;
				var fixedSource = _v0.b.a.aK;
				var newProject = A2(
					$author$project$Elm$Review$Main$addUpdatedFileToProject,
					_Utils_update(
						file,
						{fE: fixedSource}),
					model.X);
				if (_Utils_cmp(
					$elm$core$List$length(
						$jfmengels$elm_review$Review$Project$modulesThatFailedToParse(newProject)),
					$elm$core$List$length(
						$jfmengels$elm_review$Review$Project$modulesThatFailedToParse(model.X))) > 0) {
					return $elm$core$Maybe$Nothing;
				} else {
					if (!$elm$core$List$isEmpty(
						A2($author$project$Elm$Review$Main$changesToElm, model.X, newProject))) {
						return $elm$core$Maybe$Just(
							{
								cO: newFailedFixesDict,
								c$: A3(
									$author$project$Elm$Review$Main$addFixedErrorForFile,
									file.fr,
									error,
									_Utils_update(
										model,
										{X: newProject}))
							});
					} else {
						var $temp$failedFixesDict = newFailedFixesDict,
							$temp$model = A3(
							$author$project$Elm$Review$Main$runReview,
							{a6: true},
							newProject,
							A3(
								$author$project$Elm$Review$Main$addFixedErrorForFile,
								file.fr,
								error,
								_Utils_update(
									model,
									{X: newProject})));
						failedFixesDict = $temp$failedFixesDict;
						model = $temp$model;
						continue applyAllFixes;
					}
				}
			} else {
				var newFailedFixesDict = _v0.a;
				var _v1 = _v0.b;
				return $elm$core$Maybe$Just(
					{cO: newFailedFixesDict, c$: model});
			}
		}
	});
var $author$project$Elm$Review$Main$diff = F2(
	function (before, after) {
		var beforeReadme = function () {
			var _v8 = $jfmengels$elm_review$Review$Project$readme(before);
			if (!_v8.$) {
				var readme = _v8.a;
				return _List_fromArray(
					[
						_Utils_Tuple2(
						readme.fr,
						{fr: readme.fr, fE: readme.br})
					]);
			} else {
				return _List_Nil;
			}
		}();
		var beforeElmJson = function () {
			var _v7 = $jfmengels$elm_review$Review$Project$elmJson(before);
			if (!_v7.$) {
				var readme = _v7.a;
				return _List_fromArray(
					[
						_Utils_Tuple2(
						readme.fr,
						{fr: readme.fr, fE: readme.bN})
					]);
			} else {
				return _List_Nil;
			}
		}();
		var beforeModules = $elm$core$Dict$fromList(
			$elm$core$List$concat(
				_List_fromArray(
					[
						beforeReadme,
						beforeElmJson,
						A2(
						$elm$core$List$map,
						function (mod) {
							return _Utils_Tuple2(
								mod.fr,
								{fr: mod.fr, fE: mod.fE});
						},
						$jfmengels$elm_review$Review$Project$modules(before))
					])));
		var afterReadme = function () {
			var _v6 = $jfmengels$elm_review$Review$Project$readme(after);
			if (!_v6.$) {
				var readme = _v6.a;
				return _List_fromArray(
					[
						_Utils_Tuple2(readme.fr, readme.br)
					]);
			} else {
				return _List_Nil;
			}
		}();
		var afterElmJson = function () {
			var _v5 = $jfmengels$elm_review$Review$Project$elmJson(after);
			if (!_v5.$) {
				var elmJson = _v5.a;
				return _List_fromArray(
					[
						_Utils_Tuple2(elmJson.fr, elmJson.bN)
					]);
			} else {
				return _List_Nil;
			}
		}();
		var fixedSources = $elm$core$Dict$fromList(
			$elm$core$List$concat(
				_List_fromArray(
					[
						afterReadme,
						afterElmJson,
						A2(
						$elm$core$List$map,
						function (mod) {
							return _Utils_Tuple2(mod.fr, mod.fE);
						},
						$jfmengels$elm_review$Review$Project$modules(after))
					])));
		return A6(
			$elm$core$Dict$merge,
			F3(
				function (_v0, _v1, acc) {
					return acc;
				}),
			F4(
				function (_v2, beforeModule, fixedSource, acc) {
					return (!_Utils_eq(beforeModule.fE, fixedSource)) ? A2(
						$elm$core$List$cons,
						{aK: fixedSource, fr: beforeModule.fr, fE: beforeModule.fE},
						acc) : acc;
				}),
			F3(
				function (_v3, _v4, acc) {
					return acc;
				}),
			beforeModules,
			fixedSources,
			_List_Nil);
	});
var $author$project$Elm$Review$Main$MultipleErrors = function (a) {
	return {$: 2, a: a};
};
var $author$project$Elm$Review$Main$NoErrors = {$: 0};
var $author$project$Elm$Review$Main$OneError = F2(
	function (a, b) {
		return {$: 1, a: a, b: b};
	});
var $author$project$Elm$Review$Main$numberOfErrors = function (dict) {
	var _v0 = $elm$core$Dict$toList(dict);
	if (!_v0.b) {
		return $author$project$Elm$Review$Main$NoErrors;
	} else {
		if ((_v0.a.b.b && (!_v0.a.b.b.b)) && (!_v0.b.b)) {
			var _v1 = _v0.a;
			var filePath = _v1.a;
			var _v2 = _v1.b;
			var singleError = _v2.a;
			return A2($author$project$Elm$Review$Main$OneError, filePath, singleError);
		} else {
			var list = _v0;
			return $author$project$Elm$Review$Main$MultipleErrors(
				$elm$core$List$length(list));
		}
	}
};
var $author$project$Elm$Review$Reporter$formatFileDiff = function (file) {
	return A2(
		$author$project$Elm$Review$Text$join,
		'\n\n',
		_List_fromArray(
			[
				_List_fromArray(
				[
					$author$project$Elm$Review$Text$inBlue(
					$author$project$Elm$Review$Text$from(
						A3(
							$elm$core$String$padLeft,
							80,
							'-',
							' ' + $author$project$Elm$Review$Reporter$filePath(file.fr))))
				]),
				A2(
				$elm$core$List$cons,
				$author$project$Elm$Review$Text$from('Applied from the fixes for the following errors:'),
				A2(
					$elm$core$List$concatMap,
					function (error) {
						return A2(
							$elm$core$List$cons,
							$author$project$Elm$Review$Text$from('\n  '),
							A3($author$project$Elm$Review$Reporter$formatErrorTitle, $elm$core$Dict$empty, 1, error));
					},
					$elm$core$List$reverse(file.aT))),
				A2($author$project$Elm$Review$Reporter$diff, file.fE, file.aK)
			]));
};
var $author$project$Elm$Review$Reporter$formatFileDiffs = function (changedFiles) {
	if (!changedFiles.b) {
		return _List_Nil;
	} else {
		if (!changedFiles.b.b) {
			var file = changedFiles.a;
			return $author$project$Elm$Review$Reporter$formatFileDiff(file);
		} else {
			var firstFile = changedFiles.a;
			var _v1 = changedFiles.b;
			var secondFile = _v1.a;
			var restOfFiles = _v1.b;
			return $elm$core$List$concat(
				_List_fromArray(
					[
						$author$project$Elm$Review$Reporter$formatFileDiff(firstFile),
						_List_fromArray(
						[
							$author$project$Elm$Review$Text$from('\n')
						]),
						A2($author$project$Elm$Review$Reporter$fileSeparator, firstFile.fr, secondFile.fr),
						$author$project$Elm$Review$Reporter$formatFileDiffs(
						A2($elm$core$List$cons, secondFile, restOfFiles))
					]));
		}
	}
};
var $elm$core$String$padRight = F3(
	function (n, _char, string) {
		return _Utils_ap(
			string,
			A2(
				$elm$core$String$repeat,
				n - $elm$core$String$length(string),
				$elm$core$String$fromChar(_char)));
	});
var $author$project$Elm$Review$Reporter$formatFixProposals = function (changedFiles) {
	var headerText = '-- ELM-REVIEW FIX-ALL PROPOSAL ';
	var fixAllHeader = $author$project$Elm$Review$Text$inBlue(
		$author$project$Elm$Review$Text$from(
			A3($elm$core$String$padRight, 80, '-', headerText)));
	var filesListing = A2(
		$elm$core$List$cons,
		$author$project$Elm$Review$Text$from('I found fixable errors for the following files:'),
		A2(
			$elm$core$List$concatMap,
			function (file) {
				return _List_fromArray(
					[
						$author$project$Elm$Review$Text$from('\n  '),
						$author$project$Elm$Review$Text$inYellow(
						$author$project$Elm$Review$Text$from(
							'- ' + $author$project$Elm$Review$Reporter$filePath(file.fr)))
					]);
			},
			changedFiles));
	var body = A2(
		$author$project$Elm$Review$Text$join,
		'\n\n',
		_List_fromArray(
			[
				_List_fromArray(
				[fixAllHeader]),
				filesListing,
				_List_fromArray(
				[
					$author$project$Elm$Review$Text$from('Here is how the code would change if you applied each fix.')
				]),
				$author$project$Elm$Review$Reporter$formatFileDiffs(changedFiles)
			]));
	return A2(
		$elm$core$List$map,
		$author$project$Elm$Review$Text$toRecord,
		_Utils_ap(
			body,
			_List_fromArray(
				[
					$author$project$Elm$Review$Text$from('\n')
				])));
};
var $author$project$Elm$Review$Main$sendFixPromptForMultipleFixes = F3(
	function (model, diffs, numberOfFixedErrors) {
		var changedFiles = A2(
			$elm$core$List$map,
			function (_v0) {
				var path = _v0.fr;
				var source = _v0.fE;
				var fixedSource = _v0.aK;
				return {
					aT: A2(
						$elm$core$List$map,
						A2($author$project$Elm$Review$Main$fromReviewError, model.C, model.a_),
						A2(
							$elm$core$Maybe$withDefault,
							_List_Nil,
							A2($elm$core$Dict$get, path, model.W))),
					aK: fixedSource,
					fr: (path === 'GLOBAL ERROR') ? $author$project$Elm$Review$Reporter$Global : $author$project$Elm$Review$Reporter$FilePath(path),
					fE: source
				};
			},
			diffs);
		var confirmationMessage = $author$project$Elm$Review$Main$encodeReport(
			$author$project$Elm$Review$Reporter$formatFixProposals(changedFiles));
		return $author$project$Elm$Review$Main$askConfirmationToFix(
			$elm$json$Json$Encode$object(
				_List_fromArray(
					[
						_Utils_Tuple2('confirmationMessage', confirmationMessage),
						_Utils_Tuple2(
						'changedFiles',
						A2(
							$elm$json$Json$Encode$list,
							$author$project$Elm$Review$Main$encodeChangedFile,
							A2(
								$elm$core$List$map,
								function (file) {
									return {fr: file.fr, fE: file.aK};
								},
								changedFiles))),
						_Utils_Tuple2(
						'count',
						$elm$json$Json$Encode$int(numberOfFixedErrors)),
						_Utils_Tuple2(
						'clearFixLine',
						$elm$json$Json$Encode$bool(model.aw === 2))
					])));
	});
var $author$project$Elm$Review$Main$sendFixPrompt = F2(
	function (model, diffs) {
		var _v0 = $author$project$Elm$Review$Main$numberOfErrors(model.W);
		switch (_v0.$) {
			case 0:
				return _Utils_Tuple2(model, $elm$core$Platform$Cmd$none);
			case 1:
				var filePath = _v0.a;
				var error = _v0.b;
				var _v1 = A2(
					$author$project$Elm$Review$Main$find,
					function (diff_) {
						return _Utils_eq(diff_.fr, filePath);
					},
					diffs);
				if (!_v1.$) {
					var source = _v1.a.fE;
					var fixedSource = _v1.a.aK;
					return _Utils_Tuple2(
						_Utils_update(
							model,
							{
								ah: $author$project$Elm$Review$Main$AwaitingError(error)
							}),
						$author$project$Elm$Review$Main$askConfirmationToFix(
							$elm$json$Json$Encode$object(
								_List_fromArray(
									[
										_Utils_Tuple2(
										'confirmationMessage',
										$author$project$Elm$Review$Main$encodeReport(
											A4(
												$author$project$Elm$Review$Reporter$formatFixProposal,
												model.U,
												{
													fr: $author$project$Elm$Review$Reporter$FilePath(filePath),
													fE: source
												},
												A3($author$project$Elm$Review$Main$fromReviewError, model.C, model.a_, error),
												fixedSource))),
										_Utils_Tuple2(
										'changedFiles',
										A2(
											$elm$json$Json$Encode$list,
											$author$project$Elm$Review$Main$encodeChangedFile,
											_List_fromArray(
												[
													{
													fr: $author$project$Elm$Review$Reporter$FilePath(filePath),
													fE: fixedSource
												}
												]))),
										_Utils_Tuple2(
										'count',
										$elm$json$Json$Encode$int(1))
									]))));
				} else {
					return _Utils_Tuple2(model, $elm$core$Platform$Cmd$none);
				}
			default:
				var numberOfFixedErrors = _v0.a;
				return _Utils_Tuple2(
					_Utils_update(
						model,
						{ah: $author$project$Elm$Review$Main$AwaitingFixAll}),
					A3($author$project$Elm$Review$Main$sendFixPromptForMultipleFixes, model, diffs, numberOfFixedErrors));
		}
	});
var $author$project$Elm$Review$Main$applyFixesAfterReview = F2(
	function (model, allowPrintingSingleFix) {
		var _v0 = A2($author$project$Elm$Review$Main$applyAllFixes, $elm$core$Dict$empty, model);
		if (!_v0.$) {
			var failedFixesDict = _v0.a.cO;
			var newModel = _v0.a.c$;
			var _v1 = A2($author$project$Elm$Review$Main$diff, model.e, newModel.X);
			if (!_v1.b) {
				return A2($author$project$Elm$Review$Main$makeReport, failedFixesDict, newModel);
			} else {
				var diffs = _v1;
				var modelWithOldProject = _Utils_update(
					newModel,
					{e: model.e});
				return allowPrintingSingleFix ? A2($author$project$Elm$Review$Main$sendFixPrompt, modelWithOldProject, diffs) : _Utils_Tuple2(
					_Utils_update(
						modelWithOldProject,
						{ah: $author$project$Elm$Review$Main$AwaitingFixAll}),
					A3(
						$author$project$Elm$Review$Main$sendFixPromptForMultipleFixes,
						modelWithOldProject,
						diffs,
						$author$project$Elm$Review$Main$countErrors(modelWithOldProject.W)));
			}
		} else {
			return _Utils_Tuple2(
				model,
				$author$project$Elm$Review$Main$abort('Got an error while trying to fix all automatic fixes. One of them made the code invalid. I suggest fixing the errors manually, or using `--fix` but with a lot of precaution.'));
		}
	});
var $author$project$Elm$Review$Main$reportOrFix = function (model) {
	var _v0 = model.aw;
	switch (_v0) {
		case 0:
			return A3(
				$author$project$Elm$Review$CliCommunication$timerEnd,
				model.ap,
				'process-errors',
				A2(
					$author$project$Elm$Review$Main$makeReport,
					$elm$core$Dict$empty,
					A3($author$project$Elm$Review$CliCommunication$timerStart, model.ap, 'process-errors', model)));
		case 1:
			return A2($author$project$Elm$Review$Main$applyFixesAfterReview, model, true);
		default:
			return A2($author$project$Elm$Review$Main$applyFixesAfterReview, model, false);
	}
};
var $author$project$Elm$Review$Main$cacheFile = _Platform_outgoingPort('cacheFile', $elm$core$Basics$identity);
var $author$project$Elm$Review$Main$sendFileToBeCached = F2(
	function (project, source) {
		var _v0 = A2(
			$author$project$Elm$Review$Main$find,
			function (module_) {
				return _Utils_eq(module_.fE, source);
			},
			$jfmengels$elm_review$Review$Project$modules(project));
		if (!_v0.$) {
			var ast = _v0.a.eu;
			return $author$project$Elm$Review$Main$cacheFile(
				$elm$json$Json$Encode$object(
					_List_fromArray(
						[
							_Utils_Tuple2(
							'source',
							$elm$json$Json$Encode$string(source)),
							_Utils_Tuple2(
							'ast',
							$author$project$Elm$Review$AstCodec$encode(ast))
						])));
		} else {
			return $elm$core$Platform$Cmd$none;
		}
	});
var $author$project$Elm$Review$Main$suppressionsResponse = _Platform_outgoingPort('suppressionsResponse', $elm$core$Basics$identity);
var $author$project$Elm$Review$Main$update = F2(
	function (msg, model) {
		switch (msg.$) {
			case 0:
				var value = msg.a;
				var _v1 = A2($elm$json$Json$Decode$decodeValue, $author$project$Elm$Review$File$decode, value);
				if (!_v1.$) {
					var rawFile = _v1.a;
					var _v2 = rawFile.eu;
					if (_v2.$ === 1) {
						var project = A2(
							$jfmengels$elm_review$Review$Project$addModule,
							{fr: rawFile.fr, fE: rawFile.fE},
							model.e);
						return _Utils_Tuple2(
							_Utils_update(
								model,
								{e: project}),
							$author$project$Elm$Review$Main$acknowledgeFileReceipt(
								$elm$json$Json$Encode$object(
									_List_fromArray(
										[
											_Utils_Tuple2(
											'path',
											$elm$json$Json$Encode$string(rawFile.fr)),
											_Utils_Tuple2(
											'cacheRequest',
											A2($author$project$Elm$Review$Main$cacheFileRequest, project, rawFile.fE))
										]))));
					} else {
						var ast = _v2.a;
						return _Utils_Tuple2(
							_Utils_update(
								model,
								{
									e: A2(
										$jfmengels$elm_review$Review$Project$addParsedModule,
										{eu: ast, fr: rawFile.fr, fE: rawFile.fE},
										model.e)
								}),
							$author$project$Elm$Review$Main$acknowledgeFileReceipt(
								$elm$json$Json$Encode$object(
									_List_fromArray(
										[
											_Utils_Tuple2(
											'path',
											$elm$json$Json$Encode$string(rawFile.fr)),
											_Utils_Tuple2('cacheRequest', $elm$json$Json$Encode$null)
										]))));
					}
				} else {
					var err = _v1.a;
					return _Utils_Tuple2(
						model,
						$author$project$Elm$Review$Main$abort(
							$elm$json$Json$Decode$errorToString(err)));
				}
			case 1:
				var path = msg.a;
				return _Utils_Tuple2(
					_Utils_update(
						model,
						{
							e: A2($jfmengels$elm_review$Review$Project$removeModule, path, model.e)
						}),
					$elm$core$Platform$Cmd$none);
			case 2:
				var rawElmJson = msg.a;
				var _v3 = A2($elm$json$Json$Decode$decodeValue, $author$project$Elm$Review$Main$elmJsonDecoder, rawElmJson);
				if (!_v3.$) {
					var elmJson = _v3.a;
					return _Utils_Tuple2(
						_Utils_update(
							model,
							{
								e: A2($jfmengels$elm_review$Review$Project$addElmJson, elmJson, model.e)
							}),
						$elm$core$Platform$Cmd$none);
				} else {
					return _Utils_Tuple2(model, $elm$core$Platform$Cmd$none);
				}
			case 3:
				var rawReadme = msg.a;
				var readmeDecoder = A3(
					$elm$json$Json$Decode$map2,
					F2(
						function (path, content) {
							return {br: content, fr: path};
						}),
					A2($elm$json$Json$Decode$field, 'path', $elm$json$Json$Decode$string),
					A2($elm$json$Json$Decode$field, 'content', $elm$json$Json$Decode$string));
				var _v4 = A2($elm$json$Json$Decode$decodeValue, readmeDecoder, rawReadme);
				if (!_v4.$) {
					var readme = _v4.a;
					return _Utils_Tuple2(
						_Utils_update(
							model,
							{
								e: A2($jfmengels$elm_review$Review$Project$addReadme, readme, model.e)
							}),
						$elm$core$Platform$Cmd$none);
				} else {
					return _Utils_Tuple2(model, $elm$core$Platform$Cmd$none);
				}
			case 4:
				var json = msg.a;
				var dependencyDecoder = A4(
					$elm$json$Json$Decode$map3,
					$jfmengels$elm_review$Review$Project$Dependency$create,
					A2($elm$json$Json$Decode$field, 'name', $elm$json$Json$Decode$string),
					A2($elm$json$Json$Decode$field, 'elmJson', $elm$project_metadata_utils$Elm$Project$decoder),
					A2(
						$elm$json$Json$Decode$field,
						'docsJson',
						$elm$json$Json$Decode$list($elm$project_metadata_utils$Elm$Docs$decoder)));
				var dependenciesDecoder = model.bC ? A2(
					$elm$json$Json$Decode$map,
					$elm$core$List$filterMap($elm$core$Basics$identity),
					$elm$json$Json$Decode$list(
						$elm$json$Json$Decode$oneOf(
							_List_fromArray(
								[
									A2($elm$json$Json$Decode$map, $elm$core$Maybe$Just, dependencyDecoder),
									$elm$json$Json$Decode$succeed($elm$core$Maybe$Nothing)
								])))) : $elm$json$Json$Decode$list(dependencyDecoder);
				var _v5 = A2($elm$json$Json$Decode$decodeValue, dependenciesDecoder, json);
				if (_v5.$ === 1) {
					var decodeError = _v5.a;
					return _Utils_Tuple2(
						model,
						A2(
							$elm$core$String$contains,
							'I need a valid module name like',
							$elm$json$Json$Decode$errorToString(decodeError)) ? $author$project$Elm$Review$Main$abortWithDetails(
							{
								e8: 'I encountered an error when reading the dependencies of the project. It seems due to dependencies with modules containing `_` in their names. Unfortunately, this is an error I have no control over and I am waiting in one of the libraries I depend on. What I propose you do, is to re-run elm-review like this:\n\n    elm-review --ignore-problematic-dependencies\n\nThis will ignore the problematic dependencies, and can GIVE YOU INCORRECT RESULTS! This is a temporary measure.\n\nIf I am mistaken about the nature of problem, please open a bug report at https://github.com/jfmengels/node-elm-review/issues:\n\n' + $elm$json$Json$Decode$errorToString(decodeError),
								cc: 'FOUND PROBLEMATIC DEPENDENCIES'
							}) : $author$project$Elm$Review$Main$abortWithDetails(
							{
								e8: 'I encountered an error when reading the dependencies of the project. I suggest opening a bug report at https://github.com/jfmengels/node-elm-review/issues.' + $elm$json$Json$Decode$errorToString(decodeError),
								cc: 'PROBLEM READING DEPENDENCIES'
							}));
				} else {
					var dependencies = _v5.a;
					return _Utils_Tuple2(
						_Utils_update(
							model,
							{
								e: A3(
									$elm$core$List$foldl,
									$jfmengels$elm_review$Review$Project$addDependency,
									$jfmengels$elm_review$Review$Project$removeDependencies(model.e),
									dependencies)
							}),
						$elm$core$Platform$Cmd$none);
				}
			case 5:
				var json = msg.a;
				var _v6 = A2($elm$json$Json$Decode$decodeValue, $author$project$Elm$Review$SuppressedErrors$decoder, json);
				if (_v6.$ === 1) {
					return _Utils_Tuple2(model, $elm$core$Platform$Cmd$none);
				} else {
					var suppressedErrors = _v6.a;
					return _Utils_Tuple2(
						_Utils_update(
							model,
							{
								bK: $author$project$Elm$Review$SuppressedErrors$count(suppressedErrors),
								C: suppressedErrors
							}),
						$elm$core$Platform$Cmd$none);
				}
			case 6:
				var json = msg.a;
				var _v7 = A2($elm$json$Json$Decode$decodeValue, $author$project$Elm$Review$SuppressedErrors$decoder, json);
				if (_v7.$ === 1) {
					return _Utils_Tuple2(model, $elm$core$Platform$Cmd$none);
				} else {
					var suppressedErrors = _v7.a;
					return _Utils_eq(suppressedErrors, model.C) ? _Utils_Tuple2(model, $elm$core$Platform$Cmd$none) : A2(
						$author$project$Elm$Review$Main$makeReport,
						$elm$core$Dict$empty,
						_Utils_update(
							model,
							{
								ab: A3($author$project$Elm$Review$SuppressedErrors$apply, model.an, suppressedErrors, model.bi),
								C: suppressedErrors
							}));
				}
			case 7:
				var json = msg.a;
				var _v8 = A2(
					$elm$json$Json$Decode$decodeValue,
					$elm$json$Json$Decode$dict($elm$json$Json$Decode$string),
					json);
				if (_v8.$ === 1) {
					return _Utils_Tuple2(model, $elm$core$Platform$Cmd$none);
				} else {
					var links = _v8.a;
					return _Utils_Tuple2(
						_Utils_update(
							model,
							{a_: links}),
						$elm$core$Platform$Cmd$none);
				}
			case 8:
				return $author$project$Elm$Review$Main$reportOrFix(
					A3(
						$author$project$Elm$Review$Main$runReview,
						{a6: true},
						model.e,
						_Utils_update(
							model,
							{W: $elm$core$Dict$empty})));
			case 9:
				var project = $jfmengels$elm_review$Review$Project$precomputeModuleGraph(model.e);
				var newModel = A3(
					$author$project$Elm$Review$Main$runReview,
					{a6: false},
					project,
					_Utils_update(
						model,
						{W: $elm$core$Dict$empty, e: project}));
				return _Utils_Tuple2(
					newModel,
					$author$project$Elm$Review$Main$suppressionsResponse(
						A2(
							$author$project$Elm$Review$SuppressedErrors$encode,
							_List_Nil,
							$author$project$Elm$Review$SuppressedErrors$fromReviewErrors(newModel.bi))));
			case 10:
				var confirmation = msg.a;
				var _v9 = A2($elm$json$Json$Decode$decodeValue, $author$project$Elm$Review$Main$confirmationDecoder, confirmation);
				if (!_v9.$) {
					if (!_v9.a.$) {
						var rawFiles = _v9.a.a;
						var previousProject = model.X;
						var newProject = A3($elm$core$List$foldl, $author$project$Elm$Review$Main$addUpdatedFileToProject, previousProject, rawFiles);
						return (_Utils_cmp(
							$elm$core$List$length(
								$jfmengels$elm_review$Review$Project$modulesThatFailedToParse(newProject)),
							$elm$core$List$length(
								$jfmengels$elm_review$Review$Project$modulesThatFailedToParse(previousProject))) > 0) ? _Utils_Tuple2(
							model,
							$author$project$Elm$Review$Main$abort(
								'One file among ' + (A2(
									$elm$core$String$join,
									', ',
									A2(
										$elm$core$List$map,
										function ($) {
											return $.fr;
										},
										rawFiles)) + ' could not be read. An incorrect fix may have been introduced into one of these files...'))) : A2(
							$elm$core$Tuple$mapSecond,
							function (cmd) {
								return $elm$core$Platform$Cmd$batch(
									A2(
										$elm$core$List$cons,
										cmd,
										A2(
											$elm$core$List$map,
											A2(
												$elm$core$Basics$composeR,
												function ($) {
													return $.fE;
												},
												$author$project$Elm$Review$Main$sendFileToBeCached(newProject)),
											rawFiles)));
							},
							$author$project$Elm$Review$Main$reportOrFix(
								A3(
									$author$project$Elm$Review$Main$runReview,
									{a6: true},
									newProject,
									_Utils_update(
										model,
										{bv: true, W: $elm$core$Dict$empty, e: newProject, aE: model.by}))));
					} else {
						var _v10 = _v9.a;
						var _v11 = model.ah;
						switch (_v11.$) {
							case 1:
								var error = _v11.a;
								return $author$project$Elm$Review$Main$reportOrFix(
									A3(
										$author$project$Elm$Review$Main$runReview,
										{a6: true},
										model.e,
										A2(
											$author$project$Elm$Review$Main$refuseError,
											error,
											_Utils_update(
												model,
												{ah: $author$project$Elm$Review$Main$NotAwaiting, X: model.e}))));
							case 2:
								return A2(
									$author$project$Elm$Review$Main$makeReport,
									$elm$core$Dict$empty,
									A3(
										$author$project$Elm$Review$Main$runReview,
										{a6: false},
										model.e,
										_Utils_update(
											model,
											{ah: $author$project$Elm$Review$Main$NotAwaiting, X: model.e})));
							default:
								return $author$project$Elm$Review$Main$fixOneByOne(model);
						}
					}
				} else {
					var err = _v9.a;
					return _Utils_Tuple2(
						model,
						$author$project$Elm$Review$Main$abort(
							$elm$json$Json$Decode$errorToString(err)));
				}
			default:
				return _Utils_Tuple2(
					model,
					$author$project$Elm$Review$Main$fixConfirmationStatus(
						!_Utils_eq(model.ah, $author$project$Elm$Review$Main$NotAwaiting)));
		}
	});
var $elm$core$Platform$worker = _Platform_worker;
var $author$project$Elm$Review$Main$main = $elm$core$Platform$worker(
	{
		e4: $author$project$Elm$Review$Main$init,
		fK: function (_v0) {
			return $author$project$Elm$Review$Main$subscriptions;
		},
		fS: $author$project$Elm$Review$Main$update
	});
_Platform_export({'Elm':{'Review':{'Main':{'init':$author$project$Elm$Review$Main$main($elm$json$Json$Decode$value)(0)}}}});}(this));