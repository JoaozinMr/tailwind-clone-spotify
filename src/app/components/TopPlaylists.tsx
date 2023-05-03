import Image from 'next/image'
import { Play } from 'lucide-react'

export const TopPlaylist = () => {
  return (
    <a href='#' className='group bg-white/5 rounded flex items-center gap-4 overflow-hidden hover:bg-white/20 transition-colors'>
      <Image src="/capaAlbum.jpg" width={104} height={104} alt="Capa do álbum 'Fear of the Dark' do Iron Maiden" />
      <strong>Fear of the Dark</strong>

      <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible'>
        <Play />
      </button>
    </a>
  )
}