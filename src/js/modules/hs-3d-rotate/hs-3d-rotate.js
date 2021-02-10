var HS3DRotator = document.querySelector('.hs-3d-rotator');
var cells = HS3DRotator.querySelectorAll('.hs-3d-rotator__cell');
var cellCount; // cellCount set from cells-range input value
var selectedIndex = 0;
var cellWidth = HS3DRotator.offsetWidth;
var cellHeight = HS3DRotator.offsetHeight;
var isHorizontal = true;
var rotateFn = isHorizontal ? 'rotateY' : 'rotateX';
var radius;
var theta;
// console.log( cellWidth, cellHeight );
function rotateCarousel() {
    var angle = theta * selectedIndex * -1;
    HS3DRotator.style.transform = "translateZ(" + -radius + "px) " + rotateFn + "(" + angle + "deg)";
}
var prevButton = document.querySelector('.hs-3d-rotator-prev');
prevButton.addEventListener('click', function () {
    selectedIndex--;
    rotateCarousel();
});
var nextButton = document.querySelector('.hs-3d-rotator-next');
nextButton.addEventListener('click', function () {
    selectedIndex++;
    rotateCarousel();
});
var cellsRange = document.querySelector('.hs-3d-rotator-cells-range');
cellsRange.addEventListener('change', changeCarousel);
cellsRange.addEventListener('input', changeCarousel);
function changeCarousel() {
    cellCount = cellsRange.value;
    theta = 360 / cellCount;
    var cellSize = isHorizontal ? cellWidth : cellHeight;
    radius = Math.round((cellSize / 2) / Math.tan(Math.PI / cellCount));
    for (var i = 0; i < cells.length; i++) {
        var cell = cells[i];
        if (i < cellCount) {
            // visible cell
            cell.style.opacity = 1;
            var cellAngle = theta * i;
            cell.style.transform = rotateFn + "(" + cellAngle + "deg) translateZ(" + radius + "px)";
        }
        else {
            // hidden cell
            cell.style.opacity = 0;
            cell.style.transform = 'none';
        }
    }
    rotateCarousel();
}
var orientationInputs = document.querySelectorAll('input[name="orientation"]');
(function () {
    for (var i = 0; i < orientationInputs.length; i++) {
        var radio = orientationInputs[i];
        radio.addEventListener('change', onOrientationChange);
    }
})();
function onOrientationChange() {
    var checkedRadioInput = document.querySelector('input[name="orientation"]:checked');
    isHorizontal = checkedRadioInput.value == 'horizontal';
    rotateFn = isHorizontal ? 'rotateY' : 'rotateX';
    changeCarousel();
}
// set initials
onOrientationChange();
