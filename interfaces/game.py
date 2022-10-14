

from abc import ABC, ABCMeta, abstractmethod
from dataclasses import dataclass
from typing import List
from abstracts.environment import Environment

from models.player import Player


@dataclass
class IGameProps(metaclass=ABCMeta):
    players: List[Player]
    scene: Environment


@dataclass
class IGame(ABC):
    players: List[Player]
    scene: Environment

    @abstractmethod
    def start(self):
        raise NotImplementedError("IGame start is not implemented")
