const affiliateLinks = [
  {
    url: "https://s.shopee.co.th/5q4u89u55C",
    img: "https://down-th.img.susercontent.com/file/th-11134207-7ra0t-mcpqu96wjmrk2d@resize_w1920_nl.webp",
    title: "สินค้าแนะนำ 1"
  },
  {
    url: "https://s.shopee.co.th/5q4u89u55C",
    img: "https://down-th.img.susercontent.com/file/th-11134207-7ra0t-mcpqu96wjmrk2d@resize_w1920_nl.webp",
    title: "สินค้าแนะนำ 2"
  },
  {
    url: "https://s.shopee.co.th/5q4u89u55C",
    img: "https://down-th.img.susercontent.com/file/th-11134207-81ztp-mm1kgbwl7vgh32@resize_w1920_nl.webp",
    title: "สินค้าแนะนำ 3"
  }
];

function getRandomProduct() {
  return affiliateLinks[Math.floor(Math.random() * affiliateLinks.length)];
}