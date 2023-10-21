import Header from "../Header"
import MediaPlayer from '../MediaPlayer'

const Play = () => {

  const mediaUrl = 'https://storage.googleapis.com/straven_movies/movies/action/Black%20Adam.mp4'

  console.log(`Media is displaying with url: ${mediaUrl}`)

  return (
    <>
      <Header />
      <MediaPlayer url={mediaUrl} />
    </>
  )
}

export default Play