import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExaminerComponent } from '@examinerModule/examiner.component';
import { ExaminerRoutingModule } from '@examinerModule/examiner-routing.module';

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
