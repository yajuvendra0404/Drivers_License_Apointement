import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExaminerComponent } from './examiner/examiner.component';
import { ExaminerRoutingModule } from './examiner-routing.module';

@NgModule({
  declarations: [
    ExaminerComponent
  ],
  imports: [
    CommonModule,
    ExaminerRoutingModule
  ]
})
export class ExaminerModule { }
