System.register(["./p-f8af1ee2.system.js"],(function(r){"use strict";var s,e,o,t;return{setters:[function(r){s=r.r;e=r.c;o=r.h;t=r.g}],execute:function(){var a='.hs-progress{display:block;overflow:hidden;color:#fff;text-align:center;background-color:#f2f2f4;border:0;border-radius:4px}.hs-progress.hs-progress--rounded{border-radius:30em}.hs-progress .hs-progress_bar[role=progressbar]{color:#fff;background-color:#74748c;display:block;float:left;height:100%;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;border-radius:0}.hs-progress .hs-progress_bar[role=progressbar]::after{color:transparent !important;content:"-"}.hs-progress .hs-progress_bar[role=progressbar].hs-progress_bar--brand{color:#fff;background-color:#2c3e50}.hs-progress .hs-progress_bar[role=progressbar].hs-progress_bar--info{color:#fff;background-color:#4267ff}.hs-progress .hs-progress_bar[role=progressbar].hs-progress_bar--warning{color:#000;background-color:#ffa500}.hs-progress .hs-progress_bar[role=progressbar].hs-progress_bar--success{color:#fff;background-color:#088a05}.hs-progress .hs-progress_bar[role=progressbar].hs-progress_bar--error{color:#fff;background-color:#ee0202}';var n=r("hs_progress",function(){function r(r){s(this,r);this.onNotSame=e(this,"notSame",7);this.size=""}r.prototype.onChangeBar=function(r){var s=this.element.children[0];var e=r.detail;var o=r.target;var t=[].indexOf.call(s.children,o);this.onNotSame.emit(Object.assign({idx:t},e))};r.prototype.render=function(){var r=this.size?"u-"+this.size:"";var s=this.rounded?"hs-progress--rounded":"";return o("div",{class:"hs-progress "+s+" "+r},o("slot",null))};Object.defineProperty(r.prototype,"element",{get:function(){return t(this)},enumerable:false,configurable:true});return r}());n.style=a}}}));