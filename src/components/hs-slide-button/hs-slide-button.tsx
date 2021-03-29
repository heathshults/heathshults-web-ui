// /* eslint-disable @typescript-eslint/explicit-module-boundary-types */
// import { Component, Host, Prop, Method, Event, EventEmitter, Element, h } from '@stencil/core';

// @Component({
//   tag: 'hs-slidebutton',
//   styleUrl: 'hs-slide-button.css',
//   shadow: true,
// })


// export class HSSlideButton {
//   @Prop() icon: any;
//   @Prop() animatedCheckMark: any;
//   @Prop() animatedCheckMarkBody: any;
//   @Prop() slideButton: any;
//   @Prop() dz: HTMLDivElement;
//   @Prop() arrows: any;
  
//   onDragonStart(ev): any {
//     ev.target.classList.id === 'drag1' ? this.slideButton = ev.target : '';
//     ev.dataTransfer.setData("text", ev.target.id);
//     ev.currentTarget.style.cursor = 'move';
//   }
//   onDragon(ev): any {
//     this.dz.classList.toggle('dragging-icon');
//   }
//   // onDragonOverDZ(ev){

//   // }
//   onDragonEnter(ev): any {
//     this.dz.classList.toggle('hs-dropzone-hover');
//   }
//   onDragonOver(ev): any {
//     ev.preventDefault();
//     // dz.style.cursor = 'move';
//     !this.dz.classList.contains('hs-dropzone-hover') ? this.dz.classList.toggle('hs-dropzone-hover') : '';
//     !this.arrows.classList.contains('hs-fadeout') ? this.arrows.classList.add('hs-fadeout') : '';
//   }
//   onDrop(ev): any {
//     ev.preventDefault();
//     const data = ev.dataTransfer.getData("text");
//     ev.target.appendChild(document.getElementById(data));
//     setTimeout(() => {
//       ev.target.classList.add('hs-fadeout');
//       ev.target.appendChild(this.animatedCheckMark);
//     }, 1000);
//   }
  
//   // eslint-disable-next-line no-inner-declarations
//   setAttributes(el, attrs): any {
//     for (const key in attrs) {
//       el.setAttribute(key, attrs[key]);
//     }
//   }

//   async connectedCallBack(ev) {
//     return new Promise((resolve, reject)=>{
//       try {
//         this.animatedCheckMark = document.createElement('svg');
//         this.animatedCheckMarkBody=`<path class="check" d="M126.8,14L55.7,85.1L29.2,63.4"/>`;
//         this.setAttributes(this.animatedCheckMark, {
//           'class': 'svg-checkmark',
//           'x':'0px',
//           'y':'0px',
//           'viewBox':'0 0 135 110',
//           'width':'40px',
//           'height':'50px'
//         });
//         this.animatedCheckMark.innerHTML = this.animatedCheckMarkBody;
//         this.slideButton = document.querySelector('#id');
//         this.slideButton.setAttribute('draggable', 'true');
//         this.dz = document.querySelector('.hs-dropzone');
//         this.arrows = document.querySelector('#arrows');
//         resolve;
//       } catch (e) {
//         reject(e);
//       }
//     }).catch((e)=>{
//       throw new Error(e.message);
//     });
  
  
//   }
//   render() {
//     return (
//       <Host>
//         <div class="slideButton-grid">
//           <div class="slideButton-grid__left">
//             <span id="drag1"
//               ondragstart={this.onDragonStart(event)}
//               ondrag={()=>this.onDragon(event)}
//               class="hs-slideButton__button">
//               @
//             </span>
//           </div>
//           <div class="slideButton-grid__center">
//           <span class="slideButton__label">SEND</span>
//             {/* animated arrows */}
//             <div class="hs-animated-arrow-container">
//               <svg id="arrows" class="hs-animated-arrow" width="18px" height="17px" viewBox="-1 0 18 17" version="1.1">
//                 <g>
//                   <polygon class="hs-arrow a-3" points="16.3746667 8.33860465 7.76133333 15.3067621 6.904 14.3175671 14.2906667 8.34246869 6.908 2.42790698 7.76 1.43613596"></polygon>
//                   <polygon class="hs-arrow a-2" points="16.3746667 8.33860465 7.76133333 15.3067621 6.904 14.3175671 14.2906667 8.34246869 6.908 2.42790698 7.76 1.43613596"></polygon>
//                   <polygon class="hs-arrow a-1" points="16.3746667 8.33860465 7.76133333 15.3067621 6.904 14.3175671 14.2906667 8.34246869 6.908 2.42790698 7.76 1.43613596"></polygon>
//                   <polygon class="hs-arrow-fixed" points="16.3746667 8.33860465 7.76133333 15.3067621 6.904 14.3175671 14.2906667 8.34246869 6.908 2.42790698 7.76 1.43613596"></polygon>
//                   {/* <path d="M-4.58892184e-16,0.56157424 L-4.58892184e-16,16.1929159 L9.708,8.33860465 L-1.64313008e-15,0.56157424 L-4.58892184e-16,0.56157424 Z M1.33333333,3.30246869 L7.62533333,8.34246869 L1.33333333,13.4327013 L1.33333333,3.30246869 L1.33333333,3.30246869 Z"></path> */}
//                 </g>
//               </svg>
//             </div>
//           </div>
//           <div class="slideButton-grid__right">
//           <div id="dzone"
//             ondragenter={()=>this.onDragonEnter(event)}
//             ondragleave={()=>this.onDragon(event)}
//             ondragover={()=>this.onDragonOver(event)}
//             ondrop={()=>this.onDrop(event)}
//             class="slideButton-grid__right hs-dropzone">
//           </div>
//           </div>
//         </div>
//       </Host>
//     );
//   }

// }
