import {Component, Input, OnInit} from '@angular/core';
import {IShow} from '../../../../models/IShow';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input()
  item: IShow;
  prefixImg = 'https://image.tmdb.org/t/p/original';


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
