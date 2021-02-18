"use strict";
exports.__esModule = true;
var l = console.log;
var HS3DRotate = /** @class */ (function () {
    function HS3DRotate(dataMethod1, dataURL1, dataHeaders1) {
        var _this = this;
        this.orientationFlag = false;
        this.rotateEventsFlag = false;
        this.init3dRotator = new this.Get3dRotatorData();
        this.rotatorContainer = document.querySelector('.hs-3drotate__container');
        this.rotatorContainer.classList.add('hs-vanish');
        this.hs3dRotate = document.querySelector('.hs-3drotate');
        this.cells = this.hs3dRotate.querySelectorAll('.hs-3drotate__cell');
        this.prevButton = document.querySelector('.hs-3drotate__prev-button');
        this.nextButton = document.querySelector('.hs-3drotate__next-button');
        this.cellsRange = document.querySelector('.hs-3drotate__cells-range');
        this.orientationRadios = document.querySelectorAll('input[name="orientation"]');
        this.checkedRadio = document.querySelector('input[name="orientation"]:checked');
        this.selectedIndex = 0;
        this.dataURL = this.rotatorContainer.getAttribute('data-dataurl');
        if (!dataMethod1) {
            this.dataMethod = this.rotatorContainer.getAttribute('data-datamethod');
        }
        else {
            this.dataMethod = dataMethod1;
        }
        if (!dataHeaders1) {
            this.dataHeaders = this.rotatorContainer.getAttribute('data-dataheaders');
        }
        else {
            this.dataHeaders = dataHeaders1;
        }
        if (!dataURL1) {
            dataURL1 = this.dataURL;
        }
        else {
            this.dataURL = dataURL1;
        }
        this.cells = this.hs3dRotate.querySelectorAll('.hs-3drotate__cell');
        this.cellWidth = this.hs3dRotate.offsetWidth;
        this.cellHeight = this.hs3dRotate.offsetHeight;
        this.isHorizontal = true;
        this.rotateFn = this.isHorizontal ? 'rotateY' : 'rotateX';
        this.orientationFlag = false;
        this.rotateEventsFlag = false;
        // l( cellWidth, cellHeight );
        l("\n    rotatorContainer: " + this.rotatorContainer + "\n    dataMethod: " + this.dataMethod + "\n    headers: " + this.dataHeaders + "\n    url: " + this.dataURL + "\n    cells: " + this.cells + "\n    prevButton: " + this.prevButton + "\n    nextButton: " + this.nextButton + "\n    cellsRange: " + this.cellsRange + "\n    orientationRadios: " + this.orientationRadios + "\n    cellCount: " + this.cellCount + "\n    selectedIndex: " + this.selectedIndex + "\n    cellWidth: " + this.cellWidth + "\n    cellHeight: " + this.cellHeight + "\n    isHorizontal: " + this.isHorizontal + "\n    rotateFn: " + this.rotateFn + "\n    ");
        this.prevButton.addEventListener('click', function () {
            _this.selectedIndex--;
            _this.rotate3dRotator();
        });
        this.nextButton.addEventListener('click', function () {
            _this.selectedIndex++;
            _this.rotate3dRotator();
        });
        this.cellsRange.addEventListener('change', this.update3DRotator);
        this.cellsRange.addEventListener('input', this.update3DRotator);
        this.hs3dRotatorEvents();
        this.Get3dRotatorData();
    }
    HS3DRotate.prototype.Get3dRotatorData = function () {
        var _this = this;
        if (window.fetch) {
            l('inside fetch vars');
            if (typeof this.dataMethod === 'undefined' || this.dataMethod === '') {
                this.dataMethod = 'GET';
            }
            if (typeof this.dataHeaders === 'undefined' || this.dataHeaders === '') {
                this.dataHeaders = { 'credentials': 'same-origin' };
            }
            else if (this.dataHeaders) {
                this.dataHeaders = "{" + this.dataHeaders + "}";
            }
            if (typeof this.dataURL === 'undefined' || this.dataURL === '') {
                return;
            }
            this.options = {
                method: this.dataMethod,
                headers: new Headers({ 'Content-Type': 'text/json' })
            };
            if (this.dataHeaders) {
                this.options.append("" + this.dataHeaders);
            }
            var request = new Request(this.dataURL, this.options);
            l("request: " + request);
            // get hs-3d-rotate data - request data
            fetch(request)
                .then(function (response) { return response.json(); })
                .then(function (data) {
                // resolved.emit(data);
                for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
                    var item = data_1[_i];
                    var cellContentContainer = document.createElement('div');
                    cellContentContainer.classList.add('hs-3drotate__cell');
                    var img = document.createElement('img');
                    img.classList.add('hs-3drotate__img');
                    img.src = item.path;
                    l("IMG: " + img.src);
                    img.alt = item.alt;
                    _this.hs3dRotate.appendChild(cellContentContainer);
                    cellContentContainer.appendChild(img);
                }
                // return data;
            })["catch"](console.error);
        }
        return;
    };
    HS3DRotate.prototype.rotate3dRotator = function () {
        var angle = this.theta * this.selectedIndex * -1;
        this.hs3dRotate.style.transform = "translateZ(" + -this.radius + "px) " + this.rotateFn + "(" + angle + "deg)";
    };
    HS3DRotate.prototype.update3DRotator = function () {
        this.cellWidth = this.hs3dRotate.offsetWidth;
        this.cellHeight = this.hs3dRotate.offsetHeight;
        l(this.cellHeight);
        this.cellCount = this.cellsRange.value;
        this.theta = 360 / this.cellCount;
        this.cellSize = this.isHorizontal ? this.cellWidth : this.cellHeight;
        this.radius = Math.round((this.cellSize / 2) / Math.tan(Math.PI / this.cellCount));
        for (var i = 0; i < this.cells.length; i++) {
            var cell = this.cells[i];
            if (i < this.cellCount) {
                // visible cell
                cell.style.opacity = 1;
                var cellAngle = this.theta * i;
                cell.style.transform = this.rotateFn + "(" + cellAngle + "deg) translateZ(" + this.radius + "px)";
            }
            else {
                // hidden cell
                cell.style.opacity = 0;
                cell.style.transform = 'none';
            }
        }
        return this.rotate3dRotator();
    };
    HS3DRotate.prototype.HS3dRotateEvents = function () {
        var _this = this;
        function makeOrientationEvent() {
            for (var i = 0; i < this.orientationRadios.length; i++) {
                var radio = this.orientationRadios[i];
                radio.addEventListener('change', this.onOrientationChange);
            }
            this.orientationFlag = true;
        }
        if (!this.orientationFlag) {
            makeOrientationEvent();
        }
        function onOrientationChange() {
            this.isHorizontal = this.checkedRadio.value == 'horizontal';
            this.rotateFn = this.isHorizontal ? 'rotateY' : 'rotateX';
            return this.update3DRotator();
        }
        // set initials 
        onOrientationChange();
        window.onresize = function () {
            setTimeout(function () { _this.update3DRotator; }, 500);
            document.addEventListener('shown.bs.modal', function () {
                _this.rotatorContainer.classList.remove('hs-vanish');
                _this.update3DRotator();
            });
        };
        if (this.orientationFlag && !this.rotateEventsFlag) {
            this.rotateEventsFlag = true;
            this.HS3dRotateEvents();
        }
    };
    return HS3DRotate;
}());
exports["default"] = HS3DRotate;
