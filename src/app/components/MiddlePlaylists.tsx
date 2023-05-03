import Image from 'next/image'

interface Props {
  name: string;
  desc: string;
}

export const MiddlePlaylist = (props: Props) => {
  return (
    <a href="" className="bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10">
      <Image src="/secondAlbum.jpeg" className='w-full' width={120} height={120} alt="Capa da música 'I hate the new Kanye'" />
      <strong>{props.name}</strong>
      <span className='text-sm text-zinc-500'>{props.desc}</span>
    </a>
  )
}