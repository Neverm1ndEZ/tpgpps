"use client";
import Image from "next/image";
import React, { useState } from "react";
import { Menu, X } from "lucide-react";

export default function TopNav() {
	// State to manage mobile menu visibility
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

	const topNavItems = [
		{ id: 1, label: "Parent Portal" },
		{ id: 2, label: "Careers" },
		{ id: 3, label: "News and Events" },
		{ id: 4, label: "Calendar" },
		{ id: 5, label: "Gallery" },
		{ id: 6, label: "Academic Topper" }, // Fixed duplicate id
	];

	return (
		<div className="w-full font-dm">
			{/* Top yellow navigation bar */}
			<nav className="relative bg-[#FFCE0F]">
				{/* Desktop navigation */}
				<div className="hidden md:block py-2 px-4 lg:px-14">
					<ul className="flex items-center justify-end gap-x-4 lg:gap-x-9">
						{topNavItems.map((nav) => (
							<li
								key={nav.id}
								className="text-base lg:text-lg text-[#213162] hover:cursor-pointer hover:opacity-80 transition-opacity"
							>
								{nav.label}
							</li>
						))}
					</ul>
				</div>

				{/* Mobile hamburger menu */}
				<div className="md:hidden p-4 flex justify-end">
					<button
						onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
						className="text-[#213162] p-2"
						aria-label="Toggle menu"
					>
						{isMobileMenuOpen ? (
							<X className="h-6 w-6" />
						) : (
							<Menu className="h-6 w-6" />
						)}
					</button>
				</div>

				{/* Mobile menu dropdown */}
				{isMobileMenuOpen && (
					<div className="md:hidden absolute top-full left-0 right-0 bg-[#FFCE0F] shadow-lg z-50">
						<ul className="px-4 py-2">
							{topNavItems.map((nav) => (
								<li
									key={nav.id}
									className="py-3 text-[#213162] hover:opacity-80 transition-opacity border-b border-[#213162]/10 last:border-none"
								>
									{nav.label}
								</li>
							))}
						</ul>
					</div>
				)}
			</nav>

			{/* Logo section */}
			<div className="py-2 px-4 lg:px-14 flex flex-col md:flex-row items-center justify-between gap-y-4 md:gap-y-0">
				<div className="w-48 md:w-auto">
					<Image
						src="/global/logo.svg"
						alt="Logo"
						width={261}
						height={50}
						className="hover:cursor-pointer w-full h-auto"
					/>
				</div>
				<div className="w-36 md:w-auto">
					<Image
						src="/global/flex.svg"
						alt="Logo"
						width={189}
						height={70}
						className="hover:cursor-pointer w-full h-auto"
					/>
				</div>
			</div>
		</div>
	);
}
