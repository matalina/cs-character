export const alex = {
  name: "Alex Kennedy",
  descriptor: "Introverted Psychic",
  type: "Hacker",
  focus: "Codes Magical Apps",
  tier: 1,
  effort: 1,
  xp: {
    game: 0,
  },
  advancement: {
    pool: true,
    edge: false,
    effort: false,
    skill: false,
    other: false,
  },
  stats: {
    might: {
      name: "might",
      pool: 10,
      edge: 0,
      defense: 'p',
      current: 10,
    },
    speed: {
      name: "speed",
      pool: 10,
      edge: 0,
      defense: 'p',
      current: 10,
    },
    intellect: {
      name: "intellect",
      pool: 10,
      edge: 0,
      defense: 'p',
      current: 10,
    },
  },
  recoveryAdd: 0,
  recoveryRoll: {
    action: false,
    tenMin: false,
    oneHr: false,
    tenHr: false,
  },
  damageTrack: {
    hale: true,
    impared: false,
    debilitated: false,
    dead: false,
  },
  skills: [],
  abilities: [
    {
      name: "Test ability",
      description: "just a bunch of junk to print here",
      source: 'GF, 345',
      cost: '1+',
      stat: 'i',
      training: 'p',
    }
  ],
  attacks: [],
  cypherLimit: {
    base: 2,
    add: 0,
  },
  cyphers: [],
  equipment: [],
  armor: [],
}

/*
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
  cost: number;
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
  */
