import { Home as HomeIcon, Search, ListMusic } from 'lucide-react'

export const SideBar = () => {
  return (
    <aside className="w-72 bg-zinc-950 p-6">
      <div className='flex items-center gap-2'>
        <div className='w-3 h-3 bg-red-500 rounded-full'></div>
        <div className='w-3 h-3 bg-yellow-500 rounded-full'></div>
        <div className='w-3 h-3 bg-green-500 rounded-full'></div>
      </div>

      <nav className='space-y-5 mt-10'>
        <a href="" className='flex items-center gap-3 text-sm font-semibold text-zinc-200'>
          <HomeIcon />
          Início
        </a>
        <a href="" className='flex items-center gap-3 text-sm font-semibold text-zinc-200'>
          <Search />
          Buscar
        </a>
        <a href="" className='flex items-center gap-3 text-sm font-semibold text-zinc-200'>
          <ListMusic />
          Sua Biblioteca
        </a>
      </nav>

      <nav className='mt-6 pt-6 border-t border-zinc-800 flex flex-col gap-2'>
        <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'>MPB</a>
        <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'>Rock</a>
        <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'>Clássicas</a>
        <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'>Samba</a>
        <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'>Pagode</a>
      </nav>

    </aside>
  )
}