'use client'
import { useRouter } from 'next/navigation'
import Link from 'next/link';
import React, { useState } from 'react'
import { useSession, signOut } from 'next-auth/react'

function Header() {
    const { data: session } = useSession();
    const router = useRouter();

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const state = session ? "Logout" : "Signin";

    const signin = () => {
        if (!session) {
            router.replace('/signin');
        } else {
            signOut();
            router.replace('/signin');
        }
        setIsMenuOpen(false); // Close menu after sign out or sign in
    }

    const signup = () => {
        router.replace('/signup');
        setIsMenuOpen(false); // Close menu after signup
    }

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }

    return (
        <header className="bg-white">
            <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                    <div className="md:flex md:items-center md:gap-12">
                        <Link href="/" className="block text-teal-600">
                            <div className="p-2 border-2 border-black rounded-full inline-flex items-center justify-center">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                >
                                    <path 
                                        strokeLinecap="round" 
                                        strokeLinejoin="round" 
                                        
                                        d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" 
                                    />
                                </svg>
                            </div>
                        </Link>
                    </div>

                    <div className="hidden md:block">
                        <nav aria-label="Global">
                            <ul className="flex items-center gap-8 text-base font-medium text-gray-700">
                                <li>
                                    <Link href="/dashboard" className="hover:text-blue-600 transition-colors duration-300">
                                        Dashboard
                                    </Link>
                                </li>
                                <li className="hover:text-blue-600 transition-colors duration-300">
                                    <Link href="/matches">
                                        Matches
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/chat" className="hover:text-blue-600 transition-colors duration-300">
                                        Chat
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/photoupload" className="hover:text-blue-600 transition-colors duration-300">
                                        Photoupload
                                    </Link>
                                </li>
                            </ul>
                        </nav>
                    </div>

                    <div className="flex items-center gap-4">
                        <div className="sm:flex sm:gap-4">
                            <button
                                className="rounded-md bg-teal-600 px-5 py-2.5 text-sm font-medium text-white shadow"
                                onClick={signin}
                            >
                                {state}
                            </button>

                            <button
                                className="rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-teal-600"
                                onClick={signup}
                            >
                                Signup
                            </button>
                        </div>

                        <div className="block md:hidden">
                            <button 
                                className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75"
                                onClick={toggleMenu}
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="md:hidden">
                    <nav aria-label="Global">
                        <ul className="flex flex-col items-center gap-4 mt-4 text-base font-medium text-gray-700">
                            <li>
                                <Link href="/dashboard" className="hover:text-blue-600 transition-colors duration-300" onClick={toggleMenu}>
                                    Dashboard
                                </Link>
                            </li>
                            <li>
                                <Link href="/matches" className="hover:text-blue-600 transition-colors duration-300" onClick={toggleMenu}>
                                    Matches
                                </Link>
                            </li>
                            <li>
                                <Link href="/chat" className="hover:text-blue-600 transition-colors duration-300" onClick={toggleMenu}>
                                    Chat
                                </Link>
                            </li>
                            <li>
                                <Link href="/photoupload" className="hover:text-blue-600 transition-colors duration-300" onClick={toggleMenu}>
                                    Photoupload
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            )}
        </header>
    )
}

export default Header;
