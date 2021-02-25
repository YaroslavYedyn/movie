import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {BehaviorSubject, Observable} from 'rxjs';
import {IMovie} from '../models/IMovie';
import {IRes} from '../models/IRes';
import {IVideo} from '../models/IVideo';
import {IShows} from '../models/IShows';

const enum endpoint {
  latest = 'movie/latest',
  now_playing = 'movie/now_playing',
  popular = 'movie/popular',
  top_rated = 'movie/top_rated',
  upcoming = 'movie/upcoming',
  trending = 'trending/all/week?',
  originals = 'discover/tv',
  movie = 'discover/movie',
  details = 'movie/',
  video = '/videos',
  search_movie = 'search/movie',
  search_show = 'search/tv'

}

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  private cartState = new BehaviorSubject<string>(JSON.parse(localStorage.getItem('localCart')));
  private URL = 'https://api.themoviedb.org/3/';
  private api_key = environment.api;

  constructor(private httpClient: HttpClient) {
  }

  getAllMovie(pageParam): Observable<IRes> {
    return this.httpClient.get<IRes>(`${this.URL}${endpoint.movie}`, {
      params: {
        api_key: this.api_key,
        page: pageParam,
      }
    });
  }

  getSearchMovie(queryInput): Observable<IRes> {
    return this.httpClient.get<IRes>(`${this.URL}${endpoint.search_movie}`, {
      params: {
        api_key: this.api_key,
        query: queryInput,
      }
    });
  }

  getSearchShow(queryInput): Observable<IShows> {
    return this.httpClient.get<IShows>(`${this.URL}${endpoint.search_show}`, {
      params: {
        api_key: this.api_key,
        query: queryInput,
      }
    });
  }

  getLatestMovie(): Observable<IMovie> {
    return this.httpClient.get<IMovie>(`${this.URL}${endpoint.latest}`, {
      params: {
        api_key: this.api_key
      }
    });
  }

  getNowPlayingMovie(): Observable<IRes> {
    return this.httpClient.get<IRes>(`${this.URL}${endpoint.now_playing}`, {
      params: {
        api_key: this.api_key
      }
    });
  }

  getPopularMovie(): Observable<IRes> {
    return this.httpClient.get<IRes>(`${this.URL}${endpoint.popular}`, {
      params: {
        api_key: this.api_key
      }
    });
  }

  getTopRatedMovie(): Observable<IRes> {
    return this.httpClient.get<IRes>(`${this.URL}${endpoint.top_rated}`, {
      params: {
        api_key: this.api_key
      }
    });
  }

  getUpcomingMovie(): Observable<IRes> {
    return this.httpClient.get<IRes>(`${this.URL}${endpoint.upcoming}`, {
      params: {
        api_key: this.api_key
      }
    });
  }

  getOriginalsMovie(pageNum): Observable<IShows> {
    return this.httpClient.get<IShows>(`${this.URL}${endpoint.originals}`, {
      params: {
        api_key: this.api_key,
        page: pageNum
      }
    });
  }

  getTrendingMovie(): Observable<IRes> {
    return this.httpClient.get<IRes>(`${this.URL}${endpoint.trending}`, {
      params: {
        api_key: this.api_key
      }
    });
  }

  getMovieByID(id): Observable<IMovie> {
    return this.httpClient.get<IMovie>(`${this.URL}${endpoint.details}${id}`, {
      params: {
        api_key: this.api_key
      }
    });
  }

  getVideoMovie(id): Observable<IVideo> {
    console.log(id, 'video id ');
    return this.httpClient.get<IVideo>(`${this.URL}${endpoint.details}${id}${endpoint.video}`, {
      params: {
        api_key: this.api_key
      }
    });
  }

  // localStorage
  getState(): BehaviorSubject<string> {
    return this.cartState;
  }

  setNewState(): void {
    this.cartState.next(JSON.parse(localStorage.getItem('movies')));
  }
}
