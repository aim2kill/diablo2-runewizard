//(New Skill, Lower skill lv, check later, +X.X/lvl to Strength)

const runewordsDesc: TRunewordMeta = {
  "Ancient's Pledge": `
  +50% Enhanced Defense
  Magic Resist +13%
  Cold Resist +43%
  Fire Resist +30%
  Lightning Resist +30%
  Poison Resist +30%
  10% Damage Goes To Mana
  `,

  Black: `
  +10-15% Increased Attack Speed (varies)
  +100-120% Enhanced Damage (varies)
  +200 To Attack Rating
  Adds 3-14 Cold Damage - Cold Duration 3 Seconds
  40% Chance Of Crushing Blow
  +8 To Vitality
  Knockback
  Magic Damage Reduced By 7
  Level 4 Corpse Explosion (12 Charges)
  `,

  Fury: `
  +280-300% Enhanced Damage (varies)
  40% Increased Attack Speed
  Prevent Monster Heal
  +33-66% Chance Of Open Wounds (varies)
  +2-5 to Frenzy (varies)
  33% Deadly Strike
  Ignore Target's Defense
  -25% Target Defense
  20% Bonus To Attack Rating
  6% Life Stolen Per Hit
  +2% to Experience Gained
  `,

  "Holy Thunder": `
  Level 5 Holy Shock Aura When Equipped
  +80-100% Enhanced Damage (varies)
  -25% Target Defense
  Adds 5-30 Fire Damage
  Adds 21-110 Lightning Damage
  +61 Poison Damage Over 5 Seconds
  +15 To Maximum Damage
  Lightning Resistance +60%
  +5 To Maximum Lightning Resistance
  Poison Length Reduced by 75%
  `,

  Honor: `
  +160-190% Enhanced Damage
  +9 To Minimum Damage
  +9 To Maximum Damage
  25% Deadly Strike
	20% Bonus to Attack Rating
	+45-55% Faster Hit Recovery
	+15-25% Increased Attack Speed
  7% Life Stolen Per Hit
  +1 To Light Radius
  +2 To Mana After Each Kill
  Repairs 1 durability in 25 seconds
  `,

  "King's Grace": `
  +1 to All Skills
  +130-180% Enhanced Damage (varies)
  +100-150% Damage To Demons (varies)
  +100-150% Damage To Undead (varies)
  +100-150% Bonus to Attack Rating (varies)
  Adds 5-30 Fire Damage
  Adds 3-14 Cold Damage - 3 Second Duration
  7% Life Stolen Per Hit
  `,

  Leaf: `
  Adds 5-30 Fire Damage
  +2-3 To Fire Skills
  +2-3 To Fire Bolt (Sorceress Only)
  +2-3 To Inferno (Sorceress Only)
  +2-3 To Warmth (Sorceress Only)
  +2 To Mana After Each Kill
  + (2 Per Character Level) +2-198 To Defense (Based On Character Level)
  Cold Resist +33%
  `,

  Lionheart: `
  +90-110% Enhanced Damage
  +25 To Strength
  +15 To Dexterity
  +20 To Vitality
  +10 To Energy
  +50 To Life
  All Resistances +30
  Requirements -15%
  `,

  Lore: `
  +1 To All Skill Levels
  +10 To Energy
  +2 To Mana After Each Kill
  Lightning Resist +12%
  Damage Reduced By 7
  +2 To Light Radius
  `,

  Malice: `
  +33-66% Enhanced Damage
  +9 To Maximum Damage
  +75-100% Chance Of Open Wounds
  -25% Target Defense
  -100 To Monster Defense Per Hit
  Prevent Monster Heal
  +50 To Attack Rating
  7% Life stolen per hit
  Drain Life -5
  Repairs 1 durability in 25 seconds
  `,

  Melody: `
  +50-80% Enhanced Damage
  +300% Damage To Undead
  +2-3 To Bow and Crossbow Skills (Amazon Only)
  +2-3 To Critical Strike (Amazon Only)
  +2-3 To Dodge (Amazon Only)
  +2-3 To Slow Missiles (Amazon Only)
  20% Increased Attack Speed
  +8 To Dexterity
  Knockback
  `,

  Memory: `
  +2-3 to Sorceress Skill Levels
  +23-33% Faster Cast Rate
  +9 To Minimum Damage
  -25% Target Defense
  Increase Maximum Mana 15-20% (varies)
  +2-3 Energy Shield (Sorceress Only)
  +2-3 Static Field (Sorceress Only)
  +8 To Energy
  +8 To Vitality
  Magic Damage Reduced By 7
  +50% Enhanced Defense
  `,

  Nadir: `
  +50% Enhanced Defense
  +25 Defense
  +30 Defense vs. Missile
  Level 13 Cloak of Shadows (9 Charges)
  +2 To Mana After Each Kill
  +5-10 To Strength (varies)
  -3 To Light Radius
  Magic Damage Reduced by 4-6 (varies)
  Damage Reduced by 4-6 (varies)
  `,

  Radiance: `
  +30 Defense Vs. Missile
  +10 To Energy
  +10 To Vitality
  +33 To Mana
  +33 to Life
  Magic Damage Reduced By 5
  Damage Reduced By 7
  15% Damage Goes To Mana
  +5 To Light Radius
  `,

  Rhyme: `
  15-20% Increased Chance of Blocking
  30-35% Faster Block Rate
  +25-50% Enhanced Defense
  All Resistances +20-25
  Regenerate Mana 15%
  Cannot Be Frozen
  35% Extra Gold From Monsters
  25% Better Chance Of Getting Magic Items
  `,

  Silence: `
  22% Chance to cast level 25 Amplify Damage on striking
  +2-3 To All Skills
  +30-40% Increased Attack Speed
  200% Enhanced Damage
  +75% Damage To Undead
  +100 To Attack Rating Against Undead
  11% Mana Stolen Per Hit
  All Resistances +75
  +2 To Mana After Each Kill
  30% Better Chance Of Getting Magic Items
  Requirements -20%
  +2% to Experience Gained
  `,

  Smoke: `
  10% Chance To Cast Level 13 Cloak of Shadows When You Kill An Enemy
  20% Faster Hit Recovery
  +75% Enhanced Defense
  +280 Defense Vs. Missile
  +(0.24-0.49/lvl) to Strength (Based on Character Level)
  +10 To Energy
  All Resistances +40-50
  `,

  Stealth: `
  25% Faster Run/Walk
  20-25% Faster Cast Rate
  20-25% Faster Hit Recovery
  +5-7 To Strength
  +5-7 To Dexterity
  Regenerate Mana 15%
  Poison Resist +18%
  Magic Damage Reduced By 3
  `,

  Steel: `
  25% Increased Attack Speed
  20% Enhanced Damage
  Damage +3
  +50 To Attack Rating
  5% Chance of Crushing Blow
  50% Chance Of Open Wounds
  +2 To Mana After Each Kill
  +1 To Light Radius
  Repairs 1 durability in 25 seconds
  `,

  Strength: `
  90-110% Enhanced Damage
  7% Life Stolen Per Hit
  25% Chance Of Crushing Blow
  +20 To Strength
  +10 To Vitality
  +2 To Mana After Each Kill
  Repairs 1 durability in 25 seconds
  `,

  Venom: `
  +1-3 to Poison Skills
  +(40-55)% Increased Attack Speed
  +(190-240)% Enhanced Damage
  Ignore Target's Defense
  +61 Poison Damage Over 5 Seconds
  7% Mana Stolen Per Hit
	-(20-30)% to Enemy Poison Resistance
  +10-15 to Venom
  Prevent Monster Heal
  `,

  Wealth: `
  +20% Faster Run/Walk
	+10% Increased Attack Speed
  +10 To Dexterity
  +2 To Mana After Each Kill
  300% Extra Gold From Monsters
  1.0%/lvl Better Chance of Getting Magic Items (Based on Character Level)
  `,

  White: `
  +3 To Poison And Bone Skills (Necromancer Only)
  20% Faster Cast Rate
  +2 To Bone Spear (Necromancer Only)
  +4 To Skeleton Mastery (Necromancer Only)
  +3 To Bone Armor (Necromancer Only)
  +8 To Vitality
  +15-25 To Mana
  Magic Damage Reduced By 4
  +2 Life after each Kill
  `,

  Zephyr: `
  14% Chance To Cast Level 2 Twister On Striking
  25% Faster Run/Walk
  25% Increased Attack Speed
	Piercing Attack
  +100-125% Enhanced Damage
  -25% Target Defense
  20% Bonus to Attack Rating
  Adds 1-50 Lightning Damage
	+30 to Mana
  
  `,

  Beast: `
  Level 9-12 Fanaticism Aura When Equipped
  +40% Increased Attack Speed
  +240-270% Enhanced Damage (varies)
  20% Chance of Crushing Blow
  25% Chance of Open Wounds
  +3-5 To Werebear
  +3-5 To Lycanthropy
  +3-5 to Hunger
  Prevent Monster Heal
  +25-40 To Strength (varies)
  +8 To Energy
  +2 To Mana After Each Kill
  +1% to Experience Gained
  `,

  Bramble: `
  Level 15-30 Thorns Aura When Equipped (varies)
  +50% Faster Hit Recovery
  +25-50% To Poison Skill Damage (varies)
  +300-400 Defense (varies)
  Increase Maximum Mana 3%
  Regenerate Mana 15%
  +3% To Maximum Cold Resist
  Fire Resist +12%
  Poison Resist +100%
  +13 Life After Each Kill
  +2% to Experience Gained
  `,

  "Breath of the Dying": `
  25% Chance To Cast Level 25 Poison Nova When You Kill An Enemy
  Indestructible
  +1 to All Skills
  +50-60% Increased Attack Speed (varies)
  +350-400% Enhanced Damage (varies)
  +200% Damage To Undead
  +200% Damage to Demons
  -25% Target Defense
  +50 To Attack Rating
  +100 To Attack Rating Against Undead
  7% Mana Stolen Per Hit
  12-15% Life Stolen Per Hit (varies)
<U>+25-30 To All Attributes</U>
  +1 To Light Radius
  Requirements -20%
  +2% to Experience Gained
  `,

  "Call to Arms": `
  +1-2 To All Skills
  +30-40% Increased Attack Speed (varies)
  +200-240% Enhanced Damage (varies)
  Adds 5-30 Fire Damage
  7% Life Stolen Per Hit
  +1 To Battle Command
  +1 To Battle Orders
  +1 To Battle Cry
  Prevent Monster Heal
  Replenish Life +12
  30% Better Chance of Getting Magic Items
  +2% to Experience Gained
  `,

  Chaos: `
  15% Chance To Cast Level 11 Frozen Orb On Striking
  +35-40% Increased Attack Speed
  +290-340% Enhanced Damage (varies)
  Adds 216-471 Magic Damage
  25% Chance of Open Wounds
  +3-5 To Whirlwind
  +8 To Strength
  +15 Life After Each Demon Kill
  +1% to Experience Gained
  Repairs 1 Durability in 2 Seconds
  `,

  "Chains of Honor": `
  +2 To All Skills
  +200% Damage To Demons
  +100% Damage To Undead
  8% Life Stolen Per Hit
  +70-90% Enhanced Defense (varies)
  +20 To Strength
  All Resistances +45-60 (varies)
  Damage Reduced By 5%
  25% Better Chance of Getting Magic Items
  +2 Life after each Kill
  +2% to Experience Gained
  `,

  "Crescent Moon": `
  34% Chance To Cast Level 34 Chain Lightning On Striking
  25% Chance To Cast Level 25 Static Field On Striking
  Level (14-16) Holy Shock Aura When Equipped
  +15% Increased Attack Speed
  +180-220% Enhanced Damage (varies)
  Ignore Target's Defense
  -15% To Enemy Lightning Resistance
  25% Chance of Open Wounds
  +12-18 Magic Absorb (varies)
  +2 To Mana After Each Kill
  `,

  Delirium: `
  6% Chance To Cast Level 14 Mind Blast When Struck
  14% Chance To Cast Level 13 Terror When Struck
  11% Chance To Cast Level 18 Confuse On Striking
  +2 To All Skills
  +261 Defense
  +10 To Vitality
  25% Extra Gold From Monsters
  25% Better Chance of Getting Magic Items
  Level 17 Attract (60 Charges)
  +1% to Experience Gained
  `,

  Doom: `
  20% Chance To Cast Level 40 Blizzard On Striking
  Level 12 Holy Freeze Aura When Equipped
  +2 To All Skills
  +45% Increased Attack Speed
  +330-360% Enhanced Damage (varies)
  -(50-70)% To Enemy Cold Resistance (varies)
  20% Deadly Strike
  25% Chance of Open Wounds
  Prevent Monster Heal
  Slows Target by 20%
  Requirements -20%
  +3% to Experience Gained
  `,

  Duress: `
  +35% Faster Hit Recovery
  +80-100% Enhanced Damage (varies)
  15% Chance of Crushing Blow
  33% Chance of Open Wounds
  +150-200% Enhanced Defense (varies)
  Magic Resist +9%
  Cold Resist +21%
  Lightning Resist +9%
  Fire Resist +9%
  Poison Resist +9%
  +(15-20) to Mana after each Kill
	+(9-15) Life after each Kill
  `,

  Enigma: `
  +1-2 To All Skills
  +35-45% Faster Run/Walk
  +1 To Teleport*
  +750-775 Defense (varies)
  Increase Maximum Life 3%
  All Resistances +9
  +10-15 Life After Each Kill
  15% Damage Taken Goes To Mana
  +0.5%/lvl Better Chance of Getting Magic Items (Based on Character Level)
  Damage Reduced by 7
  +1% to Experience Gained
  `,

  Eternity: `
  Indestructible
  +260-310% Enhanced Damage (varies)
  30% Increased Attack Speed
  +9 To Minimum Damage
  7% Life Stolen Per Hit
  20% Chance of Crushing Blow
  Hit Blinds Target
  Slows Target By 33%
  Cannot Be Frozen
  30% Better Chance Of Getting Magic Items
  Level 8 Revive (88 Charges)
  +12% to Experience Gained
  `,

  Exile: `
  15% Chance To Cast Level 5 Life Tap On Striking
  Level 13-16 Defiance Aura When Equipped (varies)
  +2 To Offensive Auras (Paladin Only)
  +30% Faster Block Rate
  Freezes Target
  +220-260% Enhanced Defense (varies)
  +2 Life after each Kill
  +5% To Maximum Cold Resist
  +5% To Maximum Fire Resist
  25% Better Chance Of Getting Magic Items
  Repairs 1 Durability in 4 Seconds
  +6% to Experience Gained
  `,

  Famine: `
  +30% Increased Attack Speed
  +320-350% Enhanced Damage (varies)
  Ignore Target's Defense
  Adds 200-210 Magic Damage
  Adds 200-210 Fire Damage
  Adds 64-260 Lightning Damage
  Adds 200-210 Cold Damage
  +10-12% Life Stolen Per Hit (varies)
  Prevent Monster Heal
  +8 To Strength
  +35-50% Deadly Strike (varies)
  +(10-20) to all Attributes
  +2% to Experience Gained
  `,

  Gloom: `
  15% Chance To Cast Level 3 Dim Vision When Struck
  +10% Faster Hit Recovery
  +200-260% Enhanced Defense (varies)
  +10 To Strength
  All Resistances +45
  Half Freeze Duration
  5% Damage Taken Goes To Mana
  -3 To Light Radius
  `,

  "Hand of Justice": `
  100% Chance To Cast Level 36 Blaze When You Level-Up
  100% Chance To Cast Level 48 Meteor When You Die
  Level 16 Holy Fire Aura When Equipped
  +33% Increased Attack Speed
  +280-330% Enhanced Damage (varies)
  Ignore Target's Defense
  7% Life Stolen Per Hit
  -(20-25)% To Enemy Fire Resistance
  20% Deadly Strike
  Hit Blinds Target
  Slows Target by 20%
  +3% to Experience Gained
  `,

  "Heart of the Oak": `
  +3 To All Skills
  +40% Faster Cast Rate
  +75% Damage To Demons
  +100 To Attack Rating Against Demons
  Adds 3-14 Cold Damage, 3 sec. Duration (Normal)
  7% Mana Stolen Per Hit
  +8 To Dexterity
  Replenish Life +20
  Increase Maximum Mana 15%
  All Resistances +30-40 (varies)
  Level 14 Raven (60 Charges)
  +1% to Experience Gained
  `,

  Kingslayer: `
  +30% Increased Attack Speed
  +260-300% Enhanced Damage (varies)
  -25% Target Defense
  20% Bonus To Attack Rating
  33% Chance of Crushing Blow
  +35-50% Chance of Open Wounds
  +1-3 To Berserk
  Prevent Monster Heal
  +8 To Strength
  100-150% Extra Gold From Monsters
  +1% to Experience Gained
  `,

  Passion: `
  +25% Increased Attack Speed
  +160-210% Enhanced Damage (varies)
  50-80% Bonus To Attack Rating (varies)
  +75% Damage To Undead
  +100 To Attack Rating Against Undead
  Adds 1-50 Lightning Damage
  +1 To Berserk
  +1 To Zeal
  Hit Blinds Target +10
  35% Extra Gold From Monsters
  +2 Life after each Kill
  Level 3 Heart of Wolverine (12 Charges)
  `,

  Prudence: `
  +25% Faster Hit Recovery
  +140-170% Enhanced Defense (varies)
  All Resistances +25-35 (varies)
  Damage Reduced by 24
  Magic Damage Reduced by 17
  +2 To Mana After Each Kill
  Cannot Be Frozen
  Repairs Durability 1 In 4 Seconds
  +1% to Experience Gained
  `,

  Sanctuary: `
  Level 10 Sanctuary Aura When Equipped
  +20% Faster Hit Recovery
  +20% Faster Block Rate
  20% Increased Chance of Blocking
  +10-15% To Magic Skill Damage (varies)
  +130-160% Enhanced Defense (varies)
  +250 Defense vs. Missile
  +15 To Dexterity
  All Resistances +50-70 (varies)
  Magic Damage Reduced By 7
  +1% to Experience Gained
  `,

  Splendor: `
  +1 To All Skills
  +15-20% Faster Cast Rate
  +20% Faster Block Rate
  +60-100% Enhanced Defense (varies)
  +8 To Energy
  Regenerate Mana 15%
  50% Extra Gold From Monsters
  20% Better Chance of Getting Magic Items
  +3 To Light Radius
  `,

  Stone: `
  +40-50% Faster Hit Recovery
  +300-380% Enhanced Defense (varies)
  +300 Defense Vs. Missile
  +15-20 To Strength
  +16% To Strength
  +15-20 To Vitality
  +10 To Energy
  All Resistances +15
  Level 10-15 Clay Golem
  `,

  Wind: `
  15% Chance To Cast Level 30 Tornado On Striking
  10% Chance to Cast Level 35 Twister On Striking
  +30-40% Faster Run/Walk
  +40% Increased Attack Speed
  +20-30% Faster Hit Recovery
  +260-280% Enhanced Damage (varies)
  -50% Target Defense
	Prevent Monster Heal
  Hit Blinds Target
  +1% to Experience Gained
  `,

  Brand: `
  35% Chance To Cast Level 14 Amplify Damage When Struck
  100% Chance To Cast Level 18 Bone Spear On Striking
  +260-340% Enhanced Damage (varies)
  Ignore Target's Defense
  20% Bonus to Attack Rating
  +280-340% Damage To Demons (varies)
  +30% Increased Attack Speed
  20% Deadly Strike
  Knockback
  Prevent Monster Heal
  Fires Explosive Arrows or Bolts (15)
  +3% to Experience Gained
  `,

  Death: `
  100% Chance To Cast Level 44 Chain Lightning When You Die(New Skill)
  25% Chance To Cast Level 18 Glacial Spike On Attack(New Skill)
  Indestructible
  +300-385% Enhanced Damage (varies)
  +20-25% Increased Attack Speed (varies)
  20% Bonus To Attack Rating
  +50 To Attack Rating
  Adds 1-50 Lightning Damage
  7% Mana Stolen Per Hit
  50% Chance of Crushing Blow
  +(0.5 per Character Level) 0.5-49.5% Deadly Strike (Based on Character Level)
  +1 To Light Radius
  Requirements -20%
  +2% to Experience Gained
  `,

  Destruction: `
  23% Chance To Cast Level 35 Volcano On Striking (Lower skill lv)
  100% Chance To Cast level 45 Meteor When You Die
  15% Chance To Cast Level 35 Nova On Attack
  +0.5/lvl to Strength (Based on Character Level)
  +300-350% Enhanced Damage (varies)
  Ignore Target's Defense
  Adds 255-500 Magic Damage
  7% Mana Stolen Per Hit
  20% Chance Of Crushing Blow
  20% Deadly Strike
  Prevent Monster Heal
  +8 To Dexterity
  +4% to Experience Gained
  `,

  Dragon: `
  20% Chance to Cast Level 18 Venom When Struck
  12% Chance To Cast Level 15 Hydra On Striking
  Level 16-21 Holy Fire Aura When Equipped
  +360 Defense
  +230 Defense Vs. Missile
  +5-10 To All Attributes (varies)
  +0.375-37.125 To Strength (Based on Character Level)
  Increase Maximum Mana 3% (Armor Only)
  +5% To Maximum All Resist(Shields Only)
  +5% To Maximum Lightning Resist
  Damage Reduced by 7
  +2% to Experience Gained
  `,

  Dream: `
  10% Chance To Cast Level 15 Confuse When Struck
  Level 15 Holy Shock Aura When Equipped
  +20-30% Faster Hit Recovery (varies)
  +30% Enhanced Defense
  +150-220 Defense (varies)
  +10 To Vitality
  Increase Maximum Life 3% (Helms Only)
  +50 To Life (Shields Only)
  +0.625-61.875 To Mana (Based On Character Level)
  All Resistances +14-20 (varies)
  20-30% Better Chance of Getting Magic Items (varies)
  +1% to Experience Gained
  `,

  Edge: `
  Level 15 Thorns Aura When Equipped
  +35% Increased Attack Speed
  +280-320% Enhanced Damage
  Piercing Attack
  +61 Poison Damage Over 5 Seconds
  7% Life Stolen Per Hit
  Prevent Monster Heal
  +5-10 To All Attributes (varies)
  +2 To Mana After Each Kill
  Reduces All Vendor Prices 10-15%!!!
  `,

  Faith: `
  Level 12-15 Fanaticism Aura When Equipped (varies)
  +1-3 To All Skills
  Adds 50-100 Damage
  +320-340% Enhanced Damage (varies)
  Ignore Target's Defense
  300% Bonus To Attack Rating
  +75% Damage To Undead
  +100 To Attack Rating Against Undead
  All Resistances +15-20 (varies)
  10% Reanimate As: Returned
  35% Extra Gold From Monsters
  +2% to Experience Gained
  `,

  Fortitude: `
  #### Weapons
  20% Chance To Cast Level 15 Chilling Armor when Struck
  +25% Faster Cast Rate
  +300% Enhanced Damage
  +9 To Minimum Damage
  +50 To Attack Rating
  20% Deadly Strike
  +200-210% Enhanced Defense (varies)
  +1 To Life (Based on Character Level)*
  All Resistances +25-30 (varies)
  12-15% Damage Taken Goes To Mana
  +1 To Light Radius
  +2 Life after each Kill
  +1% to Experience Gained

  #### Body Armor
  20% Chance To Cast Level 15 Chilling Armor when Struck
  +25% Faster Cast Rate
  +300% Enhanced Damage
  +200-210% Enhanced Defense (varies)
  +15 Defense
  +1 To Life (Based on Character Level)*
  +5% To Maximum Lightning Resist
  All Resistances +25-30 (varies)
  Damage Reduced By 7
  12% Damage Taken Goes To Mana
  +1 To Light Radius
  +2 Life after each Kill
	+2% to Experience Gained
  `,

  Grief: ` 
  +(300-350) to Minimum Damage  //check later
	+(300-350) to Maximum Damage
  +30-40% Increased Attack Speed (varies)
  Ignore Target's Defense
  -25% Target Defense
  Adds 5-30 Fire Damage
  -20-25% To Enemy Poison Resistance (varies)
  33% Deadly Strike
  +2 To Mana After Each Kill
  +10-15 Life After Each Kill (varies)
  +20% Bonus to Attack Rating
	+7% Mana stolen per hit
	+2% to Experience Gained
  `,

  Harmony: `
  Level 10 Vigor Aura When Equipped
  +275-325% Enhanced Damage (varies)
  +9 To Minimum Damage
  +9 To Maximum Damage
  Adds 55-160 Lightning Damage
  Adds 55-160 Fire Damage
  Adds 55-160 Cold Damage
  +2-5 To Valkyrie (varies)
  +8 To Dexterity
  Regenerate Mana 20%
  +2 To Mana After Each Kill
  +2 To Light Radius
  Level 20 Revive (25 Charges)
  `,

  Ice: `
  100% Chance To Cast Level 40 Blizzard When You Level-up
  25% Chance To Cast Level 35 Frost Nova On Striking
  Level 18 Holy Freeze Aura When Equipped
  +15% Increased Attack Speed
  +140-210% Enhanced Damage (varies)
  Ignore Target's Defense
  +25-30% To Cold Skill Damage (varies)
  -(25-30)% To Enemy Cold Resistance
  7% Life Stolen Per Hit
  20% Deadly Strike
  3.125-309.375 Extra Gold From Monsters (Based on Character Level)
  +2% to Experience Gained
  `,

  Infinity: `
  25% Chance To Cast Level 20 Chain Lightning When You Kill An Enemy
  1% Chance To Cast Level 15 Cyclone Armor When You Kill An Enemy
  Level 12 Conviction Aura When Equipped
  +35% Faster Run/Walk
  +255-325% Enhanced Damage (varies)
  -(45-55)% To Enemy Lightning Resistance (varies)
  40% Chance of Crushing Blow
  Prevent Monster Heal
  0.5-49.5 To Vitality (Based on Character Level)
  30% Better Chance of Getting Magic Items
  +3% to Experience Gained
  `,

  Insight: `
  Level 12-17 Meditation Aura When Equipped (varies)
  +35% Faster Cast Rate
  +200-260% Enhanced Damage (varies)
  +9 To Minimum Damage
  180-250% Bonus to Attack Rating (varies)
  Adds 5-30 Fire Damage
  +61 Poison Damage Over 5 Seconds
  +2-5 To Critical Strike (varies)
  +5-7 To All Attributes
  +2 To Mana After Each Kill
  22-32% Better Chance of Getting Magic Items
  `,

  "Last Wish": `
  2% Chance To Cast Level 5 Fade When Struck
  10% Chance To Cast Level 5 Life Tap On Striking
  Level 17 Might Aura When Equipped
  +330-375% Enhanced Damage (varies)
  Ignore Target's Defense
  50-60% Chance of Crushing Blow (varies)
  Prevent Monster Heal
  Hit Blinds Target
  +(0.5 per character level) 0.5-49.5% Chance of Getting Magic Items (Based on Character Level)
  Repairs 1 durability in 25 seconds
  +5% to Experience Gained
  `,

  Lawbringer: `
  25% Chance To Cast Level 30 Decrepify On Striking
  Level 30-31 Sanctuary Aura When Equipped (varies)
  -50% Target Defense
  Adds 200-210 Fire Damage
  Adds 200-210 Cold Damage
  7% Life Stolen Per Hit
  +200-250 Defense Vs. Missile (varies)
  +200-250 Defense Vs. Melee (varies)
  +8 To Dexterity
  35% Extra Gold From Monsters
  `,

  Oath: `
  30% Chance To Cast Level 20 Bone Spirit On Striking
  Indestructible
  +40-45% Increased Attack Speed
  +210-340% Enhanced Damage (varies)
  +75% Damage To Demons
  +100 To Attack Rating Against Demons
  Prevent Monster Heal
  -100 to Monster Defense Per Hit
  +8 To Energy
  +10-15 Magic Absorb (varies)
  Level 16 Heart Of Wolverine (20 Charges)
  `,

  Obedience: `
  15% Chance To Cast Level 21 Enchant When You Kill An Enemy
  +25% Increased Attack Speed
  40% Faster Hit Recovery
  +330-370% Enhanced Damage
  -25% Target Defense
  Adds 3-14 Cold Damage 3 Second Duration (Normal)
  -25% To Enemy Fire Resistance
  40% Chance of Crushing Blow
  +8 To Strength
  +8 To Dexterity
  All Resistances +20-30 (varies)
  Requirements -20%
  `,

  Phoenix: `
  #### Weapons
  100% Chance To Cast level 40 Blaze When You Level-up
  20% Chance To Cast Level 22 Firestorm On Striking
  Level 10-15 Redemption Aura When Equipped (varies)
  +350-400% Enhanced Damage (varies)
  Ignores Target's Defense
  14% Mana Stolen Per Hit
  -(26-30)% To Enemy Fire Resistance
  20% Deadly Strike
  +350-400 Defense Vs. Missile (varies)
  +15-21 Fire Absorb (varies)
  +4% to Experience Gained
  
  #### Shields
  100% Chance To Cast level 40 Blaze When You Level-up
  20% Chance To Cast Level 22 Firestorm On Striking
  Level 10-15 Redemption Aura When Equipped (varies)
  +350-400 Defense Vs. Missile (varies)
  +350-400% Enhanced Damage (varies)
  -28% To Enemy Fire Resistance
  +50 To Life
  +3% To Maximum Lightning Resist
  +6% To Maximum Fire Resist
  +15-21 Fire Absorb (varies)
  +4% to Experience Gained
  `,

  Pride: `
  15% Chance To Cast Level 35 Fire Wall On Striking
  Level 18-20 Concentration Aura When Equipped (varies)
  +(260-300)% Enhanced Damage
  +20% Increased Attack Speed
  +1-99% Damage To Demons (Based on Character Level)
  +1.0%/lvl Damage to Undead (Based on Character Level)
  20% Deadly Strike
  Hit Blinds Target
  Slows Target by 20%
  +8 To Vitality
  3.75%/lvl Extra Gold from Monsters (Based on Character Level)
  +3% to Experience Gained
  `,

  Rift: `
  20% Chance To Cast Level 30 Tornado On Striking
  16% Chance To Cast Level 30 Frozen Orb On Attack
  +15% Increased Attack Speed
  +50-100 Kick Damage
  20% Bonus To Attack Rating
  Adds 250-400 Magic Damage
  +5-10 To All Stats (varies)
  +8 To Dexterity
  38% Damage Taken Goes To Mana
  35% Extra Gold From Monsters
  Requirements -20%
  +1% to Experience Gained
  `,

  Spirit: `
  #### Swords
  +1 To All Skills
  +25-30% Faster Cast Rate
  +20-30% Faster Hit Recovery
  Adds 1-50 Lightning Damage
  Adds 3-14 Cold Damage 3 Second Duration (Normal)
  +75 Poison Damage Over 5 Seconds
  7% Life Stolen Per Hit
  +250 Defense Vs. Missile
  +10-20 To Vitality
  +89-112 To Mana (varies)
  +3-8 Magic Absorb (varies)

  #### Shields
  +1 To All Skills
  +25-30% Faster Cast Rate
  +20-30% Faster Hit Recovery
  +250 Defense Vs. Missile
  +10-20 To Vitality
  +89-112 To Mana (varies)
  Magic Resist +17%
  Cold Resist +17%
  Lightning Resist +17%
  Poison Resist +17%
  +3-8 Magic Absorb (varies)
  `,

  "Voice of Reason": `
  15% Chance To Cast Level 13 Frozen Orb On Attack
  20% Chance To Cast Level 50 Ice Blast On Striking
  +(1-2) to Cold Skills
  +50 To Attack Rating
  +250-350% Damage To Demons
  +280-300% Damage To Undead (varies)
  +100 To Attack Rating Against Undead
  -(24-36)% To Enemy Cold Resistance
  +8 To Dexterity
  Cannot Be Frozen
  75% Extra Gold From Monsters
  +1 To Light Radius
  `,

  Wrath: `
  30% Chance To Cast Level 2 Decrepify On Striking
	+30% Increased Attack Speed
  +(275-300)% Enhanced Damage
  +75% Damage To Demons
  +100 To Attack Rating Against Demons
  Adds 100-200 Magic Damage
  Adds 50-250 Lightning Damage
  20% Chance of Crushing Blow
  +10-20% Deadly Strike
  Prevent Monster Heal
  +8 To Energy
  Cannot Be Frozen
  +1% to Experience Gained
  `,

  Bone: `
  15% Chance To Cast level 10 Bone Armor When Struck
  +2 To Necromancer Skill Levels
  +(15-20)% Faster Cast Rate
  +100-150 To Mana (varies)
  Magic Resist +24%
  All Resistances +15
  Damage Reduced By 7
  `,

  Enlightenment: `
  5% Chance To Cast Level 15 Blaze When Struck
  +2 To Sorceress Skill Levels
  +1 To Warmth
  +(15-20)% Faster Cast Rate
  +20% Faster Hit Recovery
  +30% Enhanced Defense
  Fire Resist +12%
  Damage Reduced By 7
  `,

  Myth: `
  10% Chance To Cast Level 1 Taunt On Striking
  +2 To Barbarian Skill Levels
  +15-20% Faster Run/Walk (varies)
  +80-110% Enhanced Defense (varies)
  +30 Defense Vs. Missile
  Replenish Life +10
  Magic Resist +12%
  Requirements -15%
  `,

  Peace: `
  4% Chance To Cast Level 5 Slow Missiles When Struck
  2% Chance To Cast level 15 Valkyrie On Striking
  +2 To Amazon Skill Levels
  +20% Faster Hit Recovery
  +2 To Critical Strike
  Magic Resist +12%
  Cold Resist +12%
  Attacker Takes Damage of 14
  `,

  Principle: `
  100% Chance To Cast Level 5 Holy Bolt On Striking
  +2 To Paladin Skill Levels
  +30-50% Enhanced Defense
  Fire Resist +12%
  +8 to Dexterity
  +100-150 To Life (varies)
	Replenish Life +5
  `,

  Rain: `
  5% Chance To Cast Level 15 Cyclone Armor When Struck
  +2 To Druid Skills
  +(15-20)% Faster Cast Rate
  +100-150 To Mana (varies)
  Lightning Resist +30%
  15% Damage Taken Goes to Mana
  +2 Life after each Kill
  `,

  Treachery: `
  5% Chance To Cast Level 15 Fade When Struck
  10% Chance To Cast level 15 Venom On Striking
  +2 To Assassin Skills
  +35-40% Increased Attack Speed
  +15% Faster Hit Recovery
  All Resistances +10-15
  Cold Resist +12%
  25% Extra Gold From Monsters
  `,

  /* Patch 2.4 - alpha sort maybe later, keep here for now easier to find */
  Plague: `
  20% Chance to Cast level 12 Lower Resist when struck
  25% Chance to Cast level 15 Poison Nova on striking
  Level 13-17 Cleansing Aura When Equipped (varies)
  +2 All Skills
  +15% Increased Attack Speed
  +220-320% Enhanced Damage (varies)
  -(25-35)% To Enemy Poison Resistance
  0.3% (0-29.7) Deadly Strike (Based on Character Level)
  +25% Chance of Open Wounds
  Slows Target by 20%
  +1% to Experience Gained
  `,

  Pattern: `
  +1-2 to Martial Arts Skills
  +15% Increased Attack Speed
  +80-120% Enhanced Damage (varies)
	Adds 100 Fire/Lightning/Cold Damage
  Adds 64-150 Lightning Damage
  Adds 103-114 Cold Damage
  +61 Poison Damage Over 5 Seconds
  +10-15 to Strength
  +10-15 to Dexterity
  All Resistances +15
  `,

  "Unbending Will": `
  18% Chance to cast Level 18 Taunt on striking
  +3 To Combat Skills (Barbarian Only)
  +20-30% Increased Attack Speed
  +300-350% Enhanced Damage (varies)
  +9 To Maximum Damage
  +50 To Attack Rating
  +75% Damage to Undead
  +100 Attack Rating Against Undead
  8-10% Life Stolen Per Hit (varies)
  Prevent Monster Heal
  +8 To Strength
  +8 To Vitality
  Damage Reduced By 8
  +1 Light Radius
  Requirements -20%
  `,

  Wisdom: `
  +33% Piercing Attack
  +15-25% Bonus to Attack Rating (varies)
  4-8% Mana Stolen Per Hit (varies)
  +30% Enhanced Defense
  +10 Energy
  Replenish Life +5
  Cannot Be Frozen
  +5 Mana After Each Kill
  15% Damage Taken Goes to Mana
  `,

  Obsession: `
  Indestructible
  24% Chance to cast level 10 Weaken when struck
  +4-5 To All Skills
  +65% Faster Cast Rate
  +60% Faster Hit Recovery
  Knockback
  +8 To Vitality
  +8 To Energy
  Increase Maximum Life 15-25% (varies)
  Regenerate Mana 15-30% (varies)
  All Resistances +60-70 (varies)
  35% Extra Gold from Monsters
  30% Better Chance of Getting Magic Items
  +2% to Experience Gained
  `,

  "Flickering Flame": `
  Level 4-8 Resist Fire Aura When Equipped (varies)
  +3 To Fire Skills
  -10-15% to Enemy Fire Resistance (varies)
  +30% Enhanced Defense
  +30 Defense Vs. Missile
  +50-75 To Mana (varies)
  Half Freeze Duration
  +3% To Maximum Fire Resist
  Poison Length Reduced by 50%
  +1% to Experience Gained
  `,

  Mist: `
  Level 8-12 Concentration Aura When Equipped (varies)
  +3 To All Skills
  15% Increased Attack Speed
  +100% Piercing Attack
  +325-375% Enhanced Damage (varies)
  +9 To Maximum Damage
  20% Bonus to Attack Rating
  Adds 3-14 Cold Damage
  Slows Target by 20%
  +24 Vitality
  All Resistances +40
  +2% to Experience Gained
  `,

  /* Patch 2.6 */
  Bulwark: `
  +15% Faster Hit Recovery
  +4-6% Life stolen per hit
  +75-100% Enhanced Defense
  +10 to Vitality
  Increase Maximum Life 5%
  Replenish Life +10
  Damage Reduced by 7
  Physical Damage Received Reduced by 5%
  `,

  Cure: `
  Level 1 Cleansing Aura when Equipped
  +15% Faster Hit Recovery
  +75-100% Enhanced Defense
  +10 to Vitality
  Increase Maximum Life 5%
  Poison Resist +45%
  Poison Length Reduced by 50%
  `,

  Ground: `
  +15% Faster Hit Recovery
  +75-100% Enhanced Defense
  +10 to Vitality
  Increase Maximum Life 5%
  Lightning Resist +45%
  Lightning Absorb +7-10%
  `,

  Hearth: `
  +20% Faster Hit Recovery
  +75-100% Enhanced Defense
  +10 to Vitality
  Increase Maximum Life 5%
  Cold Resist +45%
  Cold Absorb +7-10%
  Cannot be Frozen
  `,

  Temper: `
  +15% Faster Hit Recovery
  +75-100% Enhanced Defense
  +10 to Vitality
  Increase Maximum Life 5%
  Fire Resist +45%
  Fire Absorb +7-10%
  `,

  Hustle: `
  #### Weapons
  5% Chance to cast level 1 Burst of Speed on striking
  Level 1 Fanaticism Aura
  +25% Increased Attack Speed
  +180-200% Enhanced Damage
  +75% Damage to Undead
  +100 to Attack Rating against Undead
  +8 to Dexterity

  #### Body Armors
  +65% Faster Run/Walk
  +40% Increased Attack Speed
  +15% Faster Hit Recovery
  +6 to Evade
  +10 to Dexterity
  +All Resistances +10
  Replenish Life +5
  `,

  Mosaic: `
  +2 to All Skills
  +8-15% to Cold Skill Damage
  +8-15% to Lightning Skill Damage
  +8-15% to Fire Skill Damage
  -(5-12)% to Enemy Cold Resistance
	-(5-12)% to Enemy Lightning Resistance
	-(5-12)% to Enemy Fire Resistance
  Prevent Monster Heal
  +2 Life after each Kill
  Hit Blinds Target +1

	+1% to Experience Gained
  `,

  Metamorphosis: `
  50% Chance to cast level 1 Mark of the Wolf on striking
  50% Chance to cast level 1 Mark of the Bear on striking
  +5 to Shape Shifting Skills (Druid only)
  +25% Chance of Crushing Blow
  +50-80% Enhanced Defense
  +10 to Strength
  +10 to Vitality
  All Resistances +10
  Curse Duration Reduced by 34% (No apply yet)
  +1% to Experience Gained
  Note: since both marks are apply at the same time buff will be nerf
  `,
  
  "Fortune (Exile  only)": `
  Level 7 Prayer Aura When Equipped
  20% Chance to cast level 20 Blaze when struck
  +77% Enhanced Defense
  20-35% Better Chance of Getting Magic Items (varies)
  +55-75% Extra Gold from Monsters (varies)
  +7 to Mana after each kill
  Damage Reduced by 7
  +15-20% Faster Hit Recovery (varies)
  `,

  "Knowledge (Exile  only)": `
  +2-3 to Warmth
  +20-30 Energy
  +25% Faster Hit Recovery
  +15-25 Faster Run/Walk
  15% Damage Taken Goes To Mana
  +2 to Mana after each Kill
  `,

  "Revenge (Exile  only)": `
  +15% Chance to cast level 5 Nova on striking
  +15% Chance to cast level 5 Fireball on striking
  +15% Chance to cast level 5 Frost Nova on striking
  +20% Increased Attack Speed
 	Adds 3-14 Cold Damage
 	Adds 1-50 Lightning Damage
  Adds 5-30 Fire Damage
  `,

  "Tempest (Exile  only)": `
  +2 to All Skills
  +15-25% Faster Cast Rate
  +15-25% Increased Attack Speed 
  +24% Faster Hit Recovery
  +20% Chance of Crushing Blow
  +15-20 to Thunderstorm
  +2 to Mana after each Kill
  +35% to Better Chance of Getting Magic Items
  +1% to Experience Gained
  `,

  "Temptation (Exile  only)": `
  10% Chance to cast level 25 Attract on striking
  +35% Increased Attack Speed
  +(200-280)% Enhanced Damage
  +20% Bonus to Attack Rating
  7% Life stolen per hit
  +20% Deadly Strike
  +(8-15) to Vitality
  +(25-40)% Better Chance of Getting Magic Items
  Repairs 1 durability in 4 seconds
  Requirements -20%
  +1% to Experience Gained
  `,
  
  "Broken Promise (Exile  only)": `
  +20% Faster Hit Recovery
  +20% Faster Run/Walk
  +20 to all Attributes
  +20% Faster Cast Rate
  +20% Increased Attack Speed
  20% Better Chance of Getting Magic Items
  Cannot Be Frozen
  `,

  "Dilemma (Exile  only)": `
  +25-50% Enhanced Defense (varies)
  +1 to Teleport*
  Drain Life -(20-40)
  +3% To Maximum Magic Resist
  (35-50)% Better Chance of Getting Magic Items
  +2-3 Life after each Kill
  25% Extra Gold from Monsters
  `,

  "Pestilence (Exile  only)": `
  25% Chance to cast level 25 Lower Resist when struck
  Level 15 Cleansing Aura When Equipped
  +2-3 to Poison Skills
  -30-40% to Enemy Poison Resistance
  Prevent Monster Heal
  +400-500 Defense
  Magic Resist +50%
  Poison Resist +18%
  Curse Duration Reduced by 34%
  25% Better Chance of Getting Magic Items
  +2% to Experience Gained
  `,

  "Red (Exile  only)": `
  #### Shields
  +10% Increased Chance of Blocking
  9% Life stolen per hit
  +(50-80)% Enhanced Defense
  +10 to Vitality
  +(80-100) to Life
  Increase Maximum Life (5-15)%
  Replenish Life +5
  Fire Resist +75%
  +20 Fire Absorb
  +(5-10) Life after each Kill

  #### Armor
  9% Life stolen per hit
  +(50-80)% Enhanced Defense
  +10 to Vitality
  +(80-100) to Life
  Increase Maximum Life (5-15)%
  Replenish Life +5
  Fire Resist +75%
  +20 Fire Absorb
  +(5-10) Life after each Kill
  `,

  "Knight's Vigil (Exile  only)": `
  Level 8-10 Defiance Aura When Equipped
  +40-50% Increased Chance of Blocking
  +15 to Strength
  +50 to Life
  +(5-10)% to Maximum Cold Resist
  All Resistances +10-15
  Magic Damage Reduced by 7
  Damage Reduced by 7
  +2 Life after each Kill
  `,

  "Trust (Exile  only)": `
  +10% Increased Chance of Blocking
  +20-35 Defense
  +50 Defense vs Missile
  +50 Defense vs Melee 
  +20% Regenerate Mana
  +20% Lightning Resist
  +20% Fire Resist
  +15% Damage Taken Goes To Mana
  `,
};

export default runewordsDesc;
