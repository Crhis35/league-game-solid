
from dataclasses import dataclass
from typing import List, Optional


from models.player import Player


@dataclass
class Team:
    name: str
    members: List[Player]
    score: float
    enemies: Optional[List['Team']]
