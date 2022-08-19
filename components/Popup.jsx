import React from "react";
import { AiOutlineClose, AiOutlineMenu, AiOutlineMail } from "react-icons/ai";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { useAtom } from "jotai";
import { isOpen } from "./Main";

const Popup = () => {
	const [isPopUp, setIsPopUp] = useAtom(isOpen);
	return (
		<div
			className={isPopUp ? "z-[100] fixed left-0 top-0 w-full h-full bg-black/70" : null}
		>
			<div
				className={
					isPopUp
						? "z-[100] fixed left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] w-[75%] sm:w-[70%] lg:w-[40%] md:w-[60%] h-[45vh] bg-[#fff] p-10 ease-in duration-[730ms] rounded-2xl shadow-xl shadow-gray-800"
						: "fixed left-[-200%] bottom-0 w-[75%] sm:w-[70%] lg:w-[40%] md:w-[60%] h-[45vh] bg-[#fff] p-10 ease-in duration-[700ms] rounded-xl animate-ping"
				}
			>
				<h1>Hey i'm PopUp</h1>
				<AiOutlineClose onClick={() => setIsPopUp(!isPopUp)} size={25} />
			</div>
		</div>
	);
};

export default Popup;

// out pop up "fixed left-[-100%] top-0 p-10 ease-in duration-500"
