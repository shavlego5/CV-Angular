import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent {
  @Input() degree1?: string;
  @Input() school1?: string;
  @Input() startDate1?: string;
  @Input() endDate1?: string;

  @Output() deleteEdu = new EventEmitter<object>();

  degree = this.degree1;
  school = this.school1;
  startDate = this.startDate1;
  endDate = this.endDate1;

  deleteEducation(degree: string | undefined, school: string | undefined) {
    this.deleteEdu.emit({ degree, school });
  }

}
