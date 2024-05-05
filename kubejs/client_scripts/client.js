// priority: 0

console.info('Hello, World! (You will see this line every time client resources reload)')

onEvent('jei.hide.items', event => {
	// Hide items in JEI here
	// event.hide('minecraft:cobblestone')

	event.hide([
		'kubejs:portal_actor',
		'kubejs:incomplete_inscriber_press',
		'kubejs:incomplete_printed_circuit'
	])
})

onEvent('item.tooltip', tooltip => {
	tooltip.add([
		'toms_storage:ts.adv_wireless_terminal',
		'toms_storage:ts.open_crate',
		'toms_storage:ts.trim',
		'toms_storage:ts.painted_trim',
		'toms_storage:ts.inventory_cable',
		'toms_storage:ts.inventory_cable_framed',
		'toms_storage:ts.inventory_cable_connector',
		'toms_storage:ts.inventory_cable_connector_filtered',
		'toms_storage:ts.inventory_proxy',
		'toms_storage:ts.inventory_hopper_basic',
		'toms_storage:ts.level_emitter',
		'toms_storage:ts.inventory_cable_connector_framed'
	], 'Disabled - Use AE2 for more complex storage management')
})