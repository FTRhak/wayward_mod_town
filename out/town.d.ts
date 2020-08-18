import Mod from "mod/Mod";
import { ItemType, ItemTypeGroup } from "item/IItem";
import { DoodadType } from "doodad/IDoodad";
export default class Town extends Mod {
    itemStoneSaw: ItemType;
    itemCuperSaw: ItemType;
    itemIronSaw: ItemType;
    itemGroupSaw: ItemTypeGroup;
    itemWoodTimber: ItemType;
    itemWoodBoard: ItemType;
    itemCopperRods: ItemType;
    itemCopperNail: ItemType;
    doodadWoodCommodeStore: DoodadType;
    itemWoodCommode: ItemType;
    doodadWoodRoundTable: DoodadType;
    itemWoodRoundTable: ItemType;
}
