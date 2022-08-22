/* eslint-disable react/no-unescaped-entities */

import React, { useState, useEffect } from "react";
import { useTranslation } from "next-i18next";
import Image from "next/image";
import Link from "next/link";
import iranFlag from "../public/assets/iran.png";
import ukFlag from "../public/assets/uk.png";
import { AiOutlineClose, AiOutlineMenu, AiOutlineMail } from "react-icons/ai";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { TbBrandJavascript } from "react-icons/tb";
import { MdLanguage } from "react-icons/md";
import { useRouter } from "next/router";
import { atom, useAtom } from "jotai";
import LangPopup from "./LangPopup";

// Mulitilingual Config
export async function getStaticProps({ locale }) {
	return {
		props: {
			...(await serverSideTranslations(locale, ["home", "common"])),
		},
	};
}
// Mulitilingual Config

export const isOpen = atom(false);

const NavBar = () => {
	const [isPopUp, setIsPopUp] = useAtom(isOpen);

	const [nav, setNav] = useState(false);
	const [shadow, setShadow] = useState(false);
	const [navBg, setNavBg] = useState("#ecf0f3");
	const [linkColor, setLinkColor] = useState("#1f2937");
	const [menuIconColor, setMenuIconColor] = useState("#1f2937");
	const [isNotHome, setIsNotHome] = useState(false);

	const myRouter = useRouter();

	useEffect(() => {
		if (
			myRouter.asPath === "/property" ||
			myRouter.asPath === "/crypto" ||
			myRouter.asPath === "/netflix" ||
			myRouter.asPath === "/twitch"
		) {
			setNavBg("transparent");
			setLinkColor("#ecf0f3");
			setMenuIconColor("#ecf0f3");
			setIsNotHome(true);
		} else {
			setNavBg("#ecf0f3");
			setLinkColor("#1f2937");
			setMenuIconColor("#666666");
			setIsNotHome(false);
		}
	}, [myRouter]);

	const handleNav = () => {
		setNav(!nav);
	};

	useEffect(() => {
		const handeShadow = () => {
			if (window.scrollY >= 90) {
				setShadow(true);
			} else {
				setShadow(false);
			}
		};
		window.addEventListener("scroll", handeShadow);
	}, []);

	const { t } = useTranslation();

	const handlePopUp = () => {
		setIsPopUp(!isPopUp);
	};

	const handleUK = async () => {
		await myRouter.push("/en");
		setNav(!nav);
	};

	const handleFa = async () => {
		await myRouter.push("/fa");
		setNav(!nav);
	};

	return (
		<div
			style={{ backgroundColor: `${navBg}` }}
			className={shadow ? "fixed w-full shadow-xl z-[100]" : "fixed w-full z-[100]"}
		>
			<div className="flex justify-between items-center w-full h-full px-7 2xl:px-16">
				<Link href="/#home">
					<div className="cursor-pointer">
						<TbBrandJavascript size={80} color={menuIconColor} />
					</div>
				</Link>
				<div>
					<ul
						style={{ color: `${linkColor}` }}
						className="hidden md:flex space-x-[40px] items-center justify-center"
					>
						<Link href="/#home">
							<li className="ml-10 text-sm uppercase p-3 hover:bg-[#60a5fa] rounded-full ease-in duration-300 hover:text-white">
								{t("home:home")}
							</li>
						</Link>
						<Link href="/#about">
							<li className="ml-10 text-sm uppercase p-3 hover:bg-[#60a5fa] rounded-full ease-in duration-300 hover:text-white">
								About
							</li>
						</Link>
						<Link href="/#skills">
							<li className="ml-10 text-sm uppercase p-3 hover:bg-[#60a5fa] rounded-full ease-in duration-300 hover:text-white">
								Skills
							</li>
						</Link>
						<Link href="/#projects">
							<li className="ml-10 text-sm uppercase p-3 hover:bg-[#60a5fa] rounded-full ease-in duration-300 hover:text-white">
								Projects
							</li>
						</Link>
						<Link href="/#contact">
							<li className="ml-10 text-sm uppercase p-3 hover:bg-[#60a5fa] rounded-full ease-in duration-300 hover:text-white">
								Contact
							</li>
						</Link>
						{isNotHome ? null : (
							<div
								onClick={handlePopUp}
								className="cursor-pointer hover:scale-110 ease-in duration-300 p-2 rounded-xl hover:bg-[#60a5fa]/30"
							>
								<MdLanguage size={25} color={"1f2937"} />
							</div>
						)}
					</ul>

					<div onClick={handleNav} className="md:hidden cursor-pointer">
						<AiOutlineMenu size={30} color={menuIconColor} />
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
							{/* <Link href="/">
							</Link> */}
							<div onClick={() => myRouter.push("/")}>
								<TbBrandJavascript onClick={handleNav} color="#666666" size={75} />
							</div>
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
								<li onClick={handleNav} className="py-4 text-sm">
									Home
								</li>
							</Link>
							<Link href="/#about">
								<li onClick={handleNav} className="py-4 text-sm">
									About
								</li>
							</Link>
							<Link href="/#skills">
								<li onClick={handleNav} className="py-4 text-sm">
									Skills
								</li>
							</Link>
							<Link href="/#projects">
								<li onClick={handleNav} className="py-4 text-sm">
									Projects
								</li>
							</Link>
							<Link href="/#contact">
								<li onClick={handleNav} className="py-4 text-sm">
									Contact
								</li>
							</Link>
							<li>
								{isNotHome ? null : (
									<div className="flex flex-col justify-start items-start space-y-5 pt-2">
										<div
											onClick={handleUK}
											className="flex flex-col justify-center items-center"
										>
											<Image
												layout="fixed"
												className="rounded-full"
												width={45}
												height={45}
												priority
												src={ukFlag}
											/>
											<p className="text-[11px] text-center">English</p>
										</div>

										<div
											onClick={handleFa}
											className="flex flex-col justify-center items-center"
										>
											<Image
												layout="fixed"
												className="rounded-full"
												width={45}
												height={45}
												priority
												src={iranFlag}
											/>
											<p className="text-[13px] text-center">فارسی</p>
										</div>
									</div>
								)}
							</li>
						</ul>

						<div style={isNotHome ? { paddingTop: 160 } : { paddingTop: 64 }}>
							<p className="uppercase tracking-wide text-[#60a5fa]">Let's Connect</p>
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
			<LangPopup />
		</div>
	);
};

export default NavBar;
