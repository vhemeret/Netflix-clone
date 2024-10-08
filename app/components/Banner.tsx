'use client'
import { Movie } from "../typing"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Slider from "react-slick"
import { useEffect, useState } from "react"
import { baseUrl } from "../utils/Movie"
import Image from "next/image"
import { PlayIcon } from "@heroicons/react/20/solid"
import { InformationCircleIcon } from "@heroicons/react/24/outline"


interface Props {
    netflixOriginals: Movie[]
}

function Banner({ netflixOriginals }: Props) {
    const [movies, setMovies] = useState<Movie[]>([])

    useEffect(() => {
        setMovies(netflixOriginals.slice(0, 7))
    }, [netflixOriginals])

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 10000,
    }

    return (
        <div className="relative overflow-hidden">
            <Slider {...settings}>
                {movies.map((movie) => (
                    <div key={movie.id} className="relative h-[60vh] w-screen">
                        <Image
                            src={`${baseUrl}${movie?.backdrop_path || movie?.poster_path}`}
                            layout="fill"
                            objectFit="cover"
                            alt={movie?.title || 'Movie poster'}
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                        <div className="absolute inset-0 flex items-center">
                            <div className="text-white ml-10 max-w-xl min-w-sm space-y-6 w-3/4">
                                <h1 className="text-xl font-bold md:text-2xl lg:text-4xl">
                                    {movie?.title || movie?.name || movie?.original_name}
                                </h1>
                                <p className="font-light sm:text-sm lg:text-lg">
                                    {movie?.overview}
                                </p>
                                <div className="flex gap-x-2 items-center">
                                    <button className="px-4 py-4 bg-white text-black text-sm font-medium rounded-md drop-shadow-lg hover:bg-gray-300 transition flex w-[85px] h-8 gap-2 justify-center items-center flex-row">
                                        <PlayIcon className="text-black w-5 h-5" /> Play
                                    </button>
                                    <button className="px-4 py-4 bg-gray-700/80 text-white text-sm font-medium drop shadwo-lg rounded-md hover:bg-gray-700 transition flex w-32 h-8 gap-2 justify-center items-center">
                                        <InformationCircleIcon className="w-5 h-5"/>
                                        <span className="">More info</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    )
}

export default Banner