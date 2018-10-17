import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MovieListComponent } from './containers/movie-list/movie-list.component';
import { MovieDetailComponent } from './containers/movie-detail/movie-detail.component';

const routes: Routes = [{
    path: '',
    component: MovieListComponent,
}, {
    path: ':id',
    component: MovieDetailComponent,
}]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MovieRoutingModule { }
