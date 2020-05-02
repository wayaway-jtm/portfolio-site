import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-contact-route',
    templateUrl: './contact-route.component.html',
    styleUrls: ['./contact-route.component.css']
})
export class ContactRouteComponent implements OnInit {

    public showEmail: boolean = false;
    constructor() { }

    ngOnInit(): void {
    }

    toggleShowEmail() {
        this.showEmail = !this.showEmail;
    }

}
