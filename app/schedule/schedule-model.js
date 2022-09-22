export default class ScheduleModel{
    dataLink = './materials/data.json';

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
            return {
                day : day.day,
                lessons
            }
        });
        return this.schedule[0];//TODO: add logic for day  of week
    }
}