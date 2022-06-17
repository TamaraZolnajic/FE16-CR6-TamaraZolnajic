import { Component, OnInit } from '@angular/core';
import { products } from '../products';
import { IProducts } from '../IProducs';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  products : IProducts [] = products
  constructor() { }

  ngOnInit(): void {
  }

}
