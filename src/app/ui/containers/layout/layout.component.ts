import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  template: `
  <app-header></app-header>
  <div class="container my-8 py-8">
    <router-outlet></router-outlet>
  </div>
  <app-footer></app-footer>
  `,
  styles: []
})
export class LayoutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
