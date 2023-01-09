import {
  white,
  drawerChair,
  slider2,
  pinkChair,
  greenChair,
  brownCushion,
  whiteCushion,
  slider1,
  roundTable,
  chair4,
  chair5,
  chair6,
  chair7,
  chair8,
  chair9,
  chair10,
  chair11,
  chair,
  chair2,
  verse,
} from './images';

const dummyDiscription = [
  'This comfortable armchair is upholstered in soft, durable fabric and features a sturdy wooden frame.',
  'This stylish and contemporary sofa is perfect for relaxing and entertaining. It features a sleek design and plush cushions.',
  'This cozy loveseat is perfect for snuggling up with a loved one. It features a soft, plush design and a durable frame.',
  'This versatile ottoman can be used as a footrest, extra seating, or a coffee table. It features a sturdy wooden frame and a plush, tufted top.',
  'This luxurious recliner features a smooth, motorized mechanism and a comfortable, padded design. Its the perfect spot to relax after a long day.',
  'This sturdy and stylish bench is perfect for providing extra seating in any room. It features a durable wooden frame and a plush, upholstered seat.',
  'This elegant wingback chair is upholstered in soft, durable fabric and features a classic design with elegant winged sides.',
  'This comfortable rocking chair is perfect for relaxing and soothing a baby to sleep. It features a sturdy wooden frame and a plush, upholstered seat.',
  'This stylish papasan chair is perfect for creating a cozy and relaxing atmosphere in any room. It features a plush, cushioned design and a sturdy frame.',
  'This comfortable bean bag chair is perfect for lounging and relaxing. Its made with soft, durable fabric and filled with plush, supportive beads.',
];
const dummyName = [
  'Bench',
  'Couch',
  'Daybed',
  'Futon',
  'Loveseat',
  'Ottoman',
  'Recliner',
  'Sofa',
  'Stool',
  'Settee',
  'Bean Bag',
  'Bergère',
  'Bunk Bed',
  "Captain's Chair",
  'Chaise Lounge',
  'Couch Bed',
  'Cradle Chair',
  'Cushion',
  'Deck Chair',
  'Divan',
  'Easy Chair',
  'Fainting Couch',
  'Folding Chair',
  'High Chair',
  'Lawn Chair',
  'Leather Chair',
  'Love Seat',
  'Massage Chair',
  'Porch Swing',
  'Sling Chair',
  'Sofa Bed',
  'Tub Chair',
];

const LandingPageProducts = [
  {
    title: 'pillow sitter with side table',
    price: '270',
    image: chair,
    rating: { rate: 4.7, count: 500 },
    brand: 'furniture',
    id: 1,
    description:
      'This comfortable armchair is upholstered in soft, durable fabric and features a sturdy wooden frame.',
  },
  {
    title: 'Leather sofa',
    price: '550',
    image: chair2,
    rating: { rate: 4.4, count: 530 },
    brand: 'furniture',
    id: 2,
    description:
      'This stylish and contemporary sofa is perfect for relaxing and entertaining. It features a sleek design and plush cushions.',
  },
  {
    title: 'Side verse',
    price: '150',
    image: verse,
    rating: { rate: 4.9, count: 734 },
    brand: 'furniture',
    id: 3,
    description:
      'These planters combine the lightness and convenience of rubber with the earth-conscious soul of eco-friendly materials. The degradable rubber material comes in many colors and is perfect for bringing a bold, contemporary look to your dresser, bedroom, table, or living room.',
  },
];
const dummyRating = [
  { rate: 3.9, count: 120 },
  { rate: 4.1, count: 259 },
  { rate: 4.7, count: 500 },
  { rate: 2.1, count: 430 },
  { rate: 4.6, count: 400 },
  { rate: 3.9, count: 70 },
  { rate: 3, count: 400 },
  { rate: 1.9, count: 100 },
  { rate: 3.3, count: 203 },
  { rate: 2.9, count: 470 },
  { rate: 4.8, count: 319 },
  { rate: 4.8, count: 400 },
  { rate: 2.9, count: 250 },
  { rate: 2.2, count: 140 },
  { rate: 2.6, count: 235 },
  { rate: 2.9, count: 340 },
  { rate: 3.8, count: 679 },
  { rate: 4.7, count: 130 },
  { rate: 4.5, count: 146 },
  { rate: 3.6, count: 145 },
];
const random = arr => {
  return arr[Math.floor(Math.random() * arr.length)];
};

