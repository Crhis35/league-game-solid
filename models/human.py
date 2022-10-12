
from abstracts.character import Character
from interfaces.abilities import Shooter


class Human(Character, Shooter):
    def __init__(self, ) -> None:
        super().__init__()
        self.damage = 80
        self.magia = 0
        self.defense = 45
        self.mana = 100
        self.health = 750
        self.speed = 1
        self.move = 350

    def shoot(self) -> None:
        self.damage += self.level * self.damage

    def attack(self,) -> float:
        return (self.damage + self.magia) * self.speed + self.level

    def level_up(self,) -> None:
        self.level += 1
        self.speed += 0.2

    def activate_skill(self,) -> None:
        self.shoot()
