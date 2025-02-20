"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { Menu, X } from "lucide-react";

export default function TopNav() {
	// We'll keep the base URL for external links
	const url = process.env.NEXT_PUBLIC_BASE_URL;

	// State to manage mobile menu visibility
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

	// Updated topNavItems with proper routing paths
	const topNavItems = [
		{
			id: 1,
			label: "Parent Portal",
			// We'll keep the original URL structure for external links
			href: `${url}/ParentPortal.aspx`,
		},
		{ id: 2, label: "Careers", href: `${url}/Careers.aspx` },
		{ id: 3, label: "News and Events", href: `${url}/NewsAndEvents.aspx` },
		{ id: 4, label: "Calendar", href: `${url}/Calender.aspx` },
		{ id: 5, label: "Gallery", href: `${url}/gallery.aspx` },
		{ id: 6, label: "Academic Topper", href: `${url}/academictopper.aspx` },
	];

	// Helper function to render nav items with consistent Link wrapping
	interface NavItem {
		id: number;
		label: string;
		href: string;
	}

	const renderNavItem = (nav: NavItem, className: string) => (
		<Link
			key={nav.id}
			href={nav.href}
			target="_blank"
			rel="noopener noreferrer"
			className={className}
		>
			{nav.label}
		</Link>
	);

	return (
		<div className="w-full font-dm">
			{/* Top yellow navigation bar */}
			<nav className="relative bg-[#FFCE0F]">
				{/* Desktop navigation */}
				<div className="hidden md:block py-2 px-4 lg:px-14">
					<ul className="flex items-center justify-end gap-x-4 lg:gap-x-9">
						{topNavItems.map((nav) => (
							<li key={nav.id}>
								{renderNavItem(
									nav,
									"text-base lg:text-lg text-[#213162] hover:cursor-pointer hover:opacity-80 transition-opacity",
								)}
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
								<li key={nav.id}>
									{renderNavItem(
										nav,
										"block w-full py-3 text-[#213162] hover:opacity-80 transition-opacity border-b border-[#213162]/10 last:border-none",
									)}
								</li>
							))}
						</ul>
					</div>
				)}
			</nav>

			{/* Logo section */}
			<div className="py-2 px-4 lg:px-14 flex flex-col md:flex-row items-center justify-between gap-y-4 md:gap-y-0">
				<Link href="/" className="w-48 md:w-auto">
					<Image
						src="/global/logo.svg"
						alt="Logo"
						width={261}
						height={50}
						className="hover:cursor-pointer w-full h-auto"
					/>
				</Link>
				<Link href="/" className="w-36 md:w-auto">
					<Image
						src="/global/flex.svg"
						alt="Logo"
						width={189}
						height={70}
						className="hover:cursor-pointer w-full h-auto"
					/>
				</Link>
			</div>
		</div>
	);
}
