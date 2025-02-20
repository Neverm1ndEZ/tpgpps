"use client";
import React from "react";
import Image from "next/image";
import { Card } from "@/components/ui/card";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel";

interface FacilityCardProps {
	image: string;
	title: string;
	description: string;
}

// We're using Next.js Image component for better performance and optimization
const FacilityCard = ({ image, title, description }: FacilityCardProps) => (
	<Card className="w-full bg-white rounded-3xl overflow-hidden shadow-xl p-6">
		<div className="relative mb-6">
			<div className="relative">
				{/* Navy blue accents remain the same */}
				<div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-12 bg-[#1a237e] h-20 z-10 rounded-r-lg" />
				<div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-12 bg-[#1a237e] h-20 z-10 rounded-l-lg" />
				{/* Image container needs a wrapper for Next.js Image component */}
				<div className="relative w-full h-64 border-2 border-[#213162] rounded-2xl">
					<Image
						src={image}
						alt={title}
						fill
						className="object-cover rounded-2xl"
						sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
						priority={false}
					/>
				</div>
			</div>
		</div>
		<div className="text-center">
			<h3 className="text-xl font-bold mb-4 text-[#1A1A1A]">{title}</h3>
			<p className="text-[#666] text-sm leading-relaxed">{description}</p>
		</div>
	</Card>
);

// Centralize our facilities data
const facilities = [
	{
		image: "/carousel/modern-classroom.png", // These should be actual image paths in your public directory
		title: "Modern Classrooms",
		description:
			"Our bright, spacious classrooms are designed to encourage interactive learning, equipped with the latest educational technology to support our innovative curriculum.",
	},
	{
		image: "/carousel/stem.png",
		title: "STEM Learning Zones",
		description:
			"Dedicated spaces for hands-on activities in Science, Technology, Engineering, Arts, and Mathematics (STEAM), where children can explore, experiment, and build critical thinking skills.",
	},
	{
		image: "/carousel/art.png",
		title: "Creative Arts Studios",
		description:
			"With fully equipped music and art studios, our students have the freedom to express themselves creatively, whether through music, painting, or performance arts.",
	},
	{
		image: "/carousel/art.png",
		title: "Sports Facilities",
		description:
			"A large, well-maintained sports complex and facilities that promote physical education, teamwork, and healthy competition.",
	},
] as const;

const FacilitiesShowcase = () => {
	return (
		<section className="container mx-auto px-4 py-16 max-w-7xl">
			{/* Header Section */}
			<div className="text-center mb-16">
				<div className="inline-block px-6 py-2 border-2 border-black rounded-lg mb-6">
					<span className="text-[#333] text-lg font-medium">
						Discover the Path to Excellence
					</span>
				</div>
				<h1 className="text-5xl font-bold text-[#1A1A1A] mb-8">
					Our Facilities
				</h1>
				<p className="text-[#666] text-lg max-w-4xl mx-auto">
					At Path GPS, we believe that a great learning environment is essential
					to shaping young minds and nurturing their potential. Our modern,
					well-equipped facilities support the holistic development of each
					child, making every day a new opportunity for growth, discovery, and
					creativity.
				</p>
			</div>

			{/* Carousel implementation with Next.js optimizations */}
			<Carousel
				opts={{
					align: "start",
					loop: true,
				}}
				className="w-full"
			>
				<CarouselContent className="-ml-2 md:-ml-4">
					{facilities.map((facility, index) => (
						<CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/3">
							<FacilityCard {...facility} />
						</CarouselItem>
					))}
				</CarouselContent>

				{/* Navigation buttons with improved accessibility */}
				<div className="flex justify-end items-center mt-12">
					<CarouselPrevious className="relative translate-y-0 p-3.5 rounded-lg border-2 border-pink-500 text-pink-500 hover:bg-pink-500 hover:text-white transition-colors" />
					<CarouselNext className="relative translate-y-0 p-3.5 rounded-lg border-2 border-pink-500 text-pink-500 hover:bg-pink-500 hover:text-white transition-colors" />
				</div>
			</Carousel>
		</section>
	);
};

export default FacilitiesShowcase;
