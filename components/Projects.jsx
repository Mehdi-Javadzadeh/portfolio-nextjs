import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "next-i18next";
import React from "react";
import ProjectItem from "./ProjectItem";
import deliverooImg from "../public/assets/projects/deli.jpg";
import huluImg from "../public/assets/projects/hulu.jpg";
import twitchImg from "../public/assets/projects/twitch.jpg";
import samexImg from "../public/assets/projects/samex.png";
import { ImStarFull } from "react-icons/im";

const Projects = () => {
	const { t } = useTranslation();
	return (
		<div id="projects" className="w-full">
			<div className="max-w-[1240px] mx-auto px-2 py-16">
				<p dir="auto" className="text-xl tracking-wide uppercase text-[#60a5fa]">
					{t("home:projects")}
				</p>
				<h2 dir="auto" className="py-8">
					{t("home:WhatBuilt")}
				</h2>
				<div className="grid md:grid-cols-2 gap-8 grid-cols-1">
					<ProjectItem
						title="SamEx"
						officialTitle="Official Project"
						Technology="React Native"
						backgroundImage={samexImg}
						projectUrl="/samex"
						bgColor1={"from-[#FDB905]"}
						bgColor2={"to-[#ffe18f]"}
						icon={
							<ImStarFull
								className="p-2 rounded-full bg-white w-full"
								size={45}
								color="#FDB905"
							/>
						}
					/>
					<ProjectItem
						title="Deliveroo"
						Technology="React Native"
						backgroundImage={deliverooImg}
						projectUrl="/deliveroo"
						bgColor1={"from-[#00ccbb]"}
						bgColor2={"to-[#91c7c2]"}
					/>
					<ProjectItem
						title="Hulu"
						Technology="Next.js"
						backgroundImage={huluImg}
						projectUrl="/hulu"
						bgColor1={"from-[#60d175]"}
						bgColor2={"to-[#94d6a0]"}
					/>
					<ProjectItem
						Technology="React Native"
						title="Twitch"
						backgroundImage={twitchImg}
						projectUrl="/twitch"
						bgColor1={"from-[#FDB905]"}
						bgColor2={"to-[#ffe18f]"}
					/>
				</div>
			</div>
		</div>
	);
};

export default Projects;
