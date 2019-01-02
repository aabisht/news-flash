import { Injectable, Output, EventEmitter } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class LoaderService {
  private isLoaderActive = new BehaviorSubject<boolean>(false);
  @Output() _isLoaderActive: EventEmitter<boolean> = new EventEmitter();

  currentloaderVisible = this.isLoaderActive.asObservable();

  constructor() { }

  setloaderVisible(loaderVisibility: boolean) {
    this.isLoaderActive.next(loaderVisibility);
  }
}
