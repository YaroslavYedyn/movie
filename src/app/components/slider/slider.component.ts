import {Component, Input, OnInit} from '@angular/core';
import {IMovie} from '../../models/IMovie';
import {ActivatedRoute, Router} from '@angular/router';

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


  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
  }

  details(id): void {
    localStorage.setItem('id', JSON.stringify(id));
    this.router.navigate([`details/${id}`], {
      relativeTo: this.activatedRoute,
      state: id
    });
  }
}
