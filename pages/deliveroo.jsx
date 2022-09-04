import React from "react";
import Image from "next/image";
import Link from "next/link";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { RiRadioButtonFill } from "react-icons/ri";
import { IoMdArrowBack } from "react-icons/io";
import { atom, useAtom } from "jotai";
import PopupVideoDeliveroo from "../components/PopupVideoDeliveroo";
import { FaGithub } from "react-icons/fa";
import { MdSlowMotionVideo } from "react-icons/md";

// Multilingual Config
export async function getStaticProps({ locale }) {
	return {
		props: {
			...(await serverSideTranslations(locale, ["home"])),
		},
	};
}

export const isOpen = atom(false);

const Deliveroo = () => {
	const [isPopUp, setIsPopUp] = useAtom(isOpen);

	const handlePopupVideo = () => {
		setIsPopUp(!isPopUp);
	};

	const { t } = useTranslation();
	return (
		<div className="w-full">
			<div className="w-screen h-[30vh] lg:h-[40vh] relative">
				<div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/70 z-10" />
				<Image
					className="absolute z-1"
					layout="fill"
					objectFit="cover"
					src="/assets/projects/deli2.jpg"
					alt="/"
					priority
				/>
				<div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
					<h2 className="py-4 text-4xl text-[#00ccbb] text-widest">Deliveroo-Clone</h2>
					<h3 className="text-widest text-xl">React Native (Expo)</h3>
				</div>
			</div>

			<div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
				<div className="col-span-4">
					<p dir="auto">{t("home:project")}</p>
					<h3 dir="auto" className="py-6 text-lg">
						{t("home:overView")}
					</h3>
					<p className="text-justify" dir="auto">
						{t("home:deliveroo")}
					</p>
					<div className="py-5 flex">
						<button
							onClick={handlePopupVideo}
							className="w-max px-4 py-2 mt-4 mr-8 bg-gradient-to-r from-gray-700 to-gray-500 flex items-center space-x-2"
						>
							<p className="text-center">{t("home:appFlow")}</p>
							<div>
								<MdSlowMotionVideo size={24} />
							</div>
						</button>
						<a
							href="https://github.com/Mehdi-Javadzadeh/deliveroo-clone"
							target="_blank"
							rel="noreferrer"
						>
							<button className="w-max px-3 py-2 mt-4 bg-gradient-to-r from-gray-700 to-gray-500 flex items-center space-x-2 text-center">
								<p className="text-center">{t("home:gitHub")}</p>
								<div>
									<FaGithub size={22} />
								</div>
							</button>
						</a>
					</div>
				</div>

				<div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-2">
					<div className="sm:flex sm:flex-col">
						<p className="text-center font-bold py-4">Technologies</p>
						<div className="sm:flex sm:justify-around md:flex md:flex-col grid grid-cols-3 gap-1 sm:gap-2 lg:ml-10">
							<p className="text-gray-600 py-2 flex items-center text-sm">
								<RiRadioButtonFill size={12} color="#00ccbb" className="mr-2" />
								React Native(Expo)
							</p>

							<p className="text-gray-600 py-2 flex items-center text-sm">
								<RiRadioButtonFill size={12} color="#00ccbb" className="mr-2" />
								Javascript
							</p>
							<p className="text-gray-600 py-2 flex items-center text-sm">
								<RiRadioButtonFill size={12} color="#00ccbb" className="mr-2" />
								Redux
							</p>
							<p className="text-gray-600 py-2 flex items-center text-sm">
								<RiRadioButtonFill size={12} color="#00ccbb" className="mr-2" />
								Taliwind CSS
							</p>
							<p className="text-gray-600 py-2 flex items-center text-sm">
								<RiRadioButtonFill size={12} color="#00ccbb" className="mr-2" />
								Snity(CMS)
							</p>
						</div>
					</div>
				</div>

				<Link href="/#projects">
					<div className="py-10">
						<button className="bg-gradient-to-r from-gray-700 to-gray-500 w-[90px] py-2 px-1 flex items-center justify-around text-center hover:animate-bounce">
							<IoMdArrowBack size={18} /> {t("home:back")}
						</button>
					</div>
				</Link>
			</div>
			<PopupVideoDeliveroo />
		</div>
	);
};

export default Deliveroo;
