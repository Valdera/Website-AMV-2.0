import TextGradient from "@components/text/gradient/TextGradient";
import React from "react";
import YoutubeVideo from "@components/youtube-video/YoutubeVideo";
import { useMediaQuery } from "@components/hooks/media-query/MediaQuery";

const VideoHome = () => {
  const matches = useMediaQuery(400);
  return (
    <div className="px-20 text-center py-20 flex flex-col items-center justify-center bg-background">
      <TextGradient>Makara Pumpkin for SAUVC 2022</TextGradient>
      <div className="my-4" />

      <div>
        <YoutubeVideo
          videoId={"U8GOqvt0ufw"}
          width={`${!matches ? "480" : ""}`}
        />
      </div>
    </div>
  );
};

export default VideoHome;
