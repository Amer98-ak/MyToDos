import { Component, OnInit } from '@angular/core';
import User from '../User';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  UsrHead:string ="assets/Img/UsrHead.svg";
  UsrBody:string ="assets/Img/UsrBody.svg";
  fb:string ="assets/Img/fb.png";
  in:string ="assets/Img/in.png";
  google:string ="assets/Img/google.png";

  users: any;
  email: string = "";
  password: string = "";
  ErrorMsg: string = "";

  constructor(private s: UserService) {
    if (localStorage.getItem('Id') != null) {
      window.location.href = '/home';
    }

    this.s
      .Get()
      .subscribe((data) => {
        this.users = data;
    });
   }

  ngOnInit(): void {
  }

  login() {
    let find = false;
    for (const val of this.users) {
      if(val.Email == this.email && val.Password == this.password){
        find = true;
        window.localStorage.setItem('User', val.FirstName+' '+val.LastName);
        window.localStorage.setItem('UserLofin', val.FirstName[0]+' '+val.LastName[0]);
        window.localStorage.setItem('Id', val.Id);
        // console.log('DA');
        this.ErrorMsg = "";
      }
    }
    if(!find)
    {
      // console.log('!DA');
      this.ErrorMsg = "Wrong email or password.";
    }
  }

}
function target(arg0: string, target: any, arg2: string, arg3: boolean) {
  throw new Error('Function not implemented.');
}

