

from enum import Enum

from abstracts.character import Character
from abstracts.environment import Environment
from environment.jungle import Jungle


class EnvironmentType(Enum):
    JUNGLE = "JUNGLE"


class EnvironmentFactory:
    def create(self, type: EnvironmentType) -> Character:
        env: Environment()

        if type == EnvironmentType.JUNGLE:
            env = Jungle()

        return env
