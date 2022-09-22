import NavbarView from "./navbar-view.js";
import Publisher from "../publisher.js";

export default class NavbarController{
    constructor(){
        this.view = new NavbarView(this.handleClickMenu);

        this.view.render();
    }

    handleClickMenu = ev => {
        const link = ev.target.dataset.link;
        if(link){
            Publisher.notify(Publisher.events.MENU, link);
            this.view.render(link);
        }
    }
}