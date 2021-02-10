import {Component, OnInit} from '@angular/core';
import {MoviesService} from '../../../../services/movies.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private moviesService: MoviesService) {
  }

  ngOnInit(): void {
    this.moviesService.getLatestMovie().subscribe(value => console.log(value,'latest'));
    this.moviesService.getNowPlayingMovie().subscribe(value => console.log(value,'now'));
    this.moviesService.getOriginalsMovie().subscribe(value => console.log(value,'original'));
    this.moviesService.getPopularMovie().subscribe(value => console.log(value,'popular'));
    this.moviesService.getTopRatedMovie().subscribe(value => console.log(value,'top'));
    this.moviesService.getUpcomingMovie().subscribe(value => console.log(value,'up'));
  }

}
