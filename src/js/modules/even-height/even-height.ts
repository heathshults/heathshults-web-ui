export default class EvenHeight {
  public evenRows: Array<any>;
  public evenRowChildren: Array<any>;
  
  constructor({ehSelector, ehChildSelector}: {ehSelector: string; ehChildSelector: string;}) {
    setTimeout(()=>{
      this.evenRows = Array.prototype.slice.call(document.querySelectorAll(ehSelector));
        console.log('evenRows: ');
        console.log(this.evenRows);
        
        this.evenRows.forEach(row => {
          const height = row.offsetHeight;
          this.evenRowChildren = row.querySelectorAll(ehChildSelector);
          
          console.log('height: '+ height);
          console.log('childnodes: ');
          console.log(this.evenRowChildren);
          
          this.evenRowChildren.forEach((node: HTMLElement) => {
            node.setAttribute('style', `height: ${height}px`);
          });
        });
      }, 2000);
  }
}


// const _EvenHeight = EvenHeight;
// export { _EvenHeight as EvenHeight };

new EvenHeight({ehSelector: '.even-height', ehChildSelector: 'col-md-3'});
