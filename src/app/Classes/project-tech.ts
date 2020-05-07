export class ProjectTech {

    public name: string = "";
    public source: string = "";
    public iconFile: string = "";

    constructor(observableObj: any) {
        this.name = observableObj.name;
        this.source = observableObj.source;
        this.iconFile = observableObj.iconFile;
    }
}
