import React from "react";
import Image from "next/image";
import { useTranslation } from "next-i18next";
const Skills = () => {
	const { t } = useTranslation();
	return (
		<div id="skills" className="w-full lg:h-screen p-2">
			<div className="max-w-[1240px] mx-auto flex-col justify-center h-full">
				<p dir="auto" className="text-xl tracking-wide uppercase text-[#60a5fa]">
					{t("home:skills")}
				</p>
				<h2 dir="auto" className="py-8">
					{t("home:tech")}
				</h2>

				<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
					{/* code in my way */}
					{/* <div className="p-6 shadow-lg rounded-full hover:scale-105 ease-in duration-300 w-full">
						
						<div className="flex flex-row items-center justify-around">
							<div>
								<Image src="/assets/skills/html.png" width={64} height={64} alt="/" />
							</div>
							<div>
								<h3>HTML</h3>
							</div>
						</div>
						
					</div> */}
					<div className="p-6 shadow-lg shadow-gray-400 rounded-full hover:scale-105 ease-in duration-300 w-full">
						<div className="grid grid-cols-2 gap-4 justify-center items-center">
							<div className="m-auto">
								<Image src="/assets/skills/html.png" width={64} height={64} alt="/" />
							</div>
							<div className="flex flex-col items-center justify-center">
								<h3>HTML</h3>
							</div>
						</div>
					</div>
					<div className="p-6 shadow-lg shadow-gray-400 rounded-full hover:scale-105 ease-in duration-300">
						<div className="grid grid-cols-2 gap-4 justify-center items-center">
							<div className="m-auto">
								<Image src="/assets/skills/css.png" width={64} height={64} alt="/" />
							</div>
							<div className="flex flex-col items-center justify-center">
								<h3>CSS</h3>
							</div>
						</div>
					</div>
					<div className="p-6 shadow-lg shadow-gray-400 rounded-full hover:scale-105 ease-in duration-300">
						<div className="grid grid-cols-2 gap-4 justify-center items-center">
							<div className="m-auto">
								<Image
									src="/assets/skills/javascript.png"
									width={64}
									height={64}
									alt="/"
								/>
							</div>
							<div className="flex flex-col items-center justify-center">
								<h3>JavaScript</h3>
							</div>
						</div>
					</div>
					<div className="p-6 shadow-lg shadow-gray-400 rounded-full hover:scale-105 ease-in duration-300">
						<div className="grid grid-cols-2 gap-4 justify-center items-center">
							<div className="m-auto">
								<Image src="/assets/skills/react.png" width={64} height={64} alt="/" />
							</div>
							<div className="flex flex-col items-center justify-center">
								<h3>React js</h3>
							</div>
						</div>
					</div>
					<div className="p-6 shadow-lg shadow-gray-400 rounded-full hover:scale-105 ease-in duration-300">
						<div className="grid grid-cols-2 gap-4 justify-center items-center">
							<div className="m-auto">
								<Image src="/assets/skills/tailwind.png" width={64} height={64} alt="/" />
							</div>
							<div className="flex flex-col items-center justify-center">
								<h3>Tailwind CSS</h3>
							</div>
						</div>
					</div>
					<div className="p-6 shadow-lg shadow-gray-400 rounded-full hover:scale-105 ease-in duration-300">
						<div className="grid grid-cols-2 gap-4 justify-center items-center">
							<div className="m-auto">
								<Image src="/assets/skills/react.png" width={64} height={64} alt="/" />
							</div>
							<div className="flex flex-col items-center justify-center">
								<h3>React Native</h3>
							</div>
						</div>
					</div>
					<div className="p-6 shadow-lg shadow-gray-400 rounded-full hover:scale-105 ease-in duration-300">
						<div className="grid grid-cols-2 gap-4 justify-center items-center">
							<div className="m-auto">
								<Image src="/assets/skills/github.png" width={64} height={64} alt="/" />
							</div>
							<div className="flex flex-col items-center justify-center">
								<h3>GitHub</h3>
							</div>
						</div>
					</div>
					<div className="p-6 shadow-lg shadow-gray-400 rounded-full hover:scale-105 ease-in duration-300">
						<div className="grid grid-cols-2 gap-4 justify-center items-center">
							<div className="m-auto">
								<Image src="/assets/skills/nextjs.png" width={64} height={64} alt="/" />
							</div>
							<div className="flex flex-col items-center justify-center">
								<h3>Next js</h3>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Skills;
