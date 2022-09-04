/* eslint-disable react/no-unescaped-entities */

import React, { useState, useEffect } from "react";
import { useTranslation } from "next-i18next";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
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
	const [hoverBg, setHoverBg] = useState("hover:bg-[#60a5fa]");

	const myRouter = useRouter();

	useEffect(() => {
		if (
			myRouter.asPath === "/samex" ||
			myRouter.asPath === "/deliveroo" ||
			myRouter.asPath === "/hulu" ||
			myRouter.asPath === "/twitch"
		) {
			setNavBg("rgba(000, 000, 000, 0.5)");
			setLinkColor("#ecf0f3");
			setMenuIconColor("#ecf0f3");
			setIsNotHome(true);
		} else {
			setNavBg("#fff");
			setLinkColor("#1f2937");
			setMenuIconColor("#666666");
			setIsNotHome(false);
		}
	}, [myRouter]);

	useEffect(() => {
		if (myRouter.asPath === "/samex") {
			setHoverBg("hover:bg-[#FDB905]");
		} else if (myRouter.asPath === "/deliveroo") {
			setHoverBg("hover:bg-[#00ccbb]");
		} else if (myRouter.asPath === "/hulu") {
			setHoverBg("hover:bg-[#60d175]");
		} else {
			setHoverBg("hover:bg-[#60a5fa]");
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

	const handlePopUp = () => {
		setIsPopUp(!isPopUp);
	};

	const handleUK = () => {
		setNav(!nav);
		myRouter.push("/en");
	};

	const handleFa = () => {
		setNav(!nav);
		myRouter.push("/fa");
	};

	const { t } = useTranslation();

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
						className="hidden md:flex space-x-[38px] items-center justify-center"
					>
						<Link href="/#home">
							<li
								className={`ml-10 text-base uppercase p-3 ${hoverBg} rounded-full ease-in duration-300 hover:text-white`}
							>
								{t("home:home")}
							</li>
						</Link>
						<Link href="/#about">
							<li
								className={`ml-10 text-base uppercase p-3 ${hoverBg} rounded-full ease-in duration-300 hover:text-white`}
							>
								{t("home:about")}
							</li>
						</Link>
						<Link href="/#skills">
							<li
								className={`ml-10 text-base uppercase p-3 ${hoverBg} rounded-full ease-in duration-300 hover:text-white`}
							>
								{t("home:skills")}
							</li>
						</Link>
						<Link href="/#projects">
							<li
								className={`ml-10 text-base uppercase p-3 ${hoverBg} rounded-full ease-in duration-300 hover:text-white`}
							>
								{t("home:projects")}
							</li>
						</Link>
						<Link href="/#contact">
							<li
								className={`ml-10 text-base  uppercase p-3 ${hoverBg} rounded-full ease-in duration-300 hover:text-white`}
							>
								{t("home:contact")}
							</li>
						</Link>
						{isNotHome ? null : (
							<div
								onClick={handlePopUp}
								className="cursor-pointer hover:scale-110 ease-in duration-300 p-2 rounded-xl hover:bg-[#60a5fa]/30 space-x-4"
							>
								<MdLanguage size={25} color={"#1f2937"} />
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
							? "md:hidden fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#fff] p-10  ease-in duration-500"
							: "fixed left-[-200%] top-0 p-10 ease-in duration-500"
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
								className="rounded-full shadow-lg shadow-gray-400 p-2 cursor-pointer bg-[#fff]"
							>
								<AiOutlineClose size={25} />
							</div>
						</div>

						<div className="border-b border-gray-300 my-4">
							<p className="w-[85%] md:w-[90%] py-4">{t("home:headerTitle")}</p>
						</div>
					</div>
					<div className="py-2 flex flex-col">
						<ul className="uppercase">
							<Link href="/">
								<li onClick={handleNav} className="py-4 text-sm">
									{t("home:home")}
								</li>
							</Link>
							<Link href="/#about">
								<li onClick={handleNav} className="py-4 text-sm">
									{t("home:about")}
								</li>
							</Link>
							<Link href="/#skills">
								<li onClick={handleNav} className="py-4 text-sm">
									{t("home:skills")}
								</li>
							</Link>
							<Link href="/#projects">
								<li onClick={handleNav} className="py-4 text-sm">
									{t("home:projects")}
								</li>
							</Link>
							<Link href="/#contact">
								<li onClick={handleNav} className="py-4 text-sm">
									{t("home:contact")}
								</li>
							</Link>
							<li>
								{isNotHome ? null : (
									<div className="flex flex-row justify-start items-center space-x-8 pt-2">
										<div
											onClick={handleUK}
											className="felx flex-col items-center justify-center"
										>
											<Image
												layout="fixed"
												className="rounded-full"
												width={45}
												height={45}
												priority
												src={"/assets/uk.png"}
											/>
											<p className="text-[11px] text-center">English</p>
										</div>

										<div
											onClick={handleFa}
											className="felx flex-col items-center justify-center"
										>
											<Image
												layout="fixed"
												className="rounded-full"
												width={45}
												height={45}
												priority
												src={"/assets/iran.png"}
											/>
											<p className="text-[12px] text-center">فارسی</p>
										</div>
									</div>
								)}
							</li>
						</ul>
					</div>
				</div>
			</div>
			<LangPopup />
		</div>
	);
};

export default NavBar;
