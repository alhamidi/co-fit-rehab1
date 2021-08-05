import { Component, OnInit, Inject, NgZone } from '@angular/core';

import { Router } from '@angular/router';
import { FormGroup, FormBuilder  } from "@angular/forms";
import { MonthlyEvaluationService } from './../../services/monthly-evaluation.service';

@Component({
  selector: 'app-bulanan',
  templateUrl: './bulanan.page.html',
  styleUrls: ['./bulanan.page.scss'],
})

export class BulananPage implements OnInit {

  monthlyEvalForm: FormGroup;

  constructor(
    private router: Router,
    public formBuilder: FormBuilder,
    private zone: NgZone,
    private monthlyEvalService: MonthlyEvaluationService    
  ) { 
    this.monthlyEvalForm = this.formBuilder.group({
      uji_jalan: [''],
      kualitas_hidup: [''],
      skala_sesak: [''],
      darah: [''],
    })
  }

  ngOnInit() {
  }

  onSubmit() {
    if (!this.monthlyEvalForm.valid) {
      return false;
    } else {
      this.monthlyEvalService.submitMonthlyEval(this.monthlyEvalForm.value)
        .subscribe((response) => {
          this.zone.run(() => {
            this.monthlyEvalForm.reset();
            this.router.navigate(['/menu/evaluasi/statistik']);
          })
        });
    }
  }

}
