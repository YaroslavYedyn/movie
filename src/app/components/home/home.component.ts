import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {MoviesService} from '../../services/movies.service';
import {IRes} from '../../models/IRes';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  trending: IRes;
  @ViewChild('stickHeader') header: ElementRef;
  headerBGUrl: string;

  constructor(private moviesService: MoviesService) {
  }

  ngOnInit(): void {
    this.moviesService.getTrendingMovie().subscribe(value => {
      this.trending = value;
      this.headerBGUrl = 'https://image.tmdb.org/t/p/original' + this.trending.results[1].backdrop_path;
    });
  }

}
