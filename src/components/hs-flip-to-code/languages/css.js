const cssPatterns = [{
  name: 'string',
  match: /("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/
},{
  name: 'comment',
  match: /\/\*[\s\S]*?\*\//
},{
  name: 'atrule',
  match: /@[\w-](?:[^;{\s]|\s+(?![\s{]))*(?:;|(?=\s*\{))/,
		inside: {
      'rule': /^@[\w-]+/,
      'selector-function-argument': {
        match: /(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,
        lookbehind: true,
        alias: 'selector'
      },
      'keyword': {
        match: /(^|[^\w-])(?:and|not|only|or)(?![\w-])/,
        lookbehind: true
      }
    }
},{
  name: 'url',
  match: RegExp('\\burl\\((?:' + string.source + '|' + /(?:[^\\\r\n()"']|\\[\s\S])*/.source + ')\\)', 'i'),
			greedy: true,
			inside: {
				'function': /^url/i,
				'punctuation': /^\(|\)$/,
				'string': {
					match: RegExp('^' + string.source + '$'),
					alias: 'url'
				}
			}
},{
  name: 'style-attr',
  match: /(^|["'\s])style\s*=\s*(?:"[^"]*"|'[^']*')/i,
  lookbehind: true,
  inside: {
    'attr-value': {
      match: /=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,
      inside: {
        'style': {
          match: /(["'])[\s\S]+(?=["']$)/,
          lookbehind: true,
          alias: 'language-css',
          inside: Prism.languages.css
        },
        'punctuation': [
          {
            match: /^=/,
            alias: 'attr-equals'
          },
          /"|'/
        ]
      }
    },
    'attr-name': /^style/i
  }
}];
