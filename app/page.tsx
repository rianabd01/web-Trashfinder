import Image from "next/image";
import Link from "next/link";
import NavigationWrapper from "./ui/navigation/nav-wrapper";
import SwiperCards from "./ui/swiper/swiper-cards";

export default function Home() {
  return (
    <>
      <main className="flex min-h-screen text-black flex-col items-center justify-between container lg:px-20 ">
        <div className="h-60 w-full">
          <div className="hero w-full flex flex-col md:flex-row justify-evenly items-center">
            <h1 className="flex flex-[1] font-extrabold text-5xl md:text-8xl text-center md:text-left">
              CleanUp is Lifestyle!!!
            </h1>

            <Image
              src="/hero.png"
              alt="Hero Image"
              width={500}
              height={500}
              className="flex flex-[1] mx-auto md:mx-0"
            />
          </div>

          {/* Contents */}

          <div className="flex flex-wrap gap-5 w-full justify-center mt-5 text-white">
            <Link
              key={"1"}
              href={"#"}
              className="block px-5 py-2 bg-gray-600 rounded-3xl"
            >
              Unggah
            </Link>
            <Link
              key={"2"}
              href="#"
              className="block px-5 py-2 bg-gray-600 rounded-3xl"
            >
              Bersihin
            </Link>
            <Link
              key={"3"}
              href="#"
              className="block px-5 py-2 bg-gray-600 rounded-3xl"
            >
              Lihat apa dampak kita
            </Link>
          </div>

          <div className="flex flex-wrap mt-10">
            <div className="flex flex-row md:flex-col gap-2 flex-[1]">
              <input type="file" />
              <input type="file" />
              <input type="file" />
            </div>
            <div className="flex-[2]">
              <form action="" className="flex flex-col flex-[2] bg-slate-300">
                <label htmlFor="">Label</label>
                <input type="text" className="border-solid border-black" />
                <label htmlFor="">Label</label>
                <textarea name="" id=""></textarea>
                <label htmlFor="">Label</label>
                <input type="text" />
                <label htmlFor="">Label</label>
                <input type="text" />
              </form>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
