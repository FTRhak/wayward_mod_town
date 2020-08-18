import Mod from "mod/Mod";
import Register, { Registry } from "mod/ModRegistry";
//import { ActionType } from "entity/action/IAction";
import { RecipeComponent } from "item/Items";
import { ItemType, ItemTypeGroup, RecipeLevel } from "item/IItem";
import { SkillType } from "entity/IHuman";
import { DoodadTypeGroup } from "doodad/IDoodad";
import { DamageType } from "entity/IEntity";

export default class Town extends Mod {
  //#region Tools

  //#region Saw
  @Register.item("Stone Saw", {
    durability: 100,
    recipe: {
      components: [
        RecipeComponent(ItemType.SharpRock, 3, 3),
        RecipeComponent(ItemType.WoodenPole, 2, 2),
        RecipeComponent(ItemType.String, 2, 2),
        RecipeComponent(ItemTypeGroup.Sharpened, 1, 0),
      ],
      skill: SkillType.Stonecrafting,
      level: RecipeLevel.Simple,
      reputation: 25,
    },
    repairAndDisassemblyRequiresFire: true,
    disassemble: true,
    requiredForDisassembly: [ItemTypeGroup.Sharpened],
    worth: 150,
    attack: 3,
    damageType: DamageType.Slashing,
    groups: [
      ItemTypeGroup.Tool
    ]
  })
  public itemStoneSaw: ItemType;

  @Register.item("Copper Saw", {
    durability: 100,
    recipe: {
      components: [
        RecipeComponent(ItemType.CopperIngot, 1, 1),
        RecipeComponent(ItemType.WoodenPole, 2, 2),
        RecipeComponent(ItemType.String, 2, 2),
        RecipeComponent(ItemTypeGroup.Hammer, 1, 0),
      ],
      skill: SkillType.Blacksmithing,
      level: RecipeLevel.Expert,
      requiredDoodad: DoodadTypeGroup.Anvil,
      reputation: 25,
    },
    repairAndDisassemblyRequiresFire: true,
    disassemble: true,
    requiredForDisassembly: [ItemTypeGroup.Hammer],
    worth: 150,
    attack: 4,
    damageType: DamageType.Slashing,
    groups: [
      ItemTypeGroup.Tool
    ]
  })
  public itemCuperSaw: ItemType;

  @Register.item("Iron Saw", {
    durability: 100,
    recipe: {
      components: [
        RecipeComponent(ItemType.IronIngot, 1, 1),
        RecipeComponent(ItemType.WoodenPole, 2, 2),
        RecipeComponent(ItemType.String, 2, 2),
        RecipeComponent(ItemTypeGroup.Hammer, 1, 0),
      ],
      skill: SkillType.Blacksmithing,
      level: RecipeLevel.Advanced,
      requiredDoodad: DoodadTypeGroup.Anvil,
      reputation: 25,
    },
    repairAndDisassemblyRequiresFire: true,
    disassemble: true,
    requiredForDisassembly: [ItemTypeGroup.Hammer],
    worth: 150,
    attack: 4,
    damageType: DamageType.Slashing,
    groups: [
      ItemTypeGroup.Tool
    ]
  })
  public itemIronSaw: ItemType;

  @Register.itemGroup("Saw", {
    default: Registry<Town>().get("itemStoneSaw"),
    types: [
      Registry<Town>().get("itemStoneSaw"),
      Registry<Town>().get("itemCuperSaw"),
      Registry<Town>().get("itemIronSaw")
    ],
  })
  public itemGroupSaw: ItemTypeGroup;
  //#endregion

  //#endregion

  //#region Resources
  //#region Wood
  @Register.item("Wood Timber", {
    durability: 20,
    recipe: {
      components: [
        RecipeComponent(ItemType.Log, 1, 1),
        RecipeComponent(ItemTypeGroup.Sharpened, 1, 0),
      ],
      skill: SkillType.Woodworking,
      level: RecipeLevel.Simple,
      reputation: 25,
    },
    dismantle: {
      items: [{
        type: Registry<Town>().get("itemWoodBoard"),
        amount: 3,
        transferDecay: true
      }],
      required: Registry<Town>().get("itemGroupSaw"),
      skill: SkillType.Woodworking,
      reputation: 25
    },
    onBurn: [ItemType.PileOfAsh],
    disassemble: false,
    worth: 150,
    groups: [
      ItemTypeGroup.Fuel
    ]
  })
  public itemWoodTimber: ItemType;

  @Register.item("Wood Board", {
    durability: 20,
    onBurn: [ItemType.PileOfAsh],
    repairAndDisassemblyRequiresFire: true,
    disassemble: true,
    requiredForDisassembly: [Registry<Town>().get("itemGroupSaw")],
    worth: 150,
    tier: {
      [ItemTypeGroup.Carbon]: 2,
    },
    groups: [
      ItemTypeGroup.Fuel
    ]
  })
  public itemWoodBoard: ItemType;
  //#endregion
  
  @Register.item("Copper Rods", {
    durability: 20,
    recipe: {
      components: [
        RecipeComponent(ItemType.CopperIngot, 1, 1),
        RecipeComponent(ItemTypeGroup.Hammer, 1, 0),
      ],
      requiresFire: true,
      skill: SkillType.Blacksmithing,
      level: RecipeLevel.Intermediate,
      reputation: 25,
    },
    dismantle: {
      items: [{
        type: Registry<Town>().get("itemCopperNail"),
        amount: 3,
        transferDecay: true
      }],
      required: ItemTypeGroup.Hammer,
      skill: SkillType.Blacksmithing,
      reputation: 25
    },
    disassemble: false,
    worth: 150,
    groups: [
      ItemTypeGroup.Other
    ]
  })
  public itemCopperRods: ItemType;

  @Register.item("Copper Nail", {
    durability: 20,
    disassemble: false,
    worth: 150,
    groups: [
      ItemTypeGroup.Other
    ]
  })
  public itemCopperNail: ItemType;
  //#endregion
}