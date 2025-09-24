import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class User {
  name: string | undefined;
  token: string | undefined;
  constructor(){
    console.log('calling user services')
  }
  setToken(toke : string){
    this.token = toke;
  }
  getToken(){
    return this.token;
  }
  getUser(){
    
  }
  setUser(){

  }
} 
