import React from 'react';
import MovieBtn from './MovieBtn.jsx';
import {Container,Row, Col} from 'react-bootstrap';
import { Link } from 'react-router-dom';


const Hero = () => {
  return (
    <>

      <main
        id="content"
        className="relative w-full h-screen my-5 px-4 sm:px-6 lg:px-8 flex flex-col  items-center mx-auto before:absolute before:top-0 before:start-1/2 before:bg-[url('https://preline.co/assets/svg/examples-dark/squared-bg-element.svg')] before:bg-no-repeat before:bg-top before:size-full before:-z-[1] before:transform before:-translate-x-1/2"
      >
        <div className="text-center py-8 px-4 sm:px-6 lg:px-8">
  
          <h1 className="text-2xl text-white sm:text-4xl">Your Personalized Movie Guide</h1>
          <h2 className="mt-1 sm:mt-3 text-4xl font-bold text-white sm:text-6xl">
            <span className="bg-clip-text bg-gradient-to-tr from-blue-600 to-purple-400 text-transparent">Filmfave</span>
          </h2>

        
            <div className="mt-8 space-y-4">
              

          

              <div className="grid">
                <button
                  type="submit"
                  className=" sm:p-4 py-3 px-4 my-20 inline-flex justify-center items-center gap-x-2 text-xl font-medium rounded-lg border border-transparent bg-white/10 text-white hover:bg-white/20 focus:outline-none focus:bg-white/20 disabled:opacity-50 disabled:pointer-events-none movie-btn"
                >
                  <Link to ="/moviefilter" className='flex   animate-bounceCustom'>
                      Get Movie Recommendations
                      {/* <img src="/images/arrow-next.png" alt="Arrow Icon" className="shrink-0 size-13 " /> */}
                  </Link>
               
                </button>
              </div>
            </div>
          
        </div>
      </main>

      {/* <footer className="absolute bottom-0 inset-x-0 text-center py-5">
        <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm text-white/50">
            © 2025 Preline Labs. A product of{' '}
            <a className="text-white font-medium hover:text-white/80 focus:outline-none focus:text-white/80" href="#">
              Htmlstream
            </a>
          </p>
        </div>
      </footer> */}
   
    </>
  )
}

export default Hero