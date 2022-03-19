import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {
    _id: uuid(),
    productName: "KILLER",
    price: 2000,
    description: "KL-1C Analog Watch - For Men",
    categoryName: "Mens",
    image:
      "https://rukminim2.flixcart.com/image/580/696/kqgyhe80/watch/k/m/j/kl-1c-killer-original-imag4gwsfjnbphhv.jpeg?q=50",
    latest: true,
    rate: 4.2,
    alt: "Killer watch",
    oldPrice: 3000,
    fastDelivery: true,
    inStock: true,
    discount: Math.floor(Math.random() * 100),
  },
  {
    _id: uuid(),
    productName: "POLO HUNTER",
    price: 1900,
    description: "PH-1331 Pack Of 2 Unique Combo Analog Watch - For Men",
    categoryName: "Mens",
    image:
      "https://rukminim2.flixcart.com/image/880/1056/k5vcya80pkrrdj/watch/8/p/h/1331-polo-hunter-original-imafce58zt4bzsxq.jpeg?q=50",
    latest: true,
    rate: 4,
    alt: "POLO HUNTER",
    oldPrice: 3000,
    fastDelivery: false,
    inStock: false,
    discount: Math.floor(Math.random() * 100),
  },
  {
    _id: uuid(),
    productName: "Dressberry",
    price: 649,
    description: "1185009 Analog Watch - For Women",
    categoryName: "Womens",
    image:
      "https://rukminim2.flixcart.com/image/880/1056/l0fm07k0/watch/o/n/r/-original-imagc7vgga2wxegf.jpeg?q=50",
    latest: true,
    rate: 3.6,
    alt: "Dressberry",
    oldPrice: 2100,
    fastDelivery: true,
    inStock: false,
    discount: Math.floor(Math.random() * 100),
  },
  {
    _id: uuid(),
    productName: "Shunya",
    price: 169,
    description:
      "Black Mesh Magnetic Belt 2021 Quartz Black Dial Adjustable Luxurious Fashion Stylish Analog Watch - For Women",
    categoryName: "Womens",
    image:
      "https://rukminim2.flixcart.com/image/880/1056/ksgehzk0/watch/q/5/t/1-black-mesh-magnetic-belt-2021-quartz-black-dial-adjustable-original-imag6yuvyu8bas7h.jpeg?q=50",
    latest: true,
    rate: 3,
    alt: "Shunya",
    oldPrice: 1499,
    fastDelivery: false,
    inStock: false,
    discount: Math.floor(Math.random() * 100),
  },
  {
    _id: uuid(),
    productName: "hala",
    price: 1600,
    description:
      "VKRDGC810 Multi-Function Stylish Sports Militaries New Arrival Silicon Strap Digital Pack of 2 Combo Men And Boys Hot And Cool Best Quality Evers New Year Fashion Sports Digital Stylish Lights New Generation Amazing Look Cool Style Digital Watch Digital Watch - For Boys",
    categoryName: "Boys",
    image:
      "https://rukminim2.flixcart.com/image/880/1056/krz97rk0/watch/a/d/u/abx1017-gents-green-solitary-camouflage-pattern-new-generation-original-imag5n3muvcb3xtv.jpeg?q=50",
    latest: true,
    rate: 2.1,
    alt: "hala watch",
    oldPrice: 3000,
    fastDelivery: true,
    inStock: true,
    discount: Math.floor(Math.random() * 100),
  },
  {
    _id: uuid(),
    productName: "POLO HUNTER",
    price: 253,
    description: "KL-1C Analog Watch - For Men",
    categoryName: "Boys",
    image:
      "https://rukminim2.flixcart.com/image/880/1056/kabe9ow0pkrrdj/watch/w/h/w/9032-polo-hunter-original-imafsfhftyrf3azn.jpeg?q=50",
    latest: true,
    rate: 2,
    alt: "POLO HUNTER",
    oldPrice: 2199,
    fastDelivery: false,
    inStock: true,
    discount: Math.floor(Math.random() * 100),
  },
  {
    _id: uuid(),
    productName: "Rizzly",
    price: 147,
    description: "118-Girls Stylish Analog Analog Watch - For Girls",
    categoryName: "Girls",
    image:
      "https://rukminim2.flixcart.com/image/880/1056/k6gsk280/watch/h/r/y/118-shiny-and-slim-rizzly-original-imafzp58juqtawzd.jpeg?q=50",
    latest: true,
    rate: 1.6,
    alt: "Rizzly",
    oldPrice: 1999,
    fastDelivery: true,
    inStock: true,
    discount: Math.floor(Math.random() * 100),
  },
  {
    _id: uuid(),
    productName: "Daniel Jubile",
    price: 187,
    description:
      "Luxury Jubile Women Silver girls watch for women watches girls stylish ladies watches Silver Black Color Analog Watch - For Girls",
    categoryName: "Girls",
    image:
      "https://rukminim2.flixcart.com/image/880/1056/kyg5zm80/watch/d/0/h/luxury-jubile-women-silver-daniel-jubile-girls-original-imagaz9ax8tzfqhz.jpeg?q=50",
    latest: true,
    rate: 1,
    alt: "Daniel Jubile",
    oldPrice: 2199,
    fastDelivery: false,
    inStock: true,
    discount: Math.floor(Math.random() * 100),
  },
];
