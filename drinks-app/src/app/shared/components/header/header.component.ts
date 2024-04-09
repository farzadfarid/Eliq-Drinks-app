import { Component } from '@angular/core';
import { ConfigServiceService } from 'src/app/products/Service/config-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  primaryColor!: string;
  secondaryColor!: string;
  logo!: string;
  isCollapsed = true;

  constructor(private configService: ConfigServiceService) { }
  ngOnInit() {
    this.configService.getConfig().subscribe((config: any) => {
      this.primaryColor = config.colors.primary;
      this.secondaryColor = config.colors.secondary;
      this.logo = config.logo[0];
    });
  }
}
