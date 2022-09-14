import { Stats } from './Abilities';

export enum ItemRole {
  MELEE = 'MELEE',
  MAGIC = 'MAGIC',
  TANK = 'TANK',
}

export abstract class Items {
  role!: ItemRole;
  name!: string;
  attributes!: Partial<Stats>;
}

export class Gun extends Items {
  constructor() {
    super();
    this.name = 'Machine gun Sword';
    this.attributes = {
      damage: 20,
      speed: 0.4,
    };
    this.role = ItemRole.MELEE;
  }
}
export class Wand extends Items {
  constructor() {
    super();
    this.name = 'Wizard Wand';
    this.attributes = {
      mana: 250,
      magia: 40,
    };
    this.role = ItemRole.MAGIC;
  }
}
