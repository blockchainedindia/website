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
            'detail': 'Tech Evangelist, open source contributor and mentor.',
            'socialHandles': {
                'twitter': 'https://twitter.com/kranirudha',
                'github': 'https://github.com/anistark',
                'linkedin': 'https://www.linkedin.com/in/kranirudha'
            },
            'isActive': true
        },
        {
            'memberId': 3,
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
            'talkImg': 'https://i.imgur.com/kQx8HjP.png',
            'talkUrl': 'https://anistark.github.io/talks/decentralising-with-ethereum',
            'isActive': true
        },
        {
            'talkId': 2,
            'talkTitle': 'Intial Coin Offering',
            'speakerName': 'Akshay Agarwal',
            'talkImg': 'https://i.imgur.com/kQx8HjP.png',
            'talkUrl': 'https://drive.google.com/file/d/0B4pGqvGd5e8ibXBnd2lvQWVlejQ/view?usp=sharing',
            'isActive': true
        },
        {
            'talkId': 3,
            'talkTitle': 'The Basics Of Ethereum',
            'speakerName': 'Advaith Mohan',
            'talkImg': 'https://i.imgur.com/kQx8HjP.png',
            'talkUrl': 'https://slides.com/blockchainedindia/ethereumbasics/fullscreen#/',
            'isActive': true
        },
        {
            'talkId': 4,
            'talkTitle': 'Decentralising with Ethereum',
            'speakerName': 'Kumar Anirudha',
            'talkImg': 'https://i.imgur.com/kQx8HjP.png',
            'talkUrl': 'https://anistark.github.io/talks/decentralising-with-ethereum',
            'isActive': true
        },
        {
            'talkId': 5,
            'talkTitle': 'Ethereum Smart Contract',
            'speakerName': 'Vinit Agrawal',
            'talkImg': 'https://i.imgur.com/kQx8HjP.png',
            'talkUrl': 'https://drive.google.com/file/d/0B4pGqvGd5e8iMG1sdy1YSU9IdkU/view?usp=sharing',
            'isActive': true
        },
        {
            'talkId': 6,
            'talkTitle': 'Introduction to Blockchain',
            'speakerName': 'Kiran Naik Danavath',
            'talkImg': 'https://i.imgur.com/kQx8HjP.png',
            'talkUrl': 'https://drive.google.com/file/d/0B4pGqvGd5e8iTTZ1VXBXRWdXRms/view?usp=sharing',
            'isActive': true
        },
        {
            'talkId': 7,
            'talkTitle': 'Unravel the Mystery - Blockchain',
            'speakerName': 'Vikas Singh',
            'talkImg': 'https://i.imgur.com/kQx8HjP.png',
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
            'talkImg': 'https://i.imgur.com/kQx8HjP.png',
            'talkUrl': 'http://anistark.github.io/talks/bitcoinIntro',
            'isActive': true
        },
        {
            'talkId': 10,
            'talkTitle': 'Private and Permissioned Blockchain',
            'speakerName': 'Advaith Mohan',
            'talkImg': 'https://i.imgur.com/kQx8HjP.png',
            'talkUrl': '#',
            'isActive': true
        }
    ]
};
