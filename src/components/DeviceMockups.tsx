"use client";
import Image from "next/image";

type MockupProps = {
  src: string;
  alt: string;
  className?: string;
};

export function LaptopMockup({ src, alt, className }: MockupProps) {
  return (
    <div
      className={`relative w-full aspect-[16/10] rounded-2xl overflow-hidden border border-white/10 bg-white/5 ${className}`}
    >
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover rounded-2xl"
        priority
      />
    </div>
  );
}

export function PhoneMockup({ src, alt, className }: MockupProps) {
  return (
    <div
      className={`relative rounded-[2.5rem] border-[6px] border-gray-800 bg-black overflow-hidden aspect-[9/18] shadow-xl ${className}`}
    >
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover rounded-[2.3rem]"
        priority
      />
    </div>
  );
}
