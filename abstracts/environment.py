

from abc import ABC, abstractmethod
from typing import List

from abstracts.character import Character


class Environment(ABC):
    name: str
    advantages: float
    disadvantages: float

    @abstractmethod
    def apply(self, characters: List[Character]) -> None:
        raise NotImplementedError("apply is not implemented")
