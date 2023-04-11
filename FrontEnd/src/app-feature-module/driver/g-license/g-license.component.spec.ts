import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GLicenseComponent } from './g-license.component';

describe('GLicenseComponent', () => {
  let component: GLicenseComponent;
  let fixture: ComponentFixture<GLicenseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GLicenseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GLicenseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
