import { CardDataService, DropdownOption, ToolbarTab } from 'card-builder-framework';
import { Component } from '@angular/core';
import { MonsterService } from './modules/monster/monster.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
    searchOptions: Array<string>;
    tabs: Array<ToolbarTab>;
    constructor(
      private cardDataService: CardDataService, 
      private monsterService: MonsterService,
      private router: Router,
      ) { }
  
    ngOnInit() {
      this.searchOptions = this.monsterService.getMonsters().map(m => m.monsterName);
      this.tabs = [
        // new ToolbarTab('Create', 'monster', 'builder'),
        // new ToolbarTab('Print & Play', 'print'),
        new ToolbarTab('How to Play', 'rules'),
      ];
    }

    goToPage(option: string) {
      this.router.navigate([`monsters/${option}`], {});
    }
    
}