import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'layout-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  itemCount: number = -1;

  constructor(private cartService: CartService, private router: Router) {}

  ngOnInit() {
    this.cartService.data$.subscribe((v) => {
      this.itemCount = v.item_count;
    });
    this.cartService.getCartData();
  }

  toCart() {
    this.router.navigate(['/cart']);
  }
}
