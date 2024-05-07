onEvent('recipes', event => {
    yttrCentrifuging(event)
})

function yttrCentrifuging(event) {
    [
        // Ultrapure Condensed Desh
        {
            outputs: [
                {'item': 'kubejs:ultrapure_condensed_ostrum', 'count': 1},
            ],
            input: 'kubejs:ultrapure_ostrum_block',
            inputcount: 4,
            time: 1600,
        },

        // Ultrapure Desh
        {
            outputs: [
                {'item': 'kubejs:ultrapure_desh', 'count': 1},
                {'item': 'ad_astra:cheese', 'count': 4}
            ],
            input: 'ad_astra:desh_block',
            inputcount: 1,
            time: 800,
        },

        // Ultrapure Condensed Ostrum
        {
            outputs: [
                {'item': 'kubejs:ultrapure_condensed_ostrum', 'count': 1},
            ],
            input: 'kubejs:ultrapure_ostrum_block',
            inputcount: 4,
            time: 1600,
        },

        // Ultrapure Ostrum
        {
            outputs: [
                {'item': 'kubejs:ultrapure_ostrum', 'count': 1},
                {'item': 'ad_astra:ice_shard', 'count': 4}
            ],
            input: 'ad_astra:ostrum_block',
            inputcount: 1,
            time: 800,
        },
    ].forEach((recipe) => {
        event.custom({
            "type": "yttr:centrifuging",
            "time": recipe.time,
            "ingredient": {
                "item": recipe.input,
                "count": recipe.inputcount,
                "yttr:no_substitution": true
            },
            "results": recipe.outputs
        })
    })
}