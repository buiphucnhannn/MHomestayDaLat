# Mhome Homestay Đà Lạt — Landing Page

Landing page cho **Mhome Homestay Đà Lạt** (23/12 Quang Trung, Đà Lạt) theo hồ sơ `docs/demo.docx`.
Giao diện dựng lại 100% từ mẫu **Nam Phon Homestay**; riêng **header** và **cuộn mượt (Lenis)** theo mẫu **Bụt Studio**.

Công nghệ: Next.js 16 (App Router) · Tailwind CSS v4 · JavaScript thuần · Lenis.

```bash
npm install
cp .env.example .env.local   # đặt NEXT_PUBLIC_SITE_URL = domain thật
npm run dev                  # http://localhost:3000
```

## Cấu trúc

```
public/images/
├── brand/      logo-mhome.jpg
├── exterior/   castle-facade · arched-door · blue-house-balcony
├── rooms/      loft-wooden · loft-arch
├── nature/     wild-sunflower · sunflower-hill
└── og-image.jpg
src/
├── app/                  layout, page, globals.css (màu, font, hiệu ứng reveal), 404, SEO files
├── components/
│   ├── fx/SmoothScroll.js       cuộn mượt Lenis (mẫu Bụt Studio)
│   ├── layout/Navbar.js         header viên thuốc kính mờ (mẫu Bụt Studio)
│   ├── layout/Footer.jsx, ScrollEffects.jsx (hiệu ứng hiện dần khi cuộn)
│   ├── sections/                Hero, About, Rooms, Amenities, Gallery, Experience, Location, Testimonials, CTA
│   └── ui/                      BookingModal, Decorations (dã quỳ, cành lá), DalatStationSketch, WaveDividers, Logo
├── data/homestayData.js  ← toàn bộ nội dung hiển thị (phòng, ảnh, lịch trình, đánh giá...)
└── data/site.js          ← cấu hình SEO
```

## Khác biệt so với mẫu Nam Phon (để phù hợp hồ sơ Mhome)

- Chữ, ảnh, liên hệ (SĐT/Zalo 0328 684 315, Facebook, Google Maps) theo hồ sơ.
- Họa tiết Huế → Đà Lạt: phác hoạ Ngọ Môn → Ga Đà Lạt; hoa sen → hoa dã quỳ; bản đồ Huế → bản đồ Đà Lạt (hồ Xuân Hương, ga, chợ, nhà thờ Con Gà).
- 2 phòng (thay vì 4), bộ lọc ảnh: Kiến trúc · Phòng nghỉ · Thiên nhiên (bố cục riêng khi bộ sưu tập chỉ có 2–3 ảnh).
- Tiện nghi hợp Đà Lạt: nước nóng thay điều hoà, thuê xe máy thay TV.

## Cần cập nhật trước khi chạy thật

- Mục ghi **MẪU** trong `src/data/homestayData.js`: sức chứa, giá phòng (đang để "Liên hệ"), đánh giá khách, thời gian di chuyển trên bản đồ.
- Form đặt phòng (BookingModal) giống mẫu: hiển thị xác nhận + chuyển sang Zalo, chưa gửi dữ liệu về máy chủ.
