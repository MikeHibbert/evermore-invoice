// Rating
$(function() {
  $.fn.raty.defaults.path = 'img';
  $('#rate1').raty({ score: 4 });
  $('#rate2').raty({ score: 5 });
  $('#rate3').raty({ score: 5 });
  $('#rate4').raty({ score: 4 });
  $('#rate5').raty({ score: 3 });
  $('#rate6').raty({ score: 2 });
});