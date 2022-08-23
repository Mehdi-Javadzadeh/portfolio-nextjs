import React from "react";
import Image from "next/image";
import reactImg from "../public/assets/skills/React.png";

const Skills = () => {
	return (
		<div id="skills" className="w-full lg:h-screen p-2">
			<div className="max-w-[1240px] mx-auto flex-col justify-center h-full">
				<p className="text-xl tracking-widest uppercase text-[#60a5fa]">Skills</p>
				<h2 className="py-4">What I Can Do</h2>

				<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
					{/* code in my way */}
					{/* <div className="p-6 shadow-xl rounded-full hover:scale-105 ease-in duration-300 w-full">
						
						<div className="flex flex-row items-center justify-around">
							<div>
								<Image src="/assets/skills/html.png" width={64} height={64} alt="/" />
							</div>
							<div>
								<h3>HTML</h3>
							</div>
						</div>
						
					</div> */}
					<div className="p-6 shadow-xl rounded-full hover:scale-105 ease-in duration-300 w-full">
						<div className="grid grid-cols-2 gap-4 justify-center items-center">
							<div className="m-auto">
								<Image src="/assets/skills/html.png" width={64} height={64} alt="/" />
							</div>
							<div className="flex flex-col items-center justify-center">
								<h3>HTML</h3>
							</div>
						</div>
					</div>
					<div className="p-6 shadow-xl rounded-full hover:scale-105 ease-in duration-300">
						<div className="grid grid-cols-2 gap-4 justify-center items-center">
							<div className="m-auto">
								<Image src="/assets/skills/css.png" width={64} height={64} alt="/" />
							</div>
							<div className="flex flex-col items-center justify-center">
								<h3>CSS</h3>
							</div>
						</div>
					</div>
					<div className="p-6 shadow-xl rounded-full hover:scale-105 ease-in duration-300">
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
					<div className="p-6 shadow-xl rounded-full hover:scale-105 ease-in duration-300">
						<div className="grid grid-cols-2 gap-4 justify-center items-center">
							<div className="m-auto">
								<Image src={reactImg} width={64} height={64} alt="/" />
							</div>
							<div className="flex flex-col items-center justify-center">
								<h3>React</h3>
							</div>
						</div>
					</div>
					<div className="p-6 shadow-xl rounded-full hover:scale-105 ease-in duration-300">
						<div className="grid grid-cols-2 gap-4 justify-center items-center">
							<div className="m-auto">
								<Image src="/assets/skills/tailwind.png" width={64} height={64} alt="/" />
							</div>
							<div className="flex flex-col items-center justify-center">
								<h3>Tailwind CSS</h3>
							</div>
						</div>
					</div>
					<div className="p-6 shadow-xl rounded-full hover:scale-105 ease-in duration-300">
						<div className="grid grid-cols-2 gap-4 justify-center items-center">
							<div className="m-auto">
								<Image src="/assets/skills/firebase.png" width={64} height={64} alt="/" />
							</div>
							<div className="flex flex-col items-center justify-center">
								<h3>FireBase</h3>
							</div>
						</div>
					</div>
					<div className="p-6 shadow-xl rounded-full hover:scale-105 ease-in duration-300">
						<div className="grid grid-cols-2 gap-4 justify-center items-center">
							<div className="m-auto">
								<Image src="/assets/skills/github.png" width={64} height={64} alt="/" />
							</div>
							<div className="flex flex-col items-center justify-center">
								<h3>GitHub</h3>
							</div>
						</div>
					</div>
					<div className="p-6 shadow-xl rounded-full hover:scale-105 ease-in duration-300">
						<div className="grid grid-cols-2 gap-4 justify-center items-center">
							<div className="m-auto">
								<Image src="/assets/skills/shopify.png" width={64} height={64} alt="/" />
							</div>
							<div className="flex flex-col items-center justify-center">
								<h3>Shopify</h3>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Skills;
