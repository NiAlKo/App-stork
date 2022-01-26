//=================-vanill_js-===================
// Burger menu
let burger = document.querySelector(".icon-menu");
let menu = document.querySelector(".menu__body");
let body = document.querySelector("body");
burger.addEventListener('click', function(evt){
	burger.classList.toggle('active');
	menu.classList.toggle('active');
	body.classList.toggle('lock');
})

// Adaptive img
function ibg() {
	let ibg = document.querySelectorAll(".ibg");
	for (var i = 0; i < ibg.length; i++) {
		if (ibg[i].querySelector("img")) {
			ibg[i].style.backgroundImage = "url(" + ibg[i].querySelector("img").getAttribute("src") + ")";
		}
	}
}
ibg();
