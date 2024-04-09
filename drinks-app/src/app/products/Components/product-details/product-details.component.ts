import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../Service/products.service';
import { DrinkDetails } from '../../Model/product.model';
import { ActivatedRoute } from '@angular/router';
import { ConfigServiceService } from '../../Service/config-service.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  constructor(private service: ProductsService, private route: ActivatedRoute, private configService: ConfigServiceService) { }
  productDetail!: DrinkDetails;
  productId: any;
  showLoading: boolean = false;
  titleStyle!: string;
  fontsStyle!: string;
  ngOnInit() {
    this.showLoading = true;
    this.configService.getConfig().subscribe((config: any) => {
      this.titleStyle = config.titleStyle.dark;
      this.fontsStyle = config.fonts.size.large;
      console.log('font', this.fontsStyle)
    });
    this.route.paramMap.subscribe(data => {
      this.productId = data.get('id');
      this.service.getProductDetailsGetById(this.productId).subscribe(res => {
        this.showLoading = false;
        this.productDetail = res.drinks[0];
      })
    });

  }
}
