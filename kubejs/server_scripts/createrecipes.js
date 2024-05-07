onEvent("recipes", event => {
    crushingRecipes(event);
    millingRecipes(event);
    itemApplication(event);
    fillingRecipes(event);
    mixingRecipes(event);
    cuttingRecipes(event);
    hauntingRecipes(event);
    splashingRecipes(event);
    mechanicalCraftingRecipes(event);
    pressingRecipes(event);
    compactingRecipes(event);

    ///// SEQUENCED ASSEMBLIES BECAUSE I SUCK AT CODING LMAO /////

    let inpress = 'kubejs:incomplete_inscriber_press';
    let inprint = 'kubejs:incomplete_printed_circuit';
    let insing = 'kubejs:incomplete_singularity';
    let placehold = 'create:incomplete_precision_mechanism';

    // Silicon Inscriber Press

    event.recipes.create.sequenced_assembly([
        Item.of('ae2:silicon_press'), // Output
    ], 'minecraft:quartz', [ // Input
        event.recipes.createDeploying(inpress, [inpress, 'ae2:silicon']),
        event.recipes.createDeploying(inpress, [inpress, 'ae2:sky_dust']),
        event.recipes.createPressing(inpress, inpress)
    ]).transitionalItem(inpress).loops(1)

    // Certus Inscriber Press

    event.recipes.create.sequenced_assembly([
        Item.of('ae2:calculation_processor_press'), // Output
    ], 'minecraft:quartz', [ // Input
        event.recipes.createDeploying(inpress, [inpress, 'ae2:certus_quartz_crystal']),
        event.recipes.createDeploying(inpress, [inpress, 'ae2:sky_dust']),
        event.recipes.createPressing(inpress, inpress)
    ]).transitionalItem(inpress).loops(1)

    event.recipes.create.sequenced_assembly([
        Item.of('ae2:calculation_processor'), // Output
    ], 'ae2:printed_calculation_processor', [ // Input
        event.recipes.createDeploying(inprint, [inprint, 'ae2:printed_silicon']),
        event.recipes.createDeploying(inprint, [inprint, 'ae2:fluix_dust']),
        event.recipes.createPressing(inprint, inprint)
    ]).transitionalItem(inprint).loops(1)

    // Gold Inscriber Press

    event.recipes.create.sequenced_assembly([
        Item.of('ae2:logic_processor_press'), // Output
    ], 'minecraft:quartz', [ // Input
        event.recipes.createDeploying(inpress, [inpress, 'minecraft:gold_ingot']),
        event.recipes.createDeploying(inpress, [inpress, 'ae2:sky_dust']),
        event.recipes.createPressing(inpress, inpress)
    ]).transitionalItem(inpress).loops(1)

    event.recipes.create.sequenced_assembly([
        Item.of('ae2:logic_processor'), // Output
    ], 'ae2:printed_logic_processor', [ // Input
        event.recipes.createDeploying(inprint, [inprint, 'ae2:printed_silicon']),
        event.recipes.createDeploying(inprint, [inprint, 'ae2:fluix_dust']),
        event.recipes.createPressing(inprint, inprint)
    ]).transitionalItem(inprint).loops(1)

    // Diamond Inscriber Press

    event.recipes.create.sequenced_assembly([
        Item.of('ae2:engineering_processor_press'), // Output
    ], 'minecraft:quartz', [ // Input
        event.recipes.createDeploying(inpress, [inpress, 'minecraft:diamond']),
        event.recipes.createDeploying(inpress, [inpress, 'ae2:sky_dust']),
        event.recipes.createPressing(inpress, inpress)
    ]).transitionalItem(inpress).loops(1)

    event.recipes.create.sequenced_assembly([
        Item.of('ae2:engineering_processor'), // Output
    ], 'ae2:printed_engineering_processor', [ // Input
        event.recipes.createDeploying(inprint, [inprint, 'ae2:printed_silicon']),
        event.recipes.createDeploying(inprint, [inprint, 'ae2:fluix_dust']),
        event.recipes.createPressing(inprint, inprint)
    ]).transitionalItem(inprint).loops(1)

    // Singularity Housing

    event.recipes.create.sequenced_assembly([
        Item.of('kubejs:singularity_housing'), // Output
    ], 'yttr:snare', [ // Input
        event.recipes.createDeploying(placehold,[placehold, 'yttr:shifter']).keepHeldItem(),
        event.recipes.createDeploying(placehold,[placehold, 'yttr:glassy_void']),
        event.recipes.createPressing(placehold,placehold)
    ]).transitionalItem(placehold).loops(8)

    // Yttrium Singularity

    event.recipes.create.sequenced_assembly([
        Item.of('kubejs:yttrium_singularity'), // Output
    ], 'kubejs:stabilised_housing', [ // Input
        event.recipes.createDeploying(insing,[insing, 'yttr:yttrium_ingot']),
        event.recipes.createCutting(insing, insing),
        event.recipes.createFilling(insing,[insing, {fluid: 'kubejs:supercritical_yttrium_fluid', amount: 81000}]),
        event.recipes.createFilling(insing,[insing, {fluid: 'kubejs:supercritical_yttrium_fluid', amount: 81000}]),
        event.recipes.createPressing(insing, insing)
    ]).transitionalItem(insing).loops(1)

    // Desh Singularity

    event.recipes.create.sequenced_assembly([
        Item.of('kubejs:desh_singularity'), // Output
    ], 'kubejs:stabilised_housing', [ // Input
        event.recipes.createDeploying(insing,[insing, 'ad_astra:desh_ingot']),
        event.recipes.createCutting(insing, insing),
        event.recipes.createFilling(insing,[insing, {fluid: 'kubejs:supercritical_desh_fluid', amount: 81000}]),
        event.recipes.createFilling(insing,[insing, {fluid: 'kubejs:supercritical_desh_fluid', amount: 81000}]),
        event.recipes.createPressing(insing, insing)
    ]).transitionalItem(insing).loops(1)

    // Ostrum Singularity

    event.recipes.create.sequenced_assembly([
        Item.of('kubejs:ostrum_singularity'), // Output
    ], 'kubejs:stabilised_housing', [ // Input
        event.recipes.createDeploying(insing,[insing, 'ad_astra:ostrum_ingot']),
        event.recipes.createCutting(insing, insing),
        event.recipes.createFilling(insing,[insing, {fluid: 'kubejs:supercritical_ostrum_fluid', amount: 81000}]),
        event.recipes.createFilling(insing,[insing, {fluid: 'kubejs:supercritical_ostrum_fluid', amount: 81000}]),
        event.recipes.createPressing(insing, insing)
    ]).transitionalItem(insing).loops(1)

    // Calorite Singularity

    event.recipes.create.sequenced_assembly([
        Item.of('kubejs:calorite_singularity'), // Output
    ], 'kubejs:stabilised_housing', [ // Input
        event.recipes.createDeploying(insing,[insing, 'ad_astra:calorite_ingot']),
        event.recipes.createCutting(insing, insing),
        event.recipes.createFilling(insing,[insing, {fluid: 'kubejs:supercritical_calorite_fluid', amount: 81000}]),
        event.recipes.createFilling(insing,[insing, {fluid: 'kubejs:supercritical_calorite_fluid', amount: 81000}]),
        event.recipes.createPressing(insing, insing)
    ]).transitionalItem(insing).loops(1)

    // Certus Singularity

    event.recipes.create.sequenced_assembly([
        Item.of('kubejs:certus_singularity'), // Output
    ], 'kubejs:stabilised_housing', [ // Input
        event.recipes.createDeploying(insing,[insing, 'ae2:certus_quartz_crystal']),
        event.recipes.createCutting(insing, insing),
        event.recipes.createFilling(insing,[insing, {fluid: 'kubejs:supercritical_certus_fluid', amount: 81000}]),
        event.recipes.createFilling(insing,[insing, {fluid: 'kubejs:supercritical_certus_fluid', amount: 81000}]),
        event.recipes.createPressing(insing, insing)
    ]).transitionalItem(insing).loops(1)

    // Uraninite Singularity

    event.recipes.create.sequenced_assembly([
        Item.of('kubejs:uraninite_singularity'), // Output
    ], 'kubejs:stabilised_housing', [ // Input
        event.recipes.createDeploying(insing,[insing, 'powah:uraninite']),
        event.recipes.createCutting(insing, insing),
        event.recipes.createFilling(insing,[insing, {fluid: 'kubejs:supercritical_uraninite_fluid', amount: 81000}]),
        event.recipes.createFilling(insing,[insing, {fluid: 'kubejs:supercritical_uraninite_fluid', amount: 81000}]),
        event.recipes.createPressing(insing, insing)
    ]).transitionalItem(insing).loops(1)

});

