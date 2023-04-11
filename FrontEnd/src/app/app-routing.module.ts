import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:"admin",loadChildren:()=>import("@adminModule/admin.module").then(m=>(m.AdminModule))},
  {path:"examiner",loadChildren:()=> import("@examinerModule/examiner.module").then(m=>(m.ExaminerModule))},
  {path:"driver",loadChildren:()=> import("@driverModule/driver.module").then(m=>m.DriverModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
