"use client";
import React, { useEffect, useState } from "react";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { getInstagramMedia } from "@/lib/instagram";

// Define our data structure for Instagram posts
interface InstagramPost {
	id: string;
	media_type: string;
	media_url: string;
	caption: string;
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

// Individual Instagram post card component
const InstagramPostCard: React.FC<InstagramPost> = ({ media_url, caption }) => {
	return (
		<Card className="h-full bg-white rounded-xl shadow-2xl">
			<CardContent className="p-6">
				{/* Image container with explicit dimensions and positioning */}
				<div className="relative w-full h-[240px] mb-4 overflow-hidden rounded-lg">
					<Image
						src={media_url}
						alt={caption || "Instagram Post"}
						fill
						sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
						priority
						className="object-cover transition-transform hover:scale-105 duration-300"
					/>
				</div>

				{caption && <Title text={caption} />}
			</CardContent>
		</Card>
	);
};

// Main EventsShowcase component
const EventsShowcase: React.FC = () => {
	const [instagramPosts, setInstagramPosts] = useState<InstagramPost[]>([]);

	useEffect(() => {
		const fetchInstagramPosts = async () => {
			const accessToken = process.env.NEXT_PUBLIC_INSTAGRAM_ACCESS_TOKEN;
			if (accessToken) {
				const posts = await getInstagramMedia(accessToken);
				setInstagramPosts(posts);
			}
		};

		fetchInstagramPosts();
	}, []);

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
					{instagramPosts.map((post) => (
						<CarouselItem key={post.id} className="pl-2 md:pl-4 md:basis-1/3">
							<InstagramPostCard {...post} />
						</CarouselItem>
					))}
				</CarouselContent>
			</Carousel>
		</section>
	);
};

export default EventsShowcase;
