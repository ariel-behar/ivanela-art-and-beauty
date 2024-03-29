import React from 'react'
import NavItems from './NavItems'
import NavSocial from './NavSocial'

interface Props {
    isMenuOpen: boolean
}

function NavMobile({
    isMenuOpen
}: Props) {
    return (
        <>
            <div className={`grid ${isMenuOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'} transition-[grid-template-rows] duration-700 ease-in-out md:hidden`} >
                <div className={`overflow-hidden`}>
                    <NavItems />
                    <NavSocial />
                </div>
            </div>
        </>
    )
}

export default NavMobile