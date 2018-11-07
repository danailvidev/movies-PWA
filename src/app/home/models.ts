export interface MoviesResponse {
    Search: Array<MovieModel>,
    totalResults: string | number,
    Response: string | boolean,
    Error?: string
}

export class MovieModel {
    Title: string;
    Year: string;
    imdbID: string;
    Type: string;
    Poster: string;
}