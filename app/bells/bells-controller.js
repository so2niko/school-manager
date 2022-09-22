import BellsModel from "./bells-model.js";
import BellsView from "./bells-view.js";
import Publisher from '../publisher.js';

export default class BellsController{
    constructor(){
        this.model = new BellsModel();
        this.view = new BellsView();

        this.model.loadResources();

        Publisher.subscribe(Publisher.events.MENU, this.handleMenuClick);
    }

    handleMenuClick = (info) => {
        if(info === 'bells'){
            const data = this.model.data;
            this.view.render(data);
        }
    }
}