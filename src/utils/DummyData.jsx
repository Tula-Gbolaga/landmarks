const landmarksData = [
  {
    name: "Eiffel Tower",
    description:
      "A wrought-iron lattice tower on the Champ de Mars in Paris, France.",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/a/af/Tour_Eiffel_Wikimedia_Commons.jpg",
    createdBy: "Jean Dupont",
  },
  {
    name: "Great Wall of China",
    description:
      "A series of fortifications made of various materials, built along the northern borders of China.",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/1/10/GreatWall_2004_Summer_4.jpg",
    createdBy: "Wei Zhang",
  },
  {
    name: "Pyramids of Giza",
    description:
      "Ancient pyramid structures in Egypt, built as tombs for Pharaohs.",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/e/e3/Kheops-Pyramid.jpg",
    createdBy: "Ahmed Mahmoud",
  },
  {
    name: "Statue of Liberty",
    description:
      "A colossal neoclassical sculpture on Liberty Island in New York Harbor, USA.",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/a/a1/Statue_of_Liberty_7.jpg",
    createdBy: "John Smith",
  },
  {
    name: "Machu Picchu",
    description:
      "An ancient Incan city set high in the Andes Mountains in Peru.",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/e/ec/Machu_Picchu%2C_Peru.jpg",
    createdBy: "Carlos Perez",
  },
  {
    name: "Colosseum",
    description:
      "An ancient amphitheater in Rome, Italy, known for gladiatorial contests and public spectacles.",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/d/d2/Colosseo_2020.jpg",
    createdBy: "Luca Romano",
  },
  {
    name: "Taj Mahal",
    description:
      "A white marble mausoleum in Agra, India, built by Mughal Emperor Shah Jahan.",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/d/da/Taj-Mahal.jpg",
    createdBy: "Ravi Singh",
  },
  {
    name: "Sydney Opera House",
    description:
      "A multi-venue performing arts center in Sydney, Australia, known for its distinctive sail-like design.",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/3/3d/Sydney_Opera_House_Sails.jpg",
    createdBy: "Emma Wilson",
  },
  {
    name: "Christ the Redeemer",
    description: "An iconic statue of Jesus Christ in Rio de Janeiro, Brazil.",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/0/05/Christ_the_Redeemer_-_Cristo_Redentor.jpg",
    createdBy: "Paulo Souza",
  },
  {
    name: "Acropolis of Athens",
    description:
      "An ancient citadel located on a rocky outcrop above the city of Athens, Greece.",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/6/65/Acropolis_of_Athens_2019.jpg",
    createdBy: "Nikolas Papadopoulos",
  },
  {
    name: "Zuma Rock",
    description:
      "A large monolith located in Niger State, Nigeria, known as the 'Gateway to Abuja'.",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/e/e2/Zuma_Rock%2C_Nigeria.jpg",
    createdBy: "Adewale Okeke",
  },
  {
    name: "Olumo Rock",
    description:
      "A mountain in Abeokuta, Nigeria, historically used as a fortress by the Egba people.",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/a/a3/Olumo_Rock.jpg",
    createdBy: "Chioma Adichie",
  },
  {
    name: "Aso Rock",
    description:
      "A prominent rock outcrop in Abuja, Nigeria, near the Nigerian Presidential Complex.",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/7/76/Aso_Rock_and_Presidential_Villa.JPG",
    createdBy: "Bayo Akinfenwa",
  },
  {
    name: "Obudu Mountain Resort",
    description:
      "A popular resort located on the Obudu Plateau in Cross River State, Nigeria.",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/2/2f/Obudu_Cattle_Ranch.jpg",
    createdBy: "Ngozi Nwosu",
  },
  {
    name: "Ikogosi Warm Springs",
    description:
      "A tourist attraction in Ekiti State, Nigeria, where warm and cold springs meet.",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/4/4b/Ikogosi_warm_springs.jpg",
    createdBy: "Funmi Alabi",
  },
  {
    name: "Yankari National Park",
    description:
      "A large wildlife park in Bauchi State, Nigeria, home to many animal species.",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/8/87/Yankari_National_Park.jpg",
    createdBy: "Kunle Abiola",
  },
  {
    name: "Nike Art Gallery",
    description:
      "A renowned art gallery in Lagos, Nigeria, showcasing contemporary African art.",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/d/d6/Nike_Art_Gallery.jpg",
    createdBy: "Rashidat Yusuf",
  },
  {
    name: "Lekki Conservation Centre",
    description:
      "A natural reserve in Lagos, Nigeria, known for its biodiversity and canopy walkway.",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/1/14/Lekki_Conservation_Centre.jpg",
    createdBy: "Samuel Adeyemi",
  },
  {
    name: "Tafawa Balewa Square",
    description:
      "A historical square in Lagos, Nigeria, named after Nigeria's first Prime Minister.",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/e/e7/Tafawa_Balewa_Square.jpg",
    createdBy: "Maryam Bello",
  },
  {
    name: "Ogbunike Caves",
    description:
      "A network of caves in Anambra State, Nigeria, with historical and spiritual significance.",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/1/1a/Ogbunike_Caves.jpg",
    createdBy: "Uchenna Okafor",
  },
  {
    name: "Big Ben",
    description:
      "The nickname for the Great Bell of the clock at the Palace of Westminster in London.",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/f/f0/Big_Ben_2015.jpg",
    createdBy: "John Smith",
  },
  {
    name: "Tower of London",
    description:
      "A historic castle located on the north bank of the River Thames in central London.",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/e/e8/Tower_of_London_viewed_from_the_River_Thames.jpg",
    createdBy: "Alice Johnson",
  },
  {
    name: "Stonehenge",
    description:
      "A prehistoric monument located in Wiltshire, England, consisting of a ring of standing stones.",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/3/3c/Stonehenge2007_07_30.jpg",
    createdBy: "George Brown",
  },
  {
    name: "Edinburgh Castle",
    description:
      "A historic fortress which dominates the skyline of Edinburgh, Scotland.",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/1/1b/Edinburgh_Castle.jpg",
    createdBy: "David Wilson",
  },
  {
    name: "Buckingham Palace",
    description:
      "The London residence and administrative headquarters of the monarch of the United Kingdom.",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/6/63/Buckingham_Palace_from_gardens%2C_London%2C_UK_-_Diliff.jpg",
    createdBy: "Charlotte Evans",
  },
  {
    name: "The Shard",
    description:
      "A 95-story skyscraper in Southwark, London, and the tallest building in the UK.",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/a/a3/The_Shard_from_the_Sky_Garden_2015.jpg",
    createdBy: "Thomas Walker",
  },
  {
    name: "Tower Bridge",
    description:
      "A combined bascule and suspension bridge in London, built between 1886 and 1894.",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/0/04/Tower_Bridge_London_Feb_2006.jpg",
    createdBy: "Emma Harris",
  },
  {
    name: "Windsor Castle",
    description:
      "A royal residence at Windsor in the English county of Berkshire.",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/a/a3/Windsor_Castle_July_2009-2.jpg",
    createdBy: "James Moore",
  },
  {
    name: "Hadrian's Wall",
    description:
      "A defensive fortification in the Roman province of Britannia, begun in AD 122.",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/f/fb/Hadrian%27s_Wall_at_Greenhead_Lough.jpg",
    createdBy: "Robert Taylor",
  },
  {
    name: "St. Paul's Cathedral",
    description:
      "An Anglican cathedral in London, the seat of the Bishop of London.",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/7/73/St_Paul%27s_Cathedral%2C_London_%E2%80%93_Feb_2007.jpg",
    createdBy: "Sarah Lewis",
  },
  {
    name: "The British Museum",
    description:
      "A public institution dedicated to human history, art, and culture in London.",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/6/6e/British_Museum_from_NE_2.JPG",
    createdBy: "Daniel Clarke",
  },
  {
    name: "The National Gallery",
    description:
      "An art museum in Trafalgar Square in the City of Westminster, in Central London.",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/1/18/National_Gallery%2C_London.jpg",
    createdBy: "Megan Roberts",
  },
  {
    name: "Hyde Park",
    description:
      "A major park in Central London, famous for its Speakers' Corner.",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/f/f2/Hyde_Park_London_-_October_2008.jpg",
    createdBy: "Andrew Scott",
  },
  {
    name: "The Roman Baths",
    description:
      "A well-preserved Roman site for public bathing in the city of Bath, England.",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/0/05/Roman_Baths_in_Bath_Spa%2C_England_-_July_2006.jpg",
    createdBy: "Olivia Hughes",
  },
  {
    name: "Palace of Westminster",
    description:
      "The meeting place of the House of Commons and the House of Lords, the two houses of the Parliament of the UK.",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/6/6c/Westminster_Palace_from_the_dome_on_Methodist_Central_Hall.jpg",
    createdBy: "Henry Turner",
  },
  {
    name: "The Lake District",
    description:
      "A mountainous region in North West England, famous for its lakes, forests, and mountains.",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/f/fd/Lake_District_-_England.jpg",
    createdBy: "Jessica Adams",
  },
  // Add more landmarks as needed
];

const imageUrl =
  "https://drive.google.com/file/d/17aDpGZ_aLrbYaEttO56ubW-XBCcGBwly/view";

export { landmarksData, imageUrl };
