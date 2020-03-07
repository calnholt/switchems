import { loadMonsters } from './../../import/json-to-obj';
import { ELEMENTS, ROLES, TERM_CODES, IMAGE_CODES } from './../../../types/dataTypes';
import { FormControl } from '@angular/forms';
import { MonsterComplete, Monster } from './../model/monster';
import { MatSelectChange } from '@angular/material/select';
import { CdkTextareaAutosize } from '@angular/cdk/text-field';
import { Component, ViewChild, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

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
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    const allMonsters = loadMonsters();
    const monsterName: string = this.route.snapshot.paramMap.get('monsterName');
    this.monster = allMonsters.find(m => m.monsterName === monsterName);
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
