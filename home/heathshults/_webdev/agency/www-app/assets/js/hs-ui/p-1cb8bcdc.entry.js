import{r as o,c as s,h as i,g as t}from"./p-f6d389c2.js";const a=class{constructor(i){o(this,i),this.onClose=s(this,"close",7),this.ghost=!1,this.full=!1,this.open=!1,this.dismissible=!1,this.winHeight=window.innerHeight,this._isOpen=!1}async close(){this._isOpen=!1,this.onClose.emit(),this.handleOverlay()}componentWillLoad(){this._isOpen=this.open}async handleOverlay(){this.overlay=this.elem.shadowRoot.querySelector("#overlay"),this.overlay.classList.toggle("hs-modal-backdrop--visible")}async show(){this._isOpen=!0,this.handleOverlay()}async isOpen(){return this._isOpen}dismiss(){this.dismissible&&this.close()}render(){const o=this.ghost?"hs-modal--ghost":"",s=this.full?"hs-modal--full":"",t=this._isOpen?"hs-modal--visible":"";return[i("div",{id:"overlay","aria-hidden":!0,onClick:()=>this.dismiss(),class:"hs-modal-backdrop "+(this._isOpen?"hs-modal-backdrop--visible":"")}),i("div",{role:"dialog",class:`hs-modal ${o} ${s} ${t}`},this.dismissible&&i("button",{type:"button",class:"hs-button hs-button--close",onClick:()=>this.close()},"×"),i("slot",null))]}get elem(){return t(this)}};a.style=".hs-modal[role=dialog]{position:fixed;top:50%;left:50%;z-index:1071;display:block;width:75%;overflow:hidden;visibility:hidden;background-color:#fff;border:0 solid #74748c;border-radius:4px;opacity:0;-webkit-transform:translate(-50%, -50%);transform:translate(-50%, -50%)}.hs-modal[role=dialog] .hs-button--close{position:fixed;top:1em;left:0;z-index:1032;opacity:0;-webkit-transition:all 0.25s ease-out;transition:all 0.25s ease-out}.hs-modal[role=dialog]>.hs-card{background-color:transparent;-webkit-box-shadow:none;box-shadow:none}.hs-modal[role=dialog]>.hs-card .hs-card_body{position:relative}.hs-modal[role=dialog].hs-modal--ghost{color:#fff;background-color:transparent}.hs-modal[role=dialog].hs-modal--ghost .hs-heading{color:#fff}.hs-modal[role=dialog].hs-modal--full{top:0%;left:50%;z-index:1071;width:90%;height:0;-webkit-transition:all 0.25s ease-out;transition:all 0.25s ease-out;-webkit-transition-delay:0.12s;transition-delay:0.12s;-webkit-transform:translateX(-50%);transform:translateX(-50%)}.hs-modal[role=dialog].hs-modal--full.hs-modal--visible{height:100vh;background-color:#0f161d;opacity:1;-webkit-transition:all 0.25s ease-in;transition:all 0.25s ease-in;-webkit-transition-delay:0.12s;transition-delay:0.12s}.hs-modal[role=dialog].hs-modal--full.hs-modal--visible .hs-button--close{position:fixed;top:10px;right:10px;left:unset;z-index:1032;width:4rem;height:4rem;font-size:5rem;color:#fff;cursor:pointer;background-color:transparent;border:none;outline:none;opacity:1;-webkit-transition:all 0.25s ease-in;transition:all 0.25s ease-in}.hs-modal[role=dialog].hs-modal--full .hs-card_body{position:absolute;top:3.5em;bottom:4em;width:100%;overflow-x:hidden;overflow-y:auto;-webkit-overflow-scrolling:touch;color:#fff}.hs-modal[role=dialog].hs-modal--full .hs-card_footer{position:absolute;bottom:0;width:100%}.hs-modal[role=dialog].hs-modal--visible{visibility:visible;opacity:1}.hs-modal[role=dialog].hs-modal--visible+.hs-section{background-attachment:fixed}.hs-modal-backdrop{position:fixed;top:0px;right:0px;bottom:0px;left:0px;width:100%;height:0;background-color:rgba(0, 0, 0, 0.75);opacity:0;-webkit-transition:all 0.25s ease-in;transition:all 0.25s ease-in;-webkit-transition-delay:0.12s;transition-delay:0.12s}.hs-modal-backdrop.hs-modal-backdrop--visible{top:0px;z-index:1070;height:100vh;opacity:1;-webkit-transition:all 0.25s ease-out;transition:all 0.25s ease-out}";export{a as hs_modal}