
from interfaces.Item import Item, ItemRole
from interfaces.stats import Stats


class Sword(Item):

    def __init__(self,):
        super().__init__()
        self.name = "Samurai Sword"
        self.role = ItemRole.MELEE
        self.attributes = Stats()

class Wand(Item):

    def __init__(self,):
        super().__init__()
        self.name = "Wizard Wand"
        self.role = ItemRole.MAGIC
        self.attributes = Stats()


      