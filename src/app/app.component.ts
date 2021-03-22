import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-heroku02';
}
export class Usuario {
  name : string;
  pass : string;

  constructor()
  {
    this.name = "" ;
    this.pass = "" ;
  }
}
