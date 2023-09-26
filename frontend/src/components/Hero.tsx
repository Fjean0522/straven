import play_btn from '../assets/play_btn.png'
import movieThumbnail from '../assets/detective_reacher_placeholder.png'

const Hero = () => {
  const  heroStyles = {
    backgroundImage: `url(${movieThumbnail})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  }

  return (
    <div className='p-6 h-72 md:h-96' style={heroStyles}>
      <h2 className='text-white font-bold'>Detective Reacher</h2>
      <p className='text-white mb-3'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Ut a sapien sed ex feugiat faucibus nec quis lectus. 
        Maecenas facilisis pretium diam, a sodales risus malesuada eu.
      </p>
      <div 
        className='bg-white flex items-center justify-center gap-2 text-lg font-bold w-28 p-2 rounded-xl'>
        <img
          src={play_btn} 
          alt="Play Button" 
          className='w-6'
        />
        Play
      </div>
    </div>
  )
}

export default Hero