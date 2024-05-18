import ReactPlayer from "react-player";
import "./reactPlayer.css";
import { Suspense, lazy, useEffect, useState } from "react";
import { BaseReactPlayerProps } from "react-player/base";
import { IVideoPlayer } from "../types";

const Loader = () => {
  return (
    <div className="w-10 h-10 border-[2px] bg-slate-700 rounded-full animate-spin"></div>
  );
};

const VideoPlayer = ({
  url,
  currentSubtitle,
  onTimeChange,
  subStyles,
}: IVideoPlayer) => {
  const [Component, setComponent] =
    useState<React.ComponentType<BaseReactPlayerProps> | null>(null);
  useEffect(() => {
    setComponent(() => lazy(() => import("react-player/lazy")));
  }, []);

  if (!Component) {
    return <Loader />;
  }
  function handleProgress(data: any) {
    onTimeChange(data.playedSeconds);
  }
  const default_url =
    "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4";
  return (
    <Suspense fallback={<Loader />}>
      <div className="relative player-wrapper rounded-lg shadow-xl shadow-neutral-600 bg-red-300">
        <ReactPlayer
          className="react-player"
          url={url || default_url}
          width="100%"
          height="100%"
          onProgress={handleProgress}
          controls
        />
        {currentSubtitle && (
          <div
            style={{
              backgroundColor: subStyles?.bgColor ? subStyles.bgColor : "black",
              color: subStyles?.textColor ? subStyles.textColor : "white",
              fontSize: subStyles?.fontSize && subStyles.fontSize,
              fontWeight: subStyles?.bold ? "bold" : "normal",
              fontStyle: subStyles?.italic ? "italic" : "normal",
            }}
            className="absolute bottom-0 mb-10 left-1/2 transform -translate-x-1/2 text-3xl p-3"
          >
            {currentSubtitle}
          </div>
        )}
      </div>
    </Suspense>
  );
};

export default VideoPlayer;
