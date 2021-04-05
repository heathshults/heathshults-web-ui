export default class EvenHeight {
    constructor({ ehSelector, ehChildSelector, evenRows, evenRowChildren }) {
        setTimeout(() => {
            evenRows = Array.prototype.slice.call(document.querySelectorAll(ehSelector));
            console.log('evenRows: ');
            console.log(evenRows);
            evenRows.forEach(row => {
                const height = row.offsetHeight;
                evenRowChildren = Array.prototype.slice.call(row.querySelectorAll(ehChildSelector));
                console.log('height: ' + height);
                console.log('childnodes: ');
                console.log(evenRowChildren);
                evenRowChildren.forEach((node) => {
                    const child = node;
                    child.setAttribute('style', `height: ${height}px`);
                });
            });
        }, 2000);
    }
}
// const _EvenHeight = EvenHeight;
// export { _EvenHeight as EvenHeight };
new EvenHeight({ ehSelector: '.even-height', ehChildSelector: 'col-md-3' });
