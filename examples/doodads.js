define("doodad/Doodads", ["require", "exports", "doodad/IDoodad", "entity/action/IAction", "entity/IEntity", "entity/IHuman", "game/IBiome", "game/WorldZ", "item/IItem", "item/LootGroups", "renderer/IWorldLayer", "tile/ITerrain"], (function(e, t, a, i, n, o, r, s, l, d, u, p) {
  Object.defineProperty(t, "__esModule", {
      value: !0
  }), t.doodadGroups = t.doodadDescriptions = void 0, t.doodadDescriptions = {}, t.default = t.doodadDescriptions, t.doodadGroups = {};
  for (let e = a.DoodadTypeGroup.Invalid + 1; e < a.DoodadTypeGroup.Last; e++) t.doodadGroups[e] = {};
  t.doodadDescriptions[a.DoodadType.ButtonMushrooms] = {
      spreadMax: 3,
      gather: {
          [a.GrowingStage.Flowering]: [{
              type: l.ItemType.ButtonMushrooms,
              chance: 15
          }, {
              type: l.ItemType.ButtonMushrooms
          }],
          [a.GrowingStage.Ripening]: [{
              type: l.ItemType.ButtonMushrooms
          }, {
              type: l.ItemType.ButtonMushrooms
          }]
      },
      skillUse: o.SkillType.Mycology,
      allowedTiles: [p.TerrainType.Dirt, p.TerrainType.FertileSoil, p.TerrainType.Grass, p.TerrainType.WoodenFlooring],
      canTrampleWhenMature: !0,
      canGrowInCaves: !0,
      isFlammable: !0,
      graphicVariation: !0,
      particles: {
          r: 243,
          g: 219,
          b: 202
      },
      canGrow: !0,
      decayMax: 2e3,
      isFungi: !0,
      durability: 6,
      spawnOnWorldGen: {
          [r.BiomeType.Coastal]: {
              [s.WorldZ.Overworld]: {
                  [p.TerrainType.Dirt]: 2,
                  [p.TerrainType.Grass]: 2,
                  [p.TerrainType.WoodenFlooring]: 1
              },
              [s.WorldZ.Cave]: {
                  [p.TerrainType.Dirt]: 2,
                  [p.TerrainType.WoodenFlooring]: 1
              }
          }
      }
  }, t.doodadDescriptions[a.DoodadType.FlyAmanita] = {
      spreadMax: 3,
      gather: {
          [a.GrowingStage.Flowering]: [{
              type: l.ItemType.FlyAmanita
          }],
          [a.GrowingStage.Ripening]: [{
              type: l.ItemType.FlyAmanita
          }]
      },
      skillUse: o.SkillType.Mycology,
      allowedTiles: [p.TerrainType.Dirt, p.TerrainType.FertileSoil, p.TerrainType.Grass, p.TerrainType.WoodenFlooring],
      canTrampleWhenMature: !0,
      canGrowInCaves: !0,
      isFlammable: !0,
      graphicVariation: !0,
      particles: {
          r: 202,
          g: 16,
          b: 16
      },
      canGrow: !0,
      decayMax: 2e3,
      isFungi: !0,
      durability: 6,
      spawnOnWorldGen: {
          [r.BiomeType.Coastal]: {
              [s.WorldZ.Overworld]: {
                  [p.TerrainType.Dirt]: 1,
                  [p.TerrainType.Grass]: 2,
                  [p.TerrainType.WoodenFlooring]: 1
              },
              [s.WorldZ.Cave]: {
                  [p.TerrainType.Dirt]: 2,
                  [p.TerrainType.WoodenFlooring]: 1
              }
          }
      }
  }, t.doodadDescriptions[a.DoodadType.Beggarticks] = {
      spreadMax: 4,
      gather: {
          [a.GrowingStage.Vegetative]: [{
              type: l.ItemType.PlantRoots
          }],
          [a.GrowingStage.Budding]: [{
              type: l.ItemType.Beggarticks
          }, {
              type: l.ItemType.PlantRoots
          }]
      },
      harvest: {
          [a.GrowingStage.Flowering]: [{
              type: l.ItemType.Beggarticks
          }, {
              type: l.ItemType.Beggarticks
          }],
          [a.GrowingStage.Ripening]: [{
              type: l.ItemType.BeggartickSeeds
          }, {
              type: l.ItemType.Beggarticks
          }, {
              type: l.ItemType.Beggarticks,
              chance: 15
          }, {
              type: l.ItemType.Beggarticks
          }]
      },
      skillUse: o.SkillType.Botany,
      allowedTiles: [p.TerrainType.Dirt, p.TerrainType.FertileSoil, p.TerrainType.Grass],
      canTrampleWhenMature: !0,
      isFlammable: !0,
      graphicVariation: !0,
      particles: {
          r: 245,
          g: 210,
          b: 17
      },
      growthParticles: {
          [a.GrowingStage.Seedling]: {
              r: 187,
              g: 213,
              b: 81
          }
      },
      canGrow: !0,
      decayMax: 2600,
      durability: 6,
      spawnOnWorldGen: {
          [r.BiomeType.Coastal]: {
              [s.WorldZ.Overworld]: {
                  [p.TerrainType.Grass]: 1
              }
          }
      }
  }, t.doodadDescriptions[a.DoodadType.Grass] = {
      spreadMax: 20,
      skillUse: o.SkillType.Botany,
      gather: {
          [a.GrowingStage.Flowering]: [{
              type: l.ItemType.BladesOfGrass
          }],
          [a.GrowingStage.Ripening]: [{
              type: l.ItemType.BladesOfGrass
          }, {
              type: l.ItemType.GrassSeeds,
              chance: 10
          }]
      },
      allowedTiles: [p.TerrainType.Dirt, p.TerrainType.FertileSoil],
      isFlammable: !0,
      graphicVariation: !0,
      particles: {
          r: 85,
          g: 143,
          b: 44
      },
      canGrow: !0,
      decayMax: 1750,
      durability: 5,
      spawnOnWorldGen: {
          [r.BiomeType.Coastal]: {
              [s.WorldZ.Overworld]: {
                  [p.TerrainType.Dirt]: 1
              }
          }
      }
  }, t.doodadDescriptions[a.DoodadType.MilkThistles] = {
      spreadMax: 4,
      gather: {
          [a.GrowingStage.Vegetative]: [{
              type: l.ItemType.PlantRoots
          }],
          [a.GrowingStage.Budding]: [{
              type: l.ItemType.PlantRoots
          }]
      },
      harvest: {
          [a.GrowingStage.Flowering]: [{
              type: l.ItemType.MilkThistleFlowers
          }],
          [a.GrowingStage.Ripening]: [{
              type: l.ItemType.MilkThistleSeeds
          }, {
              type: l.ItemType.MilkThistleFlowers,
              chance: 5
          }, {
              type: l.ItemType.MilkThistleFlowers
          }]
      },
      skillUse: o.SkillType.Botany,
      allowedTiles: [p.TerrainType.Dirt, p.TerrainType.FertileSoil, p.TerrainType.Grass],
      canTrampleWhenMature: !0,
      isFlammable: !0,
      graphicVariation: !0,
      particles: {
          r: 121,
          g: 166,
          b: 109
      },
      canGrow: !0,
      decayMax: 2600,
      durability: 7,
      isTall: !0,
      spawnOnWorldGen: {
          [r.BiomeType.Coastal]: {
              [s.WorldZ.Overworld]: {
                  [p.TerrainType.Dirt]: 1
              }
          }
      }
  }, t.doodadDescriptions[a.DoodadType.Clematis] = {
      spreadMax: 5,
      gather: {
          [a.GrowingStage.Budding]: [{
              type: l.ItemType.ClematisVine
          }],
          [a.GrowingStage.Flowering]: [{
              type: l.ItemType.ClematisVine,
              chance: 15
          }, {
              type: l.ItemType.ClematisVine
          }]
      },
      harvest: {
          [a.GrowingStage.Ripening]: [{
              type: l.ItemType.ClematisSeeds
          }]
      },
      group: [a.DoodadTypeGroup.GatheredPlant],
      skillUse: o.SkillType.Botany,
      allowedTiles: [p.TerrainType.Swamp, p.TerrainType.Dirt, p.TerrainType.FertileSoil, p.TerrainType.Grass],
      isFlammable: !0,
      graphicVariation: !0,
      particles: {
          r: 86,
          g: 135,
          b: 8
      },
      canGrow: !0,
      decayMax: 2200,
      durability: 8,
      isTall: !0,
      spawnOnWorldGen: {
          [r.BiomeType.Coastal]: {
              [s.WorldZ.Overworld]: {
                  [p.TerrainType.Swamp]: 1
              }
          }
      }
  }, t.doodadDescriptions[a.DoodadType.Badderlocks] = {
      allowedTiles: [p.TerrainType.Seawater],
      graphicVariation: !0,
      particles: {
          r: 0,
          g: 52,
          b: 39
      },
      pickUp: [l.ItemType.Badderlocks],
      skillUse: o.SkillType.Botany,
      spreadMax: 3,
      spawnOnWorldGen: {
          [r.BiomeType.Coastal]: {
              [s.WorldZ.Overworld]: {
                  [p.TerrainType.Seawater]: 1,
                  [p.TerrainType.ShallowSeawater]: 1
              }
          },
          [r.BiomeType.Arid]: {
              [s.WorldZ.Overworld]: {
                  [p.TerrainType.Seawater]: 1,
                  [p.TerrainType.ShallowSeawater]: 1
              }
          }
      }
  }, t.doodadDescriptions[a.DoodadType.Tumbleweed] = {
      spreadMax: 5,
      gather: {
          [a.GrowingStage.Vegetative]: [{
              type: l.ItemType.PlantRoots
          }],
          [a.GrowingStage.Budding]: [{
              type: l.ItemType.Twigs
          }, {
              type: l.ItemType.PlantRoots
          }],
          [a.GrowingStage.Flowering]: [{
              type: l.ItemType.TumbleweedSeeds
          }, {
              type: l.ItemType.Twigs
          }, {
              type: l.ItemType.PlantRoots
          }],
          [a.GrowingStage.Ripening]: [{
              type: l.ItemType.TumbleweedSeeds
          }, {
              type: l.ItemType.Twigs
          }, {
              type: l.ItemType.Twigs,
              chance: 10
          }, {
              type: l.ItemType.PlantRoots
          }]
      },
      skillUse: o.SkillType.Botany,
      allowedTiles: [p.TerrainType.BeachSand, p.TerrainType.DesertSand, p.TerrainType.Gravel, p.TerrainType.Dirt, p.TerrainType.FertileSoil],
      isFlammable: !0,
      graphicVariation: !0,
      particles: {
          r: 89,
          g: 121,
          b: 60
      },
      canGrow: !0,
      decayMax: 2200,
      durability: 7,
      isTall: !0,
      spawnOnWorldGen: {
          [r.BiomeType.Coastal]: {
              [s.WorldZ.Overworld]: {
                  [p.TerrainType.Dirt]: 1,
                  [p.TerrainType.BeachSand]: 3
              }
          },
          [r.BiomeType.Arid]: {
              [s.WorldZ.Overworld]: {
                  [p.TerrainType.Gravel]: 1,
                  [p.TerrainType.BeachSand]: 2,
                  [p.TerrainType.DesertSand]: 3
              }
          }
      }
  }, t.doodadDescriptions[a.DoodadType.PricklyPears] = {
      gather: {
          [a.GrowingStage.Budding]: [{
              type: l.ItemType.CactusSpines
          }, {
              type: l.ItemType.Nopal
          }],
          [a.GrowingStage.Flowering]: [{
              type: l.ItemType.CactusSpines
          }, {
              type: l.ItemType.Nopal,
              chance: 10
          }, {
              type: l.ItemType.Nopal
          }]
      },
      harvest: {
          [a.GrowingStage.Ripening]: [{
              type: l.ItemType.PricklyPearFruit
          }, {
              type: l.ItemType.PricklyPearFruit
          }]
      },
      skillUse: o.SkillType.Botany,
      isFlammable: !0,
      damage: 1,
      spreadMax: 1,
      allowedTiles: [p.TerrainType.BeachSand, p.TerrainType.DesertSand, p.TerrainType.Gravel, p.TerrainType.Dirt, p.TerrainType.FertileSoil],
      graphicVariation: !0,
      particles: {
          r: 136,
          g: 193,
          b: 54
      },
      canGrow: !0,
      decayMax: 2800,
      gatherCanHurtHands: !0,
      durability: 7,
      isTall: !0,
      spawnOnWorldGen: {
          [r.BiomeType.Arid]: {
              [s.WorldZ.Overworld]: {
                  [p.TerrainType.Gravel]: 1,
                  [p.TerrainType.BeachSand]: 1,
                  [p.TerrainType.DesertSand]: 1
              }
          }
      }
  }, t.doodadDescriptions[a.DoodadType.RaspberryBush] = {
      gather: {
          [a.GrowingStage.Vegetative]: [{
              type: l.ItemType.PlantRoots
          }],
          [a.GrowingStage.Budding]: [{
              type: l.ItemType.Leaves
          }, {
              type: l.ItemType.PlantRoots
          }],
          [a.GrowingStage.Flowering]: [{
              type: l.ItemType.Leaves
          }, {
              type: l.ItemType.PlantRoots
          }]
      },
      harvest: {
          [a.GrowingStage.Ripening]: [{
              type: l.ItemType.Raspberries,
              chance: 5
          }, {
              type: l.ItemType.Raspberries
          }]
      },
      skillUse: o.SkillType.Botany,
      spreadMax: 1,
      allowedTiles: [p.TerrainType.Swamp, p.TerrainType.Dirt, p.TerrainType.FertileSoil, p.TerrainType.Grass],
      isFlammable: !0,
      graphicVariation: !0,
      particles: {
          r: 111,
          g: 169,
          b: 52
      },
      canGrow: !0,
      decayMax: 3e3,
      durability: 8,
      isTall: !0,
      spawnOnWorldGen: {
          [r.BiomeType.Coastal]: {
              [s.WorldZ.Overworld]: {
                  [p.TerrainType.Swamp]: 1,
                  [p.TerrainType.Dirt]: 1
              }
          }
      }
  }, t.doodadDescriptions[a.DoodadType.PileOfRocks] = {
      graphicVariation: !0,
      particles: {
          r: 109,
          g: 109,
          b: 109
      },
      pickUp: [l.ItemType.LargeRock, l.ItemType.Stones],
      gatherCanHurtHands: !0,
      spawnOnWorldGen: {
          [r.BiomeType.Coastal]: {
              [s.WorldZ.Cave]: {
                  [p.TerrainType.RockGround]: 20,
                  [p.TerrainType.Dirt]: 5,
                  [p.TerrainType.Gravel]: 5
              },
              [s.WorldZ.Overworld]: {
                  [p.TerrainType.Grass]: 1,
                  [p.TerrainType.Dirt]: 1,
                  [p.TerrainType.BeachSand]: 2
              }
          },
          [r.BiomeType.IceCap]: {
              [s.WorldZ.Cave]: {
                  [p.TerrainType.Dirt]: 5
              },
              [s.WorldZ.Overworld]: {
                  [p.TerrainType.Dirt]: 1
              }
          }
      }
  }, t.doodadDescriptions[a.DoodadType.StoneCampfire] = {
      pickUp: [l.ItemType.StoneCampfire],
      lit: a.DoodadType.LitStoneCampfire,
      repairItem: l.ItemType.StoneCampfire,
      particles: {
          r: 104,
          g: 100,
          b: 100
      },
      reduceDurabilityOnGather: !0,
      spawnOnWorldGen: {
          [r.BiomeType.Coastal]: {
              [s.WorldZ.Cave]: {
                  [p.TerrainType.WoodenFlooring]: 5,
                  [p.TerrainType.CobblestoneFlooring]: 5
              },
              [s.WorldZ.Overworld]: {
                  [p.TerrainType.WoodenFlooring]: 1,
                  [p.TerrainType.CobblestoneFlooring]: 1
              }
          }
      }
  }, t.doodadDescriptions[a.DoodadType.LitStoneCampfire] = {
      decayMax: 250,
      providesFire: !0,
      providesLight: 3,
      revert: a.DoodadType.StoneCampfire,
      isAnimated: !0,
      repairItem: l.ItemType.StoneCampfire,
      particles: {
          r: 104,
          g: 100,
          b: 100
      },
      group: [a.DoodadTypeGroup.LitCampfire, a.DoodadTypeGroup.FireSource, a.DoodadTypeGroup.LitStructure],
      tier: {
          [a.DoodadTypeGroup.FireSource]: 1
      }
  }, t.doodadDescriptions[a.DoodadType.StoneFurnace] = {
      pickUp: [l.ItemType.StoneFurnace],
      blockMove: !0,
      canBreak: !0,
      lit: a.DoodadType.LitStoneFurnace,
      repairItem: l.ItemType.StoneFurnace,
      particles: {
          r: 104,
          g: 100,
          b: 100
      },
      reduceDurabilityOnGather: !0,
      isTall: !0,
      spawnOnWorldGen: {
          [r.BiomeType.Coastal]: {
              [s.WorldZ.Cave]: {
                  [p.TerrainType.WoodenFlooring]: 3,
                  [p.TerrainType.CobblestoneFlooring]: 3
              },
              [s.WorldZ.Overworld]: {
                  [p.TerrainType.WoodenFlooring]: 1,
                  [p.TerrainType.CobblestoneFlooring]: 1
              }
          }
      }
  }, t.doodadDescriptions[a.DoodadType.LitStoneFurnace] = {
      decayMax: 250,
      providesFire: !0,
      providesLight: 1,
      blockMove: !0,
      canBreak: !0,
      revert: a.DoodadType.StoneFurnace,
      isAnimated: !0,
      repairItem: l.ItemType.StoneFurnace,
      particles: {
          r: 104,
          g: 100,
          b: 100
      },
      group: [a.DoodadTypeGroup.LitFurnace, a.DoodadTypeGroup.FireSource, a.DoodadTypeGroup.LitStructure],
      tier: {
          [a.DoodadTypeGroup.FireSource]: 2,
          [a.DoodadTypeGroup.LitFurnace]: 1
      },
      isTall: !0
  }, t.doodadDescriptions[a.DoodadType.SandstoneKiln] = {
      pickUp: [l.ItemType.SandstoneKiln],
      blockMove: !0,
      canBreak: !0,
      lit: a.DoodadType.LitSandstoneKiln,
      repairItem: l.ItemType.SandstoneKiln,
      particles: {
          r: 199,
          g: 156,
          b: 128
      },
      reduceDurabilityOnGather: !0,
      isTall: !0,
      spawnOnWorldGen: {
          [r.BiomeType.Arid]: {
              [s.WorldZ.Overworld]: {
                  [p.TerrainType.SandstoneFlooring]: 1
              }
          }
      }
  }, t.doodadDescriptions[a.DoodadType.LitSandstoneKiln] = {
      decayMax: 250,
      providesFire: !0,
      providesLight: 1,
      blockMove: !0,
      canBreak: !0,
      revert: a.DoodadType.SandstoneKiln,
      isAnimated: !0,
      repairItem: l.ItemType.SandstoneKiln,
      particles: {
          r: 199,
          g: 156,
          b: 128
      },
      group: [a.DoodadTypeGroup.LitKiln, a.DoodadTypeGroup.FireSource, a.DoodadTypeGroup.LitStructure],
      tier: {
          [a.DoodadTypeGroup.FireSource]: 2,
          [a.DoodadTypeGroup.LitKiln]: 1
      },
      isTall: !0
  }, t.doodadDescriptions[a.DoodadType.StoneAnvil] = {
      pickUp: [l.ItemType.StoneAnvil],
      blockMove: !0,
      canBreak: !0,
      repairItem: l.ItemType.StoneAnvil,
      particles: {
          r: 104,
          g: 100,
          b: 100
      },
      group: [a.DoodadTypeGroup.Anvil],
      reduceDurabilityOnGather: !0,
      tier: {
          [a.DoodadTypeGroup.Anvil]: 1
      },
      isTall: !0
  }, t.doodadDescriptions[a.DoodadType.WoodenChest] = {
      pickUp: [l.ItemType.WoodenChest],
      weightCapacity: 75,
      blockMove: !0,
      canBreak: !0,
      repairItem: l.ItemType.WoodenChest,
      isFlammable: !0,
      particles: {
          r: 132,
          g: 96,
          b: 44
      },
      reduceDurabilityOnGather: !0,
      burnsLike: [l.ItemType.WoodenChest],
      preservationChance: .2,
      isTall: !0,
      spawnOnWorldGen: {
          [r.BiomeType.Coastal]: {
              [s.WorldZ.Cave]: {
                  [p.TerrainType.WoodenFlooring]: 5,
                  [p.TerrainType.CobblestoneFlooring]: 5
              },
              [s.WorldZ.Overworld]: {
                  [p.TerrainType.WoodenFlooring]: 1,
                  [p.TerrainType.CobblestoneFlooring]: 1
              }
          },
          [r.BiomeType.Arid]: {
              [s.WorldZ.Overworld]: {
                  [p.TerrainType.SandstoneFlooring]: 1,
                  [p.TerrainType.ClayFlooring]: 1
              }
          }
      }
  }, t.doodadDescriptions[a.DoodadType.LockedWoodenChest] = {
      pickUp: [l.ItemType.WoodenChest],
      blockMove: !0,
      canBreak: !0,
      isFlammable: !0,
      particles: {
          r: 132,
          g: 96,
          b: 44
      },
      burnsLike: [l.ItemType.WoodenChest],
      durability: 25,
      isTall: !0,
      spawnOnWorldGen: {
          [r.BiomeType.Coastal]: {
              [s.WorldZ.Cave]: {
                  [p.TerrainType.RockGround]: 5,
                  [p.TerrainType.Dirt]: 5,
                  [p.TerrainType.Gravel]: 5,
                  [p.TerrainType.WoodenFlooring]: 5,
                  [p.TerrainType.CobblestoneFlooring]: 5
              },
              [s.WorldZ.Overworld]: {
                  [p.TerrainType.WoodenFlooring]: 1,
                  [p.TerrainType.CobblestoneFlooring]: 1
              }
          },
          [r.BiomeType.Arid]: {
              [s.WorldZ.Cave]: {
                  [p.TerrainType.SandstoneGround]: 3,
                  [p.TerrainType.DesertSand]: 3,
                  [p.TerrainType.Gravel]: 3
              },
              [s.WorldZ.Overworld]: {
                  [p.TerrainType.SandstoneFlooring]: 1,
                  [p.TerrainType.ClayFlooring]: 1
              }
          },
          [r.BiomeType.IceCap]: {
              [s.WorldZ.Cave]: {
                  [p.TerrainType.RockGround]: 5,
                  [p.TerrainType.Dirt]: 5
              }
          }
      },
      group: [a.DoodadTypeGroup.LockedChest],
      lockedChest: {
          unlockedDoodadType: a.DoodadType.WoodenChest,
          lootGroups: [d.LootGroupType.Low, d.LootGroupType.High, d.LootGroupType.ChestLow, d.LootGroupType.ChestLow],
          lootQuality: 150
      }
  }, t.doodadDescriptions[a.DoodadType.Switchgrass] = {
      spreadMax: 20,
      gather: {
          [a.GrowingStage.Vegetative]: [{
              type: l.ItemType.PlantRoots
          }],
          [a.GrowingStage.Budding]: [{
              type: l.ItemType.PlantRoots
          }],
          [a.GrowingStage.Flowering]: [{
              type: l.ItemType.BundleOfSwitchgrass
          }, {
              type: l.ItemType.PlantRoots
          }]
      },
      harvest: {
          [a.GrowingStage.Ripening]: [{
              type: l.ItemType.BundleOfSwitchgrass,
              chance: 5
          }, {
              type: l.ItemType.BundleOfSwitchgrass
          }]
      },
      skillUse: o.SkillType.Botany,
      allowedTiles: [p.TerrainType.Dirt, p.TerrainType.Gravel, p.TerrainType.FertileSoil, p.TerrainType.Grass],
      isFlammable: !0,
      graphicVariation: !0,
      particles: {
          r: 158,
          g: 218,
          b: 65
      },
      canGrow: !0,
      decayMax: 2500,
      durability: 6,
      isTall: !0,
      spawnOnWorldGen: {
          [r.BiomeType.Coastal]: {
              [s.WorldZ.Overworld]: {
                  [p.TerrainType.Grass]: 1
              }
          }
      }
  }, t.doodadDescriptions[a.DoodadType.Pineapple] = {
      gather: {
          [a.GrowingStage.Vegetative]: [{
              type: l.ItemType.PlantRoots
          }],
          [a.GrowingStage.Budding]: [{
              type: l.ItemType.PlantRoots
          }],
          [a.GrowingStage.Flowering]: [{
              type: l.ItemType.PlantRoots
          }]
      },
      harvest: {
          [a.GrowingStage.Ripening]: [{
              type: l.ItemType.Pineapple
          }]
      },
      skillUse: o.SkillType.Botany,
      isFlammable: !0,
      spreadMax: 1,
      allowedTiles: [p.TerrainType.BeachSand, p.TerrainType.DesertSand, p.TerrainType.Gravel, p.TerrainType.Dirt, p.TerrainType.FertileSoil, p.TerrainType.Grass],
      graphicVariation: !0,
      particles: {
          r: 139,
          g: 182,
          b: 75
      },
      canGrow: !0,
      decayMax: 4e3,
      durability: 7,
      isTall: !0,
      spawnOnWorldGen: {
          [r.BiomeType.Arid]: {
              [s.WorldZ.Overworld]: {
                  [p.TerrainType.Gravel]: 1,
                  [p.TerrainType.BeachSand]: 1,
                  [p.TerrainType.DesertSand]: 1
              }
          }
      }
  }, t.doodadDescriptions[a.DoodadType.Chives] = {
      gather: {
          [a.GrowingStage.Budding]: [{
              type: l.ItemType.Chives
          }],
          [a.GrowingStage.Flowering]: [{
              type: l.ItemType.Chives,
              chance: 5
          }, {
              type: l.ItemType.Chives
          }]
      },
      harvest: {
          [a.GrowingStage.Ripening]: [{
              type: l.ItemType.ChiveSeeds
          }]
      },
      group: [a.DoodadTypeGroup.GatheredPlant],
      skillUse: o.SkillType.Botany,
      allowedTiles: [p.TerrainType.Dirt, p.TerrainType.FertileSoil, p.TerrainType.Grass],
      spreadMax: 2,
      canTrampleWhenMature: !0,
      isFlammable: !0,
      graphicVariation: !0,
      particles: {
          r: 99,
          g: 166,
          b: 3
      },
      canGrow: !0,
      decayMax: 2800,
      durability: 6,
      spawnOnWorldGen: {
          [r.BiomeType.Coastal]: {
              [s.WorldZ.Overworld]: {
                  [p.TerrainType.Dirt]: 1
              }
          }
      }
  }, t.doodadDescriptions[a.DoodadType.PoleTorchStand] = {
      pickUp: [l.ItemType.WoodenPole],
      lit: a.DoodadType.LitPoleTorchStand,
      repairItem: l.ItemType.WoodenPole,
      particles: {
          r: 132,
          g: 96,
          b: 44
      },
      reduceDurabilityOnGather: !0,
      group: [a.DoodadTypeGroup.LightDevice],
      isTall: !0,
      spawnOnWorldGen: {
          [r.BiomeType.Coastal]: {
              [s.WorldZ.Cave]: {
                  [p.TerrainType.RockGround]: 5,
                  [p.TerrainType.Dirt]: 5,
                  [p.TerrainType.Gravel]: 5
              }
          }
      }
  }, t.doodadDescriptions[a.DoodadType.LitPoleTorchStand] = {
      pickUp: [l.ItemType.LitPoleTorch],
      decayMax: 250,
      providesFire: !0,
      providesLight: 2,
      revert: a.DoodadType.PoleTorchStand,
      isAnimated: !0,
      repairItem: l.ItemType.LitPoleTorch,
      particles: {
          r: 132,
          g: 96,
          b: 44
      },
      reduceDurabilityOnGather: !0,
      tier: {
          [a.DoodadTypeGroup.FireSource]: 1
      },
      group: [a.DoodadTypeGroup.FireSource, a.DoodadTypeGroup.LitTorch, a.DoodadTypeGroup.LightSource],
      isTall: !0
  }, t.doodadDescriptions[a.DoodadType.Cotton] = {
      spreadMax: 3,
      gather: {
          [a.GrowingStage.Vegetative]: [{
              type: l.ItemType.PlantRoots
          }],
          [a.GrowingStage.Budding]: [{
              type: l.ItemType.Leaves
          }, {
              type: l.ItemType.PlantRoots
          }],
          [a.GrowingStage.Flowering]: [{
              type: l.ItemType.Leaves
          }, {
              type: l.ItemType.PlantRoots
          }],
          [a.GrowingStage.Ripening]: [{
              type: l.ItemType.CottonSeeds
          }, {
              type: l.ItemType.Cotton
          }, {
              type: l.ItemType.Cotton,
              chance: 5
          }, {
              type: l.ItemType.Leaves
          }, {
              type: l.ItemType.PlantRoots
          }]
      },
      skillUse: o.SkillType.Botany,
      allowedTiles: [p.TerrainType.Dirt, p.TerrainType.FertileSoil, p.TerrainType.Grass],
      canTrampleWhenMature: !0,
      isFlammable: !0,
      graphicVariation: !0,
      particles: {
          r: 136,
          g: 172,
          b: 39
      },
      growthParticles: {
          [a.GrowingStage.Ripening]: {
              r: 255,
              g: 255,
              b: 255
          }
      },
      canGrow: !0,
      decayMax: 2800,
      durability: 7,
      isTall: !0,
      spawnOnWorldGen: {
          [r.BiomeType.Coastal]: {
              [s.WorldZ.Overworld]: {
                  [p.TerrainType.Dirt]: 1
              }
          }
      }
  }, t.doodadDescriptions[a.DoodadType.SetDeadfall] = {
      skillUse: o.SkillType.Trapping,
      pickUp: [l.ItemType.Deadfall],
      isTrap: !0,
      isFlammable: !0,
      repairItem: l.ItemType.Deadfall,
      particles: {
          r: 105,
          g: 103,
          b: 103
      },
      reduceDurabilityOnGather: !0,
      trapDamage: 6,
      burnsLike: [l.ItemType.Deadfall]
  }, t.doodadDescriptions[a.DoodadType.SetSnare] = {
      skillUse: o.SkillType.Trapping,
      pickUp: [l.ItemType.Snare],
      isTrap: !0,
      isFlammable: !0,
      repairItem: l.ItemType.Snare,
      particles: {
          r: 132,
          g: 96,
          b: 44
      },
      reduceDurabilityOnGather: !0,
      trapDamage: 5,
      burnsLike: [l.ItemType.Snare]
  }, t.doodadDescriptions[a.DoodadType.SetHobgoblinSnare] = {
      pickUp: [l.ItemType.Snare],
      isTrap: !0,
      isFlammable: !0,
      repairItem: l.ItemType.Snare,
      particles: {
          r: 132,
          g: 96,
          b: 44
      },
      trapDamage: 6,
      burnsLike: [l.ItemType.Snare],
      spawnOnWorldGen: {
          [r.BiomeType.Coastal]: {
              [s.WorldZ.Cave]: {
                  [p.TerrainType.WoodenFlooring]: 5,
                  [p.TerrainType.CobblestoneFlooring]: 5
              }
          },
          [r.BiomeType.Arid]: {
              [s.WorldZ.Cave]: {
                  [p.TerrainType.SandstoneGround]: 3,
                  [p.TerrainType.DesertSand]: 3
              }
          }
      }
  };
  const c = {
      getVariationX(e, t) {
          return void 0 !== e.gatherReady && e.gatherReady <= 0 && (t += this.isWaterSource ? 1 : 6), t
      },
      getVariationY(e, t) {
          return e.stillContainer && (t = u.stillContainerOrder[e.stillContainer.type], this.isTall && (t *= 2)), t
      }
  };
  t.doodadDescriptions[a.DoodadType.SolarStill] = {
      decayMax: 250,
      pickUp: [l.ItemType.SolarStill],
      isWaterSource: !0,
      particles: {
          r: 206,
          g: 208,
          b: 210
      },
      reduceDurabilityOnGather: !0,
      ...c
  }, t.doodadDescriptions[a.DoodadType.StoneWaterStill] = {
      pickUp: [l.ItemType.StoneWaterStill],
      lit: a.DoodadType.LitStoneWaterStill,
      isWaterSource: !0,
      blockMove: !0,
      canBreak: !0,
      repairItem: l.ItemType.StoneWaterStill,
      particles: {
          r: 130,
          g: 128,
          b: 128
      },
      reduceDurabilityOnGather: !0,
      isTall: !0,
      ...c
  }, t.doodadDescriptions[a.DoodadType.LitStoneWaterStill] = {
      decayMax: 250,
      providesFire: !0,
      providesLight: 2,
      revert: a.DoodadType.StoneWaterStill,
      isAnimated: !0,
      blockMove: !0,
      canBreak: !0,
      repairItem: l.ItemType.StoneWaterStill,
      particles: {
          r: 130,
          g: 128,
          b: 128
      },
      group: [a.DoodadTypeGroup.LitWaterStill, a.DoodadTypeGroup.FireSource, a.DoodadTypeGroup.LitStructure],
      waterStill: !0,
      tier: {
          [a.DoodadTypeGroup.FireSource]: 1
      },
      isTall: !0,
      ...c
  }, t.doodadDescriptions[a.DoodadType.CreatureIdol] = {
      pickUp: [l.ItemType.CreatureIdol],
      blockMove: !0,
      canBreak: !0,
      isFlammable: !0,
      particles: {
          r: 202,
          g: 91,
          b: 91
      },
      reduceDurabilityOnGather: !0,
      burnsLike: [l.ItemType.CreatureIdol]
  }, t.doodadDescriptions[a.DoodadType.WoodenDoor] = {
      pickUp: [l.ItemType.WoodenDoor],
      blockMove: !0,
      canBreak: !0,
      isFlammable: !0,
      blockJump: !0,
      repairItem: l.ItemType.WoodenDoor,
      particles: {
          r: 132,
          g: 96,
          b: 44
      },
      reduceDurabilityOnGather: !0,
      disableDrop: !0,
      isClosedDoor: !0,
      isDoor: !0,
      burnsLike: [l.ItemType.WoodenDoor]
  }, t.doodadDescriptions[a.DoodadType.WoodenFence] = {
      pickUp: [l.ItemType.WoodenFence],
      blockMove: !0,
      canBreak: !0,
      isFlammable: !0,
      repairItem: l.ItemType.WoodenFence,
      particles: {
          r: 132,
          g: 96,
          b: 44
      },
      reduceDurabilityOnGather: !0,
      isFence: !0,
      burnsLike: [l.ItemType.WoodenFence]
  }, t.doodadDescriptions[a.DoodadType.WoodenWall] = {
      pickUp: [l.ItemType.WoodenWall],
      blockMove: !0,
      canBreak: !0,
      blockJump: !0,
      isFlammable: !0,
      repairItem: l.ItemType.WoodenWall,
      particles: {
          r: 132,
          g: 96,
          b: 44
      },
      reduceDurabilityOnGather: !0,
      disableDrop: !0,
      isWall: !0,
      burnsLike: [l.ItemType.WoodenWall]
  }, t.doodadDescriptions[a.DoodadType.StoneWall] = {
      pickUp: [l.ItemType.StoneWall],
      blockMove: !0,
      canBreak: !0,
      blockJump: !0,
      repairItem: l.ItemType.StoneWall,
      particles: {
          r: 130,
          g: 128,
          b: 128
      },
      reduceDurabilityOnGather: !0,
      disableDrop: !0,
      isWall: !0
  }, t.doodadDescriptions[a.DoodadType.SandstoneWall] = {
      pickUp: [l.ItemType.SandstoneWall],
      blockMove: !0,
      canBreak: !0,
      blockJump: !0,
      repairItem: l.ItemType.SandstoneWall,
      particles: {
          r: 199,
          g: 156,
          b: 128
      },
      reduceDurabilityOnGather: !0,
      disableDrop: !0,
      isWall: !0
  }, t.doodadDescriptions[a.DoodadType.ClayWall] = {
      pickUp: [l.ItemType.ClayWall],
      blockMove: !0,
      canBreak: !0,
      blockJump: !0,
      repairItem: l.ItemType.ClayWall,
      particles: {
          r: 200,
          g: 205,
          b: 207
      },
      reduceDurabilityOnGather: !0,
      disableDrop: !0,
      isWall: !0
  }, t.doodadDescriptions[a.DoodadType.CaveEntrance] = {
      particles: {
          r: 111,
          g: 76,
          b: 31
      }
  }, t.doodadDescriptions[a.DoodadType.SetExplosiveTrap] = {
      skillUse: o.SkillType.Trapping,
      pickUp: [l.ItemType.ExplosiveTrap],
      isTrap: !0,
      particles: {
          r: 85,
          g: 168,
          b: 41
      },
      reduceDurabilityOnGather: !0,
      trapDamage: 8,
      disableDrop: !0
  }, t.doodadDescriptions[a.DoodadType.WoodenDoorOpen] = {
      pickUp: [l.ItemType.WoodenDoor],
      isFlammable: !0,
      repairItem: l.ItemType.WoodenDoor,
      particles: {
          r: 132,
          g: 96,
          b: 44
      },
      reduceDurabilityOnGather: !0,
      isDoor: !0,
      burnsLike: [l.ItemType.WoodenDoor]
  }, t.doodadDescriptions[a.DoodadType.WoodenGate] = {
      pickUp: [l.ItemType.WoodenGate],
      blockMove: !0,
      canBreak: !0,
      isFlammable: !0,
      repairItem: l.ItemType.WoodenGate,
      particles: {
          r: 132,
          g: 96,
          b: 44
      },
      reduceDurabilityOnGather: !0,
      disableDrop: !0,
      isGate: !0,
      burnsLike: [l.ItemType.WoodenGate]
  }, t.doodadDescriptions[a.DoodadType.WoodenGateOpen] = {
      pickUp: [l.ItemType.WoodenGate],
      isFlammable: !0,
      repairItem: l.ItemType.WoodenGate,
      particles: {
          r: 132,
          g: 96,
          b: 44
      },
      reduceDurabilityOnGather: !0,
      isGate: !0,
      burnsLike: [l.ItemType.WoodenGate]
  }, t.doodadDescriptions[a.DoodadType.PoisonIvy] = {
      spreadMax: 3,
      gather: {
          [a.GrowingStage.Vegetative]: [{
              type: l.ItemType.PlantRoots
          }],
          [a.GrowingStage.Budding]: [{
              type: l.ItemType.PoisonIvyLeaves
          }, {
              type: l.ItemType.PlantRoots
          }],
          [a.GrowingStage.Flowering]: [{
              type: l.ItemType.PoisonIvyLeaves,
              chance: 5
          }, {
              type: l.ItemType.PoisonIvyLeaves
          }, {
              type: l.ItemType.PlantRoots
          }]
      },
      harvest: {
          [a.GrowingStage.Ripening]: [{
              type: l.ItemType.PoisonIvySeeds
          }]
      },
      group: [a.DoodadTypeGroup.GatheredPlant],
      skillUse: o.SkillType.Botany,
      allowedTiles: [p.TerrainType.Swamp, p.TerrainType.Dirt, p.TerrainType.FertileSoil, p.TerrainType.Grass],
      canTrampleWhenMature: !0,
      isFlammable: !0,
      graphicVariation: !0,
      causesStatus: [n.StatusType.Poisoned],
      particles: {
          r: 70,
          g: 149,
          b: 5
      },
      canGrow: !0,
      decayMax: 2600,
      durability: 7,
      spawnOnWorldGen: {
          [r.BiomeType.Coastal]: {
              [s.WorldZ.Overworld]: {
                  [p.TerrainType.Grass]: 2,
                  [p.TerrainType.Dirt]: 1,
                  [p.TerrainType.Swamp]: 2
              }
          }
      }
  }, t.doodadDescriptions[a.DoodadType.WroughtIronChest] = {
      pickUp: [l.ItemType.WroughtIronChest],
      weightCapacity: 100,
      blockMove: !0,
      canBreak: !0,
      repairItem: l.ItemType.WroughtIronChest,
      particles: {
          r: 88,
          g: 95,
          b: 114
      },
      reduceDurabilityOnGather: !0,
      preservationChance: .3,
      isTall: !0
  }, t.doodadDescriptions[a.DoodadType.IronChest] = {
      pickUp: [l.ItemType.IronChest],
      weightCapacity: 125,
      blockMove: !0,
      canBreak: !0,
      repairItem: l.ItemType.IronChest,
      particles: {
          r: 220,
          g: 223,
          b: 231
      },
      reduceDurabilityOnGather: !0,
      preservationChance: .4,
      isTall: !0
  }, t.doodadDescriptions[a.DoodadType.OrnateWoodenChest] = {
      pickUp: [l.ItemType.OrnateWoodenChest],
      weightCapacity: 100,
      blockMove: !0,
      canBreak: !0,
      repairItem: l.ItemType.OrnateWoodenChest,
      isFlammable: !0,
      particles: {
          r: 132,
          g: 96,
          b: 44
      },
      reduceDurabilityOnGather: !0,
      burnsLike: [l.ItemType.WoodenChest],
      preservationChance: .3,
      isTall: !0
  }, t.doodadDescriptions[a.DoodadType.SkeletalRemains] = {
      particles: {
          r: 255,
          g: 255,
          b: 253
      },
      graphicVariation: !0,
      isTall: !0,
      spawnOnWorldGen: {
          [r.BiomeType.Coastal]: {
              [s.WorldZ.Cave]: {
                  [p.TerrainType.RockGround]: 5,
                  [p.TerrainType.Dirt]: 12,
                  [p.TerrainType.Gravel]: 5,
                  [p.TerrainType.WoodenFlooring]: 5
              },
              [s.WorldZ.Overworld]: {
                  [p.TerrainType.WoodenFlooring]: 1,
                  [p.TerrainType.CobblestoneFlooring]: 1
              }
          },
          [r.BiomeType.Arid]: {
              [s.WorldZ.Cave]: {
                  [p.TerrainType.SandstoneGround]: 5,
                  [p.TerrainType.DesertSand]: 5,
                  [p.TerrainType.Gravel]: 5
              },
              [s.WorldZ.Overworld]: {
                  [p.TerrainType.Grass]: 1,
                  [p.TerrainType.SandstoneFlooring]: 1,
                  [p.TerrainType.ClayFlooring]: 1
              }
          }
      }
  }, t.doodadDescriptions[a.DoodadType.ClayKiln] = {
      pickUp: [l.ItemType.ClayKiln],
      blockMove: !0,
      canBreak: !0,
      lit: a.DoodadType.LitClayKiln,
      repairItem: l.ItemType.ClayKiln,
      particles: {
          r: 200,
          g: 205,
          b: 207
      },
      reduceDurabilityOnGather: !0,
      isTall: !0,
      spawnOnWorldGen: {
          [r.BiomeType.Arid]: {
              [s.WorldZ.Overworld]: {
                  [p.TerrainType.ClayFlooring]: 1
              }
          }
      }
  }, t.doodadDescriptions[a.DoodadType.LitClayKiln] = {
      decayMax: 250,
      providesFire: !0,
      providesLight: 1,
      blockMove: !0,
      canBreak: !0,
      revert: a.DoodadType.ClayKiln,
      isAnimated: !0,
      repairItem: l.ItemType.ClayKiln,
      particles: {
          r: 200,
          g: 205,
          b: 207
      },
      group: [a.DoodadTypeGroup.LitKiln, a.DoodadTypeGroup.FireSource, a.DoodadTypeGroup.LitStructure],
      tier: {
          [a.DoodadTypeGroup.FireSource]: 2,
          [a.DoodadTypeGroup.LitKiln]: 2
      },
      isTall: !0
  }, t.doodadDescriptions[a.DoodadType.ClayCampfire] = {
      pickUp: [l.ItemType.ClayCampfire],
      lit: a.DoodadType.LitClayCampfire,
      repairItem: l.ItemType.ClayCampfire,
      particles: {
          r: 200,
          g: 205,
          b: 207
      },
      reduceDurabilityOnGather: !0,
      spawnOnWorldGen: {
          [r.BiomeType.Arid]: {
              [s.WorldZ.Overworld]: {
                  [p.TerrainType.ClayFlooring]: 1
              }
          }
      }
  }, t.doodadDescriptions[a.DoodadType.LitClayCampfire] = {
      decayMax: 250,
      providesFire: !0,
      providesLight: 3,
      revert: a.DoodadType.ClayCampfire,
      isAnimated: !0,
      repairItem: l.ItemType.ClayCampfire,
      particles: {
          r: 200,
          g: 205,
          b: 207
      },
      group: [a.DoodadTypeGroup.LitCampfire, a.DoodadTypeGroup.FireSource, a.DoodadTypeGroup.LitStructure],
      tier: {
          [a.DoodadTypeGroup.FireSource]: 1
      }
  }, t.doodadDescriptions[a.DoodadType.ClayFurnace] = {
      pickUp: [l.ItemType.ClayFurnace],
      blockMove: !0,
      canBreak: !0,
      lit: a.DoodadType.LitClayFurnace,
      repairItem: l.ItemType.ClayFurnace,
      particles: {
          r: 200,
          g: 205,
          b: 207
      },
      reduceDurabilityOnGather: !0,
      isTall: !0,
      spawnOnWorldGen: {
          [r.BiomeType.Arid]: {
              [s.WorldZ.Overworld]: {
                  [p.TerrainType.ClayFlooring]: 1
              }
          }
      }
  }, t.doodadDescriptions[a.DoodadType.LitClayFurnace] = {
      decayMax: 250,
      providesFire: !0,
      providesLight: 1,
      blockMove: !0,
      canBreak: !0,
      revert: a.DoodadType.ClayFurnace,
      isAnimated: !0,
      repairItem: l.ItemType.ClayFurnace,
      particles: {
          r: 200,
          g: 205,
          b: 207
      },
      group: [a.DoodadTypeGroup.LitFurnace, a.DoodadTypeGroup.FireSource, a.DoodadTypeGroup.LitStructure],
      tier: {
          [a.DoodadTypeGroup.FireSource]: 2,
          [a.DoodadTypeGroup.LitFurnace]: 2
      },
      isTall: !0
  }, t.doodadDescriptions[a.DoodadType.ClayWaterStill] = {
      pickUp: [l.ItemType.ClayWaterStill],
      lit: a.DoodadType.LitClayWaterStill,
      isWaterSource: !0,
      blockMove: !0,
      canBreak: !0,
      repairItem: l.ItemType.ClayWaterStill,
      particles: {
          r: 200,
          g: 205,
          b: 207
      },
      reduceDurabilityOnGather: !0,
      isTall: !0,
      ...c
  }, t.doodadDescriptions[a.DoodadType.LitClayWaterStill] = {
      decayMax: 250,
      providesFire: !0,
      providesLight: 2,
      revert: a.DoodadType.ClayWaterStill,
      isAnimated: !0,
      blockMove: !0,
      canBreak: !0,
      repairItem: l.ItemType.ClayWaterStill,
      particles: {
          r: 200,
          g: 205,
          b: 207
      },
      group: [a.DoodadTypeGroup.LitWaterStill, a.DoodadTypeGroup.FireSource, a.DoodadTypeGroup.LitStructure],
      waterStill: !0,
      tier: {
          [a.DoodadTypeGroup.FireSource]: 1
      },
      isTall: !0,
      ...c
  }, t.doodadDescriptions[a.DoodadType.SandstoneCampfire] = {
      pickUp: [l.ItemType.SandstoneCampfire],
      lit: a.DoodadType.LitSandstoneCampfire,
      repairItem: l.ItemType.SandstoneCampfire,
      particles: {
          r: 199,
          g: 156,
          b: 128
      },
      reduceDurabilityOnGather: !0,
      spawnOnWorldGen: {
          [r.BiomeType.Arid]: {
              [s.WorldZ.Overworld]: {
                  [p.TerrainType.SandstoneFlooring]: 1
              }
          }
      }
  }, t.doodadDescriptions[a.DoodadType.LitSandstoneCampfire] = {
      decayMax: 250,
      providesFire: !0,
      providesLight: 3,
      revert: a.DoodadType.SandstoneCampfire,
      isAnimated: !0,
      repairItem: l.ItemType.SandstoneCampfire,
      particles: {
          r: 199,
          g: 156,
          b: 128
      },
      group: [a.DoodadTypeGroup.LitCampfire, a.DoodadTypeGroup.FireSource, a.DoodadTypeGroup.LitStructure],
      tier: {
          [a.DoodadTypeGroup.FireSource]: 1
      }
  }, t.doodadDescriptions[a.DoodadType.SandstoneFurnace] = {
      pickUp: [l.ItemType.SandstoneFurnace],
      blockMove: !0,
      canBreak: !0,
      lit: a.DoodadType.LitSandstoneFurnace,
      repairItem: l.ItemType.SandstoneFurnace,
      particles: {
          r: 199,
          g: 156,
          b: 128
      },
      reduceDurabilityOnGather: !0,
      isTall: !0,
      spawnOnWorldGen: {
          [r.BiomeType.Arid]: {
              [s.WorldZ.Overworld]: {
                  [p.TerrainType.SandstoneFlooring]: 1
              }
          }
      }
  }, t.doodadDescriptions[a.DoodadType.LitSandstoneFurnace] = {
      decayMax: 250,
      providesFire: !0,
      providesLight: 1,
      blockMove: !0,
      canBreak: !0,
      revert: a.DoodadType.SandstoneFurnace,
      isAnimated: !0,
      repairItem: l.ItemType.SandstoneFurnace,
      particles: {
          r: 199,
          g: 156,
          b: 128
      },
      group: [a.DoodadTypeGroup.LitFurnace, a.DoodadTypeGroup.FireSource, a.DoodadTypeGroup.LitStructure],
      tier: {
          [a.DoodadTypeGroup.FireSource]: 2,
          [a.DoodadTypeGroup.LitFurnace]: 1
      },
      isTall: !0
  }, t.doodadDescriptions[a.DoodadType.SandstoneWaterStill] = {
      pickUp: [l.ItemType.SandstoneWaterStill],
      lit: a.DoodadType.LitSandstoneWaterStill,
      isWaterSource: !0,
      blockMove: !0,
      canBreak: !0,
      repairItem: l.ItemType.SandstoneWaterStill,
      particles: {
          r: 199,
          g: 156,
          b: 128
      },
      reduceDurabilityOnGather: !0,
      isTall: !0,
      ...c
  }, t.doodadDescriptions[a.DoodadType.LitSandstoneWaterStill] = {
      decayMax: 250,
      providesFire: !0,
      providesLight: 2,
      revert: a.DoodadType.SandstoneWaterStill,
      isAnimated: !0,
      blockMove: !0,
      canBreak: !0,
      repairItem: l.ItemType.SandstoneWaterStill,
      particles: {
          r: 199,
          g: 156,
          b: 128
      },
      group: [a.DoodadTypeGroup.LitWaterStill, a.DoodadTypeGroup.FireSource, a.DoodadTypeGroup.LitStructure],
      waterStill: !0,
      tier: {
          [a.DoodadTypeGroup.FireSource]: 1
      },
      isTall: !0,
      ...c
  }, t.doodadDescriptions[a.DoodadType.StoneKiln] = {
      pickUp: [l.ItemType.StoneKiln],
      blockMove: !0,
      canBreak: !0,
      lit: a.DoodadType.LitStoneKiln,
      repairItem: l.ItemType.StoneKiln,
      particles: {
          r: 130,
          g: 128,
          b: 128
      },
      reduceDurabilityOnGather: !0,
      isTall: !0
  }, t.doodadDescriptions[a.DoodadType.LitStoneKiln] = {
      decayMax: 250,
      providesFire: !0,
      providesLight: 1,
      blockMove: !0,
      canBreak: !0,
      revert: a.DoodadType.StoneKiln,
      isAnimated: !0,
      repairItem: l.ItemType.StoneKiln,
      particles: {
          r: 130,
          g: 128,
          b: 128
      },
      group: [a.DoodadTypeGroup.LitKiln, a.DoodadTypeGroup.FireSource, a.DoodadTypeGroup.LitStructure],
      tier: {
          [a.DoodadTypeGroup.FireSource]: 2,
          [a.DoodadTypeGroup.LitKiln]: 1
      },
      isTall: !0
  }, t.doodadDescriptions[a.DoodadType.WroughtIronAnvil] = {
      pickUp: [l.ItemType.WroughtIronAnvil],
      blockMove: !0,
      canBreak: !0,
      repairItem: l.ItemType.WroughtIronAnvil,
      particles: {
          r: 88,
          g: 95,
          b: 114
      },
      group: [a.DoodadTypeGroup.Anvil],
      reduceDurabilityOnGather: !0,
      tier: {
          [a.DoodadTypeGroup.Anvil]: 2
      },
      isTall: !0
  }, t.doodadDescriptions[a.DoodadType.IronAnvil] = {
      pickUp: [l.ItemType.IronAnvil],
      blockMove: !0,
      canBreak: !0,
      repairItem: l.ItemType.IronAnvil,
      particles: {
          r: 220,
          g: 223,
          b: 231
      },
      group: [a.DoodadTypeGroup.Anvil],
      reduceDurabilityOnGather: !0,
      tier: {
          [a.DoodadTypeGroup.Anvil]: 3
      },
      isTall: !0
  }, t.doodadDescriptions[a.DoodadType.MapleTree] = {
      blockLos: !0,
      blockMove: !0,
      isFlammable: !0,
      graphicVariation: !0,
      particles: {
          r: 124,
          g: 193,
          b: 41
      },
      growthParticles: {
          [a.GrowingStage.Bare]: {
              r: 85,
              g: 50,
              b: 36
          }
      },
      reduceDurabilityOnGather: !0,
      skillUse: o.SkillType.Botany,
      gatherSkillUse: o.SkillType.Lumberjacking,
      isTall: !0,
      gather: {
          [a.GrowingStage.Seedling]: [{
              type: l.ItemType.Branch
          }, {
              type: l.ItemType.PlantRoots
          }],
          [a.GrowingStage.Vegetative]: [{
              type: l.ItemType.Leaves
          }, {
              type: l.ItemType.Branch
          }, {
              type: l.ItemType.PlantRoots
          }],
          [a.GrowingStage.Budding]: [{
              type: l.ItemType.Leaves
          }, {
              type: l.ItemType.Leaves
          }, {
              type: l.ItemType.Twigs
          }, {
              type: l.ItemType.Branch
          }, {
              type: l.ItemType.TreeBark
          }],
          [a.GrowingStage.Flowering]: [{
              type: l.ItemType.Leaves
          }, {
              type: l.ItemType.Leaves
          }, {
              type: l.ItemType.Twigs
          }, {
              type: l.ItemType.Branch,
              chance: 10
          }, {
              type: l.ItemType.Branch
          }, {
              type: l.ItemType.TreeBark,
              chance: 5
          }, {
              type: l.ItemType.TreeBark
          }],
          [a.GrowingStage.Bare]: [{
              type: l.ItemType.Log
          }, {
              type: l.ItemType.Branch
          }, {
              type: l.ItemType.Log
          }, {
              type: l.ItemType.Log,
              chance: 10
          }, {
              type: l.ItemType.Log
          }]
      },
      harvest: {
          [a.GrowingStage.Ripening]: [{
              type: l.ItemType.MapleSeeds
          }, {
              type: l.ItemType.MapleSeeds
          }]
      },
      group: [a.DoodadTypeGroup.GatheredPlant],
      canGrow: !0,
      spawnOnTerrain: [p.TerrainType.Dirt, p.TerrainType.Grass],
      allowedTiles: [p.TerrainType.Dirt, p.TerrainType.Grass, p.TerrainType.FertileSoil],
      decayMax: 6200,
      spreadMax: 2,
      isTree: !0,
      gatherCanHurtHands: !0,
      durability: 12,
      spawnOnWorldGen: {
          [r.BiomeType.Coastal]: {
              [s.WorldZ.Overworld]: {
                  [p.TerrainType.Grass]: 1,
                  [p.TerrainType.Dirt]: 1
              }
          }
      }
  }, t.doodadDescriptions[a.DoodadType.AppleTree] = {
      blockLos: !0,
      blockMove: !0,
      isFlammable: !0,
      graphicVariation: !0,
      particles: {
          r: 106,
          g: 154,
          b: 5
      },
      growthParticles: {
          [a.GrowingStage.Bare]: {
              r: 136,
              g: 90,
              b: 81
          }
      },
      reduceDurabilityOnGather: !0,
      skillUse: o.SkillType.Botany,
      gatherSkillUse: o.SkillType.Lumberjacking,
      isTall: !0,
      gather: {
          [a.GrowingStage.Seedling]: [{
              type: l.ItemType.Branch
          }, {
              type: l.ItemType.PlantRoots
          }],
          [a.GrowingStage.Vegetative]: [{
              type: l.ItemType.Leaves
          }, {
              type: l.ItemType.Branch
          }, {
              type: l.ItemType.PlantRoots
          }],
          [a.GrowingStage.Budding]: [{
              type: l.ItemType.Leaves
          }, {
              type: l.ItemType.Twigs
          }, {
              type: l.ItemType.Branch
          }, {
              type: l.ItemType.TreeBark
          }],
          [a.GrowingStage.Flowering]: [{
              type: l.ItemType.Leaves
          }, {
              type: l.ItemType.Twigs
          }, {
              type: l.ItemType.Branch
          }, {
              type: l.ItemType.TreeBark
          }],
          [a.GrowingStage.Bare]: [{
              type: l.ItemType.Log
          }, {
              type: l.ItemType.Branch
          }, {
              type: l.ItemType.Log,
              chance: 50
          }, {
              type: l.ItemType.Log,
              chance: 10
          }, {
              type: l.ItemType.Log
          }]
      },
      harvest: {
          [a.GrowingStage.Ripening]: [{
              type: l.ItemType.Apple
          }, {
              type: l.ItemType.Apple
          }, {
              type: l.ItemType.Apple
          }]
      },
      canGrow: !0,
      spawnOnTerrain: [p.TerrainType.Dirt, p.TerrainType.Grass],
      allowedTiles: [p.TerrainType.Dirt, p.TerrainType.Grass, p.TerrainType.FertileSoil],
      decayMax: 6e3,
      spreadMax: 2,
      isTree: !0,
      gatherCanHurtHands: !0,
      durability: 11,
      spawnOnWorldGen: {
          [r.BiomeType.Coastal]: {
              [s.WorldZ.Overworld]: {
                  [p.TerrainType.Grass]: 1
              }
          }
      }
  }, t.doodadDescriptions[a.DoodadType.SpruceTree] = {
      blockLos: !0,
      blockMove: !0,
      isFlammable: !0,
      graphicVariation: !0,
      particles: {
          r: 86,
          g: 120,
          b: 20
      },
      growthParticles: {
          [a.GrowingStage.Bare]: {
              r: 81,
              g: 32,
              b: 13
          }
      },
      reduceDurabilityOnGather: !0,
      skillUse: o.SkillType.Botany,
      gatherSkillUse: o.SkillType.Lumberjacking,
      isTall: !0,
      gather: {
          [a.GrowingStage.Seedling]: [{
              type: l.ItemType.SpruceNeedles
          }, {
              type: l.ItemType.PlantRoots
          }],
          [a.GrowingStage.Vegetative]: [{
              type: l.ItemType.SpruceNeedles
          }, {
              type: l.ItemType.Twigs
          }, {
              type: l.ItemType.PlantRoots
          }],
          [a.GrowingStage.Budding]: [{
              type: l.ItemType.SpruceNeedles
          }, {
              type: l.ItemType.SpruceNeedles
          }, {
              type: l.ItemType.Twigs
          }, {
              type: l.ItemType.TreeBark
          }],
          [a.GrowingStage.Flowering]: [{
              type: l.ItemType.SpruceNeedles
          }, {
              type: l.ItemType.SpruceNeedles
          }, {
              type: l.ItemType.Twigs
          }, {
              type: l.ItemType.TreeBark,
              chance: 5
          }, {
              type: l.ItemType.TreeBark
          }],
          [a.GrowingStage.Bare]: [{
              type: l.ItemType.Log
          }, {
              type: l.ItemType.Twigs
          }, {
              type: l.ItemType.Log
          }, {
              type: l.ItemType.Log,
              chance: 10
          }, {
              type: l.ItemType.Log
          }]
      },
      harvest: {
          [a.GrowingStage.Ripening]: [{
              type: l.ItemType.SpruceCone
          }, {
              type: l.ItemType.SpruceCone
          }]
      },
      group: [a.DoodadTypeGroup.GatheredPlant],
      canGrow: !0,
      spawnOnTerrain: [p.TerrainType.Dirt],
      allowedTiles: [p.TerrainType.Dirt, p.TerrainType.Grass, p.TerrainType.FertileSoil],
      decayMax: 6e3,
      spreadMax: 1,
      isTree: !0,
      gatherCanHurtHands: !0,
      durability: 13,
      spawnOnWorldGen: {
          [r.BiomeType.Coastal]: {
              [s.WorldZ.Overworld]: {
                  [p.TerrainType.Grass]: 1,
                  [p.TerrainType.Dirt]: 1
              }
          }
      }
  }, t.doodadDescriptions[a.DoodadType.CoconutTree] = {
      blockLos: !0,
      blockMove: !0,
      isFlammable: !0,
      graphicVariation: !0,
      particles: {
          r: 157,
          g: 179,
          b: 0
      },
      growthParticles: {
          [a.GrowingStage.Bare]: {
              r: 212,
              g: 201,
              b: 148
          }
      },
      reduceDurabilityOnGather: !0,
      skillUse: o.SkillType.Botany,
      gatherSkillUse: o.SkillType.Lumberjacking,
      isTall: !0,
      gather: {
          [a.GrowingStage.Seedling]: [{
              type: l.ItemType.PalmLeaf
          }, {
              type: l.ItemType.PlantRoots
          }],
          [a.GrowingStage.Vegetative]: [{
              type: l.ItemType.PalmLeaf
          }, {
              type: l.ItemType.PlantRoots
          }],
          [a.GrowingStage.Budding]: [{
              type: l.ItemType.PalmLeaf
          }, {
              type: l.ItemType.PalmLeaf
          }, {
              type: l.ItemType.TreeBark
          }, {
              type: l.ItemType.TreeBark
          }],
          [a.GrowingStage.Flowering]: [{
              type: l.ItemType.PalmLeaf
          }, {
              type: l.ItemType.PalmLeaf
          }, {
              type: l.ItemType.TreeBark
          }, {
              type: l.ItemType.TreeBark
          }],
          [a.GrowingStage.Bare]: [{
              type: l.ItemType.Log
          }, {
              type: l.ItemType.Log,
              chance: 10
          }, {
              type: l.ItemType.Log
          }]
      },
      harvest: {
          [a.GrowingStage.Ripening]: [{
              type: l.ItemType.Coconut
          }, {
              type: l.ItemType.Coconut,
              chance: 5
          }, {
              type: l.ItemType.Coconut
          }]
      },
      canGrow: !0,
      spawnOnTerrain: [p.TerrainType.DesertSand, p.TerrainType.Gravel],
      allowedTiles: [p.TerrainType.BeachSand, p.TerrainType.DesertSand, p.TerrainType.Gravel, p.TerrainType.FertileSoil],
      decayMax: 6200,
      spreadMax: 1,
      isTree: !0,
      gatherCanHurtHands: !0,
      durability: 12,
      spawnOnWorldGen: {
          [r.BiomeType.Arid]: {
              [s.WorldZ.Overworld]: {
                  [p.TerrainType.BeachSand]: 1,
                  [p.TerrainType.DesertSand]: 1
              }
          }
      }
  }, t.doodadDescriptions[a.DoodadType.CypressTree] = {
      blockLos: !0,
      blockMove: !0,
      isFlammable: !0,
      graphicVariation: !0,
      particles: {
          r: 135,
          g: 171,
          b: 7
      },
      growthParticles: {
          [a.GrowingStage.Bare]: {
              r: 196,
              g: 178,
              b: 138
          }
      },
      reduceDurabilityOnGather: !0,
      skillUse: o.SkillType.Botany,
      gatherSkillUse: o.SkillType.Lumberjacking,
      isTall: !0,
      gather: {
          [a.GrowingStage.Seedling]: [{
              type: l.ItemType.CypressLeaves
          }, {
              type: l.ItemType.PlantRoots
          }],
          [a.GrowingStage.Vegetative]: [{
              type: l.ItemType.CypressLeaves
          }, {
              type: l.ItemType.Twigs
          }, {
              type: l.ItemType.PlantRoots
          }],
          [a.GrowingStage.Budding]: [{
              type: l.ItemType.CypressLeaves
          }, {
              type: l.ItemType.CypressLeaves
          }, {
              type: l.ItemType.Twigs
          }, {
              type: l.ItemType.TreeBark
          }],
          [a.GrowingStage.Flowering]: [{
              type: l.ItemType.CypressLeaves
          }, {
              type: l.ItemType.CypressLeaves
          }, {
              type: l.ItemType.Twigs
          }, {
              type: l.ItemType.TreeBark
          }],
          [a.GrowingStage.Bare]: [{
              type: l.ItemType.Log
          }, {
              type: l.ItemType.Twigs
          }, {
              type: l.ItemType.Log
          }, {
              type: l.ItemType.Log,
              chance: 10
          }, {
              type: l.ItemType.Log
          }]
      },
      harvest: {
          [a.GrowingStage.Ripening]: [{
              type: l.ItemType.CypressCone
          }, {
              type: l.ItemType.CypressCone
          }]
      },
      group: [a.DoodadTypeGroup.GatheredPlant],
      canGrow: !0,
      spawnOnTerrain: [p.TerrainType.Swamp, p.TerrainType.ShallowFreshWater, p.TerrainType.Dirt, p.TerrainType.Grass],
      allowedTiles: [p.TerrainType.Swamp, p.TerrainType.Dirt, p.TerrainType.Grass, p.TerrainType.FertileSoil],
      decayMax: 6200,
      spreadMax: 1,
      isTree: !0,
      gatherCanHurtHands: !0,
      durability: 12,
      spawnOnWorldGen: {
          [r.BiomeType.Coastal]: {
              [s.WorldZ.Overworld]: {
                  [p.TerrainType.Swamp]: 1,
                  [p.TerrainType.ShallowFreshWater]: 1
              }
          }
      }
  }, t.doodadDescriptions[a.DoodadType.Lettuce] = {
      gather: {
          [a.GrowingStage.Budding]: [{
              type: l.ItemType.Lettuce
          }],
          [a.GrowingStage.Flowering]: [{
              type: l.ItemType.Lettuce
          }]
      },
      harvest: {
          [a.GrowingStage.Ripening]: [{
              type: l.ItemType.LettuceSeeds
          }]
      },
      group: [a.DoodadTypeGroup.GatheredPlant],
      skillUse: o.SkillType.Botany,
      isFlammable: !0,
      spreadMax: 3,
      allowedTiles: [p.TerrainType.Dirt, p.TerrainType.FertileSoil, p.TerrainType.Grass],
      graphicVariation: !0,
      particles: {
          r: 136,
          g: 216,
          b: 9
      },
      canGrow: !0,
      decayMax: 2600,
      durability: 6,
      isTall: !0,
      spawnOnWorldGen: {
          [r.BiomeType.Coastal]: {
              [s.WorldZ.Overworld]: {
                  [p.TerrainType.Dirt]: 1
              }
          }
      }
  }, t.doodadDescriptions[a.DoodadType.PotatoPlant] = {
      gather: {
          [a.GrowingStage.Vegetative]: [{
              type: l.ItemType.Leaves
          }],
          [a.GrowingStage.Budding]: [{
              type: l.ItemType.Leaves
          }, {
              type: l.ItemType.Potato
          }],
          [a.GrowingStage.Flowering]: [{
              type: l.ItemType.Leaves
          }, {
              type: l.ItemType.Potato
          }, {
              type: l.ItemType.Potato,
              chance: 5
          }, {
              type: l.ItemType.Potato
          }]
      },
      harvest: {
          [a.GrowingStage.Ripening]: [{
              type: l.ItemType.PotatoSeeds
          }]
      },
      group: [a.DoodadTypeGroup.GatheredPlant],
      skillUse: o.SkillType.Botany,
      isFlammable: !0,
      spreadMax: 3,
      allowedTiles: [p.TerrainType.Dirt, p.TerrainType.FertileSoil, p.TerrainType.Grass],
      graphicVariation: !0,
      particles: {
          r: 100,
          g: 189,
          b: 27
      },
      canGrow: !0,
      decayMax: 2800,
      durability: 6,
      isTall: !0,
      spawnOnWorldGen: {
          [r.BiomeType.Coastal]: {
              [s.WorldZ.Overworld]: {
                  [p.TerrainType.Dirt]: 1
              }
          }
      }
  }, t.doodadDescriptions[a.DoodadType.Carrots] = {
      gather: {
          [a.GrowingStage.Budding]: [{
              type: l.ItemType.Carrot
          }],
          [a.GrowingStage.Flowering]: [{
              type: l.ItemType.Carrot
          }, {
              type: l.ItemType.Carrot,
              chance: 5
          }, {
              type: l.ItemType.Carrot
          }]
      },
      harvest: {
          [a.GrowingStage.Ripening]: [{
              type: l.ItemType.CarrotSeeds
          }]
      },
      group: [a.DoodadTypeGroup.GatheredPlant],
      skillUse: o.SkillType.Botany,
      isFlammable: !0,
      spreadMax: 3,
      allowedTiles: [p.TerrainType.Dirt, p.TerrainType.FertileSoil, p.TerrainType.Grass],
      graphicVariation: !0,
      particles: {
          r: 161,
          g: 221,
          b: 0
      },
      canGrow: !0,
      decayMax: 2800,
      durability: 6,
      isTall: !0,
      spawnOnWorldGen: {
          [r.BiomeType.Coastal]: {
              [s.WorldZ.Overworld]: {
                  [p.TerrainType.Dirt]: 1
              }
          }
      }
  }, t.doodadDescriptions[a.DoodadType.CornStalks] = {
      gather: {
          [a.GrowingStage.Vegetative]: [{
              type: l.ItemType.PlantRoots
          }],
          [a.GrowingStage.Budding]: [{
              type: l.ItemType.PlantRoots
          }],
          [a.GrowingStage.Flowering]: [{
              type: l.ItemType.CornEar
          }, {
              type: l.ItemType.PlantRoots
          }]
      },
      harvest: {
          [a.GrowingStage.Ripening]: [{
              type: l.ItemType.CornEar
          }, {
              type: l.ItemType.CornEar
          }]
      },
      skillUse: o.SkillType.Botany,
      isFlammable: !0,
      spreadMax: 1,
      allowedTiles: [p.TerrainType.Dirt, p.TerrainType.FertileSoil, p.TerrainType.Grass],
      graphicVariation: !0,
      particles: {
          r: 148,
          g: 203,
          b: 2
      },
      canGrow: !0,
      decayMax: 2800,
      durability: 7,
      isTall: !0,
      spawnOnWorldGen: {
          [r.BiomeType.Coastal]: {
              [s.WorldZ.Overworld]: {
                  [p.TerrainType.Dirt]: 1
              }
          }
      }
  }, t.doodadDescriptions[a.DoodadType.CucumberPlant] = {
      gather: {
          [a.GrowingStage.Vegetative]: [{
              type: l.ItemType.PlantRoots
          }],
          [a.GrowingStage.Budding]: [{
              type: l.ItemType.Leaves
          }, {
              type: l.ItemType.PlantRoots
          }],
          [a.GrowingStage.Flowering]: [{
              type: l.ItemType.Leaves
          }, {
              type: l.ItemType.PlantRoots
          }]
      },
      harvest: {
          [a.GrowingStage.Ripening]: [{
              type: l.ItemType.Cucumber
          }, {
              type: l.ItemType.Cucumber
          }]
      },
      skillUse: o.SkillType.Botany,
      isFlammable: !0,
      spreadMax: 1,
      allowedTiles: [p.TerrainType.Dirt, p.TerrainType.FertileSoil, p.TerrainType.Grass],
      graphicVariation: !0,
      particles: {
          r: 95,
          g: 174,
          b: 31
      },
      canGrow: !0,
      canTrampleWhenMature: !0,
      decayMax: 2800,
      durability: 7,
      isTall: !0,
      spawnOnWorldGen: {
          [r.BiomeType.Coastal]: {
              [s.WorldZ.Overworld]: {
                  [p.TerrainType.Grass]: 1
              }
          }
      }
  }, t.doodadDescriptions[a.DoodadType.TomatoPlant] = {
      gather: {
          [a.GrowingStage.Vegetative]: [{
              type: l.ItemType.PlantRoots
          }],
          [a.GrowingStage.Budding]: [{
              type: l.ItemType.Leaves
          }, {
              type: l.ItemType.PlantRoots
          }],
          [a.GrowingStage.Flowering]: [{
              type: l.ItemType.Leaves
          }, {
              type: l.ItemType.PlantRoots
          }]
      },
      harvest: {
          [a.GrowingStage.Ripening]: [{
              type: l.ItemType.Tomato
          }, {
              type: l.ItemType.Tomato
          }]
      },
      skillUse: o.SkillType.Botany,
      isFlammable: !0,
      spreadMax: 1,
      allowedTiles: [p.TerrainType.Swamp, p.TerrainType.Dirt, p.TerrainType.FertileSoil, p.TerrainType.Grass],
      graphicVariation: !0,
      particles: {
          r: 114,
          g: 186,
          b: 0
      },
      canGrow: !0,
      canTrampleWhenMature: !0,
      decayMax: 2800,
      durability: 7,
      isTall: !0,
      spawnOnWorldGen: {
          [r.BiomeType.Coastal]: {
              [s.WorldZ.Overworld]: {
                  [p.TerrainType.Grass]: 1,
                  [p.TerrainType.Swamp]: 1
              }
          }
      }
  }, t.doodadDescriptions[a.DoodadType.Pumpkin] = {
      gather: {
          [a.GrowingStage.Budding]: [{
              type: l.ItemType.Leaves
          }],
          [a.GrowingStage.Flowering]: [{
              type: l.ItemType.Leaves
          }, {
              type: l.ItemType.Pumpkin
          }]
      },
      harvest: {
          [a.GrowingStage.Ripening]: [{
              type: l.ItemType.Pumpkin
          }]
      },
      skillUse: o.SkillType.Botany,
      isFlammable: !0,
      spreadMax: 1,
      allowedTiles: [p.TerrainType.Dirt, p.TerrainType.FertileSoil, p.TerrainType.Grass],
      graphicVariation: !0,
      particles: {
          r: 162,
          g: 198,
          b: 21
      },
      canGrow: !0,
      decayMax: 3e3,
      durability: 8,
      spawnOnWorldGen: {
          [r.BiomeType.Coastal]: {
              [s.WorldZ.Overworld]: {
                  [p.TerrainType.Dirt]: 1
              }
          }
      }
  }, t.doodadDescriptions[a.DoodadType.SugarCaneStalks] = {
      gather: {
          [a.GrowingStage.Vegetative]: [{
              type: l.ItemType.PlantRoots
          }],
          [a.GrowingStage.Budding]: [{
              type: l.ItemType.Leaves
          }, {
              type: l.ItemType.SugarCaneStalks
          }, {
              type: l.ItemType.PlantRoots
          }],
          [a.GrowingStage.Flowering]: [{
              type: l.ItemType.Leaves
          }, {
              type: l.ItemType.SugarCaneStalks,
              chance: 5
          }, {
              type: l.ItemType.SugarCaneStalks
          }, {
              type: l.ItemType.PlantRoots
          }]
      },
      harvest: {
          [a.GrowingStage.Ripening]: [{
              type: l.ItemType.SugarCaneSeeds
          }]
      },
      group: [a.DoodadTypeGroup.GatheredPlant],
      skillUse: o.SkillType.Botany,
      isFlammable: !0,
      spreadMax: 3,
      allowedTiles: [p.TerrainType.BeachSand, p.TerrainType.DesertSand, p.TerrainType.Gravel, p.TerrainType.Dirt, p.TerrainType.FertileSoil, p.TerrainType.Grass],
      graphicVariation: !0,
      particles: {
          r: 103,
          g: 185,
          b: 15
      },
      canGrow: !0,
      decayMax: 3e3,
      gatherCanHurtHands: !0,
      durability: 8,
      isTall: !0,
      spawnOnWorldGen: {
          [r.BiomeType.Arid]: {
              [s.WorldZ.Overworld]: {
                  [p.TerrainType.Gravel]: 1,
                  [p.TerrainType.BeachSand]: 1,
                  [p.TerrainType.DesertSand]: 1
              }
          }
      }
  }, t.doodadDescriptions[a.DoodadType.Wheat] = {
      gather: {
          [a.GrowingStage.Vegetative]: [{
              type: l.ItemType.PlantRoots
          }],
          [a.GrowingStage.Budding]: [{
              type: l.ItemType.PlantRoots
          }],
          [a.GrowingStage.Flowering]: [{
              type: l.ItemType.PlantRoots
          }]
      },
      harvest: {
          [a.GrowingStage.Ripening]: [{
              type: l.ItemType.BushelOfWheat,
              chance: 5
          }, {
              type: l.ItemType.BushelOfWheat
          }]
      },
      skillUse: o.SkillType.Botany,
      isFlammable: !0,
      spreadMax: 6,
      allowedTiles: [p.TerrainType.Dirt, p.TerrainType.FertileSoil, p.TerrainType.Grass],
      graphicVariation: !0,
      particles: {
          r: 161,
          g: 207,
          b: 25
      },
      growthParticles: {
          [a.GrowingStage.Ripening]: {
              r: 230,
              g: 176,
              b: 29
          }
      },
      canGrow: !0,
      decayMax: 2600,
      durability: 6,
      isTall: !0,
      spawnOnWorldGen: {
          [r.BiomeType.Coastal]: {
              [s.WorldZ.Overworld]: {
                  [p.TerrainType.Dirt]: 1
              }
          }
      }
  }, t.doodadDescriptions[a.DoodadType.CopperChest] = {
      pickUp: [l.ItemType.CopperChest],
      weightCapacity: 100,
      blockMove: !0,
      canBreak: !0,
      repairItem: l.ItemType.CopperChest,
      particles: {
          r: 225,
          g: 152,
          b: 116
      },
      reduceDurabilityOnGather: !0,
      preservationChance: .6,
      isTall: !0
  }, t.doodadDescriptions[a.DoodadType.CopperAnvil] = {
      pickUp: [l.ItemType.CopperAnvil],
      blockMove: !0,
      canBreak: !0,
      repairItem: l.ItemType.CopperAnvil,
      particles: {
          r: 88,
          g: 95,
          b: 114
      },
      group: [a.DoodadTypeGroup.Anvil],
      reduceDurabilityOnGather: !0,
      tier: {
          [a.DoodadTypeGroup.Anvil]: 2
      },
      isTall: !0
  }, t.doodadDescriptions[a.DoodadType.BarkTorchStand] = {
      pickUp: [l.ItemType.BarkTorch],
      lit: a.DoodadType.LitBarkTorchStand,
      repairItem: l.ItemType.BarkTorch,
      particles: {
          r: 132,
          g: 96,
          b: 44
      },
      reduceDurabilityOnGather: !0,
      group: [a.DoodadTypeGroup.LightDevice],
      isTall: !0,
      spawnOnWorldGen: {
          [r.BiomeType.Coastal]: {
              [s.WorldZ.Cave]: {
                  [p.TerrainType.Dirt]: 5
              }
          }
      }
  }, t.doodadDescriptions[a.DoodadType.LitBarkTorchStand] = {
      pickUp: [l.ItemType.LitBarkTorch],
      decayMax: 2e3,
      providesFire: !0,
      providesLight: 3,
      revert: a.DoodadType.BarkTorchStand,
      isAnimated: !0,
      repairItem: l.ItemType.BarkTorch,
      particles: {
          r: 132,
          g: 96,
          b: 44
      },
      reduceDurabilityOnGather: !0,
      group: [a.DoodadTypeGroup.FireSource, a.DoodadTypeGroup.LitTorch, a.DoodadTypeGroup.LightSource],
      tier: {
          [a.DoodadTypeGroup.FireSource]: 1
      },
      isTall: !0
  }, t.doodadDescriptions[a.DoodadType.TallowTorchStand] = {
      pickUp: [l.ItemType.TallowTorch],
      lit: a.DoodadType.LitTallowTorchStand,
      repairItem: l.ItemType.TallowTorch,
      particles: {
          r: 132,
          g: 96,
          b: 44
      },
      reduceDurabilityOnGather: !0,
      group: [a.DoodadTypeGroup.LightDevice],
      isTall: !0
  }, t.doodadDescriptions[a.DoodadType.LitTallowTorchStand] = {
      pickUp: [l.ItemType.LitTallowTorch],
      decayMax: 3500,
      providesFire: !0,
      providesLight: 4,
      revert: a.DoodadType.TallowTorchStand,
      isAnimated: !0,
      repairItem: l.ItemType.TallowTorch,
      particles: {
          r: 132,
          g: 96,
          b: 44
      },
      reduceDurabilityOnGather: !0,
      group: [a.DoodadTypeGroup.FireSource, a.DoodadTypeGroup.LitTorch, a.DoodadTypeGroup.LightSource],
      tier: {
          [a.DoodadTypeGroup.FireSource]: 2
      },
      isTall: !0
  }, t.doodadDescriptions[a.DoodadType.JoshuaTree] = {
      blockLos: !0,
      blockMove: !0,
      isFlammable: !0,
      graphicVariation: !0,
      particles: {
          r: 85,
          g: 116,
          b: 23
      },
      growthParticles: {
          [a.GrowingStage.Bare]: {
              r: 131,
              g: 102,
              b: 88
          }
      },
      reduceDurabilityOnGather: !0,
      skillUse: o.SkillType.Botany,
      gatherSkillUse: o.SkillType.Lumberjacking,
      isTall: !0,
      gather: {
          [a.GrowingStage.Seedling]: [{
              type: l.ItemType.JoshuaTreeLeaves
          }, {
              type: l.ItemType.PlantRoots
          }],
          [a.GrowingStage.Vegetative]: [{
              type: l.ItemType.JoshuaTreeLeaves
          }, {
              type: l.ItemType.PlantRoots
          }],
          [a.GrowingStage.Budding]: [{
              type: l.ItemType.JoshuaTreeLeaves
          }, {
              type: l.ItemType.JoshuaTreeLeaves
          }, {
              type: l.ItemType.TreeBark
          }, {
              type: l.ItemType.TreeBark
          }],
          [a.GrowingStage.Bare]: [{
              type: l.ItemType.Log,
              chance: 10
          }, {
              type: l.ItemType.Log
          }]
      },
      harvest: {
          [a.GrowingStage.Flowering]: [{
              type: l.ItemType.JoshuaTreeFlowers,
              chance: 50
          }, {
              type: l.ItemType.JoshuaTreeFlowers
          }],
          [a.GrowingStage.Ripening]: [{
              type: l.ItemType.JoshuaTreeFlowers
          }, {
              type: l.ItemType.JoshuaTreeFlowers
          }, {
              type: l.ItemType.JoshuaTreeFruit
          }, {
              type: l.ItemType.JoshuaTreeFruit,
              chance: 5
          }, {
              type: l.ItemType.JoshuaTreeFruit
          }]
      },
      canGrow: !0,
      spawnOnTerrain: [p.TerrainType.DesertSand, p.TerrainType.Gravel],
      allowedTiles: [p.TerrainType.BeachSand, p.TerrainType.DesertSand, p.TerrainType.Gravel, p.TerrainType.FertileSoil],
      decayMax: 6200,
      spreadMax: 2,
      isTree: !0,
      gatherCanHurtHands: !0,
      durability: 11,
      spawnOnWorldGen: {
          [r.BiomeType.Arid]: {
              [s.WorldZ.Overworld]: {
                  [p.TerrainType.BeachSand]: 1,
                  [p.TerrainType.DesertSand]: 1
              }
          }
      }
  }, t.doodadDescriptions[a.DoodadType.SaguaroCactus] = {
      blockLos: !0,
      blockMove: !0,
      graphicVariation: !0,
      particles: {
          r: 114,
          g: 121,
          b: 40
      },
      reduceDurabilityOnGather: !0,
      skillUse: o.SkillType.Botany,
      isTall: !0,
      gather: {
          [a.GrowingStage.Vegetative]: [{
              type: l.ItemType.CactusSpines
          }, {
              type: l.ItemType.SaguaroCactusChunk
          }],
          [a.GrowingStage.Budding]: [{
              type: l.ItemType.CactusSpines
          }, {
              type: l.ItemType.CactusSpines
          }, {
              type: l.ItemType.SaguaroCactusChunk,
              chance: 75
          }, {
              type: l.ItemType.SaguaroCactusChunk
          }],
          [a.GrowingStage.Flowering]: [{
              type: l.ItemType.CactusSpines
          }, {
              type: l.ItemType.CactusSpines,
              chance: 50
          }, {
              type: l.ItemType.CactusSpines
          }, {
              type: l.ItemType.SaguaroCactusChunk
          }, {
              type: l.ItemType.SaguaroCactusChunk
          }]
      },
      harvest: {
          [a.GrowingStage.Ripening]: [{
              type: l.ItemType.SaguaroCactusFruit,
              chance: 75
          }, {
              type: l.ItemType.SaguaroCactusFruit
          }, {
              type: l.ItemType.SaguaroCactusFruit
          }]
      },
      canGrow: !0,
      allowedTiles: [p.TerrainType.BeachSand, p.TerrainType.DesertSand, p.TerrainType.Gravel, p.TerrainType.FertileSoil],
      decayMax: 4100,
      spreadMax: 1,
      gatherCanHurtHands: !0,
      durability: 8,
      spawnOnWorldGen: {
          [r.BiomeType.Arid]: {
              [s.WorldZ.Overworld]: {
                  [p.TerrainType.BeachSand]: 2,
                  [p.TerrainType.DesertSand]: 2
              }
          }
      }
  }, t.doodadDescriptions[a.DoodadType.AloeVera] = {
      graphicVariation: !0,
      particles: {
          r: 87,
          g: 171,
          b: 66
      },
      reduceDurabilityOnGather: !0,
      skillUse: o.SkillType.Botany,
      isTall: !0,
      gather: {
          [a.GrowingStage.Vegetative]: [{
              type: l.ItemType.AloeVeraLeaves
          }, {
              type: l.ItemType.PlantRoots
          }],
          [a.GrowingStage.Budding]: [{
              type: l.ItemType.AloeVeraLeaves
          }, {
              type: l.ItemType.AloeVeraLeaves
          }, {
              type: l.ItemType.PlantRoots
          }],
          [a.GrowingStage.Flowering]: [{
              type: l.ItemType.AloeVeraLeaves
          }, {
              type: l.ItemType.AloeVeraLeaves,
              chance: 25
          }, {
              type: l.ItemType.AloeVeraLeaves
          }, {
              type: l.ItemType.PlantRoots
          }]
      },
      harvest: {
          [a.GrowingStage.Ripening]: [{
              type: l.ItemType.AloeVeraSeeds
          }]
      },
      group: [a.DoodadTypeGroup.GatheredPlant],
      canGrow: !0,
      allowedTiles: [p.TerrainType.BeachSand, p.TerrainType.DesertSand, p.TerrainType.Gravel, p.TerrainType.FertileSoil],
      decayMax: 3300,
      spreadMax: 1,
      gatherCanHurtHands: !0,
      durability: 7,
      spawnOnWorldGen: {
          [r.BiomeType.Arid]: {
              [s.WorldZ.Overworld]: {
                  [p.TerrainType.Gravel]: 1,
                  [p.TerrainType.BeachSand]: 1,
                  [p.TerrainType.DesertSand]: 1
              }
          }
      }
  }, t.doodadDescriptions[a.DoodadType.TallowCandle] = {
      pickUp: [l.ItemType.TallowCandle],
      lit: a.DoodadType.LitTallowCandle,
      repairItem: l.ItemType.TallowCandle,
      particles: {
          r: 236,
          g: 210,
          b: 157
      },
      reduceDurabilityOnGather: !0,
      group: [a.DoodadTypeGroup.LightDevice]
  }, t.doodadDescriptions[a.DoodadType.LitTallowCandle] = {
      pickUp: [l.ItemType.LitTallowCandle],
      decayMax: 5e3,
      providesFire: !0,
      providesLight: 4,
      revert: a.DoodadType.TallowCandle,
      isAnimated: !0,
      repairItem: l.ItemType.TallowCandle,
      particles: {
          r: 236,
          g: 210,
          b: 157
      },
      reduceDurabilityOnGather: !0,
      group: [a.DoodadTypeGroup.FireSource, a.DoodadTypeGroup.LightSource],
      tier: {
          [a.DoodadTypeGroup.FireSource]: 2
      }
  }, t.doodadDescriptions[a.DoodadType.CottonBedroll] = {
      pickUp: [l.ItemType.CottonBedroll],
      actionTypes: [i.ActionType.Rest, i.ActionType.Sleep],
      isFlammable: !0,
      repairItem: l.ItemType.CottonBedroll,
      particles: {
          r: 232,
          g: 232,
          b: 232
      },
      reduceDurabilityOnGather: !0
  }, t.doodadDescriptions[a.DoodadType.FeatherBedroll] = {
      pickUp: [l.ItemType.FeatherBedroll],
      actionTypes: [i.ActionType.Rest, i.ActionType.Sleep],
      isFlammable: !0,
      repairItem: l.ItemType.FeatherBedroll,
      particles: {
          r: 246,
          g: 243,
          b: 246
      },
      reduceDurabilityOnGather: !0,
      spawnOnWorldGen: {
          [r.BiomeType.Arid]: {
              [s.WorldZ.Overworld]: {
                  [p.TerrainType.SandstoneFlooring]: 1,
                  [p.TerrainType.ClayFlooring]: 1
              }
          }
      }
  }, t.doodadDescriptions[a.DoodadType.Hammock] = {
      pickUp: [l.ItemType.Hammock],
      actionTypes: [i.ActionType.Rest, i.ActionType.Sleep],
      isTall: !0,
      isFlammable: !0,
      repairItem: l.ItemType.Hammock,
      particles: {
          r: 133,
          g: 77,
          b: 22
      },
      reduceDurabilityOnGather: !0
  }, t.doodadDescriptions[a.DoodadType.LeafBedroll] = {
      pickUp: [l.ItemType.LeafBedroll],
      actionTypes: [i.ActionType.Rest, i.ActionType.Sleep],
      isFlammable: !0,
      repairItem: l.ItemType.LeafBedroll,
      particles: {
          r: 85,
          g: 168,
          b: 41
      },
      reduceDurabilityOnGather: !0,
      spawnOnWorldGen: {
          [r.BiomeType.Coastal]: {
              [s.WorldZ.Cave]: {
                  [p.TerrainType.WoodenFlooring]: 5,
                  [p.TerrainType.CobblestoneFlooring]: 5
              },
              [s.WorldZ.Overworld]: {
                  [p.TerrainType.WoodenFlooring]: 1,
                  [p.TerrainType.CobblestoneFlooring]: 1
              }
          }
      }
  }, t.doodadDescriptions[a.DoodadType.HitchingPost] = {
      pickUp: [l.ItemType.HitchingPost],
      repairItem: l.ItemType.HitchingPost,
      particles: {
          r: 132,
          g: 96,
          b: 44
      },
      reduceDurabilityOnGather: !0,
      blockMove: !0,
      group: [a.DoodadTypeGroup.Hitch],
      canBreak: !0,
      isTall: !0
  }, t.doodadDescriptions[a.DoodadType.ClayWell] = {
      pickUp: [l.ItemType.ClayWell],
      repairItem: l.ItemType.ClayWell,
      particles: {
          r: 200,
          g: 205,
          b: 207
      },
      reduceDurabilityOnGather: !0,
      group: [a.DoodadTypeGroup.Well],
      isTall: !0,
      blockMove: !0,
      canBreak: !0,
      spawnOnWorldGen: {
          [r.BiomeType.Arid]: {
              [s.WorldZ.Overworld]: {
                  [p.TerrainType.ClayFlooring]: 1
              }
          }
      }
  }, t.doodadDescriptions[a.DoodadType.SandstoneWell] = {
      pickUp: [l.ItemType.SandstoneWell],
      repairItem: l.ItemType.SandstoneWell,
      particles: {
          r: 199,
          g: 156,
          b: 128
      },
      reduceDurabilityOnGather: !0,
      group: [a.DoodadTypeGroup.Well],
      isTall: !0,
      blockMove: !0,
      canBreak: !0,
      spawnOnWorldGen: {
          [r.BiomeType.Arid]: {
              [s.WorldZ.Overworld]: {
                  [p.TerrainType.SandstoneFlooring]: 1
              }
          }
      }
  }, t.doodadDescriptions[a.DoodadType.StoneWell] = {
      pickUp: [l.ItemType.StoneWell],
      repairItem: l.ItemType.StoneWell,
      particles: {
          r: 130,
          g: 128,
          b: 128
      },
      reduceDurabilityOnGather: !0,
      group: [a.DoodadTypeGroup.Well],
      isTall: !0,
      blockMove: !0,
      canBreak: !0
  }, t.doodadDescriptions[a.DoodadType.AshCementWall] = {
      pickUp: [l.ItemType.AshCementWall],
      blockMove: !0,
      canBreak: !0,
      blockJump: !0,
      repairItem: l.ItemType.AshCementWall,
      particles: {
          r: 136,
          g: 134,
          b: 132
      },
      reduceDurabilityOnGather: !0,
      disableDrop: !0,
      isWall: !0
  }, t.doodadDescriptions[a.DoodadType.SpruceTreeWithSnow] = {
      blockLos: !0,
      blockMove: !0,
      graphicVariation: !0,
      particles: {
          r: 201,
          g: 224,
          b: 228
      },
      skillUse: o.SkillType.Botany,
      gatherSkillUse: o.SkillType.Lumberjacking,
      isTall: !0,
      gather: {
          [a.GrowingStage.Seedling]: [{
              type: l.ItemType.PileOfSnow
          }],
          [a.GrowingStage.Vegetative]: [{
              type: l.ItemType.PileOfSnow,
              chance: 25
          }, {
              type: l.ItemType.PileOfSnow
          }],
          [a.GrowingStage.Budding]: [{
              type: l.ItemType.PileOfSnow
          }, {
              type: l.ItemType.PileOfSnow
          }],
          [a.GrowingStage.Flowering]: [{
              type: l.ItemType.PileOfSnow
          }, {
              type: l.ItemType.PileOfSnow
          }],
          [a.GrowingStage.Ripening]: [{
              type: l.ItemType.PileOfSnow
          }, {
              type: l.ItemType.PileOfSnow
          }],
          [a.GrowingStage.Bare]: [{
              type: l.ItemType.PileOfSnow
          }, {
              type: l.ItemType.PileOfSnow
          }]
      },
      group: [a.DoodadTypeGroup.GatheredPlant],
      canGrow: !0,
      spawnOnTerrain: [p.TerrainType.Dirt, p.TerrainType.Snow],
      allowedTiles: [p.TerrainType.Dirt, p.TerrainType.Grass, p.TerrainType.FertileSoil, p.TerrainType.Snow],
      decayMax: 6200,
      isTree: !0,
      durability: 13,
      leftOver: a.DoodadType.SpruceTree
  }, t.doodadDescriptions[a.DoodadType.CrowberryShrub] = {
      gather: {
          [a.GrowingStage.Vegetative]: [{
              type: l.ItemType.PlantRoots
          }],
          [a.GrowingStage.Budding]: [{
              type: l.ItemType.PlantRoots
          }],
          [a.GrowingStage.Flowering]: [{
              type: l.ItemType.PlantRoots
          }]
      },
      harvest: {
          [a.GrowingStage.Ripening]: [{
              type: l.ItemType.Crowberries
          }, {
              type: l.ItemType.Crowberries
          }]
      },
      skillUse: o.SkillType.Botany,
      isTall: !0,
      spreadMax: 1,
      allowedTiles: [p.TerrainType.Dirt, p.TerrainType.FertileSoil, p.TerrainType.Grass],
      isFlammable: !0,
      graphicVariation: !0,
      particles: {
          r: 18,
          g: 152,
          b: 34
      },
      canGrow: !0,
      decayMax: 3200,
      durability: 8,
      spawnOnWorldGen: {
          [r.BiomeType.IceCap]: {
              [s.WorldZ.Overworld]: {
                  [p.TerrainType.Grass]: 1,
                  [p.TerrainType.Dirt]: 1
              }
          }
      }
  }, t.doodadDescriptions[a.DoodadType.WinterberryShrub] = {
      gather: {
          [a.GrowingStage.Vegetative]: [{
              type: l.ItemType.PlantRoots
          }],
          [a.GrowingStage.Budding]: [{
              type: l.ItemType.Leaves
          }, {
              type: l.ItemType.Twigs
          }],
          [a.GrowingStage.Flowering]: [{
              type: l.ItemType.Leaves
          }, {
              type: l.ItemType.Twigs
          }, {
              type: l.ItemType.Winterberries
          }, {
              type: l.ItemType.Winterberries
          }],
          [a.GrowingStage.Ripening]: [{
              type: l.ItemType.Twigs
          }, {
              type: l.ItemType.Winterberries,
              chance: 90
          }, {
              type: l.ItemType.Winterberries
          }, {
              type: l.ItemType.Winterberries
          }],
          [a.GrowingStage.Bare]: [{
              type: l.ItemType.Twigs,
              chance: 90
          }, {
              type: l.ItemType.Twigs
          }, {
              type: l.ItemType.PlantRoots
          }]
      },
      skillUse: o.SkillType.Botany,
      isTall: !0,
      spreadMax: 2,
      allowedTiles: [p.TerrainType.Dirt, p.TerrainType.FertileSoil, p.TerrainType.Grass],
      isFlammable: !0,
      graphicVariation: !0,
      particles: {
          r: 0,
          g: 153,
          b: 54
      },
      growthParticles: {
          [a.GrowingStage.Flowering]: {
              r: 192,
              g: 146,
              b: 109
          }
      },
      canGrow: !0,
      decayMax: 2900,
      durability: 8,
      spawnOnWorldGen: {
          [r.BiomeType.IceCap]: {
              [s.WorldZ.Overworld]: {
                  [p.TerrainType.Grass]: 1,
                  [p.TerrainType.Dirt]: 1,
                  [p.TerrainType.Snow]: 1
              }
          }
      },
      group: [a.DoodadTypeGroup.GatheredPlant],
      isTree: !0
  }, t.doodadDescriptions[a.DoodadType.ArcticPoppies] = {
      spreadMax: 3,
      gather: {
          [a.GrowingStage.Vegetative]: [{
              type: l.ItemType.PlantRoots
          }],
          [a.GrowingStage.Budding]: [{
              type: l.ItemType.ArcticPoppies,
              chance: 25
          }, {
              type: l.ItemType.PlantRoots
          }]
      },
      harvest: {
          [a.GrowingStage.Flowering]: [{
              type: l.ItemType.ArcticPoppies
          }, {
              type: l.ItemType.ArcticPoppies,
              chance: 50
          }, {
              type: l.ItemType.ArcticPoppies
          }],
          [a.GrowingStage.Ripening]: [{
              type: l.ItemType.ArcticPoppies,
              chance: 15
          }, {
              type: l.ItemType.ArcticPoppySeeds
          }]
      },
      skillUse: o.SkillType.Botany,
      isTall: !0,
      allowedTiles: [p.TerrainType.Dirt, p.TerrainType.FertileSoil, p.TerrainType.Grass],
      canTrampleWhenMature: !0,
      isFlammable: !0,
      graphicVariation: !0,
      particles: {
          r: 28,
          g: 144,
          b: 2
      },
      growthParticles: {
          [a.GrowingStage.Flowering]: {
              r: 237,
              g: 223,
              b: 0
          }
      },
      canGrow: !0,
      decayMax: 2600,
      durability: 6,
      spawnOnWorldGen: {
          [r.BiomeType.IceCap]: {
              [s.WorldZ.Overworld]: {
                  [p.TerrainType.Grass]: 1,
                  [p.TerrainType.Dirt]: 1
              }
          }
      }
  }, t.doodadDescriptions[a.DoodadType.LockedCopperChest] = {
      pickUp: [l.ItemType.CopperChest],
      blockMove: !0,
      canBreak: !0,
      particles: {
          r: 225,
          g: 152,
          b: 116
      },
      durability: 50,
      isTall: !0,
      spawnOnWorldGen: {
          [r.BiomeType.Coastal]: {
              [s.WorldZ.Cave]: {
                  [p.TerrainType.RockGround]: 1,
                  [p.TerrainType.Dirt]: 1,
                  [p.TerrainType.Gravel]: 1,
                  [p.TerrainType.WoodenFlooring]: 1,
                  [p.TerrainType.CobblestoneFlooring]: 1
              }
          },
          [r.BiomeType.Arid]: {
              [s.WorldZ.Cave]: {
                  [p.TerrainType.SandstoneGround]: 2,
                  [p.TerrainType.DesertSand]: 2,
                  [p.TerrainType.Gravel]: 2
              }
          }
      },
      group: [a.DoodadTypeGroup.LockedChest],
      lockedChest: {
          unlockedDoodadType: a.DoodadType.CopperChest,
          lockPickingDifficulty: 25,
          lootGroups: [d.LootGroupType.High, d.LootGroupType.ChestMedium, d.LootGroupType.ChestLow, d.LootGroupType.ChestLow],
          lootQuality: 200,
          guardiansSpawned: 1
      }
  }, t.doodadDescriptions[a.DoodadType.LockedWroughtIronChest] = {
      pickUp: [l.ItemType.WroughtIronChest],
      blockMove: !0,
      canBreak: !0,
      particles: {
          r: 88,
          g: 95,
          b: 114
      },
      durability: 100,
      isTall: !0,
      spawnOnWorldGen: {
          [r.BiomeType.Arid]: {
              [s.WorldZ.Cave]: {
                  [p.TerrainType.SandstoneGround]: 1,
                  [p.TerrainType.DesertSand]: 1,
                  [p.TerrainType.Gravel]: 1
              }
          },
          [r.BiomeType.IceCap]: {
              [s.WorldZ.Cave]: {
                  [p.TerrainType.RockGround]: 3,
                  [p.TerrainType.Dirt]: 3
              }
          }
      },
      group: [a.DoodadTypeGroup.LockedChest],
      lockedChest: {
          unlockedDoodadType: a.DoodadType.WroughtIronChest,
          lockPickingDifficulty: 50,
          lootGroups: [d.LootGroupType.High, d.LootGroupType.VeryHigh, d.LootGroupType.ChestMedium],
          lootQuality: 225,
          guardiansSpawned: 2
      }
  }, t.doodadDescriptions[a.DoodadType.LockedIronChest] = {
      pickUp: [l.ItemType.IronChest],
      blockMove: !0,
      canBreak: !0,
      particles: {
          r: 220,
          g: 223,
          b: 231
      },
      durability: 200,
      isTall: !0,
      spawnOnWorldGen: {
          [r.BiomeType.IceCap]: {
              [s.WorldZ.Cave]: {
                  [p.TerrainType.RockGround]: 1,
                  [p.TerrainType.Dirt]: 1
              }
          }
      },
      group: [a.DoodadTypeGroup.LockedChest],
      lockedChest: {
          unlockedDoodadType: a.DoodadType.IronChest,
          lockPickingDifficulty: 75,
          lootGroups: [d.LootGroupType.VeryHigh, d.LootGroupType.VeryHigh, d.LootGroupType.ChestMedium, d.LootGroupType.ChestMedium, d.LootGroupType.ChestHigh],
          lootQuality: 250,
          guardiansSpawned: 3
      }
  }, t.doodadDescriptions[a.DoodadType.LockedOrnateWoodenChest] = {
      pickUp: [l.ItemType.OrnateWoodenChest],
      blockMove: !0,
      canBreak: !0,
      particles: {
          r: 132,
          g: 96,
          b: 44
      },
      burnsLike: [l.ItemType.WoodenChest],
      durability: 50,
      isTall: !0,
      group: [a.DoodadTypeGroup.LockedChest],
      isFlammable: !0,
      lockedChest: {
          unlockedDoodadType: a.DoodadType.OrnateWoodenChest,
          lockPickingDifficulty: 100,
          lootGroups: [d.LootGroupType.ChestHigh],
          lootQuality: 300,
          guardiansSpawned: 4
      }
  }
}))