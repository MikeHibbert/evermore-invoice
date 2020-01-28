new Chartist.Pie('.booking-source-donut', {
  series: [450, 350, 230]
}, {
	donut: true,
	donutWidth: 20,
	donutSolid: true,
	startAngle: 270,
	showLabel: false,
	height: "230px",
	plugins: [
		Chartist.plugins.tooltip()
	],
	low: 0
});