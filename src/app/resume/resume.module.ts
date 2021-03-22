import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WorkExperienceComponent } from './work-experience/work-experience.component';
import { HeaderComponent } from './header/header.component';
import { TitleComponent } from './title/title.component';
import { SkillRowComponent } from './skill-row/skill-row.component';
import { ResumeComponent } from './resume.component';
import { ResumeRoutingModule } from './resume-routing.module';
import { ResumeService } from './resume.service';

@NgModule({
  providers: [ResumeService],
  declarations: [
    WorkExperienceComponent,
    HeaderComponent,
    TitleComponent,
    SkillRowComponent,
    ResumeComponent
  ],
  imports: [
    CommonModule,
    ResumeRoutingModule
  ],
})
export class ResumeModule { }
