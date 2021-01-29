export class EvenHeight {
  public evenRows: any;
  public height: any;
  public evenRowChildren: any;
  
  public leveler(ehSelector: string):void {
    this.evenRows = Array.prototype.slice.call(document.querySelectorAll(ehSelector));
    return this.evenRows.forEach(row => {
      this.height = row.offsetHeight();
      this.evenRowChildren = Array.prototype.slice.call(row.childNodes);
      this.evenRowChildren.forEach(child => {
        child.style.height =this.height;
      });
    });
  }
}

