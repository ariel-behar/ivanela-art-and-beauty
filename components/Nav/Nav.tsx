"use client"
import { useState } from "react"

import MenuIcon from "../Icons/MenuIcon"
import NavMobile from "./NavMobile"
import NavDesktop from "./NavDesktop"
import Link from "next/link"

function Nav() {
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    return (
        <nav className="bg-creamyPink-normal drop-shadow-lg">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 ">
                <Link href="/">
                    <img src="/assets/img/logo.svg" className="h-12 md:h-[100px]" alt="Ivanela - Art & Beauty Logo" />
                </Link>
                
                <NavDesktop />

                <button type="button" className="inline-flex items-center p-2 w-10 h-10 rounded-lg md:hidden" onClick={toggleMenu}>
                    <MenuIcon strokeColor="gray" />
                </button>
            </div>

            <NavMobile isMenuOpen={isMenuOpen} toggleMenu={toggleMenu}/>
        </nav>
    )
}

export default Nav