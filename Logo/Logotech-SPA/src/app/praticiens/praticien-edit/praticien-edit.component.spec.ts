/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PraticienEditComponent } from './praticien-edit.component';

describe('PraticienEditComponent', () => {
  let component: PraticienEditComponent;
  let fixture: ComponentFixture<PraticienEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PraticienEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PraticienEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
