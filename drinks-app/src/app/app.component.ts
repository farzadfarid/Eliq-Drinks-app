import { Component, ViewEncapsulation } from '@angular/core';
import { ConfigServiceService } from './products/Service/config-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

})
export class AppComponent {
  constructor(private configService: ConfigServiceService) { }
  title = 'drinks-app';
  ngOnInit() {
    this.configService.getConfig().subscribe((config: any) => {
      document.documentElement.style.setProperty('--bgColor', config.bgColor.light);
    });
  }
}
