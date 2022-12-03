import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { FormControl, FormGroup, MinLengthValidator, Validators } from '@angular/forms';
import { MonthsService, YearsService } from '../services';
import { InputAnimationService } from '../services/input-animation.service';

@Component({
  selector: 'app-experiences',
  templateUrl: './experiences.component.html',
  styleUrls: ['./experiences.component.scss']
})
export class ExperiencesComponent implements OnInit {

  constructor(
    public inputAnimation: InputAnimationService,
    public months: MonthsService,
    public years: YearsService
  ) {

  }


  @Output() isValidated = new EventEmitter<boolean>();

  dat: any = localStorage.getItem('cv-maker-test1');
  localForm = JSON.parse(this.dat)

  education: any[] = [];
  experience: any[] = [];

  ngOnInit(): void {
    this.localForm.education ? this.education = this.localForm.education : this.education = [];
    this.localForm.experience ? this.experience = this.localForm.experience : this.experience = [];
  }

  form1: FormGroup = new FormGroup({
    education: new FormGroup({
      degree: new FormControl('', Validators.minLength(4)),
      city: new FormControl('', Validators.minLength(4)),
      school: new FormControl('', Validators.minLength(4)),
      startDate: new FormGroup({
        month: new FormControl('January'),
        year: new FormControl('2022')
      }),
      endDate: new FormGroup({
        month: new FormControl('Present'),
        year: new FormControl('')
      }),
    }),
    experience: new FormGroup({
      job: new FormControl('', Validators.minLength(4)),
      city: new FormControl('', Validators.minLength(4)),
      employer: new FormControl('', Validators.minLength(4)),
      startDate: new FormGroup({
        month: new FormControl('January'),
        year: new FormControl('2022')
      }),
      endDate: new FormGroup({
        month: new FormControl('Present'),
        year: new FormControl('')
      }),
    })
  });

  focus(event: any, placeholder?: string) {
    this.inputAnimation.onFocus(event, placeholder);

    this.isValidated.emit(this.form1.valid);
  }

  blur(event: any) {
    this.inputAnimation.onBlur(event);
  }

  isPresentEdu: boolean = true;

  checkPresentEdu(event: any) {
    this.isPresentEdu = event.target.value === "Present";
  }

  isPresentExp: boolean = true;

  checkPresentExp(event: any) {
    this.isPresentExp = event.target.value === "Present";
  }

  startyear = 1950;

  startYear(event: any) {
    this.startyear = event.target.value
  }

  resetEducation() {
    this.form1.controls['education'].reset({
      // degree: "bachelor"
    })
  }

  resetExperience() {
    this.form1.controls['experience'].reset({
    })
  }



  saveEducation() {
    this.education.push(this.form1.controls['education'].value);
    this.resetEducation();

    this.setLocal();
  }

  saveExperience() {
    console.log(this.experience)
    this.experience.push(this.form1.controls['experience'].value);
    this.resetExperience();

    this.setLocal();
  }

  deleteEdu(event: any) {
    let x = this.education.filter(edu => {
      return edu.degree !== event.degree && edu.school !== event.school;

    })

    this.education = x;

    this.setLocal();

    this.resetEducation();
  }

  deleteExp(event: any) {
    let x = this.experience.filter(exp => {
      return exp.job !== event.job && exp.employer !== event.employer;

    })

    this.experience = x;

    this.setLocal();

    this.resetExperience();
  }

  setLocal() {
    setTimeout(() => {
      localStorage.setItem('cv-maker-test1', JSON.stringify({
        education: this.education,
        experience: this.experience
      }))
    }, 1000)
  }

  navigateToResult() {
    document.getElementById("last-link")!.click();
  }
}
