import React from "react";
import Image from "next/image";
import { useTranslation } from "next-i18next";
import AboutImg from "../public/assets/about.jpg";

const About = () => {
	const { t } = useTranslation();

	return (
		<div id="about" className="w-full md:h-screen p-2 flex items-center py-16">
			<div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8 ">
				<div dir="auto" className="col-span-2">
					<p className="uppercase text-xl tracking-wide text-[#60a5fa]">
						{" "}
						{t("home:aboutMe")}
					</p>
					<h2 className="py-8">{t("home:whoIam")}</h2>
					<p className="py-4 text-gray-600">** {t("home:starTitle")} **</p>
					<p>{t("home:subStarTitle")}</p>
				</div>

				<div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
					<Image src={AboutImg} alt="/" />
				</div>
			</div>
		</div>
	);
};

export default About;
