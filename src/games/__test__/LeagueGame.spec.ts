import { Team } from '../../common/Team';
import { Jungle } from '../../enviroments/Jungle';
import { LeagueGame } from '../LeagueGame';
import { faker } from '@faker-js/faker';
import { IPlayer, SuperHuman } from '../../players';

describe('class LeagueGame', () => {
  let game: LeagueGame;

  beforeEach(() => {
    const teams: Team[] = Array.from({ length: 5 }, (_, idx) => ({
      name: faker.company.name(),
      score: 0,
      members: Array.from(
        { length: 5 },
        (): IPlayer => ({
          userName: faker.word.noun(),
          character: new SuperHuman(),
          ip: faker.internet.ipv4(),
          cash: 0,
        })
      ),
    }));
    game = new LeagueGame({
      scene: new Jungle(),
      teams,
    });
  });
  it('Should be able to create a game', () => {
    expect(game).toBeDefined();
  });
  it('Should be able to init the game', () => {
    jest.spyOn(game, 'init');
    game.init();

    expect(game.init).toBeCalled();
    expect(game.init).toBeCalledTimes(1);
  });
});
