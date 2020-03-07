import { loadMonsters } from './../../import/json-to-obj';
import { ELEMENTS, ROLES, TERM_CODES, IMAGE_CODES } from './../../../types/dataTypes';
import { FormControl } from '@angular/forms';
import { MonsterComplete } from './../model/monster';
import { MatSelectChange } from '@angular/material/select';
import { CdkTextareaAutosize } from '@angular/cdk/text-field';
import { Component, ViewChild, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'monster-form',
  templateUrl: './monster-form.component.html',
  styleUrls: ['./monster-form.component.scss'],
  // needed to render [innerHTML] class styling
  encapsulation: ViewEncapsulation.None,
})
export class MonsterFormComponent implements OnInit {
  @ViewChild('autosize') autosize: CdkTextareaAutosize;
  monster: MonsterComplete;
  elements: FormControl;
  elementList = ELEMENTS;
  roleList = ROLES;
  panelOpenState: false;
  termCodes = TERM_CODES;
  imageCodes = IMAGE_CODES;

  constructor(
  ) {
    this.populateMonster();
  }

  ngOnInit() {}

  // hardcoded placeholder monster data
  // should probably be retrieved from a parent component and be set as an @Input
  populateMonster() {
    this.monster = loadMonsters()[1];
    this.elements = new FormControl();
    this.elements.setValue(this.monster.elements);
  }

  // restrict number of elements a monster can have to 2
  // this could change
  elementChanged(event: MatSelectChange) {
    if (event.value.length < 3) {
      this.monster.elements = event.value;
    } else if (event.value.length > 2) {
      this.elements.setValue(this.monster.elements);
    }
  }
}
