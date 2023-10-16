import { Movie } from "../models/Movie";

const movieData: Movie[] = [
  {
    title: 'Black Adam',
    description: `Nearly 5,000 years after he was bestowed with the almighty powers of the Egyptian gods--and 
    imprisoned just as quickly--Black Adam is freed from his earthly tomb, ready to unleash his unique 
    form of justice on the modern world.`,
    category: 'Action',
    duration: '2h 4m',
    rating: 'PG-13',
    imageUrl: 'https://storage.googleapis.com/straven_movies/movie_thumbnails/black_adam.jpg',
    videoUrl: 'https://storage.googleapis.com/straven_movies/movies/action/Black%20Adam.mp4'
  },

  {
    title: 'Extraction',
    description: `Tyler Rake, a fearless black market mercenary, embarks on the most deadly extraction of his career 
    when he\'s enlisted to rescue the kidnapped son of an imprisoned international crime lord.`,
    category: 'Action',
    duration: '1h 57m',
    rating: 'R',
    imageUrl: 'https://storage.googleapis.com/straven_movies/movie_thumbnails/extraction.jpg',
    videoUrl: 'https://storage.googleapis.com/straven_movies/movies/action/Extraction.mp4'
  },

  {
    title: 'Training Day',
    description: `A rookie cop spends his first day as a Los Angeles narcotics officer with a rogue detective
    who isn't what he appears to be.`,
    category: 'Action',
    duration: '2h 2m',
    rating: 'R',
    imageUrl: 'https://storage.googleapis.com/straven_movies/movie_thumbnails/training_day.jpg',
    videoUrl: 'https://storage.googleapis.com/straven_movies/movies/action/Training%20Day.mp4'
  },

  {
    title: 'Wonder Woman',
    description: `When a pilot crashes and tells of conflict in the outside world, Diana, an Amazonian warrior in training, 
    leaves home to fight a war, discovering her full powers and true destiny.`,
    category: 'Action',
    duration: '2h 21m',
    rating: 'PG-13',
    imageUrl: 'https://storage.googleapis.com/straven_movies/movie_thumbnails/wonder_woman.jpg',
    videoUrl: 'https://storage.googleapis.com/straven_movies/movies/action/Wonder%20Woman.mp4'
  },

  {
    title: 'The Other Guys',
    description: `Two mismatched New York City detectives seize an opportunity to step up like the city's top cops, 
    whom they idolize, only things don't quite go as planned.`,
    category: 'Comedy',
    duration: '1h 56m',
    rating: 'PG-13',
    imageUrl: 'https://storage.googleapis.com/straven_movies/movie_thumbnails/the_other_guys.jpg',
    videoUrl: 'https://storage.googleapis.com/straven_movies/movies/comedy/The%20Other%20Guys.mp4'
  },

  {
    title: 'Scary Movie',
    description: `A year after disposing of the body of a man they accidentally killed, a group of dumb teenagers are stalked 
    by a bumbling serial killer.`,
    category: 'Comedy',
    duration: '1h 28m',
    rating: 'R',
    imageUrl: 'https://storage.googleapis.com/straven_movies/movie_thumbnails/scary_movie.jpg',
    videoUrl: 'https://storage.googleapis.com/straven_movies/movies/comedy/Scary%20Movie.mp4'
  },

  {
    title: 'Scary Movie 2',
    description: `Four teens are tricked by Professor Oldman (Tim Curry) into visiting a haunted house for a school project.`,
    category: 'Comedy',
    duration: '1h 22m',
    rating: 'R',
    imageUrl: 'https://storage.googleapis.com/straven_movies/movie_thumbnails/scary_movie2.jpg',
    videoUrl: 'https://storage.googleapis.com/straven_movies/movies/comedy/Scary%20Movie%202.mp4'
  },

  {
    title: 'Scary Movie 3',
    description: `Cindy must investigate mysterious crop circles and video tapes, and help the President 
    in preventing an alien invasion.`,
    category: 'Comedy',
    duration: '1h 25m',
    rating: 'R',
    imageUrl: 'https://storage.googleapis.com/straven_movies/movie_thumbnails/scary_movie3jpeg',
    videoUrl: 'https://storage.googleapis.com/straven_movies/movies/comedy/Scary%20Movie%203.mp4'
  },

  {
    title: 'Scary Movie 4',
    description: `Cindy finds out the house she lives in is haunted by a little boy and goes on a quest 
    to find out who killed him and why. Also, Alien "Tr-iPods" are invading the world and she has to uncover 
    the secret in order to stop them.`,
    category: 'Comedy',
    duration: '1h 29m',
    rating: 'R',
    imageUrl: 'https://storage.googleapis.com/straven_movies/movie_thumbnails/scary_movie4.jpg',
    videoUrl: 'https://storage.googleapis.com/straven_movies/movies/comedy/Scary%20Movie%204.mp4'
  },

  {
    title: 'Scary Movie 5',
    description: `A couple begin to experience some unusual activity after bringing their lost nieces and nephew home. 
    With the help of home-surveillance cameras, they learn they're being stalked by a nefarious demon.`,
    category: 'Comedy',
    duration: '1h 28m',
    rating: 'R',
    imageUrl: 'https://storage.googleapis.com/straven_movies/movie_thumbnails/scary_movie5.jpg',
    videoUrl: 'https://storage.googleapis.com/straven_movies/movies/comedy/Scary%20Movie%205.mp4'
  },

  {
    title: 'Come Play',
    description: `A monster named Larry manifests itself through smart phones and mobile devices. 
    Feature film version of the 2017 short film.`,
    category: 'Horror',
    duration: '1h 37m',
    rating: 'PG-13',
    imageUrl: 'https://storage.googleapis.com/straven_movies/movie_thumbnails/come_play.jpg',
    videoUrl: 'https://storage.googleapis.com/straven_movies/movies/horror/Come%20Play.mp4'
  },

  {
    title: 'Smile',
    description: `After witnessing a bizarre, traumatic incident involving a patient, a psychiatrist becomes 
    increasingly convinced she is being threatened by an uncanny entity.`,
    category: 'Horror',
    duration: '1h 55m',
    rating: 'R',
    imageUrl: 'https://storage.googleapis.com/straven_movies/movie_thumbnails/smile.jpg',
    videoUrl: 'https://storage.googleapis.com/straven_movies/movies/horror/Smile.mp4'
  },

  {
    title: 'The Nun',
    description: `A priest with a haunted past and a novice on the threshold of her final vows are sent by the Vatican 
    to investigate the death of a young nun in Romania and confront a malevolent force in the form of a demonic nun.`,
    category: 'Horror',
    duration: '1h 36m',
    rating: 'R',
    imageUrl: 'https://storage.googleapis.com/straven_movies/movie_thumbnails/the_nun.jpg',
    videoUrl: 'https://storage.googleapis.com/straven_movies/movies/horror/The%20Nun.mp4'
  },

  {
    title: 'Insidious: Chapter 2',
    description: `The Lamberts believe that they have defeated the spirits that have haunted their family, 
    but they soon discover that evil is not beaten so easily.`,
    category: 'Horror',
    duration: '1h 45m',
    rating: 'PG-13',
    imageUrl: 'https://storage.googleapis.com/straven_movies/movie_thumbnails/insidious2.jpg',
    videoUrl: 'https://storage.googleapis.com/straven_movies/movies/horror/Insidious%202.mp4'
  },

  {
    title: 'Insidious: Chapter 3',
    description: `A prequel set before the haunting of the Lambert family that reveals how gifted psychic Elise Rainier 
    reluctantly agrees to use her ability to contact the dead in order to help a teenage girl who has been targeted 
    by a dangerous supernatural entity.`,
    category: 'Horror',
    duration: '1h 37m',
    rating: 'PG-13',
    imageUrl: 'https://storage.googleapis.com/straven_movies/movie_thumbnails/insidious3.jpg',
    videoUrl: 'https://storage.googleapis.com/straven_movies/movies/horror/Insidious%203.mp4'
  },

  {
    title: 'Insidious: The Red Door',
    description: `The Lamberts must go deeper into The Further than ever before to put their demons to rest once and for all.`,
    category: 'Horror',
    duration: '1h 47m',
    rating: 'PG-13',
    imageUrl: 'https://storage.googleapis.com/straven_movies/movie_thumbnails/insidious_the_red_door.jpg',
    videoUrl: 'https://storage.googleapis.com/straven_movies/movies/horror/Insidious%3A%20The%20Red%20Door.mp4'
  },

  {
    title: 'Don\'t Breathe',
    description: `Hoping to walk away with a massive fortune, a trio of thieves break into the house of a blind man 
    who isn't as helpless as he seems.`,
    category: 'Thriller',
    duration: '1h 28m',
    rating: 'R',
    imageUrl: 'https://storage.googleapis.com/straven_movies/movie_thumbnails/dont_breathe.jpg',
    videoUrl: 'https://storage.googleapis.com/straven_movies/movies/thriller/Dont%20Breath.mp4'
  },

  {
    title: 'The Last House on the Left',
    description: `After kidnapping and brutally assaulting two young women, a gang unknowingly finds refuge 
    at a vacation home belonging to the parents of one of the victims: a mother and father who devise 
    an increasingly gruesome series of revenge tactics.`,
    category: 'Thriller',
    duration: '1h 52m',
    rating: 'R',
    imageUrl: 'https://storage.googleapis.com/straven_movies/movie_thumbnails/house_on_the_left.jpg',
    videoUrl: 'https://storage.googleapis.com/straven_movies/movies/thriller/Last%20House%20on%20the%20Left.mp4'
  },

  {
    title: 'Law Abiding Citizen',
    description: `A frustrated man decides to take justice into his own hands after a plea bargain 
    sets one of his family's killers free.`,
    category: 'Thriller',
    duration: '1h 49m',
    rating: 'R',
    imageUrl: 'https://storage.googleapis.com/straven_movies/movie_thumbnails/law_abiding_citizen.jpg',
    videoUrl: 'https://storage.googleapis.com/straven_movies/movies/thriller/Law%20Abiding%20Citizen.mp4'
  },

  {
    title: 'The Meg',
    description: `A group of scientists exploring the Marianas Trench encounter the largest marine predator 
    that has ever existed - the Megalodon.`,
    category: 'Thriller',
    duration: '1h 53m',
    rating: 'PG-13',
    imageUrl: 'https://storage.googleapis.com/straven_movies/movie_thumbnails/the_meg.jpg',
    videoUrl: 'https://storage.googleapis.com/straven_movies/movies/thriller/The%20Meg.mp4'
  }
];

export default movieData;