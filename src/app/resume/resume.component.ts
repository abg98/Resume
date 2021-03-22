import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { ResumeService } from './resume.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})

export class ResumeComponent implements OnInit {
  work: any[];
  school: any[];
  skills: any;
  printable: boolean;

  constructor(
    private resumeService: ResumeService,
    private activatedRoute: ActivatedRoute
    ) {}

  ngOnInit(){
    this.activatedRoute.queryParams.subscribe(p => {
      this.printable = JSON.parse(p["printable"] || false);
    });
    this.resumeService.getSkills().subscribe(data => {
      this.skills = data;
    });
    this.resumeService.getWorkHistory().subscribe(data => {
      this.school = data?.school;
      this.work = data?.work;
    });
  }

  get src() {
    return this.resumeService.getImageURL('me.jpeg');
  }

  getResume() {
    this.resumeService.getResume()
      .subscribe(x => {
            var newBlob = new Blob([x], { type: "application/pdf" });
            if (window.navigator && window.navigator.msSaveOrOpenBlob) {
                window.navigator.msSaveOrOpenBlob(newBlob);
                return;
            }
            const data = window.URL.createObjectURL(newBlob);

            var link = document.createElement('a');
            link.href = data;
            link.download = "AlecBGeibig_Resume.pdf";            
            link.click();

            setTimeout(function () {
                window.URL.revokeObjectURL(data);
                link.remove();
            }, 100);
        });
  }
}
