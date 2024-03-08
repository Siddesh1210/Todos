import express from "express";
const router = express.Router();

//https://curious-cap-bull.cyclic.app
router.get("/best-seller", (req, res) => {
  const data = [
    {
      productId: 1,
      productImage:
        "https://www.fireboltt.com/cdn/shop/files/grenade-black-steel_1_360x.png?v=1687251706",
      productName: "Grenade",
      price: 1999,
      rating: 4.1,
      description: "1.39 Display | BT Calling",
    },
    {
      productId: 2,
      productImage:
        "https://www.fireboltt.com/cdn/shop/files/ultimate-black_1_360x.png?v=1683028277",
      productName: "Ultimate",
      price: 4499,
      rating: 4.7,
      description: "Amoled | BT Calling",
    },
    {
      productId: 3,
      productImage:
        "https://www.fireboltt.com/cdn/shop/files/dagger-luxe-black-ss_1_360x.png?v=1686048646",
      productName: "Luxe",
      price: 3999,
      rating: 4.4,
      description: "1.96 HD Display | BT Calling",
    },
    {
      productId: 4,
      productImage:
        "https://cdn.shopify.com/s/files/1/0137/0292/2286/products/supernova-black_1_360x.png?v=1673500420",
      productName: "Supernova",
      price: 1899,
      rating: 4.3,
      description: "1.12 Display | BT Calling",
    },
    {
      productId: 5,
      productImage:
        "https://cdn.shopify.com/s/files/1/0137/0292/2286/files/asteroid-orange_1_360x.png?v=1692944180",
      productName: "Asteroid",
      price: 2499,
      rating: 4.6,
      description: "600 Nits Display | 600mAh Battery",
    },
    {
      productId: 6,
      productImage:
        "https://cdn.shopify.com/s/files/1/0137/0292/2286/files/ninja-call-pro-max_360x.png?v=1687756591",
      productName: "Ninja Pro",
      price: 1999,
      rating: 4.4,
      description: "123 Sports Mode | BT Calling",
    },
    {
      productId: 7,
      productImage:
        "https://cdn.shopify.com/s/files/1/0137/0292/2286/products/ninja-calling-pro-plus-black_1_360x.png?v=1675430352",
      productName: "Tank",
      price: 1499,
      rating: 4.1,
      description: "AMOLED | BT Calling",
    },
  ];
  return res.status(200).json({ watches: data });
});

router.get("/hot-deals", (req, res) => {
  const data = [
    {
      productId: 1,
      productImage:
        "https://www.gonoise.com/cdn/shop/files/Artboard1_008d9734-950c-4f5b-ba52-89576e0d7e79_480x.png?v=1709904212",
      productName: "Aura Buds",
      price: 1599,
      rating: 4.4,
      description: "Quad Mic | 60Hr Battery",
    },
    {
      productId: 2,
      productImage:
        "https://www.boat-lifestyle.com/cdn/shop/products/3_2f362f6e-d3c4-43aa-98db-39bae2d807da_600x.png?v=1676449007",
      productName: "Airdopes 170",
      price: 1499,
      rating: 4.5,
      description: "13mm Drivers |  50Hr Battery ",
    },
    {
      productId: 3,
      productImage:
        "https://www.fireboltt.com/cdn/shop/products/Fire-boltt-BE1400-4_400x.png?v=1624086223",
      productName: "Earbud BE1400",
      price: 1399,
      rating: 4.2,
      description: "Auto-noise Cancellation",
    },
    {
      productId: 4,
      productImage:
        "https://www.gonoise.com/cdn/shop/products/Frame20_9881146b-ff21-4de0-9afb-1e017d7171ea_360x.png?v=1705293690",
      productName: "VS102 Pro",
      price: 1799,
      rating: 4.7,
      description: "ANC | 70Hr Battery",
    },
    {
      productId: 5,
      productImage:
        "https://www.boat-lifestyle.com/cdn/shop/products/Grey_560cad08-698b-45d6-a3dd-d10ae3fec8ee_600x.png?v=1697625863",
      productName: "Airdopes Pro",
      price: 2499,
      rating: 4.6,
      description: "IPX5 Sweat | 15mm Driver",
    },
    {
      productId: 6,
      productImage:
        "https://www.fireboltt.com/cdn/shop/products/Fire-boltt-BE1200-2_400x.png?v=1624082627",
      productName: "Earbuds BE1200",
      price: 1999,
      rating: 4.3,
      description: "8D Sound | 60Hr Battery",
    },
    {
      productId: 7,
      productImage:
        "https://www.gonoise.com/cdn/shop/files/1.1_2_d71572ff-643a-4c75-a836-da9dbd21543a_360x.png?v=1698042678",
      productName: "Buds-X-Prime",
      price: 1599,
      rating: 4.5,
      description: "Quad Mic | ANC",
    },
  ];
  return res.status(200).json({ earbuds: data });
});

router.get("/just-trending", (req, res) => {
  const data = [
    {
      productId: 1,
      productImage:
        "https://m.media-amazon.com/images/I/51GGNToj7aL._AC_UL480_FMwebp_QL65_.jpg",
      productName: "Acer Nitro V",
      price: 78977,
      rating: 4.6,
      description: "Core i5 | Graphics 6GB",
    },
    {
      productId: 2,
      productImage:
        "https://m.media-amazon.com/images/I/712raiwnj9L._AC_UY327_FMwebp_QL65_.jpg",
      productName: "HP 15s",
      price: 53990,
      rating: 4.8,
      description: "i5 12Gen | 16GB DDR4",
    },
    {
      productId: 3,
      productImage:
        "https://m.media-amazon.com/images/I/61LKYyGTn7L._AC_UL480_FMwebp_QL65_.jpg",
      productName: "Dell Inspire",
      price: 37999,
      rating: 4.2,
      description: "i3 10Gen | 512SSD",
    },
    {
      productId: 4,
      productImage:
        "https://m.media-amazon.com/images/I/71HzM0aj+9L._AC_UL480_FMwebp_QL65_.jpg",
      productName: "Lenovo IdeaPad",
      price: 53959,
      rating: 4.5,
      description: "i5 12Gen | FHD IPS",
    },
    {
      productId: 5,
      productImage:
        "https://m.media-amazon.com/images/I/71lYhcc++AL._AC_UY327_FMwebp_QL65_.jpg",
      productName: "Asus VivoBook",
      price: 29999,
      rating: 4.4,
      description: "Intel Celeron | 256SSD",
    },
    {
      productId: 6,
      productImage:
        "https://m.media-amazon.com/images/I/61aaFLxqFKL._AC_UY327_FMwebp_QL65_.jpg",
      productName: "Honor MagicBook",
      price: 46990,
      rating: 4.2,
      description: "i5 12Gen | FHD IPS",
    },
    {
      productId: 7,
      productImage:
        "https://m.media-amazon.com/images/I/51+SoS8bWbL._AC_UY327_FMwebp_QL65_.jpg",
      productName: "Lenovo V15",
      price: 36999,
      rating: 4.7,
      description: "i3 12Gen | 512SSD",
    },
  ];
  return res.status(200).json({ laptops: data });
});

export default router;
