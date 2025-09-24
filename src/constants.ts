
import { Product, Material, InfoSectionData, StickerGridItemData, PromoCardData, StickerListItemData, FooterLinkSectionData, DiecutMaterial, StickerShape, StickerSize, QuantityOption, FaqItem, GalleryImage, OtherProduct } from './types';

export const products: Product[] = [
  {
    id: 'die-cut',
    title: 'Die Cut Stickers',
    description: 'Precisely cut to any shape',
    imageUrl: 'https://i.postimg.cc/59kv5xhg/custom-stickers-hero-1-1-2000x2000.png',
    tag: 'Popular',
    tagColor: 'bg-yellow-400',
    tagTextColor: 'text-black',
  },
  {
    id: 'sticker-sheets',
    title: 'Sticker Sheets',
    description: 'Multiple designs, one sheet',
    imageUrl: 'https://stickerapp.com/media/400x400/63b85e1479/icon-sticker-sheet-400x400.png/m/400x0/filters:quality(60)',
    tag: 'Trending',
    tagColor: 'bg-black',
    tagTextColor: 'text-white',
  },
  {
    id: 'text-decals',
    title: 'Text Decals',
    description: 'Text/Transfer Decals, No Background',
    imageUrl: 'https://stickerapp.com/media/400x400/c4dd7b4b6a/icon-heavy-duty-sticker-400x400.png/m/400x0/filters:quality(60)',
  },
  {
    id: 'sticker-shop',
    title: 'Sticker Shop',
    description: 'Browse our marketplace',
    imageUrl: 'https://stickerapp.com/media/400x400/95570fc805/sticker-shop-logo-400x400.png/m/400x0/filters:quality(60)',
    tag: 'New',
    tagColor: 'bg-green-500',
    tagTextColor: 'text-white',
  },
];

export const materials: Material[] = [
  {
    id: 'vinyl',
    title: 'Vinyl Stickers',
    subtitle: 'The OG Material',
    imageUrl: 'https://stickerapp.com/media/2000x2000/4987f17673/vinyl-clown-sticker.png/m/1000x0/filters:quality(60)',
    prices: [
      { quantity: 100, price: 62, discount: 32 },
      { quantity: 300, price: 109, discount: 52 },
      { quantity: 600, price: 168, discount: 59 },
      { quantity: 1200, price: 242, discount: 65 },
    ],
    features: ['PVC Free', 'Back Paper Print', 'Waterproof'],
  },
  {
    id: 'transparent',
    title: 'Transparent',
    subtitle: 'Custom stickers',
    imageUrl: 'https://stickerapp.com/media/1080x1080/0f6a86e449/transparent-stickers-can.png/m/1000x0/filters:quality(60)',
    prices: [
      { quantity: 100, price: 109 },
      { quantity: 300, price: 131, discount: 52 },
      { quantity: 600, price: 168, discount: 66 },
      { quantity: 1200, price: 242, discount: 71 },
    ],
    features: ['PVC Free', 'Back Paper Print', 'Waterproof'],
  },
  {
    id: 'holographic',
    title: 'Holographic',
    subtitle: 'Custom stickers',
    imageUrl: 'https://stickerapp.com/media/2000x2000/94b677d83d/holographic-sticker-catsemla.png/m/1000x0/filters:quality(60)',
    prices: [
        { quantity: 50, price: 60, discount: 8 },
        { quantity: 200, price: 126, discount: 36 },
        { quantity: 500, price: 181, discount: 54 },
        { quantity: 900, price: 289, discount: 63 },
    ],
    features: ['PVC Free', 'Back Paper Print (Not available)', 'Waterproof'],
  },
];

