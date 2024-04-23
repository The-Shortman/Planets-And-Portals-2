// priority: 0

settings.logAddedRecipes = true
settings.logRemovedRecipes = true
settings.logSkippedRecipes = false
settings.logErroringRecipes = true

console.info('Hello, World! (You will see this line every time server resources reload)')

onEvent('recipes', event => {
	// Change recipes here

	////// ADDITIONS //////

	// QOL stuff

	event.shapeless('minecraft:diamond', [
		'yttr:ultrapure_diamond'
	])

	// Progression stuff

	event.shaped('kubejs:ultrapure_desh_block',[
			'AAA',
			'AAA',
			'AAA'
		], {
			A: 'kubejs:ultrapure_desh',
		}
	)

	event.shaped('kubejs:ultrapure_ostrum_block',[
			'AAA',
			'AAA',
			'AAA'
		], {
			A: 'kubejs:ultrapure_ostrum',
		}
	)

	event.custom({
		"type": "yttr:centrifuging",
		"time": 800,
		"ingredient": {
			"item": "ad_astra:desh_block",
			"count": 1,
			"yttr:no_substitution": true
		},
		"results": [
			{
				"item": "kubejs:ultrapure_desh",
				"count": 1
			},
			{
				"item": "ad_astra:cheese",
				"count": 4
			}
		]
	})

	event.custom({
		"type": "yttr:centrifuging",
		"time": 800,
		"ingredient": {
			"item": "ad_astra:ostrum_block",
			"count": 1,
			"yttr:no_substitution": true
		},
		"results": [
			{
				"item": "kubejs:ultrapure_ostrum",
				"count": 1
			},
			{
				"item": "ad_astra:ice_shard",
				"count": 4
			}
		]
	})

	event.custom({
		"type": "yttr:centrifuging",
		"time": 1600,
		"ingredient": {
			"item": "kubejs:ultrapure_desh_block",
			"count": 4,
			"yttr:no_substitution": true
		},
		"results": [
			{
				"item": "kubejs:ultrapure_condensed_desh",
				"count": 1
			},
		]
	})

	event.custom({
		"type": "yttr:centrifuging",
		"time": 1600,
		"ingredient": {
			"item": "kubejs:ultrapure_ostrum_block",
			"count": 4,
			"yttr:no_substitution": true
		},
		"results": [
			{
				"item": "kubejs:ultrapure_condensed_ostrum",
				"count": 1
			},
		]
	})

	event.recipes.create.mechanical_crafting('kubejs:ultrapure_condensed_desh_filter',[
		'ABA',
		'CDC',
		'ABA'
	], {
		A: 'yttr:yttrium_ingot',
		B: 'yttr:yttrium_nugget',
		C: 'create:filter',
		D: 'kubejs:ultrapure_condensed_desh'
	})

	event.recipes.create.mechanical_crafting('kubejs:ultrapure_condensed_ostrum_condensator',[
		'ABA',
		'CDC',
		'AEA'
	], {
		A: 'yttr:yttrium_ingot',
		B: 'create:nozzle',
		C: 'yttr:yttrium_nugget',
		D: 'kubejs:ultrapure_condensed_ostrum',
		E: 'yttr:drop_of_continuity'
	})

	event.recipes.createCompacting(['ad_astra:iron_plate'], ["minecraft:iron_ingot"]).heated()
	event.recipes.createCompacting(['ad_astra:steel_plate'], ["ad_astra:steel_ingot"]).superheated()
	event.recipes.createCompacting(['ad_astra:desh_plate'], ["ad_astra:desh_ingot"]).superheated()
	event.recipes.createCompacting(['ad_astra:ostrum_plate'], ["ad_astra:ostrum_ingot"]).superheated()
	event.recipes.createCompacting(['ad_astra:calorite_plate'], ["ad_astra:calorite_ingot"]).superheated()

	////// REPLACEMENTS //////

	event.remove({output: 'ad_astra:rocket_nose_cone'})

	event.shaped('ad_astra:rocket_nose_cone',[
		' A ',
		' B ',
		'BBB'
	], {
		A: 'minecraft:lightning_rod',
		B: 'create:sturdy_sheet'
		}
	)

	event.remove({output: 'ad_astra:nasa_workbench'})

	event.shaped('ad_astra:nasa_workbench',[
			'ABA',
			'CDC',
			'EFE'
		], {
			A: 'minecraft:redstone_torch',
			B: 'minecraft:lever',
			C: 'create:sturdy_sheet',
			D: 'minecraft:crafting_table',
			E: 'minecraft:redstone_block',
			F: 'yttr:yttrium_block'
		}
	)

	event.remove({output: 'yttr:rifle'})

	event.shaped('yttr:rifle',[
			'AB ',
			' CD',
			' EC'
		], {
			A: 'minecraft:diamond',
			B: 'ad_astra:desh_ingot',
			C: 'yttr:yttrium_ingot',
			D: 'yttr:centrifuge',
			E: 'minecraft:blaze_rod',
		}
	)

	event.remove({output: 'yttr:empty_ammo_can'})

	event.shaped('yttr:empty_ammo_can',[
			'ABA',
			'A A',
			'ABA'
		], {
			A: 'yttr:yttrium_ingot',
			B: 'ad_astra:desh_ingot'
		}
	)

	event.remove({output: 'yttr:can_filler'})

	event.shaped('yttr:can_filler',[
			'AAA',
			'BCB',
			'AAA'
		], {
			A: 'yttr:yttrium_ingot',
			B: 'ad_astra:desh_ingot',
			C: 'yttr:empty_ammo_can'
		}
	)

	event.remove({output: 'yttr:ammo_pack'})

	event.shaped('yttr:ammo_pack',[
			'CAC',
			'ABA',
			'AAA'
		], {
			A: 'yttr:yttrium_ingot',
			B: 'ad_astra:desh_ingot',
			C: 'minecraft:leather'
		}
	)

	event.remove({output: 'yttr:armor_plating'})

	event.shaped('yttr:armor_plating',[
			'CAC',
			'ABA',
			'CAC'
		], {
			A: 'yttr:yttrium_ingot',
			B: 'yttr:bedrock_shard',
			C: 'ad_astra:ostrum_ingot'
		}
	)

	event.remove({output: 'minecraft:ender_eye'})

	event.shaped('minecraft:ender_eye',[
			'ACA',
			'BDB',
			'ACA'
		], {
			A: 'yttr:yttrium_ingot',
			B: 'minecraft:blaze_powder',
			C: 'ad_astra:ostrum_ingot',
			D: 'minecraft:ender_pearl'
		}
	)

	event.remove({output: 'yttr:projector'})

	event.shaped('yttr:projector',[
			' A ',
			' BA',
			'C  '
		], {
			A: 'yttr:drop_of_continuity',
			B: 'yttr:yttrium_ingot',
			C: 'ad_astra:calorite_ingot',
		}
	)

	event.remove({output: 'yttr:shifter'})

	event.shaped('yttr:shifter',[
			'  A',
			' B ',
			'C  '
		], {
			A: 'yttr:drop_of_continuity',
			B: 'yttr:yttrium_ingot',
			C: 'ad_astra:calorite_ingot',
		}
	)

	event.remove({output: 'ad_astra:oxygen_distributor'})

	event.shaped('ad_astra:oxygen_distributor',[
			'AAA',
			'BCB',
			'DED'
		], {
			A: 'ad_astra:engine_fan',
			B: 'ad_astra:oxygen_gear',
			C: 'ad_astra:oxygen_loader',
			D: 'ad_astra:desh_plate',
			E: 'kubejs:ultrapure_condensed_desh_filter'
		}
	)

	event.remove({output: 'ad_astra:cryo_freezer'})

	event.shaped('ad_astra:cryo_freezer',[
			'ABA',
			'BCB',
			'DBD'
		], {
			A: 'ad_astra:ostrum_plate',
			B: 'ad_astra:ostrum_ingot',
			C: 'kubejs:ultrapure_condensed_ostrum_condensator',
			D: 'ad_astra:ostrum_block',
		}
	)

	event.remove({input: 'minecraft:iron_ingot', output: 'ad_astra:steel_ingot'})

	event.recipes.createMixing(['ad_astra:steel_ingot'], ["4x minecraft:coal",'minecraft:iron_ingot']).superheated()

	event.remove({output: 'ad_astra:oxygen_loader'})

	event.shaped('ad_astra:oxygen_loader',[
		'ABA',
		'CDC',
		'AEA'
	], {
		A: 'ad_astra:steel_plate',
		B: 'ad_astra:engine_fan',
		C: 'ad_astra:oxygen_gear',
		D: 'minecraft:lightning_rod',
		E: 'minecraft:redstone_block'
	})

	event.remove({output: 'ad_astra:netherite_space_suit'})

	event.shaped('ad_astra:netherite_space_suit',[
		'AEA',
		'BCB',
		'ADA'
	], {
		A: 'ad_astra:ostrum_plate',
		B: 'ad_astra:oxygen_tank',
		C: 'ad_astra:oxygen_gear',
		D: 'minecraft:netherite_chestplate',
		E: 'kubejs:ultrapure_condensed_desh_filter'
	})

	event.remove({output: 'ad_astra:netherite_space_helmet'})

	event.shaped('ad_astra:netherite_space_helmet',[
		'ABA',
		'ACA',
		'   '
	], {
		A: 'ad_astra:ostrum_plate',
		B: 'minecraft:netherite_helmet',
		C: 'minecraft:orange_stained_glass_pane',
	})

	event.remove({output: 'ad_astra:netherite_space_boots'})

	event.shaped('ad_astra:netherite_space_boots',[
		' B ',
		'C C',
		'A A'
	], {
		A: 'ad_astra:ostrum_plate',
		B: 'minecraft:netherite_boots',
		C: 'ad_astra:desh_plate',
	})

	event.remove({output: 'powah:dielectric_paste'})

	event.recipes.createMixing(['16x powah:dielectric_paste'], ["4x ad_astra:desh_ingot",'ad_astra:ostrum_ingot','ad_astra:calorite_nugget','4x powah:uraninite_raw']).superheated()

	event.remove({output: 'ad_astra:desh_engine'})

	event.shaped('ad_astra:desh_engine',[
		'AAA',
		'BCB',
		' D '
	], {
		A: 'ad_astra:desh_plate',
		B: 'yttr:bedrock_shard',
		C: 'ad_astra:engine_frame',
		D: 'ad_astra:engine_fan'
	})

	event.remove({output: 'ad_astra:ostrum_engine'})

	event.shaped('ad_astra:ostrum_engine',[
		'ABA',
		' C ',
		' D '
	], {
		A: 'ad_astra:ostrum_plate',
		B: 'yttr:drop_of_continuity',
		C: 'ad_astra:engine_frame',
		D: 'ad_astra:engine_fan'
	})
})

onEvent('item.tags', event => {
	// Get the #forge:cobblestone tag collection and add Diamond Ore to it
	// event.get('forge:cobblestone').add('minecraft:diamond_ore')

	// Get the #forge:cobblestone tag collection and remove Mossy Cobblestone from it
	// event.get('forge:cobblestone').remove('minecraft:mossy_cobblestone')
})