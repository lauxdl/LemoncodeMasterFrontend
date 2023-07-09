import { Component } from '@angular/core';
import { AuthService } from '../../../services/Auth.service';

@Component({
  selector: 'app-private',
  templateUrl: './private.component.html',
  styleUrls: ['./private.component.scss']
})
export class PrivateComponent {

  userName: string = '';
  constructor(public userService: AuthService){
    this.userName = this.userService.getUsername();
  }
}
