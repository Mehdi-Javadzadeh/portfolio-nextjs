import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import { useAtom } from "jotai";
import { isOpen } from "../pages/restaurantUI";
import { useTranslation } from "next-i18next";

const PopupVideoRestaurantUI = () => {
	const [isPopUp, setIsPopUp] = useAtom(isOpen);

	const handleClose = () => {
		setIsPopUp(!isPopUp);
	};

	const { t } = useTranslation();
	return (
		<div
			className={
				isPopUp ? " z-[200] fixed left-0 top-0 w-full h-screen bg-black/70" : null
			}
		>
			<div
				className={
					isPopUp
						? " z-[150] fixed left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] w-[90%] sm:w-[80%] lg:w-[60%] md:w-[70%] h-max bg-[#ecf0f3] p-6 ease-in duration-500 rounded-2xl shadow-xl shadow-gray-800"
						: "z-[150] fixed left-[-200%] bottom-0 bg-[#fff] p-6 ease-in duration-500 rounded-xl opacity-50 animate-ping"
				}
			>
				<div className="w-full h-full flex flex-col items-center justify-center relative gap-5">
					<div className="w-full flex items-center justify-between pl-10">
						<p dir="auto" className="text-base">
							{t("home:appFlowVideo")}
						</p>
						<div className="cursor-pointer p-2 bg-[#fca86f]/60 rounded-full ease-in duration-300">
							<AiOutlineClose onClick={handleClose} size={30} color="#fff" />
						</div>
					</div>
					<div className="w-full h-full ">
						{isPopUp ? (
							<iframe
								className="w-full rounded-xl h-[450px]"
								src="https://www.aparat.com/video/video/embed/videohash/M1FwI/vt/frame?startTime=0"
								allowFullScreen={true}
								webkitallowfullscreen="true"
								mozallowfullscreen="true"
							></iframe>
						) : (
							<iframe
								className="w-full rounded-xl h-[450px]"
								src={null}
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

export default PopupVideoRestaurantUI;
