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
  elementList: string[] = ['Fire', 'Water', 'Rock', 'Leaf', 'Electric', 'Death'];
  roleList: string[] = ['Warrior', 'Assassin', 'Technical', 'Tank', 'Support', 'Tricky'];
  panelOpenState: false;
  TERM_MAP: any;
  IMG_MAP: any;

  constructor(
    private dataService: DataService,
  ) {
    this.populateMonster();
    this.IMG_MAP = dataService.getImgMap();
    this.TERM_MAP = dataService.getTermsMap();
  }

  ngOnInit() {}

  // hardcoded placeholder monster data
  // should probably be retrieved from a parent component and be set as an @Input
  populateMonster() {
    this.monster = new MonsterComplete();
    this.monster.monsterId = 1;
    this.monster.monsterName = 'Stallagrowth';
    this.monster.elementLks = ['Rock', 'Leaf'];
    this.monster.abilityName = 'Thorned Body';
    this.monster.abilityText = 'Whenever this monster is dealt damage by a [F] [R] attack, that monster is dealt 2[ATK].';
    this.monster.hp = 14;
    this.monster.roleLk = 'Tank';
    this.elements = new FormControl();
    this.elements.setValue(this.monster.elementLks);
    console.log(this.monster);
  }

  // restrict number of elements a monster can have to 2
  // this could change
  elementChanged(event: MatSelectChange) {
    if (event.value.length < 3) {
      this.monster.elementLks = event.value;
    } else if (event.value.length > 2) {
      this.elements.setValue(this.monster.elementLks);
    }
  }
}
