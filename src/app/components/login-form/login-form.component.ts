import { Component, OnInit } from '@angular/core';
import { JwtService } from 'src/app/services/jwt/jwt.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  loginSuccessful:boolean = false;
  hide = true;

  username:string = ""
  password:string = ""
  
  constructor(private jwtService:JwtService) { }

  ngOnInit(): void {
  }

  login(){
    const result = this.jwtService.login(this.username,this.password)
    console.log(result)
  }

}