//furniture products
const products = [
  {
    image: white,
    price: '90',
  },
  {
    image: drawerChair,
    price: '60',
  },
  {
    image: slider2,
    price: '120',
  },
  {
    image: pinkChair,
    price: '80',
  },
  {
    image: greenChair,
    price: '340',
  },
  {
    image: brownCushion,
    price: '200',
  },
  {
    image: whiteCushion,
    price: '820',
  },
  {
    image: slider1,
    price: '40',
  },
  {
    image: roundTable,
    price: '520',
  },
  {
    image: chair4,
    price: '140',
  },
  {
    image: chair5,
    price: '320',
  },
  {
    image: chair10,
    price: '740',
  },
  {
    image: chair6,
    price: '275',
  },
  {
    image: chair7,
    price: '455',
  },
  {
    image: chair9,
    price: '720',
  },
  {
    image: chair8,
    price: '560',
  },
  {
    image: chair11,
    price: '940',
  },
];

//gives product dummy name and title
products.map((product, i) => {
  product.title = dummyName[i];
  product.rating = random(dummyRating);
  product.description = random(dummyDiscription);
  product.id = i;
  product.addedToCart = false;
  product.brand = 'furniture';
  product.colors = [
    { name: 'White', class: 'bg-white', selectedClass: 'ring-gray-400' },
    { name: 'Gray', class: 'bg-gray-200', selectedClass: 'ring-gray-400' },
    { name: 'Black', class: 'bg-gray-900', selectedClass: 'ring-gray-900' },
  ];
  product.sizes = [
    { name: 'XS', inStock: true },
    { name: 'S', inStock: true },
    { name: 'M', inStock: true },
    { name: 'L', inStock: true },
    { name: 'XL', inStock: true },
  ];
  return product;
});
LandingPageProducts.map(product => {
  product.addedToCart = false;
  product.colors = [
    { name: 'White', class: 'bg-white', selectedClass: 'ring-gray-400' },
    { name: 'Gray', class: 'bg-gray-200', selectedClass: 'ring-gray-400' },
    { name: 'Black', class: 'bg-gray-900', selectedClass: 'ring-gray-900' },
  ];
  product.sizes = [
    { name: 'XS', inStock: true },
    { name: 'S', inStock: true },
    { name: 'M', inStock: true },
    { name: 'L', inStock: true },
    { name: 'XL', inStock: true },
  ];
  return product;
});

