import { AspectRatio } from "@chakra-ui/react";
import YouTube from "react-youtube";

const YoutubeVideo = ({ videoId, height = "380", width = "640" }) => {
  const opts = {
    height: height,
    width: width,
    playerVars: {
      autoplay: 1,
    },
  };

  const _onReady = (event) => {
    // event.target.pauseVideo();
  };

  return (
    // <AspectRatio maxW="560px" ratio={4 / 3}>
    <iframe
      className="aspect-video max-h-40  md:max-h-full"
      width={width}
      height={height}
      src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1`}
    ></iframe>
    // </AspectRatio>
  );
};

export default YoutubeVideo;
