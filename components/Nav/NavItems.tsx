"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation'
import uniqid from 'uniqid';

const routes = [
    {
        name: 'Home',
        path: '/'
    },
    {
        name: 'Services',
        path: '/services'
    },
    {
        name: 'Portfolio',
        path: '/portfolio'
    },
    {
        name: 'Contact',
        path: '/contact'
    }
]

function NavItems() {
    const pathname = usePathname()

    return (
        <ul className="flex flex-col p-4 md:p-0 mt-4 md:flex-row md:space-x-8 ">
            {
                routes.map((route, index) => (
                    <li key={uniqid()}>
                        <Link href={route.path}
                            className="block py-2 px-3 text-black rounded md:bg-transparent md:p-0"
                            aria-current="page"
                        >
                            {route.name}
                        </Link>
                    </li>
                ))
            }
        </ul>
    )
}

export default NavItems