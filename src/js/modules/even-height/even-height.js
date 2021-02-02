"use strict";
exports.__esModule = true;
var EvenHeight = /** @class */ (function () {
    function EvenHeight(_a) {
        var _this = this;
        var ehSelector = _a.ehSelector, ehChildSelector = _a.ehChildSelector;
        setTimeout(function () {
            _this.evenRows = Array.prototype.slice.call(document.querySelectorAll(ehSelector));
            console.log('evenRows: ');
            console.log(_this.evenRows);
            _this.evenRows.forEach(function (row) {
                var height = row.offsetHeight;
                _this.evenRowChildren = Array.prototype.slice.call(row.querySelectorAll(ehChildSelector));
                console.log('height: ' + height);
                console.log('childnodes: ');
                console.log(_this.evenRowChildren);
                _this.evenRowChildren.forEach(function (node) {
                    node.setAttribute('style', "height: " + height + "px");
                });
            });
        }, 2000);
    }
    return EvenHeight;
}());
exports["default"] = EvenHeight;
// const _EvenHeight = EvenHeight;
// export { _EvenHeight as EvenHeight };
new EvenHeight({ ehSelector: '.even-height', ehChildSelector: 'col-md-3' });
