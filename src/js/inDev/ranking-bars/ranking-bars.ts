(() => {
  // ====== RANKING BARS
  const theBars=document.querySelectorAll('.hs-ranking-bar');
  theBars.forEach(aBar => {
    
    // eslint-disable-next-line no-undef
    const barWidth = document.querySelector(aBar).getAttribute('aria-valuenow');
    document.querySelector(aBar).setAttribute('style',`width: ${barWidth}%`);
    // var barWidth=$(aBar).attr('aria-valuenow');
    // $(aBar).attr('style',`width: ${barWidth}%`);
  });
  
})(); // End of use strict
