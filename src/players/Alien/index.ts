import Character from '../../common/Character';
import { Magic } from '../../common/Abilities';

export class Alien extends Character implements Magic {
  constructor() {
    super({
      damage: 50,
      magia: 25,
      defense: 35,
      mana: 200,
      health: 550,
      speed: 0.7,
      move: 330,
    });
  }
  cast(): void {
    this.magia += (this.mana * this.level) / 100;
  }

  public attack(): number {
    return (this.damage + this.magia) * this.speed;
  }

  public levelUp(): void {
    this.level += 1;
    this.mana += 100;
  }

  public activateSkill(): void {
    this.cast();
  }
}
