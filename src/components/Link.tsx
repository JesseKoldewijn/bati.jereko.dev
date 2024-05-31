import { cn } from "@/utils/cn";
import {
	JSX,
	Show,
	createMemo,
	createSignal,
	onMount,
	splitProps,
} from "solid-js";
import { usePageContext } from "vike-solid/usePageContext";

export interface LinkProps
	extends JSX.AnchorHTMLAttributes<HTMLAnchorElement> {}

export function Link(_props: LinkProps) {
	const [{ href, class: className }, props] = splitProps(_props, [
		"href",
		"class",
	]);

	const pageContext = usePageContext();

	const isActive = createMemo(() => {
		if (!href) return false;
		return href === "/"
			? pageContext.urlPathname === href
			: pageContext.urlPathname.startsWith(href);
	});

	return (
		<>
			<Show when={isActive()}>
				<a
					href={href}
					aria-current="page"
					class={cn(className, "select-none")}
					aria-disabled={isActive()}
					{...props}
				>
					{props.children}
				</a>
			</Show>
			<Show when={!isActive()}>
				<a
					href={href}
					aria-current={isActive() ? "page" : undefined}
					class={cn(className, "select-none")}
					{...props}
				>
					{props.children}
				</a>
			</Show>
		</>
	);
}
