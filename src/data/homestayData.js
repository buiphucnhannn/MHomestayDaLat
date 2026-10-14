// Thông tin theo hồ sơ khách hàng (docs/demo.docx).
// Những chỗ ghi "MẪU" là nội dung minh hoạ — cập nhật theo thực tế trước khi chạy thật.
export const homestayInfo = {
  name: "Mhome Homestay Đà Lạt",
  tagline: "Một mái nhà nhỏ giữa lòng Đà Lạt",
  address: "23/12 Quang Trung, Thành phố Đà Lạt, Lâm Đồng 66000, Việt Nam",
  addressShort: "23/12 Quang Trung, Đà Lạt",
  phone: "0328684315",
  phoneDisplay: "0328 684 315",
  zalo: "https://zalo.me/0328684315",
  facebook: "https://www.facebook.com/mhomedalat",
  mapLink: "https://maps.app.goo.gl/jzVHVfmwmbpid3X57",
};

// Ảnh trong public/images (đã phân loại theo thư mục)
const img = {
  castle: "/images/exterior/castle-facade.jpg",
  door: "/images/exterior/arched-door.jpg",
  blueHouse: "/images/exterior/blue-house-balcony.jpg",
  loftWood: "/images/rooms/loft-wooden.jpg",
  loftArch: "/images/rooms/loft-arch.jpg",
  sunflower: "/images/nature/wild-sunflower.jpg",
  sunflowerHill: "/images/nature/sunflower-hill.jpg",
  logo: "/images/brand/logo-mhome.jpg",
};
export const photos = img;

// Shared by the header and the footer — keep in the same order as the sections on the page
export const navLinks = [
  { label: "Giới thiệu", href: "#about" },
  { label: "Phòng", href: "#rooms" },
  { label: "Hình ảnh", href: "#gallery" },
  { label: "Trải nghiệm", href: "#experience" },
  { label: "Vị trí", href: "#location" },
];

export const heroSlides = [
  { id: "h1", image: img.castle, label: "Ngôi nhà mái ngói vảy cá" },
  { id: "h2", image: img.sunflowerHill, label: "Đồi dã quỳ Đà Lạt" },
  { id: "h3", image: img.door, label: "Cửa gỗ vòm phủ hoa leo" },
  { id: "h4", image: img.loftArch, label: "Phòng Gác Vòm" },
];

// MẪU: sức chứa / giường / giá — cập nhật theo thực tế
export const rooms = [
  {
    id: "p1",
    tabCode: "P1",
    tabName: "Gác Gỗ",
    subtitle: "/ 01",
    name: "Phòng Gác Gỗ",
    tag: "Phòng Gác Gỗ",
    title: "Mộc mạc như một\ncăn nhà trên cây",
    guests: "2 – 4 khách",
    bed: "Giường đôi + gác",
    area: "Gác lửng",
    price: "Liên hệ",
    description:
      "Không gian hai tầng dưới mái gỗ cao thoáng, lan can làm từ cành gỗ tự nhiên. Tầng dưới là góc sofa và bàn trà nhỏ, gác lửng là chỗ ngủ ấm áp — mở cửa kính là thấy nắng Đà Lạt.",
    cover: img.loftWood,
    images: [img.loftWood, img.blueHouse, img.castle],
  },
  {
    id: "p2",
    tabCode: "P2",
    tabName: "Gác Vòm",
    subtitle: "/ 02",
    name: "Phòng Gác Vòm",
    tag: "Phòng Gác Vòm",
    title: "Khung vòm cổ tích\n& lan can sắt uốn",
    guests: "2 – 4 khách",
    bed: "Giường đôi + gác",
    area: "Gác lửng",
    price: "Liên hệ",
    description:
      "Khung vòm trắng ôm lấy giường ngủ, cầu thang gỗ dẫn lên gác lửng với lan can sắt uốn hoa văn. Nội thất gỗ cổ điển và bàn gỗ nguyên khối cho một không gian lãng mạn, đầy chất riêng.",
    cover: img.loftArch,
    images: [img.loftArch, img.door, img.castle],
  },
];

