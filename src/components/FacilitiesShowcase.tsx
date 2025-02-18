"use client";
import React, { useState } from "react";
import { Card } from "@/components/ui/card";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface FacilityCardProps {
	image: string;
	title: string;
	description: string;
}

const FacilityCard = ({ image, title, description }: FacilityCardProps) => (
	<Card className="w-full bg-white rounded-lg overflow-hidden">
		<div className="relative">
			{/* Image container with navy blue accents */}
			<div className="relative">
				<div
					className="absolute left-0 top-1/2 transform -translate-y-1/2 w-16 bg-navy-blue h-20 z-10"
					style={{ backgroundColor: "#1a237e" }}
				/>
				<div
					className="absolute right-0 top-1/2 transform -translate-y-1/2 w-16 bg-navy-blue h-20 z-10"
					style={{ backgroundColor: "#1a237e" }}
				/>
				<img
					src={image}
					alt={title}
					className="w-full h-64 object-cover rounded-t-lg"
				/>
			</div>
		</div>
		<div className="p-6 text-center">
			<h3 className="text-xl font-semibold mb-4">{title}</h3>
			<p className="text-gray-600 leading-relaxed">{description}</p>
		</div>
	</Card>
);

const FacilitiesShowcase = () => {
	const [currentIndex, setCurrentIndex] = useState(0);

	const facilities = [
		{
			image: "https://placehold.co/800x500",
			title: "Modern Classrooms",
			description:
				"Our bright, spacious classrooms are designed to encourage interactive learning, equipped with the latest educational technology to support our innovative curriculum.",
		},
		{
			image: "https://placehold.co/800x500",
			title: "STEM Learning Zones",
			description:
				"Dedicated spaces for hands-on activities in Science, Technology, Engineering, Arts, and Mathematics (STEAM), where children can explore, experiment, and build critical thinking skills.",
		},
		{
			image: "https://placehold.co/800x500",
			title: "Creative Arts Studios",
			description:
				"With fully equipped music and art studios, our students have the freedom to express themselves creatively, whether through music, painting, or performance arts.",
		},
		{
			image: "https://placehold.co/800x500",
			title: "Sports Facilities",
			description:
				"A large, well-maintained sports complex and facilities that promote physical education, teamwork, and healthy competition.",
		},
	];

	const handlePrevious = () => {
		setCurrentIndex((prevIndex) =>
			prevIndex === 0 ? facilities.length - 1 : prevIndex - 1,
		);
	};

	const handleNext = () => {
		setCurrentIndex((prevIndex) =>
			prevIndex === facilities.length - 1 ? 0 : prevIndex + 1,
		);
	};

	return (
		<div className="container mx-auto px-4 py-12 max-w-7xl">
			{/* Header Section */}
			<div className="text-center mb-12">
				<div className="inline-block px-4 py-2 border border-gray-200 rounded-full mb-6">
					<span className="text-gray-700">Discover the Path to Excellence</span>
				</div>
				<h1 className="text-4xl font-bold text-gray-900 mb-6">
					Our Facilities
				</h1>
				<p className="text-gray-600 max-w-4xl mx-auto">
					At Path GPS, we believe that a great learning environment is essential
					to shaping young minds and nurturing their potential. Our modern,
					well-equipped facilities support the holistic development of each
					child, making every day a new opportunity for growth, discovery, and
					creativity.
				</p>
			</div>

			{/* Facilities Carousel */}
			<div className="relative">
				<div className="overflow-hidden">
					<div
						className="flex transition-transform duration-500 ease-in-out"
						style={{ transform: `translateX(-${currentIndex * 100}%)` }}
					>
						<div className="grid grid-cols-1 md:grid-cols-3 gap-6 min-w-full">
							{facilities
								.slice(currentIndex, currentIndex + 3)
								.map((facility, index) => (
									<div key={index} className="w-full">
										<FacilityCard {...facility} />
									</div>
								))}
						</div>
					</div>
				</div>

				{/* Navigation Buttons */}
				<div className="flex justify-center gap-4 mt-8">
					<button
						onClick={handlePrevious}
						className="p-2 rounded-full border border-pink-500 text-pink-500 hover:bg-pink-500 hover:text-white transition-colors"
						aria-label="Previous slide"
					>
						<ChevronLeft className="w-6 h-6" />
					</button>
					<button
						onClick={handleNext}
						className="p-2 rounded-full border border-pink-500 text-pink-500 hover:bg-pink-500 hover:text-white transition-colors"
						aria-label="Next slide"
					>
						<ChevronRight className="w-6 h-6" />
					</button>
				</div>
			</div>
		</div>
	);
};

export default FacilitiesShowcase;
