import React from "react";
import Image from "next/image";
import Link from "next/link";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { RiRadioButtonFill } from "react-icons/ri";
import { IoMdArrowBack } from "react-icons/io";

// Multilingual Config
export async function getStaticProps({ locale }) {
	return {
		props: {
			...(await serverSideTranslations(locale, ["home"])),
		},
	};
}

const Netflix = () => {
	return (
		<div className="w-full">
			<div className="w-screen h-[30vh] lg:h-[40vh] relative">
				<div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/70 z-10" />
				<Image
					className="absolute z-1"
					layout="fill"
					objectFit="cover"
					src="/assets/projects/netflix.jpg"
					alt="/"
					priority
				/>
				<div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
					<h2 className="py-2">Netflix</h2>
					<h3>React JS / Tailwind / Firebase</h3>
				</div>
			</div>

			<div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
				<div className="col-span-4">
					<p>Project</p>
					<h2>OverView</h2>
					<p>
						I built this application in React JS and is hosted on GitHub pages. This app
						features user authentication with firebase as well as the firestore cloud
						storage database. This application is pulling movie data from an the IMDB
						movie API and displaying different categories. It features horizontal sliding
						and a featured selection. The useContext hook is also being implemented for
						app-wide state management.
					</p>
					<button className="px-8 py-2 mt-4 mr-8">Demo</button>
					<button className="px-8 py-2 mt-4">Code</button>
				</div>

				<div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-2">
					<div className="sm:flex sm:flex-col">
						<p className="text-center font-bold py-4">Technologies</p>
						<div className="sm:flex sm:justify-around md:flex md:flex-col grid grid-cols-3 sm:gap-2 lg:ml-10">
							<p className="text-gray-600 py-2 flex items-center text-sm">
								<RiRadioButtonFill size={12} color="#60a5fa" className="mr-1" />
								React
							</p>
							<p className="text-gray-600 py-2 flex items-center text-sm">
								<RiRadioButtonFill size={12} color="#60a5fa" className="mr-1" />
								Tailwind CSS
							</p>
							<p className="text-gray-600 py-2 flex items-center text-sm">
								<RiRadioButtonFill size={12} color="#60a5fa" className="mr-1" />
								Javascript
							</p>
							<p className="text-gray-600 py-2 flex items-center text-sm">
								<RiRadioButtonFill size={12} color="#60a5fa" className="mr-1" />
								Firebase
							</p>
							<p className="text-gray-600 py-2 flex items-center text-sm">
								<RiRadioButtonFill size={12} color="#60a5fa" className="mr-1" />
								Zillow API
							</p>
							<p className="text-gray-600 py-2 flex items-center text-sm">
								<RiRadioButtonFill size={12} color="#60a5fa" className="mr-1" />
								Google API
							</p>
						</div>
					</div>
				</div>

				<Link href="/#projects">
					<button className="bg-gradient-to-r from-gray-700 to-gray-500 w-[90px] py-2 px-3 flex items-center justify-between text-center hover:animate-bounce">
						<IoMdArrowBack size={18} /> Back
					</button>
				</Link>
			</div>
		</div>
	);
};

export default Netflix;
