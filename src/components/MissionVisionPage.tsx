import React from "react";
import Image from "next/image";
import mission from "../../public/mission.svg";
import vision from "../../public/vision.svg";
import { Card } from "@/components/ui/card";

const HeaderBanner = () => (
	<div className="inline-block px-4 py-2 border-2 border-black rounded-md mb-4 md:px-5 md:py-2.5 md:mb-6">
		<span className="text-[#333] font-dm text-base md:text-lg font-medium">
			Discover the Path to Excellence
		</span>
	</div>
);

interface MissionVisionCardProps {
	title: string;
	children: React.ReactNode;
}

const MissionVisionCard = ({ title, children }: MissionVisionCardProps) => (
	<Card className="relative pt-12 px-6 pb-8 md:pt-20 md:px-12 md:pb-12 shadow-xl rounded-xl gap-y-9">
		<div className="flex justify-between items-center">
			<h2 className="text-2xl md:text-3xl font-bold text-[#1a1a1a] font-raleway">
				{title}
			</h2>
			<div className="flex items-center justify-center">
				<Image
					src={title === "Mission" ? mission : vision}
					alt={title}
					width={40}
					height={40}
					className="w-8 h-8 md:w-12 md:h-12"
				/>
			</div>
		</div>
		<div className="mt-4 text-[#4C4C4D] font-medium leading-relaxed text-sm md:text-base">
			{children}
		</div>
	</Card>
);

const AdmissionsSection = () => (
	<Card className="p-4 md:px-8 md:pt-12 md:pb-8 lg:px-16 lg:pt-20 lg:pb-12 mt-8 shadow-xl rounded-xl">
		<div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 md:gap-6 h-auto md:h-[250px]">
			<div className="w-full">
				<h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
					Admissions Open Now!
				</h2>
				<button className="font-roboto font-bold text-lg md:text-xl bg-[#F3194F] hover:bg-pink-900 text-white px-6 py-2 md:px-9 md:py-3 rounded-full flex items-center gap-2 transition-colors">
					Apply Today
					<span className="ml-1">→</span>
				</button>
			</div>
			<p className="text-[#4C4C4D] font-medium text-sm md:text-base max-w-[100%] font-dm mt-4 md:mt-0">
				Join the TPGPS family and give your child the gift of holistic learning,
				exploration, and growth. Secure your spot today—enroll now to embark on
				an extraordinary educational journey!
			</p>
		</div>
	</Card>
);

const MissionVisionPage = () => {
	return (
		<div className="container mx-auto px-4 py-8 md:px-4 md:py-12 max-w-6xl">
			{/* Header Section */}
			<div className="text-center mb-8 md:mb-12">
				<HeaderBanner />
				<h1 className="text-3xl md:text-5xl font-bold text-[#1A1A1A] mb-4 md:mb-6 font-raleway">
					Our Mission & Visions
				</h1>
				<p className="text-[#333] font-medium text-sm md:text-base max-w-3xl mx-auto font-roboto">
					We are here to provide a nurturing and inclusive environment where
					young minds can thrive, fostering a love for learning and personal
					growth.
				</p>
			</div>

			{/* Mission and Vision Cards */}
			<div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-8">
				<MissionVisionCard title="Mission">
					At Little Learners Academy, our mission is to inspire a passion for
					learning and empower young minds to become confident, compassionate,
					and creative individuals. We strive to create a safe and inclusive
					space where children thrive academically, socially, and emotionally,
					setting the stage for a successful educational journey.
				</MissionVisionCard>

				<MissionVisionCard title="Vision">
					Our vision is to be a beacon of educational excellence, where children
					are encouraged to explore, discover, and express their unique talents.
					We aim to foster a generation of lifelong learners equipped with
					critical thinking, empathy, and a deep appreciation for diversity.
				</MissionVisionCard>
			</div>

			{/* Admissions Section */}
			<AdmissionsSection />
		</div>
	);
};

export default MissionVisionPage;
