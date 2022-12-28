import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  loginForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private router: Router
    ) { 
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]]
    })
  }

  ngOnInit() {
  }

  login() {
    console.log(this.loginForm.value);
    this.userService.loginUser(this.loginForm.value).subscribe((res: any) => {
      let token = res.token;
      localStorage.setItem('token', token);
      this.router.navigate(['tabs/tab1']);
    }, (err) => {
      debugger;
    });
  }

}
