"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import UploadImage from "../components/ui/upload-image";
import trashData from "@/app/api/trashdata.json";
import { Button } from "@/components/ui/button";

import FrontCarousel from "@/components/ui/carousel/front-carousel";

export default function Home() {
  const { trash } = trashData;

  function dottedString(string: string, maxCharacters: number = 10) {
    if (string.length > maxCharacters) {
      return `${string.slice(0, maxCharacters)}...`;
    }
    return string;
  }

  return (
    <>
      <main className="flex min-h-screen text-black flex-col items-center justify-between container lg:px-20 ">
        <div className="h-60 w-full">
          <div className="w-full flex flex-row justify-between items-center">
            <div className="text-5xl font-bold basis-1/2">
              <h1>KOLABORASI</h1>
              <h1>UNTUK</h1>
              <h1>LINGKUNGAN</h1>
            </div>

            <Image
              src="/hero.png"
              alt="Hero Image"
              width={500}
              height={500}
              className="basis-1/2"
            />
          </div>

          <div className="my-5">
            <h3 className="text-xl font-bold">
              Sampah yang dapat kamu bersihkan
            </h3>
            <FrontCarousel data={trash} />
            <Button variant="default">Lihat semuanya</Button>
          </div>

          <div className="my-5">
            <h3 className="text-xl font-bold">Sampah telah bersih</h3>
            <FrontCarousel data={trash} />
            <Button variant="default">Lihat semuanya</Button>
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
              <UploadImage />
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
