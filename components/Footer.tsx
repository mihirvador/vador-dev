import { useEffect, useState } from "react";
import { getCurrentlyPlayingTrack, refreshAccessToken } from "../lib/spotify";
import { SpotifyIcon } from "./IconComponents";
const Footer = ({ isDarkMode }: { isDarkMode: boolean }) => {
  const [track, setTrack] = useState<any>(null);
  const [accessToken, setAccessToken] = useState<string | null>(null);
  const refreshToken = process.env.SPOTIFY_REFRESH_TOKEN;

  useEffect(() => {
    const fetchAccessToken = async () => {
      if (refreshToken) {
        const newAccessToken = await refreshAccessToken(refreshToken);
        setAccessToken(newAccessToken);
      }
    };

    const fetchTrack = async () => {
      if (accessToken) {
        const currentlyPlayingTrack = await getCurrentlyPlayingTrack(
          accessToken
        );
        setTrack(currentlyPlayingTrack);
      }
    };

    fetchAccessToken().then(fetchTrack);
  }, [accessToken]);

  return (
    <footer
      className={`footer w-full p-6 mt-8 ${isDarkMode ? "isDarkMode" : ""}`}
    >
      <div className="flex items-center space-x-4">
        {track && track.item ? (
          <>
            <a
              href={track.item.album.external_urls.spotify}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={track.item.album.images[0].url}
                alt="Album Art"
                className="icon h-12 w-12"
              />
            </a>
            <div>
              <a
                href={track.item.external_urls.spotify}
                target="_blank"
                rel="noopener noreferrer"
              >
                <p className="icon text-sm font-bold">
                  {track.item.name} - {track.item.artists[0].name}
                </p>
              </a>
              <p className="text-xs font-bold">made by Mihir Vador</p>
            </div>
          </>
        ) : (
          <>
            <SpotifyIcon url="https://spotify.com" className="h-12 w-12" />
            <div>
              <p className="text-sm font-bold">Tunes are on pause</p>
              <p className="text-xs font-bold">made by Mihir Vador</p>
            </div>
          </>
        )}
      </div>
    </footer>
  );
};

export default Footer;
