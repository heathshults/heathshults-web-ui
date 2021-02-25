"use strict";

exports.__esModule = true;

var EvenHeight =
/** @class */
function () {
  function EvenHeight(_a) {
    var ehSelector = _a.ehSelector,
        ehChildSelector = _a.ehChildSelector,
        evenRows = _a.evenRows,
        evenRowChildren = _a.evenRowChildren;
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
          child.setAttribute('style', "height: " + height + "px");
        });
      });
    }, 2000);
  }

  return EvenHeight;
}();

exports["default"] = EvenHeight; // const _EvenHeight = EvenHeight;
// export { _EvenHeight as EvenHeight };

new EvenHeight({
  ehSelector: '.even-height',
  ehChildSelector: 'col-md-3'
});