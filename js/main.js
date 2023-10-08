"use strict";

// Lightbox settings
if (document.querySelector(".gallery")) {
	new SimpleLightbox(".gallery a", {
		overlayOpacity: 0.8,
		scrollZoom: false,
	});
}

// Nav menu
window.addEventListener("scroll", () => {
	if (window.scrollY > 120) {
		document.querySelector(".header").classList.add("active-header");
	} else {
		document.querySelector(".header").classList.remove("active-header");
	}
});

// Tabs
const removeAllActiveClassesLi = () => {
	document
		.querySelectorAll(".food-menu .menu-tabs .tabs li")
		.forEach((item) => {
			item.classList.remove("active");
		});
};

document.querySelectorAll(".food-menu .menu-tabs .tabs li").forEach((item) => {
	item.addEventListener("click", (e) => {
		e.preventDefault();

		const href = item.closest("li").querySelector("a").hash.substring(1);

		removeAllActiveClassesLi();
		item.classList.add("active");

		item
			.closest(".menu-tabs")
			.querySelectorAll(".tabs-content .tab-item")
			.forEach((tabItem) => {
				tabItem.classList.remove("active");

				if (href === tabItem.getAttribute("id")) {
					tabItem.classList.add("active");
				}
			});
	});
});

// Scroll to top button
if (document.querySelector(".scroll-to-top")) {
	window.addEventListener("scroll", () => {
		if (window.scrollY > 100) {
			document.querySelector(".scroll-to-top").classList.add("scroll-active");
		} else {
			document
				.querySelector(".scroll-to-top")
				.classList.remove("scroll-active");
		}
	});

	document.querySelector(".scroll-to-top").addEventListener("click", (e) => {
		e.preventDefault();

		window.scrollTo({ top: 0, behavior: "smooth" });
	});
}

// Parallax scrolling
window.addEventListener("scroll", () => {
	document.documentElement.style.setProperty(
		"--scroll-position-y",
		window.scrollY * -0.2 + "px"
	);
});

// Init WOW
document.addEventListener("DOMContentLoaded", function () {
	new WOW({
		animateClass: "animate__animated",
		mobile: false,
	}).init();
});

// Nav menu button mobile
document.querySelector(".header .nav button").addEventListener("click", () => {
	document.querySelector(".header .nav ul").classList.toggle("active");
});
document.body.addEventListener("click", (e) => {
	if (!e.target.closest(".nav")) {
		document.querySelector(".header .nav ul").classList.remove("active");
	}
});
