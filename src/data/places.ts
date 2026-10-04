export type PlaceCategory = 'Fort' | 'Palace' | 'Desert' | 'Lake' | 'Temple';

export interface Place {
  id: string;
  name: string;
  nameHi: string;
  tagline: string;
  taglineHi: string;
  category: PlaceCategory;
  categoryHi: string;
  bestTime: string;
  rating: number;
  imageUrl: string;
  gallery: string[];
  history: string;
  historyHi: string;
  top3Things: string[];
  top3ThingsHi: string[];
  howToReach: string;
  howToReachHi: string;
  idealDays: string;
  coords: { x: number; y: number }; // For interactive SVG map coordinates %
}

export const places: Place[] = [
  {
    id: 'jaipur',
    name: 'Jaipur',
    nameHi: 'जयपुर',
    tagline: 'The Pink City of Maharajas',
    taglineHi: 'महाराजाओं का गुलाबी नगर',
    category: 'Palace',
    categoryHi: 'महल',
    bestTime: 'October to March',
    rating: 4.9,
    imageUrl: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?w=1200&auto=format&fit=crop&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1564507592333-c60657eea523?w=1200&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=1200&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1534447677768-be436bb09401?w=1200&auto=format&fit=crop&q=80'
    ],
    history: 'Founded in 1727 by Maharaja Sawai Jai Singh II, Jaipur is India’s first planned city, painted terracotta-pink in 1876 to welcome the Prince of Wales.',
    historyHi: '1727 में महाराजा सवाई जय सिंह द्वितीय द्वारा स्थापित, जयपुर भारत का पहला सुनियोजित शहर है, जिसे 1876 में प्रिंस ऑफ वेल्स के स्वागत में गुलाबी रंग से रंगा गया था।',
    top3Things: ['Amer Fort Elephant Path', 'Hawa Mahal 953 Jharokhas', 'Jantar Mantar Observatories'],
    top3ThingsHi: ['आमेर किला हाथी मार्ग', 'हवा महल के 953 झरोखे', 'जंतर मंतर वेधशाला'],
    howToReach: 'Jaipur International Airport (JAI), direct superfast trains and Delhi-Jaipur Expressway.',
    howToReachHi: 'जयपुर अंतर्राष्ट्रीय हवाई अड्डा (JAI), सीधी सुपरफास्ट ट्रेनें और दिल्ली-जयपुर एक्सप्रेसवे।',
    idealDays: '3 Days',
    coords: { x: 62, y: 38 }
  },
  {
    id: 'udaipur',
    name: 'Udaipur',
    nameHi: 'उदयपुर',
    tagline: 'Venice of the East & City of Lakes',
    taglineHi: 'झीलों की नगरी और पूर्व का वेनिस',
    category: 'Lake',
    categoryHi: 'झील',
    bestTime: 'September to March',
    rating: 4.9,
    imageUrl: 'https://images.unsplash.com/photo-1548013146-72479768bada?w=1200&auto=format&fit=crop&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=1200&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?w=1200&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1592635196078-9fdc757f27f4?w=1200&auto=format&fit=crop&q=80'
    ],
    history: 'Cradled in the Aravalli hills and founded in 1559 by Maharana Udai Singh II, Udaipur features shimmering waters reflecting grand white marble palaces.',
    historyHi: 'अरावली पहाड़ियों की गोद में बसा और 1559 में महाराणा उदय सिंह द्वितीय द्वारा स्थापित, उदयपुर सफेद संगमरमर के भव्य महलों और झीलों के लिए प्रसिद्ध है।',
    top3Things: ['Sunset Boat Cruise on Lake Pichola', 'Grand City Palace Complex', 'Jag Mandir Island Retreat'],
    top3ThingsHi: ['पिछोला झील पर सूर्यास्त नाव की सवारी', 'विशाल सिटी पैलेस परिसर', 'जग मंदिर द्वीप'],
    howToReach: 'Maharana Pratap Airport (UDR), luxury trains and scenic national highways.',
    howToReachHi: 'महाराणा प्रताप हवाई अड्डा (UDR), लक्जरी ट्रेनें और सुंदर राष्ट्रीय राजमार्ग।',
    idealDays: '3 Days',
    coords: { x: 42, y: 78 }
  },
  {
    id: 'jodhpur',
    name: 'Jodhpur',
    nameHi: 'जोधपुर',
    tagline: 'The Sun City & The Blue Haven',
    taglineHi: 'सूर्य नगरी एवं नीले घरों का शहर',
    category: 'Fort',
    categoryHi: 'किला',
    bestTime: 'October to March',
    rating: 4.8,
    imageUrl: 'https://images.unsplash.com/photo-1585135497273-1a86b09fe70e?w=1200&auto=format&fit=crop&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1566837945700-30057527ade0?w=1200&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1576487248805-cf45f6bcc67f?w=1200&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=1200&auto=format&fit=crop&q=80'
    ],
    history: 'Established in 1459 by Rao Jodha, Rathore ruler of Marwar. Towering over the azure houses is Mehrangarh, one of the most impregnable fortresses on earth.',
    historyHi: '1459 में मारवाड़ के राठौड़ शासक राव जोधा द्वारा स्थापित। नीले घरों के ऊपर मेहरानगढ़ किला गर्व से खड़ा है, जो दुनिया के सबसे मजबूत किलों में से एक है।',
    top3Things: ['Mehrangarh Fort Ramparts & Zipline', 'Umaid Bhawan Art Deco Palace', 'Jaswant Thada White Marble Cenotaph'],
    top3ThingsHi: ['मेहरानगढ़ किला और जिपलाइन', 'उम्मेद भवन पैलेस', 'जसवंत थड़ा संगमरमर स्मारक'],
    howToReach: 'Jodhpur Airport (JDH), major railway junction with daily connectivity to all metros.',
    howToReachHi: 'जोधपुर हवाई अड्डा (JDH) और देश भर से प्रमुख रेलवे संपर्क।',
    idealDays: '2 Days',
    coords: { x: 38, y: 52 }
  },
  {
    id: 'jaisalmer',
    name: 'Jaisalmer',
    nameHi: 'जैसलमेर',
    tagline: 'The Golden Citadel in Thar',
    taglineHi: 'थार का स्वर्ण किला',
    category: 'Desert',
    categoryHi: 'रेगिस्तान',
    bestTime: 'November to February',
    rating: 4.9,
    imageUrl: 'https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?w=1200&auto=format&fit=crop&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1506461883276-594a12b11cf3?w=1200&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?w=1200&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=1200&auto=format&fit=crop&q=80'
    ],
    history: 'Founded in 1156 AD by Rawal Jaisal along ancient silk trade caravan routes. The living Sonar Qila glistens like pure gold in the shifting sands.',
    historyHi: '1156 ईस्वी में रावल जैसल द्वारा प्राचीन रेशम व्यापार मार्गों पर स्थापित। यहाँ का सोनार किला सुनहरी रेत में सोने की तरह चमकता है।',
    top3Things: ['Sam Sand Dunes Camel Safari', 'Living Golden Fort Exploration', 'Intricate Patwon Ki Haveli'],
    top3ThingsHi: ['सैम सैंड ड्यून्स पर ऊंट की सवारी', 'जीवंत स्वर्ण किले का भ्रमण', 'पटवों की हवेली की नक्काशी'],
    howToReach: 'Jaisalmer Airport (JSA) and direct express trains from Delhi, Jaipur & Jodhpur.',
    howToReachHi: 'जैसलमेर हवाई अड्डा (JSA) तथा दिल्ली, जयपुर और जोधपुर से सीधी एक्सप्रेस ट्रेनें।',
    idealDays: '3 Days',
    coords: { x: 15, y: 44 }
  },
  {
    id: 'pushkar',
    name: 'Pushkar',
    nameHi: 'पुष्कर',
    tagline: 'Sacred Oasis & Desert Fair',
    taglineHi: 'पवित्र तीर्थ और प्रसिद्ध मेला',
    category: 'Temple',
    categoryHi: 'मंदिर',
    bestTime: 'October to March (Pushkar Fair in Nov)',
    rating: 4.6,
    imageUrl: 'https://images.unsplash.com/photo-1570168007204-dfb528c6958f?w=1200&auto=format&fit=crop&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1598890777032-bde835ba27c2?w=1200&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1565372195458-9de0b320ef04?w=1200&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1518684079-3c830dcef090?w=1200&auto=format&fit=crop&q=80'
    ],
    history: 'One of the holiest towns in Hinduism with the world\'s rare temple dedicated to Lord Brahma. Legend says the lake was born from fallen lotus petals.',
    historyHi: 'हिंदू धर्म के सबसे पवित्र नगरों में से एक जहाँ जगतपिता ब्रह्मा का दुर्लभ मंदिर है। मान्यता है कि कमल की पंखुड़ियों से इस पवित्र झील का निर्माण हुआ था।',
    top3Things: ['52 Holy Ghats Aarti at Sunset', 'World-Renowned Brahma Temple', 'Savitri Temple Hilltop View'],
    top3ThingsHi: ['52 पवित्र घाटों पर संध्या महाआरती', 'जगतपिता ब्रह्मा मंदिर दर्शन', 'सावित्री मंदिर की पहाड़ी से मनोरम दृश्य'],
    howToReach: 'Kishangarh Airport (KQH) 45 km away, or Ajmer Junction railway station (14 km).',
    howToReachHi: 'किशनगढ़ हवाई अड्डा (45 किमी) या अजमेर जंक्शन रेलवे स्टेशन (14 किमी)।',
    idealDays: '2 Days',
    coords: { x: 50, y: 46 }
  },
  {
    id: 'mount-abu',
    name: 'Mount Abu',
    nameHi: 'माउंट आबू',
    tagline: 'Verdant Oasis of the Aravallis',
    taglineHi: 'अरावली की हरी-भरी वादी',
    category: 'Lake',
    categoryHi: 'झील',
    bestTime: 'Year-round pleasant climate',
    rating: 4.7,
    imageUrl: 'https://images.unsplash.com/photo-1544644181-1484b3fdfc62?w=1200&auto=format&fit=crop&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?w=1200&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=1200&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=1200&auto=format&fit=crop&q=80'
    ],
    history: 'The sole hill retreat of Rajasthan, venerated in Hindu mythology as the ancient hermitage of sage Vashistha and home to the peerless Dilwara marble carvings.',
    historyHi: 'राजस्थान का एकमात्र हिल स्टेशन, जो महर्षि वशिष्ठ की तपोभूमि और देलवाड़ा के बेजोड़ संगमरमर मंदिरों के लिए प्रसिद्ध है।',
    top3Things: ['Dilwara Jain Temples Intricate Carvings', 'Boating on Sacred Nakki Lake', 'Guru Shikhar Highest Peak (1,722m)'],
    top3ThingsHi: ['देलवाड़ा जैन मंदिरों की नक्काशी', 'नक्की झील पर नौकायन', 'गुरु शिखर चोटी (1,722 मी.)'],
    howToReach: 'Abu Road Railway Station (28 km) or Udaipur Airport (185 km).',
    howToReachHi: 'आबू रोड रेलवे स्टेशन (28 किमी) या उदयपुर हवाई अड्डा (185 किमी)।',
    idealDays: '2 Days',
    coords: { x: 28, y: 82 }
  },
  {
    id: 'bikaner',
    name: 'Bikaner',
    nameHi: 'बीकानेर',
    tagline: 'The Untamed Desert Kingdom',
    taglineHi: 'रेगिस्तान का शौर्य और स्वाद',
    category: 'Fort',
    categoryHi: 'किला',
    bestTime: 'October to March',
    rating: 4.7,
    imageUrl: 'https://images.unsplash.com/photo-1566837945700-30057527ade0?w=1200&auto=format&fit=crop&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=1200&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1576487248805-cf45f6bcc67f?w=1200&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?w=1200&auto=format&fit=crop&q=80'
    ],
    history: 'Established in 1488 by Rao Bika. Celebrated for Junagarh Fort—one of the few major forts never built on a hill yet never conquered in history.',
    historyHi: '1488 में राव बीका द्वारा स्थापित। जूनागढ़ किले के लिए विख्यात—जो बिना पहाड़ी पर बने भी कभी किसी शत्रु द्वारा जीता नहीं जा सका।',
    top3Things: ['Junagarh Fort Palace Museum', 'Karni Mata Miracle Temple', 'Asia’s Largest Camel Breeding Center'],
    top3ThingsHi: ['जूनागढ़ किला और संग्रहालय', 'करणी माता मंदिर दर्शन', 'राष्ट्रीय ऊंट अनुसंधान केंद्र'],
    howToReach: 'Bikaner Airport (BKB) or direct high-speed trains from Delhi and Jaipur.',
    howToReachHi: 'बीकानेर हवाई अड्डा (BKB) या दिल्ली-जयपुर से सीधी सुपरफास्ट ट्रेनें।',
    idealDays: '2 Days',
    coords: { x: 38, y: 26 }
  },
  {
    id: 'chittorgarh',
    name: 'Chittorgarh',
    nameHi: 'चित्तौड़गढ़',
    tagline: 'The Epic Fortress of Rajput Valor',
    taglineHi: 'राजपूत आन, बान और शान का प्रतीक',
    category: 'Fort',
    categoryHi: 'किला',
    bestTime: 'October to March',
    rating: 4.8,
    imageUrl: 'https://images.unsplash.com/photo-1576487248805-cf45f6bcc67f?w=1200&auto=format&fit=crop&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=1200&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1564507592333-c60657eea523?w=1200&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1534447677768-be436bb09401?w=1200&auto=format&fit=crop&q=80'
    ],
    history: 'The legendary capital of Mewar spanning 700 acres atop a 180m high hill. It echoes with the legendary valor of Maharana Pratap and the sacrifice of Rani Padmini.',
    historyHi: '700 एकड़ में फैला मेवाड़ का ऐतिहासिक किला, जहाँ महाराणा प्रताप के पराक्रम और रानी पद्मिनी के त्याग की गाथाएं गूंजती हैं।',
    top3Things: ['Vijay Stambha (Tower of Victory)', 'Rani Padmini Water Palace', 'Kirti Stambha Solitary Monument'],
    top3ThingsHi: ['विजय स्तम्भ (9 मंजिला कीर्ति स्तम्भ)', 'रानी पद्मिनी का जल महल', 'कीर्ति स्तम्भ'],
    howToReach: 'Chittorgarh Junction connects major express lines; Udaipur airport is 90 km away.',
    howToReachHi: 'चित्तौड़गढ़ जंक्शन देश भर से जुड़ा है; निकटतम हवाई अड्डा उदयपुर (90 किमी) है।',
    idealDays: '1-2 Days',
    coords: { x: 55, y: 70 }
  }
];