export const infoSections: InfoSectionData[] = [
    {
        title: 'Custom Sticker Packs',
        paragraphs: [
            "Stickers in a bag with a header, done!",
            "Customize your stickers and your header for the ultimate branding kit in a bag from as little as $3.15* per pack.",
            "*3 stickers with a 100 pack minimum order"
        ],
        buttonText: 'Get started',
        buttonLink: '#',
        imageUrl: 'https://stickerapp.com/media/500x500/13e8253228/custom-stickerpack-creativepain-500x500-2.jpg/m/400x0/filters:quality(60)',
        imagePosition: 'right'
    },
    {
        title: 'Transform your ideas into high-quality custom stickers',
        paragraphs: [
            "In the vibrant world of StickerApp, your creativity meets our cutting-edge technology to turn your visions into high-quality, custom stickers.",
            "Whether you're looking to bring your business logo to life, add a personal touch to your belongings, or create unique promotional material, our sticker services make the process effortless and enjoyable.",
            "Choose from a plethora of sizes, materials, and finishes to perfectly capture your vision. Regardless if you're a design novice or a seasoned pro, our platform guides you through each step, ensuring your custom stickers are exactly how you imagined them."
        ],
        buttonText: '',
        buttonLink: '#',
        imageUrl: 'https://stickerapp.com/media/750x750/460aeeddb5/vinyl-diecut-several-stacked-samurai-aquapool-creativesouth-white-bg-750x750.jpg/m/1000x0/filters:quality(60)',
    },
    {
        title: 'Experience our celebrated, durable, and weatherproof materials',
        paragraphs: [
            "Our commitment to quality is unwavering. Utilizing only the finest materials and the latest in printing technology, we ensure your designs not only look stunning but also stand the test of time. From weather-resistance to dishwasher-safe, your stickers will maintain their brilliance through every adventure.",
            "In case you aim for understated elegance or want to make a bold, iridescent statement, we have you covered. With options ranging from sleek vinyl to eye-popping holographic and everything in between, the possibilities are limitless. Choose matte, glossy, or our unique holographic cracked ice finish to give your stickers the exact look and feel you desire."
        ],
        buttonText: '',
        buttonLink: '#',
        imageUrl: 'https://stickerapp.com/media/419x419/6626452f09/hi-tack-vinyl-single-flat-noicecanceling-white-bg-419x419.png/m/600x0/filters:quality(60)',
        imagePosition: 'right'
    },
    {
        title: 'Ready to turn your ideas into tangible art?',
        paragraphs: [
            "At StickerApp, we're more than just a printing service; we're a community of creators, businesses, and individuals passionate about quality, creativity, and expression.",
            "We invite you to discover how fun, and cost-effective, custom stickers can be. Make a single masterpiece or bulk orders for your business. We offer transparent pricing and insights into maximizing your investment in custom stickers.",
            "Begin your creative journey to explore the endless possibilities of custom stickers by selecting your preferences in our wizard. With our easy-to-use platform, quality guarantee, and passion for creativity, your perfect sticker is just a few clicks away!"
        ],
        buttonText: 'Make customizable stickers',
        buttonLink: '#',
        imageUrl: 'https://stickerapp.com/media/750x750/9560968480/vinyl-diecut-single-stacked-vinyldays-white-bg-750x750.jpg/m/600x0/filters:quality(60)',
    },
];

export const CAROUSEL_IMAGES: string[] = [
    "https://stickerapp.com/media/300x426/7b2bd8bc38/template-sticker-300x300_3.jpg/m/400x0/filters:quality(60)",
    "https://stickerapp.com/media/2000x2840/e4efefc97c/shop-funny-vinyl-single-01.jpg/m/400x0/filters:quality(60)",
    "https://stickerapp.com/media/2000x2840/1a28153a39/shop-skull-vinyl-single-04.jpg/m/400x0/filters:quality(60)",
    "https://stickerapp.com/media/2000x2840/d71a256d13/shop-cat-vinyl-single-02.jpg/m/400x0/filters:quality(60)",
    "https://stickerapp.com/media/2000x2840/5043a9c61d/shop-games-vinyl-single-01.jpg/m/400x0/filters:quality(60)",
    "https://stickerapp.com/media/2000x2840/11fbfd41f2/shop-skull-vinyl-single-01.jpg/m/400x0/filters:quality(60)",
    "https://stickerapp.com/media/2000x2840/fdc999d69e/shop-games-vinyl-single-03.jpg/m/400x0/filters:quality(60)",
    "https://stickerapp.com/media/2000x2840/4814e8b49b/shop-cat-vinyl-single-01.jpg/m/400x0/filters:quality(60)",
    "https://stickerapp.com/media/2000x2840/575323ae0e/shop-skull-vinyl-single-02.jpg/m/400x0/filters:quality(60)",
];

export const CATEGORIES = [
    { name: 'Featured', href: '#' },
    { name: 'Popular', href: '#' },
    { name: 'Latest', href: '#' },
    { name: 'By Artists', href: '#' },
];

