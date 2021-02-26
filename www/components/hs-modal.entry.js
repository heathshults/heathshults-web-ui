import { r as registerInstance, e as createEvent, h, g as getElement } from './index-9897d625.js';

const objectsModalsCss = ".modal>.hs-card{background-color:transparent;box-shadow:none}.modal>.hs-card .hs-card_body{position:relative}.modal.hs-modal--ghost{color:#fff;background-color:transparent}.modal.hs-modal--ghost .hs-heading{color:#fff}.modal.hs-modal--full{top:0;right:0;bottom:0;left:0;width:100vw;height:100vh;transition:all 0.25s ease-out;transition-delay:0.12s;transform:translateX(-50%)}.modal.hs-modal--full .hs-card_body{position:absolute;top:3.5em;bottom:4em;width:100%;overflow-x:hidden;overflow-y:auto;-webkit-overflow-scrolling:touch;color:#fff}.modal.hs-modal--full .hs-card_footer{position:absolute;bottom:0;width:100%}.modal.fade{width:1px;height:1px}.modal.fade.show{width:100vw;height:100vh}";

const HSModal = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.onClose = createEvent(this, "close", 7);
    this.ghost = false;
    this.full = false;
    this.open = false;
    this.dismissible = false;
    this.winHeight = window.innerHeight;
    // @Prop() tabindex: string;
    this._isOpen = false;
  }
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
    return (h("div", { class: "modal fade" }, ",", h("div", { class: `modal fade ${ghostClass} ${fullClass} ${modalIsOpenClass}`, id: `__${this.modalTitle}`, "data-bs-backdrop": "static", "data-bs-keyboard": "false", "aria-labelledby": `${this.modalTitle}`, "aria-hidden": "true" }, h("div", { class: "modal-dialog" }, h("div", { class: "modal-content" }, h("div", { class: "modal-header" }, h("h5", { id: `${this.modalTitle}`, class: "modal-title" }, `${this.modalTitle}`)
    // <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
    , "// ", h("button", { type: "button", class: "btn-close", "data-bs-dismiss": "modal", "aria-label": "Close" }), this.dismissible && (h("button", { type: "button", class: "btn-close", "data-bs-dismiss": "modal", "aria-label": "Close" }, "\u00D7"))), h("div", { class: "modal-body" }, h("slot", { name: "modal-body" })), h("div", { class: "modal-footer" }, h("slot", { name: "modal-footer" }), h("button", { type: "button", class: "btn btn-secondary", "data-bs-dismiss": "modal" }, "Close"), h("button", { type: "button", class: "btn btn-primary" }, "Save changes")))))));
  }
  get elem() { return getElement(this); }
};
HSModal.style = objectsModalsCss;

export { HSModal as hs_modal };
