

from abstracts.character import Character


class Player:
    userName: str
    character: Character
    ip: str
    cash: float = 0.0

    def buy_tokens(self,amount: float) -> None:
        self.cash += amount