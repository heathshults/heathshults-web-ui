import{r as t,h as i,g as s}from"./p-f6d389c2.js";const h=class{constructor(i){t(this,i),this.top=0}componentWillUpdate(){this.positionElement()}positionElement(){this.dimensions=this.elem.children[0].getBoundingClientRect(),this.offsetTop=this.dimensions.top+window.scrollY,this.offsetTop-window.scrollY-this.top<=0?(this.staticStyles={width:this.dimensions.width+"px",height:this.dimensions.height+"px"},this.stickyStyles={position:"fixed",top:this.top+"px",left:this.dimensions.left+"px",width:this.dimensions.width+"px"}):(this.staticStyles={},this.stickyStyles={})}render(){return i("div",{style:this.staticStyles},i("div",{style:this.stickyStyles},i("slot",null)))}get elem(){return s(this)}};export{h as hs_sticky}