import {Component, OnInit} from '@angular/core';
import {MoviesService} from '../../../../services/movies.service';
import {IRes} from '../../../../models/IRes';
import {IMovie} from '../../../../models/IMovie';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  movies: IRes;
  prefixImg = 'https://image.tmdb.org/t/p/original';
  headerBGUrl: string;
  title = new FormControl('', []);
  form = new FormGroup({
    title: this.title
  });

  constructor(private moviesService: MoviesService) {
  }

  ngOnInit(): void {
    this.moviesService.getAllMovie(1).subscribe(value => {
      this.movies = value;
      this.headerBGUrl = 'https://image.tmdb.org/t/p/original' + value.results[1].backdrop_path;
    });
  }

  nextPage(config): void {
    this.moviesService.getAllMovie(this.movies.page + config).subscribe(value => {
      this.movies = value;
      this.headerBGUrl = 'https://image.tmdb.org/t/p/original' + value.results[1].backdrop_path;
    });
  }

  firstPage(): void {
    this.moviesService.getAllMovie(1).subscribe(value => {
      this.movies = value;
      this.headerBGUrl = 'https://image.tmdb.org/t/p/original' + value.results[1].backdrop_path;
    });
  }

  lastPage(): void {
    this.moviesService.getAllMovie(this.movies.total_pages).subscribe(value => {
      this.movies = value;
      this.headerBGUrl = 'https://image.tmdb.org/t/p/original' + value.results[1].backdrop_path;
    });
  }

  submit(): void {
    console.log(this.form.value);
    if (this.title.value === '') {
      this.moviesService.getAllMovie(this.movies.total_pages).subscribe(value => {
        this.movies = value;
        this.headerBGUrl = 'https://image.tmdb.org/t/p/original' + value.results[1].backdrop_path;
      });
    } else {
      this.moviesService.getSearchMovie(this.title.value).subscribe(value => {
        this.movies = value;
        this.headerBGUrl = 'https://image.tmdb.org/t/p/original' + value.results[1].backdrop_path;
      });
    }
  }
}
