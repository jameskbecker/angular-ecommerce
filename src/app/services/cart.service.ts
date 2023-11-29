import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CartAddRequest } from '../../types/CartAddRequest';
import { Cart, DEFAULT_CART } from '../../types/Cart';
import { BehaviorSubject } from 'rxjs';
import variants from '../../mocks/products/stone-island-mens-giaccone-black-aw23-791571649/variants';
import { environment } from '../../environments/environment.development';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class CartService {
  readonly API_URL = `${environment.apiUrl}/cart`;

  private dataSubject = new BehaviorSubject<Cart>(DEFAULT_CART);
  public data$ = this.dataSubject.asObservable();

  constructor(private http: HttpClient) {}

  public getCartData() {
    return this.http.get<Cart>(this.API_URL).subscribe((cart) => {
      this.dataSubject.next(cart);
    });
  }

  public addToCart(productId: string, variantId: string, quantity: string) {
    const body: CartAddRequest = {
      form_type: 'product',
      utf8: '✓',
      product_id: productId,
      variant_id: variantId,
      quantity: quantity,
    };

    return this.http.post<CartAddRequest>(this.API_URL, body, httpOptions);
  }

  public removeItem(variantId: string) {
    return this.http.delete(`${this.API_URL}/${variantId}`).subscribe();
  }

  public updateQuantity(quantity: string) {
    return this.http.put('/cart/:variant', { quantity });
  }
}
