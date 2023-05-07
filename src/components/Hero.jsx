import React from 'react'

import {logo} from '../assets';



const Hero = () => {
  return (
    <header className="w-full flex justify-center items-center flex-col">
        <nav className="flex justify-between items-center w-full mb-10 pt-3">
            <a href="">
              <img src={logo} alt="logo" className='w-36 object-contain'/>
            </a>
              <button type="button" onClick={() => window.open('https://github.com/alexeri')} className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-r from-fuchsia-400 to-indigo-700 group-hover:from-fuchsia-400 group-hover:to-indigo-700 hover:text-white">
              <span class="flex items-center px-5 py-2 transition-all ease-in duration-75 bg-white rounded-md group-hover:bg-opacity-0">
              Github
              </span>
            </button>
        </nav>
        <h1 className='head_text'>
            Summarize Articles with <br className='max-md:hidden'/>
            <span className='bg-gradient-to-r from-fuchsia-400 to-indigo-700 bg-clip-text text-transparent'>OpenAI GPT-4</span>
        </h1>
        <h2 className='desc'>Simplify your reading with QuickSum, an open-source article summarizer that transforms lengthy articles into clear and concise summaries</h2>
    </header>
  )
}

export default Hero