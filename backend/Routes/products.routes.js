import express from "express";
const router = express.Router();

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
      description:"1.96 HD Display | BT Calling"
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

export default router;
