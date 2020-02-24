/**
 * Created by Anirudha on 15/07/17.
 */

exports.sampleFunction = function() {
};

exports.cities = function() {
    return [
        {
            'cityId': 1,
            'cityCode': 'blr',
            'cityName': 'Bangalore',
            'cityPreName': '',
            'cityPostName': 'Karnataka',
            'cityLogo': 'https://i.imgur.com/TzE4rNy.jpg',
            'isActive': true
        },
        {
            'cityId': 2,
            'cityCode': 'ncr',
            'cityName': 'Delhi',
            'cityPreName': 'New',
            'cityPostName': '',
            'cityLogo': 'https://i.imgur.com/bA3g5OH.jpg',
            'isActive': true
        },
        {
            'cityId': 3,
            'cityCode': 'hyd',
            'cityName': 'Hyderabad',
            'cityPreName': '',
            'cityPostName': '',
            'cityLogo': 'https://i.imgur.com/WzuEXXY.jpg',
            'isActive': true
        },
        {
            'cityId': 4,
            'cityCode': 'ahm',
            'cityName': 'Ahmedabad',
            'cityPreName': '',
            'cityPostName': '',
            'cityLogo': 'https://i.imgur.com/YTtVoCf.jpg',
            'isActive': false
        },
        {
            'cityId': 5,
            'cityCode': 'mum',
            'cityName': 'Mumbai',
            'cityPreName': '',
            'cityPostName': '',
            'cityLogo': 'https://i.imgur.com/7rVXgi4.jpg',
            'isActive': true
        }
    ];
};

exports.rowClasses = function(key) {
    var classData = {
        0: 'fadeInLeft',
        1: 'zoomIn',
        2: 'fadeInRight'
    };
    return classData[key];
};

exports.socialAccounts = function(socialKey) {
    var socialAccountValues = {
        'website': {
            'iconClass': 'fa-link',
            'baseUrl': ''
        },
        'facebook': {
            'iconClass': 'fa-facebook',
            'baseUrl': 'https://facebook.com/'
        },
        'twitter': {
            'iconClass': 'fa-twitter',
            'baseUrl': 'https://twitter.com/'
        },
        'linkedin': {
            'iconClass': 'fa-linkedin',
            'baseUrl': 'https://www.linkedin.com/'
        },
        'github': {
            'iconClass': 'fa-github',
            'baseUrl': 'https://github.com/'
        }
    };
    return socialAccountValues[socialKey];
};

