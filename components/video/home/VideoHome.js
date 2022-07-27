import TextGradient from "@components/text/gradient/TextGradient";
import YoutubeVideo from "@components/youtube-video/YoutubeVideo";

const VideoHome = () => {
  return (
    <div className="px-20 text-center py-20 pt-40 flex flex-col items-center justify-center bg-background">
      <TextGradient>Makara Pumpkin for SAUVC 2022</TextGradient>
      <div className="my-4" />
      <div>
        <YoutubeVideo videoId={"U8GOqvt0ufw"} width={"680"} />
      </div>
    </div>
  );
};

export default VideoHome;
