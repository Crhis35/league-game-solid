

from abstracts.game import IGameFactory
from games.league import LeagueGame
from interfaces.game import IGameProps


class LeagueGameFactory(IGameFactory):
    def create(self, game_props: IGameProps):
        return LeagueGame(**game_props)
