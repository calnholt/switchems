import { default as Stallagrowth } from '../data/monsters/Stallagrowth.json';
import { default as Cleansitoad } from '../data/monsters/Cleansitoad.json';
import { default as Chargroar } from '../data/monsters/Chargroar.json';
import { default as Flexferno } from '../data/monsters/Flexferno.json';
import { default as Zappguin } from '../data/monsters/Zappguin.json';
import { default as Phantomaton } from '../data/monsters/Phantomaton.json';
import { default as Shaleshell } from '../data/monsters/Shaleshell.json';
import { default as Galeaffy } from '../data/monsters/Galeaffy.json';
import { default as Drownigator } from '../data/monsters/Drownigator.json';
import { default as Americaw } from '../data/monsters/Americaw.json';
import { default as Steamie } from '../data/monsters/Steamie.json';
import { ElemType, ELEMENTS, Role, ROLES } from './../../types/dataTypes';
import { MonsterComplete, Buff, Action } from '../monster/model/monster';

const getElemType = (text: string): ElemType => {
    return ELEMENTS.find(e => e.toString() === text);
};

const getRole = (text: string): Role => {
    return ROLES.find(r => r.toString() === text);
};

export const loadMonsters = (): Array<MonsterComplete> => {
    let out = new Array<MonsterComplete>();
    const ALL = [
        Americaw,
        Chargroar,
        Cleansitoad,
        Drownigator,
        Flexferno,
        Galeaffy,
        Shaleshell,
        Stallagrowth,
        Steamie,
        Phantomaton,
        Zappguin,
    ];
    ALL.forEach(json => {
        const monster = new MonsterComplete();
        if (!json.abilityName) {
            return null;
        }
        monster.monsterId = json.monsterId;
        monster.abilityName = json.abilityName;
        monster.monsterName = json.monsterName;
        const elements = Array<ElemType>();
        json.elements.forEach(element => elements.push(getElemType(element)));
        monster.elements = elements;
        monster.role = getRole(json.role);
        monster.abilityName = json.abilityName;
        monster.abilityText = json.abilityText;
        monster.hp = json.hp;
        monster.actions = new Array<Action>();
        const ACTIONS = 4;
        const ACTION_PROPERTIES = ['abilityName', 'abilityText', 'attack', 'speed', 'draw', 'discard',
        'buff', 'auraDuration', 'statusFlg', 'reactionFlg'];
        for (let i = 0; i < ACTIONS; i++) {
            const action = new Action();
            ACTION_PROPERTIES.forEach(p => action[p] = json.actions[i][p]);
            action.element = getElemType(json.actions[i].element);
            action.modifiers = json.actions[i].modifiers ? json.actions[i].modifiers : action.modifiers;
            monster.actions.push(action);
        }
        monster.buffs = new Array<Buff>();
        const BUFFS = 4;
        const BUFF_PROPERTIES = ['timing', 'buffText', 'critFlg', 'flipEventText', 'flipEventFlg'];
        for (let i = 0; i < BUFFS; i++) {
            const buff = new Buff();
            BUFF_PROPERTIES.forEach(p => buff[p] = json.buffs[i][p]);
            monster.buffs.push(buff);
        }
        console.log(monster);
        out = out.sort((a, b) => {
            if (a.monsterName > b.monsterName) {return 1; }
            if (a.monsterName < b.monsterName) {return -1; }
            return 0;
        });
        out.push(monster);
    });
    return out;
};



