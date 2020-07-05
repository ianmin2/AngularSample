import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LiteLoggerService {

 log(data:string){
   console.log(`\n\n_______________________________\n${new Date().toDateString()}\n${data}\n_______________________________`);
 }

  constructor() { }
}
