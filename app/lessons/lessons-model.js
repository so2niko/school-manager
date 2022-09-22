export default class LessonsModel{
    dataLink = './materials/data.json';

    constructor(){

    }

    loadResources(){
        return fetch(this.dataLink).then(r => r.json()).then(d => {
            this.data = d.lessons;
            return this.data;
        });
    }
}