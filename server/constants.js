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
            'cityLogo': 'http://i.imgur.com/TzE4rNy.jpg',
            'isActive': true
        },
        {
            'cityId': 2,
            'cityCode': 'ncr',
            'cityName': 'Delhi',
            'cityPreName': 'New',
            'cityPostName': '',
            'cityLogo': 'http://i.imgur.com/bA3g5OH.jpg',
            'isActive': true
        },
        {
            'cityId': 3,
            'cityCode': 'hyd',
            'cityName': 'Hyderabad',
            'cityPreName': '',
            'cityPostName': '',
            'cityLogo': 'http://i.imgur.com/WzuEXXY.jpg',
            'isActive': true
        },
        {
            'cityId': 4,
            'cityCode': 'ahm',
            'cityName': 'Ahmedabad',
            'cityPreName': '',
            'cityPostName': '',
            'cityLogo': 'http://i.imgur.com/YTtVoCf.jpg',
            'isActive': false
        },
        {
            'cityId': 5,
            'cityCode': 'mum',
            'cityName': 'Mumbai',
            'cityPreName': '',
            'cityPostName': '',
            'cityLogo': 'http://i.imgur.com/7rVXgi4.jpg',
            'isActive': false
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
            'picture': 'http://i.imgur.com/6kFWdvQ.jpg',
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
            'picture': 'http://i.imgur.com/b7vjK2N.jpg',
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
            'picture': 'http://i.imgur.com/MEZR12i.jpg',
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
            'picture': 'http://i.imgur.com/qdG7ZQB.jpg',
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
            'picture': 'http://i.imgur.com/0pQGSpT.jpg',
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
            'picture': 'http://i.imgur.com/Il3eqP6.jpg',
            'detail': 'Founder at fRndzZy.',
            'socialHandles': {
                'facebook': 'https://twitter.com/kashyapkomp',
                'linkedin': 'https://www.linkedin.com/in/kashyapk'
            },
            'isActive': true
        }
    ]
};
