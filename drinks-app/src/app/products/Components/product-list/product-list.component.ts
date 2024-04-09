import { Component } from '@angular/core';
import { ProductsService } from '../../Service/products.service';
import { Drinks } from '../../Model/product.model';
import { ConfigServiceService } from '../../Service/config-service.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  constructor(private service: ProductsService, private configService: ConfigServiceService) { }
  lstProducts: Drinks[] = [];
  headerPanel!: String;
  cardFooter!: string;
  showLoading: boolean = false;
  titleStyle!: string;

  ngOnInit() {
    this.showLoading = true;
    this.configService.getConfig().subscribe((config: any) => {
      this.headerPanel = config.cardHeader.cardWarning;
      this.cardFooter = config.cardHeader.cardWarning;
      this.titleStyle = config.titleStyle.dark;
    });

    this.service.getListDrinks().subscribe(res => {
      this.showLoading = false;
      this.lstProducts = res.drinks;
    })
  }
}