export const STICKER_GRID_ITEMS: StickerGridItemData[] = [
    { id: 1, imgSrc: "https://stickerapp.com/cdn-assets/images/preview/2025/04/08/design-84183/template-sticker-300x300.png", alt: "I survived another meeting sticker", name: "I survived", size: '3.9" x 3.9"', price: "$7.15", url: "#", description: "For those who endure endless meetings. A perfect badge of honor for your laptop or notebook. Made with high-quality, durable vinyl." },
    { id: 2, imgSrc: "https://stickerapp.com/cdn-assets/images/stickers/766t.png", alt: "United States flag sticker", name: "United States flag", size: '3" x 2"', price: "$3.61", url: "#", description: "Show your patriotic side with this classic American flag sticker. Weather-resistant and perfect for cars, water bottles, and more." },
    { id: 3, imgSrc: "https://stickerapp.com/cdn-assets/images/preview/2020/03/24/design-62241/template-sticker-300x300.png", alt: "Happy Racoon sticker", name: "Happy Racoon", size: '2.4" x 3.5"', price: "$4.53", url: "#", description: "This cheerful racoon is sure to bring a smile to your face. A cute addition to any surface that needs a bit of joy." },
    { id: 4, imgSrc: "https://stickerapp.com/cdn-assets/images/preview/2025/04/09/design-84189/template-sticker-300x300.png", alt: "KPIs Keep People Irritated sticker", name: "KPIs - Keep People Irritated", size: '3.9" x 3.8"', price: "$6.86", url: "#", description: "A humorous take on office culture. This sticker is for anyone who's tired of corporate jargon. Great for office laptops." },
    { id: 5, imgSrc: "https://stickerapp.com/cdn-assets/images/preview/2025/04/09/design-84185/template-sticker-300x300.png", alt: "Ghosting on Slack sticker", name: "Ghosting on Slack", size: '3.9" x 3.9"', price: "$7.15", url: "#", description: "For the remote worker with a sense of humor. This spooky-cute ghost knows the modern workplace struggles. High-quality vinyl sticker." },
    { id: 6, imgSrc: "https://stickerapp.com/cdn-assets/images/preview/2025/04/10/design-84190/template-sticker-300x300.png", alt: "I'm high on Goat Nip sticker", name: "I'm high on Goat Nip", size: '3.9" x 4"', price: "$5.22", url: "#", description: "A quirky and funny sticker featuring a goat enjoying some 'nip'. Perfect for animal lovers with a unique sense of humor." },
    { id: 7, imgSrc: "https://stickerapp.com/cdn-assets/images/preview/2025/04/09/design-84187/template-sticker-300x300.png", alt: "Wurst Sticker Ever", name: "Wurst Sticker Ever", size: '3.9" x 3.9"', price: "$7.01", url: "#", description: "A punny sticker for the foodie in your life. It's the 'wurst' sticker, but in the best way possible. Made from durable, waterproof vinyl." },
    { id: 8, imgSrc: "https://stickerapp.com/cdn-assets/images/preview/2025/04/09/design-84186/template-sticker-300x300.png", alt: "Pour Decisions sticker", name: "Pour Decisions", size: '3.9" x 5.5"', price: "$7.24", url: "#", description: "Celebrate your love for wine and witty wordplay. This sticker is perfect for your wine fridge, laptop, or planner." },
];

export const STICKER_PACKS: PromoCardData[] = [
    { id: 1, imgSrc: "https://stickerapp.com/media/1200x1200/0e828f3d8b/most-liked-2024-stickerpack-frontside-black-1200x1200.jpg/m/1200x0/filters:quality(60)", alt: "Most Liked 2024 Sticker Pack", supertitle: "Most Liked 2024", title: "Sticker Pack", description: "It doesn't need to be complicated, get the 12 most liked stickers of 2024 in one pack", url: "#", gridSpanDesktop: 6, gridSpanMobile: 2 },
    { id: 2, imgSrc: "https://stickerapp.com/media/660x674/41d0ee0870/mostliked23-stacked-logo-busy-bg-660x674.png/m/1200x0/filters:quality(60)", alt: "Most Liked 2023 Sticker Pack", supertitle: "Most Liked 2023", title: "Sticker Pack", description: "Snag the most popular designs of 2023.", url: "#", gridSpanDesktop: 6, gridSpanMobile: 2 },
];

