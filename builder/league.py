

from typing import List
from abstracts.character import Character
from abstracts.environment import Environment
from interfaces.game import IGame
from interfaces.gamebuilder import IGameBuilder
from interfaces.team import Team


def split_list(input_list, n):

    first_half = input_list[:n]
    sec_half = input_list[n:]

    return first_half, sec_half


class LeagueGameBuilder(IGameBuilder):
    teams = ["Red", "Blue"]

    def build_scene(self) -> Environment:
        characters: List[Character] = []
        for player in self.players:
            characters.append(player.character)

        self.scene.apply(characters)

    def players_length(self) -> int:
        return len(self.players)

    def build_teams(self) -> List[Team]:

        middle_index = self.players_length//2
        team1, team1 = split_list(self.players, middle_index)
        mapped_teams = {
            "Red": team1,
            "Blue": team1,
        }
        teams: List[Team] = []

        for name in self.teams:
            teams.append(
                Team(name="Team {}".format(name), score=0, members=list(
                    self.players[i] for i in mapped_teams[name]))
            )
        teams[0].enemies = teams[1]
        teams[1].enemies = teams[0]

    def build_game(self) -> IGame:

        self.game.create()
