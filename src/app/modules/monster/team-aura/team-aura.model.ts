export interface TeamAura {
  name: string;
  text: string;
  type: 'ONGOING' | 'TIME' | 'USES';
  duration?: number;
  monsterName?: string;
  isAilment?: boolean;
  copies?: number;
  isBadge?: boolean;
}