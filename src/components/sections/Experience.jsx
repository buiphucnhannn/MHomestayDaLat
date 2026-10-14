"use client";

import Image from "next/image";
import { daySchedule, photos } from "@/data/homestayData";
import { BotanicalBranch } from "@/components/ui/Decorations";

export default function Experience() {
  return (
    <section
      id="experience"
      data-nav-theme="dark"
      className="relative w-full bg-[#0D2B22] text-white pt-16 md:pt-24 lg:pt-28 pb-20 md:pb-28 lg:pb-32 overflow-hidden"
    >
      {/* Đà Lạt wild-sunflower hills under a translucent forest-green veil: the photo stays visible, light text reads directly on it */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <Image
          src={photos.sunflowerHill}
          alt=""
          fill
          // Large backdrop: it becomes the LCP whenever the page opens on this part (e.g. a #anchor link)
          loading="eager"
          sizes="100vw"
          className="object-cover object-[center_45%]"
        />
        {/* Even green veil: tones down the bright yellow dots */}
        <div className="absolute inset-0 bg-[#0A2219]/45" />
        {/* Deeper behind the heading (left), clear over the photo cards (right) */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#071d16]/75 via-[#071d16]/30 to-transparent" />
        {/* Deeper under the timeline captions */}
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#071d16]/70 via-[#071d16]/25 to-transparent" />
      </div>

      {/* Top arc, parallel to the bottom one: the painting rises evenly toward the centre */}
      <svg
        viewBox="0 0 1440 90"
        preserveAspectRatio="none"
        aria-hidden="true"
        className="absolute top-0 left-0 w-full h-12 md:h-16 lg:h-20 pointer-events-none z-[1]"
      >
        <path d="M0 0 H1440 V68 Q720 -22 0 68 Z" fill="#F5EFEB" />
      </svg>

      {/* Leaf accent drifting off the right edge */}
      <div className="hidden md:block absolute top-6 -right-10 w-32 h-44 opacity-25 pointer-events-none z-10 rotate-[24deg]">
        <BotanicalBranch flip color="#D7A75C" />
      </div>

      {/* Symmetric arc into the Location section's cream background */}
      <svg
        viewBox="0 0 1440 90"
        preserveAspectRatio="none"
        aria-hidden="true"
        className="absolute bottom-0 left-0 w-full h-12 md:h-16 lg:h-20 pointer-events-none z-10"
      >
        <path d="M0 90 V64 Q720 -20 1440 64 V90 Z" fill="#FAF7F2" />
      </svg>

      <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,2.15fr)] gap-10 lg:gap-12 xl:gap-16 items-center">
          {/* Left: heading */}
          <div data-reveal="exp-head">
            <span className="inline-block text-[11px] sm:text-xs uppercase tracking-[0.3em] font-bold text-[#EEC57E] border-b border-[#EEC57E]/50 pb-1 text-halo">
              Trải nghiệm
            </span>

            <h2 className="mt-4 font-serif font-semibold text-[#FFFDF8] text-halo-strong text-[30px] sm:text-[40px] lg:text-[32px] xl:text-[40px] leading-[1.18] text-balance tracking-[-0.01em]">
              <span className="block">Một ngày thật chậm</span>
              <span className="block font-script font-semibold text-[#F2CB82] text-[1.12em]">tại Mhome</span>
            </h2>

            <p className="text-justify mt-4 text-white/90 text-halo text-[14px] sm:text-[15px] leading-[1.75] max-w-[420px]">
              Không chỉ là nơi lưu trú, Mhome còn là điểm khởi đầu hoàn hảo cho hành trình khám phá và cảm nhận Đà Lạt
              theo cách riêng của bạn.
            </p>
          </div>

          {/* Right: arch cards on a timeline */}
          <ol className="grid grid-cols-2 sm:grid-cols-4 gap-x-4 sm:gap-x-5 xl:gap-x-7 gap-y-10">
            {daySchedule.map((item, idx) => (
              <li key={item.time} data-reveal="exp-card" data-reveal-delay={idx * 160} className="group flex flex-col">
                {/* Arch-topped photo with enhanced luxury shadow */}
                <div className="relative aspect-[4/5] w-full rounded-t-full rounded-b-[18px] overflow-hidden border-4 border-white bg-stone-200 shadow-[0_18px_34px_-14px_rgba(13,43,34,0.4)] backdrop-blur-sm">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 16vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>

                {/* Timeline: line segments join across the column gap; dot marks each moment */}
                <div className="relative h-4 mt-5 mb-4 flex items-center justify-center" aria-hidden="true">
                  <span
                    className={`absolute top-1/2 -translate-y-1/2 h-[2px] rounded-full bg-[#F1D9A6]/70 shadow-[0_1px_4px_rgba(4,18,13,0.5)] left-[-10px] right-[-10px] xl:left-[-14px] xl:right-[-14px] ${
                      idx === 0 ? "!left-1/2" : ""
                    } ${idx === daySchedule.length - 1 ? "!right-1/2" : ""} ${
                      idx === 1 ? "max-sm:!right-1/2" : ""
                    } ${idx === 2 ? "max-sm:!left-1/2" : ""}`}
                  />
                  <span className="relative w-3.5 h-3.5 rounded-full bg-[#FAF7F2] border-2 border-[#C89B53] shadow-[0_1px_6px_rgba(13,43,34,0.4)] transition-transform duration-300 group-hover:scale-125 group-hover:bg-[#C89B53]" />
                </div>

                <div className="text-center">
                  <time className="block font-bold text-[15px] text-[#F2CB82] text-halo tabular-nums tracking-wide">{item.time}</time>
                  <h3 className="mt-1 font-serif font-semibold text-[15px] sm:text-[16px] text-[#FFFDF8] text-halo leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-justify [text-align-last:center] mt-1.5 text-[13px] text-white/85 text-halo leading-[1.6]">{item.desc}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
