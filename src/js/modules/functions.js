/* Проверка поддержки webp, добавление класса webp или no-webp для HTML */
export function isWebp() {
	// Проверка поддержки webp
	function testWebP(callback) {
		let webP = new Image();
		webP.onload = webP.onerror = function () {
			callback(webP.height == 2);
		};
		webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
	}
	// Добавление класса _webp или _no-webp для HTML
	testWebP(function (support) {
		let className = support === true ? 'webp' : 'no-webp';
		document.documentElement.classList.add(className);
	});
}

export function phoneMask(){
	window.addEventListener("DOMContentLoaded", function() {
		[].forEach.call( document.querySelectorAll('.tel'), function(input) {
		var keyCode;
		function mask(event) {
			event.keyCode && (keyCode = event.keyCode);
			var pos = this.selectionStart;
			if (pos < 3) event.preventDefault();
			var matrix = "+7 (9__) ___-__-__",
				i = 0,
				def = matrix.replace(/\D/g, ""),
				val = this.value.replace(/\D/g, ""),
				new_value = matrix.replace(/[_\d]/g, function(a) {
					return i < val.length ? val.charAt(i++) || def.charAt(i) : a
				});
			i = new_value.indexOf("_");
			if (i != -1) {
				i < 5 && (i = 3);
				new_value = new_value.slice(0, i)
			}
			var reg = matrix.substr(0, this.value.length).replace(/_+/g,
				function(a) {
					return "\\d{1," + a.length + "}"
				}).replace(/[+()]/g, "\\$&");
			reg = new RegExp("^" + reg + "$");
			if (!reg.test(this.value) || this.value.length < 5 || keyCode > 47 && keyCode < 58) this.value = new_value;
			if (event.type == "blur" && this.value.length < 5)  this.value = ""
		}
	
		input.addEventListener("input", mask, false);
		input.addEventListener("focus", mask, false);
		input.addEventListener("blur", mask, false);
		input.addEventListener("keydown", mask, false)
	
	  });
	
	});
}

export function parallax(){
	
	window.onload = function() {
	const parallax = document.querySelector('.parallax')

	if (parallax) {
		const orange = document.querySelector('.orange div');
		const yellow = document.querySelector('.yellow div');

		const shape1 = document.querySelector('.shape-1');
		const shape2 = document.querySelector('.shape-2');

		const forOrange = 20;
		const forYellow = 10;

		const forShape1 = 20;
		const forShape2 = 15;

		const speed = 0.75;

		let positionX = 0, positionY = 0;
		let coordXpercent = 0, coordYpercent = 0;

		function setMouseParallaxStyle() {
			const distX = coordXpercent - positionX;
			const distY = coordYpercent - positionY;

			positionX = positionX + (distX * speed);
			positionY = positionY + (distY * speed);

			orange.style.cssText = `transform: translate(${-positionX / forOrange}%, 0);`;
			yellow.style.cssText = `transform: translate(${positionX / forYellow}%, 0);`;
			
			shape1.style.cssText = `transform: translate(${-positionX / forShape1}%,${-positionY / forShape1}%);`;
			shape2.style.cssText = `transform: translate(${positionX / forShape2}%,${positionY / forShape2}%);`;

			requestAnimationFrame(setMouseParallaxStyle);
		}
		setMouseParallaxStyle();

		parallax.addEventListener('mousemove', function(e) {
			const parallaxWidth = parallax.offsetWidth;
			const parallaxHeight = parallax.offsetHeight;

			const coordX = e.pageX - parallaxWidth / 2;
			const coordY = e.pageY - parallaxHeight / 2;

			coordXpercent = coordX / parallaxWidth * 100;
			coordYpercent = coordY / parallaxHeight * 100;
		});
	}
	}	  

}

import * as bootstrap from 'bootstrap';
import VanillaTilt from 'vanilla-tilt';

VanillaTilt.init(document.querySelector(".js-tilt"), {
	max: 5,
	speed: 400,
	gyroscope: true
});