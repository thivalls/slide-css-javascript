

var element = document.querySelector('#items');
var next = document.querySelector('.next');
var prev = document.querySelector('.prev');

element.addEventListener('wheel', function(e){
  if(e.deltaY > 0) {
    e.target.scrollBy(1, 0);
  }else {
    e.target.scrollBy(-1, 0);
  }
});

next.addEventListener('click', function(){
  var element = document.querySelector('#items');
  element.scrollBy(1, 0);
  console.log('proximo');
});

prev.addEventListener('click', function(){
  var element = document.querySelector('#items');
  element.scrollBy(-1, 0);
  console.log('anterior')
});
