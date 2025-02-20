"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";

export default function Navbar() {
	const url = process.env.NEXT_PUBLIC_BASE_URL;

	// State for mobile menu and dropdown visibility
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
	const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

	// Updated navigation items with proper routing
	const navItems = [
		{ id: 1, label: "Home", icon: false, href: "/" },
		{ id: 2, label: "Profile", icon: true },
		{ id: 3, label: "Academics", icon: true },
		{ id: 4, label: "Student Life", icon: true },
		{ id: 5, label: "Facilities", icon: true },
		{ id: 6, label: "Contact Us", icon: false, href: `${url}/Contactus.aspx` },
		{
			id: 7,
			label: "Mandatory Public Disclosure",
			icon: false,
			href: `${url}/Mandatory-Public-Disclosure.aspx`,
		},
	];

	// All menu items maintained with their external URLs
	const profileMenu = [
		{ id: 1, label: "About Us", href: `${url}/Aboutus.aspx` },
		{ id: 2, label: "Our Chairman's Desk", href: `${url}/Chairmans-desk.aspx` },
		{ id: 3, label: "Our Correspondent's Desk", href: "/" },
		{
			id: 4,
			label: "Our Principal's Desk",
			href: `${url}/Principal-desk.aspx`,
		},
	];

	// Other menu arrays remain the same...
	const academicsMenu = [
		{ id: 1, label: "Student Strength", href: `${url}/student-strength.aspx` },
		{ id: 2, label: "Campus", href: `${url}/Campus.aspx` },
		{
			id: 3,
			label: "Educational Pattern",
			href: `${url}/Educational_Pattern.aspx`,
		},
		{ id: 4, label: "Sample TC", href: `${url}/Assets/Pdf/Sample_TC.pdf` },
	];

	const studentLifeMenu = [
		{ id: 1, href: `${url}/Games_and_Sports.aspx`, label: "Games and Sports" },
		{ id: 2, href: `${url}/House_Formation.aspx`, label: "House Formation" },
		{
			id: 3,
			href: `${url}/Scouts_and_Guides.aspx`,
			label: "Scouts and Guides",
		},
		{ id: 4, href: `${url}/Gist_of_Events.aspx`, label: "Gist and Events" },
		{ id: 5, href: `${url}/Student_Clubs.aspx`, label: "Student Club" },
		{
			id: 6,
			href: `${url}/Achievements_by_Students.aspx`,
			label: "Achievements By Students",
		},
	];

	const facilitiesMenu = [
		{ id: 1, href: `${url}/Class_Rooms.aspx`, label: "Classroom" },
		{ id: 2, href: `${url}/FoodAndDining.aspx`, label: "Food and Dining" },
		// ... other facilities items remain the same
	];

	// Helper function to render a navigation link
	const renderNavLink = (
		href: string,
		children: React.ReactNode,
		className: string,
	) => (
		<Link
			href={href}
			target="_blank"
			rel="noopener noreferrer"
			className={className}
		>
			{children}
		</Link>
	);

	// Function to get the appropriate dropdown menu
	interface MenuItem {
		id: number;
		label: string;
		href: string;
	}

	const getDropdownMenu = (label: string): MenuItem[] | null => {
		switch (label) {
			case "Profile":
				return profileMenu;
			case "Academics":
				return academicsMenu;
			case "Student Life":
				return studentLifeMenu;
			case "Facilities":
				return facilitiesMenu;
			default:
				return null;
		}
	};

	// Handle dropdown toggle
	const handleDropdownToggle = (label: string) => {
		setActiveDropdown(activeDropdown === label ? null : label);
	};

	// Render desktop navigation item
	const renderDesktopNavItem = (nav: (typeof navItems)[0]) => (
		<li
			key={nav.id}
			className="relative group"
			onMouseEnter={() => nav.icon && handleDropdownToggle(nav.label)}
			onMouseLeave={() => nav.icon && handleDropdownToggle(nav.label)}
		>
			{nav.href ? (
				renderNavLink(
					nav.href,
					<div className="flex items-center gap-2 text-base lg:text-lg text-white hover:text-[#FFCE0F] transition-colors py-2">
						{nav.label}
						{nav.icon && <ChevronDown className="w-5 h-5" />}
					</div>,
					"",
				)
			) : (
				<div className="flex items-center gap-2 text-base lg:text-lg text-white hover:text-[#FFCE0F] transition-colors cursor-pointer py-2">
					{nav.label}
					{nav.icon && <ChevronDown className="w-5 h-5" />}
				</div>
			)}

			{/* Dropdown Menu */}
			{nav.icon && activeDropdown === nav.label && (
				<div className="absolute top-full left-0 bg-white shadow-lg rounded-b-lg min-w-[200px] py-2 z-50">
					{getDropdownMenu(nav.label)?.map((item) =>
						renderNavLink(
							item.href,
							item.label,
							"px-4 py-2 text-[#213162] hover:bg-gray-100 cursor-pointer text-base block w-full",
						),
					)}
				</div>
			)}
		</li>
	);

	// Render mobile navigation item
	const renderMobileNavItem = (nav: (typeof navItems)[0]) => (
		<div key={nav.id} className="border-b border-white/10 last:border-none">
			{nav.href ? (
				renderNavLink(
					nav.href,
					<div className="flex items-center justify-between px-4 py-3 text-white">
						<span>{nav.label}</span>
						{nav.icon && (
							<ChevronDown
								className={`w-5 h-5 transition-transform ${
									activeDropdown === nav.label ? "rotate-180" : ""
								}`}
							/>
						)}
					</div>,
					"",
				)
			) : (
				<div
					className="flex items-center justify-between px-4 py-3 text-white cursor-pointer"
					onClick={() => nav.icon && handleDropdownToggle(nav.label)}
				>
					<span>{nav.label}</span>
					{nav.icon && (
						<ChevronDown
							className={`w-5 h-5 transition-transform ${
								activeDropdown === nav.label ? "rotate-180" : ""
							}`}
						/>
					)}
				</div>
			)}

			{/* Mobile Dropdown Menu */}
			{nav.icon && activeDropdown === nav.label && (
				<div className="bg-white/5 py-2">
					{getDropdownMenu(nav.label)?.map((item) =>
						renderNavLink(
							item.href,
							item.label,
							"px-8 py-2 text-white/90 hover:text-[#FFCE0F] transition-colors block",
						),
					)}
				</div>
			)}
		</div>
	);

	return (
		<nav className="relative bg-[#213162] font-dm w-full">
			{/* Desktop Navigation */}
			<div className="hidden md:flex items-center justify-center px-4 lg:px-14 h-14">
				<ul className="flex items-center justify-around w-full">
					{navItems.map(renderDesktopNavItem)}
				</ul>
			</div>

			{/* Mobile Navigation */}
			<div className="md:hidden">
				<div className="flex justify-end p-4">
					<button
						onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
						className="text-white p-2"
						aria-label="Toggle menu"
					>
						{isMobileMenuOpen ? (
							<X className="h-6 w-6" />
						) : (
							<Menu className="h-6 w-6" />
						)}
					</button>
				</div>

				{isMobileMenuOpen && (
					<div className="bg-[#213162] border-t border-white/10">
						{navItems.map(renderMobileNavItem)}
					</div>
				)}
			</div>
		</nav>
	);
}
