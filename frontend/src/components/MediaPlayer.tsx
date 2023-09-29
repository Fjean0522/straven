import ReactPlayer from "react-player"


type MediaPlayerProp = {
url: string
}

const MediaPlayer: React.FC<MediaPlayerProp> = ({ url }) => {

  <div>
    <ReactPlayer
      url={url}
      width='100%'
      height='100%'
      style={{ position: 'absolute', top: 0, left: 0 }}
    />
  </div>


  return (
    <>
      
    </>
  )
}

export default MediaPlayer