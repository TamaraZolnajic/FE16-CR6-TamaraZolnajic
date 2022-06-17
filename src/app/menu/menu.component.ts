import { Component, OnInit } from '@angular/core';
import { products } from '../products';
import { IProducts } from '../IProducs';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  products : IProducts [] = products
  product : any;

  constructor(private route : ActivatedRoute, private CS : CartService) { }

  addToCart(prod : any) {
    alert("added to the cart");
    this.CS.addToCart(prod);
    console.log(this.CS.getItems())
  }
  

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      let id : any = params.get("id");
      this.product = products[id];
    })
  }

}
