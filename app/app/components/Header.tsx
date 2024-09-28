'use client'

import Image from "next/image"
import Logo from "../img/CHINOFLIX.webp"
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline"
import { BellIcon } from "@heroicons/react/20/solid"
import Link from "next/link"
import { useEffect, useState } from "react"

function Header() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0)
                setIsScrolled(true)
            else
                setIsScrolled(false)
        }
        window.addEventListener("scroll", handleScroll)

        return () => {
            window.removeEventListener("scroll", handleScroll)
        }
    }, [])

    return (
        <header className={`fixed top-0 z-50 flex w-full justify-between items-center content-center p-4 transition-all duration-500 lg:px-10 lg:py-6 ${isScrolled
                ? 'bg-gradient-to-b from-black to-gray-950/60'
                : 'bg-gradient-to-b from-black/40 to-transparent'
            }`}>
            <div className="flex flex-grow p-2 space-x-2 md:space-x-10">
                <a href="/">
                    <Image className="w-[100px] cursor-pointer object-contain" src={Logo} alt="Chinoflix" />
                </a>

                <ul className="hidden space-x-4 md:flex text-white">
                    <li className="cursor-pointer text-sm font-light text-[#e5e5e5] trasition duration-[.4s] hover:text-[#b3b3b3]">Home</li>
                    <li className="cursor-pointer text-sm font-light text-[#e5e5e5] trasition duration-[.4s] hover:text-[#b3b3b3]">TV Shows</li>
                    <li className="cursor-pointer text-sm font-light text-[#e5e5e5] trasition duration-[.4s] hover:text-[#b3b3b3]">Movies</li>
                    <li className="cursor-pointer text-sm font-light text-[#e5e5e5] trasition duration-[.4s] hover:text-[#b3b3b3]">New & Popular</li>
                    <li className="cursor-pointer text-sm font-light text-[#e5e5e5] trasition duration-[.4s] hover:text-[#b3b3b3]">My List</li>
                </ul>
            </div>

            <div className="flex text-white items-center space-x-4 text-sm font-light">
                <MagnifyingGlassIcon className="hidden sm:inline h-6 w-6" />
                <p className="hidden lg:inline">Kids</p>
                <BellIcon className="h-6 w-6" />
                <Link href="/account">
                    <img
                        src="https://occ-0-2250-55.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABelYeQhdDSleXnwq1Y7EyxtTDiSw3ZgK2EnBQR5Y-Yav3LC10tCzbIcvsA34KEM-SgBfopzYVOVyKm80bahrQiAqpBqGf2w.png?r=15e"
                        alt="ninja"
                        className="cursor-pointer rounded"
                    />
                </Link>
            </div>

        </header>
    )
}

export default Header