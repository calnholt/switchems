import { ELEMENTS, ROLES, TERM_CODES, IMAGE_CODES } from './../../../../types/dataTypes';
import { DataService } from './../../../../services/data.service';
import { FormControl } from '@angular/forms';
import { MonsterComplete } from 'src/app/modules/monster/model/monster';
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
    private dataService: DataService,
  ) {
    this.populateMonster();
    console.log(this.termCodes);
    console.log(this.imageCodes);
    console.log(this.roleList);
  }

  ngOnInit() {}

  // hardcoded placeholder monster data
  // should probably be retrieved from a parent component and be set as an @Input
  populateMonster() {
    this.monster = new MonsterComplete();
    this.monster.monsterId = 1;
    this.monster.monsterName = 'Stallagrowth';
    this.monster.elements = ['Rock', 'Leaf'];
    this.monster.abilityName = 'Thorned Body';
    this.monster.abilityText = 'Whenever this monster is dealt damage by a [F] [R] attack, that monster is dealt 2[ATK].';
    this.monster.hp = 14;
    this.monster.role = 'Tank';
    this.elements = new FormControl();
    this.elements.setValue(this.monster.elements);
    console.log(this.monster);
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
