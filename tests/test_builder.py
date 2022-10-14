

from builder.league import LeagueGameBuilder
from environment.jungle import Jungle
from factories.league import LeagueGameFactory
from tests.fake_data import create_many_players


def test_league_game_builder():
    num_players = 10
    players = create_many_players(num_players)
    initial_speed = players[0].character.speed
    factory = LeagueGameFactory()
    builder = LeagueGameBuilder(factory, players, Jungle())
    builder.build_scene()
    assert initial_speed != players[0].character.speed
    assert num_players == builder.players_length()
