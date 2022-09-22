export default class ScheduleView{
    container = document.querySelector('.content-main');

    constructor(){

    }

    render({day, lessons}){
        console.log(lessons);
        const eventsHTML = `<h3>${ day }</h3><table class="table table-striped">
        ${ lessons.reduce((acc, { bell, lessons }) => (`${acc}<tr><td>${ bell.timeStart } - ${ bell.timeEnd }</td><td>${ lessons.name }</td></tr>`), '') }
        </table>`;
        this.container.innerHTML = eventsHTML;
    }
}