import Link from 'next/link';
import React from 'react'

import Image from 'next/image'; // Add this import
import NavItems from './navitems';


const Header = () => {
    return (
        <header className='sticky top-0 header'>
            <div className='container header-wrapper'>
                <Link href='/'>
                    <div className='h-8 w-auto cursor-pointer'>
                        <Image src="/assets/icons/logo.svg" alt='signalist' width={140} height={30} ></Image>
                    </div>
                </Link>
                <nav>
                <NavItems></NavItems>
                </nav>
                {/* user dropdown */}
            </div>
        </header>
    )
}

export default Header
