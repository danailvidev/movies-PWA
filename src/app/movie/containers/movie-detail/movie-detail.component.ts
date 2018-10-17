import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from '../../models/movie';

@Component({
  selector: 'app-movie-detail',
  template: `
   {{movie | json}}
  `,
  styles: []
})
export class MovieDetailComponent implements OnInit {
    movie: Movie;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.movie.id = this.route.snapshot.paramMap.get('id');
  }

}
