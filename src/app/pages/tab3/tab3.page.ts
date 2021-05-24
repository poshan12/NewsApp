import { Component,OnInit } from '@angular/core';
import { NewsService } from '../serivices/news.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit{
sources :any;
  constructor(public newsService:NewsService) {}
ngOnInit(){
   this.newsService.getData('sources?apiKey=').subscribe((data)=>{
    this.sources= data;}
   );
  
  
}
}
