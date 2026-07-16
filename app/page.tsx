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

      <h1 className="text-5xl font-medium mt-4">
        BOOBS MAKE THINKS GROW
      </h1>

      <h2 className="text-[17px] max-w-175 tracking-tighter">
        We are here to do the same for your business.
        We are a team of passionate designers and developers who love to create beautiful and functional applications, and solve problems with code.
      </h2>

    </main>
  )
}