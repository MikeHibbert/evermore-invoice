// Line Chart Sales
var chart = new Chartist.Line('.line-chart-sales', {
	labels: [1, 2, 3, 4],
	series: [
		[
			{meta: 'High', value: 200 },
			{meta: 'High', value: 1250},
			{meta: 'High', value: 700},
			{meta: 'High', value: 1800}
		]
	]
}, {
	height: "90px",
	fullWidth: true,
	chartPadding: {
		right: 5,
		left: 5,
		top: 0,
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
	low: 0
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

// Line chart Income
var chart = new Chartist.Line('.line-chart-income', {
	labels: [1, 2, 3, 4],
	series: [
		[
			{meta: 'Low', value: 900 },
			{meta: 'Low', value: 300},
			{meta: 'Low', value: 1300},
			{meta: 'Low', value: 800}
		]
	]
}, {
	height: "90px",
	fullWidth: true,
	chartPadding: {
		right: 5,
		left: 5,
		top: 0,
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
	low: 0
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


// Line chart Visitors
var chart = new Chartist.Line('.line-chart-visits', {
	labels: [1, 2, 3, 4],
	series: [
		[
			{meta: 'Low', value: 650 },
			{meta: 'Low', value: 1250},
			{meta: 'Low', value: 470},
			{meta: 'Low', value: 3200}
		]
	]
}, {
	height: "90px",
	fullWidth: true,
	chartPadding: {
		right: 5,
		left: 5,
		top: 0,
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
	low: 0
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


// Line chart Likes
var chart = new Chartist.Line('.line-chart-likes', {
	labels: [1, 2, 3, 4],
	series: [
		[
			{meta: 'High', value: 250},
			{meta: 'High', value: 1650},
			{meta: 'High', value: 1250},
			{meta: 'High', value: 650}
		]
	]
}, {
	height: "90px",
	fullWidth: true,
	chartPadding: {
		right: 5,
		left: 5,
		top: 0,
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
	low: 0
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