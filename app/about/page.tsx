import { title } from "@/components/primitives";
import { ScrollShadow } from "@nextui-org/scroll-shadow";
import Content from "./content";
// This file will provide the About page component. It has a scrollable element for teh paragraph text. The text appears as you scroll down the page.
export default function AboutPage() {
	return (
		<div>
			<h1 className={title()}>About</h1>
			<ScrollShadow className="w-[100%] h-[100%]">
      			<Content />
    		</ScrollShadow>
		</div>
	);
}
