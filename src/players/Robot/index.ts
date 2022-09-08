import Character from '../../common/Character';
import { Hacker } from '../../common/Abilities';

export class Robot extends Character implements Hacker {
  constructor() {
    super({
      damage: 50,
      magia: 0,
      defense: 65,
      mana: 160,
      health: 1000,
      speed: 0.57,
      move: 325,
    });
  }
  public levelUp(): void {
    this.health += this.health * 0.04;
    this.level += 1;
  }
  public activateSkill(): void {
    this.hack();
  }
  public attack(): number {
    return ((this.defense * this.health + this.damage) * 0.1) / 100;
  }

  hack(): void {
    this.defense += this.health * 0.2;
  }
}
