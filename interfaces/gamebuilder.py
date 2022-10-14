from abc import ABC,  abstractmethod
from dataclasses import dataclass
from typing import List
from abstracts.environment import Environment
from abstracts.game import IGameFactory
from interfaces.game import IGame

from interfaces.team import Team
from models.player import Player


@dataclass
class IGameBuilder(ABC):
    game: IGameFactory
    players: List[Player]
    scene: Environment

    @abstractmethod
    def build_scene() -> Environment:
        raise NotImplementedError("build_scene is not implemented")

    @abstractmethod
    def build_game() -> IGame:
        raise NotImplementedError("build_scene is not implemented")

    @abstractmethod
    def build_teams() -> List[Team]:
        raise NotImplementedError("build_teams is not implemented")