function compactingRecipes(event) {

    ///// UNHEATED RECIPES /////

    [
        // Printed Silicon
        {
            outputs: [
                'ae2:printed_silicon',
                'ae2:silicon_press'
            ],
            inputs: [
                'ae2:silicon',
                'ae2:silicon_press'
            ]
        },

        // Calculation Processor
        {
            outputs: [
                'ae2:printed_calculation_processor',
                'ae2:calculation_processor_press'
            ],
            inputs: [
                'ae2:certus_quartz_crystal',
                'ae2:calculation_processor_press'
            ]
        },

        // Logic Processor
        {
            outputs: [
                'ae2:printed_logic_processor',
                'ae2:logic_processor_press'
            ],
            inputs: [
                'minecraft:gold_ingot',
                'ae2:logic_processor_press'
            ]
        },

        // Engineering Processor
        {
            outputs: [
                'ae2:printed_engineering_processor',
                'ae2:engineering_processor_press'
            ],
            inputs: [
                'minecraft:diamond',
                'ae2:engineering_processor_press'
            ]
        },

        // Engineering Processor
        {
            outputs: [
                'ae2:printed_engineering_processor',
                'ae2:engineering_processor_press'
            ],
            inputs: [
                'minecraft:diamond',
                'ae2:engineering_processor_press'
            ]
        },
    ].forEach((recipe) => {
        event.recipes.createCompacting(recipe.outputs, recipe.inputs)
    });

    ///// HEATED RECIPES /////

    [
        // Ad Astra Plates
        {
            outputs: [
                'ad_astra:iron_plate'
            ],
            inputs: [
                "minecraft:iron_ingot"
            ]
        },
        {
            outputs: [
                'ad_astra:steel_plate'
            ],
            inputs: [
                "ad_astra:steel_ingot"
            ]
        },
        {
            outputs: [
                'ad_astra:desh_plate'
            ],
            inputs: [
                "ad_astra:desh_ingot"
            ]
        },
        {
            outputs: [
                'ad_astra:ostrum_plate'
            ],
            inputs: [
                "minecraft:ostrum_ingot"
            ]
        },
    ].forEach((recipe) => {
        event.recipes.createCompacting(recipe.outputs, recipe.inputs).heated()
    });

    ///// SUPERHEATED RECIPES /////

    [
        // Calorite Plate
        {
            outputs: [
                'ad_astra:calorite_plate'
            ],
            inputs: [
                "ad_astra:calorite_ingot"
            ]
        },
    ].forEach((recipe) => {
        event.recipes.createCompacting(recipe.outputs, recipe.inputs).superheated()
    });
}

