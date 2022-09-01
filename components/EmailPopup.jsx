import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import { useAtom } from "jotai";
import { isMailOpen } from "./Main";

const EmailPopup = () => {
	const [isPopUp, setIsPopUp] = useAtom(isMailOpen);

	return (
		<div
			className={
				isPopUp ? " z-[200] fixed left-0 top-0 w-full h-screen bg-black/70" : null
			}
		>
			<div
				className={
					isPopUp
						? " z-[200] fixed left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] w-[85%] sm:w-[70%] lg:w-[40%] md:w-[60%] h-max bg-[#ecf0f3] p-6 ease-in duration-[730ms] rounded-2xl shadow-xl shadow-gray-800"
						: "fixed left-[-200%] bottom-0 w-[85%] sm:w-[70%] lg:w-[40%] md:w-[60%] h-[30vh] bg-[#fff] p-6 ease-in duration-[850ms] rounded-xl"
				}
			>
				<div className="w-full flex items-center justify-between pl-10">
					<p className="text-base">My Email Address :</p>
					<div className="cursor-pointer p-2 bg-[#60a5fa]/60 rounded-full ease-in duration-300">
						<AiOutlineClose onClick={() => setIsPopUp(!isPopUp)} size={30} color="#fff" />
					</div>
				</div>

				<p className="py-8 text-xl text-center">mj.active2013@gmail.com</p>
			</div>
		</div>
	);
};

export default EmailPopup;
