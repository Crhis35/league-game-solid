import { Robot } from '.';

describe('class Robot', () => {
  let robot: Robot;

  beforeEach(() => {
    robot = new Robot();
  });

  it('Should be able to create a Robot', () => {
    expect(robot).toBeDefined();
  });

  it('Should be able to attack', () => {
    jest.spyOn(robot, 'attack');

    const damage = robot.attack();

    expect(robot.attack).toHaveBeenCalled();
    expect(damage).toBe(65.05);
  });

  it('Should be able to level up', () => {
    jest.spyOn(robot, 'levelUp');

    robot.levelUp();

    expect(robot.levelUp).toHaveBeenCalled();
    expect(robot.level).toBe(2);
  });
  it('Should be able to call special ability', () => {
    jest.spyOn(robot, 'hack');
    jest.spyOn(robot, 'activateSkill');

    robot.activateSkill();

    expect(robot.activateSkill).toHaveBeenCalled();
    expect(robot.hack).toHaveBeenCalled();
  });
});
