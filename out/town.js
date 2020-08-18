var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
define(["require", "exports", "mod/Mod", "mod/ModRegistry", "item/Items", "item/IItem", "entity/IHuman", "doodad/IDoodad", "entity/IEntity", "entity/action/IAction", "game/IBiome", "game/WorldZ", "tile/ITerrain"], function (require, exports, Mod_1, ModRegistry_1, Items_1, IItem_1, IHuman_1, IDoodad_1, IEntity_1, IAction_1, IBiome_1, WorldZ_1, ITerrain_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class Town extends Mod_1.default {
    }
    __decorate([
        ModRegistry_1.default.item("Stone Saw", {
            durability: 100,
            recipe: {
                components: [
                    Items_1.RecipeComponent(IItem_1.ItemType.SharpRock, 3, 3),
                    Items_1.RecipeComponent(IItem_1.ItemType.WoodenPole, 2, 2),
                    Items_1.RecipeComponent(IItem_1.ItemType.String, 2, 2),
                    Items_1.RecipeComponent(IItem_1.ItemTypeGroup.Sharpened, 1, 0),
                ],
                skill: IHuman_1.SkillType.Stonecrafting,
                level: IItem_1.RecipeLevel.Simple,
                reputation: 25,
            },
            repairAndDisassemblyRequiresFire: true,
            disassemble: true,
            requiredForDisassembly: [IItem_1.ItemTypeGroup.Sharpened],
            worth: 150,
            attack: 3,
            damageType: IEntity_1.DamageType.Slashing,
            groups: [
                IItem_1.ItemTypeGroup.Tool
            ]
        })
    ], Town.prototype, "itemStoneSaw", void 0);
    __decorate([
        ModRegistry_1.default.item("Copper Saw", {
            durability: 100,
            recipe: {
                components: [
                    Items_1.RecipeComponent(IItem_1.ItemType.CopperIngot, 1, 1),
                    Items_1.RecipeComponent(IItem_1.ItemType.WoodenPole, 2, 2),
                    Items_1.RecipeComponent(IItem_1.ItemType.String, 2, 2),
                    Items_1.RecipeComponent(IItem_1.ItemTypeGroup.Hammer, 1, 0),
                ],
                skill: IHuman_1.SkillType.Blacksmithing,
                level: IItem_1.RecipeLevel.Expert,
                requiredDoodad: IDoodad_1.DoodadTypeGroup.Anvil,
                reputation: 25,
            },
            repairAndDisassemblyRequiresFire: true,
            disassemble: true,
            requiredForDisassembly: [IItem_1.ItemTypeGroup.Hammer],
            worth: 150,
            attack: 4,
            damageType: IEntity_1.DamageType.Slashing,
            groups: [
                IItem_1.ItemTypeGroup.Tool
            ]
        })
    ], Town.prototype, "itemCuperSaw", void 0);
    __decorate([
        ModRegistry_1.default.item("Iron Saw", {
            durability: 100,
            recipe: {
                components: [
                    Items_1.RecipeComponent(IItem_1.ItemType.IronIngot, 1, 1),
                    Items_1.RecipeComponent(IItem_1.ItemType.WoodenPole, 2, 2),
                    Items_1.RecipeComponent(IItem_1.ItemType.String, 2, 2),
                    Items_1.RecipeComponent(IItem_1.ItemTypeGroup.Hammer, 1, 0),
                ],
                skill: IHuman_1.SkillType.Blacksmithing,
                level: IItem_1.RecipeLevel.Advanced,
                requiredDoodad: IDoodad_1.DoodadTypeGroup.Anvil,
                reputation: 25,
            },
            repairAndDisassemblyRequiresFire: true,
            disassemble: true,
            requiredForDisassembly: [IItem_1.ItemTypeGroup.Hammer],
            worth: 150,
            attack: 4,
            damageType: IEntity_1.DamageType.Slashing,
            groups: [
                IItem_1.ItemTypeGroup.Tool
            ]
        })
    ], Town.prototype, "itemIronSaw", void 0);
    __decorate([
        ModRegistry_1.default.itemGroup("Saw", {
            default: ModRegistry_1.Registry().get("itemStoneSaw"),
            types: [
                ModRegistry_1.Registry().get("itemStoneSaw"),
                ModRegistry_1.Registry().get("itemCuperSaw"),
                ModRegistry_1.Registry().get("itemIronSaw")
            ],
        })
    ], Town.prototype, "itemGroupSaw", void 0);
    __decorate([
        ModRegistry_1.default.item("Wood Timber", {
            durability: 20,
            recipe: {
                components: [
                    Items_1.RecipeComponent(IItem_1.ItemType.Log, 1, 1),
                    Items_1.RecipeComponent(IItem_1.ItemTypeGroup.Sharpened, 1, 0),
                ],
                skill: IHuman_1.SkillType.Woodworking,
                level: IItem_1.RecipeLevel.Simple,
                reputation: 25,
            },
            dismantle: {
                items: [{
                        type: ModRegistry_1.Registry().get("itemWoodBoard"),
                        amount: 3,
                        transferDecay: true
                    }],
                required: ModRegistry_1.Registry().get("itemGroupSaw"),
                skill: IHuman_1.SkillType.Woodworking,
                reputation: 25
            },
            onBurn: [IItem_1.ItemType.PileOfAsh],
            disassemble: false,
            worth: 150,
            groups: [
                IItem_1.ItemTypeGroup.Fuel
            ]
        })
    ], Town.prototype, "itemWoodTimber", void 0);
    __decorate([
        ModRegistry_1.default.item("Wood Board", {
            durability: 20,
            onBurn: [IItem_1.ItemType.PileOfAsh],
            repairAndDisassemblyRequiresFire: true,
            disassemble: true,
            requiredForDisassembly: [ModRegistry_1.Registry().get("itemGroupSaw")],
            worth: 150,
            tier: {
                [IItem_1.ItemTypeGroup.Carbon]: 2,
            },
            groups: [
                IItem_1.ItemTypeGroup.Fuel
            ]
        })
    ], Town.prototype, "itemWoodBoard", void 0);
    __decorate([
        ModRegistry_1.default.item("Copper Rods", {
            durability: 20,
            recipe: {
                components: [
                    Items_1.RecipeComponent(IItem_1.ItemType.CopperIngot, 1, 1),
                    Items_1.RecipeComponent(IItem_1.ItemTypeGroup.Hammer, 1, 0),
                ],
                requiresFire: true,
                skill: IHuman_1.SkillType.Blacksmithing,
                level: IItem_1.RecipeLevel.Intermediate,
                reputation: 25,
            },
            dismantle: {
                items: [{
                        type: ModRegistry_1.Registry().get("itemCopperNail"),
                        amount: 3,
                        transferDecay: true
                    }],
                required: IItem_1.ItemTypeGroup.Hammer,
                skill: IHuman_1.SkillType.Blacksmithing,
                reputation: 25
            },
            repairAndDisassemblyRequiresFire: true,
            disassemble: false,
            worth: 35,
            groups: [
                IItem_1.ItemTypeGroup.Other
            ]
        })
    ], Town.prototype, "itemCopperRods", void 0);
    __decorate([
        ModRegistry_1.default.item("Copper Nail", {
            durability: 20,
            disassemble: false,
            worth: 15,
            groups: [
                IItem_1.ItemTypeGroup.Other
            ]
        })
    ], Town.prototype, "itemCopperNail", void 0);
    __decorate([
        ModRegistry_1.default.doodad("Wood Commode Store", {
            pickUp: [ModRegistry_1.Registry().get("itemWoodCommode")],
            weightCapacity: 30,
            blockMove: true,
            canBreak: true,
            repairItem: ModRegistry_1.Registry().get("itemWoodCommode"),
            isFlammable: true,
            particles: {
                r: 132,
                g: 96,
                b: 44
            },
            reduceDurabilityOnGather: true,
            burnsLike: [ModRegistry_1.Registry().get("itemWoodCommode")],
            preservationChance: .2,
            isTall: true,
            spawnOnWorldGen: {
                [IBiome_1.BiomeType.Coastal]: {
                    [WorldZ_1.WorldZ.Cave]: {
                        [ITerrain_1.TerrainType.WoodenFlooring]: 5,
                        [ITerrain_1.TerrainType.CobblestoneFlooring]: 5
                    },
                    [WorldZ_1.WorldZ.Overworld]: {
                        [ITerrain_1.TerrainType.WoodenFlooring]: 1,
                        [ITerrain_1.TerrainType.CobblestoneFlooring]: 1
                    }
                },
                [IBiome_1.BiomeType.Arid]: {
                    [WorldZ_1.WorldZ.Overworld]: {
                        [ITerrain_1.TerrainType.SandstoneFlooring]: 1,
                        [ITerrain_1.TerrainType.ClayFlooring]: 1
                    }
                }
            }
        })
    ], Town.prototype, "doodadWoodCommodeStore", void 0);
    __decorate([
        ModRegistry_1.default.item("Wood Commode", {
            durability: 10,
            use: [IAction_1.ActionType.Build],
            recipe: {
                components: [
                    Items_1.RecipeComponent(ModRegistry_1.Registry().get("itemWoodBoard"), 5, 5),
                    Items_1.RecipeComponent(ModRegistry_1.Registry().get("itemCopperNail"), 6, 6),
                    Items_1.RecipeComponent(IItem_1.ItemTypeGroup.Hammer, 1, 0),
                    Items_1.RecipeComponent(ModRegistry_1.Registry().get("itemGroupSaw"), 1, 0),
                ],
                skill: IHuman_1.SkillType.Woodworking,
                level: IItem_1.RecipeLevel.Advanced,
                reputation: 25,
            },
            disassemble: true,
            flammable: true,
            worth: 75,
            doodadContainer: ModRegistry_1.Registry().get("doodadWoodCommodeStore"),
            onUse: {
                [IAction_1.ActionType.Build]: ModRegistry_1.Registry().get("doodadWoodCommodeStore")
            },
            burnsLike: [IItem_1.ItemType.Log, IItem_1.ItemType.Log, IItem_1.ItemType.Log, IItem_1.ItemType.WoodenDowels, IItem_1.ItemType.WoodenDowels]
        })
    ], Town.prototype, "itemWoodCommode", void 0);
    exports.default = Town;
});
