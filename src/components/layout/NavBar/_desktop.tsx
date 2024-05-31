import { ButtonLink } from "@/components/ui/button";

const DesktopNavBar = () => {
	return (
		<div class="sm:flex items-center gap-4">
			<ButtonLink href="/">Home</ButtonLink>
			<ButtonLink href="/about">About</ButtonLink>
		</div>
	);
};

export default DesktopNavBar;