// "featured" = the 4 photos shown in the collage under "Tất cả" (in slot order)
export const galleryItems = [
  { id: "g1", title: "Ngôi nhà mái ngói vảy cá và giàn hoa giấy", category: "Kiến trúc", image: img.castle, featured: 1 },
  { id: "g2", title: "Phòng Gác Vòm với lan can sắt uốn", category: "Phòng nghỉ", image: img.loftArch, featured: 2 },
  { id: "g3", title: "Ban công nhà gỗ xanh giữa vườn", category: "Kiến trúc", image: img.blueHouse, featured: 3 },
  { id: "g4", title: "Cửa gỗ vòm phủ hoa leo", category: "Kiến trúc", image: img.door, featured: 4 },
  { id: "g5", title: "Phòng Gác Gỗ mộc mạc", category: "Phòng nghỉ", image: img.loftWood },
  { id: "g6", title: "Hoa dã quỳ dưới trời xanh", category: "Thiên nhiên", image: img.sunflower },
  { id: "g7", title: "Đồi dã quỳ mùa hoa nở", category: "Thiên nhiên", image: img.sunflowerHill },
];

export const daySchedule = [
  {
    time: "07:00",
    title: "Bình minh bên ban công",
    desc: "Nhâm nhi ly cà phê nóng giữa vườn cây và nắng sớm.",
    image: img.blueHouse,
  },
  {
    time: "10:00",
    title: "Khám phá Đà Lạt",
    desc: "Săn mùa dã quỳ, dạo hồ Xuân Hương và những con dốc nhỏ.",
    image: img.sunflower,
  },
  {
    time: "17:30",
    title: "Trở về Mhome",
    desc: "Ngôi nhà cổ tích đón bạn giữa giàn hoa giấy rực rỡ.",
    image: img.castle,
  },
  {
    time: "21:00",
    title: "Một buổi tối thật yên",
    desc: "Cuộn mình trên gác gỗ ấm áp giữa cái se lạnh phố núi.",
    image: img.loftArch,
  },
];

// x / y = position on the illustrated map, in % of the map area. icon = tên icon lucide.
export const mapLandmarks = [
  { name: "Ga Đà Lạt", time: "~ 3 phút", icon: "TrainFront", x: 80, y: 58 },
  { name: "Hồ Xuân Hương", time: "~ 5 phút", icon: "Sailboat", x: 50, y: 25 },
  { name: "Chợ Đà Lạt", time: "~ 8 phút", icon: "Store", x: 24, y: 40 },
  { name: "Nhà thờ Con Gà", time: "~ 8 phút", icon: "Church", x: 32, y: 74 },
];

// MẪU: thay bằng đánh giá thật từ Google Maps / Facebook
export const testimonials = [
  {
    quote: "Nhà xinh như trong truyện cổ tích, chụp ảnh góc nào cũng đẹp. Phòng gác gỗ ấm áp, thơm mùi gỗ, ngủ cực ngon.",
    name: "Nguyễn Ngọc Hân",
    from: "TP. Hồ Chí Minh",
    rating: 5,
  },
  {
    quote: "A lovely fairytale house! Chủ nhà nhiệt tình chỉ đường, gợi ý lịch trình. Vị trí rất tiện để đi bộ ra ga Đà Lạt.",
    name: "Min-ji Park",
    from: "Seoul, Hàn Quốc",
    rating: 5,
  },
  {
    quote: "Phòng gác vòm đẹp hơn cả ảnh. Giàn hoa giấy trước nhà rực rỡ, sáng ra ngồi ban công uống cà phê rất chill.",
    name: "Trần Hoàng Long",
    from: "Hà Nội",
    rating: 5,
  },
  {
    quote: "Cozy, clean and full of character. Mình nhất định sẽ quay lại vào mùa dã quỳ năm sau!",
    name: "Emma Wilson",
    from: "Sydney, Úc",
    rating: 5,
  },
  {
    quote: "Không gian yên tĩnh, sạch sẽ, giá hợp lý. Đặt phòng qua Zalo được phản hồi rất nhanh.",
    name: "Lê Thu Trang",
    from: "Đà Nẵng",
    rating: 5,
  },
  {
    quote: "Cả nhà mình ở phòng Gác Gỗ, hai bé mê cái gác lửng lắm. Buổi tối se lạnh mà phòng vẫn ấm áp, dễ chịu.",
    name: "Phạm Minh Khoa",
    from: "Cần Thơ",
    rating: 5,
  },
];
