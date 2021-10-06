import { Component, OnInit, Inject, NgZone } from '@angular/core';

import { Router } from '@angular/router';
import { FormGroup, FormBuilder  } from "@angular/forms";
import { DailyEvaluationService } from './../../../services/daily-evaluation.service';

@Component({
  selector: 'app-tambah',
  templateUrl: './tambah.page.html',
  styleUrls: ['./tambah.page.scss'],
})

export class TambahPage implements OnInit {

  dailyEvalForm: FormGroup;

  constructor(
    private router: Router,
    public formBuilder: FormBuilder,
    private zone: NgZone,
    private dailyEvalService: DailyEvaluationService    
  ) { 
    this.dailyEvalForm = this.formBuilder.group({
      rhr: [''],
    })
  }

  ngOnInit() {
  }

  onSubmit() {
    if (!this.dailyEvalForm.valid) {
      return false;
    } else {
      this.dailyEvalService.submitDailyEval(this.dailyEvalForm.value)
        .subscribe((response) => {
          this.zone.run(() => {
            this.dailyEvalForm.reset();
            this.router.navigate(['/menu/evaluasi/harian']);
          })
        });
    }
  }

}
