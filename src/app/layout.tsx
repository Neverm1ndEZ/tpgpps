import type { Metadata } from "next";
import { DM_Sans, Outfit, Raleway, Roboto } from "next/font/google";
import "./globals.css";
import TopNav from "@/components/globals/TopNav";
import Navbar from "@/components/globals/Navbar";
import Footer from "@/components/globals/Footer";
import { GoogleAnalytics } from "@next/third-parties/google";
import Script from "next/script";

const dm_sans = DM_Sans({
	variable: "--font-dm",
	subsets: ["latin"],
	display: "swap",
});

const raleway = Raleway({
	variable: "--font-raleway",
	subsets: ["latin"],
	display: "swap",
});

const outfit = Outfit({
	variable: "--font-outfit",
	subsets: ["latin"],
	display: "swap",
});

const roboto = Roboto({
	variable: "--font-roboto",
	subsets: ["latin"],
	display: "swap",
	weight: ["100", "300", "400", "500", "700", "900"],
});

export const metadata: Metadata = {
	title: "The Path Global Public School",
	description: "Give Your Child the Future You Envision",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<head>
				<Script
					id="next"
					async
					src={`https://www.googletagmanager.com/gtag/js?id=G-6WEQ77HL9N`}
				></Script>
				<Script id="next">
					{`window.dataLayer = window.dataLayer || [];
									function gtag(){dataLayer.push(arguments);}
									gtag('js', new Date());
									gtag('config', 'G-6WEQ77HL9N');`}
				</Script>
			</head>
			<body
				className={`${dm_sans.variable} ${raleway.variable} ${outfit.variable} ${roboto.variable} antialiased`}
			>
				<TopNav />
				<Navbar />
				{children}
				<Footer />
				<GoogleAnalytics gaId="G-XYZ" />
			</body>
		</html>
	);
}
