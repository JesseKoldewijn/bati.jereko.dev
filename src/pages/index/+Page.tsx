import { Counter } from "./Counter.jsx";

export default function Page() {
	return (
		<div class="min-h-screen flex flex-col items-center justify-center">
			<h1 class="font-bold text-3xl pb-4">Bati Jereko</h1>
			This page is:
			<ul>
				<li>Rendered to HTML.</li>
				<li>
					Interactive. <Counter />
				</li>
			</ul>
		</div>
	);
}
