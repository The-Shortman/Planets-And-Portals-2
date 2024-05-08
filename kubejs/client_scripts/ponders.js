onEvent("ponder.tag", (event) => {
    /**
     * "kubejs:getting_started" -> the tag name
     * "minecraft:paper"        -> the icon
     * "Getting Started"        -> the title
     * "This is a description"  -> the description
     * [...items]               -> default items
     */
    event.createTag("portalsandplanets:custom_machinery", "yttr:centrifuge", "Planets and Portals Custom Machinery", "Going industrial", [
        // some default items
        "portalsandplanets:voidsifter_dummy",
        "portalsandplanets:pressure_chamber_dummy_active",
    ]);
});

onEvent("ponder.registry", (event) => {

    // Voidsifter
    event.create("portalsandplanets:voidsifter_dummy").scene("voidsifter_structure", "Building the Void Sifter", 'kubejs:voidsifter_structure', (scene, util) => {
        scene.showBasePlate();
        scene.idle(5);
        scene.world.showSection([1, 1, 1, 3, 1, 3], Facing.DOWN);
        scene.idle(40);
        scene.world.showSection([1, 2, 1, 3, 2, 3], Facing.DOWN);
        scene.idle(40);
        scene.world.showSection([1, 3, 1, 3, 3, 3], Facing.DOWN);
        scene.idle(40);
    });

    // Pressure Chambers
    pressureChamberStructurePonders(event);
});

function pressureChamberStructurePonders(event) {
    [
        /**
         * name = id of ponder
         * desc = displayed ponder subtitle
         * nbt = structure file of scene
         */
        {
            name: "yttrium_pressurechamber",
            desc: "Building the Yttrium Pressure Chamber",
            nbt: "kubejs:yttrium_pressurechamber",
        },
        {
            name: "desh_pressurechamber",
            desc: "Building the Desh Pressure Chamber",
            nbt: "kubejs:desh_pressurechamber",
        },
        {
            name: "ostrum_pressurechamber",
            desc: "Building the Ostrum Pressure Chamber",
            nbt: "kubejs:ostrum_pressurechamber",
        },
        {
            name: "calorite_pressurechamber",
            desc: "Building the Calorite Pressure Chamber",
            nbt: "kubejs:calorite_pressurechamber",
        },
        {
            name: "certus_pressurechamber",
            desc: "Building the Certus Pressure Chamber",
            nbt: "kubejs:certus_pressurechamber",
        },
        {
            name: "uraninite_pressurechamber",
            desc: "Building the Uraninite Pressure Chamber",
            nbt: "kubejs:uraninite_pressurechamber",
        },
    ].forEach((ponder) => {
        event.create("portalsandplanets:pressure_chamber_dummy_active").scene(ponder.name, ponder.desc, ponder.nbt, (scene, util) => {
            scene.showBasePlate();
            scene.idle(5);
            scene.world.showSection([1, 1, 1, 3, 1, 3], Facing.DOWN);
            scene.idle(40);
            scene.world.showSection([1, 2, 1, 3, 2, 3], Facing.DOWN);
            scene.idle(40);
            scene.world.showSection([1, 3, 1, 3, 3, 3], Facing.DOWN);
            scene.idle(40);
        });
    })
}