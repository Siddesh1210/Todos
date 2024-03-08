import express from "express";
const router = express.Router();

//https://curious-cap-bull.cyclic.app
router.get("/best-seller", (req, res) => {
  const data = [
    {
      productImage:
        "https://www.fireboltt.com/cdn/shop/files/grenade-black-steel_1_360x.png?v=1687251706",
      productName: "Grenade",
      price: 1999,
      rating: 5.1,
      description: "1.39 Display | BT Calling",
    },
    {
      productImage:
        "https://www.fireboltt.com/cdn/shop/files/ultimate-black_1_360x.png?v=1683028277",
      productName: "Ultimate",
      price: 4499,
      rating: 5.7,
      description: "Amoled | BT Calling",
    },
    {
      productImage:
        "https://www.fireboltt.com/cdn/shop/files/dagger-luxe-black-ss_1_360x.png?v=1686048646",
      productName: "Luxe",
      price: 3999,
      rating: 5.4,
      description: "1.96 HD Display | BT Calling",
    },
    {
      productImage:
        "https://cdn.shopify.com/s/files/1/0137/0292/2286/products/supernova-black_1_360x.png?v=1673500420",
      productName: "Supernova",
      price: 1899,
      rating: 5.3,
      description: "1.12 Display | BT Calling",
    },
    {
      productImage:
        "https://cdn.shopify.com/s/files/1/0137/0292/2286/files/asteroid-orange_1_360x.png?v=1692944180",
      productName: "Asteroid",
      price: 2499,
      rating: 5.6,
      description: "600 Nits Display | 600mAh Battery",
    },
    {
      productImage:
        "https://cdn.shopify.com/s/files/1/0137/0292/2286/files/ninja-call-pro-max_360x.png?v=1687756591",
      productName: "Ninja Pro",
      price: 1999,
      rating: 5.4,
      description: "123 Sports Mode | BT Calling",
    },
    {
      productImage:
        "https://cdn.shopify.com/s/files/1/0137/0292/2286/products/ninja-calling-pro-plus-black_1_360x.png?v=1675430352",
      productName: "Tank",
      price: 1499,
      rating: 5.1,
      description: "AMOLED | BT Calling",
    },
  ];
  return res.status(200).json({ watches: data });
});

router.get("/hot-deals", (req, res) => {
  const data = [
    {
      productImage:
        "https://www.gonoise.com/cdn/shop/files/Artboard1_008d9734-950c-4f5b-ba52-89576e0d7e79_480x.png?v=1709904212",
      productName: "Aura Buds",
      price: 1599,
      rating: 5.4,
      description: "Quad Mic | 60Hr Battery",
    },
    {
      productImage:
        "https://www.boat-lifestyle.com/cdn/shop/products/3_2f362f6e-d3c4-43aa-98db-39bae2d807da_600x.png?v=1676449007",
      productName: "Airdopes 170",
      price: 1499,
      rating: 5.5,
      description: "13mm Drivers |  50Hr Battery ",
    },
    {
      productImage:
        "https://www.fireboltt.com/cdn/shop/products/Fire-boltt-BE1400-4_400x.png?v=1624086223",
      productName: "Earbud BE1400",
      price: 1399,
      rating: 5.2,
      description: "Auto-noise Cancellation",
    },
    {
      productImage:
        "https://www.gonoise.com/cdn/shop/products/Frame20_9881146b-ff21-4de0-9afb-1e017d7171ea_360x.png?v=1705293690",
      productName: "VS102 Pro",
      price: 1799,
      rating: 5.7,
      description: "ANC | 70Hr Battery",
    },
    {
      productImage:
        "https://www.boat-lifestyle.com/cdn/shop/products/Grey_560cad08-698b-45d6-a3dd-d10ae3fec8ee_600x.png?v=1697625863",
      productName: "Airdopes Pro",
      price: 2499,
      rating: 5.6,
      description: "IPX5 Sweat | 15mm Driver",
    },
    {
      productImage:
        "https://www.fireboltt.com/cdn/shop/products/Fire-boltt-BE1200-2_400x.png?v=1624082627",
      productName: "Earbuds BE1200",
      price: 1999,
      rating: 5.3,
      description: "8D Sound | 60Hr Battery",
    },
    {
      productImage:
        "https://www.gonoise.com/cdn/shop/files/1.1_2_d71572ff-643a-4c75-a836-da9dbd21543a_360x.png?v=1698042678",
      productName: "Buds-X-Prime",
      price: 1599,
      rating: 5.5,
      description: "Quad Mic | ANC",
    },
  ];
  return res.status(200).json({ earbuds: data });
});

export default router;
