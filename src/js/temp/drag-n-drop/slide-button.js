"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = PluginsSnappable;

var _draggable = require("@shopify/draggable");

function PluginsSnappable() {
  var containerSelector = '#Snappable .BlockLayout';
  var containers = document.querySelectorAll(containerSelector);

  if (containers.length === 0) {
    return false;
  }

  var swappable = new _draggable.Swappable(containers, {
    mirror: {
      appendTo: containerSelector,
      constrainDimensions: true
    },
    plugins: [_draggable.Plugins.Snappable]
  }); // --- Draggable events --- //

  swappable.on('drag:start', function (evt) {
    if (evt.originalSource.classList.contains('Block--typeStripes')) {
      evt.cancel();
    }
  });
  return swappable;
}