import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';
import {IMovie} from '../models/IMovie';
import {IRes} from '../models/IRes';

const enum endpoint {
  latest = 'movie/latest',
  now_playing = 'movie/now_playing',
  popular = 'movie/popular',
  top_rated = 'movie/top_rated',
  upcoming = 'movie/upcoming',
  trending = 'trending/all/week?',
  originals = 'discover/tv',
  details = 'movie/'
}

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  private URL = 'https://api.themoviedb.org/3/';
  private api_key = environment.api;

  constructor(private httpClient: HttpClient) {
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

  getOriginalsMovie(): Observable<IRes> {
    return this.httpClient.get<IRes>(`${this.URL}${endpoint.originals}`, {
      params: {
        api_key: this.api_key
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
}
