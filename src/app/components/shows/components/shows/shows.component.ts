import {Component, OnInit} from '@angular/core';
import {MoviesService} from '../../../../services/movies.service';
import {IShows} from '../../../../models/IShows';
import {IShow} from '../../../../models/IShow';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-shows',
  templateUrl: './shows.component.html',
  styleUrls: ['./shows.component.css']
})
export class ShowsComponent implements OnInit {
  response: IShows;
  shows: IShow[];
  title = new FormControl('', []);
  form = new FormGroup({
    title: this.title
  });


  constructor(private moviesService: MoviesService) {
  }

  ngOnInit(): void {
    this.moviesService.getOriginalsMovie(1).subscribe(value => {
      this.response = value;
      this.shows = value.results;
    });
  }

  nextPage(config): void {
    this.moviesService.getOriginalsMovie(this.response.page + config).subscribe(value => {
      this.response = value;
      this.shows = value.results;

    });
  }

  firstPage(): void {
    this.moviesService.getOriginalsMovie(1).subscribe(value => {
      this.response = value;
      this.shows = value.results;

    });
  }

  lastPage(): void {
    this.moviesService.getOriginalsMovie(this.response.total_pages).subscribe(value => {
      this.response = value;
      this.shows = value.results;

    });
  }

  submit(): void {
    console.log(this.form.value);
    if (this.title.value === '') {
      this.moviesService.getOriginalsMovie(this.response.total_pages).subscribe(value => {
        this.response = value;
        this.shows = value.results;

      });
    } else {
      this.moviesService.getSearchShow(this.title.value).subscribe(value => {
        this.response = value;
        this.shows = value.results;

      });
    }
  }

}
