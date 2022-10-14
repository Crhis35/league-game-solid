

from abstracts.character import Character

Character.__abstractmethods__ = frozenset()
cha = Character()

cha.attack()
