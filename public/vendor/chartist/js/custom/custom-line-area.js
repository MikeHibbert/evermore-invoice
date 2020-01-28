var chart = new Chartist.Line('.lineArea', {
	labels: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
	series: [
		[
			{meta: 'Total Income', value: 500 },
			{meta: 'Total Income', value: 2000},
			{meta: 'Total Income', value: 1200},
			{meta: 'Total Income', value: 3000},
			{meta: 'Total Income', value: 3500},
			{meta: 'Total Income', value: 2000},
			{meta: 'Total Income', value: 5000},
		]
	]
}, {
	// Remove this configuration to see that chart rendered with cardinal spline interpolation
	// Sometimes, on large jumps in data values, it's better to use simple smoothing.
	lineSmooth: Chartist.Interpolation.simple({
		divisor: 2
	}),
	height: "265px",
	fullWidth: true,
	axisX: {
		offset: 10,
	}, 
	axisY: {
		offset: 30,
	},
	plugins: [
		Chartist.plugins.tooltip()
	],
	showArea: true,
});
