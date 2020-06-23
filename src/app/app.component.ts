import { Component } from '@angular/core';
import { HttpClient, HttpParams } from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  globalData:any = {};
  allCountriesData:any = [];  // Not object but array
  USData: any = {};

  constructor(public http:HttpClient) {
    this.http
    .get("https://api.covid19api.com/summary")
    .subscribe((value: any) => {
      this.globalData = value.Global;
      this.allCountriesData = value.Countries;

      this.allCountriesData.forEach((countryList) => {
        if(countryList.CountryCode == "US") {
          this.USData = countryList;
        }
      });

    });
  }

  title = 'covid19App';
}
