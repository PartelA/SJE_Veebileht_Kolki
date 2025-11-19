var parallax = document.getElementById('js-parallax');
window.addEventListener('scroll', function(e) {
  parallax.style.backgroundPosition = ['0 ', ((window.pageYOffset - parallax.offsetTop) / 1.25) - parallax.clientHeight, 'px'].join('');
});


// Võetud: https://codepen.io/kreitlow/pen/BLNYRR