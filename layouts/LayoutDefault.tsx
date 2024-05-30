import { Link } from "../components/Link";
import "./style.css";

import "./tailwind.css";
import { createSignal, onMount, type JSX } from "solid-js";

export default function LayoutDefault(props: { children?: JSX.Element }) {
	onMount(() => {
		setTimeout(() => document.body.classList.add("page-ready"), 50);
	});

	return (
		<div class="flex inset-0 flex-col">
			<Header />
			<Content>{props.children}</Content>
		</div>
	);
}

function Header() {
	const [scrollPosition, setScrollPosition] = createSignal(0);

	const isScrolled = () => scrollPosition() > 150;

	const handleScroll = () => {
		const scrollTop = window.scrollY;
		setScrollPosition(scrollTop);
	};

	onMount(() => {
		handleScroll();
		window.addEventListener("scroll", handleScroll);
		window.addEventListener("resize", handleScroll);
	});

	return (
		<div class="fixed w-full gap-4">
			<div class="relative inset-0 px-6 py-4">
				<div
					class={
						"z-0 absolute inset-0 flex items-center pl-2 transition-colors duration-500" +
						(isScrolled() ? " bg-neutral-950" : "")
					}
				/>
				<div
					class={
						"relative flex items-center justify-between z-[1] transition-colors duration-500" +
						(isScrolled() ? " text-neutral-100" : "")
					}
				>
					<h1 class="text-3xl font-bold">Bati Jereko</h1>
					<div class="flex items-center gap-4">
						<Link href="/" class="text-lg">
							Home
						</Link>
						<Link href="/about" class="text-lg">
							About
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
}

function Content(props: { children: JSX.Element }) {
	return (
		<div id="page-container" class="flex max-w-4xl m-auto">
			<div id="page-content" class="p-5 pb-12 min-h-screen">
				{props.children}
			</div>
		</div>
	);
}
