import { Alien } from '.';

describe('class Alien', () => {
  let alien: Alien;

  beforeEach(() => {
    alien = new Alien();
  });

  it('Should be able to create a Alien', () => {
    expect(alien).toBeDefined();
  });

  it('Should be able to attack', () => {
    jest.spyOn(alien, 'attack');

    const damage = alien.attack();

    expect(alien.attack).toHaveBeenCalled();
    expect(damage).toBe(52.5);
  });

  it('Should be able to level up', () => {
    jest.spyOn(alien, 'levelUp');

    alien.levelUp();

    expect(alien.levelUp).toHaveBeenCalled();
    expect(alien.level).toBe(2);
  });
  it('Should be able to call special ability', () => {
    jest.spyOn(alien, 'cast');
    jest.spyOn(alien, 'activateSkill');

    alien.activateSkill();

    expect(alien.activateSkill).toHaveBeenCalled();
    expect(alien.cast).toHaveBeenCalled();
  });
});
