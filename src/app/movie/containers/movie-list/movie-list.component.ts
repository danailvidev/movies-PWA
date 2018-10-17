import { Component, OnInit } from '@angular/core';
import { Movie } from '../../models/movie';

@Component({
    selector: 'app-movie-list',
    template: `
        {{movies | json}}
  `,
    styles: []
})
export class MovieListComponent implements OnInit {
    public movies: Movie[];

    constructor() { }

    ngOnInit() {
    }

}
