import TextGradient from "@components/text/gradient/TextGradient";
import React from "react";
import YoutubeVideo from "@components/youtube-video/YoutubeVideo";

const VideoHome = () => {
  return (
    <div className="py-20 flex flex-col items-center justify-center bg-background">
      <TextGradient>Makara Pumpkin for SAUVC 2022</TextGradient>
      <div className="my-4" />
      <YoutubeVideo videoId={"U8GOqvt0ufw"} />
    </div>
  );
};

export default VideoHome;
