import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent {
  @Input() job1?: string;
  @Input() employer1?: string;
  @Input() startDate1?: string;
  @Input() endDate1?: string;

  @Output() deleteExp = new EventEmitter<object>();

  degree = this.job1;
  school = this.employer1;
  startDate = this.startDate1;
  endDate = this.endDate1;

  deleteExperience(job: string | undefined, employer: string | undefined) {
    this.deleteExp.emit({ job, employer });
  }

}
