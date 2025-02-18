import React from "react";
import { Card } from "@/components/ui/card";
import { Mountain, Binoculars } from "lucide-react";

const HeaderBanner = () => (
	<div className="inline-block px-5 py-2.5 border-2 border-black rounded-md mb-6">
		<span className="text-[#333] font-dm text-lg font-medium">
			Discover the Path to Excellence
		</span>
	</div>
);

interface MissionVisionCardProps {
	title: string;
	icon: React.ElementType;
	children: React.ReactNode;
}

const MissionVisionCard = ({
	title,
	icon: Icon,
	children,
}: MissionVisionCardProps) => (
	<Card className="p-8 relative">
		<div className="flex justify-between items-start">
			<h2 className="text-2xl font-semibold text-gray-900">{title}</h2>
			<div className="w-12 h-12 flex items-center justify-center">
				<Icon
					className={`w-8 h-8 ${
						title === "Mission" ? "text-yellow-400" : "text-yellow-400"
					}`}
				/>
			</div>
		</div>
		<div className="mt-4 text-gray-600 leading-relaxed">{children}</div>
	</Card>
);

const AdmissionsSection = () => (
	<Card className="p-8 mt-8">
		<div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
			<div>
				<h2 className="text-3xl font-bold text-gray-900 mb-4">
					Admissions Open Now!
				</h2>
				<p className="text-gray-600 max-w-2xl">
					Join the TPGPS family and give your child the gift of holistic
					learning, exploration, and growth. Secure your spot today—enroll now
					to embark on an extraordinary educational journey!
				</p>
			</div>
			<button className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-3 rounded-full flex items-center gap-2 transition-colors">
				Apply Today
				<span className="ml-1">→</span>
			</button>
		</div>
	</Card>
);

const MissionVisionPage = () => {
	return (
		<div className="container mx-auto px-4 py-12 max-w-6xl">
			{/* Header Section */}
			<div className="text-center mb-12">
				<HeaderBanner />
				<h1 className="text-5xl font-bold text-[#1A1A1A] mb-6 font-raleway">
					Our Mission & Visions
				</h1>
				<p className="text-[#333] font-medium max-w-3xl mx-auto font-roboto">
					We are here to provide a nurturing and inclusive environment where
					young minds can thrive, fostering a love for learning and personal
					growth.
				</p>
			</div>

			{/* Mission and Vision Cards */}
			<div className="grid md:grid-cols-2 gap-8 mb-8">
				<MissionVisionCard title="Mission" icon={Mountain}>
					At Little Learners Academy, our mission is to inspire a passion for
					learning and empower young minds to become confident, compassionate,
					and creative individuals. We strive to create a safe and inclusive
					space where children thrive academically, socially, and emotionally,
					setting the stage for a successful educational journey.
				</MissionVisionCard>

				<MissionVisionCard title="Vision" icon={Binoculars}>
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
