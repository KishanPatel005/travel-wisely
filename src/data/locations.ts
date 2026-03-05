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
];
