import LessonsModel from "./lessons-model.js";
import LessonsView from "./lessons-view.js";

export default class LessonsController{
    constructor(){
        this.model = new LessonsModel();
        this.view = new LessonsView();

        this.model.loadResources().then(d => this.view.render(d));
    }
}