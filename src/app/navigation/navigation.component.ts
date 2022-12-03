import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent implements OnInit {
  fillWidth = 20;
  title = 'Personal Details';

  @Output() linkName = new EventEmitter<string>();

  ngOnInit() {
    setTimeout(() => {
      let lastLink = document.getElementById('last-link');
      let activeLinks = document.getElementsByClassName('active');

      lastLink?.classList.contains('active')
        ? lastLink.previousElementSibling?.classList.add('active')
        : null;

      activeLinks.length === 2
        ? [(this.fillWidth = 50), this.linkName.emit('My Experiences')]
        : activeLinks.length === 3
        ? [(this.fillWidth = 100), this.linkName.emit('Result')]
        : 20;
    });
  }

  previous(event: any) {
    let prev = event.currentTarget.previousElementSibling;
    let next = event.currentTarget.nextElementSibling;

    setTimeout(() => {
      prev ? prev.classList.add('active') : null;
      prev ? (prev.style.transitionDelay = '0s') : null;

      if (this.fillWidth === 20) {
        next.style.transitionDelay = '0s';
        next?.classList.remove('active');
        setTimeout(() => {
          next.style.transitionDelay = '.3s';
        }, 300);
      }
      this.linkName.emit(this.title);
    }, 10);
  }
}
