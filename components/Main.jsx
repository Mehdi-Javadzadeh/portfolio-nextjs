import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { atom, useAtom } from "jotai";
import { useTranslation } from "next-i18next";
import EmailPopup from "./EmailPopup";
import PhonePopup from "./PhonePopup";

export const isMailOpen = atom(false);
export const isPhoneOpen = atom(false);

const Main = () => {
	const [isPopUp, setIsPopUp] = useAtom(isMailOpen);
	const [isPhonePopUp, setIsPhonePopUp] = useAtom(isPhoneOpen);

	const handlePopupEmail = () => {
		setIsPopUp(!isPopUp);
	};
	const handlePopupPhone = () => {
		setIsPhonePopUp(!isPhonePopUp);
	};
	const { t } = useTranslation();

	return (
		<div id="home" className="w-full h-screen text-center relative z-100">
			<div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center ">
				<div>
					<p className="uppercase text-sm tracking-wide text-gray-600 pt-44 pb-5 sm:pb-10 sm:pt-0">
						{t("home:headerTitle")}
					</p>
					<h1 dir="auto" className="py-4 text-gray-700 ">
						{t("home:mainTitle2")}{" "}
						<span className="text-[#60a5fa]">{t("home:myName")}</span>
					</h1>
					<h1 dir="auto" className="py-2 text-gray-700">
						{t("home:mainTitle")}
					</h1>
					<p className="py-6 text-gray-600 max-w-[70%] m-auto">
						{t("home:subMainTitle")}
					</p>
					<div className="flex items-center justify-around max-w-[370px] m-auto py-2 pt-0 ">
						<a
							href="https://www.linkedin.com/in/mehdi-javadzadeh/"
							target="_blank"
							rel="noreferrer"
						>
							<div className="rounded-full shadow-lg shadow-gray-400 p-5 cursor-pointer hover:scale-110 ease-in duration-300">
								<FaLinkedinIn size={25} />
							</div>
						</a>
						<a
							href="https://github.com/Mehdi-Javadzadeh?tab=repositories"
							target="_blank"
							rel="noreferrer"
						>
							<div className="rounded-full shadow-lg shadow-gray-400 p-5 cursor-pointer hover:scale-110 ease-in duration-300">
								<FaGithub size={25} />
							</div>
						</a>

						<div
							onClick={handlePopupEmail}
							className="rounded-full shadow-lg shadow-gray-400 p-5 cursor-pointer hover:scale-110 ease-in duration-300"
						>
							<AiOutlineMail size={25} />
						</div>

						<div
							onClick={handlePopupPhone}
							className="rounded-full shadow-lg shadow-gray-400 p-5 cursor-pointer hover:scale-110 ease-in duration-300"
						>
							<BsFillPersonLinesFill size={25} />
						</div>
					</div>
				</div>
			</div>
			<EmailPopup />
			<PhonePopup />
		</div>
	);
};

export default Main;
