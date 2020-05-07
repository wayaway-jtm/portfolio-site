import { Component, OnInit } from '@angular/core';
import { ProjectInfoService } from '../project-info.service';
import { ProjectClass } from '../Classes/project';

@Component({
  selector: 'app-projects-route',
  templateUrl: './projects-route.component.html',
  styleUrls: ['./projects-route.component.css']
})
export class ProjectsRouteComponent implements OnInit {

    public projects: ProjectClass[] = [];
  constructor(private projectInfoService: ProjectInfoService) {
      this.projects = projectInfoService.getProjectData();
  }

  ngOnInit(): void {
  }

}
