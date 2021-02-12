import {Component, OnInit} from '@angular/core';
import {IRes} from '../../models/IRes';
import {IMovie} from '../../models/IMovie';
import {MoviesService} from '../../services/movies.service';
import {IShows} from '../../models/IShows';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  trending: IRes;
  nowPlaying: IMovie[];
  upComing: IRes;
  topRated: IRes;
  popular: IRes;
  originals: IShows;
  latest: IMovie;
  headerBGUrl: string;
  index = Math.abs(Math.ceil(Math.random() * (0 - 20)));


  constructor(private moviesService: MoviesService) {
    console.log(this.index);


  }

  ngOnInit(): void {
    this.moviesService.getTrendingMovie().subscribe(value => {
      this.trending = value;
      this.headerBGUrl = 'https://image.tmdb.org/t/p/original' + this.trending.results[this.index].backdrop_path;

    });
    this.moviesService.getNowPlayingMovie().subscribe(value => this.nowPlaying = value.results);
    this.moviesService.getUpcomingMovie().subscribe(value => this.upComing = value);
    this.moviesService.getTopRatedMovie().subscribe(value => this.topRated = value);
    this.moviesService.getPopularMovie().subscribe(value => this.popular = value);
    this.moviesService.getOriginalsMovie(2).subscribe(value => this.originals = value);
  }

}
