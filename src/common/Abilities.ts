export interface Flyer {
  fly(): void;
}

export interface Shooter {
  shoot(): void;
}

export interface Hacker {
  hack(): void;
}

export interface Magic {
  cast(): void;
}

export interface Stats {
  health: number;
  speed: number;
  damage: number;
  defense: number;
  magia: number;
  move: number;
  mana: number;
}
