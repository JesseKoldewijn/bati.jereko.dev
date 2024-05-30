import type { OnPageTransitionEndAsync } from "vike/types";

export const onPageTransitionEnd: OnPageTransitionEndAsync = async () => {
	console.log("Page transition end");
	const body = document.body;

	setTimeout(() => {
		body.classList.remove("page-is-transitioning");
	}, 500);
	setTimeout(() => {
		body.classList.add("page-ready");
	}, 1000);
};
