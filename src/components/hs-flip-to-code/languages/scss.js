const scssPatterns = [{
  name: 'comment',
  match: /(^|[^\\])(?:\/\*[\s\S]*?\*\/|\/\/.*)/
},{
  name: 'atrule',
  match: /@[\w-](?:\([^()]+\)|[^()\s]|\s+(?!\s))*?(?=\s+[{;])/
},{
  name: 'selector',
  match: /(?=\S)[^@;{}()]?(?:[^@;{}()\s]|\s+(?!\s)|#\{\$[-\w]+\})+(?=\s*\{(?:\}|\s|[^}][^:{}]*[:{][^}]+))/m,
		inside: {
			'parent': {
				match: /&/,
				alias: 'important'
			},
			'placeholder': /%[-\w]+/,
			'variable': /\$[-\w]+|#\{\$[-\w]+\}/
		}
},{
  name: 'property',
  match: /(?:[-\w]|\$[-\w]|#\{\$[-\w]+\})+(?=\s*:)/
},{
  name: 'keyword1',
  match: /@(?:if|else(?: if)?|forward|for|each|while|import|use|extend|debug|warn|mixin|include|function|return|content)\b/i
},{
  name: 'keyword2',
  match: /( +)(?:from|through)(?= )/,
},{
  name: 'variable', 
  match:/\$[-\w]+|#\{\$[-\w]+\}/
},{
  name: 'module-modifier',
  match: /\b(?:as|with|show|hide)\b/i
},{
  name: 'placeholder',
  match:  /%[-\w]+/
},{
  name: 'statement',
  match: /\B!(?:default|optional)\b/i
},{
  name: 'parameter3',
  match: /\B!(?:default|optional)\b/i
},{
  name: 'boolean',
  match: /\b(?:true|false)\b/
},{
  name: 'operator',
  match: /(\s)(?:[-+*\/%]|[=!]=|<=?|>=?|and|or|not)(?=\s)/
}];
