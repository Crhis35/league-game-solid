import { SuperHuman } from '.';

describe('class SuperHuman', () => {
  let superHuman: SuperHuman;

  beforeEach(() => {
    superHuman = new SuperHuman();
  });

  it('Should be able to create a SuperHuman', () => {
    expect(superHuman).toBeDefined();
  });

  it('Should be able to attack', () => {
    jest.spyOn(superHuman, 'attack');

    const damage = superHuman.attack();

    expect(superHuman.attack).toHaveBeenCalled();
    expect(damage).toBe(71.5);
  });

  it('Should be able to level up', () => {
    jest.spyOn(superHuman, 'levelUp');

    superHuman.levelUp();

    expect(superHuman.levelUp).toHaveBeenCalled();
    expect(superHuman.level).toBe(2);
  });
  it('Should be able to call special ability', () => {
    jest.spyOn(superHuman, 'fly');
    jest.spyOn(superHuman, 'activateSkill');

    superHuman.activateSkill();

    expect(superHuman.activateSkill).toHaveBeenCalled();
    expect(superHuman.fly).toHaveBeenCalled();
  });
});
