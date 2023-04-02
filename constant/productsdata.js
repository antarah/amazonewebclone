const products = [
    { 
        id: 'product1',
        url: 'https://rukminim1.flixcart.com/image/150/150/kapoo7k0/electric-kettle/p/6/s/pigeon-favourite-original-imafs7xhj5uwgrh4.jpeg?q=70', 
        detailUrl: 'https://rukminim1.flixcart.com/image/416/416/kapoo7k0/electric-kettle/p/6/s/pigeon-favourite-original-imafs7xhj5uwgrh4.jpeg?q=70',
        title: {
            shortTitle: 'Home & Kitchen',
            longTitle: 'Pigeon FAVOURITE Electric Kettle  (1.5 L, Silver, Black)'
        }, 
        price: {
            mrp: 1195,
            cost: 625,
            discount: '47%'
        },
        description: 'This electric kettle from Pigeon will soon become a travelers best friend, a hostelite saviour and an answer to all the midnight cravings. With this handy appliance, you can boil water and use it to make instant noodles, packet soup, coffee and green tea.',
        discount: 'Extra 10% Off', 
        tagline: 'Deal of the day' 
    },
    { 
        id: 'product2',
        url: 'https://rukminim1.flixcart.com/image/416/416/kl6wx3k0/sandwich-maker/8/r/d/sandwich-01-flipkart-smartbuy-original-imagydds4zthxt8z.jpeg?q=70', 
        detailUrl: 'https://rukminim1.flixcart.com/image/416/416/kl6wx3k0/sandwich-maker/8/r/d/sandwich-01-flipkart-smartbuy-original-imagydds4zthxt8z.jpeg?q=70',
        title: {
            shortTitle: 'Sandwich Makers',
            longTitle: 'Flipkart SmartBuy Sandwich 01 Grill  (Black)'
        },
        price: {
            mrp: 1499,
            cost: 899,
            discount: '40%'
        },
        description: 'This non-stick sandwich toaster .easy to use and very handy. Directly hold over flame to make tasty toasts and toasted sandwiches. Specially designed by keeping your needs in mind, the sandwich maker makes whatever youre doing simpler, smarter and better',
        discount: 'From 99+5% Off', 
        tagline: 'Pestige, Nova & more' 
    },
    { 
        id: 'product3',
        url: 'https://rukminim1.flixcart.com/image/150/150/kohigsw0/resistance-tube/c/s/e/new-adjustable-single-resistance-tube-multicolor-na-ajro-deal-original-imag2xg88mhmwxz5.jpeg?q=70', 
        detailUrl: 'https://rukminim1.flixcart.com/image/416/416/kohigsw0/resistance-tube/c/s/e/new-adjustable-single-resistance-tube-multicolor-na-ajro-deal-original-imag2xg88mhmwxz5.jpeg?q=70', 
        title: {
            shortTitle: 'Fitness Gear',
            longTitle: 'AJRO DEAL New Adjustable Single Resistance Tube (Multicolor) Resistance Tube  (Multicolor)'
        }, 
        price: {
            mrp: 499,
            cost: 166,
            discount: '66%'
        },
        description: 'This unique product can tone your back muscles, reduce belly fat, improve blood circulation and also improves your body posture. It increases the stamina, energy and vitality of the body. The elastic resistance of the rubber training rope can be used to train and exercise in whichever way you want, according to your physical needs.',
        discount: 'Upto 70% Off', 
        tagline: 'Deal of the Day' 
    },
    { 
        id: 'product4',
        url: 'https://rukminim1.flixcart.com/image/300/300/kll7bm80/smartwatch/c/1/n/43-mo-sw-sense-500-android-ios-molife-original-imagyzyycnpujyjh.jpeg?q=70', 
        detailUrl: 'https://rukminim1.flixcart.com/image/416/416/kll7bm80/smartwatch/c/1/n/43-mo-sw-sense-500-android-ios-molife-original-imagyzyycnpujyjh.jpeg?q=70',
        title: {
            shortTitle: 'Smart Watches',
            longTitle: 'Molife Sense 500 Smartwatch  (Black Strap, Freesize)',
        }, 
        price: {
            mrp: 6999,
            cost: 4049,
            discount: '42%'
        },
        description: 'The Molife Sense 500, a brilliant smartwatch with a beautiful large display. Say hello to the infinity 1.7-inch display with 2.5D curved edges. Thanks to seamless Bluetooth 5.0 connectivity, you wont have to keep waiting. Bring a change to your outfit every day with changeable straps. A splash of color every day keeps the boredom away.',
        discount: 'Grab Now', 
        tagline: 'Best Seller' 
    },
    { 
        id: 'product5',
        url: 'https://rukminim1.flixcart.com/image/416/416/k3uhhu80/hair-dryer/n/m/t/nova-2800-w-professional-nhp-8220-original-imafmvwfhmzsxdrw.jpeg?q=70',
        detailUrl: 'https://rukminim1.flixcart.com/image/416/416/k3uhhu80/hair-dryer/n/m/t/nova-2800-w-professional-nhp-8220-original-imafmvwfhmzsxdrw.jpeg?q=70', 
        title: {
            shortTitle: 'Trimmers, Dryers & more',
            longTitle: 'Nova Professional NHP 8220 Hair Dryer  (1800 W, Multicolor)'
        }, 
        price: {
            mrp: 1899,
            cost: 1124,
            discount: '40%'
        },
        description: '',
        discount: 'From ₹499', 
        tagline: 'Kubra, Nova & more' 
    },
    {
        id: 'product6',
        url: 'https://rukminim1.flixcart.com/image/832/832/xif0q/backpack/y/5/n/-original-imagh3w9ct2pn9yd.jpeg?q=70',
        detailUrl: 'https://rukminim1.flixcart.com/image/832/832/xif0q/backpack/y/5/n/-original-imagh3w9ct2pn9yd.jpeg?q=70',
        title: {
            shortTitle: 'Bags , Backpacks, Wallets & Belts',
            longTitle: '55 L Laptop Backpack Laptop backpack spacy unisex backpack fits upto 16 Inches/college bag/school bag  (Black)'
        },
        price: {
            mrp: 3999 ,
            cost: 739,
            discount: '81%'
        },
        description: '',
        discount: 'Grab Now',
        tagline: 'Best Seller'
    },
     {
        id: 'product7',
        url: 'https://rukminim1.flixcart.com/image/832/832/xif0q/backpack/b/o/z/10-0-unisex-bag-with-rain-cover-office-school-college-businessa-original-imaghrwehgjctpvv.jpeg?q=70',
        detailUrl: 'https://rukminim1.flixcart.com/image/832/832/xif0q/backpack/b/o/z/10-0-unisex-bag-with-rain-cover-office-school-college-businessa-original-imaghrwehgjctpvv.jpeg?q=70',
        title: {
            shortTitle: 'Bags , Backpacks, Wallets & Belts',
            longTitle: 'Large 45 L Laptop Backpack Unisex Bag with rain cover Office/School/College/BusinessC-45L  (Multicolor)'
        },
        price: {
            mrp: 4999,
            cost: 769,
            discount: '84%'
        },
        description: '',
        discount: 'Grab Now',
        tagline: 'Best Seller'
    },
     {
        id: 'product8',
        url: 'https://rukminim1.flixcart.com/image/832/832/kbv4fww0/wallet-card-wallet/a/5/s/wllet01a-abc01-wallet-usl-original-imaft3gzdzazatrv.jpeg?q=70',
        detailUrl: 'https://rukminim1.flixcart.com/image/832/832/kbv4fww0/wallet-card-wallet/a/5/s/wllet01a-abc01-wallet-usl-original-imaft3gzdzazatrv.jpeg?q=70',
        title: {
            shortTitle: 'Bags, Wallets & Belts',
            longTitle: 'Men Black Genuine Leather Wallet - Mini  (10 Card Slots)'
        },
        price: {
            mrp: 999,
            cost: 199,
            discount: '80%'
        },
        description: '',
        discount: 'Grab Now',
        tagline: 'Best Seller'
    },
     {
        id: 'product9',
        url: 'https://rukminim1.flixcart.com/image/832/832/xif0q/wallet-card-wallet/l/w/n/men-casual-rfid-genuine-leather-card-and-cash-wallet-1-11-hh707-original-imagkgmvf6fzzumz.jpeg?q=70',
        detailUrl: 'https://rukminim1.flixcart.com/image/832/832/xif0q/wallet-card-wallet/l/w/n/men-casual-rfid-genuine-leather-card-and-cash-wallet-1-11-hh707-original-imagkgmvf6fzzumz.jpeg?q=70',
        title: {
            shortTitle: 'Bags, Wallets & Belts',
            longTitle: 'Men Casual, Formal, Ethnic, Evening/Party, Trendy, Travel Tan Genuine Leather RFID Wallet - Mini  (11 Card Slots)'
        },
        price: {
            mrp:1499,
            cost:483,
            discount: '67%'
        },
        description: '',
        discount: 'Grab Now',
        tagline: 'Special price'
    },
     {
        id: 'product10',
        url: 'https://rukminim1.flixcart.com/image/416/416/k0o69ow0/card-holder/s/d/z/black-automatic-pop-up-slim-aluminium-debit-credit-card-holder-original-imafket9u6wtebwv.jpeg?q=70',
        detailUrl: 'https://rukminim1.flixcart.com/image/416/416/k0o69ow0/card-holder/s/d/z/black-automatic-pop-up-slim-aluminium-debit-credit-card-holder-original-imafket9u6wtebwv.jpeg?q=70',
        title: {
            shortTitle: 'HomeBags, Wallets & Belts',
            longTitle: 'StealODeal Black Automatic Pop Up Slim Aluminium Debit/Credit 6 Card Holder  (Set of 1, Black)'
        },
        price: {
            mrp: 499,
            cost:206 ,
            discount: '58%'
        },
        description: '',
        discount: 'Grab Now',
        tagline: 'Special price'
    },
     {
        id: 'product11',
        url: 'https://rukminim1.flixcart.com/image/416/416/k6b2snk0/sandwich-maker/p/j/k/flipkart-smartbuy-smns750b1-smns750b1-original-imafzsnu9kcgspqs.jpeg?q=70',
        detailUrl: 'https://rukminim1.flixcart.com/image/416/416/k6b2snk0/sandwich-maker/p/j/k/flipkart-smartbuy-smns750b1-smns750b1-original-imafzsnu9kcgspqs.jpeg?q=70',
        title: {
            shortTitle: 'Sandwich Makers,Home & Kitchen',
            longTitle: 'Flipkart SmartBuy Grill Sandwich Maker'
        },
        price: {
            mrp:1425 ,
            cost: 799,
            discount: '40%'
        },
        description: '',
        discount: 'Grab Now',
        tagline:'Flipkart SmartBuy'
    },
     {
        id: 'product12',
        url: 'https://rukminim1.flixcart.com/image/416/416/keiuxzk0/sandwich-maker/d/f/j/marwall-non-stick-grill-toast-sandwich-maker-original-imafv6fchxkyk77g.jpeg?q=70',
        detailUrl: 'https://rukminim1.flixcart.com/image/416/416/keiuxzk0/sandwich-maker/d/f/j/marwall-non-stick-grill-toast-sandwich-maker-original-imafv6fchxkyk77g.jpeg?q=70',
        title: {
            shortTitle: 'Sandwich Makers,Home & Kitchen',
            longTitle: 'MyKitchen Non-stick Grill Sandwich Toaster, Gas Compatible Grill  (Black)'
        },
        price: {
            mrp: 799,
            cost:294 ,
            discount: '63%'
        },
        description: '',
        discount: 'Grab Now',
        tagline:'MyKitchen,Nova & more'
    },
     {
        id: 'product13',
        url: 'https://rukminim1.flixcart.com/image/416/416/xif0q/sandwich-maker/d/k/k/crunch-sandwich-toaster-750-w-with-4-slice-non-stick-candes-original-imaggfwjd6cycsv4.jpeg?q=70',
        detailUrl: 'https://rukminim1.flixcart.com/image/416/416/xif0q/sandwich-maker/d/k/k/crunch-sandwich-toaster-750-w-with-4-slice-non-stick-candes-original-imaggfwjd6cycsv4.jpeg?q=70',
        title: {
            shortTitle: 'Sandwich Makers,Home & Kitchen',
            longTitle: 'Candes Crunch Sandwich Toaster, 750 W with 4 Slice Non-Stick Toast  (Black, Silver)'
        },
        price: {
            mrp: 1599,
            cost: 1049,
            discount: '34%'
        },
        description: '',
        discount: 'Grab Now',
        tagline:'Candes,MyKitchen,Nova & more'
    },
     {
        id: 'product14',
        url: 'https://rukminim1.flixcart.com/image/416/416/k3uhhu80/hair-dryer/n/m/t/nova-2800-w-professional-nhp-8220-original-imafmvwfhmzsxdrw.jpeg?q=70',
        detailUrl: 'https://rukminim1.flixcart.com/image/416/416/k3uhhu80/hair-dryer/n/m/t/nova-2800-w-professional-nhp-8220-original-imafmvwfhmzsxdrw.jpeg?q=70',
        title: {
            shortTitle: 'Sandwich Makers,Home & Kitchen',
            longTitle: 'Flipkart SmartBuy Panini Grill Sandwich Maker'
        },
        price: {
            mrp: 2599,
            cost: 1299,
            discount: '50%'
        },
        description: '',
        discount: 'From ₹499',
        tagline: 'MyKitchen,Nova & more'
    },
     {
        id: 'product15',
        url: 'https://rukminim1.flixcart.com/image/416/416/k0o69ow0/electric-kettle/a/z/n/flipkart-smartbuy-eks1500b-original-imafkezmkfjydsnh.jpeg?q=70',
        detailUrl: 'https://rukminim1.flixcart.com/image/416/416/k0o69ow0/electric-kettle/a/z/n/flipkart-smartbuy-eks1500b-original-imafkezmkfjydsnh.jpeg?q=70',
        title: {
            shortTitle: 'Home & Kitchen,Electric Jug(heater)/Travel Kettles',
            longTitle: 'Flipkart SmartBuy EKS1500B Electric Kettle  (1.5 L, Black)'
        },
        price: {
            mrp: 899,
            cost: 499,
            discount: '44%'
        },
        description: '',
        discount: 'Grab Now',
        tagline: 'MyKitchen,Pigeon & more'
    },
     {
        id: 'product16',
        url: 'https://rukminim1.flixcart.com/image/416/416/xif0q/hair-straightener/h/e/x/-original-imagky3myujy5rar.jpeg?q=70',
        detailUrl: 'https://rukminim1.flixcart.com/image/416/416/xif0q/hair-straightener/h/e/x/-original-imagky3myujy5rar.jpeg?q=70',
        title: {
            shortTitle: 'Hair Straighteners,Health & Personal Care Appliance',
            longTitle: 'PHILIPS HP8302/06 Hair Straightener  (Black)'
        },
        price: {
            mrp: 1395,
            cost: 949,
            discount: '31%'
        },
        description: '',
        discount: 'Grab Now',
        tagline: 'Special price'
    },
     {
        id: 'product17',
        url: 'https://rukminim1.flixcart.com/image/416/416/kmds4nk0/hair-straightener/7/s/k/hs4104-havells-original-imagfazugkyr3umm.jpeg?q=70',
        detailUrl: 'https://rukminim1.flixcart.com/image/416/416/kmds4nk0/hair-straightener/7/s/k/hs4104-havells-original-imagfazugkyr3umm.jpeg?q=70',
        title: {
            shortTitle: 'Hair Straighteners,Health & Personal Care Appliance',
            longTitle: 'HAVELLS HS 4104 HS4104 Hair Straightener  (Pink)'
        },
        price: {
            mrp: 1495,
            cost: 799,
            discount: '46%'
        },
        description: '',
        discount: 'Grab Now',
        tagline: 'Best Seller'
    },
     {
        id: 'product18',
        url: 'https://rukminim1.flixcart.com/image/416/416/xif0q/hair-straightener/c/p/b/2-in-1-hair-styler-straightener-and-crimper-nhs-885-05-nova-original-imagh8yqumfec2uk.jpeg?q=70',
        detailUrl: 'https://rukminim1.flixcart.com/image/416/416/xif0q/hair-straightener/c/p/b/2-in-1-hair-styler-straightener-and-crimper-nhs-885-05-nova-original-imagh8yqumfec2uk.jpeg?q=70',
        title: {
            shortTitle: 'Hair Straighteners,Health & Personal Care Appliance, NOVA Hair Straighteners',
            longTitle: 'NOVA NHS 885/05 Hair Straightener  (Black, Gold)'
        },
        price: {
            mrp:2199,
            cost: 1199,
            discount: '45%'
        },
        description: '',
        discount: 'Grab Now',
        tagline: 'Special price'
    },
     {
        id: 'product19',
        url: 'https://rukminim1.flixcart.com/image/416/416/khkvukw0-0/hair-dryer/q/e/9/2-in-1-straightner-and-hair-dryer-combo-balkumund-original-imafxjzqgk3k9ahn.jpeg?q=70',
        detailUrl: 'https://rukminim1.flixcart.com/image/416/416/khkvukw0-0/hair-dryer/q/e/9/2-in-1-straightner-and-hair-dryer-combo-balkumund-original-imafxjzqgk3k9ahn.jpeg?q=70',
        title: {
            shortTitle: 'Hair Straighteners,Health & Personal Care Appliance,FINIVIVA Hair Stylers',
            longTitle: 'FINIVIVA Personal Care Appliance Combo (Hair Straightener, Hair Dryer) 2 in 1 Styling Combo Kit of Hair Straightener, Curler and Hair Dryer - Pink Hair Styler  (Multicolor)'
        },
        price: {
            mrp:999,
            cost:510,
            discount: '48%'
        },
        description: '',
        discount: 'Grab Now',
        tagline: 'Special price'
    },
     {
        id: 'product20',
        url: 'https://rukminim1.flixcart.com/image/416/416/l2f20sw0/hair-dryer/l/o/x/premium-silky-shine-hot-and-cold-foldable-nhp-8205-nova-original-imagdrv8f8dg4bpk.jpeg?q=70',
        detailUrl: 'https://rukminim1.flixcart.com/image/416/416/l2f20sw0/hair-dryer/l/o/x/premium-silky-shine-hot-and-cold-foldable-nhp-8205-nova-original-imagdrv8f8dg4bpk.jpeg?q=70',
        title: {
            shortTitle: 'Hair Dryers,Health & Personal Care Appliance',
            longTitle: 'NOVA NHP 8205 Hair Dryer  (1400 W, Purple)'
        },
        price: {
            mrp: 1095,
            cost:799 ,
            discount: '27%'
        },
        description: '',
         discount: 'Grab Now',
        tagline: 'Special price'
    },

]

module.exports = products;