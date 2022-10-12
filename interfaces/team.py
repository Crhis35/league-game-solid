
from typing import List, Optional

from pydantic import BaseModel

from models.player import Player


class Team(BaseModel):
    name: str
    members: List[Player]
    score: float
    enemies: Optional[List['Team']]
