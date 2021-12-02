import Head from 'next/head'
import Image from 'next/image'
import Layout from '../components/Layout'
import Form from '../components/Form'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <Layout title="Home">
      {/* awal heroes */}
      <section className="bg-hero-pattern bg-cover -mt-28 h-screen w-full flex items-end relative">
        <div className="w-full h-full bg-black absolute opacity-75"></div>
        <div className="container z-10 py-16">
          <div className="flex justify-around">
            <div className="text-white text-center text-sm space-y-2">
              <img src="https://source.unsplash.com/90x90" alt="" className="mx-auto rounded-full te" />
              <span>Desert</span>
              <p className="">Lorem ipsum dolor sit amet, consectetur.</p>
            </div>
            <div className="text-white text-center text-sm space-y-2">
              <img src="https://source.unsplash.com/90x90" alt="" className="mx-auto rounded-full te" />
              <span>Desert</span>
              <p className="">Lorem ipsum dolor sit amet, consectetur.</p>
            </div>
            <div className="text-white text-center text-sm space-y-2">
              <img src="https://source.unsplash.com/90x90" alt="" className="mx-auto rounded-full te" />
              <span>Desert</span>
              <p className="">Lorem ipsum dolor sit amet, consectetur.</p>
            </div>
            <div className="text-white text-center text-sm space-y-2">
              <img src="https://source.unsplash.com/90x90" alt="" className="mx-auto rounded-full te" />
              <span>Desert</span>
              <p className="">Lorem ipsum dolor sit amet, consectetur.</p>
            </div>
          </div>
        </div>
      </section>
      {/* akhir heroes */}
      {/* awal about us */}
      <section className="py-16">
        <div className="container">
          <div className="w-10/12 mx-auto relative">
            <div className="flex space-x-4">
              <img src="https://source.unsplash.com/196x400" alt="" className="mb-12" />
              <img src="https://source.unsplash.com/196x400" alt="" className="mt-12" />
            </div>
            <div className=" bg-primary absolute space-y-3 leading-relaxed top-1/4 left-1/3 px-4 py-6 rounded-tr-3xl rounded-bl-3xl text-white">
              <h5>About Us</h5>
              <h3 className="font-bold text-2xl">Tentang Kami</h3>
              <p>Anim sunt excepteur enim cupidatat sit commodo culpa. Duis in non do laborum eu ad aliquip magna. Voluptate qui laborum consectetur adipisicing nisi fugiat. Pariatur ad culpa cillum laboris magna incididunt adipisicing anim ut sit irure officia duis. Anim sunt excepteur enim cupidatat sit commodo culpa. Duis in non do laborum eu ad aliquip magna. Voluptate qui laborum consectetur adipisicing nisi fugiat. Pariatur ad culpa cillum laboris magna incididunt adipisicing anim ut sit irure officia duis. Anim sunt excepteur enim cupidatat sit commodo culpa. Duis in non do laborum eu ad aliquip magna.</p>
            </div>
          </div>
        </div>
      </section>
      {/* akhir about us */}
      {/* Awal Gallery */}
      <section className="py-16">
        <div className="text-center tracking-wide leading-loose mb-5">
          <h1 className="text-primary text-5xl font-bold">Gallery</h1>
          <h2 className="text-4xl">Our Hot Picked Cakes</h2>
        </div>
        <div className="container">
          <div className="flex justify-center">
            <div className="">
              <img src="https://source.unsplash.com/210x210" alt="" />
              <img src="https://source.unsplash.com/210x210" alt="" />
            </div>
            <div className="">
              <img src="https://source.unsplash.com/210x210" alt="" />
              <img src="https://source.unsplash.com/210x210" alt="" />
            </div>
            <div className="">
              <img src="https://source.unsplash.com/210x210" alt="" />
              <img src="https://source.unsplash.com/210x210" alt="" />
            </div>
            <div className="">
              <img src="https://source.unsplash.com/210x210" alt="" />
              <img src="https://source.unsplash.com/210x210" alt="" />
            </div>
            <div className="">
              <img src="https://source.unsplash.com/210x210" alt="" />
              <img src="https://source.unsplash.com/210x210" alt="" />
            </div>
          </div>
        </div>
      </section>
      {/* Akhir Gallery */}
      {/* Awal Specialities */}
      <section className="py-16">
        <div className="text-center tracking-wide leading-loose mb-5">
          <h1 className="text-primary text-5xl font-semibold">Specialities</h1>
          <h2 className="text-4xl">Our Menu</h2>
        </div>
        <div className="w-10/12 mx-auto">
          <div className="container">
            <div className="grid grid-cols-3 gap-8">
              <div className="border-2 border-primary rounded-md p-4 flex space-x-6 items-center">
                <img src="https://source.unsplash.com/50x50" alt="" className="rounded-full" />
                <div className="">
                  <div className="flex justify-between items-center">
                    <h6 className="font-bold">Strawberry</h6>
                    <span>500K</span>
                  </div>
                  <span>Strawberry, Chocolate, Berry, Cream</span>
                </div>
              </div>
              <div className="border-2 border-primary rounded-md p-4 flex space-x-6 items-center">
                <img src="https://source.unsplash.com/50x50" alt="" className="rounded-full" />
                <div className="">
                  <div className="flex justify-between items-center">
                    <h6 className="font-bold">Strawberry</h6>
                    <span>500K</span>
                  </div>
                  <span>Strawberry, Chocolate, Berry, Cream</span>
                </div>
              </div>
              <div className="border-2 border-primary rounded-md p-4 flex space-x-6 items-center">
                <img src="https://source.unsplash.com/50x50" alt="" className="rounded-full" />
                <div className="">
                  <div className="flex justify-between items-center">
                    <h6 className="font-bold">Strawberry</h6>
                    <span>500K</span>
                  </div>
                  <span>Strawberry, Chocolate, Berry, Cream</span>
                </div>
              </div>
              <div className="border-2 border-primary rounded-md p-4 flex space-x-6 items-center">
                <img src="https://source.unsplash.com/50x50" alt="" className="rounded-full" />
                <div className="">
                  <div className="flex justify-between items-center">
                    <h6 className="font-bold">Strawberry</h6>
                    <span>500K</span>
                  </div>
                  <span>Strawberry, Chocolate, Berry, Cream</span>
                </div>
              </div>
              <div className="border-2 border-primary rounded-md p-4 flex space-x-6 items-center">
                <img src="https://source.unsplash.com/50x50" alt="" className="rounded-full" />
                <div className="">
                  <div className="flex justify-between items-center">
                    <h6 className="font-bold">Strawberry</h6>
                    <span>500K</span>
                  </div>
                  <span>Strawberry, Chocolate, Berry, Cream</span>
                </div>
              </div>
              <div className="border-2 border-primary rounded-md p-4 flex space-x-6 items-center">
                <img src="https://source.unsplash.com/50x50" alt="" className="rounded-full" />
                <div className="">
                  <div className="flex justify-between items-center">
                    <h6 className="font-bold">Strawberry</h6>
                    <span>500K</span>
                  </div>
                  <span>Strawberry, Chocolate, Berry, Cream</span>
                </div>
              </div>
              <div className="border-2 border-primary rounded-md p-4 flex space-x-6 items-center">
                <img src="https://source.unsplash.com/50x50" alt="" className="rounded-full" />
                <div className="">
                  <div className="flex justify-between items-center">
                    <h6 className="font-bold">Strawberry</h6>
                    <span>500K</span>
                  </div>
                  <span>Strawberry, Chocolate, Berry, Cream</span>
                </div>
              </div>
              <div className="border-2 border-primary rounded-md p-4 flex space-x-6 items-center">
                <img src="https://source.unsplash.com/50x50" alt="" className="rounded-full" />
                <div className="">
                  <div className="flex justify-between items-center">
                    <h6 className="font-bold">Strawberry</h6>
                    <span>500K</span>
                  </div>
                  <span>Strawberry, Chocolate, Berry, Cream</span>
                </div>
              </div>
              <div className="border-2 border-primary rounded-md p-4 flex space-x-6 items-center">
                <img src="https://source.unsplash.com/50x50" alt="" className="rounded-full" />
                <div className="">
                  <div className="flex justify-between items-center">
                    <h6 className="font-bold">Strawberry</h6>
                    <span>500K</span>
                  </div>
                  <span>Strawberry, Chocolate, Berry, Cream</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* akhir Specialities */}
      {/* Awal Order */}
      <section className="bg-hero-pattern bg-cover mt-12 w-full py-16 px-6">

        <div className="w-6/12">
          <h3 className="text-black font-bold text-center text-5xl">Order<span className=" text-4xl font-normal text-white"> <br /> Your Cake</span></h3>
          <div className="bg-primary -mt-10 px-6 pt-16 pb-10 space-y-6 rounded-lg">
            <Form />
          </div>
        </div>
      </section>
      {/* Akhir Order */}
    </Layout>

  )
}