function createFilling(event) {
    [
        // Stabilised Singularity Housing
        {
            input: 'kubejs:singularity_housing',
            output: 'kubejs:stabilised_housing',
            fluid: 'ad_astra:cryo_fuel',
            amount: 81000
        },

    ].forEach((recipe) => {
        event.recipes.createFilling(recipe.output, [
            recipe.input,
            {fluid: recipe.fluid, amount: recipe.amount},
        ]);
    });
}

function mechanicalCraftingRecipes(event) {
    [
        // Ultrapure Condensed Desh Filter
		{
            output: 'kubejs:ultrapure_condensed_desh_filter',
            shape: [
                'ABA',
				'CDC',
				'ABA'
            ],
            inputs: {
                A: 'yttr:yttrium_ingot',
				B: 'yttr:yttrium_nugget',
				C: 'create:filter',
				D: 'kubejs:ultrapure_condensed_desh'
            }
        },

		// Ultrapure Condensed Ostrum Condensator
		{
            output: 'kubejs:ultrapure_condensed_desh_filter',
            shape: [
                'ABA',
				'CDC',
				'AEA'
            ],
            inputs: {
                A: 'yttr:yttrium_ingot',
				B: 'create:nozzle',
				C: 'yttr:yttrium_nugget',
				D: 'kubejs:ultrapure_condensed_ostrum',
				E: 'yttr:drop_of_continuity'
            }
        },
		
		// Pressure Chamber
        {
            output: Item.of("custommachinery:custom_machine_item", {machine: 'portalsandplanets:pressure_chamber'}),
            shape: [
                ' AAA ',
                'ABCBA',
                'ADEDA',
                'AFGFA',
                ' AAA '
            ],
            inputs: {
                A: "yttr:yttrium_ingot",
                B: "create:smart_fluid_pipe",
                C: "create:depot",
                D: "create:fluid_tank",
                E: "kubejs:ultrapure_desh",
                F: "immersive_aircraft:industrial_gears",
                G: "create:blaze_burner"
            }
        },

        // Void Sifter
        {
            output: Item.of("custommachinery:custom_machine_item", {machine: 'portalsandplanets:voidsifter'}),
            shape: [
                ' HIH ',
                'ABCBA',
                'ADEDA',
                'ABGBA',
                ' AAA '
            ],
            inputs: {
                A: "yttr:yttrium_ingot",
                B: "yttr:neodymium_block",
                C: "yttr:reinforced_cleaver",
                D: "create:fluid_tank",
                E: "kubejs:ultrapure_condensed_desh_filter",
                G: "create:depot",
                H: "yttr:magtank",
                I: "yttr:magtube"
            }
        },
    ].forEach((recipe) => {
		event.recipes.create.mechanical_crafting(
            recipe.output,
            recipe.shape,
            recipe.inputs
        );
    });
}

function createMixing(event) {
	[
		// Steel Ingot
		{
			outputs: [
				'ad_astra:steel_ingot',
			],
			inputs: [
				'4x minecraft:coal',
				'minecraft:iron_ingot',
			],
			heat: 'heated',
			time: 20
		}
	].forEach((recipe => {
		event.recipes
			.createMixing(recipe.outputs, recipe.inputs)
			.heatRequirement(recipe.heat ?? '')
			.processingTime(recipe.time ?? 100)
	}))
}

function createHaunting(event) {
	[
		['minecraft:charcoal','minecraft:coal'],
	].forEach((recipe) => {
		event.recipes.createHaunting(recipe[1], recipe[2])
	})
}