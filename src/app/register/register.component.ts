import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';
import { Subscriber, Subscription } from 'rxjs';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  // router: any;
  // profileForm;
  profileForm:FormGroup;
  constructor(private student: StudentService, router: Router) {
    this.profileForm = new FormGroup({
      FName: new FormControl('',[Validators.required]),
      LName: new FormControl('',[Validators.required]),
      Age: new FormControl('',[Validators.required]),
      EMail: new FormControl('', [Validators.required, Validators.email]),
      MobileNO: new FormControl('',[Validators.required, Validators.maxLength(10), Validators.minLength(0)]),
      State: new FormControl('',[Validators.required]),
      Country: new FormControl('',[Validators.required]),
      Address: new FormControl('',[Validators.required]),
      Tag: new FormControl('',[Validators.required]),
      Img: new FormControl('',[Validators.required]),
      Subscribe: new FormControl('')
    });
    this.SaveData
  }
  
  
  message:boolean=false
  age: number = 20;
  ageInput: any;
  updateAge(value: string) {
    this.age = parseInt(value, 10);
  }
  // ProfileDp = '' ; 
  ProfileDp: string = "assets/imges/photo.png";


  // onChange($event: Event) {
  // console.log(event);
  // }

  StudentData: any = {};
  formData:any={};

  SaveData() {
    // console.log(this.profileForm.value);
    let store = this.profileForm.value;
    this.student.SaveInfo(store).subscribe((result) => {
      // console.log(result);
      this.message = true;
      this.profileForm.reset({})
    });
  // this.router.navigate(['./showuser'])
  this.formData = store;

  this.profileForm.patchValue({
    Img: this.formData.Img
    })
  }


  Reset() {
    this.profileForm.reset();
    this.ProfileDp = "assets/imges/photo.png";
  }
  selectedFile: File | undefined;
  ImageUpload(event: any): void {
    if (event.target.files) {
      var reader = new FileReader()
      reader.readAsDataURL(event.target.files[0])
      reader.onload = (event: any) => {
        this.ProfileDp = event.target.result
      }
    this.selectedFile = event.target.files[0];

    }
  }
isFormSubmit:boolean=false
submitD(){
  const isFormvalid = this.profileForm.valid;
  this.isFormSubmit= true;
}



  ngOnInit(): void {

    this.student.getAllInfo().subscribe((allData: any) => {
      console.log(allData);
      this.StudentData = allData;
    });
this.SaveData
    

  }
}
