// priority: 0

settings.logAddedRecipes = true
settings.logRemovedRecipes = true
settings.logSkippedRecipes = false
settings.logErroringRecipes = true

console.info('Hello, World! (You will see this line every time server resources reload)')

onEvent('recipes', event => {

    let inter = 'kubejs:incomplete_inscriber_press'
    event.remove({output: 'ae2:inscriber'})

    // Silicon Inscriber Press

    event.remove({output: 'ae2:silicon_press'})
    event.recipes.create.sequenced_assembly([
        Item.of('ae2:silicon_press'), // Output
    ], 'minecraft:quartz', [ // Input
        event.recipes.createDeploying(inter, [inter, 'ae2:silicon']),
        event.recipes.createDeploying(inter, [inter, 'ae2:sky_dust']),
        event.recipes.createPressing(inter, inter)
    ]).transitionalItem(inter).loops(1)

    event.remove({output: 'ae2:printed_silicon'})
    event.recipes.createCompacting(['ae2:printed_silicon','ae2:silicon_press'],['ae2:silicon','ae2:silicon_press'])

    // Certus Inscriber Press

    event.remove({output: 'ae2:calculation_processor_press'})
    event.recipes.create.sequenced_assembly([
        Item.of('ae2:calculation_processor_press'), // Output
    ], 'minecraft:quartz', [ // Input
        event.recipes.createDeploying(inter, [inter, 'ae2:certus_quartz_crystal']),
        event.recipes.createDeploying(inter, [inter, 'ae2:sky_dust']),
        event.recipes.createPressing(inter, inter)
    ]).transitionalItem(inter).loops(1)

    event.remove({output: 'ae2:printed_calculation_processor'})
    event.recipes.createCompacting(['ae2:printed_calculation_processor','ae2:calculation_processor_press'],['ae2:certus_quartz_crystal','ae2:calculation_processor_press'])

    event.remove({output: 'ae2:calculation_processor'})
    event.recipes.create.sequenced_assembly([
        Item.of('ae2:calculation_processor'), // Output
    ], 'ae2:printed_calculation_processor', [ // Input
        event.recipes.createDeploying(inter, [inter, 'ae2:printed_silicon']),
        event.recipes.createDeploying(inter, [inter, 'ae2:fluix_dust']),
        event.recipes.createPressing(inter, inter)
    ]).transitionalItem(inter).loops(1)

    // Gold Inscriber Press

    event.remove({output: 'ae2:logic_processor_press'})
    event.recipes.create.sequenced_assembly([
        Item.of('ae2:logic_processor_press'), // Output
    ], 'minecraft:quartz', [ // Input
        event.recipes.createDeploying(inter, [inter, 'minecraft:gold_ingot']),
        event.recipes.createDeploying(inter, [inter, 'ae2:sky_dust']),
        event.recipes.createPressing(inter, inter)
    ]).transitionalItem(inter).loops(1)

    event.remove({output: 'ae2:printed_logic_processor'})
    event.recipes.createCompacting(['ae2:printed_logic_processor','ae2:logic_processor_press'],['minecraft:gold_ingot','ae2:logic_processor_press'])

    event.remove({output: 'ae2:logic_processor'})
    event.recipes.create.sequenced_assembly([
        Item.of('ae2:logic_processor'), // Output
    ], 'ae2:printed_logic_processor', [ // Input
        event.recipes.createDeploying(inter, [inter, 'ae2:printed_silicon']),
        event.recipes.createDeploying(inter, [inter, 'ae2:fluix_dust']),
        event.recipes.createPressing(inter, inter)
    ]).transitionalItem(inter).loops(1)

    // Diamond Inscriber Press

    event.remove({output: 'ae2:engineering_processor_press'})
    event.recipes.create.sequenced_assembly([
        Item.of('ae2:engineering_processor_press'), // Output
    ], 'minecraft:quartz', [ // Input
        event.recipes.createDeploying(inter, [inter, 'minecraft:diamond']),
        event.recipes.createDeploying(inter, [inter, 'ae2:sky_dust']),
        event.recipes.createPressing(inter, inter)
    ]).transitionalItem(inter).loops(1)

    event.remove({output: 'ae2:printed_engineering_processor'})
    event.recipes.createCompacting(['ae2:printed_engineering_processor','ae2:engineering_processor_press'],['minecraft:diamond','ae2:engineering_processor_press'])

    event.remove({output: 'ae2:engineering_processor'})
    event.recipes.create.sequenced_assembly([
        Item.of('ae2:engineering_processor'), // Output
    ], 'ae2:printed_engineering_processor', [ // Input
        event.recipes.createDeploying(inter, [inter, 'ae2:printed_silicon']),
        event.recipes.createDeploying(inter, [inter, 'ae2:fluix_dust']),
        event.recipes.createPressing(inter, inter)
    ]).transitionalItem(inter).loops(1)

})