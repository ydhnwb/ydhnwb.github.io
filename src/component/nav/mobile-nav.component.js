import React, { useContext } from 'react';
import { AppThemeContext } from '../../ThemeContext';
import { Link } from 'react-router-dom';

export default function MobileNavigation() {
    const { theme, setAppTheme } = useContext(AppThemeContext)

    return (
        <nav className="fixed lg:hidden bottom-0 left-0 right-0 z-20 shadow-t ">
            <div className="z-10 justify-evenly bg-primary-light dark:bg-primary-dark w-full items-stretch flex flex-1 flex-row p-2 absolute bottom-0 sm:visible xl:invisible md:invisible">
                <Link to="/home" style={{ textDecoration: "none" }}>
                    <div className="flex flex-col items-center">
                        <svg width={24} height={24} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke={theme === 'light' ? 'gray' : 'white'}> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /> </svg>
                        <span className="text-gray-800 dark:text-white">Home</span>
                    </div>
                </Link>

                <Link to="/blog" style={{ textDecoration: "none" }}>
                    <div className="flex flex-col items-center">
                        <svg width={24} height={24} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke={theme === 'light' ? 'gray' : 'white'}>
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                        </svg>
                        <span className="text-gray-800 dark:text-white">Blog</span>
                    </div>
                </Link>

                <Link to="/projects" style={{ textDecoration: "none" }}>
                    <div className="flex flex-col items-center">
                        <svg width={24} height={24} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke={theme === 'light' ? 'gray' : 'white'}>
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                        </svg>
                        <span className="text-gray-800 dark:text-white">Projects</span>
                    </div>
                </Link>

                <Link to="/contact" style={{ textDecoration: "none" }}>
                    <div className="flex flex-col items-center">
                        <svg width={24} height={24} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke={theme === 'light' ? 'gray' : 'white'}>
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                        </svg>
                        <span className="text-gray-800 dark:text-white">Contact</span>
                    </div>
                </Link>

            </div>
        </nav>
    )
}