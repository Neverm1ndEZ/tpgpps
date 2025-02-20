import React from "react";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

// Define our data structure for events
interface Event {
	image: string;
	title: string;
	description: string;
	hashtags: string[];
}

// Helper component to render the sparkle emoji titles consistently
const Title: React.FC<{ text: string }> = ({ text }) => {
	return (
		<span className="text-lg font-semibold mb-3 block">
			{text.split(" ").map((word, i) => (
				<React.Fragment key={i}>{word} </React.Fragment>
			))}
		</span>
	);
};

// Individual event card component
const EventCard: React.FC<Event> = ({
	image,
	title,
	description,
	hashtags,
}) => {
	return (
		<Card className="h-full bg-white rounded-xl shadow-2xl">
			<CardContent className="p-6">
				{/* Image container with explicit dimensions and positioning */}
				<div className="relative w-full h-[240px] mb-4 overflow-hidden rounded-lg">
					<Image
						src={image}
						alt={title}
						fill
						sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
						priority
						className="object-cover transition-transform hover:scale-105 duration-300"
					/>
				</div>

				<Title text={title} />

				<p className="text-muted-foreground mb-4 line-clamp-3">{description}</p>

				{hashtags.length > 0 && (
					<div className="flex flex-wrap gap-2">
						{hashtags.map((tag, index) => (
							<span
								key={index}
								className="text-sm text-primary hover:text-primary/80 cursor-pointer"
							>
								#{tag}
							</span>
						))}
					</div>
				)}
			</CardContent>
		</Card>
	);
};

// Sample event data remains the same
const sampleEvents: Event[] = [
	{
		image: "/event.png",
		title: "🎉 Celebrating Together at TPGPS! 🎓",
		description:
			"We recently hosted a wonderful event filled with joy, creativity, and memorable moments. Our students shined with their talents and enthusiasm, making it a day to remember! ✨",
		hashtags: [],
	},
	{
		image: "/event.png",
		title: "✨ Celebrating Milestones at TPGPS! 🎓",
		description:
			"Our recent event was a beautiful celebration of learning, creativity, and community spirit. A big thank you to everyone who made it unforgettable!",
		hashtags: ["TPGPS", "SchoolEvent", "ShiningTogether"],
	},
	{
		image: "/event.png",
		title: "A Day to Remember at TPGPS! ✨",
		description:
			"We celebrated an incredible event that brought out the best in our students. From performances to creative displays, it was a true showcase of talent and joy!",
		hashtags: [],
	},
	{
		image: "/event.png",
		title: "🎉 Celebrating Together at TPGPS! 🎓",
		description:
			"We recently hosted a wonderful event filled with joy, creativity, and memorable moments. Our students shined with their talents and enthusiasm, making it a day to remember! ✨",
		hashtags: [],
	},
	{
		image: "/event.png",
		title: "✨ Celebrating Milestones at TPGPS! 🎓",
		description:
			"Our recent event was a beautiful celebration of learning, creativity, and community spirit. A big thank you to everyone who made it unforgettable!",
		hashtags: ["TPGPS", "SchoolEvent", "ShiningTogether"],
	},
	{
		image: "/event.png",
		title: "A Day to Remember at TPGPS! ✨",
		description:
			"We celebrated an incredible event that brought out the best in our students. From performances to creative displays, it was a true showcase of talent and joy!",
		hashtags: [],
	},
];

// Main EventsShowcase component remains the same
const EventsShowcase: React.FC = () => {
	return (
		<section className="container mx-auto px-4 py-12">
			<Carousel
				opts={{
					align: "start",
					loop: true,
				}}
				className="w-full"
			>
				<div className="flex justify-between items-center mb-8">
					<div className="space-y-3 max-w-3xl">
						<h2 className="text-3xl font-bold">Events and Celebrations</h2>
						<p className="text-muted-foreground">
							At TPGPS, we celebrate every milestone and create cherished
							memories for our students. Throughout the year, we host a variety
							of events that bring our school community together.
						</p>
					</div>

					<div className="flex items-center gap-2 ml-4">
						<CarouselPrevious className="static transform-none hover:bg-gray-100 rounded-lg border-black" />
						<CarouselNext className="static transform-none hover:bg-gray-100 rounded-lg border-black" />
					</div>
				</div>

				<CarouselContent className="-ml-2 md:-ml-4">
					{sampleEvents.map((event, index) => (
						<CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/3">
							<EventCard {...event} />
						</CarouselItem>
					))}
				</CarouselContent>
			</Carousel>
		</section>
	);
};

export default EventsShowcase;
