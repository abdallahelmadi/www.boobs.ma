import Image from "next/image"
import Link from "next/link"
import { Canva } from "@/components/canva"

export default function Home(): React.ReactNode {
  return (
    <main className="flex flex-col pt-12">

      <Canva />

      <Link
        href="/"
        className="px-6 md:px-12 max-w-max"
      >
        <Image
          src="/boobs.svg"
          alt="Boobslogo"
          width={80}
          height={64}
          draggable={false}
          loading="eager"
          className="w-20 h-16 select-none"
        />
      </Link>

      <h1 className="text-5xl font-medium mt-8 -ml-1 px-6 md:px-12">
        BOOBS MAKE THINKS GROW
      </h1>

      <p className="text-[16px] max-w-175 tracking-tighter leading-none px-6 md:px-12">
        We are here to do the same for your business.
        We are a team of passionate designers and developers who love
        to create beautiful and functional applications, and solve problems with code.
      </p>

      <button
        className="bg-black text-[#DE2670] mt-6 w-48 h-12 border border-gray-800
        font-medium cursor-pointer transition-all duration-300 ease-in-out
        hover:translate-x-2 hover:translate-y-2 select-none ml-6 md:ml-12"
      >
        Contact us
      </button>

      <h2 className="max-w-175 tracking-tighter leading-none mt-16 text-[#4D4D4D] px-6 md:px-12">
        <b className="text-black text-[19px]"> Founder&apos;s Aspiration: </b> "I want to make the world a better place,
        one line of code at a time."
      </h2>

      <div className="mt-6 select-none relative h-145 overflow-hidden">

        <Image
          src="/bob-scaled.webp"
          alt="bob-scaled"
          width={310}
          height={387}
          draggable={false}
          loading="eager"
          className="w-77.5 h-96.75 absolute top-8 left-5 z-3 rotate-10"
        />

        <Image
          src="/intro.webp"
          alt="intro"
          width={310}
          height={387}
          draggable={false}
          loading="eager"
          className="w-77.5 h-96.75 absolute top-8 left-74 z-2 -rotate-10"
        />

        <Image
          src="/mirr.webp"
          alt="mirr"
          width={310}
          height={387}
          draggable={false}
          loading="eager"
          className="w-77.5 h-96.75 absolute top-18 left-124 z-1 rotate-20"
        />

      </div>

      <footer className="px-6 md:px-12 border-t border-gray-200 flex justify-between items-center py-4">

        <span className="text-[11px] text-gray-500">
          © 2026 boob.ma. all rights can be reserved.
        </span>

      </footer>

    </main>
  )
}