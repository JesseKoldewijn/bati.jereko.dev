import type { OnPageTransitionStartAsync } from "vike/types";

export const onPageTransitionStart: OnPageTransitionStartAsync = async () => {
	console.log("Page transition start");
	const body = document.body;

	body.classList.remove("page-ready");
	body.classList.add("page-is-transitioning");
};
