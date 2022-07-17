import YouTube from "react-youtube";

const YoutubeVideo = ({ videoId }) => {
  const opts = {
    height: "390",
    width: "640",
    playerVars: {
      autoplay: 1,
    },
  };

  const _onReady = (event) => {
    // event.target.pauseVideo();
  };

  return (
    <div>
      <YouTube videoId={videoId} opts={opts} onReady={_onReady} />
    </div>
  );
};

export default YoutubeVideo;
