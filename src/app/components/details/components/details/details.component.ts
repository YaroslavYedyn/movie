import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {IdModels} from '../Id.models';
import {MoviesService} from '../../../../services/movies.service';
import {IMovie} from '../../../../models/IMovie';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  id: IdModels;
  movie: IMovie;
  headerBGUrl: string;

  constructor(private activatedRoute: ActivatedRoute, private router: Router, private moviesService: MoviesService) {
    this.activatedRoute.params.subscribe(value => {
      this.id = this.router.getCurrentNavigation().extras.state as IdModels;
    });
  }

  ngOnInit(): void {
    this.moviesService.getMovieByID(this.id).subscribe(value => {
      this.movie = value;
      this.headerBGUrl = 'https://image.tmdb.org/t/p/original' + this.movie.backdrop_path;

    });

  }

}
