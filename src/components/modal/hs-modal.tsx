/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { Component, Event, EventEmitter, Prop, State, Element, h } from '@stencil/core';

@Component({
  tag: 'hs-modal',
  styleUrl: '../../scss/components/objects.modals.scss',
  shadow: true
})
export class HSModal {
  @Element() elem: HTMLElement;
  @Prop() ghost = false;
  @Prop() full = false;
  @Prop() open = false;
  @Prop() dismissible = false;
  @Prop() winHeight: any = window.innerHeight;
  @Prop() overlay: any;
  @Prop() modalTitle: string;

  @State() _isOpen = false;

  @Event({ eventName: 'close' }) onClose: EventEmitter;
  
  // @Method() async close() {
  //   this._isOpen = false;
  //   this.onClose.emit();
  //   this.handleOverlay();
    
  // }
  
  // @Method() async show() {
  //   this._isOpen = true;
  //   this.handleOverlay();
  //   //this.overlay = this.elem.shadowRoot.querySelector('#overlay') as HTMLElement;
  //   //this.overlay.style.height = this.winHeight;
  // }
  
  // @Method() async isOpen() {
  //   return this._isOpen;
  // }

  // componentWillLoad() {
    // this._isOpen = this.open;

  // }
  // @Method() async handleOverlay() {
  //   this.overlay = this.elem.shadowRoot.querySelector('#overlay') as HTMLElement;
  //   this.overlay.classList.toggle('hs-modal-backdrop--visible');

  //   () => {
  //     const sec = this.elem.closest('section');
  //     sec !== null ? sec.style.cssText = 'background-attachment: fixed;' : sec.style.cssText = 'background-attachment: unset';
  //   };

  //   let overlayHeight = this.overlay.style.height;
  //   typeof overlayHeight === 'undefined' || overlayHeight < 1 ? overlayHeight = `${document.body.clientHeight}` : overlayHeight = 0;
  // }
  // componentDidLoad() {
  //   this.overlay = this.elem.shadowRoot.querySelector('#overlay') as HTMLElement;
  //   console.log(this.overlay)
  // }

  





  // dismiss() {
  //   if (this.dismissible) this.close();
  // }

  render() {

    const ghostClass = this.ghost ? `hs-modal--ghost` : '';
    const fullClass = this.full ? `hs-modal--full` : '';
    const modalIsOpenClass = this._isOpen ? 'hs-modal--visible' : '';
    // const overlayIsOpenClass = this._isOpen ? 'hs-modal-backdrop--visible' : '';

    return [

      <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">,
        <div class={`modal fade ${ghostClass} ${fullClass} ${modalIsOpenClass}`}  tabindex="-1" aria-labelledby={this.modalTitle} aria-hidden="true">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h5 id={this.modalTitle} class="modal-title">{this.modalTitle}</h5>
                // <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                {this.dismissible && (
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close">
                    &times;
                  </button>
                )}
              </div>
              <div class="modal-body">
                <slot name="modal-body" />
              </div>
              <div class="modal-footer">
                <slot name="modal-footer" />
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary">Save changes</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    ];
  }
}
