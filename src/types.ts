export interface Character {
  name: string;
  descriptor: string;
  type: string;
  focus: string;
  tier: number;
  effort: number
  xp: {
    game: number;
    [other: string]: number;
  };
  advancement: {
    pool: boolean;
    edge: boolean;
    effort: boolean;
    skill: boolean;
    [other: string]: boolean;
  };
  stats: {
    might: Stat;
    speed: Stat;
    intellect: Stat;
    [other: string]: Stat;
  };
  recoveryAdd: number;
  recoveryRoll: {
    action: boolean;
    tenMin: boolean;
    oneHr: boolean;
    tenHr: boolean;
    [other: string]: boolean;
  };
  damageTrack: {
    hale: boolean;
    impared: boolean;
    debilitated: boolean;
    dead: boolean;
  };
  skills: Skill[];
  abilities: Ability[];
  attacks: Attack[];
  cyphersLimit: {
    base: number;
    add: number;
  }
  cyphers: Cypher[];
  equipment: Equipment[];
  armor: number;
}

export interface Stat {
  name: string;
  pool: number;
  edge: number;
  defense: string;
  current: number;
}

export interface Skill {
  name: string;
  stat: string;
  training: string;
  source: string;
}

export interface Ability {
  name: string;
  description: string;
  training: string;
  stat: string;
  cost: string;
  source: string;
}

export interface Attack {
  name: string;
  cost: string;
  stat: string;
  damage: {
    value: number;
    type: string;
  };
  training: string;
  source: string;
}

export interface Cypher {
  name: string;
  level: number;
  description: string;
}

export interface Equipment {
  name: string;
  [key: string]: any;
}
