

from dataclasses import dataclass
from typing import List
from abstracts.character import Character
from abstracts.gameoptions import GameOptions
from pydantic import BaseModel

@dataclass
class LeagueGame(BaseModel, GameOptions):
    def init(self) -> None:
        players: List[Character] = []
        for character in self.teams:
            for member in character.members:
                players.append(member.character)

        self.scene.apply(players)
