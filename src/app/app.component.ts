import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'CV';
  activeLink = 'Personal Details';

  linkName(title: string) {
    this.activeLink = title;
  }

  isValidated(event: any) {
    console.log(event)
  }
  
}
