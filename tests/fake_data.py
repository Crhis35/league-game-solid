

import random
from typing import List
from factories.character import CharacterFactory, CharacterType
from models.player import Player


def create_player(type: CharacterType) -> Player:
    factory = CharacterFactory()
    return Player('Player', factory.create(type), '0.0.0.0', 0)


def create_many_players(num: int) -> List[Player]:
    players: List[Player] = []
    for _ in range(num):
        type = random.choice(list(CharacterType))
        players.append(create_player(type))

    return players
