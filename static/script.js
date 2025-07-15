// Destination data - in a real app, this would come from a database or API
const destinationData = {
    'Paris': {
      description: "Paris, France's capital, is a major European city and a global center for art, fashion, gastronomy and culture. Its picturesque 19th-century cityscape is crisscrossed by wide boulevards and the River Seine.",
      images: [
        'https://images.unsplash.com/photo-1431274172761-fca41d930114?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cGFyaXN8ZW58MHx8MHx8fDA%3D',
        'https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHBhcmlzfGVufDB8fDB8fHww',
        'https://images.unsplash.com/photo-1522093007474-d86e9bf7ba6f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHBhcmlzfGVufDB8fDB8fHww'
      ],
      attractions: [
        { name: 'Eiffel Tower', description: 'Iconic iron tower offering city views' },
        { name: 'Louvre Museum', description: 'World-famous art museum' },
        { name: 'Notre-Dame Cathedral', description: 'Historic Gothic cathedral' },
        { name: 'Montmartre', description: 'Artistic hilltop neighborhood' }
      ],
      hotels: [
        { name: 'Hôtel Ritz Paris', price: '$$$$', rating: '5 stars' },
        { name: 'Le Meurice', price: '$$$$', rating: '5 stars' },
        { name: 'Hôtel du Louvre', price: '$$$', rating: '4 stars' },
        { name: 'Hôtel Fabric', price: '$$', rating: '4 stars' }
      ],
      tips: [
        'Buy a Paris Museum Pass for access to many attractions',
        'Learn basic French phrases',
        'Use the Metro for easy transportation',
        'Visit popular sites early to avoid crowds'
      ]
    },
    'New York': {
      description: "New York City comprises 5 boroughs sitting where the Hudson River meets the Atlantic Ocean. At its core is Manhattan, a densely populated borough that's among the world's major commercial, financial and cultural centers.",
      images: [
        'https://images.unsplash.com/photo-1485871981521-5b1fd3805eee?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bmV3JTIweW9ya3xlbnwwfHwwfHx8MA%3D%3D',
        'https://images.unsplash.com/photo-1499092346589-b9b6be3e94b2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bmV3JTIweW9ya3xlbnwwfHwwfHx8MA%3D%3D',
        'https://images.unsplash.com/photo-1546436836-07a91091f160?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bmV3JTIweW9ya3xlbnwwfHwwfHx8MA%3D%3D'
      ],
      attractions: [
        { name: 'Statue of Liberty', description: 'Iconic symbol of freedom' },
        { name: 'Central Park', description: 'Vast urban park with many attractions' },
        { name: 'Times Square', description: 'Bright lights and Broadway theaters' },
        { name: 'Empire State Building', description: 'Iconic art deco skyscraper' }
      ],
      hotels: [
        { name: 'The Plaza', price: '$$$$', rating: '5 stars' },
        { name: 'The Ritz-Carlton New York', price: '$$$$', rating: '5 stars' },
        { name: 'Arlo SoHo', price: '$$$', rating: '4 stars' },
        { name: 'Pod Times Square', price: '$$', rating: '3 stars' }
      ],
      tips: [
        'Get a MetroCard for subway and bus access',
        'Visit museums during free hours',
        'Walk across Brooklyn Bridge at sunset',
        'Try authentic NYC pizza and bagels'
      ]
    },
    'Tokyo': {
      description: "Tokyo, Japan's bustling capital, mixes the ultramodern and the traditional, from neon-lit skyscrapers to historic temples. The opulent Meiji Shinto Shrine is known for its towering gate and surrounding woods.",
      images: [
        'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dG9reW98ZW58MHx8MHx8fDA%3D',
        'https://images.unsplash.com/photo-1492571350019-22de08371fd3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dG9reW98ZW58MHx8MHx8fDA%3D',
        'https://images.unsplash.com/photo-1513407030348-c983a97b98d8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dG9reW98ZW58MHx8MHx8fDA%3D'
      ],
      attractions: [
        { name: 'Shibuya Crossing', description: 'World\'s busiest pedestrian crossing' },
        { name: 'Senso-ji Temple', description: 'Ancient Buddhist temple' },
        { name: 'Tokyo Skytree', description: 'Tallest structure in Japan' },
        { name: 'Meiji Shrine', description: 'Tranquil Shinto shrine' }
      ],
      hotels: [
        { name: 'Park Hotel Tokyo', price: '$$$', rating: '4 stars' },
        { name: 'The Ritz-Carlton Tokyo', price: '$$$$', rating: '5 stars' },
        { name: 'Shinjuku Granbell Hotel', price: '$$', rating: '3 stars' },
        { name: 'Hotel Ryumeikan Tokyo', price: '$$', rating: '4 stars' }
      ],
      tips: [
        'Get a Suica or Pasmo card for public transport',
        'Try authentic ramen at small local shops',
        'Visit themed cafes for unique experiences',
        'Respect local customs and etiquette'
      ]
    },
    'Rome': {
      description: "Rome, Italy's capital, is a sprawling, cosmopolitan city with nearly 3,000 years of globally influential art, architecture and culture on display. Ancient ruins like the Forum and the Colosseum evoke the power of the former Roman Empire.",
      images: [
        'https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cm9tZXxlbnwwfHwwfHx8MA%3D%3D',
        'https://images.unsplash.com/photo-1529260830199-42c24126f198?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cm9tZXxlbnwwfHwwfHx8MA%3D%3D',
        'https://images.unsplash.com/photo-1580234811497-9df7fd2f357e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cm9tZXxlbnwwfHwwfHx8MA%3D%3D'
      ],
      attractions: [
        { name: 'Colosseum', description: 'Ancient amphitheater that could hold 50,000' },
        { name: 'Trevi Fountain', description: 'Baroque fountain for coin tossing' },
        { name: 'Pantheon', description: 'Best-preserved ancient Roman monument' },
        { name: 'Vatican City', description: 'Home of St. Peter\'s Basilica' }
      ],
      hotels: [
        { name: 'Hotel Eden', price: '$$$$', rating: '5 stars' },
        { name: 'The St. Regis Rome', price: '$$$$', rating: '5 stars' },
        { name: 'Hotel Artemide', price: '$$$', rating: '4 stars' },
        { name: 'Hotel Santa Maria', price: '$$', rating: '3 stars' }
      ],
      tips: [
        'Buy a Roma Pass for transport and attractions',
        'Dress modestly for Vatican visits',
        'Try authentic carbonara and cacio e pepe',
        'Visit early morning to avoid crowds'
      ]
    },
    'Barcelona': {
      description: "Barcelona, the cosmopolitan capital of Spain's Catalonia region, is known for its art and architecture. The fantastical Sagrada Família church and other modernist landmarks designed by Antoni Gaudí dot the city.",
      images: [
        'https://images.unsplash.com/photo-1523531294919-4bcd7c65e216?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmFyY2Vsb25hfGVufDB8fDB8fHww',
        'https://images.unsplash.com/photo-1583422409516-289911ce76a1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YmFyY2Vsb25hfGVufDB8fDB8fHww',
        'https://images.unsplash.com/photo-1562883676-8c9f9c3f8b1a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YmFyY2Vsb25hfGVufDB8fDB8fHww'
      ],
      attractions: [
        { name: 'Sagrada Família', description: 'Gaudí\'s unfinished masterpiece' },
        { name: 'Park Güell', description: 'Whimsical park with mosaic art' },
        { name: 'La Rambla', description: 'Famous tree-lined pedestrian street' },
        { name: 'Gothic Quarter', description: 'Historic center with medieval buildings' }
      ],
      hotels: [
        { name: 'Hotel Arts Barcelona', price: '$$$$', rating: '5 stars' },
        { name: 'Mandarin Oriental Barcelona', price: '$$$$', rating: '5 stars' },
        { name: 'Hotel 1898', price: '$$$', rating: '4 stars' },
        { name: 'Hotel Brummell', price: '$$', rating: '4 stars' }
      ],
      tips: [
        'Buy tickets for Gaudí sites in advance',
        'Try tapas at local bodegas',
        'Visit Barceloneta beach',
        'Learn some basic Catalan phrases'
      ]
    },
    'Dubai': {
      description: "Dubai is a city and emirate in the United Arab Emirates known for luxury shopping, ultramodern architecture and a lively nightlife scene. Burj Khalifa, an 830m-tall tower, dominates the skyscraper-filled skyline.",
      images: [
        'https://images.unsplash.com/photo-1518684079-3c830dcef090?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZHViYWl8ZW58MHx8MHx8fDA%3D',
        'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZHViYWl8ZW58MHx8MHx8fDA%3D',
        'https://images.unsplash.com/photo-1503917988258-f87a78e3c995?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8ZHViYWl8ZW58MHx8MHx8fDA%3D'
      ],
      attractions: [
        { name: 'Burj Khalifa', description: 'World\'s tallest building' },
        { name: 'Palm Jumeirah', description: 'Artificial archipelago' },
        { name: 'Dubai Mall', description: 'One of world\'s largest shopping malls' },
        { name: 'Desert Safari', description: 'Dune bashing and Bedouin experiences' }
      ],
      hotels: [
        { name: 'Burj Al Arab', price: '$$$$', rating: '7 stars' },
        { name: 'Atlantis The Palm', price: '$$$$', rating: '5 stars' },
        { name: 'Armani Hotel Dubai', price: '$$$$', rating: '5 stars' },
        { name: 'Rove Downtown', price: '$$', rating: '3 stars' }
      ],
      tips: [
        'Dress modestly in public areas',
        'Visit during winter for pleasant weather',
        'Try authentic Emirati cuisine',
        'Use metro for affordable transport'
      ]
    },
    'Sydney': {
      description: "Sydney, capital of New South Wales and one of Australia's largest cities, is best known for its harbourfront Sydney Opera House, with a distinctive sail-like design. Massive Darling Harbour and the smaller Circular Quay port are hubs of waterside life.",
      images: [
        'https://images.unsplash.com/photo-1523428096881-5bd79d043006?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3lkbmV5fGVufDB8fDB8fHww',
        'https://images.unsplash.com/photo-1528072164453-f4e8ef0d475a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8c3lkbmV5fGVufDB8fDB8fHww',
        'https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8c3lkbmV5fGVufDB8fDB8fHww'
      ],
      attractions: [
        { name: 'Sydney Opera House', description: 'Iconic performing arts venue' },
        { name: 'Sydney Harbour Bridge', description: 'Famous steel arch bridge' },
        { name: 'Bondi Beach', description: 'Famous surf beach with golden sands' },
        { name: 'The Rocks', description: 'Historic area with colonial buildings' }
      ],
      hotels: [
        { name: 'Park Hyatt Sydney', price: '$$$$', rating: '5 stars' },
        { name: 'Four Seasons Hotel Sydney', price: '$$$$', rating: '5 stars' },
        { name: 'QT Sydney', price: '$$$', rating: '4 stars' },
        { name: 'The Old Clare Hotel', price: '$$', rating: '4 stars' }
      ],
      tips: [
        'Get an Opal card for public transport',
        'Visit coastal walks for stunning views',
        'Try Australian seafood and wines',
        'Visit Taronga Zoo for native wildlife'
      ]
    },
    'Bali': {
      description: "Bali is an Indonesian island known for its forested volcanic mountains, iconic rice paddies, beaches and coral reefs. The island is home to religious sites like the cliffside Uluwatu Temple.",
      images: [
        'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmFsaXxlbnwwfHwwfHx8MA%3D%3D',
        'https://images.unsplash.com/photo-1528164344705-47542687000d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YmFsaXxlbnwwfHwwfHx8MA%3D%3D',
        'https://images.unsplash.com/photo-1518544866330-95b329c56a53?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YmFsaXxlbnwwfHwwfHx8MA%3D%3D'
      ],
      attractions: [
        { name: 'Uluwatu Temple', description: 'Cliffside sea temple with sunset views' },
        { name: 'Tegallalang Rice Terraces', description: 'Stunning rice paddies' },
        { name: 'Ubud Monkey Forest', description: 'Sacred monkey sanctuary' },
        { name: 'Mount Batur', description: 'Active volcano with sunrise hikes' }
      ],
      hotels: [
        { name: 'Four Seasons Resort Bali at Sayan', price: '$$$$', rating: '5 stars' },
        { name: 'The Mulia Bali', price: '$$$$', rating: '5 stars' },
        { name: 'Kamandalu Ubud', price: '$$$', rating: '5 stars' },
        { name: 'The Kayon Resort', price: '$$', rating: '4 stars' }
      ],
      tips: [
        'Respect local customs and temples',
        'Try authentic Balinese cuisine',
        'Learn basic Indonesian phrases',
        'Visit waterfalls early to avoid crowds'
      ]
    },
    'London': {
      description: "London, the capital of England and the United Kingdom, is a 21st-century city with history stretching back to Roman times. At its centre stand the imposing Houses of Parliament, the iconic 'Big Ben' clock tower and Westminster Abbey.",
      images: [
        'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bG9uZG9ufGVufDB8fDB8fHww',
        'https://images.unsplash.com/photo-1486299267070-83823f5448dd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bG9uZG9ufGVufDB8fDB8fHww',
        'https://images.unsplash.com/photo-1533929736458-ca588d08c8be?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bG9uZG9ufGVufDB8fDB8fHww'
      ],
      attractions: [
        { name: 'Big Ben', description: 'Iconic clock tower at Parliament' },
        { name: 'Tower of London', description: 'Historic castle and royal palace' },
        { name: 'London Eye', description: 'Giant Ferris wheel with city views' },
        { name: 'Buckingham Palace', description: 'Queen\'s official residence' }
      ],
      hotels: [
        { name: 'The Ritz London', price: '$$$$', rating: '5 stars' },
        { name: 'Claridge\'s', price: '$$$$', rating: '5 stars' },
        { name: 'The Savoy', price: '$$$$', rating: '5 stars' },
        { name: 'The Z Hotel Soho', price: '$$', rating: '3 stars' }
      ],
      tips: [
        'Get an Oyster card for public transport',
        'Visit museums (many are free)',
        'Try traditional afternoon tea',
        'Walk along the South Bank'
      ]
    },
    'Singapore': {
      description: "Singapore, an island city-state off southern Malaysia, is a global financial center with a tropical climate and multicultural population. Its colonial core centers on the Padang, a cricket field since the 1830s.",
      images: [
        'https://images.pexels.com/photos/777059/pexels-photo-777059.jpeg?auto=compress&cs=tinysrgb&w=600',
        'https://images.unsplash.com/photo-1571997478779-2adcbbe9ab2f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8c2luZ2Fwb3JlfGVufDB8fDB8fHww',
        'https://images.unsplash.com/photo-1538471771597-16d0ca757e01?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8c2luZ2Fwb3JlfGVufDB8fDB8fHww'
      ],
      attractions: [
        { name: 'Marina Bay Sands', description: 'Iconic hotel with rooftop pool' },
        { name: 'Gardens by the Bay', description: 'Futuristic nature park' },
        { name: 'Sentosa Island', description: 'Resort island with beaches' },
        { name: 'Chinatown', description: 'Cultural district with markets' }
      ],
      hotels: [
        { name: 'Marina Bay Sands', price: '$$$$', rating: '5 stars' },
        { name: 'The Fullerton Bay Hotel', price: '$$$$', rating: '5 stars' },
        { name: 'Hotel Fort Canning', price: '$$$', rating: '4 stars' },
        { name: 'The Pod Boutique Capsule Hotel', price: '$', rating: '3 stars' }
      ],
      tips: [
        'Try local hawker center food',
        'Use the efficient MRT system',
        'Visit rooftop bars for city views',
        'Respect strict local laws'
      ]
    },
    'Venice': {
      description: "Venice, the capital of northern Italy's Veneto region, is built on more than 100 small islands in a lagoon in the Adriatic Sea. It has no roads, just canals – including the Grand Canal thoroughfare – lined with Renaissance and Gothic palaces.",
      images: [
        'https://images.unsplash.com/photo-1514890547357-a9ee288728e0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dmVuaWNlfGVufDB8fDB8fHww',
        'https://images.unsplash.com/photo-1533856493584-0c6ca8ca9ce3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dmVuaWNlfGVufDB8fDB8fHww',
        'https://images.unsplash.com/photo-1508003860222-e6a7b61a5e3e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8dmVuaWNlfGVufDB8fDB8fHww'
      ],
      attractions: [
        { name: 'Grand Canal', description: 'Main waterway with historic buildings' },
        { name: 'St. Mark\'s Basilica', description: 'Ornate Byzantine-style cathedral' },
        { name: 'Rialto Bridge', description: 'Iconic stone bridge over Grand Canal' },
        { name: 'Doge\'s Palace', description: 'Gothic-style palace and museum' }
      ],
      hotels: [
        { name: 'Gritti Palace', price: '$$$$', rating: '5 stars' },
        { name: 'Hotel Danieli', price: '$$$$', rating: '5 stars' },
        { name: 'Ca\' Sagredo Hotel', price: '$$$', rating: '5 stars' },
        { name: 'Hotel Antiche Figure', price: '$$', rating: '4 stars' }
      ],
      tips: [
        'Get lost in the back streets',
        'Try cicchetti (Venetian tapas)',
        'Visit early morning to avoid crowds',
        'Take a vaporetto for canal views'
      ]
    },
    'Cape Town': {
      description: "Cape Town is a port city on South Africa's southwest coast, on a peninsula beneath the imposing Table Mountain. The flat-topped mountain is home to the Cape of Good Hope, a legendary landmark at Africa's southwestern tip.",
      images: [
        'https://plus.unsplash.com/premium_photo-1697730005046-8706d7a72bcd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y2FwZXRvd258ZW58MHx8MHx8fDA%3D',
        'https://images.unsplash.com/photo-1523428096881-5bd79d043006?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FwZXRvd258ZW58MHx8MHx8fDA%3D',
        'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y2FwZXRvd258ZW58MHx8MHx8fDA%3D'
      ],
      attractions: [
        { name: 'Table Mountain', description: 'Flat-topped mountain with city views' },
        { name: 'Robben Island', description: 'Former prison where Mandela was held' },
        { name: 'Cape of Good Hope', description: 'Dramatic coastal cliffs' },
        { name: 'Kirstenbosch Gardens', description: 'Beautiful botanical gardens' }
      ],
      hotels: [
        { name: 'The Silo Hotel', price: '$$$$', rating: '5 stars' },
        { name: 'One&Only Cape Town', price: '$$$$', rating: '5 stars' },
        { name: 'Cape Grace', price: '$$$$', rating: '5 stars' },
        { name: 'The Glen Boutique Hotel', price: '$$', rating: '4 stars' }
      ],
      tips: [
        'Take the cable car up Table Mountain',
        'Visit wine regions nearby',
        'Try local seafood and braai (BBQ)',
        'Be cautious in certain areas at night'
      ]
    },
    'Rio de Janeiro': {
      description: "Rio de Janeiro is a huge seaside city in Brazil, famed for its Copacabana and Ipanema beaches, 38m Christ the Redeemer statue atop Mount Corcovado and Sugarloaf Mountain, a granite peak with cable cars.",
      images: [
        'https://images.unsplash.com/photo-1483729558449-99ef09a8c325?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmlvJTIwZGUlMjBqYW5laXJvfGVufDB8fDB8fHww',
        'https://images.unsplash.com/photo-1544989164-31dcf55c5ba5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cmlvJTIwZGUlMjBqYW5laXJvfGVufDB8fDB8fHww',
        'https://images.unsplash.com/photo-1549301015-3c0e5a5c8a1e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cmlvJTIwZGUlMjBqYW5laXJvfGVufDB8fDB8fHww'
      ],
      attractions: [
        { name: 'Christ the Redeemer', description: 'Iconic statue on Corcovado mountain' },
        { name: 'Sugarloaf Mountain', description: 'Peak with cable car and city views' },
        { name: 'Copacabana Beach', description: 'Famous 4km beach with mosaic promenade' },
        { name: 'Selarón Steps', description: 'Colorful tiled stairway in Lapa' }
      ],
      hotels: [
        { name: 'Belmond Copacabana Palace', price: '$$$$', rating: '5 stars' },
        { name: 'Fasano Rio de Janeiro', price: '$$$$', rating: '5 stars' },
        { name: 'Hotel Santa Teresa', price: '$$$', rating: '4 stars' },
        { name: 'Selina Copacabana', price: '$$', rating: '3 stars' }
      ],
      tips: [
        'Be cautious with valuables on beaches',
        'Try feijoada (Brazilian stew)',
        'Visit during Carnival for amazing experience',
        'Learn basic Portuguese phrases'
      ]
    },
    'Kyoto': {
      description: "Kyoto, once the capital of Japan, is a city on the island of Honshu. It's famous for its numerous classical Buddhist temples, as well as gardens, imperial palaces, Shinto shrines and traditional wooden houses.",
      images: [
        'https://images.unsplash.com/photo-1492571350019-22de08371fd3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8a3lvdG98ZW58MHx8MHx8fDA%3D',
        'https://images.unsplash.com/photo-1492571350019-22de08371fd3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8a3lvdG98ZW58MHx8MHx8fDA%3D',
        'https://images.unsplash.com/photo-1526481280693-3bfa7568e0f3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8a3lvdG98ZW58MHx8MHx8fDA%3D'
      ],
      attractions: [
        { name: 'Fushimi Inari Shrine', description: 'Famous for thousands of torii gates' },
        { name: 'Kinkaku-ji', description: 'Golden Pavilion covered in gold leaf' },
        { name: 'Arashiyama Bamboo Grove', description: 'Tall bamboo forest paths' },
        { name: 'Gion District', description: 'Famous geisha district' }
      ],
      hotels: [
        { name: 'The Ritz-Carlton Kyoto', price: '$$$$', rating: '5 stars' },
        { name: 'Four Seasons Hotel Kyoto', price: '$$$$', rating: '5 stars' },
        { name: 'Hotel The Celestine Kyoto Gion', price: '$$$', rating: '4 stars' },
        { name: 'Selina Copacabana', price: '$$', rating: '3 stars' }
      ],
      tips: [
        'Be cautious with valuables on beaches',
        'Try feijoada (Brazilian stew)',
        'Visit during Carnival for amazing experience',
        'Learn basic Portuguese phrases'
      ]
    },
    'Santorini': {
      description: "Kyoto, once the capital of Japan, is a city on the island of Honshu. It's famous for its numerous classical Buddhist temples, as well as gardens, imperial palaces, Shinto shrines and traditional wooden houses.",
      images: [
        'https://images.unsplash.com/photo-1492571350019-22de08371fd3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8a3lvdG98ZW58MHx8MHx8fDA%3D',
        'https://images.unsplash.com/photo-1492571350019-22de08371fd3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8a3lvdG98ZW58MHx8MHx8fDA%3D',
        'https://images.unsplash.com/photo-1526481280693-3bfa7568e0f3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8a3lvdG98ZW58MHx8MHx8fDA%3D'
      ],
      attractions: [
        { name: 'Fushimi Inari Shrine', description: 'Famous for thousands of torii gates' },
        { name: 'Kinkaku-ji', description: 'Golden Pavilion covered in gold leaf' },
        { name: 'Arashiyama Bamboo Grove', description: 'Tall bamboo forest paths' },
        { name: 'Gion District', description: 'Famous geisha district' }
      ],
      hotels: [
        { name: 'The Ritz-Carlton Kyoto', price: '$$$$', rating: '5 stars' },
        { name: 'Four Seasons Hotel Kyoto', price: '$$$$', rating: '5 stars' },
        { name: 'Hotel The Celestine Kyoto Gion', price: '$$$', rating: '4 stars' },
        { name: 'Selina Copacabana', price: '$$', rating: '3 stars' }
      ],
      tips: [
        'Be cautious with valuables on beaches',
        'Try feijoada (Brazilian stew)',
        'Visit during Carnival for amazing experience',
        'Learn basic Portuguese phrases'
      ]
    },



    // Add data for other destinations similarly
  };
  
  function showDestinationDetails(destination) {
    const data = destinationData[destination] || {
      description: "More information about this destination is coming soon!",
      images: [],
      attractions: [],
      hotels: [],
      tips: []
    };
  
    // Set the title
    document.getElementById('modalTitle').textContent = destination;
  
    // Set the description
    document.getElementById('destinationDescription').textContent = data.description;
  
    // Clear and populate image gallery
    const gallery = document.getElementById('imageGallery');
    gallery.innerHTML = '';
    data.images.forEach(imageUrl => {
      const img = document.createElement('img');
      img.src = imageUrl;
      img.alt = destination;
      img.className = 'gallery-image';
      gallery.appendChild(img);
    });
  
    // Clear and populate attractions
    const attractionsGrid = document.getElementById('attractionsGrid');
    attractionsGrid.innerHTML = '';
    data.attractions.forEach(attraction => {
      const card = document.createElement('div');
      card.className = 'info-card';
      card.innerHTML = `<h4>${attraction.name}</h4><p>${attraction.description}</p>`;
      attractionsGrid.appendChild(card);
    });
  
    // Clear and populate hotels
    const hotelsGrid = document.getElementById('hotelsGrid');
    hotelsGrid.innerHTML = '';
    data.hotels.forEach(hotel => {
      const card = document.createElement('div');
      card.className = 'info-card';
      card.innerHTML = `<h4>${hotel.name}</h4><p>Price: ${hotel.price}<br>Rating: ${hotel.rating}</p>`;
      hotelsGrid.appendChild(card);
    });
  
    // Clear and populate tips
    const tipsContainer = document.getElementById('travelTips');
    tipsContainer.innerHTML = '';
    data.tips.forEach(tip => {
      const tipElement = document.createElement('span');
      tipElement.className = 'tag';
      tipElement.textContent = tip;
      tipsContainer.appendChild(tipElement);
    });
  
    // Show the modal
    document.getElementById('destinationModal').style.display = 'block';
  }
  
  function closeModal() {
    document.getElementById('destinationModal').style.display = 'none';
  }
  
  function useThisDestination() {
    const destination = document.getElementById('modalTitle').textContent;
    document.getElementById('place').value = destination;
    closeModal();
    document.querySelector('.compact-form').scrollIntoView({
      behavior: 'smooth'
    });
  }
  
  // Close modal when clicking outside of it
  window.onclick = function(event) {
    const modal = document.getElementById('destinationModal');
    if (event.target == modal) {
      closeModal();
    }
  }
  document.addEventListener('DOMContentLoaded', function() {
    const budgetInput = document.getElementById('budget');
    const budgetButtons = document.querySelectorAll('.budget-btn');
    
    budgetButtons.forEach(button => {
      button.addEventListener('click', function() {
        if (this.dataset.value === 'custom') {
          budgetInput.value = '';
          budgetInput.focus();
        } else {
          budgetInput.value = this.dataset.value;
        }
      });
    });
  });