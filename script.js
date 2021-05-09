
let applyRandomColor = function(el, toned=false, light=null) {
	let hue = Math.floor(Math.random() * 360);
	let saturation = Math.floor(Math.random() * 101);
	let lightness = Math.floor(Math.random() * 101);
	if (toned) {
		lightness = Math.round(lightness * .15);
		if (light === true || (light === null && Math.random() < .5)) {
			lightness += 80;
		} else {
			lightness += 5;
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

window.addEventListener('load', () => {
	applyAllRandomColors();
});
