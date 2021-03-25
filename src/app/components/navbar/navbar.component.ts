import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JwtService } from 'src/app/services/jwt/jwt.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  searchString:string = ""

  constructor(
    private jwtService:JwtService,
    private router:Router
    ) { }

  ngOnInit(): void {
    
  }

  logOut(){
    this.jwtService.logOut();
    this.router.navigate(['/launcher'])
  }

}
