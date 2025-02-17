import Image from "next/image";
import React from "react";

export default function TopNav() {
	const topNavItems = [
		{ id: 1, label: "Parent Portal" },
		{ id: 2, label: "Careers" },
		{ id: 3, label: "News and Events" },
		{ id: 4, label: "Calendar" },
		{ id: 5, label: "Gallery" },
		{ id: 4, label: "Academic Topper" },
	];

	return (
		<div className="w-full font-dm space-y-4">
			<nav className="py-2 px-14 flex items-center justify-end p-2 gap-x-6 h-14 bg-[#FFCE0F]">
				<ul className="flex items-center gap-x-9">
					{topNavItems.map((nav, index) => (
						<li
							key={index}
							className="text-lg text-[#213162] hover:cursor-pointer"
						>
							{/* <Link href={nav.href} className="block py-2"> */}
							{nav.label}
							{/* </Link> */}
						</li>
					))}
				</ul>
			</nav>
			<div className="py-2 px-14 flex items-center justify-between w-full h-20">
				<div>
					<Image
						src={"/global/logo.svg"}
						alt="Logo"
						width={261}
						height={50}
						className="hover:cursor-pointer"
					/>
				</div>
				<div>
					<Image
						src={"/global/flex.svg"}
						alt="Logo"
						width={189}
						height={70}
						className="hover:cursor-pointer"
					/>
				</div>
			</div>
		</div>
	);
}
