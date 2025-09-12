import { useEffect, useState, useRef } from "react";
import { useAppState } from "../hooks/useAppState";

const videos = [
  "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
  "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4",
  "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4",
];

function VideoPlayer() {
  const { currentShowTitle, isPlaying, setPlay } = useAppState();
  const [videoSrc, setVideoSrc] = useState<string | undefined>(undefined);
  const videoEl = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const video = videoEl.current;
    if (!video) return;
    const handlePlay = () => setPlay(true);
    const handlePause = () => setPlay(false);

    video.addEventListener("play", handlePlay);
    video.addEventListener("pause", handlePause);

    return () => {
      video.removeEventListener("play", handlePlay);
      video.removeEventListener("pause", handlePause);
    };
  }, [setPlay]);

  useEffect(() => {
    if (!currentShowTitle) {
      setVideoSrc(undefined);
    } else {
      const randomIndex = currentShowTitle.length % 3;
      setVideoSrc(videos[randomIndex]);
    }
  }, [currentShowTitle]);

  useEffect(() => {
    const video = videoEl.current;
    if (!video) return;

    const updateSourceAndPlay = async () => {
      if (!videoSrc) {
        video.load();
        return;
      }
      if (video.src !== videoSrc) {
        video.src = videoSrc;
        video.load();
      }
      if (isPlaying) {
        try {
          await video.play();
        } catch (err) {
          console.warn("Play error:", err);
        }
      } else {
        video.pause();
      }
    };

    updateSourceAndPlay().catch((err) => {
      console.error("Video play failed:", err);
    });
  }, [isPlaying, videoSrc]);

  return (
    <div className="flex-1 p-6  border border-gray-700 bg-gray-800 shadow-md">
      <h2 className="text-lg font-semibold mb-4">{currentShowTitle}</h2>
      <video
        ref={videoEl}
        key={currentShowTitle}
        controls
        className="w-full h-[22rem] md:h-[32rem] shadow-lg"
      >
        {videoSrc && <source src={videoSrc} type="video/mp4" />}
        Your browser does not support HTML5.
      </video>
      {currentShowTitle && (
        <p className="text-sm">current video url: ({videoSrc})</p>
      )}
    </div>
  );
}

export default VideoPlayer;
