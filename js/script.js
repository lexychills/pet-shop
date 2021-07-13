var swiper = new Swiper(".mySwiper", {
	slidesPerView: "auto",
	centeredSlides: true,
	autoplay: {
		delay: 3500,
		disableOnInteraction: false,
	},
	pagination: {
		el: ".swiper-pagination",
		type: "progressbar",
	},
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},
});

gridGallery({
	selector: ".dark",
	darkMode: true,
});
gridGallery({
	selector: "#horizontal",
	layout: "horizontal",
});
gridGallery({
	selector: "#square",
	layout: "square",
});
gridGallery({
	selector: "#gap",
	gaplength: 10,
});
gridGallery({
	selector: "#heightWidth",
	rowHeight: 180,
	columnWidth: 280,
});