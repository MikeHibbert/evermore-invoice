var chart7 = c3.generate({
	bindto: '#stackedBarGraph',
	padding: {
		top: 0,
		left: 30,
	},		
	data: {
		columns: [
			['data1', 30, 90, 200, 400, 590, 250, 330, 120, 30, 90, 120, 320, 510, 120, 210, 380, 190, 290, 100, 160, 290],
			['data2', 130, 100, 200, 200, 450, 150, 190, 145, 90, 100, 110, 75, 230, 170, 45, 150, 195, 360, 110, 100, 180],
		],
		type: 'bar',
		names: {
			data1: 'For Sales',
			data2: 'For Rent'
			// data3: 'Facebook',
		},
		colors: {
			data1: '#2698e2',
			data2: '#f23f3f',
			// data3: '#dddddd',
		},
		groups: [
			['data1', 'data2']
		]
	},
	axis: {
		y: {
			tick: {
				count: 5,
			}
		}
	},
	grid: {
		x: {
			show: true,
		},
		y: {
			show: true
		}
	}
});