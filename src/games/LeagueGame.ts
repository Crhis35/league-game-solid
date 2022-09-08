import Character from '../common/Character';
import { GameOptions, IGameOptions } from '../common/Game';

export class LeagueGame extends GameOptions {
  constructor(options: IGameOptions) {
    super(options);
  }

  init(): void {
    const characters = this.teams.reduce(
      (characters, team) => [
        ...characters,
        ...team.members.map((member) => member.character),
      ],
      [] as Character[]
    );
    this.scene.apply(characters);
  }
}
