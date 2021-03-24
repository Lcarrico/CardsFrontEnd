import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Learner } from 'src/app/models/learner';
import { JwtService } from 'src/app/services/jwt/jwt.service';
import { LearnerService } from 'src/app/services/learner/learner.service';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css']
})
export class RegistrationFormComponent implements OnInit {

  username:string = ""
  password:string = ""

  registrationFail:boolean=false;
  

  constructor(
    private router:Router,
    private jwtService:JwtService,
    private _snackBar:MatSnackBar
    ) { }

  ngOnInit(): void {
  }

  async register(){
    let learner:Learner = new Learner(0,this.username,this.password)
    learner = await this.jwtService.register(learner)
    if(learner.learnerId>0){
      this.login();
    }else{
      this.registrationFail=true;
    }    
  }

  async login(){
    let learner:Learner = new Learner(0,this.username,this.password);
    const jwt:string = await this.jwtService.login(learner)

    if(jwt==null){
      console.log('HTTP Error')
    }else{
      console.log(jwt);
      document.cookie = "Authorization="+jwt+";"
      this._snackBar.open("Registration successful! You are now being redirected to the Learner's Dashboard.","Close",{duration:3000})
      this.router.navigate(['/home']);
    }
  }

}
