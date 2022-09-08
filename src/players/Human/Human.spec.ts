import { Human } from '.';

describe('class Human', () => {
  let human: Human;

  beforeEach(() => {
    human = new Human();
  });

  it('Should be able to create a Human', () => {
    expect(human).toBeDefined();
  });

  it('Should be able to attack', () => {
    jest.spyOn(human, 'attack');

    const damage = human.attack();

    expect(human.attack).toHaveBeenCalled();
    expect(damage).toBe(81);
  });

  it('Should be able to level up', () => {
    jest.spyOn(human, 'levelUp');

    human.levelUp();

    expect(human.levelUp).toHaveBeenCalled();
    expect(human.level).toBe(2);
  });
  it('Should be able to call special ability', () => {
    jest.spyOn(human, 'shoot');
    jest.spyOn(human, 'activateSkill');

    human.activateSkill();

    expect(human.activateSkill).toHaveBeenCalled();
    expect(human.shoot).toHaveBeenCalled();
  });
});
