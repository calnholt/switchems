/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { GoopComponent } from './goop.component';

describe('GoopComponent', () => {
  let component: GoopComponent;
  let fixture: ComponentFixture<GoopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
