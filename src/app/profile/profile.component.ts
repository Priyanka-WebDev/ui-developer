import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
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
    image: "assets/imges.1jpg"
  }
  constructor() {
    this.user_records = JSON.parse(localStorage.getItem("users") || '{ }');
  }


}
