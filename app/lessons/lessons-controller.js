import LessonsModel from "./lessons-model.js";
import LessonsView from "./lessons-view.js";
import Publisher from '../publisher.js';

export default class LessonsController{
    constructor(){
        this.model = new LessonsModel();
        this.view = new LessonsView();

        this.model.loadResources();

        Publisher.subscribe(Publisher.events.MENU, this.handleMenuClick);
    }

    handleMenuClick = (info) => {
        console.log('CLICK TO MENU!!!', info);
        if(info === 'lessons'){
            const data = this.model.data;
            this.view.render(data);
        }
    }
}