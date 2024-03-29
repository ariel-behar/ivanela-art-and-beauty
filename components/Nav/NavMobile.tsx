import React from 'react'
import NavItems from './NavItems'
import NavSocial from './NavSocial'

interface Props {
    isMenuOpen: boolean
    toggleMenu: () => void
}

function NavMobile({
    isMenuOpen,
    toggleMenu
}: Props) {
    return (
        <>
            <div className={`grid ${isMenuOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'} transition-[grid-template-rows] duration-700 ease-in-out md:hidden`} >
                <div className={`overflow-hidden`}>
                    <NavItems toggleMenu={toggleMenu} />
                    <NavSocial />
                </div>
            </div>
        </>
    )
}

export default NavMobile