exports.teamMembers = function() {
    return [
        {
            'memberId': 1,
            'memberHandle': 'akshay',
            'preName': '',
            'name': 'Akshay',
            'postName': 'Aggarwal',
            'picture': 'https://i.imgur.com/6kFWdvQ.jpg',
            'detail': 'Startup, Technology and community building enthusiast. Fellow at DraperU.',
            'socialHandles': {
                'twitter': 'https://twitter.com/howdy_akshay',
                'facebook': 'https://www.facebook.com/akshay.aggarwal.10',
                'linkedin': 'https://www.linkedin.com/in/akshay-aggarwal'
            },
            'isActive': true
        },
        {
            'memberId': 2,
            'memberHandle': 'anistark',
            'preName': 'Kumar',
            'name': 'Anirudha',
            'postName': '',
            'picture': 'https://i.imgur.com/b7vjK2N.jpg',
            'detail': 'Founder @AcyclicLabs, open source contributor and mentor.',
            'socialHandles': {
                'twitter': 'https://twitter.com/kranirudha',
                'github': 'https://github.com/anistark',
                'linkedin': 'https://www.linkedin.com/in/kranirudha'
            },
            'isActive': true
        },
        {
            'memberId': 3,
            'memberHandle': 'manav',
            'preName': '',
            'name': 'Manav',
            'postName': 'Ailawadi',
            'picture': 'https://i.imgur.com/0pQGSpT.jpg',
            'detail': 'Entrepreneur',
            'socialHandles': {
                'facebook': 'https://facebook.com/manav.ailawadi'
            },
            'isActive': true
        },
        {
            'memberId': 4,
            'memberHandle': 'advaith',
            'preName': '',
            'name': 'Advaith',
            'postName': 'Mohan',
            'picture': 'https://i.imgur.com/qdG7ZQB.jpg',
            'detail': 'CoFounder @Wagr. Dedicated to a better future for humanity.',
            'socialHandles': {
                'twitter': 'https://twitter.com/advaithmohan90',
                'facebook': 'https://facebook.com/advaithm',
                'linkedin': 'https://www.linkedin.com/in/advaith-mohan-90505047'
            },
            'isActive': true
        },
        {
            'memberId': 5,
            'memberHandle': 'karthika',
            'preName': '',
            'name': 'Karthika',
            'postName': 'Sivakumar',
            'picture': 'https://i.imgur.com/MEZR12i.jpg',
            'detail': 'Community Manager at Thoughfactory. Excited about the future of Blockchain.',
            'socialHandles': {
                'facebook': 'https://facebook.com/karthikasiv'
            },
            'isActive': true
        },
        {
            'memberId': 6,
            'memberHandle': 'kashyap',
            'preName': '',
            'name': 'Kashyap',
            'postName': 'Kompella',
            'picture': 'https://i.imgur.com/Il3eqP6.jpg',
            'detail': 'Founder at fRndzZy. Fellow at DraperU.',
            'socialHandles': {
                'facebook': 'https://twitter.com/kashyapkomp',
                'linkedin': 'https://www.linkedin.com/in/kashyapk'
            },
            'isActive': true
        },
        {
            'memberId': 7,
            'memberHandle': 'vikas',
            'preName': '',
            'name': 'Vikas',
            'postName': 'Singh',
            'picture': 'http://www.freestencilgallery.com/wp-content/uploads/2014/07/Thor-Stencil-thumb.jpg',
            'detail': 'Ethreum blockchain developer and crypto believer.',
            'socialHandles': {
                'linkedin': 'https://www.linkedin.com/in/vikas-singh-8299a315',
                'github': 'https://github.com/vikas1188'
            },
            'isActive': true
        }
    ]
};

exports.events = function () {
    return [
        {
            'eventId': 1,
            'eventSlug': 'blr_intro',
            'name': 'Blockchain beyond Bitcoin',
            'detail': '',
            'date': '2017-04-01',
            'cityCode': 'blr',
            'location': 'Thought Factory Social, Diamond District, Tower C, 2nd Floor, 560071, H A L Old Airport Rd, ISRO Colony, Domlur, Bangalore',
            'startTime': '16:00:00',
            'endTime': '18:00:00',
            'partners': ['Thought Factory Social'],
            'sponsors': ['AWS'],
            'hostMemberHandles': ['akshay','anistark','advaith','karthika'],
            'eventLinks': {
                'meetup': 'https://www.meetup.com/blockchainindia/events/238764602'
            }
        },
        {
            'eventId': 2,
            'eventSlug': 'blr_intro_ncr',
            'name': 'Blockchain beyond Bitcoin - Delhi Chapter',
            'detail': '',
            'date': '2017-04-29',
            'cityCode': 'ncr',
            'location': '91 Springboard, E-43/1, Okhla Phase II, New Delhi',
            'startTime': '10:00:00',
            'endTime': '12:00:00',
            'partners': ['91 Springboard'],
            'sponsors': [],
            'hostMemberHandles': ['akshay','manav'],
            'eventLinks': {
                'meetup': 'https://www.meetup.com/blockchainindia/events/239157507'
            }
        },
        {
            'eventId': 3,
            'eventSlug': '',
            'name': '',
            'detail': '',
            'date': '',
            'cityCode': '',
            'location': '',
            'startTime': '',
            'endTime': '',
            'partners': [''],
            'sponsors': [],
            'hostMemberHandles': [],
            'eventLinks': {
                'meetup': '',
                'facebook': ''
            }
        }
    ]
};

