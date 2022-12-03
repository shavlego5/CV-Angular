import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LogoComponent } from './logo/logo.component';
import { TitleComponent } from './title/title.component';
import { NavigationComponent } from './navigation/navigation.component';
import { PersonalComponent } from './personal/personal.component';
import { ExperiencesComponent } from './experiences/experiences.component';
import { ResultComponent } from './result/result.component';
import {MatIconModule} from '@angular/material/icon';
import { ReactiveFormsModule } from '@angular/forms';
import { EducationComponent } from './experiences/education/education.component';
import { ExperienceComponent } from './experiences/experience/experience.component';

@NgModule({
  declarations: [
    AppComponent,
    LogoComponent,
    TitleComponent,
    NavigationComponent,
    PersonalComponent,
    ExperiencesComponent,
    ResultComponent,
    EducationComponent,
    ExperienceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
