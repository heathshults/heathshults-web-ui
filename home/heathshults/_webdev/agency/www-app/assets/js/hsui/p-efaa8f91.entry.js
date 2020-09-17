import{r as t,h as e,g as i}from"./p-f6d389c2.js";const s=class{constructor(e){t(this,e),this.events={flipperEvents:[],flipperBackEvents:[]}}componentWillLoad(){this.init()}componentDidLoad(){const t=this.flipperDuration||400,e=this.flipperTimingFunction||"ease-in";["front","back"].forEach(i=>{this.element.querySelector(".hs-flipperpy__"+i).style.transition=`all ${t/1e3}s ${e}`})}componentWillUpdate(){void 0!==this.isflipperped&&(this.flipperState=this.isflipperped)}init(){if(void 0!==this.isflipperped)this.flipperState=this.isflipperped;else if(void 0!==this.flipperEvents){["flipperEvents","flipperBackEvents"].forEach(t=>{this.events[t]=this[t]?this[t].split(","):[]});const t=[...this.events.flipperEvents,...this.events.flipperBackEvents];t.filter((e,i)=>t.indexOf(e)===i).forEach(t=>this.element.addEventListener(t,t=>this.processflipper(t))),this.flipperState=!1}}processflipper(t){const e=t.type;this.flipperState&&-1!==this.events.flipperBackEvents.indexOf(e)?this.flipperState=!this.flipperState:this.flipperState||-1===this.events.flipperEvents.indexOf(e)||(this.flipperState=!this.flipperState)}render(){return e("div",{class:"hs-flipperpy "+(this.flipperState?"hs-flipperpy--flipperped":"")},e("div",{class:"hs-flipperpy__front"},e("slot",{name:"front"})),e("div",{class:"hs-flipperpy__back"},e("slot",{name:"back"})))}get element(){return i(this)}};s.style=".hs-flipper{float:left;-webkit-perspective:1000px;perspective:1000px}.hs-flipper_front,.hs-flipper_back{position:absolute;width:inherit;height:inherit;-webkit-transform-style:preserve-3d;transform-style:preserve-3d;-webkit-backface-visibility:hidden;backface-visibility:hidden}.hs-flipper_front{z-index:900;-webkit-transform:rotate3d(0, 0, 0, 0deg);transform:rotate3d(0, 0, 0, 0deg)}.hs-flipper--flipped .hs-flipper_front{z-index:900;-webkit-transform:rotate3d(0, 1, 0, 180deg);transform:rotate3d(0, 1, 0, 180deg);-ms-transform:rotateY(180deg)}.hs-flipper_back{z-index:800;-webkit-transform:rotate3d(0, 1, 0, -180deg);transform:rotate3d(0, 1, 0, -180deg)}.hs-flipper--flipped .hs-flipper_back{z-index:1000;-webkit-transform:rotate3d(0, 0, 0, 0deg);transform:rotate3d(0, 0, 0, 0deg)}";export{s as hs_flipper}