exports.partners = function() {
    return [
        {
            'partnerId': 1,
            'partnerSlug': 'tfs',
            'partnerName': 'Thought Factory Social',
            'partnerLogo': 'https://i.imgur.com/yqVKOCJ.jpg',
            'isActive': true,
            'partnerType': 'general'
        },
        {
            'partnerId': 2,
            'partnerSlug': 'aws',
            'partnerName': 'AWS',
            'partnerLogo': 'https://i.imgur.com/RTd44cg.jpg',
            'isActive': true,
            'partnerType': 'general'
        },
        {
            'partnerId': 3,
            'partnerSlug': '91springboard',
            'partnerName': '91Springboard',
            'partnerLogo': 'https://i.imgur.com/UjWUgyR.jpg',
            'isActive': true,
            'partnerType': 'general'
        },
        {
            'partnerId': 4,
            'partnerSlug': 'startupdelhi',
            'partnerName': 'Startup Delhi',
            'partnerLogo': 'https://i.imgur.com/xi4BZ5B.jpg',
            'isActive': true,
            'partnerType': 'general'
        },
        {
            'partnerId': 5,
            'partnerSlug': 'thub',
            'partnerName': 'THub',
            'partnerLogo': 'https://i.imgur.com/wUDgPKR.jpg',
            'isActive': true,
            'partnerType': 'general'
        },
        {
            'partnerId': 6,
            'partnerSlug': 'tlabs',
            'partnerName': 'T-Labs',
            'partnerLogo': 'https://i.imgur.com/2tPVxmS.jpg',
            'isActive': false,
            'partnerType': 'general'
        },
        {
            'partnerId': 7,
            'partnerSlug': 'onecoworks',
            'partnerName': 'One Co Works',
            'partnerLogo': 'https://i.imgur.com/n2SnVn4.jpg',
            'isActive': false,
            'partnerType': 'general'
        },
        {
            'partnerId': 8,
            'partnerSlug': 'collabhouse',
            'partnerName': 'Collab House',
            'partnerLogo': 'https://i.imgur.com/PZx5aHx.jpg',
            'isActive': false,
            'partnerType': 'general'
        }
    ];
};

exports.mentors = function() {
    return [
        {
            'mentorId': 1,
            'mentorHandle': '',
            'preName': '',
            'name': '',
            'postName': '',
            'picture': '',
            'detail': '',
            'socialHandles': {
                'twitter': '',
                'linkedin': ''
            },
            'isActive': true
        }
    ]
};

