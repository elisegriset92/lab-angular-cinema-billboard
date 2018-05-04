import {Component, OnInit} from '@angular/core';
import {ServiceService} from '../service/service.service';
import {Movies} from '../service/movies-data';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css'],
})
export class MovieComponent implements OnInit {
  movieId: any;
  movieInfo: Movies;

  constructor(
    private reqThang: ActivatedRoute,
    public movieTruc: ServiceService,
    private resThang: Router
  ) {}

  ngOnInit() {
    this.reqThang.paramMap.subscribe(myParams => {
      this.movieId = myParams.get('blahId');
      this.movieInfo = this.movieTruc.getMovie(this.movieId);
    });
  }
}
