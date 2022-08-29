"use strict";

const btn = document.getElementById("hambuger");
const menu = document.querySelector(".navigation");
const hambugerImage = document.querySelector(".image");
const heroImageAfter = document.querySelector(".hero__images");

btn.addEventListener("click", (e) => {
	e.preventDefault;

	if (menu.getAttribute("data-open") === "false") {
		menu.setAttribute("data-open", true);
		menu.style.display = "flex";
		hambugerImage.src = "images/icon-close.svg";
	} else {
		menu.setAttribute("data-open", false);
		menu.style.display = "none";
		hambugerImage.src = "images/icon-hamburger.svg";
	}
});
