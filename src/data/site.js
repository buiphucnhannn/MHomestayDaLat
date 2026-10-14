// Cấu hình SEO chung (metadata, sitemap, robots, manifest).
// Nội dung hiển thị trên trang nằm ở src/data/homestayData.js.
export const siteConfig = {
  name: "Mhome Homestay Đà Lạt",
  shortName: "Mhome",
  description:
    "Mhome Homestay Đà Lạt — ngôi nhà mái ngói vảy cá, cửa gỗ vòm và những căn phòng gác lửng ấm áp tại 23/12 Quang Trung. Cho thuê phòng & lưu trú dịch vụ cho khách trong và ngoài nước.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
  ogImage: "/images/og-image.jpg",
  keywords: [
    "Mhome Homestay",
    "homestay Đà Lạt",
    "homestay Quang Trung Đà Lạt",
    "homestay gần ga Đà Lạt",
    "phòng gác lửng Đà Lạt",
    "cho thuê phòng Đà Lạt",
  ],
};
