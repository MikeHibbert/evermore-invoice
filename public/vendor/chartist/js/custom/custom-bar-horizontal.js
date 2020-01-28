new Chartist.Bar('.barHorizontal', {
	labels: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
	series: [
		[
			{meta: 'Income', value: 100},
			{meta: 'Income', value: 135},
			{meta: 'Income', value: 167},
			{meta: 'Income', value: 183},
			{meta: 'Income', value: 206},
			{meta: 'Income', value: 321},
			{meta: 'Income', value: 564},
		],
	],
}, {
	seriesBarDistance: 15,
	reverseData: true,
	horizontalBars: true,
	height: "260px",
	chartPadding: {
		right: 20,
		left: 10,
		top: 0,
		bottom: -10,
	},
	axisY: {
		offset: 30
	},
	plugins: [
		Chartist.plugins.tooltip()
	], 
});
