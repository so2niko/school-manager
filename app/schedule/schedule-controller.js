import ScheduleModel from "./schedule-model.js";
import ScheduleView from "./schedule-view.js";
import Publisher from '../publisher.js';

export default class ScheduleController{
    constructor(){
        this.model = new ScheduleModel();
        this.view = new ScheduleView(this.handleDayClick);

        this.model.loadResources().then(d => this.view.render(d));

        Publisher.subscribe(Publisher.events.MENU, this.handleMenuClick);
    }

    handleMenuClick = (info) => {
        if(info === 'main'){
            const data = this.model.schedule[0];//TODO: change to automate day of week
            this.view.render(data);
        }
    }

    handleDayClick = (ev) => {
        console.log('DAY CLICKED: ', ev.target.value);
        const data = this.model.getScheduleByDay(ev.target.value);
        console.log('data', data);
        this.view.render(data);
    }
}