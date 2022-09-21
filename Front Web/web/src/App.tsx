import * as React from 'react';
import './styles/main.css';
import logoImg from './assets/Logo.svg';
import game1 from './assets/Game-1.jpg';
import game2 from './assets/Game-2.jpg';
import game3 from './assets/Game-3.jpg';
import game4 from './assets/Game-4.jpg';
import game5 from './assets/Game-5.jpg';
import game6 from './assets/Game-6.jpg';
import { MagnifyingGlassPlus } from 'phosphor-react';

const App: React.FC = () => {
  return (
    <div
      className='max-w-[1344px] mx-auto flex flex-col items-center m-20'
    >
      <img src={logoImg} alt=''/>
      <h1
        className="text-6xl text-white font-black mt-20"
        >
        Seu <span className='text-transparent bg-nlw-gradient bg-clip-text'>duo</span> está aqui.
      </h1>

      <div
        className='grid grid-cols-6 gap-6 mt-16'
      >
        <a href='' className='relative rounded-lg overflow-hidden'>
          <img src={game1} alt='' className='rounded-xl'/>
          <div className='w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0'>
            <strong className='font-bold text-white block'>League of Legends</strong>
            <span className='text-zinc-300 text-sm block'>4 anúncios</span>
          </div>
        </a>
        <a href='' className='relative rounded-lg overflow-hidden'>
          <img src={game2} alt='' className='rounded-xl'/>
          <div className='w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0'>
            <strong className='font-bold text-white block'>Dota 2</strong>
            <span className='text-zinc-300 text-sm block'>4 anúncios</span>
          </div>
        </a>
        <a href='' className='relative rounded-lg overflow-hidden'>
          <img src={game3} alt='' className='rounded-xl'/>
          <div className='w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0'>
            <strong className='font-bold text-white block'>Counter Strike</strong>
            <span className='text-zinc-300 text-sm block'>4 anúncios</span>
          </div>
        </a>
        <a href='' className='relative rounded-lg overflow-hidden'>
          <img src={game4} alt='' className='rounded-xl'/>
          <div className='w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0'>
            <strong className='font-bold text-white block'>Apex Legends</strong>
            <span className='text-zinc-300 text-sm block'>4 anúncios</span>
          </div>
        </a>
        <a href='' className='relative rounded-lg overflow-hidden'>
          <img src={game5} alt='' className='rounded-xl'/>
          <div className='w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0'>
            <strong className='font-bold text-white block'>Fortnite</strong>
            <span className='text-zinc-300 text-sm block'>4 anúncios</span>
          </div>
        </a>
        <a href='' className='relative rounded-lg overflow-hidden'>
          <img src={game6} alt='' className='rounded-xl'/>
          <div className='w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0'>
            <strong className='font-bold text-white block'>World of Warcraft</strong>
            <span className='text-zinc-300 text-sm block'>4 anúncios</span>
          </div>
        </a>
      </div>

      <div
        className='pt-2 mt-8 bg-nlw-gradient self-stretch rounded-lg overflow-hidden'
      >
        <div
          className='bg-[#2A2634] px-8 py-6 flex justify-between items-center'
        >
          <div>
            <strong className='font-black text-2xl text-white block'>Não encontrou seu duo?</strong>
            <span className='text-zinc-400 block'>Publique u  anúncio para encontrar novos players!</span>
          </div>

          <button className='py-3 px-4 bg-violet-500 text-white rounded hover:bg-violet-600 flex gap-3'>
            <MagnifyingGlassPlus size={24} />
            Publicar anúncio
          </button>
        </div>
      </div>
    </div>
  )
}

export default App;
