export class ProjectClass {

    public title: string = "";         // title of project
    public gen_overview: string = "";  // general description of project
    public tech_overview: string = ""; // overview of tech used in project
    public img_src: string = "";       // url or uri to icon or sample image
    public gh_link: string = "";       // link to GitHub repo for project
    public site_link: string = "";     // link to site where project is hosted

    constructor(initTitle: string, generalOverview: string,
        techOverview: string, imgSrc: string = "",
        githubURL: string = "", siteLink: string = "") {
        this.title = initTitle;
        this.gen_overview = generalOverview;
        this.tech_overview = techOverview;
        this.img_src = imgSrc;
        this.gh_link = githubURL;
        this.site_link = siteLink;
    }
}
