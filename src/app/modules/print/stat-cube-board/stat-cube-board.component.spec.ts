/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { StatCubeBoardComponent } from './stat-cube-board.component';

describe('StatCubeBoardComponent', () => {
  let component: StatCubeBoardComponent;
  let fixture: ComponentFixture<StatCubeBoardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatCubeBoardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatCubeBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
