import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DaysService {
  days(i: number) {
    return new Array(i)
  }
}
