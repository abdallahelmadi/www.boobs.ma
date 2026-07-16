import Image from "next/image"

export default function Home(): React.ReactNode {
  return (
    <main className="flex flex-col p-12">

      <Image
        src="/boobs.svg"
        alt="Boobslogo"
        width={160}
        height={89}
        draggable={false}
        loading="eager"
        className="w-40 h-22.25"
      />

      <h1 className="text-5xl font-medium mt-4 -ml-1">
        BOOBS MAKE THINKS GROW
      </h1>

      <h2 className="text-[16px] max-w-175 tracking-tighter leading-none">
        We are here to do the same for your business.
        We are a team of passionate designers and developers who love
        to create beautiful and functional applications, and solve problems with code.
      </h2>

      <button
        className="bg-black text-[#DE2670] mt-6 w-48 h-12 border border-gray-800
        font-medium cursor-pointer transition-all duration-300 ease-in-out
        hover:translate-x-2 hover:translate-y-2 select-none"
      >
        Contact us
      </button>

    </main>
  )
}