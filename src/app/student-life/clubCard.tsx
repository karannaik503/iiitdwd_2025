'use client';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function ClubCard({
  title,
  description,
  imgSrc,
  btnText,
  link
}: {
  title: string;
  description: string;
  imgSrc: string;
  btnText: string;
  link: string;
}) {
  return (
    <div className="flex flex-col transform transition-all duration-700 border overflow-clip rounded-lg ease-out hover:translate-y-[-8px]">
      <div className="relative overflow-hidden h-48 group">
        <img
          src={imgSrc}
          alt={title}
          className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-300"></div>
      </div>
      <div className="p-4 space-y-2 flex-1 flex flex-col justify-between">
        <>
          <h2 className="text-3xl font-bold text-main">{title}</h2>
          <p className="text-black">{description}</p>
        </>
        <Link
          href={link}
          className="group bg-main text-amber-50 px-6 py-2 rounded-full flex items-center gap-2 transition-all duration-300"
        >
          {btnText}
          <ArrowRight className="h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </div>
  );
}
