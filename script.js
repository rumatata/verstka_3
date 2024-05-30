const slider = document.querySelector('.slider');
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');
const slides = Array.from(slider.querySelectorAll('img'));
const slideCount = slides.length;
let slideIndex = 0;

prevButton.addEventListener('click', () => {
  slideIndex = (slideIndex - 1 + slideCount) % slideCount;
  slide();
});

nextButton.addEventListener('click', () => {
  slideIndex = (slideIndex + 1) % slideCount;
  slide();
});

const slide = () => {
  const imageWidth = slider.clientWidth;
  const slideOffset = -slideIndex * imageWidth;
  slider.style.transform = `translateX(${slideOffset}px)`;
}

window.addEventListener('load', () => {
  slide();
});



// modal okno
var modal = document.getElementById('myModal');

var btn = document.getElementById("myBtn");

var butt = document.getElementById("send");

var span = document.getElementsByClassName("close")[0]; 
btn.onclick = function() {
    modal.style.display = "block";
}
span.onclick = function() {
    modal.style.display = "none";
}
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
butt.onclick = function() {
  modal.style.display = "none";
}
// табы
$('.tabs-wrapper').each(function() {
	let ths = $(this);
	ths.find('.tab-item').not(':first').hide();
	ths.find('.tab').click(function() {
		ths.find('.tab').removeClass('active').eq($(this).index()).addClass('active');
		ths.find('.tab-item').hide().eq($(this).index()).fadeIn()
	}).eq(0).addClass('active');
});


// Сортировка
$(document.body).on("change",".elem_filter_select", function(){
  var t = $(this);
  var tVal = t.val();
  if(!tVal.length){
      return false;
  }
  var elements = $(".filtered_item");
  elements.sort(function(a, b){
      var value1=a.dataset[tVal].toLowerCase(), value2=b.dataset[tVal].toLowerCase();
      if (value1 < value2)
          return -1;
      if (value1 > value2)
          return 1;
      return 0;
  });
  $(".filtered_container").find(".filtered_item");
  $(".filtered_container").append(elements);
});
//Фильрация по названию
$(document.body).on("keyup",".elem_filter_namesearch", function(){
  var t = $(this);
  var tVal = t.val().toLowerCase();
  var elements = $(".filtered_item");
  if(!tVal.length){
      elements.show();
  }
  elements.hide();
  elements.filter(function(){
      var str = $(this).data("jkname").toLowerCase();
      if(str.indexOf(tVal) !== -1){
          return true;
      }
  }).show();
});


// accord
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight){
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}