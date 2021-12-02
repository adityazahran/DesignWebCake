import React from 'react';
import 'tailwindcss/tailwind.css';
import Link from 'next/link'

export default function footer() {
    return (
        <footer className="py-16 px-6 bg-secondary text-white">
            <div className="flex">
                <div className="space-y-4 w-3/12">
                    <h3 className="text-2xl font-semibold">
                        Nama Toko
                    </h3>
                    <p>
                        We serve and take all type of cake orders.You can personalised cake of your own choice.We have the best chef in the city working for us and happying serving to you.
                    </p>
                    <span>Email @email.com</span>
                </div>
                <div className="w-3/12 space-y-4 px-6">
                    <h3 className="text-2xl font-semibold">Open Hours</h3>
                    <div className="flex justify-between">
                        <ul className="space-y-2">
                            <li>Senin</li>
                            <li>Selasa</li>
                            <li>Rabu</li>
                            <li>Kamis</li>
                            <li>Jumat</li>
                        </ul>
                        <ul className="space-y-2">
                            <li>09.00 - 24.00</li>
                            <li>09.00 - 24.00</li>
                            <li>09.00 - 24.00</li>
                            <li>09.00 - 24.00</li>
                            <li>09.00 - 24.00</li>
                        </ul>
                    </div>

                </div>
                <div className="w-3/12 space-y-4">
                    <h3 className="text-2xl font-semibold mb-5">Instagram</h3>
                    <Link href="#" className="">
                        <img src="https://source.unsplash.com/170x110" alt="" />
                    </Link>
                </div>
                <div className="w-3/12 space-y-4">
                    <h3 className="text-2xl font-semibold">Newsletter</h3>
                    <span>We Serve and take all type of cake orders.</span>
                    <input type="email" name="" id="" className="w-full" />
                    <button type="submit" className="px-6 py-4 w-full bg-primary">Submit</button>
                </div>
            </div>
        </footer>
    );
}
