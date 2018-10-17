import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MovieRoutingModule } from './movie-routing.module';
import { MovieListComponent } from './containers/movie-list/movie-list.component';
import { MovieDetailComponent } from './containers/movie-detail/movie-detail.component';

@NgModule({
  imports: [
    CommonModule,
    MovieRoutingModule
  ],
  declarations: [MovieListComponent, MovieDetailComponent]
})
export class MovieModule { }
