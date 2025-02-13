import React from "react";
import MagicButton from "./ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa";
import SocialIcons from "./ui/SocialIcons";

const Footer = () => {
	return (
		<footer className="w-full mb-[100px] pb-10 md:mb-5" id="contact">
			<div className="flex flex-col items-center">
				<h1 className="heading lg:max-w-[45vw]">
					Ready to take <span className="text-main">your</span> digital presence
					to the next level?
				</h1>
				<p className="text-white-200 md:mt-10 my-5 text-center">
					Reach out to me today and let&apos;s discuss how I can help you
					achieve your goals.
				</p>
				<a href="mailto:jamesrhoe1@gmail.com">
					<MagicButton
						title="Let's get in touch"
						icon={<FaLocationArrow />}
						position="right"
					/>
				</a>
			</div>
			<div className="flex mt-16 md:flex-row flex-col justify-between items-center">
				<p className="md:text-base text-sm md:font-normal font-light mb-8 md:mb-0">
					Copyright &copy; 2024 James Rhoe
				</p>
				<SocialIcons />
			</div>
		</footer>
	);
};

export default Footer;