//tech products
const tech = [
  {
    title: 'iPhone 9',
    price: '549',
    image: 'https://i.dummyjson.com/data/products/1/thumbnail.jpg',
    description: 'An apple mobile which is nothing like apple',
  },
  {
    title: 'iPhone X',
    price: '899',
    image: 'https://i.dummyjson.com/data/products/2/thumbnail.jpg',
    description:
      'SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...',
  },
  {
    title: 'Samsung Universe 9',
    price: '1249',
    image: 'https://i.dummyjson.com/data/products/3/thumbnail.jpg',
    description: "Samsung's new variant which goes beyond Galaxy to the Universe",
  },
  {
    title: 'OPPOF19',
    price: '280',
    image: 'https://i.dummyjson.com/data/products/4/thumbnail.jpg',
    description: 'OPPO F19 is officially announced on April 2021.',
  },
  {
    title: 'Huawei P30',
    price: '499',
    image: 'https://i.dummyjson.com/data/products/5/thumbnail.jpg',
    description:
      'Huawei’s re-badged P30 Pro New Edition was officially unveiled yesterday in Germany and now the device has made its way to the UK.',
  },
  {
    title: 'MacBook Pro',
    price: '1749',
    image: 'https://i.dummyjson.com/data/products/6/thumbnail.png',
    description:
      'MacBook Pro 2021 with mini-LED display may launch between September, November',
  },
  {
    title: 'Samsung Galaxy Book',
    price: '1499',
    image: 'https://i.dummyjson.com/data/products/7/thumbnail.jpg',
    description:
      'Samsung Galaxy Book S (2020) Laptop With Intel Lakefield Chip, 8GB of RAM Launched',
  },
  {
    title: 'Microsoft Surface Laptop 4',
    price: '1499',
    image: 'https://i.dummyjson.com/data/products/8/thumbnail.jpg',
    description:
      'Style and speed. Stand out on HD video calls backed by Studio Mics. Capture ideas on the vibrant touchscreen.',
  },
  {
    title: 'Infinix INBOOK',
    price: '1099',
    image: 'https://i.dummyjson.com/data/products/9/thumbnail.jpg',
    description: 'Infinix Inbook X1 Ci3 10th 8GB 256GB 14 Win10 Grey – 1 Year Warranty',
  },
  {
    title: 'HP Pavilion 15-DK1056WM',
    price: '1099',
    image: 'https://i.dummyjson.com/data/products/10/thumbnail.jpeg',
    description:
      'HP Pavilion 15-DK1056WM Gaming Laptop 10th Gen Core i5, 8GB, 256GB SSD, GTX 1650 4GB, Windows 10',
  },
  {
    title: 'perfume Oil',
    price: '13',
    image: 'https://i.dummyjson.com/data/products/11/thumbnail.jpg',
    description:
      'Mega Discount, Impression of Acqua Di Gio by GiorgioArmani concentrated attar perfume Oil',
  },
  {
    title: 'Brown Perfume',
    price: '40',
    image: 'https://i.dummyjson.com/data/products/12/thumbnail.jpg',
    description: 'Royal_Mirage Sport Brown Perfume for Men & Women - 120ml',
  },
  {
    title: 'Fog Scent Xpressio Perfume',
    price: '13',
    image: 'https://i.dummyjson.com/data/products/13/thumbnail.webp',
    description:
      'Product details of Best Fog Scent Xpressio Perfume 100ml For Men cool long lasting perfumes for Men',
  },
  {
    title: 'Non-Alcoholic Concentrated Perfume Oil',
    price: '120',
    image: 'https://i.dummyjson.com/data/products/14/thumbnail.jpg',
    description:
      'Original Al Munakh® by Mahal Al Musk | Our Impression of Climate | 6ml Non-Alcoholic Concentrated Perfume Oil',
  },
  {
    title: 'Eau De Perfume Spray',
    price: '30',
    image: 'https://i.dummyjson.com/data/products/15/thumbnail.jpg',
    description:
      'Genuine Al-Rehab spray perfume from UAE/Saudi Arabia/Yemen High Quality',
  },
  {
    title: 'Hyaluronic Acid Serum',
    price: '19',
    image: 'https://i.dummyjson.com/data/products/16/thumbnail.jpg',
    description:
      "L'OrÃ©al Paris introduces Hyaluron Expert Replumping Serum formulated with 1.5% Hyaluronic Acid",
  },
  {
    title: 'Tree Oil 30ml',
    price: '12',
    image: 'https://i.dummyjson.com/data/products/17/thumbnail.jpg',
    description:
      'Tea tree oil contains a number of compounds, including terpinen-4-ol, that have been shown to kill certain bacteria,',
  },
  {
    title: 'Oil Free Moisturizer 100ml',
    price: '40',
    image: 'https://i.dummyjson.com/data/products/18/thumbnail.jpg',
    description:
      'Dermive Oil Free Moisturizer with SPF 20 is specifically formulated with ceramides, hyaluronic acid & sunscreen.',
  },
  {
    title: 'Skin Beauty Serum.',
    price: '46',
    image: 'https://i.dummyjson.com/data/products/19/thumbnail.jpg',
    description:
      'Product name: rorec collagen hyaluronic acid white face serum riceNet weight: 15 m',
  },
  {
    title: 'Freckle Treatment Cream- 15gm',
    price: '70',
    image: 'https://i.dummyjson.com/data/products/20/thumbnail.jpg',
    description:
      "Fair & Clear is Pakistan's only pure Freckle cream which helpsfade Freckles, Darkspots and pigments. Mercury level is 0%, so there are no side effects.",
  },
  {
    title: '- Daal Masoor 500 grams',
    price: '20',
    image: 'https://i.dummyjson.com/data/products/21/thumbnail.png',
    description: 'Fine quality Branded Product Keep in a cool and dry place',
  },
  {
    title: 'Elbow Macaroni - 400 gm',
    price: '14',
    image: 'https://i.dummyjson.com/data/products/22/thumbnail.jpg',
    description: 'Product details of Bake Parlor Big Elbow Macaroni - 400 gm',
  },
  {
    title: 'Orange Essence Food Flavou',
    price: '14',
    image: 'https://i.dummyjson.com/data/products/23/thumbnail.jpg',
    description:
      'Specifications of Orange Essence Food Flavour For Cakes and Baking Food Item',
  },
  {
    title: 'cereals muesli fruit nuts',
    price: '46',
    image: 'https://i.dummyjson.com/data/products/24/thumbnail.jpg',
    description:
      'original fauji cereal muesli 250gm box pack original fauji cereals muesli fruit nuts flakes breakfast cereal break fast faujicereals cerels cerel foji fouji',
  },
  {
    title: 'Gulab Powder 50 Gram',
    price: '70',
    image: 'https://i.dummyjson.com/data/products/25/thumbnail.jpg',
    description: 'Dry Rose Flower Powder Gulab Powder 50 Gram • Treats Wounds',
  },
  {
    title: 'Plant Hanger For Home',
    price: '41',
    image: 'https://i.dummyjson.com/data/products/26/thumbnail.jpg',
    description:
      'Boho Decor Plant Hanger For Home Wall Decoration Macrame Wall Hanging Shelf',
  },
  {
    title: 'Flying Wooden Bird',
    price: '51',
    image: 'https://i.dummyjson.com/data/products/27/thumbnail.webp',
    description:
      'Package Include 6 Birds with Adhesive Tape Shape: 3D Shaped Wooden Birds Material: Wooden MDF, Laminated 3.5mm',
  },
  {
    title: '3D Embellishment Art Lamp',
    price: '20',
    image: 'https://i.dummyjson.com/data/products/28/thumbnail.jpg',
    description:
      '3D led lamp sticker Wall sticker 3d wall art light on/off button cell operated (included)',
  },
  {
    title: 'Handcraft Chinese style',
    price: '60',
    image: 'https://i.dummyjson.com/data/products/29/thumbnail.webp',
    description:
      'Handcraft Chinese style art luxury palace hotel villa mansion home decor ceramic vase with brass fruit plate',
  },
  {
    title: 'Key Holder',
    price: '30',
    image: 'https://i.dummyjson.com/data/products/30/thumbnail.jpg',
    description:
      'Attractive DesignMetallic materialFour key hooksReliable & DurablePremium Quality',
  },
];

