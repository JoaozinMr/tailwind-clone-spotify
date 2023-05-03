import { ChevronLeft, ChevronRight } from 'lucide-react'
import { TopPlaylist } from './components/TopPlaylists'
import { MiddlePlaylist } from './components/MiddlePlaylists'
import { SideBar } from './components/SideBar'
import { Footer } from './components/footer'

export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-1">
        <SideBar />
        <main className="flex-1 p-6">
          <div className="flex items-center gap-4">
            <button className='bg-black/40 rounded-full p-1'>
              <ChevronLeft />
            </button>
            <button className='bg-black/30 rounded-full p-1 text-zinc-500'>
              <ChevronRight />
            </button>
          </div>

          <h1 className='font-semibold text-3xl mt-10'>Boa Noite</h1>

          <div className='grid grid-cols-3 gap-4 mt-4'>
            <TopPlaylist />
            <TopPlaylist />
            <TopPlaylist />
            <TopPlaylist />
            <TopPlaylist />
            <TopPlaylist />
          </div>

          <h2 className='font-semibold text-2xl mt-10'>Feito para João Gabriel</h2>

          <div className='grid grid-cols-8 gap-4 mt-4'>
            <MiddlePlaylist name='Daily Mix 1' desc='Imagine Dragons, Ed Sheeran, Sam Smith e mais' />
            <MiddlePlaylist name='Daily Mix 2' desc='Alvaro Soler, Yandel, Morat e mais' />
            <MiddlePlaylist name='Mix anos 2000' desc='Jason Derulo, Kanye West, Coldplay e mais' />
            <MiddlePlaylist name='Mix anos 2010' desc='Lil Uzi Vert, Wiz Khalifa, OneRepublic e mais' />
            <MiddlePlaylist name='Mix relax' desc='Ludovico Einaudi, JVKE, Rema e mais' />
          </div>

        </main>
      </div>
      <Footer />
    </div>
  )
}
