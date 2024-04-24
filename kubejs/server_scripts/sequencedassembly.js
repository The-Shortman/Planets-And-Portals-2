// priority: 0

settings.logAddedRecipes = true
settings.logRemovedRecipes = true
settings.logSkippedRecipes = false
settings.logErroringRecipes = true

console.info('Hello, World! (You will see this line every time server resources reload)')

onEvent('recipes', event => {

    let inter = 'create:incomplete_precision_mechanism'

    // Silicon Inscriber Press

    event.remove({output: 'ae2:silicon_press'})
    event.recipes.create.sequenced_assembly([
        Item.of('ae2:silicon_press'), // Output
    ], 'minecraft:quartz', [ // Input
        event.recipes.createDeploying(inter, [inter, 'ae2:silicon']),
        event.recipes.createDeploying(inter, [inter, 'ae2:sky_dust']),
        event.recipes.createPressing(inter, inter)
    ]).transitionalItem(inter).loops(1)

    // Certus Inscriber Press

    event.remove({output: 'ae2:calculation_processor_press'})
    event.recipes.create.sequenced_assembly([
        Item.of('ae2:calculation_processor_press'), // Output
    ], 'minecraft:quartz', [ // Input
        event.recipes.createDeploying(inter, [inter, 'ae2:certus_quartz_crystal']),
        event.recipes.createDeploying(inter, [inter, 'ae2:sky_dust']),
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

    // Diamond Inscriber Press

    event.remove({output: 'ae2:engineering_processor_press'})
    event.recipes.create.sequenced_assembly([
        Item.of('ae2:engineering_processor_press'), // Output
    ], 'minecraft:quartz', [ // Input
        event.recipes.createDeploying(inter, [inter, 'minecraft:diamond']),
        event.recipes.createDeploying(inter, [inter, 'ae2:sky_dust']),
        event.recipes.createPressing(inter, inter)
    ]).transitionalItem(inter).loops(1)

})