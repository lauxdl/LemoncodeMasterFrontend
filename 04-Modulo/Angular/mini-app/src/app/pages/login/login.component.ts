import { Component, Input  } from '@angular/core';
import {NgIf} from '@angular/common';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators, FormBuilder  } from '@angular/forms';
import { UserEntity } from 'src/app/model/UserEntity';
import { AuthService } from 'src/app/services/Auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  title = 'Login'
  loginUser: UserEntity;
  showInfo = ''
  form: FormGroup = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });
  loguedState :boolean = false;
  error: boolean;
  @Input() phUser:string = 'Usuario';
  @Input() phPass:string = 'Contraseña';

  constructor( public userService: AuthService, private router: Router){

    this.error = false;
    this.loginUser = {
      username: '',
      password: ''
    }
    this.showAlert()
  }

  showAlert(){
    this.showInfo = (this.error) ?
     'Error: Ingrese las credenciales correctas <br> Username: master@lemoncode.net <br> Password: 12345678' :
     'Username: master@lemoncode.net <br> Password: 12345678'
  }

  login() {

      this.userService.login(this.loginUser).subscribe((data) => {
        console.log(data);
        if (data){
          this.router.navigateByUrl('/dashboard');
        } else {
          this.router.navigateByUrl('/login');
          this.error = true
          this.showAlert()
        }

      });
      

  }

}
