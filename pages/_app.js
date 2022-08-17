import * as React from "react";
import { appWithTranslation } from "next-i18next";
import dynamic from "next/dynamic";
import Head from "next/head";
import "../styles/globals.css";
import { createGlobalStyle } from "styled-components";
import "../public/fonts/font.css";
import NavBar from "../components/NavBar";

function MyApp({ Component, pageProps }) {
	return (
		<>
			<Head>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
			</Head>
			<GlobalStyle />
			<NavBar />
			<Component {...pageProps} />
		</>
	);
}

export default dynamic(() => Promise.resolve(appWithTranslation(MyApp)), {
	ssr: false,
});

const GlobalStyle = createGlobalStyle`
*{
  font-family : 'IRANSans' !important;
}
`;
