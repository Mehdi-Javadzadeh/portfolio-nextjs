import Image from "next/image";
import Link from "next/link";
import React from "react";
import propetyImg from "../public/assets/projects/property.jpg";

const Projects = () => {
	return (
		<div className="w-full">
			<div className="max-w-[1240px] mx-auto px-2 py-16">
				<p className="text-xl tracking-widest uppercase text-[#5651e5]">Projects</p>
				<h2 className="py-4">What I've Built</h2>
				<div className="grid md:grid-cols-2 gap-8">
					<div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group  hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]">
						<Image
							className="rounded-xl group-hover:opacity-10 ease-in duration-500"
							src={propetyImg}
							alt={"/"}
						/>
						<div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
							<h3 className="text-2xl text-white tracking-wider text-center">
								Property Finder
							</h3>
							<p className="pb-4 pt-2 text-white tracking-wider text-center">React JS</p>
							<Link href="/">
								<p className="text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer">
									More Info
								</p>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Projects;

// hidden group-hover:block

// className="opacity-0 group-hover:opacity-100 ease-in duration-700 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"
