

from abc import ABC, abstractmethod


class IGameFactory(ABC):
    @abstractmethod
    def create(self,):
        raise NotImplementedError("IGameFactory create is not implemented")
