import NavBar from "@/components/layout/NavBar/root";
import "@/styles/style.css";

import "@/styles/tailwind.css";
import { onMount, type JSX } from "solid-js";

export default function LayoutDefault(props: { children?: JSX.Element }) {
	onMount(() => {
		setTimeout(() => document.body.classList.add("page-ready"), 50);
	});

	return (
		<div class="page flex inset-0 flex-col">
			<NavBar />
			<Content>{props.children}</Content>
		</div>
	);
}

function Content(props: { children: JSX.Element }) {
	return (
		<div class="page-container flex max-w-4xl m-auto">
			<div class="page-container-content p-5 pb-12 min-h-screen">
				{props.children}
			</div>
		</div>
	);
}
