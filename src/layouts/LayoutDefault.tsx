import NavBar from "@/components/layout/NavBar/root";
import "@/styles/style.css";

import "@/styles/tailwind.css";
import { cn } from "@/utils/cn";
import { onMount, type JSX } from "solid-js";
import { usePageContext } from "vike-solid/usePageContext";

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
	const pageCtx = usePageContext() as unknown as {
		cookies: ReadonlyMap<string, string>;
	};

	return (
		<>
			<main class={cn("page-container flex max-w-4xl m-auto")}>
				<div class="page-container-content p-5 pb-12 min-h-screen">
					{props.children}
				</div>
			</main>
			<script
				id="__PAGE_CTX__"
				// eslint-disable-next-line solid/no-innerhtml
				innerHTML={`
					window.__PAGE_CTX__ = ${JSON.stringify(pageCtx)};
				`}
			/>
		</>
	);
}
