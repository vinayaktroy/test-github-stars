import { DOCUMENT } from '@angular/common';
import { Component, EventEmitter, Inject, Input, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent {

  @Input() visible: boolean;
  @Output() visibleChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(@Inject(DOCUMENT) private _document: HTMLDocument, private router: Router) { }


  /**
   * close side bar event
   */
  close() {
    this.visible = false;
    this.visibleChange.emit(this.visible);
  }

  /**
   * menu item close
   */
  onMenuItemClick() {
    this.close();
  }


}
