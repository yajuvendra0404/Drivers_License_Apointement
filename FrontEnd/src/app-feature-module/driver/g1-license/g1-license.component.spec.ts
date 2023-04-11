import { ComponentFixture, TestBed } from '@angular/core/testing';

import { G1LicenseComponent } from './g1-license.component';

describe('G1LicenseComponent', () => {
  let component: G1LicenseComponent;
  let fixture: ComponentFixture<G1LicenseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ G1LicenseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(G1LicenseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
