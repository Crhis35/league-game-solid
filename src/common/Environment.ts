import Character from './Character';

export abstract class Environment {
  name!: string;
  advantages!: number;
  disadvantages!: number;

  abstract apply(arg1: Character[]): void;
}
