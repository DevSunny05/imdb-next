import Image from 'next/image'
import React from 'react'

const MoviePage =async ({params}) => {
    const movieId=params.id

    const res=await fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.API_KEY}`)
    const movie=await res.json()
  return (
    <div className='w-full'>
        <div className='p-4  md:pt-8 flex flex-col md:flex-row items-center content-center max-w-5xl mx-auto md:space-x-6  '>
            <Image src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path || movie.poster_path }`}
                width={500} height={300} alt={'movie image'}
            className='rounded-lg'
                // placeholder='blur'
                // blurDataURL=''
                style={{maxWidth:'100%',height:'100%'}}
                >
            </Image>
            <div className='p-2'>
                <h2 className='text-lg mb-3'>{movie.title || movie.name}</h2>
            </div>
        </div>
    </div>
  )
}

export default MoviePage