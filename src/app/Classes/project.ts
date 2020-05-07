import { ProjectTech } from './project-tech';

export class ProjectClass {

    public id: string = "";                 // id of project
    public title: string = "";              // title of project
    public gen_overview: string = "";       // general description of project
    public tech_overview: string = "";      // overview of tech used in project
    public tech_used: ProjectTech[] = [];   // details of each tech used in project
    public gh_link: string = "";            // link to GitHub repo for project
    public site_link: string = "";          // link to site where project is hosted

    constructor(initID: string, initTitle: string, initGenOverview: string,
        initTechOverview: string, techUsed: ProjectTech[],
        githubURL: string = "", siteLink: string = "") {
        this.id = initID;
        this.title = initTitle;
        this.gen_overview = initGenOverview;
        this.tech_overview = initTechOverview;
        this.tech_used = techUsed;
        this.gh_link = githubURL;
        this.site_link = siteLink;
    }
}
