import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-upadte-info',
  templateUrl: './upadte-info.component.html',
  styleUrls: ['./upadte-info.component.scss']
})
export class UpadteInfoComponent implements OnInit {

  @Input() orgInfo: any;
  infoForm: FormGroup;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.initInfoForm();
    this.setInfoForm();
  }

  /**
   * init info form
   */

  initInfoForm() {

    this.infoForm = this.formBuilder.group({
      name: ['', Validators.required],
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      address: ['', Validators.required],
      city: ['', Validators.required],
      country: ['', Validators.required],
      postal_code: ['', Validators.required]
    })
  }

  /**
   * set info form
   */
  setInfoForm() {
    this.infoForm.setValue({
      name: this.orgInfo.name,
      username: this.orgInfo.login,
      email: `${this.orgInfo.login}@gmail.com`,
      address: 'Mountain View, California, United States',
      city: 'california',
      country: 'USA',
      postal_code: '90210',
    })
  }

}
