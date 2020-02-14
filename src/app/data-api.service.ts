import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataApiService {
  apiURL = 'http://localhost:51886/api/values';
  postData = {Value: 'Meter Sample'};

  constructor(private httpClient: HttpClient) { }

  public createMeter() {
    // @ts-ignore
    return this.httpClient.post(this.apiURL, this.postData).subscribe(
      res => {
        alert('Meter Created Successfully');
      },
      err => {
        console.log('Error occured');
      });
  }
}
