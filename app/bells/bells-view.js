export default class BellsView{
    container = document.querySelector('.content-main');

    constructor(){

    }

    render(bells){
        const lessonsHTML = `<table class="table table-striped">
        ${ bells.reduce((acc, { id, number, timeStart, timeEnd }) => {
            return (`${acc}<tr data-id="${ id }">
            <td>${ number }</td>
            <td>${ timeStart } - ${ timeEnd }</td></tr>`);
        }, '') }
        </table>`;
        this.container.innerHTML = lessonsHTML;
    }
}