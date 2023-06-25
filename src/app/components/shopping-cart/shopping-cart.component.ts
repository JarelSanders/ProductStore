import { Component } from '@angular/core';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent {
  subtotal: number = 0.07
  tax: number = 0.07
  shipping: number = 0.15
  item_amount:number = 12.99
  subtotal_before: number = 25.98
  grand_total: number = 150.99
  

  remove() {
    console.log('Hi');
    alert("hello");
    // (<HTMLElement>document.getElementsByName(''))
  }
}


