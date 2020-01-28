new Chartist.Line('.custom-area-chart4', {
	labels: [1, 2, 3, 4, 5, 6, 7, 8],
  series: [
		[
			{meta: 'Bookings in October', value: 500},
			{meta: 'Bookings in October', value: 900},
			{meta: 'Bookings in October', value: 700},
			{meta: 'Bookings in October', value: 800},
			{meta: 'Bookings in October', value: 550},
			{meta: 'Bookings in October', value: 300},
			{meta: 'Bookings in October', value: 500},
			{meta: 'Bookings in October', value: 300},
		]
	]
}, {
	low: 0,
	lineSmooth: true,
	showArea: true,
	showLine: true,
	showPoint: true,
	showLabel: false,
	fullWidth: true,
	height: "230px",
	chartPadding: {
		right: 10,
		left: 10,
		bottom: -20,
		top: 20
	},
	axisX: {
		offset: 0,
		showGrid: false,
		showLabel: false,
	}, 
	axisY: {
		offset: 0,
		showGrid: false,
		showLabel: false,
	},
	plugins: [
		Chartist.plugins.tooltip()
	],
	low: 0
});