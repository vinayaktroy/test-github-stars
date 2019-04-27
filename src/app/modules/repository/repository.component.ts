import { Component, OnInit } from '@angular/core';

import { AppService } from './../../app.service';
import { RepositoryService } from './repository.service';

@Component({
  selector: 'app-repository',
  templateUrl: './repository.component.html',
  styleUrls: ['./repository.component.scss']
})
export class RepositoryComponent implements OnInit {

  seeAllList: boolean;
  repositoryList: any[];
  constructor(private repositoryService: RepositoryService, private appService: AppService) { }

  ngOnInit() {
    this.getRepository();
  }

  /**
   * get repository list
   */
  getRepository() {
    this.appService.showLoader = true;
    this.repositoryService.getRepository().subscribe((response: any) => {
      this.appService.showLoader = false;
      this.repositoryList = response;
    }, error => {
      this.appService.showLoader = false;
    })
  }
}
