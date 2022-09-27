export default class ScheduleView{
    container = document.querySelector('.content-main');
    days = ['Понеділок', 'Вівторок', 'Середа', 'Четвер', 'П\'ятниця', 'Субота', 'Неділя'];

    constructor(handleDayClick){
        this.handleDayClick = handleDayClick;
    }

    render({day, lessons}){
        console.log(lessons);
        const daysSelectHTML = this.getDaySelect(day);
        const eventsHTML = `<table class="table table-striped">
        ${ lessons.reduce((acc, { bell, lessons }) => (`${acc}<tr><td>${ bell.timeStart } - ${ bell.timeEnd }</td><td>${ lessons.name }</td></tr>`), '') }
        </table>`;
        this.container.innerHTML = `${ daysSelectHTML }${ eventsHTML }`;

        this.container.querySelector('.select-day-main').addEventListener('input', this.handleDayClick);
    }

    getDaySelect(dayN){
        return `<select class="form-select select-day-main" aria-label="Обрати день тижня">
        ${
            this.days.reduce((acc, day, i) => `${ acc }<option ${ dayN === day && 'selected' } value="${ i }">${ day }</option>`,'')
        }
        </select>`;
    }
}

