import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-corona',
  templateUrl: './corona.page.html',
  styleUrls: ['./corona.page.scss'],
})
export class CoronaPage implements OnInit {
data:any;
countries:any;
p: number = 1;
name:string;
cityData:any;
  constructor(private http:HttpClient) { }

  ngOnInit() {
    this.http.get('https://www.trackcorona.live/api/countries').subscribe(data=>{
      this.data=data;
      this.countries= this.data.data;
      console.log(this.countries);
    })

  }
  SearchProduct(name: string){
    this.http.get('https://www.trackcorona.live/api/countries/'+name).subscribe(data3=>{
      this.cityData=data3;
      this.cityData= this.cityData.data;
      return this.cityData;
      console.log(this.cityData);
    })
  }
  

}
