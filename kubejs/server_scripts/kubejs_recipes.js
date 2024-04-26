// priority: 0

settings.logAddedRecipes = true
settings.logRemovedRecipes = true
settings.logSkippedRecipes = false
settings.logErroringRecipes = true

console.info('Hello, World! (You will see this line every time server resources reload)')

onEvent('recipes', event => {

    let insing = 'kubejs:incomplete_singularity';
    // event.remove({output: 'ae2:inscriber'})

    // Iron Singularity

    event.recipes.create.sequenced_assembly([
        Item.of('kubejs:iron_singularity'), // Output
    ], 'minecraft:stabilised_housing', [ // Input
        event.recipes.createDeploying(insing,[insing, 'minecraft:iron']),
        event.recipes.createCutting(insing, insing),
        event.recipes.createFilling(insing,[insing, ]),
        event.recipes.createFilling(insing,[insing, 'kubejs:supercritical_iron_fluid']),
        event.recipes.createPressing(insing, insing)
    ]).transitionalItem(insing).loops(1)
    
})