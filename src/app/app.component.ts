import { LoaderService } from './services/loader/loader.service';
import { Constants } from './app.constant';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  menu: any[];
  isLoaderActive: boolean;

  constructor(private _loaderService: LoaderService) { }

  ngOnInit() {
    this.menu = Constants.Category_List;
    this._loaderService.currentloaderVisible.subscribe(isLoaderActive => this.isLoaderActive = isLoaderActive);
  }
}
