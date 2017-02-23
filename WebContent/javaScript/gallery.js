var img = [
  'http://ufa-welcome.ru/wp-content/uploads/2015/10/2428965887.jpg',
  'http://cp12.nevsepic.com.ua/90/1350061536-norway_by_lonelywolf2.jpg',
  'https://pp.vk.me/c625218/v625218343/424f8/ePczSL4LTyI.jpg',
  'https://cs7053.vk.me/c540105/v540105409/19410/Vl11UIxlO3A.jpg',
  'https://pp.vk.me/c621631/v621631794/20733/3zd3HnDwqwI.jpg'
];


$('.content,.box').css('background-image','url('+img[0]+')');
$('.box').attr('data-content','1/'+img.length);
var ind = 0;
$('.box').click(function() {
  $(this).addClass('active');
  ind++
  if (ind+1>img.length) ind=0;
  setTimeout(function() {
    $('.box').css('background-image','url('+img[ind]+')');
    $('.box').attr('data-content',(ind+1)+'/'+img.length);
    setTimeout(function() {
      $('.content').css('background-image','url('+img[ind]+')');
      $('.box').removeClass('active');
    },600);
  },600)
})
  