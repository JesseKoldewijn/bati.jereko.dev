import { Button } from "@/components/ui/button";
import { createSignal } from "solid-js";

export { Counter };

function Counter() {
	const [count, setCount] = createSignal(0);

	return (
		<Button
			onClick={() => {
				setCount((count) => count + 1);
			}}
		>
			Counter {count()}
		</Button>
	);
}
