//=================-vanill_js-===================
// Burger menu
let burger = document.querySelector('.icon-menu');
let menu = document.querySelector('.main-nav-panel');
let logo = document.querySelector('.main-nav-panel__logo')
let bigLogo = document.querySelector('.main-nav-panel__logo--big');
let miniLogo =document.querySelector('.main-nav-panel__logo--mini');
let mainNav = document.querySelector('.main-nav');
	let a = document.querySelector('.container'); 
let b = document.querySelector('.page-header');



const mediaQuery = window.matchMedia('(max-width: 1023px)')


function handleTabletChange(e) {
  if (e.matches) { 
burger.classList.add('active');
menu.classList.add('active');
logo.classList.add('active');
bigLogo.classList.add('active');
miniLogo.classList.add('active');
mainNav.classList.add('active');
a.style.flex= 1+' '+ 1+' '+ 94+'%';
b.style.width= 94+'%';
}
else {
	burger.classList.remove('active');
	menu.classList.remove('active');
	logo.classList.remove('active');
	bigLogo.classList.remove('active');
	miniLogo.classList.remove('active');
	mainNav.classList.remove('active');
	a.style.flex= '';
	b.style.width= '';
}
  }

mediaQuery.addListener(handleTabletChange);
handleTabletChange(mediaQuery);


burger.addEventListener('click', function(evt){
	burger.classList.toggle('active');
	menu.classList.toggle('active');
	logo.classList.toggle('active');
	bigLogo.classList.toggle('active');
	miniLogo.classList.toggle('active');
	mainNav.classList.toggle('active');

if (burger.classList.contains('active')) {
a.style.flex= 1+' '+ 1+' '+ 94+'%';
b.style.width= 94+'%';

}	
else{
	a.style.flex= '';
b.style.width= '';
}
})



// Settings menu
let showMore = document.querySelector('.user-nav__btn-more');
let settings =  document.querySelector(".user-nav__list--settings");
showMore.addEventListener('click', function (evt) {
	settings.classList.toggle('active');
	showMore.classList.toggle('active');
})
// Adaptive img
function ibg() {
	let ibg = document.querySelectorAll('.ibg');
	for (var i = 0; i < ibg.length; i++) {
		if (ibg[i].querySelector('img')) {
			ibg[i].style.backgroundImage = 'url(' + ibg[i].querySelector('img').getAttribute('src') + ')';
		}
	}
}
ibg();


// Sales-Schedule 
function updateGraph() {
  
  // получить ссылку на контейнер
  const container = document.querySelector('#graph');

  // очистить существующую разметку
  container.innerHTML = '';
  
  // получить новые данные
  for(let i = 0; i < 31; i++) {
    
  // сгенерировать колонки и вставить их в контейнер
    const column = createColumn(Math.random() * 100);
    container.appendChild(column);
  }
}

function createColumn(percent) {
  
  const columnData = document.createElement('div');
  columnData.className = 'sales-schedule__graph-content';
  
  const column = document.createElement('div');
  column.className = 'sales-schedule__graph-bar';
  
  column.appendChild(columnData);
  columnData.style.height = percent + '%';
  
  return column;
}

updateGraph();

// if (true) {
    
//     var a = 1;
//     let b = 2;
//   }
  
//   console.log(a); // ok
//   console.log(b); // TypeError

// function getDataFromServer() {
  
//   return [
//     { name: "Jun1", value: 80000 },
//     84000,
//     32000,
//     5
//   ];
// }

// function getMaxPrice(values) {
  
//   return Math.max(values);
// }

// function renderLegend(maxPrice) {
  
//   return [
//     0,
//     maxPrice * 0.25,
//     maxPrice * 0.5,
//     maxPrice * 0.75,
//     maxPrice,
//   ]
// }

// function updateGraph2() {
  
//   // получить ссылку на контейнер
//   const container = document.querySelector("#graph");

//   // очистить существующую разметку
//   container.innerHTML = "";
  
//   // получить новые данные
//   const data = getDataFromServer();
//   const max = getMaxPrice(data);
  
//   renderLegend();

//   for (element in data) {
    
//     const percent = element/max;
//     const column = createColumn(Math.random() * 100);
//     container.appendChild(column);
//   }
// }