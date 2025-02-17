import React from "react";
import Image from "next/image";

export default function Hero() {
	return (
		<div className="mt-24">
			<div className="text-center max-w-6xl mx-auto font-dm">
				<h1 className="text-[#213162] font-bold text-6xl mb-4">
					Give Your Child the Future You Envision
				</h1>
				<h2 className="text-4xl max-w-5xl mx-auto mb-4">
					Where dreams meet opportunity, and potential turns into success.
				</h2>
				<button className="inline-flex items-center px-8 py-3 bg-[#F3194F] text-white text-2xl text-center font-roboto font-bold rounded-full gap-2.5">
					Take the First Step Today
					<Image
						src="/global/arrow-right.svg"
						alt="arrow-right"
						width={28}
						height={28}
					/>
				</button>
			</div>
		</div>
	);
}
