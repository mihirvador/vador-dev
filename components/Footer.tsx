import { useEffect, useState } from 'react';
import { getCurrentlyPlayingTrack, refreshAccessToken } from '../lib/spotify';

const Footer = ({
  isDarkMode,
  activeIndex,
}: {
  isDarkMode: boolean;
  activeIndex: number | null;
}) => {
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
        const currentlyPlayingTrack = await getCurrentlyPlayingTrack(accessToken);
        setTrack(currentlyPlayingTrack);
      }
    };

    fetchAccessToken().then(fetchTrack);
  }, [accessToken]);

  return (
    <footer
      className={`footer w-full p-6 mt-8 ${isDarkMode ? 'isDarkMode' : ''} ${
        activeIndex !== null ? 'blur' : ''
      }`}
    >
      <div className="flex items-center space-x-4">
        {track && track.item ? (
          <>
            <img src={track.item.album.images[0].url} alt="Album Art" className="h-12 w-12" />
            <div>
              <p className="text-sm font-bold">{track.item.name} - {track.item.artists[0].name}</p>
              <p className="text-xs font-bold">made by Mihir Vador</p>
            </div>
          </>
        ) : (
          <>
            <img src="/placeholder.svg" alt="Album Art" className="h-12 w-12" />
            <div>
              <p className="text-sm font-bold">Not listening to anything right now</p>
              <p className="text-xs font-bold">made by Mihir Vador</p>
            </div>
          </>
        )}
      </div>
    </footer>
  );
};

export default Footer;
