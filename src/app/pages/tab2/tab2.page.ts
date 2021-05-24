import { Component } from '@angular/core';
import { NewsService } from '../serivices/news.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  category: String[] =['India','World','Business','Technology','Entertainment','Sports','Science']
  news:any
  constructor(public newsService:NewsService) {}

  OnGetData(item){
    console.log(item);
    item= item.toLowerCase();
   this.newsService.getData('everything?q=${item}&apiKey=').subscribe((data)=>
   console.log(data));
   console.log(item);
    
  }

}
