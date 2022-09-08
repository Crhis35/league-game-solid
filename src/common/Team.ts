import { IPlayer } from '../players/player';

export interface Team {
  name: string;
  members: IPlayer[];
  score: number;
  enemies?: Team[];
}
