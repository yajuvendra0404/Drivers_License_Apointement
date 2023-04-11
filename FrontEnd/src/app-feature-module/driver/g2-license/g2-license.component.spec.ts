import { ComponentFixture, TestBed } from '@angular/core/testing';

import { G2LicenseComponent } from './g2-license.component';

describe('G2LicenseComponent', () => {
  let component: G2LicenseComponent;
  let fixture: ComponentFixture<G2LicenseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ G2LicenseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(G2LicenseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
