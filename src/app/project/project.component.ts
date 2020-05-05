import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-project',
    templateUrl: './project.component.html',
    styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

    @Input() title: string = ""; // title of project
    @Input() gen_overview: string = ""; // general description of project
    @Input() tech_overview: string = ""; // overview of tech used in project
    @Input() img_src: string = "";

    constructor() { }

    ngOnInit(): void {
    }

}
