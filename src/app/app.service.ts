import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  _showLoader: EventEmitter<boolean> = new EventEmitter<boolean>(true);
  set showLoader(val: boolean) {
    this._showLoader.emit(val);
  }
  constructor() { }
}
