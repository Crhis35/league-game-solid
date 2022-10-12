
from enum import Enum

from abstracts.character import Character
from models.alien import Alien
from models.human import Human
from models.robot import Robot
from models.superhuman import SuperHuman


class CharacterType(Enum):
    SUPERHUMAN = "SUPERHUMAN"
    ROBOT = "ROBOT",
    HUMAN = "HUMAN",
    ALIEN = "ALIEN"


class CharacterFactory:

    def create(self, type: CharacterType) -> Character:
        character: Character

        if type == CharacterType.HUMAN:
            character = Human()
        elif type == CharacterType.ROBOT:
            character = Robot()
        elif type == CharacterType.SUPERHUMAN:
            character = SuperHuman()
        elif type == CharacterType.ALIEN:
            character = Alien()

        return character
