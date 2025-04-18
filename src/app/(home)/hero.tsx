'use client';
import { Marquee } from '@/components/ui/marquee';
import { ArrowRightIcon } from 'lucide-react';
import Image from 'next/image';

export default function LandingSection({ data }: { data: string[] }) {
  const half = Math.ceil(data.length / 2);
  const firstHalf = data.slice(0, half);
  const secondHalf = data.slice(half);

  return (
    <div className="flex relative flex-col items-center">
      <div className="flex-1 flex flex-col w-full">
        <div className="relative flex-1 flex w-full flex-col items-center justify-center overflow-hidden">
          <Marquee className="!mt-0">
            {firstHalf?.map((src, index) => (
              <Image
                key={index}
                src={`https://iiitdwd.ac.in${src}`}
                alt={`Image ${index + 1}`}
                className="h-[calc(20vw-1.5px)] w-[calc(33vw-2.67px)] md:h-36 md:w-64 shadow"
                height={0}
                width={0}
                sizes={'100%'}
              />
            ))}
          </Marquee>
          <Marquee className="!mt-0 pr-[calc(33vw-2.67px)] md:pr-64">
            {secondHalf.map((src, index) => (
              <Image
                key={index}
                src={`https://iiitdwd.ac.in${src}`}
                alt={`Image ${index + 1}`}
                className="h-[calc(20vw-1.5px)] w-[calc(33vw-2.67px)] md:h-36 md:w-64 shadow"
                height={0}
                width={0}
                sizes={'100%'}
              />
            ))}
          </Marquee>
        </div>
        <div className=" px-5 md:px-13 py-12 font-grotesk">
          <div className="mx-auto max-w-6xl w-full">
            <div className="text-[clamp(2rem,10vw,3.3rem)] uppercase text-center leading-[1.2] font-bold">
              <div>Creating thinkers and leaders</div>
              <div>in technology to positively</div>
              <div>impact society</div>
            </div>
          </div>
        </div>
      </div>
      <div
        id="quick-links"
        className="w-fit uppercase my-10 flex max-md:flex-col max-md:w-full items-center gap-4 py-4"
      >
        <div className="hidden text-sm md:block whitespace-nowrap text-gray-500">
          Quick Links:
        </div>
        <div className="flex gap-1 md:gap-4 max-md:flex-col w-full max-md:max-w-[260px] items-center">
          <button className="flex gap-4 uppercase max-md:w-full max-md:justify-between text-sm text-bold text-amber-50 hover:bg-primary transition-colors bg-main rounded px-4 md:px-6 py-2 items-center">
            Academics
            <ArrowRightIcon size={18} />
          </button>
          <button className="flex gap-4 uppercase max-md:w-full max-md:justify-between text-sm text-bold text-amber-50 hover:bg-primary transition-colors bg-main rounded px-4 md:px-6 py-2 items-center">
            Admissions
            <ArrowRightIcon size={18} />
          </button>
          <button className="flex gap-4 uppercase max-md:w-full max-md:justify-between text-sm text-bold text-amber-50 hover:bg-primary transition-colors bg-main rounded px-4 md:px-6 py-2 items-center">
            Campus
            <ArrowRightIcon size={18} />
          </button>
          <button className="flex gap-4 uppercase max-md:w-full max-md:justify-between text-sm text-bold text-amber-50 hover:bg-primary transition-colors bg-main rounded px-4 md:px-6 py-2 items-center">
            Culture
            <ArrowRightIcon size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}
