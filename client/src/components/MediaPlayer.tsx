import ReactPlayer from "react-player"
import { Movie } from "../pages/Home"

type MediaPlayerProp = {
  url: string
  media: Movie
}

const MediaPlayer = ({ url, media }: MediaPlayerProp) => {

  return (
    <div className="bg-black min-h-screen">
      <div className="pb-3 h-auto">
        <ReactPlayer
          url={url}
          controls={true}
          playing={true}
          width='100%'
          height='100%'
        />
      </div>

      <div className="max-w-6xl px-7 pb-6">
        <div className="text-white flex gap-3">
          <h2 className="text-2xl font-semibold">{media.title}</h2>
          <p>{media.rating}</p>
          <p>{media.duration}</p>
        </div>

        <p className="text-white text-xl opacity-80">{media.description}</p>
      </div>
    </div>
  )
}

export default MediaPlayer