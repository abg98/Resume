import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { HomeComponent } from './home/home.component' 

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./resume/resume.module').then((mod) => mod.ResumeModule)
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
