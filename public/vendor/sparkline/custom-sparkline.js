// Bar Graph
$(function() {
	$("#barOne").sparkline([5,6,7,8,9,10,13,16,13,12,10,9,10,12,16,18,16,14,12,10,8,5], {
		type: 'bar',
		barColor: '#0063bf',
		barWidth: 6,
		height: 30,
	});
});

$(function(){
	$('#barTwo').sparkline([5,6,7,8,9,10,13,16,13,12,10,9,10,12,16,18,16,14,12,10,8,5], {
		type: 'bar',
		barColor: '#ff5661',
		barWidth: 6,
		height: 30,
	});
});

$(function(){
	$("#likes").sparkline([5,4,6,7,7,8,6,5,8,6,7,8,7,6,7,6,7,6,8,6,7,6,7,8,7,6], {
		type: 'bar',
		barColor: '#ffffff',
		barWidth: 4,
		height: 40,
	});
});

$(function(){
	$('#tweets').sparkline([5,4,6,7,7,8,6,5,8,6,7,8,7,8,7,6,6,7,6,8,6,8,6,7,6,7], {
		type: 'bar',
		barColor: '#ffffff',
		barWidth: 4,
		height: 40,
	});
});

$(function(){
	$('#posts').sparkline([5,8,6,5,8,6,7,7,8,6,7,8,7,8,7,6,6,7,6,8,6,8,6,7,6,7], {
		type: 'bar',
		barColor: '#ffffff',
		barWidth: 4,
		height: 40,
	});
});

$(function(){
	$('#shares').sparkline([6,7,8,7,8,7,6,5,8,6,5,8,6,7,7,8,6,7,6,8,6,8,6,7,6,7], {
		type: 'bar',
		barColor: '#ffffff',
		barWidth: 4,
		height: 40,
	});
});