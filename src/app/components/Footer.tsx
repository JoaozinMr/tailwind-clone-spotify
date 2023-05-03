import { ListVideo, Shuffle, SkipBack, Play, SkipForward, Repeat, Mic2, Laptop2, Volume1, Maximize2 } from 'lucide-react'
import Image from 'next/image'

export const Footer = () => {
  return (
    <footer className="bg-zinc-900 border-t border-zinc-700 px-6 py-4 flex items-center justify-between">
      <div className='flex items-center gap-3'>
        <Image src="/capaAlbum.jpg" width={60} height={60} alt="Capa do álbum 'Fear of the Dark' do Iron Maiden" />
        <div className='flex flex-col'>
          <strong className='font-normal'>Be Quick Or Be Dead</strong>
          <span className='text-xs text-zinc-400'>Iron Maiden</span>
        </div>
      </div>
      <div className='flex flex-col items-center gap-2'>
        <div className='flex items-center gap-6'>
          <Shuffle size={20} className='text-zinc-200' />
          <SkipBack size={20} className='text-zinc-200' />

          <button className='w-10 h-10 flex items-center justify-center pl-1 rounded-full bg-white text-black'>
            <Play />
          </button>

          <SkipForward size={20} className='text-zinc-200' />
          <Repeat size={20} className='text-zinc-200' />
        </div>
        <div className='flex items-center gap-2'>
          <span className='text-xs text-zinc-400'>0:47</span>
          <div className='h-1 rounded-full w-96 bg-zinc-600'>
            <div className="w-32 h-1 bg-zinc-200 rounded-full"></div>
          </div>
          <span className='text-xs text-zinc-400'>3:24</span>
        </div>
      </div>
      <div className='flex items-center gap-4'>
        <Mic2 size={20} />
        <ListVideo size={20} />
        <Laptop2 size={20} />
        <div className='flex items-center gap-2'>
          <Volume1 size={20} />
          <div className='w-20 h-1 bg-zinc-600 rounded-full'>
            <div className='w-8 h-1 bg-zinc-200 rounded-full'></div>
          </div>
        </div>
        <Maximize2 size={20} />
      </div>
    </footer>
  )
}