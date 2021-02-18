import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';

import {apiKey} from '../shared/constants/constants';

import { Movie } from '../models/Movie.model';
import { MovieDetail } from "../models/MovieDetail.model";

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private http: HttpClient) { }

  getMovies(title:string):Observable<Movie[]>{
    return this.http.get<Movie[]>( `https://www.omdbapi.com/?s=${title}&apikey=${apiKey}`);
  }
  getMovieDetails(id: string): Observable<MovieDetail>{
    return this.http.get<MovieDetail>( `https://www.omdbapi.com/?i=${id}&apikey=${apiKey}`);
  }
}
