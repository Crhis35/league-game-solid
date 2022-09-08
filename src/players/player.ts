import Character from '../common/Character';

export interface IPlayer {
  userName: string;
  character: Character;
  ip: string;
  cash: number;
}

export default class Player implements IPlayer {
  userName!: string;
  character!: Character;
  ip!: string;
  cash: number = 0;
  constructor(init: IPlayer) {
    Object.assign(this, init);
  }

  buyTokens(amount: number): void {
    this.cash += amount;
  }
}
