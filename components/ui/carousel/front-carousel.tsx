import React from "react";
import Image from "next/image";

import NavigationWrapper from "@/components/ui/navigation/nav-wrapper";
import SwiperCards from "@/components/ui/swiper/swiper-cards";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { IoLocationSharp } from "react-icons/io5";

interface frontCarousellProps {
  data: {
    map?: any;
    id: string;
    title: string;
    location: string;
    image: string;
  }[];
}

export default function FrontCarousel({ data }: frontCarousellProps) {
  return (
    <Carousel className="w-full my-5">
      <CarouselContent className="-ml-4">
        {data.map((item) => (
          <CarouselItem
            key={item.id}
            className="pl-1 md:pl-3 basis-1/2 md:basis-1/4 lg:basis-1/5 "
          >
            <div className="p-1">
              <Card
                className="overflow-hidden cursor-pointer"
                onClick={() => console.log(item.id, "is clicked")}
              >
                <Image
                  src={item.image}
                  unoptimized
                  width={500}
                  height={500}
                  alt="Project 1"
                  className="w-full object-cover object-center"
                />
                <CardContent className="space-y-1 p-3">
                  <div className="inline-flex items-center gap-1">
                    <IoLocationSharp className="w-3 h-3" />
                    <span className="text-sm text-muted-foreground line-clamp-2">
                      {item.location}
                    </span>
                  </div>
                  <h3 className="text-sm md:text-base line-clamp-2 h-10 md:h-12">
                    {item.title}
                  </h3>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
