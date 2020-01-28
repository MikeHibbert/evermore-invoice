var chart = new Chartist.Line('.line-chart3', {
  labels: [1, 2, 3, 4],
  series: [
		[
			{meta: 'Income', value: 280 },
			{meta: 'Income', value: 1650},
			{meta: 'Income', value: 1200},
			{meta: 'Income', value: 220}
		],
		[
      {meta: 'Rate of Return', value: 400},
      {meta: 'Rate of Return', value: 2570},
      {meta: 'Rate of Return', value: 1950},
      {meta: 'Rate of Return', value: 3500},
    ]
	]
}, {
  // Remove this configuration to see that chart rendered with cardinal spline interpolation
  // Sometimes, on large jumps in data values, it's better to use simple smoothing.
  lineSmooth: Chartist.Interpolation.simple({
    divisor: 2
  }),
  fullWidth: true,
  height: "270px",
  chartPadding: {
		right: 5,
		left: 5,
		top: 10,
		bottom: 0,
	},
	axisX: {
		offset: 0,
		showGrid: false,
		showLabel: false,
	}, 
	axisY: {
		offset: 0,
		showLabel: false,
		showGrid: false,
	},
	plugins: [
		Chartist.plugins.tooltip()
	],
	low: 0,
});


chart.on('draw', function(data) {
	if(data.type === 'line' || data.type === 'area') {
		data.element.animate({
			d: {
				begin: 1000 * data.index,
				dur: 1000,
				from: data.path.clone().scale(1, 0).translate(0, data.chartRect.height()).stringify(),
				to: data.path.clone().stringify(),
				easing: Chartist.Svg.Easing.easeOutQuint
			}
		});
	}
});