import stepwellImg from "@/assets/location-stepwell.jpg";
import gatewayImg from "@/assets/location-gateway.jpg";
import templeImg from "@/assets/location-temple.jpg";
import streetfoodImg from "@/assets/location-streetfood.jpg";
import riadImg from "@/assets/location-riad.jpg";
import hikingImg from "@/assets/location-hiking.jpg";

export interface LocationRule {
  text: string;
  detail: string;
}

export interface Location {
  id: string;
  locationName: string;
  region: string;
  coordinates: [number, number];
  category: string[];
  respectScore: number;
  image: string;
  dos: LocationRule[];
  donts: LocationRule[];
  localInsight: string;
  deepDive: string;
}

export const locations: Location[] = [
  {
    id: "1",
    locationName: "Bai Harir Sultani Vav",
    region: "Ahmedabad, India",
    coordinates: [23.0225, 72.5714],
    category: ["Temples", "Heritage"],
    respectScore: 87,
    image: stepwellImg,
    dos: [
      { text: "Remove shoes before entering", detail: "Stepwells are considered sacred spaces. Removing footwear shows respect for the centuries-old tradition." },
      { text: "Speak softly and move slowly", detail: "The acoustics amplify sound. Locals use the space for quiet reflection." },
      { text: "Ask permission before photographing locals", detail: "Many visitors to the vav are devotees. A polite gesture goes a long way." },
    ],
    donts: [
      { text: "Don't touch or lean on ancient carvings", detail: "The sandstone is fragile and centuries old. Oils from skin accelerate erosion." },
      { text: "Don't litter or leave offerings in the water", detail: "The stepwell's water system is delicate and currently under conservation." },
      { text: "Don't visit during prayer times without respect", detail: "The mosque adjacent to the vav holds regular prayers. Be mindful of timings." },
    ],
    localInsight: "Built in the 15th century by Bai Harir, a superintendent in Sultan Begada's harem. The vav features a stunning blend of Hindu and Islamic architecture.",
    deepDive: "The stepwell was designed not just for water storage, but as a cool subterranean retreat. The temperature drops significantly as you descend, making it a natural air-conditioning system used for centuries.",
  },
  {
    id: "2",
    locationName: "Teen Darwaja",
    region: "Ahmedabad, India",
    coordinates: [23.0258, 72.5873],
    category: ["Heritage", "StreetFood"],
    respectScore: 72,
    image: gatewayImg,
    dos: [
      { text: "Explore the street food stalls nearby", detail: "The area around Teen Darwaja is famous for authentic Gujarati snacks like khaman and fafda." },
      { text: "Visit during morning hours for best experience", detail: "The market is less crowded and the light through the arches is stunning." },
      { text: "Bargain politely at the market", detail: "Haggling is expected but keep it friendly. Start at 60% of the asking price." },
    ],
    donts: [
      { text: "Don't block traffic for photos", detail: "Teen Darwaja is a functioning gateway with heavy traffic. Use designated viewing areas." },
      { text: "Don't carry large bags into the market", detail: "The narrow lanes get extremely crowded. Pickpocketing can be an issue." },
      { text: "Don't disrespect the historical monument", detail: "Built in 1415 AD, it's a protected heritage site. Defacing carries heavy fines." },
    ],
    localInsight: "The triple gateway was the royal entrance to the Maidan-i-Shahi (Royal Square). It once witnessed grand processions of sultans.",
    deepDive: "Teen Darwaja connects the citadel of Bhadra Fort to the city's main market. The three arched gateways were designed to allow elephants carrying royalty to pass through during grand processions.",
  },
  {
    id: "3",
    locationName: "Fushimi Inari Shrine",
    region: "Kyoto, Japan",
    coordinates: [34.9671, 135.7727],
    category: ["Temples", "Hiking"],
    respectScore: 94,
    image: templeImg,
    dos: [
      { text: "Bow slightly before passing through torii gates", detail: "Each gate is a sacred boundary. A slight bow shows respect to the kami (spirits)." },
      { text: "Walk on the sides of the path, not the center", detail: "The center path is reserved for the deity. Walking on the sides is proper etiquette." },
      { text: "Purify your hands at the chōzuya", detail: "Follow the ritual: left hand, right hand, rinse mouth, then handle—in that exact order." },
    ],
    donts: [
      { text: "Don't eat while walking on shrine grounds", detail: "Tabearuki (eating while walking) is considered rude in Japan, especially at sacred sites." },
      { text: "Don't take photos of worshippers praying", detail: "Prayer is a deeply private act. Photographing someone mid-prayer is very disrespectful." },
      { text: "Don't leave the marked trails", detail: "The mountain trails are maintained paths. Venturing off damages the forest ecosystem." },
    ],
    localInsight: "The shrine has over 10,000 vermillion torii gates, each donated by businesses praying for prosperity. The hike to the summit takes about 2 hours.",
    deepDive: "Inari is the Shinto god of rice, sake, and prosperity. Foxes (kitsune) are Inari's messengers, which is why fox statues appear throughout. The shrine dates to 711 AD, predating Kyoto's establishment as the capital.",
  },
  {
    id: "4",
    locationName: "Chatuchak Night Market",
    region: "Bangkok, Thailand",
    coordinates: [13.7999, 100.5533],
    category: ["StreetFood", "Nightlife"],
    respectScore: 68,
    image: streetfoodImg,
    dos: [
      { text: "Try local delicacies from multiple stalls", detail: "Each vendor often specializes in one dish perfected over generations. Small portions let you sample more." },
      { text: "Carry small bills and coins", detail: "Most vendors don't carry change for large bills. 20 and 50 baht notes are ideal." },
      { text: "Greet vendors with a 'wai' gesture", detail: "Placing palms together with a slight bow shows respect and often earns you better service." },
    ],
    donts: [
      { text: "Don't point your feet at people or food", detail: "Feet are considered the lowest and dirtiest part of the body in Thai culture." },
      { text: "Don't raise your voice or show anger", detail: "Thai culture values 'jai yen' (cool heart). Losing your temper causes loss of face for everyone." },
      { text: "Don't touch anyone's head", detail: "The head is considered the most sacred part of the body. Even friendly ruffling is taboo." },
    ],
    localInsight: "The weekend market has over 15,000 stalls across 35 acres. It's one of the world's largest outdoor markets.",
    deepDive: "Chatuchak started in 1942 as a small flea market. The market is divided into 27 sections, each specializing in different goods. Section 2-4 is where locals go for the best food.",
  },
  {
    id: "5",
    locationName: "Riad Jardin Secret",
    region: "Marrakech, Morocco",
    coordinates: [31.6295, -7.9811],
    category: ["Heritage", "Temples"],
    respectScore: 81,
    image: riadImg,
    dos: [
      { text: "Dress modestly when visiting", detail: "Morocco is a Muslim country. Covering shoulders and knees shows cultural awareness." },
      { text: "Accept tea when offered by hosts", detail: "Refusing Moroccan mint tea is considered impolite. It's a symbol of hospitality and friendship." },
      { text: "Learn basic Arabic greetings", detail: "'Salam alaikum' (peace be upon you) opens doors. Locals deeply appreciate the effort." },
    ],
    donts: [
      { text: "Don't photograph people without permission", detail: "Many Moroccans believe photographs capture the soul. Always ask first, especially with women." },
      { text: "Don't use your left hand for greetings", detail: "The left hand is considered unclean. Always shake hands, eat, and give gifts with the right." },
      { text: "Don't discuss religion or politics casually", detail: "These are deeply personal topics. Save them for close friends, not casual acquaintances." },
    ],
    localInsight: "This restored 16th-century riad features two gardens: an exotic garden and an Islamic garden, each representing different horticultural traditions.",
    deepDive: "The riad was originally built by a powerful Saadian dynasty caid (judge). The Islamic garden follows the chahar bagh pattern—divided into four by water channels representing the rivers of paradise.",
  },
  {
    id: "6",
    locationName: "Eiger Trail",
    region: "Bernese Oberland, Switzerland",
    coordinates: [46.5763, 7.9904],
    category: ["Hiking"],
    respectScore: 92,
    image: hikingImg,
    dos: [
      { text: "Greet fellow hikers with 'Grüezi'", detail: "Mountain greeting etiquette is taken seriously in Swiss Alps. It's considered rude not to acknowledge others." },
      { text: "Stay on marked trails at all times", detail: "Alpine meadows are delicate ecosystems. A single shortcut can cause years of erosion damage." },
      { text: "Carry all trash back with you", detail: "'Leave no trace' is a core Swiss value. There are no bins on mountain trails by design." },
    ],
    donts: [
      { text: "Don't pick wildflowers—many are protected", detail: "Alpine flowers like Edelweiss are legally protected. Picking them carries fines up to CHF 5,000." },
      { text: "Don't play loud music on trails", detail: "The Alps are a natural sanctuary. Sound carries far and disturbs both wildlife and other hikers." },
      { text: "Don't underestimate weather changes", detail: "Alpine weather shifts in minutes. Hypothermia is possible even in summer above 2,500m." },
    ],
    localInsight: "The trail runs beneath the notorious North Face of the Eiger, one of the most challenging climbs in the Alps.",
    deepDive: "The Eiger's North Face (Nordwand) was first climbed in 1938 after multiple fatal attempts. The trail passes the Eigergletscher station, where you can see climbers on the face with binoculars.",
  },
  // Additional Dummy Locations to fill up the map
  {
    id: "7",
    locationName: "Sidi Bou Said",
    region: "Tunis, Tunisia",
    coordinates: [36.87, 10.34],
    category: ["Heritage", "Photography"],
    respectScore: 85,
    image: riadImg,
    dos: [
      { text: "Respect private blue doors", detail: "Many are residential homes. Avoid standing on doorsteps for photos." },
      { text: "Order Bambaloni", detail: "A local sugar-coated donut that is best enjoyed while walking the blue streets." }
    ],
    donts: [
      { text: "Don't visit in swimwear", detail: "Despitebeing a coastal town, it's a conservative village. Dress respectfully." },
      { text: "Don't haggle aggressively", detail: "Artists here value their work; keep negotiations polite and fair." }
    ],
    localInsight: "Known for its blue-and-white architecture, this village inspired artists like Paul Klee.",
    deepDive: "The town is named after a religious figure, Abu Said al-Baji. The color palette was standardized by Baron Rodolphe d'Erlanger in the 1920s."
  },
  {
    id: "8",
    locationName: "Mehtab Bagh",
    region: "Agra, India",
    coordinates: [27.175, 78.042],
    category: ["Heritage", "Photography"],
    respectScore: 90,
    image: gatewayImg,
    dos: [
      { text: "Visit during sunset", detail: "Offers the most iconic and peaceful view of the Taj Mahal from across the River Yamuna." },
      { text: "Carry water and sun protection", detail: "There is limited shade in the garden areas." }
    ],
    donts: [
      { text: "Don't use professional tripods without permits", detail: "High-end photography equipment often requires prior government authorization." },
      { text: "Don't attempt to enter the dry riverbed", detail: "It is restricted for safety and security reasons." }
    ],
    localInsight: "The 'Moonlight Garden' was built by Emperor Babur and later identified as the best spot to view the Taj Mahal.",
    deepDive: "Legend says Shah Jahan intended to build a 'Black Taj Mahal' here as his own tomb, though excavations only found the garden structure."
  },
  {
    id: "9",
    locationName: "Arashiyama Bamboo Grove",
    region: "Kyoto, Japan",
    coordinates: [35.017, 135.672],
    category: ["Hiking", "Photography"],
    respectScore: 92,
    image: hikingImg,
    dos: [
      { text: "Use silent cameras", detail: "Many visitors come for the 'sound of the bamboo' which is recognized by the Ministry of Environment." },
      { text: "Stay on the walking path", detail: "Touching the bamboo stalks can damage their growth and leave unsightly marks." }
    ],
    donts: [
      { text: "Don't engrave names on bamboo", detail: "Vandalism has become a serious issue. It permanently harms the plants." },
      { text: "Don't bring large bicycles", detail: "The paths are narrow and meant for pedestrians to enjoy the atmosphere." }
    ],
    localInsight: "The Ministry of Environment includes the rustling of bamboo here in its list of '100 Soundscapes of Japan'.",
    deepDive: "The bamboo can grow up to a meter a day. This specific species is 'Moso' bamboo, which was originally imported from China."
  },
  {
    id: "10",
    locationName: "Lotus Temple",
    region: "Delhi, India",
    coordinates: [28.553, 77.258],
    category: ["Temples", "Heritage"],
    respectScore: 95,
    image: stepwellImg,
    dos: [
      { text: "Maintain absolute silence", detail: "The hall is for meditation and prayer regardless of religious background." },
      { text: "Deposit shoes at the cloakroom", detail: "It's a free service and required before entering the sacred structure." }
    ],
    donts: [
      { text: "Don't take photos inside the hall", detail: "Photography is strictly prohibited once you enter the meditation area." },
      { text: "Don't wear revealing clothing", detail: "Modest attire is expected at all Baháʼí Houses of Worship." }
    ],
    localInsight: "The temple is open to all, regardless of religion or any other qualification.",
    deepDive: "Composed of 27 free-standing marble-clad 'petals' arranged in clusters of three to form nine sides."
  },
  {
    id: "11",
    locationName: "Wat Arun",
    region: "Bangkok, Thailand",
    coordinates: [13.743, 100.488],
    category: ["Temples", "Heritage"],
    respectScore: 88,
    image: templeImg,
    dos: [
      { text: "Climb the steep steps carefully", detail: "The steps symbolize the difficulty of reaching higher levels of existence." },
      { text: "Rent a sarong if needed", detail: "Modesty is key; rentals are available at the entrance for a small fee." }
    ],
    donts: [
      { text: "Don't point your feet at Buddha images", detail: "Feet are the lowest part of the body; pointing them at sacred objects is offensive." },
      { text: "Don't pose disrespectfully with statues", detail: "Treat all religious icons with high reverence." }
    ],
    localInsight: "The 'Temple of Dawn' is named after Aruna, the Indian God of Dawn.",
    deepDive: "The central prang is encrusted with colorful porcelain that was once used as ballast by Chinese ships."
  },
  {
    id: "12",
    locationName: "Lucerne Chapel Bridge",
    region: "Lucerne, Switzerland",
    coordinates: [47.051, 8.307],
    category: ["Heritage", "Photography"],
    respectScore: 89,
    image: gatewayImg,
    dos: [
      { text: "Look at the ceiling paintings", detail: "The 17th-century triangular paintings tell the history of the city." },
      { text: "Visit at night", detail: "The bridge is beautifully illuminated and much quieter." }
    ],
    donts: [
      { text: "Don't smoke on the bridge", detail: "The bridge is made of wood and a fire in 1993 almost destroyed it entirely." },
      { text: "Don't feed the swans", detail: "Local laws discourage feeding wildlife to maintain their natural behavior." }
    ],
    localInsight: "The Kapellbrücke is the oldest wooden covered bridge in Europe, dating back to 1333.",
    deepDive: "The Water Tower adjacent to the bridge has served as a prison, torture chamber, and municipal archive over the centuries."
  },
  {
    id: "13",
    locationName: "Ait Benhaddou",
    region: "Ouarzazate, Morocco",
    coordinates: [31.047, -7.129],
    category: ["Heritage", "Photography"],
    respectScore: 82,
    image: riadImg,
    dos: [
      { text: "Hire a local guide", detail: "They provide work for the few families still living inside the Ksar." },
      { text: "Wear comfortable walking shoes", detail: "The paths are steep, rocky, and uneven." }
    ],
    donts: [
      { text: "Don't visit during the midday heat", detail: "The stone structures absorb heat; early morning or late afternoon is best." },
      { text: "Don't ignore residents' privacy", detail: "While it looks like a film set, it is a living village for some." }
    ],
    localInsight: "This 'fortified city' has been a UNESCO World Heritage site since 1987 and a backdrop for many Hollywood films.",
    deepDive: "Famous movies like Gladiator, Game of Thrones, and Lawrence of Arabia were filmed here due to its authentic clay architecture."
  },
  {
    id: "14",
    locationName: "Dera Amer",
    region: "Jaipur, India",
    coordinates: [26.985, 75.851],
    category: ["Heritage", "Photography"],
    respectScore: 84,
    image: streetfoodImg,
    dos: [
      { text: "Interact with elephants ethically", detail: "The camp focuses on conservation rather than riding tourism." },
      { text: "Try the traditional Rajasthani dinner", detail: "Served under the stars with authentic local spices." }
    ],
    donts: [
      { text: "Don't use flash near animals", detail: "Bright sudden lights can startle the elephants and camels." },
      { text: "Don't wear expensive silk clothes", detail: "The farm environment is dusty; stick to breathable cotton." }
    ],
    localInsight: "A private estate that offers a glimpse into the rural life of Rajasthan away from the city noise.",
    deepDive: "The area is surrounded by the Aravalli hills and provides a natural corridor for local wildlife including leopards."
  },
  {
    id: "15",
    locationName: "Umeda Sky Building",
    region: "Osaka, Japan",
    coordinates: [34.705, 135.490],
    category: ["Photography", "Nightlife"],
    respectScore: 78,
    image: gatewayImg,
    dos: [
      { text: "Ride the see-through escalator", detail: "It's one of the world's highest escalators and offers a unique perspective." },
      { text: "Check the weather before going", detail: "The 'Floating Garden' is outdoors; it closes during high winds or rain." }
    ],
    donts: [
      { text: "Don't lean over the safety glass", detail: "Security is strict for safety; avoid any risky behavior for photos." },
      { text: "Don't forget to visit the basement", detail: "The Takimi-koji alley is a replica of Showa-era Osaka with great food." }
    ],
    localInsight: "The two towers are connected by a 'Floating Garden Observatory' on the 39th floor.",
    deepDive: "Designed by Hiroshi Hara, who also designed Kyoto Station. The building was originally intended to be four towers."
  },
  {
    id: "16",
    locationName: "Grand Palace",
    region: "Bangkok, Thailand",
    coordinates: [13.750, 100.491],
    category: ["Heritage", "Temples"],
    respectScore: 96,
    image: stepwellImg,
    dos: [
      { text: "Follow the strict dress code", detail: "Men must wear long pants; women must cover shoulders and knees. No exceptions." },
      { text: "Walk clockwise around the Emerald Buddha", detail: "This is the traditional way to show respect in Buddhist temples." }
    ],
    donts: [
      { text: "Don't fall for the 'closed' scam", detail: "Ignore strangers outside who say the palace is closed for a holiday; check the official gate." },
      { text: "Don't sit with feet pointing at Buddha", detail: "Tuck your legs behind you or sit cross-legged." }
    ],
    localInsight: "Since 1782, the palace has been the official residence of the Kings of Siam (and later Thailand).",
    deepDive: "The Emerald Buddha is actually made of green jade or jasper, not emerald. Its seasonal robes are changed three times a year by the King."
  },
  {
    id: "17",
    locationName: "Zermatt Village",
    region: "Valais, Switzerland",
    coordinates: [46.020, 7.749],
    category: ["Hiking", "Photography"],
    respectScore: 91,
    image: riadImg,
    dos: [
      { text: "Walk or use electric taxis", detail: "Zermatt is a car-free village to prevent air pollution from obscuring the Matterhorn view." },
      { text: "Try the local cheese fondue", detail: "An essential Alpine culinary experience, especially in the historic Hinterdorf area." }
    ],
    donts: [
      { text: "Don't expect cheap prices", detail: "It is one of the world's most expensive resorts; budget accordingly." },
      { text: "Don't skip the Gornergrat railway", detail: "While pricey, it offers the most unobstructed view of the Matterhorn." }
    ],
    localInsight: "The village lies at the foot of the Matterhorn, the most photographed mountain in the world.",
    deepDive: "The 'Hinterdorf' part of the village contains over 30 ancient barns and stores built between the 16th and 18th centuries."
  },
  {
    id: "18",
    locationName: "Charminar",
    region: "Hyderabad, South India",
    coordinates: [17.3616, 78.4747],
    category: ["Heritage", "StreetFood"],
    respectScore: 86,
    image: gatewayImg,
    dos: [
      { text: "Try the Irani Chai nearby", detail: "The cafes around Charminar are world-famous for their slow-brewed tea and Osmania biscuits." },
      { text: "Visit during the day for the climb", detail: "Climbing the minarets offers a historic panoramic view of the old city." }
    ],
    donts: [
      { text: "Don't engage with unauthorized guides", detail: "Stick to official information plaques or government-certified guides at the ticket counter." },
      { text: "Don't carry heavy food items inside", detail: "Maintain the cleanliness of this 1591 AD monument." }
    ],
    localInsight: "The monument was built to celebrate the end of a deadly plague in the city.",
    deepDive: "The structure is Indo-Islamic with Persian architectural elements. It serves as both a mosque and a monument."
  },
  {
    id: "19",
    locationName: "Golconda Fort",
    region: "Hyderabad, South India",
    coordinates: [17.3833, 78.4011],
    category: ["Heritage", "Photography"],
    respectScore: 84,
    image: stepwellImg,
    dos: [
      { text: "Test the acoustic clapping effect", detail: "A clap at the entrance dome can be heard clear at the highest point, a 16th-century 'alarm' system." },
      { text: "Wait for the Sound and Light show", detail: "The evening show narrated by Bollywood legends brings the history of the Koh-i-Noor diamond to life." }
    ],
    donts: [
      { text: "Don't skip the water", detail: "The climb to the Bala Hissar (highest point) is steep and can be exhausting in the heat." },
      { text: "Don't shout in the echo chambers", detail: "While fun, persistent loud noise can be disruptive to other history enthusiasts." }
    ],
    localInsight: "This fort was once the center of the world's diamond trade, including the Hope Diamond.",
    deepDive: "The fort was originally a mud structure built by the Kakatiya dynasty before being expanded by the Qutb Shahi kings into the massive granite fortress seen today."
  },
  {
    id: "20",
    locationName: "Hampi Ruins",
    region: "Karnataka, South India",
    coordinates: [15.3350, 76.4600],
    category: ["Temples", "Heritage", "Hiking"],
    respectScore: 94,
    image: templeImg,
    dos: [
      { text: "Rent a bicycle or moped", detail: "The ruins are spread across 4,100 hectares; motorized transport helps you see the hidden boulder-strewn temples." },
      { text: "Watch sunrise from Matanga Hill", detail: "The most spiritual and visually stunning way to start a day in the 'Lost City'." }
    ],
    donts: [
      { text: "Don't wear shoes inside active temples", detail: "Sites like Virupaksha are active places of worship; respect the sacred ground." },
      { text: "Don't consume alcohol in the holy zone", detail: "Hampi is a sacred temple town; respect the local laws and religious sentiments." }
    ],
    localInsight: "Hampi was the capital of the Vijayanagara Empire and once the second-largest city in the medieval world.",
    deepDive: "The Vittala Temple complex features 'musical pillars' that produce different musical notes when tapped, a marvel of ancient stone acoustic engineering."
  }
];


