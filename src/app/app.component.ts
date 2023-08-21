import { Component, OnInit } from '@angular/core';
import   firabase from 'firebase/compat/app';
import { LoginService } from './login/login.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'listado de personas';
  constructor(private loginService: LoginService) {}
  ngOnInit(): void {
    firabase.initializeApp({
      apiKey: "AIzaSyDs7DswxAtxsOpkW-MKMqEIRVCN5zj5VNM",
      authDomain: "listado-personas-de3ee.firebaseapp.com",
    })
  }
  salir(){
    this.loginService.logout()
  }
  isAutenticado(){
    return this.loginService.isAutenticado()
  }
}