export const POPULAR_STICKERS: StickerListItemData[] = [
    { id: 1, imgSrc: "https://stickerapp.com/cdn-assets/images/stickers/1777t.png", alt: "the Milf sticker", name: "Milf Sticker", size: '2" x 2.9"', price: "$3.51", url: "#" },
    { id: 2, imgSrc: "https://stickerapp.com/cdn-assets/images/preview/2015/10/05/design-5762/template-sticker-300x300.png", alt: "pizza slice sticker", name: "Pizza slice", size: '1.9" x 2.3"', price: "$3.41", url: "#" },
    { id: 3, imgSrc: "https://stickerapp.com/cdn-assets/images/preview/2020/03/11/design-62024/template-sticker-300x300.png", alt: "Wash your hands with Corona - sticker", name: "Wash your hands", size: '2.1" x 2.5"', price: "$4.66", url: "#" },
];

export const RECENT_STICKERS: StickerListItemData[] = [
    { id: 1, imgSrc: "https://stickerapp.com/cdn-assets/images/preview/2025/04/10/design-84194/template-sticker-300x300.png", alt: "Dump him. Move to Berlin. Sticker.", name: "Dump him. Move to Berlin", size: '3.9" x 3.5"', price: "$6.49", url: "#" },
    { id: 2, imgSrc: "https://stickerapp.com/cdn-assets/images/preview/2025/04/10/design-84193/template-sticker-300x300.png", alt: "Wurst case scenario in Berlin Sticker", name: "Wurst case scenario in Berlin", size: '3.9" x 4.2"', price: "$5.53", url: "#" },
    { id: 3, imgSrc: "https://stickerapp.com/cdn-assets/images/preview/2025/04/10/design-84191/template-sticker-300x300.png", alt: "I was cute before the rent went up sticker.", name: "I was cute before the rent went up", size: '3.9" x 5.5"', price: "$7.24", url: "#" },
];

export const FOOTER_LINKS: FooterLinkSectionData[] = [
    {
        id: "useful-links",
        title: "Useful links",
        links: [
            { name: "Usages", url: "#" },
            { name: "Add-Ons", url: "#" },
            { name: "Our Sticker Packs", url: "#" },
            { name: "Order Samples", url: "#" },
            { name: "Shop", url: "#" },
            { name: "Blog", url: "#" },
        ]
    },
    {
        id: "support",
        title: "Support",
        links: [
            { name: "Contact us", url: "#" },
            { name: "Quote", url: "#" },
            { name: "FAQs", url: "#" },
            { name: "How to's", url: "#" },
            { name: "Shipping", url: "#" },
            { name: "Payments", url: "#" },
        ]
    },
    {
        id: "company",
        title: "Company",
        links: [
            { name: "About us", url: "#" },
            { name: "Legal", url: "#" },
            { name: "Reviews", url: "#" },
            { name: "Press", url: "#" },
            { name: "Cookies", url: "#" },
            { name: "Accessibility", url: "#" },
        ]
    }
];

export const FILTER_CATEGORIES = [
    { id: 'all', name: 'All' },
    { id: 'animals', name: 'Animals' },
    { id: 'funny', name: 'Funny' },
    { id: 'gaming', name: 'Gaming' },
    { id: 'nature', name: 'Nature' },
    { id: 'pop-culture', name: 'Pop Culture' },
    { id: 'text', name: 'Text & Quotes' },
];

export const FILTER_COLORS = [
    { id: 'black', name: 'Black', hex: '#000000' },
    { id: 'white', name: 'White', hex: '#FFFFFF' },
    { id: 'red', name: 'Red', hex: '#EF4444' },
    { id: 'blue', name: 'Blue', hex: '#3B82F6' },
    { id: 'green', name: 'Green', hex: '#22C55E' },
    { id: 'yellow', name: 'Yellow', hex: '#EAB308' },
    { id: 'purple', name: 'Purple', hex: '#8B5CF6' },
    { id: 'pink', name: 'Pink', hex: '#EC4899' },
    { id: 'orange', name: 'Orange', hex: '#F97316' },
    { id: 'multi', name: 'Multicolor', hex: 'conic-gradient(red, yellow, lime, aqua, blue, magenta, red)' },
];

