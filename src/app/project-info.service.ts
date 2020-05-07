import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProjectClass } from './Classes/project';
import { ProjectTech } from './Classes/project-tech';
import projectData from '../assets/projects.json';

@Injectable({
    providedIn: 'root'
})
export class ProjectInfoService {

    private formattedProjectData: ProjectClass[] = [];

    constructor(private http: HttpClient) {
        for (const p of projectData) {
            this.formattedProjectData.push(new ProjectClass(
                p.id, p.title, p.genOverview, p.techOverview, p.techUsed, p.githubURL, p.siteURL));
        }
    }

    ngOnInit(): void {
        //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        //Add 'implements OnInit' to the class.
        //console.log(this.projectData);

    }

    getProjectData(): ProjectClass[] {
        return this.formattedProjectData;
    }
}
