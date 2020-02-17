import { MonsterHeader } from 'src/app/modules/monster/model/monster';
export class Buff extends MonsterHeader {
    timing: number;
    buffText: string;
    critFlg: boolean;
}
