export type Hero =
  | 'ana'
  | 'ashe'
  | 'baptiste'
  | 'bastion'
  | 'brigitte'
  | 'cassidy'
  | 'd-va'
  | 'doomfist'
  | 'echo'
  | 'genji'
  | 'hanzo'
  | 'junker-queen'
  | 'junkrat'
  | 'kiriko'
  | 'lifeweaver'
  | 'lucio'
  | 'mei'
  | 'mercy'
  | 'moira'
  | 'orisa'
  | 'pharah'
  | 'rammatra'
  | 'reaper'
  | 'reinhardt'
  | 'roadhog'
  | 'sigma'
  | 'sojourn'
  | 'solder-76'
  | 'sombra'
  | 'symmetra'
  | 'torbjorn'
  | 'tracer'
  | 'widowmaker'
  | 'winston'
  | 'wrecking-ball'
  | 'zarya'
  | 'zenyatta';

export interface Player {
  name: string;
  id: string;
  isPrivate: boolean;
}

export interface PlayerInfo {
  gamesPlayed: number;
  timePlayed: number;
  winrate: number;
  mostPlayedHero: Hero;
}
