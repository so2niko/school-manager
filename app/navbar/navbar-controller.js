import NavbarView from "./navbar-view.js";

export default class NavbarController{
    constructor(){
        this.view = new NavbarView(this.handleClickMenu);

        this.view.render();
    }

    handleClickMenu = ev => {
        const link = ev.target.dataset.link;
        if(link){
            console.log(`TODO: click on ${ link } tab`);
            this.view.render(link);
        }
    }
}