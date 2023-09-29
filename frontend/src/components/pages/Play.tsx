import Header from "../Header"
import MediaPlayer from '../MediaPlayer'

const Play: React.FC = () => {

  const mediaUrl = '/src/assets/the_nun_2.mp4'

  console.log(`Media is displaying with url: ${mediaUrl}`)

  return (
    <>
      <Header />
      <MediaPlayer url={mediaUrl} />
    </>
  )
}

export default Play