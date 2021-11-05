import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'OrderViewController';

  public username:string="HgMedia12345"
  public password:string="hgmedia88"
  public user:string=""
  public pass:string=""
  checkLogin:boolean =true

  public loginClick(){
    if(this.user==this.username && this.pass==this.password){
      this.checkLogin=false
      console.log("login success")
    }else{
      this.checkLogin=true;
      alert("Incorrect username or password!!!")
      console.log("login error")
    }
  }

  public logoutClick(){
    this.checkLogin=true
    this.pass=""
    this.user=""
  }
}
