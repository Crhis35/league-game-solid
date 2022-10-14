

from dataclasses import dataclass
from abstracts.character import Character


@dataclass
class Player:
    userName: str
    character: Character
    ip: str
    cash: float = 0.0

    def buy_tokens(self, amount: float) -> None:
        self.cash += amount
