import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
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
	return (
		<div id="contact" className="w-full lg:h-screen">
			<div className="max-w-[1240px] w-full m-auto px-2 py-2">
				<p className="text-xl tracking-widest uppercase text-[#60a5fa]">Contact</p>
				<h2 className="py-4">Get In Touch</h2>
				<div className="grid lg:grid-cols-5 gap-8">
					{/* Left */}

					<div className="col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4">
						<div className="lg:p-4 h-full ">
							<div className="hover:scale-105 ease-in duration-300">
								<Image className="rounded-xl" src={ContactImage} alt="/" />
							</div>
							<div>
								<h2 className="py-2">Name here</h2>
								<p>Front-End Developer</p>
								<p className="py-4">
									I am available for freelance or full-time positions. Contact me and
									let&apos;s talk.
								</p>
							</div>

							<div>
								<p className="uppercase pt-8">Connect with Me</p>
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
										<label className="uppercase text-sm py-2">Full Name</label>
										<input
											className="border-2 rounded-lg p-3 flex border-gray-300"
											type="text"
											dir="auto"
											placeholder="Mehdi Javadzadeh"
										/>
									</div>
									<div className="flex flex-col">
										<label className="uppercase text-sm py-2">Phone Number</label>
										<input
											className="border-2 rounded-lg p-3 flex border-gray-300"
											type="text"
											placeholder="09035708239"
											dir="auto"
										/>
									</div>
								</div>
								<div className="flex flex-col py-2">
									<label className="uppercase text-sm py-2">Email</label>
									<input
										className="border-2 rounded-lg p-3 flex border-gray-300"
										type="email"
										placeholder="mj.active2013@gmail.com"
									/>
								</div>
								<div className="flex flex-col py-2">
									<label className="uppercase text-sm py-2">Subject</label>
									<input
										className="border-2 rounded-lg p-3 flex border-gray-300"
										type="text"
										placeholder="Front-End Developer"
										dir="auto"
									/>
								</div>
								<div className="flex flex-col py-2">
									<label className="uppercase text-sm py-2">Message</label>
									<textarea
										rows={10}
										dir="auto"
										className=" border-2 rounded-lg p-3 border-gray-300 resize-none"
									></textarea>
								</div>

								<button disabled className="w-full p-4 text-gray-100 mt-4">
									Send Message
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
