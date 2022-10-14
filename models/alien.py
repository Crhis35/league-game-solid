
from abstracts.character import Character
from interfaces.abilities import Magic


class Alien(Character, Magic):
    def __init__(self, ) -> None:
        super().__init__("Alien")
        self.damage = 50
        self.magia = 25
        self.defense = 35
        self.mana = 200
        self.health = 550
        self.speed = 0.7
        self.move = 330

    def cast(self) -> None:
        self.magia += (self.mana * self.level) / 100

    def attack(self,) -> float:
        return (self.damage + self.magia) * self.speed

    def level_up(self,) -> None:
        self.level += 1
        self.mana += 100

    def activate_skill(self,) -> None:
        self.cast()
