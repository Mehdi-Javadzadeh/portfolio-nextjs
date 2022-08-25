import React from "react";
import { AiOutlineClose, AiOutlineMenu, AiOutlineMail } from "react-icons/ai";
import { useAtom } from "jotai";
import { isOpen } from "../pages/property";
import { useState } from "react";

const PopupVideo = () => {
	const [isPopUp, setIsPopUp] = useAtom(isOpen);

	const handleClose = () => {
		setIsPopUp(!isPopUp);
	};
	return (
		<div
			className={
				isPopUp ? " z-[200] fixed left-0 top-0 w-full h-screen bg-black/70" : null
			}
		>
			<div
				className={
					isPopUp
						? " z-[200] fixed left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] w-[90%] sm:w-[80%] lg:w-[60%] md:w-[70%] h-max bg-[#ecf0f3] p-6 ease-in duration-[850ms] rounded-2xl shadow-xl shadow-gray-800"
						: "z-[200] fixed left-[-200%] bottom-0 w-[90%] sm:w-[80%] lg:w-[60%] md:w-[70%] h-max bg-[#fff] p-6 ease-in duration-[900ms] rounded-xl opacity-50"
				}
			>
				<div className="w-full h-full flex flex-col items-center justify-center relative gap-5">
					<div className="w-full flex items-center justify-between pl-10">
						<p className="text-lg">Application Flow Video:</p>
						<div className="cursor-pointer p-2 bg-[#60a5fa]/60 rounded-full ease-in duration-300">
							<AiOutlineClose onClick={handleClose} size={30} color="#fff" />
						</div>
					</div>
					<div className="w-full h-full ">
						{isPopUp ? (
							<iframe
								className="w-full rounded-xl h-[450px]"
								src="https://www.aparat.com/video/video/embed/videohash/orq0j/vt/frame"
								allowFullScreen={true}
								webkitallowfullscreen="true"
								mozallowfullscreen="true"
							></iframe>
						) : (
							<iframe
								className="w-full rounded-xl h-[450px]"
								allowFullScreen={true}
								webkitallowfullscreen="true"
								mozallowfullscreen="true"
							></iframe>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

export default PopupVideo;

// {isPopUp ? <Video /> : null}
