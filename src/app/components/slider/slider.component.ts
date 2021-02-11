import {Component, Input, OnInit} from '@angular/core';
import {IMovie} from '../../models/IMovie';
import {IRes} from '../../models/IRes';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {
  @Input() movie: IMovie[];
  @Input() title: string;
  prefixImg = 'https://image.tmdb.org/t/p/original';
  itemsPerSlide = 9;
  singleSlideOffset = true;


  constructor() {
  }

  ngOnInit(): void {
  }

}
