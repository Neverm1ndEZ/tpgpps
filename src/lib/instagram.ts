// lib/instagram.js
interface InstagramMediaItem {
	id: string;
	media_type: string;
	media_url: string;
	caption: string;
}

export async function getInstagramMedia(
	accessToken: string,
): Promise<InstagramMediaItem[]> {
	const url = `https://graph.instagram.com/me/media?fields=id,media_type,media_url,caption&access_token=${accessToken}`;
	const response = await fetch(url);
	const data = await response.json();
	return data.data;
}
