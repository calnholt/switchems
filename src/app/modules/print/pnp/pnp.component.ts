import { MonsterComplete } from './../../monster/model/monster';
import { ToolbarService } from './../../common/components/toolbar/toolbar.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pnp',
  templateUrl: './pnp.component.html',
  styleUrls: ['./pnp.component.scss']
})
export class PnpComponent implements OnInit {
  allMonsters: MonsterComplete[];
  constructor(private toolbarService: ToolbarService) { }

  ngOnInit() {
    this.toolbarService.hide();
    const cache = JSON.parse(localStorage.getItem('allMonsters'));
    this.allMonsters = cache.token;
  }

}
