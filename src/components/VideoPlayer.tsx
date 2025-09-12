import { useEffect, useState, useRef } from "react";
import { useAppState } from "../hooks/useAppState";

const videos = [
  "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
  "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4",
  "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4",
];

function VideoPlayer() {
  const { currentShowTitle, isPlaying } = useAppState();
  const [videoSrc, setVideoSrc] = useState(videos[0]);
  const videoEl = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    if (!currentShowTitle) return;
    const randomIndex = currentShowTitle.length % 3;
    setVideoSrc(videos[randomIndex]);
  }, [currentShowTitle]);

  useEffect(() => {
    if (!videoEl.current) return;
    if (isPlaying) {
      videoEl.current.play();
    } else {
      videoEl.current.pause();
    }
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
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support HTML5.
      </video>
      <p className="text-sm">current video url: ({videoSrc})</p>
    </div>
  );
}

export default VideoPlayer;
