export default class Publisher{
    static subscribes = {};

    static subscribe(event, func){
        if(!Publisher.subscribes[event]){
            Publisher.subscribes[event] = [];
        }

        Publisher.subscribes[event].push(func);
    }

    static notify(event, info){
        if(!Publisher.subscribes[event]){
            Publisher.subscribes[event] = [];
        }
        Publisher.subscribes[event].forEach(func => func(info));
    }

    static events = {
        MENU : 'Click on the navigation bar menu and select the window for visualization'
    }
}