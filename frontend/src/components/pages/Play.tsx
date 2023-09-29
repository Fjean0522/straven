import Header from "../Header"
import MediaPlayer from '../MediaPlayer'

const Play: React.FC = () => {

  const mediaUrl = ''

  console.log(`Media is displaying with url: ${mediaUrl}`)

  return (
    <>
      <Header />
      <MediaPlayer url={mediaUrl} />
    </>
  )
}

export default Play