import {Component, Input, OnInit} from '@angular/core';
import {IShow} from '../../../../models/IShow';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input()
  item: IShow;
  prefixImg = 'https://image.tmdb.org/t/p/original';


  constructor() {
  }

  ngOnInit(): void {
  }

}
