import { Component, Input, OnInit } from '@angular/core';
import { Iproduct } from '../../model/product';

@Component({
  selector: 'app-productcard',
  templateUrl: './productcard.component.html',
  styleUrls: ['./productcard.component.scss']
})
export class ProductcardComponent implements OnInit {
  @Input()
  cardArray!: Iproduct[];
  constructor() { }

  ngOnInit(): void {
  }

}
