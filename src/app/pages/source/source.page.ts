import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NewsService } from '../serivices/news.service';

@Component({
  selector: 'app-source',
  templateUrl: './source.page.html',
  styleUrls: ['./source.page.scss'],
})
export class SourcePage implements OnInit {
id :any;
  constructor(public news:NewsService,private route: ActivatedRoute) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get("id")
    this.news.getData('everything?sources='+this.id+'&apiKey=').subscribe((data)=>
    {
      console.log(data);
    })
  }

}
