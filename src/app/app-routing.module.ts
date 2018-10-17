import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './ui/containers/layout/layout.component';

const routes: Routes = [{
    path: '',
    component: LayoutComponent,
    children: [{
        path: '',
        pathMatch: 'full',
        redirectTo: '/movies',
    }, {
        path: 'movies',
        loadChildren: './movie/movie.module#MovieModule'
    }],
}];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
