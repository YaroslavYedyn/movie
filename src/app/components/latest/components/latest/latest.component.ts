import {Component, OnInit} from '@angular/core';
import {MoviesService} from '../../../../services/movies.service';

@Component({
  selector: 'app-latest',
  templateUrl: './latest.component.html',
  styleUrls: ['./latest.component.css']
})
export class LatestComponent implements OnInit {

  constructor(private movieService: MoviesService) {
  }

  ngOnInit(): void {
    this.movieService.getLatestMovie().subscribe(value => console.log(value));
  }

}
