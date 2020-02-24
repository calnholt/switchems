import { Term, Image } from 'src/app/modules/data/data';

export const ELEMENTS = ['Fire', 'Water', 'Rock', 'Leaf', 'Electric', 'Death'] as const;
export type ElemType = typeof ELEMENTS[number];

export const ROLES = ['Warrior', 'Assassin', 'Technical', 'Tank', 'Support', 'Tricky'] as const;
export type Role = typeof ROLES[number];

export type Url = string;
export type Path = string;
export type Css = string;
export type ImageFile = string;

export const ICON_PATH: Path = './assets/images';
export const SYMBOLS_PATH: Path = ICON_PATH + '/symbols/';
export const ELEMENT_PATH_COLOR: Path = ICON_PATH + '/elements/color/';
export const ELEMENT_PATH_GRAY: Path = ICON_PATH + '/elements/gray/';

export type TermCodeValue = string;

// best method I could think of with the least redundancy while maintaining strong typing
const TERM_KEYS = ['~BURN~', '~SUCCESS~', '~FLINCH~', '~PARALYZE~', '~LEECH~', '~FATIGUE~',
    '~PREVENT ESC~', '~STATUS~', '~SINGLE~', '~CONSECUTIVE~', '~STUN~', '~RECOIL~', '~CURSE~'] as const;
export type TermCode = typeof TERM_KEYS[number];
export const TERM_CODES = [
    new Term('~BURN~', 'Burned monsters gain -1[ATK]. Burned [L] [R] [S] monsters gain -2[ATK] instead.'),
    new Term('~SUCCESS~', 'Unsuccessful attacks do nothing.'),
    new Term('~FLINCH~', 'Prevent the targeted monster\'s attack if this attack is faster speed.'),
    new Term('~PARALYZE~', 'Paralyzed monsters have -2[SPD] and all of their attacks have [2], This attack is successful.'),
    new Term('~LEECH~', 'At the end of each turn, deal 1[ATK] to the leeched monster. If your active monster '
        + 'is [L], heal 1[HP]. Stacks up to three. Remove on switch.'),
    new Term('~FATIGUE~', 'Fatigued monsters gain -1[DEF]. Fatigued [W] [E] [F] monsters can\'t use buff cards.'),
    new Term('~PREVENT ESC~', 'Cannot be prevented with Can\'t Escape!'),
    new Term('~STATUS~', 'Paralyze, burn, leech, etc.'),
    new Term('~SINGLE~', 'Recharges on switch.'),
    new Term('~CONSECUTIVE~', 'Cannot be used consecutively.'),
    new Term('~STUN~', 'Stunned monsters cannot switch.'),
    new Term('~RECOIL~', 'Recoil damage cannot be prevented and still occurs if the targeted monster protects.'),
    new Term('~CURSE~', 'If this card is flipped for a [X] effect, that monster is dealt 1[ATK].'),
] as const;

const IMAGE_KEYS = ['[ATK]', '[+]', '[B]', '[-]', '[1]', '[2]', '[3]', '[DEF]', '[TA]', '[X]', '[SUCC]', '[FAIL]',
'[SPD]', '[F]', '[W]', '[L]', '[R]', '[E]', '[S]', '[ST]', '[REAC]', '[HP]'] as const;
export type ImageCode = typeof IMAGE_KEYS[number];
export const IMAGE_CODES = [
    new Image('[ATK]', SYMBOLS_PATH + 'attack.png'),
    new Image('[+]', SYMBOLS_PATH + 'draw.png'),
    new Image('[B]', SYMBOLS_PATH + 'buff.png'),
    new Image('[-]', SYMBOLS_PATH + 'pay.png'),
    new Image('[1]', SYMBOLS_PATH + '1.png'),
    new Image('[2]', SYMBOLS_PATH + '2.png'),
    new Image('[3]', SYMBOLS_PATH + '3.png'),
    new Image('[DEF]', SYMBOLS_PATH + 'defense.png'),
    new Image('[TA]', SYMBOLS_PATH + 'aura.png'),
    new Image('[X]', SYMBOLS_PATH + 'x.png'),
    new Image('[SUCC]', SYMBOLS_PATH + 'success.png'),
    new Image('[FAIL]', SYMBOLS_PATH + 'fail.png'),
    new Image('[SPD]', SYMBOLS_PATH + 'speed.png'),
    new Image('[F]', ELEMENT_PATH_COLOR + 'fire.png'),
    new Image('[W]', ELEMENT_PATH_COLOR + 'water.png'),
    new Image('[L]', ELEMENT_PATH_COLOR + 'leaf.png'),
    new Image('[R]', ELEMENT_PATH_COLOR + 'rock.png'),
    new Image('[E]', ELEMENT_PATH_COLOR + 'electric.png'),
    new Image('[S]', ELEMENT_PATH_COLOR + 'death.png'),
    new Image('[ST]', SYMBOLS_PATH + 'status.png'),
    new Image('[REAC]', SYMBOLS_PATH + 'reaction.png'),
    new Image('[HP]', SYMBOLS_PATH + 'heart.png'),
] as const;
