import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  registerForm: FormGroup;
  isSubmitted = false;

  constructor(public formBuilder: FormBuilder) {
    this.registerForm = this.formBuilder.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      email: ['', [Validators.required]],
      password: ['', [Validators.required]]
    })
  }

  ngOnInit() {
  }

  submitForm() {
    console.log(this.registerForm.value);
    // this.isSubmitted = true;
    // if (!this.registerForm.valid) {
    //   console.log('Please provide all the required values!')
    //   return false;
    // } else {
    //   console.log(this.registerForm.value)
    // }
    return;
  }

}
