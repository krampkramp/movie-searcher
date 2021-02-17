import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieDetail } from 'src/app/modals/MovieDetail.modal';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.page.html',
  styleUrls: ['./movie-details.page.scss'],
})
export class MovieDetailsPage implements OnInit {

  content: MovieDetail;

  constructor(private activatedRoute: ActivatedRoute, private movieService: MovieService) { }

  ngOnInit() {
    let id = this.activatedRoute.snapshot.paramMap.get('id');
    this.movieService.getMovieDetails(id).subscribe(res =>{
      this.content = res;
    })
  }

}
