"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function PreviousWorkPage() {
  const eventImages = [
    "/images/events/Copy_of_STB_Hangout_2.jpg",
    "/images/events/Fynn_Wilson_M2M_12_Hours_at_Camp_2020.jpg",
    "/images/events/Fynn_Wilson_for_M2M_On_the_Traxx_2-7.jpg",
    "/images/events/Copy_of_STB_Warm-up.jpg",
    "/images/events/Copy_of_Portland-M2M_Stage_Day.JPG",
    "/images/events/Copy_of_STB_Warehouse_EL_Wire_2.jpg",
    "/images/events/Copy_of_WhatsApp_Image_2022-11-07_at_16.41.31.jpeg",
    "/images/events/Fynn_Wilson_for_M2M_On_the_Traxx_2-27.jpg",
  ];

  // Event descriptions
  const eventDescriptions = [
    {
      title: "STB Hangout Session",
      description:
        "Friends and artists celebrating together in a casual setting at one of our community gatherings.",
    },
    {
      title: "12 Hours at Camp (2020)",
      description:
        "Ethereal night scene with neon lighting and a geometric installation illuminating partygoers at our outdoor camp event.",
    },
    {
      title: "On the Traxx (Black & White)",
      description:
        "Intimate black and white capture of attendees enjoying the atmosphere at our On the Traxx event series.",
    },
    {
      title: "STB Venue Setup",
      description:
        "Vibrant red and purple lighting with industrial trussing and lighting equipment creating a captivating atmosphere for our event.",
    },
    {
      title: "Portland Stage Installation",
      description:
        "Daytime gathering at our forest installation, featuring a geometric wooden structure with audio equipment for an immersive experience.",
    },
    {
      title: "Warehouse Light Installation",
      description:
        "Stunning geometric light installation using EL wire, creating an immersive space with purple and blue hues at our warehouse event.",
    },
    {
      title: "Visual Projections (2022)",
      description:
        "Striking red and black geometric projections with the MOUTH2MOUTH logo, creating a bold visual identity for our event space.",
    },
    {
      title: "On the Traxx Party",
      description:
        "Energetic scene bathed in purple and red neon lights, showcasing the vibrant community at our secret location event.",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [api, setApi] = useState<CarouselApi>();

  // Update current index when the carousel changes
  useEffect(() => {
    if (!api) {
      return;
    }

    const onSelect = () => {
      setCurrentIndex(api.selectedScrollSnap());
    };

    api.on("select", onSelect);

    // Cleanup function
    return () => {
      api.off("select", onSelect);
    };
  }, [api]);

  // Custom navigation functions
  const goToPrevious = () => {
    api?.scrollPrev();
  };

  const goToNext = () => {
    api?.scrollNext();
  };

  return (
    <div className="relative min-h-screen w-full bg-black">
      {/* Desktop Title - hidden on mobile */}
      <div className="hidden md:block absolute top-20 left-20 z-20">
        <h1
          className="text-[60px] uppercase text-[#bac8c4] font-sailors tracking-wider"
          style={{ fontFamily: "var(--font-sailors)" }}
        >
          PREVIOUS WORKS
        </h1>
      </div>

      {/* Mobile Title - visible only on mobile */}
      <div className="md:hidden absolute top-10 left-6 z-20">
        <h1
          className="text-[32px] uppercase text-[#bac8c4] font-sailors tracking-wider"
          style={{ fontFamily: "var(--font-sailors)" }}
        >
          PREVIOUS WORKS
        </h1>
      </div>

      {/* Mobile Image caption/description - visible only on mobile, positioned above carousel */}
      <div className="md:hidden absolute top-28 left-0 right-0 px-6 z-20">
        <div className="bg-black/60 p-4 rounded">
          <h3 className="text-[#bac8c4] text-xl font-bold mb-2 font-sailors">
            {eventDescriptions[currentIndex].title}
          </h3>
          <p className="text-[#bac8c4]/90 text-base">
            {eventDescriptions[currentIndex].description}
          </p>
        </div>
      </div>

      {/* Fixed height container for carousel */}
      <div className="absolute inset-0 bottom-10 flex items-center justify-center">
        <div className="w-full h-full px-4">
          <Carousel
            className="w-full h-full"
            setApi={setApi}
            opts={{
              align: "center",
              loop: true,
            }}
          >
            <CarouselContent>
              {eventImages.map((imgSrc, index) => (
                <CarouselItem key={index}>
                  <div className="h-[100vh] w-full relative">
                    <Image
                      src={imgSrc}
                      alt={`Event ${index + 1}`}
                      fill
                      className="object-contain"
                      sizes="(max-width: 768px) 100vw, 90vw"
                      priority={index === 0}
                      loading={index === 0 ? "eager" : "lazy"}
                      quality={75}
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>

      {/* Desktop Navigation arrows - hidden on mobile */}
      <button
        className="hidden md:block absolute top-1/2 left-4 transform -translate-y-1/2 bg-black/40 hover:bg-black/60 text-[#bac8c4] p-4 rounded-full z-20 focus:outline-none transition-colors"
        onClick={goToPrevious}
        aria-label="Previous image"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="15 18 9 12 15 6"></polyline>
        </svg>
      </button>

      <button
        className="hidden md:block absolute top-1/2 right-4 transform -translate-y-1/2 bg-black/40 hover:bg-black/60 text-[#bac8c4] p-4 rounded-full z-20 focus:outline-none transition-colors"
        onClick={goToNext}
        aria-label="Next image"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="9 18 15 12 9 6"></polyline>
        </svg>
      </button>

      {/* Mobile Navigation arrows - visible only on mobile */}
      <button
        className="md:hidden absolute top-1/2 left-2 transform -translate-y-1/2 bg-black/40 hover:bg-black/60 text-[#bac8c4] p-2 rounded-full z-20 focus:outline-none transition-colors"
        onClick={goToPrevious}
        aria-label="Previous image"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="15 18 9 12 15 6"></polyline>
        </svg>
      </button>

      <button
        className="md:hidden absolute top-1/2 right-2 transform -translate-y-1/2 bg-black/40 hover:bg-black/60 text-[#bac8c4] p-2 rounded-full z-20 focus:outline-none transition-colors"
        onClick={goToNext}
        aria-label="Next image"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="9 18 15 12 9 6"></polyline>
        </svg>
      </button>

      {/* Desktop Image counter - hidden on mobile */}
      <div className="hidden md:block absolute bottom-10 left-1/2 transform -translate-x-1/2 bg-black/50 text-[#bac8c4] px-6 py-3 rounded-full z-20 font-sailors text-lg">
        {currentIndex + 1} / {eventImages.length}
      </div>

      {/* Mobile Image counter - visible only on mobile, positioned above navigation bar */}
      <div className="md:hidden absolute bottom-24 left-1/2 transform -translate-x-1/2 bg-black/50 text-[#bac8c4] px-4 py-2 rounded-full z-20 font-sailors text-base">
        {currentIndex + 1} / {eventImages.length}
      </div>

      {/* Desktop Image caption/description - hidden on mobile */}
      <div className="hidden md:block absolute bottom-24 left-6 z-20 max-w-lg">
        <div className="bg-black/60 p-5 rounded">
          <h3 className="text-[#bac8c4] text-2xl font-bold mb-2 font-sailors">
            {eventDescriptions[currentIndex].title}
          </h3>
          <p className="text-[#bac8c4]/90 text-lg">
            {eventDescriptions[currentIndex].description}
          </p>
        </div>
      </div>
    </div>
  );
}
