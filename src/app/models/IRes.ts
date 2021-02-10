import {IMovie} from './IMovie';

export interface IRes {
  page: number;
  results: IMovie[];
  total_pages: number;
  total_results: number;
}
