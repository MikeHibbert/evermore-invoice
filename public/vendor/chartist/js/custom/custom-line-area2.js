var chart = new Chartist.Line('.lineAreaA', {
	labels: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
	series: [
		[
			{meta: 'Total Income', value: 500},
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
	height: "125px",
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

chart.on('draw', function(data) {
	if(data.type === 'line' || data.type === 'area') {
		data.element.animate({
			d: {
				begin: 2000 * data.index,
				dur: 2000,
				from: data.path.clone().scale(1, 0).translate(0, data.chartRect.height()).stringify(),
				to: data.path.clone().stringify(),
				easing: Chartist.Svg.Easing.easeOutQuint
			}
		});
	}
});




var chart = new Chartist.Line('.lineAreaB', {
	labels: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
	series: [
		[
			{meta: 'Total Income', value: 300},
			{meta: 'Total Income', value: 1300},
			{meta: 'Total Income', value: 1900},
			{meta: 'Total Income', value: 2100},
			{meta: 'Total Income', value: 2800},
			{meta: 'Total Income', value: 1200},
			{meta: 'Total Income', value: 1900},
		]
	]
}, {
	// Remove this configuration to see that chart rendered with cardinal spline interpolation
	// Sometimes, on large jumps in data values, it's better to use simple smoothing.
	lineSmooth: Chartist.Interpolation.simple({
		divisor: 2
	}),
	height: "125px",
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

chart.on('draw', function(data) {
	if(data.type === 'line' || data.type === 'area') {
		data.element.animate({
			d: {
				begin: 2000 * data.index,
				dur: 2000,
				from: data.path.clone().scale(1, 0).translate(0, data.chartRect.height()).stringify(),
				to: data.path.clone().stringify(),
				easing: Chartist.Svg.Easing.easeOutQuint
			}
		});
	}
});





var chart = new Chartist.Line('.lineAreaC', {
	labels: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
	series: [
		[
			{meta: 'Total Income', value: 150},
			{meta: 'Total Income', value: 500},
			{meta: 'Total Income', value: 1000},
			{meta: 'Total Income', value: 540},
			{meta: 'Total Income', value: 400},
			{meta: 'Total Income', value: 900},
			{meta: 'Total Income', value: 800},
		]
	]
}, {
	// Remove this configuration to see that chart rendered with cardinal spline interpolation
	// Sometimes, on large jumps in data values, it's better to use simple smoothing.
	lineSmooth: Chartist.Interpolation.simple({
		divisor: 2
	}),
	height: "125px",
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

chart.on('draw', function(data) {
	if(data.type === 'line' || data.type === 'area') {
		data.element.animate({
			d: {
				begin: 2000 * data.index,
				dur: 2000,
				from: data.path.clone().scale(1, 0).translate(0, data.chartRect.height()).stringify(),
				to: data.path.clone().stringify(),
				easing: Chartist.Svg.Easing.easeOutQuint
			}
		});
	}
});





var chart = new Chartist.Line('.lineAreaD', {
	labels: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
	series: [
		[
			{meta: 'Total Income', value: 1250},
			{meta: 'Total Income', value: 500},
			{meta: 'Total Income', value: 2000},
			{meta: 'Total Income', value: 1400},
			{meta: 'Total Income', value: 2400},
			{meta: 'Total Income', value: 3900},
			{meta: 'Total Income', value: 2800},
		]
	]
}, {
	// Remove this configuration to see that chart rendered with cardinal spline interpolation
	// Sometimes, on large jumps in data values, it's better to use simple smoothing.
	lineSmooth: Chartist.Interpolation.simple({
		divisor: 2
	}),
	height: "125px",
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

chart.on('draw', function(data) {
	if(data.type === 'line' || data.type === 'area') {
		data.element.animate({
			d: {
				begin: 2000 * data.index,
				dur: 2000,
				from: data.path.clone().scale(1, 0).translate(0, data.chartRect.height()).stringify(),
				to: data.path.clone().stringify(),
				easing: Chartist.Svg.Easing.easeOutQuint
			}
		});
	}
});