import {default as Stallagrowth} from 'src/app/modules/data/monsters/Stallagrowth.json';
import {default as Cleansitoad} from 'src/app/modules/data/monsters/Cleansitoad.json';
import { ElemType, ELEMENTS, Role, ROLES } from './../../types/dataTypes';
import { MonsterComplete, Buff, Action } from '../monster/model/monster';

const getElemType = (text: string): ElemType => {
    return ELEMENTS.find(e => e.toString() === text);
};

const getRole = (text: string): Role => {
    return ROLES.find(r => r.toString() === text);
};

export const loadMonsters = (): Array<MonsterComplete> => {
    const out = new Array<MonsterComplete>();
    const ALL = [Stallagrowth, Cleansitoad];
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
        for (let i = 0; i < 4; i++) {
            const action = new Action();
            action.abilityName = json.actions[i].abilityName;
            action.abilityText = json.actions[i].abilityText;
            action.attack = json.actions[i].attack;
            action.speed = json.actions[i].speed;
            action.element = getElemType(json.actions[i].element);
            action.draw = json.actions[i].draw;
            action.discard = json.actions[i].discard;
            action.buff = json.actions[i].buff;
            action.modifiers = json.actions[i].modifiers;
            action.auraDuration = json.actions[i].auraDuration;
            action.statusFlg = json.actions[i].statusFlg;
            action.reactionFlg = json.actions[i].reactionFlg;
            monster.actions.push(action);
        }
        monster.buffs = new Array<Buff>();
        const BUFFS = 4;
        for (let i = 0; i < BUFFS; i++) {
            const buff = new Buff();
            buff.timing = json.buffs[i].timing;
            buff.buffText = json.buffs[i].buffText;
            buff.critFlg = json.buffs[i].critFlg;
            monster.buffs.push(buff);
        }
        console.log(monster);
        out.push(monster);
    });
    return out;
};



