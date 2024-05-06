// components/YouTubeVideo.js

const YouTubeVideo = ({ videoId }: { videoId: string }) => {
  return (
    <div className="video-container">
      <iframe
        
        src={`https://www.youtube.com/embed/${videoId}`}
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="p-5"
      ></iframe>

        {/* <iframe
        width="560"
        height="315"
        src={`https://www.youtube.com/embed/${videoId}`}
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe> */}
    </div>
  );
};

export default YouTubeVideo;
