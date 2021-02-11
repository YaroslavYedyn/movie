import {Component, Input, OnInit} from '@angular/core';
import {IMovie} from '../../models/IMovie';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input()
  card: IMovie;
  prefixImg = 'https://image.tmdb.org/t/p/original';
  constructor() {
  }

  ngOnInit(): void {
    console.log(this.card);
  }

}
