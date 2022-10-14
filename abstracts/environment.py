

from abc import ABC, abstractmethod
from typing import List

from attr import dataclass

from abstracts.character import Character


@dataclass
class Environment(ABC):
    name: str
    advantages: float
    disadvantages: float

    @abstractmethod
    def apply(self, characters: List[Character]) -> None:
        raise NotImplementedError("apply is not implemented")
