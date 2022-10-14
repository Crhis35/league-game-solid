
from abc import ABC, abstractmethod
from dataclasses import dataclass
from typing import List, Optional
from interfaces.Item import Item

from interfaces.stats import Stats


class CharacterICharacter:
    name: str
    level: int


@dataclass
class Character(ABC, Stats):
    name: str
    level: int = 1
    items: Optional[List[Item]] = None

    @abstractmethod
    def attack() -> int:
        raise NotImplementedError("attack is not implemented")

    @abstractmethod
    def level_up() -> None:
        raise NotImplementedError("level_up is not implemented")

    @abstractmethod
    def activate_skill() -> None:
        raise NotImplementedError("activate_skill is not implemented")
