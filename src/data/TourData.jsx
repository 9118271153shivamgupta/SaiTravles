export const tourCategories = [
  { id: 'domestic', name: 'Domestic' },
  { id: 'international', name: 'International' },
  { id: 'religious', name: 'Religious' },
  { id: 'hillstation', name: 'Hill Station' }
];

export const tourData = [
  // --- DOMESTIC CATEGORY ---
  {
    id: "gujrat",
    category: "domestic",
    title: "Gujarat",
    image: "https://images.unsplash.com/photo-1605649487212-47bdab064df7?auto=format&fit=crop&w=600&q=80",
    price: "₹14,999",
    duration: "5 Days / 4 Nights",
    description: "Explore the vibrant culture of Gujarat, from Rann of Kutch to the majestic heritage palaces.",
    overview: "Gujarat has always been a major center for the Jains, and some of its most interesting locations are the Jain Temple centers at Palitana and Girnar Hills. Besides the Jain temples, the state’s major attractions include the only habitat of the Asiatic Lions in India (Gir Forests), a desert ride at the Wild Ass Sanctuary, and the beautiful Indo-Saracenic architecture of Ahmedabad.Stretching out into the Arabian Sea, with a hint of the desert and a coastline of 1,600 kilometers long, is Gujarat – the home state of Mahatma Gandhi, the Father of the Nation. It is renowned for its beaches, temple towns, and historic capitals. Wildlife sanctuaries, hill resorts, and natural grandeur are gifts of Gujarat. Sculpture, handicrafts, arts, and festivals also make the state rich. Gujarat is also among the most technologically advanced, housing the largest petrochemical complex in the country.",
    popularPlaces: [
      { name: " Spiritual Sojourn to Gujarat", image: "https://images.unsplash.com/photo-1627038165089-8d19760777fa?auto=format&fit=crop&w=300&q=80", details: "The massive white salt desert known for Rann Utsav." },
      { name: "Gir National Park", image: "https://images.unsplash.com/photo-1615959189197-48400dc2528a?auto=format&fit=crop&w=300&q=80", details: "The exclusive and proud home of Asiatic Lions in India." },
      { name: "Statue of Unity", image: "https://images.unsplash.com/photo-1599930113854-d6d7fd521f10?auto=format&fit=crop&w=300&q=80", details: "The tallest statue in the world dedicated to Sardar Patel." },
      { name: "Somnath Temple", image: "https://images.unsplash.com/photo-1605649487212-47bdab064df7?auto=format&fit=crop&w=300&q=80", details: "The sacred first among the twelve holy Jyotirlinga shrines." },
      { name: "Dwarkadhish Temple", image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=300&q=80", details: "Ancient five-storied temple dedicated to Lord Krishna." },
      { name: "Sabarmati Ashram", image: "https://images.unsplash.com/photo-1589308078059-be1415eab4c3?auto=format&fit=crop&w=300&q=80", details: "Tranquil home of Mahatma Gandhi along the river banks." },
      { name: "Laxmi Vilas Palace", image: "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?auto=format&fit=crop&w=300&q=80", details: "An architectural marvel four times the size of Buckingham Palace." },
      { name: "Sun Temple, Modhera", image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=300&q=80", details: "Exquisitely carved temple complex dedicated to the Sun God." }
    ]
  },
  {
    id: "kerala",
    category: "domestic",
    title: "Kerala",
    image: "https://images.unsplash.com/photo-1593693397690-362cb9666fc2?auto=format&fit=crop&w=600&q=80",
    price: "₹18,500",
    duration: "6 Days / 5 Nights",
    description: "Experience God's Own Country with serene backwaters, houseboats, and lush tea gardens.",
    overview: "Kerala, famously referred to as 'God's Own Country', is a tropical paradise located on India's southwestern Malabar Coast. It is celebrated globally for its palm-fringed emerald backwaters, pristine beaches, and therapeutic Ayurvedic wellness traditions. The state features misty hill stations like Munnar, blanketed in massive sprawling tea estates, alongside dense wildlife sanctuaries blooming with exotic biodiversity. Kerala's unique culture is showcased through its vibrant festivals like Onam, mesmerizing Kathakali dance dramas, and ancient martial arts like Kalaripayattu. Traveling here offers a relaxed pace of life, where you can cruise on a traditional luxury houseboat and savour fresh, aromatic coastal delicacies cooked in coconut oil.",
    popularPlaces: [
      { name: "Alleppey Backwaters", image: "https://images.unsplash.com/photo-1593693397690-362cb9666fc2?auto=format&fit=crop&w=300&q=80", details: "Famous houseboat cruises across peaceful interconnected canals." },
      { name: "Munnar Hills", image: "https://images.unsplash.com/photo-1516690561799-46d8f74f9abf?auto=format&fit=crop&w=300&q=80", details: "Lush green hill station rich in tea gardens and waterfalls." },
      { name: "Wayanad Wildlife", image: "https://images.unsplash.com/photo-1588598126743-4dc91a7b45db?auto=format&fit=crop&w=300&q=80", details: "Picturesque spice plantations, waterfalls, and ancient caves." },
      { name: "Kochi Fort", image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=300&q=80", details: "Historic seaside neighborhood showcasing iconic Chinese fishing nets." },
      { name: "Kovalam Beach", image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=300&q=80", details: "Beautiful crescent-shaped coastline with a striped lighthouse landmark." },
      { name: "Thekkady (Periyar)", image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=300&q=80", details: "Acclaimed tiger reserve wrapping a serene artificial lake." },
      { name: "Varkala Cliffs", image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=300&q=80", details: "Unique coastal red sandstone cliffs facing the Arabian Sea." },
      { name: "Athirappilly Falls", image: "https://images.unsplash.com/photo-1599930113854-d6d7fd521f10?auto=format&fit=crop&w=300&q=80", details: "The majestic 'Niagara of India' plunging through wild forests." }
    ]
  },
  {
    id: "odisha",
    category: "domestic",
    title: "Odisha",
    image: "https://images.unsplash.com/photo-1599930113854-d6d7fd521f10?auto=format&fit=crop&w=600&q=80",
    price: "₹12,499",
    duration: "4 Days / 3 Nights",
    description: "Discover the rich architecture of Konark Temple and serene coastal beauty of Puri.",
    overview: "Odisha is India's hidden cultural gem, located along the eastern coast by the Bay of Bengal. It is a land of monumental temples, rich tribal heritage, and pristine natural wetlands. The state forms a golden triangle of tourism featuring Bhubaneswar's historic temples, Puri's sacred Jagannath shrine, and Konark's phenomenal Sun Temple. Odisha is also highly celebrated for its classical Odissi dance form and exquisite arts like Pattachitra paintings. Nature lovers are treated to Chilika Lake, Asia's largest brackish water lagoon, housing migratory birds and rare Irrawaddy dolphins. It is an ideal escape for travelers seeking spiritual peace, classical arts, and untouched scenic horizons.",
    popularPlaces: [
      { name: "Konark Sun Temple", image: "https://images.unsplash.com/photo-1599930113854-d6d7fd521f10?auto=format&fit=crop&w=300&q=80", details: "UNESCO heritage site built as a gigantic stone chariot." },
      { name: "Jagannath Temple, Puri", image: "https://images.unsplash.com/photo-1605649487212-47bdab064df7?auto=format&fit=crop&w=300&q=80", details: "World-famous holy site known for the annual Rath Yatra." },
      { name: "Chilika Lake", image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=300&q=80", details: "Massive coastal lagoon hosting beautiful pink flamingos and dolphins." },
      { name: "Lingaraj Temple", image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=300&q=80", details: "Eleventh-century landmark reflecting pure Kalinga architectural design." },
      { name: "Udayagiri Caves", image: "https://images.unsplash.com/photo-1477587458883-471a5ed94245?auto=format&fit=crop&w=300&q=80", details: "Ancient rock-cut residential caves used by Jain monks." },
      { name: "Puri Beach", image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=300&q=80", details: "Sacred golden sand beach popular for sand art installations." },
      { name: "Dhauli Shanti Stupa", image: "https://images.unsplash.com/photo-1593693397690-362cb9666fc2?auto=format&fit=crop&w=300&q=80", details: "Peace pagoda where Emperor Ashoka renounced warfare for Buddhism." },
      { name: "Nandankanan Zoo", image: "https://images.unsplash.com/photo-1615959189197-48400dc2528a?auto=format&fit=crop&w=300&q=80", details: "Premier wildlife sanctuary hosting iconic royal white tigers." }
    ]
  },
  {
    id: "rajasthan",
    category: "domestic",
    title: "Rajasthan",
    image: "https://images.unsplash.com/photo-1477587458883-471a5ed94245?auto=format&fit=crop&w=600&q=80",
    price: "₹16,999",
    duration: "6 Days / 5 Nights",
    description: "Walk through the royal history of Udaipur, Jaipur and majestic desert forts.",
    overview: "Rajasthan, the 'Land of Kings', represents the epitome of Indian royalty, romance, and chivalry. This globally famous destination is packed with golden Thar desert sand dunes, grand historical hill forts, and shimmering luxury lake palaces. Each city here boasts an individual color profile, from the Pink City of Jaipur to the Blue City of Jodhpur and the romantic White Lakes of Udaipur. Travelers are instantly immersed in dynamic folk performances, puppet shows, and colourful traditional attire. Shopping in its busy local bazaars opens up opportunities for exquisite jewelry, camel-leather items, and tie-dye clothes. It is an unmissable royal fairytale destination brought to real life.",
    popularPlaces: [
      { name: "Amber Fort, Jaipur", image: "https://images.unsplash.com/photo-1477587458883-471a5ed94245?auto=format&fit=crop&w=300&q=80", details: "Magnificent hilltop fort displaying majestic Hindu- राजपूत design blend." },
      { name: "City Palace, Udaipur", image: "https://images.unsplash.com/photo-1566552881560-0be862a7c445?auto=format&fit=crop&w=300&q=80", details: "Grand monumental lakeside palace complex spanning several centuries." },
      { name: "Mehrangarh Fort, Jodhpur", image: "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=300&q=80", details: "Massive towering fortress overlooking the beautiful blue city streets." },
      { name: "Hawa Mahal", image: "https://images.unsplash.com/photo-1603262110263-fb0112e7cc33?auto=format&fit=crop&w=300&q=80", details: "Iconic five-story pink honeycomb structure built with 953 small windows." },
      { name: "Jaisalmer Desert Dunes", image: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=300&q=80", details: "Rolling golden sands ideal for camel safaris and overnight camping." },
      { name: "Pushkar Lake", image: "https://images.unsplash.com/photo-1614082242765-7c98cdc0d2df?auto=format&fit=crop&w=300&q=80", details: "Sacred water body housing the world's rare Lord Brahma temple." },
      { name: "Chittorgarh Fort", image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=300&q=80", details: "The largest fort in India echoing legends of legendary royal sacrifices." },
      { name: "Ranthambore Tiger Reserve", image: "https://images.unsplash.com/photo-1615959189197-48400dc2528a?auto=format&fit=crop&w=300&q=80", details: "Famous safari park offering high chances of spotting wild tigers." }
    ]
  },
  {
    id: "tamil-nadu",
    category: "domestic",
    title: "Tamil Nadu",
    image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=600&q=80",
    price: "₹15,200",
    duration: "5 Days / 4 Nights",
    description: "Marvel at the timeless Dravidian architecture and cultural heritage nodes.",
    overview: "Tamil Nadu is a highly spiritual and culturally rich state located in the southernmost corner of the Indian peninsula. It acts as a magnificent sanctuary of classical Tamil arts, literature, and towering Dravidian architecture. The landscapes are filled with ancient stone temples boasting towering 'Gopurams' covered in painted mythological sculptures. Beyond spirituality, it houses beautiful hill stations like Ooty and Kodaikanal alongside long sandy stretches of coastal beaches. The state is deeply proud of its rich classical Bharatanatyam dance form, Carnatic music, and filter coffee culture. It promises a serene travel experience stepping backward into the golden era of southern dynasties.",
    popularPlaces: [
      { name: "Meenakshi Temple, Madurai", image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=300&q=80", details: "A massive, colorful architectural masterpiece dedicated to Goddess Parvati." },
      { name: "Shore Temple, Mahabalipuram", image: "https://images.unsplash.com/photo-1599930113854-d6d7fd521f10?auto=format&fit=crop&w=300&q=80", details: "7th-century rock-cut structural heritage temples directly on the coast." },
      { name: "Brihadisvara Temple", image: "https://images.unsplash.com/photo-1605649487212-47bdab064df7?auto=format&fit=crop&w=300&q=80", details: "Magnificent Chola dynasty temple featuring a massive single-stone dome." },
      { name: "Ooty Lake & Hills", image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=300&q=80", details: "Popular colonial-era hill retreat famous for toy train rides." },
      { name: "Rameshwaram Jyotirlinga", image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=300&q=80", details: "Holy island shrine connected by the historic Pamban sea bridge." },
      { name: "Marina Beach, Chennai", image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=300&q=80", details: "The longest natural urban beach in the country along the Bay of Bengal." },
      { name: "Kanyakumari Sunset Point", image: "https://images.unsplash.com/photo-1593693397690-362cb9666fc2?auto=format&fit=crop&w=300&q=80", details: "The geographical tip of India where three massive oceans meet." },
      { name: "Kodaikanal Lake", image: "https://images.unsplash.com/photo-1516690561799-46d8f74f9abf?auto=format&fit=crop&w=300&q=80", details: "Star-shaped human-made lake surrounded by thick pine woods." }
    ]
  },
  {
    id: "goa",
    category: "domestic",
    title: "Goa",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80",
    price: "₹11,999",
    duration: "4 Days / 3 Nights",
    description: "Relax on golden sand beaches, enjoy thrilling watersports, and colonial monuments.",
    overview: "Goa is India's premier pocket-sized paradise, universally loved for its laidback coastal vibes and Portuguese heritage. Blessed with a sprawling coastline along the Arabian Sea, it offers a distinct blend of vibrant parties, adventure water sports, and tranquil beach retreats. The architecture beautifully mirrors its colonial history with whitewashed historic churches, colorful Latin quarters, and old spice plantations. Beyond nightlife, Goa hosts amazing local night markets, flea shopping bazaars, and delectable seafood curry preparations. It remains the ultimate vacation getaway for friends, families, and solo travelers aiming to recharge their spirits.",
    popularPlaces: [
      { name: "Calangute Beach", image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=300&q=80", details: "The bustling 'Queen of Beaches' highly active with adventure sports." },
      { name: "Basilica of Bom Jesus", image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=300&q=80", details: "UNESCO monument holding the sacred remains of St. Francis Xavier." },
      { name: "Dudhsagar Waterfalls", image: "https://images.unsplash.com/photo-1599930113854-d6d7fd521f10?auto=format&fit=crop&w=300&q=80", details: "Four-tiered spectacular milky waterfall slicing through dense green forests." },
      { name: "Anjuna Flea Market", image: "https://images.unsplash.com/photo-1589308078059-be1415eab4c3?auto=format&fit=crop&w=300&q=80", details: "Vibrant bohemian street bazaar perfect for collecting local crafts." },
      { name: "Fort Aguada", image: "https://images.unsplash.com/photo-1477587458883-471a5ed94245?auto=format&fit=crop&w=300&q=80", details: "17th-century historic Portuguese coastal fort featuring a lighthouse tower." },
      { name: "Palolem Beach", image: "https://images.unsplash.com/photo-1593693397690-362cb9666fc2?auto=format&fit=crop&w=300&q=80", details: "Scenic crescent beach in South Goa known for its peaceful silent discos." },
      { name: "Fontainhas Latin Quarter", image: "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?auto=format&fit=crop&w=300&q=80", details: "Charming neighborhood lined with brightly colored colonial villas." },
      { name: "Chapora Fort", image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=300&q=80", details: "Famous hilltop ruin overlooking the river mouth, popular from films." }
    ]
  },

  // --- INTERNATIONAL CATEGORY ---
  {
    id: "thailand",
    category: "international",
    title: "Thailand",
    image: "https://images.unsplash.com/photo-1528181304800-2f1738b24a62?auto=format&fit=crop&w=600&q=80",
    price: "₹39,999",
    duration: "5 Days / 4 Nights",
    description: "Bustling markets of Bangkok and crystal clear tropical shorelines of Phuket.",
    overview: "Thailand, popularly known as the 'Land of Smiles', is a Southeast Asian treasure that seamlessly captures tropical beauty and rich Buddhist culture. The capital, Bangkok, is a neon-lit mega-metropolis packed with grand golden temples, street food markets, and bustling river boat highways. Traveling further south reveals legendary paradise islands boasting turquoise waters, towering limestone cliffs, and dynamic nightlife parties. Thailand is also highly loved for its luxurious wellness spa treatments, unique floating markets, and friendly hospitality. It offers a premium foreign vacation experience that caters flawlessly to budget backpackers and luxury seekers alike.",
    popularPlaces: [
      { name: "The Grand Palace, Bangkok", image: "https://images.unsplash.com/photo-1528181304800-2f1738b24a62?auto=format&fit=crop&w=300&q=80", details: "Spectacular royal court complex showcasing gold-leaf architecture." },
      { name: "Phi Phi Islands", image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=300&q=80", details: "Stunning island cluster famous for clear waters and scuba diving." },
      { name: "Wat Arun (Temple of Dawn)", image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=300&q=80", details: "Riverside landmark landmark covered in intricate porcelain pieces." },
      { name: "Patong Beach, Phuket", image: "https://images.unsplash.com/photo-1593693397690-362cb9666fc2?auto=format&fit=crop&w=300&q=80", details: "The heart of Phuket's beach adventures and energetic Bangla nightlife." },
      { name: "Damnoen Saduak Market", image: "https://images.unsplash.com/photo-1589308078059-be1415eab4c3?auto=format&fit=crop&w=300&q=80", details: "Iconic traditional market where local vendors sell from wooden boats." },
      { name: "Wat Phra That Doi Suthep", image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=300&q=80", details: "Sacred mountain temple in Chiang Mai looking over northern valleys." },
      { name: "Ayutthaya Historical Park", image: "https://images.unsplash.com/photo-1599930113854-d6d7fd521f10?auto=format&fit=crop&w=300&q=80", details: "Atmospheric ruins of the ancient capital destroyed centuries ago." },
      { name: "Coral Island", image: "https://images.unsplash.com/photo-1477587458883-471a5ed94245?auto=format&fit=crop&w=300&q=80", details: "Paradise for exciting parasailing, sea walking, and banana boat rides." }
    ]
  },
  {
    id: "bhutan",
    category: "international",
    title: "Bhutan",
    image: "https://images.unsplash.com/photo-1548960495-c49efb43290d?auto=format&fit=crop&w=600&q=80",
    price: "₹32,500",
    duration: "6 Days / 5 Nights",
    description: "Breathe in the happiness at Tiger's Nest monastery and pristine Himalayan valleys.",
    overview: "Bhutan, the last remaining Himalayan Kingdom, is a tranquil sanctuary famed for measuring Gross National Happiness over financial profit. Locked away high in the misty mountain ranges, it retains an untouched eco-friendly landscape, ancient fortress monasteries (Dzongs), and colorful prayer flags flying across deep valleys. The kingdom enforces a strict architecture policy requiring all buildings to keep traditional artistic frameworks. Visitors can experience crystal clear mountain air, pine forests, and unique chili-rich local culinary dishes. It is the ultimate restorative escape for travelers seeking raw ecological beauty, authentic Buddhist mindfulness, and peaceful solitude away from global crowds.",
    popularPlaces: [
      { name: "Paro Taktsang (Tiger's Nest)", image: "https://images.unsplash.com/photo-1548960495-c49efb43290d?auto=format&fit=crop&w=300&q=80", details: "Iconic holy monastery built directly onto a sheer cliff face." },
      { name: "Punakha Dzong", image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=300&q=80", details: "Stunning palace of great happiness situated at the meeting of two main rivers." },
      { name: "Buddha Dordenma, Thimphu", image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=300&q=80", details: "Gigantic golden Buddha statue sitting high over the capital valley." },
      { name: "Dochula Pass", image: "https://images.unsplash.com/photo-1599930113854-d6d7fd521f10?auto=format&fit=crop&w=300&q=80", details: "Scenic mountain pass containing 108 beautiful memorial stupas." },
      { name: "Tashichho Dzong", image: "https://images.unsplash.com/photo-1477587458883-471a5ed94245?auto=format&fit=crop&w=300&q=80", details: "Traditional fortress monastery housing the main government offices." },
      { name: "Phobjikha Valley", image: "https://images.unsplash.com/photo-1516690561799-46d8f74f9abf?auto=format&fit=crop&w=300&q=80", details: "Glacial valley famous for wintering rare black-necked cranes." },
      { name: "Kyichu Lhakhang", image: "https://images.unsplash.com/photo-1605649487212-47bdab064df7?auto=format&fit=crop&w=300&q=80", details: "One of the oldest sacred temples in Bhutan built in the 7th century." },
      { name: "Chele La Pass", image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=300&q=80", details: "Highest motorable vantage pass in Bhutan looking at Mt. Jomolhari." }
    ]
  },
  {
    id: "kathmandu",
    category: "international",
    title: "Kathmandu",
    image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=600&q=80",
    price: "₹19,999",
    duration: "4 Days / 3 Nights",
    description: "Explore absolute spiritual calmness at Pashupatinath and ancient Durbar Square.",
    overview: "Kathmandu, the vibrant capital city of Nepal, is an open-air historical museum packed tightly with ancient temples, brick courtyards, and spiritual energy. Surrounded by the majestic Himalayan ranges, this valley houses seven different UNESCO World Heritage zones that highlight elite Newari architectural wooden carvings. The streets are a fascinating sensory mix of burning incense, brass singing bowls, traditional marigold flowers, and modern backpacking cafes. It acts as a primary melting pot where Hinduism and Buddhism live in harmonious beauty. For travelers, it offers deep spiritual insights, shopping for unique mountain gear, and ancient cultural tours.",
    popularPlaces: [
      { name: "Pashupatinath Temple", image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=300&q=80", details: "Sacred, highly revered Hindu temple complex along Bagmati River." },
      { name: "Boudhanath Stupa", image: "https://images.unsplash.com/photo-1578318285542-a276ec96b412?auto=format&fit=crop&w=300&q=80", details: "One of the largest spherical Buddhist stupas in the world." },
      { name: "Kathmandu Durbar Square", image: "https://images.unsplash.com/photo-1605649487212-47bdab064df7?auto=format&fit=crop&w=300&q=80", details: "Ancient plaza hosting royal palaces and the temple of Living Goddess Kumari." },
      { name: "Swayambhunath (Monkey Temple)", image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=300&q=80", details: "Hilltop religious site offering panoramic city views and monkey troops." },
      { name: "Patan Durbar Square", image: "https://images.unsplash.com/photo-1599930113854-d6d7fd521f10?auto=format&fit=crop&w=300&q=80", details: "Famous plaza showcasing exceptional metallic art and stone carvings." },
      { name: "Bhaktapur Durbar Square", image: "https://images.unsplash.com/photo-1477587458883-471a5ed94245?auto=format&fit=crop&w=300&q=80", details: "Timeless heritage city famous for its unique 55-window wooden palace." },
      { name: "Thamel", image: "https://images.unsplash.com/photo-1516690561799-46d8f74f9abf?auto=format&fit=crop&w=300&q=80", details: "The energetic tourist and shopping hub packed with trekking shops and pubs." },
      { name: "Garden of Dreams", image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=300&q=80", details: "A peaceful neo-classical historical garden located in the city center." }
    ]
  },
  {
    id: "pokhara",
    category: "international",
    title: "Pokhara",
    image: "https://images.unsplash.com/photo-1578318285542-a276ec96b412?auto=format&fit=crop&w=600&q=80",
    price: "₹21,499",
    duration: "5 Days / 4 Nights",
    description: "Stunning reflection of Fewa Lake combined with breathtaking close views of Annapurna Range.",
    overview: "Pokhara is widely celebrated as the tourism capital of Nepal, acting as a dream getaway for adventure enthusiasts and nature lovers alike. Located on the banks of the massive Phewa Lake, the city offers unhindered close-up views of the snow-covered Annapurna mountain range. It serves as the primary starting point for world-famous Himalayan trekking circuits like Annapurna Base Camp. The Lakeside area is packed with trendy multi-cuisine restaurants, live music cafes, and cozy handicraft shopping spots. Beyond the lakes, it is globally popular for extreme air sports like paragliding and zip-lining. It offers a beautiful, slower mountain holiday experience compared to busy metro life.",
    popularPlaces: [
      { name: "Phewa Lake", image: "https://images.unsplash.com/photo-1578318285542-a276ec96b412?auto=format&fit=crop&w=300&q=80", details: "Tranquil freshwater lake ideal for peaceful boating and sunset watching." },
      { name: "Sarangkot Sunrise Point", image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=300&q=80", details: "High hilltop offering phenomenal morning views of the Himalayas." },
      { name: "Shanti Stupa (World Peace Pagoda)", image: "https://images.unsplash.com/photo-1605649487212-47bdab064df7?auto=format&fit=crop&w=300&q=80", details: "White Buddhist monument sitting directly over Phewa lake hills." },
      { name: "Davis Falls", image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=300&q=80", details: "Unique cascading waterfall that vanishes inside a deep underground tunnel." },
      { name: "Gupteshwor Mahadev Cave", image: "https://images.unsplash.com/photo-1599930113854-d6d7fd521f10?auto=format&fit=crop&w=300&q=80", details: "Sacred limestone cave network holding a natural stalagmite Shiva Lingam." },
      { name: "International Mountain Museum", image: "https://images.unsplash.com/photo-1477587458883-471a5ed94245?auto=format&fit=crop&w=300&q=80", details: "Museum celebrating global mountaineering history and local mountain tribes." },
      { name: "Tal Barahi Temple", image: "https://images.unsplash.com/photo-1516690561799-46d8f74f9abf?auto=format&fit=crop&w=300&q=80", details: "Two-story Hindu island temple standing directly in the center of Phewa Lake." },
      { name: "Pumdikot Shiva Statue", image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=300&q=80", details: "A massive newly installed statue of Lord Shiva looking across mountain valleys." }
    ]
  },
  {
    id: "nepal-delight",
    category: "international",
    title: "Nepal Delight",
    image: "https://images.unsplash.com/photo-1605649487212-47bdab064df7?auto=format&fit=crop&w=600&q=80",
    price: "₹26,999",
    duration: "7 Days / 6 Nights",
    description: "An all-inclusive customized package linking cultural Kathmandu with adventurous Pokhara.",
    overview: "The Nepal Delight package is a meticulously compiled comprehensive tour designed to give travelers the absolute best of Nepal's heritage and landscapes. It seamlessly blends the deep, ancient, multi-temple spirituality of Kathmandu valley with the pristine lakeside tranquility of Pokhara. Travelers experience beautiful transitions from busy historical urban streets to green mountain highway paths lined with waterfalls. This all-inclusive itinerary makes traveling hassle-free, combining guided city tours, comfortable transport, and breathtaking mountain view points. It stands as the ideal package choice for families and couples visiting Nepal for the first time.",
    popularPlaces: [
      { name: "Kathmandu Durbar Square", image: "https://images.unsplash.com/photo-1605649487212-47bdab064df7?auto=format&fit=crop&w=300&q=80", details: "Epic historic plaza showcasing palace complexes of old Malla kings." },
      { name: "Boudhanath Stupa", image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=300&q=80", details: "Enormous Buddhist dome ringed with vibrant prayer wheels." },
      { name: "Phewa Lake, Pokhara", image: "https://images.unsplash.com/photo-1578318285542-a276ec96b412?auto=format&fit=crop&w=300&q=80", details: "Scenic boating water body with reflection of Annapurna range." },
      { name: "Sarangkot Hills", image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=300&q=80", details: "Unmissable high vantage spot for panoramic morning gold sunrises." },
      { name: "Pashupatinath Temple", image: "https://images.unsplash.com/photo-1599930113854-d6d7fd521f10?auto=format&fit=crop&w=300&q=80", details: "Most sacred riverbank Hindu pilgrimage temple in Nepal." },
      { name: "Swayambhunath Stupa", image: "https://images.unsplash.com/photo-1477587458883-471a5ed94245?auto=format&fit=crop&w=300&q=80", details: "Ancient holy dome complex featuring painted Buddha eyes." },
      { name: "Davis Falls", image: "https://images.unsplash.com/photo-1516690561799-46d8f74f9abf?auto=format&fit=crop&w=300&q=80", details: "Spectacular rocky waterfall entry point directly into underground earth." },
      { name: "Tal Barahi Temple", image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=300&q=80", details: "Beautiful island temple situated in the midst of Phewa lake waters." }
    ]
  },
  {
    id: "dubai",
    category: "international",
    title: "Dubai",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=600&q=80",
    price: "₹48,900",
    duration: "5 Days / 4 Nights",
    description: "Witness luxury architectures like Burj Khalifa, desert safari, and global shopping hubs.",
    overview: "Dubai is a futuristic oasis located in the Arabian Desert, globally recognized for its record-breaking modern architecture and unmatched luxury shopping. In just a few decades, it transformed from a quiet fishing village into an ultra-modern global metropolis. It boasts the world’s tallest skyscrapers, colossal luxury shopping malls, and massive man-made paradise islands shaped like palm trees. Visitors can enjoy thrilling high-speed desert jeep safaris, indoor artificial ski slopes, and spectacular synchronized water fountain displays. Dubai perfectly balances ultra-modern western lifestyle luxuries with rich Middle Eastern heritage traditions, making it an elite global travel hub.",
    popularPlaces: [
      { name: "Burj Khalifa", image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=300&q=80", details: "The iconic tallest building in the world with observation decks." },
      { name: "The Dubai Mall", image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=300&q=80", details: "Massive entertainment mall hosting a giant indoor aquarium tank." },
      { name: "Palm Jumeirah", image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=300&q=80", details: "World-famous artificial island shaped exactly like a palm tree palm." },
      { name: "Dubai Desert Safari", image: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=300&q=80", details: "Thrilling dune bashing safaris complete with Arabian camp dinners." },
      { name: "Burj Al Arab", image: "https://images.unsplash.com/photo-1528181304800-2f1738b24a62?auto=format&fit=crop&w=300&q=80", details: "Ultra-luxury sail-shaped architectural hotel built on its own island." },
      { name: "Dubai Fountain", image: "https://images.unsplash.com/photo-1605649487212-47bdab064df7?auto=format&fit=crop&w=300&q=80", details: "Spectacular choreographed musical water fountain light show." },
      { name: "Miracle Garden", image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=300&q=80", details: "The world's largest natural flower garden featuring incredible floral structures." },
      { name: "Gold Souk", image: "https://images.unsplash.com/photo-1599930113854-d6d7fd521f10?auto=format&fit=crop&w=300&q=80", details: "Traditional Arabian bazaar packed with hundreds of retail jewelry shops." }
    ]
  },
  {
    id: "sri-lanka",
    category: "international",
    title: "Sri Lanka",
    image: "https://images.unsplash.com/photo-1586861635167-e5223aadc9fe?auto=format&fit=crop&w=600&q=80",
    price: "₹29,999",
    duration: "6 Days / 5 Nights",
    description: "Unravel ancient rock fortresses of Sigiriya and wild elephant sanctuaries.",
    overview: "Sri Lanka, known historically as the 'Teardrop of India', is an island nation packed with biodiversity, epic history, and scenic coastal lines. It is home to old UNESCO forest fortresses, expansive tea estates across misty hills, and beaches ideal for whale watching. The island carries profound spiritual links tied directly to Ramayana legends, making it highly intriguing for heritage explorers. Wildlife safaris here provide wonderful opportunities to watch massive herds of Asian elephants roaming free in national parks. Sri Lanka stands out as an easy-paced international holiday choice full of spicy curries, scenic train journeys, and golden coastlines.",
    popularPlaces: [
      { name: "Sigiriya Rock Fortress", image: "https://images.unsplash.com/photo-1586861635167-e5223aadc9fe?auto=format&fit=crop&w=300&q=80", details: "Massive ancient stone citadel containing historic palace ruins and frescoes." },
      { name: "Temple of the Tooth, Kandy", image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=300&q=80", details: "Sacred royal Buddhist shrine housing the relic tooth of Buddha." },
      { name: "Ella Mountain Village", image: "https://images.unsplash.com/photo-1578318285542-a276ec96b412?auto=format&fit=crop&w=300&q=80", details: "Misty hill station famous for the iconic Nine Arch stone bridge." },
      { name: "Galle Dutch Fort", image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=300&q=80", details: "16th-century fortified seaside town displaying European heritage vibes." },
      { name: "Pinnawala Elephant Orphanage", image: "https://images.unsplash.com/photo-1615959189197-48400dc2528a?auto=format&fit=crop&w=300&q=80", details: "Large sanctuary dedicated to caring for rescued baby Asian elephants." },
      { name: "Yala National Park", image: "https://images.unsplash.com/photo-1605649487212-47bdab064df7?auto=format&fit=crop&w=300&q=80", details: "Coastal wildlife sanctuary holding high concentrations of wild leopards." },
      { name: "Bentota Beach", image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=300&q=80", details: "Golden sand beach ideal for luxury resorts and jet ski water sports." },
      { name: "Nuwara Eliya Hills", image: "https://images.unsplash.com/photo-1599930113854-d6d7fd521f10?auto=format&fit=crop&w=300&q=80", details: "Lush green plateau known as 'Little England' packed with tea factories." }
    ]
  },
  {
    id: "singapore",
    category: "international",
    title: "Singapore",
    image: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&w=600&q=80",
    price: "₹52,000",
    duration: "5 Days / 4 Nights",
    description: "Step into future at Gardens by the Bay and premium universal studio amusement parks.",
    overview: "Singapore is a dynamic global city-state widely celebrated as the futuristic 'Garden City' of Southeast Asia. Known for its immaculate clean streets, high-tech rapid transport networks, and incredible modern skyline, it provides a safe premium travel escape. It beautifully blends diverse cultural quarters like Chinatown and Little India alongside gigantic eco-futuristic indoor glass bio-domes. Families love Singapore for its premier Hollywood theme parks, world-class nocturnal safaris, and island resort getaways. Foodies are spoiled for choices, from ultra-budget Michelin-starred street stalls to high-end rooftop dining lounges. It stands as a shining example of safe, modern, cosmopolitan luxury.",
    popularPlaces: [
      { name: "Gardens by the Bay", image: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&w=300&q=80", details: "Futuristic park featuring massive vertical solar-powered 'Supertrees'." },
      { name: "Universal Studios Singapore", image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=300&q=80", details: "Thrilling Hollywood movie theme amusement park located on Sentosa Island." },
      { name: "Marina Bay Sands SkyPark", image: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&w=300&q=80", details: "Iconic boat-shaped luxury hotel platform hosting a giant infinity pool." },
      { name: "Sentosa Island Resorts", image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=300&q=80", details: "Premium beach recreation resort island featuring aquarium networks." },
      { name: "Merlion Park", image: "https://images.unsplash.com/photo-1593693397690-362cb9666fc2?auto=format&fit=crop&w=300&q=80", details: "Waterfront spot hosting Singapore's iconic half-lion, half-fish stone statue." },
      { name: "Singapore Night Safari", image: "https://images.unsplash.com/photo-1615959189197-48400dc2528a?auto=format&fit=crop&w=300&q=80", details: "The world's first open wildlife park operating exclusively after dark." },
      { name: "Changi Jewel Vortex", image: "https://images.unsplash.com/photo-1605649487212-47bdab064df7?auto=format&fit=crop&w=300&q=80", details: "The world's tallest spectacular indoor waterfall surrounded by indoor forests." },
      { name: "Chinatown Heritage Market", image: "https://images.unsplash.com/photo-1589308078059-be1415eab4c3?auto=format&fit=crop&w=300&q=80", details: "Historic district filled with old medicine shops and Buddhist temples." }
    ]
  },
  {
    id: "ilam",
    category: "international",
    title: "Ilam",
    image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=600&q=80",
    price: "₹18,500",
    duration: "4 Days / 3 Nights",
    description: "The tea garden capital of Nepal boasting panoramic landscapes and organic mist orchards.",
    overview: "Ilam is a hidden paradise nestled in the far eastern hills of Nepal, right along the border of Darjeeling, India. Famous as the tea capital of the country, it is completely covered in rolling emerald green hill terraces of organic tea plantations. The region remains refreshingly mist-covered, cool, and free from mass global commercial tourism footprint. It offers pristine, uninterrupted views of Mount Kanchenjunga alongside tranquil forest walks through cardamom orchards and cheese-making farms. Ilam is highly ideal for hikers, nature photographers, and peaceful souls seeking crisp clean air, birds chirping, and calm homestay experiences.",
    popularPlaces: [
      { name: "Kanyam Tea Estate", image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=300&q=80", details: "The most famous rolling tea garden hills popular for scenic picnics." },
      { name: "Antu Danda Hilltop", image: "https://images.unsplash.com/photo-1578318285542-a276ec96b412?auto=format&fit=crop&w=300&q=80", details: "Renowned vantage peak offering exceptional early morning mountain sunrises." },
      { name: "Mai Pokhari Lake", image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=300&q=80", details: "Sacred star-shaped wetland lake protected inside rich botanical woods." },
      { name: "Sandakphu Ridge", image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=300&q=80", details: "High trekking viewpoint displaying four out of the five highest peaks globally." },
      { name: "Siddhithumka Peak", image: "https://images.unsplash.com/photo-1599930113854-d6d7fd521f10?auto=format&fit=crop&w=300&q=80", details: "A magnificent hill lock ideal for looking across southern Nepal plain forests." },
      { name: "Gajurmukhi Shrine", image: "https://images.unsplash.com/photo-1605649487212-47bdab064df7?auto=format&fit=crop&w=300&q=80", details: "Religious rock cave shrine situated beside a roaring mountain river bank." },
      { name: "Ilam Bazaar", image: "https://images.unsplash.com/photo-1477587458883-471a5ed94245?auto=format&fit=crop&w=300&q=80", details: "Charming hill market trading fresh organic tea, local cheese, and lollipops." },
      { name: "Todke Waterfalls", image: "https://images.unsplash.com/photo-1516690561799-46d8f74f9abf?auto=format&fit=crop&w=300&q=80", details: "One of the highest wild freshwater waterfalls hiding inside green valleys." }
    ]
  },

  // --- RELIGIOUS CATEGORY ---
  {
    id: "chardham-yatra",
    category: "religious",
    title: "Chardham Yatra",
    image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=600&q=80",
    price: "₹28,500",
    duration: "10 Days / 9 Nights",
    description: "Most sacred circuits including Yamunotri, Gangotri, Kedarnath, and Badrinath.",
    overview: "The Chardham Yatra is the ultimate spiritual pilgrimage for Hindus, located deep inside the majestic Garhwal Himalayan region of Uttarakhand. This sacred path covers four high-altitude holy shrines: Yamunotri, Gangotri, Kedarnath, and Badrinath. Undertaking this journey is traditionally believed to wash away all earthly sins and open the path to salvation (Moksha). Pilgrims walk past raging white-water rivers, misty mountain valleys, hot water thermal springs, and snow-capped mountain peaks. It stands as a challenging test of both physical fitness and absolute spiritual devotion, rewarded with profound inner peace and cosmic blessings.",
    popularPlaces: [
      { name: "Badrinath Temple", image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=300&q=80", details: "Sacred colorful temple of Lord Vishnu situated near Alaknanda river." },
      { name: "Kedarnath Temple", image: "https://images.unsplash.com/photo-1605649487212-47bdab064df7?auto=format&fit=crop&w=300&q=80", details: "Majestic eighth-century stone Shiva temple facing massive snow mountains." },
      { name: "Gangotri Dham", image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=300&q=80", details: "The holy birthplace of River Ganga nestled among high pine woods." },
      { name: "Yamunotri Dham", image: "https://images.unsplash.com/photo-1578318285542-a276ec96b412?auto=format&fit=crop&w=300&q=80", details: "The source temple of River Yamuna featuring deep hot thermal springs." },
      { name: "Har Ki Pauri, Haridwar", image: "https://images.unsplash.com/photo-1561361531-9952a607be23?auto=format&fit=crop&w=300&q=80", details: "Famous river ghat where millions gather for grand evening Ganga Aarti." },
      { name: "Mana Village", image: "https://images.unsplash.com/photo-1599930113854-d6d7fd521f10?auto=format&fit=crop&w=300&q=80", details: "The historic 'Last Indian Village' located right beside the Tibet border." },
      { name: "Guptkashi Shrines", image: "https://images.unsplash.com/photo-1477587458883-471a5ed94245?auto=format&fit=crop&w=300&q=80", details: "Ancient stopover town housing the holy Vishwanath temple complex." },
      { name: "Joshimath Monastery", image: "https://images.unsplash.com/photo-1516690561799-46d8f74f9abf?auto=format&fit=crop&w=300&q=80", details: "Gateway center established by Adi Shankaracharya for northern math." }
    ]
  },
  {
    id: "kedarnath",
    category: "religious",
    title: "Kedarnath",
    image: "https://images.unsplash.com/photo-1605649487212-47bdab064df7?auto=format&fit=crop&w=600&q=80",
    price: "₹14,500",
    duration: "4 Days / 3 Nights",
    description: "Majestic Shiva shrine situated amid snowy raw peaks of Garhwal Himalayas.",
    overview: "Kedarnath is one of the holiest and most remotely located shrines dedicated to Lord Shiva, resting at a dramatic altitude of 3,583 meters in Uttarakhand. Encircled by towering glaciers and breathtaking snow peaks, the massive stone temple was built centuries ago using heavy interlocking granite boulders. Reaching this sacred location requires a dedicated 16-kilometer trek from Gaurikund, accompanied by continuous spiritual chants of 'Har Har Mahadev'. The energy here is raw, cosmic, and profoundly moving, heavily rewarding pilgrims for their arduous path. It stands as a vital pillar of Char Dham and Panch Kedar pilgrimage circuits.",
    popularPlaces: [
      { name: "Kedarnath Main Temple", image: "https://images.unsplash.com/photo-1605649487212-47bdab064df7?auto=format&fit=crop&w=300&q=80", details: "Magnificent ancient stone shrine of Lord Shiva facing snow peaks." },
      { name: "Bhairav Nath Temple", image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=300&q=80", details: "Hilltop guardian deity shrine offering a wide bird's-eye view of valleys." },
      { name: "Gaurikund Hot Springs", image: "https://images.unsplash.com/photo-1578318285542-a276ec96b412?auto=format&fit=crop&w=300&q=80", details: "The primary base camp spot containing hot thermal bathing waters." },
      { name: "Shankaracharya Samadhi", image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=300&q=80", details: "The newly restored memorial resting site of the great spiritual philosopher." },
      { name: "Vasuki Tal Lake", image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=300&q=80", details: "A challenging high-altitude glacial lake filled with rare Brahma Kamal flowers." },
      { name: "Sonprayag Confluence", image: "https://images.unsplash.com/photo-1599930113854-d6d7fd521f10?auto=format&fit=crop&w=300&q=80", details: "Sacred spot where Mandakini and Basuki mountain rivers join flows." },
      { name: "Chorabari Glacial Lake", image: "https://images.unsplash.com/photo-1516690561799-46d8f74f9abf?auto=format&fit=crop&w=300&q=80", details: "Pristine freshwater source body situated close below Kedarnath peak." },
      { name: "Triyuginarayan Temple", image: "https://images.unsplash.com/photo-1477587458883-471a5ed94245?auto=format&fit=crop&w=300&q=80", details: "The holy eternal flame temple where Lord Shiva and Goddess Parvati married." }
    ]
  },
  {
    id: "ayodhya",
    category: "religious",
    title: "Ayodhya",
    image: "https://images.unsplash.com/photo-1699948035252-8c8ee2a2b347?auto=format&fit=crop&w=600&q=80",
    price: "₹6,999",
    duration: "3 Days / 2 Nights",
    description: "Seek peaceful blessings at newly built dynamic grand Shri Ram Janmabhoomi Mandir.",
    overview: "Ayodhya, the sacred birth city of Lord Rama, is a deeply historical destination located along the peaceful Sarayu River banks in Uttar Pradesh. As one of the ancient 'Sapta Puri' pilgrimage spots, the city is experiencing a magnificent modern spiritual renaissance. Millions flock here to witness the grand, newly constructed Shri Ram Janmabhoomi Mandir, reflecting exceptional traditional Indian stone-carving craftsmanship. The atmosphere is continuously filled with holy bhajans, temple bells, and beautifully lit evening river ceremonies. Exploring its clean ghats and historic fortresses takes travelers right back into the golden pages of the Ramayana era.",
    popularPlaces: [
      { name: "Shri Ram Janmabhoomi Mandir", image: "https://images.unsplash.com/photo-1699948035252-8c8ee2a2b347?auto=format&fit=crop&w=300&q=80", details: "The grand, newly built masterpiece temple dedicated to Lord Ram Lalla." },
      { name: "Hanuman Garhi", image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=300&q=80", details: "A 10th-century hilltop temple fortress dedicated to Lord Hanuman." },
      { name: "Kanak Bhawan Palace", image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=300&q=80", details: "Beautiful golden-throne palace temple gifted to Sita after her marriage." },
      { name: "Ram Ki Paidi Ghats", image: "https://images.unsplash.com/photo-1561361531-9952a607be23?auto=format&fit=crop&w=300&q=80", details: "Massive series of river steps illuminated beautifully during grand Deepotsavs." },
      { name: "Sarayu River Aarti", image: "https://images.unsplash.com/photo-1599930113854-d6d7fd521f10?auto=format&fit=crop&w=300&q=80", details: "Tranquil evening spiritual prayer ceremonies along the river banks." },
      { name: "Nageshwarnath Temple", image: "https://images.unsplash.com/photo-1605649487212-47bdab064df7?auto=format&fit=crop&w=300&q=80", details: "Ancient Shiva shrine traditionally believed to be built by Lord Rama's son, Kush." },
      { name: "Dashrath Mahal", image: "https://images.unsplash.com/photo-1477587458883-471a5ed94245?auto=format&fit=crop&w=300&q=80", details: "The royal palace seat of Lord Rama's father, King Dashrath." },
      { name: "Choti Chawni Complex", image: "https://images.unsplash.com/photo-1516690561799-46d8f74f9abf?auto=format&fit=crop&w=300&q=80", details: "Incredible, highly detailed architectural multi-temple cave structure." }
    ]
  },
  {
    id: "tirupati-balaji",
    category: "religious",
    title: "Tirupati Balaji",
    image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=600&q=80",
    price: "₹9,500",
    duration: "3 Days / 2 Nights",
    description: "Visit ancient wealthy dynamic Venkateswara temple over sacred Tirumala hills.",
    overview: "Tirupati, resting in the Chittoor district of Andhra Pradesh, houses the world-famous Venkateswara Temple atop the holy seven hills of Tirumala. It is widely considered one of the wealthiest and most heavily visited religious institutions globally, drawing tens of thousands of devotees daily. Pilgrims happily stand in long lines to catch a brief, powerful glimpse of the majestic jewel-clad deity, Lord Balaji. The temple management runs an incredibly efficient, high-tech operation, distributing millions of its world-famous GI-tagged 'Tirupati Laddus' daily. It is a legendary center of supreme faith, strict vow fulfillments, and sacred head-shaving rituals.",
    popularPlaces: [
      { name: "Tirumala Venkateswara Temple", image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=300&q=80", details: "The world-famous golden-roofed temple shrine of Lord Balaji." },
      { name: "Padmavathi Ammavari Temple", image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=300&q=80", details: "Sacred temple shrine dedicated to the divine consort of Lord Venkateswara." },
      { name: "Kapila Theertham Falls", image: "https://images.unsplash.com/photo-1599930113854-d6d7fd521f10?auto=format&fit=crop&w=300&q=80", details: "Holy cave temple waterfall dedicated exclusively to Lord Shiva." },
      { name: "Srikalahasti Temple", image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=300&q=80", details: "Famous ancient Rahu-Ketu pilgrimage temple located close by Tirupati." },
      { name: "Talakona Waterfalls", image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=300&q=80", details: "The highest beautiful waterfall canopy inside Andhra Pradesh woods." },
      { name: "Chandragiri Fort", image: "https://images.unsplash.com/photo-1477587458883-471a5ed94245?auto=format&fit=crop&w=300&q=80", details: "11th-century historical fortification complex built by Vijayanagara rulers." },
      { name: "Sri Govindaraja Swamy Temple", image: "https://images.unsplash.com/photo-1605649487212-47bdab064df7?auto=format&fit=crop&w=300&q=80", details: "Massive city temple featuring an enormous ancient multi-tier tower." },
      { name: "Silathoranam Rock Arch", image: "https://images.unsplash.com/photo-1516690561799-46d8f74f9abf?auto=format&fit=crop&w=300&q=80", details: "Extremely rare natural geological rock arch bridge on Tirumala hills." }
    ]
  },
  {
    id: "varanasi",
    category: "religious",
    title: "Varanasi",
    image: "https://images.unsplash.com/photo-1561361531-9952a607be23?auto=format&fit=crop&w=600&q=80",
    price: "₹7,500",
    duration: "3 Days / 2 Nights",
    description: "Witness mystical Ganga Aarti at Dashashwamedh Ghat and pristine historic alleys.",
    overview: "Varanasi, also historically known as Kashi or Banaras, is widely celebrated as one of the oldest continuously inhabited cities on Earth. Anchored along the sacred loops of the River Ganga in Uttar Pradesh, it is the beating heart of Hindu spiritual cosmos. The city is defined by its labyrinth of narrow ancient alleys packed with thousands of tiny shrines and silk-weaving households. Every evening, the legendary stone ghats come alive with spectacular, highly synchronized multi-lamp Ganga Aarti ceremonies. Traveling here offers an intense, deeply spiritual confrontation with life, death, and timeless Vedic philosophies.",
    popularPlaces: [
      { name: "Kashi Vishwanath Temple", image: "https://images.unsplash.com/photo-1605649487212-47bdab064df7?auto=format&fit=crop&w=300&q=80", details: "The sacred golden-spired Jyotirlinga shrine of Lord Shiva." },
      { name: "Dashashwamedh Ghat", image: "https://images.unsplash.com/photo-1561361531-9952a607be23?auto=format&fit=crop&w=300&q=80", details: "The primary bustling ghat famous for the spectacular evening Ganga Aarti." },
      { name: "Manikarnika Ghat", image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=300&q=80", details: "The historic, legendary eternal cremation ghat active 24 hours daily." },
      { name: "Sarnath Dhamekh Stupa", image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=300&q=80", details: "Holy archaeological park where Lord Buddha delivered his first sermon." },
      { name: "Assi Ghat", image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=300&q=80", details: "A peaceful southern ghat popular for early morning Subah-e-Banaras prayers." },
      { name: "Banaras Hindu University", image: "https://images.unsplash.com/photo-1599930113854-d6d7fd521f10?auto=format&fit=crop&w=300&q=80", details: "Massive green campus housing the gorgeous white marble new Vishwanath temple." },
      { name: "Ramnagar Fort", image: "https://images.unsplash.com/photo-1477587458883-471a5ed94245?auto=format&fit=crop&w=300&q=80", details: "18th-century riverside sandstone fortress holding vintage royal cars." },
      { name: "Sankat Mochan Temple", image: "https://images.unsplash.com/photo-1516690561799-46d8f74f9abf?auto=format&fit=crop&w=300&q=80", details: "Ancient power temple dedicated to Lord Hanuman, filled with native monkeys." }
    ]
  },
  {
    id: "vrindavan",
    category: "religious",
    title: "Vrindavan",
    image: "https://images.unsplash.com/photo-1669222479532-6a42a6d7f3fb?auto=format&fit=crop&w=600&q=80",
    price: "₹5,999",
    duration: "3 Days / 2 Nights",
    description: "Immerse yourself completely into cosmic Krishna devotion around Banke Bihari nodes.",
    overview: "Vrindavan is a highly energetic holy town located in Mathura district, celebrating the playful childhood pastimes of Lord Krishna. Lying along the Yamuna River, the destination is completely saturated in pure 'Bhakti' devotion and chants of 'Radhe Radhe'. It features thousands of temples ranging from old medieval stone structures to gigantic ultra-modern marble marvels like Prem Mandir. The crowded bazaars sell beautiful deity clothes, incense, and delicious sweet milk delicacies (pedas). Visiting here during festivals like Holi or Janmashtami allows travelers to experience ecstatic spiritual dancing and joy.",
    popularPlaces: [
      { name: "Banke Bihari Temple", image: "https://images.unsplash.com/photo-1669222479532-6a42a6d7f3fb?auto=format&fit=crop&w=300&q=80", details: "The highly popular heart temple hosting the charming swinging deity of Krishna." },
      { name: "Prem Mandir", image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=300&q=80", details: "Massive white Italian marble temple complex famous for stunning night lights." },
      { name: "ISKCON Krishna Balaram Temple", image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=300&q=80", details: "International spiritual center known for ecstatic singing and clean courtyards." },
      { name: "Nidhivan Forest", image: "https://images.unsplash.com/photo-1599930113854-d6d7fd521f10?auto=format&fit=crop&w=300&q=80", details: "Mystical forest where trees are believed to transform into gopis at night." },
      { name: "Radha Raman Temple", image: "https://images.unsplash.com/photo-1605649487212-47bdab064df7?auto=format&fit=crop&w=300&q=80", details: "Historic heritage temple holding a self-manifested exquisite black deity." },
      { name: "Sri Ranganatha Temple", image: "https://images.unsplash.com/photo-1477587458883-471a5ed94245?auto=format&fit=crop&w=300&q=80", details: "Massive south-Indian style temple complex featuring a colossal golden pillar." },
      { name: "Kesi Ghat", image: "https://images.unsplash.com/photo-1561361531-9952a607be23?auto=format&fit=crop&w=300&q=80", details: "The primary holy step ghat on River Yamuna where Krishna defeated a demon." },
      { name: "Vaishno Devi Temple", image: "https://images.unsplash.com/photo-1516690561799-46d8f74f9abf?auto=format&fit=crop&w=300&q=80", details: "Features a massive 141-foot tall spectacular idol of Goddess Durga." }
    ]
  },

  // --- HILL STATION CATEGORY ---
  {
    id: "nainital-shimla",
    category: "hillstation",
    title: "Nainital-Shimla",
    image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=600&q=80",
    price: "₹18,500",
    duration: "6 Days / 5 Nights",
    description: "A perfect fusion of emerald Naini lakes with vintage Mall roads of beautiful Shimla.",
    overview: "This combined holiday package brings together two of north India’s most iconic colonial hill retreats: Nainital and Shimla. Nainital centers around a stunning emerald pear-shaped lake wrapped by thick oak forests, offering calm boating and misty cable car heights. Transitioning to Shimla, the historic summer capital of British India, guests walk through sprawling colonial pedestrian lanes (The Ridge) free from motor traffic. Both locations boast active Mall Roads lined with local restaurants, wooden toy shops, and lively skating rings. It serves as the ultimate refreshing escape for families seeking cold weather, mountain views, and historical nostalgia.",
    popularPlaces: [
      { name: "Naini Lake, Nainital", image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=300&q=80", details: "Beautiful eye-shaped central freshwater lake ideal for yacht boating." },
      { name: "The Ridge, Shimla", image: "https://images.unsplash.com/photo-1578318285542-a276ec96b412?auto=format&fit=crop&w=300&q=80", details: "Wide open pine-lined walking plaza looking out to mountain peaks." },
      { name: "Mall Road, Shimla", image: "https://images.unsplash.com/photo-1605649487212-47bdab064df7?auto=format&fit=crop&w=300&q=80", details: "Bustling colonial shopping street packed with bakeries and wooden markets." },
      { name: "Jakhoo Hanuman Temple", image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=300&q=80", details: "Hilltop temple in Shimla hosting a giant 108-foot orange Hanuman statue." },
      { name: "Snow View Point", image: "https://images.unsplash.com/photo-1599930113854-d6d7fd521f10?auto=format&fit=crop&w=300&q=80", details: "Cable car vantage station offering wide views of Himalayan snow walls." },
      { name: "Kufri Snow Adventure", image: "https://images.unsplash.com/photo-1477587458883-471a5ed94245?auto=format&fit=crop&w=300&q=80", details: "High sub-town popular for winter skiing and yak riding safaris." },
      { name: "Eco Cave Gardens", image: "https://images.unsplash.com/photo-1516690561799-46d8f74f9abf?auto=format&fit=crop&w=300&q=80", details: "Interconnected natural rocky animal-shaped crawl caves for tourists." },
      { name: "Viceregal Lodge", image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=300&q=80", details: "Stunning Scottish-baronial castle style structure of old British rulers." }
    ]
  },
  {
    id: "bandipur",
    category: "hillstation",
    title: "Bandipur",
    image: "https://images.unsplash.com/photo-1578318285542-a276ec96b412?auto=format&fit=crop&w=600&q=80",
    price: "₹13,999",
    duration: "4 Days / 3 Nights",
    description: "Charming ancient hilltop settlement in Nepal showing majestic sunrise view frameworks.",
    overview: "Bandipur is a beautifully preserved living museum town situated on a high ridge in Tanahun district, Nepal. Renowned for its untouched 18th-century Newari architecture, the main town features flagstone pedestrian streets lined with traditional carved wooden facades. The town has actively banned heavy vehicle entry to retain its peaceful atmosphere and old-world charm. Sitting high up, it serves as a spectacular viewpoint looking down at the Marshyangdi river valley and up at the Langtang mountain ranges. It is an amazing alternative to busy mountain resorts, focusing on cozy cafes, silk farms, and deep cave exploration.",
    popularPlaces: [
      { name: "Bandipur Bazaar", image: "https://images.unsplash.com/photo-1578318285542-a276ec96b412?auto=format&fit=crop&w=300&q=80", details: "Vehicle-free historic brick street lined with flowering European-style cafes." },
      { name: "Siddha Gufa Cave", image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=300&q=80", details: "The largest stalactite cave structure in Nepal, popular for adventure crawls." },
      { name: "Thani Mai Temple Hill", image: "https://images.unsplash.com/photo-1605649487212-47bdab064df7?auto=format&fit=crop&w=300&q=80", details: "High peak track destination providing unmatched 360-degree morning sunrises." },
      { name: "Tundikhel Playground", image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=300&q=80", details: "Massive human-made flat ridge green offering clear mountain horizons." },
      { name: "Silkworm Farm", image: "https://images.unsplash.com/photo-1599930113854-d6d7fd521f10?auto=format&fit=crop&w=300&q=80", details: "Educational agro-farm demonstrating the entire lifecycle of silk production." },
      { name: "Khadga Devi Temple", image: "https://images.unsplash.com/photo-1477587458883-471a5ed94245?auto=format&fit=crop&w=300&q=80", details: "Sacred Newari shrine preserving a legendary dynamic ancient sword weapon." },
      { name: "Padma Library", image: "https://images.unsplash.com/photo-1516690561799-46d8f74f9abf?auto=format&fit=crop&w=300&q=80", details: "Historic library standing proud since the old Rana regime days." },
      { name: "Ramkot Village Walk", image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=300&q=80", details: "Scenic rural track heading into traditional round mud-built Magar homes." }
    ]
  },
  {
    id: "uttarakhand",
    category: "hillstation",
    title: "Uttarakhand",
    image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=600&q=80",
    price: "₹16,500",
    duration: "5 Days / 4 Nights",
    description: "Misty mountains and fresh forest pathways spanning Mussoorie, Rishikesh & Dehradun.",
    overview: "This comprehensive Uttarakhand hill package perfectly bridges together the mountain charms of Mussoorie, the urban valley comfort of Dehradun, and the spiritual wellness of Rishikesh. Travelers experience sweeping views of the Doon valley, cascades of mountain water springs, and fresh oak forest tracks. Rishikesh adds an exciting edge with its world-famous white water river rafting rapids and evening river banking ceremonies. Dehradun acts as the perfect comforting midpoint packed with unique natural cave streams and premier colonial institutes. It is an incredibly well-balanced mountain tour that packs adventure, scenic views, and relaxation.",
    popularPlaces: [
      { name: "Kempty Falls, Mussoorie", image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=300&q=80", details: "Iconic high waterfall forming a huge natural swimming pool trap." },
      { name: "Laxman Jhula, Rishikesh", image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=300&q=80", details: "Famous historic suspension pedestrian bridge crossing the holy River Ganga." },
      { name: "Robber's Cave, Dehradun", image: "https://images.unsplash.com/photo-1578318285542-a276ec96b412?auto=format&fit=crop&w=300&q=80", details: "Unique dark limestone river cave channel with disappearing streams." },
      { name: "Gun Hill Cable Car", image: "https://images.unsplash.com/photo-1605649487212-47bdab064df7?auto=format&fit=crop&w=300&q=80", details: "The second highest peak point in Mussoorie accessed via ropeways." },
      { name: "Triveni Ghat, Rishikesh", image: "https://images.unsplash.com/photo-1561361531-9952a607be23?auto=format&fit=crop&w=300&q=80", details: "The primary ghat confluence popular for grand synchronized evening chants." },
      { name: "Sahastradhara Springs", image: "https://images.unsplash.com/photo-1599930113854-d6d7fd521f10?auto=format&fit=crop&w=300&q=80", details: "Beautiful sulfur water therapeutic dripping caves rich in medicinal value." },
      { name: "Mall Road, Mussoorie", image: "https://images.unsplash.com/photo-1477587458883-471a5ed94245?auto=format&fit=crop&w=300&q=80", details: "Colonial walking ridge path full of viewpoints and wooden gift shops." },
      { name: "Forest Research Institute", image: "https://images.unsplash.com/photo-1516690561799-46d8f74f9abf?auto=format&fit=crop&w=300&q=80", details: "Massive, spectacular Greco-Roman styled majestic university structure." }
    ]
  },
  {
    id: "himachal-pradesh",
    category: "hillstation",
    title: "Himachal Pradesh",
    image: "https://images.unsplash.com/photo-1605649487212-47bdab064df7?auto=format&fit=crop&w=600&q=80",
    price: "₹19,999",
    duration: "6 Days / 5 Nights",
    description: "Journey across breathtaking snow valleys of Manali, Solang Valley, and Kullu nodes.",
    overview: "Himachal Pradesh, the 'Land of Snow', offers an unforgettable Alpine holiday centered around the popular tourist hub of Manali and Kullu valleys. Encircled by towering cedar forests, rushing Beas river streams, and massive snow mountain slopes, this route remains heavily popular year-round. Adventure lovers flock here for extreme winter skiing, paragliding, and river rafting activities. Walking through old wooden villages exposes guests to rich Himachali heritage culture, warm hospitality, and ancient temples. The journey through high-altitude tunnels unlocks the stunning cold deserts beyond, making it the perfect family or honeymoon mountain escape.",
    popularPlaces: [
      { name: "Solang Valley", image: "https://images.unsplash.com/photo-1605649487212-47bdab064df7?auto=format&fit=crop&w=300&q=80", details: "Premier hub for paragliding, quad biking, and winter snow skiing." },
      { name: "Hadimba Temple, Manali", image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=300&q=80", details: "A unique 16th-century wooden pagoda temple built inside deep pine woods." },
      { name: "Atal Tunnel Bypass", image: "https://images.unsplash.com/photo-1578318285542-a276ec96b412?auto=format&fit=crop&w=300&q=80", details: "Engineering marvel tunnel opening roads into Lahaul snow valleys." },
      { name: "Mall Road, Manali", image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=300&q=80", details: "Lively central walking market street known for woolens and local foods." },
      { name: "Kullu River Rafting Point", image: "https://images.unsplash.com/photo-1599930113854-d6d7fd521f10?auto=format&fit=crop&w=300&q=80", details: "Raging Beas river curves perfect for thrilling water white water sports." },
      { name: "Jogini Waterfalls", image: "https://images.unsplash.com/photo-1477587458883-471a5ed94245?auto=format&fit=crop&w=300&q=80", details: "Scenic mountain cascade accessed via a beautiful forest hiking track." },
      { name: "Vashisht Hot Springs", image: "https://images.unsplash.com/photo-1516690561799-46d8f74f9abf?auto=format&fit=crop&w=300&q=80", details: "Natural therapeutic hot sulfur bathing tanks located near old stone shrines." },
      { name: "Rohtang Pass View", image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=300&q=80", details: "High alpine pass covered in thick spectacular glaciers and snow." }
    ]
  },
  {
    id: "tansen",
    category: "hillstation",
    title: "Tansen",
    image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=600&q=80",
    price: "₹12,499",
    duration: "4 Days / 3 Nights",
    description: "Lush Newari architectures setup at heights of hillocks offering pleasant round weather.",
    overview: "Tansen is a charming, historic hill station resting on the slopes of Shreenagar Hills in Palpa district, Nepal. Acting as an old trading post between the plain fields and high mountains, it boasts highly intricate Newari style paved streets and old brick architecture. Tansen is internationally famous for producing 'Palpali Dhaka', a beautifully patterned hand-woven traditional cotton fabric cloth. The town enjoys incredibly pleasant mountain weather throughout the year, far away from regular tourist pollution. It offers historic palaces, forest viewpoints, and a rich window into Nepal's classical hill heritage history.",
    popularPlaces: [
      { name: "Palpa Durbar (Tansen Palace)", image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=300&q=80", details: "Grand historical palace complex reconstructed as a regional museum." },
      { name: "Rani Mahal (Taj Mahal of Nepal)", image: "https://images.unsplash.com/photo-1578318285542-a276ec96b412?auto=format&fit=crop&w=300&q=80", details: "Spectacular riverside palace built over massive cliffs out of pure love." },
      { name: "Shreenagar Hilltop Park", image: "https://images.unsplash.com/photo-1605649487212-47bdab064df7?auto=format&fit=crop&w=300&q=80", details: "Thick pine forest hill providing extensive views from Dhaulagiri to Annapurna." },
      { name: "Sitalpati Public Square", image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=300&q=80", details: "Unique round public resting house structure located at the town center market." },
      { name: "Amar Narayan Temple", image: "https://images.unsplash.com/photo-1599930113854-d6d7fd521f10?auto=format&fit=crop&w=300&q=80", details: "Beautiful multi-tiered wooden Pagoda temple rich in classic erotic carvings." },
      { name: "Bhagawati Temple", image: "https://images.unsplash.com/photo-1477587458883-471a5ed94245?auto=format&fit=crop&w=300&q=80", details: "Historic structure celebrated via a giant victory chariot parade annually." },
      { name: "Dhaka Weaving Bazaars", image: "https://images.unsplash.com/photo-1516690561799-46d8f74f9abf?auto=format&fit=crop&w=300&q=80", details: "Local artisan quarters hand-crafting elite traditional Palpali fabrics." },
      { name: "Bhairabsthan Temple", image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=300&q=80", details: "Famous ridge shrine holding one of the largest silver trident weapons." }
    ]
  },
  {
    id: "dhulikhel",
    category: "hillstation",
    title: "Dhulikhel",
    image: "https://images.unsplash.com/photo-1578318285542-a276ec96b412?auto=format&fit=crop&w=600&q=80",
    price: "₹14,200",
    duration: "4 Days / 3 Nights",
    description: "Get wide untamed panoramic landscape views of complete eastern Himalayan ranges.",
    overview: "Dhulikhel is an ancient Newari hill town located on the eastern rim of the Kathmandu Valley, Nepal. It has emerged as a premier eco-resort destination, globally celebrated for presenting wide, untamed panoramic landscape views of the complete eastern Himalayan ranges. On a clear morning, visitors can trace over twenty high peaks extending from Mount Annapurna directly to Mount Everest. The lower old town still holds onto beautiful brick structures, sacred ancient courtyards, and traditional lifestyle routines. It serves as an incredibly popular weekend relaxation escape featuring lush forest trail tracks and high adventure zip-line tracks.",
    popularPlaces: [
      { name: "Himalayan Sunrise Viewpoints", image: "https://images.unsplash.com/photo-1578318285542-a276ec96b412?auto=format&fit=crop&w=300&q=80", details: "Vantage points offering views stretching from Annapurna to Everest ranges." },
      { name: "Namo Buddha Monastery", image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=300&q=80", details: "Highly sacred Buddhist cliff monastery celebrating a legendary historic prince sacrifice." },
      { name: "Kali Temple Ridge Track", image: "https://images.unsplash.com/photo-1605649487212-47bdab064df7?auto=format&fit=crop&w=300&q=80", details: "A 1000-step eco stone staircase track leading up to a hilltop temple." },
      { name: "Old Dhulikhel Bazaar", image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=300&q=80", details: "Traditional heritage core lined with old brick structures and open shrines." },
      { name: "Gokhushwar Mahadev Temple", image: "https://images.unsplash.com/photo-1599930113854-d6d7fd521f10?auto=format&fit=crop&w=300&q=80", details: "Peaceful riverside valley temple dedicated to Lord Shiva." },
      { name: "Dhulikhel Zip-line Park", image: "https://images.unsplash.com/photo-1477587458883-471a5ed94245?auto=format&fit=crop&w=300&q=80", details: "Thrilling high-speed adventure zip-line crossing deep mountain valleys." },
      { name: "Deveshwar Mahadev Shrine", image: "https://images.unsplash.com/photo-1516690561799-46d8f74f9abf?auto=format&fit=crop&w=300&q=80", details: "Ancient hilltop temple highly revered by local Newari communities." },
      { name: "Palanchowk Bhagwati Temple", image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=300&q=80", details: "Historic hilltop shrine holding an incredibly carved black stone goddess." }
    ]
  }
];