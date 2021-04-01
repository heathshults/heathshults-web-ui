"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var EvenHeight = function EvenHeight(_ref) {
  var ehSelector = _ref.ehSelector,
      ehChildSelector = _ref.ehChildSelector,
      evenRows = _ref.evenRows,
      evenRowChildren = _ref.evenRowChildren;

  _classCallCheck(this, EvenHeight);

  setTimeout(function () {
    evenRows = Array.prototype.slice.call(document.querySelectorAll(ehSelector));
    console.log('evenRows: ');
    console.log(evenRows);
    evenRows.forEach(function (row) {
      var height = row.offsetHeight;
      evenRowChildren = Array.prototype.slice.call(row.querySelectorAll(ehChildSelector));
      console.log('height: ' + height);
      console.log('childnodes: ');
      console.log(evenRowChildren);
      evenRowChildren.forEach(function (node) {
        var child = node;
        child.setAttribute('style', "height: ".concat(height, "px"));
      });
    });
  }, 2000);
}; // const _EvenHeight = EvenHeight;
// export { _EvenHeight as EvenHeight };


exports.default = EvenHeight;
new EvenHeight({
  ehSelector: '.even-height',
  ehChildSelector: 'col-md-3'
});