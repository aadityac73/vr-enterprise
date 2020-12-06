const nav = document.querySelector(".navbar");
const body = document.querySelector("body");
const menu = document.querySelector(".mn-btn");
const cancel = document.querySelector(".cancel-btn");
menu.onclick = () => {
  nav.classList.add("show")
  body.classList.add("disabled")
}
cancel.onclick = () => {
  nav.classList.remove("show")
  body.classList.remove("disabled")
}

if(window.location.pathname === "/portfolio") {
  lightbox.option({
  resizeDuration: 400,
  fadeDuration: 400,
  imageFadeDuration: 400,
  alwaysShowNavOnTouchDevices: true,
  wrapAround: true,
  disableScrolling: true
});
}
else if(window.location.pathname === "/services"){
  lightbox.option({
  resizeDuration: 400,
  fadeDuration: 400,
  imageFadeDuration: 400,
  alwaysShowNavOnTouchDevices: true,
  wrapAround: false,
  disableScrolling: true,
  showImageNumberLabel: false
});
}
else if(window.location.pathname === "/clientele"){
  lightbox.option({
  resizeDuration: 400,
  fadeDuration: 400,
  imageFadeDuration: 400,
  alwaysShowNavOnTouchDevices: true,
  wrapAround: false,
  disableScrolling: true,
  showImageNumberLabel: false
});
}

$('.service-img').mouseenter(function() {
  $(this).addClass('hover');
});

$('.service-img').mouseleave(function() {
  $(this).removeClass('hover');
});

const loc = window.location.pathname;
if(loc === '/'){
  $('#home').toggleClass('active')
}
else if(loc === '/about'){
  $('#about').toggleClass('active')
}
else if(loc === '/services'){
  $('#services').toggleClass('active')
}
else if(loc === '/portfolio'){
  $('#portfolio').toggleClass('active')
}
else if(loc === '/clientele'){
  $('#clientele').toggleClass('active')
}
else if(loc === '/contact'){
  $('#contact').toggleClass('active')
}

(function() {
	'use strict';
	window.addEventListener(
		'load',
		function() {
			// Fetch all the forms we want to apply custom Bootstrap validation styles to
			var forms = document.getElementsByClassName(
				'needs-validation'
			);
			// Loop over them and prevent submission
			var validation = Array.prototype.filter.call(
				forms,
				function(form) {
					form.addEventListener(
						'submit',
						function(event) {
							if (form.checkValidity() === false) {
								event.preventDefault();
								event.stopPropagation();
							}
							form.classList.add('was-validated');
						},
						false
					);
				}
			);
		},
		false
	);
})();