import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class YearsService {

  date = new Date();

  currentYear = this.date.getFullYear();

  years(yearFrom: number) {
    let yearsArray: number[] = [];

    for (let i = this.currentYear; i >= yearFrom; i--) {
      yearsArray.push(i)
    }

    return yearsArray;
  }
}             
