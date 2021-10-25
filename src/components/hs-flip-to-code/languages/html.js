const htmlPatterns = [{
  name: 'cdata1',
  match: /(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i
},{
  name: 'cdata2',
  match: /^<!\[CDATA\[|\]\]>$/i
},{
  name: 'included-cdata',
  match: /<!\[CDATA\[[\s\S]*?\]\]>/i
},{
  name: 'tagname',
  match: RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g, function () { return tagName; }), 'i'),
},{
  name: 'doctype',
  match: /<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i
},{
  name: 'internal-subset',
  match:/(\[)[\s\S]+(?=\]>$)/
},{
  name: 'tag', 
  match: /<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,
    greedy: !0,
    inside: {
      tag: {
        match: /^<\/?[^\s>\/]+/,
        inside: {
          punctuation: /^<\/?/,
          namespace: /^[^\s>\/:]+:/
        }
      }
    }
},{
  name: 'attr-value',
  match: /=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/
},{
  name: 'attr-name',
  match:  /[^\s>\/]+/
},{
  name: 'parameter2',
  match: /(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i
},{
  name: 'parameter3',
  match: /(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/
},{
  name: 'parameter4',
  match: /((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/
},{
  name: 'template-string',
  match: /`(?:\\[\s\S]|\${(?:[^{}]|{(?:[^{}]|{[^}]*})*})+}|(?!\${)[^\\`])*`/
},{
  name: 'interpolation',
  match: /((?:^|[^\\])(?:\\{2})*)\${(?:[^{}]|{(?:[^{}]|{[^}]*})*})+}/
},{
  name: 'interpolation-punctuation',
  match: /^\${|}$/
},{
  name: 'template-punctuation',
  match: /^`|`$/
}];
