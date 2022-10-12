

from abc import ABC, abstractmethod
from dataclasses import dataclass
from typing import List
from abstracts.environment import Environment

from interfaces.team import Team


@dataclass
class GameOptions(ABC):
    teams: List[Team]
    scene: Environment

    @abstractmethod
    def init(self,) -> None:
        raise NotImplementedError("apply is not implemented")
