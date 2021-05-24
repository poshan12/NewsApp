import { Component } from '@angular/core';
import {NewsService} from '../serivices/news.service'
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  new:any;
  constructor(private news:NewsService) { }

  ngOnInit() {
    this.news.getData('top-headlines?country=us&apiKey=').subscribe(data =>{
      this.new=data;
      console.log(data);
    })
  }
}
