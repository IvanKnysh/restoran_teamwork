"use strict";

// Lightbox settings
if (document.querySelector(".gallery")) {
	new SimpleLightbox(".gallery a", {
		overlayOpacity: 0.8,
		scrollZoom: false,
	});
}

// Nav menu
window.addEventListener("scroll", (e) => {
	if (window.scrollY > 120) {
		document.querySelector(".header").classList.add("active-header");
	} else {
		document.querySelector(".header").classList.remove("active-header");
	}
});
