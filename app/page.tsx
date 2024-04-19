import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code"
import { button as buttonStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";

// import { Image } from 'next/image';


export default function Home() {
	return (
		<section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
			<div className="about">
			{/* <img src="/public/assets/prof.jpg" alt="Picture of Kevin Perdomo" className="profile-image"/> */}
			{/* <Image src="public/assets/prof.jpg" alt="Picture of Kevin Perdomo" className="profile-image"/> */}
			</div>
			<div className="inline-block max-w-lg text-center justify-center">
				<h1 className={title()}>Kevin Roberto&nbsp;</h1>
				<h1 className={title({ color: "cyan" })}>Perdomo&nbsp;</h1>
				<br />
				<h1 className={title()}>
					Artificial Intelligence Machine Learning &nbsp;
				</h1>
				<h1 className={title()}>
					Cybersecurity&nbsp;
				</h1>
				<h1 className={title({color: "yellow"})}>
					& Next....?&nbsp;
				</h1>
				<h2 className={subtitle({ class: "mt-4" })}>
					Site under construction! Check back soon!
				</h2>
			</div>

			<div className="flex gap-3">
				
			</div>

		</section>
	);
}
