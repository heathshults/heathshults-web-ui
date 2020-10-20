
const cssClassWatcher = (nodeToWatch) => {
  function mutationsCallback(mutationList, observer) {
    mutationList.forEach( (mutation) => {
      switch(mutation.type) {
        case 'childList':
          /* One or more children have been added to and/or removed
             from the tree.
             (See mutation.addedNodes and mutation.removedNodes.) */
          break;
        case 'attributes':
              console.log("Attribute name " + mutation.attributeName +
              " changed to " + mutation.target[mutation.attributeName] +
              " (was " + mutation.oldValue + ")");
              break;
      }
    });
  }
  
  
  
  const targetNode = document.querySelector(nodeToWatch);
  const observerOptions = {
    childList: true,
    attributes: true,
    
    // Omit (or set to false) to observe only changes to the parent node
    subtree: true 
  };
  
  const observer = new MutationObserver(mutationsCallback);
  observer.observe(targetNode, observerOptions);

};
export default cssClassWatcher;
