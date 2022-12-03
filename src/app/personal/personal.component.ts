import { Component, ElementRef, ViewChild, OnInit, Output, EventEmitter } from '@angular/core';
import { InputAnimationService, DaysService, YearsService, MonthsService } from '../services';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.scss'],
  providers: [YearsService, DaysService, MonthsService, InputAnimationService]
})
export class PersonalComponent implements OnInit {
  @ViewChild("profileImage") profileIMG!: ElementRef;
  @ViewChild("profileImageInput") profileImageInput!: ElementRef;

  @Output() isValidated = new EventEmitter<boolean>();

  constructor (
    public days: DaysService,
    public years: YearsService,
    public months: MonthsService,
    public inputAnimation: InputAnimationService
  ) {

  }

  


  showProfileImage = false;
  hovered = true;

  ngOnInit(): void {
    let data: any = localStorage.getItem('cv-maker-test');
    let image = JSON.parse(data).image;
    image ? this.showProfileImage = true : this.showProfileImage = false;
    image ? this.hovered = false : this.hovered = true;
    this.profileIMG.nativeElement?.setAttribute('src',image);
  }

  imageSrc: string = '';

  profile(event: any) {
    this.showProfileImage = true;

    const reader = new FileReader();
    let first = event.target.files[0];

    reader.onload = async (event: any) => {
      this.profileIMG.nativeElement?.setAttribute('src', event.target.result);
      this.imageSrc = event.target.result;
    };
    reader.readAsDataURL(first);
  }

  uploadImage() {
    this.profileImageInput.nativeElement.click();
  }

  toggle() {
    this.hovered = !this.hovered;
  }

  focus(event: any, placeholder?: string) {
    this.inputAnimation.onFocus(event, placeholder);

    this.isValidated.emit(this.form.valid);
  }

  blur(event: any) {
    this.inputAnimation.onBlur(event);
  }

  dat: any = localStorage.getItem('cv-maker-test');
  localForm = JSON.parse(this.dat)

  form: FormGroup = new FormGroup({
    firstName: new FormControl(this.localForm ? this.localForm.form.firstName : '', [Validators.required, Validators.minLength(2)]),
    lastName: new FormControl(this.localForm ? this.localForm.form.lastName : '', [Validators.required, Validators.minLength(2)]),
    contactInfo: new FormGroup({
      email: new FormControl(this.localForm ? this.localForm.form.contactInfo.email : '', [Validators.required, Validators.email]),
      phone: new FormControl(this.localForm ? this.localForm.form.contactInfo.phone : '', [Validators.required, Validators.pattern('[0-9_ +]+'), Validators.minLength(9)]),
      address: new FormControl(this.localForm ? this.localForm.form.contactInfo.address : '', Validators.minLength(4)),
      zip: new FormControl(this.localForm ? this.localForm.form.contactInfo.zip : '', [Validators.minLength(4), Validators.pattern('[0-9]+')]),
      city: new FormControl(this.localForm ? this.localForm.form.contactInfo.city : '', Validators.minLength(3)),
      links: new FormGroup({
        github: new FormControl(this.localForm ? this.localForm.form.contactInfo.links.github : '', Validators.pattern('^(http(s?)://)?(www.)?github.([a-z])+/([A-Za-z0-9]{1,})+/?$')),
        linkedin: new FormControl(this.localForm ? this.localForm.form.contactInfo.links.linkedin : '', Validators.pattern('^(http(s?)://)?(www.)?linkedin.([a-z])+/([A-Za-z0-9]{1,})+/?$'))
      })
    }),
    day: new FormControl(this.localForm ? this.localForm.form.day : ''),
    month: new FormControl(this.localForm ? this.localForm.form.month : ''),
    year: new FormControl(this.localForm ? this.localForm.form.year : ''),
    gender: new FormControl(this.localForm ? this.localForm.form.gender : '')

  });

  removeSpaces(event: any) {
    event.target.value = event.target.value.replace(/\s/g, "");
  }

  expanded = false;

  toggleAccordion() {
    this.expanded = !this.expanded;
  }

  ngAfterViewInit() {
    let data: any = localStorage.getItem('cv-maker-test');
    let image = JSON.parse(data).image;
    image ? this.showProfileImage = true : this.showProfileImage = false;
    image ? this.hovered = false : this.hovered = true;
    this.profileIMG.nativeElement?.setAttribute('src',image);
    
    let inputs = document.querySelectorAll("input");

    Array.from(inputs).forEach(input => {
      if (input.value.length) {
        input.parentElement?.classList.add("focused")
      }
    })
  }

  navigateToExperiences() {
    localStorage.setItem('cv-maker-test', JSON.stringify({
      image: this.imageSrc,
      form: this.form.value,
      showProfileImage: this.showProfileImage,
      hovered: this.hovered
    }))
    document.getElementById("experiences")!.click();
  }
}
