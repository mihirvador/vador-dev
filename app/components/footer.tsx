"use client";

import { useEffect, useState } from "react";
import { getCurrentlyPlayingTrack, refreshAccessToken } from "@/lib/spotify";

const SPOTIFY_POLL_INTERVAL_MS = 1000;

export function Footer() {
	const [track, setTrack] = useState<any>(null);
	const refreshToken = process.env.SPOTIFY_REFRESH_TOKEN;

	useEffect(() => {
		const fetchSpotifyData = async () => {
			try {
				if (refreshToken) {
					const newAccessToken = await refreshAccessToken(refreshToken);
					if (newAccessToken) {
						const currentlyPlayingTrack = await getCurrentlyPlayingTrack(
							newAccessToken
						);
						setTrack(currentlyPlayingTrack);
					}
				}
			} catch (error) {
				console.error("Failed to fetch Spotify data:", error);
				setTrack(null);
			}
		};

		fetchSpotifyData();

		const intervalId = setInterval(
			fetchSpotifyData,
			SPOTIFY_POLL_INTERVAL_MS
		);

		return () => clearInterval(intervalId);
	}, [refreshToken]);

	const trackName = track?.item?.name?.toLowerCase();
	const artistName = track?.item?.artists?.[0]?.name?.toLowerCase();

	return (
		<footer className="text-[17px] lowercase">
			{trackName && artistName ? (
				<p>
					listening:{" "}
					<a
						href={track.item.external_urls.spotify}
						target="_blank"
						rel="noopener noreferrer"
						className="text-[#0000ee] underline visited:text-[#551a8b]"
					>
						{trackName}
					</a>
					{" / "}
					<a
						href={track.item.artists[0].external_urls.spotify}
						target="_blank"
						rel="noopener noreferrer"
						className="text-[#0000ee] underline visited:text-[#551a8b]"
					>
						{artistName}
					</a>
				</p>
			) : (
				<p>listening: tunes paused</p>
			)}
		</footer>
	);
}
