import { Component } from '@angular/core';
import { ProductsService } from '../../Service/products.service';
import { Drinks } from '../../Model/product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  constructor(private service: ProductsService) { }
  lstProducts: Drinks[] = [];
  ngOnInit() {
    this.service.getListDrinks().subscribe(res => {
      this.lstProducts = res.drinks;
    })
  }
}
