import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import Image from "next/image";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import iranFlag from "../public/assets/iran.png";
import ukFlag from "../public/assets/uk.png";
import { useAtom } from "jotai";
import { isOpen } from "./NavBar";

const LangPopup = () => {
	const [isPopUp, setIsPopUp] = useAtom(isOpen);

	const handleUK = async () => {
		await myRouter.push("/en");
		setIsPopUp(!isPopUp);
	};

	const handleFa = async () => {
		await myRouter.push("/fa");
		setIsPopUp(!isPopUp);
	};

	const myRouter = useRouter();

	return (
		<div
			className={
				isPopUp
					? "hidden md:block z-[200] fixed left-0 top-0 w-full h-screen bg-black/70"
					: null
			}
		>
			<div
				className={
					isPopUp
						? "hidden md:block z-[200] fixed left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] w-[85%] sm:w-[70%] lg:w-[40%] md:w-[60%] h-[30vh] bg-[#ecf0f3] p-6 ease-in duration-[730ms] rounded-2xl shadow-xl shadow-gray-800"
						: "fixed left-[-200%] bottom-0 w-[85%] sm:w-[70%] lg:w-[40%] md:w-[60%] h-[30vh] bg-[#fff] p-6 ease-in duration-[850ms] rounded-xl"
				}
			>
				<div className="w-full flex items-center justify-between pl-10">
					<p className="text-lg">Language Selection:</p>
					<div className="cursor-pointer p-2 bg-[#60a5fa]/60 rounded-full ease-in duration-300">
						<AiOutlineClose onClick={() => setIsPopUp(!isPopUp)} size={30} color="#fff" />
					</div>
				</div>
				<div className="flex flex-row items-center justify-around w-full h-[70%]">
					<div
						onClick={handleUK}
						className=" flex items-center justify-center text-center space-x-2 cursor-pointer hover:scale-110 ease-in duration-300"
					>
						<Image
							layout="fixed"
							className="rounded-full"
							width={60}
							height={60}
							priority
							src={ukFlag}
						/>
						<p className="text-[13px]">English</p>
					</div>

					<div
						onClick={handleFa}
						className="flex items-center justify-center text-center space-x-2 cursor-pointer hover:scale-110 ease-in duration-300"
					>
						<Image
							layout="fixed"
							className="rounded-full"
							width={60}
							height={60}
							priority
							src={iranFlag}
						/>
						<p className="text-[14px]">فارسی</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default LangPopup;
