export default class EvenHeight {
  
  constructor({ehSelector, ehChildSelector, evenRows, evenRowChildren}: {ehSelector: string; ehChildSelector: string; evenRows?: Array<any>; evenRowChildren?: Array<any>;}) {
    setTimeout(()=>{
      evenRows = Array.prototype.slice.call(document.querySelectorAll(ehSelector));
      // console.log('evenRows: ');
      // console.log(evenRows);

        evenRows.forEach(row => {
          const height = row.offsetHeight;
          evenRowChildren = Array.prototype.slice.call(row.querySelectorAll(ehChildSelector));

          // console.log('height: '+ height);
          // console.log('childnodes: ');
          // console.log(evenRowChildren);

          evenRowChildren.forEach((node) => {
            const child = node as HTMLDivElement;
            child.setAttribute('style', `height: ${height}px`);
          });
        });
    }, 500);
  }
}

