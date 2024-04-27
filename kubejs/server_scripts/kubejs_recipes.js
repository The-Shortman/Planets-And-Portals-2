// priority: 0

settings.logAddedRecipes = true
settings.logRemovedRecipes = true
settings.logSkippedRecipes = false
settings.logErroringRecipes = true

console.info('Hello, World! (You will see this line every time server resources reload)')

onEvent('recipes', event => {

    let insing = 'kubejs:incomplete_singularity'
    // event.remove({output: 'ae2:inscriber'})

    // Singularity Housing



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

    event.recipes.create.sequenced_assembly([
        Item.of('kubejs:desh_singularity'), // Output
    ], 'kubejs:stabilised_housing', [ // Input
        event.recipes.createDeploying(insing,[insing, 'ad_astra:desh_ingot']),
        event.recipes.createCutting(insing, insing),
        event.recipes.createFilling(insing,[insing, {fluid: 'kubejs:supercritical_desh_fluid', amount: 81000}]),
        event.recipes.createFilling(insing,[insing, {fluid: 'kubejs:supercritical_desh_fluid', amount: 81000}]),
        event.recipes.createPressing(insing, insing)
    ]).transitionalItem(insing).loops(1)

    event.recipes.create.sequenced_assembly([
        Item.of('kubejs:ostrum_singularity'), // Output
    ], 'kubejs:stabilised_housing', [ // Input
        event.recipes.createDeploying(insing,[insing, 'ad_astra:ostrum_ingot']),
        event.recipes.createCutting(insing, insing),
        event.recipes.createFilling(insing,[insing, {fluid: 'kubejs:supercritical_ostrum_fluid', amount: 81000}]),
        event.recipes.createFilling(insing,[insing, {fluid: 'kubejs:supercritical_ostrum_fluid', amount: 81000}]),
        event.recipes.createPressing(insing, insing)
    ]).transitionalItem(insing).loops(1)

    event.recipes.create.sequenced_assembly([
        Item.of('kubejs:calorite_singularity'), // Output
    ], 'kubejs:stabilised_housing', [ // Input
        event.recipes.createDeploying(insing,[insing, 'ad_astra:calorite_ingot']),
        event.recipes.createCutting(insing, insing),
        event.recipes.createFilling(insing,[insing, {fluid: 'kubejs:supercritical_calorite_fluid', amount: 81000}]),
        event.recipes.createFilling(insing,[insing, {fluid: 'kubejs:supercritical_calorite_fluid', amount: 81000}]),
        event.recipes.createPressing(insing, insing)
    ]).transitionalItem(insing).loops(1)

    event.recipes.create.sequenced_assembly([
        Item.of('kubejs:certus_singularity'), // Output
    ], 'kubejs:stabilised_housing', [ // Input
        event.recipes.createDeploying(insing,[insing, 'ae2:certus_quartz_crystal']),
        event.recipes.createCutting(insing, insing),
        event.recipes.createFilling(insing,[insing, {fluid: 'kubejs:supercritical_certus_fluid', amount: 81000}]),
        event.recipes.createFilling(insing,[insing, {fluid: 'kubejs:supercritical_certus_fluid', amount: 81000}]),
        event.recipes.createPressing(insing, insing)
    ]).transitionalItem(insing).loops(1)

    event.recipes.create.sequenced_assembly([
        Item.of('kubejs:uraninite_singularity'), // Output
    ], 'kubejs:stabilised_housing', [ // Input
        event.recipes.createDeploying(insing,[insing, 'powah:uraninite']),
        event.recipes.createCutting(insing, insing),
        event.recipes.createFilling(insing,[insing, {fluid: 'kubejs:supercritical_uraninite_fluid', amount: 81000}]),
        event.recipes.createFilling(insing,[insing, {fluid: 'kubejs:supercritical_uraninite_fluid', amount: 81000}]),
        event.recipes.createPressing(insing, insing)
    ]).transitionalItem(insing).loops(1)
    
})