export const shapes: StickerShape[] = [
  { name: 'Contour Cut', icon: 'https://d6ce0no7ktiq.cloudfront.net/images/web/wizard/ic_contourcut.svg' },
  { name: 'Square', icon: 'https://d6ce0no7ktiq.cloudfront.net/images/web/wizard/ic_square.svg' },
  { name: 'Circle', icon: 'https://d6ce0no7ktiq.cloudfront.net/images/web/wizard/ic_circle.svg' },
  { name: 'Rounded Corners', icon: 'https://d6ce0no7ktiq.cloudfront.net/images/web/wizard/ic_round-corners.svg' },
];

export const diecutMaterials: DiecutMaterial[] = [
  { name: 'Vinyl', image: 'https://d6ce0no7ktiq.cloudfront.net/images/attachment/2023/06/08/4d0ae46e9e164daa9171d70e51cd46c7acaa2419.png' },
  { name: 'Holographic', image: 'https://d6ce0no7ktiq.cloudfront.net/images/attachment/2023/03/09/48e2c5c8c6ab57d013675b3b245daa2136e0c7cf.png' },
  { name: 'Transparent', image: 'https://d6ce0no7ktiq.cloudfront.net/images/attachment/2023/03/09/2d46e2873ec899b83a152c2f2ad52c1368398333.png' },
  { name: 'Glitter', image: 'https://d6ce0no7ktiq.cloudfront.net/images/attachment/2023/03/09/8d48777356c014861f8e174949f2a382778c0a7e.png' },
  { name: 'Mirror', image: 'https://d6ce0no7ktiq.cloudfront.net/images/attachment/2023/03/09/c5e0f009dbf3aec33b2e8d0caac5ebcd1a10348f.png' },
  { name: 'Pixie Dust', image: 'https://d6ce0no7ktiq.cloudfront.net/images/attachment/2023/08/23/46dac2bd418951b1412d4225cbdaad579aed03e4.png' },
  { name: 'Prismatic', image: 'https://d6ce0no7ktiq.cloudfront.net/images/attachment/2023/03/09/0912457c4dccf212c92e0802fd36545d90f2bfd6.png' },
];

export const finishes: string[] = ['Glossy', 'Matte', 'Cracked Ice'];

export const sizes: StickerSize[] = [
  { name: '2" x 2"' },
  { name: '3" x 3"' },
  { name: '4" x 4"' },
  { name: '5" x 5"' },
  { name: '6" x 6"' },
];

export const quantities: QuantityOption[] = [
  { amount: 55, price: 26 },
  { amount: 100, price: 47 },
  { amount: 200, price: 64, discount: 32 },
  { amount: 300, price: 96, discount: 32 },
  { amount: 500, price: 114, discount: 52 },
  { amount: 600, price: 136, discount: 52 },
  { amount: 900, price: 175, discount: 59 },
  { amount: 1200, price: 201, discount: 65 },
];

export const galleryImages: GalleryImage[] = [
    { src: 'https://stickerapp.com/media/2000x2000/cb074be4de/pixiedust-stickers-howdy-2000x2000.png/m/2400x0/filters:quality(60)', alt: 'Howdy sticker with pixie dust effect' },
    { src: 'https://stickerapp.com/media/2000x1600/d800bf7ff2/sushi-bot-vinyl-paiheme-social-4-5-2000x1600.png/m/2400x0/filters:quality(60)', alt: 'A hand holding a vinyl sticker of an astronaut eating ramen' },
    { src: 'https://stickerapp.com/media/2000x1600/f851506b47/die-cut-clear-sticker-dealwithit-2000x1600.jpg/m/2400x0/filters:quality(60)', alt: 'Transparent die cut sticker of a masked person' },
    { src: 'https://stickerapp.com/media/2000x1600/ec4957fdd8/die-cut-pixie-sticker-girl-2000x1600.jpg/m/1200x0/filters:quality(60)', alt: 'Die cut Sticker of a woman with red afro' },
    { src: 'https://stickerapp.com/media/2001x1600/d124ba2dfa/die-cut-vinyl-sticker-head-2000x1600.jpg/m/1200x0/filters:quality(60)', alt: 'Stack of die cut stickers featuring a stylized human head' },
];

