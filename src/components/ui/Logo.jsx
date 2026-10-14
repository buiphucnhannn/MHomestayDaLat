import Image from "next/image";
import { photos } from "@/data/homestayData";

/**
 * Logo cho header: logo tròn gốc của Mhome + tên thương hiệu.
 * light=true: chữ trắng để đặt trên nền tối.
 */
export default function Logo({ light = false }) {
  return (
    <span className="flex items-center gap-2.5">
      <span className="relative w-10 h-10 rounded-full overflow-hidden border border-[#D7A75C]/60 shrink-0 bg-white">
        <Image src={photos.logo} alt="" fill sizes="40px" className="object-cover" priority />
      </span>
      <span className="leading-none">
        <span
          className={`block font-serif text-[15px] sm:text-base font-bold tracking-[0.12em] transition-colors duration-500 ${
            light ? "text-white" : "text-[#0D2B22]"
          }`}
        >
          MHOME
        </span>
        <span
          className={`block mt-1 text-[9px] sm:text-[10px] tracking-[0.3em] uppercase transition-colors duration-500 ${
            light ? "text-[#F1D9A6]" : "text-[#C89B53]"
          }`}
        >
          Homestay · Đà Lạt
        </span>
      </span>
    </span>
  );
}
