import React from 'react'

interface Props {
    strokeColor?: string
}

function MenuIcon({
    strokeColor = "black"
}) {
    return (
        <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke={strokeColor} className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>
    )
}

export default MenuIcon