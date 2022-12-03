import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MonthsService {

  monthsArray: string[] = [
    "January", "February", "March", "April", "May", "June", "July",
    "August", "September", "October", "November", "December"
  ];

  months() {
    return this.monthsArray;
  }
}
