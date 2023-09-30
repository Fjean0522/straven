import ReactPlayer from "react-player"

type MediaPlayerProp = {
  url: string
}

const MediaPlayer: React.FC<MediaPlayerProp> = ({ url }) => {

  return (
    <div className="bg-black h-screen">
      <div className="h-fit pb-3">
        <ReactPlayer
          controls
          url={url}
          width='100%'
          height='100%'
        />
      </div>

      <div className="text-white flex gap-3">
        <h2 className="text-2xl font-semibold">Movie Title</h2>
        <p>PG-13</p>
        <p>1h 37m</p>
      </div>
    </div>
  )
}

export default MediaPlayer