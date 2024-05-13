import { Component, EnvironmentInjector, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { merge, Observable } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ImplicitReceiver } from '@angular/compiler';
import { getMatFormFieldDuplicatedHintError } from '@angular/material/form-field';
import { Router } from '@angular/router';
import { MatSelectModule } from '@angular/material/select';
import { MatSelect } from '@angular/material/select';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
})
export class RegistrationComponent implements OnInit {




  user_records: any[] = [];
  data = {
    Fname: "",
    Lname: "",
    Email: "",
    MobileNo: "",
    age: "",
    State: "",
    Country: "",
    Address: "",
    tags: "",
    image: ""
  }
  ProfileDp: string = "assets/imges/photo.png";

  onSelected(value: string): void {
    this.data.State = value;
  }
  onSelectedCountry(value: string): void {
    this.data.Country = value;
  }

 


  doRegisteration(values: any) {
    // this.user_records=JSON.parse(localStorage.getItem("users")||'{ }')
    if (this.user_records.some((v) => {
      return v.email == this.data.Email;
    })) {
      alert("Duplicate Data");
    }
    else {
      this.user_records.push(this.data)
      localStorage.setItem("users", JSON.stringify(this.user_records));
      alert(`Hi ${this.data.Fname} You are Successfully registered `);
    }
    this.router.navigate(['showuser'])

  }


  ngOnInit(): void {

    this.doRegisteration;
  }

  // toppings = new FormControl('');

  // toppingList: string[] = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];


  ImageUpload(event: any): void {
    if (event.target.files) {
      var reader = new FileReader()
      reader.readAsDataURL(event.target.files[0])
      reader.onload = (event: any) => {
        this.ProfileDp = event.target.result
      }
    }

  }





  // profileUpload: any;


  showFields() {
    throw new Error('Method not implemented.');
  }
  age: number = 20;
  ageInput: any;
  updateAge(value: string) {
    this.age = parseInt(value, 10);
  }
  email = new FormControl('', [Validators.required, Validators.email]);

  errorMessage = '';

  constructor(private router: Router) {
    merge(this.email.statusChanges, this.email.valueChanges)
      .pipe(takeUntilDestroyed())
      .subscribe(() => this.updateErrorMessage());


  }


  updateErrorMessage() {
    if (this.email.hasError('required')) {
      this.errorMessage = 'You must enter a value';
    } else if (this.email.hasError('email')) {
      this.errorMessage = 'Not a valid email';
    } else {
      this.errorMessage = '';
    }
  }


  states: State[] = [
    { value: 'steak-0', viewValue: 'Steak' },
    { value: 'pizza-1', viewValue: 'Pizza' },
    { value: 'tacos-2', viewValue: 'Tacos' }
  ];
}


export interface State {
  value: string;
  viewValue: string;
}