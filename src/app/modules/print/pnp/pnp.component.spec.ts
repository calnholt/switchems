/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PnpComponent } from './pnp.component';

describe('PnpComponent', () => {
  let component: PnpComponent;
  let fixture: ComponentFixture<PnpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PnpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PnpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
