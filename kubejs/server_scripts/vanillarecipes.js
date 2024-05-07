onEvent("recipes", event => {
    shapelessCrafting(event);
    shapedCrafting(event);
});

function shapelessCrafting(event) {
    [
        // Ultrapure Diamond -> Diamond
        {
            inputs: [
                'yttr:ultrapure_diamond',
            ],
            output: 'minecraft:diamond',
        }
    ].forEach((recipe) => {
        event.shapeless(recipe.output, recipe.inputs)
    });
}

function shapedCrafting(event) {
    [
		///// MINECRAFT /////

		// Eye of Ender
		{
            output: 'minecraft:ender_eye',
            inputs: {
				A: 'yttr:yttrium_ingot',
				B: 'minecraft:blaze_powder',
				C: 'ad_astra:ostrum_ingot',
				D: 'minecraft:ender_pearl'
            },
            shape: [
				'ACA',
				'BDB',
				'ACA'
            ]
        },		

		///// CUSTOM ITEM RECIPES /////

        // Ultrapure Desh Block
        {
            output: 'kubejs:ultrapure_desh_block',
            inputs: {
                A: 'kubejs:ultrapure_desh'
            },
            shape: [
                'AAA',
			    'AAA',
			    'AAA'
            ]
        },

        // Ultrapure Ostrum Block
        {
            output: 'kubejs:ultrapure_ostrum_block',
            inputs: {
                A: 'kubejs:ultrapure_ostrum'
            },
            shape: [
                'AAA',
                'AAA',
                'AAA'
            ]
        },

		///// TOM'S SIMPLE STORAGE RECIPES /////

        // Inventory Connector
        {
            output: 'toms_storage:ts.inventory_connector',
            inputs: {
                A: '#minecraft:planks',
	        	B: 'yttr:yttrium_block',
	        	C: 'minecraft:chest',
	        	D: 'kubejs:ultrapure_condensed_desh',
                E: 'minecraft:ender_pearl'
            },
            shape: [
				'ABA',
				'CDC',
				'AEA'
            ]
        },

		// Storage Terminal
        {
            output: 'toms_storage:ts.storage_terminal',
            inputs: {
                A: '#minecraft:planks',
				B: 'yttr:yttrium_ingot',
				C: 'minecraft:chest',
				D: 'minecraft:glowstone',
    		    E: 'create:framed_glass'
            },
            shape: [
				'ABA',
				'CDE',
				'ABA'
            ]
        },

		// Wireless Terminal
        {
            output: 'toms_storage:ts.wireless_terminal',
            inputs: {
                A: '#minecraft:planks',
				B: 'yttr:yttrium_block',
				C: 'ad_astra:ostrum_plate',
				D: 'minecraft:glowstone',
    		    E: 'minecraft:ender_eye'
            },
            shape: [
				'ABA',
				'CDC',
				'AEA'
            ]
        },

		///// AD ASTRA RECIPES /////

		// Rocket Nose Cone
        {
            output: 'ad_astra:rocket_nose_cone',
            inputs: {
                A: 'minecraft:lightning_rod',
				B: 'create:sturdy_sheet'
            },
            shape: [
				' A ',
				' B ',
				'BBB'
            ]
        },

		// NASA Workbench
        {
            output: 'ad_astra:nasa_workbench',
            inputs: {
				A: 'minecraft:redstone_torch',
				B: 'minecraft:lever',
				C: 'create:sturdy_sheet',
				D: 'minecraft:crafting_table',
				E: 'minecraft:redstone_block',
				F: 'yttr:yttrium_block'
            },
            shape: [
				'ABA',
				'CDC',
				'EFE'
            ]
        },

		// Oxygen Distributor
        {
            output: 'ad_astra:oxygen_distributor',
            inputs: {
				A: 'ad_astra:engine_fan',
				B: 'ad_astra:oxygen_gear',
				C: 'ad_astra:oxygen_loader',
				D: 'ad_astra:desh_plate',
				E: 'kubejs:ultrapure_condensed_desh_filter'
            },
            shape: [
				'AAA',
				'BCB',
				'DED'
            ]
        },

		// Oxygen Loader
        {
            output: 'ad_astra:oxygen_loader',
            inputs: {
				A: 'ad_astra:steel_plate',
				B: 'ad_astra:engine_fan',
				C: 'ad_astra:oxygen_gear',
				D: 'minecraft:lightning_rod',
				E: 'minecraft:redstone_block'
            },
            shape: [
				'ABA',
				'CDC',
				'AEA'
            ]
        },

		// Cryo Freezer
        {
            output: 'ad_astra:cryo_freezer',
            inputs: {
				A: 'ad_astra:ostrum_plate',
				B: 'ad_astra:ostrum_ingot',
				C: 'kubejs:ultrapure_condensed_ostrum_condensator',
				D: 'ad_astra:ostrum_block',
            },
            shape: [
				'ABA',
				'BCB',
				'DBD'
            ]
        },

		// Netherite Space Suit Helmet
        {
            output: 'ad_astra:netherite_space_helmet',
            inputs: {
				A: 'ad_astra:ostrum_plate',
				B: 'minecraft:netherite_helmet',
				C: 'minecraft:orange_stained_glass_pane',
            },
            shape: [
				'ABA',
				'ACA',
				'   '
            ]
        },
		
		// Netherite Space Suit Chestplate
		{
			output: 'ad_astra:netherite_space_suit',
			inputs: {
				A: 'ad_astra:ostrum_plate',
				B: 'ad_astra:oxygen_tank',
				C: 'ad_astra:oxygen_gear',
				D: 'minecraft:netherite_ingot',
				E: 'kubejs:ultrapure_condensed_desh_filter'
			},
			shape: [
				'AEA',
				'BCB',
				'ADA'
			]
		},
	
		// Netherite Space Suit Leggings
        {
            output: 'ad_astra:netherite_space_pants',
            inputs: {
				A: 'ad_astra:ostrum_plate',
				B: 'minecraft:netherite_ingot',
				C: 'ad_astra:desh_plate'
            },
            shape: [
				'ABA',
				'C C',
				'A A'
            ]
        },

		// Netherite Space Suit Boots
        {
            output: 'ad_astra:netherite_space_boots',
            inputs: {
				A: 'ad_astra:ostrum_plate',
				B: 'minecraft:netherite_boots',
				C: 'ad_astra:desh_plate',
            },
            shape: [
				' B ',
				'C C',
				'A A'
            ]
        },

		// Desh Engine
        {
            output: 'ad_astra:desh_engine',
            inputs: {
				A: 'ad_astra:desh_plate',
				B: 'yttr:bedrock_shard',
				C: 'ad_astra:engine_frame',
				D: 'ad_astra:engine_fan'
            },
            shape: [
				'AAA',
				'BCB',
				' D '
            ]
        },

		// Ostrum Engine
        {
            output: 'ad_astra:ostrum_engine',
            inputs: {
				A: 'ad_astra:ostrum_plate',
				B: 'yttr:drop_of_continuity',
				C: 'ad_astra:engine_frame',
				D: 'ad_astra:engine_fan'
            },
            shape: [
				'ABA',
				' C ',
				' D '
            ]
        },

		// Calorite Engine
        {
            output: 'ad_astra:calorite_engine',
            inputs: {
				A: 'ad_astra:calorite_plate',
				B: 'ae2:singularity',
				C: 'ad_astra:engine_frame',
				D: 'ad_astra:engine_fan'
            },
            shape: [
				'ABA',
				' C ',
				' D '
            ]
        },

		///// YTTR RECIPES /////

		// Yttric Rifle
        {
            output: 'yttr:rifle',
            inputs: {
				A: 'minecraft:diamond',
				B: 'ad_astra:desh_ingot',
				C: 'yttr:yttrium_ingot',
				D: 'yttr:centrifuge',
				E: 'minecraft:blaze_rod',
            },
            shape: [
				'AB ',
				' CD',
				' EC'
            ]
        },

		// Empty Ammo Canister
        {
            output: 'yttr:empty_ammo_can',
            inputs: {
				A: 'yttr:yttrium_ingot',
				B: 'ad_astra:desh_ingot'
            },
            shape: [
				'ABA',
				'A A',
				'ABA'
            ]
        },

		// Canister Filler
        {
            output: 'yttr:can_filler',
            inputs: {
				A: 'yttr:yttrium_ingot',
				B: 'ad_astra:desh_ingot',
				C: 'yttr:empty_ammo_can'
            },
            shape: [
				'AAA',
				'BCB',
				'AAA'
            ]
        },

		// Rifle Canister Multiplexer
        {
            output: 'yttr:ammo_pack',
            inputs: {
				A: 'yttr:yttrium_ingot',
				B: 'ad_astra:desh_ingot',
				C: 'minecraft:leather'
            },
            shape: [
				'CAC',
				'ABA',
				'AAA'
            ]
        },

		// Reinforced Yttrium Plating
        {
            output: 'yttr:armor_plating',
            inputs: {
				A: 'yttr:yttrium_ingot',
				B: 'yttr:bedrock_shard',
				C: 'ad_astra:ostrum_ingot'
            },
            shape: [
				'CAC',
				'ABA',
				'CAC'
            ]
        },

		// Continuous Projector
        {
            output: 'yttr:projector',
            inputs: {
				A: 'yttr:drop_of_continuity',
				B: 'yttr:yttrium_ingot',
				C: 'ad_astra:calorite_ingot',
            },
            shape: [
				' A ',
				' BA',
				'C  '
            ]
        },

		// Continuous Shifter
        {
            output: 'yttr:shifter',
            inputs: {
				A: 'yttr:drop_of_continuity',
				B: 'yttr:yttrium_ingot',
				C: 'ad_astra:calorite_ingot',
            },
            shape: [
				'  A',
				' B ',
				'C  '
            ]
        },

		

    ].forEach((recipe) => {
        event.shaped(recipe.output, recipe.shape, recipe.inputs)
    });
}