import { Playfair_Display, Plus_Jakarta_Sans, Dancing_Script } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SmoothScroll from "@/components/fx/SmoothScroll";
import { siteConfig } from "@/data/site";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin", "vietnamese"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin", "vietnamese"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const dancingScript = Dancing_Script({
  variable: "--font-dancing",
  subsets: ["latin", "vietnamese"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata = {
  metadataBase: new URL(siteConfig.url),
  title: "Mhome Homestay Đà Lạt | Một mái nhà nhỏ giữa lòng Đà Lạt",
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  alternates: { canonical: "/" },
  openGraph: {
    title: "Mhome Homestay Đà Lạt — Một mái nhà nhỏ giữa lòng Đà Lạt",
    description: siteConfig.description,
    type: "website",
    locale: "vi_VN",
    url: "/",
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: "Mhome Homestay Đà Lạt",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
  },
};

export const viewport = {
  themeColor: "#0D2B22",
};

export default function RootLayout({ children }) {
  return (
    // suppressHydrationWarning: the head script below adds reveal classes to <html> before hydration
    <html
      lang="vi"
      suppressHydrationWarning
      className={`${playfair.variable} ${jakarta.variable} ${dancingScript.variable}`}
    >
      <head>
        {/* Hide [data-reveal] elements before first paint (no flash); if the app never starts, show everything */}
        <script
          dangerouslySetInnerHTML={{
            __html:
              "(function(){var d=document.documentElement;d.classList.add('reveal-on');setTimeout(function(){if(!window.__revealReady)d.classList.add('reveal-fallback')},3500)})();",
          }}
        />
      </head>
      <body className="min-h-full flex flex-col font-sans bg-[#FAF7F2] text-[#222E27] antialiased selection:bg-[#D7A75C] selection:text-[#0D2B22]">
        {/* Cuộn mượt Lenis + header viên thuốc kính mờ (theo mẫu Bụt Studio) */}
        <SmoothScroll />
        <Navbar />
        <main className="flex-1 flex flex-col w-full overflow-x-hidden">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
