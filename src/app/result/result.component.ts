import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit {
  data: any;
  data1: any;

  @ViewChild('image') image?: ElementRef;

  ngOnInit() {
    let data: any = localStorage.getItem('cv-maker-test');
    this.data = JSON.parse(data);

    let data1: any = localStorage.getItem('cv-maker-test1');
    this.data1 = JSON.parse(data1);
    console.log(this.data)

    this.image?.nativeElement.setAttribute('src', this.data.image)
  }

}
