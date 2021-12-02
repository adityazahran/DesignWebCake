import React from 'react';
import 'tailwindcss/tailwind.css'

export default function navbar() {
    return (
        <nav className="pt-6 pb-8 px-6">
            <div className="container mx-auto flex justify-between items-center relative z-10">
                <a href="/" className="font-semibold bg-gray-700 py-2 px-4 rounded">LogoPlacehold</a>
                <div className="flex items-center space-x-8 justify-around">
                    <a href="#" className="text-white">Home</a>
                    <a href="#" className="text-white">About</a>
                    <a href="#" className="text-white">Gallery</a>
                    <a href="#" className="text-white">Menu</a>
                    <buttton className="bg-primary text-white py-2 px-4 rounded-full">Pesan Kue</buttton>
                </div>
            </div>
        </nav>
    );
}
