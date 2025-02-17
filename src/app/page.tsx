import Hero from "@/components/hero/Hero";
import MasonryLayout from "@/components/hero/MasonryLayout";

export default function Home() {
	return (
		<main className="max-w-[1340px] mx-auto w-full space-y-20">
			<Hero />
			<MasonryLayout />
		</main>
	);
}
