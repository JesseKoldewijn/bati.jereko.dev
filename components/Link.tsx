import { JSX, createMemo } from "solid-js";
import { usePageContext } from "vike-solid/usePageContext";

interface LinkProps extends JSX.AnchorHTMLAttributes<HTMLAnchorElement> {}

export function Link(props: LinkProps) {
	const pageContext = usePageContext();
	const isActive = createMemo(() => {
		if (!props.href) return false;
		return props.href === "/"
			? pageContext.urlPathname === props.href
			: pageContext.urlPathname.startsWith(props.href);
	});
	return (
		<a href={props.href} class={isActive() ? "is-active" : undefined}>
			{props.children}
		</a>
	);
}
