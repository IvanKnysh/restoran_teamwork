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
	document.querySelector(".scroll-to-top").addEventListener("click", (e) => {
		e.preventDefault();

		window.scrollTo({ top: 0, behavior: "smooth" });
	});
}
