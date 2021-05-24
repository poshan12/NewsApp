import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor() {}
  public appPages = [
    { title: 'Home', url: 'tabs/tab1', icon: 'flash' },
    { title: 'Headlines', url: 'tabs/tab2', icon: 'globe' },
    { title: 'Source', url: 'tabs/tab3', icon: 'square' },

    
    
  ];
  public labels = ['Entertainment', 'Sports', 'Technology', 'Work', 'Travel'];
}
