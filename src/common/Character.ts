import { faker } from '@faker-js/faker';
import { Stats } from './Abilities';
import { Items } from './Items';

export interface ICharacter {
  name: string;
  level: number;
}

export default abstract class Character implements ICharacter, Stats {
  name!: string;
  level: number = 1;
  health!: number;
  speed!: number;
  damage!: number;
  defense!: number;
  magia!: number;
  move!: number;
  mana!: number;
  items: Items[] = [];

  constructor(init: Omit<ICharacter, 'name' | 'level'>) {
    Object.assign(this, init);
    this.name = faker.internet.userName();
  }

  public abstract attack(): number;
  public abstract levelUp(): void;
  public abstract activateSkill(): void;
}
