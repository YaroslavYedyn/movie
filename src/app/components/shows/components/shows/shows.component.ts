import {Component, OnInit} from '@angular/core';
import {MoviesService} from '../../../../services/movies.service';
import {IShows} from '../../../../models/IShows';
import {IShow} from '../../../../models/IShow';

@Component({
  selector: 'app-shows',
  templateUrl: './shows.component.html',
  styleUrls: ['./shows.component.css']
})
export class ShowsComponent implements OnInit {
  response: IShows;
  shows: IShow[];


  constructor(private moviesService: MoviesService) {
  }

  ngOnInit(): void {
    this.moviesService.getOriginalsMovie(1).subscribe(value => {
      this.response = value;
      this.shows = value.results;
    });
  }

}
