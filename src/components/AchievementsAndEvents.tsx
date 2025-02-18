import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

// Helper component for date display in events
const DateBlock = ({ month, day }: { month: string; day: string }) => (
	<div className="bg-[#213162] text-white p-5 rounded-xl flex flex-col items-center justify-center w-32 h-fit border-2 border-[#FFCE0F]">
		<div className="text-[#FFCE0F] text-base uppercase font-roboto font-medium">
			{month}
		</div>
		<div className="text-[#FFCE0F] text-2xl uppercase font-roboto font-medium">
			{day}
		</div>
	</div>
);

// Event card component
interface EventCardProps {
	month: string;
	day: string;
	title: string;
	description: string;
}

const EventCard = ({ month, day, title, description }: EventCardProps) => (
	<div className="flex gap-4 mb-4">
		<DateBlock month={month} day={day} />
		<div className="flex flex-col justify-center font-roboto">
			<h3 className="text-lg font-bold text-[#213162]">{title}</h3>
			<p className="text-black font text-sm">{description}</p>
		</div>
	</div>
);

// Announcement card component
interface AnnouncementCardProps {
	date: string;
	title: string;
	description: string;
}

const AnnouncementCard = ({
	date,
	title,
	description,
}: AnnouncementCardProps) => (
	<div className="mb-6">
		<div className="text-sm font-roboto font-medium text-[#213162] mb-1">
			{date}
		</div>
		<h3 className="text-xl font-bold text-[#213162] mb-1">{title}</h3>
		<p className="text-black text-sm text-ellipsis">{description}</p>
	</div>
);

const AchievementsAndEvents = () => {
	// Sample data - in a real app, this would likely come from props or an API
	const announcements = [
		{
			date: "October 15, 2024",
			title: "Parent-Teacher Meeting",
			description:
				"We are pleased to inform you that the Parent-Teacher Meeting will take place on October 15th. This i...",
		},
		{
			date: "November 20, 2024",
			title: "Annual Sports Day",
			description:
				"Get ready for an exciting Annual Sports Day on November 20th! Students will showcase their talents i...",
		},
		{
			date: "January 10, 2025",
			title: "Admissions Open for 2025-2026",
			description:
				"We are happy to announce that admissions for the 2025-2026 academic year are now open! Join us f...",
		},
	];

	const events = [
		{
			month: "DEC",
			day: "05",
			title: "Winter Carnival 2024",
			description:
				"Get ready for a day of fun and festivities at our Winter Carnival on December 5th...",
		},
		{
			month: "JAN",
			day: "26",
			title: "Republic Day Celebration",
			description:
				"Join us in honoring our nation at the Republic Day Celebration on January 26th...",
		},
		{
			month: "MAR",
			day: "04",
			title: "Annual Art Exhibition",
			description:
				"Celebrate creativity at our Annual Art Exhibition on March 14th! Students will sh...",
		},
	];

	return (
		<div className="container mx-auto p-4 grid md:grid-cols-2 gap-6">
			{/* Announcements Section */}
			<Card className="p-12 shadow-xl">
				<CardHeader className="px-0 pt-0">
					<CardTitle className="text-3xl font-bold font-raleway mb-4">
						Announcements
					</CardTitle>
					<hr className="w-full h-0.5 bg-black" />
				</CardHeader>
				<CardContent className="px-0 pb-0">
					{announcements.map((announcement, index) => (
						<AnnouncementCard key={index} {...announcement} />
					))}
				</CardContent>
			</Card>

			{/* Events Section */}
			<Card className="p-12 shadow-xl">
				<CardHeader className="px-0 pt-0">
					<CardTitle className="text-3xl font-bold font-raleway mb-4">
						Events
					</CardTitle>
					<hr className="w-full h-0.5 bg-black" />
				</CardHeader>
				<CardContent className="px-0 pb-0">
					{events.map((event, index) => (
						<EventCard key={index} {...event} />
					))}
				</CardContent>
			</Card>
		</div>
	);
};

export default AchievementsAndEvents;
