
from abstracts.character import Character
from interfaces.abilities import Fly


class SuperHuman(Character, Fly):
    def __init__(self, ) -> None:
        super().__init__()
        self.damage = 55
        self.magia = 10
        self.defense = 35
        self.mana = 120
        self.health = 550
        self.speed = 1.3
        self.move = 350

    def fly(self) -> None:
        self.speed += self.speed * 0.3

    def attack(self,) -> float:
        return self.speed * self.damage

    def level_up(self,) -> None:
        self.level += 1
        self.speed += 0.5

    def activate_skill(self,) -> None:
        self.shoot()
