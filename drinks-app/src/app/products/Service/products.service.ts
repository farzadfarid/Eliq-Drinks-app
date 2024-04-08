import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DrinksResponse, DrinksdetailsResponse } from '../Model/product.response';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  constructor(private http: HttpClient) { }

  getListDrinks(): Observable<DrinksResponse> {
    return this.http.get<DrinksResponse>('https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic');
  }

  getProductDetailsGetById(productId: string): Observable<DrinksdetailsResponse> {
    return this.http.get<DrinksdetailsResponse>(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i= + ${productId}`);
  }
}
