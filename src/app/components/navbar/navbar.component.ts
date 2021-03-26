import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JwtService } from 'src/app/services/jwt/jwt.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  loggedIn:boolean=false;
  searchString:string = ""
  userId:number = 0;
  username:string = "";

  constructor(
    private jwtService:JwtService,
    private router:Router
    ) { }

  ngOnInit(): void {
    if(this.jwtService.getJwtFromCookie()==""){
      this.loggedIn = false;
    }else{
      this.loggedIn = true;
      this.userId = this.jwtService.getUserId();
      this.username = this.jwtService.getUsername();
    }
    
  }

  logOut(){
    this.jwtService.logOut();
    this.router.navigate(['/launcher'])
  }

  goToDashboard(){
    this.router.navigate(['/home'])
  }

  goToStudy(){
    this.router.navigate(['/study'])
  }

}
