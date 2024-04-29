// priority: 0

console.info('Hello, World! (You will only see this line once in console, during startup)')

onEvent('fluid.registry', event => {

	event.create('supercritical_desh_fluid')
		.thinTexture(0xDBA751)
		.bucketColor(0xDBA751)
		.displayName('Supercritical Desh Fluid')
        .stillTexture('kubejs:block/fluid_flow')
        .flowingTexture('kubejs:block/fluid_flow')
	
	event.create('supercritical_ostrum_fluid')
		.thinTexture(0xC677AE)
		.bucketColor(0xC677AE)
		.displayName('Supercritical Ostrum Fluid')
        .stillTexture('kubejs:block/fluid_flow')
        .flowingTexture('kubejs:block/fluid_flow')
	
	event.create('supercritical_yttrium_fluid')
		.thinTexture(0xB7B7B7)
		.bucketColor(0xB7B7B7)
		.displayName('Supercritical Yttrium Fluid')
        .stillTexture('kubejs:block/fluid_flow')
        .flowingTexture('kubejs:block/fluid_flow')

	event.create('supercritical_calorite_fluid')
		.thinTexture(0xEE6262)
		.bucketColor(0xEE6262)
		.displayName('Supercritical Calorite Fluid')
        .stillTexture('kubejs:block/fluid_flow')
        .flowingTexture('kubejs:block/fluid_flow')
	
	event.create('supercritical_certus_fluid')
		.thinTexture(0xAEF4FF)
		.bucketColor(0xAEF4FF)
		.displayName('Supercritical Certus Fluid')
        .stillTexture('kubejs:block/fluid_flow')
        .flowingTexture('kubejs:block/fluid_flow')

	event.create('supercritical_uraninite_fluid')
		.thinTexture(0x313D44)
		.bucketColor(0x313D44)
		.displayName('Supercritical Uraninite Fluid')
        .stillTexture('kubejs:block/fluid_flow')
        .flowingTexture('kubejs:block/fluid_flow')
})

onEvent('item.registry', event => {
	// Register new items here
	// event.create('example_item').displayName('Example Item')

    event.create("ultrapure_desh", "basic").displayName('Ultrapure Desh Ingot')
    event.create("ultrapure_ostrum", "basic").displayName('Ultrapure Ostrum Ingot')
    event.create("ultrapure_condensed_desh", "basic").displayName('Ultrapure Condensed Desh')
    event.create("ultrapure_condensed_ostrum", "basic").displayName('Ultrapure Condensed Ostrum')
    event.create("ultrapure_condensed_desh_filter", "basic").displayName('Ultrapure Condensed Desh Filter')
    event.create("ultrapure_condensed_ostrum_condensator", "basic").displayName('Ultrapure Condensed Ostrum Condensator')
    event.create("incomplete_inscriber_press", "create:sequenced_assembly").displayName('Incomplete Inscriber Press')
    event.create("incomplete_printed_circuit", "create:sequenced_assembly").displayName('Incomplete Printed Circuit')
    event.create("singularity_housing", "basic").displayName('Singularity Housing').rarity("uncommon")
    event.create("stabilised_housing", "basic").displayName('Stabilised Singularity Housing').rarity("uncommon")
    event.create("incomplete_singularity", "create:sequenced_assembly").displayName('Incomplete Singularity')
    event.create("yttrium_singularity", "basic").displayName('Yttrium Singularity').rarity("rare")
    event.create("desh_singularity", "basic").displayName('Desh Singularity').rarity("rare")
    event.create("ostrum_singularity", "basic").displayName('Ostrum Singularity').rarity("rare")
    event.create("calorite_singularity", "basic").displayName('Calorite Singularity').rarity("rare")
    event.create("certus_singularity", "basic").displayName('Certus Singularity').rarity("rare")
    event.create("uraninite_singularity", "basic").displayName('Uraninite Singularity').rarity("rare")
    event.create("portal_actor","basic").displayName('portal.actor.tile').rarity("epic")


})

onEvent('block.registry', event => {
	// Register new blocks here
	// event.create('example_block').material('wood').hardness(1.0).displayName('Example Block')

    event.create('ultrapure_desh_block')
        .material('metal')
        .hardness(0.5)
        .displayName('Ultrapure Desh Block')
        .tagBlock('minecraft:mineable/pickaxe')
        .tagBlock('minecraft:needs_diamond_tool')
        .requiresTool(true)

    event.create('ultrapure_ostrum_block')
        .material('metal')
        .hardness(0.5)
        .displayName('Ultrapure Ostrum Block')
        .tagBlock('minecraft:mineable/pickaxe')
        .tagBlock('minecraft:needs_diamond_tool')
        .requiresTool(true)
})

