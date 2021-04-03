"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// Vertical Timeline - by CodyHouse.co
var VerticalTimeline = /*#__PURE__*/function () {
  function VerticalTimeline(element) {
    _classCallCheck(this, VerticalTimeline);

    this.element = element;
    this.blocks = this.element.getElementsByClassName('hs-timeline__block');
    this.images = this.element.getElementsByClassName('hs-timeline__img');
    this.contents = this.element.getElementsByClassName('hs-timeline__content');
    this.offset = 0.8; // this.hideBlocks();

    this.History(VerticalTimeline).hideBlocks();
  }

  _createClass(VerticalTimeline, [{
    key: "History",
    value: function History(_VerticalTimeline) {
      _VerticalTimeline.prototype.hideBlocks = function () {
        // if (!document.documentElement.hasAttribute('classList')) {
        if (!"classList" in document.documentElement) {
          return; // no animation on older browsers
        } //hide timeline blocks which are outside the viewport


        var self = this;

        for (var i = 0; i < this.blocks.length; i++) {
          (function (i) {
            if (self.blocks[i].getBoundingClientRect().top > window.innerHeight * self.offset) {
              self.images[i].classList.add('hs-timeline__img--hidden');
              self.contents[i].classList.add('hs-timeline__content--hidden');
            }
          })(i);
        }
      };

      _VerticalTimeline.prototype.showBlocks = function () {
        // if (!document.documentElement.hasAttribute('classList')) {
        if (!"classList" in document.documentElement) {
          return;
        }

        var self = this;

        for (var i = 0; i < this.blocks.length; i++) {
          (function (i) {
            if (self.contents[i].classList.contains('hs-timeline__content--hidden') && self.blocks[i].getBoundingClientRect().top <= window.innerHeight * self.offset) {
              // add bounce-in animation
              self.images[i].classList.add('hs-timeline__img--bounce-in');
              self.contents[i].classList.add('hs-timeline__content--bounce-in');
              self.images[i].classList.remove('hs-timeline__img--hidden');
              self.contents[i].classList.remove('hs-timeline__content--hidden');
            }
          })(i);
        }
      }; // eslint-disable-next-line prefer-const


      var verticalTimelines = document.getElementsByClassName('js-hs-timeline');
      var verticalTimelinesArray = [];
      var scrolling = false;

      if (verticalTimelines.length > 0) {
        for (var i = 0; i < verticalTimelines.length; i++) {
          (function (i) {
            verticalTimelinesArray.push(new _VerticalTimeline(verticalTimelines[i]));
          })(i);
        } //show timeline blocks on scrolling


        window.addEventListener('scroll', function (event) {
          console.log(event.target);

          if (!scrolling) {
            scrolling = true;
            !window.requestAnimationFrame ? setTimeout(checkTimelineScroll, 250) : window.requestAnimationFrame(checkTimelineScroll);
          }
        });
      }

      function checkTimelineScroll() {
        verticalTimelinesArray.forEach(function (timeline) {
          timeline.showBlocks();
        });
        scrolling = false;
      }
    }
  }]);

  return VerticalTimeline;
}();

exports.default = VerticalTimeline;