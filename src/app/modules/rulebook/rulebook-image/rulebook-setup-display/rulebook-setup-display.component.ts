import { MonsterService } from './../../../monster/monster.service';
import { MonsterComplete } from './../../../monster/model/monster';
import { Component, OnInit, Input } from '@angular/core';
import { PLAYER_BOARD_TEXT } from 'src/app/types/dataTypes';

class RulebookSetupDisplay {
  monsters: Array<RulebookSetupMonsters> = [];
}

class RulebookSetupMonsters {
  activeMonster: MonsterComplete;
  leftMonster: MonsterComplete;
  rightMonster: MonsterComplete;
}

@Component({
  selector: 'rulebook-setup-display',
  templateUrl: './rulebook-setup-display.component.html',
  styleUrls: ['./rulebook-setup-display.component.scss']
})
export class RulebookSetupDisplayComponent implements OnInit {
  @Input() playerActiveMonster: MonsterComplete;
  monsters: RulebookSetupDisplay = new RulebookSetupDisplay();
  numbers = [1, 2, 3, 4, 5];
  boardText = PLAYER_BOARD_TEXT;

  constructor(private monsterService: MonsterService) { }

  ngOnInit() {
    this.initMonsters();
  }

  initMonsters() {
    // remove playerActiveMonster
    const monsters = this.monsterService.getMonsters().filter(m => m.monsterName !== this.playerActiveMonster.monsterName);
    const monstersToDisplay = Array<MonsterComplete>();
    let i = 0;
    while (i < 5) {
      const index = this.getRandomIndex(monsters.length);
      monstersToDisplay.push(monsters[index]);
      monsters.splice(index, 1);
      i++;
    }
    const oppoMonsters = new RulebookSetupMonsters();
    const playerMonsters = new RulebookSetupMonsters();

    oppoMonsters.activeMonster = monstersToDisplay[0];
    oppoMonsters.leftMonster = monstersToDisplay[1];
    oppoMonsters.rightMonster = monstersToDisplay[2];
    playerMonsters.activeMonster = this.playerActiveMonster;
    playerMonsters.leftMonster = monstersToDisplay[3];
    playerMonsters.rightMonster = monstersToDisplay[4];

    this.monsters.monsters.push(oppoMonsters);
    this.monsters.monsters.push(playerMonsters);
  }

  getRandomIndex(length: number): number {
    return Math.floor(Math.random() * length);
  }


}
