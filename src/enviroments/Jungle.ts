import Character from '../common/Character';
import { Environment } from '../common/Environment';

export class Jungle extends Environment {
  constructor() {
    super();
    this.name = 'Jungle';
    this.advantages = 2;
    this.disadvantages = 5;
  }

  apply(characters: Character[]): void {
    characters.forEach((character) => {
      character.speed -= (this.disadvantages * character.speed) / 100;
      character.defense += (this.advantages * character.speed) / 100;
    });
  }
}
