"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowRight, Phone, X } from "lucide-react";
import Logo from "@/components/ui/Logo";
import BookingModal from "@/components/ui/BookingModal";
import { homestayInfo, navLinks } from "@/data/homestayData";
import { cn, lockScroll } from "@/lib/utils";

/**
 * Header dạng "viên thuốc" kính mờ nổi cách mép (theo mẫu Bụt Studio):
 * - trên section tối (data-nav-theme="dark") là kính tối chữ trắng; còn lại là kính kem chữ xanh rừng.
 * - menu giữa có ô active (theo section đang xem), CTA kèm vòng tròn mũi tên.
 */
export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [onDark, setOnDark] = useState(true);
  const [active, setActive] = useState("");
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  // Dò section nằm sau header: phần tử data-nav-theme="dark" phủ qua tâm header → kính tối chữ trắng.
  // Đồng thời xác định section đang xem để tô sáng link menu.
  useEffect(() => {
    let raf = 0;
    const update = () => {
      raf = 0;
      const y = window.innerWidth >= 640 ? 52 : 44; // tâm header (top 20/12px + 64/2)
      let theme = "light";
      document.querySelectorAll("[data-nav-theme]").forEach((el) => {
        const r = el.getBoundingClientRect();
        if (r.top <= y && r.bottom >= y) theme = el.dataset.navTheme;
      });
      setOnDark(theme === "dark");

      let current = "";
      navLinks.forEach((l) => {
        const el = document.querySelector(l.href);
        if (el && el.getBoundingClientRect().top <= window.innerHeight * 0.4) current = l.href;
      });
      setActive(current);
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    const t = setTimeout(update, 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      clearTimeout(t);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  useEffect(() => {
    if (!open) return;
    lockScroll(true);
    return () => lockScroll(false);
  }, [open]);

  const dark = onDark && !open;

  return (
    <>
    <header className="fixed inset-x-3 top-3 z-50 sm:inset-x-5 sm:top-5">
      <div
        className={cn(
          "mx-auto flex h-[64px] w-full max-w-[1280px] items-center justify-between rounded-full border pr-2 pl-5 backdrop-blur-xl transition-all duration-500 sm:pl-7",
          dark
            ? "border-white/15 bg-forest-deep/40 text-white shadow-[0_10px_40px_-20px_rgba(0,0,0,0.7)]"
            : "border-white/70 bg-cream/80 text-forest shadow-[0_12px_40px_-24px_rgba(19,48,31,0.4)]"
        )}
      >
        <Link href="#hero" aria-label={homestayInfo.name} className="-my-2 flex shrink-0 items-center py-2">
          <Logo light={dark} />
        </Link>

        <nav aria-label="Điều hướng chính" className="hidden items-center gap-1 lg:flex">
          {navLinks.map((item) => {
            const isActive = active === item.href;
            return (
              <a
                key={item.href}
                href={item.href}
                className={cn(
                  "rounded-full px-4 py-2 text-[13px] font-medium tracking-wide transition-all duration-300",
                  isActive
                    ? dark
                      ? "bg-cream text-forest"
                      : "bg-forest text-cream"
                    : dark
                      ? "text-white/80 hover:bg-white/10 hover:text-white"
                      : "text-forest/75 hover:bg-forest/5 hover:text-forest"
                )}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        <div className="flex items-center gap-1.5 sm:gap-2">
          <a
            href={`tel:${homestayInfo.phone}`}
            aria-label={`Gọi ${homestayInfo.phoneDisplay}`}
            className={cn(
              "flex h-9 items-center gap-2 rounded-full px-3 text-[12px] font-semibold tracking-wide transition",
              dark ? "text-white/85 hover:bg-white/10 hover:text-white" : "text-forest/80 hover:bg-forest/5 hover:text-forest"
            )}
          >
            <Phone className="size-4" />
            <span className="hidden xl:inline">{homestayInfo.phoneDisplay}</span>
          </a>

          <button
            type="button"
            onClick={() => setIsBookingOpen(true)}
            className={cn(
              "group hidden cursor-pointer items-center gap-3 rounded-full py-1.5 pr-1.5 pl-5 text-[13px] font-semibold transition-all duration-300 md:inline-flex",
              dark ? "bg-gold text-forest-deep hover:bg-gold-light" : "bg-forest text-cream hover:bg-forest-soft"
            )}
          >
            Đặt phòng
            <span
              className={cn(
                "flex size-9 items-center justify-center rounded-full transition-transform duration-300 group-hover:translate-x-0.5",
                dark ? "bg-forest-deep text-honey" : "bg-gold text-forest-deep"
              )}
            >
              <ArrowRight className="size-4" />
            </span>
          </button>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Đóng menu" : "Mở menu"}
            aria-expanded={open}
            className={cn(
              "flex size-11 cursor-pointer items-center justify-center rounded-full transition lg:hidden",
              dark ? "text-white hover:bg-white/10" : "text-forest hover:bg-forest/5"
            )}
          >
            {open ? (
              <X className="size-5" strokeWidth={1.6} />
            ) : (
              <span className="flex flex-col gap-[5px]">
                <span className="block h-px w-6 bg-current" />
                <span className="block h-px w-4 bg-current" />
                <span className="block h-px w-6 bg-current" />
              </span>
            )}
          </button>
        </div>
      </div>

      {/* Menu mobile toàn màn hình */}
      <div
        className={cn(
          "fixed inset-0 -z-10 bg-cream transition-all duration-500 lg:hidden",
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        )}
      >
        <nav aria-label="Điều hướng mobile" className="flex h-full flex-col px-7 pt-28 pb-8">
          {navLinks.map((item, i) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className={cn(
                "flex items-center justify-between border-b border-forest/10 py-3.5 font-serif text-2xl text-forest transition-all duration-500",
                open ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
              )}
              style={{ transitionDelay: open ? `${120 + i * 50}ms` : "0ms" }}
            >
              {item.label}
              <ArrowRight className="size-5 text-ink-muted" strokeWidth={1.6} />
            </a>
          ))}
          <button
            type="button"
            onClick={() => {
              setOpen(false);
              setIsBookingOpen(true);
            }}
            className="mt-8 inline-flex cursor-pointer items-center justify-center gap-2 rounded-full bg-forest px-6 py-4 text-sm font-semibold text-cream"
          >
            Đặt phòng ngay <ArrowRight className="size-4" />
          </button>
          <p className="mt-auto text-center text-xs text-ink-muted">
            Hotline / Zalo:{" "}
            <a href={`tel:${homestayInfo.phone}`} className="-my-2 inline-block py-2 font-semibold text-forest">
              {homestayInfo.phoneDisplay}
            </a>
          </p>
        </nav>
      </div>
    </header>

    <BookingModal isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
    </>
  );
}
