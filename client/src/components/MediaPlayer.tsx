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

      <div className="mt-1 max-w-6xl">
        <p className="text-white text-xl opacity-80">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi interdum sagittis libero. 
          Donec tristique erat varius velit luctus lobortis. Proin in mollis quam, luctus rhoncus.
          nisl Nullam vitae fringilla ligula. 
        </p>
      </div>
    </div>
  )
}

export default MediaPlayer