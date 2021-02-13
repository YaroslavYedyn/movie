import {Component, OnInit} from '@angular/core';
import {IRes} from '../../models/IRes';
import {IMovie} from '../../models/IMovie';
import {MoviesService} from '../../services/movies.service';
import {IShows} from '../../models/IShows';
import {UserService} from '../../services/user.service';

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
  request_token: string;


  constructor(private moviesService: MoviesService, private userService: UserService) {

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
    this.userService.token().subscribe(value => this.request_token = value.request_token);

  }

  token(): void {
    console.log(this.request_token);
    this.userService.auth(this.request_token).subscribe(value => console.log(value));
  }
}
