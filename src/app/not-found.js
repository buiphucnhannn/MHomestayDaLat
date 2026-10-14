import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { photos } from "@/data/homestayData";

export const metadata = {
  title: "Không tìm thấy trang | Mhome Homestay Đà Lạt",
};

export default function NotFound() {
  return (
    <section
      id="hero"
      data-nav-theme="dark"
      className="relative w-full min-h-[100dvh] flex items-center justify-center overflow-hidden bg-[#09231B] text-white text-center"
    >
      <Image src={photos.door} alt="" fill sizes="100vw" className="object-cover" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_70%_at_50%_50%,rgba(9,35,27,0.82),rgba(9,35,27,0.55)_70%,rgba(9,35,27,0.35))]" />
      <div className="relative z-10 px-5 space-y-5">
        <p className="font-serif text-7xl sm:text-8xl font-bold text-[#D7A75C]">404</p>
        <h1 className="text-halo-strong font-serif text-3xl sm:text-5xl font-bold text-[#FFFDF8]">
          Cánh cửa này
          <span className="block font-script text-[#F2CB82] text-[1.12em] font-semibold">chưa dẫn tới đâu cả</span>
        </h1>
        <p className="text-halo text-white/90 text-sm sm:text-base">Trang bạn tìm không tồn tại. Quay lại nhà Mhome nhé!</p>
        <Link
          href="/"
          className="group inline-flex items-center gap-3 px-8 py-3.5 bg-[#D7A75C] hover:bg-[#c59648] text-[#0D2B22] font-bold text-xs sm:text-sm uppercase tracking-wider rounded-full shadow-[0_10px_30px_-6px_rgba(4,18,13,0.7)] transition-all hover:-translate-y-0.5"
        >
          Về trang chủ
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </section>
  );
}
