import Character from '../../common/Character';
import { Flyer } from '../../common/Abilities';

export class SuperHuman extends Character implements Flyer {
  constructor() {
    super({
      damage: 55,
      magia: 10,
      defense: 35,
      mana: 120,
      health: 550,
      speed: 1.3,
      move: 350,
    });
  }

  public levelUp(): void {
    this.level += 1;
    this.speed += 0.15;
  }

  public activateSkill(): void {
    this.fly();
  }

  public attack(): number {
    return this.speed * this.damage;
  }

  fly(): void {
    this.speed += this.speed * 0.3;
  }
}
