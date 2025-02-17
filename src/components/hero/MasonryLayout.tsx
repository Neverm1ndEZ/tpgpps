import React from "react";
import Image from "next/image";

export default function MasonryLayout() {
	const images = [
		{ id: 1, src: "/home/gallery/1.svg" },
		{ id: 2, src: "/home/gallery/2.svg" },
		{ id: 3, src: "/home/gallery/3.svg", class: "!mb-4 column-span-all" }, // Special handling for the third image
		{ id: 4, src: "/home/gallery/4.svg" },
		{ id: 5, src: "/home/gallery/5.svg" },
		{ id: 6, src: "/home/gallery/6.svg" },
		{ id: 7, src: "/home/gallery/7.svg" },
		{ id: 8, src: "/home/gallery/8.svg" },
		{ id: 9, src: "/home/gallery/9.svg" },
		{ id: 10, src: "/home/gallery/10.svg" },
		{ id: 11, src: "/home/gallery/11.svg" },
		{ id: 12, src: "/home/gallery/12.svg" },
		{ id: 13, src: "/home/gallery/13.svg" },
		{ id: 14, src: "/home/gallery/14.svg" },
	];

	return (
		<div className="container mx-auto px-4 py-8">
			<div className="columns-5 gap-4">
				{images.map((image) => (
					<div
						key={image.id}
						className={`mb-4 break-inside-avoid ${image.class || ""}`}
						// style={{
						// 	...(image.id === 3
						// 		? { columnSpan: "all", maxWidth: "50%", margin: "0 auto" }
						// 		: {}),
						// }}
					>
						<Image
							src={image.src}
							alt={`Gallery image ${image.id}`}
							width={500}
							height={300}
							className="w-full"
							style={{ height: "auto" }}
						/>
					</div>
				))}
			</div>
		</div>
	);
}
