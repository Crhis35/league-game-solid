
from abc import abstractmethod


class Fly:
    @abstractmethod
    def fly(self):
        raise NotImplementedError("fly is not implemented")
        
class Shooter:
    @abstractmethod
    def shoot(self):
        raise NotImplementedError("shoot is not implemented")

class Hacker:
    @abstractmethod
    def hack(self):
        raise NotImplementedError("hack is not implemented")

class Magic:
    @abstractmethod
    def cast(self):
        raise NotImplementedError("cast is not implemented")

