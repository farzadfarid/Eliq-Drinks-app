import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../Service/products.service';
import { DrinkDetails } from '../../Model/product.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  constructor(private service: ProductsService, private route: ActivatedRoute) { }
  productDetail!: DrinkDetails;
  productId: any;
  showLoading: boolean = false;
  ngOnInit() {
    this.showLoading = true;
    this.route.paramMap.subscribe(data => {
      this.productId = data.get('id')
      this.service.getProductDetailsGetById(this.productId).subscribe(res => {
        this.showLoading = false;
        this.productDetail = res.drinks[0];
      })
    });

  }
}