onEvent('worldgen.remove', event => {
    console.info('HELP')

    // Worldgen removals

    event.removeOres(props => {
        props.blocks = [
            'ae2:quartz_ore',
            'ae2:deepslate_quartz_ore',
        ]
    })

})

// WORLDGEN ADDITIONS //

onEvent('worldgen.add', event => {
    const { anchors } = event

    // Mercury certus quartz generator

    event.addOre((ore) => {
        ore.id = 'kubejs:mercury_certus_gen'
        ore.biomes = ['ad_astra:mercury_deltas']
        ore.addTarget('#ad_astra:mercury_ore_replaceables', 'ae2:quartz_ore')

        ore.count([15,50])
        	.squared()
            .triangleHeight(0,104)
        ore.size = 16
    })

    event.addOre((ore) => {
        ore.id = 'kubejs:mercury_skystone_gen'
        ore.biomes = ['ad_astra:mercury_deltas']
        ore.addTarget('#ad_astra:mercury_ore_replaceables', 'ae2:sky_stone_block')

        ore.count([1,3])
        	.squared()
            .triangleHeight(0,104)
        ore.size = 32
    })

    // Glacio stone uraninite generator

    event.addOre((ore) => {
        ore.id = 'kubejs:glacio_poor_uraninite_gen'
        ore.biomes = ['ad_astra:glacio_snowy_barrens','ad_astra:glacio_ice_peaks']
        ore.addTarget('#ad_astra:glacio_ore_replaceables', 'powah:uraninite_ore_poor')

        ore.count([1,5])
        	.squared()
            .triangleHeight(0,104)
        ore.size = 16
    })

    event.addOre((ore) => {
        ore.id = 'kubejs:glacio_average_uraninite_gen'
        ore.biomes = ['ad_astra:glacio_snowy_barrens','ad_astra:glacio_ice_peaks']
        ore.addTarget('#ad_astra:glacio_ore_replaceables', 'powah:uraninite_ore')

        ore.count([1,3])
        	.squared()
            .triangleHeight(0,54)
        ore.size = 8
    })

    event.addOre((ore) => {
        ore.id = 'kubejs:glacio_dense_uraninite_gen'
        ore.biomes = ['ad_astra:glacio_snowy_barrens','ad_astra:glacio_ice_peaks']
        ore.addTarget('#ad_astra:glacio_ore_replaceables', 'powah:uraninite_ore_dense')

        ore.count([1])
        	.squared()
            .triangleHeight(0,24)
        ore.size = 4
    })

    // Glacio deepslate uraninite generator

    event.addOre((ore) => {
        ore.id = 'kubejs:glacio_poor_deepslate_uraninite_gen'
        ore.biomes = ['ad_astra:glacio_snowy_barrens','ad_astra:glacio_ice_peaks']
        ore.addTarget('minecraft:deepslate','powah:deepslate_uraninite_ore_poor')

        ore.count([1,5])
        	.squared()
            .triangleHeight(0,104)
        ore.size = 16
    })

    event.addOre((ore) => {
        ore.id = 'kubejs:glacio_average_deepslate_uraninite_gen'
        ore.biomes = ['ad_astra:glacio_snowy_barrens','ad_astra:glacio_ice_peaks']
        ore.addTarget('minecraft:deepslate','powah:deepslate_uraninite_ore')

        ore.count([1,3])
        	.squared()
            .triangleHeight(0,54)
        ore.size = 8
    })

    event.addOre((ore) => {
        ore.id = 'kubejs:glacio_dense_deepslate_uraninite_gen'
        ore.biomes = ['ad_astra:glacio_snowy_barrens','ad_astra:glacio_ice_peaks']
        ore.addTarget('minecraft:deepslate','powah:deepslate_uraninite_ore_dense')

        ore.count([1])
        	.squared()
            .triangleHeight(0,24)
        ore.size = 4
    })

    event.addOre((ore) => {
        ore.id = 'kubejs:glacio_dry_ice_gen'
        ore.biomes = ['ad_astra:glacio_snowy_barrens']
        ore.addTarget('#ad_astra:glacio_ore_replaceables','powah:dry_ice')

        ore.count([5,10])
        	.squared()
            .triangleHeight(0,104)
        ore.size = 4
    })
})