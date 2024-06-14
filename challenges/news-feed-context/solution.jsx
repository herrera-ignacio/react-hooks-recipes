import * as React from "react";

const videoPlaybackContext = React.createContext({
  playingVideoId: null,
  setPlayingVideoId: (_id) => {}
});

function VideoPlaybackProvider({ children }) {
  const [playingVideoId, setPlayingVideoId] = React.useState(null);

  return (
    <videoPlaybackContext.Provider value={{ playingVideoId, setPlayingVideoId }}>
      {children}
    </videoPlaybackContext.Provider>
  )
}

function VideoItem({ videoId, title, poster, src }) {
  const videoRef = React.useRef(null);
  const { playingVideoId, setPlayingVideoId } = React.useContext(videoPlaybackContext);
  const isVideoActive = playingVideoId === videoId;

  React.useEffect(() => {
    if (isVideoActive) {
      videoRef.current.play();
    } else {
      videoRef.current.pause();
    }
  }, [isVideoActive])

  const handleTogglePlay = () => {
    setPlayingVideoId(isVideoActive ? null : videoId);
  };

  return (
    <li key={videoId}>
      <h3>{title}</h3>
      <article>
        <video poster={poster} ref={videoRef}>
          <source src={src} type="video/mp4" />
        </video>
        <button
          title={isVideoActive ? "Pause" : "Play"}
          onClick={handleTogglePlay}
        >
          {isVideoActive ? "⏸" : "▶"}
        </button>
      </article>
    </li>
  );
}

function NewsFeed() {
  const videos = [
    {
      id: 1,
      title: "The React Way",
      poster: "https://react.gg/img/visualized-og2.jpg",
      src:
        "https://stream.mux.com/TbVCJiOghmISJgg4AznPfFHYRfiVoek8OJHF56Y01oR4/high.mp4"
    },
    {
      id: 2,
      title: "The History of the Web",
      poster: "https://react.gg/img/visualized-og1.jpg",
      src:
        "https://stream.mux.com/EwJPlEBa0046jGSVdYOnRsX9WnqHjytgIBXwkOt7LvVg/high.mp4"
    },
    {
      id: 3,
      title: "Rendering, Visualized",
      poster: "https://react.gg/img/visualized-og5.jpg",
      src:
        "https://stream.mux.com/VvQKMwPEOq5BUnc9eRN4sL5sUEZrHqWxNlCbpXSkE3I/high.mp4"
    }
  ];

  return (
    <div>
      <h1>News Feed</h1>
      <ul>
        {videos.map(v =>
          <VideoItem videoId={v.id} title={v.title} poster={v.poster} src={v.src} />
        )}
      </ul>
    </div>
  );
}

export default function App() {
  return (
    <VideoPlaybackProvider>
      <NewsFeed />
    </VideoPlaybackProvider>
  );
}
