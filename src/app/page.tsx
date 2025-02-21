import Hero from "@/components/hero/Hero";
import MasonryLayout from "@/components/hero/MasonryLayout";
import MissionVisionPage from "@/components/MissionVisionPage";
import AchievementsAndEvents from "@/components/AchievementsAndEvents";
import EventsShowcase from "@/components/EventsShowcase";
import FacilitiesShowcase from "@/components/FacilitiesShowcase";
import AffiliationPage from "@/components/AffiliationPage";
import TestimonialsSection from "@/components/TestimonialsSection";
import Floating from "@/components/Floating";

export default function Home() {
	return (
		<>
			<main className="max-w-[1340px] mx-auto w-full space-y-20">
				<Hero />
				<MasonryLayout />
				<AchievementsAndEvents />
				<MissionVisionPage />
				<FacilitiesShowcase />
				<EventsShowcase />
				<AffiliationPage />
				<TestimonialsSection />
				<Floating />
			</main>
		</>
	);
}
