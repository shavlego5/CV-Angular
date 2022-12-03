import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InputAnimationService {

  onFocus(event: any, placeholder?: string) {
    const parent = event.currentTarget.parentNode;

    event.currentTarget.setAttribute("placeholder", placeholder);

    parent.classList.add("focused");
  }

  onBlur(event: any) {
    const parent = event.currentTarget.parentNode;

    if (!event.currentTarget.value) {
      parent.classList.remove("focused");
    }

    event.currentTarget.removeAttribute("placeholder")
  }
}
