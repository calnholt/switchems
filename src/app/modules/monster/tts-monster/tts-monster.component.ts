import { Action, Buff } from './../model/monster';
import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MonsterService } from '../monster.service';

@Component({
  selector: 'tts-monster',
  templateUrl: './tts-monster.component.html',
  styleUrls: ['./tts-monster.component.scss']
})
export class TtsMonsterComponent implements OnInit {
  @ViewChild('tts', {static: true}) public template: TemplateRef<any>;
  cards = [];
  monsterName: string;

  constructor(
    private route: ActivatedRoute,
    private monsterService: MonsterService,
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.monsterName = this.route.snapshot.paramMap.get('monsterName');
      const monster = this.monsterService.getMonster(this.monsterName, true);
      const monsterRef = this.monsterService.getMonster(this.monsterName, true);
      monster.referenceFlg = false;
      this.cards.push(monsterRef);
      monster.buffs.forEach(b => this.cards.push(b));
      monster.actions.forEach(a => this.cards.push(a));
      this.cards.push(monster);
    });
  }

  isBuff(card: any): boolean {
    return (card instanceof Buff);
  }
  isAction(card: any): boolean {
    return (card instanceof Action);
  }

}
