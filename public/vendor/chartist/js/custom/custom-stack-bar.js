new Chartist.Bar('.stacked-bar', {
	labels: ['Q1', 'Q2', 'Q3', 'Q4'],
	series: [
		[
			{meta: 'Completed', value: 55},
			{meta: 'Completed', value: 83},
			{meta: 'Completed', value: 72},
			{meta: 'Completed', value: 68},
			{meta: 'Completed', value: 57},
			{meta: 'Completed', value: 41},
			{meta: 'Completed', value: 30}
		],
		[
			{meta: 'On Going', value: 35},
			{meta: 'On Going', value: 52},
			{meta: 'On Going', value: 37},
			{meta: 'On Going', value: 45},
			{meta: 'On Going', value: 35},
			{meta: 'On Going', value: 27},
			{meta: 'On Going', value: 19}
		],
		[
			{meta: 'Up Coming', value: 12},
			{meta: 'Up Coming', value: 25},
			{meta: 'Up Coming', value: 22},
			{meta: 'Up Coming', value: 30},
			{meta: 'Up Coming', value: 43},
			{meta: 'Up Coming', value: 39},
			{meta: 'Up Coming', value: 24}
		],
	],
}, {
	stackBars: true,
	seriesBarDistance: 6,
	height: "150px",
	chartPadding: {
		left: 0,
		top: 0,
		bottom: 0,
	},
	axisX: {
		offset: 0,
	}, 
	axisY: {
		showLabel: true,
		showGrid: false,
		offset: 0,
	},
	plugins: [
		Chartist.plugins.tooltip()
	], 
}).on('draw', function(data) {
	if(data.type === 'bar') {
		data.element.attr({
			style: 'stroke-width: 30px'
		});
	}
});