/* eslint-disable react/no-unescaped-entities */

import React, { useState } from "react";
import { useTranslation } from "next-i18next";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineClose, AiOutlineMenu, AiOutlineMail } from "react-icons/ai";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
// import navLogo from "../public/assets/navLogo.png"

const NavBar = () => {
	const [nav, setNav] = useState(false);

	const handleNav = () => {
		setNav(!nav);
	};
	const { t } = useTranslation();

	return (
		<div className="fixed w-full shadow-xl z-[100]">
			<div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
				<Image src="/assets/navLogo.png" alt="/" width="125" height="50" />
				<div>
					<ul className="hidden md:flex">
						<Link href="/">
							<li className="ml-10 text-sm uppercase hover:border-b">Home</li>
						</Link>
						<Link href="/">
							<li className="ml-10 text-sm uppercase hover:border-b">About</li>
						</Link>
						<Link href="/">
							<li className="ml-10 text-sm uppercase hover:border-b">Skills</li>
						</Link>
						<Link href="/">
							<li className="ml-10 text-sm uppercase hover:border-b">Projects</li>
						</Link>
						<Link href="/">
							<li className="ml-10 text-sm uppercase hover:border-b">Contact</li>
						</Link>
					</ul>

					<div onClick={handleNav} className="md:hidden cursor-pointer">
						<AiOutlineMenu size={25} />
					</div>
				</div>
			</div>

			<div
				className={
					nav ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70" : null
				}
			>
				<div
					className={
						nav
							? "md:hidden fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500"
							: "fixed left-[-100%] top-0 p-10 ease-in duration-500"
					}
				>
					<div>
						<div className="w-full flex justify-between items-center">
							<Image src="/assets/navLogo.png" width={87} height={35} alt="/" />
							<div
								onClick={handleNav}
								className="rounded-full shadow-lg shadow-gray-400 p-2 cursor-pointer"
							>
								<AiOutlineClose size={25} />
							</div>
						</div>

						<div className="border-b border-gray-300 my-4">
							<p className="w-[85%] md:w-[90%] py-4">
								Let's build something legendary together
							</p>
						</div>
					</div>
					<div className="py-4 flex flex-col">
						<ul className="uppercase">
							<Link href="/">
								<li className="py-4 text-sm">Home</li>
							</Link>
							<Link href="/">
								<li className="py-4 text-sm">About</li>
							</Link>
							<Link href="/">
								<li className="py-4 text-sm">Skills</li>
							</Link>
							<Link href="/">
								<li className="py-4 text-sm">Projects</li>
							</Link>
							<Link href="/">
								<li className="py-4 text-sm">Contact</li>
							</Link>
						</ul>

						<div className="pt-40">
							<p className="uppercase tracking-wide text-[#5651e5]">Let's Connect</p>
							<div className="flex items-center justify-between my-4 w-full sm:w-[80%]">
								<div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
									<FaLinkedinIn />
								</div>
								<div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
									<FaGithub />
								</div>
								<div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
									<AiOutlineMail />
								</div>
								<div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
									<BsFillPersonLinesFill />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default NavBar;

{
	/* <li className='ml-10 text-sm uppercase hover:border-b hover:bg-blue-400 rounded-full p-2 ease-in-out duration-500 hover:text-gray-100'>Home</li> */
}
