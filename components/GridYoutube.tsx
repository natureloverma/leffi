// components/YouTubeVideo.js

const GridYoutube = ({ videoId }: { videoId: string }) => {
    return (
      <div className="">
        <iframe
          src={`https://www.youtube.com/embed/${videoId}`}
          frameBorder="0"
          allow="accelerometer autoplay encrypted-media gyroscope picture-in-picture"
          allowFullScreen
          className=""
        ></iframe>
  
        
      </div>
    );
  };
  
  export default GridYoutube;
  