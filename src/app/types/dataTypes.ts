export const ELEMENTS = ['Fire', 'Water', 'Rock', 'Leaf', 'Electric', 'Death'] as const;
export type ElemType = typeof ELEMENTS[number];

export const ROLES = ['Warrior', 'Assassin', 'Technical', 'Tank', 'Support', 'Tricky'] as const;
export type Role = typeof ROLES[number];

export type Url = string;
export type Path = string;
export type ImageFile = string;

const SYMBOLS_PATH: Path = './assets/images/symbols/';
const ELEMENT_PATH: Path = './assets/images/elements/color/';

export type TermCodeValue = string;

export const TERM_CODES = [
    {'~BURN~': 'Burned monsters gain -1[ATK]. Burned [L] [R] [S] monsters gain -2[ATK] instead.' as TermCodeValue},
    {'~SUCCESS~': 'Unsuccessful attacks do nothing.' as TermCodeValue},
    {'~FLINCH~': 'Prevent the targeted monster\'s attack if this attack is faster speed.' as TermCodeValue},
    {'~PARALYZE~': 'Paralyzed monsters have -2[SPD] and all of their attacks have [2]: This attack is successful.' as TermCodeValue},
    {'~LEECH~': 'At the end of each turn, deal 1[ATK] to the leeched monster. If your active monster '
        + 'is [L], heal 1[HP]. Stacks up to three. Remove on switch.' as TermCodeValue},
    {'~FATIGUE~': 'Fatigued monsters gain -1[DEF]. Fatigued [W] [E] [F] monsters can\'t use buff cards.' as TermCodeValue},
    {'~PREVENT ESC~': 'Cannot be prevented with Can\'t Escape!' as TermCodeValue},
    {'~STATUS~': 'Paralyze, burn, leech, etc.' as TermCodeValue},
    {'~SINGLE~': 'Recharges on switch.' as TermCodeValue},
    {'~CONSECUTIVE~': 'Cannot be used consecutively.' as TermCodeValue},
    {'~STUN~': 'Stunned monsters cannot switch.' as TermCodeValue},
    {'~RECOIL~': 'Recoil damage cannot be prevented and still occurs if the targeted monster protects.' as TermCodeValue},
    {'~CURSE~': 'If this card is flipped for a [X] effect, that monster is dealt 1[ATK].' as TermCodeValue},
] as const;
export type TermCode = typeof TERM_CODES[number];

export const IMAGE_CODES = [
    {'[ATK]': SYMBOLS_PATH + 'attack.png' as ImageFile},
    {'[+]': SYMBOLS_PATH + 'draw.png' as ImageFile},
    {'[B]': SYMBOLS_PATH + 'buff.png' as ImageFile},
    {'[-]': SYMBOLS_PATH + 'pay.png' as ImageFile},
    {'[1]': SYMBOLS_PATH + '1.png' as ImageFile},
    {'[2]': SYMBOLS_PATH + '2.png' as ImageFile},
    {'[3]': SYMBOLS_PATH + '3.png' as ImageFile},
    {'[DEF]': SYMBOLS_PATH + 'defense.png' as ImageFile},
    {'[TA]': SYMBOLS_PATH + 'aura.png' as ImageFile},
    {'[X]': SYMBOLS_PATH + 'x.png' as ImageFile},
    {'[SUCC]': SYMBOLS_PATH + 'success.png' as ImageFile},
    {'[FAIL]': SYMBOLS_PATH + 'fail.png' as ImageFile},
    {'[SPD]': SYMBOLS_PATH + 'speed.png' as ImageFile},
    {'[F]': ELEMENT_PATH + 'fire.png' as ImageFile},
    {'[W]': ELEMENT_PATH + 'water.png' as ImageFile},
    {'[L]': ELEMENT_PATH + 'leaf.png' as ImageFile},
    {'[R]': ELEMENT_PATH + 'rock.png' as ImageFile},
    {'[E]': ELEMENT_PATH + 'electric.png' as ImageFile},
    {'[S]': ELEMENT_PATH + 'death.png' as ImageFile},
    {'[ST]': SYMBOLS_PATH + 'status.png' as ImageFile},
    {'[REAC]': SYMBOLS_PATH + 'reaction.png' as ImageFile},
    {'[HP]': SYMBOLS_PATH + 'heart.png' as ImageFile},
] as const;
export type ImageCode = typeof IMAGE_CODES[number];


// const IMAGE_CODES = ['[ATK]', ]
