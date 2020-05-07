import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProjectClass } from './Classes/project';
import { ProjectTech } from './Classes/project-tech';
//import * as projectData from '../assets/projects.json';

@Injectable({
  providedIn: 'root'
})
export class ProjectInfoService {

  constructor(private http: HttpClient) {
      //console.log(projectData);
  }
}
