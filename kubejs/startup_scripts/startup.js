// priority: 0

console.info('Hello, World! (You will only see this line once in console, during startup)')

onEvent('item.registry', event => {
	// Register new items here
	// event.create('example_item').displayName('Example Item')

    event.create("ultrapure_desh", "basic").displayName('Ultrapure Desh Ingot')
    event.create("ultrapure_ostrum", "basic").displayName('Ultrapure Ostrum Ingot')
    event.create("ultrapure_condensed_desh", "basic").displayName('Ultrapure Condensed Desh')
    event.create("ultrapure_condensed_ostrum", "basic").displayName('Ultrapure Condensed Ostrum')
    event.create("ultrapure_condensed_desh_filter", "basic").displayName('Ultrapure Condensed Desh Filter')
    event.create("ultrapure_condensed_ostrum_condensator", "basic").displayName('Ultrapure Condensed Ostrum Condensator')
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