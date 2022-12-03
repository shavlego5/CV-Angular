import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExperiencesComponent } from './experiences/experiences.component';
import { PersonalComponent } from './personal/personal.component';
import { ResultComponent } from './result/result.component';

const routes: Routes = [
  {
    path: '',
    component: PersonalComponent,
  },
  {
    path: 'experiences',
    component: ExperiencesComponent,
  },
  {
    path: 'result',
    component: ResultComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
