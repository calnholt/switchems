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
import { default as Boltblebee } from '../data/monsters/BoltbleBee.json';
import { default as Smolderskulk } from '../data/monsters/Smolderskulk.json';
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
        Boltblebee,
        Chargroar,
        Cleansitoad,
        Drownigator,
        Flexferno,
        Galeaffy,
        Shaleshell,
        Smolderskulk,
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
        const MONSTER_PROPERTIES = ['monsterId', 'abilityName', 'monsterName', 'abilityText', 'hp', 'complexity'];
        MONSTER_PROPERTIES.forEach(p => monster[p] = json[p]);
        const elements = Array<ElemType>();
        json.elements.forEach(element => elements.push(getElemType(element)));
        monster.elements = elements;
        monster.role = getRole(json.role);
        monster.actions = new Array<Action>();
        const ACTIONS = 4;
        const ACTION_PROPERTIES = ['abilityName', 'abilityText', 'attack', 'speed', 'draw', 'discard',
        'buff', 'auraDuration', 'statusFlg', 'reactionFlg'];
        for (let i = 0; i < ACTIONS; i++) {
            const action = new Action();
            ACTION_PROPERTIES.forEach(p => action[p] = json.actions[i][p]);
            action.monsterName = monster.monsterName;
            action.element = getElemType(json.actions[i].element);
            action.modifiers = json.actions[i].modifiers ? json.actions[i].modifiers : action.modifiers;
            monster.actions.push(action);
        }
        monster.buffs = new Array<Buff>();
        const BUFFS = 4;
        const BUFF_PROPERTIES = ['timing', 'buffText', 'critFlg', 'flipEventText', 'flipEventFlg', 'buffName'];
        for (let i = 0; i < BUFFS; i++) {
            const buff = new Buff();
            BUFF_PROPERTIES.forEach(p => buff[p] = json.buffs[i][p]);
            buff.monsterName = monster.monsterName;
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



