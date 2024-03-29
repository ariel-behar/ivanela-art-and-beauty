import Link from 'next/link'
import React from 'react'
import NavItems from './NavItems'
import NavSocial from './NavSocial'

function NavDesktop() {
    return (
        <>
            <div className="hidden md:block">
                <NavItems />
            </div>

            <div className="hidden md:block">
                <NavSocial />
            </div>
        </>
    )
}

export default NavDesktop