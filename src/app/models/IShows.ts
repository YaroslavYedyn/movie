import {IShow} from './IShow';

export interface IShows {
  page: number;
  results: IShow[];
  total_pages: number;
  total_results: number;
}
