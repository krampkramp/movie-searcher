import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';

import {apiKey} from '../shared/constants/constants';
import { Movie } from '../modals/Movie.modal';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private http: HttpClient) { }

  getMovies(title:string):Observable<Movie[]>{
    return this.http.get<Movie[]>( `https://www.omdbapi.com/?s=${title}&apikey=${apiKey}`);
  }
}