//gives each product an id and a brand
tech.map((item, i) => {
  item.rating = random(dummyRating);
  item.id = i;
  item.brand = 'tech';
  item.addedToCart = false;
  item.colors = [
    { name: 'White', class: 'bg-white', selectedClass: 'ring-gray-400' },
    { name: 'Gray', class: 'bg-gray-200', selectedClass: 'ring-gray-400' },
    { name: 'Black', class: 'bg-gray-900', selectedClass: 'ring-gray-900' },
  ];
  item.sizes = [
    { name: 'XXS', inStock: true },
    { name: 'XS', inStock: true },
    { name: 'S', inStock: true },
    { name: 'M', inStock: true },
    { name: 'L', inStock: true },
    { name: 'XL', inStock: true },
    { name: 'XXL', inStock: true },
    { name: 'XXXL', inStock: false },
  ];
  return item;
});

//clothing products
const clothing = [
  {
    id: 1,
    title: 'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops',
    price: 109.95,
    description:
      'Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday',
    category: "men's clothing",
    image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
  },
  {
    id: 2,
    title: 'Mens Casual Premium Slim Fit T-Shirts ',
    price: 22.3,
    description:
      'Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.',
    category: "men's clothing",
    image: 'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',
  },
  {
    id: 3,
    title: 'Mens Cotton Jacket',
    price: 55.99,
    description:
      'great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.',
    category: "men's clothing",
    image: 'https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg',
  },
  {
    id: 4,
    title: 'Mens Casual Slim Fit',
    price: 15.99,
    description:
      'The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.',
    category: "men's clothing",
    image: 'https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg',
  },
  {
    id: 5,
    title: "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
    price: 695,
    description:
      "From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.",
    category: 'jewelery',
    image: 'https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg',
  },
  {
    id: 6,
    title: 'Solid Gold Petite Micropave ',
    price: 168,
    description:
      'Satisfaction Guaranteed. Return or exchange any order within 30 days.Designed and sold by Hafeez Center in the United States. Satisfaction Guaranteed. Return or exchange any order within 30 days.',
    category: 'jewelery',
    image: 'https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg',
  },
  {
    id: 7,
    title: 'White Gold Plated Princess',
    price: 9.99,
    description:
      "Classic Created Wedding Engagement Solitaire Diamond Promise Ring for Her. Gifts to spoil your love more for Engagement, Wedding, Anniversary, Valentine's Day...",
    category: 'jewelery',
    image: 'https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg',
  },
  {
    id: 8,
    title: 'Pierced Owl Rose Gold Plated Stainless Steel Double',
    price: 10.99,
    description:
      'Rose Gold Plated Double Flared Tunnel Plug Earrings. Made of 316L Stainless Steel',
    category: 'jewelery',
    image: 'https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg',
  },
  {
    id: 9,
    title: 'WD 2TB Elements Portable External Hard Drive - USB 3.0 ',
    price: 64,
    description:
      'USB 3.0 and USB 2.0 Compatibility Fast data transfers Improve PC Performance High Capacity; Compatibility Formatted NTFS for Windows 10, Windows 8.1, Windows 7; Reformatting may be required for other operating systems; Compatibility may vary depending on user’s hardware configuration and operating system',
    category: 'electronics',
    image: 'https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg',
  },
  {
    id: 10,
    title: 'SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s',
    price: 109,
    description:
      'Easy upgrade for faster boot up, shutdown, application load and response (As compared to 5400 RPM SATA 2.5” hard drive; Based on published specifications and internal benchmarking tests using PCMark vantage scores) Boosts burst write performance, making it ideal for typical PC workloads The perfect balance of performance and reliability Read/write speeds of up to 535MB/s/450MB/s (Based on internal testing; Performance may vary depending upon drive capacity, host device, OS and application.)',
    category: 'electronics',
    image: 'https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg',
  },
  {
    id: 11,
    title: 'Silicon Power 256GB SSD 3D NAND A55 SLC Cache Performance Boost SATA III 2.5',
    price: 109,
    description:
      '3D NAND flash are applied to deliver high transfer speeds Remarkable transfer speeds that enable faster bootup and improved overall system performance. The advanced SLC Cache Technology allows performance boost and longer lifespan 7mm slim design suitable for Ultrabooks and Ultra-slim notebooks. Supports TRIM command, Garbage Collection technology, RAID, and ECC (Error Checking & Correction) to provide the optimized performance and enhanced reliability.',
    category: 'electronics',
    image: 'https://fakestoreapi.com/img/71kWymZ+c+L._AC_SX679_.jpg',
  },
  {
    id: 12,
    title: 'WD 4TB Gaming Drive Works with Playstation 4 Portable External Hard Drive',
    price: 114,
    description:
      "Expand your PS4 gaming experience, Play anywhere Fast and easy, setup Sleek design with high capacity, 3-year manufacturer's limited warranty",
    category: 'electronics',
    image: 'https://fakestoreapi.com/img/61mtL65D4cL._AC_SX679_.jpg',
  },
  {
    id: 13,
    title: 'Acer SB220Q bi 21.5 inches Full HD (1920 x 1080) IPS Ultra-Thin',
    price: 599,
    description:
      '21. 5 inches Full HD (1920 x 1080) widescreen IPS display And Radeon free Sync technology. No compatibility for VESA Mount Refresh Rate: 75Hz - Using HDMI port Zero-frame design | ultra-thin | 4ms response time | IPS panel Aspect ratio - 16: 9. Color Supported - 16. 7 million colors. Brightness - 250 nit Tilt angle -5 degree to 15 degree. Horizontal viewing angle-178 degree. Vertical viewing angle-178 degree 75 hertz',
    category: 'electronics',
    image: 'https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_.jpg',
  },
  {
    id: 14,
    title:
      'Samsung 49-Inch CHG90 144Hz Curved Gaming Monitor (LC49HG90DMNXZA) – Super Ultrawide Screen QLED ',
    price: 999.99,
    description:
      '49 INCH SUPER ULTRAWIDE 32:9 CURVED GAMING MONITOR with dual 27 inch screen side by side QUANTUM DOT (QLED) TECHNOLOGY, HDR support and factory calibration provides stunningly realistic and accurate color and contrast 144HZ HIGH REFRESH RATE and 1ms ultra fast response time work to eliminate motion blur, ghosting, and reduce input lag',
    category: 'electronics',
    image: 'https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg',
  },
  {
    id: 15,
    title: "BIYLACLESEN Women's 3-in-1 Snowboard Jacket Winter Coats",
    price: 56.99,
    description:
      'Note:The Jackets is US standard size, Please choose size as your usual wear Material: 100% Polyester; Detachable Liner Fabric: Warm Fleece. Detachable Functional Liner: Skin Friendly, Lightweigt and Warm.Stand Collar Liner jacket, keep you warm in cold weather. Zippered Pockets: 2 Zippered Hand Pockets, 2 Zippered Pockets on Chest (enough to keep cards or keys)and 1 Hidden Pocket Inside.Zippered Hand Pockets and Hidden Pocket keep your things secure. Humanized Design: Adjustable and Detachable Hood and Adjustable cuff to prevent the wind and water,for a comfortable fit. 3 in 1 Detachable Design provide more convenience, you can separate the coat and inner as needed, or wear it together. It is suitable for different season and help you adapt to different climates',
    category: "women's clothing",
    image: 'https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_.jpg',
  },
  {
    id: 16,
    title: "Lock and Love Women's Removable Hooded Faux Leather Moto Biker Jacket",
    price: 29.95,
    description:
      '100% POLYURETHANE(shell) 100% POLYESTER(lining) 75% POLYESTER 25% COTTON (SWEATER), Faux leather material for style and comfort / 2 pockets of front, 2-For-One Hooded denim style faux leather jacket, Button detail on waist / Detail stitching at sides, HAND WASH ONLY / DO NOT BLEACH / LINE DRY / DO NOT IRON',
    category: "women's clothing",
    image: 'https://fakestoreapi.com/img/81XH0e8fefL._AC_UY879_.jpg',
  },
  {
    id: 17,
    title: 'Rain Jacket Women Windbreaker Striped Climbing Raincoats',
    price: 39.99,
    description:
      "Lightweight perfet for trip or casual wear---Long sleeve with hooded, adjustable drawstring waist design. Button and zipper front closure raincoat, fully stripes Lined and The Raincoat has 2 side pockets are a good size to hold all kinds of things, it covers the hips, and the hood is generous but doesn't overdo it.Attached Cotton Lined Hood with Adjustable Drawstrings give it a real styled look.",
    category: "women's clothing",
    image: 'https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2.jpg',
  },
  {
    id: 18,
    title: "MBJ Women's Solid Short Sleeve Boat Neck V ",
    price: 9.85,
    description:
      '95% RAYON 5% SPANDEX, Made in USA or Imported, Do Not Bleach, Lightweight fabric with great stretch for comfort, Ribbed on sleeves and neckline / Double stitching on bottom hem',
    category: "women's clothing",
    image: 'https://fakestoreapi.com/img/71z3kpMAYsL._AC_UY879_.jpg',
  },
  {
    id: 19,
    title: "Opna Women's Short Sleeve Moisture",
    price: 7.95,
    description:
      '100% Polyester, Machine wash, 100% cationic polyester interlock, Machine Wash & Pre Shrunk for a Great Fit, Lightweight, roomy and highly breathable with moisture wicking fabric which helps to keep moisture away, Soft Lightweight Fabric with comfortable V-neck collar and a slimmer fit, delivers a sleek, more feminine silhouette and Added Comfort',
    category: "women's clothing",
    image: 'https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_.jpg',
  },
  {
    id: 20,
    title: 'DANVOUY Womens T Shirt Casual Cotton Short',
    price: 12.99,
    description:
      '95%Cotton,5%Spandex, Features: Casual, Short Sleeve, Letter Print,V-Neck,Fashion Tees, The fabric is soft and has some stretch., Occasion: Casual/Office/Beach/School/Home/Street. Season: Spring,Summer,Autumn,Winter.',
    category: "women's clothing",
    image: 'https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg',
  },
];

//gives each product and id and a brand
clothing.map(item => {
  item.rating = random(dummyRating);
  item.brand = 'clothing';
  item.addedToCart = false;
  item.colors = [
    { name: 'White', class: 'bg-white', selectedClass: 'ring-gray-400' },
    { name: 'Gray', class: 'bg-gray-200', selectedClass: 'ring-gray-400' },
    { name: 'Black', class: 'bg-gray-900', selectedClass: 'ring-gray-900' },
  ];
  item.sizes = [
    { name: 'XXS', inStock: true },
    { name: 'XS', inStock: true },
    { name: 'S', inStock: true },
    { name: 'M', inStock: true },
    { name: 'L', inStock: true },
    { name: 'XL', inStock: true },
    { name: 'XXL', inStock: true },
    { name: 'XXXL', inStock: false },
  ];
  return item;
});

export { products, clothing, tech , LandingPageProducts};