exports.talks = function() {
    return [
        {
            'talkId': 1,
            'talkTitle': 'Dive into Blockchain',
            'speakerName': 'Kumar Anirudha',
            'talkImg': 'https://www.mhlnews.com/sites/mhlnews.com/files/styles/article_featured_standard/public/blockchain_0.gif?itok=PyXp3cWH',
            'talkUrl': 'https://anistark.github.io/talks/decentralising-with-ethereum',
            'isActive': true
        },
        {
            'talkId': 2,
            'talkTitle': 'Intial Coin Offering',
            'speakerName': 'Akshay Aggarwal',
            'talkImg': 'https://oracletimes.com/wp-content/uploads/2017/11/ico.jpeg',
            'talkUrl': 'https://drive.google.com/file/d/0B4pGqvGd5e8ibXBnd2lvQWVlejQ/view?usp=sharing',
            'isActive': true
        },
        {
            'talkId': 3,
            'talkTitle': 'The Basics Of Ethereum',
            'speakerName': 'Advaith Mohan',
            'talkImg': 'https://media.wired.com/photos/5a064a2bdfd4384b7ad1d8ba/master/w_2400,c_limit/roundup-TA.jpg',
            'talkUrl': 'https://slides.com/blockchainedindia/ethereumbasics/fullscreen#/',
            'isActive': true
        },
        {
            'talkId': 4,
            'talkTitle': 'Decentralising with Ethereum',
            'speakerName': 'Kumar Anirudha',
            'talkImg': 'https://blockgeeks.com/wp-content/uploads/2016/10/Screen-Shot-2016-02-24-at-10.42.13-AM-e1456328600212.png',
            'talkUrl': 'https://anistark.github.io/talks/decentralising-with-ethereum',
            'isActive': true
        },
        {
            'talkId': 5,
            'talkTitle': 'Ethereum Smart Contract',
            'speakerName': 'Vinit Agrawal',
            'talkImg': 'https://media.coindesk.com/uploads/2017/03/Screen-Shot-2017-03-28-at-5.43.08-PM.png',
            'talkUrl': 'https://drive.google.com/file/d/0B4pGqvGd5e8iMG1sdy1YSU9IdkU/view?usp=sharing',
            'isActive': true
        },
        {
            'talkId': 6,
            'talkTitle': 'Introduction to Blockchain',
            'speakerName': 'Kiran Naik Danavath',
            'talkImg': 'https://073bddbe7aa062defd37fde3-cwzdvdpfea.netdna-ssl.com/wp-content/uploads/2017/05/blockchain-mts-2017-1000x640.jpg',
            'talkUrl': 'https://drive.google.com/file/d/0B4pGqvGd5e8iTTZ1VXBXRWdXRms/view?usp=sharing',
            'isActive': true
        },
        {
            'talkId': 7,
            'talkTitle': 'Unravel the Mystery - Blockchain',
            'speakerName': 'Vikas Singh',
            'talkImg': 'http://www.financnitrgi.com/wp-content/uploads/biometric_blockchain_bitcoin.jpg',
            'talkUrl': 'https://drive.google.com/file/d/0B4pGqvGd5e8ic0Z5azN1bnJfWDA/view?usp=sharing',
            'isActive': true
        },
        {
            'talkId': 8,
            'talkTitle': 'The Stellar Consensus Protocol',
            'speakerName': 'David Mazières',
            'talkImg': 'https://i.imgur.com/0shxy8s.png',
            'talkUrl': 'https://drive.google.com/file/d/0B4pGqvGd5e8ibk51SXBIVXUwcDQ/view?usp=sharing',
            'isActive': true
        },
        {
            'talkId': 9,
            'talkTitle': 'Bitcoin and Blockchain',
            'speakerName': 'Kumar Anirudha',
            'talkImg': 'http://cryptotimes.org/wp-content/uploads/2018/03/Bitcoin%E2%80%99s-Blockchain.jpg',
            'talkUrl': 'http://anistark.github.io/talks/bitcoinIntro',
            'isActive': true
        },
        {
            'talkId': 10,
            'talkTitle': 'Types of Blockchain',
            'speakerName': 'Advaith Mohan',
            'talkImg': 'https://blockchainsemantics.s3.amazonaws.com/media/system/blog/TYPES-OF-BLOCKCHAIN.jpg',
            'talkUrl': 'http://slides.com/blockchainedindia/deck',
            'isActive': true
        },
        {
            'talkId': 11,
            'talkTitle': 'Applications of Blockchain',
            'speakerName': 'Shivhari Shankar',
            'talkImg': 'https://3mgj4y44nc15fnv8d303d8zb-wpengine.netdna-ssl.com/wp-content/uploads/2018/06/What-is-a-Decentralized-Application-696x449.jpg',
            'talkUrl': 'https://drive.google.com/file/d/1xlQ2oHeNhURSemYLqhDCMl0KLpBGqGdV/view',
            'isActive': true
        },
        {
            'talkId': 12,
            'talkTitle': 'InterPlanterary DataBase',
            'speakerName': 'Nilesh Trivedi',
            'talkImg': 'https://pbs.twimg.com/profile_images/877835162033291264/qCw-_vHV_400x400.jpg',
            'talkUrl': 'https://drive.google.com/file/d/1mDprxEF0cnaFXwQw0vYbthPy3khxOTcC/view',
            'isActive': true
        },
        {
            'talkId': 13,
            'talkTitle': 'What To Focus On While Building A Blockchain Start-Up',
            'speakerName': 'Naman Chaturvedi',
            'talkImg': 'https://i.imgur.com/5AvJjVG.jpg',
            'talkUrl': 'https://docs.google.com/presentation/d/1AX-vYcg0ff8oArqv28lFe4YgnevvzmdX7U7YPB4BIGk/edit#slide=id.p1',
            'isActive': true
        },
        {
            'talkId': 14,
            'talkTitle': 'Essential ERCs',
            'speakerName': 'Mayur Relekar',
            'talkImg': 'https://cdn-images-1.medium.com/max/1024/1*di6g2aso-keEx60GOdy5kQ.jpeg',
            'talkUrl': 'https://docs.google.com/presentation/d/1vg-4TQPqDOMUMt8cKIFDZzHS4JepxNpzS9yMzra8sSU/edit?ts=5b000fe8#slide=id.g3ab0fc39cf_0_70',
            'isActive': true
        },
        {
            'talkId': 15,
            'talkTitle': 'Introduction to Tangle',
            'speakerName': 'Kumar Anirudha',
            'talkImg': 'https://kriptovalute.si/wp-content/uploads/2017/12/IOTA-Cryptocurrency.png',
            'talkUrl': 'http://anistark.github.io/talks/tangleIntro/',
            'isActive': true
        },
        {
            'talkId': 16,
            'talkTitle': 'Crypto Jacking',
            'speakerName': 'Harshit Sharma',
            'talkImg': 'https://cdn-images-1.medium.com/max/1200/1*WcrCSQg2TFxeY0E5w5-XsQ.png',
            'talkUrl': 'https://drive.google.com/file/d/1S5CY96ROBMKWqq_A3WOx1KaSdSCe77ct/view?usp=sharing',
            'isActive': true
        },
        {
            'talkId': 17,
            'talkTitle': 'DTRS – Decentralised Trust & Reputation System',
            'speakerName': 'Vikas Singh',
            'talkImg': 'https://i.imgur.com/5AvJjVG.jpg',
            'talkUrl': 'https://drive.google.com/file/d/1iliZtEeHLCk8uFtRu0PluZ9X7AUYVFKZ/view?usp=sharing',
            'isActive': true
        },
        {
            'talkId': 18,
            'talkTitle': 'Intro to Hedera Hashgraph',
            'speakerName': 'Ankur Bakhshi',
            'talkImg': 'https://www.bitcoinforbeginners.io/wp-content/uploads/2018/04/Hedera-Hashgraph.jpg',
            'talkUrl': 'https://drive.google.com/file/d/1ZNXUuc2LhY7ElbDQbXQkle5MNdqviJhS/view?usp=sharing',
            'isActive': true
        },
        {
            'talkId': 19,
            'talkTitle': 'Dive into IOTA Tangle',
            'speakerName': 'Manav Ailawadi & Kumar Anirudha',
            'talkImg': 'https://cryptocurrencynews.com/wp-content/uploads/sites/3/2017/12/IOTA-Doesnt-Run-on-Blockchain-Does-that-Make-It-Better-than-Bitcoin-678x381.png',
            'talkUrl': 'https://drive.google.com/file/d/1UF7E-Pr9vweLW27COgsrWDw5_vQTOv7L/view',
            'isActive': true
        },
        {
            'talkId': 20,
            'talkTitle': 'The convergence of Blockchain & IOT',
            'speakerName': 'Advaith Mohan',
            'talkImg': 'https://mobilemarketingwatch.com/wp-content/uploads/2016/09/Internet-of-Things.jpg',
            'talkUrl': 'https://slides.com/blockchainedindia/blockchain-iot/#/',
            'isActive': true
        },
        {
            'talkId': 21,
            'talkTitle': 'The Applicability of Blockchain in Vehicular Telematics',
            'speakerName': 'NIRAV BAKSHI',
            'talkImg': 'http://blog.autointhebox.com/wp-content/uploads/2015/03/What-does-vehicle-telematics-mean-to-car-people-874x492.jpg',
            'talkUrl': 'https://drive.google.com/file/d/1_E1ROmmsnEWWvYYjD0X8ag4W_QVewa5T/view?usp=sharing',
            'isActive': true
        },
        {
            'talkId': 22,
            'talkTitle': 'Nikoin',
            'speakerName': 'APOORV SHANKAR',
            'talkImg': 'https://res-2.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_256,w_256,f_auto,q_auto:eco/j1yricuijkdt1l35scr5',
            'talkUrl': 'https://drive.google.com/file/d/1FSYpy3ITQXuUh0tPnaeCkZk4gOf07qxf/view',
            'isActive': true
        },
        {
            'talkId': 23,
            'talkTitle': 'Decentralized AI',
            'speakerName': 'Exelis',
            'talkImg': 'https://cdn-images-1.medium.com/max/1600/1*DlyYV9TMbGMOnLjDSWEj0A.jpeg',
            'talkUrl': 'https://drive.google.com/file/d/1CGDQYu9MrVaWi9KnPfmi7GEqHLYkuU9h/view',
            'isActive': true
        },
        {
            'talkId': 24,
            'talkTitle': 'Formless Blockchain',
            'speakerName': 'Karan Bharadwaj',
            'talkImg': 'https://images.unsplash.com/photo-1464294422770-538af108fbd6',
            'talkUrl': 'https://drive.google.com/file/d/16p4S7qFX4lZVGyWQA6JR2tVS69ooa1L0/view',
            'isActive': true
        },
        {
            'talkId': 25,
            'talkTitle': 'Crypto UX and Mass Adoption',
            'speakerName': 'Pranay Prateek',
            'talkImg': 'https://cdn-images-1.medium.com/max/1150/0*RT8o8v5ZZWSNESN-.png',
            'talkUrl': 'https://www.slideshare.net/pranay01/crypto-ux-and-mass-adoption',
            'isActive': true
        },
        {
            'talkId': 26,
            'talkTitle': 'Blockchain Scaling Solutions',
            'speakerName': 'Anomit Ghosh',
            'talkImg': 'https://proglib.io/wp-content/uploads/2018/04/blockchian-new.jpg',
            'talkUrl': 'https://drive.google.com/file/d/186STC9qPFV4wPmupkdi1iJD5MZ-ymQIi/view?usp=sharing',
            'isActive': true
        },
        {
            'talkId': 27,
            'talkTitle': 'Decoding ICO Myths',
            'speakerName': 'Nirmal L',
            'talkImg': 'https://elevenews.com/wp-content/uploads/2018/04/ico1.jpg',
            'talkUrl': 'https://drive.google.com/file/d/1MEzH-_i2OTCnu2MHEIbjh9Y_U0SSHzea/view?usp=sharing',
            'isActive': true
        },
        {
            'talkId': 28,
            'talkTitle': 'Privacy issues and proposed solutions for Blockchain',
            'speakerName': 'Opinder Preet Singh',
            'talkImg': 'https://i.imgur.com/5AvJjVG.jpg',
            'talkUrl': 'https://drive.google.com/file/d/1BoDLdpYBwth1VkxXkPVDpnpOMdK449Yd/view?usp=sharing',
            'isActive': true
        },
        {
            'talkId': 29,
            'talkTitle': 'Blockchain: Regulations, Legal challenges & Solutions',
            'speakerName': 'Varun Sethi',
            'talkImg': 'https://i.imgur.com/5AvJjVG.jpg',
            'talkUrl': 'https://drive.google.com/file/d/1IS0CAfuS0oiKqN0FJR-vZFya9K5E1Hvc/view?usp=sharing',
            'isActive': true
        },
        {
            'talkId': 30,
            'talkTitle': 'Hedera Hashgraph',
            'speakerName': 'Ankur Bakshi',
            'talkImg': 'https://i.imgur.com/5AvJjVG.jpg',
            'talkUrl': 'https://drive.google.com/file/d/1Qb9TzLibwGoXGfwLxXdlGxHWjLWjW4Pd/view?usp=sharing',
            'isActive': true
        },
        {
            'talkId': 31,
            'talkTitle': 'Evolution and Cryptocurrencies',
            'speakerName': 'Akshay Aggarwal',
            'talkImg': 'https://ethereumworldnews.com/wp-content/uploads/2017/06/Cryptocurrency.png',
            'talkUrl': 'https://drive.google.com/file/d/1S3pomxlkb90k_ftLsrGA8LDf1NwFIjZZ/view?usp=sharing',
            'isActive': true
        },
        {
            'talkId': 32,
            'talkTitle': 'Zero Knowledge proofs',
            'speakerName': 'Shivhari Shankar',
            'talkImg': 'https://matthewdgreen.files.wordpress.com/2014/11/54b69-zk.jpg',
            'talkUrl': 'https://drive.google.com/file/d/1L2hIoJZ7qfUypOykifIeUQqXgMLVVmaT/view?usp=sharing',
            'isActive': true
        },
        {
            'talkId': 33,
            'talkTitle': 'Aurigraph',
            'speakerName': 'Subbu Jois',
            'talkImg': 'https://i.imgur.com/5AvJjVG.jpg',
            'talkUrl': 'https://drive.google.com/file/d/1T18J5ZWn7_pBi4fzL9Md2f_Ng_qHuMya/view?usp=sharing',
            'isActive': true
        },
        {
            'talkId': 34,
            'talkTitle': 'The Applicability of Blockchain in Vehicular Telematics',
            'speakerName': 'Nirav',
            'talkImg': 'https://i.imgur.com/5AvJjVG.jpg',
            'talkUrl': 'https://drive.google.com/file/d/1PQ0b4OiFere3fee2DrGLipLWMAL4N8El/view?usp=sharing',
            'isActive': true
        },
        {
            'talkId': 35,
            'talkTitle': 'DAICO',
            'speakerName': 'Partha Bhattacharya',
            'talkImg': 'https://i.imgur.com/5AvJjVG.jpg',
            'talkUrl': 'https://drive.google.com/file/d/1BpIbg6Ve3vEec6B9opwaB7F4RiZs8E7t/view?usp=sharing',
            'isActive': true
        },
        {
            'talkId': 36,
            'talkTitle': 'Introduction to Tendermint',
            'speakerName': 'Vikas',
            'talkImg': 'https://i.imgur.com/5AvJjVG.jpg',
            'talkUrl': 'https://drive.google.com/file/d/1hCz7biNgcDHXkdPv_eISLBwMtmtjxYvK/view?usp=sharing',
            'isActive': true
        },
        {
            'talkId': 37,
            'talkTitle': 'Comaprison between Bitcoin, Ethereum and Stellar',
            'speakerName': 'Rohit Jindal',
            'talkImg': 'https://i.imgur.com/5AvJjVG.jpg',
            'talkUrl': 'https://drive.google.com/file/d/1YCLeiY9P41d1_85ThrqmePG0xEugrV_N/view?usp=sharing',
            'isActive': true
        },
        {
            'talkId': 38,
            'talkTitle': 'Origin Protocol',
            'speakerName': 'Jon Hearty',
            'talkImg': 'https://i.imgur.com/5AvJjVG.jpg',
            'talkUrl': 'https://drive.google.com/file/d/13WbfKEOEeZDUJJkQnbDq-qKCtOT0fU8u/view?usp=sharing',
            'isActive': true
        },
        {
            'talkId': 39,
            'talkTitle': 'Layer 2 Scaling Solutions',
            'speakerName': 'Anurag Arjun',
            'talkImg': 'https://i.imgur.com/5AvJjVG.jpg',
            'talkUrl': 'https://drive.google.com/file/d/1mrzZT1Z0d7bdW6NFF2gk6EQpMAlSPYf9/view?usp=sharing',
            'isActive': true
        },
        {
            'talkId': 40,
            'talkTitle': 'Blockchain - Recent Trends and Adoption',
            'speakerName': 'Pranjal B',
            'talkImg': 'https://i.imgur.com/5AvJjVG.jpg',
            'talkUrl': 'https://drive.google.com/file/d/1x4T4MYti9NSi6YSFfJwvxzYpDQIJKeqm/view?usp=sharing',
            'isActive': true
        },
        {
            'talkId': 41,
            'talkTitle': 'Decentralised AI',
            'speakerName': 'Paul Finney',
            'talkImg': 'https://xceptionalnetworks.bypronto.com/wp-content/uploads/sites/502/2018/09/Blog-Post-9-19-18.jpeg',
            'talkUrl': 'https://drive.google.com/file/d/1Do_OVXhmBZB4uCXORweyguQfBfixpAwz/view?usp=sharing',
            'isActive': true
        },
        {
            'talkId': 42,
            'talkTitle': 'Smart Contracts Vunlenrability and Auditing',
            'speakerName': 'Sarang Parikh',
            'talkImg': 'https://cdn-images-1.medium.com/max/677/1*MudxYgXNAvgXyJZzWoMguQ.png',
            'talkUrl': 'https://github.com/sarangparikh22/blockchained-india-19-01-2019/',
            'isActive': true
        },
        {
            'talkId': 43,
            'talkTitle': 'Serenity',
            'speakerName': 'Prateek',
            'talkImg': 'https://vic.news/wp-content/uploads/2018/11/ETH-2.0-biaf.png',
            'talkUrl': 'https://drive.google.com/file/d/13eq3uRuKQC2KGSzvwaHxcMWNvnSh2TWC/view?usp=sharing',
            'isActive': true
        },
        {
            'talkId': 44,
            'talkTitle': 'Privacy on Blockchain',
            'speakerName': 'Siddarth Gupta',
            'talkImg': 'https://i.imgur.com/5AvJjVG.jpg',
            'talkUrl': 'https://drive.google.com/file/d/1-Dq8OVWNvJKqIKMvdUo9H_hJ8qizdbHD/view?usp=sharing',
            'isActive': true
        },
        {
            'talkId': 45,
            'talkTitle': 'Smart Contracts Audit',
            'speakerName': 'Mithil Thakore',
            'talkImg': 'https://i.imgur.com/5AvJjVG.jpg',
            'talkUrl': 'https://drive.google.com/file/d/1dKd7WLAlA5Cp3fifykyCxWEvRl8gCMZX/view?usp=sharing',
            'isActive': true
        },
        {
            'talkId': 46,
            'talkTitle': 'Tezos',
            'speakerName': 'Om & Bernd',
            'talkImg': 'https://i.imgur.com/5AvJjVG.jpg',
            'talkUrl': 'https://drive.google.com/file/d/1kRIoVpu-MVyE3tf3j-OKu-4nHQT5KWRG/view?usp=sharing',
            'isActive': true
        },
        {
            'talkId': 47,
            'talkTitle': 'POST Protocol',
            'speakerName': '',
            'talkImg': 'https://i.imgur.com/5AvJjVG.jpg',
            'talkUrl': 'https://drive.google.com/file/d/1v4SHRrbkgSKQDG54zOn5dLgNV-dwcoOj/view?usp=sharing',
            'isActive': true
        },
        {
            'talkId': 48,
            'talkTitle': 'Community Governance via Blockchain',
            'speakerName': 'Sistla Abhishek',
            'talkImg': 'https://i.imgur.com/5AvJjVG.jpg',
            'talkUrl': 'https://drive.google.com/file/d/12sOGiEOxJJXf4ewhtX0EZZpU5lK1KaPS/view?usp=sharing',
            'isActive': true
        },
        {
            'talkId': 49,
            'talkTitle': 'Open Apps',
            'speakerName': 'Akshay Aggarwal',
            'talkImg': 'https://i.imgur.com/5AvJjVG.jpg',
            'talkUrl': 'https://drive.google.com/file/d/1nmwlpbSVkLPsahAt7EuP0d8rFNdqSEyq/view',
            'isActive': true
        }
    ]
};
