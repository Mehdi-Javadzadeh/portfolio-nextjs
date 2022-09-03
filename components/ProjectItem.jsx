import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useTranslation } from "next-i18next";

const ProjectItem = ({
	title,
	officialTitle,
	Technology,
	icon,
	backgroundImage,
	projectUrl,
	bgColor1,
	bgColor2,
}) => {
	const { t } = useTranslation();
	return (
		<div
			className={`relative flex items-center justify-center w-full h-auto shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r ${bgColor1} ${bgColor2}`}
		>
			<Image
				className="rounded-xl group-hover:opacity-10 ease-in duration-500"
				src={backgroundImage}
				alt={"/"}
			/>
			<div className="items-center justify-center flex flex-col opacity-0 group-hover:opacity-100 ease-in duration-500 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
				<div>{icon}</div>
				<h3 className="text-lg text-gray-800 tracking-wider text-center py-4">
					{officialTitle}
				</h3>
				<h3 className="text-2xl text-gray-800 tracking-wider text-center">{title}</h3>
				<p className="pb-4 pt-2 text-xl text-gray-500 tracking-wider text-center">
					{Technology}
				</p>

				<Link href={projectUrl}>
					<p className="text-center px-5 py-3 rounded-lg bg-gray-200 font-bold text-base cursor-pointer">
						{t("home:moreInfo")}
					</p>
				</Link>
			</div>
		</div>
	);
};

export default ProjectItem;
