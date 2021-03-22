import { Component, OnInit } from '@angular/core';
import { JwtService } from 'src/app/services/jwt/jwt.service';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css']
})
export class RegistrationFormComponent implements OnInit {

  username:string = ""
  password:string = ""

  constructor(private jwtService:JwtService) { }

  ngOnInit(): void {
  }

  register(){
    const result = this.jwtService.register(this.username,this.password);
    console.log(result)
  }



}
