onEvent('recipes', e => {
    e.recipes.custommachinery.custom_machine("portalsandplanets:voidsifter", 2000)
        .dimensionWhitelist("minecraft:overworld")
        .requirePosition("", "(,-50)", "")
        .requireFluid(Fluid.of("yttr:void", 3000))
        .outputItem(Item.of("yttr:ultrapure_yttrium"))
})