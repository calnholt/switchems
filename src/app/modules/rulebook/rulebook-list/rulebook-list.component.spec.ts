/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { RulebookListComponent } from './rulebook-list.component';

describe('RulebookListComponent', () => {
  let component: RulebookListComponent;
  let fixture: ComponentFixture<RulebookListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RulebookListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RulebookListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
