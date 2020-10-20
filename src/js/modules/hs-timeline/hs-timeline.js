/* eslint-disable no-console */
export function timeline() {
  
  // *====== TIMELINE ======* //
  // var timelineItemHeaders = [].prototype.slice.call(document.querySelectorAll('.timeline-panel_header'))
  const timelineItemHeaders=document.querySelectorAll('.timeline-panel_header');
  timelineItemHeaders.forEach(header => {

    let panel,panelItems,panelLeftRight,icon;
    header.addEventListener('click',(event) => {

      if (event.target.parentElement.hasAttribute('class')) {
        try {
          panel=event.target.parentElement.closest('.timeline-panel');
          panelLeftRight=event.target.parentElement.closest('.timeline-panel--left','.timeline-panel--right');
          panel.classList.toggle('visible');
          if (panel.style.height==='134px') {
            panel.style.height='';
          } else {
            panel.style.height='134px';
          }
          panelLeftRight.classList.toggle('visible');
        }
        catch (error) {
          console.error(error);
        }
      }

    });
  });

}
timeline();
