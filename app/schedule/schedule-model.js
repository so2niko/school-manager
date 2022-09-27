export default class ScheduleModel{
    dataLink = './materials/data.json';
    days = ['Понеділок', 'Вівторок', 'Середа', 'Четвер', 'П\'ятниця', 'Субота', 'Неділя'];
    constructor(){

    }

    loadResources(){
        return fetch(this.dataLink).then(r => r.json()).then((d) => this.prepareData(d));
    }

    prepareData(d){
        this.rawData = d;
        this.schedule = d.schedule.map(day => {
            const lessons = day.lessons.map(l => {
                const bell = d.bells.find(el => el.id == l.bell);
                const lessons = d.lessons.find(el => el.id == l.lesson);
                return { bell, lessons };
            });
            lessons.sort((a, b) => a.bell.number - b.bell.number);
            return {
                day : day.day,
                lessons
            }
        });
        return this.schedule[0];//TODO: add logic for day  of week
    }

    getScheduleByDay(indexOfDay){
        const inDay = this.days[indexOfDay];
        return this.schedule.find(({ day }) => inDay === day);
    }
}