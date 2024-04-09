import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DrinksResponse, DrinksdetailsResponse } from '../Model/product.response';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  constructor(private http: HttpClient) { }

  getListDrinks(): Observable<DrinksResponse> {
    return this.http.get<DrinksResponse>(environment.apiServerAllProducts);
  }

  getProductDetailsGetById(productId: string): Observable<DrinksdetailsResponse> {
    return this.http.get<DrinksdetailsResponse>(environment.apiServerProduct + `${productId}`);
  }
}
