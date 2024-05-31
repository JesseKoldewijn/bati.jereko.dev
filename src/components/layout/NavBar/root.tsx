import { Show, createMemo, createSignal, onMount } from "solid-js";
import MobileNavBar from "./_mobile";
import DesktopNavBar from "./_desktop";
import { Skeleton } from "@/components/ui/skeleton";

type MobileUnion = "loading" | "mobile" | "desktop";

const NavBar = () => {
	const [isMobile, setIsMobile] = createSignal<MobileUnion>("loading");
	const [scrollPosition, setScrollPosition] = createSignal(0);

	const showLoading = createMemo(() => {
		if (isMobile() === "loading") {
			return true;
		}
		return false;
	});

	const showMobile = createMemo(() => {
		if (isMobile() === "loading") {
			return false;
		}
		return isMobile() === "mobile";
	});

	const showDesktop = createMemo(() => {
		if (isMobile() === "loading") {
			return false;
		}
		return isMobile() === "desktop";
	});

	const isScrolled = () => scrollPosition() > 150;

	const handleScroll = () => {
		const scrollTop = window.scrollY;
		setScrollPosition(scrollTop);
	};

	const getMobileBool = () => {
		return window.matchMedia("(max-width: 768px)").matches;
	};

	const setMobileHandler = () => {
		const isMobile = getMobileBool();
		setIsMobile(isMobile ? "mobile" : "desktop");
	};

	onMount(() => {
		setMobileHandler();
		handleScroll();
		window.addEventListener("scroll", handleScroll);
		window.addEventListener("resize", () => {
			setMobileHandler();
			handleScroll();
		});
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
					<Show when={showLoading()}>
						<div class="flex items-center gap-4">
							<Skeleton class="w-20 h-9" />
							<Skeleton class="w-20 h-9" />
						</div>
					</Show>
					<Show when={showMobile()}>
						<MobileNavBar />
					</Show>
					<Show when={showDesktop()}>
						<DesktopNavBar />
					</Show>
				</div>
			</div>
		</div>
	);
};

export default NavBar;
