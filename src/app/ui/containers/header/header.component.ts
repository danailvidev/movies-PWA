import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-header',
    template: `
    <nav class="navbar navbar-expand navbar-blue fixed-top">
        <a routerLink="/" class="navbar-brand">
            <img [attr.src]="logo" [attr.alt]="title" width="30" height="30">
            {{title}}
        </a>
        <div class="collapse navbar-collpase">     
            <div class="navbar-nav">         
                <a class="nav-item nav-link" *ngFor="let link of links"
                [routerLink]="link.urk" routerLinkActive="active"
                [routerLinkActiveOptions]="{ exact: true }">         
                {{ link.label }}         
                </a>     
            </div> 
        </div>
    </nav>
  `,
    styles: []
})
export class HeaderComponent implements OnInit {
    public logo = 'assets/logo.svg';
    public title = 'Movies Rebirth';
    public links = [{
        label: 'Movies',
        url: '/Movies',
    }]

    constructor() { }

    ngOnInit() {
    }

}
