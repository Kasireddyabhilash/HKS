import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm: any;
  loading = false;
  submitted = false;
  userList: any = [
    {
      username: 'hksmanpower',
      password: 'hksmanpower@123',
    },
  ];
  errorMessage: string;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.buildLogin();
    var isAuthenticated = this.authService.getAuthStatus();
    if (isAuthenticated) {
      this.navigateToDashboard();
    }
  }

  buildLogin() {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  onSubmit() {
    this.submitted = true;
    this.errorMessage = '';
    if (this.loginForm.valid) {
      let checkUser = this.userList.find(
        (c: any) =>
          c.username == this.loginForm.value.username &&
          c.password == this.loginForm.value.password
      );
      if (checkUser) {
        this.authService.setToken();
        this.navigateToDashboard();
      } else {
        this.errorMessage = 'Invalid Username/Password';
      }
    }
  }

  navigateToDashboard() {
    this.router.navigate(['dashboard']);
  }
}
