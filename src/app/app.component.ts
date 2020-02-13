import { Component } from '@angular/core';
import {DataApiService} from './data-api.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {




  title = 'MeterPortal';
  meterSub: any;
  constructor(private dataApiService: DataApiService) {
    if(this.meterSub)
    this.meterSub.subscribe((res) => {
      console.log(res.body);
    });
  }




  createMeter() {
    this.meterSub = this.dataApiService.createMeter();

  }
}
