import { Component, OnInit } from '@angular/core';
import { Movie } from '../../models/movie';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-movie-list',
    templateUrl: 'movies-list.component.html',
    styleUrls: ['movies-list.component.scss']
})
export class MovieListComponent implements OnInit {
    public movies: Movie[];
    subscription: Subscription = new Subscription();

    constructor(private http:HttpClient) { }

    ngOnInit() {
       this.getMovies(); 
    }

    getMovies() {
        this.subscription.add(
            this.http.get<any>('http://www.omdbapi.com/?apikey=fee8d867&y=2017&t=sex').subscribe(res => {
                console.log(res);
                this.movies = res;
            })
        )
    }

}
