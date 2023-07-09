import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/Auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent implements OnInit {

  constructor(public userService: AuthService, private router: Router){}

  ngOnInit(){
    this.userService.logout();
    this.router.navigateByUrl('/login');
    
  }
}
