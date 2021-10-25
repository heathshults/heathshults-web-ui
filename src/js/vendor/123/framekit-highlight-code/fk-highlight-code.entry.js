const h = window.FramekitHighlightCode.h;

var commonjsGlobal = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

function commonjsRequire () {
	throw new Error('Dynamic requires are not currently supported by rollup-plugin-commonjs');
}

function unwrapExports (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x.default : x;
}

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

function getCjsExportFromNamespace (n) {
	return n && n.default || n;
}

var prism = createCommonjsModule(function (module) {
/* **********************************************
     Begin prism-core.js
********************************************** */

var _self = (typeof window !== 'undefined')
	? window   // if in browser
	: (
		(typeof WorkerGlobalScope !== 'undefined' && self instanceof WorkerGlobalScope)
		? self // if in worker
		: {}   // if in node js
	);

/**
 * Prism: Lightweight, robust, elegant syntax highlighting
 * MIT license http://www.opensource.org/licenses/mit-license.php/
 * @author Lea Verou http://lea.verou.me
 */

var Prism = (function(){

// Private helper vars
var lang = /\blang(?:uage)?-([\w-]+)\b/i;
var uniqueId = 0;

var _ = _self.Prism = {
	manual: _self.Prism && _self.Prism.manual,
	disableWorkerMessageHandler: _self.Prism && _self.Prism.disableWorkerMessageHandler,
	util: {
		encode: function (tokens) {
			if (tokens instanceof Token) {
				return new Token(tokens.type, _.util.encode(tokens.content), tokens.alias);
			} else if (_.util.type(tokens) === 'Array') {
				return tokens.map(_.util.encode);
			} else {
				return tokens.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/\u00a0/g, ' ');
			}
		},

		type: function (o) {
			return Object.prototype.toString.call(o).match(/\[object (\w+)\]/)[1];
		},

		objId: function (obj) {
			if (!obj['__id']) {
				Object.defineProperty(obj, '__id', { value: ++uniqueId });
			}
			return obj['__id'];
		},

		// Deep clone a language definition (e.g. to extend it)
		clone: function (o, visited) {
			var type = _.util.type(o);
			visited = visited || {};

			switch (type) {
				case 'Object':
					if (visited[_.util.objId(o)]) {
						return visited[_.util.objId(o)];
					}
					var clone = {};
					visited[_.util.objId(o)] = clone;

					for (var key in o) {
						if (o.hasOwnProperty(key)) {
							clone[key] = _.util.clone(o[key], visited);
						}
					}

					return clone;

				case 'Array':
					if (visited[_.util.objId(o)]) {
						return visited[_.util.objId(o)];
					}
					var clone = [];
					visited[_.util.objId(o)] = clone;

					o.forEach(function (v, i) {
						clone[i] = _.util.clone(v, visited);
					});

					return clone;
			}

			return o;
		}
	},

	languages: {
		extend: function (id, redef) {
			var lang = _.util.clone(_.languages[id]);

			for (var key in redef) {
				lang[key] = redef[key];
			}

			return lang;
		},

		/**
		 * Insert a token before another token in a language literal
		 * As this needs to recreate the object (we cannot actually insert before keys in object literals),
		 * we cannot just provide an object, we need anobject and a key.
		 * @param inside The key (or language id) of the parent
		 * @param before The key to insert before. If not provided, the function appends instead.
		 * @param insert Object with the key/value pairs to insert
		 * @param root The object that contains `inside`. If equal to Prism.languages, it can be omitted.
		 */
		insertBefore: function (inside, before, insert, root) {
			root = root || _.languages;
			var grammar = root[inside];

			if (arguments.length == 2) {
				insert = arguments[1];

				for (var newToken in insert) {
					if (insert.hasOwnProperty(newToken)) {
						grammar[newToken] = insert[newToken];
					}
				}

				return grammar;
			}

			var ret = {};

			for (var token in grammar) {

				if (grammar.hasOwnProperty(token)) {

					if (token == before) {

						for (var newToken in insert) {

							if (insert.hasOwnProperty(newToken)) {
								ret[newToken] = insert[newToken];
							}
						}
					}

					ret[token] = grammar[token];
				}
			}

			// Update references in other language definitions
			_.languages.DFS(_.languages, function(key, value) {
				if (value === root[inside] && key != inside) {
					this[key] = ret;
				}
			});

			return root[inside] = ret;
		},

		// Traverse a language definition with Depth First Search
		DFS: function(o, callback, type, visited) {
			visited = visited || {};
			for (var i in o) {
				if (o.hasOwnProperty(i)) {
					callback.call(o, i, o[i], type || i);

					if (_.util.type(o[i]) === 'Object' && !visited[_.util.objId(o[i])]) {
						visited[_.util.objId(o[i])] = true;
						_.languages.DFS(o[i], callback, null, visited);
					}
					else if (_.util.type(o[i]) === 'Array' && !visited[_.util.objId(o[i])]) {
						visited[_.util.objId(o[i])] = true;
						_.languages.DFS(o[i], callback, i, visited);
					}
				}
			}
		}
	},
	plugins: {},

	highlightAll: function(async, callback) {
		_.highlightAllUnder(document, async, callback);
	},

	highlightAllUnder: function(container, async, callback) {
		var env = {
			callback: callback,
			selector: 'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'
		};

		_.hooks.run("before-highlightall", env);

		var elements = env.elements || container.querySelectorAll(env.selector);

		for (var i=0, element; element = elements[i++];) {
			_.highlightElement(element, async === true, env.callback);
		}
	},

	highlightElement: function(element, async, callback) {
		// Find language
		var language, grammar, parent = element;

		while (parent && !lang.test(parent.className)) {
			parent = parent.parentNode;
		}

		if (parent) {
			language = (parent.className.match(lang) || [,''])[1].toLowerCase();
			grammar = _.languages[language];
		}

		// Set language on the element, if not present
		element.className = element.className.replace(lang, '').replace(/\s+/g, ' ') + ' language-' + language;

		if (element.parentNode) {
			// Set language on the parent, for styling
			parent = element.parentNode;

			if (/pre/i.test(parent.nodeName)) {
				parent.className = parent.className.replace(lang, '').replace(/\s+/g, ' ') + ' language-' + language;
			}
		}

		var code = element.textContent;

		var env = {
			element: element,
			language: language,
			grammar: grammar,
			code: code
		};

		_.hooks.run('before-sanity-check', env);

		if (!env.code || !env.grammar) {
			if (env.code) {
				_.hooks.run('before-highlight', env);
				env.element.textContent = env.code;
				_.hooks.run('after-highlight', env);
			}
			_.hooks.run('complete', env);
			return;
		}

		_.hooks.run('before-highlight', env);

		if (async && _self.Worker) {
			var worker = new Worker(_.filename);

			worker.onmessage = function(evt) {
				env.highlightedCode = evt.data;

				_.hooks.run('before-insert', env);

				env.element.innerHTML = env.highlightedCode;

				callback && callback.call(env.element);
				_.hooks.run('after-highlight', env);
				_.hooks.run('complete', env);
			};

			worker.postMessage(JSON.stringify({
				language: env.language,
				code: env.code,
				immediateClose: true
			}));
		}
		else {
			env.highlightedCode = _.highlight(env.code, env.grammar, env.language);

			_.hooks.run('before-insert', env);

			env.element.innerHTML = env.highlightedCode;

			callback && callback.call(element);

			_.hooks.run('after-highlight', env);
			_.hooks.run('complete', env);
		}
	},

	highlight: function (text, grammar, language) {
		var env = {
			code: text,
			grammar: grammar,
			language: language
		};
		_.hooks.run('before-tokenize', env);
		env.tokens = _.tokenize(env.code, env.grammar);
		_.hooks.run('after-tokenize', env);
		return Token.stringify(_.util.encode(env.tokens), env.language);
	},

	matchGrammar: function (text, strarr, grammar, index, startPos, oneshot, target) {
		var Token = _.Token;

		for (var token in grammar) {
			if(!grammar.hasOwnProperty(token) || !grammar[token]) {
				continue;
			}

			if (token == target) {
				return;
			}

			var patterns = grammar[token];
			patterns = (_.util.type(patterns) === "Array") ? patterns : [patterns];

			for (var j = 0; j < patterns.length; ++j) {
				var pattern = patterns[j],
					inside = pattern.inside,
					lookbehind = !!pattern.lookbehind,
					greedy = !!pattern.greedy,
					lookbehindLength = 0,
					alias = pattern.alias;

				if (greedy && !pattern.pattern.global) {
					// Without the global flag, lastIndex won't work
					var flags = pattern.pattern.toString().match(/[imuy]*$/)[0];
					pattern.pattern = RegExp(pattern.pattern.source, flags + "g");
				}

				pattern = pattern.pattern || pattern;

				// Don’t cache length as it changes during the loop
				for (var i = index, pos = startPos; i < strarr.length; pos += strarr[i].length, ++i) {

					var str = strarr[i];

					if (strarr.length > text.length) {
						// Something went terribly wrong, ABORT, ABORT!
						return;
					}

					if (str instanceof Token) {
						continue;
					}

					if (greedy && i != strarr.length - 1) {
						pattern.lastIndex = pos;
						var match = pattern.exec(text);
						if (!match) {
							break;
						}

						var from = match.index + (lookbehind ? match[1].length : 0),
						    to = match.index + match[0].length,
						    k = i,
						    p = pos;

						for (var len = strarr.length; k < len && (p < to || (!strarr[k].type && !strarr[k - 1].greedy)); ++k) {
							p += strarr[k].length;
							// Move the index i to the element in strarr that is closest to from
							if (from >= p) {
								++i;
								pos = p;
							}
						}

						// If strarr[i] is a Token, then the match starts inside another Token, which is invalid
						if (strarr[i] instanceof Token) {
							continue;
						}

						// Number of tokens to delete and replace with the new match
						delNum = k - i;
						str = text.slice(pos, p);
						match.index -= pos;
					} else {
						pattern.lastIndex = 0;

						var match = pattern.exec(str),
							delNum = 1;
					}

					if (!match) {
						if (oneshot) {
							break;
						}

						continue;
					}

					if(lookbehind) {
						lookbehindLength = match[1] ? match[1].length : 0;
					}

					var from = match.index + lookbehindLength,
					    match = match[0].slice(lookbehindLength),
					    to = from + match.length,
					    before = str.slice(0, from),
					    after = str.slice(to);

					var args = [i, delNum];

					if (before) {
						++i;
						pos += before.length;
						args.push(before);
					}

					var wrapped = new Token(token, inside? _.tokenize(match, inside) : match, alias, match, greedy);

					args.push(wrapped);

					if (after) {
						args.push(after);
					}

					Array.prototype.splice.apply(strarr, args);

					if (delNum != 1)
						_.matchGrammar(text, strarr, grammar, i, pos, true, token);

					if (oneshot)
						break;
				}
			}
		}
	},

	tokenize: function(text, grammar, language) {
		var strarr = [text];

		var rest = grammar.rest;

		if (rest) {
			for (var token in rest) {
				grammar[token] = rest[token];
			}

			delete grammar.rest;
		}

		_.matchGrammar(text, strarr, grammar, 0, 0, false);

		return strarr;
	},

	hooks: {
		all: {},

		add: function (name, callback) {
			var hooks = _.hooks.all;

			hooks[name] = hooks[name] || [];

			hooks[name].push(callback);
		},

		run: function (name, env) {
			var callbacks = _.hooks.all[name];

			if (!callbacks || !callbacks.length) {
				return;
			}

			for (var i=0, callback; callback = callbacks[i++];) {
				callback(env);
			}
		}
	}
};

var Token = _.Token = function(type, content, alias, matchedStr, greedy) {
	this.type = type;
	this.content = content;
	this.alias = alias;
	// Copy of the full string this token was created from
	this.length = (matchedStr || "").length|0;
	this.greedy = !!greedy;
};

Token.stringify = function(o, language, parent) {
	if (typeof o == 'string') {
		return o;
	}

	if (_.util.type(o) === 'Array') {
		return o.map(function(element) {
			return Token.stringify(element, language, o);
		}).join('');
	}

	var env = {
		type: o.type,
		content: Token.stringify(o.content, language, parent),
		tag: 'span',
		classes: ['token', o.type],
		attributes: {},
		language: language,
		parent: parent
	};

	if (o.alias) {
		var aliases = _.util.type(o.alias) === 'Array' ? o.alias : [o.alias];
		Array.prototype.push.apply(env.classes, aliases);
	}

	_.hooks.run('wrap', env);

	var attributes = Object.keys(env.attributes).map(function(name) {
		return name + '="' + (env.attributes[name] || '').replace(/"/g, '&quot;') + '"';
	}).join(' ');

	return '<' + env.tag + ' class="' + env.classes.join(' ') + '"' + (attributes ? ' ' + attributes : '') + '>' + env.content + '</' + env.tag + '>';

};

if (!_self.document) {
	if (!_self.addEventListener) {
		// in Node.js
		return _self.Prism;
	}

	if (!_.disableWorkerMessageHandler) {
		// In worker
		_self.addEventListener('message', function (evt) {
			var message = JSON.parse(evt.data),
				lang = message.language,
				code = message.code,
				immediateClose = message.immediateClose;

			_self.postMessage(_.highlight(code, _.languages[lang], lang));
			if (immediateClose) {
				_self.close();
			}
		}, false);
	}

	return _self.Prism;
}

//Get current script and highlight
var script = document.currentScript || [].slice.call(document.getElementsByTagName("script")).pop();

if (script) {
	_.filename = script.src;

	if (!_.manual && !script.hasAttribute('data-manual')) {
		if(document.readyState !== "loading") {
			if (window.requestAnimationFrame) {
				window.requestAnimationFrame(_.highlightAll);
			} else {
				window.setTimeout(_.highlightAll, 16);
			}
		}
		else {
			document.addEventListener('DOMContentLoaded', _.highlightAll);
		}
	}
}

return _self.Prism;

})();

if ('object' !== 'undefined' && module.exports) {
	module.exports = Prism;
}

// hack for components to work correctly in node.js
if (typeof commonjsGlobal !== 'undefined') {
	commonjsGlobal.Prism = Prism;
}


/* **********************************************
     Begin prism-markup.js
********************************************** */

Prism.languages.markup = {
	'comment': /<!--[\s\S]*?-->/,
	'prolog': /<\?[\s\S]+?\?>/,
	'doctype': /<!DOCTYPE[\s\S]+?>/i,
	'cdata': /<!\[CDATA\[[\s\S]*?]]>/i,
	'tag': {
		pattern: /<\/?(?!\d)[^\s>\/=$<%]+(?:\s+[^\s>\/=]+(?:=(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s'">=]+))?)*\s*\/?>/i,
		greedy: true,
		inside: {
			'tag': {
				pattern: /^<\/?[^\s>\/]+/i,
				inside: {
					'punctuation': /^<\/?/,
					'namespace': /^[^\s>\/:]+:/
				}
			},
			'attr-value': {
				pattern: /=(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s'">=]+)/i,
				inside: {
					'punctuation': [
						/^=/,
						{
							pattern: /(^|[^\\])["']/,
							lookbehind: true
						}
					]
				}
			},
			'punctuation': /\/?>/,
			'attr-name': {
				pattern: /[^\s>\/]+/,
				inside: {
					'namespace': /^[^\s>\/:]+:/
				}
			}

		}
	},
	'entity': /&#?[\da-z]{1,8};/i
};

Prism.languages.markup['tag'].inside['attr-value'].inside['entity'] =
	Prism.languages.markup['entity'];

// Plugin to make entity title show the real entity, idea by Roman Komarov
Prism.hooks.add('wrap', function(env) {

	if (env.type === 'entity') {
		env.attributes['title'] = env.content.replace(/&amp;/, '&');
	}
});

Prism.languages.xml = Prism.languages.markup;
Prism.languages.html = Prism.languages.markup;
Prism.languages.mathml = Prism.languages.markup;
Prism.languages.svg = Prism.languages.markup;


/* **********************************************
     Begin prism-css.js
********************************************** */

Prism.languages.css = {
	'comment': /\/\*[\s\S]*?\*\//,
	'atrule': {
		pattern: /@[\w-]+?.*?(?:;|(?=\s*\{))/i,
		inside: {
			'rule': /@[\w-]+/
			// See rest below
		}
	},
	'url': /url\((?:(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1|.*?)\)/i,
	'selector': /[^{}\s][^{};]*?(?=\s*\{)/,
	'string': {
		pattern: /("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
		greedy: true
	},
	'property': /[-_a-z\xA0-\uFFFF][-\w\xA0-\uFFFF]*(?=\s*:)/i,
	'important': /\B!important\b/i,
	'function': /[-a-z0-9]+(?=\()/i,
	'punctuation': /[(){};:]/
};

Prism.languages.css['atrule'].inside.rest = Prism.languages.css;

if (Prism.languages.markup) {
	Prism.languages.insertBefore('markup', 'tag', {
		'style': {
			pattern: /(<style[\s\S]*?>)[\s\S]*?(?=<\/style>)/i,
			lookbehind: true,
			inside: Prism.languages.css,
			alias: 'language-css',
			greedy: true
		}
	});

	Prism.languages.insertBefore('inside', 'attr-value', {
		'style-attr': {
			pattern: /\s*style=("|')(?:\\[\s\S]|(?!\1)[^\\])*\1/i,
			inside: {
				'attr-name': {
					pattern: /^\s*style/i,
					inside: Prism.languages.markup.tag.inside
				},
				'punctuation': /^\s*=\s*['"]|['"]\s*$/,
				'attr-value': {
					pattern: /.+/i,
					inside: Prism.languages.css
				}
			},
			alias: 'language-css'
		}
	}, Prism.languages.markup.tag);
}

/* **********************************************
     Begin prism-clike.js
********************************************** */

Prism.languages.clike = {
	'comment': [
		{
			pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,
			lookbehind: true
		},
		{
			pattern: /(^|[^\\:])\/\/.*/,
			lookbehind: true,
			greedy: true
		}
	],
	'string': {
		pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
		greedy: true
	},
	'class-name': {
		pattern: /((?:\b(?:class|interface|extends|implements|trait|instanceof|new)\s+)|(?:catch\s+\())[\w.\\]+/i,
		lookbehind: true,
		inside: {
			punctuation: /[.\\]/
		}
	},
	'keyword': /\b(?:if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,
	'boolean': /\b(?:true|false)\b/,
	'function': /[a-z0-9_]+(?=\()/i,
	'number': /\b0x[\da-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:e[+-]?\d+)?/i,
	'operator': /--?|\+\+?|!=?=?|<=?|>=?|==?=?|&&?|\|\|?|\?|\*|\/|~|\^|%/,
	'punctuation': /[{}[\];(),.:]/
};


/* **********************************************
     Begin prism-javascript.js
********************************************** */

Prism.languages.javascript = Prism.languages.extend('clike', {
	'keyword': /\b(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|var|void|while|with|yield)\b/,
	'number': /\b(?:0[xX][\dA-Fa-f]+|0[bB][01]+|0[oO][0-7]+|NaN|Infinity)\b|(?:\b\d+\.?\d*|\B\.\d+)(?:[Ee][+-]?\d+)?/,
	// Allow for all non-ASCII characters (See http://stackoverflow.com/a/2008444)
	'function': /[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*\()/i,
	'operator': /-[-=]?|\+[+=]?|!=?=?|<<?=?|>>?>?=?|=(?:==?|>)?|&[&=]?|\|[|=]?|\*\*?=?|\/=?|~|\^=?|%=?|\?|\.{3}/
});

Prism.languages.insertBefore('javascript', 'keyword', {
	'regex': {
		pattern: /((?:^|[^$\w\xA0-\uFFFF."'\])\s])\s*)\/(\[[^\]\r\n]+]|\\.|[^/\\\[\r\n])+\/[gimyu]{0,5}(?=\s*($|[\r\n,.;})\]]))/,
		lookbehind: true,
		greedy: true
	},
	// This must be declared before keyword because we use "function" inside the look-forward
	'function-variable': {
		pattern: /[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*=\s*(?:function\b|(?:\([^()]*\)|[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)\s*=>))/i,
		alias: 'function'
	},
	'constant': /\b[A-Z][A-Z\d_]*\b/
});

Prism.languages.insertBefore('javascript', 'string', {
	'template-string': {
		pattern: /`(?:\\[\s\S]|\${[^}]+}|[^\\`])*`/,
		greedy: true,
		inside: {
			'interpolation': {
				pattern: /\${[^}]+}/,
				inside: {
					'interpolation-punctuation': {
						pattern: /^\${|}$/,
						alias: 'punctuation'
					},
					rest: null // See below
				}
			},
			'string': /[\s\S]+/
		}
	}
});
Prism.languages.javascript['template-string'].inside['interpolation'].inside.rest = Prism.languages.javascript;

if (Prism.languages.markup) {
	Prism.languages.insertBefore('markup', 'tag', {
		'script': {
			pattern: /(<script[\s\S]*?>)[\s\S]*?(?=<\/script>)/i,
			lookbehind: true,
			inside: Prism.languages.javascript,
			alias: 'language-javascript',
			greedy: true
		}
	});
}

Prism.languages.js = Prism.languages.javascript;


/* **********************************************
     Begin prism-file-highlight.js
********************************************** */

(function () {
	if (typeof self === 'undefined' || !self.Prism || !self.document || !document.querySelector) {
		return;
	}

	self.Prism.fileHighlight = function() {

		var Extensions = {
			'js': 'javascript',
			'py': 'python',
			'rb': 'ruby',
			'ps1': 'powershell',
			'psm1': 'powershell',
			'sh': 'bash',
			'bat': 'batch',
			'h': 'c',
			'tex': 'latex'
		};

		Array.prototype.slice.call(document.querySelectorAll('pre[data-src]')).forEach(function (pre) {
			var src = pre.getAttribute('data-src');

			var language, parent = pre;
			var lang = /\blang(?:uage)?-([\w-]+)\b/i;
			while (parent && !lang.test(parent.className)) {
				parent = parent.parentNode;
			}

			if (parent) {
				language = (pre.className.match(lang) || [, ''])[1];
			}

			if (!language) {
				var extension = (src.match(/\.(\w+)$/) || [, ''])[1];
				language = Extensions[extension] || extension;
			}

			var code = document.createElement('code');
			code.className = 'language-' + language;

			pre.textContent = '';

			code.textContent = 'Loading…';

			pre.appendChild(code);

			var xhr = new XMLHttpRequest();

			xhr.open('GET', src, true);

			xhr.onreadystatechange = function () {
				if (xhr.readyState == 4) {

					if (xhr.status < 400 && xhr.responseText) {
						code.textContent = xhr.responseText;

						Prism.highlightElement(code);
					}
					else if (xhr.status >= 400) {
						code.textContent = '✖ Error ' + xhr.status + ' while fetching file: ' + xhr.statusText;
					}
					else {
						code.textContent = '✖ Error: File does not exist or is empty';
					}
				}
			};

			xhr.send(null);
		});

		if (Prism.plugins.toolbar) {
			Prism.plugins.toolbar.registerButton('download-file', function (env) {
				var pre = env.element.parentNode;
				if (!pre || !/pre/i.test(pre.nodeName) || !pre.hasAttribute('data-src') || !pre.hasAttribute('data-download-link')) {
					return;
				}
				var src = pre.getAttribute('data-src');
				var a = document.createElement('a');
				a.textContent = pre.getAttribute('data-download-link-label') || 'Download';
				a.setAttribute('download', '');
				a.href = src;
				return a;
			});
		}

	};

	document.addEventListener('DOMContentLoaded', self.Prism.fileHighlight);

})();
});

class FramekitHighlightCode {
    constructor() {
        this.anchor = '// Framekit';
        this.anchorZoom = '// FramekitZoom';
        this.hideAnchor = true;
        this.language = 'javascript';
        this.anchorOffsetTop = 0;
    }
    async componentDidLoad() {
        await this.loadLanguage();
        if (this.language === 'javascript') {
            await this.fetchOrParse();
        }
    }
    async languageLoaded($event) {
        if (!$event || !$event.detail) {
            return;
        }
        if (this.language && this.language !== 'javascript' && $event.detail === this.language) {
            await this.fetchOrParse();
        }
    }
    async fetchOrParse() {
        if (this.src) {
            await this.fetchCode();
        }
        else {
            await this.parseSlottedCode();
        }
    }
    loadLanguage() {
        return new Promise(async (resolve) => {
            if (!document || !this.language || this.language === '' || this.language === 'javascript') {
                resolve();
                return;
            }
            const scripts = document.querySelector('[framekit-prism=\'' + this.language + '\']');
            if (scripts) {
                resolve();
                return;
            }
            const script = document.createElement('script');
            script.onload = async () => {
                script.setAttribute('framekit-prism-loaded', this.language);
                this.prismLanguageLoaded.emit(this.language);
            };
            script.src = 'https://unpkg.com/prismjs@latest/components/prism-' + this.language + '.js';
            script.setAttribute('framekit-prism', this.language);
            script.defer = true;
            document.head.appendChild(script);
            resolve();
        });
    }
    load() {
        return new Promise(async (resolve) => {
            if (!this.language || this.language === '') {
                resolve();
                return;
            }
            if (this.language === 'javascript') {
                await this.fetchOrParse();
                resolve();
                return;
            }
            if (document.querySelector('[framekit-prism-loaded=\'' + this.language + '\']')) {
                await this.fetchOrParse();
            }
            else {
                await this.loadLanguage();
            }
            resolve();
        });
    }
    parseSlottedCode() {
        const code = this.el.querySelector('[slot=\'code\']');
        if (code) {
            return this.parseCode(code.innerText);
        }
        else {
            return new Promise((resolve) => {
                resolve();
            });
        }
    }
    async fetchCode() {
        if (!this.src) {
            return;
        }
        let fetchedCode;
        try {
            const response = await fetch(this.src);
            fetchedCode = await response.text();
            await this.parseCode(fetchedCode);
        }
        catch (e) {
            // Prism might not be able to parse the code for the selected language
            const container = this.el.shadowRoot.querySelector('div.fk-highlight-code-container');
            if (container && fetchedCode) {
                container.children[0].innerHTML = fetchedCode;
            }
        }
    }
    parseCode(code) {
        return new Promise(async (resolve, reject) => {
            const container = this.el.shadowRoot.querySelector('div.fk-highlight-code-container');
            if (container) {
                try {
                    const highlightedCode = prism.highlight(code, prism.languages[this.language]);
                    container.children[0].innerHTML = highlightedCode;
                    await this.addAnchors();
                    await this.addHighlight();
                    resolve();
                }
                catch (err) {
                    reject(err);
                }
            }
        });
    }
    addAnchors() {
        return new Promise((resolve) => {
            const elements = this.el.shadowRoot.querySelectorAll('span.comment');
            if (elements) {
                const elementsArray = Array.from(elements);
                const anchors = elementsArray.filter((element) => {
                    return this.hasLineAnchor(element.innerHTML);
                });
                if (anchors) {
                    anchors.forEach((anchor) => {
                        anchor.classList.add('fk-highlight-code-anchor');
                        if (this.hideAnchor) {
                            anchor.classList.add('fk-highlight-code-anchor-hidden');
                        }
                    });
                }
            }
            resolve();
        });
    }
    hasLineAnchor(line) {
        return line && this.anchor &&
            line.indexOf('@Prop') === -1 &&
            line.split(' ').join('').indexOf(this.anchor.split(' ').join('')) > -1;
    }
    addHighlight() {
        return new Promise(async (resolve) => {
            if (this.highlightLines && this.highlightLines.length > 0) {
                const rows = await this.findRowsToHighlight();
                if (rows && rows.length > 0) {
                    const containerCode = this.el.shadowRoot.querySelector('code');
                    if (containerCode && containerCode.hasChildNodes()) {
                        const elements = Array.prototype.slice.call(containerCode.childNodes);
                        let rowIndex = -1;
                        let lastOffsetTop = -1;
                        let offsetHeight = -1;
                        elements.forEach((element) => {
                            let editElement;
                            // We need to convert text entries to an element in order to be able to style it
                            if (element.nodeName === '#text') {
                                const span = document.createElement('span');
                                if (element.previousElementSibling) {
                                    element.previousElementSibling.insertAdjacentElement('afterend', span);
                                }
                                else {
                                    element.parentNode.prepend(span);
                                }
                                span.appendChild(element);
                                editElement = span;
                            }
                            else {
                                editElement = element;
                            }
                            // We try to find the row index with the offset of the element
                            rowIndex = editElement.offsetTop > lastOffsetTop ? (rowIndex + 1) : rowIndex;
                            lastOffsetTop = editElement.offsetTop;
                            // For some reason, some converted text element are displayed on two lines, that's why we should consider the 2nd one as index
                            offsetHeight = offsetHeight === -1 || offsetHeight > editElement.offsetHeight ? editElement.offsetHeight : offsetHeight;
                            const rowsIndexToCompare = editElement.offsetHeight > offsetHeight ? (rowIndex + 1) : rowIndex;
                            if (rows.indexOf(rowsIndexToCompare) > -1) {
                                editElement.classList.add('fk-highlight-code-line');
                            }
                        });
                    }
                }
            }
            resolve();
        });
    }
    findRowsToHighlight() {
        return new Promise((resolve) => {
            let results = [];
            const rows = this.highlightLines.split(' ');
            if (rows && rows.length > 0) {
                rows.forEach((row) => {
                    const index = row.split(',');
                    if (index && index.length >= 1) {
                        const start = parseInt(index[0], 0);
                        const end = parseInt(index[1], 0);
                        for (let i = start; i <= end; i++) {
                            results.push(i);
                        }
                    }
                });
            }
            resolve(results);
        });
    }
    findNextAnchor(enter) {
        return new Promise(async (resolve) => {
            const elements = this.el.shadowRoot.querySelectorAll('span.fk-highlight-code-anchor');
            if (elements) {
                const elementsArray = enter ? Array.from(elements) : Array.from(elements).reverse();
                const anchor = elementsArray.find((element) => {
                    return enter ? element.offsetTop > this.anchorOffsetTop : element.offsetTop < this.anchorOffsetTop;
                });
                if (anchor) {
                    this.anchorOffsetTop = anchor.offsetTop;
                    resolve({
                        offsetTop: anchor.offsetTop,
                        hasLineZoom: this.hasLineZoom(anchor.textContent)
                    });
                }
                else if (!enter) {
                    const elementCode = this.el.shadowRoot.querySelector('code');
                    if (elementCode && elementCode.firstElementChild) {
                        this.anchorOffsetTop = 0;
                        resolve({
                            offsetTop: 0,
                            hasLineZoom: false
                        });
                    }
                    else {
                        resolve(null);
                    }
                }
                else {
                    resolve(null);
                }
            }
            else {
                resolve(null);
            }
        });
    }
    zoomCode(zoom) {
        return new Promise((resolve) => {
            const container = this.el.shadowRoot.querySelector('div.fk-highlight-code-container');
            if (container) {
                container.style.setProperty('--fk-highlight-code-zoom', zoom ? '1.3' : '1');
            }
            resolve();
        });
    }
    hasLineZoom(line) {
        return line && this.anchorZoom &&
            line.indexOf('@Prop') === -1 &&
            line.split(' ').join('').indexOf(this.anchorZoom.split(' ').join('')) > -1;
    }
    render() {
        return h("div", { class: "fk-highlight-code-container" },
            h("code", null),
            h("slot", { name: "code" }));
    }
    static get is() { return "fk-highlight-code"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return {
        "anchor": {
            "type": String,
            "attr": "anchor"
        },
        "anchorZoom": {
            "type": String,
            "attr": "anchor-zoom"
        },
        "el": {
            "elementRef": true
        },
        "findNextAnchor": {
            "method": true
        },
        "hideAnchor": {
            "type": Boolean,
            "attr": "hide-anchor"
        },
        "highlightLines": {
            "type": String,
            "attr": "highlight-lines"
        },
        "language": {
            "type": String,
            "attr": "language",
            "watchCallbacks": ["loadLanguage"]
        },
        "load": {
            "method": true
        },
        "src": {
            "type": String,
            "attr": "src"
        },
        "zoomCode": {
            "method": true
        }
    }; }
    static get events() { return [{
            "name": "prismLanguageLoaded",
            "method": "prismLanguageLoaded",
            "bubbles": true,
            "cancelable": true,
            "composed": true
        }]; }
    static get listeners() { return [{
            "name": "document:prismLanguageLoaded",
            "method": "languageLoaded"
        }]; }
    static get style() { return "/**\n * prism.js default theme for JavaScript, CSS and HTML\n * Based on dabblet (http://dabblet.com)\n * \@author Lea Verou\n */\n\ncode[class*=\"language-\"],\npre[class*=\"language-\"] {\n	color: whitesmoke;\n	background: none;\n	text-shadow: 0 1px white;\n	font-family: Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;\n	text-align: left;\n	white-space: pre;\n	word-spacing: normal;\n	word-break: normal;\n	word-wrap: normal;\n	line-height: 1.5;\n\n	-moz-tab-size: 4;\n	-o-tab-size: 4;\n	tab-size: 4;\n\n	-webkit-hyphens: none;\n	-moz-hyphens: none;\n	-ms-hyphens: none;\n	hyphens: none;\n}\n\npre[class*=\"language-\"]::-moz-selection, pre[class*=\"language-\"] ::-moz-selection,\ncode[class*=\"language-\"]::-moz-selection, code[class*=\"language-\"] ::-moz-selection {\n	text-shadow: none;\n	background: #b3d4fc;\n}\n\npre[class*=\"language-\"]::selection, pre[class*=\"language-\"] ::selection,\ncode[class*=\"language-\"]::selection, code[class*=\"language-\"] ::selection {\n	text-shadow: none;\n	background: #b3d4fc;\n}\n\n.fk-highlight-code-container code {color: whitesmoke;}\n\n\@media print {\n	code[class*=\"language-\"],\n	pre[class*=\"language-\"] {\n		text-shadow: none;\n	}\n}\n\n/* Code blocks */\npre[class*=\"language-\"] {\n	padding: 1em;\n	margin: .5em 0;\n	overflow: auto;\n}\n\n:not(pre) > code[class*=\"language-\"],\npre[class*=\"language-\"] {\n	background: #f5f2f0;\n}\n\n/* Inline code */\n:not(pre) > code[class*=\"language-\"] {\n	padding: .1em;\n	border-radius: .3em;\n	white-space: normal;\n}\n\n.token.comment,\n.token.prolog,\n.token.doctype,\n.token.cdata {\n	color: slategray;\n}\n\n.token.punctuation {\n	color: #999;\n}\n\n.namespace {\n	opacity: .7;\n}\n\n.token.property,\n.token.tag,\n.token.boolean,\n.token.number,\n.token.constant,\n.token.symbol,\n.token.deleted {\n	color: #905;\n}\n\n.token.selector,\n.token.attr-name,\n.token.string,\n.token.char,\n.token.builtin,\n.token.inserted {\n	color: #690;\n}\n\n.token.operator,\n.token.entity,\n.token.url,\n.language-css .token.string,\n.style .token.string {\n	color: #9a6e3a;\n	background: hsla(0, 0%, 100%, .5);\n}\n\n.token.atrule,\n.token.attr-value,\n.token.keyword {\n	color: #07a;\n}\n\n.token.function,\n.token.class-name {\n	color: #DD4A68;\n}\n\n.token.regex,\n.token.important,\n.token.variable {\n	color: #e90;\n}\n\n.token.important,\n.token.bold {\n	font-weight: bold;\n}\n.token.italic {\n	font-style: italic;\n}\n\n.token.entity {\n	cursor: help;\n}\n\ndiv.fk-highlight-code-container {\n  color: var(--fk-highlight-code-color, whitesmoke);\n  background: var(--fk-highlight-code-background);\n  padding: var(--fk-highlight-code-padding);\n  border-radius: var(--fk-highlight-code-border-radius);\n  margin: var(--fk-highlight-code-margin, 0 0 64px);\n  -webkit-transform-origin: bottom left;\n          transform-origin: bottom left;\n  -webkit-transition: all .2s ease-in-out;\n  transition: all .2s ease-in-out;\n  -webkit-transform: scale(var(--fk-highlight-code-zoom, 1));\n          transform: scale(var(--fk-highlight-code-zoom, 1));\n  direction: var(--fk-highlight-code-direction, ltr);\n  text-align: var(--fk-highlight-code-text-align, start); }\n  div.fk-highlight-code-container code {\n    overflow-y: scroll;\n    color: whitesmoke;\n    white-space: pre-wrap;\n    font-size: var(--fk-highlight-code-font-size);\n    font-family: var(--fk-highlight-code-font-family, monospace);\n    /* Prism style override */ }\n    div.fk-highlight-code-container code div:empty {\n      min-height: 1rem; }\n    div.fk-highlight-code-container code span.fk-highlight-code-anchor-hidden {\n      visibility: hidden; }\n    div.fk-highlight-code-container code span.fk-highlight-code-line {\n      background: var(--fk-highlight-code-line-background);\n      padding: var(--fk-highlight-code-line-padding);\n      border-top: var(--fk-highlight-code-line-border-top);\n      border-bottom: var(--fk-highlight-code-line-border-bottom); }\n    div.fk-highlight-code-container code .language-css .token.string:not(.fk-highlight-code-line),\n    div.fk-highlight-code-container code .style .token.string:not(.fk-highlight-code-line),\n    div.fk-highlight-code-container code .token.entity:not(.fk-highlight-code-line),\n    div.fk-highlight-code-container code .token.operator:not(.fk-highlight-code-line),\n    div.fk-highlight-code-container code .token.url:not(.fk-highlight-code-line) {\n      background: inherit; }\n    div.fk-highlight-code-container code .token.comment,\n    div.fk-highlight-code-container code .token.prolog,\n    div.fk-highlight-code-container code .token.doctype,\n    div.fk-highlight-code-container code .token.cdata {\n      color: var(--fk-highlight-code-token-comment, slategray); }\n    div.fk-highlight-code-container code .token.punctuation {\n      color: var(--fk-highlight-code-token-punctuation, #999); }\n    div.fk-highlight-code-container code .token.property,\n    div.fk-highlight-code-container code .token.tag,\n    div.fk-highlight-code-container code .token.boolean,\n    div.fk-highlight-code-container code .token.number,\n    div.fk-highlight-code-container code .token.constant,\n    div.fk-highlight-code-container code .token.symbol,\n    div.fk-highlight-code-container code .token.deleted {\n      color: var(--fk-highlight-code-token-property, #905); }\n    div.fk-highlight-code-container code .token.selector,\n    div.fk-highlight-code-container code .token.attr-name,\n    div.fk-highlight-code-container code .token.string,\n    div.fk-highlight-code-container code .token.char,\n    div.fk-highlight-code-container code .token.builtin,\n    div.fk-highlight-code-container code .token.inserted {\n      color: var(--fk-highlight-code-token-selector, #690); }\n    div.fk-highlight-code-container code .token.operator,\n    div.fk-highlight-code-container code .token.entity,\n    div.fk-highlight-code-container code .token.url,\n    div.fk-highlight-code-container code .language-css .token.string,\n    div.fk-highlight-code-container code .style .token.string {\n      color: var(--fk-highlight-code-token-operator, #9a6e3a); }\n    div.fk-highlight-code-container code .token.atrule,\n    div.fk-highlight-code-container code .token.attr-value,\n    div.fk-highlight-code-container code .token.keyword {\n      color: var(--fk-highlight-code-token-atrule, #07a); }\n    div.fk-highlight-code-container code .token.function,\n    div.fk-highlight-code-container code .token.class-name {\n      color: var(--fk-highlight-code-token-function, #DD4A68); }\n    div.fk-highlight-code-container code .token.regex,\n    div.fk-highlight-code-container code .token.important,\n    div.fk-highlight-code-container code .token.variable {\n      color: var(--fk-highlight-code-token-regex, #e90); }\n\n::slotted([slot=\"code\"]) {\n  display: none; }"; }
}

export { FramekitHighlightCode as FkHighlightCode };
