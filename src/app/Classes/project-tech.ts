export class ProjectTech {

    public name: string = "";
    public source: string = "";
    public icon: string = "";

    constructor(observableObj: any) {
        this.name = observableObj.name;
        this.source = observableObj.source;
        this.icon = observableObj.iconFile;
    }
}
