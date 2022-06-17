import { Component, DoCheck, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { products } from '../products';
import { IProducts } from '../IProducs';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit, DoCheck {
  products1 : IProducts = {} as IProducts;
  id : number = 0;
  count: number = 0;
  products2 : IProducts [] = products
  constructor( private route : ActivatedRoute, private CS: CartService) { }
  addToCart1(){
  this.CS.addToCart(this.products1);
  }
  ngOnInit(): void {
    this.route.params.subscribe((params:Params) => {
      this.id = +params ["Id"];
      this.products1 = products[this.id];
    })
  }
 ngDoCheck(): void {
   this.count =this.CS.itemsLength();
 }
}
