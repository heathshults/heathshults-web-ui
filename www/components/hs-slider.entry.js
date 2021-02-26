import { r as registerInstance, e as createEvent, h } from './index-9897d625.js';

const hsSliderCss = ":host{}hs-slider .hs-slider-container{width:100%}hs-slider .hs-slider{-webkit-appearance:none;appearance:none;width:100%;height:15px;border-radius:5px;background:#d3d3d3;outline:none;opacity:0.7;transition:opacity 0.2s}hs-slider .hs-slider:hover{opacity:1}hs-slider .hs-slider::-webkit-slider-thumb{-webkit-appearance:none;appearance:none;width:25px;height:25px;border-radius:50%;background:#4CAF50;cursor:pointer}hs-slider .hs-slider::-moz-range-thumb{width:25px;height:25px;border-radius:50%;background:#4CAF50;cursor:pointer}";

const HsSlider = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.valueChanged = createEvent(this, "valueChanged", 7);
  }
  valueChangedHandler(event) {
    this.valueChanged.emit(event.target.value);
  }
  render() {
    return (h("div", { class: "slider-container" }, h("input", { type: "range", min: this.min, max: this.max, value: this.value, class: "slider", onChange: (event) => this.valueChangedHandler(event) })));
  }
};
HsSlider.style = hsSliderCss;

export { HsSlider as hs_slider };
