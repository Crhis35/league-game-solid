

import pytest
from abstracts.environment import Environment
from abstracts.game import IGameFactory


def test_document_clone():
    Environment.__abstractmethods__ = frozenset()
    env = Environment("Jungle", 2, 5)

    with pytest.raises(NotImplementedError, match='apply is not implemented'):
        env.apply([])


def test_document_clone():
    IGameFactory.__abstractmethods__ = frozenset()
    factory = IGameFactory()

    with pytest.raises(NotImplementedError, match='IGameFactory create is not implemented'):
        factory.create()
