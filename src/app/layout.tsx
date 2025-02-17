import type { Metadata } from "next";
import { DM_Sans, Outfit, Raleway, Roboto } from "next/font/google";
import "./globals.css";
import TopNav from "@/components/globals/TopNav";
import Navbar from "@/components/globals/Navbar";

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
			<body
				className={`${dm_sans.variable} ${raleway.variable} ${outfit.variable} ${roboto.variable} antialiased`}
			>
				<TopNav />
				<Navbar />
				{children}
			</body>
		</html>
	);
}
