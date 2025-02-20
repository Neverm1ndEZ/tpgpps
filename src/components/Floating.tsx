import React from "react";

const Floating = () => {
	// Define our image data with positioning classes
	const images = [
		{
			src: "/floating/1.png",
			alt: "Students celebrating",
			className:
				"absolute left-16 top-10 w-24 h-24 rounded-lg shadow-lg transform -rotate-6",
		},
		{
			src: "/floating/2.png",
			alt: "Students studying",
			className:
				"absolute left-48 top-4 w-32 h-32 rounded-lg shadow-lg transform rotate-3",
		},
		{
			src: "/floating/3.svg",
			alt: "Students reading",
			className:
				"absolute left-20 top-40 w-32 h-32 rounded-lg shadow-lg transform rotate-6",
		},
		{
			src: "/floating/4.svg",
			alt: "Student in classroom",
			className:
				"absolute left-56 top-48 w-24 h-24 rounded-lg shadow-lg transform -rotate-3",
		},
		{
			src: "/floating/5.png",
			alt: "Cultural performance",
			className:
				"absolute right-48 top-48 w-32 h-32 rounded-lg shadow-lg transform rotate-6",
		},
		{
			src: "/floating/6.png",
			alt: "Teacher smiling",
			className:
				"absolute right-16 top-10 w-24 h-24 rounded-lg shadow-lg transform -rotate-3",
		},
		{
			src: "/floating/7.png",
			alt: "Students in uniform",
			className:
				"absolute right-24 top-40 w-32 h-32 rounded-lg shadow-lg transform rotate-3",
		},
	];

	return (
		<div className="relative min-h-[600px] w-full bg-white px-4 py-16 overflow-hidden">
			{/* Image containers */}
			<div className="absolute inset-0 pointer-events-none">
				{images.map((image, index) => (
					<div key={index} className={image.className}>
						<img
							src={image.src}
							alt={image.alt}
							className="w-full h-full object-cover rounded-lg"
						/>
						{/* Overlay to soften images */}
						<div className="absolute inset-0 bg-white/10 rounded-lg" />
					</div>
				))}
			</div>

			{/* Central content */}
			<div className="relative max-w-3xl mx-auto text-center z-10">
				<h1 className="text-4xl md:text-5xl font-bold mb-6">
					Your Child&apos;s Bright Future Starts Here!
				</h1>
				<p className="text-gray-600 mb-8 text-lg">
					Enroll now at Path GPS and give them the gift of holistic learning,
					growth, and success.
				</p>
				<button className="bg-[#F3194F] text-white px-8 py-3 rounded-full font-medium hover:bg-[#E01B6F] transition-colors duration-300">
					Admissions Open - Join Us Today!
				</button>
			</div>

			{/* Optional overlay for better text readability */}
			<div className="absolute inset-0 bg-white/60 pointer-events-none" />
		</div>
	);
};

export default Floating;
