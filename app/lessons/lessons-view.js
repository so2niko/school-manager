export default class LessonsView{
    container = document.querySelector('.content-main');

    constructor(){

    }

    render(lessons){
        const lessonsHTML = `<table class="table table-striped">
        ${ lessons.reduce((acc, { id, name, teacher, link1, link2 }) => (`${acc}<tr><td data-id="${ id }">${ name }</td></tr>`), '') }
        </table>`;
        this.container.innerHTML = lessonsHTML;
    }
}