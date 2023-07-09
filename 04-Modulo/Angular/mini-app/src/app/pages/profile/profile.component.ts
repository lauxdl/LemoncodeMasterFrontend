import { Component } from '@angular/core';
import { AuthService } from '../../services/Auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {

  userName: string = '';
  longText = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus delectus reiciendis commodi
  eligendi quam cum aperiam, officiis id cumque atque obcaecati asperiores fugiat quo assumenda aliquam ipsam nostrum
   alias ullam.`;
  constructor(public userService: AuthService){
    this.userName = this.userService.getUsername();
  }
}
