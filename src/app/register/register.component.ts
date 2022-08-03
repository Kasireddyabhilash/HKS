import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  regsiterForm: any;
  showForm = false;
  submitted=false;
  users: any = [
    {
      company: 'Buzz',
      dob: '2022-08-04',
      email: 'kasireddyabhilashreddy@gmail.com',
      firstName: 'abhilash',
      gender: 'male',
      lastName: 'kasireddy',
      password: 'password@124',
      confirmPassword:'password@123',
      phone: '7330799372',
    }
  ];
  errorMessage: string;
  editMode: boolean;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.regsiterForms();
  }

  regsiterForms() {
    this.regsiterForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required],
      phone: ['', Validators.required],
      company: ['', Validators.required],
      gender: ['', Validators.required],
      dob: ['', Validators.required],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
    });
  }



  add() {
    this.showForm = true;
  }



  register() {
    this.errorMessage = '';
    if (this.regsiterForm.invalid) {
    this.submitted=true;
      this.errorMessage = 'Invalid data to save';
      return
    }
    this.submitted=false
    this.users.push(this.regsiterForm.value);
    this.editMode
      ? alert('record updated sucessfully')
      : alert('record added sucessfully');
    this.regsiterForms();
  }

  cancel() {
    this.errorMessage = '';
    this.regsiterForm.reset();
    this.regsiterForms();
  }

  edit(data: any) {
    this.editMode = true;
    console.log(data);
    this.regsiterForm.patchValue(data);
  }

  deleteUuser(index: any) {
   if(index!=-1){
    this.users.splice(index,1);
    alert('Record delete successfully')
   }
  }
}
