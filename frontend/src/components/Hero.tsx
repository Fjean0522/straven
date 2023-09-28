import play_btn from '../assets/play_btn.png'
import movieThumbnail from '../assets/detective_reacher_placeholder.png'

const Hero = () => {
  type bgImage = {
    backgroundImage: string,
    backgroundSize: string,
    backgroundPosition: string,
    backgroundRepeat: string
  }
  
  const heroImage: bgImage = {
    backgroundImage: `url(${movieThumbnail})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  }

  return (
    <div 
      className='p-6 h-72 md:h-96' 
      style={heroImage}
    >
      <div className='flex flex-col justify-center min-h-full min-w-full bg-black bg-opacity-40 rounded-xl lg:ml-3 px-6'>
        <div className='max-w-xs md:max-w-md lg:max-w-lg'>
          <h2 className='text-white text-xl font-bold lg:text-2xl'>Detective Reacher</h2>
          <p className='text-white mb-3'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Ut a sapien sed ex feugiat faucibus nec quis lectus. 
            Maecenas facilisis pretium diam, a sodales risus malesuada eu.
          </p>
        </div>

        <div className='bg-white flex items-center justify-center gap-2 text-lg font-bold w-28 p-2 rounded-xl cursor-pointer hover:scale-105'>
          <img
            src={play_btn} 
            alt="Play Button" 
            className='w-6'
          />
          Play
        </div>
      </div>
    </div>
  )
}

export default Hero