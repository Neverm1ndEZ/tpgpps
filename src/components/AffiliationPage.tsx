import React from "react";
import { ChartPie, BarChart2, Zap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface Partnership {
	icon: React.ReactNode;
	title: string;
	description: string;
}

const AffiliationPage = () => {
	const partnerships: Partnership[] = [
		{
			icon: (
				<ChartPie className="w-8 h-8 text-white bg-navy p-1.5 rounded-lg" />
			),
			title: "Green Earth Society",
			description:
				"Through our affiliation with the Green Earth Society, we emphasize environmental education and sustainability, helping our students develop a strong connection with nature and a sense of responsibility toward the planet",
		},
		{
			icon: (
				<BarChart2 className="w-8 h-8 text-white bg-navy p-1.5 rounded-lg" />
			),
			title: "National Association for the Education of Young Children (NAEYC)",
			description:
				"Awarded by the Education Excellence Association for our pioneering efforts in introducing innovative STEAM (Science, Technology, Engineering, Arts, and Mathematics) programs that ignite creativity and critical thinking in young learners.",
		},
		{
			icon: <Zap className="w-8 h-8 text-white bg-navy p-1.5 rounded-lg" />,
			title: "Education Excellence Association",
			description:
				"Our collaboration with the Education Excellence Association allows us to continuously innovate and improve our teaching methods, with a special focus on the integration of STEAM (Science, Technology, Engineering, Arts, and Mathematics) education.",
		},
	];

	return (
		<div className="max-w-7xl mx-auto px-4 py-12">
			{/* Header Section */}
			<div className="text-center mb-12">
				<div className="inline-block px-6 py-2 border-2 border-black rounded-lg mb-6">
					<span className="text-[#333] text-lg font-medium">
						Discover the Path to Excellence
					</span>
				</div>
				<h1 className="text-4xl font-bold mb-6">
					Our Affiliation and Partnerships
				</h1>
				<p className="text-gray-600 max-w-3xl mx-auto">
					At Path GPS, we are proud to collaborate with some of the most
					respected organizations in education. These affiliations enable us to
					continually improve the quality of our programs and ensure our
					students receive a well-rounded and forward-thinking education.
				</p>
			</div>

			{/* Partnerships Grid */}
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
				{partnerships.map((partnership, index) => (
					<Card
						key={index}
						className="border rounded-xl shadow-sm hover:shadow-md transition-shadow"
					>
						<CardContent className="p-6">
							<div className="mb-4">{partnership.icon}</div>
							<h3 className="text-xl font-semibold mb-3">
								{partnership.title}
							</h3>
							<p className="text-gray-600">{partnership.description}</p>
						</CardContent>
					</Card>
				))}
			</div>

			{/* Navigation Arrows */}
			<div className="flex justify-end mt-8 gap-2">
				<button className="p-2 rounded-lg border border-gray-200 hover:bg-gray-50">
					<span className="sr-only">Previous</span>←
				</button>
				<button className="p-2 rounded-lg border border-gray-200 hover:bg-gray-50">
					<span className="sr-only">Next</span>→
				</button>
			</div>
		</div>
	);
};

export default AffiliationPage;
