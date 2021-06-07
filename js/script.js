const header = document.querySelector('.header');
const hamburger = document.getElementById('hamburger');
const icon = document.querySelector('.fa-bars');
const nav = document.querySelector('.menu');

// Header changing color on scroll
window.onscroll = function () {
  let start = window.scrollY;
  if (start >= 1) {
    header.classList.add('onscroll');
  } else {
    header.classList.remove('onscroll');
  }
};

hamburger.addEventListener('click', function () {
  nav.classList.toggle('change');
  header.classList.toggle('header-black');
  icon.classList.toggle('fa-bars-active');
});

$('.carousel[data-type="multi"] .item').each(function () {
  var next = $(this).next();
  if (!next.length) {
    next = $(this).siblings(':first');
  }
  next.children(':first-child').clone().appendTo($(this));

  for (var i = 0; i < 3; i++) {
    next = next.next();
    if (!next.length) {
      next = $(this).siblings(':first');
    }

    next.children(':first-child').clone().appendTo($(this));
  }
});
