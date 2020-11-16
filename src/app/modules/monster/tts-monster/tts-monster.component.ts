import { Component, OnInit } from '@angular/core';
import { MonsterComplete } from '../model/monster';
import { ActivatedRoute } from '@angular/router';
import { ToolbarService } from '../../common/components/toolbar/toolbar.service';
import html2canvas from 'html2canvas';
import { MonsterService } from '../monster.service';

@Component({
  selector: 'tts-monster',
  templateUrl: './tts-monster.component.html',
  styleUrls: ['./tts-monster.component.scss']
})
export class TtsMonsterComponent implements OnInit {
  monster: MonsterComplete;
  timeout: number = 1500;

  constructor(
    private route: ActivatedRoute,
    private toolbarService: ToolbarService,
    private monsterService: MonsterService,
  ) {}

  ngOnInit() {
    this.toolbarService.hide();
    this.route.params.subscribe(params => {
      const monsterName: string = this.route.snapshot.paramMap.get('monsterName');
      this.monster = this.monsterService.getMonster(monsterName);
    });
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setTimeout((this.download).bind(this), this.timeout);
  }

  download() {
    html2canvas(document.querySelector('.tts-container')).then(canvas => {
      const a = document.createElement('a');
      a.setAttribute('download', `${this.monster.monsterName}.jpg`);
      a.setAttribute('href', canvas.toDataURL('image/jpg').replace('image/jpg', 'image/octet-stream'));
      a.click();
    });
  }

}