export const faqs: FaqItem[] = [
    { question: 'How do I set up my file for custom stickers?', answer: 'Upload your design and leave a comment indicating cutlines, or use design software like Adobe Illustrator to set cutlines. Our team will optimize your files for printing.' },
    { question: 'How to make your own cutlines?', answer: 'Open your artwork in Adobe Illustrator, create your path for the cutline, and make a new swatch named "die cut" with the spot color set to 100% magenta for the cutline. Include 2 mm bleed and a 2 mm margin between the cut line and important elements in the design.' },
    { question: 'What is the difference between Die Cut and Kiss Cut stickers?', answer: 'Die-cut stickers are cut through both the vinyl and the backing, matching the exact shape of your design, while kiss-cut stickers are only cut through the sticker layer, leaving a backing for easier handling.' },
    { question: 'Can I mix different materials in the same sticker design?', answer: 'Currently, we print each sticker design on a single material. This means that mixing different materials within the same sticker design is not possible.' },
];

export const otherProducts: OtherProduct[] = [
    { category: 'Back Paper Print', name: 'Paper with a purpose', description: 'Add text and designs to the back paper of your sticker.', image: 'https://stickerapp.com/media/768x512/51c667c59b/bpp-backpaper-diecut-vinyl-single-in-hand-triangle-busy-bg-768x512.png/m/1200x0/filters:quality(60)' },
    { category: 'Kiss Cut', name: 'Extra padding', description: 'Easy peel stickers with larger back paper.', image: 'https://stickerapp.com/media/750x750/6f054177a6/kiss-cut-materials-several-stacked-logos-black-bg-750x750.jpg/m/1200x0/filters:quality(60)' },
    { category: 'Sticker Sheets', name: 'Customize the whole sheet', description: 'Multiple designs on one sheet.', image: 'https://stickerapp.com/media/750x750/737799028b/sticker-sheets-several-stacked-materials-black-bg-750x750.jpg/m/1200x0/filters:quality(60)' },
];

export const usStates = [
    { value: "", label: "Select State..." },
    { value: "AL", label: "Alabama" }, { value: "AK", label: "Alaska" },
    { value: "AZ", label: "Arizona" }, { value: "AR", label: "Arkansas" },
    { value: "CA", label: "California" }, { value: "CO", label: "Colorado" },
    { value: "CT", label: "Connecticut" }, { value: "DE", label: "Delaware" },
    { value: "DC", label: "District Of Columbia" }, { value: "FL", label: "Florida" },
    { value: "GA", label: "Georgia" }, { value: "HI", label: "Hawaii" },
    { value: "ID", label: "Idaho" }, { value: "IL", label: "Illinois" },
    { value: "IN", label: "Indiana" }, { value: "IA", label: "Iowa" },
    { value: "KS", label: "Kansas" }, { value: "KY", label: "Kentucky" },
    { value: "LA", label: "Louisiana" }, { value: "ME", label: "Maine" },
    { value: "MD", label: "Maryland" }, { value: "MA", label: "Massachusetts" },
    { value: "MI", label: "Michigan" }, { value: "MN", label: "Minnesota" },
    { value: "MS", label: "Mississippi" }, { value: "MO", label: "Missouri" },
    { value: "MT", label: "Montana" }, { value: "NE", label: "Nebraska" },
    { value: "NV", label: "Nevada" }, { value: "NH", label: "New Hampshire" },
    { value: "NJ", label: "New Jersey" }, { value: "NM", label: "New Mexico" },
    { value: "NY", label: "New York" }, { value: "NC", label: "North Carolina" },
    { value: "ND", label: "North Dakota" }, { value: "OH", label: "Ohio" },
    { value: "OK", label: "Oklahoma" }, { value: "OR", label: "Oregon" },
    { value: "PA", label: "Pennsylvania" }, { value: "RI", label: "Rhode Island" },
    { value: "SC", label: "South Carolina" }, { value: "SD", label: "South Dakota" },
    { value: "TN", label: "Tennessee" }, { value: "TX", label: "Texas" },
    { value: "UT", label: "Utah" }, { value: "VT", label: "Vermont" },
    { value: "VA", label: "Virginia" }, { value: "WA", label: "Washington" },
    { value: "WV", label: "West Virginia" }, { value: "WI", label: "Wisconsin" },
    { value: "WY", label: "Wyoming" },
];

export const countries = [
    { value: 'US', label: 'United States' },
    { value: 'CA', label: 'Canada' },
    { value: 'MX', label: 'Mexico' },
    { value: 'GB', label: 'United Kingdom' },
    { value: 'DE', label: 'Germany' },
    { value: 'FR', label: 'France' },
    { value: 'JP', label: 'Japan' },
    { value: 'AU', label: 'Australia' },
];