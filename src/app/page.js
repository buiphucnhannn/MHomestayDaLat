import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Rooms from "@/components/sections/Rooms";
import Amenities from "@/components/sections/Amenities";
import Gallery from "@/components/sections/Gallery";
import Experience from "@/components/sections/Experience";
import Location from "@/components/sections/Location";
import Testimonials from "@/components/sections/Testimonials";
import CTA from "@/components/sections/CTA";
import ScrollEffects from "@/components/layout/ScrollEffects";
import { homestayInfo } from "@/data/homestayData";
import { siteConfig } from "@/data/site";

// Dữ liệu có cấu trúc (schema.org) giúp Google hiển thị thông tin homestay
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LodgingBusiness",
  name: homestayInfo.name,
  description: siteConfig.description,
  url: siteConfig.url,
  image: `${siteConfig.url}${siteConfig.ogImage}`,
  logo: `${siteConfig.url}/images/brand/logo-mhome.jpg`,
  telephone: "+84328684315",
  address: {
    "@type": "PostalAddress",
    streetAddress: "23/12 Quang Trung",
    addressLocality: "Đà Lạt",
    addressRegion: "Lâm Đồng",
    postalCode: "66000",
    addressCountry: "VN",
  },
  hasMap: homestayInfo.mapLink,
  sameAs: [homestayInfo.facebook],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
      />
      <Hero />
      <About />
      <Rooms />
      <Amenities />
      <Gallery />
      <Experience />
      <Location />
      <Testimonials />
      <CTA />
      {/* Last child so its effect runs after the whole page (and the layout) has hydrated */}
      <ScrollEffects />
    </>
  );
}
