new Chartist.Pie('.pie-chart', {
  series: [985, 476, 156, 224, 761],
}, {
	pie: true,
	showLabel: false,
	height: "210px",
	plugins: [
		Chartist.plugins.tooltip()
	],
});