/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useEffect, useState } from "react";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel";
import { useInterval } from "react-use";

interface Testimonial {
	rating: number;
	content: string;
	author: {
		name: string;
		role: string;
		initials: string;
	};
}

const TestimonialsSection = () => {
	const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
	const [api, setApi] = useState<any>(null);
	const [currentIndex, setCurrentIndex] = useState(0);

	// Fetch reviews from the API
	useEffect(() => {
		const fetchReviews = async () => {
			try {
				const response = await fetch("/api/reviews");
				const reviews = await response.json();

				if (reviews && !reviews.error) {
					const formattedReviews = reviews.map((review: any) => ({
						rating: review.rating,
						content: review.text,
						author: {
							name: review.author_name,
							role: "Google Review",
							initials: review.author_name
								.split(" ")
								.map((word: string) => word[0])
								.join("")
								.toUpperCase(),
						},
					}));

					setTestimonials(formattedReviews);
				}
			} catch (error) {
				console.error("Error fetching reviews:", error);
			}
		};

		fetchReviews();
	}, []);

	// Auto-scroll the carousel every 5 seconds, or 6 seconds for wide cards
	useInterval(
		() => {
			if (api) {
				const nextIndex = (currentIndex + 1) % testimonials.length;
				setCurrentIndex(nextIndex);
				api.scrollTo(nextIndex);
			}
		},
		testimonials[currentIndex]?.content.length > 500 ? 9000 : 5000,
	);

	// Component to render star rating
	const StarRating = ({ rating }: { rating: number }) => {
		return (
			<div className="flex items-center gap-1 mb-2">
				{[...Array(5)].map((_, index) => (
					<svg
						key={index}
						className={`w-4 h-4 ${
							index < rating ? "text-yellow-400" : "text-gray-300"
						}`}
						fill="currentColor"
						viewBox="0 0 20 20"
					>
						<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
					</svg>
				))}
				<span className="text-sm text-gray-600 ml-1">{rating}/5</span>
			</div>
		);
	};

	return (
		<div className="bg-white p-8 rounded-2xl shadow-xl border border-[#4c4c4d2f]">
			<div className="grid grid-cols-1 md:grid-cols-4 gap-6 items-center">
				{/* Title Section */}
				<div className="md:col-span-1">
					<h2 className="text-3xl font-bold mb-4">
						Testimonials That Speak Volumes
					</h2>
				</div>

				{/* Testimonials Carousel */}
				<div className="md:col-span-3">
					<Carousel
						opts={{
							loop: true,
						}}
						setApi={setApi}
					>
						<CarouselContent>
							{testimonials.map((testimonial, index) => (
								<CarouselItem
									key={index}
									className={
										testimonial.content.length > 500
											? "md:basis-full"
											: "md:basis-1/3"
									}
								>
									<div className="bg-[#2b3b66] shadow-2xl rounded-3xl overflow-hidden flex flex-col h-full">
										{/* Testimonial Content */}
										<div className="p-6 flex-grow bg-white rounded-br-3xl flex flex-col justify-center">
											<StarRating rating={testimonial.rating} />
											<p className="text-gray-700 mb-6">
												{testimonial.content}
											</p>
										</div>

										{/* Author Section */}
										<div className="bg-[#fff]">
											<div className="bg-[#2b3b66] text-white p-6 flex items-center gap-4 rounded-tl-3xl">
												<div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-sm">
													{testimonial.author.initials}
												</div>
												<div>
													<p className="font-medium">
														{testimonial.author.name}
													</p>
													<p className="text-sm text-gray-300">
														{testimonial.author.role}
													</p>
												</div>
											</div>
										</div>
									</div>
								</CarouselItem>
							))}
						</CarouselContent>
						<CarouselPrevious className="hidden md:block" />
						<CarouselNext className="hidden md:block" />
					</Carousel>
				</div>
			</div>
		</div>
	);
};

export default TestimonialsSection;
