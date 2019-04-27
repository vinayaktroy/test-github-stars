import { Component, OnInit, Output, EventEmitter, Inject, HostListener } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Output() showSidebar: EventEmitter<boolean> = new EventEmitter<boolean>(false);
  sidebarVisible: boolean
  constructor(@Inject(DOCUMENT) private _document: HTMLDocument) { }

  ngOnInit() {

  }

  /**
   * sidebar visiblity on window resizing
   * @param event 
   */

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    let width = window.innerWidth;
    if (width > 768) {
      this.sidebarVisible = false;
      this.showSidebar.emit(this.sidebarVisible)
    }
  }

  /**
   * toggle sidebar on btn click
   */
  toggleSidebar() {
    this.sidebarVisible = !this.sidebarVisible
    this.showSidebar.emit(this.sidebarVisible)
  }

}
