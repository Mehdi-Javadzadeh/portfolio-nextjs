import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useRouter } from "next/router";

const ProjectItem = ({ title, backgroundImage, projectUrl }) => {
	const myRouter = useRouter();
	return (
		<div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group  hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]">
			<Image
				className="rounded-xl group-hover:opacity-10 ease-in duration-500"
				src={backgroundImage}
				alt={"/"}
			/>
			<div className="items-center justify-center flex flex-col opacity-0 group-hover:opacity-100 ease-in duration-500 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
				<h3 className="text-2xl text-white tracking-wider text-center">{title}</h3>
				<p className="pb-4 pt-2 text-white tracking-wider text-center">React JS</p>

				<Link href={projectUrl}>
					<p className="text-center px-6 py-3 rounded-lg bg-gray-200 font-bold text-base cursor-pointer">
						More Info
					</p>
				</Link>
			</div>
		</div>
	);
};

export default ProjectItem;

// hidden group-hover:block

// className="opacity-0 group-hover:opacity-100 ease-in duration-700 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"
