// Morris Area Chart
Morris.Area({
	element: 'areaChart',
	data: [
		{ y: '2011', a: 10, b: 5, c: 2},
		{ y: '2012', a: 40, b: 10, c: 5},
		{ y: '2013', a: 15, b: 50, c: 25},
		{ y: '2014', a: 40, b: 15, c: 7},
		{ y: '2015', a: 20, b: 30, c: 20},
		{ y: '2016', a: 35, b: 15, c: 20},
		{ y: '2017', a: 20, b: 15, c: 51}
	],
	xkey: 'y',
	ykeys: ['a', 'b', 'c'],
	behaveLikeLine: !0,
	pointSize: 0,
	labels: ['Sales', 'Expenses', 'Projects'],
	pointStrokeColors: ['#ffca2b', '#23bef9', '#FF7E39', '#8bc34a', '#95c0b7', '#bad0b7'],
	gridLineColor: "#eee",
	lineColors: ['#ffca2b', '#23bef9', '#FF7E39', '#8bc34a', '#95c0b7', '#bad0b7'],
	gridtextSize: 10,
	fillOpacity: .9,
	lineWidth: 0,
	hideHover: "auto",
	resize: true,
	redraw: true,
});

Morris.Area.prototype.fillForSeries = function(i) {
	return "10-#ffca2b:10-#118cf1-#118cf1-#118cf1";
}