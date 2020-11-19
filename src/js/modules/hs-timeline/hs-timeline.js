/* eslint-disable no-console */
export function timeline() {
  
  // *====== TIMELINE ======* //
  // var timelineItemHeaders = [].prototype.slice.call(document.querySelectorAll('.hs-timeline-panel_header'))
  const timelineItemHeaders=document.querySelectorAll('.hs-timeline-panel_header');
  timelineItemHeaders.forEach(header => {

    let panel,panelItems,panelLeftRight,panelHeight;
    header.addEventListener('click',(event) => {

      if (event.target.parentElement.hasAttribute('class')) {
        try {
          panel=event.target.parentElement.closest('.hs-timeline-panel');
          panelHeight = event.target.offsetHeight;
          panelLeftRight=event.target.parentElement.closest('.hs-timeline-panel--left','.hs-timeline-panel--right');
          panel.classList.toggle('is-visible');
          if (panel.style.height===`${panelHeight} + 60px`) {
            panel.style.height='';
          } else {
            panel.style.height='134px';
          }
          panelLeftRight.classList.toggle('is-visible');
        }
        catch (error) {
          console.error(error);
        }
      }

    });
  });

}
timeline();
