import type { OnPageTransitionEndAsync } from "vike/types";

const delay = (ms: number) => new Promise((r) => setTimeout(r, ms));

export const onPageTransitionEnd: OnPageTransitionEndAsync = async () => {
	const body = document.body;
	await delay(500);
	body.classList.remove("page-is-transitioning");
	await delay(100);
	body.classList.add("page-ready");
};
