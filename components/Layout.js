import Head from 'next/head'
import Footer from './Footer';
import Navbar from './Navbar';
import 'tailwindcss/tailwind.css';

export default function layout(props) {
    return (
        <div>
            <Head>
                <title>{props.title}</title>
            </Head>
            <Navbar />

            <body className="bg-gray-50"> {props.children}
            </body>
            <Footer />

        </div>
    );
}
