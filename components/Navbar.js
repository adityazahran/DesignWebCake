import React from 'react';
import 'tailwindcss/tailwind.css'
import Link from 'next/link'

export default function navbar() {
    return (
        <nav className="pt-6 pb-8 px-6">
            <div className="container mx-auto flex justify-between items-center relative z-10">
                <Link href="/" className="font-semibold bg-gray-700 py-2 px-4 rounded">LogoPlacehold</Link>
                <div className="flex items-center space-x-8 justify-around">
                    <Link href="#" className="text-white">Home</Link>
                    <Link href="#" className="text-white">About</Link>
                    <Link href="#" className="text-white">Gallery</Link>
                    <Link href="#" className="text-white">Menu</Link>
                    <buttton className="bg-primary text-white py-2 px-4 rounded-full">Pesan Kue</buttton>
                </div>
            </div>
        </nav>
    );
}
