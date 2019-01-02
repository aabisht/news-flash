import { Constants } from 'src/app/app.constant';
import { ITopHeadlines, IArticle } from 'src/app/interface/top-headlines.interface';
import { TopHeadlinesService } from 'src/app/services/top-headlines/top-headlines.service';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { LoaderService } from 'src/app/services/loader/loader.service';
import { CategoryList } from 'src/app/enum/category-list.enum';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit {
  topHeadlinesData: ITopHeadlines;
  topHealthHeadlinesData: IArticle;
  topBusinessHeadlinesData: ITopHeadlines;
  topGeneralHeadlinesData: ITopHeadlines;
  owlCarouseloptions: any;

  constructor(private _topHeadlinesService: TopHeadlinesService,
              private _loaderService: LoaderService) { }

  ngOnInit() {
    this.getTopHeadlines();
    this.getTopHealthHeadlines();
    this.getTopBusinessHeadlines();
    this.getTopGeneralHeadlines();

    this.owlCarouseloptions = {
      loop: true,
      margin: 10,
      nav: true,
      center: true,
      autoplay: true,
      autoplayTimeout: 5000,
      autoplayHoverPause: true,
      autoHeight: false,
      items: 3,
      responsive: {
        0: {
          items: 1,
          stagePadding: 10,
          dots: false,
        },
        600: {
          items: 2
        },
        991: {
          items: 3
        }
      }
    };
  }

  getTopHeadlines(): void {
    this._loaderService.setloaderVisible(true);
    this._topHeadlinesService.getTopHeadlines(Constants.Default_Country, '', '', '', 10).subscribe(
      data => {
        console.log(data);
        this.topHeadlinesData = data;
        this._loaderService.setloaderVisible(false);
      }, error => {
        console.log('Error: ' + error);
        this._loaderService.setloaderVisible(false);
      }
    );
  }

  getTopBusinessHeadlines(): void {
    this._loaderService.setloaderVisible(true);
    this._topHeadlinesService.getTopHeadlines(Constants.Default_Country,
      Constants.Category_List[CategoryList.Business], '', '', 3).subscribe(
      data => {
        console.log(data);
        this.topBusinessHeadlinesData = data;
        this._loaderService.setloaderVisible(false);
      }, error => {
        console.log('Error: ' + error);
        this._loaderService.setloaderVisible(false);
      }
    );
  }

  getTopGeneralHeadlines(): void {
    this._loaderService.setloaderVisible(true);
    this._topHeadlinesService.getTopHeadlines(Constants.Default_Country,
      Constants.Category_List[CategoryList.General], '', '', 3).subscribe(
      data => {
        console.log(data);
        this.topGeneralHeadlinesData = data;
        this._loaderService.setloaderVisible(false);
      }, error => {
        console.log('Error: ' + error);
        this._loaderService.setloaderVisible(false);
      }
    );
  }

  getTopHealthHeadlines(): void {
    this._loaderService.setloaderVisible(true);
    this._topHeadlinesService.getTopHeadlines(Constants.Default_Country, Constants.Category_List[CategoryList.Health], '', '', 1).subscribe(
      data => {
        console.log(data);
        if (data.articles.length > 0) {
          this.topHealthHeadlinesData = data.articles[0];
        }
        this._loaderService.setloaderVisible(false);
      }, error => {
        console.log('Error: ' + error);
        this._loaderService.setloaderVisible(false);
      }
    );
  }

}
