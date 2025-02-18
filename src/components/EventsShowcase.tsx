"use client";
import React, { useState } from "react";
import { Card } from "@/components/ui/card";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Interface for EventCard props
interface EventCardProps {
	image: string;
	title: string;
	description: string;
	hashtags: string[];
}

// The EventCard component represents each individual event post
// It's styled to look like a social media post with an image and description
const EventCard = ({ image, title, description, hashtags }: EventCardProps) => (
	<Card className="w-full bg-white rounded-lg overflow-hidden p-4">
		{/* The image container maintains aspect ratio and handles overflow */}
		<div className="relative w-full h-64 mb-4">
			<img
				src={image}
				alt={title}
				className="w-full h-full object-cover rounded-lg"
			/>
		</div>

		{/* Title section with emoji decorations */}
		<div className="mb-3">
			<h3 className="text-lg font-medium">
				{title.split("✨").map((part, i, arr) => (
					<React.Fragment key={i}>
						{part}
						{i < arr.length - 1 && <span className="mx-1">✨</span>}
					</React.Fragment>
				))}
			</h3>
		</div>

		{/* Description with preserved emojis */}
		<p className="text-gray-600 mb-3">{description}</p>

		{/* Hashtags section */}
		{hashtags && (
			<div className="text-blue-600 text-sm">
				{hashtags.map((tag, index) => (
					<span key={index} className="mr-2">
						#{tag}
					</span>
				))}
			</div>
		)}
	</Card>
);

// The main component that manages the event showcase and carousel
const EventsShowcase = () => {
	const [currentIndex, setCurrentIndex] = useState(0);

	// Sample event data - in a real application, this would likely come from a CMS or API
	const events = [
		{
			image: "https://placehold.co/800x500",
			title: "🎉 Celebrating Together at TPGPS! 🎓",
			description:
				"We recently hosted a wonderful event filled with joy, creativity, and memorable moments. Our students shined with their talents and enthusiasm, making it a day to remember! ✨",
			hashtags: [],
		},
		{
			image: "https://placehold.co/800x500",
			title: "✨ Celebrating Milestones at TPGPS! 🎓",
			description:
				"Our recent event was a beautiful celebration of learning, creativity, and community spirit. A big thank you to everyone who made it unforgettable!",
			hashtags: ["TPGPS", "SchoolEvent", "ShiningTogether"],
		},
		{
			image: "https://placehold.co/800x500",
			title: "A Day to Remember at TPGPS! ✨",
			description:
				"We celebrated an incredible event that brought out the best in our students. From performances to creative displays, it was a true showcase of talent and joy!",
			hashtags: [],
		},
	];

	// Navigation handlers
	const handlePrevious = () => {
		setCurrentIndex((prevIndex) =>
			prevIndex === 0 ? Math.max(events.length - 3, 0) : prevIndex - 1,
		);
	};

	const handleNext = () => {
		setCurrentIndex((prevIndex) =>
			prevIndex >= events.length - 3 ? 0 : prevIndex + 1,
		);
	};

	return (
		<div className="container mx-auto px-6 py-12 max-w-7xl">
			{/* Header section with title and description */}
			<div className="flex justify-between items-center mb-6">
				<h1 className="text-3xl font-bold">Events and Celebrations</h1>
				<div className="flex gap-2">
					<button
						onClick={handlePrevious}
						className="p-2 rounded border border-gray-300 hover:bg-gray-100 transition-colors"
						aria-label="Previous events"
					>
						<ChevronLeft className="w-5 h-5" />
					</button>
					<button
						onClick={handleNext}
						className="p-2 rounded border border-gray-300 hover:bg-gray-100 transition-colors"
						aria-label="Next events"
					>
						<ChevronRight className="w-5 h-5" />
					</button>
				</div>
			</div>

			<p className="text-gray-600 mb-8">
				At TPGPS, we celebrate every milestone and create cherished memories for
				our students. Throughout the year, we host a variety of events and
				celebrations that bring the entire school community together. Some of
				our memorable events include
			</p>

			{/* Events grid with smooth transition */}
			<div className="overflow-hidden">
				<div
					className="grid grid-cols-1 md:grid-cols-3 gap-6 transition-transform duration-300"
					style={{ transform: `translateX(-${currentIndex * 33.33}%)` }}
				>
					{events.map((event, index) => (
						<div key={index} className="w-full">
							<EventCard {...event} />
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default EventsShowcase;
