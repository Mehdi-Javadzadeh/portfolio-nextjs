import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { atom, useAtom } from "jotai";
import PopupGitHub from "./PopupGitHub";
import PopupLinkedIn from "./PopupLinkedIn";
import { useState } from "react";
import Link from "next/link";

export const isOpen = atom(false);
export const isLinkedinOpen = atom(false);

const Main = () => {
	const [isPopUp, setIsPopUp] = useAtom(isOpen);
	const [isPopUpLinkedin, setIsLinkedin] = useAtom(isLinkedinOpen);

	const handlePopUpGitHub = () => {
		setIsPopUp(!isPopUp);
	};
	const handlePopUpLinkedIn = () => {
		setIsLinkedin(!isPopUpLinkedin);
	};
	return (
		<div id="home" className="w-full h-screen text-center relative z-100">
			<div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center ">
				<div>
					<p className="uppercase text-sm tracking-wide text-gray-600">
						LET'S BUILD SOMETHING TOGHETER
					</p>
					<h1 className="py-4 text-gray-700">
						Hi, I'm <span className="text-[#60a5fa]">Mehdi</span>
					</h1>
					<h1 className="py-2 text-gray-700">A Front-End Web Developer</h1>
					<p className="py-4 text-gray-600 max-w-[70%] m-auto">
						i'm a front-end developer specializing building (and occasionally designing)
						exceptional digital experiences. Currently, i'm foucsed on building responsive
						fornd-end web applications while learning back-end technologies
					</p>
					<div className="flex items-center justify-around max-w-[370px] m-auto py-4 ">
						<a href="https://google.com" target="_blank" rel="noreferrer">
							<div className="rounded-full shadow-lg shadow-gray-400 p-5 cursor-pointer hover:scale-110 ease-in duration-300">
								<FaLinkedinIn size={25} />
							</div>
						</a>
						<a href="https://google.com" target="_blank" rel="noreferrer">
							<div className="rounded-full shadow-lg shadow-gray-400 p-5 cursor-pointer hover:scale-110 ease-in duration-300">
								<FaGithub size={25} />
							</div>
						</a>
						<a href="/#contact">
							<div className="rounded-full shadow-lg shadow-gray-400 p-5 cursor-pointer hover:scale-110 ease-in duration-300">
								<AiOutlineMail size={25} />
							</div>
						</a>
						<a href="/#contact">
							<div className="rounded-full shadow-lg shadow-gray-400 p-5 cursor-pointer hover:scale-110 ease-in duration-300">
								<BsFillPersonLinesFill size={25} />
							</div>
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Main;
