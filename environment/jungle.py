

from typing import List
from abstracts.character import Character
from abstracts.environment import Environment


class Jungle(Environment):
    def __init__(self):
        super().__init__("Jungle", 2, 5)

    def apply(self, characters: List[Character]) -> None:
        for character in characters:
            character.speed -= (self.disadvantages * character.speed) / 100
            character.defense += (self.advantages * character.speed) / 100
