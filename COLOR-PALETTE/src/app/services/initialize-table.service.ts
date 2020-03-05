import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InitializeTableService {

  public columns = ["1","2","3","4","5","6","7","8","9","10"] ;
  public lines = ["1","2","3","4","5","6","7","8","9","10"] ;

  constructor() { }

  createTable(){
    console.log("init");


  }
}
