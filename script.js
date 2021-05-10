
let applyRandomColor = function(el, toned=false, light=null) {
	let hue = Math.floor(Math.random() * 360);
	let saturation = Math.floor(Math.random() * 101);
	let lightness = Math.floor(Math.random() * 101);
	if (toned) {
		lightness = Math.round(lightness * .15);
		if (light === true || (light === null && Math.random() < .5)) {
			lightness += 80;
		} else {
			lightness += 10;
		}
	}
	el.style.backgroundColor = `hsl(${hue}, ${saturation}%, ${lightness}%)`;
	el.style.color = (lightness > 60) ? 'black' : 'white';
};

let applyAllRandomColors = function() {
	// Untoned
	for (let el of document.getElementsByClassName('random-color')) {
		applyRandomColor(el, toned=false);
	}
	// Toned
	for (let el of document.getElementsByClassName('random-color-toned')) {
		applyRandomColor(el, toned=true);
	}
	// Dark
	for (let el of document.getElementsByClassName('random-color-dark')) {
		applyRandomColor(el, toned=true, light=false);
	}
	// Light
	for (let el of document.getElementsByClassName('random-color-light')) {
		applyRandomColor(el, toned=true, light=true);
	}
};

let addCloseButton = function(el) {
	let btn = document.createElement('button');
	btn.addEventListener('click', () => { el.style.display = 'none'; });
	btn.classList.add('button-close');
	el.insertBefore(btn, el.firstChild);
};

let addAllCloseButtons = function() {
	for (let el of document.getElementsByClassName('banner')) {
		addCloseButton(el);
	}
};

let showAllClosedBanners = function() {
	for (let el of document.getElementsByClassName('banner')) {
		el.style.display = 'block';
	}
};

let handleMailingList = function() {
	alert('We will procrastinate from mailing you.');
	document.getElementById('mailing-list-input').value = '';
};

window.addEventListener('load', () => {
	addAllCloseButtons();
	applyAllRandomColors();
});
