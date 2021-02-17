import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../services/movie.service';
import { Movie } from '../../modals/Movie.modal';


@Component({
  selector: 'app-movies',
  templateUrl: './movies.page.html',
  styleUrls: ['./movies.page.scss'],
})
export class MoviesPage implements OnInit {

  results: Movie[];

  constructor(private movieService: MovieService) { }

  ngOnInit() {
  }

  searchChanged(event): void {
    this.movieService.getMovies(event.target.value).subscribe(res =>{
      this.results = res["Search"];      
    });
  }
}
