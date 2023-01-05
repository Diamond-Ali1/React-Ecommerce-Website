import { profile4, profile5, profile6, profile7, profile8, profile9 } from './images';

//customer reviews
const Reviews = [
  {
    name: 'Emily Thompson',
    image: profile7,
    rating: '5',
    review:
      'I am so impressed with the quality of the products I have purchased from this ecommerce store. The prices are competitive and the items are always as described. I have also had a great experience with their customer service - they have always been very helpful and responsive to my questions. I will definitely continue to shop at this store.',
  },
  {
    name: 'Michael Smith',
    image: profile4,
    rating: '4.5',
    review:
      'I absolutely love this store! The products are high quality and the prices are very reasonable. The customer service is also top-notch - they are always quick to respond to any questions or concerns I have. I will definitely be shopping here again in the future.',
  },
  {
    name: 'David Rodriguez',
    image: profile5,
    rating: '5',
    review:
      'I recently made a purchase from this ecommerce store and I am blown away by the speed and efficiency of their shipping. I received my order within just a few days and everything was exactly as described. I am extremely happy with my purchase and I will definitely be a returning customer',
  },
  {
    name: 'Diamond Ali',
    image: profile6,
    rating: '4',
    review:
      'I have been shopping at this ecommerce store for years and I have never been disappointed. They have a great selection of products at affordable prices, and their customer service is always friendly and helpful. I highly recommend this store to anyone looking for a great online shopping experience.',
  },
  {
    name: 'Peter Parker',
    image: profile8,
    rating: '4.5',
    review:
      'I recently discovered this ecommerce store and I am so glad I did! The prices are very reasonable and the products are of excellent quality. I have already made several purchases and I am extremely happy with each one. I highly recommend this store to anyone looking for a great online shopping experience',
  },
  {
    name: 'Steve Rogers',
    image: profile9,
    rating: '4.5',
    review:
      'I recently purchased this dining room table and I am very happy with it. The quality of the materials and craftsmanship is excellent, and it looks beautiful in my home. The table is sturdy and well-constructed, and it can easily accommodate my family of six. I would highly recommend this table to others.',
  },
];

//assigns unique id to each review
Reviews.map((review, i) => {
  review.id = i;
  return review;
});

export default Reviews;
