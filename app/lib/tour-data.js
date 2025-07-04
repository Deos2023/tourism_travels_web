const tourData = {
  national: [
    {
      slug: "leh-ladakh",
      name: "Leh Ladakh",
      location: "Jammu & Kashmir",
      price: 850,
      description: "Explore the majestic landscapes of Leh and Ladakh.",
      images: [
        "/images/national/leh-ladakh/1.webp",
        "/images/national/leh-ladakh/2.webp",
        "/images/national/leh-ladakh/3.webp",
        "/images/national/leh-ladakh/4.webp",
        "/images/national/leh-ladakh/5.webp",
      ],
    },
    {
      slug: "gurudongmar-lake",
      name: "Gurudongmar Lake",
      location: "Sikkim",
      price: 700,
      description: "Discover the serenity of Gurudongmar Lake in North Sikkim.",
      images: [
        "/images/national/gurudongmar-lake/1.webp",
        "/images/national/gurudongmar-lake/2.webp",
        "/images/national/gurudongmar-lake/3.webp",
        "/images/national/gurudongmar-lake/4.webp",
        "/images/national/gurudongmar-lake/5.webp",
      ],
    },
    {
      slug: "tawang",
      name: "Tawang",
      location: "Arunachal Pradesh",
      price: 780,
      description: "Tawang offers scenic beauty and Buddhist heritage.",
      images: [
        "/images/national/tawang/1.webp",
        "/images/national/tawang/2.webp",
        "/images/national/tawang/3.webp",
        "/images/national/tawang/4.webp",
        "/images/national/tawang/5.webp",
      ],
    },
    {
      slug: "himachal",
      name: "Himachal",
      location: "Himachal Pradesh",
      price: 750,
      description: "Visit snow-capped mountains and hill towns in Himachal.",
      images: [
        "/images/national/himachal/1.webp",
        "/images/national/himachal/2.webp",
        "/images/national/himachal/3.webp",
        "/images/national/himachal/4.webp",
        "/images/national/himachal/5.webp",
      ],
    },
    {
      slug: "kerala",
      name: "Kerala",
      location: "South India",
      price: 800,
      description: "Experience backwaters, beaches, and spice gardens.",
      images: [
        "/images/national/kerala/1.webp",
        "/images/national/kerala/2.webp",
        "/images/national/kerala/3.webp",
        "/images/national/kerala/4.webp",
        "/images/national/kerala/5.webp",
      ],
    },
    {
      slug: "rajasthan",
      name: "Rajasthan",
      location: "West India",
      price: 850,
      description: "Rajasthan is known for forts, deserts, and heritage.",
      images: [
        "/images/national/rajasthan/1.webp",
        "/images/national/rajasthan/2.webp",
        "/images/national/rajasthan/3.webp",
        "/images/national/rajasthan/4.webp",
        "/images/national/rajasthan/5.webp",
      ],
    },
    {
      slug: "nepal-everest",
      name: "Nepal - Everest",
      location: "Nepal",
      price: 1000,
      description: "Trek to the base of the world’s highest peak.",
      images: [
        "/images/national/everest/1.webp",
        "/images/national/everest/2.webp",
        "/images/national/everest/3.webp",
        "/images/national/everest/4.webp",
        "/images/national/everest/5.webp",
      ],
    },
    {
      slug: "puri",
      name: "Puri",
      location: "Odisha",
      price: 600,
      description: "Spiritual journey to Jagannath Temple and beaches.",
      images: [
        "/images/national/puri/1.webp",
        "/images/national/puri/2.webp",
        "/images/national/puri/3.webp",
        "/images/national/puri/4.webp",
        "/images/national/puri/5.webp",
      ],
    },
    {
      slug: "sundarban",
      name: "Sundarban",
      location: "West Bengal",
      price: 650,
      description: "Explore the mangroves and wildlife of Sundarbans.",
      images: [
        "/images/national/sundarban/1.webp",
        "/images/national/sundarban/2.webp",
        "/images/national/sundarban/3.webp",
        "/images/national/sundarban/4.webp",
        "/images/national/sundarban/5.webp",
      ],
    },
    {
      slug: "dooars",
      name: "Dooars",
      location: "North Bengal",
      price: 700,
      description: "Nature and tea gardens in the foothills of the Himalayas.",
      images: [
        "/images/national/dooars/1.webp",
        "/images/national/dooars/2.webp",
        "/images/national/dooars/3.webp",
        "/images/national/dooars/4.webp",
        "/images/national/dooars/5.webp",
      ],
    },
    {
      slug: "sikkim",
      name: "Sikkim",
      location: "North East India",
      price: 850,
      description: "Lakes, mountains, and monasteries in peaceful Sikkim.",
      images: [
        "/images/national/sikkim/1.webp",
        "/images/national/sikkim/2.webp",
        "/images/national/sikkim/3.webp",
        "/images/national/sikkim/4.webp",
        "/images/national/sikkim/5.webp",
      ],
    },
  ],

  international: [
    {
      slug: "bangkok-pattaya-krabi",
      name: "Bangkok, Pattaya & Krabi",
      location: "Thailand",
      price: 1100,
      description: "A vibrant mix of beaches, parties, and temples.",
      images: [
        "/images/international/thailand/1.webp",
        "/images/international/thailand/2.webp",
        "/images/international/thailand/3.webp",
        "/images/international/thailand/4.webp",
        "/images/international/thailand/5.webp",
      ],
    },
    {
      slug: "bali",
      name: "Bali",
      location: "Indonesia",
      price: 1150,
      description: "Island paradise with beaches and spiritual energy.",
      images: [
        "/images/international/bali/1.webp",
        "/images/international/bali/2.webp",
        "/images/international/bali/3.webp",
        "/images/international/bali/4.webp",
        "/images/international/bali/5.webp",
      ],
    },
    {
      slug: "maldives",
      name: "Maldives",
      location: "Indian Ocean",
      price: 1400,
      description: "Luxury overwater villas and turquoise waters.",
      images: [
        "/images/international/maldives/1.webp",
        "/images/international/maldives/2.webp",
        "/images/international/maldives/3.webp",
        "/images/international/maldives/4.webp",
        "/images/international/maldives/5.webp",
      ],
    },
    {
      slug: "kenya",
      name: "Kenya",
      location: "Africa",
      price: 1600,
      description: "Wildlife safari in Nairobi, Masai Mara, and Amboseli.",
      images: [
        "/images/international/kenya/1.webp",
        "/images/international/kenya/2.webp",
        "/images/international/kenya/3.webp",
        "/images/international/kenya/4.webp",
        "/images/international/kenya/5.webp",
      ],
    },
    {
      slug: "thailand",
      name: "Thailand",
      location: "Asia",
      price: 1050,
      description: "Temples, beaches, food and vibrant nightlife.",
      images: [
        "/images/international/thailand/1.webp",
        "/images/international/thailand/2.webp",
        "/images/international/thailand/3.webp",
        "/images/international/thailand/4.webp",
        "/images/international/thailand/5.webp",
      ],
    },
    {
      slug: "bhutan",
      name: "Bhutan",
      location: "Himalayas",
      price: 900,
      description: "Peaceful monasteries and mountain views.",
      images: [
        "/images/international/bhutan/1.webp",
        "/images/international/bhutan/2.webp",
        "/images/international/bhutan/3.webp",
        "/images/international/bhutan/4.webp",
        "/images/international/bhutan/5.webp",
      ],
    },
  ],

  jungle: [
    {
      slug: "tadoba",
      name: "Tadoba",
      location: "Maharashtra",
      price: 700,
      description: "Wild tigers and diverse flora in Tadoba National Park.",
      images: [
        "/images/jungle/tadoba/1.webp",
        "/images/jungle/tadoba/2.webp",
        "/images/jungle/tadoba/3.webp",
        "/images/jungle/tadoba/4.webp",
        "/images/jungle/tadoba/5.webp",
      ],
    },
    {
      slug: "satpura",
      name: "Satpura",
      location: "Madhya Pradesh",
      price: 750,
      description: "Scenic safari experiences and rich biodiversity.",
      images: [
        "/images/jungle/satpura/1.webp",
        "/images/jungle/satpura/2.webp",
        "/images/jungle/satpura/3.webp",
        "/images/jungle/satpura/4.webp",
        "/images/jungle/satpura/5.webp",
      ],
    },
    {
      slug: "kanha",
      name: "Kanha",
      location: "Madhya Pradesh",
      price: 800,
      description: "Home of the majestic Barasingha and tigers.",
      images: [
        "/images/jungle/kanha/1.webp",
        "/images/jungle/kanha/2.webp",
        "/images/jungle/kanha/3.webp",
        "/images/jungle/kanha/4.webp",
        "/images/jungle/kanha/5.webp",
      ],
    },
    {
      slug: "bandhavgarh",
      name: "Bandhavgarh",
      location: "Madhya Pradesh",
      price: 850,
      description: "A top tiger spotting destination in India.",
      images: [
        "/images/jungle/bandhavgarh/5.webp",
        "/images/jungle/bandhavgarh/2.webp",
        "/images/jungle/bandhavgarh/3.webp",
        "/images/jungle/bandhavgarh/4.webp",
        "/images/jungle/bandhavgarh/1.webp",
      ],
    },
    {
      slug: "pench",
      name: "Pench",
      location: "Madhya Pradesh",
      price: 780,
      description: "Jungle that inspired Kipling’s ‘The Jungle Book’.",
      images: [
        "/images/jungle/pench/1.webp",
        "/images/jungle/pench/2.webp",
        "/images/jungle/pench/3.webp",
        "/images/jungle/pench/4.webp",
        "/images/jungle/pench/5.webp",
      ],
    },
    {
      slug: "ranthambore",
      name: "Ranthambore",
      location: "Rajasthan",
      price: 900,
      description: "Historic fort with tiger territory.",
      images: [
        "/images/jungle/ranthambore/1.webp",
        "/images/jungle/ranthambore/2.webp",
        "/images/jungle/ranthambore/3.webp",
        "/images/jungle/ranthambore/4.webp",
        "/images/jungle/ranthambore/5.webp",
      ],
    },
    {
      slug: "dudhwa",
      name: "Dudhwa",
      location: "Uttar Pradesh",
      price: 820,
      description: "Remote national park rich in flora and fauna.",
      images: [
        "/images/jungle/dudhwa/1.webp",
        "/images/jungle/dudhwa/2.webp",
        "/images/jungle/dudhwa/3.webp",
        "/images/jungle/dudhwa/4.webp",
        "/images/jungle/dudhwa/5.webp",
      ],
    },
    {
      slug: "kaziranga",
      name: "Kaziranga",
      location: "Assam",
      price: 950,
      description: "Home to the Indian one-horned rhinoceros.",
      images: [
        "/images/jungle/kaziranga/1.webp",
        "/images/jungle/kaziranga/2.webp",
        "/images/jungle/kaziranga/3.webp",
        "/images/jungle/kaziranga/4.webp",
        "/images/jungle/kaziranga/5.webp",
      ],
    },
    {
      slug: "singalila",
      name: "Singalila",
      location: "Darjeeling",
      price: 870,
      description: "Rare red pandas and high-altitude forest trails.",
      images: [
        "/images/jungle/singalila/1.webp",
        "/images/jungle/singalila/2.webp",
        "/images/jungle/singalila/3.webp",
        "/images/jungle/singalila/4.webp",
        "/images/jungle/singalila/5.webp",
      ],
    },
    {
      slug: "jim-corbett",
      name: "Jim Corbett",
      location: "Uttarakhand",
      price: 890,
      description: "India's first national park with diverse wildlife.",
      images: [
        "/images/jungle/jim-corbett/1.webp",
        "/images/jungle/jim-corbett/2.webp",
        "/images/jungle/jim-corbett/3.webp",
        "/images/jungle/jim-corbett/4.webp",
        "/images/jungle/jim-corbett/5.webp",
      ],
    },
    {
      slug: "buxa",
      name: "Buxa",
      location: "West Bengal",
      price: 720,
      description: "Dense forest and tiger reserve in North Bengal.",
      images: [
        "/images/jungle/buxa/1.webp",
        "/images/jungle/buxa/2.webp",
        "/images/jungle/buxa/3.webp",
        "/images/jungle/buxa/4.webp",
        "/images/jungle/buxa/5.webp",
      ],
    },
    {
      slug: "sunderbans",
      name: "Sundarbans",
      location: "West Bengal",
      price: 770,
      description: "The world's largest mangrove delta.",
      images: [
        "/images/jungle/sunderbans/1.webp",
        "/images/jungle/sunderbans/2.webp",
        "/images/jungle/sunderbans/3.webp",
        "/images/jungle/sunderbans/4.webp",
        "/images/jungle/sunderbans/5.webp",
      ],
    },
  ],
};

export default tourData;
