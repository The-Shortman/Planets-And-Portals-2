onEvent("recipes", (event) => {
    [
        // Minecraft
        {output: 'minecraft:ender_eye'},

        // Applied Energistics 2
        {output: 'ae2:inscriber'},
        {output: 'ae2:silicon_press'},
        {output: 'ae2:printed_silicon'},
        {output: 'ae2:calculation_processor_press'},
        {output: 'ae2:printed_calculation_processor'},
        {output: 'ae2:calculation_processor'},
        {output: 'ae2:logic_processor_press'},
        {output: 'ae2:printed_logic_processor'},
        {output: 'ae2:logic_processor'},
        {output: 'ae2:engineering_processor_press'},
        {output: 'ae2:printed_engineering_processor'},
        {output: 'ae2:engineering_processor'},

        // Tom's Simple Storage
        {mod: 'toms_storage'},

        // Ad Astra
        {output: 'ad_astra:compressor'},
        {output: 'ad_astra:rocket_nose_cone'},
        {output: 'ad_astra:nasa_workbench'},
        {output: 'ad_astra:oxygen_distributor'},
        {output: 'ad_astra:cryo_freezer'},
        {output: 'ad_astra:steel_ingot', input: 'minecraft:iron_ingot'},
        {output: 'ad_astra:oxygen_loader'},
        {output: 'ad_astra:netherite_space_suit'},
        {output: 'ad_astra:netherite_space_helmet'},
        {output: 'ad_astra:netherite_space_boots'},
        {output: 'ad_astra:desh_engine'},
        {output: 'ad_astra:ostrum_engine'},
        {output: 'ad_astra:calorite_engine'},

        // Yttr
        {output: 'yttr:rifle'},
        {output: 'yttr:empty_ammo_can'},
        {output: 'yttr:can_filler'},
        {output: 'yttr:ammo_pack'},
        {output: 'yttr:armor_plating'},
        {output: 'yttr:projector'},
        {output: 'yttr:shifter'},

        // Powah!
        {output: 'powah:dielectric_paste'},

    ].forEach((recipe) => {
        event.remove(recipe);
    });
});