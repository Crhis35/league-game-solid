
from abstracts.character import Character
from interfaces.abilities import Hacker


class Robot(Character, Hacker):
    def __init__(self, ) -> None:
        super().__init__("Robot")
        self.damage = 80
        self.magia = 0
        self.defense = 45
        self.mana = 100
        self.health = 750
        self.speed = 1
        self.move = 350

    def hack(self) -> None:
        self.defense += self.health * 0.2

    def attack(self,) -> float:
        return ((self.defense * self.health + self.damage) * 0.1) / 100

    def level_up(self,) -> None:
        self.health += self.health * 0.04
        self.level += 1

    def activate_skill(self,) -> None:
        self.hack()
