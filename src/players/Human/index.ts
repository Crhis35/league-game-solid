import Character from '../../common/Character';
import { Shooter } from '../../common/Abilities';

export class Human extends Character implements Shooter {
  constructor() {
    super({
      damage: 80,
      magia: 0,
      defense: 45,
      mana: 100,
      health: 750,
      speed: 1,
      move: 350,
    });
  }
  public levelUp(): void {
    this.level += 1;
    this.speed += 0.2;
  }

  public activateSkill(): void {
    this.shoot();
  }
  public attack(): number {
    return (this.damage + this.magia) * this.speed + this.level;
  }

  shoot(): void {
    this.damage += this.level * this.damage;
  }
}
