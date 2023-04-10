import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './nav/nav.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ModalsComponent } from './modals/modals.component';

@NgModule({
  declarations: [
    NavComponent,
    HeaderComponent,
    FooterComponent,
    NotFoundComponent,
    ModalsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
