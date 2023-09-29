import ReactPlayer from "react-player"


type MediaPlayerProp = {
  url: string
}

const MediaPlayer: React.FC<MediaPlayerProp> = ({ url }) => {

  return (
    <div className="bg-black h-screen">
      <div className="h-fit">
        <ReactPlayer
          url={url}
          width='100%'
          height='100%'
        />
      </div>

      <div>

      </div>
    </div>
  )
}

export default MediaPlayer