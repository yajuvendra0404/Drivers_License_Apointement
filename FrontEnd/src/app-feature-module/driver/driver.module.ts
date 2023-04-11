import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DriverComponent } from '@driverModule/driver.component';
import { DriverRoutingModule } from '@driverModule/driver-routing.module';
import { G1LicenseComponent } from '@driverModule/g1-license/g1-license.component';
import { G2LicenseComponent } from '@driverModule/g2-license/g2-license.component';
import { GLicenseComponent } from '@driverModule/g-license/g-license.component';

@NgModule({
  declarations: [
    DriverComponent,
    G1LicenseComponent,
    G2LicenseComponent,
    GLicenseComponent
  ],
  imports: [
    CommonModule,
    DriverRoutingModule
  ]
})
export class DriverModule { }
