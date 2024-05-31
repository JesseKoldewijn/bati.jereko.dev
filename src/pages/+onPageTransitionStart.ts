import type { OnPageTransitionStartAsync } from "vike/types";

export const onPageTransitionStart: OnPageTransitionStartAsync = async () => {
	const body = document.body;

	body.classList.remove("page-ready");
	body.classList.add("page-is-transitioning");
};
