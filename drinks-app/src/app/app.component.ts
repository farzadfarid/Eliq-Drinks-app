import { Component, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs';
import { ConfigServiceService } from './products/Service/config-service.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
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
