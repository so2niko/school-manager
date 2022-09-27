export default class ScheduleView{
    container = document.querySelector('.content-main');
    days = ['Понеділок', 'Вівторок', 'Середа', 'Четвер', 'П\'ятниця', 'Субота', 'Неділя'];

    constructor(){

    }

    render({day, lessons}){
        console.log(lessons);
        const daysSelectHTML = this.getDaySelect();
        const eventsHTML = `<table class="table table-striped">
        ${ lessons.reduce((acc, { bell, lessons }) => (`${acc}<tr><td>${ bell.timeStart } - ${ bell.timeEnd }</td><td>${ lessons.name }</td></tr>`), '') }
        </table>`;
        this.container.innerHTML = `${ daysSelectHTML }${ eventsHTML }`;
    }

    getDaySelect(){
        return `<select class="form-select" aria-label="Обрати день тижня">
        ${
            this.days.reduce((acc, day, i) => `${ acc }<option value="${ i }">${ day }</option>`,'')
        }
        </select>`;
    }
}

