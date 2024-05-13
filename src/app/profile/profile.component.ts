import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';
import { Router } from '@angular/router';
import { FormControl } from '@angular/forms';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  url = "http://localhost:3000/profile"
  constructor(private student: StudentService) {

  }

  profileData: any;
  data:any;
  loadData() {
    this.student.getAllInfo().subscribe((res) => {
      this.profileData = res;
      this.data = new FormControl
    })
  }
showdata:string[]=['FName','LName']

  ngOnInit(): void {

  }
}
