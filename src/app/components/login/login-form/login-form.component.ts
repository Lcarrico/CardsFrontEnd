import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Learner } from 'src/app/models/learner';
import { JwtService } from 'src/app/services/jwt/jwt.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  loginFail:boolean = false;

  username:string = ""
  password:string = ""
  
  constructor(
    private jwtService:JwtService,
    private _snackBar:MatSnackBar,
    private router:Router) { }

  ngOnInit(): void {
  }

  async login(){
    const learner:Learner = new Learner(0,this.username,this.password);
    const jwt:string = await this.jwtService.login(learner)

    if(jwt==null){
      console.log('HTTP Error')
      this.loginFail=true;
    }else{
      console.log(jwt);
      document.cookie = "Authorization="+jwt+";"
      this._snackBar.open("Login successful!","Close",{duration:3000})
      this.router.navigate(['/home']);
    }
  }
}
