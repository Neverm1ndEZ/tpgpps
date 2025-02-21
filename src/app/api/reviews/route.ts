import { NextResponse } from "next/server";

export async function GET() {
	const placeId = process.env.NEXT_PUBLIC_PLACE_ID;
	const apiKey = process.env.NEXT_PUBLIC_MAPS_API_KEY;
	const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=name,rating,reviews&key=${apiKey}`;

	try {
		const response = await fetch(url);
		const data = await response.json();

		if (data.result && data.result.reviews) {
			return NextResponse.json(data.result.reviews);
		} else {
			return NextResponse.json({ error: "No reviews found" }, { status: 404 });
		}
	} catch (error) {
		return NextResponse.json(
			{ error: "Failed to fetch reviews", errorDetails: error },
			{ status: 500 },
		);
	}
}
