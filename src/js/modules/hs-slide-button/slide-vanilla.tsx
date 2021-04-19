
/**
 * Makes an element draggable.
 *
 * @param {HTMLElement} element - The element.
 */
function draggable(element) {
	let isMouseDown = false;

    // initial mouse X and Y for `mousedown`
    let mouseX;
    let mouseY;

    // element X and Y before and after move
    let elementX = 0;
    let elementY = 0;

	// mouse button down over the element
    element.addEventListener('mousedown', onMouseDown);

	/**
     * Listens to `mousedown` event.
     *
     * @param {Object} event - The event.
     */
	function onMouseDown({clientX, clientY}) {
        mouseX = clientX;
        mouseY = clientY;
        isMouseDown = true;
  }

	// mouse button released
    element.addEventListener('mouseup', onMouseUp);

	/**
     * Listens to `mouseup` event.
     *
     * @param {Object} event - The event.
     */
	function onMouseUp(event) {
        isMouseDown = false;
        elementX = parseInt(element.style.left) || 0;
        elementY = parseInt(element.style.top) || 0;
    }

	  // need to attach to the entire document
    // in order to take full width and height
    // this ensures the element keeps up with the mouse
    document.addEventListener('mousemove', onMouseMove);

	/**
     * Listens to `mousemove` event.
     *
     * @param {Object} event - The event.
     */
	function onMouseMove({clientX, clientY}) {
    if (!isMouseDown) return;
      const deltaX = clientX - mouseX;
      const deltaY = clientY - mouseY;
      element.style.left = `${elementX + deltaX}px`;
      element.style.top = `${elementY + deltaY}px`;
      element.style.transform = 'scale(.8)';

      doElsCollide(sb, dz)
  }
}

function onMouseOver(event) {
  if (!isMouseDown) return;
}
function onMouseOut(event) {
  isMouseDown = false;
}


/** 
onMousedown: function(event) {
  isMouseDown = true;
}
onMouseover: function(event) {
  if (!isMouseDown) return;
}
onMouseout: function(event) {
  isMouseDown = false;
}
draggableElement.addEventListener("mousedown", onMousedown)
draggableElement.addEventListener("mouseup", onMouseup)
// Attach to the body to avoid event dropoff
document.body.addEventListener("mousemove", onMousemove)

snap
&:not(.dragging) {
    transition-property:transform;
    transition-duration: 200ms;
    transition-timing-function:ease-in-out;
}

for draggingClasselement.style.transform = "translateY(10px)"
let trans = getComputedStyle(element).getPropertyValue("transform")

let trans = getComputedStyle(element).getPropertyValue('transform');
let matrix = trans.replace(/[^0-9\-.,]/g, '').split(',');
let ty = parseFloat(matrix.length > 6 ? matrix[13] : matrix[5]);
*/
