

from dataclasses import dataclass

from interfaces.game import IGame


@dataclass
class LeagueGame(IGame):

    def start(self) -> None:
        print("Starting LeagueGame")
