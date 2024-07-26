const users = [
    {
        id: 1,
        name: 'John Doe',
        email: 'johndoe@me.com',
        avatar: 'https://api.dicebear.com/9.x/avatarStyle/svg?seed=JohnDoe',
        location: {
            place: 'City1',
            pinCode: '111111',
            country: 'Country1',
            state: 'State1'
        },
        address: {
            street: 'Street 1',
            city: 'City1',
            state: 'State1',
            country: 'Country1',
            zipCode: '111111'
        },
        workProfile: {
            company: 'Company1',
            jobTitle: 'Job1',
            department: 'Department1',
            yearsExperience: 5
        }
    },
    {
        id: 2,
        name: 'Ela Ena',
        email: 'elaena@me.com',
        avatar: 'https://api.dicebear.com/9.x/avatarStyle/svg?seed=ElaEna',
        location: {
            place: 'AddIt',
            pinCode: '123456',
            country: 'Country2',
            state: 'State2'
        },
        address: {
            street: 'Street 2',
            city: 'City2',
            state: 'State2',
            country: 'Country2',
            zipCode: '123456'
        },
        workProfile: {
            company: 'Company2',
            jobTitle: 'Job2',
            department: 'Department2',
            yearsExperience: 3
        }
    },
    {
        id: 3,
        name: 'Michael Smith',
        email: 'michael@me.com',
        avatar: 'https://api.dicebear.com/9.x/avatarStyle/svg?seed=MichaelSmith',
        location: {
            place: 'City3',
            pinCode: '333333',
            country: 'Country3',
            state: 'State3'
        },
        address: {
            street: 'Street 3',
            city: 'City3',
            state: 'State3',
            country: 'Country3',
            zipCode: '333333'
        },
        workProfile: {
            company: 'Company3',
            jobTitle: 'Job3',
            department: 'Department3',
            yearsExperience: 7
        }
    },
    {
        id: 4,
        name: 'Elena Smith',
        email: 'elena@me.com',
        avatar: 'https://api.dicebear.com/9.x/avatarStyle/svg?seed=ElenaSmith',
        location: {
            place: 'City4',
            pinCode: '444444',
            country: 'Country4',
            state: 'State4'
        },
        address: {
            street: 'Street 4',
            city: 'City4',
            state: 'State4',
            country: 'Country4',
            zipCode: '444444'
        },
        workProfile: {
            company: 'Company4',
            jobTitle: 'Job4',
            department: 'Department4',
            yearsExperience: 2
        }
    },
    {
        id: 5,
        name: 'Lara Smith',
        email: 'lara@me.com',
        avatar: 'https://api.dicebear.com/9.x/avatarStyle/svg?seed=LaraSmith',
        location: {
            place: 'City5',
            pinCode: '555555',
            country: 'Country5',
            state: 'State5'
        },
        address: {
            street: 'Street 5',
            city: 'City5',
            state: 'State5',
            country: 'Country5',
            zipCode: '555555'
        },
        workProfile: {
            company: 'Company5',
            jobTitle: 'Job5',
            department: 'Department5',
            yearsExperience: 6
        }
    },
    {
        id: 6,
        name: 'Sarah Smith',
        email: 'sarah@me.com',
        avatar: 'https://api.dicebear.com/9.x/avatarStyle/svg?seed=SarahSmith',
        location: {
            place: 'City6',
            pinCode: '666666',
            country: 'Country6',
            state: 'State6'
        },
        address: {
            street: 'Street 6',
            city: 'City6',
            state: 'State6',
            country: 'Country6',
            zipCode: '666666'
        },
        workProfile: {
            company: 'Company6',
            jobTitle: 'Job6',
            department: 'Department6',
            yearsExperience: 4
        }
    },
    {
        id: 7,
        name: 'Elena Smith',
        email: 'elena@me.com',
        avatar: 'https://api.dicebear.com/9.x/avatarStyle/svg?seed=ElenaSmith',
        location: {
            place: 'City7',
            pinCode: '777777',
            country: 'Country7',
            state: 'State7'
        },
        address: {
            street: 'Street 7',
            city: 'City7',
            state: 'State7',
            country: 'Country7',
            zipCode: '777777'
        },
        workProfile: {
            company: 'Company7',
            jobTitle: 'Job7',
            department: 'Department7',
            yearsExperience: 1
        }
    },
    {
        id: 8,
        name: 'Alice Johnson',
        email: 'alice@me.com',
        avatar: 'https://api.dicebear.com/9.x/avatarStyle/svg?seed=AliceJohnson',
        location: {
            place: 'City8',
            pinCode: '888888',
            country: 'Country8',
            state: 'State8'
        },
        address: {
            street: 'Street 8',
            city: 'City8',
            state: 'State8',
            country: 'Country8',
            zipCode: '888888'
        },
        workProfile: {
            company: 'Company8',
            jobTitle: 'Job8',
            department: 'Department8',
            yearsExperience: 8
        }
    },
    {
        id: 9,
        name: 'Bob Brown',
        email: 'bob@me.com',
        avatar: 'https://api.dicebear.com/9.x/avatarStyle/svg?seed=BobBrown',
        location: {
            place: 'City9',
            pinCode: '999999',
            country: 'Country9',
            state: 'State9'
        },
        address: {
            street: 'Street 9',
            city: 'City9',
            state: 'State9',
            country: 'Country9',
            zipCode: '999999'
        },
        workProfile: {
            company: 'Company9',
            jobTitle: 'Job9',
            department: 'Department9',
            yearsExperience: 9
        }
    },
    {
        id: 10,
        name: 'Charlie Davis',
        email: 'charlie@me.com',
        avatar: 'https://api.dicebear.com/9.x/avatarStyle/svg?seed=CharlieDavis',
        location: {
            place: 'City10',
            pinCode: '101010',
            country: 'Country10',
            state: 'State10'
        },
        address: {
            street: 'Street 10',
            city: 'City10',
            state: 'State10',
            country: 'Country10',
            zipCode: '101010'
        },
        workProfile: {
            company: 'Company10',
            jobTitle: 'Job10',
            department: 'Department10',
            yearsExperience: 10
        }
    },
    {
        id: 11,
        name: 'David Evans',
        email: 'david@me.com',
        avatar: 'https://api.dicebear.com/9.x/avatarStyle/svg?seed=DavidEvans',
        location: {
            place: 'City11',
            pinCode: '111111',
            country: 'Country11',
            state: 'State11'
        },
        address: {
            street: 'Street 11',
            city: 'City11',
            state: 'State11',
            country: 'Country11',
            zipCode: '111111'
        },
        workProfile: {
            company: 'Company11',
            jobTitle: 'Job11',
            department: 'Department11',
            yearsExperience: 11
        }
    },
    {
        id: 12,
        name: 'Eve Foster',
        email: 'eve@me.com',
        avatar: 'https://api.dicebear.com/9.x/avatarStyle/svg?seed=EveFoster',
        location: {
            place: 'City12',
            pinCode: '121212',
            country: 'Country12',
            state: 'State12'
        },
        address: {
            street: 'Street 12',
            city: 'City12',
            state: 'State12',
            country: 'Country12',
            zipCode: '121212'
        },
        workProfile: {
            company: 'Company12',
            jobTitle: 'Job12',
            department: 'Department12',
            yearsExperience: 12
        }
    },
    {
        id: 13,
        name: 'Frank Green',
        email: 'frank@me.com',
        avatar: 'https://api.dicebear.com/9.x/avatarStyle/svg?seed=FrankGreen',
        location: {
            place: 'City13',
            pinCode: '131313',
            country: 'Country13',
            state: 'State13'
        },
        address: {
            street: 'Street 13',
            city: 'City13',
            state: 'State13',
            country: 'Country13',
            zipCode: '131313'
        },
        workProfile: {
            company: 'Company13',
            jobTitle: 'Job13',
            department: 'Department13',
            yearsExperience: 13
        }
    },
    {
        id: 14,
        name: 'Grace Harris',
        email: 'grace@me.com',
        avatar: 'https://api.dicebear.com/9.x/avatarStyle/svg?seed=GraceHarris',
        location: {
            place: 'City14',
            pinCode: '141414',
            country: 'Country14',
            state: 'State14'
        },
        address: {
            street: 'Street 14',
            city: 'City14',
            state: 'State14',
            country: 'Country14',
            zipCode: '141414'
        },
        workProfile: {
            company: 'Company14',
            jobTitle: 'Job14',
            department: 'Department14',
            yearsExperience: 14
        }
    },
    {
        id: 15,
        name: 'Henry James',
        email: 'henry@me.com',
        avatar: 'https://api.dicebear.com/9.x/avatarStyle/svg?seed=HenryJames',
        location: {
            place: 'City15',
            pinCode: '151515',
            country: 'Country15',
            state: 'State15'
        },
        address: {
            street: 'Street 15',
            city: 'City15',
            state: 'State15',
            country: 'Country15',
            zipCode: '151515'
        },
        workProfile: {
            company: 'Company15',
            jobTitle: 'Job15',
            department: 'Department15',
            yearsExperience: 15
        }
    },
    {
        id: 16,
        name: 'Ivy Kelly',
        email: 'ivy@me.com',
        avatar: 'https://api.dicebear.com/9.x/avatarStyle/svg?seed=IvyKelly',
        location: {
            place: 'City16',
            pinCode: '161616',
            country: 'Country16',
            state: 'State16'
        },
        address: {
            street: 'Street 16',
            city: 'City16',
            state: 'State16',
            country: 'Country16',
            zipCode: '161616'
        },
        workProfile: {
            company: 'Company16',
            jobTitle: 'Job16',
            department: 'Department16',
            yearsExperience: 16
        }
    },
    {
        id: 17,
        name: 'Jack Lee',
        email: 'jack@me.com',
        avatar: 'https://api.dicebear.com/9.x/avatarStyle/svg?seed=JackLee',
        location: {
            place: 'City17',
            pinCode: '171717',
            country: 'Country17',
            state: 'State17'
        },
        address: {
            street: 'Street 17',
            city: 'City17',
            state: 'State17',
            country: 'Country17',
            zipCode: '171717'
        },
        workProfile: {
            company: 'Company17',
            jobTitle: 'Job17',
            department: 'Department17',
            yearsExperience: 17
        }
    },
    {
        id: 18,
        name: 'Kim Lewis',
        email: 'kim@me.com',
        avatar: 'https://api.dicebear.com/9.x/avatarStyle/svg?seed=KimLewis',
        location: {
            place: 'City18',
            pinCode: '181818',
            country: 'Country18',
            state: 'State18'
        },
        address: {
            street: 'Street 18',
            city: 'City18',
            state: 'State18',
            country: 'Country18',
            zipCode: '181818'
        },
        workProfile: {
            company: 'Company18',
            jobTitle: 'Job18',
            department: 'Department18',
            yearsExperience: 18
        }
    },
    {
        id: 19,
        name: 'Leo Martin',
        email: 'leo@me.com',
        avatar: 'https://api.dicebear.com/9.x/avatarStyle/svg?seed=LeoMartin',
        location: {
            place: 'City19',
            pinCode: '191919',
            country: 'Country19',
            state: 'State19'
        },
        address: {
            street: 'Street 19',
            city: 'City19',
            state: 'State19',
            country: 'Country19',
            zipCode: '191919'
        },
        workProfile: {
            company: 'Company19',
            jobTitle: 'Job19',
            department: 'Department19',
            yearsExperience: 19
        }
    },
    {
        id: 20,
        name: 'Mia Nelson',
        email: 'mia@me.com',
        avatar: 'https://api.dicebear.com/9.x/avatarStyle/svg?seed=MiaNelson',
        location: {
            place: 'City20',
            pinCode: '202020',
            country: 'Country20',
            state: 'State20'
        },
        address: {
            street: 'Street 20',
            city: 'City20',
            state: 'State20',
            country: 'Country20',
            zipCode: '202020'
        },
        workProfile: {
            company: 'Company20',
            jobTitle: 'Job20',
            department: 'Department20',
            yearsExperience: 20
        }
    },
    {
        id: 21,
        name: 'Nina Owens',
        email: 'nina@me.com',
        avatar: 'https://api.dicebear.com/9.x/avatarStyle/svg?seed=NinaOwens',
        location: {
            place: 'City21',
            pinCode: '212121',
            country: 'Country21',
            state: 'State21'
        },
        address: {
            street: 'Street 21',
            city: 'City21',
            state: 'State21',
            country: 'Country21',
            zipCode: '212121'
        },
        workProfile: {
            company: 'Company21',
            jobTitle: 'Job21',
            department: 'Department21',
            yearsExperience: 21
        }
    },
    {
        id: 22,
        name: 'Oscar Perez',
        email: 'oscar@me.com',
        avatar: 'https://api.dicebear.com/9.x/avatarStyle/svg?seed=OscarPerez',
        location: {
            place: 'City22',
            pinCode: '222222',
            country: 'Country22',
            state: 'State22'
        },
        address: {
            street: 'Street 22',
            city: 'City22',
            state: 'State22',
            country: 'Country22',
            zipCode: '222222'
        },
        workProfile: {
            company: 'Company22',
            jobTitle: 'Job22',
            department: 'Department22',
            yearsExperience: 22
        }
    },
    {
        id: 23,
        name: 'Paul Quinn',
        email: 'paul@me.com',
        avatar: 'https://api.dicebear.com/9.x/avatarStyle/svg?seed=PaulQuinn',
        location: {
            place: 'City23',
            pinCode: '232323',
            country: 'Country23',
            state: 'State23'
        },
        address: {
            street: 'Street 23',
            city: 'City23',
            state: 'State23',
            country: 'Country23',
            zipCode: '232323'
        },
        workProfile: {
            company: 'Company23',
            jobTitle: 'Job23',
            department: 'Department23',
            yearsExperience: 23
        }
    },
    {
        id: 24,
        name: 'Quincy Rodriguez',
        email: 'quincy@me.com',
        avatar: 'https://api.dicebear.com/9.x/avatarStyle/svg?seed=QuincyRodriguez',
        location: {
            place: 'City24',
            pinCode: '242424',
            country: 'Country24',
            state: 'State24'
        },
        address: {
            street: 'Street 24',
            city: 'City24',
            state: 'State24',
            country: 'Country24',
            zipCode: '242424'
        },
        workProfile: {
            company: 'Company24',
            jobTitle: 'Job24',
            department: 'Department24',
            yearsExperience: 24
        }
    },
]

export default users