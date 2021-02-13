"use strict";
exports.__esModule = true;
exports.HS3DRotate = void 0;
var HS3DRotate = /** @class */ (function () {
    function HS3DRotate(rotatorId, window) {
        var _this = this;
        this.rotatorContainer = document.querySelector("#" + rotatorId + ".hs-3drotate__container");
        this.rotatorContainer.classList.add('hs-vanish');
        this.HSThreeDRotator = document.querySelector('.hs-3drotate');
        console.log(this.HSThreeDRotator);
        this.cells = Array.prototype.slice.call(this.HSThreeDRotator.querySelectorAll('.hs-3drotate__cell'));
        this.selectedIndex = 0;
        this.cellWidth = this.HSThreeDRotator.offsetWidth;
        this.cellHeight = this.HSThreeDRotator.offsetHeight;
        this.isHorizontal = true;
        this.rotateFn = this.isHorizontal ? 'rotateY' : 'rotateX';
        this.orientationRadios = Array.prototype.slice.call(document.querySelectorAll('input[name="orientation"]'));
        this.checkedRadio = document.querySelector('input[name="orientation"]:checked');
        this.prevButton = document.querySelector('.hs-3drotate__prev-button');
        this.nextButton = document.querySelector('.hs-3drotate__next-button');
        this.fetchHeaders = this.rotatorContainer.getAttribute('data-headers');
        this.headers = this.fetchHeaders;
        this.method = this.rotatorContainer.getAttribute('data-method');
        this.url = this.rotatorContainer.getAttribute('data-dataurl');
        this.available = null;
        if (window.fetch) {
            this.available = true;
        }
        // previous button
        (function () {
            _this.prevButton.addEventListener('click', function () {
                this.selectedIndex--;
                this.rotate();
            });
        });
        // next button
        (function () {
            _this.nextButton.addEventListener('click', function () {
                this.selectedIndex++;
                this.rotate();
            });
        });
        // get hs-3d-rotate data - setup
        (function () {
            if (_this.available) {
                console.log('inside fetch vars');
                // this.headers = this.rotatorContainer.getAttribute('data-headers');
                var options = {
                    method: _this.method,
                    headers: new Headers(_this.headers)
                };
                _this.request = new Request(_this.url, options);
                // get hs-3d-rotate data - request data
                fetch(_this.request)
                    .then(function (response) { return response.json(); })
                    .then(function (data) {
                    // this.resolved.emit(data);
                    _this.userOptions(data);
                    console.log(data);
                    for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
                        var item = data_1[_i];
                        var cellContentContainer = document.createElement('div');
                        cellContentContainer.classList.add('hs-threeDRotator__cell');
                        var img = document.createElement('img');
                        img.classList.add('hs-threeDRotator-img');
                        img.src = item.path;
                        img.alt = item.alt;
                        _this.HSThreeDRotator.appendChild(cellContentContainer);
                        cellContentContainer.appendChild(img);
                    }
                    return data;
                })["catch"](console.error);
            }
        });
        // range input
        (function () {
            _this.cellsRange = document.querySelector('.hs-3drotate__cells-range');
            _this.cellsRange.addEventListener('change', _this.update3DRotator);
            _this.cellsRange.addEventListener('input', _this.update3DRotator);
        });
        // change orientation
        (function () {
            for (var i = 0; i < _this.orientationRadios.length; i++) {
                var radio = _this.orientationRadios[i];
                radio.addEventListener('change', _this.onOrientationChange);
            }
        });
        window.onresize = function () {
            _this.rotatorContainer.classList.add('hs-vanish');
            setTimeout(function () {
                _this.update3DRotator;
            }, 500);
            _this.rotatorContainer.classList.remove('hs-vanish');
        };
        document.addEventListener('shown.bs.modal', function () {
            _this.rotatorContainer.classList.remove('hs-vanish');
            _this.update3DRotator();
        });
        // set initials 
        this.onOrientationChange();
    }
    // delete this
    HS3DRotate.prototype.userOptions = function (ops) {
        console.log("DATA: " + JSON.stringify(ops));
        return;
    };
    HS3DRotate.prototype.rotate = function () {
        var angle = this.theta * this.selectedIndex * -1;
        this.HSThreeDRotator.style.transform = 'translateZ(' + -this.radius + 'px) ' + this.rotateFn + '(' + angle + 'deg)';
    };
    HS3DRotate.prototype.onOrientationChange = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            try {
                _this.isHorizontal = _this.checkedRadio.value == 'horizontal';
                _this.rotateFn = _this.isHorizontal ? 'rotateY' : 'rotateX';
                _this.update3DRotator();
                return resolve(true);
            }
            catch (e) {
                return reject(e);
            }
        });
    };
    HS3DRotate.prototype.update3DRotator = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            try {
                _this.cellWidth = _this.HSThreeDRotator.offsetWidth;
                _this.cellHeight = _this.HSThreeDRotator.offsetHeight;
                console.log(_this.cellHeight);
                _this.cellCount = _this.cellsRange.value;
                _this.theta = 360 / _this.cellCount;
                var cellSize = _this.isHorizontal ? _this.cellWidth : _this.cellHeight;
                _this.radius = Math.round((cellSize / 2) / Math.tan(Math.PI / _this.cellCount));
                for (var i = 0; i < _this.cells.length; i++) {
                    var cell = _this.cells[i];
                    if (i < _this.cellCount) {
                        // visible cell
                        if (cell.classList.contains('hs-vanish')) {
                            cell.classList.remove('hs-vanish');
                        }
                        var cellAngle = _this.theta * i;
                        cell.style.transform = _this.rotateFn + '(' + cellAngle + 'deg) translateZ(' + _this.radius + 'px)';
                    }
                    else {
                        // hidden cell
                        if (!cell.classList.contains('hs-vanish')) {
                            cell.classList.add('hs-vanish');
                        }
                        cell.style.transform = 'none';
                    }
                }
                return resolve(_this.rotate());
            }
            catch (e) {
                return reject(e);
            }
        });
    };
    return HS3DRotate;
}());
exports.HS3DRotate = HS3DRotate;
