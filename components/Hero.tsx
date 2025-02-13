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
		"Web",
	];
	return (
		<div className="pb-20 pt-36">
			{/*<div className="pb-20 pt-36 h-[40rem] w-[100vw] rounded-md relative flex flex-col items-center justify-center antialiased"> */}
			<div>
				{/* <Spotlight className='-top-40 -left-10 
                md:-left-32 md:-top-20 h-screen' fill="white"/>
                <Spotlight className='top-10 left-full
                h-[80vh] w-[50vw]' fill="purple"/>
                <Spotlight className='top-28 left-80 
                h-[80vh] w-[50vh]' fill="blue"/> */}
			</div>
			{/* <div className="h-screen w-full dark:bg-black
             bg-white  dark:bg-grid-white/[0.03] 
             bg-grid-black/[0.2] flex items-center 
             justify-center absolute top-0 left-0">
                <div className="absolute pointer-events-none 
                inset-0 flex items-center justify-center
                 dark:bg-black bg-white 
                 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
            </div> */}
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
			{/* <BackgroundBeams/> */}
		</div>
	);
};

export default Hero;
