import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {FormArray, FormControl, FormGroup, isFormControl, ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  form = new FormGroup({
    firstName: new FormControl('Alfred'),
    lastName: new FormControl('Ramona'),
    nickname: new FormControl(''),
    email: new FormControl('juan@oa.com'),
    yearOfBirth: new FormControl(1900),
    passport: new FormControl(''),
    address: new FormGroup({
      fullAddress: new FormControl(''),
      city: new FormControl(''),
      postCode: new FormControl(0),
    }),
    phones: new FormArray([
      new FormControl('')
    ])
  });

  years =  this.getYears();

  constructor() { }

  ngOnInit(): void {
  }

  private getYears() {
    const now = new Date().getUTCFullYear();
    return Array(now - (now - 40)).fill('').map((_, idx) => now - idx);
  }

  hover: boolean = false;

  onMouseEnter() {
    this.hover = true;
  }

  onMouseLeave() {
    this.hover = false;
  }

  addPhone() {
    this.form.controls.phones.insert(0, new FormControl(''))
  }

  removePhone(index: number) {
    this.form.controls.phones.removeAt(index);
  }
}
