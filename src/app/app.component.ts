import { Constants } from './app.constant';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  menu: any[];

  constructor() { }

  ngOnInit() {
    this.menu = Constants.Category_List;
    console.log(this.menu);
  }
}
