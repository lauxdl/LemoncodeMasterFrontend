import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/Auth.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
  menuType: string = 'public'
  login = false;

  constructor(public userService: AuthService, private router: Router) {}

  ngOnInit(): void {

    this.router.events.subscribe((value:any) => {
      this.login = this.userService.isLogged();
      if (value.url){
        if (this.login){
          this.menuType = 'private'
        } else {
          this.menuType = 'public'
        }
      }
     });
  }

}
