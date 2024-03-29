"use client"
import { useState } from "react"
import Link from "next/link"

import NavItems from "./NavItems"
import NavSocial from "./NavSocial"
import MenuIcon from "../Icons/MenuIcon"

function Nav() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
        console.log('hello');
    }

    return (
        <nav className="bg-white">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <Link href="/">
                    <img src="/assets/img/logo.svg" className="h-[150px]" alt="Ivanela - Art & Beauty Logo" />
                </Link>

                <button type="button" className="inline-flex items-center p-2 w-10 h-10 rounded-lg md:hidden" onClick={toggleMenu}>
                    <MenuIcon strokeColor="gray"/>
                </button>

                <div className="hidden w-full md:block md:w-auto">
                    <NavItems />
                    <NavSocial />
                </div>
            </div>
        </nav>
    )
}

export default Nav