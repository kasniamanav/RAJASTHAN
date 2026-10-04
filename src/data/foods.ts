export type FoodType = 'Savory' | 'Sweet' | 'Street';

export interface Food {
  id: string;
  name: string;
  nameHi: string;
  type: FoodType;
  typeHi: string;
  story: string;
  storyHi: string;
  ingredients: string[];
  ingredientsHi: string[];
  spiceLevel: number; // 0 to 5
  bestCity: string;
  bestCityHi: string;
  imageUrl: string;
}

export const foods: Food[] = [
  {
    id: 'dal-baati-churma',
    name: 'Dal Baati Churma',
    nameHi: 'दाल बाटी चूरमा',
    type: 'Savory',
    typeHi: 'शाही व्यंजन',
    story: 'The crown jewel of Rajasthani feasts. Hard wheat dough balls baked over open dung embers, drenched in golden desi ghee, accompanied by five-lentil panchmel dal and sweet powdered jaggery churma.',
    storyHi: 'राजस्थानी थाली का सिरमौर। कंडे की आंच पर पकी कुरकुरी बाटियां, गरमा-गरम पंचमेल दाल और देसी घी में डूबा मीठा चूरमा।',
    ingredients: ['Panchmel Lentils', 'Coarse Wheat Flour', 'Pure Desi Ghee', 'Jaggery', 'Green Chilies'],
    ingredientsHi: ['पंचमेल दाल', 'मोटा गेहूं आटा', 'शुद्ध देसी घी', 'गुड़', 'हरी मिर्च'],
    spiceLevel: 3,
    bestCity: 'Jaipur',
    bestCityHi: 'जयपुर',
    imageUrl: 'https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?w=1200&auto=format&fit=crop&q=80'
  },
  {
    id: 'laal-maas',
    name: 'Laal Maas',
    nameHi: 'लाल मांस',
    type: 'Savory',
    typeHi: 'शाही व्यंजन',
    story: 'An aristocratic Rajput game curry born in the royal hunting camps. Slow-simmered tender meat with the fiery red Mathania chilies, garlic, and smoked ghee (Dhungar method).',
    storyHi: 'राजपूताना शिकार के दौर का शाही व्यंजन। मथानिया की तीखी लाल मिर्च, लहसुन और धुंआर दिए गए देसी घी में धीमी आंच पर पकाया गया मटन।',
    ingredients: ['Tender Mutton', 'Mathania Red Chilies', 'Garlic Pods', 'Curd', 'Mustard Oil'],
    ingredientsHi: ['मटन', 'मथानिया लाल मिर्च', 'देशी लहसुन', 'दही', 'सरसों तेल'],
    spiceLevel: 5,
    bestCity: 'Jodhpur',
    bestCityHi: 'जोधपुर',
    imageUrl: 'https://images.unsplash.com/photo-1574484284002-952d92456975?w=1200&auto=format&fit=crop&q=80'
  },
  {
    id: 'gatte-ki-sabzi',
    name: 'Gatte ki Sabzi',
    nameHi: 'गट्टे की सब्ज़ी',
    type: 'Savory',
    typeHi: 'शाही व्यंजन',
    story: 'Desert culinary genius born of necessity during hot arid summers when fresh vegetables were scarce. Gram flour dumplings poached and cooked in spiced yoghurt gravy.',
    storyHi: 'रेगिस्तान की अनूठी खोज, जब हरी सब्जियों के अभाव में बेसन के गट्टे बनाकर दही की स्वादिष्ट व तीखी तरी में पकाया जाता था।',
    ingredients: ['Gram Flour (Besan)', 'Aromatic Yogurt', 'Ajwain (Carom)', 'Coriander Seeds', 'Asafoetida'],
    ingredientsHi: ['बेसन', 'ताजा दही', 'अजवाइन', 'खड़ा धनिया', 'हींग'],
    spiceLevel: 3,
    bestCity: 'Jaisalmer',
    bestCityHi: 'जैसलमेर',
    imageUrl: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=1200&auto=format&fit=crop&q=80'
  },
  {
    id: 'ker-sangri',
    name: 'Ker Sangri',
    nameHi: 'केर सांगरी',
    type: 'Savory',
    typeHi: 'शाही व्यंजन',
    story: 'Harvested from the thorny Khejri trees and desert shrubs in the harsh Thar sands. Sun-dried berries and wild beans stir-fried with raisins and raw mango powder.',
    storyHi: 'थार के रेगिस्तान में खेजड़ी और केर की झाड़ियों से चुनकर तैयार की गई अनूठी सब्जी, जो किशमिश और अमचूर के साथ लाजवाब स्वाद देती है।',
    ingredients: ['Ker Berries', 'Sangri Desert Beans', 'Amchur (Dry Mango)', 'Raisins', 'Mustard Seeds'],
    ingredientsHi: ['केर के दाने', 'सांगरी की फलियां', 'अमचूर', 'किशमिश', 'राई'],
    spiceLevel: 2,
    bestCity: 'Bikaner',
    bestCityHi: 'बीकानेर',
    imageUrl: 'https://images.unsplash.com/photo-1589308078059-be1415eab4c3?w=1200&auto=format&fit=crop&q=80'
  },
  {
    id: 'pyaaz-kachori',
    name: 'Pyaaz Kachori',
    nameHi: 'प्याज़ कचौरी',
    type: 'Street',
    typeHi: 'स्ट्रीट फ़ूड',
    story: 'Golden, puffed pastry with crisp flaky layers stuffed with a piping hot mixture of caramelized onions, fennel, and roasted ground spices. The morning pride of Marwar.',
    storyHi: 'खस्ता परतदार कचौरी जिसके भीतर भुने हुए मसालों और प्याज की चटपटी भरावन होती है। सुबह के नाश्ते की पहली पसंद।',
    ingredients: ['Refined Flour', 'Spiced Onions', 'Fennel Seeds', 'Garam Masala', 'Tamarind Chutney'],
    ingredientsHi: ['मैदा', 'भुने प्याज', 'सौंफ', 'गरम मसाला', 'इमली की चटनी'],
    spiceLevel: 4,
    bestCity: 'Jodhpur',
    bestCityHi: 'जोधपुर',
    imageUrl: 'https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=1200&auto=format&fit=crop&q=80'
  },
  {
    id: 'mirchi-vada',
    name: 'Jodhpuri Mirchi Vada',
    nameHi: 'जोधपुरी मिर्ची वड़ा',
    type: 'Street',
    typeHi: 'स्ट्रीट फ़ूड',
    story: 'Jumbo Bhavnagri green peppers stuffed with tangy spiced mashed potatoes, enveloped in golden gram-flour batter and deep-fried to crisp perfection.',
    storyHi: 'बड़ी हरी मिर्च में तीखे आलू का मसाला भरकर, बेसन के घोल में लपेटकर कुरकुरा तला हुआ विश्व प्रसिद्ध नाश्ता।',
    ingredients: ['Bhavnagri Peppers', 'Spiced Potatoes', 'Besan Batter', 'Chili Flakes', 'Mint Chutney'],
    ingredientsHi: ['भावनगरी हरी मिर्च', 'आलू मसाला', 'बेसन का घोल', 'पुदीना चटनी'],
    spiceLevel: 4,
    bestCity: 'Jodhpur',
    bestCityHi: 'जोधपुर',
    imageUrl: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=1200&auto=format&fit=crop&q=80'
  },
  {
    id: 'ghevar',
    name: 'Malai Ghevar',
    nameHi: 'मलाई घेवर',
    type: 'Sweet',
    typeHi: 'मिठाई',
    story: 'The honeycomb marvel of Rajasthan confectionery. Crisp fried disc soaked in fragrant saffron-cardamom sugar syrup and crowned with velvety clotted cream and pistachios.',
    storyHi: 'तीज और रक्षाबंधन का पारंपरिक मधुर उपहार। जालीदार बनावट, केसर चाशनी और ऊपर से मलाई व मेवों की सजी परत।',
    ingredients: ['Refined Flour', 'Rabdi Cream', 'Kashmiri Saffron', 'Cardamom', 'Silver Leaf (Vark)'],
    ingredientsHi: ['मैदा', 'गाढ़ी मलाई / रबड़ी', 'केसर', 'इलायची', 'चांदी का वर्क'],
    spiceLevel: 0,
    bestCity: 'Jaipur',
    bestCityHi: 'जयपुर',
    imageUrl: 'https://images.unsplash.com/photo-1601050690117-94f5f6fa8bd7?w=1200&auto=format&fit=crop&q=80'
  },
  {
    id: 'mawa-kachori',
    name: 'Mawa Kachori',
    nameHi: 'मावा कचौरी',
    type: 'Sweet',
    typeHi: 'मिठाई',
    story: 'Invented by Rawat Mishthan Bhandar in Jodhpur. Flaky pastry packed with rich condensed milk solids, roasted almonds and pistachios, dipped in luscious sugar syrup.',
    storyHi: 'जोधपुर की प्रसिद्ध शाही मिठाई। मेवों और मावे से भरी खस्ता कचौरी, जिसे इलायची चाशनी में डुबोकर परोसा जाता है।',
    ingredients: ['Khoya (Mawa)', 'Crushed Pistachios', 'Nutmeg', 'Cardamom Sugar Glaze'],
    ingredientsHi: ['खोया (मावा)', 'पिस्ता-बादाम', 'जायफल', 'इलायची चाशनी'],
    spiceLevel: 0,
    bestCity: 'Jodhpur',
    bestCityHi: 'जोधपुर',
    imageUrl: 'https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=1200&auto=format&fit=crop&q=80'
  },
  {
    id: 'bajre-ki-roti',
    name: 'Bajra Roti & Lehsun Chutney',
    nameHi: 'बाजरे की रोटी और लहसुन चटनी',
    type: 'Savory',
    typeHi: 'शाही व्यंजन',
    story: 'The true soul food of the Thar villagers. Hand-flattened pearl millet flatbreads slathered with homemade white churned butter and blazing spicy garlic-chili paste.',
    storyHi: 'थार के ग्रामीण जीवन का अमृत। हाथ से थपथापाई बाजरे की मोटी रोटी, सफेद मक्खन और तीखी लाल मिर्च-लहसुन की चटनी।',
    ingredients: ['Pearl Millet Flour', 'Pounded Garlic', 'Kashmiri Chilies', 'Fresh White Makhan'],
    ingredientsHi: ['बाजरा का आटा', 'कुटा हुआ लहसुन', 'लाल मिर्च', 'घर का मक्खन'],
    spiceLevel: 5,
    bestCity: 'Jaisalmer',
    bestCityHi: 'जैसलमेर',
    imageUrl: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=1200&auto=format&fit=crop&q=80'
  },
  {
    id: 'malpua',
    name: 'Pushkar Rabdi Malpua',
    nameHi: 'पुष्कर रबड़ी मालपुआ',
    type: 'Sweet',
    typeHi: 'मिठाई',
    story: 'Sought by pilgrims from all over the world in the lanes of Pushkar. Silky pancakes made with mawa and milk, golden fried in pure ghee and smothered in thick creamy rabdi.',
    storyHi: 'पुष्कर के वराह चौक की शान। शुद्ध घी में तले गए रसीले मालपुए, जिन्हें मलाईदार गाढ़ी रबड़ी के साथ परोसा जाता है।',
    ingredients: ['Milk Solids', 'Cardamom Essence', 'Desi Ghee', 'Saffron Syrup', 'Almond Flakes'],
    ingredientsHi: ['मावा व दूध', 'इलायची', 'देसी घी', 'केसरिया चाशनी', 'बादाम कतरन'],
    spiceLevel: 0,
    bestCity: 'Pushkar',
    bestCityHi: 'पुष्कर',
    imageUrl: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=1200&auto=format&fit=crop&q=80'
  },
  {
    id: 'rabdi',
    name: 'Udaipuri Malai Rabdi',
    nameHi: 'उदयपुरी मलाई रबड़ी',
    type: 'Sweet',
    typeHi: 'मिठाई',
    story: 'Full cream milk simmered for six hours in wide iron kadhais, gathering layer after layer of rich cream folds (malai lacche) with kewra and crushed nuts.',
    storyHi: 'घंटों लोहे की कड़ाही में कढ़कर तैयार की गई लच्छेदार गाढ़ी मलाईदार रबड़ी, जिसमें केवड़े की खुशबू और मेवे शामिल होते हैं।',
    ingredients: ['Slow Cooked Buffalo Milk', 'Kewra Water', 'Green Cardamom', 'Pistachios'],
    ingredientsHi: ['गाढ़ा दूध', 'केवड़ा जल', 'हरी इलायची', 'पिस्ता'],
    spiceLevel: 0,
    bestCity: 'Udaipur',
    bestCityHi: 'उदयपुर',
    imageUrl: 'https://images.unsplash.com/photo-1552611052-33e04de081de?w=1200&auto=format&fit=crop&q=80'
  },
  {
    id: 'masala-chaas',
    name: 'Jaipuri Masala Chaas',
    nameHi: 'जयपुरी मसाला छाछ',
    type: 'Street',
    typeHi: 'स्ट्रीट फ़ूड',
    story: 'The rejuvenating elixir of Rajasthan. Fresh clay-pot curd whipped with ice-cold well water, roasted cumin seeds, fresh crushed mint, and rock black salt.',
    storyHi: 'रेगिस्तान की भीषण गर्मी का रामबाण इलाज। मटके के ठंडे पानी और दही से बनी छाछ, जिसमें भुना जीरा, पुदीना और काला नमक मिलाया जाता है।',
    ingredients: ['Earthen Pot Curd', 'Roasted Bhuna Jeera', 'Himalayan Black Salt', 'Fresh Mint', 'Ginger'],
    ingredientsHi: ['मटके का ताजा दही', 'भुना जीरा', 'काला नमक', 'पुदीना', 'अदरक'],
    spiceLevel: 1,
    bestCity: 'Jaipur',
    bestCityHi: 'जयपुर',
    imageUrl: 'https://images.unsplash.com/photo-1627308595229-7830a5c91f9f?w=1200&auto=format&fit=crop&q=80'
  }
];
