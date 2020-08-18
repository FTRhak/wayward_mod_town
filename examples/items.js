define("item/Items", ["require", "exports", "doodad/IDoodad", "entity/action/IAction", "entity/creature/ICreature", "entity/IEntity", "entity/IHuman", "game/IBiome", "game/WorldZ", "item/IItem", "item/recipe/Recipe", "item/recipe/RecipeOutput", "item/recipe/RecipeRegistry", "item/recipe/RecipeRequirement", "tile/ITerrain", "utilities/Descriptions"], (function(e, t, a, i, n, o, r, s, l, d, u, p, c, m, y, h) {
  Object.defineProperty(t, "__esModule", {
      value: !0
  }), t.RecipeComponent = t.itemGroupDescriptions = t.itemDescriptions = void 0, t.itemDescriptions = {}, t.default = t.itemDescriptions, t.itemGroupDescriptions = {};
  for (let e = d.ItemTypeGroup.Invalid + 1; e < d.ItemTypeGroup.Last; e++) t.itemGroupDescriptions[e] = {
      types: new Array,
      default: d.ItemType.None
  };

  function g(e, ...a) {
      for (const i of a) t.itemGroupDescriptions[i].types.push(e)
  }

  function f(e) {
      c.default.register(e(new u.default))
  }

  function T(e, t, a, i = 0, n = !1) {
      return {
          type: e,
          requiredAmount: t,
          consumedAmount: a,
          disassembleAmount: i,
          ignoreWeight: n
      }
  }
  t.itemGroupDescriptions[d.ItemTypeGroup.Sharpened].default = d.ItemType.SharpRock, 
  t.itemGroupDescriptions[d.ItemTypeGroup.Carbon].default = d.ItemType.Charcoal, 
  t.itemGroupDescriptions[d.ItemTypeGroup.Arrow].default = d.ItemType.WoodenArrow, 
  t.itemGroupDescriptions[d.ItemTypeGroup.CookingEquipment].default = d.ItemType.WoodenTongs, 
  t.itemGroupDescriptions[d.ItemTypeGroup.Fuel].default = d.ItemType.Log, 
  t.itemGroupDescriptions[d.ItemTypeGroup.Medicinal].default = d.ItemType.MilkThistleFlowers, 
  t.itemGroupDescriptions[d.ItemTypeGroup.Meat].default = d.ItemType.CookedMeat, 
  t.itemGroupDescriptions[d.ItemTypeGroup.Bait].default = d.ItemType.Earthworm, 
  t.itemGroupDescriptions[d.ItemTypeGroup.Liquid].default = d.ItemType.WaterskinOfPurifiedFreshWater, 
  t.itemGroupDescriptions[d.ItemTypeGroup.Treasure].default = d.ItemType.GoldCoins, 
  t.itemGroupDescriptions[d.ItemTypeGroup.Rock].default = d.ItemType.LargeRock, 
  t.itemGroupDescriptions[d.ItemTypeGroup.Compost].default = d.ItemType.Leaves, t.itemGroupDescriptions[d.ItemTypeGroup.Fabric].default = d.ItemType.WovenFabric, t.itemGroupDescriptions[d.ItemTypeGroup.Needle].default = d.ItemType.BoneNeedle, t.itemGroupDescriptions[d.ItemTypeGroup.Cordage].default = d.ItemType.StrippedBark, t.itemGroupDescriptions[d.ItemTypeGroup.SharpenedRock].default = d.ItemType.SharpRock, t.itemGroupDescriptions[d.ItemTypeGroup.Pole].default = d.ItemType.WoodenPole, t.itemGroupDescriptions[d.ItemTypeGroup.FireSource].default = d.ItemType.LitPoleTorch, t.itemGroupDescriptions[d.ItemTypeGroup.Repairing].default = d.ItemType.Grindstone, t.itemGroupDescriptions[d.ItemTypeGroup.Tongs].default = d.ItemType.WoodenTongs, t.itemGroupDescriptions[d.ItemTypeGroup.Hammer].default = d.ItemType.StoneHammer, t.itemGroupDescriptions[d.ItemTypeGroup.Preservative].default = d.ItemType.SlimeGelatin, t.itemGroupDescriptions[d.ItemTypeGroup.Reinforcement].default = d.ItemType.AnimalGlue, t.itemGroupDescriptions[d.ItemTypeGroup.GlassBottleOfPotableWater].default = d.ItemType.GlassBottleOfPurifiedFreshWater, t.itemGroupDescriptions[d.ItemTypeGroup.Bullet].default = d.ItemType.StoneBullet, t.itemGroupDescriptions[d.ItemTypeGroup.Transmogrification].default = d.ItemType.MagicalEssence, t.itemGroupDescriptions[d.ItemTypeGroup.WaterskinOfPotableWater].default = d.ItemType.WaterskinOfPurifiedFreshWater, t.itemGroupDescriptions[d.ItemTypeGroup.Pulp].default = d.ItemType.ShreddedPaper, t.itemGroupDescriptions[d.ItemTypeGroup.ClayJugOfPotableWater].default = d.ItemType.ClayJugOfPurifiedFreshWater, t.itemGroupDescriptions[d.ItemTypeGroup.Powder].default = d.ItemType.PileOfAsh, t.itemGroupDescriptions[d.ItemTypeGroup.Equipment].default = d.ItemType.TatteredPants, t.itemGroupDescriptions[d.ItemTypeGroup.Firemaking].default = d.ItemType.HandDrill, t.itemGroupDescriptions[d.ItemTypeGroup.Bedding].default = d.ItemType.LeafBedroll, t.itemGroupDescriptions[d.ItemTypeGroup.Tool].default = d.ItemType.StoneAxe, t.itemGroupDescriptions[d.ItemTypeGroup.Weapon].default = d.ItemType.WoodenSpear, t.itemGroupDescriptions[d.ItemTypeGroup.Health].default = d.ItemType.Tourniquet, t.itemGroupDescriptions[d.ItemTypeGroup.Travel].default = d.ItemType.Raft, t.itemGroupDescriptions[d.ItemTypeGroup.Housing].default = d.ItemType.WoodenWall, t.itemGroupDescriptions[d.ItemTypeGroup.Heating].default = d.ItemType.StoneCampfire, t.itemGroupDescriptions[d.ItemTypeGroup.Storage].default = d.ItemType.SmallBag, t.itemGroupDescriptions[d.ItemTypeGroup.Trap].default = d.ItemType.Snare, t.itemGroupDescriptions[d.ItemTypeGroup.RawMeat].default = d.ItemType.RawMeat, t.itemGroupDescriptions[d.ItemTypeGroup.CookedMeat].default = d.ItemType.CookedMeat, t.itemGroupDescriptions[d.ItemTypeGroup.ContainerOfSeawater].default = d.ItemType.WaterskinOfSeawater, t.itemGroupDescriptions[d.ItemTypeGroup.ContainerOfDesalinatedWater].default = d.ItemType.WaterskinOfDesalinatedWater, t.itemGroupDescriptions[d.ItemTypeGroup.ContainerOfMedicinalWater].default = d.ItemType.WaterskinOfMedicinalWater, t.itemGroupDescriptions[d.ItemTypeGroup.ContainerOfPurifiedFreshWater].default = d.ItemType.WaterskinOfPurifiedFreshWater, t.itemGroupDescriptions[d.ItemTypeGroup.ContainerOfUnpurifiedFreshWater].default = d.ItemType.WaterskinOfPurifiedFreshWater, t.itemGroupDescriptions[d.ItemTypeGroup.Campfire].default = d.ItemType.StoneCampfire, t.itemGroupDescriptions[d.ItemTypeGroup.Furnace].default = d.ItemType.StoneFurnace, t.itemGroupDescriptions[d.ItemTypeGroup.Kiln].default = d.ItemType.StoneKiln, t.itemGroupDescriptions[d.ItemTypeGroup.WaterStill].default = d.ItemType.StoneKiln, t.itemGroupDescriptions[d.ItemTypeGroup.Anvil].default = d.ItemType.StoneAnvil, t.itemGroupDescriptions[d.ItemTypeGroup.Seed].default = d.ItemType.BeggartickSeeds, t.itemGroupDescriptions[d.ItemTypeGroup.Fruit].default = d.ItemType.Raspberries, t.itemGroupDescriptions[d.ItemTypeGroup.ContainerOfMilk].default = d.ItemType.WaterskinOfGoatMilk, t.itemGroupDescriptions[d.ItemTypeGroup.Vegetable].default = d.ItemType.Chives, t.itemGroupDescriptions[d.ItemTypeGroup.Tinder].default = d.ItemType.WoodenShavings, t.itemGroupDescriptions[d.ItemTypeGroup.Bone].default = d.ItemType.Bone, t.itemGroupDescriptions[d.ItemTypeGroup.Kindling].default = d.ItemType.Twigs, t.itemGroupDescriptions[d.ItemTypeGroup.MortarAndPestle].default = d.ItemType.WoodenMortarAndPestle, t.itemGroupDescriptions[d.ItemTypeGroup.Book].default = d.ItemType.Journal, t.itemGroupDescriptions[d.ItemTypeGroup.CoconutContainerOfPotableWater].default = d.ItemType.CoconutContainerOfPurifiedFreshWater, t.itemGroupDescriptions[d.ItemTypeGroup.SandCastFlask].default = d.ItemType.WoodenSandCastFlask, t.itemGroupDescriptions[d.ItemTypeGroup.Glue].default = d.ItemType.AnimalGlue, t.itemGroupDescriptions[d.ItemTypeGroup.FireStarter].default = d.ItemType.HandDrill, t.itemGroupDescriptions[d.ItemTypeGroup.Sand].default = d.ItemType.PileOfBeachSand, t.itemGroupDescriptions[d.ItemTypeGroup.Cookware].default = d.ItemType.CopperBakingTray, t.itemGroupDescriptions[d.ItemTypeGroup.LitTorch].default = d.ItemType.LitBarkTorch, t.itemGroupDescriptions[d.ItemTypeGroup.LitCandle].default = d.ItemType.LitTallowCandle, t.itemGroupDescriptions[d.ItemTypeGroup.LightDevice].default = d.ItemType.TallowCandle, t.itemGroupDescriptions[d.ItemTypeGroup.Enchantment].default = d.ItemType.MagicalAspect, t.itemGroupDescriptions[d.ItemTypeGroup.CookedFood].default = d.ItemType.CookedMeat, t.itemGroupDescriptions[d.ItemTypeGroup.LiquidContainer].default = d.ItemType.Waterskin, t.itemGroupDescriptions[d.ItemTypeGroup.Other].default = d.ItemType.None, t.itemGroupDescriptions[d.ItemTypeGroup.FrozenWater].default = d.ItemType.PileOfSnow, t.itemGroupDescriptions[d.ItemTypeGroup.RawFish].default = d.ItemType.RawCod, t.RecipeComponent = T, t.itemDescriptions[d.ItemType.Copal] = {
      weight: .5,
      onBurn: [d.ItemType.MeltedCopal],
      worth: 100,
      spawnOnWorldGen: {
          [s.BiomeType.Coastal]: {
              [l.WorldZ.Cave]: {
                  [y.TerrainType.RockGround]: 1,
                  [y.TerrainType.Dirt]: 1,
                  [y.TerrainType.Gravel]: 1
              },
              [l.WorldZ.Overworld]: {
                  [y.TerrainType.Dirt]: 1,
                  [y.TerrainType.Grass]: 1,
                  [y.TerrainType.Gravel]: 1
              }
          }
      },
      spawnOnMerchant: [s.BiomeType.Coastal]
  }, t.itemDescriptions[d.ItemType.AnimalSkull] = {
      weight: 1.5,
      onBurn: [d.ItemType.PileOfAsh, d.ItemType.PileOfAsh],
      dismantle: {
          items: [{
              type: d.ItemType.BoneFragments,
              amount: 2
          }],
          required: d.ItemTypeGroup.Hammer
      },
      worth: 15,
      spawnOnWorldGen: {
          [s.BiomeType.Coastal]: {
              [l.WorldZ.Cave]: {
                  [y.TerrainType.RockGround]: 1,
                  [y.TerrainType.Dirt]: 1,
                  [y.TerrainType.Gravel]: 1
              },
              [l.WorldZ.Overworld]: {
                  [y.TerrainType.Dirt]: 1,
                  [y.TerrainType.Grass]: 1,
                  [y.TerrainType.Gravel]: 1
              }
          },
          [s.BiomeType.Arid]: {
              [l.WorldZ.Overworld]: {
                  [y.TerrainType.DesertSand]: 1
              }
          },
          [s.BiomeType.IceCap]: {
              [l.WorldZ.Cave]: {
                  [y.TerrainType.RockGround]: 1,
                  [y.TerrainType.Dirt]: 1
              },
              [l.WorldZ.Overworld]: {
                  [y.TerrainType.Dirt]: 1,
                  [y.TerrainType.Snow]: 1
              }
          }
      }
  }, t.itemDescriptions[d.ItemType.StoneArrow] = {
      recipe: {
          components: [T(d.ItemType.Feather, 1, 1, 1), T(d.ItemType.StoneArrowhead, 1, 1, 1), T(d.ItemType.ArrowShaft, 1, 1, 1), T(d.ItemTypeGroup.Cordage, 1, 1, 1)],
          skill: r.SkillType.Fletching,
          level: d.RecipeLevel.Intermediate,
          reputation: -50
      },
      recipes: [e => e.addRequirement(m.RecipeRequirementType.Item, d.ItemType.Feather).addRequirement(m.RecipeRequirementType.Item, d.ItemType.StoneArrowhead).addRequirement(m.RecipeRequirementType.Item, d.ItemType.ArrowShaft).addRequirement(m.RecipeRequirementType.Item, d.ItemTypeGroup.Cordage).setSkill(r.SkillType.Fletching).setLevel(d.RecipeLevel.Intermediate).setReputation(-50)],
      disassemble: !0,
      attack: 2,
      damageType: o.DamageType.Piercing,
      durability: 15,
      flammable: !0,
      worth: 25,
      spawnOnMerchant: [s.BiomeType.Coastal, s.BiomeType.IceCap]
  }, g(d.ItemType.StoneArrow, d.ItemTypeGroup.Arrow), t.itemDescriptions[d.ItemType.StoneArrowhead] = {
      reducedWeight: 1.5,
      minimumWeight: .5,
      use: [i.ActionType.Carve],
      recipe: {
          components: [T(d.ItemTypeGroup.SharpenedRock, 2, 1)],
          skill: r.SkillType.Stonecrafting,
          level: d.RecipeLevel.Intermediate,
          reputation: -25
      },
      recipes: [e => e.addRequirement(m.RecipeRequirementType.Item, d.ItemTypeGroup.SharpenedRock).addRequirement(m.RecipeRequirementType.Tool, d.ItemTypeGroup.SharpenedRock).setSkill(r.SkillType.Stonecrafting).setLevel(d.RecipeLevel.Intermediate).setReputation(-25)],
      damageType: o.DamageType.Piercing,
      worth: 15,
      tier: {
          [d.ItemTypeGroup.Sharpened]: 1
      },
      spawnOnWorldGen: {
          [s.BiomeType.Coastal]: {
              [l.WorldZ.Overworld]: {
                  [y.TerrainType.Dirt]: 1,
                  [y.TerrainType.Grass]: 1,
                  [y.TerrainType.Gravel]: 1
              }
          }
      },
      spawnOnMerchant: [s.BiomeType.Coastal, s.BiomeType.IceCap]
  }, g(d.ItemType.StoneArrowhead, d.ItemTypeGroup.Sharpened), t.itemDescriptions[d.ItemType.PileOfAsh] = {
      weight: .2,
      use: [i.ActionType.SetDown, i.ActionType.SmotherFire],
      onUse: {
          [i.ActionType.SetDown]: y.TerrainType.Ash,
          [i.ActionType.SmotherFire]: y.TerrainType.Ash
      },
      worth: 5
  }, g(d.ItemType.PileOfAsh, d.ItemTypeGroup.Powder), t.itemDescriptions[d.ItemType.BarkLeggings] = {
      durability: 20,
      equip: r.EquipType.Legs,
      defense: new o.Defense(1, new o.Resistances(o.DamageType.Blunt, 1), new o.Vulnerabilities(o.DamageType.Fire, 2, o.DamageType.Piercing, 1)),
      recipe: {
          components: [T(d.ItemType.TreeBark, 4, 4, 4), T(d.ItemType.String, 2, 2, 2)],
          skill: r.SkillType.Woodworking,
          level: d.RecipeLevel.Intermediate,
          reputation: -75
      },
      recipes: [e => e.addRequirement(m.RecipeRequirementType.Item, d.ItemType.TreeBark, 4).addRequirement(m.RecipeRequirementType.Item, d.ItemType.String, 2).setSkill(r.SkillType.Woodworking).setLevel(d.RecipeLevel.Intermediate).setReputation(-75)],
      disassemble: !0,
      flammable: !0,
      worth: 50,
      spawnOnWorldGen: {
          [s.BiomeType.Coastal]: {
              [l.WorldZ.Cave]: {
                  [y.TerrainType.CobblestoneFlooring]: 1,
                  [y.TerrainType.WoodenFlooring]: 1
              },
              [l.WorldZ.Overworld]: {
                  [y.TerrainType.CobblestoneFlooring]: 1,
                  [y.TerrainType.WoodenFlooring]: 1
              }
          }
      }
  }, g(d.ItemType.BarkLeggings, d.ItemTypeGroup.Equipment), t.itemDescriptions[d.ItemType.BarkShield] = {
      durability: 15,
      equip: r.EquipType.Held,
      use: [i.ActionType.Melee],
      defense: new o.Defense(1, new o.Resistances(o.DamageType.Blunt, 1), new o.Vulnerabilities(o.DamageType.Fire, 2, o.DamageType.Piercing, 1)),
      recipe: {
          components: [T(d.ItemType.TreeBark, 4, 4, 4), T(d.ItemType.String, 2, 2, 2)],
          skill: r.SkillType.Woodworking,
          level: d.RecipeLevel.Intermediate,
          reputation: -75
      },
      recipes: [e => e.addRequirement(m.RecipeRequirementType.Item, d.ItemType.TreeBark, 4).addRequirement(m.RecipeRequirementType.Item, d.ItemType.String, 2).setSkill(r.SkillType.Woodworking).setLevel(d.RecipeLevel.Intermediate).setReputation(-75)],
      disassemble: !0,
      flammable: !0,
      worth: 50,
      attack: 1,
      damageType: o.DamageType.Blunt,
      spawnOnWorldGen: {
          [s.BiomeType.Coastal]: {
              [l.WorldZ.Cave]: {
                  [y.TerrainType.CobblestoneFlooring]: 1,
                  [y.TerrainType.WoodenFlooring]: 1
              },
              [l.WorldZ.Overworld]: {
                  [y.TerrainType.CobblestoneFlooring]: 1,
                  [y.TerrainType.WoodenFlooring]: 1
              }
          }
      }
  }, g(d.ItemType.BarkShield, d.ItemTypeGroup.Equipment), t.itemDescriptions[d.ItemType.BarkTunic] = {
      durability: 20,
      equip: r.EquipType.Chest,
      defense: new o.Defense(2, new o.Resistances(o.DamageType.Blunt, 1), new o.Vulnerabilities(o.DamageType.Fire, 2, o.DamageType.Piercing, 1)),
      recipe: {
          components: [T(d.ItemType.TreeBark, 6, 6, 6), T(d.ItemType.String, 2, 2, 2)],
          skill: r.SkillType.Woodworking,
          level: d.RecipeLevel.Intermediate,
          reputation: -75
      },
      disassemble: !0,
      flammable: !0,
      worth: 50,
      spawnOnWorldGen: {
          [s.BiomeType.Coastal]: {
              [l.WorldZ.Cave]: {
                  [y.TerrainType.CobblestoneFlooring]: 1,
                  [y.TerrainType.WoodenFlooring]: 1
              },
              [l.WorldZ.Overworld]: {
                  [y.TerrainType.CobblestoneFlooring]: 1,
                  [y.TerrainType.WoodenFlooring]: 1
              }
          }
      }
  }, g(d.ItemType.BarkTunic, d.ItemTypeGroup.Equipment), t.itemDescriptions[d.ItemType.Bone] = {
      weight: .5,
      durability: 15,
      equip: r.EquipType.Held,
      attack: 2,
      damageType: o.DamageType.Blunt,
      use: [i.ActionType.Gather, i.ActionType.Melee],
      onBurn: [d.ItemType.PileOfAsh],
      worth: 10,
      dismantle: {
          items: [{
              type: d.ItemType.BoneFragments,
              amount: 1
          }],
          required: d.ItemTypeGroup.Hammer
      },
      tier: {
          [d.ItemTypeGroup.Bone]: 1
      },
      spawnOnWorldGen: {
          [s.BiomeType.Coastal]: {
              [l.WorldZ.Cave]: {
                  [y.TerrainType.CobblestoneFlooring]: 1,
                  [y.TerrainType.WoodenFlooring]: 1
              },
              [l.WorldZ.Overworld]: {
                  [y.TerrainType.CobblestoneFlooring]: 1,
                  [y.TerrainType.WoodenFlooring]: 1
              }
          }
      }
  }, g(d.ItemType.Bone, d.ItemTypeGroup.Weapon, d.ItemTypeGroup.Bone), t.itemDescriptions[d.ItemType.Branch] = {
      weight: .8,
      use: [i.ActionType.StokeFire, i.ActionType.Gather, i.ActionType.Melee],
      equip: r.EquipType.Held,
      attack: 1,
      damageType: o.DamageType.Blunt,
      onBurn: [d.ItemType.PileOfAsh, d.ItemType.Charcoal, d.ItemType.PileOfAsh, d.ItemType.Charcoal],
      dismantle: {
          items: [{
              type: d.ItemType.StrippedBark,
              amount: 1
          }, {
              type: d.ItemType.WoodenPole,
              amount: 1
          }, {
              type: d.ItemType.Leaves,
              amount: 1
          }, {
              type: d.ItemType.Twigs,
              amount: 1
          }],
          required: d.ItemTypeGroup.Sharpened,
          skill: r.SkillType.Woodworking
      },
      onUse: {
          [i.ActionType.StokeFire]: 180
      },
      flammable: !0,
      worth: 10,
      tier: {
          [d.ItemTypeGroup.CookingEquipment]: 1
      },
      spawnOnWorldGen: {
          [s.BiomeType.Coastal]: {
              [l.WorldZ.Overworld]: {
                  [y.TerrainType.ShallowSeawater]: 2,
                  [y.TerrainType.Dirt]: 1,
                  [y.TerrainType.Grass]: 1,
                  [y.TerrainType.Gravel]: 1
              }
          }
      },
      spawnOnMerchant: [s.BiomeType.Coastal, s.BiomeType.Arid]
  }, g(d.ItemType.Branch, d.ItemTypeGroup.Weapon, d.ItemTypeGroup.CookingEquipment), t.itemDescriptions[d.ItemType.CactusSpines] = {
      weight: .2,
      onBurn: [d.ItemType.PileOfAsh],
      damageType: o.DamageType.Piercing,
      worth: 5,
      spawnOnMerchant: [s.BiomeType.Arid]
  }, t.itemDescriptions[d.ItemType.Charcoal] = {
      weight: .3,
      use: [i.ActionType.StokeFire],
      onBurn: [d.ItemType.PileOfAsh],
      onUse: {
          [i.ActionType.StokeFire]: 50
      },
      flammable: !0,
      worth: 5,
      tier: {
          [d.ItemTypeGroup.Carbon]: 1,
          [d.ItemTypeGroup.Medicinal]: 1
      }
  }, g(d.ItemType.Charcoal, d.ItemTypeGroup.Carbon, d.ItemTypeGroup.Fuel, d.ItemTypeGroup.Medicinal), t.itemDescriptions[d.ItemType.CobblestoneFlooring] = {
      use: [i.ActionType.SetDown],
      recipe: {
          components: [T(d.ItemType.Stones, 5, 5, 5)],
          skill: r.SkillType.Stonecrafting,
          level: d.RecipeLevel.Intermediate,
          reputation: 25
      },
      disassemble: !0,
      durability: 25,
      onUse: {
          [i.ActionType.SetDown]: y.TerrainType.CobblestoneFlooring
      },
      worth: 25,
      spawnOnMerchant: [s.BiomeType.Coastal, s.BiomeType.IceCap]
  }, g(d.ItemType.CobblestoneFlooring, d.ItemTypeGroup.Housing), t.itemDescriptions[d.ItemType.CookedMeat] = {
      use: [i.ActionType.Eat],
      decayMax: 4750,
      decaysInto: [d.ItemType.RottenMeat],
      recipe: {
          components: [T(d.ItemType.RawMeat, 1, 1), T(d.ItemTypeGroup.CookingEquipment, 1, 0)],
          skill: r.SkillType.Cooking,
          level: d.RecipeLevel.Intermediate,
          requiresFire: !0,
          reputation: 25
      },
      onBurn: [d.ItemType.PileOfAsh],
      onUse: {
          [i.ActionType.Eat]: [2, 10, 8, -2]
      },
      skillUse: r.SkillType.Cooking,
      worth: 15,
      tier: {
          [d.ItemTypeGroup.Meat]: 3
      }
  }, g(d.ItemType.CookedMeat, d.ItemTypeGroup.Meat, d.ItemTypeGroup.CookedMeat, d.ItemTypeGroup.CookedFood), t.itemDescriptions[d.ItemType.Earthworm] = {
      weight: .1,
      use: [i.ActionType.Eat],
      decayMax: 2750,
      onBurn: [d.ItemType.PileOfAsh],
      onUse: {
          [i.ActionType.Eat]: [0, 4, 1, 0]
      },
      skillUse: r.SkillType.Anatomy,
      worth: 5
  }, g(d.ItemType.Earthworm, d.ItemTypeGroup.Bait), t.itemDescriptions[d.ItemType.Feather] = {
      weight: .1,
      use: [i.ActionType.StokeFire],
      onUse: {
          [i.ActionType.StokeFire]: 30
      },
      onBurn: [d.ItemType.PileOfAsh],
      flammable: !0,
      worth: 5,
      spawnOnWorldGen: {
          [s.BiomeType.Coastal]: {
              [l.WorldZ.Overworld]: {
                  [y.TerrainType.Dirt]: 1,
                  [y.TerrainType.Grass]: 1,
                  [y.TerrainType.Gravel]: 1
              }
          }
      }
  }, g(d.ItemType.Feather, d.ItemTypeGroup.Tinder), t.itemDescriptions[d.ItemType.Fertilizer] = {
      recipe: {
          components: [T(d.ItemType.PileOfAsh, 1, 1), T(d.ItemType.BoneMeal, 1, 1), T(d.ItemType.PileOfCompost, 1, 1)],
          skill: r.SkillType.Gardening,
          level: d.RecipeLevel.Intermediate,
          reputation: 50
      },
      use: [i.ActionType.SmotherFire],
      worth: 25,
      spawnOnMerchant: [s.BiomeType.Coastal, s.BiomeType.Arid]
  }, t.itemDescriptions[d.ItemType.WaterskinOfSeawater] = {
      inheritWeight: d.ItemType.Waterskin,
      durability: 20,
      returnOnUseAndDecay: {
          type: d.ItemType.Waterskin,
          damaged: !0,
          whenCrafted: !0
      },
      keepDurabilityOnCraft: !0,
      repairable: !1,
      flammable: !0,
      use: [i.ActionType.Pour, i.ActionType.PourOnYourself, i.ActionType.DrinkItem],
      onUse: {
          [i.ActionType.DrinkItem]: [0, -15, 1, -2]
      },
      worth: 50,
      tier: {
          [d.ItemTypeGroup.Liquid]: 1
      }
  }, g(d.ItemType.WaterskinOfSeawater, d.ItemTypeGroup.Liquid, d.ItemTypeGroup.ContainerOfSeawater), t.itemDescriptions[d.ItemType.FirePlough] = {
      durability: 45,
      use: [i.ActionType.StartFire],
      recipe: {
          components: [T(d.ItemType.WoodenPole, 1, 1, 1), T(d.ItemType.Log, 1, 1, 1), T(d.ItemTypeGroup.Sharpened, 1, 0)],
          skill: r.SkillType.Camping,
          level: d.RecipeLevel.Intermediate,
          reputation: -25
      },
      disassemble: !0,
      requiredForDisassembly: [d.ItemTypeGroup.Sharpened],
      flammable: !0,
      worth: 25
  }, g(d.ItemType.FirePlough, d.ItemTypeGroup.Firemaking, d.ItemTypeGroup.FireStarter), t.itemDescriptions[d.ItemType.BeggartickSeeds] = {
      weight: .1,
      use: [i.ActionType.Plant, i.ActionType.Eat],
      skillUse: r.SkillType.Botany,
      onBurn: [d.ItemType.PileOfAsh],
      onUse: {
          [i.ActionType.Plant]: a.DoodadType.Beggarticks,
          [i.ActionType.Eat]: [1, 2, 1, -1]
      },
      flammable: !0,
      worth: 5,
      spawnOnMerchant: [s.BiomeType.Coastal]
  }, g(d.ItemType.BeggartickSeeds, d.ItemTypeGroup.Seed), t.itemDescriptions[d.ItemType.Fossil] = {
      weight: .8,
      worth: 100,
      tier: {
          [d.ItemTypeGroup.Carbon]: 1
      },
      spawnOnWorldGen: {
          [s.BiomeType.Coastal]: {
              [l.WorldZ.Cave]: {
                  [y.TerrainType.RockGround]: 1,
                  [y.TerrainType.Dirt]: 1,
                  [y.TerrainType.Gravel]: 1
              },
              [l.WorldZ.Overworld]: {
                  [y.TerrainType.Dirt]: 1,
                  [y.TerrainType.Grass]: 1,
                  [y.TerrainType.Gravel]: 1
              }
          },
          [s.BiomeType.Arid]: {
              [l.WorldZ.Cave]: {
                  [y.TerrainType.SandstoneGround]: 1,
                  [y.TerrainType.DesertSand]: 1
              },
              [l.WorldZ.Overworld]: {
                  [y.TerrainType.SandstoneGround]: 1,
                  [y.TerrainType.DesertSand]: 1
              }
          },
          [s.BiomeType.IceCap]: {
              [l.WorldZ.Cave]: {
                  [y.TerrainType.RockGround]: 1,
                  [y.TerrainType.Dirt]: 1
              },
              [l.WorldZ.Overworld]: {
                  [y.TerrainType.RockGround]: 1,
                  [y.TerrainType.Dirt]: 1
              }
          }
      }
  }, g(d.ItemType.Fossil, d.ItemTypeGroup.Carbon), t.itemDescriptions[d.ItemType.GoldCoins] = {
      weight: 2,
      worth: 1e3
  }, g(d.ItemType.GoldCoins, d.ItemTypeGroup.Treasure), t.itemDescriptions[d.ItemType.GoldenChalice] = {
      weight: 3,
      worth: 1e3
  }, g(d.ItemType.GoldenChalice, d.ItemTypeGroup.Treasure), t.itemDescriptions[d.ItemType.GoldenRing] = {
      weight: .3,
      worth: 1e3
  }, g(d.ItemType.GoldenRing, d.ItemTypeGroup.Treasure), t.itemDescriptions[d.ItemType.GoldSword] = {
      weight: 5,
      durability: 15,
      equip: r.EquipType.Held,
      attack: 9,
      damageType: o.DamageType.Piercing | o.DamageType.Slashing,
      use: [i.ActionType.Carve, i.ActionType.Gather, i.ActionType.Melee],
      repairable: !1,
      worth: 1500,
      tier: {
          [d.ItemTypeGroup.Sharpened]: 5
      }
  }, g(d.ItemType.GoldSword, d.ItemTypeGroup.Sharpened, d.ItemTypeGroup.Treasure), t.itemDescriptions[d.ItemType.GrassSeeds] = {
      weight: .1,
      use: [i.ActionType.Plant, i.ActionType.Eat],
      skillUse: r.SkillType.Botany,
      onBurn: [d.ItemType.PileOfAsh],
      onUse: {
          [i.ActionType.Plant]: a.DoodadType.Grass,
          [i.ActionType.Eat]: [1, 2, 1, -1]
      },
      flammable: !0,
      worth: 5
  }, g(d.ItemType.GrassSeeds, d.ItemTypeGroup.Seed), t.itemDescriptions[d.ItemType.IronOre] = {
      weight: .7,
      worth: 25,
      spawnOnWorldGen: {
          [s.BiomeType.Arid]: {
              [l.WorldZ.Cave]: {
                  [y.TerrainType.SandstoneGround]: 1,
                  [y.TerrainType.DesertSand]: 1
              }
          },
          [s.BiomeType.IceCap]: {
              [l.WorldZ.Cave]: {
                  [y.TerrainType.RockGround]: 1,
                  [y.TerrainType.Dirt]: 1
              }
          }
      }
  }, t.itemDescriptions[d.ItemType.WoodenDowels] = {
      weight: .1,
      use: [i.ActionType.StokeFire],
      onBurn: [d.ItemType.PileOfAsh],
      onUse: {
          [i.ActionType.StokeFire]: 25
      },
      dismantle: {
          items: [{
              type: d.ItemType.WoodenShavings,
              amount: 1
          }],
          required: d.ItemTypeGroup.Sharpened,
          skill: r.SkillType.Woodworking
      },
      flammable: !0,
      worth: 5
  }, g(d.ItemType.WoodenDowels, d.ItemTypeGroup.Kindling), t.itemDescriptions[d.ItemType.LargeRock] = {
      weight: 3.2,
      dismantle: {
          items: [{
              type: d.ItemType.Stones,
              amount: 3
          }],
          required: d.ItemTypeGroup.Hammer,
          skill: r.SkillType.Stonecrafting
      },
      worth: 5,
      tier: {
          [d.ItemTypeGroup.Rock]: 1
      },
      spawnOnWorldGen: {
          [s.BiomeType.Coastal]: {
              [l.WorldZ.Cave]: {
                  [y.TerrainType.RockGround]: 1,
                  [y.TerrainType.Dirt]: 1,
                  [y.TerrainType.Gravel]: 1
              },
              [l.WorldZ.Overworld]: {
                  [y.TerrainType.RockGround]: 1,
                  [y.TerrainType.Dirt]: 1,
                  [y.TerrainType.Gravel]: 1
              }
          },
          [s.BiomeType.IceCap]: {
              [l.WorldZ.Cave]: {
                  [y.TerrainType.RockGround]: 1,
                  [y.TerrainType.Dirt]: 1
              },
              [l.WorldZ.Overworld]: {
                  [y.TerrainType.RockGround]: 1,
                  [y.TerrainType.Dirt]: 1
              }
          }
      },
      spawnOnMerchant: [s.BiomeType.Coastal, s.BiomeType.IceCap]
  }, g(d.ItemType.LargeRock, d.ItemTypeGroup.Rock), t.itemDescriptions[d.ItemType.LeafBedroll] = {
      durability: 25,
      use: [i.ActionType.Rest, i.ActionType.Sleep, i.ActionType.PlaceDown],
      recipe: {
          components: [T(d.ItemType.Leaves, 10, 10, 10), T(d.ItemTypeGroup.Cordage, 2, 2, 2)],
          skill: r.SkillType.Camping,
          level: d.RecipeLevel.Intermediate,
          reputation: 25
      },
      disassemble: !0,
      hasSleepImage: !0,
      flammable: !0,
      worth: 50,
      onUse: {
          [i.ActionType.PlaceDown]: a.DoodadType.LeafBedroll
      },
      spawnOnMerchant: [s.BiomeType.Coastal]
  }, g(d.ItemType.LeafBedroll, d.ItemTypeGroup.Bedding), t.itemDescriptions[d.ItemType.LeatherHide] = {
      weight: 1.2,
      onBurn: [d.ItemType.PileOfAsh, d.ItemType.PileOfAsh, d.ItemType.PileOfAsh],
      worth: 15,
      dismantle: {
          items: [{
              type: d.ItemType.StrippedLeather,
              amount: 3
          }],
          required: d.ItemTypeGroup.Sharpened,
          skill: r.SkillType.Tailoring
      },
      flammable: !0,
      spawnOnWorldGen: {
          [s.BiomeType.Arid]: {
              [l.WorldZ.Overworld]: {
                  [y.TerrainType.SandstoneFlooring]: 1,
                  [y.TerrainType.ClayFlooring]: 1
              }
          }
      }
  }, t.itemDescriptions[d.ItemType.Leaves] = {
      use: [i.ActionType.StokeFire],
      weight: .1,
      onBurn: [d.ItemType.PileOfAsh],
      onUse: {
          [i.ActionType.StokeFire]: 30
      },
      flammable: !0,
      worth: 5,
      tier: {
          [d.ItemTypeGroup.Compost]: 2
      },
      spawnOnWorldGen: {
          [s.BiomeType.Coastal]: {
              [l.WorldZ.Overworld]: {
                  [y.TerrainType.Grass]: 1
              }
          }
      },
      spawnOnMerchant: [s.BiomeType.Coastal]
  }, g(d.ItemType.Leaves, d.ItemTypeGroup.Compost, d.ItemTypeGroup.Tinder), t.itemDescriptions[d.ItemType.Limestone] = {
      weight: 2.5,
      worth: 25,
      spawnOnWorldGen: {
          [s.BiomeType.Coastal]: {
              [l.WorldZ.Cave]: {
                  [y.TerrainType.RockGround]: 1,
                  [y.TerrainType.Dirt]: 1,
                  [y.TerrainType.Gravel]: 1
              }
          }
      },
      spawnOnMerchant: [s.BiomeType.Coastal]
  }, t.itemDescriptions[d.ItemType.Log] = {
      weight: 4.7,
      use: [i.ActionType.StokeFire],
      onBurn: [d.ItemType.Charcoal, d.ItemType.Charcoal, d.ItemType.Charcoal, d.ItemType.Charcoal, d.ItemType.Charcoal, d.ItemType.Charcoal],
      dismantle: {
          items: [{
              type: d.ItemType.TreeBark,
              amount: 2
          }, {
              type: d.ItemType.WoodenPole,
              amount: 4
          }],
          required: d.ItemTypeGroup.Sharpened,
          skill: r.SkillType.Woodworking
      },
      onUse: {
          [i.ActionType.StokeFire]: 360
      },
      flammable: !0,
      worth: 25,
      spawnOnWorldGen: {
          [s.BiomeType.Coastal]: {
              [l.WorldZ.Overworld]: {
                  [y.TerrainType.ShallowSeawater]: 2
              }
          }
      }
  }, g(d.ItemType.Log, d.ItemTypeGroup.Fuel), t.itemDescriptions[d.ItemType.StoneMortarAndPestle] = {
      reducedWeight: 2,
      recipe: {
          components: [T(d.ItemType.SmoothRock, 2, 2)],
          skill: r.SkillType.Stonecrafting,
          level: d.RecipeLevel.Intermediate,
          reputation: 25
      },
      durability: 20,
      worth: 10,
      tier: {
          [d.ItemTypeGroup.MortarAndPestle]: 2
      },
      spawnOnMerchant: [s.BiomeType.Coastal, s.BiomeType.IceCap]
  }, g(d.ItemType.StoneMortarAndPestle, d.ItemTypeGroup.Tool, d.ItemTypeGroup.MortarAndPestle), t.itemDescriptions[d.ItemType.ButtonMushrooms] = {
      weight: .3,
      use: [i.ActionType.Eat, i.ActionType.Plant],
      skillUse: r.SkillType.Mycology,
      decayMax: 19e3,
      onBurn: [d.ItemType.PileOfAsh],
      onUse: {
          [i.ActionType.Eat]: [3, 4, 2, 0],
          [i.ActionType.Plant]: a.DoodadType.ButtonMushrooms
      },
      worth: 5,
      spawnOnMerchant: [s.BiomeType.Coastal]
  }, t.itemDescriptions[d.ItemType.Nopal] = {
      weight: .3,
      use: [i.ActionType.Eat],
      skillUse: r.SkillType.Botany,
      decayMax: 8750,
      decaysInto: [d.ItemType.RottingVegetation],
      onBurn: [d.ItemType.PileOfAsh],
      onUse: {
          [i.ActionType.Eat]: [0, 6, 2, 1]
      },
      worth: 5,
      spawnOnMerchant: [s.BiomeType.Arid]
  }, g(d.ItemType.Nopal, d.ItemTypeGroup.Vegetable), t.itemDescriptions[d.ItemType.Peat] = {
      weight: .5,
      use: [i.ActionType.StokeFire],
      onBurn: [d.ItemType.PileOfAsh],
      onUse: {
          [i.ActionType.StokeFire]: 300
      },
      flammable: !0,
      worth: 5,
      tier: {
          [d.ItemTypeGroup.Compost]: 3
      },
      spawnOnWorldGen: {
          [s.BiomeType.Coastal]: {
              [l.WorldZ.Overworld]: {
                  [y.TerrainType.Swamp]: 1
              }
          }
      },
      spawnOnMerchant: [s.BiomeType.Coastal]
  }, g(d.ItemType.Peat, d.ItemTypeGroup.Fuel, d.ItemTypeGroup.Compost), t.itemDescriptions[d.ItemType.Sandstone] = {
      weight: 2,
      worth: 5,
      spawnOnWorldGen: {
          [s.BiomeType.Arid]: {
              [l.WorldZ.Cave]: {
                  [y.TerrainType.SandstoneGround]: 1,
                  [y.TerrainType.DesertSand]: 1
              },
              [l.WorldZ.Overworld]: {
                  [y.TerrainType.SandstoneGround]: 1,
                  [y.TerrainType.DesertSand]: 1
              }
          }
      },
      spawnOnMerchant: [s.BiomeType.Arid]
  }, t.itemDescriptions[d.ItemType.PileOfGravel] = {
      weight: 4.1,
      use: [i.ActionType.SetDown, i.ActionType.SmotherFire],
      onUse: {
          [i.ActionType.SetDown]: y.TerrainType.Gravel,
          [i.ActionType.SmotherFire]: y.TerrainType.Gravel
      },
      dismantle: {
          items: [{
              type: d.ItemType.Stones,
              amount: 1
          }, {
              type: d.ItemType.RefinedSand,
              amount: 1
          }]
      },
      worth: 5,
      spawnOnMerchant: [s.BiomeType.Coastal, s.BiomeType.Arid]
  }, t.itemDescriptions[d.ItemType.PileOfBeachSand] = {
      weight: 3,
      use: [i.ActionType.SetDown, i.ActionType.SmotherFire],
      onUse: {
          [i.ActionType.SetDown]: y.TerrainType.BeachSand,
          [i.ActionType.SmotherFire]: y.TerrainType.BeachSand
      },
      worth: 5,
      tier: {
          [d.ItemTypeGroup.Sand]: 1
      },
      spawnOnMerchant: [s.BiomeType.Coastal, s.BiomeType.Arid]
  }, g(d.ItemType.PileOfBeachSand, d.ItemTypeGroup.Sand), t.itemDescriptions[d.ItemType.WoodenArrow] = {
      recipe: {
          components: [T(d.ItemType.WoodenPole, 1, 1, 1), T(d.ItemType.Feather, 1, 1, 1), T(d.ItemTypeGroup.Sharpened, 1, 0)],
          skill: r.SkillType.Fletching,
          level: d.RecipeLevel.Intermediate,
          reputation: -25
      },
      disassemble: !0,
      requiredForDisassembly: [d.ItemTypeGroup.Sharpened],
      attack: 1,
      damageType: o.DamageType.Piercing,
      durability: 10,
      flammable: !0,
      worth: 10,
      spawnOnWorldGen: {
          [s.BiomeType.Coastal]: {
              [l.WorldZ.Cave]: {
                  [y.TerrainType.RockGround]: 1,
                  [y.TerrainType.Dirt]: 1,
                  [y.TerrainType.Gravel]: 1
              }
          }
      }
  }, g(d.ItemType.WoodenArrow, d.ItemTypeGroup.Arrow), t.itemDescriptions[d.ItemType.StoneAxe] = {
      durability: 50,
      equip: r.EquipType.Held,
      attack: 3,
      damageType: o.DamageType.Slashing,
      use: [i.ActionType.Carve, i.ActionType.Gather, i.ActionType.Harvest, i.ActionType.Melee],
      recipe: {
          components: [T(d.ItemType.String, 1, 1, 1), T(d.ItemTypeGroup.Pole, 1, 1, 1), T(d.ItemTypeGroup.SharpenedRock, 2, 2, 2)],
          skill: r.SkillType.Tinkering,
          level: d.RecipeLevel.Intermediate,
          reputation: -75
      },
      disassemble: !0,
      flammable: !0,
      worth: 25,
      tier: {
          [d.ItemTypeGroup.Sharpened]: 2
      },
      spawnOnMerchant: [s.BiomeType.Coastal, s.BiomeType.IceCap]
  }, g(d.ItemType.StoneAxe, d.ItemTypeGroup.Sharpened, d.ItemTypeGroup.Weapon, d.ItemTypeGroup.Tool), t.itemDescriptions[d.ItemType.Bandage] = {
      use: [i.ActionType.Heal, i.ActionType.HealOther],
      skillUse: r.SkillType.Anatomy,
      recipe: {
          components: [T(d.ItemTypeGroup.Fabric, 1, 1, 1)],
          skill: r.SkillType.Tailoring,
          level: d.RecipeLevel.Simple,
          reputation: 25
      },
      disassemble: !0,
      onUse: {
          [i.ActionType.Heal]: [12, 0, 0, 0],
          [i.ActionType.HealOther]: 12
      },
      flammable: !0,
      worth: 25,
      canCureStatus: [o.StatusType.Bleeding]
  }, g(d.ItemType.Bandage, d.ItemTypeGroup.Health), t.itemDescriptions[d.ItemType.WovenFabric] = {
      recipe: {
          components: [T(d.ItemTypeGroup.Cordage, 8, 8, 8), T(d.ItemTypeGroup.Needle, 1, 0)],
          skill: r.SkillType.Tailoring,
          level: d.RecipeLevel.Intermediate,
          reputation: 25
      },
      disassemble: !0,
      flammable: !0,
      worth: 20,
      tier: {
          [d.ItemTypeGroup.Fabric]: 1
      }
  }, g(d.ItemType.WovenFabric, d.ItemTypeGroup.Fabric), t.itemDescriptions[d.ItemType.CactusNeedle] = {
      recipe: {
          components: [T(d.ItemType.CactusSpines, 1, 1), T(d.ItemTypeGroup.Sharpened, 1, 0)],
          skill: r.SkillType.Tinkering,
          level: d.RecipeLevel.Simple,
          reputation: 25
      },
      onBurn: [d.ItemType.PileOfAsh],
      damageType: o.DamageType.Piercing,
      worth: 5,
      tier: {
          [d.ItemTypeGroup.Needle]: 1
      },
      spawnOnMerchant: [s.BiomeType.Arid]
  }, g(d.ItemType.CactusNeedle, d.ItemTypeGroup.Needle), t.itemDescriptions[d.ItemType.StoneShovel] = {
      durability: 50,
      equip: r.EquipType.Held,
      attack: 2,
      damageType: o.DamageType.Slashing,
      use: [i.ActionType.Dig, i.ActionType.Gather, i.ActionType.GatherTreasure, i.ActionType.Harvest, i.ActionType.Melee],
      recipe: {
          components: [T(d.ItemType.String, 2, 2, 2), T(d.ItemTypeGroup.SharpenedRock, 1, 1, 1), T(d.ItemTypeGroup.Pole, 1, 1, 1)],
          skill: r.SkillType.Tinkering,
          level: d.RecipeLevel.Intermediate,
          reputation: -25
      },
      disassemble: !0,
      flammable: !0,
      worth: 25,
      spawnOnWorldGen: {
          [s.BiomeType.Coastal]: {
              [l.WorldZ.Cave]: {
                  [y.TerrainType.CobblestoneFlooring]: 1,
                  [y.TerrainType.WoodenFlooring]: 1
              },
              [l.WorldZ.Overworld]: {
                  [y.TerrainType.CobblestoneFlooring]: 1,
                  [y.TerrainType.WoodenFlooring]: 1
              }
          }
      },
      spawnOnMerchant: [s.BiomeType.Coastal, s.BiomeType.IceCap]
  }, g(d.ItemType.StoneShovel, d.ItemTypeGroup.Tool, d.ItemTypeGroup.Weapon), t.itemDescriptions[d.ItemType.WoodenSpear] = {
      durability: 10,
      equip: r.EquipType.Held,
      attack: 3,
      damageType: o.DamageType.Piercing,
      recipe: {
          components: [T(d.ItemType.WoodenPole, 1, 1), T(d.ItemTypeGroup.Sharpened, 1, 0)],
          skill: r.SkillType.Woodworking,
          level: d.RecipeLevel.Simple,
          reputation: -50
      },
      use: [i.ActionType.Gather, i.ActionType.Melee],
      burnsLike: [d.ItemType.WoodenPole],
      flammable: !0,
      worth: 10,
      tier: {
          [d.ItemTypeGroup.CookingEquipment]: 1
      },
      spawnOnWorldGen: {
          [s.BiomeType.Coastal]: {
              [l.WorldZ.Cave]: {
                  [y.TerrainType.CobblestoneFlooring]: 1,
                  [y.TerrainType.WoodenFlooring]: 1,
                  [y.TerrainType.RockGround]: 1,
                  [y.TerrainType.Dirt]: 1,
                  [y.TerrainType.Gravel]: 1
              },
              [l.WorldZ.Overworld]: {
                  [y.TerrainType.CobblestoneFlooring]: 1,
                  [y.TerrainType.WoodenFlooring]: 1
              }
          }
      }
  }, g(d.ItemType.WoodenSpear, d.ItemTypeGroup.Weapon, d.ItemTypeGroup.CookingEquipment), t.itemDescriptions[d.ItemType.Suture] = {
      use: [i.ActionType.Heal, i.ActionType.HealOther],
      skillUse: r.SkillType.Anatomy,
      recipe: {
          components: [T(d.ItemType.String, 1, 1, 1), T(d.ItemTypeGroup.Needle, 1, 1, 1)],
          skill: r.SkillType.Tinkering,
          level: d.RecipeLevel.Intermediate,
          reputation: 25
      },
      disassemble: !0,
      onUse: {
          [i.ActionType.Heal]: [6, 0, 0, 0],
          [i.ActionType.HealOther]: 6
      },
      damageType: o.DamageType.Piercing,
      flammable: !0,
      worth: 15,
      canCureStatus: [o.StatusType.Bleeding]
  }, g(d.ItemType.Suture, d.ItemTypeGroup.Health), t.itemDescriptions[d.ItemType.Raft] = {
      durability: 2e3,
      use: [i.ActionType.Paddle],
      recipe: {
          components: [T(d.ItemType.Rope, 1, 1, 1), T(d.ItemType.String, 2, 2, 2), T(d.ItemType.Log, 3, 3, 3), T(d.ItemType.BoatPaddle, 1, 1, 1)],
          skill: r.SkillType.Tinkering,
          level: d.RecipeLevel.Advanced,
          reputation: 25
      },
      disassemble: !0,
      damageModifier: 100,
      flammable: !0,
      worth: 50,
      damageOnUse: {
          [i.ActionType.Paddle]: 1
      },
      isVehicle: !0
  }, g(d.ItemType.Raft, d.ItemTypeGroup.Travel), t.itemDescriptions[d.ItemType.RawMeat] = {
      weight: .8,
      use: [i.ActionType.Eat],
      decayMax: 2750,
      decaysInto: [d.ItemType.RottenMeat],
      onBurn: [d.ItemType.CookedMeat],
      onUse: {
          [i.ActionType.Eat]: [-2, 2, 7, -2]
      },
      skillUse: r.SkillType.Anatomy,
      worth: 5,
      tier: {
          [d.ItemTypeGroup.Meat]: 2
      }
  }, g(d.ItemType.RawMeat, d.ItemTypeGroup.Meat, d.ItemTypeGroup.RawMeat), t.itemDescriptions[d.ItemType.Raspberries] = {
      weight: .3,
      use: [i.ActionType.Eat],
      skillUse: r.SkillType.Botany,
      decayMax: 14e3,
      decaysInto: [d.ItemType.RottingVegetation],
      onBurn: [d.ItemType.PileOfAsh],
      onUse: {
          [i.ActionType.Eat]: [1, 2, 2, 1]
      },
      dismantle: {
          items: [{
              type: d.ItemType.RaspberrySeeds,
              amount: 1
          }],
          skill: r.SkillType.Botany
      },
      worth: 5,
      spawnOnMerchant: [s.BiomeType.Coastal]
  }, g(d.ItemType.Raspberries, d.ItemTypeGroup.Fruit), t.itemDescriptions[d.ItemType.FlyAmanita] = {
      weight: .3,
      use: [i.ActionType.Eat, i.ActionType.Plant],
      skillUse: r.SkillType.Mycology,
      decayMax: 19e3,
      onBurn: [d.ItemType.PileOfAsh],
      onUse: {
          [i.ActionType.Eat]: [-5, 8, 2, 0],
          [i.ActionType.Plant]: a.DoodadType.FlyAmanita
      },
      worth: 5,
      spawnOnMerchant: [s.BiomeType.Coastal]
  }, t.itemDescriptions[d.ItemType.Rope] = {
      recipe: {
          components: [T(d.ItemType.String, 4, 4, 4)],
          skill: r.SkillType.Tinkering,
          level: d.RecipeLevel.Intermediate,
          reputation: 25
      },
      disassemble: !0,
      flammable: !0,
      worth: 15,
      use: [i.ActionType.TestDepth]
  }, t.itemDescriptions[d.ItemType.MapleSeeds] = {
      weight: .1,
      skillUse: r.SkillType.Botany,
      use: [i.ActionType.Plant, i.ActionType.Eat],
      onBurn: [d.ItemType.PileOfAsh],
      onUse: {
          [i.ActionType.Eat]: [1, 2, 1, -1],
          [i.ActionType.Plant]: a.DoodadType.MapleTree
      },
      flammable: !0,
      worth: 5,
      spawnOnMerchant: [s.BiomeType.Coastal]
  }, g(d.ItemType.MapleSeeds, d.ItemTypeGroup.Seed), t.itemDescriptions[d.ItemType.Badderlocks] = {
      weight: .3,
      use: [i.ActionType.Eat],
      skillUse: r.SkillType.Botany,
      decayMax: 19e3,
      decaysInto: [d.ItemType.RottingVegetation],
      onBurn: [d.ItemType.PileOfAsh],
      onUse: {
          [i.ActionType.Eat]: [0, 2, 1, -1]
      },
      worth: 5,
      tier: {
          [d.ItemTypeGroup.Cordage]: 1
      },
      spawnOnWorldGen: {
          [s.BiomeType.Coastal]: {
              [l.WorldZ.Overworld]: {
                  [y.TerrainType.ShallowSeawater]: 1
              }
          },
          [s.BiomeType.Arid]: {
              [l.WorldZ.Overworld]: {
                  [y.TerrainType.ShallowSeawater]: 1
              }
          }
      },
      spawnOnMerchant: [s.BiomeType.Coastal, s.BiomeType.Arid]
  }, g(d.ItemType.Badderlocks, d.ItemTypeGroup.Cordage), t.itemDescriptions[d.ItemType.SharpGlass] = {
      reducedWeight: 2.3,
      use: [i.ActionType.Carve],
      durability: 15,
      recipe: {
          components: [T(d.ItemTypeGroup.Sand, 1, 1)],
          skill: r.SkillType.Glassblowing,
          level: d.RecipeLevel.Simple,
          requiresFire: !0,
          reputation: -25
      },
      damageType: o.DamageType.Piercing | o.DamageType.Slashing,
      worth: 10,
      tier: {
          [d.ItemTypeGroup.Sharpened]: 2
      },
      spawnOnWorldGen: {
          [s.BiomeType.Arid]: {
              [l.WorldZ.Overworld]: {
                  [y.TerrainType.DesertSand]: 1
              }
          }
      },
      spawnOnMerchant: [s.BiomeType.Arid]
  }, g(d.ItemType.SharpGlass, d.ItemTypeGroup.Sharpened), t.itemDescriptions[d.ItemType.SharpRock] = {
      reducedWeight: 1.2,
      durability: 10,
      use: [i.ActionType.Carve, i.ActionType.Harvest],
      recipe: {
          components: [T(d.ItemType.LargeRock, 2, 1)],
          skill: r.SkillType.Stonecrafting,
          level: d.RecipeLevel.Simple,
          reputation: -25
      },
      recipes: [e => e.addRequirement(m.RecipeRequirementType.Item, d.ItemType.LargeRock).addRequirement(m.RecipeRequirementType.Tool, d.ItemType.LargeRock).setSkill(r.SkillType.Stonecrafting).setLevel(d.RecipeLevel.Simple).setReputation(-25)],
      dismantle: {
          items: [{
              type: d.ItemType.Stones,
              amount: 1
          }],
          required: d.ItemTypeGroup.Hammer
      },
      damageType: o.DamageType.Piercing | o.DamageType.Slashing,
      worth: 5,
      tier: {
          [d.ItemTypeGroup.Sharpened]: 1,
          [d.ItemTypeGroup.SharpenedRock]: 1
      },
      spawnOnWorldGen: {
          [s.BiomeType.Coastal]: {
              [l.WorldZ.Cave]: {
                  [y.TerrainType.RockGround]: 1,
                  [y.TerrainType.Dirt]: 1,
                  [y.TerrainType.Gravel]: 1
              },
              [l.WorldZ.Overworld]: {
                  [y.TerrainType.Dirt]: 1,
                  [y.TerrainType.Grass]: 1,
                  [y.TerrainType.Gravel]: 1,
                  [y.TerrainType.RockGround]: 1
              }
          },
          [s.BiomeType.IceCap]: {
              [l.WorldZ.Cave]: {
                  [y.TerrainType.RockGround]: 1,
                  [y.TerrainType.Dirt]: 1
              },
              [l.WorldZ.Overworld]: {
                  [y.TerrainType.RockGround]: 1,
                  [y.TerrainType.Dirt]: 1
              }
          }
      },
      spawnOnMerchant: [s.BiomeType.Coastal, s.BiomeType.IceCap]
  }, g(d.ItemType.SharpRock, d.ItemTypeGroup.Sharpened, d.ItemTypeGroup.SharpenedRock), t.itemDescriptions[d.ItemType.Skullcap] = {
      durability: 15,
      equip: r.EquipType.Head,
      defense: new o.Defense(1, new o.Resistances(o.DamageType.Slashing, 1), new o.Vulnerabilities),
      recipe: {
          components: [T(d.ItemType.AnimalSkull, 1, 1), T(d.ItemTypeGroup.Hammer, 1, 0)],
          skill: r.SkillType.Tinkering,
          level: d.RecipeLevel.Simple,
          reputation: -75
      },
      burnsLike: [d.ItemType.AnimalSkull],
      worth: 20
  }, g(d.ItemType.Skullcap, d.ItemTypeGroup.Equipment), t.itemDescriptions[d.ItemType.SmoothRock] = {
      recipe: {
          components: [T(d.ItemType.LargeRock, 1, 1), T(d.ItemTypeGroup.SharpenedRock, 1, 1, 0, !0)],
          skill: r.SkillType.Stonecrafting,
          level: d.RecipeLevel.Simple,
          reputation: -25
      },
      dismantle: {
          items: [{
              type: d.ItemType.Stones,
              amount: 2
          }],
          required: d.ItemTypeGroup.Hammer
      },
      worth: 5,
      tier: {
          [d.ItemTypeGroup.Rock]: 2
      },
      spawnOnWorldGen: {
          [s.BiomeType.Coastal]: {
              [l.WorldZ.Cave]: {
                  [y.TerrainType.RockGround]: 1,
                  [y.TerrainType.Dirt]: 1,
                  [y.TerrainType.Gravel]: 1
              },
              [l.WorldZ.Overworld]: {
                  [y.TerrainType.RockGround]: 1
              }
          },
          [s.BiomeType.IceCap]: {
              [l.WorldZ.Cave]: {
                  [y.TerrainType.RockGround]: 1,
                  [y.TerrainType.Dirt]: 1
              },
              [l.WorldZ.Overworld]: {
                  [y.TerrainType.RockGround]: 1
              }
          }
      },
      spawnOnMerchant: [s.BiomeType.Coastal, s.BiomeType.IceCap]
  }, g(d.ItemType.SmoothRock, d.ItemTypeGroup.Rock), t.itemDescriptions[d.ItemType.Soil] = {
      weight: 3,
      use: [i.ActionType.SetDown, i.ActionType.SmotherFire],
      onUse: {
          [i.ActionType.SetDown]: y.TerrainType.Dirt,
          [i.ActionType.SmotherFire]: y.TerrainType.Dirt
      },
      worth: 5
  }, t.itemDescriptions[d.ItemType.StoneSpear] = {
      durability: 25,
      equip: r.EquipType.Held,
      attack: 4,
      damageType: o.DamageType.Piercing,
      recipe: {
          components: [T(d.ItemType.String, 1, 1, 1), T(d.ItemTypeGroup.SharpenedRock, 1, 1, 1), T(d.ItemTypeGroup.Pole, 1, 1, 1)],
          skill: r.SkillType.Tinkering,
          level: d.RecipeLevel.Intermediate,
          reputation: -100
      },
      disassemble: !0,
      use: [i.ActionType.Gather, i.ActionType.Melee],
      flammable: !0,
      worth: 20,
      tier: {
          [d.ItemTypeGroup.CookingEquipment]: 2
      },
      spawnOnMerchant: [s.BiomeType.Coastal, s.BiomeType.IceCap]
  }, g(d.ItemType.StoneSpear, d.ItemTypeGroup.Weapon, d.ItemTypeGroup.CookingEquipment), t.itemDescriptions[d.ItemType.Stones] = {
      weight: 1,
      worth: 5,
      spawnOnWorldGen: {
          [s.BiomeType.Coastal]: {
              [l.WorldZ.Cave]: {
                  [y.TerrainType.RockGround]: 1,
                  [y.TerrainType.Dirt]: 1,
                  [y.TerrainType.Gravel]: 1
              },
              [l.WorldZ.Overworld]: {
                  [y.TerrainType.Dirt]: 1,
                  [y.TerrainType.Grass]: 1,
                  [y.TerrainType.Gravel]: 1
              }
          },
          [s.BiomeType.IceCap]: {
              [l.WorldZ.Cave]: {
                  [y.TerrainType.RockGround]: 1,
                  [y.TerrainType.Dirt]: 1
              },
              [l.WorldZ.Overworld]: {
                  [y.TerrainType.Dirt]: 1
              }
          }
      }
  }, t.itemDescriptions[d.ItemType.StoneWall] = {
      use: [i.ActionType.Build],
      recipe: {
          components: [T(d.ItemTypeGroup.Rock, 8, 8, 8)],
          skill: r.SkillType.Stonecrafting,
          level: d.RecipeLevel.Advanced,
          reputation: 25
      },
      disassemble: !0,
      durability: 25,
      onUse: {
          [i.ActionType.Build]: a.DoodadType.StoneWall
      },
      worth: 50,
      spawnOnMerchant: [s.BiomeType.Coastal, s.BiomeType.IceCap]
  }, g(d.ItemType.StoneWall, d.ItemTypeGroup.Housing), t.itemDescriptions[d.ItemType.String] = {
      recipe: {
          components: [T(d.ItemTypeGroup.Cordage, 2, 2, 2)],
          skill: r.SkillType.Tinkering,
          level: d.RecipeLevel.Simple,
          reputation: 25
      },
      disassemble: !0,
      onBurn: [d.ItemType.PileOfAsh],
      flammable: !0,
      worth: 10
  }, t.itemDescriptions[d.ItemType.StrippedBark] = {
      weight: .1,
      use: [i.ActionType.StokeFire],
      onBurn: [d.ItemType.PileOfAsh],
      onUse: {
          [i.ActionType.StokeFire]: 40
      },
      flammable: !0,
      worth: 5,
      tier: {
          [d.ItemTypeGroup.Cordage]: 1
      },
      spawnOnWorldGen: {
          [s.BiomeType.Coastal]: {
              [l.WorldZ.Overworld]: {
                  [y.TerrainType.Grass]: 1
              }
          }
      }
  }, g(d.ItemType.StrippedBark, d.ItemTypeGroup.Cordage), t.itemDescriptions[d.ItemType.TannedLeather] = {
      recipe: {
          components: [T(d.ItemType.Tannin, 1, 1, 0, !0), T(d.ItemType.LeatherHide, 1, 1)],
          skill: r.SkillType.Leatherworking,
          level: d.RecipeLevel.Intermediate,
          reputation: -25
      },
      burnsLike: [d.ItemType.LeatherHide],
      flammable: !0,
      worth: 25,
      spawnOnWorldGen: {
          [s.BiomeType.Coastal]: {
              [l.WorldZ.Cave]: {
                  [y.TerrainType.CobblestoneFlooring]: 1,
                  [y.TerrainType.WoodenFlooring]: 1
              },
              [l.WorldZ.Overworld]: {
                  [y.TerrainType.CobblestoneFlooring]: 1,
                  [y.TerrainType.WoodenFlooring]: 1
              }
          }
      }
  }, t.itemDescriptions[d.ItemType.Tannin] = {
      reducedWeight: .1,
      recipe: {
          components: [T(d.ItemType.TreeBark, 1, 1), T(d.ItemTypeGroup.MortarAndPestle, 1, 0)],
          skill: r.SkillType.Chemistry,
          level: d.RecipeLevel.Simple,
          reputation: 25
      },
      onBurn: [d.ItemType.PileOfAsh],
      flammable: !0,
      worth: 10
  }, g(d.ItemType.Tannin, d.ItemTypeGroup.Powder), t.itemDescriptions[d.ItemType.MilkThistleSeeds] = {
      weight: .1,
      use: [i.ActionType.Plant, i.ActionType.Eat],
      skillUse: r.SkillType.Botany,
      onBurn: [d.ItemType.PileOfAsh],
      onUse: {
          [i.ActionType.Plant]: a.DoodadType.MilkThistles,
          [i.ActionType.Eat]: [2, 0, 1, 0]
      },
      flammable: !0,
      worth: 5
  }, g(d.ItemType.MilkThistleSeeds, d.ItemTypeGroup.Seed), t.itemDescriptions[d.ItemType.TreeBark] = {
      weight: .2,
      use: [i.ActionType.StokeFire],
      onBurn: [d.ItemType.Charcoal],
      onUse: {
          [i.ActionType.StokeFire]: 80
      },
      dismantle: {
          items: [{
              type: d.ItemType.StrippedBark,
              amount: 2
          }],
          required: d.ItemTypeGroup.Sharpened,
          skill: r.SkillType.Woodworking
      },
      flammable: !0,
      worth: 5,
      spawnOnWorldGen: {
          [s.BiomeType.Coastal]: {
              [l.WorldZ.Overworld]: {
                  [y.TerrainType.Dirt]: 1,
                  [y.TerrainType.Grass]: 1,
                  [y.TerrainType.Gravel]: 1
              }
          }
      }
  }, g(d.ItemType.TreeBark, d.ItemTypeGroup.Kindling), t.itemDescriptions[d.ItemType.HoneyFungus] = {
      weight: .3,
      use: [i.ActionType.Eat],
      skillUse: r.SkillType.Mycology,
      decayMax: 19e3,
      onBurn: [d.ItemType.PileOfAsh],
      onUse: {
          [i.ActionType.Eat]: [0, 14, 3, 0]
      },
      worth: 5,
      spawnOnMerchant: [s.BiomeType.Coastal]
  }, t.itemDescriptions[d.ItemType.ClematisVine] = {
      weight: .3,
      onBurn: [d.ItemType.PileOfAsh],
      flammable: !0,
      worth: 5,
      tier: {
          [d.ItemTypeGroup.Cordage]: 2
      },
      spawnOnMerchant: [s.BiomeType.Coastal]
  }, g(d.ItemType.ClematisVine, d.ItemTypeGroup.Cordage), t.itemDescriptions[d.ItemType.Twigs] = {
      weight: .1,
      use: [i.ActionType.StokeFire],
      onBurn: [d.ItemType.Charcoal],
      onUse: {
          [i.ActionType.StokeFire]: 50
      },
      dismantle: {
          items: [{
              type: d.ItemType.WoodenShavings,
              amount: 1
          }],
          required: d.ItemTypeGroup.Sharpened,
          skill: r.SkillType.Woodworking
      },
      flammable: !0,
      worth: 5,
      spawnOnWorldGen: {
          [s.BiomeType.Coastal]: {
              [l.WorldZ.Overworld]: {
                  [y.TerrainType.ShallowSeawater]: 2,
                  [y.TerrainType.Dirt]: 1,
                  [y.TerrainType.Grass]: 1,
                  [y.TerrainType.Gravel]: 1
              }
          }
      }
  }, g(d.ItemType.Twigs, d.ItemTypeGroup.Kindling), t.itemDescriptions[d.ItemType.Waterskin] = {
      gather: {
          milk: d.ItemType.WaterskinOfGoatMilk,
          desalinated: d.ItemType.WaterskinOfDesalinatedWater,
          unpurified: d.ItemType.WaterskinOfUnpurifiedFreshWater,
          seawater: d.ItemType.WaterskinOfSeawater
      },
      use: [i.ActionType.GatherWater, i.ActionType.GatherMilk, i.ActionType.AttachContainer],
      recipe: {
          components: [T(d.ItemType.TannedLeather, 1, 1, 1), T(d.ItemType.String, 2, 2, 2), T(d.ItemTypeGroup.Needle, 1, 0)],
          skill: r.SkillType.Leatherworking,
          level: d.RecipeLevel.Simple,
          reputation: 25
      },
      disassemble: !0,
      durability: 20,
      flammable: !0,
      worth: 50,
      spawnOnWorldGen: {
          [s.BiomeType.Coastal]: {
              [l.WorldZ.Cave]: {
                  [y.TerrainType.CobblestoneFlooring]: 1,
                  [y.TerrainType.WoodenFlooring]: 1
              },
              [l.WorldZ.Overworld]: {
                  [y.TerrainType.CobblestoneFlooring]: 1,
                  [y.TerrainType.WoodenFlooring]: 1
              }
          }
      }
  }, g(d.ItemType.Waterskin, d.ItemTypeGroup.LiquidContainer), t.itemDescriptions[d.ItemType.WoodenPole] = {
      weight: .3,
      durability: 10,
      equip: r.EquipType.Held,
      attack: 2,
      damageType: o.DamageType.Blunt,
      use: [i.ActionType.Ignite, i.ActionType.Gather, i.ActionType.StokeFire, i.ActionType.Build, i.ActionType.Melee],
      lit: d.ItemType.LitPoleTorch,
      onBurn: [d.ItemType.Charcoal],
      onUse: {
          [i.ActionType.StokeFire]: 50,
          [i.ActionType.Build]: a.DoodadType.PoleTorchStand
      },
      dismantle: {
          items: [{
              type: d.ItemType.WoodenDowels,
              amount: 2
          }],
          required: d.ItemTypeGroup.Sharpened,
          skill: r.SkillType.Woodworking
      },
      worth: 5,
      flammable: !0,
      tier: {
          [d.ItemTypeGroup.CookingEquipment]: 1,
          [d.ItemTypeGroup.Pole]: 1
      }
  }, g(d.ItemType.WoodenPole, d.ItemTypeGroup.Pole, d.ItemTypeGroup.Weapon, d.ItemTypeGroup.LightDevice, d.ItemTypeGroup.CookingEquipment), t.itemDescriptions[d.ItemType.PeatBandage] = {
      use: [i.ActionType.Heal, i.ActionType.HealOther],
      skillUse: r.SkillType.Anatomy,
      recipe: {
          components: [T(d.ItemType.Bandage, 1, 1, 1), T(d.ItemType.Peat, 1, 1, 1)],
          skill: r.SkillType.Tinkering,
          level: d.RecipeLevel.Intermediate,
          reputation: 25
      },
      disassemble: !0,
      onUse: {
          [i.ActionType.Heal]: [15, 0, 0, 0],
          [i.ActionType.HealOther]: 15
      },
      flammable: !0,
      worth: 30,
      spawnOnMerchant: [s.BiomeType.Coastal],
      canCureStatus: [o.StatusType.Bleeding]
  }, g(d.ItemType.PeatBandage, d.ItemTypeGroup.Health), t.itemDescriptions[d.ItemType.Bow] = {
      durability: 15,
      use: [i.ActionType.Shoot, i.ActionType.Melee],
      equip: r.EquipType.Held,
      twoHanded: !0,
      attack: 1,
      damageType: o.DamageType.Blunt,
      ranged: {
          range: 5,
          attack: 1
      },
      recipe: {
          components: [T(d.ItemType.WoodenPole, 1, 1, 1), T(d.ItemType.String, 1, 1, 1)],
          skill: r.SkillType.Fletching,
          level: d.RecipeLevel.Intermediate,
          reputation: -75
      },
      disassemble: !0,
      flammable: !0,
      worth: 10
  }, g(d.ItemType.Bow, d.ItemTypeGroup.Weapon), t.itemDescriptions[d.ItemType.BowDrill] = {
      durability: 50,
      use: [i.ActionType.StartFire],
      recipe: {
          components: [T(d.ItemType.Bow, 1, 1, 1), T(d.ItemType.HandDrill, 1, 1, 1)],
          skill: r.SkillType.Camping,
          level: d.RecipeLevel.Intermediate,
          reputation: -50
      },
      disassemble: !0,
      flammable: !0,
      worth: 25
  }, g(d.ItemType.BowDrill, d.ItemTypeGroup.Firemaking, d.ItemTypeGroup.FireStarter), t.itemDescriptions[d.ItemType.FishingNet] = {
      durability: 40,
      ranged: {
          range: 3,
          attack: 0
      },
      use: [i.ActionType.Cast, i.ActionType.GatherTreasure],
      recipe: {
          components: [T(d.ItemType.String, 6, 6, 6), T(d.ItemType.Stones, 1, 1, 1)],
          skill: r.SkillType.Tinkering,
          level: d.RecipeLevel.Intermediate,
          reputation: 25
      },
      disassemble: !0,
      flammable: !0,
      worth: 50
  }, g(d.ItemType.FishingNet, d.ItemTypeGroup.Tool), t.itemDescriptions[d.ItemType.RawCod] = {
      weight: 1.2,
      use: [i.ActionType.Eat],
      decayMax: 2750,
      decaysInto: [d.ItemType.RottenMeat],
      onBurn: [d.ItemType.CookedCod],
      onUse: {
          [i.ActionType.Eat]: [1, 2, 5, -1]
      },
      skillUse: r.SkillType.Anatomy,
      worth: 5,
      tier: {
          [d.ItemTypeGroup.Meat]: 2
      },
      returnOnUseAndDecay: {
          type: d.ItemType.BoneFragments
      },
      dismantle: {
          items: [{
              type: d.ItemType.BoneFragments,
              amount: 1
          }, {
              type: d.ItemType.RawChoppedFish,
              amount: 1,
              transferDecay: !0
          }],
          required: d.ItemTypeGroup.Sharpened,
          skill: r.SkillType.Anatomy
      },
      spawnOnWorldGen: {
          [s.BiomeType.Coastal]: {
              [l.WorldZ.Overworld]: {
                  [y.TerrainType.ShallowSeawater]: 1
              }
          }
      },
      spawnOnMerchant: [s.BiomeType.Coastal, s.BiomeType.IceCap]
  }, g(d.ItemType.RawCod, d.ItemTypeGroup.Meat, d.ItemTypeGroup.RawMeat, d.ItemTypeGroup.RawFish), t.itemDescriptions[d.ItemType.CookedCod] = {
      use: [i.ActionType.Eat],
      decayMax: 4750,
      decaysInto: [d.ItemType.RottenMeat],
      recipe: {
          components: [T(d.ItemType.RawCod, 1, 1), T(d.ItemTypeGroup.CookingEquipment, 1, 0)],
          skill: r.SkillType.Cooking,
          level: d.RecipeLevel.Simple,
          requiresFire: !0,
          reputation: 25
      },
      onBurn: [d.ItemType.PileOfAsh],
      onUse: {
          [i.ActionType.Eat]: [2, 8, 6, -1]
      },
      skillUse: r.SkillType.Cooking,
      worth: 15,
      tier: {
          [d.ItemTypeGroup.Meat]: 3
      },
      returnOnUseAndDecay: {
          type: d.ItemType.BoneFragments
      },
      spawnOnMerchant: [s.BiomeType.Coastal, s.BiomeType.IceCap]
  }, g(d.ItemType.CookedCod, d.ItemTypeGroup.Meat, d.ItemTypeGroup.CookedMeat, d.ItemTypeGroup.CookedFood), t.itemDescriptions[d.ItemType.StoneCampfire] = {
      use: [i.ActionType.Build],
      recipe: {
          components: [T(d.ItemTypeGroup.Rock, 5, 5, 5)],
          skill: r.SkillType.Camping,
          level: d.RecipeLevel.Intermediate,
          reputation: -25
      },
      disassemble: !0,
      durability: 20,
      onUse: {
          [i.ActionType.Build]: a.DoodadType.StoneCampfire
      },
      worth: 25,
      spawnOnMerchant: [s.BiomeType.Coastal, s.BiomeType.IceCap]
  }, g(d.ItemType.StoneCampfire, d.ItemTypeGroup.Firemaking, d.ItemTypeGroup.Heating, d.ItemTypeGroup.Campfire), t.itemDescriptions[d.ItemType.VineWhip] = {
      durability: 10,
      equip: r.EquipType.Held,
      use: [i.ActionType.Melee],
      attack: 3,
      damageType: o.DamageType.Slashing,
      recipe: {
          components: [T(d.ItemType.ClematisVine, 2, 2)],
          skill: r.SkillType.Tinkering,
          level: d.RecipeLevel.Simple,
          reputation: -50
      },
      burnsLike: [d.ItemType.ClematisVine, d.ItemType.ClematisVine],
      flammable: !0,
      worth: 10,
      spawnOnMerchant: [s.BiomeType.Coastal]
  }, g(d.ItemType.VineWhip, d.ItemTypeGroup.Weapon), t.itemDescriptions[d.ItemType.PileOfSnow] = {
      use: [i.ActionType.DrinkItem, i.ActionType.Pour, i.ActionType.PourOnYourself, i.ActionType.SmotherFire],
      weight: .3,
      decayMax: 750,
      onBurn: [d.ItemType.None],
      onUse: {
          [i.ActionType.DrinkItem]: [-4, 16, 1, 8],
          [i.ActionType.SmotherFire]: y.TerrainType.ShallowFreshWater
      },
      worth: 5,
      tier: {
          [d.ItemTypeGroup.Liquid]: 2,
          [d.ItemTypeGroup.FrozenWater]: 2
      },
      spawnOnWorldGen: {
          [s.BiomeType.Coastal]: {
              [l.WorldZ.Overworld]: {
                  [y.TerrainType.Snow]: 1
              }
          },
          [s.BiomeType.IceCap]: {
              [l.WorldZ.Overworld]: {
                  [y.TerrainType.Snow]: 1,
                  [y.TerrainType.Dirt]: 1,
                  [y.TerrainType.RockGround]: 1
              }
          }
      },
      spawnOnMerchant: [s.BiomeType.IceCap]
  }, g(d.ItemType.PileOfSnow, d.ItemTypeGroup.Liquid, d.ItemTypeGroup.FrozenWater), t.itemDescriptions[d.ItemType.BarkTorch] = {
      durability: 15,
      attack: 2,
      damageType: o.DamageType.Blunt,
      equip: r.EquipType.Held,
      use: [i.ActionType.Ignite, i.ActionType.Build, i.ActionType.Melee],
      lit: d.ItemType.LitBarkTorch,
      recipe: {
          components: [T(d.ItemType.StrippedBark, 5, 5), T(d.ItemTypeGroup.Pole, 1, 1)],
          skill: r.SkillType.Tinkering,
          level: d.RecipeLevel.Intermediate,
          reputation: 25
      },
      onUse: {
          [i.ActionType.Build]: a.DoodadType.BarkTorchStand
      },
      onBurn: [d.ItemType.PileOfAsh, d.ItemType.PileOfAsh, d.ItemType.PileOfAsh, d.ItemType.PileOfAsh, d.ItemType.PileOfAsh, d.ItemType.PileOfAsh],
      flammable: !0,
      worth: 25,
      spawnOnWorldGen: {
          [s.BiomeType.Coastal]: {
              [l.WorldZ.Cave]: {
                  [y.TerrainType.CobblestoneFlooring]: 1,
                  [y.TerrainType.WoodenFlooring]: 1
              },
              [l.WorldZ.Overworld]: {
                  [y.TerrainType.CobblestoneFlooring]: 1,
                  [y.TerrainType.WoodenFlooring]: 1
              }
          }
      }
  }, g(d.ItemType.BarkTorch, d.ItemTypeGroup.LightDevice, d.ItemTypeGroup.Weapon), t.itemDescriptions[d.ItemType.LitBarkTorch] = {
      inheritWeight: d.ItemType.BarkTorch,
      durability: 15,
      equip: r.EquipType.Held,
      equipEffect: [d.EquipEffect.LightSource, 2],
      attack: 3,
      damageType: o.DamageType.Fire | o.DamageType.Blunt,
      use: [i.ActionType.StartFire, i.ActionType.Extinguish, i.ActionType.Build, i.ActionType.Melee],
      revert: d.ItemType.BarkTorch,
      decayMax: 2e3,
      decaysInto: [d.ItemType.Charcoal],
      repairable: !1,
      onUse: {
          [i.ActionType.Build]: a.DoodadType.LitBarkTorchStand
      },
      burnsLike: [d.ItemType.BarkTorch],
      flammable: !0
  }, g(d.ItemType.LitBarkTorch, d.ItemTypeGroup.LitTorch, d.ItemTypeGroup.FireSource, d.ItemTypeGroup.FireStarter, d.ItemTypeGroup.Weapon, d.ItemTypeGroup.Untradable), t.itemDescriptions[d.ItemType.HandDrill] = {
      durability: 10,
      use: [i.ActionType.StartFire],
      recipe: {
          components: [T(d.ItemType.WoodenPole, 2, 2, 1)],
          skill: r.SkillType.Camping,
          level: d.RecipeLevel.Intermediate,
          reputation: -25
      },
      disassemble: !0,
      flammable: !0,
      worth: 10
  }, g(d.ItemType.HandDrill, d.ItemTypeGroup.Firemaking, d.ItemTypeGroup.FireStarter), t.itemDescriptions[d.ItemType.SmallBag] = {
      durability: 10,
      weightCapacity: 25,
      use: [i.ActionType.OpenContainer],
      equip: r.EquipType.Belt,
      defense: new o.Defense(1, new o.Resistances(o.DamageType.Slashing, 1), new o.Vulnerabilities(o.DamageType.Piercing, 1)),
      recipe: {
          components: [T(d.ItemType.TannedLeather, 1, 1, 1), T(d.ItemType.String, 1, 1, 1), T(d.ItemTypeGroup.Needle, 1, 0)],
          skill: r.SkillType.Leatherworking,
          level: d.RecipeLevel.Simple,
          reputation: 25
      },
      disassemble: !0,
      flammable: !0,
      worth: 50,
      preservationChance: .15,
      spawnOnWorldGen: {
          [s.BiomeType.Arid]: {
              [l.WorldZ.Overworld]: {
                  [y.TerrainType.SandstoneFlooring]: 1,
                  [y.TerrainType.ClayFlooring]: 1
              }
          }
      }
  }, g(d.ItemType.SmallBag, d.ItemTypeGroup.Equipment, d.ItemTypeGroup.Storage), t.itemDescriptions[d.ItemType.Shale] = {
      weight: .8,
      use: [i.ActionType.Carve, i.ActionType.Harvest],
      damageType: o.DamageType.Slashing,
      worth: 5,
      tier: {
          [d.ItemTypeGroup.Sharpened]: 1,
          [d.ItemTypeGroup.SharpenedRock]: 2
      },
      spawnOnWorldGen: {
          [s.BiomeType.Arid]: {
              [l.WorldZ.Cave]: {
                  [y.TerrainType.Gravel]: 1
              },
              [l.WorldZ.Overworld]: {
                  [y.TerrainType.DesertSand]: 1
              }
          }
      },
      spawnOnMerchant: [s.BiomeType.Arid]
  }, g(d.ItemType.Shale, d.ItemTypeGroup.Sharpened, d.ItemTypeGroup.SharpenedRock), t.itemDescriptions[d.ItemType.SharpenedBone] = {
      reducedWeight: .1,
      use: [i.ActionType.Carve, i.ActionType.Gather, i.ActionType.Melee],
      equip: r.EquipType.Held,
      attack: 3,
      damageType: o.DamageType.Piercing,
      recipe: {
          components: [T(d.ItemType.BonePole, 1, 1), T(d.ItemTypeGroup.Sharpened, 1, 0)],
          skill: r.SkillType.Tinkering,
          level: d.RecipeLevel.Simple,
          reputation: -25
      },
      onBurn: [d.ItemType.PileOfAsh],
      worth: 5,
      tier: {
          [d.ItemTypeGroup.Sharpened]: 1,
          [d.ItemTypeGroup.Bone]: 1
      },
      spawnOnWorldGen: {
          [s.BiomeType.Arid]: {
              [l.WorldZ.Overworld]: {
                  [y.TerrainType.DesertSand]: 1
              }
          }
      }
  }, g(d.ItemType.SharpenedBone, d.ItemTypeGroup.Sharpened, d.ItemTypeGroup.Weapon, d.ItemTypeGroup.Bone, d.ItemTypeGroup.CookingEquipment), t.itemDescriptions[d.ItemType.Grindstone] = {
      use: [i.ActionType.Repair],
      recipe: {
          components: [T(d.ItemType.Sandstone, 2, 1)],
          skill: r.SkillType.Tinkering,
          level: d.RecipeLevel.Intermediate,
          reputation: 25
      },
      worth: 10,
      spawnOnMerchant: [s.BiomeType.Arid]
  }, g(d.ItemType.Grindstone, d.ItemTypeGroup.Repairing, d.ItemTypeGroup.Tool), t.itemDescriptions[d.ItemType.RawFishSteak] = {
      weight: .8,
      use: [i.ActionType.Eat],
      decayMax: 2750,
      decaysInto: [d.ItemType.RottenMeat],
      onBurn: [d.ItemType.CookedFishSteak],
      onUse: {
          [i.ActionType.Eat]: [1, 2, 6, -1]
      },
      skillUse: r.SkillType.Anatomy,
      worth: 5,
      tier: {
          [d.ItemTypeGroup.Meat]: 2
      },
      dismantle: {
          items: [{
              type: d.ItemType.RawChoppedFish,
              amount: 1,
              transferDecay: !0
          }],
          required: d.ItemTypeGroup.Sharpened,
          skill: r.SkillType.Anatomy
      }
  }, g(d.ItemType.RawFishSteak, d.ItemTypeGroup.Meat, d.ItemTypeGroup.RawMeat, d.ItemTypeGroup.RawFish), t.itemDescriptions[d.ItemType.CookedFishSteak] = {
      use: [i.ActionType.Eat],
      decayMax: 4750,
      decaysInto: [d.ItemType.RottenMeat],
      recipe: {
          components: [T(d.ItemType.RawFishSteak, 1, 1), T(d.ItemTypeGroup.CookingEquipment, 1, 0)],
          skill: r.SkillType.Cooking,
          level: d.RecipeLevel.Simple,
          requiresFire: !0,
          reputation: 25
      },
      onBurn: [d.ItemType.PileOfAsh],
      onUse: {
          [i.ActionType.Eat]: [2, 8, 6, -1]
      },
      skillUse: r.SkillType.Cooking,
      worth: 15,
      tier: {
          [d.ItemTypeGroup.Meat]: 3
      }
  }, g(d.ItemType.CookedFishSteak, d.ItemTypeGroup.Meat, d.ItemTypeGroup.CookedMeat, d.ItemTypeGroup.CookedFood), t.itemDescriptions[d.ItemType.WaterskinOfDesalinatedWater] = {
      inheritWeight: d.ItemType.Waterskin,
      use: [i.ActionType.DrinkItem, i.ActionType.Pour, i.ActionType.PourOnYourself],
      durability: 20,
      returnOnUseAndDecay: {
          type: d.ItemType.Waterskin,
          damaged: !0,
          whenCrafted: !0
      },
      keepDurabilityOnCraft: !0,
      repairable: !1,
      flammable: !0,
      recipe: {
          baseComponent: d.ItemType.WaterskinOfSeawater,
          components: [T(d.ItemType.Flask, 1, 0)],
          skill: r.SkillType.Chemistry,
          level: d.RecipeLevel.Simple,
          requiresFire: !0,
          reputation: 25
      },
      onUse: {
          [i.ActionType.DrinkItem]: [2, 25, 1, 11]
      },
      worth: 75,
      tier: {
          [d.ItemTypeGroup.Liquid]: 2
      }
  }, g(d.ItemType.WaterskinOfDesalinatedWater, d.ItemTypeGroup.Liquid, d.ItemTypeGroup.WaterskinOfPotableWater, d.ItemTypeGroup.ContainerOfDesalinatedWater), f(e => e.addRequirement(m.RecipeRequirementType.Item, d.ItemType.WaterskinOfSeawater, 1, e => e.setChangeInto(d.ItemType.WaterskinOfDesalinatedWater)).addRequirement(m.RecipeRequirementType.Tool, d.ItemType.Flask).addRequirement(m.RecipeRequirementType.Fire).setSkill(r.SkillType.Chemistry).setLevel(d.RecipeLevel.Simple).setReputation(25)), t.itemDescriptions[d.ItemType.BoatPaddle] = {
      durability: 15,
      equip: r.EquipType.Held,
      use: [i.ActionType.Melee],
      attack: 2,
      damageType: o.DamageType.Blunt,
      recipe: {
          components: [T(d.ItemType.TreeBark, 2, 2, 2), T(d.ItemType.String, 2, 2, 2), T(d.ItemTypeGroup.Pole, 1, 1, 1)],
          skill: r.SkillType.Woodworking,
          level: d.RecipeLevel.Intermediate,
          reputation: -25
      },
      disassemble: !0,
      flammable: !0,
      worth: 25
  }, g(d.ItemType.BoatPaddle, d.ItemTypeGroup.Travel, d.ItemTypeGroup.Weapon), t.itemDescriptions[d.ItemType.BullBoat] = {
      durability: 4e3,
      use: [i.ActionType.Paddle],
      recipe: {
          components: [T(d.ItemType.WoodenPole, 8, 8, 8), T(d.ItemType.LeatherHide, 1, 1, 1), T(d.ItemType.Rope, 2, 2, 2), T(d.ItemType.BoatPaddle, 1, 1, 1)],
          skill: r.SkillType.Woodworking,
          level: d.RecipeLevel.Advanced,
          reputation: 25
      },
      disassemble: !0,
      damageModifier: 100,
      flammable: !0,
      worth: 100,
      damageOnUse: {
          [i.ActionType.Paddle]: 1
      },
      isVehicle: !0
  }, g(d.ItemType.BullBoat, d.ItemTypeGroup.Travel), t.itemDescriptions[d.ItemType.RefinedSand] = {
      reducedWeight: 2.3,
      recipe: {
          components: [T(d.ItemTypeGroup.Sand, 1, 1), T(d.ItemTypeGroup.MortarAndPestle, 1, 0)],
          skill: r.SkillType.Chemistry,
          level: d.RecipeLevel.Simple,
          reputation: 25
      },
      onBurn: [d.ItemType.SharpGlass],
      worth: 10,
      spawnOnMerchant: [s.BiomeType.Arid]
  }, g(d.ItemType.RefinedSand, d.ItemTypeGroup.Powder), t.itemDescriptions[d.ItemType.Spyglass] = {
      reducedWeight: 2.5,
      attack: 1,
      damageType: o.DamageType.Blunt,
      equip: r.EquipType.Held,
      use: [i.ActionType.Melee],
      equipEffect: [d.EquipEffect.Telescopy, 20, 25],
      recipe: {
          components: [T(d.ItemType.Lens, 2, 2), T(d.ItemType.Log, 1, 1), T(d.ItemType.String, 1, 1), T(d.ItemTypeGroup.Sharpened, 1, 0)],
          skill: r.SkillType.Tinkering,
          level: d.RecipeLevel.Advanced,
          reputation: 25
      },
      onBurn: [d.ItemType.Lens, d.ItemType.Lens, d.ItemType.Charcoal, d.ItemType.Charcoal, d.ItemType.Charcoal, d.ItemType.PileOfAsh, d.ItemType.PileOfAsh],
      durability: 2e3,
      damageModifier: 100,
      flammable: !0,
      worth: 50,
      damageOnUse: {
          [i.ActionType.Equip]: 1
      }
  }, g(d.ItemType.Spyglass, d.ItemTypeGroup.Tool), t.itemDescriptions[d.ItemType.Flask] = {
      recipe: {
          components: [T(d.ItemType.ClayBlowpipe, 1, 0), T(d.ItemType.RefinedSand, 2, 2), T(d.ItemType.LimestonePowder, 2, 2, 0, !0)],
          skill: r.SkillType.Glassblowing,
          level: d.RecipeLevel.Expert,
          requiredDoodad: a.DoodadTypeGroup.LitFurnace,
          reputation: 25
      },
      durability: 5,
      worth: 40,
      spawnOnMerchant: [s.BiomeType.Arid]
  }, t.itemDescriptions[d.ItemType.RawClay] = {
      weight: 1.5,
      use: [i.ActionType.SetDown, i.ActionType.SmotherFire],
      onBurn: [d.ItemType.ClayBrick],
      onUse: {
          [i.ActionType.SetDown]: y.TerrainType.Clay,
          [i.ActionType.SmotherFire]: y.TerrainType.Clay
      },
      worth: 5,
      spawnOnWorldGen: {
          [s.BiomeType.Arid]: {
              [l.WorldZ.Cave]: {
                  [y.TerrainType.Clay]: 1
              },
              [l.WorldZ.Overworld]: {
                  [y.TerrainType.Clay]: 1
              }
          }
      },
      spawnOnMerchant: [s.BiomeType.Arid]
  }, t.itemDescriptions[d.ItemType.RawClayBlowpipe] = {
      recipe: {
          components: [T(d.ItemType.RawClay, 1, 1, 1), T(d.ItemTypeGroup.Pole, 1, 0)],
          skill: r.SkillType.Claythrowing,
          level: d.RecipeLevel.Advanced,
          reputation: 25
      },
      disassemble: !0,
      onBurn: [d.ItemType.ClayBlowpipe],
      worth: 5,
      spawnOnMerchant: [s.BiomeType.Arid]
  }, t.itemDescriptions[d.ItemType.ClayBlowpipe] = {
      recipe: {
          components: [T(d.ItemType.RawClayBlowpipe, 1, 1)],
          skill: r.SkillType.Claythrowing,
          level: d.RecipeLevel.Expert,
          requiredDoodad: a.DoodadTypeGroup.LitKiln,
          reputation: 25
      },
      durability: 15,
      worth: 10,
      spawnOnMerchant: [s.BiomeType.Arid]
  }, t.itemDescriptions[d.ItemType.LeatherBelt] = {
      durability: 25,
      equip: r.EquipType.Belt,
      defense: new o.Defense(1, new o.Resistances(o.DamageType.Slashing, 1, o.DamageType.Fire, 1), new o.Vulnerabilities(o.DamageType.Piercing, 1)),
      recipe: {
          components: [T(d.ItemType.TannedLeather, 1, 1, 1), T(d.ItemType.String, 1, 1, 1), T(d.ItemTypeGroup.Needle, 1, 0)],
          skill: r.SkillType.Leatherworking,
          level: d.RecipeLevel.Simple,
          reputation: -100
      },
      disassemble: !0,
      flammable: !0,
      worth: 50,
      spawnOnWorldGen: {
          [s.BiomeType.Arid]: {
              [l.WorldZ.Overworld]: {
                  [y.TerrainType.SandstoneFlooring]: 1,
                  [y.TerrainType.ClayFlooring]: 1
              }
          }
      }
  }, g(d.ItemType.LeatherBelt, d.ItemTypeGroup.Equipment), t.itemDescriptions[d.ItemType.LeatherTunic] = {
      durability: 25,
      equip: r.EquipType.Chest,
      defense: new o.Defense(3, new o.Resistances(o.DamageType.Slashing, 1, o.DamageType.Fire, 1), new o.Vulnerabilities(o.DamageType.Piercing, 1)),
      recipe: {
          components: [T(d.ItemType.TannedLeather, 2, 2, 2), T(d.ItemType.String, 4, 4, 4), T(d.ItemTypeGroup.Needle, 1, 0)],
          skill: r.SkillType.Leatherworking,
          level: d.RecipeLevel.Advanced,
          reputation: -100
      },
      disassemble: !0,
      flammable: !0,
      worth: 75,
      spawnOnWorldGen: {
          [s.BiomeType.Arid]: {
              [l.WorldZ.Overworld]: {
                  [y.TerrainType.SandstoneFlooring]: 1,
                  [y.TerrainType.ClayFlooring]: 1
              }
          }
      }
  }, g(d.ItemType.LeatherTunic, d.ItemTypeGroup.Equipment), t.itemDescriptions[d.ItemType.LeatherBoots] = {
      durability: 25,
      equip: r.EquipType.Feet,
      defense: new o.Defense(2, new o.Resistances(o.DamageType.Slashing, 1, o.DamageType.Fire, 1), new o.Vulnerabilities(o.DamageType.Piercing, 1)),
      recipe: {
          components: [T(d.ItemType.TannedLeather, 2, 2, 2), T(d.ItemType.String, 2, 2, 2), T(d.ItemTypeGroup.Needle, 1, 0)],
          skill: r.SkillType.Leatherworking,
          level: d.RecipeLevel.Advanced,
          reputation: -100
      },
      disassemble: !0,
      flammable: !0,
      worth: 75,
      spawnOnWorldGen: {
          [s.BiomeType.Arid]: {
              [l.WorldZ.Overworld]: {
                  [y.TerrainType.SandstoneFlooring]: 1,
                  [y.TerrainType.ClayFlooring]: 1
              }
          }
      }
  }, g(d.ItemType.LeatherBoots, d.ItemTypeGroup.Equipment), t.itemDescriptions[d.ItemType.LeatherCap] = {
      durability: 25,
      equip: r.EquipType.Head,
      defense: new o.Defense(1, new o.Resistances(o.DamageType.Slashing, 1, o.DamageType.Fire, 1), new o.Vulnerabilities(o.DamageType.Piercing, 1)),
      recipe: {
          components: [T(d.ItemType.TannedLeather, 1, 1, 1), T(d.ItemType.String, 1, 1, 1), T(d.ItemTypeGroup.Needle, 1, 0)],
          skill: r.SkillType.Leatherworking,
          level: d.RecipeLevel.Intermediate,
          reputation: -100
      },
      disassemble: !0,
      flammable: !0,
      worth: 50,
      spawnOnWorldGen: {
          [s.BiomeType.Arid]: {
              [l.WorldZ.Overworld]: {
                  [y.TerrainType.SandstoneFlooring]: 1,
                  [y.TerrainType.ClayFlooring]: 1
              }
          }
      }
  }, g(d.ItemType.LeatherCap, d.ItemTypeGroup.Equipment), t.itemDescriptions[d.ItemType.LeatherGorget] = {
      durability: 25,
      equip: r.EquipType.Neck,
      defense: new o.Defense(1, new o.Resistances(o.DamageType.Slashing, 1, o.DamageType.Fire, 1), new o.Vulnerabilities(o.DamageType.Piercing, 1)),
      recipe: {
          components: [T(d.ItemType.TannedLeather, 1, 1, 1), T(d.ItemType.String, 1, 1, 1), T(d.ItemTypeGroup.Needle, 1, 0)],
          skill: r.SkillType.Leatherworking,
          level: d.RecipeLevel.Simple,
          reputation: -100
      },
      disassemble: !0,
      flammable: !0,
      worth: 50,
      spawnOnWorldGen: {
          [s.BiomeType.Arid]: {
              [l.WorldZ.Overworld]: {
                  [y.TerrainType.SandstoneFlooring]: 1,
                  [y.TerrainType.ClayFlooring]: 1
              }
          }
      }
  }, g(d.ItemType.LeatherGorget, d.ItemTypeGroup.Equipment), t.itemDescriptions[d.ItemType.LeatherPants] = {
      durability: 25,
      equip: r.EquipType.Legs,
      defense: new o.Defense(2, new o.Resistances(o.DamageType.Slashing, 1, o.DamageType.Fire, 1), new o.Vulnerabilities(o.DamageType.Piercing, 1)),
      recipe: {
          components: [T(d.ItemType.TannedLeather, 2, 2, 2), T(d.ItemType.String, 4, 4, 4), T(d.ItemTypeGroup.Needle, 1, 0)],
          skill: r.SkillType.Leatherworking,
          level: d.RecipeLevel.Advanced,
          reputation: -100
      },
      disassemble: !0,
      flammable: !0,
      worth: 75,
      spawnOnWorldGen: {
          [s.BiomeType.Arid]: {
              [l.WorldZ.Overworld]: {
                  [y.TerrainType.SandstoneFlooring]: 1,
                  [y.TerrainType.ClayFlooring]: 1
              }
          }
      }
  }, g(d.ItemType.LeatherPants, d.ItemTypeGroup.Equipment), t.itemDescriptions[d.ItemType.LeatherGloves] = {
      durability: 25,
      equip: r.EquipType.Hands,
      defense: new o.Defense(1, new o.Resistances(o.DamageType.Slashing, 1, o.DamageType.Fire, 1), new o.Vulnerabilities(o.DamageType.Piercing, 1)),
      recipe: {
          components: [T(d.ItemType.TannedLeather, 2, 2, 2), T(d.ItemType.String, 3, 3, 3), T(d.ItemTypeGroup.Needle, 1, 0)],
          skill: r.SkillType.Leatherworking,
          level: d.RecipeLevel.Expert,
          reputation: -100
      },
      disassemble: !0,
      flammable: !0,
      worth: 75,
      spawnOnWorldGen: {
          [s.BiomeType.Arid]: {
              [l.WorldZ.Overworld]: {
                  [y.TerrainType.SandstoneFlooring]: 1,
                  [y.TerrainType.ClayFlooring]: 1
              }
          }
      }
  }, g(d.ItemType.LeatherGloves, d.ItemTypeGroup.Equipment), t.itemDescriptions[d.ItemType.StoneFurnace] = {
      use: [i.ActionType.Build],
      recipe: {
          components: [T(d.ItemTypeGroup.Rock, 8, 8, 8)],
          skill: r.SkillType.Stonecrafting,
          level: d.RecipeLevel.Advanced,
          reputation: -25
      },
      disassemble: !0,
      durability: 25,
      onUse: {
          [i.ActionType.Build]: a.DoodadType.StoneFurnace
      },
      worth: 50,
      spawnOnMerchant: [s.BiomeType.Coastal, s.BiomeType.IceCap]
  }, g(d.ItemType.StoneFurnace, d.ItemTypeGroup.Heating, d.ItemTypeGroup.Furnace), t.itemDescriptions[d.ItemType.SandstoneKiln] = {
      use: [i.ActionType.Build],
      recipe: {
          components: [T(d.ItemType.Sandstone, 8, 8, 8)],
          skill: r.SkillType.Stonecrafting,
          level: d.RecipeLevel.Advanced,
          reputation: -25
      },
      disassemble: !0,
      durability: 15,
      onUse: {
          [i.ActionType.Build]: a.DoodadType.SandstoneKiln
      },
      worth: 50,
      spawnOnMerchant: [s.BiomeType.Arid]
  }, g(d.ItemType.SandstoneKiln, d.ItemTypeGroup.Heating, d.ItemTypeGroup.Kiln), t.itemDescriptions[d.ItemType.IronTongs] = {
      recipe: {
          components: [T(d.ItemType.TalcumPowder, 1, 1, 0, !0), T(d.ItemType.IronIngot, 3, 3, 3), T(d.ItemTypeGroup.SandCastFlask, 1, 0), T(d.ItemTypeGroup.Hammer, 1, 0), T(d.ItemTypeGroup.Tongs, 1, 0)],
          skill: r.SkillType.Blacksmithing,
          level: d.RecipeLevel.Intermediate,
          requiredDoodad: a.DoodadTypeGroup.Anvil,
          requiresFire: !0,
          reputation: -100
      },
      disassemble: !0,
      requiredForDisassembly: [d.ItemTypeGroup.Hammer, d.ItemTypeGroup.SandCastFlask],
      durability: 100,
      use: [i.ActionType.Grasp],
      worth: 250,
      tier: {
          [d.ItemTypeGroup.CookingEquipment]: 4,
          [d.ItemTypeGroup.Tongs]: 3
      },
      spawnOnMerchant: [s.BiomeType.IceCap, s.BiomeType.Arid]
  }, g(d.ItemType.IronTongs, d.ItemTypeGroup.Tongs, d.ItemTypeGroup.CookingEquipment), t.itemDescriptions[d.ItemType.Talc] = {
      weight: .8,
      worth: 25,
      spawnOnWorldGen: {
          [s.BiomeType.Coastal]: {
              [l.WorldZ.Cave]: {
                  [y.TerrainType.RockGround]: 1,
                  [y.TerrainType.Dirt]: 1,
                  [y.TerrainType.Gravel]: 1
              }
          }
      },
      spawnOnMerchant: [s.BiomeType.Coastal]
  }, t.itemDescriptions[d.ItemType.TalcumPowder] = {
      reducedWeight: .1,
      recipe: {
          components: [T(d.ItemType.Talc, 1, 1), T(d.ItemTypeGroup.MortarAndPestle, 1, 0)],
          skill: r.SkillType.Chemistry,
          level: d.RecipeLevel.Simple,
          reputation: -25
      },
      onBurn: [d.ItemType.None],
      worth: 25,
      spawnOnMerchant: [s.BiomeType.Coastal]
  }, g(d.ItemType.TalcumPowder, d.ItemTypeGroup.Powder), t.itemDescriptions[d.ItemType.WoodenSandCastFlask] = {
      recipe: {
          components: [T(d.ItemType.Log, 1, 1), T(d.ItemType.GreenSand, 1, 1), T(d.ItemTypeGroup.Sharpened, 1, 0)],
          skill: r.SkillType.Woodworking,
          level: d.RecipeLevel.Intermediate,
          reputation: -50
      },
      durability: 30,
      burnsLike: [d.ItemType.Log, d.ItemType.GreenSand],
      flammable: !0,
      worth: 35,
      tier: {
          [d.ItemTypeGroup.SandCastFlask]: 1
      },
      spawnOnMerchant: [s.BiomeType.Arid]
  }, g(d.ItemType.WoodenSandCastFlask, d.ItemTypeGroup.SandCastFlask), t.itemDescriptions[d.ItemType.Lens] = {
      durability: 45,
      use: [i.ActionType.StartFire],
      recipe: {
          components: [T(d.ItemType.RefinedSand, 1, 1), T(d.ItemType.LimestonePowder, 1, 1, 0, !0), T(d.ItemTypeGroup.Tongs, 1, 0)],
          skill: r.SkillType.Glassblowing,
          level: d.RecipeLevel.Advanced,
          requiredDoodad: a.DoodadTypeGroup.LitFurnace,
          reputation: -25
      },
      worth: 25,
      spawnOnMerchant: [s.BiomeType.Arid]
  }, g(d.ItemType.Lens, d.ItemTypeGroup.FireStarter), t.itemDescriptions[d.ItemType.PlantRoots] = {
      weight: .2,
      use: [i.ActionType.Eat],
      skillUse: r.SkillType.Botany,
      onBurn: [d.ItemType.PileOfAsh],
      onUse: {
          [i.ActionType.Eat]: [1, 3, 1, 0]
      },
      flammable: !0,
      worth: 5,
      tier: {
          [d.ItemTypeGroup.Medicinal]: 1,
          [d.ItemTypeGroup.Cordage]: 1
      },
      spawnOnWorldGen: {
          [s.BiomeType.Coastal]: {
              [l.WorldZ.Overworld]: {
                  [y.TerrainType.Dirt]: 1
              }
          }
      }
  }, g(d.ItemType.PlantRoots, d.ItemTypeGroup.Cordage, d.ItemTypeGroup.Medicinal), t.itemDescriptions[d.ItemType.LockPick] = {
      durability: 5,
      use: [i.ActionType.LockPick],
      recipe: {
          components: [T(d.ItemTypeGroup.Sharpened, 1, 0), T(d.ItemTypeGroup.Needle, 1, 1)],
          skill: r.SkillType.Tinkering,
          level: d.RecipeLevel.Intermediate,
          reputation: -50
      },
      onBurn: [d.ItemType.PileOfAsh],
      damageType: o.DamageType.Piercing,
      worth: 10,
      spawnOnWorldGen: {
          [s.BiomeType.Coastal]: {
              [l.WorldZ.Cave]: {
                  [y.TerrainType.CobblestoneFlooring]: 1,
                  [y.TerrainType.WoodenFlooring]: 1
              },
              [l.WorldZ.Overworld]: {
                  [y.TerrainType.CobblestoneFlooring]: 1,
                  [y.TerrainType.WoodenFlooring]: 1
              }
          }
      }
  }, t.itemDescriptions[d.ItemType.BoneNeedle] = {
      reducedWeight: .1,
      recipe: {
          components: [T(d.ItemType.SharpenedBone, 1, 1), T(d.ItemTypeGroup.Sharpened, 1, 0)],
          skill: r.SkillType.Tinkering,
          level: d.RecipeLevel.Intermediate,
          reputation: -25
      },
      durability: 10,
      onBurn: [d.ItemType.PileOfAsh],
      damageType: o.DamageType.Piercing,
      worth: 5,
      tier: {
          [d.ItemTypeGroup.Needle]: 2
      }
  }, g(d.ItemType.BoneNeedle, d.ItemTypeGroup.Needle), t.itemDescriptions[d.ItemType.Pineapple] = {
      weight: 1.3,
      use: [i.ActionType.Eat],
      skillUse: r.SkillType.Botany,
      decayMax: 8750,
      decaysInto: [d.ItemType.RottingVegetation, d.ItemType.RottingVegetation],
      returnOnUseAndDecay: {
          type: d.ItemType.PineappleSeeds
      },
      onBurn: [d.ItemType.PileOfAsh],
      onUse: {
          [i.ActionType.Eat]: [0, 10, 5, 3]
      },
      dismantle: {
          items: [{
              type: d.ItemType.PineappleSeeds,
              amount: 1
          }],
          skill: r.SkillType.Botany,
          required: d.ItemTypeGroup.Sharpened
      },
      worth: 10,
      spawnOnMerchant: [s.BiomeType.Arid]
  }, g(d.ItemType.Pineapple, d.ItemTypeGroup.Fruit), t.itemDescriptions[d.ItemType.TatteredMap] = {
      weight: .2,
      durability: 50,
      use: [i.ActionType.Decode],
      onBurn: [d.ItemType.PileOfAsh],
      repairable: !1,
      flammable: !0,
      worth: 75,
      dismantle: {
          items: [{
              type: d.ItemType.ShreddedPaper,
              amount: 1
          }]
      },
      spawnOnWorldGen: {
          [s.BiomeType.Coastal]: {
              [l.WorldZ.Cave]: {
                  [y.TerrainType.CobblestoneFlooring]: 1,
                  [y.TerrainType.WoodenFlooring]: 1,
                  [y.TerrainType.RockGround]: 1,
                  [y.TerrainType.Dirt]: 1,
                  [y.TerrainType.Gravel]: 1
              },
              [l.WorldZ.Overworld]: {
                  [y.TerrainType.CobblestoneFlooring]: 1,
                  [y.TerrainType.WoodenFlooring]: 1
              }
          }
      }
  }, t.itemDescriptions[d.ItemType.Coal] = {
      weight: .8,
      use: [i.ActionType.StokeFire],
      onBurn: [d.ItemType.PileOfAsh],
      onUse: {
          [i.ActionType.StokeFire]: 300
      },
      flammable: !0,
      worth: 15,
      tier: {
          [d.ItemTypeGroup.Carbon]: 2
      },
      spawnOnWorldGen: {
          [s.BiomeType.Coastal]: {
              [l.WorldZ.Cave]: {
                  [y.TerrainType.RockGround]: 1,
                  [y.TerrainType.Dirt]: 1,
                  [y.TerrainType.Gravel]: 1
              }
          }
      },
      spawnOnMerchant: [s.BiomeType.Coastal]
  }, g(d.ItemType.Coal, d.ItemTypeGroup.Carbon, d.ItemTypeGroup.Fuel), t.itemDescriptions[d.ItemType.WroughtIron] = {
      recipe: {
          components: [T(d.ItemType.IronOre, 1, 1), T(d.ItemTypeGroup.Hammer, 1, 0)],
          skill: r.SkillType.Blacksmithing,
          level: d.RecipeLevel.Intermediate,
          requiredDoodad: a.DoodadTypeGroup.LitFurnace,
          reputation: -50
      },
      worth: 30,
      spawnOnMerchant: [s.BiomeType.IceCap, s.BiomeType.Arid]
  }, t.itemDescriptions[d.ItemType.LimestonePowder] = {
      reducedWeight: .6,
      recipe: {
          components: [T(d.ItemType.Limestone, 1, 1), T(d.ItemTypeGroup.MortarAndPestle, 1, 0)],
          skill: r.SkillType.Chemistry,
          level: d.RecipeLevel.Simple,
          reputation: -25
      },
      onBurn: [d.ItemType.None],
      worth: 25,
      spawnOnMerchant: [s.BiomeType.Coastal]
  }, g(d.ItemType.LimestonePowder, d.ItemTypeGroup.Powder), t.itemDescriptions[d.ItemType.IronIngot] = {
      recipe: {
          components: [T(d.ItemType.TalcumPowder, 1, 1, 0, !0), T(d.ItemType.CarbonPowder, 1, 1, 0, !0), T(d.ItemType.LimestonePowder, 1, 1, 0, !0), T(d.ItemType.WroughtIron, 1, 1), T(d.ItemTypeGroup.SandCastFlask, 1, 0), T(d.ItemTypeGroup.Tongs, 1, 0)],
          skill: r.SkillType.Blacksmithing,
          level: d.RecipeLevel.Advanced,
          requiredDoodad: a.DoodadTypeGroup.LitFurnace,
          reputation: -100
      },
      worth: 50,
      spawnOnMerchant: [s.BiomeType.IceCap, s.BiomeType.Arid]
  }, t.itemDescriptions[d.ItemType.Backpack] = {
      durability: 15,
      weightCapacity: 50,
      use: [i.ActionType.OpenContainer],
      equip: r.EquipType.Back,
      defense: new o.Defense(1, new o.Resistances(o.DamageType.Slashing, 1, o.DamageType.Fire, 1), new o.Vulnerabilities(o.DamageType.Piercing, 1)),
      recipe: {
          components: [T(d.ItemType.TannedLeather, 2, 2, 2), T(d.ItemType.String, 2, 2, 2), T(d.ItemTypeGroup.Needle, 1, 0)],
          skill: r.SkillType.Leatherworking,
          level: d.RecipeLevel.Advanced,
          reputation: -50
      },
      flammable: !0,
      disassemble: !0,
      worth: 75,
      preservationChance: .3
  }, g(d.ItemType.Backpack, d.ItemTypeGroup.Equipment, d.ItemTypeGroup.Storage), t.itemDescriptions[d.ItemType.RottenMeat] = {
      weight: .5,
      use: [i.ActionType.Eat],
      decayMax: 4750,
      onBurn: [d.ItemType.PileOfAsh],
      onUse: {
          [i.ActionType.Eat]: [-10, -20, 1, -1]
      },
      skillUse: r.SkillType.Anatomy,
      worth: 5,
      tier: {
          [d.ItemTypeGroup.Compost]: 1
      }
  }, g(d.ItemType.RottenMeat, d.ItemTypeGroup.Compost), t.itemDescriptions[d.ItemType.StoneHammer] = {
      durability: 15,
      equip: r.EquipType.Held,
      attack: 2,
      damageType: o.DamageType.Blunt,
      use: [i.ActionType.Repair, i.ActionType.Gather, i.ActionType.Melee],
      recipe: {
          components: [T(d.ItemType.String, 1, 1, 1), T(d.ItemTypeGroup.Rock, 1, 1, 1), T(d.ItemTypeGroup.Pole, 1, 1, 1)],
          skill: r.SkillType.Tinkering,
          level: d.RecipeLevel.Intermediate,
          reputation: -50
      },
      disassemble: !0,
      flammable: !0,
      worth: 20,
      tier: {
          [d.ItemTypeGroup.Hammer]: 1
      },
      spawnOnMerchant: [s.BiomeType.Coastal, s.BiomeType.IceCap]
  }, g(d.ItemType.StoneHammer, d.ItemTypeGroup.Hammer, d.ItemTypeGroup.Repairing, d.ItemTypeGroup.Weapon, d.ItemTypeGroup.Tool), t.itemDescriptions[d.ItemType.RawChicken] = {
      weight: 1.2,
      use: [i.ActionType.Eat],
      decayMax: 2250,
      decaysInto: [d.ItemType.RottenMeat],
      onBurn: [d.ItemType.CookedChicken],
      onUse: {
          [i.ActionType.Eat]: [-10, -10, 6, -1]
      },
      skillUse: r.SkillType.Anatomy,
      worth: 5,
      tier: {
          [d.ItemTypeGroup.Meat]: 2
      },
      returnOnUseAndDecay: {
          type: d.ItemType.BoneFragments
      },
      spawnOnMerchant: [s.BiomeType.Coastal, s.BiomeType.Arid]
  }, g(d.ItemType.RawChicken, d.ItemTypeGroup.Meat, d.ItemTypeGroup.RawMeat), t.itemDescriptions[d.ItemType.CookedChicken] = {
      use: [i.ActionType.Eat],
      decayMax: 3250,
      decaysInto: [d.ItemType.RottenMeat],
      recipe: {
          components: [T(d.ItemType.RawChicken, 1, 1), T(d.ItemTypeGroup.CookingEquipment, 1, 0)],
          skill: r.SkillType.Cooking,
          level: d.RecipeLevel.Advanced,
          requiresFire: !0,
          reputation: 25
      },
      onBurn: [d.ItemType.PileOfAsh],
      onUse: {
          [i.ActionType.Eat]: [5, 10, 8, -2]
      },
      skillUse: r.SkillType.Cooking,
      worth: 15,
      tier: {
          [d.ItemTypeGroup.Meat]: 3
      },
      returnOnUseAndDecay: {
          type: d.ItemType.BoneFragments
      },
      spawnOnMerchant: [s.BiomeType.Coastal, s.BiomeType.Arid]
  }, g(d.ItemType.CookedChicken, d.ItemTypeGroup.Meat, d.ItemTypeGroup.CookedMeat, d.ItemTypeGroup.CookedFood), t.itemDescriptions[d.ItemType.StoneAnvil] = {
      use: [i.ActionType.Build],
      recipe: {
          components: [T(d.ItemType.Log, 1, 1, 1), T(d.ItemTypeGroup.Sharpened, 1, 0), T(d.ItemTypeGroup.Rock, 3, 3, 3)],
          skill: r.SkillType.Stonecrafting,
          level: d.RecipeLevel.Intermediate,
          reputation: -50
      },
      disassemble: !0,
      durability: 15,
      onUse: {
          [i.ActionType.Build]: a.DoodadType.StoneAnvil
      },
      worth: 25,
      spawnOnMerchant: [s.BiomeType.Coastal, s.BiomeType.IceCap]
  }, g(d.ItemType.StoneAnvil, d.ItemTypeGroup.Anvil), t.itemDescriptions[d.ItemType.WoodenChest] = {
      use: [i.ActionType.Build],
      recipe: {
          components: [T(d.ItemType.Log, 3, 3), T(d.ItemType.WoodenDowels, 2, 2), T(d.ItemTypeGroup.Sharpened, 1, 0)],
          skill: r.SkillType.Woodworking,
          level: d.RecipeLevel.Intermediate,
          reputation: 25
      },
      durability: 10,
      doodadContainer: a.DoodadType.WoodenChest,
      onUse: {
          [i.ActionType.Build]: a.DoodadType.WoodenChest
      },
      flammable: !0,
      worth: 50,
      burnsLike: [d.ItemType.Log, d.ItemType.Log, d.ItemType.Log, d.ItemType.WoodenDowels, d.ItemType.WoodenDowels]
  }, g(d.ItemType.WoodenChest, d.ItemTypeGroup.Storage), t.itemDescriptions[d.ItemType.IronSword] = {
      durability: 200,
      use: [i.ActionType.Carve, i.ActionType.Gather, i.ActionType.Melee],
      equip: r.EquipType.Held,
      attack: 9,
      damageType: o.DamageType.Piercing | o.DamageType.Slashing,
      recipe: {
          components: [T(d.ItemType.TalcumPowder, 1, 1, 0, !0), T(d.ItemType.IronIngot, 8, 8, 8), T(d.ItemTypeGroup.SandCastFlask, 1, 0), T(d.ItemTypeGroup.Hammer, 1, 0), T(d.ItemTypeGroup.Tongs, 1, 0)],
          skill: r.SkillType.Blacksmithing,
          level: d.RecipeLevel.Expert,
          requiredDoodad: a.DoodadTypeGroup.Anvil,
          requiresFire: !0,
          reputation: -1500
      },
      disassemble: !0,
      requiredForDisassembly: [d.ItemTypeGroup.Hammer, d.ItemTypeGroup.SandCastFlask],
      worth: 500,
      tier: {
          [d.ItemTypeGroup.Sharpened]: 4
      },
      spawnOnMerchant: [s.BiomeType.IceCap, s.BiomeType.Arid]
  }, g(d.ItemType.IronSword, d.ItemTypeGroup.Sharpened, d.ItemTypeGroup.Weapon), t.itemDescriptions[d.ItemType.IronBreastplate] = {
      durability: 200,
      equip: r.EquipType.Chest,
      defense: new o.Defense(5, new o.Resistances(o.DamageType.Slashing, 1, o.DamageType.Blunt, 1, o.DamageType.Piercing, 1), new o.Vulnerabilities),
      recipe: {
          components: [T(d.ItemType.IronIngot, 12, 12, 12), T(d.ItemTypeGroup.Hammer, 1, 0), T(d.ItemTypeGroup.Tongs, 1, 0)],
          skill: r.SkillType.Blacksmithing,
          level: d.RecipeLevel.Expert,
          requiredDoodad: a.DoodadTypeGroup.Anvil,
          requiresFire: !0,
          reputation: -1e3
      },
      disassemble: !0,
      requiredForDisassembly: [d.ItemTypeGroup.Hammer, d.ItemTypeGroup.SandCastFlask],
      worth: 750,
      spawnOnMerchant: [s.BiomeType.IceCap, s.BiomeType.Arid]
  }, g(d.ItemType.IronBreastplate, d.ItemTypeGroup.Equipment), t.itemDescriptions[d.ItemType.IronBoots] = {
      durability: 200,
      equip: r.EquipType.Feet,
      defense: new o.Defense(4, new o.Resistances(o.DamageType.Slashing, 1, o.DamageType.Blunt, 1, o.DamageType.Piercing, 1), new o.Vulnerabilities),
      recipe: {
          components: [T(d.ItemType.IronIngot, 12, 12, 12), T(d.ItemTypeGroup.Hammer, 1, 0), T(d.ItemTypeGroup.Tongs, 1, 0)],
          skill: r.SkillType.Blacksmithing,
          level: d.RecipeLevel.Expert,
          requiredDoodad: a.DoodadTypeGroup.Anvil,
          requiresFire: !0,
          reputation: -1e3
      },
      disassemble: !0,
      requiredForDisassembly: [d.ItemTypeGroup.Hammer, d.ItemTypeGroup.SandCastFlask],
      worth: 750,
      spawnOnMerchant: [s.BiomeType.IceCap, s.BiomeType.Arid]
  }, g(d.ItemType.IronBoots, d.ItemTypeGroup.Equipment), t.itemDescriptions[d.ItemType.IronHelmet] = {
      durability: 200,
      equip: r.EquipType.Head,
      defense: new o.Defense(4, new o.Resistances(o.DamageType.Slashing, 1, o.DamageType.Blunt, 1, o.DamageType.Piercing, 1), new o.Vulnerabilities),
      recipe: {
          components: [T(d.ItemType.IronIngot, 8, 8, 8), T(d.ItemTypeGroup.Hammer, 1, 0), T(d.ItemTypeGroup.Tongs, 1, 0)],
          skill: r.SkillType.Blacksmithing,
          level: d.RecipeLevel.Expert,
          requiredDoodad: a.DoodadTypeGroup.Anvil,
          requiresFire: !0,
          reputation: -1e3
      },
      disassemble: !0,
      requiredForDisassembly: [d.ItemTypeGroup.Hammer, d.ItemTypeGroup.SandCastFlask],
      worth: 500,
      spawnOnMerchant: [s.BiomeType.IceCap, s.BiomeType.Arid]
  }, g(d.ItemType.IronHelmet, d.ItemTypeGroup.Equipment), t.itemDescriptions[d.ItemType.IronGorget] = {
      durability: 200,
      equip: r.EquipType.Neck,
      defense: new o.Defense(3, new o.Resistances(o.DamageType.Slashing, 1, o.DamageType.Blunt, 1, o.DamageType.Piercing, 1), new o.Vulnerabilities),
      recipe: {
          components: [T(d.ItemType.IronIngot, 6, 6, 6), T(d.ItemTypeGroup.Hammer, 1, 0), T(d.ItemTypeGroup.Tongs, 1, 0)],
          skill: r.SkillType.Blacksmithing,
          level: d.RecipeLevel.Advanced,
          requiredDoodad: a.DoodadTypeGroup.Anvil,
          requiresFire: !0,
          reputation: -1e3
      },
      disassemble: !0,
      requiredForDisassembly: [d.ItemTypeGroup.Hammer, d.ItemTypeGroup.SandCastFlask],
      worth: 500,
      spawnOnMerchant: [s.BiomeType.IceCap, s.BiomeType.Arid]
  }, g(d.ItemType.IronGorget, d.ItemTypeGroup.Equipment), t.itemDescriptions[d.ItemType.IronGreaves] = {
      durability: 200,
      equip: r.EquipType.Legs,
      defense: new o.Defense(5, new o.Resistances(o.DamageType.Slashing, 1, o.DamageType.Blunt, 1, o.DamageType.Piercing, 1), new o.Vulnerabilities),
      recipe: {
          components: [T(d.ItemType.IronIngot, 10, 10, 10), T(d.ItemTypeGroup.Hammer, 1, 0), T(d.ItemTypeGroup.Tongs, 1, 0)],
          skill: r.SkillType.Blacksmithing,
          level: d.RecipeLevel.Expert,
          requiredDoodad: a.DoodadTypeGroup.Anvil,
          requiresFire: !0,
          reputation: -1e3
      },
      disassemble: !0,
      requiredForDisassembly: [d.ItemTypeGroup.Hammer, d.ItemTypeGroup.SandCastFlask],
      worth: 500,
      spawnOnMerchant: [s.BiomeType.IceCap, s.BiomeType.Arid]
  }, g(d.ItemType.IronGreaves, d.ItemTypeGroup.Equipment), t.itemDescriptions[d.ItemType.IronGauntlets] = {
      durability: 200,
      equip: r.EquipType.Hands,
      defense: new o.Defense(3, new o.Resistances(o.DamageType.Slashing, 1, o.DamageType.Blunt, 1, o.DamageType.Piercing, 1), new o.Vulnerabilities),
      recipe: {
          components: [T(d.ItemType.IronIngot, 8, 8, 8), T(d.ItemTypeGroup.Hammer, 1, 0), T(d.ItemTypeGroup.Tongs, 1, 0)],
          skill: r.SkillType.Blacksmithing,
          level: d.RecipeLevel.Expert,
          requiredDoodad: a.DoodadTypeGroup.Anvil,
          requiresFire: !0,
          reputation: -1e3
      },
      disassemble: !0,
      requiredForDisassembly: [d.ItemTypeGroup.Hammer, d.ItemTypeGroup.SandCastFlask],
      worth: 500,
      spawnOnMerchant: [s.BiomeType.IceCap, s.BiomeType.Arid]
  }, g(d.ItemType.IronGauntlets, d.ItemTypeGroup.Equipment), t.itemDescriptions[d.ItemType.IronShield] = {
      durability: 200,
      equip: r.EquipType.Held,
      use: [i.ActionType.Melee],
      defense: new o.Defense(4, new o.Resistances(o.DamageType.Slashing, 1, o.DamageType.Blunt, 1, o.DamageType.Piercing, 1), new o.Vulnerabilities),
      recipe: {
          components: [T(d.ItemType.IronIngot, 12, 12, 12), T(d.ItemTypeGroup.Hammer, 1, 0), T(d.ItemTypeGroup.Tongs, 1, 0)],
          skill: r.SkillType.Blacksmithing,
          level: d.RecipeLevel.Expert,
          requiredDoodad: a.DoodadTypeGroup.Anvil,
          requiresFire: !0,
          reputation: -1e3
      },
      disassemble: !0,
      requiredForDisassembly: [d.ItemTypeGroup.Hammer, d.ItemTypeGroup.SandCastFlask],
      worth: 750,
      attack: 4,
      damageType: o.DamageType.Blunt,
      spawnOnMerchant: [s.BiomeType.IceCap, s.BiomeType.Arid]
  }, g(d.ItemType.IronShield, d.ItemTypeGroup.Equipment), t.itemDescriptions[d.ItemType.SandstoneWall] = {
      use: [i.ActionType.Build],
      recipe: {
          components: [T(d.ItemType.Sandstone, 8, 8, 8)],
          skill: r.SkillType.Stonecrafting,
          level: d.RecipeLevel.Advanced,
          reputation: 25
      },
      disassemble: !0,
      durability: 15,
      onUse: {
          [i.ActionType.Build]: a.DoodadType.SandstoneWall
      },
      worth: 50,
      spawnOnMerchant: [s.BiomeType.Arid]
  }, g(d.ItemType.SandstoneWall, d.ItemTypeGroup.Housing), t.itemDescriptions[d.ItemType.SandstoneFlooring] = {
      use: [i.ActionType.SetDown],
      recipe: {
          components: [T(d.ItemType.Sandstone, 5, 5, 5)],
          skill: r.SkillType.Stonecrafting,
          level: d.RecipeLevel.Intermediate,
          reputation: 25
      },
      disassemble: !0,
      durability: 15,
      onUse: {
          [i.ActionType.SetDown]: y.TerrainType.SandstoneFlooring
      },
      worth: 25,
      spawnOnMerchant: [s.BiomeType.Arid]
  }, g(d.ItemType.SandstoneFlooring, d.ItemTypeGroup.Housing), t.itemDescriptions[d.ItemType.SpiderSilk] = {
      weight: .1,
      onBurn: [d.ItemType.None],
      flammable: !0,
      worth: 5,
      tier: {
          [d.ItemTypeGroup.Cordage]: 2
      },
      spawnOnMerchant: [s.BiomeType.Coastal, s.BiomeType.Arid]
  }, g(d.ItemType.SpiderSilk, d.ItemTypeGroup.Cordage), t.itemDescriptions[d.ItemType.AnimalFat] = {
      weight: .8,
      use: [i.ActionType.Eat],
      decayMax: 4750,
      onBurn: [d.ItemType.PileOfAsh],
      onUse: {
          [i.ActionType.Eat]: [0, -6, 2, -1]
      },
      skillUse: r.SkillType.Anatomy,
      worth: 5,
      flammable: !0
  }, t.itemDescriptions[d.ItemType.TallowTorch] = {
      durability: 25,
      equip: r.EquipType.Held,
      attack: 2,
      damageType: o.DamageType.Blunt,
      use: [i.ActionType.Ignite, i.ActionType.Build, i.ActionType.Melee],
      lit: d.ItemType.LitTallowTorch,
      recipe: {
          components: [T(d.ItemType.Tallow, 1, 1), T(d.ItemTypeGroup.Pole, 1, 1), T(d.ItemTypeGroup.Fabric, 1, 1)],
          skill: r.SkillType.Tinkering,
          level: d.RecipeLevel.Advanced,
          reputation: 25
      },
      onUse: {
          [i.ActionType.Build]: a.DoodadType.TallowTorchStand
      },
      onBurn: [d.ItemType.PileOfAsh, d.ItemType.PileOfAsh, d.ItemType.PileOfAsh, d.ItemType.PileOfAsh, d.ItemType.PileOfAsh, d.ItemType.PileOfAsh, d.ItemType.PileOfAsh, d.ItemType.PileOfAsh, d.ItemType.PileOfAsh, d.ItemType.PileOfAsh],
      flammable: !0,
      worth: 50
  }, g(d.ItemType.TallowTorch, d.ItemTypeGroup.LightDevice, d.ItemTypeGroup.Weapon), t.itemDescriptions[d.ItemType.ClayFlakes] = {
      reducedWeight: 1,
      recipe: {
          components: [T(d.ItemType.RawClay, 1, 1), T(d.ItemTypeGroup.Sharpened, 1, 0)],
          skill: r.SkillType.Claythrowing,
          level: d.RecipeLevel.Simple,
          reputation: -25
      },
      onBurn: [d.ItemType.PileOfAsh],
      worth: 5,
      spawnOnMerchant: [s.BiomeType.Arid]
  }, t.itemDescriptions[d.ItemType.GreenSand] = {
      recipe: {
          components: [T(d.ItemType.ClayFlakes, 1, 1), T(d.ItemType.RefinedSand, 2, 2)],
          skill: r.SkillType.Chemistry,
          level: d.RecipeLevel.Simple,
          reputation: -25
      },
      worth: 10,
      spawnOnMerchant: [s.BiomeType.Arid]
  }, t.itemDescriptions[d.ItemType.OldInstructionalScroll] = {
      weight: .2,
      use: [i.ActionType.Learn],
      onBurn: [d.ItemType.PileOfAsh],
      flammable: !0,
      worth: 75,
      dismantle: {
          items: [{
              type: d.ItemType.ShreddedPaper,
              amount: 1
          }]
      },
      spawnOnWorldGen: {
          [s.BiomeType.Coastal]: {
              [l.WorldZ.Cave]: {
                  [y.TerrainType.CobblestoneFlooring]: 1,
                  [y.TerrainType.WoodenFlooring]: 1,
                  [y.TerrainType.RockGround]: 1,
                  [y.TerrainType.Dirt]: 1,
                  [y.TerrainType.Gravel]: 1
              },
              [l.WorldZ.Overworld]: {
                  [y.TerrainType.CobblestoneFlooring]: 1,
                  [y.TerrainType.WoodenFlooring]: 1
              }
          }
      }
  }, t.itemDescriptions[d.ItemType.SlimeGelatin] = {
      weight: .5,
      use: [i.ActionType.Eat, i.ActionType.Preserve],
      decayMax: 4750,
      onBurn: [d.ItemType.None],
      onUse: {
          [i.ActionType.Eat]: [-1, -2, 2, -1]
      },
      skillUse: r.SkillType.Chemistry,
      worth: 5,
      spawnOnMerchant: [s.BiomeType.Coastal, s.BiomeType.IceCap]
  }, g(d.ItemType.SlimeGelatin, d.ItemTypeGroup.Preservative), t.itemDescriptions[d.ItemType.SlimeGlue] = {
      use: [i.ActionType.Reinforce, i.ActionType.Eat],
      recipe: {
          components: [T(d.ItemType.SlimeGelatin, 1, 1), T(d.ItemTypeGroup.Liquid, 1, 1, 0, !0)],
          skill: r.SkillType.Chemistry,
          level: d.RecipeLevel.Intermediate,
          requiresFire: !0,
          reputation: -25
      },
      decayMax: 750,
      onBurn: [d.ItemType.None],
      onUse: {
          [i.ActionType.Eat]: [-1, -2, 1, 0]
      },
      skillUse: r.SkillType.Chemistry,
      worth: 10,
      tier: {
          [d.ItemTypeGroup.Glue]: 2
      },
      spawnOnMerchant: [s.BiomeType.Coastal, s.BiomeType.IceCap]
  }, g(d.ItemType.SlimeGlue, d.ItemTypeGroup.Reinforcement, d.ItemTypeGroup.Glue), t.itemDescriptions[d.ItemType.CookedSpiderMeat] = {
      use: [i.ActionType.Eat],
      recipe: {
          components: [T(d.ItemType.SpiderMeat, 1, 1), T(d.ItemTypeGroup.CookingEquipment, 1, 0)],
          skill: r.SkillType.Cooking,
          level: d.RecipeLevel.Intermediate,
          requiresFire: !0,
          reputation: 25
      },
      decayMax: 5750,
      decaysInto: [d.ItemType.RottenMeat],
      onBurn: [d.ItemType.PileOfAsh],
      onUse: {
          [i.ActionType.Eat]: [3, 10, 2, 0]
      },
      skillUse: r.SkillType.Cooking,
      worth: 10,
      spawnOnMerchant: [s.BiomeType.Coastal, s.BiomeType.IceCap]
  }, g(d.ItemType.CookedSpiderMeat, d.ItemTypeGroup.Meat, d.ItemTypeGroup.CookedMeat, d.ItemTypeGroup.CookedFood), t.itemDescriptions[d.ItemType.SpiderMeat] = {
      weight: .5,
      use: [i.ActionType.Eat],
      decayMax: 4750,
      decaysInto: [d.ItemType.RottenMeat],
      onBurn: [d.ItemType.CookedSpiderMeat],
      onUse: {
          [i.ActionType.Eat]: [-1, -2, 2, -1]
      },
      skillUse: r.SkillType.Anatomy,
      worth: 5,
      spawnOnMerchant: [s.BiomeType.Coastal, s.BiomeType.IceCap]
  }, g(d.ItemType.SpiderMeat, d.ItemTypeGroup.Meat, d.ItemTypeGroup.Bait, d.ItemTypeGroup.RawMeat), t.itemDescriptions[d.ItemType.IronLockPick] = {
      durability: 80,
      use: [i.ActionType.LockPick],
      recipe: {
          components: [T(d.ItemType.TalcumPowder, 1, 1, 0, !0), T(d.ItemType.IronIngot, 1, 1, 1), T(d.ItemTypeGroup.SandCastFlask, 1, 0), T(d.ItemTypeGroup.Hammer, 1, 0), T(d.ItemTypeGroup.Tongs, 1, 0)],
          skill: r.SkillType.Blacksmithing,
          level: d.RecipeLevel.Intermediate,
          requiredDoodad: a.DoodadTypeGroup.Anvil,
          requiresFire: !0,
          reputation: -250
      },
      disassemble: !0,
      requiredForDisassembly: [d.ItemTypeGroup.Hammer, d.ItemTypeGroup.SandCastFlask],
      damageType: o.DamageType.Piercing,
      worth: 75,
      spawnOnMerchant: [s.BiomeType.IceCap, s.BiomeType.Arid]
  }, t.itemDescriptions[d.ItemType.RottingVegetation] = {
      weight: .3,
      use: [i.ActionType.Eat],
      decayMax: 4750,
      onBurn: [d.ItemType.PileOfAsh],
      onUse: {
          [i.ActionType.Eat]: [-10, -15, 1, -1]
      },
      skillUse: r.SkillType.Anatomy,
      worth: 5,
      tier: {
          [d.ItemTypeGroup.Compost]: 2
      },
      spawnOnWorldGen: {
          [s.BiomeType.Coastal]: {
              [l.WorldZ.Overworld]: {
                  [y.TerrainType.Swamp]: 1
              }
          }
      }
  }, g(d.ItemType.RottingVegetation, d.ItemTypeGroup.Compost), t.itemDescriptions[d.ItemType.Chives] = {
      weight: .4,
      use: [i.ActionType.Eat],
      skillUse: r.SkillType.Botany,
      decayMax: 14e3,
      decaysInto: [d.ItemType.RottingVegetation],
      onBurn: [d.ItemType.PileOfAsh],
      onUse: {
          [i.ActionType.Eat]: [4, 6, 3, 0]
      },
      worth: 10,
      spawnOnMerchant: [s.BiomeType.Coastal]
  }, g(d.ItemType.Chives, d.ItemTypeGroup.Vegetable), t.itemDescriptions[d.ItemType.IronHammer] = {
      durability: 120,
      attack: 5,
      damageType: o.DamageType.Blunt,
      equip: r.EquipType.Held,
      use: [i.ActionType.Repair, i.ActionType.Gather, i.ActionType.Melee],
      recipe: {
          components: [T(d.ItemType.TalcumPowder, 1, 1, 0, !0), T(d.ItemType.IronIngot, 3, 3, 3), T(d.ItemTypeGroup.SandCastFlask, 1, 0), T(d.ItemTypeGroup.Pole, 1, 1, 1), T(d.ItemTypeGroup.Hammer, 1, 0), T(d.ItemTypeGroup.Tongs, 1, 0)],
          skill: r.SkillType.Blacksmithing,
          level: d.RecipeLevel.Advanced,
          requiredDoodad: a.DoodadTypeGroup.Anvil,
          requiresFire: !0,
          reputation: -250
      },
      disassemble: !0,
      requiredForDisassembly: [d.ItemTypeGroup.Hammer, d.ItemTypeGroup.SandCastFlask],
      worth: 250,
      tier: {
          [d.ItemTypeGroup.Hammer]: 3
      },
      spawnOnMerchant: [s.BiomeType.IceCap, s.BiomeType.Arid]
  }, g(d.ItemType.IronHammer, d.ItemTypeGroup.Hammer, d.ItemTypeGroup.Repairing, d.ItemTypeGroup.Weapon, d.ItemTypeGroup.Tool), t.itemDescriptions[d.ItemType.IronSpear] = {
      durability: 200,
      equip: r.EquipType.Held,
      attack: 7,
      damageType: o.DamageType.Piercing,
      recipe: {
          components: [T(d.ItemType.TalcumPowder, 1, 1, 0, !0), T(d.ItemType.IronIngot, 2, 2, 2), T(d.ItemTypeGroup.SandCastFlask, 1, 0), T(d.ItemTypeGroup.Pole, 1, 1, 1), T(d.ItemTypeGroup.Hammer, 1, 0), T(d.ItemTypeGroup.Tongs, 1, 0)],
          skill: r.SkillType.Blacksmithing,
          level: d.RecipeLevel.Advanced,
          requiredDoodad: a.DoodadTypeGroup.Anvil,
          requiresFire: !0,
          reputation: -1e3
      },
      disassemble: !0,
      requiredForDisassembly: [d.ItemTypeGroup.Hammer, d.ItemTypeGroup.SandCastFlask],
      use: [i.ActionType.Gather, i.ActionType.Melee],
      worth: 250,
      tier: {
          [d.ItemTypeGroup.CookingEquipment]: 3
      },
      spawnOnMerchant: [s.BiomeType.IceCap, s.BiomeType.Arid]
  }, g(d.ItemType.IronSpear, d.ItemTypeGroup.Weapon, d.ItemTypeGroup.CookingEquipment), t.itemDescriptions[d.ItemType.IronShovel] = {
      durability: 400,
      equip: r.EquipType.Held,
      attack: 5,
      damageType: o.DamageType.Slashing,
      use: [i.ActionType.Dig, i.ActionType.Gather, i.ActionType.GatherTreasure, i.ActionType.Harvest, i.ActionType.Melee],
      recipe: {
          components: [T(d.ItemType.String, 2, 2, 2), T(d.ItemType.TalcumPowder, 1, 1, 0, !0), T(d.ItemType.IronIngot, 3, 3, 3), T(d.ItemTypeGroup.SandCastFlask, 1, 0), T(d.ItemTypeGroup.Pole, 1, 1, 1), T(d.ItemTypeGroup.Hammer, 1, 0), T(d.ItemTypeGroup.Tongs, 1, 0)],
          skill: r.SkillType.Blacksmithing,
          level: d.RecipeLevel.Advanced,
          requiredDoodad: a.DoodadTypeGroup.Anvil,
          requiresFire: !0,
          reputation: -250
      },
      disassemble: !0,
      requiredForDisassembly: [d.ItemTypeGroup.Hammer, d.ItemTypeGroup.SandCastFlask],
      worth: 250,
      spawnOnMerchant: [s.BiomeType.IceCap, s.BiomeType.Arid]
  }, g(d.ItemType.IronShovel, d.ItemTypeGroup.Tool, d.ItemTypeGroup.Weapon), t.itemDescriptions[d.ItemType.IronDoubleAxe] = {
      durability: 400,
      equip: r.EquipType.Held,
      attack: 8,
      damageType: o.DamageType.Slashing,
      use: [i.ActionType.Carve, i.ActionType.Gather, i.ActionType.Harvest, i.ActionType.Melee],
      recipe: {
          components: [T(d.ItemType.TalcumPowder, 1, 1, 0, !0), T(d.ItemType.IronIngot, 8, 8, 8), T(d.ItemTypeGroup.SandCastFlask, 1, 0), T(d.ItemTypeGroup.Pole, 1, 1, 1), T(d.ItemTypeGroup.Hammer, 1, 0), T(d.ItemTypeGroup.Tongs, 1, 0)],
          skill: r.SkillType.Blacksmithing,
          level: d.RecipeLevel.Advanced,
          requiredDoodad: a.DoodadTypeGroup.Anvil,
          requiresFire: !0,
          reputation: -1500
      },
      disassemble: !0,
      requiredForDisassembly: [d.ItemTypeGroup.Hammer, d.ItemTypeGroup.SandCastFlask],
      worth: 500,
      tier: {
          [d.ItemTypeGroup.Sharpened]: 4
      },
      spawnOnMerchant: [s.BiomeType.IceCap, s.BiomeType.Arid]
  }, g(d.ItemType.IronDoubleAxe, d.ItemTypeGroup.Sharpened, d.ItemTypeGroup.Weapon, d.ItemTypeGroup.Tool), t.itemDescriptions[d.ItemType.IronPickaxe] = {
      durability: 400,
      equip: r.EquipType.Held,
      attack: 5,
      damageType: o.DamageType.Blunt | o.DamageType.Piercing,
      recipe: {
          components: [T(d.ItemType.TalcumPowder, 1, 1, 0, !0), T(d.ItemType.IronIngot, 6, 6, 6), T(d.ItemTypeGroup.SandCastFlask, 1, 0), T(d.ItemTypeGroup.Pole, 1, 1, 1), T(d.ItemTypeGroup.Hammer, 1, 0), T(d.ItemTypeGroup.Tongs, 1, 0)],
          skill: r.SkillType.Blacksmithing,
          level: d.RecipeLevel.Advanced,
          requiredDoodad: a.DoodadTypeGroup.Anvil,
          requiresFire: !0,
          reputation: -500
      },
      disassemble: !0,
      requiredForDisassembly: [d.ItemTypeGroup.Hammer, d.ItemTypeGroup.SandCastFlask],
      use: [i.ActionType.Gather, i.ActionType.Melee],
      worth: 250,
      spawnOnMerchant: [s.BiomeType.IceCap, s.BiomeType.Arid]
  }, g(d.ItemType.IronPickaxe, d.ItemTypeGroup.Weapon, d.ItemTypeGroup.Tool), t.itemDescriptions[d.ItemType.Inkstick] = {
      recipe: {
          components: [T(d.ItemType.CarbonPowder, 2, 2), T(d.ItemTypeGroup.Glue, 1, 1), T(d.ItemTypeGroup.Liquid, 1, 1, 0, !0)],
          skill: r.SkillType.Chemistry,
          level: d.RecipeLevel.Advanced,
          reputation: 25
      },
      durability: 10,
      onBurn: [d.ItemType.PileOfAsh],
      worth: 30
  }, t.itemDescriptions[d.ItemType.Coconut] = {
      weight: 1.6,
      use: [i.ActionType.Plant],
      skillUse: r.SkillType.Botany,
      decayMax: 8750,
      decaysInto: [d.ItemType.RottingVegetation, d.ItemType.RottingVegetation],
      onBurn: [d.ItemType.PileOfAsh, d.ItemType.PileOfAsh],
      onUse: {
          [i.ActionType.Plant]: a.DoodadType.CoconutTree
      },
      dismantle: {
          items: [{
              type: d.ItemType.CoconutHusk,
              amount: 1
          }, {
              type: d.ItemType.PeeledCoconut,
              amount: 1,
              transferDecay: !0
          }],
          skill: r.SkillType.Botany,
          required: d.ItemTypeGroup.Sharpened
      },
      worth: 25,
      spawnOnMerchant: [s.BiomeType.Arid]
  }, t.itemDescriptions[d.ItemType.PalmLeaf] = {
      weight: .3,
      onBurn: [d.ItemType.PileOfAsh],
      use: [i.ActionType.StokeFire],
      onUse: {
          [i.ActionType.StokeFire]: 80
      },
      worth: 5,
      flammable: !0,
      tier: {
          [d.ItemTypeGroup.Compost]: 2,
          [d.ItemTypeGroup.Cordage]: 1
      },
      spawnOnWorldGen: {
          [s.BiomeType.Arid]: {
              [l.WorldZ.Overworld]: {
                  [y.TerrainType.DesertSand]: 1
              }
          }
      },
      spawnOnMerchant: [s.BiomeType.Arid]
  }, g(d.ItemType.PalmLeaf, d.ItemTypeGroup.Cordage, d.ItemTypeGroup.Compost, d.ItemTypeGroup.Tinder), t.itemDescriptions[d.ItemType.Offal] = {
      weight: .8,
      use: [i.ActionType.Eat],
      decayMax: 750,
      decaysInto: [d.ItemType.RottenMeat],
      onBurn: [d.ItemType.PileOfAsh],
      onUse: {
          [i.ActionType.Eat]: [-2, -6, 3, -1]
      },
      skillUse: r.SkillType.Anatomy,
      worth: 5,
      tier: {
          [d.ItemTypeGroup.Meat]: 1,
          [d.ItemTypeGroup.Compost]: 1
      }
  }, g(d.ItemType.Offal, d.ItemTypeGroup.Compost, d.ItemTypeGroup.Meat, d.ItemTypeGroup.RawMeat), t.itemDescriptions[d.ItemType.BoneFragments] = {
      weight: .4,
      onBurn: [d.ItemType.PileOfAsh],
      dismantle: {
          items: [{
              type: d.ItemType.BoneNeedle,
              amount: 1
          }],
          required: d.ItemTypeGroup.Sharpened
      },
      damageType: o.DamageType.Piercing,
      worth: 5,
      tier: {
          [d.ItemTypeGroup.Bone]: 1
      },
      spawnOnWorldGen: {
          [s.BiomeType.Coastal]: {
              [l.WorldZ.Cave]: {
                  [y.TerrainType.RockGround]: 1,
                  [y.TerrainType.Dirt]: 1,
                  [y.TerrainType.Gravel]: 1
              },
              [l.WorldZ.Overworld]: {
                  [y.TerrainType.Dirt]: 1,
                  [y.TerrainType.Grass]: 1,
                  [y.TerrainType.Gravel]: 1
              }
          },
          [s.BiomeType.Arid]: {
              [l.WorldZ.Overworld]: {
                  [y.TerrainType.DesertSand]: 1
              }
          },
          [s.BiomeType.IceCap]: {
              [l.WorldZ.Cave]: {
                  [y.TerrainType.RockGround]: 1,
                  [y.TerrainType.Dirt]: 1
              },
              [l.WorldZ.Overworld]: {
                  [y.TerrainType.Dirt]: 1
              }
          }
      }
  }, g(d.ItemType.BoneFragments, d.ItemTypeGroup.Bone), t.itemDescriptions[d.ItemType.LitPoleTorch] = {
      inheritWeight: d.ItemType.Branch,
      durability: 10,
      equip: r.EquipType.Held,
      attack: 2,
      damageType: o.DamageType.Fire | o.DamageType.Blunt,
      use: [i.ActionType.StartFire, i.ActionType.Extinguish, i.ActionType.Build, i.ActionType.Melee],
      revert: d.ItemType.WoodenPole,
      equipEffect: [d.EquipEffect.LightSource, 1],
      decayMax: 250,
      decaysInto: [d.ItemType.Charcoal],
      burnsLike: [d.ItemType.WoodenPole],
      repairable: !1,
      onUse: {
          [i.ActionType.Build]: a.DoodadType.LitPoleTorchStand
      },
      flammable: !0
  }, g(d.ItemType.LitPoleTorch, d.ItemTypeGroup.LitTorch, d.ItemTypeGroup.FireSource, d.ItemTypeGroup.FireStarter, d.ItemTypeGroup.Weapon, d.ItemTypeGroup.Untradable), t.itemDescriptions[d.ItemType.Cotton] = {
      weight: .2,
      onBurn: [d.ItemType.PileOfAsh],
      flammable: !0,
      worth: 5,
      tier: {
          [d.ItemTypeGroup.Pulp]: 2
      }
  }, g(d.ItemType.Cotton, d.ItemTypeGroup.Pulp), t.itemDescriptions[d.ItemType.CottonSeeds] = {
      weight: .1,
      skillUse: r.SkillType.Botany,
      use: [i.ActionType.Plant, i.ActionType.Eat],
      onBurn: [d.ItemType.PileOfAsh],
      onUse: {
          [i.ActionType.Plant]: a.DoodadType.Cotton,
          [i.ActionType.Eat]: [1, 1, 1, -1]
      },
      flammable: !0,
      worth: 5,
      spawnOnMerchant: [s.BiomeType.Coastal]
  }, g(d.ItemType.CottonSeeds, d.ItemTypeGroup.Seed), t.itemDescriptions[d.ItemType.CottonFabric] = {
      recipe: {
          components: [T(d.ItemType.Cotton, 3, 3)],
          skill: r.SkillType.Tailoring,
          level: d.RecipeLevel.Intermediate,
          reputation: 25
      },
      onBurn: [d.ItemType.PileOfAsh, d.ItemType.PileOfAsh, d.ItemType.PileOfAsh],
      flammable: !0,
      worth: 20,
      tier: {
          [d.ItemTypeGroup.Fabric]: 2
      },
      spawnOnMerchant: [s.BiomeType.Coastal]
  }, g(d.ItemType.CottonFabric, d.ItemTypeGroup.Fabric), t.itemDescriptions[d.ItemType.BonePole] = {
      reducedWeight: .1,
      durability: 20,
      equip: r.EquipType.Held,
      attack: 2,
      damageType: o.DamageType.Blunt,
      recipe: {
          components: [T(d.ItemType.Bone, 1, 1), T(d.ItemTypeGroup.Sharpened, 1, 0)],
          skill: r.SkillType.Tinkering,
          level: d.RecipeLevel.Simple,
          reputation: -25
      },
      use: [i.ActionType.Gather, i.ActionType.Melee],
      onBurn: [d.ItemType.PileOfAsh],
      worth: 5,
      tier: {
          [d.ItemTypeGroup.CookingEquipment]: 1,
          [d.ItemTypeGroup.Pole]: 2,
          [d.ItemTypeGroup.Bone]: 2
      }
  }, g(d.ItemType.BonePole, d.ItemTypeGroup.Pole, d.ItemTypeGroup.Weapon, d.ItemTypeGroup.Bone, d.ItemTypeGroup.CookingEquipment), t.itemDescriptions[d.ItemType.Tourniquet] = {
      use: [i.ActionType.Heal, i.ActionType.HealOther],
      skillUse: r.SkillType.Anatomy,
      recipe: {
          components: [T(d.ItemType.String, 2, 2, 2), T(d.ItemTypeGroup.Pole, 1, 1, 1)],
          skill: r.SkillType.Tinkering,
          level: d.RecipeLevel.Intermediate,
          reputation: 25
      },
      disassemble: !0,
      onUse: {
          [i.ActionType.Heal]: [2, 0, 0, 0],
          [i.ActionType.HealOther]: 2
      },
      flammable: !0,
      worth: 15,
      canCureStatus: [o.StatusType.Bleeding]
  }, g(d.ItemType.Tourniquet, d.ItemTypeGroup.Health), t.itemDescriptions[d.ItemType.WroughtIronPickaxe] = {
      durability: 200,
      equip: r.EquipType.Held,
      attack: 4,
      damageType: o.DamageType.Blunt | o.DamageType.Piercing,
      recipe: {
          components: [T(d.ItemType.TalcumPowder, 1, 1, 0, !0), T(d.ItemType.WroughtIron, 6, 6, 6), T(d.ItemTypeGroup.SandCastFlask, 1, 0), T(d.ItemTypeGroup.Pole, 1, 1, 1), T(d.ItemTypeGroup.Hammer, 1, 0), T(d.ItemTypeGroup.Tongs, 1, 0)],
          skill: r.SkillType.Blacksmithing,
          level: d.RecipeLevel.Intermediate,
          requiredDoodad: a.DoodadTypeGroup.Anvil,
          requiresFire: !0,
          reputation: -250
      },
      disassemble: !0,
      requiredForDisassembly: [d.ItemTypeGroup.Hammer],
      use: [i.ActionType.Gather, i.ActionType.Melee],
      worth: 150
  }, g(d.ItemType.WroughtIronPickaxe, d.ItemTypeGroup.Weapon, d.ItemTypeGroup.Tool), t.itemDescriptions[d.ItemType.WroughtIronDoubleAxe] = {
      durability: 200,
      equip: r.EquipType.Held,
      attack: 7,
      damageType: o.DamageType.Slashing,
      use: [i.ActionType.Carve, i.ActionType.Gather, i.ActionType.Harvest, i.ActionType.Melee],
      recipe: {
          components: [T(d.ItemType.TalcumPowder, 1, 1, 0, !0), T(d.ItemType.WroughtIron, 8, 8, 8), T(d.ItemTypeGroup.SandCastFlask, 1, 0), T(d.ItemTypeGroup.Pole, 1, 1, 1), T(d.ItemTypeGroup.Hammer, 1, 0), T(d.ItemTypeGroup.Tongs, 1, 0)],
          skill: r.SkillType.Blacksmithing,
          level: d.RecipeLevel.Intermediate,
          requiredDoodad: a.DoodadTypeGroup.Anvil,
          requiresFire: !0,
          reputation: -750
      },
      disassemble: !0,
      requiredForDisassembly: [d.ItemTypeGroup.Hammer],
      worth: 300,
      tier: {
          [d.ItemTypeGroup.Sharpened]: 3
      }
  }, g(d.ItemType.WroughtIronDoubleAxe, d.ItemTypeGroup.Sharpened, d.ItemTypeGroup.Weapon, d.ItemTypeGroup.Tool), t.itemDescriptions[d.ItemType.WroughtIronShovel] = {
      durability: 200,
      equip: r.EquipType.Held,
      attack: 4,
      damageType: o.DamageType.Slashing,
      use: [i.ActionType.Dig, i.ActionType.Gather, i.ActionType.GatherTreasure, i.ActionType.Harvest, i.ActionType.Melee],
      recipe: {
          components: [T(d.ItemType.TalcumPowder, 1, 1, 0, !0), T(d.ItemType.String, 2, 2, 2), T(d.ItemType.WroughtIron, 3, 3, 3), T(d.ItemTypeGroup.SandCastFlask, 1, 0), T(d.ItemTypeGroup.Pole, 1, 1, 1), T(d.ItemTypeGroup.Hammer, 1, 0), T(d.ItemTypeGroup.Tongs, 1, 0)],
          skill: r.SkillType.Blacksmithing,
          level: d.RecipeLevel.Intermediate,
          requiredDoodad: a.DoodadTypeGroup.Anvil,
          requiresFire: !0,
          reputation: -175
      },
      disassemble: !0,
      requiredForDisassembly: [d.ItemTypeGroup.Hammer],
      worth: 150
  }, g(d.ItemType.WroughtIronShovel, d.ItemTypeGroup.Tool, d.ItemTypeGroup.Weapon), t.itemDescriptions[d.ItemType.WroughtIronSpear] = {
      durability: 100,
      equip: r.EquipType.Held,
      attack: 6,
      damageType: o.DamageType.Piercing,
      recipe: {
          components: [T(d.ItemType.TalcumPowder, 1, 1, 0, !0), T(d.ItemType.WroughtIron, 2, 2, 2), T(d.ItemTypeGroup.SandCastFlask, 1, 0), T(d.ItemTypeGroup.Pole, 1, 1, 1), T(d.ItemTypeGroup.Hammer, 1, 0), T(d.ItemTypeGroup.Tongs, 1, 0)],
          skill: r.SkillType.Blacksmithing,
          level: d.RecipeLevel.Intermediate,
          requiredDoodad: a.DoodadTypeGroup.Anvil,
          requiresFire: !0,
          reputation: -500
      },
      disassemble: !0,
      requiredForDisassembly: [d.ItemTypeGroup.Hammer],
      use: [i.ActionType.Gather, i.ActionType.Melee],
      worth: 150,
      tier: {
          [d.ItemTypeGroup.CookingEquipment]: 2
      }
  }, g(d.ItemType.WroughtIronSpear, d.ItemTypeGroup.Weapon, d.ItemTypeGroup.CookingEquipment), t.itemDescriptions[d.ItemType.WroughtIronHammer] = {
      durability: 60,
      equip: r.EquipType.Held,
      attack: 4,
      damageType: o.DamageType.Blunt,
      use: [i.ActionType.Repair, i.ActionType.Gather, i.ActionType.Melee],
      recipe: {
          components: [T(d.ItemType.TalcumPowder, 1, 1, 0, !0), T(d.ItemType.WroughtIron, 3, 3, 3), T(d.ItemTypeGroup.SandCastFlask, 1, 0), T(d.ItemTypeGroup.Pole, 1, 1, 1), T(d.ItemTypeGroup.Hammer, 1, 0), T(d.ItemTypeGroup.Tongs, 1, 0)],
          skill: r.SkillType.Blacksmithing,
          level: d.RecipeLevel.Intermediate,
          requiredDoodad: a.DoodadTypeGroup.Anvil,
          requiresFire: !0,
          reputation: -175
      },
      disassemble: !0,
      requiredForDisassembly: [d.ItemTypeGroup.Hammer],
      worth: 150,
      tier: {
          [d.ItemTypeGroup.Hammer]: 2
      }
  }, g(d.ItemType.WroughtIronHammer, d.ItemTypeGroup.Hammer, d.ItemTypeGroup.Repairing, d.ItemTypeGroup.Weapon, d.ItemTypeGroup.Tool), t.itemDescriptions[d.ItemType.WroughtIronLockPick] = {
      durability: 40,
      use: [i.ActionType.LockPick],
      recipe: {
          components: [T(d.ItemType.TalcumPowder, 1, 1, 0, !0), T(d.ItemType.WroughtIron, 1, 1, 1), T(d.ItemTypeGroup.SandCastFlask, 1, 0), T(d.ItemTypeGroup.Hammer, 1, 0), T(d.ItemTypeGroup.Tongs, 1, 0)],
          skill: r.SkillType.Blacksmithing,
          level: d.RecipeLevel.Simple,
          requiredDoodad: a.DoodadTypeGroup.Anvil,
          requiresFire: !0,
          reputation: -175
      },
      disassemble: !0,
      requiredForDisassembly: [d.ItemTypeGroup.Hammer],
      damageType: o.DamageType.Piercing,
      worth: 50
  }, t.itemDescriptions[d.ItemType.WroughtIronShield] = {
      durability: 100,
      equip: r.EquipType.Held,
      use: [i.ActionType.Melee],
      defense: new o.Defense(3, new o.Resistances(o.DamageType.Slashing, 1, o.DamageType.Piercing, 1), new o.Vulnerabilities(o.DamageType.Blunt, 1)),
      recipe: {
          components: [T(d.ItemType.WroughtIron, 12, 12, 12), T(d.ItemTypeGroup.Hammer, 1, 0)],
          skill: r.SkillType.Blacksmithing,
          level: d.RecipeLevel.Advanced,
          requiredDoodad: a.DoodadTypeGroup.Anvil,
          requiresFire: !0,
          reputation: -500
      },
      disassemble: !0,
      requiredForDisassembly: [d.ItemTypeGroup.Hammer],
      worth: 450,
      attack: 3,
      damageType: o.DamageType.Blunt
  }, g(d.ItemType.WroughtIronShield, d.ItemTypeGroup.Equipment), t.itemDescriptions[d.ItemType.WroughtIronGauntlets] = {
      durability: 100,
      equip: r.EquipType.Hands,
      defense: new o.Defense(2, new o.Resistances(o.DamageType.Slashing, 1, o.DamageType.Piercing, 1), new o.Vulnerabilities(o.DamageType.Blunt, 1)),
      recipe: {
          components: [T(d.ItemType.WroughtIron, 8, 8, 8), T(d.ItemTypeGroup.Hammer, 1, 0)],
          skill: r.SkillType.Blacksmithing,
          level: d.RecipeLevel.Advanced,
          requiredDoodad: a.DoodadTypeGroup.Anvil,
          requiresFire: !0,
          reputation: -500
      },
      disassemble: !0,
      requiredForDisassembly: [d.ItemTypeGroup.Hammer],
      worth: 300
  }, g(d.ItemType.WroughtIronGauntlets, d.ItemTypeGroup.Equipment), t.itemDescriptions[d.ItemType.WroughtIronGreaves] = {
      durability: 100,
      equip: r.EquipType.Legs,
      defense: new o.Defense(4, new o.Resistances(o.DamageType.Slashing, 1, o.DamageType.Piercing, 1), new o.Vulnerabilities(o.DamageType.Blunt, 1)),
      recipe: {
          components: [T(d.ItemType.WroughtIron, 10, 10, 10), T(d.ItemTypeGroup.Hammer, 1, 0)],
          skill: r.SkillType.Blacksmithing,
          level: d.RecipeLevel.Advanced,
          requiredDoodad: a.DoodadTypeGroup.Anvil,
          requiresFire: !0,
          reputation: -500
      },
      disassemble: !0,
      requiredForDisassembly: [d.ItemTypeGroup.Hammer],
      worth: 450
  }, g(d.ItemType.WroughtIronGreaves, d.ItemTypeGroup.Equipment), t.itemDescriptions[d.ItemType.WroughtIronGorget] = {
      durability: 100,
      equip: r.EquipType.Neck,
      defense: new o.Defense(2, new o.Resistances(o.DamageType.Slashing, 1, o.DamageType.Piercing, 1), new o.Vulnerabilities(o.DamageType.Blunt, 1)),
      recipe: {
          components: [T(d.ItemType.WroughtIron, 6, 6, 6), T(d.ItemTypeGroup.Hammer, 1, 0)],
          skill: r.SkillType.Blacksmithing,
          level: d.RecipeLevel.Intermediate,
          requiredDoodad: a.DoodadTypeGroup.Anvil,
          requiresFire: !0,
          reputation: -500
      },
      disassemble: !0,
      requiredForDisassembly: [d.ItemTypeGroup.Hammer],
      worth: 300
  }, g(d.ItemType.WroughtIronGorget, d.ItemTypeGroup.Equipment), t.itemDescriptions[d.ItemType.WroughtIronHelmet] = {
      durability: 100,
      equip: r.EquipType.Head,
      defense: new o.Defense(3, new o.Resistances(o.DamageType.Slashing, 1, o.DamageType.Piercing, 1), new o.Vulnerabilities(o.DamageType.Blunt, 1)),
      recipe: {
          components: [T(d.ItemType.WroughtIron, 8, 8, 8), T(d.ItemTypeGroup.Hammer, 1, 0)],
          skill: r.SkillType.Blacksmithing,
          level: d.RecipeLevel.Advanced,
          requiredDoodad: a.DoodadTypeGroup.Anvil,
          requiresFire: !0,
          reputation: -500
      },
      disassemble: !0,
      requiredForDisassembly: [d.ItemTypeGroup.Hammer],
      worth: 300
  }, g(d.ItemType.WroughtIronHelmet, d.ItemTypeGroup.Equipment), t.itemDescriptions[d.ItemType.WroughtIronBoots] = {
      durability: 100,
      equip: r.EquipType.Feet,
      defense: new o.Defense(3, new o.Resistances(o.DamageType.Slashing, 1, o.DamageType.Piercing, 1), new o.Vulnerabilities(o.DamageType.Blunt, 1)),
      recipe: {
          components: [T(d.ItemType.WroughtIron, 12, 12, 12), T(d.ItemTypeGroup.Hammer, 1, 0)],
          skill: r.SkillType.Blacksmithing,
          level: d.RecipeLevel.Advanced,
          requiredDoodad: a.DoodadTypeGroup.Anvil,
          requiresFire: !0,
          reputation: -500
      },
      disassemble: !0,
      requiredForDisassembly: [d.ItemTypeGroup.Hammer],
      worth: 450
  }, g(d.ItemType.WroughtIronBoots, d.ItemTypeGroup.Equipment), t.itemDescriptions[d.ItemType.WroughtIronBreastPlate] = {
      durability: 100,
      equip: r.EquipType.Chest,
      defense: new o.Defense(4, new o.Resistances(o.DamageType.Slashing, 1, o.DamageType.Piercing, 1), new o.Vulnerabilities(o.DamageType.Blunt, 1)),
      recipe: {
          components: [T(d.ItemType.WroughtIron, 12, 12, 12), T(d.ItemTypeGroup.Hammer, 1, 0)],
          skill: r.SkillType.Blacksmithing,
          level: d.RecipeLevel.Advanced,
          requiredDoodad: a.DoodadTypeGroup.Anvil,
          requiresFire: !0,
          reputation: -500
      },
      disassemble: !0,
      requiredForDisassembly: [d.ItemTypeGroup.Hammer],
      worth: 450
  }, g(d.ItemType.WroughtIronBreastPlate, d.ItemTypeGroup.Equipment), t.itemDescriptions[d.ItemType.WroughtIronSword] = {
      durability: 100,
      equip: r.EquipType.Held,
      attack: 8,
      damageType: o.DamageType.Piercing | o.DamageType.Slashing,
      use: [i.ActionType.Carve, i.ActionType.Gather, i.ActionType.Melee],
      recipe: {
          components: [T(d.ItemType.TalcumPowder, 1, 1, 0, !0), T(d.ItemType.WroughtIron, 8, 8, 8), T(d.ItemTypeGroup.SandCastFlask, 1, 0), T(d.ItemTypeGroup.Hammer, 1, 0), T(d.ItemTypeGroup.Tongs, 1, 0)],
          skill: r.SkillType.Blacksmithing,
          level: d.RecipeLevel.Advanced,
          requiredDoodad: a.DoodadTypeGroup.Anvil,
          requiresFire: !0,
          reputation: -500
      },
      disassemble: !0,
      requiredForDisassembly: [d.ItemTypeGroup.Hammer],
      worth: 300,
      tier: {
          [d.ItemTypeGroup.Sharpened]: 3
      }
  }, g(d.ItemType.WroughtIronSword, d.ItemTypeGroup.Sharpened, d.ItemTypeGroup.Weapon), t.itemDescriptions[d.ItemType.WoodenWall] = {
      use: [i.ActionType.Build],
      recipe: {
          components: [T(d.ItemType.Log, 3, 3, 3), T(d.ItemTypeGroup.Sharpened, 1, 0)],
          skill: r.SkillType.Woodworking,
          level: d.RecipeLevel.Intermediate,
          reputation: 25
      },
      disassemble: !0,
      durability: 15,
      onUse: {
          [i.ActionType.Build]: a.DoodadType.WoodenWall
      },
      flammable: !0,
      worth: 50
  }, g(d.ItemType.WoodenWall, d.ItemTypeGroup.Housing), t.itemDescriptions[d.ItemType.WoodenFlooring] = {
      use: [i.ActionType.SetDown],
      recipe: {
          components: [T(d.ItemType.Log, 2, 2), T(d.ItemTypeGroup.Sharpened, 1, 0)],
          skill: r.SkillType.Woodworking,
          level: d.RecipeLevel.Advanced,
          reputation: 25
      },
      durability: 15,
      onUse: {
          [i.ActionType.SetDown]: y.TerrainType.WoodenFlooring
      },
      burnsLike: [d.ItemType.Log, d.ItemType.Log],
      flammable: !0,
      worth: 25
  }, g(d.ItemType.WoodenFlooring, d.ItemTypeGroup.Housing), t.itemDescriptions[d.ItemType.WoodenDoor] = {
      use: [i.ActionType.Build],
      recipe: {
          components: [T(d.ItemType.Log, 3, 3), T(d.ItemType.WoodenDowels, 2, 2), T(d.ItemTypeGroup.Sharpened, 1, 0)],
          skill: r.SkillType.Woodworking,
          level: d.RecipeLevel.Intermediate,
          reputation: 25
      },
      durability: 15,
      onUse: {
          [i.ActionType.Build]: a.DoodadType.WoodenDoor
      },
      burnsLike: [d.ItemType.Log, d.ItemType.Log, d.ItemType.Log, d.ItemType.WoodenDowels, d.ItemType.WoodenDowels],
      flammable: !0,
      worth: 50
  }, g(d.ItemType.WoodenDoor, d.ItemTypeGroup.Housing), t.itemDescriptions[d.ItemType.FishingRod] = {
      durability: 20,
      equip: r.EquipType.Held,
      attack: 1,
      damageType: o.DamageType.Slashing,
      ranged: {
          range: 6,
          attack: 0
      },
      use: [i.ActionType.Cast, i.ActionType.Melee],
      recipe: {
          components: [T(d.ItemType.String, 1, 1, 1), T(d.ItemTypeGroup.Pole, 1, 1, 1), T(d.ItemTypeGroup.Needle, 1, 1, 1)],
          skill: r.SkillType.Tinkering,
          level: d.RecipeLevel.Simple,
          reputation: 25
      },
      disassemble: !0,
      flammable: !0,
      worth: 25
  }, g(d.ItemType.FishingRod, d.ItemTypeGroup.Tool, d.ItemTypeGroup.Weapon), t.itemDescriptions[d.ItemType.MessageInABottle] = {
      weight: 5.2,
      use: [i.ActionType.OpenBottle],
      worth: 75,
      spawnOnWorldGen: {
          [s.BiomeType.Coastal]: {
              [l.WorldZ.Overworld]: {
                  [y.TerrainType.ShallowSeawater]: 1
              }
          }
      }
  }, t.itemDescriptions[d.ItemType.CarbonPowder] = {
      reducedWeight: .1,
      recipe: {
          components: [T(d.ItemTypeGroup.Carbon, 1, 1), T(d.ItemTypeGroup.MortarAndPestle, 1, 0)],
          skill: r.SkillType.Chemistry,
          level: d.RecipeLevel.Simple,
          reputation: -25
      },
      onBurn: [d.ItemType.PileOfAsh],
      flammable: !0,
      worth: 5
  }, g(d.ItemType.CarbonPowder, d.ItemTypeGroup.Powder), t.itemDescriptions[d.ItemType.PileOfCompost] = {
      recipe: {
          components: [T(d.ItemTypeGroup.Compost, 2, 2)],
          skill: r.SkillType.Gardening,
          level: d.RecipeLevel.Intermediate,
          reputation: 50
      },
      use: [i.ActionType.SmotherFire],
      worth: 5,
      onBurn: [d.ItemType.PileOfAsh],
      spawnOnMerchant: [s.BiomeType.Coastal, s.BiomeType.Arid]
  }, t.itemDescriptions[d.ItemType.MeltedCopal] = {
      use: [i.ActionType.Reinforce],
      recipe: {
          components: [T(d.ItemType.CopalResin, 1, 1)],
          skill: r.SkillType.Chemistry,
          level: d.RecipeLevel.Simple,
          requiresFire: !0,
          reputation: -25
      },
      decayMax: 100,
      decaysInto: [d.ItemType.Copal],
      worth: 25,
      spawnOnMerchant: [s.BiomeType.Coastal]
  }, g(d.ItemType.MeltedCopal, d.ItemTypeGroup.Reinforcement), t.itemDescriptions[d.ItemType.WoodenShavings] = {
      weight: .1,
      use: [i.ActionType.StokeFire],
      onBurn: [d.ItemType.PileOfAsh],
      onUse: {
          [i.ActionType.StokeFire]: 25
      },
      flammable: !0,
      worth: 5,
      tier: {
          [d.ItemTypeGroup.Pulp]: 1
      }
  }, g(d.ItemType.WoodenShavings, d.ItemTypeGroup.Pulp, d.ItemTypeGroup.Tinder), t.itemDescriptions[d.ItemType.Deadfall] = {
      use: [i.ActionType.Build],
      recipe: {
          components: [T(d.ItemType.LargeRock, 1, 1, 1), T(d.ItemTypeGroup.Pole, 3, 3, 3)],
          skill: r.SkillType.Trapping,
          level: d.RecipeLevel.Simple,
          reputation: -100
      },
      disassemble: !0,
      durability: 5,
      flammable: !0,
      onUse: {
          [i.ActionType.Build]: a.DoodadType.SetDeadfall
      },
      worth: 15
  }, g(d.ItemType.Deadfall, d.ItemTypeGroup.Trap), t.itemDescriptions[d.ItemType.Snare] = {
      use: [i.ActionType.Build],
      recipe: {
          components: [T(d.ItemType.String, 1, 1, 1), T(d.ItemTypeGroup.Pole, 2, 2, 2)],
          skill: r.SkillType.Trapping,
          level: d.RecipeLevel.Simple,
          reputation: -100
      },
      disassemble: !0,
      durability: 5,
      onUse: {
          [i.ActionType.Build]: a.DoodadType.SetSnare
      },
      flammable: !0,
      worth: 15
  }, g(d.ItemType.Snare, d.ItemTypeGroup.Trap), t.itemDescriptions[d.ItemType.WaterskinOfMedicinalWater] = {
      inheritWeight: d.ItemType.Waterskin,
      durability: 20,
      returnOnUseAndDecay: {
          type: d.ItemType.Waterskin,
          damaged: !0,
          whenCrafted: !0
      },
      keepDurabilityOnCraft: !0,
      repairable: !1,
      flammable: !0,
      use: [i.ActionType.DrinkCure, i.ActionType.Pour, i.ActionType.PourOnYourself],
      recipe: {
          baseComponent: d.ItemTypeGroup.WaterskinOfPotableWater,
          components: [T(d.ItemTypeGroup.Medicinal, 2, 2)],
          skill: r.SkillType.Chemistry,
          level: d.RecipeLevel.Intermediate,
          reputation: 25
      },
      onUse: {
          [i.ActionType.DrinkCure]: [3, 16, 1, 9]
      },
      worth: 75,
      tier: {
          [d.ItemTypeGroup.Liquid]: 3
      },
      canCureStatus: [o.StatusType.Poisoned]
  }, g(d.ItemType.WaterskinOfMedicinalWater, d.ItemTypeGroup.Liquid, d.ItemTypeGroup.ContainerOfMedicinalWater), t.itemDescriptions[d.ItemType.CharcoalBandage] = {
      use: [i.ActionType.Heal, i.ActionType.HealOther],
      skillUse: r.SkillType.Anatomy,
      recipe: {
          components: [T(d.ItemType.Bandage, 1, 1, 1), T(d.ItemType.Charcoal, 1, 1, 1)],
          skill: r.SkillType.Tinkering,
          level: d.RecipeLevel.Advanced,
          reputation: 25
      },
      disassemble: !0,
      onUse: {
          [i.ActionType.Heal]: [14, 0, 0, 0],
          [i.ActionType.HealOther]: 14
      },
      flammable: !0,
      worth: 30,
      canCureStatus: [o.StatusType.Bleeding]
  }, g(d.ItemType.CharcoalBandage, d.ItemTypeGroup.Health), t.itemDescriptions[d.ItemType.WoodenTongs] = {
      recipe: {
          components: [T(d.ItemType.WoodenPole, 1, 1, 1), T(d.ItemType.String, 1, 1, 1), T(d.ItemTypeGroup.Sharpened, 1, 0)],
          skill: r.SkillType.Tinkering,
          level: d.RecipeLevel.Intermediate,
          reputation: -25
      },
      disassemble: !0,
      durability: 10,
      use: [i.ActionType.Grasp],
      flammable: !0,
      worth: 10,
      tier: {
          [d.ItemTypeGroup.CookingEquipment]: 2,
          [d.ItemTypeGroup.Tongs]: 1
      }
  }, g(d.ItemType.WoodenTongs, d.ItemTypeGroup.Tongs, d.ItemTypeGroup.CookingEquipment), t.itemDescriptions[d.ItemType.WroughtIronTongs] = {
      recipe: {
          components: [T(d.ItemType.TalcumPowder, 1, 1, 0, !0), T(d.ItemType.WroughtIron, 3, 3, 3), T(d.ItemTypeGroup.SandCastFlask, 1, 0), T(d.ItemTypeGroup.Hammer, 1, 0), T(d.ItemTypeGroup.Tongs, 1, 0)],
          skill: r.SkillType.Blacksmithing,
          level: d.RecipeLevel.Simple,
          requiredDoodad: a.DoodadTypeGroup.Anvil,
          requiresFire: !0,
          reputation: -50
      },
      durability: 50,
      disassemble: !0,
      requiredForDisassembly: [d.ItemTypeGroup.Hammer],
      use: [i.ActionType.Grasp],
      worth: 150,
      tier: {
          [d.ItemTypeGroup.CookingEquipment]: 3,
          [d.ItemTypeGroup.Tongs]: 2
      }
  }, g(d.ItemType.WroughtIronTongs, d.ItemTypeGroup.Tongs, d.ItemTypeGroup.CookingEquipment), t.itemDescriptions[d.ItemType.SheetOfGlass] = {
      recipe: {
          components: [T(d.ItemType.RefinedSand, 3, 3), T(d.ItemType.LimestonePowder, 1, 1, 0, !0), T(d.ItemTypeGroup.Tongs, 1, 0)],
          skill: r.SkillType.Glassblowing,
          level: d.RecipeLevel.Intermediate,
          requiredDoodad: a.DoodadTypeGroup.LitFurnace,
          reputation: -25
      },
      damageType: o.DamageType.Slashing,
      worth: 50,
      spawnOnMerchant: [s.BiomeType.Arid]
  }, t.itemDescriptions[d.ItemType.SolarStill] = {
      use: [i.ActionType.Build],
      recipe: {
          components: [T(d.ItemType.SheetOfGlass, 1, 1, 1)],
          skill: r.SkillType.Tinkering,
          level: d.RecipeLevel.Advanced,
          reputation: 100
      },
      disassemble: !0,
      durability: 10,
      onUse: {
          [i.ActionType.Build]: a.DoodadType.SolarStill
      },
      worth: 75,
      spawnOnMerchant: [s.BiomeType.Arid]
  }, t.itemDescriptions[d.ItemType.StoneWaterStill] = {
      use: [i.ActionType.Build],
      recipe: {
          components: [T(d.ItemType.String, 1, 1, 1), T(d.ItemTypeGroup.Rock, 2, 2, 1), T(d.ItemTypeGroup.Sharpened, 1, 0), T(d.ItemTypeGroup.Pole, 1, 1, 1)],
          skill: r.SkillType.Stonecrafting,
          level: d.RecipeLevel.Intermediate,
          reputation: 25
      },
      disassemble: !0,
      durability: 25,
      onUse: {
          [i.ActionType.Build]: a.DoodadType.StoneWaterStill
      },
      worth: 75,
      spawnOnMerchant: [s.BiomeType.Coastal, s.BiomeType.IceCap]
  }, g(d.ItemType.StoneWaterStill, d.ItemTypeGroup.WaterStill), t.itemDescriptions[d.ItemType.Sundial] = {
      reducedWeight: 2,
      use: [i.ActionType.TellTime],
      recipe: {
          components: [T(d.ItemType.LargeRock, 1, 1), T(d.ItemTypeGroup.SharpenedRock, 1, 1)],
          skill: r.SkillType.Stonecrafting,
          level: d.RecipeLevel.Intermediate,
          reputation: 25
      },
      durability: 500,
      damageModifier: 25,
      damageOnUse: {
          [i.ActionType.TellTime]: 1
      },
      worth: 20,
      spawnOnMerchant: [s.BiomeType.Coastal, s.BiomeType.IceCap]
  }, g(d.ItemType.Sundial, d.ItemTypeGroup.Tool), t.itemDescriptions[d.ItemType.LitTallowTorch] = {
      inheritWeight: d.ItemType.TallowTorch,
      durability: 25,
      equip: r.EquipType.Held,
      attack: 3,
      damageType: o.DamageType.Fire | o.DamageType.Blunt,
      use: [i.ActionType.StartFire, i.ActionType.Extinguish, i.ActionType.Build, i.ActionType.Melee],
      equipEffect: [d.EquipEffect.LightSource, 3],
      revert: d.ItemType.TallowTorch,
      decayMax: 3500,
      decaysInto: [d.ItemType.Charcoal],
      repairable: !1,
      onUse: {
          [i.ActionType.Build]: a.DoodadType.LitTallowTorchStand
      },
      burnsLike: [d.ItemType.TallowTorch],
      flammable: !0
  }, g(d.ItemType.LitTallowTorch, d.ItemTypeGroup.LitTorch, d.ItemTypeGroup.LitCandle, d.ItemTypeGroup.FireSource, d.ItemTypeGroup.FireStarter, d.ItemTypeGroup.Weapon, d.ItemTypeGroup.Untradable), t.itemDescriptions[d.ItemType.Sinew] = {
      reducedWeight: .5,
      recipe: {
          components: [T(d.ItemType.Offal, 1, 1), T(d.ItemTypeGroup.Sharpened, 1, 0)],
          skill: r.SkillType.Fletching,
          level: d.RecipeLevel.Simple,
          reputation: -25
      },
      onBurn: [d.ItemType.PileOfAsh],
      flammable: !0,
      worth: 5,
      tier: {
          [d.ItemTypeGroup.Cordage]: 3
      }
  }, g(d.ItemType.Sinew, d.ItemTypeGroup.Cordage), t.itemDescriptions[d.ItemType.ShortBow] = {
      durability: 25,
      use: [i.ActionType.Shoot, i.ActionType.Melee],
      equip: r.EquipType.Held,
      twoHanded: !0,
      attack: 2,
      damageType: o.DamageType.Blunt,
      ranged: {
          range: 5,
          attack: 3
      },
      recipe: {
          components: [T(d.ItemType.WoodenPole, 1, 1), T(d.ItemType.Sinew, 1, 1)],
          skill: r.SkillType.Fletching,
          level: d.RecipeLevel.Advanced,
          reputation: -100
      },
      burnsLike: [d.ItemType.WoodenPole, d.ItemType.Sinew],
      flammable: !0,
      worth: 15
  }, g(d.ItemType.ShortBow, d.ItemTypeGroup.Weapon), t.itemDescriptions[d.ItemType.LongBow] = {
      durability: 30,
      use: [i.ActionType.Shoot, i.ActionType.Melee],
      equip: r.EquipType.Held,
      twoHanded: !0,
      attack: 2,
      damageType: o.DamageType.Blunt,
      ranged: {
          range: 9,
          attack: 5
      },
      recipe: {
          components: [T(d.ItemType.WoodenPole, 1, 1), T(d.ItemType.Sinew, 2, 2), T(d.ItemTypeGroup.Glue, 1, 1)],
          skill: r.SkillType.Fletching,
          level: d.RecipeLevel.Advanced,
          reputation: -250
      },
      burnsLike: [d.ItemType.WoodenPole, d.ItemType.Sinew, d.ItemType.Sinew],
      flammable: !0,
      worth: 50
  }, g(d.ItemType.LongBow, d.ItemTypeGroup.Weapon), t.itemDescriptions[d.ItemType.CompositeBow] = {
      durability: 50,
      use: [i.ActionType.Shoot, i.ActionType.Melee],
      equip: r.EquipType.Held,
      twoHanded: !0,
      attack: 2,
      damageType: o.DamageType.Blunt,
      ranged: {
          range: 4,
          attack: 6
      },
      recipe: {
          components: [T(d.ItemType.WoodenPole, 2, 2), T(d.ItemType.Sinew, 2, 2), T(d.ItemTypeGroup.Glue, 1, 1), T(d.ItemTypeGroup.Liquid, 1, 1, 0, !0)],
          skill: r.SkillType.Fletching,
          level: d.RecipeLevel.Expert,
          requiresFire: !0,
          reputation: -500
      },
      burnsLike: [d.ItemType.WoodenPole, d.ItemType.Sinew, d.ItemType.Sinew],
      flammable: !0,
      worth: 50
  }, g(d.ItemType.CompositeBow, d.ItemTypeGroup.Weapon), t.itemDescriptions[d.ItemType.WaterskinOfPurifiedFreshWater] = {
      inheritWeight: d.ItemType.Waterskin,
      use: [i.ActionType.DrinkItem, i.ActionType.Pour, i.ActionType.PourOnYourself],
      durability: 20,
      returnOnUseAndDecay: {
          type: d.ItemType.Waterskin,
          damaged: !0,
          whenCrafted: !0
      },
      keepDurabilityOnCraft: !0,
      repairable: !1,
      flammable: !0,
      recipe: {
          baseComponent: d.ItemType.WaterskinOfUnpurifiedFreshWater,
          components: [],
          skill: r.SkillType.Chemistry,
          level: d.RecipeLevel.Simple,
          requiresFire: !0,
          reputation: 25
      },
      onUse: {
          [i.ActionType.DrinkItem]: [1, 25, 1, 10]
      },
      worth: 75,
      tier: {
          [d.ItemTypeGroup.Liquid]: 2
      }
  }, g(d.ItemType.WaterskinOfPurifiedFreshWater, d.ItemTypeGroup.Liquid, d.ItemTypeGroup.WaterskinOfPotableWater, d.ItemTypeGroup.ContainerOfPurifiedFreshWater), t.itemDescriptions[d.ItemType.WaterskinOfUnpurifiedFreshWater] = {
      inheritWeight: d.ItemType.Waterskin,
      use: [i.ActionType.DrinkItem, i.ActionType.Pour, i.ActionType.PourOnYourself],
      durability: 20,
      returnOnUseAndDecay: {
          type: d.ItemType.Waterskin,
          damaged: !0,
          whenCrafted: !0
      },
      keepDurabilityOnCraft: !0,
      repairable: !1,
      flammable: !0,
      recipe: {
          baseComponent: d.ItemType.Waterskin,
          components: [T(d.ItemTypeGroup.FrozenWater, 1, 1)],
          skill: r.SkillType.Chemistry,
          level: d.RecipeLevel.Simple,
          reputation: 25
      },
      onUse: {
          [i.ActionType.DrinkItem]: [-4, 16, 1, 8]
      },
      worth: 50,
      tier: {
          [d.ItemTypeGroup.Liquid]: 1
      }
  }, g(d.ItemType.WaterskinOfUnpurifiedFreshWater, d.ItemTypeGroup.Liquid, d.ItemTypeGroup.ContainerOfUnpurifiedFreshWater), t.itemDescriptions[d.ItemType.GlassBottle] = {
      gather: {
          milk: d.ItemType.GlassBottleOfGoatMilk,
          desalinated: d.ItemType.GlassBottleOfDesalinatedWater,
          unpurified: d.ItemType.GlassBottleOfUnpurifiedFreshWater,
          seawater: d.ItemType.GlassBottleOfSeawater
      },
      use: [i.ActionType.GatherWater, i.ActionType.GatherMilk, i.ActionType.AttachContainer],
      recipe: {
          components: [T(d.ItemType.ClayBlowpipe, 1, 0), T(d.ItemType.RefinedSand, 2, 2), T(d.ItemType.LimestonePowder, 1, 1, 0, !0), T(d.ItemType.Cork, 1, 1)],
          skill: r.SkillType.Glassblowing,
          level: d.RecipeLevel.Advanced,
          requiredDoodad: a.DoodadTypeGroup.LitFurnace,
          reputation: 25
      },
      durability: 15,
      worth: 50,
      spawnOnWorldGen: {
          [s.BiomeType.Arid]: {
              [l.WorldZ.Overworld]: {
                  [y.TerrainType.SandstoneFlooring]: 1,
                  [y.TerrainType.ClayFlooring]: 1
              }
          }
      },
      spawnOnMerchant: [s.BiomeType.Arid]
  }, g(d.ItemType.GlassBottle, d.ItemTypeGroup.LiquidContainer), t.itemDescriptions[d.ItemType.Cork] = {
      recipe: {
          components: [T(d.ItemType.TreeBark, 1, 1), T(d.ItemTypeGroup.Sharpened, 1, 0)],
          skill: r.SkillType.Woodworking,
          level: d.RecipeLevel.Simple,
          reputation: 25
      },
      onBurn: [d.ItemType.PileOfAsh],
      flammable: !0,
      worth: 5
  }, t.itemDescriptions[d.ItemType.GlassBottleOfSeawater] = {
      inheritWeight: d.ItemType.GlassBottle,
      use: [i.ActionType.Pour, i.ActionType.PourOnYourself, i.ActionType.DrinkItem],
      durability: 15,
      returnOnUseAndDecay: {
          type: d.ItemType.GlassBottle,
          damaged: !0,
          whenCrafted: !0
      },
      repairable: !1,
      onUse: {
          [i.ActionType.DrinkItem]: [0, -15, 1, -2]
      },
      worth: 50,
      tier: {
          [d.ItemTypeGroup.Liquid]: 1
      },
      spawnOnMerchant: [s.BiomeType.Arid]
  }, g(d.ItemType.GlassBottleOfSeawater, d.ItemTypeGroup.Liquid, d.ItemTypeGroup.ContainerOfSeawater), t.itemDescriptions[d.ItemType.GlassBottleOfDesalinatedWater] = {
      inheritWeight: d.ItemType.GlassBottle,
      use: [i.ActionType.DrinkItem, i.ActionType.Pour, i.ActionType.PourOnYourself],
      recipe: {
          baseComponent: d.ItemType.GlassBottleOfSeawater,
          components: [T(d.ItemType.Flask, 1, 0)],
          skill: r.SkillType.Chemistry,
          level: d.RecipeLevel.Simple,
          requiresFire: !0,
          reputation: 25
      },
      durability: 15,
      returnOnUseAndDecay: {
          type: d.ItemType.GlassBottle,
          damaged: !0,
          whenCrafted: !0
      },
      keepDurabilityOnCraft: !0,
      repairable: !1,
      onUse: {
          [i.ActionType.DrinkItem]: [2, 25, 1, 11]
      },
      worth: 75,
      tier: {
          [d.ItemTypeGroup.Liquid]: 2
      },
      spawnOnMerchant: [s.BiomeType.Arid]
  }, g(d.ItemType.GlassBottleOfDesalinatedWater, d.ItemTypeGroup.Liquid, d.ItemTypeGroup.GlassBottleOfPotableWater, d.ItemTypeGroup.ContainerOfDesalinatedWater), t.itemDescriptions[d.ItemType.GlassBottleOfMedicinalWater] = {
      inheritWeight: d.ItemType.GlassBottle,
      use: [i.ActionType.DrinkCure, i.ActionType.PourOnYourself],
      recipe: {
          baseComponent: d.ItemTypeGroup.GlassBottleOfPotableWater,
          components: [T(d.ItemTypeGroup.Medicinal, 2, 2)],
          skill: r.SkillType.Chemistry,
          level: d.RecipeLevel.Intermediate,
          reputation: 25
      },
      durability: 15,
      returnOnUseAndDecay: {
          type: d.ItemType.GlassBottle,
          damaged: !0,
          whenCrafted: !0
      },
      keepDurabilityOnCraft: !0,
      repairable: !1,
      onUse: {
          [i.ActionType.DrinkCure]: [3, 16, 1, 9]
      },
      worth: 75,
      tier: {
          [d.ItemTypeGroup.Liquid]: 3
      },
      spawnOnMerchant: [s.BiomeType.Arid],
      canCureStatus: [o.StatusType.Poisoned]
  }, g(d.ItemType.GlassBottleOfMedicinalWater, d.ItemTypeGroup.Liquid, d.ItemTypeGroup.ContainerOfMedicinalWater), t.itemDescriptions[d.ItemType.GlassBottleOfPurifiedFreshWater] = {
      inheritWeight: d.ItemType.GlassBottle,
      use: [i.ActionType.DrinkItem, i.ActionType.Pour, i.ActionType.PourOnYourself],
      recipe: {
          baseComponent: d.ItemType.GlassBottleOfUnpurifiedFreshWater,
          components: [],
          skill: r.SkillType.Chemistry,
          level: d.RecipeLevel.Simple,
          requiresFire: !0,
          reputation: 25
      },
      durability: 15,
      returnOnUseAndDecay: {
          type: d.ItemType.GlassBottle,
          damaged: !0,
          whenCrafted: !0
      },
      keepDurabilityOnCraft: !0,
      repairable: !1,
      onUse: {
          [i.ActionType.DrinkItem]: [1, 25, 1, 10]
      },
      worth: 75,
      tier: {
          [d.ItemTypeGroup.Liquid]: 2
      },
      spawnOnMerchant: [s.BiomeType.Arid]
  }, g(d.ItemType.GlassBottleOfPurifiedFreshWater, d.ItemTypeGroup.Liquid, d.ItemTypeGroup.GlassBottleOfPotableWater, d.ItemTypeGroup.ContainerOfPurifiedFreshWater), t.itemDescriptions[d.ItemType.GlassBottleOfUnpurifiedFreshWater] = {
      inheritWeight: d.ItemType.GlassBottle,
      use: [i.ActionType.DrinkItem, i.ActionType.Pour, i.ActionType.PourOnYourself],
      recipe: {
          baseComponent: d.ItemType.GlassBottle,
          components: [T(d.ItemTypeGroup.FrozenWater, 1, 1)],
          skill: r.SkillType.Chemistry,
          level: d.RecipeLevel.Simple,
          reputation: 25
      },
      durability: 15,
      returnOnUseAndDecay: {
          type: d.ItemType.GlassBottle,
          damaged: !0,
          whenCrafted: !0
      },
      keepDurabilityOnCraft: !0,
      repairable: !1,
      onUse: {
          [i.ActionType.DrinkItem]: [-4, 16, 1, 8]
      },
      worth: 50,
      tier: {
          [d.ItemTypeGroup.Liquid]: 1
      },
      spawnOnMerchant: [s.BiomeType.Arid]
  }, g(d.ItemType.GlassBottleOfUnpurifiedFreshWater, d.ItemTypeGroup.Liquid, d.ItemTypeGroup.ContainerOfUnpurifiedFreshWater), t.itemDescriptions[d.ItemType.WroughtIronArrow] = {
      recipe: {
          components: [T(d.ItemType.Feather, 1, 1, 1), T(d.ItemType.WroughtIronArrowhead, 1, 1, 1), T(d.ItemType.ArrowShaft, 1, 1, 1), T(d.ItemTypeGroup.Cordage, 1, 1, 1)],
          skill: r.SkillType.Fletching,
          level: d.RecipeLevel.Advanced,
          reputation: -75
      },
      disassemble: !0,
      attack: 4,
      damageType: o.DamageType.Piercing,
      durability: 50,
      flammable: !0,
      worth: 50
  }, g(d.ItemType.WroughtIronArrow, d.ItemTypeGroup.Arrow), t.itemDescriptions[d.ItemType.IronArrow] = {
      recipe: {
          components: [T(d.ItemType.Feather, 1, 1, 1), T(d.ItemType.IronArrowhead, 1, 1, 1), T(d.ItemType.ArrowShaft, 1, 1, 1), T(d.ItemTypeGroup.Cordage, 1, 1, 1)],
          skill: r.SkillType.Fletching,
          level: d.RecipeLevel.Expert,
          reputation: -100
      },
      disassemble: !0,
      attack: 5,
      damageType: o.DamageType.Piercing,
      durability: 100,
      flammable: !0,
      worth: 75,
      spawnOnMerchant: [s.BiomeType.IceCap, s.BiomeType.Arid]
  }, g(d.ItemType.IronArrow, d.ItemTypeGroup.Arrow), t.itemDescriptions[d.ItemType.StoneBullet] = {
      reducedWeight: 2.5,
      recipe: {
          components: [T(d.ItemType.SmoothRock, 1, 1), T(d.ItemTypeGroup.Sharpened, 1, 0)],
          skill: r.SkillType.Stonecrafting,
          level: d.RecipeLevel.Intermediate,
          reputation: -25
      },
      attack: 1,
      damageType: o.DamageType.Blunt,
      durability: 10,
      worth: 10,
      spawnOnWorldGen: {
          [s.BiomeType.Coastal]: {
              [l.WorldZ.Cave]: {
                  [y.TerrainType.RockGround]: 1,
                  [y.TerrainType.Dirt]: 1,
                  [y.TerrainType.Gravel]: 1
              }
          }
      },
      spawnOnMerchant: [s.BiomeType.Coastal, s.BiomeType.IceCap]
  }, g(d.ItemType.StoneBullet, d.ItemTypeGroup.Bullet), t.itemDescriptions[d.ItemType.WroughtIronBullet] = {
      recipe: {
          components: [T(d.ItemType.TalcumPowder, 1, 1, 0, !0), T(d.ItemType.WroughtIron, 1, 1, 1), T(d.ItemTypeGroup.SandCastFlask, 1, 0), T(d.ItemTypeGroup.Hammer, 1, 0), T(d.ItemTypeGroup.Tongs, 1, 0)],
          skill: r.SkillType.Blacksmithing,
          level: d.RecipeLevel.Simple,
          requiredDoodad: a.DoodadTypeGroup.Anvil,
          requiresFire: !0,
          reputation: -50
      },
      attack: 3,
      damageType: o.DamageType.Blunt,
      durability: 50,
      disassemble: !0,
      requiredForDisassembly: [d.ItemTypeGroup.Hammer],
      worth: 50
  }, g(d.ItemType.WroughtIronBullet, d.ItemTypeGroup.Bullet), t.itemDescriptions[d.ItemType.IronBullet] = {
      recipe: {
          components: [T(d.ItemType.TalcumPowder, 1, 1, 0, !0), T(d.ItemType.IronIngot, 1, 1, 1), T(d.ItemTypeGroup.SandCastFlask, 1, 0), T(d.ItemTypeGroup.Hammer, 1, 0), T(d.ItemTypeGroup.Tongs, 1, 0)],
          skill: r.SkillType.Blacksmithing,
          level: d.RecipeLevel.Intermediate,
          requiredDoodad: a.DoodadTypeGroup.Anvil,
          requiresFire: !0,
          reputation: -100
      },
      attack: 4,
      damageType: o.DamageType.Blunt,
      durability: 100,
      disassemble: !0,
      requiredForDisassembly: [d.ItemTypeGroup.Hammer, d.ItemTypeGroup.SandCastFlask],
      worth: 75,
      spawnOnMerchant: [s.BiomeType.IceCap, s.BiomeType.Arid]
  }, g(d.ItemType.IronBullet, d.ItemTypeGroup.Bullet), t.itemDescriptions[d.ItemType.LeatherQuiver] = {
      durability: 20,
      weightCapacity: 25,
      use: [i.ActionType.OpenContainer],
      equip: r.EquipType.Back,
      defense: new o.Defense(1, new o.Resistances(o.DamageType.Slashing, 1, o.DamageType.Fire, 1), new o.Vulnerabilities(o.DamageType.Piercing, 1)),
      recipe: {
          components: [T(d.ItemType.TannedLeather, 1, 1, 1), T(d.ItemType.String, 2, 2, 2), T(d.ItemTypeGroup.Needle, 1, 0)],
          skill: r.SkillType.Leatherworking,
          level: d.RecipeLevel.Intermediate,
          reputation: -50
      },
      flammable: !0,
      disassemble: !0,
      worth: 50,
      preservationChance: .15
  }, g(d.ItemType.LeatherQuiver, d.ItemTypeGroup.Equipment, d.ItemTypeGroup.Storage), t.itemDescriptions[d.ItemType.Ectoplasm] = {
      weight: 0,
      decayMax: 25,
      worth: 100
  }, t.itemDescriptions[d.ItemType.MagicalEssence] = {
      use: [i.ActionType.Transmogrify],
      decayMax: 100,
      recipe: {
          components: [T(d.ItemType.PileOfAsh, 1, 1), T(d.ItemType.Offal, 1, 1), T(d.ItemType.Ectoplasm, 1, 1)],
          skill: r.SkillType.Chemistry,
          level: d.RecipeLevel.Expert,
          reputation: -500
      },
      onBurn: [d.ItemType.Ectoplasm],
      spawnOnDecay: n.CreatureType.PirateGhost,
      spawnOnBreak: n.CreatureType.PirateGhost,
      spawnableTiles: n.TileGroup.All,
      flammable: !0,
      worth: 200
  }, g(d.ItemType.MagicalEssence, d.ItemTypeGroup.Transmogrification), t.itemDescriptions[d.ItemType.WoodenFence] = {
      use: [i.ActionType.Build],
      recipe: {
          components: [T(d.ItemType.Log, 2, 2, 2), T(d.ItemType.WoodenPole, 1, 1, 1), T(d.ItemTypeGroup.Sharpened, 1, 0)],
          skill: r.SkillType.Woodworking,
          level: d.RecipeLevel.Intermediate,
          reputation: 25
      },
      disassemble: !0,
      durability: 10,
      onUse: {
          [i.ActionType.Build]: a.DoodadType.WoodenFence
      },
      flammable: !0,
      worth: 50
  }, g(d.ItemType.WoodenFence, d.ItemTypeGroup.Housing), t.itemDescriptions[d.ItemType.CreatureIdol] = {
      weight: 3,
      use: [i.ActionType.Build],
      onBurn: [d.ItemType.MagicalEssence, d.ItemType.Giblets, d.ItemType.PileOfAsh],
      onUse: {
          [i.ActionType.Build]: a.DoodadType.CreatureIdol
      },
      worth: 250
  }, t.itemDescriptions[d.ItemType.CordedSling] = {
      durability: 20,
      use: [i.ActionType.Sling, i.ActionType.Melee],
      equip: r.EquipType.Held,
      twoHanded: !0,
      attack: 1,
      damageType: o.DamageType.Blunt,
      ranged: {
          range: 5,
          attack: 1
      },
      recipe: {
          components: [T(d.ItemType.String, 4, 4, 4)],
          skill: r.SkillType.Fletching,
          level: d.RecipeLevel.Intermediate,
          reputation: -50
      },
      disassemble: !0,
      flammable: !0,
      worth: 20
  }, g(d.ItemType.CordedSling, d.ItemTypeGroup.Weapon), t.itemDescriptions[d.ItemType.LeatherSling] = {
      durability: 40,
      use: [i.ActionType.Sling, i.ActionType.Melee],
      equip: r.EquipType.Held,
      twoHanded: !0,
      attack: 2,
      damageType: o.DamageType.Blunt,
      ranged: {
          range: 6,
          attack: 2
      },
      recipe: {
          components: [T(d.ItemType.TannedLeather, 1, 1, 1), T(d.ItemType.String, 4, 4, 4), T(d.ItemTypeGroup.Needle, 1, 0)],
          skill: r.SkillType.Fletching,
          level: d.RecipeLevel.Advanced,
          reputation: -100
      },
      disassemble: !0,
      flammable: !0,
      worth: 50
  }, g(d.ItemType.LeatherSling, d.ItemTypeGroup.Weapon), t.itemDescriptions[d.ItemType.WroughtIronArrowhead] = {
      use: [i.ActionType.Carve],
      recipe: {
          components: [T(d.ItemType.TalcumPowder, 1, 1, 0, !0), T(d.ItemType.WroughtIron, 1, 1, 1), T(d.ItemTypeGroup.SandCastFlask, 1, 0), T(d.ItemTypeGroup.Hammer, 1, 0), T(d.ItemTypeGroup.Tongs, 1, 0)],
          skill: r.SkillType.Blacksmithing,
          level: d.RecipeLevel.Simple,
          requiredDoodad: a.DoodadTypeGroup.Anvil,
          requiresFire: !0,
          reputation: -50
      },
      disassemble: !0,
      requiredForDisassembly: [d.ItemTypeGroup.Hammer],
      damageType: o.DamageType.Piercing,
      worth: 50,
      tier: {
          [d.ItemTypeGroup.Sharpened]: 2
      }
  }, g(d.ItemType.WroughtIronArrowhead, d.ItemTypeGroup.Sharpened), t.itemDescriptions[d.ItemType.IronArrowhead] = {
      use: [i.ActionType.Carve],
      recipe: {
          components: [T(d.ItemType.TalcumPowder, 1, 1, 0, !0), T(d.ItemType.IronIngot, 1, 1, 1), T(d.ItemTypeGroup.SandCastFlask, 1, 0), T(d.ItemTypeGroup.Hammer, 1, 0), T(d.ItemTypeGroup.Tongs, 1, 0)],
          skill: r.SkillType.Blacksmithing,
          level: d.RecipeLevel.Intermediate,
          requiredDoodad: a.DoodadTypeGroup.Anvil,
          requiresFire: !0,
          reputation: -100
      },
      disassemble: !0,
      requiredForDisassembly: [d.ItemTypeGroup.Hammer, d.ItemTypeGroup.SandCastFlask],
      damageType: o.DamageType.Piercing,
      worth: 50,
      tier: {
          [d.ItemTypeGroup.Sharpened]: 3
      },
      spawnOnMerchant: [s.BiomeType.IceCap, s.BiomeType.Arid]
  }, g(d.ItemType.IronArrowhead, d.ItemTypeGroup.Sharpened), t.itemDescriptions[d.ItemType.Hammock] = {
      use: [i.ActionType.Rest, i.ActionType.Sleep, i.ActionType.PlaceDown],
      durability: 50,
      recipe: {
          components: [T(d.ItemType.Rope, 1, 1, 1), T(d.ItemType.String, 3, 3, 3), T(d.ItemTypeGroup.Pole, 2, 2, 2)],
          skill: r.SkillType.Camping,
          level: d.RecipeLevel.Intermediate,
          reputation: 50
      },
      disassemble: !0,
      hasSleepImage: !0,
      flammable: !0,
      worth: 50,
      onUse: {
          [i.ActionType.PlaceDown]: a.DoodadType.Hammock
      }
  }, g(d.ItemType.Hammock, d.ItemTypeGroup.Bedding), t.itemDescriptions[d.ItemType.CottonBedroll] = {
      use: [i.ActionType.Rest, i.ActionType.Sleep, i.ActionType.PlaceDown],
      durability: 75,
      recipe: {
          components: [T(d.ItemType.Cotton, 6, 6, 6), T(d.ItemType.String, 1, 1, 1), T(d.ItemTypeGroup.Fabric, 2, 2, 2), T(d.ItemTypeGroup.Needle, 1, 0)],
          skill: r.SkillType.Tailoring,
          level: d.RecipeLevel.Advanced,
          reputation: 50
      },
      disassemble: !0,
      hasSleepImage: !0,
      flammable: !0,
      worth: 75,
      onUse: {
          [i.ActionType.PlaceDown]: a.DoodadType.CottonBedroll
      },
      spawnOnMerchant: [s.BiomeType.Coastal]
  }, g(d.ItemType.CottonBedroll, d.ItemTypeGroup.Bedding), t.itemDescriptions[d.ItemType.FeatherBedroll] = {
      use: [i.ActionType.Rest, i.ActionType.Sleep, i.ActionType.PlaceDown],
      durability: 75,
      recipe: {
          components: [T(d.ItemType.Feather, 8, 8, 8), T(d.ItemType.String, 1, 1, 1), T(d.ItemTypeGroup.Fabric, 2, 2, 2), T(d.ItemTypeGroup.Needle, 1, 0)],
          skill: r.SkillType.Tailoring,
          level: d.RecipeLevel.Intermediate,
          reputation: 50
      },
      disassemble: !0,
      hasSleepImage: !0,
      flammable: !0,
      worth: 75,
      onUse: {
          [i.ActionType.PlaceDown]: a.DoodadType.FeatherBedroll
      }
  }, g(d.ItemType.FeatherBedroll, d.ItemTypeGroup.Bedding), t.itemDescriptions[d.ItemType.RawTaintedMeat] = {
      weight: .8,
      use: [i.ActionType.Eat],
      decayMax: 750,
      decaysInto: [d.ItemType.RottenMeat],
      onBurn: [d.ItemType.CookedTaintedMeat],
      onUse: {
          [i.ActionType.Eat]: [-8, 1, 7, -3]
      },
      skillUse: r.SkillType.Anatomy,
      worth: 5,
      tier: {
          [d.ItemTypeGroup.Meat]: 1
      }
  }, g(d.ItemType.RawTaintedMeat, d.ItemTypeGroup.Meat, d.ItemTypeGroup.RawMeat), t.itemDescriptions[d.ItemType.CookedTaintedMeat] = {
      use: [i.ActionType.Eat],
      decayMax: 1750,
      decaysInto: [d.ItemType.RottenMeat],
      recipe: {
          components: [T(d.ItemType.RawTaintedMeat, 1, 1), T(d.ItemTypeGroup.CookingEquipment, 1, 0)],
          skill: r.SkillType.Cooking,
          level: d.RecipeLevel.Intermediate,
          requiresFire: !0,
          reputation: 25
      },
      onBurn: [d.ItemType.PileOfAsh],
      onUse: {
          [i.ActionType.Eat]: [-4, 3, 8, -2]
      },
      skillUse: r.SkillType.Cooking,
      worth: 5,
      tier: {
          [d.ItemTypeGroup.Meat]: 2
      }
  }, g(d.ItemType.CookedTaintedMeat, d.ItemTypeGroup.Meat, d.ItemTypeGroup.CookedMeat, d.ItemTypeGroup.CookedFood), t.itemDescriptions[d.ItemType.StoneKnife] = {
      reducedWeight: .3,
      durability: 30,
      equip: r.EquipType.Held,
      attack: 2,
      damageType: o.DamageType.Slashing | o.DamageType.Piercing,
      use: [i.ActionType.Carve, i.ActionType.Harvest, i.ActionType.Gather, i.ActionType.Melee],
      recipe: {
          components: [T(d.ItemType.String, 1, 1), T(d.ItemTypeGroup.SharpenedRock, 1, 1), T(d.ItemTypeGroup.Pole, 1, 1)],
          skill: r.SkillType.Tinkering,
          level: d.RecipeLevel.Simple,
          reputation: -50
      },
      onBurn: [d.ItemType.PileOfAsh, d.ItemType.PileOfAsh],
      worth: 15,
      flammable: !0,
      tier: {
          [d.ItemTypeGroup.Sharpened]: 2
      },
      spawnOnMerchant: [s.BiomeType.Coastal, s.BiomeType.IceCap]
  }, g(d.ItemType.StoneKnife, d.ItemTypeGroup.Sharpened, d.ItemTypeGroup.Weapon), t.itemDescriptions[d.ItemType.RawBlindfish] = {
      weight: .8,
      use: [i.ActionType.Eat],
      decayMax: 2500,
      decaysInto: [d.ItemType.RottenMeat],
      onBurn: [d.ItemType.CookedBlindfish],
      onUse: {
          [i.ActionType.Eat]: [0, 4, 4, -1]
      },
      skillUse: r.SkillType.Anatomy,
      worth: 5,
      tier: {
          [d.ItemTypeGroup.Meat]: 1
      },
      dismantle: {
          items: [{
              type: d.ItemType.RawChoppedFish,
              amount: 1,
              transferDecay: !0
          }],
          required: d.ItemTypeGroup.Sharpened,
          skill: r.SkillType.Anatomy
      },
      spawnOnMerchant: [s.BiomeType.Coastal, s.BiomeType.Arid]
  }, g(d.ItemType.RawBlindfish, d.ItemTypeGroup.Meat, d.ItemTypeGroup.RawMeat, d.ItemTypeGroup.RawFish), t.itemDescriptions[d.ItemType.CookedBlindfish] = {
      use: [i.ActionType.Eat],
      decayMax: 4500,
      decaysInto: [d.ItemType.RottenMeat],
      recipe: {
          components: [T(d.ItemType.RawBlindfish, 1, 1), T(d.ItemTypeGroup.CookingEquipment, 1, 0)],
          skill: r.SkillType.Cooking,
          level: d.RecipeLevel.Simple,
          requiresFire: !0,
          reputation: 25
      },
      onBurn: [d.ItemType.PileOfAsh],
      onUse: {
          [i.ActionType.Eat]: [1, 10, 5, -1]
      },
      skillUse: r.SkillType.Cooking,
      worth: 15,
      tier: {
          [d.ItemTypeGroup.Meat]: 2
      },
      spawnOnMerchant: [s.BiomeType.Coastal, s.BiomeType.Arid]
  }, g(d.ItemType.CookedBlindfish, d.ItemTypeGroup.Meat, d.ItemTypeGroup.CookedMeat, d.ItemTypeGroup.CookedFood), t.itemDescriptions[d.ItemType.Pemmican] = {
      reducedWeight: .5,
      use: [i.ActionType.Eat],
      recipe: {
          components: [T(d.ItemTypeGroup.Meat, 2, 2), T(d.ItemTypeGroup.CookingEquipment, 1, 0)],
          skill: r.SkillType.Cooking,
          level: d.RecipeLevel.Advanced,
          requiresFire: !0,
          reputation: 25
      },
      onBurn: [d.ItemType.PileOfAsh],
      onUse: {
          [i.ActionType.Eat]: [1, 4, 4, -3]
      },
      skillUse: r.SkillType.Cooking,
      worth: 20
  }, g(d.ItemType.Pemmican, d.ItemTypeGroup.CookedMeat, d.ItemTypeGroup.CookedFood), t.itemDescriptions[d.ItemType.CookedPemmican] = {
      use: [i.ActionType.Eat],
      decayMax: 5250,
      decaysInto: [d.ItemType.RottenMeat],
      recipe: {
          components: [T(d.ItemType.Pemmican, 1, 1), T(d.ItemType.Tallow, 1, 1), T(d.ItemTypeGroup.CookingEquipment, 1, 0)],
          skill: r.SkillType.Cooking,
          level: d.RecipeLevel.Advanced,
          requiresFire: !0,
          reputation: 25
      },
      onBurn: [d.ItemType.PileOfAsh],
      onUse: {
          [i.ActionType.Eat]: [2, 12, 6, -1]
      },
      skillUse: r.SkillType.Cooking,
      worth: 30
  }, g(d.ItemType.CookedPemmican, d.ItemTypeGroup.CookedMeat, d.ItemTypeGroup.CookedFood), t.itemDescriptions[d.ItemType.Sail] = {
      recipe: {
          components: [T(d.ItemType.String, 3, 3, 3), T(d.ItemTypeGroup.Fabric, 3, 3, 3), T(d.ItemTypeGroup.Needle, 1, 0)],
          skill: r.SkillType.Tailoring,
          level: d.RecipeLevel.Advanced,
          reputation: 25
      },
      disassemble: !0,
      flammable: !0,
      worth: 75
  }, g(d.ItemType.Sail, d.ItemTypeGroup.Travel), t.itemDescriptions[d.ItemType.Sailboat] = {
      use: [i.ActionType.Paddle, i.ActionType.SailToCivilization],
      recipe: {
          components: [T(d.ItemType.Sail, 1, 1, 1), T(d.ItemType.BoatPaddle, 1, 1, 1), T(d.ItemType.Rope, 2, 2, 2), T(d.ItemType.Log, 3, 3, 3), T(d.ItemTypeGroup.Sharpened, 1, 0)],
          skill: r.SkillType.Woodworking,
          level: d.RecipeLevel.Expert,
          reputation: 25
      },
      disassemble: !0,
      flammable: !0,
      worth: 30,
      durability: 6e3,
      damageModifier: 100,
      isVehicle: !0,
      damageOnUse: {
          [i.ActionType.Paddle]: 1
      }
  }, g(d.ItemType.Sailboat, d.ItemTypeGroup.Travel), t.itemDescriptions[d.ItemType.ChickenEgg] = {
      weight: .2,
      use: [i.ActionType.Eat],
      decayMax: 6250,
      onBurn: [d.ItemType.BoiledChickenEgg],
      spawnOnDecay: n.CreatureType.Chicken,
      spawnableTiles: n.TileGroup.Ground,
      onUse: {
          [i.ActionType.Eat]: [-1, 10, 3, 1]
      },
      skillUse: r.SkillType.Anatomy,
      worth: 5,
      spawnOnWorldGen: {
          [s.BiomeType.Coastal]: {
              [l.WorldZ.Overworld]: {
                  [y.TerrainType.Dirt]: 1,
                  [y.TerrainType.Grass]: 1,
                  [y.TerrainType.Gravel]: 1
              }
          }
      },
      spawnOnMerchant: [s.BiomeType.Coastal, s.BiomeType.Arid]
  }, t.itemDescriptions[d.ItemType.BoiledChickenEgg] = {
      use: [i.ActionType.Eat],
      decayMax: 5250,
      recipe: {
          components: [T(d.ItemType.ChickenEgg, 1, 1), T(d.ItemTypeGroup.Tongs, 1, 0), T(d.ItemTypeGroup.Liquid, 1, 0)],
          skill: r.SkillType.Cooking,
          level: d.RecipeLevel.Simple,
          requiresFire: !0,
          reputation: 25
      },
      onBurn: [d.ItemType.PileOfAsh],
      onUse: {
          [i.ActionType.Eat]: [2, 12, 3, 0]
      },
      skillUse: r.SkillType.Cooking,
      worth: 10,
      spawnOnMerchant: [s.BiomeType.Coastal, s.BiomeType.Arid]
  }, g(d.ItemType.BoiledChickenEgg, d.ItemTypeGroup.CookedFood), t.itemDescriptions[d.ItemType.SheafOfHay] = {
      weight: .1,
      use: [i.ActionType.StokeFire],
      onBurn: [d.ItemType.PileOfAsh],
      onUse: {
          [i.ActionType.StokeFire]: 50
      },
      flammable: !0,
      worth: 5,
      tier: {
          [d.ItemTypeGroup.Compost]: 2,
          [d.ItemTypeGroup.Cordage]: 1
      },
      spawnOnMerchant: [s.BiomeType.Coastal]
  }, g(d.ItemType.SheafOfHay, d.ItemTypeGroup.Compost, d.ItemTypeGroup.Cordage, d.ItemTypeGroup.Tinder), t.itemDescriptions[d.ItemType.Niter] = {
      weight: .4,
      spawnOnMerchant: [s.BiomeType.Arid]
  }, t.itemDescriptions[d.ItemType.Saltpeter] = {
      reducedWeight: .1,
      use: [i.ActionType.Preserve],
      recipe: {
          components: [T(d.ItemType.Niter, 1, 1), T(d.ItemTypeGroup.MortarAndPestle, 1, 0)],
          skill: r.SkillType.Chemistry,
          level: d.RecipeLevel.Simple,
          reputation: 25
      },
      onBurn: [d.ItemType.None],
      worth: 10,
      spawnOnMerchant: [s.BiomeType.Arid]
  }, g(d.ItemType.Saltpeter, d.ItemTypeGroup.Preservative, d.ItemTypeGroup.Powder), t.itemDescriptions[d.ItemType.BlackPowder] = {
      recipe: {
          components: [T(d.ItemType.Saltpeter, 1, 1), T(d.ItemType.CarbonPowder, 1, 1), T(d.ItemTypeGroup.MortarAndPestle, 1, 0)],
          skill: r.SkillType.Chemistry,
          level: d.RecipeLevel.Advanced,
          reputation: -50
      },
      onBurn: [d.ItemType.None],
      flammable: !0,
      worth: 20,
      durability: 3,
      repairable: !1,
      spawnOnMerchant: [s.BiomeType.Arid]
  }, g(d.ItemType.BlackPowder, d.ItemTypeGroup.Powder), t.itemDescriptions[d.ItemType.FlintlockPistol] = {
      weight: .9,
      durability: 40,
      use: [i.ActionType.Fire, i.ActionType.Melee],
      equip: r.EquipType.Held,
      attack: 3,
      damageType: o.DamageType.Blunt,
      ranged: {
          range: 9,
          attack: 8
      },
      onBurn: [d.ItemType.Charcoal, d.ItemType.PileOfAsh],
      repairable: !1,
      flammable: !0,
      worth: 250,
      spawnOnMerchant: [s.BiomeType.IceCap, s.BiomeType.Arid]
  }, g(d.ItemType.FlintlockPistol, d.ItemTypeGroup.Weapon), t.itemDescriptions[d.ItemType.Giblets] = {
      use: [i.ActionType.Eat],
      recipe: {
          components: [T(d.ItemType.Offal, 1, 1), T(d.ItemTypeGroup.CookingEquipment, 1, 0)],
          skill: r.SkillType.Cooking,
          level: d.RecipeLevel.Simple,
          requiresFire: !0,
          reputation: 25
      },
      decayMax: 1e3,
      decaysInto: [d.ItemType.RottenMeat],
      onBurn: [d.ItemType.PileOfAsh],
      onUse: {
          [i.ActionType.Eat]: [0, -1, 4, -1]
      },
      skillUse: r.SkillType.Cooking,
      worth: 5,
      tier: {
          [d.ItemTypeGroup.Meat]: 1,
          [d.ItemTypeGroup.Compost]: 1
      }
  }, g(d.ItemType.Giblets, d.ItemTypeGroup.Compost, d.ItemTypeGroup.Meat, d.ItemTypeGroup.CookedMeat, d.ItemTypeGroup.CookedFood), t.itemDescriptions[d.ItemType.ExplosiveTrap] = {
      use: [i.ActionType.Build],
      recipe: {
          components: [T(d.ItemType.Leaves, 4, 4, 4), T(d.ItemType.IronIngot, 1, 1, 1), T(d.ItemType.BlackPowder, 1, 1, 1), T(d.ItemTypeGroup.Rock, 1, 1, 1)],
          skill: r.SkillType.Trapping,
          level: d.RecipeLevel.Expert,
          reputation: -25
      },
      disassemble: !0,
      durability: 5,
      onUse: {
          [i.ActionType.Build]: a.DoodadType.SetExplosiveTrap
      },
      flammable: !0,
      worth: 75
  }, g(d.ItemType.ExplosiveTrap, d.ItemTypeGroup.Trap), t.itemDescriptions[d.ItemType.SkeletalMageWand] = {
      weight: .9,
      equip: r.EquipType.Held,
      attack: 3,
      damageType: o.DamageType.Blunt,
      use: [i.ActionType.Teleport, i.ActionType.Melee],
      durability: 5,
      onBurn: [d.ItemType.Charcoal, d.ItemType.MagicalEssence],
      flammable: !0,
      repairable: !1,
      worth: 100,
      spawnOnMerchant: [s.BiomeType.Coastal, s.BiomeType.Arid]
  }, t.itemDescriptions[d.ItemType.RawClayJug] = {
      recipe: {
          components: [T(d.ItemType.RawClay, 1, 1, 1)],
          skill: r.SkillType.Claythrowing,
          level: d.RecipeLevel.Intermediate,
          reputation: 25
      },
      disassemble: !0,
      worth: 25,
      spawnOnMerchant: [s.BiomeType.Arid]
  }, t.itemDescriptions[d.ItemType.ClayJug] = {
      gather: {
          milk: d.ItemType.ClayJugOfGoatMilk,
          desalinated: d.ItemType.ClayJugOfDesalinatedWater,
          unpurified: d.ItemType.ClayJugOfUnpurifiedFreshWater,
          seawater: d.ItemType.ClayJugOfSeawater
      },
      use: [i.ActionType.GatherWater, i.ActionType.GatherMilk, i.ActionType.AttachContainer],
      recipe: {
          components: [T(d.ItemType.RawClayJug, 1, 1), T(d.ItemType.Cork, 1, 1)],
          skill: r.SkillType.Claythrowing,
          level: d.RecipeLevel.Advanced,
          requiredDoodad: a.DoodadTypeGroup.LitKiln,
          reputation: 25
      },
      durability: 10,
      worth: 50,
      spawnOnWorldGen: {
          [s.BiomeType.Arid]: {
              [l.WorldZ.Overworld]: {
                  [y.TerrainType.SandstoneFlooring]: 1,
                  [y.TerrainType.ClayFlooring]: 1
              }
          }
      },
      spawnOnMerchant: [s.BiomeType.Arid]
  }, g(d.ItemType.ClayJug, d.ItemTypeGroup.LiquidContainer), t.itemDescriptions[d.ItemType.ClayJugOfSeawater] = {
      inheritWeight: d.ItemType.ClayJug,
      use: [i.ActionType.Pour, i.ActionType.PourOnYourself, i.ActionType.DrinkItem],
      durability: 10,
      returnOnUseAndDecay: {
          type: d.ItemType.ClayJug,
          damaged: !0,
          whenCrafted: !0
      },
      repairable: !1,
      onUse: {
          [i.ActionType.DrinkItem]: [0, -15, 1, -2]
      },
      worth: 50,
      tier: {
          [d.ItemTypeGroup.Liquid]: 1
      },
      spawnOnMerchant: [s.BiomeType.Arid]
  }, g(d.ItemType.ClayJugOfSeawater, d.ItemTypeGroup.Liquid, d.ItemTypeGroup.ContainerOfSeawater), t.itemDescriptions[d.ItemType.ClayJugOfDesalinatedWater] = {
      inheritWeight: d.ItemType.ClayJug,
      use: [i.ActionType.DrinkItem, i.ActionType.Pour, i.ActionType.PourOnYourself],
      recipe: {
          baseComponent: d.ItemType.ClayJugOfSeawater,
          components: [T(d.ItemType.Flask, 1, 0)],
          skill: r.SkillType.Chemistry,
          level: d.RecipeLevel.Simple,
          requiresFire: !0,
          reputation: 25
      },
      durability: 10,
      returnOnUseAndDecay: {
          type: d.ItemType.ClayJug,
          damaged: !0,
          whenCrafted: !0
      },
      keepDurabilityOnCraft: !0,
      repairable: !1,
      onUse: {
          [i.ActionType.DrinkItem]: [2, 25, 1, 11]
      },
      worth: 75,
      tier: {
          [d.ItemTypeGroup.Liquid]: 2
      },
      spawnOnMerchant: [s.BiomeType.Arid]
  }, g(d.ItemType.ClayJugOfDesalinatedWater, d.ItemTypeGroup.Liquid, d.ItemTypeGroup.ClayJugOfPotableWater, d.ItemTypeGroup.ContainerOfDesalinatedWater), t.itemDescriptions[d.ItemType.ClayJugOfMedicinalWater] = {
      inheritWeight: d.ItemType.ClayJug,
      use: [i.ActionType.DrinkCure, i.ActionType.PourOnYourself],
      recipe: {
          baseComponent: d.ItemTypeGroup.ClayJugOfPotableWater,
          components: [T(d.ItemTypeGroup.Medicinal, 2, 2)],
          skill: r.SkillType.Chemistry,
          level: d.RecipeLevel.Intermediate,
          reputation: 25
      },
      durability: 10,
      returnOnUseAndDecay: {
          type: d.ItemType.ClayJug,
          damaged: !0,
          whenCrafted: !0
      },
      keepDurabilityOnCraft: !0,
      repairable: !1,
      onUse: {
          [i.ActionType.DrinkCure]: [3, 16, 1, 9]
      },
      worth: 75,
      tier: {
          [d.ItemTypeGroup.Liquid]: 3
      },
      spawnOnMerchant: [s.BiomeType.Arid],
      canCureStatus: [o.StatusType.Poisoned]
  }, g(d.ItemType.ClayJugOfMedicinalWater, d.ItemTypeGroup.Liquid, d.ItemTypeGroup.ContainerOfMedicinalWater), t.itemDescriptions[d.ItemType.ClayJugOfPurifiedFreshWater] = {
      inheritWeight: d.ItemType.ClayJug,
      use: [i.ActionType.DrinkItem, i.ActionType.Pour, i.ActionType.PourOnYourself],
      recipe: {
          baseComponent: d.ItemType.ClayJugOfUnpurifiedFreshWater,
          components: [],
          skill: r.SkillType.Chemistry,
          level: d.RecipeLevel.Simple,
          requiresFire: !0,
          reputation: 25
      },
      durability: 10,
      returnOnUseAndDecay: {
          type: d.ItemType.ClayJug,
          damaged: !0,
          whenCrafted: !0
      },
      keepDurabilityOnCraft: !0,
      repairable: !1,
      onUse: {
          [i.ActionType.DrinkItem]: [1, 25, 1, 10]
      },
      worth: 75,
      tier: {
          [d.ItemTypeGroup.Liquid]: 2
      },
      spawnOnMerchant: [s.BiomeType.Arid]
  }, g(d.ItemType.ClayJugOfPurifiedFreshWater, d.ItemTypeGroup.Liquid, d.ItemTypeGroup.ClayJugOfPotableWater, d.ItemTypeGroup.ContainerOfPurifiedFreshWater), t.itemDescriptions[d.ItemType.ClayJugOfUnpurifiedFreshWater] = {
      inheritWeight: d.ItemType.ClayJug,
      use: [i.ActionType.DrinkItem, i.ActionType.Pour, i.ActionType.PourOnYourself],
      recipe: {
          baseComponent: d.ItemType.ClayJug,
          components: [T(d.ItemTypeGroup.FrozenWater, 1, 1)],
          skill: r.SkillType.Chemistry,
          level: d.RecipeLevel.Simple,
          reputation: 25
      },
      durability: 10,
      returnOnUseAndDecay: {
          type: d.ItemType.ClayJug,
          damaged: !0,
          whenCrafted: !0
      },
      keepDurabilityOnCraft: !0,
      repairable: !1,
      onUse: {
          [i.ActionType.DrinkItem]: [-4, 16, 1, 8]
      },
      worth: 50,
      tier: {
          [d.ItemTypeGroup.Liquid]: 1
      },
      spawnOnMerchant: [s.BiomeType.Arid]
  }, g(d.ItemType.ClayJugOfUnpurifiedFreshWater, d.ItemTypeGroup.Liquid, d.ItemTypeGroup.ContainerOfUnpurifiedFreshWater), t.itemDescriptions[d.ItemType.RawClayBrick] = {
      recipe: {
          components: [T(d.ItemType.RawClay, 2, 2, 2)],
          skill: r.SkillType.Claythrowing,
          level: d.RecipeLevel.Simple,
          reputation: 25
      },
      disassemble: !0,
      onBurn: [d.ItemType.ClayBrick],
      worth: 10,
      spawnOnMerchant: [s.BiomeType.Arid]
  }, t.itemDescriptions[d.ItemType.ClayBrick] = {
      reducedWeight: .4,
      recipe: {
          components: [T(d.ItemType.RawClayBrick, 1, 1)],
          skill: r.SkillType.Claythrowing,
          level: d.RecipeLevel.Intermediate,
          requiredDoodad: a.DoodadTypeGroup.LitKiln,
          reputation: 25
      },
      worth: 10,
      spawnOnMerchant: [s.BiomeType.Arid]
  }, t.itemDescriptions[d.ItemType.ClayWall] = {
      use: [i.ActionType.Build],
      recipe: {
          components: [T(d.ItemType.ClayBrick, 8, 8, 8)],
          skill: r.SkillType.Claythrowing,
          level: d.RecipeLevel.Advanced,
          reputation: 25
      },
      disassemble: !0,
      durability: 20,
      onUse: {
          [i.ActionType.Build]: a.DoodadType.ClayWall
      },
      worth: 50,
      spawnOnMerchant: [s.BiomeType.Arid]
  }, g(d.ItemType.ClayWall, d.ItemTypeGroup.Housing), t.itemDescriptions[d.ItemType.ClayFlooring] = {
      use: [i.ActionType.SetDown],
      recipe: {
          components: [T(d.ItemType.ClayBrick, 8, 8, 8)],
          skill: r.SkillType.Claythrowing,
          level: d.RecipeLevel.Intermediate,
          reputation: 25
      },
      disassemble: !0,
      durability: 20,
      onUse: {
          [i.ActionType.SetDown]: y.TerrainType.ClayFlooring
      },
      worth: 25,
      spawnOnMerchant: [s.BiomeType.Arid]
  }, g(d.ItemType.ClayFlooring, d.ItemTypeGroup.Housing), t.itemDescriptions[d.ItemType.PineappleSeeds] = {
      weight: .1,
      use: [i.ActionType.Plant, i.ActionType.Eat],
      skillUse: r.SkillType.Botany,
      onBurn: [d.ItemType.PileOfAsh],
      onUse: {
          [i.ActionType.Plant]: a.DoodadType.Pineapple,
          [i.ActionType.Eat]: [1, 2, 1, -1]
      },
      flammable: !0,
      worth: 5,
      spawnOnMerchant: [s.BiomeType.Arid]
  }, g(d.ItemType.PineappleSeeds, d.ItemTypeGroup.Seed), t.itemDescriptions[d.ItemType.RaspberrySeeds] = {
      weight: .1,
      use: [i.ActionType.Plant, i.ActionType.Eat],
      skillUse: r.SkillType.Botany,
      onBurn: [d.ItemType.PileOfAsh],
      onUse: {
          [i.ActionType.Plant]: a.DoodadType.RaspberryBush,
          [i.ActionType.Eat]: [1, 2, 1, -1]
      },
      flammable: !0,
      worth: 5,
      spawnOnMerchant: [s.BiomeType.Coastal]
  }, g(d.ItemType.RaspberrySeeds, d.ItemTypeGroup.Seed), t.itemDescriptions[d.ItemType.PricklyPearSeeds] = {
      weight: .1,
      use: [i.ActionType.Plant, i.ActionType.Eat],
      skillUse: r.SkillType.Botany,
      onBurn: [d.ItemType.PileOfAsh],
      onUse: {
          [i.ActionType.Plant]: a.DoodadType.PricklyPears,
          [i.ActionType.Eat]: [1, 2, 1, -1]
      },
      flammable: !0,
      worth: 5,
      spawnOnMerchant: [s.BiomeType.Arid]
  }, g(d.ItemType.PricklyPearSeeds, d.ItemTypeGroup.Seed), t.itemDescriptions[d.ItemType.ClematisSeeds] = {
      weight: .1,
      use: [i.ActionType.Plant, i.ActionType.Eat],
      skillUse: r.SkillType.Botany,
      onBurn: [d.ItemType.PileOfAsh],
      onUse: {
          [i.ActionType.Plant]: a.DoodadType.Clematis,
          [i.ActionType.Eat]: [1, 0, 1, -1]
      },
      flammable: !0,
      worth: 5,
      spawnOnMerchant: [s.BiomeType.Coastal]
  }, g(d.ItemType.ClematisSeeds, d.ItemTypeGroup.Seed), t.itemDescriptions[d.ItemType.PaperSheet] = {
      use: [i.ActionType.DrawMap],
      recipe: {
          components: [T(d.ItemType.PaperMold, 1, 0), T(d.ItemTypeGroup.Pulp, 2, 2), T(d.ItemTypeGroup.Liquid, 1, 1, 0, !0)],
          skill: r.SkillType.Cartography,
          level: d.RecipeLevel.Intermediate,
          reputation: 25
      },
      durability: 25,
      onBurn: [d.ItemType.PileOfAsh, d.ItemType.PileOfAsh],
      flammable: !0,
      worth: 15,
      dismantle: {
          items: [{
              type: d.ItemType.ShreddedPaper,
              amount: 1
          }]
      }
  }, t.itemDescriptions[d.ItemType.PaperMold] = {
      recipe: {
          components: [T(d.ItemType.Log, 2, 2, 1), T(d.ItemTypeGroup.Cordage, 8, 8, 8), T(d.ItemTypeGroup.Sharpened, 1, 0)],
          skill: r.SkillType.Woodworking,
          level: d.RecipeLevel.Advanced,
          reputation: 25
      },
      durability: 20,
      disassemble: !0,
      flammable: !0,
      worth: 25
  }, t.itemDescriptions[d.ItemType.Beggarticks] = {
      weight: .1,
      use: [i.ActionType.Eat],
      skillUse: r.SkillType.Botany,
      onBurn: [d.ItemType.PileOfAsh],
      onUse: {
          [i.ActionType.Eat]: [1, 2, 1, -1]
      },
      flammable: !0,
      worth: 5,
      tier: {
          [d.ItemTypeGroup.Medicinal]: 1
      },
      spawnOnMerchant: [s.BiomeType.Coastal]
  }, g(d.ItemType.Beggarticks, d.ItemTypeGroup.Medicinal), t.itemDescriptions[d.ItemType.MilkThistleFlowers] = {
      weight: .2,
      use: [i.ActionType.Eat],
      skillUse: r.SkillType.Botany,
      onBurn: [d.ItemType.PileOfAsh],
      onUse: {
          [i.ActionType.Eat]: [1, 2, 1, 1]
      },
      flammable: !0,
      worth: 5,
      tier: {
          [d.ItemTypeGroup.Medicinal]: 1
      },
      spawnOnMerchant: [s.BiomeType.Coastal]
  }, g(d.ItemType.MilkThistleFlowers, d.ItemTypeGroup.Medicinal), t.itemDescriptions[d.ItemType.DrawnMap] = {
      weight: .2,
      durability: 25,
      use: [i.ActionType.Decode],
      onBurn: [d.ItemType.PileOfAsh],
      repairable: !1,
      flammable: !0,
      worth: 25,
      dismantle: {
          items: [{
              type: d.ItemType.ShreddedPaper,
              amount: 1
          }]
      }
  }, t.itemDescriptions[d.ItemType.TatteredShirt] = {
      durability: 15,
      equip: r.EquipType.Chest,
      recipe: {
          components: [T(d.ItemType.CottonFabric, 1, 1, 1)],
          skill: r.SkillType.Tailoring,
          level: d.RecipeLevel.Intermediate,
          reputation: 25
      },
      defense: new o.Defense(1, new o.Resistances, new o.Vulnerabilities(o.DamageType.Fire, 2, o.DamageType.Piercing, 1, o.DamageType.Blunt, 1, o.DamageType.Slashing, 1)),
      disassemble: !0,
      craftable: !1,
      flammable: !0,
      worth: 25
  }, g(d.ItemType.TatteredShirt, d.ItemTypeGroup.Equipment), t.itemDescriptions[d.ItemType.TatteredPants] = {
      durability: 15,
      equip: r.EquipType.Legs,
      recipe: {
          components: [T(d.ItemType.CottonFabric, 1, 1, 1)],
          skill: r.SkillType.Tailoring,
          level: d.RecipeLevel.Intermediate,
          reputation: 25
      },
      defense: new o.Defense(1, new o.Resistances, new o.Vulnerabilities(o.DamageType.Fire, 2, o.DamageType.Piercing, 1, o.DamageType.Blunt, 1, o.DamageType.Slashing, 1)),
      disassemble: !0,
      craftable: !1,
      flammable: !0,
      worth: 25
  }, g(d.ItemType.TatteredPants, d.ItemTypeGroup.Equipment), t.itemDescriptions[d.ItemType.WoodenGate] = {
      use: [i.ActionType.Build],
      recipe: {
          components: [T(d.ItemType.Log, 3, 3), T(d.ItemType.WoodenDowels, 2, 2), T(d.ItemTypeGroup.Sharpened, 1, 0)],
          skill: r.SkillType.Woodworking,
          level: d.RecipeLevel.Expert,
          reputation: 25
      },
      durability: 10,
      onUse: {
          [i.ActionType.Build]: a.DoodadType.WoodenGate
      },
      burnsLike: [d.ItemType.Log, d.ItemType.Log, d.ItemType.Log, d.ItemType.WoodenDowels, d.ItemType.WoodenDowels],
      flammable: !0,
      worth: 50
  }, g(d.ItemType.WoodenGate, d.ItemTypeGroup.Housing), t.itemDescriptions[d.ItemType.PoisonIvyLeaves] = {
      weight: .1,
      use: [i.ActionType.Eat, i.ActionType.StokeFire],
      skillUse: r.SkillType.Botany,
      onBurn: [d.ItemType.PileOfAsh],
      onUse: {
          [i.ActionType.Eat]: [-3, -2, 1, -2],
          [i.ActionType.StokeFire]: 30
      },
      flammable: !0,
      worth: 5,
      tier: {
          [d.ItemTypeGroup.Compost]: 2
      },
      spawnOnMerchant: [s.BiomeType.Coastal]
  }, g(d.ItemType.PoisonIvyLeaves, d.ItemTypeGroup.Compost), t.itemDescriptions[d.ItemType.PoisonIvySeeds] = {
      weight: .1,
      use: [i.ActionType.Plant, i.ActionType.Eat],
      skillUse: r.SkillType.Botany,
      onBurn: [d.ItemType.PileOfAsh],
      onUse: {
          [i.ActionType.Plant]: a.DoodadType.PoisonIvy,
          [i.ActionType.Eat]: [-2, -1, 1, -1]
      },
      flammable: !0,
      worth: 5,
      spawnOnMerchant: [s.BiomeType.Coastal]
  }, g(d.ItemType.PoisonIvySeeds, d.ItemTypeGroup.Seed), t.itemDescriptions[d.ItemType.WroughtIronChest] = {
      use: [i.ActionType.Build],
      recipe: {
          components: [T(d.ItemType.WroughtIron, 15, 15, 15), T(d.ItemTypeGroup.Hammer, 1, 0), T(d.ItemTypeGroup.Tongs, 1, 0)],
          skill: r.SkillType.Blacksmithing,
          level: d.RecipeLevel.Advanced,
          requiredDoodad: a.DoodadTypeGroup.Anvil,
          requiresFire: !0,
          reputation: 25
      },
      durability: 50,
      disassemble: !0,
      requiredForDisassembly: [d.ItemTypeGroup.Hammer],
      doodadContainer: a.DoodadType.WroughtIronChest,
      onUse: {
          [i.ActionType.Build]: a.DoodadType.WroughtIronChest
      },
      worth: 750
  }, g(d.ItemType.WroughtIronChest, d.ItemTypeGroup.Storage), t.itemDescriptions[d.ItemType.IronChest] = {
      use: [i.ActionType.Build],
      recipe: {
          components: [T(d.ItemType.IronIngot, 15, 15, 15), T(d.ItemTypeGroup.Hammer, 1, 0), T(d.ItemTypeGroup.Tongs, 1, 0)],
          skill: r.SkillType.Blacksmithing,
          level: d.RecipeLevel.Expert,
          requiredDoodad: a.DoodadTypeGroup.Anvil,
          requiresFire: !0,
          reputation: 25
      },
      durability: 100,
      disassemble: !0,
      requiredForDisassembly: [d.ItemTypeGroup.Hammer, d.ItemTypeGroup.SandCastFlask],
      doodadContainer: a.DoodadType.IronChest,
      onUse: {
          [i.ActionType.Build]: a.DoodadType.IronChest
      },
      worth: 1250,
      spawnOnMerchant: [s.BiomeType.IceCap, s.BiomeType.Arid]
  }, g(d.ItemType.IronChest, d.ItemTypeGroup.Storage), t.itemDescriptions[d.ItemType.SwitchgrassSeeds] = {
      weight: .1,
      use: [i.ActionType.Plant, i.ActionType.Eat],
      skillUse: r.SkillType.Botany,
      onBurn: [d.ItemType.PileOfAsh],
      onUse: {
          [i.ActionType.Plant]: a.DoodadType.Switchgrass,
          [i.ActionType.Eat]: [1, 1, 1, -1]
      },
      flammable: !0,
      worth: 5,
      spawnOnMerchant: [s.BiomeType.Coastal]
  }, g(d.ItemType.SwitchgrassSeeds, d.ItemTypeGroup.Seed), t.itemDescriptions[d.ItemType.Apple] = {
      use: [i.ActionType.Eat],
      decaysInto: [d.ItemType.RottingVegetation],
      decayMax: 8e3,
      returnOnUseAndDecay: {
          type: d.ItemType.AppleSeeds
      },
      skillUse: r.SkillType.Botany,
      weight: .4,
      onBurn: [d.ItemType.PileOfAsh],
      onUse: {
          [i.ActionType.Eat]: [1, 8, 2, 1]
      },
      dismantle: {
          items: [{
              type: d.ItemType.AppleSeeds,
              amount: 1
          }],
          skill: r.SkillType.Botany,
          required: d.ItemTypeGroup.Sharpened
      },
      worth: 5,
      spawnOnMerchant: [s.BiomeType.Coastal]
  }, g(d.ItemType.Apple, d.ItemTypeGroup.Fruit), t.itemDescriptions[d.ItemType.SpiderEggs] = {
      decaysInto: [d.ItemType.SpiderSilk],
      spawnOnDecay: n.CreatureType.GiantSpider,
      spawnOnBreak: n.CreatureType.GiantSpider,
      spawnableTiles: n.TileGroup.Ground,
      use: [i.ActionType.Eat],
      weight: .3,
      onBurn: [d.ItemType.PileOfAsh],
      decayMax: 3e3,
      onUse: {
          [i.ActionType.Eat]: [-1, -2, 2, -1]
      },
      skillUse: r.SkillType.Anatomy,
      flammable: !0,
      worth: 25,
      spawnOnMerchant: [s.BiomeType.Coastal, s.BiomeType.Arid]
  }, t.itemDescriptions[d.ItemType.TailFeathers] = {
      weight: .6,
      onBurn: [d.ItemType.PileOfAsh, d.ItemType.PileOfAsh, d.ItemType.PileOfAsh, d.ItemType.PileOfAsh, d.ItemType.PileOfAsh],
      dismantle: {
          items: [{
              type: d.ItemType.Feather,
              amount: 5
          }]
      },
      flammable: !0,
      worth: 25
  }, t.itemDescriptions[d.ItemType.AppleSeeds] = {
      weight: .1,
      use: [i.ActionType.Plant, i.ActionType.Eat],
      skillUse: r.SkillType.Botany,
      onBurn: [d.ItemType.PileOfAsh],
      onUse: {
          [i.ActionType.Eat]: [-2, -2, 1, -1],
          [i.ActionType.Plant]: a.DoodadType.AppleTree
      },
      flammable: !0,
      worth: 5,
      spawnOnMerchant: [s.BiomeType.Coastal]
  }, g(d.ItemType.AppleSeeds, d.ItemTypeGroup.Seed), t.itemDescriptions[d.ItemType.VenomGland] = {
      weight: .1,
      use: [i.ActionType.Eat],
      skillUse: r.SkillType.Anatomy,
      decayMax: 4750,
      onBurn: [d.ItemType.PileOfAsh],
      onUse: {
          [i.ActionType.Eat]: [-10, -20, 1, 0]
      },
      worth: 25,
      tier: {
          [d.ItemTypeGroup.Medicinal]: 2
      },
      spawnOnMerchant: [s.BiomeType.Coastal, s.BiomeType.Arid]
  }, g(d.ItemType.VenomGland, d.ItemTypeGroup.Medicinal), t.itemDescriptions[d.ItemType.OrnateWoodenChest] = {
      weight: 18,
      use: [i.ActionType.Build],
      durability: 25,
      doodadContainer: a.DoodadType.OrnateWoodenChest,
      onUse: {
          [i.ActionType.Build]: a.DoodadType.OrnateWoodenChest
      },
      flammable: !0,
      worth: 1e3,
      burnsLike: [d.ItemType.Log, d.ItemType.Log, d.ItemType.Log, d.ItemType.WoodenDowels, d.ItemType.WoodenDowels]
  }, g(d.ItemType.OrnateWoodenChest, d.ItemTypeGroup.Storage), t.itemDescriptions[d.ItemType.RollOfRedCarpet] = {
      weight: 2.5,
      use: [i.ActionType.SetDown],
      durability: 15,
      onUse: {
          [i.ActionType.SetDown]: y.TerrainType.RedCarpet
      },
      flammable: !0,
      worth: 250,
      burnsLike: [d.ItemType.CottonFabric]
  }, g(d.ItemType.RollOfRedCarpet, d.ItemTypeGroup.Housing), t.itemDescriptions[d.ItemType.OrnateCape] = {
      weight: .3,
      durability: 20,
      equip: r.EquipType.Back,
      defense: new o.Defense(1, new o.Resistances, new o.Vulnerabilities(o.DamageType.Fire, 2)),
      flammable: !0,
      worth: 250,
      recipe: {
          components: [T(d.ItemType.CottonFabric, 1, 1, 1)],
          skill: r.SkillType.Tailoring,
          level: d.RecipeLevel.Expert,
          reputation: 25
      },
      craftable: !1,
      burnsLike: [d.ItemType.CottonFabric]
  }, g(d.ItemType.OrnateCape, d.ItemTypeGroup.Equipment), t.itemDescriptions[d.ItemType.FireBladder] = {
      weight: .8,
      onBurn: [d.ItemType.PileOfAsh],
      use: [i.ActionType.Squeeze],
      decayMax: 1e3,
      decaysInto: [d.ItemType.RottenMeat],
      damageType: o.DamageType.Blunt | o.DamageType.Fire,
      worth: 100
  }, t.itemDescriptions[d.ItemType.GoldenKey] = {
      weight: 1,
      worth: 1e3
  }, g(d.ItemType.GoldenKey, d.ItemTypeGroup.Treasure), t.itemDescriptions[d.ItemType.WoodenSword] = {
      durability: 15,
      equip: r.EquipType.Held,
      attack: 3,
      damageType: o.DamageType.Blunt | o.DamageType.Piercing,
      recipe: {
          components: [T(d.ItemType.WoodenPole, 2, 2), T(d.ItemTypeGroup.Sharpened, 1, 0)],
          skill: r.SkillType.Woodworking,
          level: d.RecipeLevel.Intermediate,
          reputation: -50
      },
      use: [i.ActionType.Gather, i.ActionType.Melee],
      burnsLike: [d.ItemType.WoodenPole, d.ItemType.WoodenPole],
      flammable: !0,
      worth: 10,
      spawnOnWorldGen: {
          [s.BiomeType.Coastal]: {
              [l.WorldZ.Cave]: {
                  [y.TerrainType.CobblestoneFlooring]: 1,
                  [y.TerrainType.WoodenFlooring]: 1,
                  [y.TerrainType.RockGround]: 1,
                  [y.TerrainType.Dirt]: 1,
                  [y.TerrainType.Gravel]: 1
              },
              [l.WorldZ.Overworld]: {
                  [y.TerrainType.CobblestoneFlooring]: 1,
                  [y.TerrainType.WoodenFlooring]: 1
              }
          }
      }
  }, g(d.ItemType.WoodenSword, d.ItemTypeGroup.Weapon), t.itemDescriptions[d.ItemType.ClayKiln] = {
      use: [i.ActionType.Build],
      recipe: {
          components: [T(d.ItemType.ClayBrick, 8, 8, 8)],
          skill: r.SkillType.Claythrowing,
          level: d.RecipeLevel.Advanced,
          reputation: -25
      },
      disassemble: !0,
      durability: 20,
      onUse: {
          [i.ActionType.Build]: a.DoodadType.ClayKiln
      },
      worth: 50,
      spawnOnMerchant: [s.BiomeType.Arid]
  }, g(d.ItemType.ClayKiln, d.ItemTypeGroup.Heating, d.ItemTypeGroup.Kiln), t.itemDescriptions[d.ItemType.ClayCampfire] = {
      use: [i.ActionType.Build],
      recipe: {
          components: [T(d.ItemType.ClayBrick, 5, 5, 5)],
          skill: r.SkillType.Camping,
          level: d.RecipeLevel.Intermediate,
          reputation: -25
      },
      disassemble: !0,
      durability: 15,
      onUse: {
          [i.ActionType.Build]: a.DoodadType.ClayCampfire
      },
      worth: 25,
      spawnOnMerchant: [s.BiomeType.Arid]
  }, g(d.ItemType.ClayCampfire, d.ItemTypeGroup.Firemaking, d.ItemTypeGroup.Heating, d.ItemTypeGroup.Campfire), t.itemDescriptions[d.ItemType.ClayFurnace] = {
      use: [i.ActionType.Build],
      recipe: {
          components: [T(d.ItemType.ClayBrick, 8, 8, 8)],
          skill: r.SkillType.Claythrowing,
          level: d.RecipeLevel.Advanced,
          reputation: -25
      },
      disassemble: !0,
      durability: 20,
      onUse: {
          [i.ActionType.Build]: a.DoodadType.ClayFurnace
      },
      worth: 50,
      spawnOnMerchant: [s.BiomeType.Arid]
  }, g(d.ItemType.ClayFurnace, d.ItemTypeGroup.Heating, d.ItemTypeGroup.Furnace), t.itemDescriptions[d.ItemType.ClayWaterStill] = {
      use: [i.ActionType.Build],
      recipe: {
          components: [T(d.ItemType.String, 1, 1, 1), T(d.ItemType.ClayBrick, 2, 2, 1), T(d.ItemTypeGroup.Sharpened, 1, 0), T(d.ItemTypeGroup.Pole, 1, 1, 1)],
          skill: r.SkillType.Claythrowing,
          level: d.RecipeLevel.Intermediate,
          reputation: 25
      },
      disassemble: !0,
      durability: 20,
      onUse: {
          [i.ActionType.Build]: a.DoodadType.ClayWaterStill
      },
      worth: 75,
      spawnOnMerchant: [s.BiomeType.Arid]
  }, g(d.ItemType.ClayWaterStill, d.ItemTypeGroup.WaterStill), t.itemDescriptions[d.ItemType.SandstoneCampfire] = {
      use: [i.ActionType.Build],
      recipe: {
          components: [T(d.ItemType.Sandstone, 5, 5, 5)],
          skill: r.SkillType.Camping,
          level: d.RecipeLevel.Intermediate,
          reputation: -25
      },
      disassemble: !0,
      durability: 10,
      onUse: {
          [i.ActionType.Build]: a.DoodadType.SandstoneCampfire
      },
      worth: 25,
      spawnOnMerchant: [s.BiomeType.Arid]
  }, g(d.ItemType.SandstoneCampfire, d.ItemTypeGroup.Firemaking, d.ItemTypeGroup.Heating, d.ItemTypeGroup.Campfire), t.itemDescriptions[d.ItemType.SandstoneFurnace] = {
      use: [i.ActionType.Build],
      recipe: {
          components: [T(d.ItemType.Sandstone, 8, 8, 8)],
          skill: r.SkillType.Stonecrafting,
          level: d.RecipeLevel.Advanced,
          reputation: -25
      },
      disassemble: !0,
      durability: 15,
      onUse: {
          [i.ActionType.Build]: a.DoodadType.SandstoneFurnace
      },
      worth: 50,
      spawnOnMerchant: [s.BiomeType.Arid]
  }, g(d.ItemType.SandstoneFurnace, d.ItemTypeGroup.Heating, d.ItemTypeGroup.Furnace), t.itemDescriptions[d.ItemType.SandstoneWaterStill] = {
      use: [i.ActionType.Build],
      recipe: {
          components: [T(d.ItemType.String, 1, 1, 1), T(d.ItemType.Sandstone, 2, 2, 1), T(d.ItemTypeGroup.Sharpened, 1, 0), T(d.ItemTypeGroup.Pole, 1, 1, 1)],
          skill: r.SkillType.Stonecrafting,
          level: d.RecipeLevel.Intermediate,
          reputation: 25
      },
      disassemble: !0,
      durability: 15,
      onUse: {
          [i.ActionType.Build]: a.DoodadType.SandstoneWaterStill
      },
      worth: 75,
      spawnOnMerchant: [s.BiomeType.Arid]
  }, g(d.ItemType.SandstoneWaterStill, d.ItemTypeGroup.WaterStill), t.itemDescriptions[d.ItemType.StoneKiln] = {
      use: [i.ActionType.Build],
      recipe: {
          components: [T(d.ItemTypeGroup.Rock, 8, 8, 8)],
          skill: r.SkillType.Stonecrafting,
          level: d.RecipeLevel.Advanced,
          reputation: -25
      },
      disassemble: !0,
      durability: 25,
      onUse: {
          [i.ActionType.Build]: a.DoodadType.StoneKiln
      },
      worth: 50,
      spawnOnMerchant: [s.BiomeType.Arid]
  }, g(d.ItemType.StoneKiln, d.ItemTypeGroup.Heating, d.ItemTypeGroup.Kiln), t.itemDescriptions[d.ItemType.WroughtIronAnvil] = {
      use: [i.ActionType.Build],
      recipe: {
          components: [T(d.ItemType.TalcumPowder, 1, 1, 0, !0), T(d.ItemType.Log, 1, 1, 1), T(d.ItemType.WroughtIron, 12, 12, 12), T(d.ItemTypeGroup.SandCastFlask, 1, 0), T(d.ItemTypeGroup.Hammer, 1, 0), T(d.ItemTypeGroup.Tongs, 1, 0)],
          skill: r.SkillType.Blacksmithing,
          requiredDoodad: a.DoodadTypeGroup.Anvil,
          requiresFire: !0,
          level: d.RecipeLevel.Advanced,
          reputation: -50
      },
      disassemble: !0,
      requiredForDisassembly: [d.ItemTypeGroup.Hammer],
      durability: 50,
      onUse: {
          [i.ActionType.Build]: a.DoodadType.WroughtIronAnvil
      },
      worth: 450
  }, g(d.ItemType.WroughtIronAnvil, d.ItemTypeGroup.Anvil), t.itemDescriptions[d.ItemType.IronAnvil] = {
      use: [i.ActionType.Build],
      recipe: {
          components: [T(d.ItemType.TalcumPowder, 1, 1, 0, !0), T(d.ItemType.Log, 1, 1, 1), T(d.ItemType.IronIngot, 12, 12, 12), T(d.ItemTypeGroup.SandCastFlask, 1, 0), T(d.ItemTypeGroup.Hammer, 1, 0), T(d.ItemTypeGroup.Tongs, 1, 0)],
          skill: r.SkillType.Blacksmithing,
          level: d.RecipeLevel.Expert,
          requiredDoodad: a.DoodadTypeGroup.Anvil,
          requiresFire: !0,
          reputation: -50
      },
      disassemble: !0,
      requiredForDisassembly: [d.ItemTypeGroup.Hammer, d.ItemTypeGroup.SandCastFlask],
      durability: 100,
      onUse: {
          [i.ActionType.Build]: a.DoodadType.IronAnvil
      },
      worth: 750,
      spawnOnMerchant: [s.BiomeType.IceCap, s.BiomeType.Arid]
  }, g(d.ItemType.IronAnvil, d.ItemTypeGroup.Anvil), t.itemDescriptions[d.ItemType.MageRobe] = {
      durability: 10,
      equip: r.EquipType.Back,
      showOverHair: !0,
      defense: new o.Defense(1, new o.Resistances(o.DamageType.Slashing, 2), new o.Vulnerabilities(o.DamageType.Piercing, 1)),
      recipe: {
          components: [T(d.ItemType.CottonFabric, 1, 1, 1)],
          skill: r.SkillType.Tailoring,
          level: d.RecipeLevel.Expert,
          reputation: 25
      },
      disassemble: !0,
      craftable: !1,
      flammable: !0,
      hideHelmet: !0,
      worth: 250,
      spawnOnMerchant: [s.BiomeType.Coastal, s.BiomeType.Arid]
  }, g(d.ItemType.MageRobe, d.ItemTypeGroup.Equipment), t.itemDescriptions[d.ItemType.OrbOfInfluence] = {
      weight: 1,
      onBurn: [d.ItemType.PileOfAsh],
      use: [i.ActionType.RubClockwise, i.ActionType.RubCounterclockwise],
      worth: 250
  }, t.itemDescriptions[d.ItemType.AnimalClaw] = {
      weight: .3,
      durability: 10,
      onBurn: [d.ItemType.PileOfAsh],
      damageType: o.DamageType.Piercing,
      worth: 5,
      tier: {
          [d.ItemTypeGroup.Needle]: 1
      },
      spawnOnWorldGen: {
          [s.BiomeType.Coastal]: {
              [l.WorldZ.Cave]: {
                  [y.TerrainType.RockGround]: 1,
                  [y.TerrainType.Dirt]: 1,
                  [y.TerrainType.Gravel]: 1
              },
              [l.WorldZ.Overworld]: {
                  [y.TerrainType.Dirt]: 1,
                  [y.TerrainType.Grass]: 1,
                  [y.TerrainType.Gravel]: 1
              }
          },
          [s.BiomeType.Arid]: {
              [l.WorldZ.Overworld]: {
                  [y.TerrainType.DesertSand]: 1
              }
          },
          [s.BiomeType.IceCap]: {
              [l.WorldZ.Cave]: {
                  [y.TerrainType.RockGround]: 1,
                  [y.TerrainType.Dirt]: 1
              },
              [l.WorldZ.Overworld]: {
                  [y.TerrainType.Dirt]: 1
              }
          }
      }
  }, g(d.ItemType.AnimalClaw, d.ItemTypeGroup.Needle), t.itemDescriptions[d.ItemType.AnimalPelt] = {
      weight: 1.5,
      onBurn: [d.ItemType.PileOfAsh, d.ItemType.PileOfAsh, d.ItemType.PileOfAsh, d.ItemType.PileOfAsh],
      equip: r.EquipType.Back,
      defense: new o.Defense(1, new o.Resistances(o.DamageType.Slashing, 1), new o.Vulnerabilities(o.DamageType.Blunt, 1)),
      dismantle: {
          items: [{
              type: d.ItemType.LeatherHide,
              amount: 1
          }, {
              type: d.ItemType.AnimalFur,
              amount: 1
          }],
          required: d.ItemTypeGroup.Sharpened,
          skill: r.SkillType.Leatherworking
      },
      flammable: !0,
      worth: 10,
      tier: {
          [d.ItemTypeGroup.Fabric]: 1
      }
  }, g(d.ItemType.AnimalPelt, d.ItemTypeGroup.Equipment, d.ItemTypeGroup.Fabric), t.itemDescriptions[d.ItemType.AnimalFur] = {
      weight: .1,
      onBurn: [d.ItemType.PileOfAsh],
      use: [i.ActionType.StokeFire],
      onUse: {
          [i.ActionType.StokeFire]: 30
      },
      flammable: !0,
      worth: 5
  }, g(d.ItemType.AnimalFur, d.ItemTypeGroup.Tinder), t.itemDescriptions[d.ItemType.Scales] = {
      weight: .8,
      onBurn: [d.ItemType.PileOfAsh],
      worth: 10,
      tier: {
          [d.ItemTypeGroup.Fabric]: 1
      },
      spawnOnMerchant: [s.BiomeType.Coastal, s.BiomeType.Arid]
  }, g(d.ItemType.Scales, d.ItemTypeGroup.Fabric), t.itemDescriptions[d.ItemType.SharkFin] = {
      weight: .5,
      onBurn: [d.ItemType.PileOfAsh],
      decayMax: 4750,
      decaysInto: [d.ItemType.RottenMeat],
      worth: 10,
      spawnOnMerchant: [s.BiomeType.Coastal, s.BiomeType.Arid]
  }, t.itemDescriptions[d.ItemType.RawReptileMeat] = {
      weight: .7,
      use: [i.ActionType.Eat],
      decayMax: 2750,
      decaysInto: [d.ItemType.RottenMeat],
      onBurn: [d.ItemType.CookedReptileMeat],
      onUse: {
          [i.ActionType.Eat]: [-2, 2, 6, -2]
      },
      skillUse: r.SkillType.Anatomy,
      worth: 5,
      tier: {
          [d.ItemTypeGroup.Meat]: 2
      },
      spawnOnMerchant: [s.BiomeType.Arid]
  }, g(d.ItemType.RawReptileMeat, d.ItemTypeGroup.Meat, d.ItemTypeGroup.RawMeat), t.itemDescriptions[d.ItemType.CookedReptileMeat] = {
      use: [i.ActionType.Eat],
      decayMax: 4750,
      decaysInto: [d.ItemType.RottenMeat],
      recipe: {
          components: [T(d.ItemType.RawReptileMeat, 1, 1), T(d.ItemTypeGroup.CookingEquipment, 1, 0)],
          skill: r.SkillType.Cooking,
          level: d.RecipeLevel.Intermediate,
          requiresFire: !0,
          reputation: 25
      },
      onBurn: [d.ItemType.PileOfAsh],
      onUse: {
          [i.ActionType.Eat]: [2, 12, 7, -1]
      },
      skillUse: r.SkillType.Cooking,
      worth: 15,
      tier: {
          [d.ItemTypeGroup.Meat]: 3
      },
      spawnOnMerchant: [s.BiomeType.Arid]
  }, g(d.ItemType.CookedReptileMeat, d.ItemTypeGroup.Meat, d.ItemTypeGroup.CookedMeat, d.ItemTypeGroup.CookedFood), t.itemDescriptions[d.ItemType.Tentacles] = {
      weight: .6,
      use: [i.ActionType.Eat],
      decayMax: 5500,
      decaysInto: [d.ItemType.RottenMeat],
      onBurn: [d.ItemType.CookedTentacles],
      onUse: {
          [i.ActionType.Eat]: [0, 2, 5, -1]
      },
      skillUse: r.SkillType.Anatomy,
      worth: 10,
      tier: {
          [d.ItemTypeGroup.Meat]: 1
      },
      spawnOnMerchant: [s.BiomeType.Coastal, s.BiomeType.Arid]
  }, g(d.ItemType.Tentacles, d.ItemTypeGroup.RawMeat, d.ItemTypeGroup.Meat, d.ItemTypeGroup.RawFish), t.itemDescriptions[d.ItemType.CookedTentacles] = {
      use: [i.ActionType.Eat],
      decayMax: 6500,
      decaysInto: [d.ItemType.RottenMeat],
      recipe: {
          components: [T(d.ItemType.Tentacles, 1, 1), T(d.ItemTypeGroup.CookingEquipment, 1, 0)],
          skill: r.SkillType.Cooking,
          level: d.RecipeLevel.Intermediate,
          requiresFire: !0,
          reputation: 25
      },
      onBurn: [d.ItemType.PileOfAsh],
      onUse: {
          [i.ActionType.Eat]: [1, 6, 6, -1]
      },
      skillUse: r.SkillType.Cooking,
      worth: 20,
      tier: {
          [d.ItemTypeGroup.Meat]: 2
      },
      spawnOnMerchant: [s.BiomeType.Coastal, s.BiomeType.Arid]
  }, g(d.ItemType.CookedTentacles, d.ItemTypeGroup.Meat, d.ItemTypeGroup.CookedMeat, d.ItemTypeGroup.CookedFood), t.itemDescriptions[d.ItemType.WormMeat] = {
      weight: .5,
      use: [i.ActionType.Eat],
      decayMax: 4500,
      decaysInto: [d.ItemType.RottenMeat],
      onBurn: [d.ItemType.CookedWormMeat],
      onUse: {
          [i.ActionType.Eat]: [0, 0, 4, 0]
      },
      skillUse: r.SkillType.Anatomy,
      worth: 5,
      tier: {
          [d.ItemTypeGroup.Meat]: 1
      }
  }, g(d.ItemType.WormMeat, d.ItemTypeGroup.Meat, d.ItemTypeGroup.RawMeat, d.ItemTypeGroup.Bait), t.itemDescriptions[d.ItemType.CookedWormMeat] = {
      use: [i.ActionType.Eat],
      decayMax: 5500,
      decaysInto: [d.ItemType.RottenMeat],
      recipe: {
          components: [T(d.ItemType.WormMeat, 1, 1), T(d.ItemTypeGroup.CookingEquipment, 1, 0)],
          skill: r.SkillType.Cooking,
          level: d.RecipeLevel.Intermediate,
          requiresFire: !0,
          reputation: 25
      },
      onBurn: [d.ItemType.PileOfAsh],
      onUse: {
          [i.ActionType.Eat]: [1, 4, 5, -1]
      },
      skillUse: r.SkillType.Cooking,
      worth: 10,
      tier: {
          [d.ItemTypeGroup.Meat]: 2
      }
  }, g(d.ItemType.CookedWormMeat, d.ItemTypeGroup.Meat, d.ItemTypeGroup.CookedMeat, d.ItemTypeGroup.CookedFood), t.itemDescriptions[d.ItemType.StonePickaxe] = {
      durability: 50,
      equip: r.EquipType.Held,
      attack: 2,
      damageType: o.DamageType.Blunt | o.DamageType.Piercing,
      use: [i.ActionType.Gather, i.ActionType.Melee],
      recipe: {
          components: [T(d.ItemType.String, 1, 1, 1), T(d.ItemTypeGroup.Pole, 1, 1, 1), T(d.ItemTypeGroup.SharpenedRock, 2, 2, 2)],
          skill: r.SkillType.Tinkering,
          level: d.RecipeLevel.Intermediate,
          reputation: -75
      },
      disassemble: !0,
      worth: 25,
      flammable: !0,
      spawnOnMerchant: [s.BiomeType.Coastal, s.BiomeType.IceCap]
  }, g(d.ItemType.StonePickaxe, d.ItemTypeGroup.Weapon, d.ItemTypeGroup.Tool), t.itemDescriptions[d.ItemType.WroughtIronAxe] = {
      durability: 150,
      equip: r.EquipType.Held,
      attack: 5,
      damageType: o.DamageType.Slashing,
      use: [i.ActionType.Carve, i.ActionType.Gather, i.ActionType.Harvest, i.ActionType.Melee],
      recipe: {
          components: [T(d.ItemType.TalcumPowder, 1, 1, 0, !0), T(d.ItemType.WroughtIron, 4, 4, 4), T(d.ItemTypeGroup.SandCastFlask, 1, 0), T(d.ItemTypeGroup.Pole, 1, 1, 1), T(d.ItemTypeGroup.Hammer, 1, 0), T(d.ItemTypeGroup.Tongs, 1, 0)],
          skill: r.SkillType.Blacksmithing,
          level: d.RecipeLevel.Simple,
          requiredDoodad: a.DoodadTypeGroup.Anvil,
          requiresFire: !0,
          reputation: -500
      },
      disassemble: !0,
      requiredForDisassembly: [d.ItemTypeGroup.Hammer],
      worth: 150,
      tier: {
          [d.ItemTypeGroup.Sharpened]: 3
      }
  }, g(d.ItemType.WroughtIronAxe, d.ItemTypeGroup.Sharpened, d.ItemTypeGroup.Weapon, d.ItemTypeGroup.Tool), t.itemDescriptions[d.ItemType.IronAxe] = {
      durability: 300,
      equip: r.EquipType.Held,
      attack: 6,
      damageType: o.DamageType.Slashing,
      use: [i.ActionType.Carve, i.ActionType.Gather, i.ActionType.Harvest, i.ActionType.Melee],
      recipe: {
          components: [T(d.ItemType.TalcumPowder, 1, 1, 0, !0), T(d.ItemType.IronIngot, 4, 4, 4), T(d.ItemTypeGroup.SandCastFlask, 1, 0), T(d.ItemTypeGroup.Pole, 1, 1, 1), T(d.ItemTypeGroup.Hammer, 1, 0), T(d.ItemTypeGroup.Tongs, 1, 0)],
          skill: r.SkillType.Blacksmithing,
          level: d.RecipeLevel.Intermediate,
          requiredDoodad: a.DoodadTypeGroup.Anvil,
          requiresFire: !0,
          reputation: -1e3
      },
      disassemble: !0,
      requiredForDisassembly: [d.ItemTypeGroup.Hammer, d.ItemTypeGroup.SandCastFlask],
      worth: 250,
      tier: {
          [d.ItemTypeGroup.Sharpened]: 4
      },
      spawnOnMerchant: [s.BiomeType.IceCap, s.BiomeType.Arid]
  }, g(d.ItemType.IronAxe, d.ItemTypeGroup.Sharpened, d.ItemTypeGroup.Weapon, d.ItemTypeGroup.Tool), t.itemDescriptions[d.ItemType.FertileSoil] = {
      recipe: {
          components: [T(d.ItemType.Soil, 1, 1), T(d.ItemType.Fertilizer, 1, 1)],
          skill: r.SkillType.Gardening,
          level: d.RecipeLevel.Advanced,
          reputation: 50
      },
      use: [i.ActionType.SetDown, i.ActionType.SmotherFire],
      onUse: {
          [i.ActionType.SetDown]: y.TerrainType.FertileSoil,
          [i.ActionType.SmotherFire]: y.TerrainType.FertileSoil
      },
      worth: 25,
      spawnOnMerchant: [s.BiomeType.Coastal, s.BiomeType.Arid]
  }, t.itemDescriptions[d.ItemType.StoneHoe] = {
      durability: 50,
      equip: r.EquipType.Held,
      attack: 1,
      damageType: o.DamageType.Slashing,
      use: [i.ActionType.Till, i.ActionType.Harvest, i.ActionType.Gather, i.ActionType.Melee],
      recipe: {
          components: [T(d.ItemType.String, 2, 2, 2), T(d.ItemTypeGroup.SharpenedRock, 1, 1, 1), T(d.ItemTypeGroup.Pole, 1, 1, 1)],
          skill: r.SkillType.Tinkering,
          level: d.RecipeLevel.Intermediate,
          reputation: 75
      },
      disassemble: !0,
      worth: 25,
      flammable: !0,
      spawnOnMerchant: [s.BiomeType.Coastal, s.BiomeType.IceCap]
  }, g(d.ItemType.StoneHoe, d.ItemTypeGroup.Tool, d.ItemTypeGroup.Weapon), t.itemDescriptions[d.ItemType.WroughtIronHoe] = {
      durability: 200,
      equip: r.EquipType.Held,
      attack: 3,
      damageType: o.DamageType.Slashing,
      use: [i.ActionType.Till, i.ActionType.Harvest, i.ActionType.Gather, i.ActionType.Melee],
      recipe: {
          components: [T(d.ItemType.TalcumPowder, 1, 1, 0, !0), T(d.ItemType.String, 2, 2, 2), T(d.ItemType.WroughtIron, 3, 3, 3), T(d.ItemTypeGroup.SandCastFlask, 1, 0), T(d.ItemTypeGroup.Pole, 1, 1, 1), T(d.ItemTypeGroup.Hammer, 1, 0), T(d.ItemTypeGroup.Tongs, 1, 0)],
          skill: r.SkillType.Blacksmithing,
          level: d.RecipeLevel.Intermediate,
          requiredDoodad: a.DoodadTypeGroup.Anvil,
          requiresFire: !0,
          reputation: 50
      },
      disassemble: !0,
      requiredForDisassembly: [d.ItemTypeGroup.Hammer],
      worth: 150
  }, g(d.ItemType.WroughtIronHoe, d.ItemTypeGroup.Tool, d.ItemTypeGroup.Weapon), t.itemDescriptions[d.ItemType.IronHoe] = {
      durability: 400,
      equip: r.EquipType.Held,
      attack: 4,
      damageType: o.DamageType.Slashing,
      use: [i.ActionType.Till, i.ActionType.Harvest, i.ActionType.Gather, i.ActionType.Melee],
      recipe: {
          components: [T(d.ItemType.TalcumPowder, 1, 1, 0, !0), T(d.ItemType.String, 2, 2, 2), T(d.ItemType.IronIngot, 3, 3, 3), T(d.ItemTypeGroup.SandCastFlask, 1, 0), T(d.ItemTypeGroup.Pole, 1, 1, 1), T(d.ItemTypeGroup.Hammer, 1, 0), T(d.ItemTypeGroup.Tongs, 1, 0)],
          skill: r.SkillType.Blacksmithing,
          level: d.RecipeLevel.Advanced,
          requiredDoodad: a.DoodadTypeGroup.Anvil,
          requiresFire: !0,
          reputation: 25
      },
      disassemble: !0,
      requiredForDisassembly: [d.ItemTypeGroup.Hammer, d.ItemTypeGroup.SandCastFlask],
      worth: 250,
      spawnOnMerchant: [s.BiomeType.IceCap, s.BiomeType.Arid]
  }, g(d.ItemType.IronHoe, d.ItemTypeGroup.Tool, d.ItemTypeGroup.Weapon), t.itemDescriptions[d.ItemType.LavaBeetleHelmet] = {
      durability: 75,
      equip: r.EquipType.Head,
      defense: new o.Defense(3, new o.Resistances(o.DamageType.Slashing, 1, o.DamageType.Blunt, 3, o.DamageType.Fire, 4), new o.Vulnerabilities),
      repairable: !1,
      damageType: o.DamageType.Piercing,
      weight: 1.5,
      worth: 500,
      spawnOnMerchant: [s.BiomeType.Arid]
  }, g(d.ItemType.LavaBeetleHelmet, d.ItemTypeGroup.Equipment), t.itemDescriptions[d.ItemType.SpruceCone] = {
      weight: .2,
      onBurn: [d.ItemType.PileOfAsh],
      skillUse: r.SkillType.Botany,
      dismantle: {
          items: [{
              type: d.ItemType.SpruceSeeds,
              amount: 1
          }],
          required: d.ItemTypeGroup.Sharpened,
          skill: r.SkillType.Botany
      },
      flammable: !0,
      worth: 5,
      spawnOnMerchant: [s.BiomeType.Coastal, s.BiomeType.IceCap]
  }, t.itemDescriptions[d.ItemType.SpruceSeeds] = {
      weight: .1,
      skillUse: r.SkillType.Botany,
      use: [i.ActionType.Plant, i.ActionType.Eat],
      onBurn: [d.ItemType.PileOfAsh],
      onUse: {
          [i.ActionType.Eat]: [-1, 1, 1, -1],
          [i.ActionType.Plant]: a.DoodadType.SpruceTree
      },
      flammable: !0,
      worth: 5,
      spawnOnMerchant: [s.BiomeType.Coastal, s.BiomeType.IceCap]
  }, g(d.ItemType.SpruceSeeds, d.ItemTypeGroup.Seed), t.itemDescriptions[d.ItemType.SpruceNeedles] = {
      use: [i.ActionType.StokeFire],
      weight: .1,
      onBurn: [d.ItemType.PileOfAsh],
      onUse: {
          [i.ActionType.StokeFire]: 30
      },
      worth: 5,
      tier: {
          [d.ItemTypeGroup.Compost]: 2
      },
      spawnOnWorldGen: {
          [s.BiomeType.Coastal]: {
              [l.WorldZ.Overworld]: {
                  [y.TerrainType.Snow]: 1
              }
          },
          [s.BiomeType.IceCap]: {
              [l.WorldZ.Overworld]: {
                  [y.TerrainType.Snow]: 1,
                  [y.TerrainType.Dirt]: 1
              }
          }
      },
      spawnOnMerchant: [s.BiomeType.Coastal, s.BiomeType.IceCap]
  }, g(d.ItemType.SpruceNeedles, d.ItemTypeGroup.Compost, d.ItemTypeGroup.Tinder), t.itemDescriptions[d.ItemType.CypressCone] = {
      weight: .2,
      onBurn: [d.ItemType.PileOfAsh],
      skillUse: r.SkillType.Botany,
      dismantle: {
          items: [{
              type: d.ItemType.CypressSeeds,
              amount: 1
          }],
          required: d.ItemTypeGroup.Sharpened,
          skill: r.SkillType.Botany
      },
      flammable: !0,
      worth: 5,
      spawnOnMerchant: [s.BiomeType.Coastal]
  }, t.itemDescriptions[d.ItemType.CypressSeeds] = {
      weight: .1,
      skillUse: r.SkillType.Botany,
      use: [i.ActionType.Plant, i.ActionType.Eat],
      onBurn: [d.ItemType.PileOfAsh],
      onUse: {
          [i.ActionType.Eat]: [-1, 6, 1, -1],
          [i.ActionType.Plant]: a.DoodadType.CypressTree
      },
      flammable: !0,
      worth: 5,
      spawnOnMerchant: [s.BiomeType.Coastal]
  }, g(d.ItemType.CypressSeeds, d.ItemTypeGroup.Seed), t.itemDescriptions[d.ItemType.CypressLeaves] = {
      use: [i.ActionType.StokeFire],
      weight: .1,
      onBurn: [d.ItemType.PileOfAsh],
      onUse: {
          [i.ActionType.StokeFire]: 30
      },
      flammable: !0,
      worth: 5,
      tier: {
          [d.ItemTypeGroup.Compost]: 2
      },
      spawnOnMerchant: [s.BiomeType.Coastal]
  }, g(d.ItemType.CypressLeaves, d.ItemTypeGroup.Compost, d.ItemTypeGroup.Tinder), t.itemDescriptions[d.ItemType.Lettuce] = {
      weight: .3,
      use: [i.ActionType.Eat],
      skillUse: r.SkillType.Botany,
      decayMax: 9750,
      decaysInto: [d.ItemType.RottingVegetation],
      onBurn: [d.ItemType.PileOfAsh],
      onUse: {
          [i.ActionType.Eat]: [2, 8, 3, 1]
      },
      worth: 10,
      spawnOnMerchant: [s.BiomeType.Coastal]
  }, g(d.ItemType.Lettuce, d.ItemTypeGroup.Vegetable), t.itemDescriptions[d.ItemType.LettuceSeeds] = {
      weight: .1,
      use: [i.ActionType.Plant, i.ActionType.Eat],
      skillUse: r.SkillType.Botany,
      onBurn: [d.ItemType.PileOfAsh],
      onUse: {
          [i.ActionType.Plant]: a.DoodadType.Lettuce,
          [i.ActionType.Eat]: [1, 4, 1, -1]
      },
      flammable: !0,
      worth: 5,
      spawnOnMerchant: [s.BiomeType.Coastal]
  }, g(d.ItemType.LettuceSeeds, d.ItemTypeGroup.Seed), t.itemDescriptions[d.ItemType.ChiveSeeds] = {
      weight: .1,
      use: [i.ActionType.Plant, i.ActionType.Eat],
      skillUse: r.SkillType.Botany,
      onBurn: [d.ItemType.PileOfAsh],
      onUse: {
          [i.ActionType.Plant]: a.DoodadType.Chives,
          [i.ActionType.Eat]: [1, 2, 1, -1]
      },
      flammable: !0,
      worth: 5,
      spawnOnMerchant: [s.BiomeType.Coastal]
  }, g(d.ItemType.ChiveSeeds, d.ItemTypeGroup.Seed), t.itemDescriptions[d.ItemType.Potato] = {
      weight: .3,
      use: [i.ActionType.Eat],
      skillUse: r.SkillType.Botany,
      decayMax: 15e3,
      decaysInto: [d.ItemType.RottingVegetation],
      onBurn: [d.ItemType.CookedPotato],
      onUse: {
          [i.ActionType.Eat]: [-1, -1, 4, -1]
      },
      worth: 10,
      spawnOnMerchant: [s.BiomeType.Coastal]
  }, g(d.ItemType.Potato, d.ItemTypeGroup.Vegetable), t.itemDescriptions[d.ItemType.PotatoSeeds] = {
      weight: .1,
      use: [i.ActionType.Plant, i.ActionType.Eat],
      skillUse: r.SkillType.Botany,
      onBurn: [d.ItemType.PileOfAsh],
      onUse: {
          [i.ActionType.Plant]: a.DoodadType.PotatoPlant,
          [i.ActionType.Eat]: [0, 2, 1, -1]
      },
      flammable: !0,
      worth: 5,
      spawnOnMerchant: [s.BiomeType.Coastal]
  }, g(d.ItemType.PotatoSeeds, d.ItemTypeGroup.Seed), t.itemDescriptions[d.ItemType.Carrot] = {
      weight: .3,
      use: [i.ActionType.Eat],
      skillUse: r.SkillType.Botany,
      decayMax: 13750,
      decaysInto: [d.ItemType.RottingVegetation],
      onBurn: [d.ItemType.PileOfAsh],
      onUse: {
          [i.ActionType.Eat]: [2, 8, 3, -1]
      },
      worth: 10,
      spawnOnMerchant: [s.BiomeType.Coastal]
  }, g(d.ItemType.Carrot, d.ItemTypeGroup.Vegetable), t.itemDescriptions[d.ItemType.CarrotSeeds] = {
      weight: .1,
      use: [i.ActionType.Plant, i.ActionType.Eat],
      skillUse: r.SkillType.Botany,
      onBurn: [d.ItemType.PileOfAsh],
      onUse: {
          [i.ActionType.Plant]: a.DoodadType.Carrots,
          [i.ActionType.Eat]: [1, 3, 1, -1]
      },
      flammable: !0,
      worth: 5,
      spawnOnMerchant: [s.BiomeType.Coastal]
  }, g(d.ItemType.CarrotSeeds, d.ItemTypeGroup.Seed), t.itemDescriptions[d.ItemType.CornEar] = {
      weight: .4,
      use: [i.ActionType.Eat],
      skillUse: r.SkillType.Botany,
      decayMax: 1e4,
      decaysInto: [d.ItemType.RottingVegetation],
      onBurn: [d.ItemType.CookedCornCob],
      onUse: {
          [i.ActionType.Eat]: [2, 3, 3, -1]
      },
      dismantle: {
          items: [{
              type: d.ItemType.CornSeeds,
              amount: 1
          }],
          skill: r.SkillType.Botany
      },
      worth: 10,
      spawnOnMerchant: [s.BiomeType.Coastal]
  }, g(d.ItemType.CornEar, d.ItemTypeGroup.Vegetable), t.itemDescriptions[d.ItemType.CornSeeds] = {
      weight: .1,
      use: [i.ActionType.Plant, i.ActionType.Eat],
      skillUse: r.SkillType.Botany,
      onBurn: [d.ItemType.PileOfAsh],
      onUse: {
          [i.ActionType.Plant]: a.DoodadType.CornStalks,
          [i.ActionType.Eat]: [0, 2, 1, -1]
      },
      flammable: !0,
      worth: 5,
      spawnOnMerchant: [s.BiomeType.Coastal]
  }, g(d.ItemType.CornSeeds, d.ItemTypeGroup.Seed), t.itemDescriptions[d.ItemType.Cucumber] = {
      weight: .4,
      use: [i.ActionType.Eat],
      skillUse: r.SkillType.Botany,
      decayMax: 9e3,
      decaysInto: [d.ItemType.RottingVegetation],
      onBurn: [d.ItemType.PileOfAsh],
      onUse: {
          [i.ActionType.Eat]: [1, 10, 3, 3]
      },
      dismantle: {
          items: [{
              type: d.ItemType.CucumberSeeds,
              amount: 1
          }],
          skill: r.SkillType.Botany
      },
      worth: 5,
      spawnOnMerchant: [s.BiomeType.Coastal]
  }, g(d.ItemType.Cucumber, d.ItemTypeGroup.Fruit), t.itemDescriptions[d.ItemType.CucumberSeeds] = {
      weight: .1,
      use: [i.ActionType.Plant, i.ActionType.Eat],
      skillUse: r.SkillType.Botany,
      onBurn: [d.ItemType.PileOfAsh],
      onUse: {
          [i.ActionType.Plant]: a.DoodadType.CucumberPlant,
          [i.ActionType.Eat]: [0, 2, 1, -1]
      },
      flammable: !0,
      worth: 5,
      spawnOnMerchant: [s.BiomeType.Coastal]
  }, g(d.ItemType.CucumberSeeds, d.ItemTypeGroup.Seed), t.itemDescriptions[d.ItemType.Tomato] = {
      weight: .3,
      use: [i.ActionType.Eat],
      skillUse: r.SkillType.Botany,
      decayMax: 8250,
      decaysInto: [d.ItemType.RottingVegetation],
      onBurn: [d.ItemType.PileOfAsh],
      onUse: {
          [i.ActionType.Eat]: [2, 12, 3, 2]
      },
      dismantle: {
          items: [{
              type: d.ItemType.TomatoSeeds,
              amount: 1
          }],
          skill: r.SkillType.Botany
      },
      worth: 5,
      spawnOnMerchant: [s.BiomeType.Coastal]
  }, g(d.ItemType.Tomato, d.ItemTypeGroup.Fruit), t.itemDescriptions[d.ItemType.TomatoSeeds] = {
      weight: .1,
      use: [i.ActionType.Plant, i.ActionType.Eat],
      skillUse: r.SkillType.Botany,
      onBurn: [d.ItemType.PileOfAsh],
      onUse: {
          [i.ActionType.Plant]: a.DoodadType.TomatoPlant,
          [i.ActionType.Eat]: [1, 3, 1, -1]
      },
      flammable: !0,
      worth: 5,
      spawnOnMerchant: [s.BiomeType.Coastal]
  }, g(d.ItemType.TomatoSeeds, d.ItemTypeGroup.Seed), t.itemDescriptions[d.ItemType.Pumpkin] = {
      weight: 1.3,
      use: [i.ActionType.Eat],
      skillUse: r.SkillType.Botany,
      decayMax: 14250,
      decaysInto: [d.ItemType.RottingVegetation, d.ItemType.RottingVegetation],
      returnOnUseAndDecay: {
          type: d.ItemType.PumpkinSeeds
      },
      onBurn: [d.ItemType.PileOfAsh],
      onUse: {
          [i.ActionType.Eat]: [3, 12, 5, 2]
      },
      dismantle: {
          items: [{
              type: d.ItemType.PumpkinSeeds,
              amount: 1
          }],
          skill: r.SkillType.Botany,
          required: d.ItemTypeGroup.Sharpened
      },
      worth: 10,
      spawnOnMerchant: [s.BiomeType.Coastal]
  }, g(d.ItemType.Pumpkin, d.ItemTypeGroup.Fruit), t.itemDescriptions[d.ItemType.PumpkinSeeds] = {
      weight: .2,
      use: [i.ActionType.Plant, i.ActionType.Eat],
      skillUse: r.SkillType.Botany,
      onBurn: [d.ItemType.PileOfAsh],
      onUse: {
          [i.ActionType.Plant]: a.DoodadType.Pumpkin,
          [i.ActionType.Eat]: [0, 2, 2, -1]
      },
      flammable: !0,
      worth: 5,
      spawnOnMerchant: [s.BiomeType.Coastal]
  }, g(d.ItemType.PumpkinSeeds, d.ItemTypeGroup.Seed), t.itemDescriptions[d.ItemType.PricklyPearFruit] = {
      weight: .3,
      use: [i.ActionType.Eat],
      skillUse: r.SkillType.Botany,
      decayMax: 8750,
      decaysInto: [d.ItemType.RottingVegetation],
      onBurn: [d.ItemType.PileOfAsh],
      onUse: {
          [i.ActionType.Eat]: [1, 6, 2, 2]
      },
      dismantle: {
          items: [{
              type: d.ItemType.PricklyPearSeeds,
              amount: 1
          }],
          skill: r.SkillType.Botany
      },
      worth: 5,
      spawnOnMerchant: [s.BiomeType.Arid]
  }, g(d.ItemType.PricklyPearFruit, d.ItemTypeGroup.Fruit), t.itemDescriptions[d.ItemType.SugarCaneStalks] = {
      weight: .7,
      use: [i.ActionType.Eat],
      skillUse: r.SkillType.Botany,
      decayMax: 13750,
      decaysInto: [d.ItemType.RottingVegetation],
      onBurn: [d.ItemType.PileOfAsh],
      onUse: {
          [i.ActionType.Eat]: [2, 12, 1, -2]
      },
      worth: 10,
      spawnOnMerchant: [s.BiomeType.Arid]
  }, g(d.ItemType.SugarCaneStalks, d.ItemTypeGroup.Fruit), t.itemDescriptions[d.ItemType.SugarCaneSeeds] = {
      weight: .1,
      use: [i.ActionType.Plant, i.ActionType.Eat],
      skillUse: r.SkillType.Botany,
      onBurn: [d.ItemType.PileOfAsh],
      onUse: {
          [i.ActionType.Plant]: a.DoodadType.SugarCaneStalks,
          [i.ActionType.Eat]: [0, 1, 1, -1]
      },
      flammable: !0,
      worth: 5,
      spawnOnMerchant: [s.BiomeType.Arid]
  }, g(d.ItemType.SugarCaneSeeds, d.ItemTypeGroup.Seed), t.itemDescriptions[d.ItemType.BushelOfWheat] = {
      weight: .4,
      skillUse: r.SkillType.Botany,
      onBurn: [d.ItemType.PileOfAsh, d.ItemType.PileOfAsh, d.ItemType.PileOfAsh],
      dismantle: {
          items: [{
              type: d.ItemType.Wheat,
              amount: 2
          }, {
              type: d.ItemType.SheafOfHay,
              amount: 1
          }],
          skill: r.SkillType.Botany
      },
      flammable: !0,
      worth: 10,
      spawnOnMerchant: [s.BiomeType.Coastal]
  }, t.itemDescriptions[d.ItemType.Wheat] = {
      weight: .1,
      use: [i.ActionType.Plant, i.ActionType.Eat],
      skillUse: r.SkillType.Botany,
      onBurn: [d.ItemType.PileOfAsh],
      onUse: {
          [i.ActionType.Plant]: a.DoodadType.Wheat,
          [i.ActionType.Eat]: [0, 2, 1, -1]
      },
      flammable: !0,
      worth: 5,
      spawnOnMerchant: [s.BiomeType.Coastal]
  }, g(d.ItemType.Wheat, d.ItemTypeGroup.Seed), t.itemDescriptions[d.ItemType.CookedPotato] = {
      use: [i.ActionType.Eat],
      decayMax: 1e4,
      skillUse: r.SkillType.Botany,
      recipe: {
          components: [T(d.ItemType.Potato, 1, 1), T(d.ItemTypeGroup.CookingEquipment, 1, 0)],
          skill: r.SkillType.Cooking,
          level: d.RecipeLevel.Simple,
          requiresFire: !0,
          reputation: 25
      },
      decaysInto: [d.ItemType.RottingVegetation],
      onBurn: [d.ItemType.PileOfAsh],
      onUse: {
          [i.ActionType.Eat]: [1, 10, 4, -1]
      },
      worth: 15,
      spawnOnMerchant: [s.BiomeType.Coastal]
  }, g(d.ItemType.CookedPotato, d.ItemTypeGroup.Vegetable, d.ItemTypeGroup.CookedFood), t.itemDescriptions[d.ItemType.CookedCornCob] = {
      use: [i.ActionType.Eat],
      decayMax: 5750,
      skillUse: r.SkillType.Botany,
      recipe: {
          components: [T(d.ItemType.CornEar, 1, 1), T(d.ItemTypeGroup.CookingEquipment, 1, 0)],
          skill: r.SkillType.Cooking,
          level: d.RecipeLevel.Simple,
          requiresFire: !0,
          reputation: 25
      },
      decaysInto: [d.ItemType.RottingVegetation],
      onBurn: [d.ItemType.PileOfAsh],
      onUse: {
          [i.ActionType.Eat]: [3, 12, 3, -1]
      },
      worth: 15,
      spawnOnMerchant: [s.BiomeType.Coastal]
  }, g(d.ItemType.CookedCornCob, d.ItemTypeGroup.Vegetable, d.ItemTypeGroup.CookedFood), t.itemDescriptions[d.ItemType.BundleOfSwitchgrass] = {
      weight: .4,
      skillUse: r.SkillType.Botany,
      onBurn: [d.ItemType.PileOfAsh, d.ItemType.PileOfAsh, d.ItemType.PileOfAsh],
      dismantle: {
          items: [{
              type: d.ItemType.SwitchgrassSeeds,
              amount: 2
          }, {
              type: d.ItemType.SheafOfHay,
              amount: 1
          }],
          skill: r.SkillType.Botany
      },
      flammable: !0,
      worth: 10,
      spawnOnMerchant: [s.BiomeType.Coastal]
  }, t.itemDescriptions[d.ItemType.Cloak] = {
      durability: 30,
      equip: r.EquipType.Back,
      showOverHair: !0,
      defense: new o.Defense(1, new o.Resistances(o.DamageType.Slashing, 2), new o.Vulnerabilities(o.DamageType.Piercing, 2)),
      recipe: {
          components: [T(d.ItemType.CottonFabric, 1, 1, 1)],
          skill: r.SkillType.Tailoring,
          level: d.RecipeLevel.Expert,
          reputation: 25
      },
      disassemble: !0,
      craftable: !1,
      flammable: !0,
      hideHelmet: !0,
      worth: 100
  }, g(d.ItemType.Cloak, d.ItemTypeGroup.Equipment), t.itemDescriptions[d.ItemType.WoodenMortarAndPestle] = {
      reducedWeight: 3.2,
      recipe: {
          components: [T(d.ItemType.Log, 1, 1), T(d.ItemTypeGroup.Sharpened, 1, 0)],
          skill: r.SkillType.Woodworking,
          level: d.RecipeLevel.Intermediate,
          reputation: 25
      },
      durability: 10,
      onBurn: [d.ItemType.Charcoal, d.ItemType.Charcoal, d.ItemType.Charcoal, d.ItemType.PileOfAsh],
      flammable: !0,
      worth: 30,
      tier: {
          [d.ItemTypeGroup.MortarAndPestle]: 1
      }
  }, g(d.ItemType.WoodenMortarAndPestle, d.ItemTypeGroup.Tool, d.ItemTypeGroup.MortarAndPestle), t.itemDescriptions[d.ItemType.SandstoneMortarAndPestle] = {
      reducedWeight: 1.5,
      recipe: {
          components: [T(d.ItemType.Sandstone, 3, 2)],
          skill: r.SkillType.Stonecrafting,
          level: d.RecipeLevel.Intermediate,
          reputation: 25
      },
      durability: 15,
      worth: 20,
      tier: {
          [d.ItemTypeGroup.MortarAndPestle]: 2
      },
      spawnOnMerchant: [s.BiomeType.Arid]
  }, g(d.ItemType.SandstoneMortarAndPestle, d.ItemTypeGroup.Tool, d.ItemTypeGroup.MortarAndPestle), t.itemDescriptions[d.ItemType.WroughtIronMortarAndPestle] = {
      recipe: {
          components: [T(d.ItemType.TalcumPowder, 1, 1, 0, !0), T(d.ItemType.WroughtIron, 2, 2, 2), T(d.ItemTypeGroup.SandCastFlask, 1, 0), T(d.ItemTypeGroup.Hammer, 1, 0), T(d.ItemTypeGroup.Tongs, 1, 0)],
          skill: r.SkillType.Blacksmithing,
          level: d.RecipeLevel.Intermediate,
          requiredDoodad: a.DoodadTypeGroup.Anvil,
          requiresFire: !0,
          reputation: 25
      },
      durability: 100,
      disassemble: !0,
      requiredForDisassembly: [d.ItemTypeGroup.Hammer],
      worth: 150,
      tier: {
          [d.ItemTypeGroup.MortarAndPestle]: 3
      }
  }, g(d.ItemType.WroughtIronMortarAndPestle, d.ItemTypeGroup.Tool, d.ItemTypeGroup.MortarAndPestle), t.itemDescriptions[d.ItemType.IronMortarAndPestle] = {
      recipe: {
          components: [T(d.ItemType.TalcumPowder, 1, 1, 0, !0), T(d.ItemType.IronIngot, 2, 2, 2), T(d.ItemTypeGroup.SandCastFlask, 1, 0), T(d.ItemTypeGroup.Hammer, 1, 0), T(d.ItemTypeGroup.Tongs, 1, 0)],
          skill: r.SkillType.Blacksmithing,
          level: d.RecipeLevel.Intermediate,
          requiredDoodad: a.DoodadTypeGroup.Anvil,
          requiresFire: !0,
          reputation: 25
      },
      durability: 200,
      disassemble: !0,
      requiredForDisassembly: [d.ItemTypeGroup.Hammer, d.ItemTypeGroup.SandCastFlask],
      worth: 250,
      tier: {
          [d.ItemTypeGroup.MortarAndPestle]: 4
      },
      spawnOnMerchant: [s.BiomeType.IceCap, s.BiomeType.Arid]
  }, g(d.ItemType.IronMortarAndPestle, d.ItemTypeGroup.Tool, d.ItemTypeGroup.MortarAndPestle), t.itemDescriptions[d.ItemType.RawClayMortarAndPestle] = {
      recipe: {
          components: [T(d.ItemType.RawClay, 1, 1, 1)],
          skill: r.SkillType.Claythrowing,
          level: d.RecipeLevel.Intermediate,
          reputation: 25
      },
      worth: 10,
      spawnOnMerchant: [s.BiomeType.Arid]
  }, t.itemDescriptions[d.ItemType.ClayMortarAndPestle] = {
      recipe: {
          components: [T(d.ItemType.RawClayMortarAndPestle, 1, 1, 1)],
          skill: r.SkillType.Claythrowing,
          level: d.RecipeLevel.Advanced,
          requiredDoodad: a.DoodadTypeGroup.LitKiln,
          reputation: 25
      },
      durability: 20,
      worth: 15,
      tier: {
          [d.ItemTypeGroup.MortarAndPestle]: 2
      },
      spawnOnMerchant: [s.BiomeType.Arid]
  }, g(d.ItemType.ClayMortarAndPestle, d.ItemTypeGroup.Tool, d.ItemTypeGroup.MortarAndPestle), t.itemDescriptions[d.ItemType.CopperOre] = {
      weight: .6,
      worth: 25,
      spawnOnWorldGen: {
          [s.BiomeType.Coastal]: {
              [l.WorldZ.Cave]: {
                  [y.TerrainType.RockGround]: 1,
                  [y.TerrainType.Dirt]: 1,
                  [y.TerrainType.Gravel]: 1
              }
          },
          [s.BiomeType.Arid]: {
              [l.WorldZ.Cave]: {
                  [y.TerrainType.SandstoneGround]: 1,
                  [y.TerrainType.DesertSand]: 1
              }
          },
          [s.BiomeType.IceCap]: {
              [l.WorldZ.Cave]: {
                  [y.TerrainType.RockGround]: 1,
                  [y.TerrainType.Dirt]: 1
              }
          }
      }
  }, t.itemDescriptions[d.ItemType.CopperIngot] = {
      recipe: {
          components: [T(d.ItemType.TalcumPowder, 1, 1, 0, !0), T(d.ItemType.LimestonePowder, 1, 1, 0, !0), T(d.ItemType.CopperOre, 1, 1), T(d.ItemTypeGroup.SandCastFlask, 1, 0), T(d.ItemTypeGroup.Tongs, 1, 0)],
          skill: r.SkillType.Blacksmithing,
          level: d.RecipeLevel.Intermediate,
          requiredDoodad: a.DoodadTypeGroup.LitFurnace,
          reputation: -100
      },
      worth: 35
  }, t.itemDescriptions[d.ItemType.CopperPickaxe] = {
      durability: 150,
      equip: r.EquipType.Held,
      attack: 3,
      damageType: o.DamageType.Blunt | o.DamageType.Piercing,
      recipe: {
          components: [T(d.ItemType.CopperIngot, 6, 6, 6), T(d.ItemTypeGroup.Pole, 1, 1, 1), T(d.ItemTypeGroup.Hammer, 1, 0)],
          skill: r.SkillType.Blacksmithing,
          level: d.RecipeLevel.Simple,
          requiredDoodad: a.DoodadTypeGroup.Anvil,
          reputation: -250
      },
      repairAndDisassemblyRequiresFire: !0,
      disassemble: !0,
      requiredForDisassembly: [d.ItemTypeGroup.Hammer, d.ItemTypeGroup.SandCastFlask],
      use: [i.ActionType.Gather, i.ActionType.Melee],
      worth: 200
  }, g(d.ItemType.CopperPickaxe, d.ItemTypeGroup.Weapon, d.ItemTypeGroup.Tool), t.itemDescriptions[d.ItemType.CopperDoubleAxe] = {
      durability: 150,
      equip: r.EquipType.Held,
      attack: 6,
      damageType: o.DamageType.Slashing,
      use: [i.ActionType.Carve, i.ActionType.Gather, i.ActionType.Harvest, i.ActionType.Melee],
      recipe: {
          components: [T(d.ItemType.CopperIngot, 8, 8, 8), T(d.ItemTypeGroup.Pole, 1, 1, 1), T(d.ItemTypeGroup.Hammer, 1, 0)],
          skill: r.SkillType.Blacksmithing,
          level: d.RecipeLevel.Simple,
          requiredDoodad: a.DoodadTypeGroup.Anvil,
          reputation: -750
      },
      repairAndDisassemblyRequiresFire: !0,
      disassemble: !0,
      requiredForDisassembly: [d.ItemTypeGroup.Hammer, d.ItemTypeGroup.SandCastFlask],
      worth: 400,
      tier: {
          [d.ItemTypeGroup.Sharpened]: 3
      }
  }, g(d.ItemType.CopperDoubleAxe, d.ItemTypeGroup.Sharpened, d.ItemTypeGroup.Weapon, d.ItemTypeGroup.Tool), t.itemDescriptions[d.ItemType.CopperShovel] = {
      durability: 150,
      equip: r.EquipType.Held,
      attack: 3,
      damageType: o.DamageType.Slashing,
      use: [i.ActionType.Dig, i.ActionType.Gather, i.ActionType.GatherTreasure, i.ActionType.Harvest, i.ActionType.Melee],
      recipe: {
          components: [T(d.ItemType.String, 2, 2, 2), T(d.ItemType.CopperIngot, 3, 3, 3), T(d.ItemTypeGroup.Pole, 1, 1, 1), T(d.ItemTypeGroup.Hammer, 1, 0)],
          skill: r.SkillType.Blacksmithing,
          level: d.RecipeLevel.Simple,
          requiredDoodad: a.DoodadTypeGroup.Anvil,
          reputation: -175
      },
      repairAndDisassemblyRequiresFire: !0,
      disassemble: !0,
      requiredForDisassembly: [d.ItemTypeGroup.Hammer, d.ItemTypeGroup.SandCastFlask],
      worth: 200
  }, g(d.ItemType.CopperShovel, d.ItemTypeGroup.Tool, d.ItemTypeGroup.Weapon), t.itemDescriptions[d.ItemType.CopperSpear] = {
      durability: 75,
      equip: r.EquipType.Held,
      attack: 5,
      damageType: o.DamageType.Piercing,
      recipe: {
          components: [T(d.ItemType.CopperIngot, 2, 2, 2), T(d.ItemTypeGroup.Pole, 1, 1, 1), T(d.ItemTypeGroup.Hammer, 1, 0)],
          skill: r.SkillType.Blacksmithing,
          level: d.RecipeLevel.Simple,
          requiredDoodad: a.DoodadTypeGroup.Anvil,
          reputation: -500
      },
      repairAndDisassemblyRequiresFire: !0,
      disassemble: !0,
      requiredForDisassembly: [d.ItemTypeGroup.Hammer, d.ItemTypeGroup.SandCastFlask],
      use: [i.ActionType.Gather, i.ActionType.Melee],
      worth: 200,
      tier: {
          [d.ItemTypeGroup.CookingEquipment]: 2
      }
  }, g(d.ItemType.CopperSpear, d.ItemTypeGroup.Weapon, d.ItemTypeGroup.CookingEquipment), t.itemDescriptions[d.ItemType.CopperHammer] = {
      durability: 45,
      equip: r.EquipType.Held,
      attack: 3,
      damageType: o.DamageType.Blunt,
      use: [i.ActionType.Repair, i.ActionType.Gather, i.ActionType.Melee],
      recipe: {
          components: [T(d.ItemType.CopperIngot, 3, 3, 3), T(d.ItemTypeGroup.Pole, 1, 1, 1), T(d.ItemTypeGroup.Hammer, 1, 0)],
          skill: r.SkillType.Blacksmithing,
          level: d.RecipeLevel.Simple,
          requiredDoodad: a.DoodadTypeGroup.Anvil,
          reputation: -175
      },
      repairAndDisassemblyRequiresFire: !0,
      disassemble: !0,
      requiredForDisassembly: [d.ItemTypeGroup.Hammer, d.ItemTypeGroup.SandCastFlask],
      worth: 200,
      tier: {
          [d.ItemTypeGroup.Hammer]: 2
      }
  }, g(d.ItemType.CopperHammer, d.ItemTypeGroup.Hammer, d.ItemTypeGroup.Repairing, d.ItemTypeGroup.Weapon, d.ItemTypeGroup.Tool), t.itemDescriptions[d.ItemType.CopperLockPick] = {
      durability: 30,
      use: [i.ActionType.LockPick],
      recipe: {
          components: [T(d.ItemType.CopperIngot, 1, 1, 1), T(d.ItemTypeGroup.Hammer, 1, 0)],
          skill: r.SkillType.Blacksmithing,
          level: d.RecipeLevel.Simple,
          requiredDoodad: a.DoodadTypeGroup.Anvil,
          reputation: -175
      },
      disassemble: !0,
      requiredForDisassembly: [d.ItemTypeGroup.Hammer, d.ItemTypeGroup.SandCastFlask],
      damageType: o.DamageType.Piercing,
      worth: 50
  }, t.itemDescriptions[d.ItemType.CopperShield] = {
      durability: 75,
      equip: r.EquipType.Held,
      use: [i.ActionType.Melee],
      defense: new o.Defense(3, new o.Resistances, new o.Vulnerabilities(o.DamageType.Blunt, 1, o.DamageType.Fire, 1)),
      recipe: {
          components: [T(d.ItemType.CopperIngot, 12, 12, 12), T(d.ItemTypeGroup.Hammer, 1, 0)],
          skill: r.SkillType.Blacksmithing,
          level: d.RecipeLevel.Intermediate,
          requiredDoodad: a.DoodadTypeGroup.Anvil,
          reputation: -500
      },
      repairAndDisassemblyRequiresFire: !0,
      disassemble: !0,
      requiredForDisassembly: [d.ItemTypeGroup.Hammer, d.ItemTypeGroup.SandCastFlask],
      worth: 600,
      attack: 3,
      damageType: o.DamageType.Blunt
  }, g(d.ItemType.CopperShield, d.ItemTypeGroup.Equipment), t.itemDescriptions[d.ItemType.CopperGauntlets] = {
      durability: 75,
      equip: r.EquipType.Hands,
      defense: new o.Defense(2, new o.Resistances, new o.Vulnerabilities(o.DamageType.Blunt, 1, o.DamageType.Fire, 1)),
      recipe: {
          components: [T(d.ItemType.CopperIngot, 8, 8, 8), T(d.ItemTypeGroup.Hammer, 1, 0)],
          skill: r.SkillType.Blacksmithing,
          level: d.RecipeLevel.Advanced,
          requiredDoodad: a.DoodadTypeGroup.Anvil,
          reputation: -500
      },
      repairAndDisassemblyRequiresFire: !0,
      disassemble: !0,
      requiredForDisassembly: [d.ItemTypeGroup.Hammer, d.ItemTypeGroup.SandCastFlask],
      worth: 400
  }, g(d.ItemType.CopperGauntlets, d.ItemTypeGroup.Equipment), t.itemDescriptions[d.ItemType.CopperGreaves] = {
      durability: 75,
      equip: r.EquipType.Legs,
      defense: new o.Defense(4, new o.Resistances, new o.Vulnerabilities(o.DamageType.Blunt, 1, o.DamageType.Fire, 1)),
      recipe: {
          components: [T(d.ItemType.CopperIngot, 10, 10, 10), T(d.ItemTypeGroup.Hammer, 1, 0)],
          skill: r.SkillType.Blacksmithing,
          level: d.RecipeLevel.Intermediate,
          requiredDoodad: a.DoodadTypeGroup.Anvil,
          reputation: -500
      },
      repairAndDisassemblyRequiresFire: !0,
      disassemble: !0,
      requiredForDisassembly: [d.ItemTypeGroup.Hammer, d.ItemTypeGroup.SandCastFlask],
      worth: 600
  }, g(d.ItemType.CopperGreaves, d.ItemTypeGroup.Equipment), t.itemDescriptions[d.ItemType.CopperGorget] = {
      durability: 75,
      equip: r.EquipType.Neck,
      defense: new o.Defense(2, new o.Resistances, new o.Vulnerabilities(o.DamageType.Blunt, 1, o.DamageType.Fire, 1)),
      recipe: {
          components: [T(d.ItemType.CopperIngot, 6, 6, 6), T(d.ItemTypeGroup.Hammer, 1, 0)],
          skill: r.SkillType.Blacksmithing,
          level: d.RecipeLevel.Simple,
          requiredDoodad: a.DoodadTypeGroup.Anvil,
          reputation: -500
      },
      repairAndDisassemblyRequiresFire: !0,
      disassemble: !0,
      requiredForDisassembly: [d.ItemTypeGroup.Hammer, d.ItemTypeGroup.SandCastFlask],
      worth: 400
  }, g(d.ItemType.CopperGorget, d.ItemTypeGroup.Equipment), t.itemDescriptions[d.ItemType.CopperHelmet] = {
      durability: 75,
      equip: r.EquipType.Head,
      defense: new o.Defense(3, new o.Resistances, new o.Vulnerabilities(o.DamageType.Blunt, 1, o.DamageType.Fire, 1)),
      recipe: {
          components: [T(d.ItemType.CopperIngot, 8, 8, 8), T(d.ItemTypeGroup.Hammer, 1, 0)],
          skill: r.SkillType.Blacksmithing,
          level: d.RecipeLevel.Intermediate,
          requiredDoodad: a.DoodadTypeGroup.Anvil,
          reputation: -500
      },
      repairAndDisassemblyRequiresFire: !0,
      disassemble: !0,
      requiredForDisassembly: [d.ItemTypeGroup.Hammer, d.ItemTypeGroup.SandCastFlask],
      worth: 400
  }, g(d.ItemType.CopperHelmet, d.ItemTypeGroup.Equipment), t.itemDescriptions[d.ItemType.CopperBoots] = {
      durability: 75,
      equip: r.EquipType.Feet,
      defense: new o.Defense(3, new o.Resistances, new o.Vulnerabilities(o.DamageType.Blunt, 1, o.DamageType.Fire, 1)),
      recipe: {
          components: [T(d.ItemType.CopperIngot, 12, 12, 12), T(d.ItemTypeGroup.Hammer, 1, 0)],
          skill: r.SkillType.Blacksmithing,
          level: d.RecipeLevel.Intermediate,
          requiredDoodad: a.DoodadTypeGroup.Anvil,
          reputation: -500
      },
      repairAndDisassemblyRequiresFire: !0,
      disassemble: !0,
      requiredForDisassembly: [d.ItemTypeGroup.Hammer, d.ItemTypeGroup.SandCastFlask],
      worth: 600
  }, g(d.ItemType.CopperBoots, d.ItemTypeGroup.Equipment), t.itemDescriptions[d.ItemType.CopperBreastPlate] = {
      durability: 75,
      equip: r.EquipType.Chest,
      defense: new o.Defense(4, new o.Resistances, new o.Vulnerabilities(o.DamageType.Blunt, 1, o.DamageType.Fire, 1)),
      recipe: {
          components: [T(d.ItemType.CopperIngot, 12, 12, 12), T(d.ItemTypeGroup.Hammer, 1, 0)],
          skill: r.SkillType.Blacksmithing,
          level: d.RecipeLevel.Intermediate,
          requiredDoodad: a.DoodadTypeGroup.Anvil,
          reputation: -500
      },
      repairAndDisassemblyRequiresFire: !0,
      disassemble: !0,
      requiredForDisassembly: [d.ItemTypeGroup.Hammer, d.ItemTypeGroup.SandCastFlask],
      worth: 600
  }, g(d.ItemType.CopperBreastPlate, d.ItemTypeGroup.Equipment), t.itemDescriptions[d.ItemType.CopperSword] = {
      durability: 75,
      equip: r.EquipType.Held,
      attack: 7,
      damageType: o.DamageType.Piercing | o.DamageType.Slashing,
      use: [i.ActionType.Carve, i.ActionType.Gather, i.ActionType.Melee],
      recipe: {
          components: [T(d.ItemType.CopperIngot, 8, 8, 8), T(d.ItemTypeGroup.Hammer, 1, 0)],
          skill: r.SkillType.Blacksmithing,
          level: d.RecipeLevel.Intermediate,
          requiredDoodad: a.DoodadTypeGroup.Anvil,
          reputation: -500
      },
      repairAndDisassemblyRequiresFire: !0,
      disassemble: !0,
      requiredForDisassembly: [d.ItemTypeGroup.Hammer, d.ItemTypeGroup.SandCastFlask],
      worth: 400,
      tier: {
          [d.ItemTypeGroup.Sharpened]: 3
      }
  }, g(d.ItemType.CopperSword, d.ItemTypeGroup.Sharpened, d.ItemTypeGroup.Weapon), t.itemDescriptions[d.ItemType.CopperTongs] = {
      recipe: {
          components: [T(d.ItemType.CopperIngot, 3, 3, 3), T(d.ItemTypeGroup.Hammer, 1, 0)],
          skill: r.SkillType.Blacksmithing,
          level: d.RecipeLevel.Simple,
          requiredDoodad: a.DoodadTypeGroup.Anvil,
          reputation: -50
      },
      repairAndDisassemblyRequiresFire: !0,
      durability: 35,
      disassemble: !0,
      requiredForDisassembly: [d.ItemTypeGroup.Hammer, d.ItemTypeGroup.SandCastFlask],
      use: [i.ActionType.Grasp],
      worth: 200,
      tier: {
          [d.ItemTypeGroup.CookingEquipment]: 3,
          [d.ItemTypeGroup.Tongs]: 2
      }
  }, g(d.ItemType.CopperTongs, d.ItemTypeGroup.Tongs, d.ItemTypeGroup.CookingEquipment), t.itemDescriptions[d.ItemType.CopperArrow] = {
      recipe: {
          components: [T(d.ItemType.Feather, 1, 1, 1), T(d.ItemType.CopperArrowhead, 1, 1, 1), T(d.ItemType.ArrowShaft, 1, 1, 1), T(d.ItemTypeGroup.Cordage, 1, 1, 1)],
          skill: r.SkillType.Fletching,
          level: d.RecipeLevel.Intermediate,
          reputation: -75
      },
      disassemble: !0,
      attack: 3,
      damageType: o.DamageType.Piercing,
      durability: 35,
      onBurn: [d.ItemType.CopperArrowhead],
      flammable: !0,
      worth: 50
  }, g(d.ItemType.CopperArrow, d.ItemTypeGroup.Arrow), t.itemDescriptions[d.ItemType.CopperBullet] = {
      recipe: {
          components: [T(d.ItemType.CopperIngot, 1, 1, 1), T(d.ItemTypeGroup.Hammer, 1, 0)],
          skill: r.SkillType.Blacksmithing,
          level: d.RecipeLevel.Simple,
          requiredDoodad: a.DoodadTypeGroup.Anvil,
          reputation: -50
      },
      repairAndDisassemblyRequiresFire: !0,
      attack: 2,
      damageType: o.DamageType.Blunt,
      durability: 35,
      disassemble: !0,
      requiredForDisassembly: [d.ItemTypeGroup.Hammer, d.ItemTypeGroup.SandCastFlask],
      worth: 50
  }, g(d.ItemType.CopperBullet, d.ItemTypeGroup.Bullet), t.itemDescriptions[d.ItemType.CopperArrowhead] = {
      use: [i.ActionType.Carve],
      recipe: {
          components: [T(d.ItemType.CopperIngot, 1, 1, 1), T(d.ItemTypeGroup.Hammer, 1, 0)],
          skill: r.SkillType.Blacksmithing,
          level: d.RecipeLevel.Simple,
          requiredDoodad: a.DoodadTypeGroup.Anvil,
          reputation: -50
      },
      repairAndDisassemblyRequiresFire: !0,
      disassemble: !0,
      requiredForDisassembly: [d.ItemTypeGroup.Hammer, d.ItemTypeGroup.SandCastFlask],
      damageType: o.DamageType.Piercing,
      worth: 50,
      tier: {
          [d.ItemTypeGroup.Sharpened]: 2
      }
  }, g(d.ItemType.CopperArrowhead, d.ItemTypeGroup.Sharpened), t.itemDescriptions[d.ItemType.CopperChest] = {
      use: [i.ActionType.Build],
      recipe: {
          components: [T(d.ItemType.CopperIngot, 15, 15, 15), T(d.ItemTypeGroup.Hammer, 1, 0)],
          skill: r.SkillType.Blacksmithing,
          level: d.RecipeLevel.Intermediate,
          requiredDoodad: a.DoodadTypeGroup.Anvil,
          reputation: 25
      },
      repairAndDisassemblyRequiresFire: !0,
      durability: 35,
      disassemble: !0,
      requiredForDisassembly: [d.ItemTypeGroup.Hammer, d.ItemTypeGroup.SandCastFlask],
      doodadContainer: a.DoodadType.CopperChest,
      onUse: {
          [i.ActionType.Build]: a.DoodadType.CopperChest
      },
      worth: 1e3
  }, g(d.ItemType.CopperChest, d.ItemTypeGroup.Storage), t.itemDescriptions[d.ItemType.CopperAnvil] = {
      use: [i.ActionType.Build],
      recipe: {
          components: [T(d.ItemType.Log, 1, 1, 1), T(d.ItemType.CopperIngot, 12, 12, 12), T(d.ItemTypeGroup.Hammer, 1, 0)],
          skill: r.SkillType.Blacksmithing,
          requiredDoodad: a.DoodadTypeGroup.Anvil,
          level: d.RecipeLevel.Intermediate,
          reputation: -50
      },
      repairAndDisassemblyRequiresFire: !0,
      disassemble: !0,
      requiredForDisassembly: [d.ItemTypeGroup.Hammer, d.ItemTypeGroup.SandCastFlask],
      durability: 35,
      onUse: {
          [i.ActionType.Build]: a.DoodadType.CopperAnvil
      },
      worth: 600
  }, g(d.ItemType.CopperAnvil, d.ItemTypeGroup.Anvil), t.itemDescriptions[d.ItemType.CopperAxe] = {
      durability: 100,
      equip: r.EquipType.Held,
      attack: 4,
      damageType: o.DamageType.Slashing,
      use: [i.ActionType.Carve, i.ActionType.Gather, i.ActionType.Harvest, i.ActionType.Melee],
      recipe: {
          components: [T(d.ItemType.CopperIngot, 4, 4, 4), T(d.ItemTypeGroup.Pole, 1, 1, 1), T(d.ItemTypeGroup.Hammer, 1, 0)],
          skill: r.SkillType.Blacksmithing,
          level: d.RecipeLevel.Simple,
          requiredDoodad: a.DoodadTypeGroup.Anvil,
          reputation: -500
      },
      repairAndDisassemblyRequiresFire: !0,
      disassemble: !0,
      requiredForDisassembly: [d.ItemTypeGroup.Hammer, d.ItemTypeGroup.SandCastFlask],
      worth: 200,
      tier: {
          [d.ItemTypeGroup.Sharpened]: 3
      }
  }, g(d.ItemType.CopperAxe, d.ItemTypeGroup.Sharpened, d.ItemTypeGroup.Weapon, d.ItemTypeGroup.Tool), t.itemDescriptions[d.ItemType.CopperHoe] = {
      durability: 150,
      equip: r.EquipType.Held,
      attack: 2,
      damageType: o.DamageType.Slashing,
      use: [i.ActionType.Till, i.ActionType.Harvest, i.ActionType.Gather, i.ActionType.Melee],
      recipe: {
          components: [T(d.ItemType.String, 2, 2, 2), T(d.ItemType.CopperIngot, 3, 3, 3), T(d.ItemTypeGroup.Pole, 1, 1, 1), T(d.ItemTypeGroup.Hammer, 1, 0)],
          skill: r.SkillType.Blacksmithing,
          level: d.RecipeLevel.Simple,
          requiredDoodad: a.DoodadTypeGroup.Anvil,
          reputation: 50
      },
      repairAndDisassemblyRequiresFire: !0,
      disassemble: !0,
      requiredForDisassembly: [d.ItemTypeGroup.Hammer, d.ItemTypeGroup.SandCastFlask],
      worth: 200
  }, g(d.ItemType.CopperHoe, d.ItemTypeGroup.Tool, d.ItemTypeGroup.Weapon), t.itemDescriptions[d.ItemType.CopperMortarAndPestle] = {
      recipe: {
          components: [T(d.ItemType.CopperIngot, 2, 2, 2), T(d.ItemTypeGroup.Hammer, 1, 0)],
          skill: r.SkillType.Blacksmithing,
          level: d.RecipeLevel.Simple,
          requiredDoodad: a.DoodadTypeGroup.Anvil,
          reputation: 25
      },
      repairAndDisassemblyRequiresFire: !0,
      durability: 75,
      disassemble: !0,
      requiredForDisassembly: [d.ItemTypeGroup.Hammer, d.ItemTypeGroup.SandCastFlask],
      worth: 200,
      tier: {
          [d.ItemTypeGroup.MortarAndPestle]: 3
      }
  }, g(d.ItemType.CopperMortarAndPestle, d.ItemTypeGroup.Tool, d.ItemTypeGroup.MortarAndPestle), t.itemDescriptions[d.ItemType.WaterskinOfGoatMilk] = {
      inheritWeight: d.ItemType.Waterskin,
      use: [i.ActionType.DrinkItem, i.ActionType.Pour, i.ActionType.PourOnYourself],
      durability: 20,
      returnOnUseAndDecay: {
          type: d.ItemType.Waterskin,
          damaged: !0,
          whenCrafted: !0
      },
      keepDurabilityOnCraft: !0,
      repairable: !1,
      flammable: !0,
      onUse: {
          [i.ActionType.DrinkItem]: [2, 20, 2, 5]
      },
      tier: {
          [d.ItemTypeGroup.Liquid]: 3
      },
      spawnOnMerchant: [s.BiomeType.Coastal, s.BiomeType.Arid]
  }, g(d.ItemType.WaterskinOfGoatMilk, d.ItemTypeGroup.Liquid, d.ItemTypeGroup.ContainerOfMilk), t.itemDescriptions[d.ItemType.ClayJugOfGoatMilk] = {
      inheritWeight: d.ItemType.ClayJug,
      use: [i.ActionType.DrinkItem, i.ActionType.Pour, i.ActionType.PourOnYourself],
      durability: 10,
      returnOnUseAndDecay: {
          type: d.ItemType.ClayJug,
          damaged: !0,
          whenCrafted: !0
      },
      keepDurabilityOnCraft: !0,
      repairable: !1,
      onUse: {
          [i.ActionType.DrinkItem]: [2, 20, 2, 5]
      },
      worth: 75,
      tier: {
          [d.ItemTypeGroup.Liquid]: 3
      },
      spawnOnMerchant: [s.BiomeType.Coastal, s.BiomeType.Arid]
  }, g(d.ItemType.ClayJugOfGoatMilk, d.ItemTypeGroup.Liquid, d.ItemTypeGroup.ContainerOfMilk), t.itemDescriptions[d.ItemType.GlassBottleOfGoatMilk] = {
      inheritWeight: d.ItemType.GlassBottle,
      use: [i.ActionType.DrinkItem, i.ActionType.Pour, i.ActionType.PourOnYourself],
      durability: 15,
      returnOnUseAndDecay: {
          type: d.ItemType.GlassBottle,
          damaged: !0,
          whenCrafted: !0
      },
      keepDurabilityOnCraft: !0,
      repairable: !1,
      onUse: {
          [i.ActionType.DrinkItem]: [2, 20, 2, 5]
      },
      worth: 75,
      tier: {
          [d.ItemTypeGroup.Liquid]: 3
      },
      spawnOnMerchant: [s.BiomeType.Coastal, s.BiomeType.Arid]
  }, g(d.ItemType.GlassBottleOfGoatMilk, d.ItemTypeGroup.Liquid, d.ItemTypeGroup.ContainerOfMilk), t.itemDescriptions[d.ItemType.Obsidian] = {
      durability: 10,
      weight: 1.2,
      use: [i.ActionType.Carve, i.ActionType.Harvest],
      damageType: o.DamageType.Piercing | o.DamageType.Slashing,
      worth: 10,
      tier: {
          [d.ItemTypeGroup.Sharpened]: 2
      },
      spawnOnWorldGen: {
          [s.BiomeType.Coastal]: {
              [l.WorldZ.Cave]: {
                  [y.TerrainType.Obsidian]: 1
              },
              [l.WorldZ.Overworld]: {
                  [y.TerrainType.Obsidian]: 1
              }
          },
          [s.BiomeType.Arid]: {
              [l.WorldZ.Cave]: {
                  [y.TerrainType.Obsidian]: 1
              },
              [l.WorldZ.Overworld]: {
                  [y.TerrainType.Obsidian]: 1
              }
          }
      },
      spawnOnMerchant: [s.BiomeType.Arid]
  }, g(d.ItemType.Obsidian, d.ItemTypeGroup.Sharpened), t.itemDescriptions[d.ItemType.OrnateBlueBook] = {
      weight: 1.5,
      use: [i.ActionType.Read],
      burnsLike: [d.ItemType.PaperSheet, d.ItemType.PaperSheet, d.ItemType.PaperSheet, d.ItemType.PaperSheet, d.ItemType.PaperSheet],
      flammable: !0,
      worth: 50,
      dismantle: {
          items: [{
              type: d.ItemType.ShreddedPaper,
              amount: 5
          }]
      }
  }, g(d.ItemType.OrnateBlueBook, d.ItemTypeGroup.Book), t.itemDescriptions[d.ItemType.Journal] = {
      weight: 1.2,
      use: [i.ActionType.Read],
      burnsLike: [d.ItemType.PaperSheet, d.ItemType.PaperSheet, d.ItemType.PaperSheet, d.ItemType.PaperSheet],
      flammable: !0,
      worth: 50,
      dismantle: {
          items: [{
              type: d.ItemType.ShreddedPaper,
              amount: 3
          }]
      },
      spawnOnWorldGen: {
          [s.BiomeType.Arid]: {
              [l.WorldZ.Overworld]: {
                  [y.TerrainType.SandstoneFlooring]: 1,
                  [y.TerrainType.ClayFlooring]: 1
              }
          }
      }
  }, g(d.ItemType.Journal, d.ItemTypeGroup.Book), t.itemDescriptions[d.ItemType.MossCoveredBook] = {
      weight: 1.4,
      use: [i.ActionType.Read],
      burnsLike: [d.ItemType.PaperSheet, d.ItemType.PaperSheet, d.ItemType.PaperSheet],
      flammable: !0,
      worth: 50,
      dismantle: {
          items: [{
              type: d.ItemType.ShreddedPaper,
              amount: 4
          }]
      },
      spawnOnWorldGen: {
          [s.BiomeType.Coastal]: {
              [l.WorldZ.Cave]: {
                  [y.TerrainType.CobblestoneFlooring]: 1,
                  [y.TerrainType.WoodenFlooring]: 1,
                  [y.TerrainType.RockGround]: 1,
                  [y.TerrainType.Dirt]: 1,
                  [y.TerrainType.Gravel]: 1
              },
              [l.WorldZ.Overworld]: {
                  [y.TerrainType.CobblestoneFlooring]: 1,
                  [y.TerrainType.WoodenFlooring]: 1
              }
          }
      }
  }, g(d.ItemType.MossCoveredBook, d.ItemTypeGroup.Book), t.itemDescriptions[d.ItemType.GildedRedBook] = {
      weight: 1.6,
      use: [i.ActionType.Read],
      burnsLike: [d.ItemType.PaperSheet, d.ItemType.PaperSheet, d.ItemType.PaperSheet, d.ItemType.PaperSheet, d.ItemType.PaperSheet],
      flammable: !0,
      worth: 50,
      dismantle: {
          items: [{
              type: d.ItemType.ShreddedPaper,
              amount: 6
          }]
      }
  };
  g(d.ItemType.GildedRedBook, d.ItemTypeGroup.Book), t.itemDescriptions[d.ItemType.ArrowShaft] = {
      reducedWeight: .3,
      recipe: {
          components: [T(d.ItemTypeGroup.Pole, 1, 1), T(d.ItemTypeGroup.Sharpened, 1, 0)],
          skill: r.SkillType.Fletching,
          level: d.RecipeLevel.Simple,
          reputation: 25
      },
      onBurn: [d.ItemType.PileOfAsh],
      flammable: !0,
      worth: 5
  }, t.itemDescriptions[d.ItemType.SlitherSucker] = {
      durability: 25,
      equip: r.EquipType.Head,
      defense: new o.Defense(2, new o.Resistances(o.DamageType.Blunt, 4), new o.Vulnerabilities(o.DamageType.Fire, 2)),
      repairable: !1,
      weight: .7
  }, g(d.ItemType.SlitherSucker, d.ItemTypeGroup.Equipment, d.ItemTypeGroup.Untradable), t.itemDescriptions[d.ItemType.AberrantSlitherSucker] = {
      durability: 50,
      equip: r.EquipType.Head,
      defense: new o.Defense(4, new o.Resistances(o.DamageType.Blunt, 8), new o.Vulnerabilities(o.DamageType.Fire, 4)),
      repairable: !1,
      weight: 1.4
  }, g(d.ItemType.AberrantSlitherSucker, d.ItemTypeGroup.Equipment, d.ItemTypeGroup.Untradable), t.itemDescriptions[d.ItemType.StrawHat] = {
      durability: 25,
      equip: r.EquipType.Head,
      defense: new o.Defense(1, new o.Resistances(o.DamageType.Slashing, 1), new o.Vulnerabilities(o.DamageType.Piercing, 1, o.DamageType.Fire, 1)),
      recipe: {
          components: [T(d.ItemType.SheafOfHay, 4, 4)],
          skill: r.SkillType.Tinkering,
          level: d.RecipeLevel.Advanced,
          reputation: 25
      },
      worth: 25,
      burnsLike: [d.ItemType.SheafOfHay, d.ItemType.SheafOfHay, d.ItemType.SheafOfHay, d.ItemType.SheafOfHay],
      flammable: !0,
      spawnOnMerchant: [s.BiomeType.Coastal]
  }, g(d.ItemType.StrawHat, d.ItemTypeGroup.Equipment), t.itemDescriptions[d.ItemType.BlackplateBreastplate] = {
      durability: 150,
      equip: r.EquipType.Chest,
      defense: new o.Defense(5, new o.Resistances(o.DamageType.Slashing, 2, o.DamageType.Piercing, 2), new o.Vulnerabilities(o.DamageType.Blunt, 2)),
      recipe: {
          components: [T(d.ItemType.IronIngot, 12, 12, 12), T(d.ItemTypeGroup.Hammer, 1, 0), T(d.ItemTypeGroup.Tongs, 1, 0)],
          skill: r.SkillType.Blacksmithing,
          level: d.RecipeLevel.Expert,
          requiredDoodad: a.DoodadTypeGroup.Anvil,
          requiresFire: !0,
          reputation: -1e3
      },
      craftable: !1,
      disassemble: !0,
      requiredForDisassembly: [d.ItemTypeGroup.Hammer, d.ItemTypeGroup.SandCastFlask],
      worth: 3e3,
      spawnOnMerchant: [s.BiomeType.IceCap]
  }, g(d.ItemType.BlackplateBreastplate, d.ItemTypeGroup.Equipment), t.itemDescriptions[d.ItemType.BlackplateBoots] = {
      durability: 150,
      equip: r.EquipType.Feet,
      defense: new o.Defense(4, new o.Resistances(o.DamageType.Slashing, 2, o.DamageType.Piercing, 2), new o.Vulnerabilities(o.DamageType.Blunt, 2)),
      recipe: {
          components: [T(d.ItemType.IronIngot, 12, 12, 12), T(d.ItemTypeGroup.Hammer, 1, 0), T(d.ItemTypeGroup.Tongs, 1, 0)],
          skill: r.SkillType.Blacksmithing,
          level: d.RecipeLevel.Expert,
          requiredDoodad: a.DoodadTypeGroup.Anvil,
          requiresFire: !0,
          reputation: -1e3
      },
      craftable: !1,
      disassemble: !0,
      requiredForDisassembly: [d.ItemTypeGroup.Hammer, d.ItemTypeGroup.SandCastFlask],
      worth: 3e3,
      spawnOnMerchant: [s.BiomeType.IceCap]
  }, g(d.ItemType.BlackplateBoots, d.ItemTypeGroup.Equipment), t.itemDescriptions[d.ItemType.BlackplateHelmet] = {
      durability: 150,
      equip: r.EquipType.Head,
      defense: new o.Defense(4, new o.Resistances(o.DamageType.Slashing, 2, o.DamageType.Piercing, 2), new o.Vulnerabilities(o.DamageType.Blunt, 2)),
      recipe: {
          components: [T(d.ItemType.IronIngot, 8, 8, 8), T(d.ItemTypeGroup.Hammer, 1, 0), T(d.ItemTypeGroup.Tongs, 1, 0)],
          skill: r.SkillType.Blacksmithing,
          level: d.RecipeLevel.Expert,
          requiredDoodad: a.DoodadTypeGroup.Anvil,
          requiresFire: !0,
          reputation: -1e3
      },
      craftable: !1,
      disassemble: !0,
      requiredForDisassembly: [d.ItemTypeGroup.Hammer, d.ItemTypeGroup.SandCastFlask],
      worth: 2500,
      spawnOnMerchant: [s.BiomeType.IceCap]
  }, g(d.ItemType.BlackplateHelmet, d.ItemTypeGroup.Equipment), t.itemDescriptions[d.ItemType.BlackplateGorget] = {
      durability: 150,
      equip: r.EquipType.Neck,
      defense: new o.Defense(4, new o.Resistances(o.DamageType.Slashing, 2, o.DamageType.Piercing, 2), new o.Vulnerabilities(o.DamageType.Blunt, 2)),
      recipe: {
          components: [T(d.ItemType.IronIngot, 6, 6, 6), T(d.ItemTypeGroup.Hammer, 1, 0), T(d.ItemTypeGroup.Tongs, 1, 0)],
          skill: r.SkillType.Blacksmithing,
          level: d.RecipeLevel.Advanced,
          requiredDoodad: a.DoodadTypeGroup.Anvil,
          requiresFire: !0,
          reputation: -1e3
      },
      craftable: !1,
      disassemble: !0,
      requiredForDisassembly: [d.ItemTypeGroup.Hammer, d.ItemTypeGroup.SandCastFlask],
      worth: 2e3,
      spawnOnMerchant: [s.BiomeType.IceCap]
  }, g(d.ItemType.BlackplateGorget, d.ItemTypeGroup.Equipment), t.itemDescriptions[d.ItemType.BlackplateGreaves] = {
      durability: 150,
      equip: r.EquipType.Legs,
      defense: new o.Defense(4, new o.Resistances(o.DamageType.Slashing, 2, o.DamageType.Piercing, 2), new o.Vulnerabilities(o.DamageType.Blunt, 2)),
      recipe: {
          components: [T(d.ItemType.IronIngot, 10, 10, 10), T(d.ItemTypeGroup.Hammer, 1, 0), T(d.ItemTypeGroup.Tongs, 1, 0)],
          skill: r.SkillType.Blacksmithing,
          level: d.RecipeLevel.Expert,
          requiredDoodad: a.DoodadTypeGroup.Anvil,
          requiresFire: !0,
          reputation: -1e3
      },
      craftable: !1,
      disassemble: !0,
      requiredForDisassembly: [d.ItemTypeGroup.Hammer, d.ItemTypeGroup.SandCastFlask],
      worth: 2500,
      spawnOnMerchant: [s.BiomeType.IceCap]
  }, g(d.ItemType.BlackplateGreaves, d.ItemTypeGroup.Equipment), t.itemDescriptions[d.ItemType.BlackplateGauntlets] = {
      durability: 150,
      equip: r.EquipType.Hands,
      defense: new o.Defense(3, new o.Resistances(o.DamageType.Slashing, 2, o.DamageType.Piercing, 2), new o.Vulnerabilities(o.DamageType.Blunt, 2)),
      recipe: {
          components: [T(d.ItemType.IronIngot, 8, 8, 8), T(d.ItemTypeGroup.Hammer, 1, 0), T(d.ItemTypeGroup.Tongs, 1, 0)],
          skill: r.SkillType.Blacksmithing,
          level: d.RecipeLevel.Expert,
          requiredDoodad: a.DoodadTypeGroup.Anvil,
          requiresFire: !0,
          reputation: -1e3
      },
      craftable: !1,
      disassemble: !0,
      requiredForDisassembly: [d.ItemTypeGroup.Hammer, d.ItemTypeGroup.SandCastFlask],
      worth: 2500,
      spawnOnMerchant: [s.BiomeType.IceCap]
  }, g(d.ItemType.BlackplateGauntlets, d.ItemTypeGroup.Equipment), t.itemDescriptions[d.ItemType.DeathKnightAxe] = {
      durability: 350,
      equip: r.EquipType.Held,
      attack: 9,
      damageType: o.DamageType.Slashing,
      use: [i.ActionType.Carve, i.ActionType.Gather, i.ActionType.Harvest, i.ActionType.Melee],
      recipe: {
          components: [T(d.ItemType.TalcumPowder, 1, 1, 0, !0), T(d.ItemType.IronIngot, 12, 12, 12), T(d.ItemTypeGroup.SandCastFlask, 1, 0), T(d.ItemTypeGroup.Pole, 1, 1, 1), T(d.ItemTypeGroup.Hammer, 1, 0), T(d.ItemTypeGroup.Tongs, 1, 0)],
          skill: r.SkillType.Blacksmithing,
          level: d.RecipeLevel.Advanced,
          requiredDoodad: a.DoodadTypeGroup.Anvil,
          requiresFire: !0,
          reputation: -1500
      },
      craftable: !1,
      disassemble: !0,
      requiredForDisassembly: [d.ItemTypeGroup.Hammer, d.ItemTypeGroup.SandCastFlask],
      worth: 3e3,
      tier: {
          [d.ItemTypeGroup.Sharpened]: 5
      },
      spawnOnMerchant: [s.BiomeType.IceCap]
  }, g(d.ItemType.DeathKnightAxe, d.ItemTypeGroup.Sharpened, d.ItemTypeGroup.Weapon, d.ItemTypeGroup.Tool), t.itemDescriptions[d.ItemType.Macuahuitl] = {
      durability: 25,
      equip: r.EquipType.Held,
      attack: 8,
      damageType: o.DamageType.Slashing,
      use: [i.ActionType.Carve, i.ActionType.Gather, i.ActionType.Melee],
      recipe: {
          components: [T(d.ItemType.Obsidian, 4, 4, 4), T(d.ItemTypeGroup.Pole, 3, 3, 3)],
          skill: r.SkillType.Stonecrafting,
          level: d.RecipeLevel.Expert,
          reputation: -500
      },
      disassemble: !0,
      flammable: !0,
      worth: 150,
      tier: {
          [d.ItemTypeGroup.Sharpened]: 3
      },
      spawnOnMerchant: [s.BiomeType.Arid]
  }, g(d.ItemType.Macuahuitl, d.ItemTypeGroup.Sharpened, d.ItemTypeGroup.Weapon), t.itemDescriptions[d.ItemType.ObsidianArrow] = {
      recipe: {
          components: [T(d.ItemType.Feather, 1, 1, 1), T(d.ItemType.ObsidianArrowhead, 1, 1, 1), T(d.ItemType.ArrowShaft, 1, 1, 1), T(d.ItemTypeGroup.Cordage, 1, 1, 1)],
          skill: r.SkillType.Fletching,
          level: d.RecipeLevel.Advanced,
          reputation: -75
      },
      disassemble: !0,
      attack: 4,
      damageType: o.DamageType.Piercing,
      durability: 15,
      flammable: !0,
      worth: 50,
      spawnOnMerchant: [s.BiomeType.Arid]
  }, g(d.ItemType.ObsidianArrow, d.ItemTypeGroup.Arrow), t.itemDescriptions[d.ItemType.ObsidianArrowhead] = {
      reducedWeight: 1.5,
      minimumWeight: .5,
      use: [i.ActionType.Carve],
      recipe: {
          components: [T(d.ItemType.Obsidian, 2, 1)],
          skill: r.SkillType.Stonecrafting,
          level: d.RecipeLevel.Advanced,
          reputation: -50
      },
      damageType: o.DamageType.Piercing,
      worth: 20,
      tier: {
          [d.ItemTypeGroup.Sharpened]: 2
      },
      spawnOnMerchant: [s.BiomeType.Arid]
  }, g(d.ItemType.ObsidianArrowhead, d.ItemTypeGroup.Sharpened), t.itemDescriptions[d.ItemType.ObsidianAxe] = {
      durability: 35,
      equip: r.EquipType.Held,
      attack: 5,
      damageType: o.DamageType.Slashing,
      use: [i.ActionType.Carve, i.ActionType.Gather, i.ActionType.Harvest, i.ActionType.Melee],
      recipe: {
          components: [T(d.ItemType.String, 1, 1, 1), T(d.ItemType.Obsidian, 2, 2, 2), T(d.ItemTypeGroup.Pole, 1, 1, 1)],
          skill: r.SkillType.Stonecrafting,
          level: d.RecipeLevel.Advanced,
          reputation: -500
      },
      disassemble: !0,
      worth: 50,
      flammable: !0,
      tier: {
          [d.ItemTypeGroup.Sharpened]: 3
      },
      spawnOnMerchant: [s.BiomeType.Arid]
  }, g(d.ItemType.ObsidianAxe, d.ItemTypeGroup.Sharpened, d.ItemTypeGroup.Weapon, d.ItemTypeGroup.Tool), t.itemDescriptions[d.ItemType.ObsidianKnife] = {
      reducedWeight: .3,
      durability: 15,
      equip: r.EquipType.Held,
      attack: 3,
      damageType: o.DamageType.Slashing,
      use: [i.ActionType.Carve, i.ActionType.Harvest, i.ActionType.Gather, i.ActionType.Melee],
      recipe: {
          components: [T(d.ItemType.String, 1, 1), T(d.ItemType.Obsidian, 1, 1), T(d.ItemTypeGroup.Pole, 1, 1)],
          skill: r.SkillType.Stonecrafting,
          level: d.RecipeLevel.Intermediate,
          reputation: -100
      },
      onBurn: [d.ItemType.PileOfAsh, d.ItemType.PileOfAsh],
      worth: 25,
      flammable: !0,
      tier: {
          [d.ItemTypeGroup.Sharpened]: 3
      },
      spawnOnMerchant: [s.BiomeType.Arid]
  }, g(d.ItemType.ObsidianKnife, d.ItemTypeGroup.Sharpened, d.ItemTypeGroup.Weapon), t.itemDescriptions[d.ItemType.ObsidianShovel] = {
      durability: 50,
      equip: r.EquipType.Held,
      attack: 4,
      damageType: o.DamageType.Slashing,
      use: [i.ActionType.Dig, i.ActionType.Gather, i.ActionType.GatherTreasure, i.ActionType.Harvest, i.ActionType.Melee],
      recipe: {
          components: [T(d.ItemType.String, 2, 2, 2), T(d.ItemType.Obsidian, 1, 1, 1), T(d.ItemTypeGroup.Pole, 1, 1, 1)],
          skill: r.SkillType.Stonecrafting,
          level: d.RecipeLevel.Advanced,
          reputation: -175
      },
      disassemble: !0,
      worth: 50,
      flammable: !0,
      spawnOnMerchant: [s.BiomeType.Arid]
  }, g(d.ItemType.ObsidianShovel, d.ItemTypeGroup.Tool, d.ItemTypeGroup.Weapon), t.itemDescriptions[d.ItemType.ObsidianSpear] = {
      durability: 25,
      equip: r.EquipType.Held,
      attack: 6,
      damageType: o.DamageType.Piercing,
      recipe: {
          components: [T(d.ItemType.String, 1, 1, 1), T(d.ItemType.Obsidian, 1, 1, 1), T(d.ItemTypeGroup.Pole, 1, 1, 1)],
          skill: r.SkillType.Stonecrafting,
          level: d.RecipeLevel.Advanced,
          reputation: -500
      },
      disassemble: !0,
      use: [i.ActionType.Gather, i.ActionType.Melee],
      worth: 50,
      flammable: !0,
      tier: {
          [d.ItemTypeGroup.CookingEquipment]: 2
      },
      spawnOnMerchant: [s.BiomeType.Arid]
  }, g(d.ItemType.ObsidianSpear, d.ItemTypeGroup.Weapon, d.ItemTypeGroup.CookingEquipment), t.itemDescriptions[d.ItemType.TumbleweedSeeds] = {
      weight: .1,
      skillUse: r.SkillType.Botany,
      use: [i.ActionType.Plant, i.ActionType.Eat],
      onBurn: [d.ItemType.PileOfAsh],
      onUse: {
          [i.ActionType.Plant]: a.DoodadType.Tumbleweed,
          [i.ActionType.Eat]: [1, 0, 1, -1]
      },
      flammable: !0,
      worth: 5,
      spawnOnMerchant: [s.BiomeType.Coastal, s.BiomeType.Arid]
  }, g(d.ItemType.TumbleweedSeeds, d.ItemTypeGroup.Seed), t.itemDescriptions[d.ItemType.CoconutHusk] = {
      weight: .2,
      onBurn: [d.ItemType.PileOfAsh],
      use: [i.ActionType.StokeFire],
      onUse: {
          [i.ActionType.StokeFire]: 30
      },
      flammable: !0,
      worth: 5,
      tier: {
          [d.ItemTypeGroup.Compost]: 2,
          [d.ItemTypeGroup.Cordage]: 1,
          [d.ItemTypeGroup.Pulp]: 1
      },
      spawnOnWorldGen: {
          [s.BiomeType.Arid]: {
              [l.WorldZ.Overworld]: {
                  [y.TerrainType.DesertSand]: 2
              }
          }
      },
      spawnOnMerchant: [s.BiomeType.Arid]
  }, g(d.ItemType.CoconutHusk, d.ItemTypeGroup.Tinder, d.ItemTypeGroup.Cordage, d.ItemTypeGroup.Pulp, d.ItemTypeGroup.Compost), t.itemDescriptions[d.ItemType.PeeledCoconut] = {
      weight: 1.3,
      decayMax: 7500,
      decaysInto: [d.ItemType.RottingVegetation, d.ItemType.RottingVegetation],
      onBurn: [d.ItemType.PileOfAsh],
      dismantle: {
          items: [{
              type: d.ItemType.CoconutMeat,
              amount: 1
          }],
          skill: r.SkillType.Botany,
          required: d.ItemTypeGroup.Sharpened
      },
      skillUse: r.SkillType.Botany,
      use: [i.ActionType.Plant],
      onUse: {
          [i.ActionType.Plant]: a.DoodadType.CoconutTree
      },
      flammable: !0,
      worth: 20,
      spawnOnMerchant: [s.BiomeType.Arid]
  }, t.itemDescriptions[d.ItemType.CoconutMeat] = {
      weight: 1.2,
      skillUse: r.SkillType.Botany,
      decayMax: 6500,
      decaysInto: [d.ItemType.RottingVegetation, d.ItemType.RottingVegetation],
      onBurn: [d.ItemType.PileOfAsh],
      use: [i.ActionType.Eat],
      onUse: {
          [i.ActionType.Eat]: [4, 6, 4, 0]
      },
      worth: 10
  }, t.itemDescriptions[d.ItemType.CoconutContainer] = {
      inheritWeight: d.ItemType.CoconutContainerOfCoconutWater,
      gather: {
          milk: d.ItemType.CoconutContainerOfGoatMilk,
          desalinated: d.ItemType.CoconutContainerOfDesalinatedWater,
          unpurified: d.ItemType.CoconutContainerOfUnpurifiedFreshWater,
          seawater: d.ItemType.CoconutContainerOfSeawater
      },
      use: [i.ActionType.GatherWater, i.ActionType.GatherMilk, i.ActionType.AttachContainer],
      onBurn: [d.ItemType.PileOfAsh, d.ItemType.PileOfAsh],
      flammable: !0,
      worth: 25,
      spawnOnMerchant: [s.BiomeType.Arid]
  }, g(d.ItemType.CoconutContainer, d.ItemTypeGroup.LiquidContainer), t.itemDescriptions[d.ItemType.CoconutContainerOfCoconutWater] = {
      use: [i.ActionType.DrinkItem, i.ActionType.Pour, i.ActionType.PourOnYourself],
      recipe: {
          components: [T(d.ItemType.PeeledCoconut, 1, 1), T(d.ItemType.Cork, 1, 1), T(d.ItemType.String, 1, 1), T(d.ItemTypeGroup.Sharpened, 1, 0)],
          skill: r.SkillType.Botany,
          level: d.RecipeLevel.Intermediate,
          reputation: 25
      },
      returnOnUseAndDecay: {
          type: d.ItemType.CoconutContainer,
          damaged: !0,
          whenCrafted: !0
      },
      repairable: !1,
      onUse: {
          [i.ActionType.DrinkItem]: [2, 16, 2, 7]
      },
      flammable: !0,
      worth: 50,
      burnsLike: [d.ItemType.CoconutContainer],
      tier: {
          [d.ItemTypeGroup.Liquid]: 2
      },
      spawnOnMerchant: [s.BiomeType.Arid]
  }, g(d.ItemType.CoconutContainerOfCoconutWater, d.ItemTypeGroup.Liquid), t.itemDescriptions[d.ItemType.CoconutContainerOfSeawater] = {
      inheritWeight: d.ItemType.CoconutContainerOfCoconutWater,
      use: [i.ActionType.Pour, i.ActionType.PourOnYourself, i.ActionType.DrinkItem],
      returnOnUseAndDecay: {
          type: d.ItemType.CoconutContainer,
          damaged: !0,
          whenCrafted: !0
      },
      repairable: !1,
      onUse: {
          [i.ActionType.DrinkItem]: [0, -15, 1, -2]
      },
      flammable: !0,
      worth: 50,
      burnsLike: [d.ItemType.CoconutContainer],
      tier: {
          [d.ItemTypeGroup.Liquid]: 1
      },
      spawnOnMerchant: [s.BiomeType.Arid]
  }, g(d.ItemType.CoconutContainerOfSeawater, d.ItemTypeGroup.Liquid, d.ItemTypeGroup.ContainerOfSeawater), t.itemDescriptions[d.ItemType.CoconutContainerOfDesalinatedWater] = {
      inheritWeight: d.ItemType.CoconutContainerOfCoconutWater,
      use: [i.ActionType.DrinkItem, i.ActionType.Pour, i.ActionType.PourOnYourself],
      recipe: {
          baseComponent: d.ItemType.CoconutContainerOfSeawater,
          components: [T(d.ItemType.Flask, 1, 0)],
          skill: r.SkillType.Chemistry,
          level: d.RecipeLevel.Simple,
          requiresFire: !0,
          reputation: 25
      },
      returnOnUseAndDecay: {
          type: d.ItemType.CoconutContainer,
          damaged: !0,
          whenCrafted: !0
      },
      keepDurabilityOnCraft: !0,
      repairable: !1,
      onUse: {
          [i.ActionType.DrinkItem]: [2, 25, 1, 11]
      },
      flammable: !0,
      worth: 75,
      burnsLike: [d.ItemType.CoconutContainer],
      tier: {
          [d.ItemTypeGroup.Liquid]: 2
      },
      spawnOnMerchant: [s.BiomeType.Arid]
  }, g(d.ItemType.CoconutContainerOfDesalinatedWater, d.ItemTypeGroup.Liquid, d.ItemTypeGroup.CoconutContainerOfPotableWater, d.ItemTypeGroup.ContainerOfDesalinatedWater), t.itemDescriptions[d.ItemType.CoconutContainerOfMedicinalWater] = {
      inheritWeight: d.ItemType.CoconutContainerOfCoconutWater,
      use: [i.ActionType.DrinkCure, i.ActionType.PourOnYourself],
      recipe: {
          baseComponent: d.ItemTypeGroup.CoconutContainerOfPotableWater,
          components: [T(d.ItemTypeGroup.Medicinal, 2, 2)],
          skill: r.SkillType.Chemistry,
          level: d.RecipeLevel.Intermediate,
          reputation: 25
      },
      returnOnUseAndDecay: {
          type: d.ItemType.CoconutContainer,
          damaged: !0,
          whenCrafted: !0
      },
      keepDurabilityOnCraft: !0,
      repairable: !1,
      onUse: {
          [i.ActionType.DrinkCure]: [3, 16, 1, 9]
      },
      flammable: !0,
      worth: 75,
      burnsLike: [d.ItemType.CoconutContainer],
      tier: {
          [d.ItemTypeGroup.Liquid]: 3
      },
      spawnOnMerchant: [s.BiomeType.Arid],
      canCureStatus: [o.StatusType.Poisoned]
  }, g(d.ItemType.CoconutContainerOfMedicinalWater, d.ItemTypeGroup.Liquid, d.ItemTypeGroup.ContainerOfMedicinalWater), t.itemDescriptions[d.ItemType.CoconutContainerOfPurifiedFreshWater] = {
      inheritWeight: d.ItemType.CoconutContainerOfCoconutWater,
      use: [i.ActionType.DrinkItem, i.ActionType.Pour, i.ActionType.PourOnYourself],
      recipe: {
          baseComponent: d.ItemType.CoconutContainerOfUnpurifiedFreshWater,
          components: [],
          skill: r.SkillType.Chemistry,
          level: d.RecipeLevel.Simple,
          requiresFire: !0,
          reputation: 25
      },
      returnOnUseAndDecay: {
          type: d.ItemType.CoconutContainer,
          damaged: !0,
          whenCrafted: !0
      },
      keepDurabilityOnCraft: !0,
      repairable: !1,
      onUse: {
          [i.ActionType.DrinkItem]: [1, 25, 1, 10]
      },
      flammable: !0,
      worth: 75,
      burnsLike: [d.ItemType.CoconutContainer],
      tier: {
          [d.ItemTypeGroup.Liquid]: 2
      },
      spawnOnMerchant: [s.BiomeType.Arid]
  }, g(d.ItemType.CoconutContainerOfPurifiedFreshWater, d.ItemTypeGroup.Liquid, d.ItemTypeGroup.CoconutContainerOfPotableWater, d.ItemTypeGroup.ContainerOfPurifiedFreshWater), t.itemDescriptions[d.ItemType.CoconutContainerOfUnpurifiedFreshWater] = {
      inheritWeight: d.ItemType.CoconutContainerOfCoconutWater,
      use: [i.ActionType.DrinkItem, i.ActionType.Pour, i.ActionType.PourOnYourself],
      recipe: {
          baseComponent: d.ItemType.CoconutContainer,
          components: [T(d.ItemTypeGroup.FrozenWater, 1, 1)],
          skill: r.SkillType.Chemistry,
          level: d.RecipeLevel.Simple,
          reputation: 25
      },
      returnOnUseAndDecay: {
          type: d.ItemType.CoconutContainer,
          damaged: !0,
          whenCrafted: !0
      },
      keepDurabilityOnCraft: !0,
      repairable: !1,
      onUse: {
          [i.ActionType.DrinkItem]: [-4, 16, 1, 8]
      },
      flammable: !0,
      worth: 50,
      burnsLike: [d.ItemType.CoconutContainer],
      tier: {
          [d.ItemTypeGroup.Liquid]: 1
      },
      spawnOnMerchant: [s.BiomeType.Arid]
  }, g(d.ItemType.CoconutContainerOfUnpurifiedFreshWater, d.ItemTypeGroup.Liquid, d.ItemTypeGroup.ContainerOfUnpurifiedFreshWater), t.itemDescriptions[d.ItemType.CoconutContainerOfGoatMilk] = {
      inheritWeight: d.ItemType.CoconutContainerOfCoconutWater,
      use: [i.ActionType.DrinkItem, i.ActionType.Pour, i.ActionType.PourOnYourself],
      durability: 10,
      returnOnUseAndDecay: {
          type: d.ItemType.CoconutContainer,
          damaged: !0,
          whenCrafted: !0
      },
      keepDurabilityOnCraft: !0,
      repairable: !1,
      onUse: {
          [i.ActionType.DrinkItem]: [2, 20, 2, 5]
      },
      flammable: !0,
      worth: 75,
      burnsLike: [d.ItemType.CoconutContainer],
      tier: {
          [d.ItemTypeGroup.Liquid]: 3
      },
      spawnOnMerchant: [s.BiomeType.Arid]
  }, g(d.ItemType.CoconutContainerOfGoatMilk, d.ItemTypeGroup.Liquid, d.ItemTypeGroup.ContainerOfMilk), t.itemDescriptions[d.ItemType.OldEducationalScroll] = {
      weight: .2,
      use: [i.ActionType.Learn],
      onBurn: [d.ItemType.PileOfAsh],
      flammable: !0,
      worth: 75,
      dismantle: {
          items: [{
              type: d.ItemType.ShreddedPaper,
              amount: 1
          }]
      },
      spawnOnWorldGen: {
          [s.BiomeType.Coastal]: {
              [l.WorldZ.Cave]: {
                  [y.TerrainType.RockGround]: 1,
                  [y.TerrainType.Dirt]: 1,
                  [y.TerrainType.Gravel]: 1
              }
          }
      }
  }, t.itemDescriptions[d.ItemType.StrippedLeather] = {
      weight: .2,
      onBurn: [d.ItemType.PileOfAsh],
      flammable: !0,
      worth: 5,
      tier: {
          [d.ItemTypeGroup.Cordage]: 3
      }
  }, g(d.ItemType.StrippedLeather, d.ItemTypeGroup.Cordage), t.itemDescriptions[d.ItemType.ClaySandCastFlask] = {
      recipe: {
          components: [T(d.ItemType.RawClay, 1, 1), T(d.ItemType.GreenSand, 1, 1)],
          skill: r.SkillType.Claythrowing,
          level: d.RecipeLevel.Intermediate,
          reputation: -25
      },
      durability: 15,
      worth: 35,
      tier: {
          [d.ItemTypeGroup.SandCastFlask]: 2
      },
      spawnOnMerchant: [s.BiomeType.Arid]
  }, g(d.ItemType.ClaySandCastFlask, d.ItemTypeGroup.SandCastFlask), t.itemDescriptions[d.ItemType.SandstoneSandCastFlask] = {
      recipe: {
          components: [T(d.ItemType.Sandstone, 1, 1), T(d.ItemType.GreenSand, 1, 1)],
          skill: r.SkillType.Stonecrafting,
          level: d.RecipeLevel.Intermediate,
          reputation: -25
      },
      durability: 25,
      worth: 35,
      tier: {
          [d.ItemTypeGroup.SandCastFlask]: 2
      },
      spawnOnMerchant: [s.BiomeType.Arid]
  }, g(d.ItemType.SandstoneSandCastFlask, d.ItemTypeGroup.SandCastFlask), t.itemDescriptions[d.ItemType.StoneSandCastFlask] = {
      recipe: {
          components: [T(d.ItemType.LargeRock, 1, 1), T(d.ItemType.GreenSand, 1, 1)],
          skill: r.SkillType.Stonecrafting,
          level: d.RecipeLevel.Intermediate,
          reputation: -25
      },
      durability: 35,
      worth: 35,
      tier: {
          [d.ItemTypeGroup.SandCastFlask]: 2
      },
      spawnOnMerchant: [s.BiomeType.Arid]
  }, g(d.ItemType.StoneSandCastFlask, d.ItemTypeGroup.SandCastFlask), t.itemDescriptions[d.ItemType.AnimalGlue] = {
      use: [i.ActionType.Reinforce, i.ActionType.Eat],
      recipe: {
          components: [T(d.ItemType.Offal, 1, 1), T(d.ItemTypeGroup.Bone, 1, 1), T(d.ItemTypeGroup.Liquid, 1, 1, 0, !0)],
          skill: r.SkillType.Chemistry,
          level: d.RecipeLevel.Advanced,
          requiresFire: !0,
          reputation: -25
      },
      decayMax: 500,
      onBurn: [d.ItemType.None],
      onUse: {
          [i.ActionType.Eat]: [-1, -2, 1, 0]
      },
      skillUse: r.SkillType.Chemistry,
      worth: 10,
      tier: {
          [d.ItemTypeGroup.Glue]: 1
      }
  }, g(d.ItemType.AnimalGlue, d.ItemTypeGroup.Reinforcement, d.ItemTypeGroup.Glue), t.itemDescriptions[d.ItemType.CopalResin] = {
      recipe: {
          components: [T(d.ItemType.Copal, 1, 1), T(d.ItemTypeGroup.MortarAndPestle, 1, 0)],
          skill: r.SkillType.Chemistry,
          level: d.RecipeLevel.Intermediate,
          reputation: -25
      },
      onBurn: [d.ItemType.MeltedCopal],
      worth: 25,
      spawnOnMerchant: [s.BiomeType.Coastal]
  }, g(d.ItemType.CopalResin, d.ItemTypeGroup.Powder), t.itemDescriptions[d.ItemType.BoneMeal] = {
      reducedWeight: .3,
      minimumWeight: .2,
      recipe: {
          components: [T(d.ItemTypeGroup.Bone, 1, 1), T(d.ItemTypeGroup.MortarAndPestle, 1, 0)],
          skill: r.SkillType.Chemistry,
          level: d.RecipeLevel.Simple,
          reputation: 25
      },
      onBurn: [d.ItemType.None],
      worth: 10
  }, g(d.ItemType.BoneMeal, d.ItemTypeGroup.Powder), t.itemDescriptions[d.ItemType.PileOfDesertSand] = {
      weight: 3,
      use: [i.ActionType.SetDown, i.ActionType.SmotherFire],
      onUse: {
          [i.ActionType.SetDown]: y.TerrainType.DesertSand,
          [i.ActionType.SmotherFire]: y.TerrainType.DesertSand
      },
      worth: 5,
      tier: {
          [d.ItemTypeGroup.Sand]: 2
      },
      spawnOnMerchant: [s.BiomeType.Arid]
  }, g(d.ItemType.PileOfDesertSand, d.ItemTypeGroup.Sand), t.itemDescriptions[d.ItemType.JoshuaTreeLeaves] = {
      weight: .3,
      onBurn: [d.ItemType.PileOfAsh],
      use: [i.ActionType.StokeFire],
      onUse: {
          [i.ActionType.StokeFire]: 75
      },
      worth: 5,
      flammable: !0,
      tier: {
          [d.ItemTypeGroup.Compost]: 2,
          [d.ItemTypeGroup.Cordage]: 1
      },
      spawnOnMerchant: [s.BiomeType.Arid]
  }, g(d.ItemType.JoshuaTreeLeaves, d.ItemTypeGroup.Cordage, d.ItemTypeGroup.Compost, d.ItemTypeGroup.Tinder), t.itemDescriptions[d.ItemType.JoshuaTreeFruit] = {
      weight: .4,
      use: [i.ActionType.Eat],
      skillUse: r.SkillType.Botany,
      decayMax: 8e3,
      decaysInto: [d.ItemType.RottingVegetation],
      returnOnUseAndDecay: {
          type: d.ItemType.JoshuaTreeSeeds
      },
      onBurn: [d.ItemType.CookedJoshuaTreeFruit],
      onUse: {
          [i.ActionType.Eat]: [1, 3, 1, 1]
      },
      dismantle: {
          items: [{
              type: d.ItemType.JoshuaTreeSeeds,
              amount: 1
          }],
          skill: r.SkillType.Botany
      },
      worth: 5,
      spawnOnMerchant: [s.BiomeType.Arid]
  }, g(d.ItemType.JoshuaTreeFruit, d.ItemTypeGroup.Fruit), t.itemDescriptions[d.ItemType.JoshuaTreeSeeds] = {
      weight: .1,
      use: [i.ActionType.Plant, i.ActionType.Eat],
      skillUse: r.SkillType.Botany,
      onBurn: [d.ItemType.PileOfAsh],
      onUse: {
          [i.ActionType.Plant]: a.DoodadType.JoshuaTree,
          [i.ActionType.Eat]: [1, 1, 2, -1]
      },
      flammable: !0,
      worth: 5,
      spawnOnMerchant: [s.BiomeType.Arid]
  }, g(d.ItemType.JoshuaTreeSeeds, d.ItemTypeGroup.Seed), t.itemDescriptions[d.ItemType.CookedJoshuaTreeFruit] = {
      use: [i.ActionType.Eat],
      decayMax: 1e4,
      skillUse: r.SkillType.Botany,
      recipe: {
          components: [T(d.ItemType.JoshuaTreeFruit, 1, 1), T(d.ItemTypeGroup.CookingEquipment, 1, 0)],
          skill: r.SkillType.Cooking,
          level: d.RecipeLevel.Simple,
          requiresFire: !0,
          reputation: 25
      },
      decaysInto: [d.ItemType.RottingVegetation],
      onBurn: [d.ItemType.PileOfAsh],
      onUse: {
          [i.ActionType.Eat]: [3, 8, 1, -1]
      },
      worth: 15,
      spawnOnMerchant: [s.BiomeType.Arid]
  }, g(d.ItemType.CookedJoshuaTreeFruit, d.ItemTypeGroup.Fruit, d.ItemTypeGroup.CookedFood), t.itemDescriptions[d.ItemType.JoshuaTreeFlowers] = {
      weight: .3,
      use: [i.ActionType.Eat],
      skillUse: r.SkillType.Botany,
      onBurn: [d.ItemType.PileOfAsh],
      onUse: {
          [i.ActionType.Eat]: [2, 4, 2, -2]
      },
      flammable: !0,
      worth: 5,
      tier: {
          [d.ItemTypeGroup.Medicinal]: 1
      },
      spawnOnMerchant: [s.BiomeType.Arid]
  }, g(d.ItemType.JoshuaTreeFlowers, d.ItemTypeGroup.Medicinal), t.itemDescriptions[d.ItemType.SaguaroCactusFruit] = {
      weight: .4,
      use: [i.ActionType.Eat],
      skillUse: r.SkillType.Botany,
      decayMax: 4500,
      decaysInto: [d.ItemType.RottingVegetation],
      returnOnUseAndDecay: {
          type: d.ItemType.SaguaroCactusSeeds
      },
      onBurn: [d.ItemType.PileOfAsh],
      onUse: {
          [i.ActionType.Eat]: [2, 8, 1, 1]
      },
      dismantle: {
          items: [{
              type: d.ItemType.SaguaroCactusSeeds,
              amount: 1
          }],
          skill: r.SkillType.Botany
      },
      worth: 5,
      spawnOnMerchant: [s.BiomeType.Arid]
  }, g(d.ItemType.SaguaroCactusFruit, d.ItemTypeGroup.Fruit), t.itemDescriptions[d.ItemType.SaguaroCactusSeeds] = {
      weight: .1,
      use: [i.ActionType.Plant, i.ActionType.Eat],
      skillUse: r.SkillType.Botany,
      onBurn: [d.ItemType.PileOfAsh],
      onUse: {
          [i.ActionType.Plant]: a.DoodadType.SaguaroCactus,
          [i.ActionType.Eat]: [-2, -2, 1, -1]
      },
      flammable: !0,
      worth: 5,
      spawnOnMerchant: [s.BiomeType.Arid]
  }, g(d.ItemType.SaguaroCactusSeeds, d.ItemTypeGroup.Seed), t.itemDescriptions[d.ItemType.SaguaroCactusChunk] = {
      weight: 2,
      use: [i.ActionType.Eat],
      decayMax: 3500,
      skillUse: r.SkillType.Botany,
      decaysInto: [d.ItemType.SaguaroCactusRibs],
      onBurn: [d.ItemType.PileOfAsh],
      onUse: {
          [i.ActionType.Eat]: [-6, -8, 4, -2]
      },
      worth: 5,
      spawnOnMerchant: [s.BiomeType.Arid]
  }, t.itemDescriptions[d.ItemType.StoneWell] = {
      use: [i.ActionType.Build],
      recipe: {
          components: [T(d.ItemTypeGroup.Rock, 14, 14, 14), T(d.ItemType.Rope, 1, 1, 1), T(d.ItemTypeGroup.Pole, 3, 3, 3)],
          skill: r.SkillType.Stonecrafting,
          level: d.RecipeLevel.Expert,
          reputation: -25
      },
      disassemble: !0,
      durability: 15,
      worth: 50,
      onUse: {
          [i.ActionType.Build]: a.DoodadType.StoneWell
      },
      spawnOnMerchant: [s.BiomeType.Coastal, s.BiomeType.IceCap]
  }, t.itemDescriptions[d.ItemType.SandstoneWell] = {
      use: [i.ActionType.Build],
      recipe: {
          components: [T(d.ItemType.Sandstone, 14, 14, 14), T(d.ItemType.Rope, 1, 1, 1), T(d.ItemTypeGroup.Pole, 3, 3, 3)],
          skill: r.SkillType.Stonecrafting,
          level: d.RecipeLevel.Expert,
          reputation: -25
      },
      disassemble: !0,
      durability: 5,
      worth: 50,
      onUse: {
          [i.ActionType.Build]: a.DoodadType.SandstoneWell
      },
      spawnOnMerchant: [s.BiomeType.Arid]
  }, t.itemDescriptions[d.ItemType.ClayWell] = {
      use: [i.ActionType.Build],
      recipe: {
          components: [T(d.ItemType.ClayBrick, 14, 14, 14), T(d.ItemType.Rope, 1, 1, 1), T(d.ItemTypeGroup.Pole, 3, 3, 3)],
          skill: r.SkillType.Stonecrafting,
          level: d.RecipeLevel.Expert,
          reputation: -25
      },
      disassemble: !0,
      durability: 10,
      worth: 50,
      onUse: {
          [i.ActionType.Build]: a.DoodadType.ClayWell
      },
      spawnOnMerchant: [s.BiomeType.Arid]
  }, t.itemDescriptions[d.ItemType.AloeVeraLeaves] = {
      weight: .3,
      use: [i.ActionType.Apply, i.ActionType.Eat],
      skillUse: r.SkillType.Anatomy,
      decayMax: 3e3,
      decaysInto: [d.ItemType.RottingVegetation],
      onBurn: [d.ItemType.PileOfAsh],
      onUse: {
          [i.ActionType.Apply]: [1, 0, 0, 0],
          [i.ActionType.Eat]: [-4, -8, 1, -1]
      },
      worth: 5,
      tier: {
          [d.ItemTypeGroup.Medicinal]: 1
      },
      spawnOnMerchant: [s.BiomeType.Arid],
      canCureStatus: [o.StatusType.Burned]
  }, g(d.ItemType.AloeVeraLeaves, d.ItemTypeGroup.Health, d.ItemTypeGroup.Medicinal), t.itemDescriptions[d.ItemType.AloeVeraSeeds] = {
      weight: .1,
      use: [i.ActionType.Plant, i.ActionType.Eat],
      skillUse: r.SkillType.Botany,
      onBurn: [d.ItemType.PileOfAsh],
      onUse: {
          [i.ActionType.Plant]: a.DoodadType.AloeVera,
          [i.ActionType.Eat]: [-1, -2, 1, -1]
      },
      flammable: !0,
      worth: 5,
      spawnOnMerchant: [s.BiomeType.Arid]
  }, g(d.ItemType.AloeVeraSeeds, d.ItemTypeGroup.Seed), t.itemDescriptions[d.ItemType.DeadScorpion] = {
      weight: .5,
      use: [i.ActionType.Eat],
      decayMax: 5750,
      decaysInto: [d.ItemType.RottenMeat],
      onBurn: [d.ItemType.CookedScorpion],
      onUse: {
          [i.ActionType.Eat]: [-1, -4, 2, -1]
      },
      skillUse: r.SkillType.Anatomy,
      worth: 5,
      tier: {
          [d.ItemTypeGroup.Meat]: 1
      },
      spawnOnMerchant: [s.BiomeType.Arid]
  }, g(d.ItemType.DeadScorpion, d.ItemTypeGroup.Meat, d.ItemTypeGroup.Bait, d.ItemTypeGroup.RawMeat), t.itemDescriptions[d.ItemType.CookedScorpion] = {
      use: [i.ActionType.Eat],
      recipe: {
          components: [T(d.ItemType.DeadScorpion, 1, 1), T(d.ItemTypeGroup.CookingEquipment, 1, 0)],
          skill: r.SkillType.Cooking,
          level: d.RecipeLevel.Intermediate,
          requiresFire: !0,
          reputation: 25
      },
      decayMax: 6750,
      decaysInto: [d.ItemType.RottenMeat],
      onBurn: [d.ItemType.PileOfAsh],
      onUse: {
          [i.ActionType.Eat]: [2, 8, 2, 0]
      },
      skillUse: r.SkillType.Cooking,
      worth: 10,
      tier: {
          [d.ItemTypeGroup.Meat]: 2
      },
      spawnOnMerchant: [s.BiomeType.Arid]
  }, g(d.ItemType.CookedScorpion, d.ItemTypeGroup.Meat, d.ItemTypeGroup.CookedMeat, d.ItemTypeGroup.CookedFood), t.itemDescriptions[d.ItemType.DeadAberrantScorpion] = {
      weight: .6,
      use: [i.ActionType.Eat],
      decayMax: 4750,
      decaysInto: [d.ItemType.RottenMeat],
      onBurn: [d.ItemType.CookedAberrantScorpion],
      onUse: {
          [i.ActionType.Eat]: [-2, -8, 4, -1]
      },
      skillUse: r.SkillType.Anatomy,
      worth: 10,
      tier: {
          [d.ItemTypeGroup.Meat]: 2
      },
      spawnOnMerchant: [s.BiomeType.Arid]
  }, g(d.ItemType.DeadAberrantScorpion, d.ItemTypeGroup.Meat, d.ItemTypeGroup.Bait, d.ItemTypeGroup.RawMeat), t.itemDescriptions[d.ItemType.CookedAberrantScorpion] = {
      use: [i.ActionType.Eat],
      recipe: {
          components: [T(d.ItemType.DeadAberrantScorpion, 1, 1), T(d.ItemTypeGroup.CookingEquipment, 1, 0)],
          skill: r.SkillType.Cooking,
          level: d.RecipeLevel.Intermediate,
          requiresFire: !0,
          reputation: 25
      },
      decayMax: 5750,
      decaysInto: [d.ItemType.RottenMeat],
      onBurn: [d.ItemType.PileOfAsh],
      onUse: {
          [i.ActionType.Eat]: [4, 16, 4, 0]
      },
      skillUse: r.SkillType.Cooking,
      worth: 20,
      tier: {
          [d.ItemTypeGroup.Meat]: 3
      },
      spawnOnMerchant: [s.BiomeType.Arid]
  }, g(d.ItemType.DeadAberrantScorpion, d.ItemTypeGroup.Meat, d.ItemTypeGroup.CookedMeat, d.ItemTypeGroup.CookedFood), t.itemDescriptions[d.ItemType.ScorpionStinger] = {
      weight: .1,
      use: [i.ActionType.Eat],
      skillUse: r.SkillType.Anatomy,
      decayMax: 4750,
      onBurn: [d.ItemType.PileOfAsh],
      onUse: {
          [i.ActionType.Eat]: [-12, -20, 1, -1]
      },
      worth: 25,
      tier: {
          [d.ItemTypeGroup.Medicinal]: 2
      },
      spawnOnWorldGen: {
          [s.BiomeType.Arid]: {
              [l.WorldZ.Overworld]: {
                  [y.TerrainType.DesertSand]: 1
              }
          }
      },
      spawnOnMerchant: [s.BiomeType.Arid]
  }, g(d.ItemType.ScorpionStinger, d.ItemTypeGroup.Medicinal), t.itemDescriptions[d.ItemType.CopperBakingTray] = {
      durability: 50,
      recipe: {
          components: [T(d.ItemType.CopperIngot, 4, 4, 4), T(d.ItemTypeGroup.Hammer, 1, 0)],
          skill: r.SkillType.Blacksmithing,
          level: d.RecipeLevel.Simple,
          requiredDoodad: a.DoodadTypeGroup.Anvil,
          reputation: 25
      },
      repairAndDisassemblyRequiresFire: !0,
      disassemble: !0,
      requiredForDisassembly: [d.ItemTypeGroup.Hammer, d.ItemTypeGroup.SandCastFlask],
      worth: 100,
      tier: {
          [d.ItemTypeGroup.CookingEquipment]: 3,
          [d.ItemTypeGroup.Cookware]: 1
      }
  }, g(d.ItemType.CopperBakingTray, d.ItemTypeGroup.Cookware, d.ItemTypeGroup.CookingEquipment), t.itemDescriptions[d.ItemType.WroughtIronBakingTray] = {
      durability: 75,
      recipe: {
          components: [T(d.ItemType.WroughtIron, 4, 4, 4), T(d.ItemTypeGroup.Hammer, 1, 0)],
          skill: r.SkillType.Blacksmithing,
          level: d.RecipeLevel.Simple,
          requiredDoodad: a.DoodadTypeGroup.Anvil,
          requiresFire: !0,
          reputation: 25
      },
      disassemble: !0,
      requiredForDisassembly: [d.ItemTypeGroup.Hammer],
      worth: 50,
      tier: {
          [d.ItemTypeGroup.CookingEquipment]: 3,
          [d.ItemTypeGroup.Cookware]: 1
      }
  }, g(d.ItemType.WroughtIronBakingTray, d.ItemTypeGroup.Cookware, d.ItemTypeGroup.CookingEquipment), t.itemDescriptions[d.ItemType.IronBakingTray] = {
      durability: 100,
      recipe: {
          components: [T(d.ItemType.IronIngot, 4, 4, 4), T(d.ItemTypeGroup.Hammer, 1, 0), T(d.ItemTypeGroup.Tongs, 1, 0)],
          skill: r.SkillType.Blacksmithing,
          level: d.RecipeLevel.Simple,
          requiredDoodad: a.DoodadTypeGroup.Anvil,
          requiresFire: !0,
          reputation: 25
      },
      disassemble: !0,
      requiredForDisassembly: [d.ItemTypeGroup.Hammer, d.ItemTypeGroup.SandCastFlask],
      worth: 150,
      tier: {
          [d.ItemTypeGroup.CookingEquipment]: 4,
          [d.ItemTypeGroup.Cookware]: 2
      },
      spawnOnMerchant: [s.BiomeType.IceCap, s.BiomeType.Arid]
  }, g(d.ItemType.IronBakingTray, d.ItemTypeGroup.Cookware, d.ItemTypeGroup.CookingEquipment), t.itemDescriptions[d.ItemType.Flour] = {
      recipe: {
          components: [T(d.ItemType.Wheat, 4, 4), T(d.ItemTypeGroup.MortarAndPestle, 1, 0)],
          skill: r.SkillType.Cooking,
          level: d.RecipeLevel.Simple,
          reputation: 25
      },
      onBurn: [d.ItemType.None],
      worth: 25,
      spawnOnMerchant: [s.BiomeType.Coastal]
  }, g(d.ItemType.Flour, d.ItemTypeGroup.Powder), t.itemDescriptions[d.ItemType.Dough] = {
      use: [i.ActionType.Eat],
      decayMax: 3750,
      recipe: {
          components: [T(d.ItemType.Flour, 1, 1), T(d.ItemTypeGroup.Liquid, 1, 1, 0, !0)],
          skill: r.SkillType.Cooking,
          level: d.RecipeLevel.Intermediate,
          reputation: 50
      },
      onBurn: [d.ItemType.PileOfAsh],
      onUse: {
          [i.ActionType.Eat]: [0, -6, 2, -1]
      },
      skillUse: r.SkillType.Cooking,
      worth: 50,
      spawnOnMerchant: [s.BiomeType.Coastal]
  }, t.itemDescriptions[d.ItemType.Hardtack] = {
      reducedWeight: .2,
      use: [i.ActionType.Eat],
      recipe: {
          components: [T(d.ItemType.Dough, 1, 1), T(d.ItemTypeGroup.Cookware, 1, 0)],
          skill: r.SkillType.Cooking,
          level: d.RecipeLevel.Advanced,
          requiredDoodad: a.DoodadTypeGroup.LitFurnace,
          reputation: 75
      },
      onBurn: [d.ItemType.PileOfAsh],
      onUse: {
          [i.ActionType.Eat]: [1, 10, 8, -3]
      },
      skillUse: r.SkillType.Cooking,
      worth: 75,
      spawnOnMerchant: [s.BiomeType.Coastal]
  }, g(d.ItemType.Hardtack, d.ItemTypeGroup.CookedFood), t.itemDescriptions[d.ItemType.HitchingPost] = {
      use: [i.ActionType.Build],
      recipe: {
          components: [T(d.ItemType.Log, 3, 3, 3), T(d.ItemType.Rope, 1, 1, 1)],
          skill: r.SkillType.Woodworking,
          level: d.RecipeLevel.Advanced,
          reputation: -25
      },
      disassemble: !0,
      durability: 25,
      worth: 50,
      onUse: {
          [i.ActionType.Build]: a.DoodadType.HitchingPost
      }
  }, t.itemDescriptions[d.ItemType.ShreddedPaper] = {
      use: [i.ActionType.StokeFire],
      onUse: {
          [i.ActionType.StokeFire]: 30
      },
      weight: .1,
      onBurn: [d.ItemType.PileOfAsh],
      flammable: !0,
      worth: 5,
      tier: {
          [d.ItemTypeGroup.Pulp]: 2
      }
  }, g(d.ItemType.ShreddedPaper, d.ItemTypeGroup.Pulp, d.ItemTypeGroup.Tinder), t.itemDescriptions[d.ItemType.RawMudskipper] = {
      weight: 1,
      use: [i.ActionType.Eat],
      decayMax: 2450,
      decaysInto: [d.ItemType.RottenMeat],
      onBurn: [d.ItemType.CookedMudskipper],
      onUse: {
          [i.ActionType.Eat]: [-1, 4, 4, -1]
      },
      skillUse: r.SkillType.Anatomy,
      worth: 5,
      tier: {
          [d.ItemTypeGroup.Meat]: 2
      },
      returnOnUseAndDecay: {
          type: d.ItemType.BoneFragments
      },
      dismantle: {
          items: [{
              type: d.ItemType.BoneFragments,
              amount: 1
          }, {
              type: d.ItemType.RawChoppedFish,
              amount: 1,
              transferDecay: !0
          }],
          required: d.ItemTypeGroup.Sharpened,
          skill: r.SkillType.Anatomy
      },
      spawnOnMerchant: [s.BiomeType.Coastal]
  }, g(d.ItemType.RawMudskipper, d.ItemTypeGroup.Meat, d.ItemTypeGroup.RawMeat, d.ItemTypeGroup.RawFish), t.itemDescriptions[d.ItemType.CookedMudskipper] = {
      use: [i.ActionType.Eat],
      decayMax: 4450,
      decaysInto: [d.ItemType.RottenMeat],
      recipe: {
          components: [T(d.ItemType.RawMudskipper, 1, 1), T(d.ItemTypeGroup.CookingEquipment, 1, 0)],
          skill: r.SkillType.Cooking,
          level: d.RecipeLevel.Simple,
          requiresFire: !0,
          reputation: 25
      },
      onBurn: [d.ItemType.PileOfAsh],
      onUse: {
          [i.ActionType.Eat]: [1, 10, 5, -1]
      },
      skillUse: r.SkillType.Cooking,
      worth: 15,
      tier: {
          [d.ItemTypeGroup.Meat]: 3
      },
      returnOnUseAndDecay: {
          type: d.ItemType.BoneFragments
      },
      spawnOnMerchant: [s.BiomeType.Coastal]
  }, g(d.ItemType.CookedMudskipper, d.ItemTypeGroup.Meat, d.ItemTypeGroup.CookedMeat, d.ItemTypeGroup.CookedFood), t.itemDescriptions[d.ItemType.RawAberrantMudskipper] = {
      weight: 1.5,
      use: [i.ActionType.Eat],
      decayMax: 2850,
      decaysInto: [d.ItemType.RottenMeat, d.ItemType.RottenMeat],
      onBurn: [d.ItemType.CookedAberrantMudskipper],
      onUse: {
          [i.ActionType.Eat]: [-2, 8, 6, -1]
      },
      skillUse: r.SkillType.Anatomy,
      worth: 15,
      tier: {
          [d.ItemTypeGroup.Meat]: 3
      },
      returnOnUseAndDecay: {
          type: d.ItemType.BoneFragments
      },
      spawnOnMerchant: [s.BiomeType.Coastal]
  }, g(d.ItemType.RawAberrantMudskipper, d.ItemTypeGroup.Meat, d.ItemTypeGroup.RawMeat, d.ItemTypeGroup.RawFish), t.itemDescriptions[d.ItemType.CookedAberrantMudskipper] = {
      use: [i.ActionType.Eat],
      decayMax: 4850,
      decaysInto: [d.ItemType.RottenMeat, d.ItemType.RottenMeat],
      recipe: {
          components: [T(d.ItemType.RawAberrantMudskipper, 1, 1), T(d.ItemTypeGroup.CookingEquipment, 1, 0)],
          skill: r.SkillType.Cooking,
          level: d.RecipeLevel.Intermediate,
          requiresFire: !0,
          reputation: 25
      },
      onBurn: [d.ItemType.PileOfAsh],
      onUse: {
          [i.ActionType.Eat]: [2, 20, 7, -1]
      },
      skillUse: r.SkillType.Cooking,
      worth: 30,
      tier: {
          [d.ItemTypeGroup.Meat]: 4
      },
      returnOnUseAndDecay: {
          type: d.ItemType.BoneFragments
      },
      spawnOnMerchant: [s.BiomeType.Coastal]
  }, g(d.ItemType.CookedAberrantMudskipper, d.ItemTypeGroup.Meat, d.ItemTypeGroup.CookedMeat, d.ItemTypeGroup.CookedFood), t.itemDescriptions[d.ItemType.RawRedSnapper] = {
      weight: 2.2,
      use: [i.ActionType.Eat],
      decayMax: 3450,
      decaysInto: [d.ItemType.RottenMeat, d.ItemType.RottenMeat, d.ItemType.RottenMeat],
      onBurn: [d.ItemType.CookedRedSnapper],
      onUse: {
          [i.ActionType.Eat]: [2, 8, 8, -2]
      },
      skillUse: r.SkillType.Anatomy,
      worth: 10,
      tier: {
          [d.ItemTypeGroup.Meat]: 3
      },
      returnOnUseAndDecay: {
          type: d.ItemType.BoneFragments
      },
      dismantle: {
          items: [{
              type: d.ItemType.BoneFragments,
              amount: 1
          }, {
              type: d.ItemType.RawChoppedFish,
              amount: 2,
              transferDecay: !0
          }],
          required: d.ItemTypeGroup.Sharpened,
          skill: r.SkillType.Anatomy
      },
      spawnOnMerchant: [s.BiomeType.Coastal, s.BiomeType.Arid]
  }, g(d.ItemType.RawRedSnapper, d.ItemTypeGroup.Meat, d.ItemTypeGroup.RawMeat, d.ItemTypeGroup.RawFish), t.itemDescriptions[d.ItemType.CookedRedSnapper] = {
      use: [i.ActionType.Eat],
      decayMax: 5450,
      decaysInto: [d.ItemType.RottenMeat, d.ItemType.RottenMeat, d.ItemType.RottenMeat],
      recipe: {
          components: [T(d.ItemType.RawRedSnapper, 1, 1), T(d.ItemTypeGroup.CookingEquipment, 1, 0)],
          skill: r.SkillType.Cooking,
          level: d.RecipeLevel.Intermediate,
          requiresFire: !0,
          reputation: 25
      },
      onBurn: [d.ItemType.PileOfAsh],
      onUse: {
          [i.ActionType.Eat]: [3, 16, 9, -2]
      },
      skillUse: r.SkillType.Cooking,
      worth: 20,
      tier: {
          [d.ItemTypeGroup.Meat]: 4
      },
      returnOnUseAndDecay: {
          type: d.ItemType.BoneFragments
      },
      spawnOnMerchant: [s.BiomeType.Coastal, s.BiomeType.Arid]
  }, g(d.ItemType.CookedRedSnapper, d.ItemTypeGroup.Meat, d.ItemTypeGroup.CookedMeat, d.ItemTypeGroup.CookedFood), t.itemDescriptions[d.ItemType.RawWalleye] = {
      weight: 1.2,
      use: [i.ActionType.Eat],
      decayMax: 2250,
      decaysInto: [d.ItemType.RottenMeat],
      onBurn: [d.ItemType.CookedWalleye],
      onUse: {
          [i.ActionType.Eat]: [1, 4, 4, 0]
      },
      skillUse: r.SkillType.Anatomy,
      worth: 5,
      tier: {
          [d.ItemTypeGroup.Meat]: 2
      },
      returnOnUseAndDecay: {
          type: d.ItemType.BoneFragments
      },
      dismantle: {
          items: [{
              type: d.ItemType.BoneFragments,
              amount: 1
          }, {
              type: d.ItemType.RawChoppedFish,
              amount: 1,
              transferDecay: !0
          }],
          required: d.ItemTypeGroup.Sharpened,
          skill: r.SkillType.Anatomy
      },
      spawnOnMerchant: [s.BiomeType.Coastal, s.BiomeType.IceCap]
  }, g(d.ItemType.RawWalleye, d.ItemTypeGroup.Meat, d.ItemTypeGroup.RawMeat, d.ItemTypeGroup.RawFish), t.itemDescriptions[d.ItemType.CookedWalleye] = {
      use: [i.ActionType.Eat],
      decayMax: 4250,
      decaysInto: [d.ItemType.RottenMeat],
      recipe: {
          components: [T(d.ItemType.RawWalleye, 1, 1), T(d.ItemTypeGroup.CookingEquipment, 1, 0)],
          skill: r.SkillType.Cooking,
          level: d.RecipeLevel.Simple,
          requiresFire: !0,
          reputation: 25
      },
      onBurn: [d.ItemType.PileOfAsh],
      onUse: {
          [i.ActionType.Eat]: [2, 8, 5, 0]
      },
      skillUse: r.SkillType.Cooking,
      worth: 15,
      tier: {
          [d.ItemTypeGroup.Meat]: 3
      },
      returnOnUseAndDecay: {
          type: d.ItemType.BoneFragments
      },
      spawnOnMerchant: [s.BiomeType.Coastal, s.BiomeType.IceCap]
  }, g(d.ItemType.CookedWalleye, d.ItemTypeGroup.Meat, d.ItemTypeGroup.CookedMeat, d.ItemTypeGroup.CookedFood), t.itemDescriptions[d.ItemType.WoodenShield] = {
      reducedWeight: 1.9,
      durability: 30,
      equip: r.EquipType.Held,
      use: [i.ActionType.Melee],
      defense: new o.Defense(2, new o.Resistances(o.DamageType.Blunt, 2), new o.Vulnerabilities(o.DamageType.Fire, 2)),
      recipe: {
          components: [T(d.ItemType.Log, 1, 1, 1), T(d.ItemType.String, 3, 3, 3), T(d.ItemTypeGroup.Sharpened, 1, 0)],
          skill: r.SkillType.Woodworking,
          level: d.RecipeLevel.Advanced,
          reputation: -75
      },
      flammable: !0,
      burnsLike: [d.ItemType.Log, d.ItemType.String, d.ItemType.String, d.ItemType.String],
      worth: 75,
      attack: 2,
      damageType: o.DamageType.Blunt
  }, g(d.ItemType.WoodenShield, d.ItemTypeGroup.Equipment), t.itemDescriptions[d.ItemType.CopperRefinementTools] = {
      use: [i.ActionType.Refine],
      recipe: {
          components: [T(d.ItemType.CopperIngot, 1, 1, 1), T(d.ItemTypeGroup.Hammer, 1, 0)],
          skill: r.SkillType.Blacksmithing,
          level: d.RecipeLevel.Expert,
          requiredDoodad: a.DoodadTypeGroup.Anvil,
          reputation: 25
      },
      repairAndDisassemblyRequiresFire: !0,
      durability: 5,
      disassemble: !0,
      requiredForDisassembly: [d.ItemTypeGroup.Hammer, d.ItemTypeGroup.SandCastFlask],
      worth: 150
  }, g(d.ItemType.CopperRefinementTools, d.ItemTypeGroup.Refinement), t.itemDescriptions[d.ItemType.WroughtIronRefinementTools] = {
      use: [i.ActionType.Refine],
      recipe: {
          components: [T(d.ItemType.TalcumPowder, 1, 1, 0, !0), T(d.ItemType.WroughtIron, 1, 1, 1), T(d.ItemTypeGroup.SandCastFlask, 1, 0), T(d.ItemTypeGroup.Hammer, 1, 0), T(d.ItemTypeGroup.Tongs, 1, 0)],
          skill: r.SkillType.Blacksmithing,
          level: d.RecipeLevel.Expert,
          requiredDoodad: a.DoodadTypeGroup.Anvil,
          requiresFire: !0,
          reputation: 25
      },
      durability: 10,
      disassemble: !0,
      requiredForDisassembly: [d.ItemTypeGroup.Hammer],
      worth: 150
  }, g(d.ItemType.WroughtIronRefinementTools, d.ItemTypeGroup.Refinement), t.itemDescriptions[d.ItemType.IronRefinementTools] = {
      use: [i.ActionType.Refine],
      recipe: {
          components: [T(d.ItemType.TalcumPowder, 1, 1, 0, !0), T(d.ItemType.IronIngot, 1, 1, 1), T(d.ItemTypeGroup.SandCastFlask, 1, 0), T(d.ItemTypeGroup.Hammer, 1, 0), T(d.ItemTypeGroup.Tongs, 1, 0)],
          skill: r.SkillType.Blacksmithing,
          level: d.RecipeLevel.Expert,
          requiredDoodad: a.DoodadTypeGroup.Anvil,
          requiresFire: !0,
          reputation: 25
      },
      durability: 20,
      disassemble: !0,
      requiredForDisassembly: [d.ItemTypeGroup.Hammer, d.ItemTypeGroup.SandCastFlask],
      worth: 200,
      spawnOnMerchant: [s.BiomeType.IceCap, s.BiomeType.Arid]
  }, g(d.ItemType.IronRefinementTools, d.ItemTypeGroup.Refinement), t.itemDescriptions[d.ItemType.ScaleBelt] = {
      durability: 25,
      equip: r.EquipType.Belt,
      defense: new o.Defense(2, new o.Resistances(o.DamageType.Fire, 1), new o.Vulnerabilities(o.DamageType.Piercing, 1, o.DamageType.Blunt, 1)),
      recipe: {
          components: [T(d.ItemType.Scales, 2, 2, 2), T(d.ItemType.String, 1, 1, 1), T(d.ItemTypeGroup.Needle, 1, 0)],
          skill: r.SkillType.Leatherworking,
          level: d.RecipeLevel.Intermediate,
          reputation: -100
      },
      disassemble: !0,
      flammable: !0,
      worth: 75,
      spawnOnMerchant: [s.BiomeType.Coastal, s.BiomeType.Arid]
  }, g(d.ItemType.ScaleBelt, d.ItemTypeGroup.Equipment), t.itemDescriptions[d.ItemType.ScaleVest] = {
      durability: 25,
      equip: r.EquipType.Chest,
      defense: new o.Defense(4, new o.Resistances(o.DamageType.Fire, 1), new o.Vulnerabilities(o.DamageType.Piercing, 1, o.DamageType.Blunt, 1)),
      recipe: {
          components: [T(d.ItemType.Scales, 4, 4, 4), T(d.ItemType.String, 4, 4, 4), T(d.ItemTypeGroup.Needle, 1, 0)],
          skill: r.SkillType.Leatherworking,
          level: d.RecipeLevel.Expert,
          reputation: -100
      },
      disassemble: !0,
      flammable: !0,
      worth: 100,
      spawnOnMerchant: [s.BiomeType.Coastal, s.BiomeType.Arid]
  }, g(d.ItemType.ScaleVest, d.ItemTypeGroup.Equipment), t.itemDescriptions[d.ItemType.ScaleBoots] = {
      durability: 25,
      equip: r.EquipType.Feet,
      defense: new o.Defense(3, new o.Resistances(o.DamageType.Fire, 1), new o.Vulnerabilities(o.DamageType.Piercing, 1, o.DamageType.Blunt, 1)),
      recipe: {
          components: [T(d.ItemType.Scales, 4, 4, 4), T(d.ItemType.String, 2, 2, 2), T(d.ItemTypeGroup.Needle, 1, 0)],
          skill: r.SkillType.Leatherworking,
          level: d.RecipeLevel.Expert,
          reputation: -100
      },
      disassemble: !0,
      flammable: !0,
      worth: 100,
      spawnOnMerchant: [s.BiomeType.Coastal, s.BiomeType.Arid]
  }, g(d.ItemType.ScaleBoots, d.ItemTypeGroup.Equipment), t.itemDescriptions[d.ItemType.ScaleCap] = {
      durability: 25,
      equip: r.EquipType.Head,
      defense: new o.Defense(2, new o.Resistances(o.DamageType.Fire, 1), new o.Vulnerabilities(o.DamageType.Piercing, 1, o.DamageType.Blunt, 1)),
      recipe: {
          components: [T(d.ItemType.Scales, 2, 2, 2), T(d.ItemType.String, 1, 1, 1), T(d.ItemTypeGroup.Needle, 1, 0)],
          skill: r.SkillType.Leatherworking,
          level: d.RecipeLevel.Advanced,
          reputation: -100
      },
      disassemble: !0,
      flammable: !0,
      worth: 75,
      spawnOnMerchant: [s.BiomeType.Coastal, s.BiomeType.Arid]
  }, g(d.ItemType.ScaleCap, d.ItemTypeGroup.Equipment), t.itemDescriptions[d.ItemType.ScaleGorget] = {
      durability: 25,
      equip: r.EquipType.Neck,
      defense: new o.Defense(2, new o.Resistances(o.DamageType.Fire, 1), new o.Vulnerabilities(o.DamageType.Piercing, 1, o.DamageType.Blunt, 1)),
      recipe: {
          components: [T(d.ItemType.Scales, 2, 2, 2), T(d.ItemType.String, 1, 1, 1), T(d.ItemTypeGroup.Needle, 1, 0)],
          skill: r.SkillType.Leatherworking,
          level: d.RecipeLevel.Intermediate,
          reputation: -100
      },
      disassemble: !0,
      flammable: !0,
      worth: 75,
      spawnOnMerchant: [s.BiomeType.Coastal, s.BiomeType.Arid]
  }, g(d.ItemType.ScaleGorget, d.ItemTypeGroup.Equipment), t.itemDescriptions[d.ItemType.ScaleLeggings] = {
      durability: 25,
      equip: r.EquipType.Legs,
      defense: new o.Defense(3, new o.Resistances(o.DamageType.Fire, 1), new o.Vulnerabilities(o.DamageType.Piercing, 1, o.DamageType.Blunt, 1)),
      recipe: {
          components: [T(d.ItemType.Scales, 4, 4, 4), T(d.ItemType.String, 4, 4, 4), T(d.ItemTypeGroup.Needle, 1, 0)],
          skill: r.SkillType.Leatherworking,
          level: d.RecipeLevel.Expert,
          reputation: -100
      },
      disassemble: !0,
      flammable: !0,
      worth: 100,
      spawnOnMerchant: [s.BiomeType.Coastal, s.BiomeType.Arid]
  }, g(d.ItemType.ScaleLeggings, d.ItemTypeGroup.Equipment), t.itemDescriptions[d.ItemType.ScaleGloves] = {
      durability: 25,
      equip: r.EquipType.Hands,
      defense: new o.Defense(2, new o.Resistances(o.DamageType.Fire, 1), new o.Vulnerabilities(o.DamageType.Piercing, 1, o.DamageType.Blunt, 1)),
      recipe: {
          components: [T(d.ItemType.Scales, 4, 4, 4), T(d.ItemType.String, 3, 3, 3), T(d.ItemTypeGroup.Needle, 1, 0)],
          skill: r.SkillType.Leatherworking,
          level: d.RecipeLevel.Expert,
          reputation: -100
      },
      disassemble: !0,
      flammable: !0,
      worth: 100,
      spawnOnMerchant: [s.BiomeType.Coastal, s.BiomeType.Arid]
  }, g(d.ItemType.ScaleGloves, d.ItemTypeGroup.Equipment), t.itemDescriptions[d.ItemType.CookedJoshuaTreeFlowers] = {
      use: [i.ActionType.Eat],
      decayMax: 8e3,
      skillUse: r.SkillType.Botany,
      recipe: {
          components: [T(d.ItemType.JoshuaTreeFlowers, 1, 1), T(d.ItemTypeGroup.CookingEquipment, 1, 0)],
          skill: r.SkillType.Cooking,
          level: d.RecipeLevel.Simple,
          requiresFire: !0,
          reputation: 25
      },
      decaysInto: [d.ItemType.RottingVegetation],
      onBurn: [d.ItemType.PileOfAsh],
      onUse: {
          [i.ActionType.Eat]: [3, 8, 2, 0]
      },
      worth: 15,
      tier: {
          [d.ItemTypeGroup.Medicinal]: 2
      },
      spawnOnMerchant: [s.BiomeType.Arid]
  }, g(d.ItemType.CookedJoshuaTreeFlowers, d.ItemTypeGroup.Medicinal, d.ItemTypeGroup.CookedFood), t.itemDescriptions[d.ItemType.SaguaroCactusRibs] = {
      weight: 1,
      use: [i.ActionType.StokeFire],
      onBurn: [d.ItemType.Charcoal, d.ItemType.Charcoal, d.ItemType.Charcoal, d.ItemType.Charcoal],
      onUse: {
          [i.ActionType.StokeFire]: 200
      },
      dismantle: {
          items: [{
              type: d.ItemType.WoodenPole,
              amount: 2
          }, {
              type: d.ItemType.Twigs,
              amount: 2
          }],
          required: d.ItemTypeGroup.Sharpened,
          skill: r.SkillType.Woodworking
      },
      worth: 25,
      flammable: !0,
      spawnOnWorldGen: {
          [s.BiomeType.Arid]: {
              [l.WorldZ.Overworld]: {
                  [y.TerrainType.DesertSand]: 2
              }
          }
      },
      spawnOnMerchant: [s.BiomeType.Arid]
  }, g(d.ItemType.SaguaroCactusRibs, d.ItemTypeGroup.Fuel), t.itemDescriptions[d.ItemType.BladesOfGrass] = {
      use: [i.ActionType.StokeFire],
      weight: .1,
      onBurn: [d.ItemType.PileOfAsh],
      onUse: {
          [i.ActionType.StokeFire]: 10
      },
      flammable: !0,
      worth: 5,
      tier: {
          [d.ItemTypeGroup.Compost]: 1
      },
      spawnOnWorldGen: {
          [s.BiomeType.Coastal]: {
              [l.WorldZ.Overworld]: {
                  [y.TerrainType.Grass]: 1
              }
          }
      }
  }, g(d.ItemType.BladesOfGrass, d.ItemTypeGroup.Compost, d.ItemTypeGroup.Tinder), t.itemDescriptions[d.ItemType.AnimalDroppings] = {
      weight: .2,
      onBurn: [d.ItemType.PileOfAsh],
      worth: 5,
      tier: {
          [d.ItemTypeGroup.Compost]: 1
      }
  }, g(d.ItemType.AnimalDroppings, d.ItemTypeGroup.Compost), t.itemDescriptions[d.ItemType.AnimalDung] = {
      weight: .3,
      onBurn: [d.ItemType.PileOfAsh],
      worth: 5,
      tier: {
          [d.ItemTypeGroup.Compost]: 2
      }
  }, g(d.ItemType.AnimalDung, d.ItemTypeGroup.Compost), t.itemDescriptions[d.ItemType.Guano] = {
      weight: .1,
      onBurn: [d.ItemType.PileOfAsh],
      worth: 5,
      tier: {
          [d.ItemTypeGroup.Compost]: 3
      },
      spawnOnMerchant: [s.BiomeType.Coastal, s.BiomeType.Arid]
  }, g(d.ItemType.Guano, d.ItemTypeGroup.Compost), t.itemDescriptions[d.ItemType.Tallow] = {
      reducedWeight: .2,
      use: [i.ActionType.Eat, i.ActionType.StokeFire],
      decayMax: 3500,
      onBurn: [d.ItemType.PileOfAsh],
      onUse: {
          [i.ActionType.Eat]: [0, -4, 2, 0],
          [i.ActionType.StokeFire]: 150
      },
      recipe: {
          components: [T(d.ItemType.AnimalFat, 1, 1), T(d.ItemTypeGroup.MortarAndPestle, 1, 0)],
          skill: r.SkillType.Chemistry,
          level: d.RecipeLevel.Advanced,
          requiresFire: !0,
          reputation: 25
      },
      skillUse: r.SkillType.Anatomy,
      worth: 10,
      flammable: !0
  }, g(d.ItemType.Tallow, d.ItemTypeGroup.Fuel), t.itemDescriptions[d.ItemType.TallowCandle] = {
      durability: 25,
      equip: r.EquipType.Held,
      attack: 1,
      damageType: o.DamageType.Blunt,
      use: [i.ActionType.Ignite, i.ActionType.Build, i.ActionType.Melee],
      lit: d.ItemType.LitTallowCandle,
      recipe: {
          components: [T(d.ItemType.Tallow, 1, 1, 1), T(d.ItemType.String, 1, 1, 1), T(d.ItemTypeGroup.Pole, 1, 0)],
          skill: r.SkillType.Tinkering,
          level: d.RecipeLevel.Advanced,
          reputation: 25
      },
      onUse: {
          [i.ActionType.Build]: a.DoodadType.TallowCandle
      },
      flammable: !0,
      worth: 25,
      disassemble: !0
  }, g(d.ItemType.TallowCandle, d.ItemTypeGroup.LightDevice, d.ItemTypeGroup.Weapon), t.itemDescriptions[d.ItemType.LitTallowCandle] = {
      inheritWeight: d.ItemType.TallowCandle,
      durability: 25,
      equip: r.EquipType.Held,
      attack: 2,
      damageType: o.DamageType.Fire | o.DamageType.Blunt,
      use: [i.ActionType.StartFire, i.ActionType.Extinguish, i.ActionType.Build, i.ActionType.Melee],
      equipEffect: [d.EquipEffect.LightSource, 3],
      revert: d.ItemType.TallowCandle,
      decayMax: 5e3,
      repairable: !1,
      burnsLike: [d.ItemType.TallowCandle],
      flammable: !0,
      onUse: {
          [i.ActionType.Build]: a.DoodadType.LitTallowCandle
      },
      decaysInto: [d.ItemType.PileOfAsh]
  }, g(d.ItemType.LitTallowCandle, d.ItemTypeGroup.FireSource, d.ItemTypeGroup.FireStarter, d.ItemTypeGroup.Weapon, d.ItemTypeGroup.Untradable), t.itemDescriptions[d.ItemType.WispDust] = {
      weight: 0,
      decayMax: 25,
      worth: 100
  }, t.itemDescriptions[d.ItemType.MagicalAspect] = {
      use: [i.ActionType.Enchant],
      decayMax: 100,
      recipe: {
          components: [T(d.ItemType.Tannin, 1, 1), T(d.ItemType.Tallow, 1, 1), T(d.ItemType.WispDust, 1, 1)],
          skill: r.SkillType.Chemistry,
          level: d.RecipeLevel.Expert,
          reputation: 100
      },
      onBurn: [d.ItemType.WispDust],
      spawnOnDecay: n.CreatureType.Wisp,
      spawnOnBreak: n.CreatureType.Wisp,
      spawnableTiles: n.TileGroup.All,
      flammable: !0,
      worth: 200
  }, g(d.ItemType.MagicalAspect, d.ItemTypeGroup.Enchantment), t.itemDescriptions[d.ItemType.GoldenSextant] = {
      weight: 2,
      worth: 250,
      use: [i.ActionType.Navigate],
      durability: 15,
      spawnOnWorldGen: {
          [s.BiomeType.Coastal]: {
              [l.WorldZ.Cave]: {
                  [y.TerrainType.CobblestoneFlooring]: 1,
                  [y.TerrainType.WoodenFlooring]: 1
              },
              [l.WorldZ.Overworld]: {
                  [y.TerrainType.CobblestoneFlooring]: 1,
                  [y.TerrainType.WoodenFlooring]: 1
              }
          }
      }
  }, g(d.ItemType.GoldenSextant, d.ItemTypeGroup.Treasure), t.itemDescriptions[d.ItemType.RawChoppedFish] = {
      weight: .6,
      use: [i.ActionType.Eat],
      decayMax: 2250,
      decaysInto: [d.ItemType.RottenMeat],
      onBurn: [d.ItemType.CookedChoppedFish],
      onUse: {
          [i.ActionType.Eat]: [1, 2, 5, -1]
      },
      skillUse: r.SkillType.Anatomy,
      worth: 5,
      tier: {
          [d.ItemTypeGroup.Meat]: 2
      }
  }, g(d.ItemType.RawChoppedFish, d.ItemTypeGroup.Meat, d.ItemTypeGroup.RawMeat, d.ItemTypeGroup.Bait, d.ItemTypeGroup.RawFish), t.itemDescriptions[d.ItemType.CookedChoppedFish] = {
      use: [i.ActionType.Eat],
      decayMax: 4250,
      decaysInto: [d.ItemType.RottenMeat],
      recipe: {
          components: [T(d.ItemType.RawChoppedFish, 1, 1), T(d.ItemTypeGroup.CookingEquipment, 1, 0)],
          skill: r.SkillType.Cooking,
          level: d.RecipeLevel.Simple,
          requiresFire: !0,
          reputation: 25
      },
      onBurn: [d.ItemType.PileOfAsh],
      onUse: {
          [i.ActionType.Eat]: [2, 8, 6, -1]
      },
      skillUse: r.SkillType.Cooking,
      worth: 15,
      tier: {
          [d.ItemTypeGroup.Meat]: 3
      }
  }, g(d.ItemType.CookedChoppedFish, d.ItemTypeGroup.Meat, d.ItemTypeGroup.CookedMeat, d.ItemTypeGroup.CookedFood), t.itemDescriptions[d.ItemType.CookedFishKebab] = {
      use: [i.ActionType.Eat],
      decayMax: 5500,
      decaysInto: [d.ItemType.RottenMeat],
      recipe: {
          components: [T(d.ItemType.RawChoppedFish, 1, 1), T(d.ItemType.WoodenSpear, 1, 1, 1)],
          skill: r.SkillType.Cooking,
          level: d.RecipeLevel.Intermediate,
          requiresFire: !0,
          reputation: 25
      },
      onUse: {
          [i.ActionType.Eat]: [3, 9, 6, -1]
      },
      skillUse: r.SkillType.Cooking,
      worth: 25,
      tier: {
          [d.ItemTypeGroup.Meat]: 4
      },
      flammable: !0,
      disassemble: !0,
      blockDisassembly: !0,
      returnOnUseAndDecay: {
          type: d.ItemType.WoodenSpear,
          returnFromDisassembly: !0,
          damaged: !0
      }
  }, g(d.ItemType.CookedFishKebab, d.ItemTypeGroup.Meat, d.ItemTypeGroup.CookedMeat, d.ItemTypeGroup.CookedFood), t.itemDescriptions[d.ItemType.AshCement] = {
      recipe: {
          components: [T(d.ItemType.PileOfAsh, 12, 12, 12), T(d.ItemTypeGroup.Liquid, 1, 1, 0, !0), T(d.ItemTypeGroup.MortarAndPestle, 1, 0)],
          skill: r.SkillType.Claythrowing,
          level: d.RecipeLevel.Simple,
          reputation: 50
      },
      worth: 10
  }, t.itemDescriptions[d.ItemType.AshCementBrick] = {
      recipe: {
          components: [T(d.ItemType.AshCement, 1, 1, 1)],
          skill: r.SkillType.Claythrowing,
          level: d.RecipeLevel.Simple,
          requiresFire: !0,
          reputation: 50
      },
      worth: 10
  }, t.itemDescriptions[d.ItemType.AshCementFlooring] = {
      use: [i.ActionType.SetDown],
      recipe: {
          components: [T(d.ItemType.AshCementBrick, 8, 8, 8)],
          skill: r.SkillType.Claythrowing,
          level: d.RecipeLevel.Simple,
          reputation: 50
      },
      disassemble: !0,
      durability: 10,
      onUse: {
          [i.ActionType.SetDown]: y.TerrainType.AshCementFlooring
      },
      worth: 25
  }, g(d.ItemType.AshCementFlooring, d.ItemTypeGroup.Housing), t.itemDescriptions[d.ItemType.AshCementWall] = {
      use: [i.ActionType.Build],
      recipe: {
          components: [T(d.ItemType.AshCementBrick, 8, 8, 8)],
          skill: r.SkillType.Claythrowing,
          level: d.RecipeLevel.Intermediate,
          reputation: 50
      },
      disassemble: !0,
      durability: 10,
      onUse: {
          [i.ActionType.Build]: a.DoodadType.AshCementWall
      },
      worth: 50
  }, g(d.ItemType.AshCementWall, d.ItemTypeGroup.Housing), t.itemDescriptions[d.ItemType.IceShard] = {
      weight: .4,
      durability: 5,
      use: [i.ActionType.Carve, i.ActionType.Harvest],
      damageType: o.DamageType.Slashing,
      worth: 5,
      tier: {
          [d.ItemTypeGroup.Sharpened]: 1,
          [d.ItemTypeGroup.FrozenWater]: 1
      },
      decayMax: 1e3,
      spawnOnWorldGen: {
          [s.BiomeType.IceCap]: {
              [l.WorldZ.Cave]: {
                  [y.TerrainType.FreshWaterIce]: 1
              },
              [l.WorldZ.Overworld]: {
                  [y.TerrainType.Snow]: 1,
                  [y.TerrainType.Dirt]: 1,
                  [y.TerrainType.FreshWaterIce]: 1,
                  [y.TerrainType.SeawaterIce]: 1
              }
          }
      },
      spawnOnMerchant: [s.BiomeType.IceCap]
  }, g(d.ItemType.IceShard, d.ItemTypeGroup.Sharpened, d.ItemTypeGroup.FrozenWater), t.itemDescriptions[d.ItemType.PenguinEgg] = {
      weight: .6,
      use: [i.ActionType.Eat],
      decayMax: 7250,
      onBurn: [d.ItemType.BoiledPenguinEgg],
      spawnOnDecay: n.CreatureType.Penguin,
      spawnableTiles: n.TileGroup.Ground,
      onUse: {
          [i.ActionType.Eat]: [-2, 12, 5, 2]
      },
      skillUse: r.SkillType.Anatomy,
      worth: 10,
      spawnOnWorldGen: {
          [s.BiomeType.IceCap]: {
              [l.WorldZ.Overworld]: {
                  [y.TerrainType.Snow]: 1,
                  [y.TerrainType.Dirt]: 1
              }
          }
      },
      spawnOnMerchant: [s.BiomeType.IceCap]
  }, t.itemDescriptions[d.ItemType.BoiledPenguinEgg] = {
      use: [i.ActionType.Eat],
      decayMax: 6250,
      recipe: {
          components: [T(d.ItemType.PenguinEgg, 1, 1), T(d.ItemTypeGroup.Tongs, 1, 0), T(d.ItemTypeGroup.Liquid, 1, 0)],
          skill: r.SkillType.Cooking,
          level: d.RecipeLevel.Intermediate,
          requiresFire: !0,
          reputation: 25
      },
      onBurn: [d.ItemType.PileOfAsh],
      onUse: {
          [i.ActionType.Eat]: [2, 24, 6, 0]
      },
      skillUse: r.SkillType.Cooking,
      worth: 20,
      spawnOnMerchant: [s.BiomeType.IceCap]
  }, g(d.ItemType.BoiledPenguinEgg, d.ItemTypeGroup.CookedFood), t.itemDescriptions[d.ItemType.RawPenguinMeat] = {
      weight: .8,
      use: [i.ActionType.Eat],
      decayMax: 3750,
      decaysInto: [d.ItemType.RottenMeat],
      onBurn: [d.ItemType.CookedPenguinMeat],
      onUse: {
          [i.ActionType.Eat]: [-1, 3, 6, -1]
      },
      skillUse: r.SkillType.Anatomy,
      worth: 5,
      tier: {
          [d.ItemTypeGroup.Meat]: 3
      },
      spawnOnMerchant: [s.BiomeType.IceCap]
  }, g(d.ItemType.RawPenguinMeat, d.ItemTypeGroup.Meat, d.ItemTypeGroup.RawMeat), t.itemDescriptions[d.ItemType.CookedPenguinMeat] = {
      use: [i.ActionType.Eat],
      decayMax: 5750,
      decaysInto: [d.ItemType.RottenMeat],
      recipe: {
          components: [T(d.ItemType.RawPenguinMeat, 1, 1), T(d.ItemTypeGroup.CookingEquipment, 1, 0)],
          skill: r.SkillType.Cooking,
          level: d.RecipeLevel.Intermediate,
          requiresFire: !0,
          reputation: 25
      },
      onBurn: [d.ItemType.PileOfAsh],
      onUse: {
          [i.ActionType.Eat]: [2, 13, 7, -1]
      },
      skillUse: r.SkillType.Cooking,
      worth: 15,
      tier: {
          [d.ItemTypeGroup.Meat]: 4
      },
      spawnOnMerchant: [s.BiomeType.IceCap]
  }, g(d.ItemType.CookedPenguinMeat, d.ItemTypeGroup.Meat, d.ItemTypeGroup.CookedMeat, d.ItemTypeGroup.CookedFood), t.itemDescriptions[d.ItemType.Crowberries] = {
      weight: .4,
      use: [i.ActionType.Eat],
      skillUse: r.SkillType.Botany,
      decayMax: 16e3,
      decaysInto: [d.ItemType.RottingVegetation],
      onBurn: [d.ItemType.PileOfAsh],
      onUse: {
          [i.ActionType.Eat]: [-1, 2, 3, 1]
      },
      dismantle: {
          items: [{
              type: d.ItemType.CrowberrySeeds,
              amount: 1
          }],
          skill: r.SkillType.Botany
      },
      worth: 5,
      spawnOnMerchant: [s.BiomeType.IceCap]
  }, g(d.ItemType.Crowberries, d.ItemTypeGroup.Fruit), t.itemDescriptions[d.ItemType.CookedCrowberries] = {
      use: [i.ActionType.Eat],
      decayMax: 18e3,
      skillUse: r.SkillType.Botany,
      recipe: {
          components: [T(d.ItemType.Crowberries, 1, 1), T(d.ItemTypeGroup.CookingEquipment, 1, 0)],
          skill: r.SkillType.Cooking,
          level: d.RecipeLevel.Simple,
          requiresFire: !0,
          reputation: 25
      },
      decaysInto: [d.ItemType.RottingVegetation],
      onBurn: [d.ItemType.PileOfAsh],
      onUse: {
          [i.ActionType.Eat]: [2, 6, 3, 0]
      },
      worth: 15,
      spawnOnMerchant: [s.BiomeType.IceCap]
  }, g(d.ItemType.CookedCrowberries, d.ItemTypeGroup.Fruit, d.ItemTypeGroup.CookedFood), t.itemDescriptions[d.ItemType.CrowberrySeeds] = {
      weight: .1,
      use: [i.ActionType.Plant, i.ActionType.Eat],
      skillUse: r.SkillType.Botany,
      onBurn: [d.ItemType.PileOfAsh],
      onUse: {
          [i.ActionType.Plant]: a.DoodadType.CrowberryShrub,
          [i.ActionType.Eat]: [0, 2, 1, -1]
      },
      flammable: !0,
      worth: 5,
      spawnOnMerchant: [s.BiomeType.IceCap]
  }, g(d.ItemType.CrowberrySeeds, d.ItemTypeGroup.Seed), t.itemDescriptions[d.ItemType.Winterberries] = {
      weight: .5,
      use: [i.ActionType.Eat],
      skillUse: r.SkillType.Botany,
      decayMax: 13e3,
      decaysInto: [d.ItemType.RottingVegetation, d.ItemType.Twigs],
      onBurn: [d.ItemType.PileOfAsh],
      onUse: {
          [i.ActionType.Eat]: [-3, -6, 1, -1]
      },
      dismantle: {
          items: [{
              type: d.ItemType.WinterberrySeeds,
              amount: 1
          }, {
              type: d.ItemType.Twigs,
              amount: 1
          }],
          skill: r.SkillType.Botany
      },
      worth: 5,
      returnOnUseAndDecay: {
          type: d.ItemType.Twigs
      },
      spawnOnMerchant: [s.BiomeType.IceCap]
  }, g(d.ItemType.Winterberries, d.ItemTypeGroup.Fruit), t.itemDescriptions[d.ItemType.WinterberrySeeds] = {
      weight: .1,
      use: [i.ActionType.Plant, i.ActionType.Eat],
      skillUse: r.SkillType.Botany,
      onBurn: [d.ItemType.PileOfAsh],
      onUse: {
          [i.ActionType.Plant]: a.DoodadType.WinterberryShrub,
          [i.ActionType.Eat]: [-2, -3, 1, -1]
      },
      flammable: !0,
      worth: 5,
      spawnOnMerchant: [s.BiomeType.IceCap]
  }, g(d.ItemType.WinterberrySeeds, d.ItemTypeGroup.Seed), t.itemDescriptions[d.ItemType.ArcticPoppies] = {
      weight: .1,
      use: [i.ActionType.Eat],
      skillUse: r.SkillType.Botany,
      onBurn: [d.ItemType.PileOfAsh],
      onUse: {
          [i.ActionType.Eat]: [3, 1, 1, -1]
      },
      flammable: !0,
      worth: 5,
      tier: {
          [d.ItemTypeGroup.Medicinal]: 2
      },
      spawnOnMerchant: [s.BiomeType.IceCap]
  }, g(d.ItemType.ArcticPoppies, d.ItemTypeGroup.Medicinal), t.itemDescriptions[d.ItemType.ArcticPoppySeeds] = {
      weight: .1,
      use: [i.ActionType.Plant, i.ActionType.Eat],
      skillUse: r.SkillType.Botany,
      onBurn: [d.ItemType.PileOfAsh],
      onUse: {
          [i.ActionType.Plant]: a.DoodadType.ArcticPoppies,
          [i.ActionType.Eat]: [2, 1, 1, -1]
      },
      flammable: !0,
      worth: 5,
      tier: {
          [d.ItemTypeGroup.Medicinal]: 1
      },
      spawnOnMerchant: [s.BiomeType.IceCap]
  }, g(d.ItemType.ArcticPoppySeeds, d.ItemTypeGroup.Seed, d.ItemTypeGroup.Medicinal), t.itemDescriptions[d.ItemType.PirateHat] = {
      durability: 35,
      equip: r.EquipType.Head,
      defense: new o.Defense(2, new o.Resistances(o.DamageType.Slashing, 2), new o.Vulnerabilities(o.DamageType.Fire, 1)),
      recipe: {
          components: [T(d.ItemType.TannedLeather, 1, 1, 1), T(d.ItemType.String, 3, 3, 3), T(d.ItemTypeGroup.Needle, 1, 0)],
          skill: r.SkillType.Leatherworking,
          level: d.RecipeLevel.Advanced,
          reputation: 25
      },
      craftable: !1,
      worth: 150,
      burnsLike: [d.ItemType.TannedLeather, d.ItemType.String, d.ItemType.String, d.ItemType.String],
      flammable: !0
  }, g(d.ItemType.PirateHat, d.ItemTypeGroup.Equipment, d.ItemTypeGroup.Untradable), t.itemDescriptions[d.ItemType.AloeVeraBandage] = {
      use: [i.ActionType.Heal, i.ActionType.HealOther],
      skillUse: r.SkillType.Anatomy,
      recipe: {
          components: [T(d.ItemType.Bandage, 1, 1, 1), T(d.ItemType.AloeVeraLeaves, 1, 1, 1)],
          skill: r.SkillType.Tinkering,
          level: d.RecipeLevel.Advanced,
          reputation: 25
      },
      disassemble: !0,
      onUse: {
          [i.ActionType.Heal]: [15, 0, 0, 0],
          [i.ActionType.HealOther]: 15
      },
      flammable: !0,
      worth: 30,
      canCureStatus: [o.StatusType.Bleeding, o.StatusType.Burned]
  }, g(d.ItemType.AloeVeraBandage, d.ItemTypeGroup.Health), t.itemDescriptions[d.ItemType.SharkTooth] = {
      weight: .3,
      use: [i.ActionType.Carve],
      damageType: o.DamageType.Slashing,
      worth: 10,
      tier: {
          [d.ItemTypeGroup.Sharpened]: 3
      },
      spawnOnMerchant: [s.BiomeType.Coastal, s.BiomeType.Arid]
  }, g(d.ItemType.SharkTooth, d.ItemTypeGroup.Sharpened);
  for (const [e, a] of h.default.stream(t.itemDescriptions))
      if (a && a.recipes)
          for (const t of a.recipes) c.default.register(t((new u.default).addOutput(p.RecipeOutputType.Item, e)))
}))