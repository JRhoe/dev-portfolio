import React from "react";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import MagicButton from "./ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa";
import SocialIcons from "./ui/SocialIcons";
import { FlipWords } from "./ui/flip-words";

const Hero = () => {
	const words = [
		"Software",
		"Next.js",
		"React",
		"TypeScript",
		"Tailwind",
		"WordPress",
		"Frontend",
		"Full Stack",
	];
	return (
		<div className="pb-20 pt-36">
			<div className="flex justify-center relative my-20 z-10">
				<div
					className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex
                flex-col items-center justify-center">
					<h2
						className="uppercase tracking-widest 
                    text-xs text-center text-blue-100 
                    max-w-80"></h2>

					<TextGenerateEffect
						className=" text-center text-[24px] sm:text-4xl md:text-5xl lg:text-5xl 2xl:text-6xl"
						words="Transforming Concepts into Seemless Experiences"
					/>

					<p
						className="text-center md:tracking-wider 
                    mb-4 text-sm md:text-lg lg:text-2xl">
						Hi, I&apos;m James, a
						<FlipWords words={words} duration={3000} className={"text-main"} />
						Developer based in San Jose, CA
					</p>

					<a href="#projects" className="mb-8">
						<MagicButton
							title="See my work"
							icon={<FaLocationArrow />}
							position="right"
						/>
					</a>
					<SocialIcons />
				</div>
			</div>
		</div>
	);
};

export default Hero;
