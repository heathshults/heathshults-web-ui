"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Draggable = /*#__PURE__*/function () {
  function Draggable() {
    _classCallCheck(this, Draggable);

    this.container = document.querySelector('.box__dragabble');
    this.box = document.querySelectorAll('.box');

    this._addEventListener();
  }

  _createClass(Draggable, [{
    key: "_addEventListener",
    value: function _addEventListener() {
      var _this = this;

      this.box.forEach(function (element) {
        element.addEventListener('dragenter', _this.dragenter);
        element.addEventListener('dragleave', _this.dragleave);
        element.addEventListener('dragover', _this.dragover);
        element.addEventListener('drop', _this.drop);
      });
      this.container.addEventListener('dragstart', this.dragstart);
      this.container.addEventListener('dragend', this.dragend);
    }
  }, {
    key: "dragstart",
    value: function dragstart(e) {
      var _this2 = this;

      this.classList.add('drag_start');
      setTimeout(function () {
        _this2.classList.add('invisible');
      }, 0);
    }
  }, {
    key: "dragend",
    value: function dragend(e) {
      console.log('dragend');
      this.classList.remove('invisible');
      this.classList.remove('drag_start');
    }
  }, {
    key: "dragenter",
    value: function dragenter(e) {
      e.preventDefault();
      console.log('dragenter');
      this.classList.add('drag_enter');
    }
  }, {
    key: "dragleave",
    value: function dragleave(e) {
      console.log('dragleave');
      this.classList.remove('drag_enter');
    }
  }, {
    key: "dragover",
    value: function dragover(e) {
      e.preventDefault();
      console.log('dragover');
    }
  }, {
    key: "drop",
    value: function drop() {
      var container = document.querySelector('.box__dragabble');
      this.classList.remove('drag_enter');
      this.append(container);
    }
  }], [{
    key: "init",
    value: function init() {
      return new this();
    }
  }]);

  return Draggable;
}();

document.addEventListener('load', Draggable.init());