import React, { useState, useEffect } from 'react';
import WebNavigation from '../nav/web-nav.component';
import MobileNavigation from '../nav/mobile-nav.component';

export default function Header() {
    const [activeLink, setActiveLink] = useState(null);
    const [scrollActive, setScrollActive] = useState(false);



    useEffect(() => {
        window.addEventListener("scroll", () => {
            setScrollActive(window.scrollY > 20);
        });
    }, []);


    return (
        <>
            <header className={"fixed top-0 w-full z-30 bg-primary-light dark:bg-primary-dark transition-all " + (scrollActive ? " shadow-md p-4" : " p-4")}>
                <WebNavigation/>
                <MobileNavigation/>
            </header>
        </>
    )
}