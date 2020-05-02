import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-contact-route',
    templateUrl: './contact-route.component.html',
    styleUrls: ['./contact-route.component.css']
})
export class ContactRouteComponent implements OnInit {

    public showEmail: boolean = false;
    public showPhoneNum: boolean = false;
    constructor() { }

    ngOnInit(): void {
    }

    toggleShow(contactType: string) {
        if (contactType.toLowerCase() === 'email') {
            this.showEmail = !this.showEmail;
        } else if (contactType.toLowerCase() === 'phone') {
            this.showPhoneNum = !this.showPhoneNum;
        }
    }

}
