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
  elementList: string[] = ['Fire', 'Water', 'Rock', 'Leaf', 'Electric', 'Skull'];
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

  populateMonster() {
    this.monster = new MonsterComplete();
    this.monster.monsterId = 1;
    this.monster.monsterName = 'Cleansitoad';
    this.monster.elementLks = ['Water'];
    this.monster.abilityName = 'Clear Mind';
    this.monster.abilityText = 'When this monster enters the battlefield, '
    + 'you may shuffle your discard pile into your deck. Then, look at the top three cards of your deck. '
    + 'You may put any number back on top or on the bottom in any order.';
    this.monster.hp = 12;
    this.monster.roleLk = 'Technical';
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
