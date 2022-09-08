import Player from '../player';
import { Robot } from '../Robot';
import { faker } from '@faker-js/faker';

const initPlayer = {
  character: new Robot(),
  ip: faker.internet.ipv4(),
  userName: faker.company.name(),
  cash: 0,
};

describe('class Player', () => {
  let player: Player;
  beforeEach(() => {
    player = new Player(initPlayer);
  });

  it('Should create a new Player', () => {
    expect(player.ip).toBe(initPlayer.ip);
    expect(player.character).toBe(initPlayer.character);
    expect(player.userName).toBe(initPlayer.userName);
  });
  it('Should be able to buy tokens', () => {
    jest.spyOn(player, 'buyTokens');
    player.buyTokens(500);

    expect(player.buyTokens).toBeCalled();
    expect(player.cash).toBe(500);
  });
});
