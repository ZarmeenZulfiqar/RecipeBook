// app/components/Navbar.js
import React from 'react';
import Link from 'next/link';

const Navbar = () => {
    return (
        <div>
            <header className="text-gray-600 body-font">
                <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                        <img width={40} src='/logo.svg' />
                        <span className="ml-3 text-xl">Zarmeen's Tarka</span>
                    </a>

                    <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
                        <Link href="/" className="mr-5 hover:text-gray-900">
                            Home
                        </Link>
                        <Link href="/about" className="mr-5 hover:text-gray-900">
                            About
                        </Link>
                        <Link href="/markdown" className="mr-5 hover:text-gray-900">
                            Markdown-Editor
                        </Link>
                        <Link href="/context" className="mr-5 hover:text-gray-900">
                            Firebase
                        </Link>
                        <Link href="/products" className="mr-5 hover:text-gray-900">
                            Recipes
                        </Link>
                    </nav>
                </div>
            </header>
        </div>
    );
};

export default Navbar;
