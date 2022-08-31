import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "next-i18next";
import ContactImage from "../public/assets/contact.jpg";
import { AiOutlineClose, AiOutlineMenu, AiOutlineMail } from "react-icons/ai";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";

const Contact = () => {
	const [isHovered, setIsHovered] = useState(false);

	const handleHover = () => {
		setIsHovered(true);
	};
	const { t } = useTranslation();
	return (
		<div id="contact" className="w-full lg:h-screen">
			<div className="max-w-[1240px] w-full m-auto px-2 py-2">
				<p dir="auto" className="text-xl tracking-wide uppercase text-[#60a5fa]">
					{t("home:contact")}
				</p>
				<h2 dir="auto" className="py-8">
					{t("home:getInTouch")}
				</h2>
				<div className="grid lg:grid-cols-5 gap-8">
					{/* Left */}

					<div className="col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4">
						<div className="lg:p-4 h-full ">
							<div className="hover:scale-105 ease-in duration-300">
								<Image className="rounded-xl" src={ContactImage} alt="/" />
							</div>
							<div>
								<h2 dir="auto" className="py-4">
									{t("home:front")}
								</h2>
								<p dir="auto" className="py-4">
									{t("home:letsTalk")}
								</p>
							</div>

							<div>
								<p dir="auto" className="uppercase pt-8">
									{t("home:getInTouch")}
								</p>
								<div className="flex items-center justify-between py-4">
									<a href="https://google.com" target="_blank" rel="noreferrer">
										<div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
											<FaLinkedinIn />
										</div>
									</a>
									<a href="https://google.com" target="_blank" rel="noreferrer">
										<div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
											<FaGithub />
										</div>
									</a>
									<a href="/#contact">
										<div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
											<AiOutlineMail />
										</div>
									</a>
									<a href="/#contact">
										<div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
											<BsFillPersonLinesFill />
										</div>
									</a>
								</div>
							</div>
						</div>
					</div>

					{/* Right */}

					<div className="col-span-3 w-full h-full shadow-xl shadow-gray-400 rounded-xl lg:p-4">
						<div className="p-4">
							<form>
								<div className="grid md:grid-cols-2 gap-4 w-full my-2">
									<div className="flex flex-col">
										<label dir="auto" className="uppercase text-sm py-2">
											{t("home:fullName")}
										</label>
										<input
											className="border-2 rounded-lg p-3 flex border-gray-300"
											type="text"
											dir="auto"
										/>
									</div>
									<div className="flex flex-col">
										<label dir="auto" className="uppercase text-sm py-2">
											{t("home:phoneNumber")}
										</label>
										<input
											className="border-2 rounded-lg p-3 flex border-gray-300"
											type="text"
											dir="auto"
										/>
									</div>
								</div>
								<div className="flex flex-col py-2">
									<label dir="auto" className="uppercase text-sm py-2">
										{t("home:email")}
									</label>
									<input
										className="border-2 rounded-lg p-3 flex border-gray-300"
										type="email"
									/>
								</div>
								<div className="flex flex-col py-2">
									<label dir="auto" className="uppercase text-sm py-2">
										{t("home:subject")}
									</label>
									<input
										className="border-2 rounded-lg p-3 flex border-gray-300"
										type="text"
										dir="auto"
									/>
								</div>
								<div className="flex flex-col py-2">
									<label dir="auto" className="uppercase text-sm py-2">
										{t("home:message")}
									</label>
									<textarea
										rows={10}
										dir="auto"
										className=" border-2 rounded-lg p-3 border-gray-300 resize-none"
									></textarea>
								</div>

								<button disabled className="w-full p-4 text-gray-100 mt-4">
									{t("home:sendMessage")}
								</button>
							</form>
						</div>
					</div>
				</div>

				<div className="flex justify-center items-center p-12">
					<Link href="/">
						<div
							onMouseEnter={handleHover}
							onMouseLeave={() => setIsHovered(false)}
							className="hover:bg-blue-400 rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300"
						>
							<HiOutlineChevronDoubleUp
								className={
									isHovered
										? "text-white ease-in duration-500"
										: " text-black/60 ease-in duration-500"
								}
								size={35}
							/>
						</div>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Contact;
