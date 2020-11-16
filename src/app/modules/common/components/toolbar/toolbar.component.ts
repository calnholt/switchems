import { MonsterComplete } from './../../../monster/model/monster';
import { ToolbarService } from './toolbar.service';
import { Path } from './../../../../types/dataTypes';
import { Component, OnInit } from '@angular/core';
import { Router, Event } from '@angular/router';
import { MonsterService } from './../../../monster/monster.service';

@Component({
  selector: 'toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {
  visible: boolean;
  logo: Path = '../../../../assets/images/website/logo.png';
  monsters: string[] = [];
  monster: MonsterComplete = new MonsterComplete();

  constructor(public toolbarService: ToolbarService, private router: Router, private monsterService: MonsterService) { }

  ngOnInit() {
    this.router.events.subscribe((event: Event) => {
      this.toolbarService.show();
    });
    this.monsterService.getMonsters().forEach(m => this.monsters.push(m.monsterName));
  }

  goToMonster() {
    this.router.navigate([`monster/${this.monster.monsterName}`], {});
    this.monster = new MonsterComplete();
  }

  openRulebook() {
    window.open('https://drive.google.com/open?id=1Y0YeI9Vpbk1hV7j8d_r5A5i1hkmWXcgg', '_blank');
  }

}
