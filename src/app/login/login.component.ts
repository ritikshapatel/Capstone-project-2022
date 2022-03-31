import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }
  loginForm = new FormGroup({
    email: new FormControl('eve.holt@reqres.in', [Validators.required, Validators.email]),
    password: new FormControl('cityslicka', [Validators.required])
  })
  public loginError:String | any;
  ngOnInit(): void {
  }

}
