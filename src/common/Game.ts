import { Environment } from './Environment';
import { Team } from './Team';

export interface IGameOptions {
  teams: Team[];
  scene: Environment;
}

export abstract class GameOptions implements IGameOptions {
  teams!: Team[];
  scene!: Environment;
  constructor(props: IGameOptions) {
    this.teams = props.teams;
    this.scene = props.scene;
  }

  abstract init(): void;
}
