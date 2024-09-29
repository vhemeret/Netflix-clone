'use client'

import { useEffect, useRef, useState } from "react"
import { Movie } from "../typing"
import Image from "next/image"
import { baseUrl } from "../utils/Movie"
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid"

interface Props {
    movieGender: Movie[]
    title: string
}

function Row({ title, movieGender }: Props) {
    const [movies, setMovies] = useState<Movie[]>([])
    const rowRef = useRef<HTMLDivElement>(null)
    const [isMoved, setIsMoved] = useState(false)

    useEffect(() => {
        setMovies(movieGender)
    }, [movieGender])

    const handleClick = (direction: string) => {
        setIsMoved(true)

        if (rowRef.current) {
            const { scrollLeft, clientWidth } = rowRef.current

            console.log('scroleft:',  scrollLeft)
            console.log('clientWidth:',  clientWidth)
            const scrollTo =
                direction === 'left'
                    ? scrollLeft - clientWidth
                    : scrollLeft + clientWidth

            rowRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' })
        }
    }

    return (
        <div className="mb-10 ml-10">
            <div className="text-white font-semibold md:text-xl tracking-wide mb-5">
                <h2>{title}</h2>
            </div>
            <div className="group relative md:-ml-2">
                <ChevronLeftIcon 
                    className={`absolute top-0 bottom-0 left-2 z-40 m-auto h-9 w-9 cursor-pointer opacity-0 transition hover:scale-125 group-hover:opacity-100 text-white ${
                        !isMoved && 'hidden'
                    }`}
                    onClick={() => handleClick('left')}
                />
                <div 
                    ref={rowRef} 
                    className="flex items-center space-x-2 overflow-x-scroll overflow-y-hidden scrollbar-hide md:space-x-3.5"
                >
                    {movies.map((movie) => (
                        <div key={movie.id} className="relative h-28 min-w-[180px] cursor-pointer transition duration-200 ease-out md:h-36 md:min-w-[260px] md:hover:scale-105">
                            <Image
                                src={`${baseUrl}${movie?.poster_path || movie?.backdrop_path}`}
                                layout="fill"
                                objectFit="cover"
                                alt={movie?.title || 'Movie poster'}
                                className="rounded-sm object-cover md:rounded"
                            />
                        </div>
                    ))}
                </div>
                <ChevronRightIcon 
                    className={`absolute top-0 bottom-0 right-2 z-40 m-auto h-9 w-9 cursor-pointer opacity-0 transition hover:scale-125 group-hover:opacity-100 text-white`}
                    onClick={() => handleClick('right')}
                />
            </div>
        </div>
    )
}

export default Row