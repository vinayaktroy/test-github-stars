import { Component, Input, OnInit } from '@angular/core';

import { OrganisationService } from '../../organisation.service';
import { AppService } from './../../../../app.service';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.scss']
})
export class MembersComponent implements OnInit {

  membersList: any[];
  @Input() previewMode: boolean;
  constructor(private organisationService: OrganisationService, private appService: AppService) { }

  ngOnInit() {
    this.getMembers();
  }

  /**
   * get members
   */
  getMembers() {
    this.appService.showLoader = true;
    this.organisationService.getMembers().subscribe((response: any) => {
      this.appService.showLoader = false;
      if (this.previewMode) {
        const arr = [];
        for (let i = 0; i < 4; i++) {
          arr.push(response[i]);
        }
        this.membersList = arr;
      } else {
        this.membersList = response;
      }
    }, error => {
      this.appService.showLoader = false;
    })

  }

}
