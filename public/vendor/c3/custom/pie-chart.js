var chart9 = c3.generate({
	bindto: '#pieChart',
	data: {
		// iris data from R
		columns: [
			['Likes', 36],
			['Shares', 5],
		],
		type : 'pie',
		colors: {
			Likes: '#219ee6',
			Shares: '#75ccff',
		},
		onclick: function (d, i) { console.log("onclick", d, i); },
		onmouseover: function (d, i) { console.log("onmouseover", d, i); },
		onmouseout: function (d, i) { console.log("onmouseout", d, i); }
	}
});