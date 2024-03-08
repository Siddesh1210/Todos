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

router.get("/allwatches", (req, res) => {
  const data = [
    {
      productId: 1,
      productName: "Invincible Plus",
      mrp: 21999,
      salePrice: 5999,
      rating: 4.7,
      description:
        "INVINCIBLE PLUS - a true masterpiece of technology and design featuring an AMOLED Display, Bluetooth calling, 4 GB storage, and much more!",
      category: "luxury",
      features: [
        {
          img: "https://cdn.shopify.com/s/files/1/0137/0292/2286/files/display-icom.png?v=1624514301",
          title: "AMOLED Display",
        },
        {
          img: "https://cdn.shopify.com/s/files/1/0137/0292/2286/files/resolution-icon.png?v=1623731318",
          title: "High Resolution",
        },
        {
          img: "https://cdn.shopify.com/s/files/1/0137/0292/2286/files/bluetooth-calling-icon_05e9a89a-4c16-4297-b72b-4f9f44197c5a.png?v=1633437148",
          title: "Bluetooth Calling",
        },
        {
          img: "https://cdn.shopify.com/s/files/1/0137/0292/2286/files/storage-icon-2.png?v=1633523013",
          title: "4GB Inbuilt Storage",
        },
        {
          img: "https://cdn.shopify.com/s/files/1/0137/0292/2286/files/sports-modes-icon.png?v=1623386154",
          title: "300+ Sports Modes",
        },
        {
          img: "https://cdn.shopify.com/s/files/1/0137/0292/2286/files/metal-body.png?v=1629202789",
          title: "Full Metal Body",
        },
      ],
      images: [
        "https://www.fireboltt.com/cdn/shop/products/Untitled-1Artboard-8_540x.png?v=1678186270",
        "https://www.fireboltt.com/cdn/shop/products/invincible-plus-steel-website-sizeArtboard-10_540x.png?v=1678186270",
        "https://www.fireboltt.com/cdn/shop/products/Untitled-1Artboard-11_540x.png?v=1678186270",
        "https://www.fireboltt.com/cdn/shop/products/Untitled-1Artboard-12_540x.png?v=1678186270",
      ],
      coverImage:
        "https://cdn.shopify.com/s/files/1/0137/0292/2286/files/web1_copy.jpg?v=1694025837",
    },
    {
      productId: 2,
      productName: "Cyclone",
      mrp: 12999,
      salePrice: 1599,
      rating: 4.3,
      description:
        "Fire-Boltt Cyclone, which comes in vibrant colors. It features a 40.6mm (1.6) HD round display, Bluetooth calling, motion sensor gaming.",
      category: "smartwatch",
      features: [
        {
          img: "https://cdn.shopify.com/s/files/1/0137/0292/2286/files/storage-icon-2.png?v=1633523013",
          title: "1GB Inbuilt Storage",
        },
        {
          img: "https://cdn.shopify.com/s/files/1/0137/0292/2286/files/sports-modes-icon.png?v=1623386154",
          title: "300+ Sports Modes",
        },
        {
          img: "https://cdn.shopify.com/s/files/1/0137/0292/2286/files/display-icom.png?v=1624514301",
          title: "AMOLED Display",
        },
        {
          img: "https://cdn.shopify.com/s/files/1/0137/0292/2286/files/resolution-icon.png?v=1623731318",
          title: "High Resolution",
        },
        {
          img: "https://cdn.shopify.com/s/files/1/0137/0292/2286/files/bluetooth-calling-icon_05e9a89a-4c16-4297-b72b-4f9f44197c5a.png?v=1633437148",
          title: "Bluetooth Calling",
        },
      ],
      images: [
        "https://www.fireboltt.com/cdn/shop/files/cyclone-black_1_400x.png?v=1687418762",
        "https://www.fireboltt.com/cdn/shop/files/cyclone-black_2_540x.png?v=1687418760",
        "https://www.fireboltt.com/cdn/shop/files/cyclone-black_3_540x.png?v=1687418758",
        "https://www.fireboltt.com/cdn/shop/files/cyclone-black_5_540x.png?v=1687418764",
      ],
      coverImage:
        "https://cdn.shopify.com/s/files/1/0137/0292/2286/files/Cyclone-desktop-2.jpg?v=1693984661",
    },
    {
      productId: 3,
      productName: "Gladiator",
      mrp: 10999,
      salePrice: 1399,
      rating: 4.2,
      description:
        " Fire-Boltt Gladiator smartwatch that comes with a 49.7mm (1.96) HD large display, Bluetooth calling, 123 sports modes, voice assistant, and rotating crown metal body.",
      category: "smartwatch",
      features: [
        {
          img: "https://cdn.shopify.com/s/files/1/0137/0292/2286/files/storage-icon-2.png?v=1633523013",
          title: "1GB Inbuilt Storage",
        },
        {
          img: "https://cdn.shopify.com/s/files/1/0137/0292/2286/files/sports-modes-icon.png?v=1623386154",
          title: "300+ Sports Modes",
        },
        {
          img: "https://cdn.shopify.com/s/files/1/0137/0292/2286/files/display-icom.png?v=1624514301",
          title: "AMOLED Display",
        },
        {
          img: "https://cdn.shopify.com/s/files/1/0137/0292/2286/files/resolution-icon.png?v=1623731318",
          title: "High Resolution",
        },
        {
          img: "https://cdn.shopify.com/s/files/1/0137/0292/2286/files/bluetooth-calling-icon_05e9a89a-4c16-4297-b72b-4f9f44197c5a.png?v=1633437148",
          title: "Bluetooth Calling",
        },
      ],
      images: [
        "https://www.fireboltt.com/cdn/shop/products/gladiator-black_1_400x.png?v=1672284246",
        "https://www.fireboltt.com/cdn/shop/products/gladiator-black_2_540x.png?v=1672284251",
        "https://www.fireboltt.com/cdn/shop/products/gladiator-black_3_540x.png?v=1672284244",
        "https://www.fireboltt.com/cdn/shop/products/gladiator-black_4_540x.png?v=1672284248",
      ],
      coverImage:
        "https://cdn.shopify.com/s/files/1/0137/0292/2286/files/gladiator-desktop-banner_f427703b-49d7-45d6-9585-517e729e1ac0.jpg?v=1675343770",
    },
    {
      productId: 4,
      productName: "Ninja Call 2",
      mrp: 1399,
      salePrice: 7999,
      rating: 4.5,
      description:
        "A 43mm (1.7″ inch) Full-Touch Display for better view. You can also enjoy wireless calling with the feature of Bluetooth Calling along with a built-in mic and speaker.",
      category: "ninja",
      features: [
        {
          img: "https://cdn.shopify.com/s/files/1/0137/0292/2286/files/storage-icon-2.png?v=1633523013",
          title: "1GB Inbuilt Storage",
        },
        {
          img: "https://cdn.shopify.com/s/files/1/0137/0292/2286/files/sports-modes-icon.png?v=1623386154",
          title: "300+ Sports Modes",
        },
        {
          img: "https://cdn.shopify.com/s/files/1/0137/0292/2286/files/display-icom.png?v=1624514301",
          title: "AMOLED Display",
        },
        {
          img: "https://cdn.shopify.com/s/files/1/0137/0292/2286/files/resolution-icon.png?v=1623731318",
          title: "High Resolution",
        },
        {
          img: "https://cdn.shopify.com/s/files/1/0137/0292/2286/files/bluetooth-calling-icon_05e9a89a-4c16-4297-b72b-4f9f44197c5a.png?v=1633437148",
          title: "Bluetooth Calling",
        },
      ],
      images: [
        "https://www.fireboltt.com/cdn/shop/products/1_8ba02f4a-9e30-4d06-9b37-fe825036ffaa_400x.png?v=1645170761",
        "https://www.fireboltt.com/cdn/shop/products/ninjacall2_black_03_540x.png?v=1668412850",
        "https://www.fireboltt.com/cdn/shop/products/3_78ed4b5f-6e01-4f90-ab29-3ac0676f04d8_540x.png?v=1668412850",
        "https://www.fireboltt.com/cdn/shop/products/4_99cfb9c1-4f36-4a34-aebb-de1f99226cff_540x.png?v=1668412850",
      ],
      coverImage:
        "https://cdn.shopify.com/s/files/1/0137/0292/2286/files/12-Top_banner_8e063657-2bfb-437e-aa5b-37c6f2f537c2.jpg?v=1685438875",
    },
    {
      productId: 5,
      productName: "Dagger",
      mrp: 18999,
      salePrice: 3799,
      rating: 4.8,
      description:
        " Fire-Boltt Dagger is a 1.43 AMOLED Display smartwatch with Bluetooth calling, a full metal body, 466*466 pixels high resolution,.",
      category: "smartwatch",
      features: [
        {
          img: "https://cdn.shopify.com/s/files/1/0137/0292/2286/files/storage-icon-2.png?v=1633523013",
          title: "1GB Inbuilt Storage",
        },
        {
          img: "https://cdn.shopify.com/s/files/1/0137/0292/2286/files/sports-modes-icon.png?v=1623386154",
          title: "300+ Sports Modes",
        },
        {
          img: "https://cdn.shopify.com/s/files/1/0137/0292/2286/files/display-icom.png?v=1624514301",
          title: "AMOLED Display",
        },
        {
          img: "https://cdn.shopify.com/s/files/1/0137/0292/2286/files/resolution-icon.png?v=1623731318",
          title: "High Resolution",
        },
        {
          img: "https://cdn.shopify.com/s/files/1/0137/0292/2286/files/bluetooth-calling-icon_05e9a89a-4c16-4297-b72b-4f9f44197c5a.png?v=1633437148",
          title: "Bluetooth Calling",
        },
      ],
      images: [
        "https://www.fireboltt.com/cdn/shop/products/dagger-grey_1_540x.png?v=1675249296",
        "https://www.fireboltt.com/cdn/shop/products/dagger-grey_2_540x.png?v=1675249298",
        "https://www.fireboltt.com/cdn/shop/products/dagger-grey_3_540x.png?v=1675249295",
        "https://www.fireboltt.com/cdn/shop/products/dagger-grey_4_540x.png?v=1675249296",
      ],
      coverImage:
        "https://cdn.shopify.com/s/files/1/0137/0292/2286/files/dagger-01_6194770f-fe32-49e2-9f83-44c26d878d97.gif?v=1675424527",
    },
    {
      productId: 6,
      productName: "Sphere",
      mrp: 19999,
      salePrice: 1999,
      rating: 4.4,
      description:
        " Fire-Boltt Introducing the ultimate smartwatch for the adventurer in you! Our rugged smartwatch is designed to withstand even the toughest environments",
      category: "sport",
      features: [
        {
          img: "https://cdn.shopify.com/s/files/1/0137/0292/2286/files/storage-icon-2.png?v=1633523013",
          title: "1GB Inbuilt Storage",
        },
        {
          img: "https://cdn.shopify.com/s/files/1/0137/0292/2286/files/sports-modes-icon.png?v=1623386154",
          title: "300+ Sports Modes",
        },
        {
          img: "https://cdn.shopify.com/s/files/1/0137/0292/2286/files/display-icom.png?v=1624514301",
          title: "AMOLED Display",
        },
        {
          img: "https://cdn.shopify.com/s/files/1/0137/0292/2286/files/resolution-icon.png?v=1623731318",
          title: "High Resolution",
        },
        {
          img: "https://cdn.shopify.com/s/files/1/0137/0292/2286/files/bluetooth-calling-icon_05e9a89a-4c16-4297-b72b-4f9f44197c5a.png?v=1633437148",
          title: "Bluetooth Calling",
        },
      ],
      images: [
        "https://www.fireboltt.com/cdn/shop/products/Black_01_400x.png?v=1677243430",
        "https://www.fireboltt.com/cdn/shop/products/Black_02_540x.png?v=1677243427",
        "https://www.fireboltt.com/cdn/shop/products/Black_03_540x.png?v=1677243428",
        "https://www.fireboltt.com/cdn/shop/products/Black_04_540x.png?v=1677243431",
      ],
      coverImage:
        "https://cdn.shopify.com/s/files/1/0137/0292/2286/files/Sphere-desktop_2.jpg?v=1686136302",
    },
    {
      productId: 7,
      productName: "Ninja Pro Max",
      mrp: 5999,
      salePrice: 1499,
      rating: 4.2,
      description:
        "Ninja Pro Max Smartwatch features a large display of 40mm (1.6″ inch), 27 sports mode, SpO2 monitor, heart rate monitoring, and much more.",
      category: "ninja",
      features: [
        {
          img: "https://cdn.shopify.com/s/files/1/0137/0292/2286/files/storage-icon-2.png?v=1633523013",
          title: "1GB Inbuilt Storage",
        },
        {
          img: "https://cdn.shopify.com/s/files/1/0137/0292/2286/files/sports-modes-icon.png?v=1623386154",
          title: "300+ Sports Modes",
        },
        {
          img: "https://cdn.shopify.com/s/files/1/0137/0292/2286/files/display-icom.png?v=1624514301",
          title: "AMOLED Display",
        },
        {
          img: "https://cdn.shopify.com/s/files/1/0137/0292/2286/files/resolution-icon.png?v=1623731318",
          title: "High Resolution",
        },
        {
          img: "https://cdn.shopify.com/s/files/1/0137/0292/2286/files/bluetooth-calling-icon_05e9a89a-4c16-4297-b72b-4f9f44197c5a.png?v=1633437148",
          title: "Bluetooth Calling",
        },
      ],
      images: [
        "https://www.fireboltt.com/cdn/shop/products/25_8db87cd3-4e53-4ead-a784-a198596019d6_540x.png?v=1668413408",
        "https://www.fireboltt.com/cdn/shop/products/26_540x.png?v=1668413408",
        "https://www.fireboltt.com/cdn/shop/products/NinjaProMAx_pink_03_540x.png?v=1668413408",
        "https://www.fireboltt.com/cdn/shop/products/28_540x.png?v=1668413408",
      ],
      coverImage:
        "https://cdn.shopify.com/s/files/1/0137/0292/2286/files/Ninja_Pro_Max-web.jpg?v=1689855744",
    },
    {
      productId: 8,
      productName: "Blizzard Ultra",
      mrp: 20999,
      salePrice: 7999,
      rating: 4.9,
      description:
        "Blizzard Ultra features a 32.5mm (1.28) HD round display, bluetooth calling, stainless steel design, 120 sports modes, voice assistant, inbuilt games and more.",
      category: "luxury",
      features: [
        {
          img: "https://cdn.shopify.com/s/files/1/0137/0292/2286/files/storage-icon-2.png?v=1633523013",
          title: "4GB Inbuilt Storage",
        },
        {
          img: "https://cdn.shopify.com/s/files/1/0137/0292/2286/files/sports-modes-icon.png?v=1623386154",
          title: "300+ Sports Modes",
        },
        {
          img: "https://cdn.shopify.com/s/files/1/0137/0292/2286/files/display-icom.png?v=1624514301",
          title: "AMOLED Display",
        },
        {
          img: "https://cdn.shopify.com/s/files/1/0137/0292/2286/files/resolution-icon.png?v=1623731318",
          title: "High Resolution",
        },
        {
          img: "https://cdn.shopify.com/s/files/1/0137/0292/2286/files/bluetooth-calling-icon_05e9a89a-4c16-4297-b72b-4f9f44197c5a.png?v=1633437148",
          title: "Bluetooth Calling",
        },
        {
          img: "https://cdn.shopify.com/s/files/1/0137/0292/2286/files/metal-body.png?v=1629202789",
          title: "Full Metal Body",
        },
      ],
      images: [
        "https://www.fireboltt.com/cdn/shop/files/blizzard-ultra-silver_1_540x.png?v=1689334234",
        "https://www.fireboltt.com/cdn/shop/files/blizzard-ultra-silver_2_540x.png?v=1689334232",
        "https://www.fireboltt.com/cdn/shop/files/blizzard-ultra-silver_4_540x.png?v=1689334235",
      ],
      coverImage:
        "https://cdn.shopify.com/s/files/1/0137/0292/2286/files/blizzard-ultra-desktop-2.jpg?v=1693939902",
    },
    {
      productId: 9,
      productName: "Asteroid",
      mrp: 15999,
      salePrice: 1999,
      rating: 4.7,
      description:
        "Asteroid Smartwatch - a fusion of style and tech, featuring a stunning 36.3mm (1.43) AMOLED display, Bluetooth calling and low power consumption.",
      category: "smartwatch",
      features: [
        {
          img: "https://cdn.shopify.com/s/files/1/0137/0292/2286/files/storage-icon-2.png?v=1633523013",
          title: "1GB Inbuilt Storage",
        },
        {
          img: "https://cdn.shopify.com/s/files/1/0137/0292/2286/files/sports-modes-icon.png?v=1623386154",
          title: "300+ Sports Modes",
        },
        {
          img: "https://cdn.shopify.com/s/files/1/0137/0292/2286/files/display-icom.png?v=1624514301",
          title: "AMOLED Display",
        },
        {
          img: "https://cdn.shopify.com/s/files/1/0137/0292/2286/files/resolution-icon.png?v=1623731318",
          title: "High Resolution",
        },
        {
          img: "https://cdn.shopify.com/s/files/1/0137/0292/2286/files/bluetooth-calling-icon_05e9a89a-4c16-4297-b72b-4f9f44197c5a.png?v=1633437148",
          title: "Bluetooth Calling",
        },
      ],
      images: [
        "https://www.fireboltt.com/cdn/shop/files/asteroid-orange_1_540x.png?v=1692944180",
        "https://www.fireboltt.com/cdn/shop/files/asteroid-orange_3_540x.png?v=1692944177",
        "https://www.fireboltt.com/cdn/shop/files/asteroid-orange_4_540x.png?v=1692944177",
        "https://www.fireboltt.com/cdn/shop/files/asteroid-orange_5_540x.png?v=1692944178",
      ],
      coverImage:
        "https://cdn.shopify.com/s/files/1/0137/0292/2286/files/asteroid-desktop_2.jpg?v=1692590811",
    },
    {
      productId: 10,
      productName: "Ninja Fit Pro",
      mrp: 1699,
      salePrice: 10999,
      rating: 4.6,
      description:
        "Fire-Boltt introduces Ninja Fit Pro with a 50.8mm (2.0) large display, BT calling, 600 nits peak brightness, 250mAh battery, Voice assistant, 100+ watch faces and much more. ",
      category: "ninja",
      features: [
        {
          img: "https://cdn.shopify.com/s/files/1/0137/0292/2286/files/storage-icon-2.png?v=1633523013",
          title: "1GB Inbuilt Storage",
        },
        {
          img: "https://cdn.shopify.com/s/files/1/0137/0292/2286/files/sports-modes-icon.png?v=1623386154",
          title: "300+ Sports Modes",
        },
        {
          img: "https://cdn.shopify.com/s/files/1/0137/0292/2286/files/display-icom.png?v=1624514301",
          title: "AMOLED Display",
        },
        {
          img: "https://cdn.shopify.com/s/files/1/0137/0292/2286/files/resolution-icon.png?v=1623731318",
          title: "High Resolution",
        },
        {
          img: "https://cdn.shopify.com/s/files/1/0137/0292/2286/files/bluetooth-calling-icon_05e9a89a-4c16-4297-b72b-4f9f44197c5a.png?v=1633437148",
          title: "Bluetooth Calling",
        },
      ],
      images: [
        "https://www.fireboltt.com/cdn/shop/files/ninja-fit-pro-red_1_540x.png?v=1689325055",
        "https://www.fireboltt.com/cdn/shop/files/ninja-fit-pro-red_3_540x.png?v=1689325055",
        "https://www.fireboltt.com/cdn/shop/files/ninja-fit-pro-red_2_540x.png?v=1689325055",
      ],
      coverImage:
        "https://cdn.shopify.com/s/files/1/0137/0292/2286/files/ninja-fit-pro-desktop_3_2d7791ab-01ee-4c2d-bd2f-76d121874122.jpg?v=1693974895",
    },
    {
      productId: 11,
      productName: "Expedition",
      mrp: 21999,
      salePrice: 1899,
      rating: 4.5,
      description:
        " Fire-boltt Expedition Smartwatch. 35.3mm(1.39) round display, inbuilt GPS, BT calling.",
      category: "sport",
      features: [
        {
          img: "https://cdn.shopify.com/s/files/1/0137/0292/2286/files/storage-icon-2.png?v=1633523013",
          title: "1GB Inbuilt Storage",
        },
        {
          img: "https://cdn.shopify.com/s/files/1/0137/0292/2286/files/sports-modes-icon.png?v=1623386154",
          title: "300+ Sports Modes",
        },
        {
          img: "https://cdn.shopify.com/s/files/1/0137/0292/2286/files/display-icom.png?v=1624514301",
          title: "AMOLED Display",
        },
        {
          img: "https://cdn.shopify.com/s/files/1/0137/0292/2286/files/resolution-icon.png?v=1623731318",
          title: "High Resolution",
        },
        {
          img: "https://cdn.shopify.com/s/files/1/0137/0292/2286/files/bluetooth-calling-icon_05e9a89a-4c16-4297-b72b-4f9f44197c5a.png?v=1633437148",
          title: "Bluetooth Calling",
        },
      ],
      images: [
        "https://www.fireboltt.com/cdn/shop/files/expedition-black_1_540x.png?v=1698733392",
        "https://www.fireboltt.com/cdn/shop/files/expedition-black_2_540x.png?v=1698733392",
        "https://www.fireboltt.com/cdn/shop/files/expedition-black_3_540x.png?v=1698733392",
        "https://www.fireboltt.com/cdn/shop/files/expedition-black_4_540x.png?v=1698733392",
      ],
      coverImage:
        "https://cdn.shopify.com/s/files/1/0137/0292/2286/files/expedition-desktop_1.jpg?v=1697105475",
    },
  ];
  return res.status(200).json({ allwatches: data });
});

export default router;
