import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {IdModels} from '../../models/Id';
import {MoviesService} from '../../../../services/movies.service';
import {IMovie} from '../../../../models/IMovie';
import {IVideo} from '../../../../models/IVideo';
import {DomSanitizer, SafeResourceUrl} from '@angular/platform-browser';
// @ts-ignore
import backdrop from '../../../../../backdrop.jpg';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  id: IdModels;
  movie: IMovie;
  localMovie: any = [];
  movieCount = 0;
  headerBGUrl: string;
  video: IVideo;
  playStatus = false;
  dangerousVideoUrl: string;
  videoUrl: SafeResourceUrl;

  constructor(private activatedRoute: ActivatedRoute,
              private router: Router, private moviesService: MoviesService,
              private sanitizer: DomSanitizer) {
    this.activatedRoute.params.subscribe(value => {
      this.id = this.router.getCurrentNavigation().extras.state as IdModels;
    });

  }

  ngOnInit(): void {
    this.moviesService.getMovieByID(this.id === undefined ? JSON.parse(localStorage.getItem('id')) : this.id).subscribe(value => {
        this.movie = value;
        this.movie.backdrop_path ?
          this.headerBGUrl = 'https://image.tmdb.org/t/p/original' + this.movie.backdrop_path :
          this.headerBGUrl = backdrop;
      }
    );
  }

  play(): void {
    this.moviesService.getVideoMovie(this.movie.id).subscribe(value => this.video = value);
    this.videoUrl = this.video.results[0].key;
    this.playStatus = true;
    this.dangerousVideoUrl = 'https://www.youtube.com/embed/' + this.videoUrl;
    this.videoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.dangerousVideoUrl);


  }

  list(): void {
    const movie = this.movie;
    const id = this.movie.id;
    const list = [];
    const localList = JSON.parse(localStorage.getItem('list'));
    if (localList ? (localList.length > 0) : false) {
      if (localList.every(value => value.id !== id)) {
        console.log('if');
        localList.push(this.movie);
        localStorage.setItem('list', JSON.stringify(localList));
      }
    } else {
      console.log('else');
      list.push(movie);
      localStorage.setItem('list', JSON.stringify(list));
    }
  }
}
