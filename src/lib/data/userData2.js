const users = [
    {
        id: 1,
        name: 'John Doe',
        email: 'johndoe@me.com',
        avatar: 'https://api.dicebear.com/9.x/avatarStyle/svg?seed=JohnDoe',
        location: {
            place: 'Downtown',
            pinCode: '101010',
            city: 'New York',
            state: 'NY',
            country: 'USA'
        },
        address: {
            street: '456 Broadway',
            apartment: 'Suite 12A',
            city: 'New York',
            state: 'NY',
            country: 'USA',
            postalCode: '101010'
        },
        workProfile: {
            place: 'Tech Innovations',
            jobTitle: 'Product Manager',
            department: 'Product',
            yearsExperience: 7,
            workEmail: 'john.doe@techinnovations.com',
            workPhone: '+1234567890'
        },
        socialProfiles: {
            linkedin: 'https://www.linkedin.com/in/johndoe',
            twitter: 'https://twitter.com/johndoe',
            github: 'https://github.com/johndoe'
        },
        hobbies: ['Cycling', 'Hiking', 'Music'],
        languages: ['English', 'French'],
        dateOfBirth: '1985-03-10'
    },
    {
        id: 2,
        name: 'Ela Ena',
        email: 'elaena@me.com',
        avatar: 'https://api.dicebear.com/9.x/avatarStyle/svg?seed=ElaEna',
        location: {
            place: 'Addit',
            pinCode: '123456',
            city: 'Metropolis',
            state: 'Stateville',
            country: 'Countryland'
        },
        address: {
            street: '123 Main St',
            apartment: 'Apt 4B',
            city: 'Metropolis',
            state: 'Stateville',
            country: 'Countryland',
            postalCode: '123456'
        },
        workProfile: {
            place: 'Tech Corp',
            jobTitle: 'Software Engineer',
            department: 'Engineering',
            yearsExperience: 5,
            workEmail: 'ela.ena@techcorp.com',
            workPhone: '+1234567890'
        },
        socialProfiles: {
            linkedin: 'https://www.linkedin.com/in/elaena',
            twitter: 'https://twitter.com/elaena',
            github: 'https://github.com/elaena'
        },
        hobbies: ['Reading', 'Traveling', 'Photography'],
        languages: ['English', 'Spanish'],
        dateOfBirth: '1990-05-15'
    },
    {
        id: 3,
        name: 'Michael Smith',
        email: 'michael@me.com',
        avatar: 'https://api.dicebear.com/9.x/avatarStyle/svg?seed=MichaelSmith',
        location: {
            place: 'Uptown',
            pinCode: '202020',
            city: 'Chicago',
            state: 'IL',
            country: 'USA'
        },
        address: {
            street: '789 Lake Shore Dr',
            apartment: 'Apt 5C',
            city: 'Chicago',
            state: 'IL',
            country: 'USA',
            postalCode: '202020'
        },
        workProfile: {
            place: 'Innovate Inc',
            jobTitle: 'Data Scientist',
            department: 'Analytics',
            yearsExperience: 4,
            workEmail: 'michael.smith@innovateinc.com',
            workPhone: '+0987654321'
        },
        socialProfiles: {
            linkedin: 'https://www.linkedin.com/in/michaelsmith',
            twitter: 'https://twitter.com/michaelsmith',
            github: 'https://github.com/michaelsmith'
        },
        hobbies: ['Gaming', 'Cooking', 'Fitness'],
        languages: ['English', 'German'],
        dateOfBirth: '1988-07-22'
    },
    {
        id: 4,
        name: 'Elena Smith',
        email: 'elena@me.com',
        avatar: 'https://api.dicebear.com/9.x/avatarStyle/svg?seed=ElenaSmith',
        location: {
            place: 'Suburbia',
            pinCode: '303030',
            city: 'Los Angeles',
            state: 'CA',
            country: 'USA'
        },
        address: {
            street: '321 Sunset Blvd',
            apartment: 'Apt 8D',
            city: 'Los Angeles',
            state: 'CA',
            country: 'USA',
            postalCode: '303030'
        },
        workProfile: {
            place: 'Creative Studio',
            jobTitle: 'Graphic Designer',
            department: 'Design',
            yearsExperience: 6,
            workEmail: 'elena.smith@creativestudio.com',
            workPhone: '+2345678901'
        },
        socialProfiles: {
            linkedin: 'https://www.linkedin.com/in/elenasmith',
            twitter: 'https://twitter.com/elenasmith',
            github: 'https://github.com/elenasmith'
        },
        hobbies: ['Drawing', 'Yoga', 'Traveling'],
        languages: ['English', 'Italian'],
        dateOfBirth: '1992-11-30'
    },
    {
        id: 5,
        name: 'Lara Smith',
        email: 'lara@me.com',
        avatar: 'https://api.dicebear.com/9.x/avatarStyle/svg?seed=LaraSmith',
        location: {
            place: 'Central Park',
            pinCode: '404040',
            city: 'San Francisco',
            state: 'CA',
            country: 'USA'
        },
        address: {
            street: '654 Market St',
            apartment: 'Apt 2A',
            city: 'San Francisco',
            state: 'CA',
            country: 'USA',
            postalCode: '404040'
        },
        workProfile: {
            place: 'Tech Giants',
            jobTitle: 'UX Researcher',
            department: 'User Experience',
            yearsExperience: 3,
            workEmail: 'lara.smith@techgiants.com',
            workPhone: '+3456789012'
        },
        socialProfiles: {
            linkedin: 'https://www.linkedin.com/in/larasmith',
            twitter: 'https://twitter.com/larasmith',
            github: 'https://github.com/larasmith'
        },
        hobbies: ['Baking', 'Hiking', 'Music'],
        languages: ['English', 'Chinese'],
        dateOfBirth: '1995-08-17'
    },
    {
        id: 6,
        name: 'Sarah Smith',
        email: 'sarah@me.com',
        avatar: 'https://api.dicebear.com/9.x/avatarStyle/svg?seed=SarahSmith',
        location: {
            place: 'Downtown',
            pinCode: '505050',
            city: 'Austin',
            state: 'TX',
            country: 'USA'
        },
        address: {
            street: '987 Congress Ave',
            apartment: 'Suite 12',
            city: 'Austin',
            state: 'TX',
            country: 'USA',
            postalCode: '505050'
        },
        workProfile: {
            place: 'FutureTech',
            jobTitle: 'Web Developer',
            department: 'Development',
            yearsExperience: 4,
            workEmail: 'sarah.smith@futuretech.com',
            workPhone: '+4567890123'
        },
        socialProfiles: {
            linkedin: 'https://www.linkedin.com/in/sarahsmith',
            twitter: 'https://twitter.com/sarahsmith',
            github: 'https://github.com/sarahsmith'
        },
        hobbies: ['Running', 'Reading', 'Photography'],
        languages: ['English', 'Portuguese'],
        dateOfBirth: '1987-09-04'
    },
    {
        id: 7,
        name: 'Emily Taylor',
        email: 'emily@me.com',
        avatar: 'https://api.dicebear.com/9.x/avatarStyle/svg?seed=EmilyTaylor',
        location: {
            place: 'Northside',
            pinCode: '606060',
            city: 'Seattle',
            state: 'WA',
            country: 'USA'
        },
        address: {
            street: '1234 1st Ave',
            apartment: 'Apt 6F',
            city: 'Seattle',
            state: 'WA',
            country: 'USA',
            postalCode: '606060'
        },
        workProfile: {
            place: 'Cloud Solutions',
            jobTitle: 'Cloud Architect',
            department: 'Cloud',
            yearsExperience: 8,
            workEmail: 'emily.taylor@cloudsolutions.com',
            workPhone: '+5678901234'
        },
        socialProfiles: {
            linkedin: 'https://www.linkedin.com/in/emilytaylor',
            twitter: 'https://twitter.com/emilytaylor',
            github: 'https://github.com/emilytaylor'
        },
        hobbies: ['Traveling', 'Dancing', 'Gardening'],
        languages: ['English', 'French'],
        dateOfBirth: '1983-12-25'
    },
    {
        id: 8,
        name: 'David Brown',
        email: 'david@me.com',
        avatar: 'https://api.dicebear.com/9.x/avatarStyle/svg?seed=DavidBrown',
        location: {
            place: 'Westside',
            pinCode: '707070',
            city: 'Denver',
            state: 'CO',
            country: 'USA'
        },
        address: {
            street: '567 Elm St',
            apartment: 'Apt 3E',
            city: 'Denver',
            state: 'CO',
            country: 'USA',
            postalCode: '707070'
        },
        workProfile: {
            place: 'Energy Solutions',
            jobTitle: 'Energy Analyst',
            department: 'Energy',
            yearsExperience: 5,
            workEmail: 'david.brown@energysolutions.com',
            workPhone: '+6789012345'
        },
        socialProfiles: {
            linkedin: 'https://www.linkedin.com/in/davidbrown',
            twitter: 'https://twitter.com/davidbrown',
            github: 'https://github.com/davidbrown'
        },
        hobbies: ['Cycling', 'Camping', 'Cooking'],
        languages: ['English', 'Russian'],
        dateOfBirth: '1991-06-11'
    },
    {
        id: 9,
        name: 'Sophia Davis',
        email: 'sophia@me.com',
        avatar: 'https://api.dicebear.com/9.x/avatarStyle/svg?seed=SophiaDavis',
        location: {
            place: 'Eastside',
            pinCode: '808080',
            city: 'Boston',
            state: 'MA',
            country: 'USA'
        },
        address: {
            street: '432 Beacon St',
            apartment: 'Apt 7G',
            city: 'Boston',
            state: 'MA',
            country: 'USA',
            postalCode: '808080'
        },
        workProfile: {
            place: 'Health Innovations',
            jobTitle: 'Medical Researcher',
            department: 'Research',
            yearsExperience: 6,
            workEmail: 'sophia.davis@healthinnovations.com',
            workPhone: '+7890123456'
        },
        socialProfiles: {
            linkedin: 'https://www.linkedin.com/in/sophiadavis',
            twitter: 'https://twitter.com/sophiadavis',
            github: 'https://github.com/sophiadavis'
        },
        hobbies: ['Writing', 'Traveling', 'Yoga'],
        languages: ['English', 'Italian'],
        dateOfBirth: '1989-04-14'
    },
    {
        id: 10,
        name: 'James Wilson',
        email: 'james@me.com',
        avatar: 'https://api.dicebear.com/9.x/avatarStyle/svg?seed=JamesWilson',
        location: {
            place: 'Southside',
            pinCode: '909090',
            city: 'San Diego',
            state: 'CA',
            country: 'USA'
        },
        address: {
            street: '789 Harbor Dr',
            apartment: 'Suite 5A',
            city: 'San Diego',
            state: 'CA',
            country: 'USA',
            postalCode: '909090'
        },
        workProfile: {
            place: 'Marketing Hub',
            jobTitle: 'Marketing Specialist',
            department: 'Marketing',
            yearsExperience: 4,
            workEmail: 'james.wilson@marketinghub.com',
            workPhone: '+8901234567'
        },
        socialProfiles: {
            linkedin: 'https://www.linkedin.com/in/jameswilson',
            twitter: 'https://twitter.com/jameswilson',
            github: 'https://github.com/jameswilson'
        },
        hobbies: ['Fishing', 'Golfing', 'Reading'],
        languages: ['English', 'Japanese'],
        dateOfBirth: '1994-05-06'
    },
    {
        id: 11,
        name: 'Ava Martinez',
        email: 'ava@me.com',
        avatar: 'https://api.dicebear.com/9.x/avatarStyle/svg?seed=AvaMartinez',
        location: {
            place: 'Greenwood',
            pinCode: '101112',
            city: 'Seattle',
            state: 'WA',
            country: 'USA'
        },
        address: {
            street: '1234 Maple Ave',
            apartment: 'Apt 4B',
            city: 'Seattle',
            state: 'WA',
            country: 'USA',
            postalCode: '101112'
        },
        workProfile: {
            place: 'E-commerce Inc',
            jobTitle: 'Sales Manager',
            department: 'Sales',
            yearsExperience: 5,
            workEmail: 'ava.martinez@ecommerceinc.com',
            workPhone: '+9012345678'
        },
        socialProfiles: {
            linkedin: 'https://www.linkedin.com/in/avamartinez',
            twitter: 'https://twitter.com/avamartinez',
            github: 'https://github.com/avamartinez'
        },
        hobbies: ['Swimming', 'Traveling', 'Cooking'],
        languages: ['English', 'Korean'],
        dateOfBirth: '1986-07-22'
    },
    {
        id: 12,
        name: 'Oliver Anderson',
        email: 'oliver@me.com',
        avatar: 'https://api.dicebear.com/9.x/avatarStyle/svg?seed=OliverAnderson',
        location: {
            place: 'Lakeside',
            pinCode: '121314',
            city: 'Austin',
            state: 'TX',
            country: 'USA'
        },
        address: {
            street: '5678 Lakeside Dr',
            apartment: 'Apt 8C',
            city: 'Austin',
            state: 'TX',
            country: 'USA',
            postalCode: '121314'
        },
        workProfile: {
            place: 'Finance Ltd',
            jobTitle: 'Accountant',
            department: 'Finance',
            yearsExperience: 4,
            workEmail: 'oliver.anderson@financeltd.com',
            workPhone: '+0123456789'
        },
        socialProfiles: {
            linkedin: 'https://www.linkedin.com/in/oliveranderson',
            twitter: 'https://twitter.com/oliveranderson',
            github: 'https://github.com/oliveranderson'
        },
        hobbies: ['Photography', 'Traveling', 'Music'],
        languages: ['English', 'Portuguese'],
        dateOfBirth: '1993-09-30'
    },
    {
        id: 13,
        name: 'Mia Brown',
        email: 'mia@me.com',
        avatar: 'https://api.dicebear.com/9.x/avatarStyle/svg?seed=MiaBrown',
        location: {
            place: 'Riverside',
            pinCode: '131415',
            city: 'San Francisco',
            state: 'CA',
            country: 'USA'
        },
        address: {
            street: '910 Market St',
            apartment: 'Suite 6B',
            city: 'San Francisco',
            state: 'CA',
            country: 'USA',
            postalCode: '131415'
        },
        workProfile: {
            place: 'Tech Solutions',
            jobTitle: 'IT Specialist',
            department: 'IT',
            yearsExperience: 6,
            workEmail: 'mia.brown@techsolutions.com',
            workPhone: '+1234567890'
        },
        socialProfiles: {
            linkedin: 'https://www.linkedin.com/in/miabrown',
            twitter: 'https://twitter.com/miabrown',
            github: 'https://github.com/miabrown'
        },
        hobbies: ['Running', 'Gardening', 'Traveling'],
        languages: ['English', 'Dutch'],
        dateOfBirth: '1984-10-18'
    },
    {
        id: 14,
        name: 'Lucas Wilson',
        email: 'lucas@me.com',
        avatar: 'https://api.dicebear.com/9.x/avatarStyle/svg?seed=LucasWilson',
        location: {
            place: 'Parkview',
            pinCode: '141516',
            city: 'Denver',
            state: 'CO',
            country: 'USA'
        },
        address: {
            street: '2345 Park Ave',
            apartment: 'Apt 5D',
            city: 'Denver',
            state: 'CO',
            country: 'USA',
            postalCode: '141516'
        },
        workProfile: {
            place: 'HealthCare Pro',
            jobTitle: 'Clinical Researcher',
            department: 'Research',
            yearsExperience: 7,
            workEmail: 'lucas.wilson@healthcarepro.com',
            workPhone: '+2345678901'
        },
        socialProfiles: {
            linkedin: 'https://www.linkedin.com/in/lucaswilson',
            twitter: 'https://twitter.com/lucaswilson',
            github: 'https://github.com/lucaswilson'
        },
        hobbies: ['Cooking', 'Cycling', 'Traveling'],
        languages: ['English', 'Spanish'],
        dateOfBirth: '1985-11-23'
    },
    {
        id: 15,
        name: 'Chloe Martinez',
        email: 'chloe@me.com',
        avatar: 'https://api.dicebear.com/9.x/avatarStyle/svg?seed=ChloeMartinez',
        location: {
            place: 'Seaside',
            pinCode: '151617',
            city: 'Los Angeles',
            state: 'CA',
            country: 'USA'
        },
        address: {
            street: '3456 Ocean Ave',
            apartment: 'Apt 3E',
            city: 'Los Angeles',
            state: 'CA',
            country: 'USA',
            postalCode: '151617'
        },
        workProfile: {
            place: 'Media Group',
            jobTitle: 'Content Creator',
            department: 'Marketing',
            yearsExperience: 3,
            workEmail: 'chloe.martinez@mediagroup.com',
            workPhone: '+3456789012'
        },
        socialProfiles: {
            linkedin: 'https://www.linkedin.com/in/chloemartinez',
            twitter: 'https://twitter.com/chloemartinez',
            github: 'https://github.com/chloemartinez'
        },
        hobbies: ['Traveling', 'Art', 'Music'],
        languages: ['English', 'French'],
        dateOfBirth: '1992-06-05'
    },
    {
        id: 16,
        name: 'Liam Taylor',
        email: 'liam@me.com',
        avatar: 'https://api.dicebear.com/9.x/avatarStyle/svg?seed=LiamTaylor',
        location: {
            place: 'Hilltop',
            pinCode: '161718',
            city: 'Chicago',
            state: 'IL',
            country: 'USA'
        },
        address: {
            street: '6789 Hilltop Rd',
            apartment: 'Suite 2A',
            city: 'Chicago',
            state: 'IL',
            country: 'USA',
            postalCode: '161718'
        },
        workProfile: {
            place: 'Logistics Ltd',
            jobTitle: 'Operations Manager',
            department: 'Operations',
            yearsExperience: 5,
            workEmail: 'liam.taylor@logisticsltd.com',
            workPhone: '+4567890123'
        },
        socialProfiles: {
            linkedin: 'https://www.linkedin.com/in/liamtaylor',
            twitter: 'https://twitter.com/liamtaylor',
            github: 'https://github.com/liamtaylor'
        },
        hobbies: ['Fishing', 'Hiking', 'Traveling'],
        languages: ['English', 'Chinese'],
        dateOfBirth: '1989-08-14'
    },
    {
        id: 17,
        name: 'Mason Davis',
        email: 'mason@me.com',
        avatar: 'https://api.dicebear.com/9.x/avatarStyle/svg?seed=MasonDavis',
        location: {
            place: 'Bay Area',
            pinCode: '171819',
            city: 'San Francisco',
            state: 'CA',
            country: 'USA'
        },
        address: {
            street: '7890 Bay St',
            apartment: 'Suite 6C',
            city: 'San Francisco',
            state: 'CA',
            country: 'USA',
            postalCode: '171819'
        },
        workProfile: {
            place: 'Creative Labs',
            jobTitle: 'UI/UX Designer',
            department: 'Design',
            yearsExperience: 4,
            workEmail: 'mason.davis@creativelabs.com',
            workPhone: '+5678901234'
        },
        socialProfiles: {
            linkedin: 'https://www.linkedin.com/in/masondavis',
            twitter: 'https://twitter.com/masondavis',
            github: 'https://github.com/masondavis'
        },
        hobbies: ['Reading', 'Cycling', 'Gardening'],
        languages: ['English', 'Spanish'],
        dateOfBirth: '1990-03-19'
    },
    {
        id: 18,
        name: 'Isabella Harris',
        email: 'isabella@me.com',
        avatar: 'https://api.dicebear.com/9.x/avatarStyle/svg?seed=IsabellaHarris',
        location: {
            place: 'Central City',
            pinCode: '181920',
            city: 'Austin',
            state: 'TX',
            country: 'USA'
        },
        address: {
            street: '1234 Central St',
            apartment: 'Apt 9A',
            city: 'Austin',
            state: 'TX',
            country: 'USA',
            postalCode: '181920'
        },
        workProfile: {
            place: 'Analytics Co.',
            jobTitle: 'Business Analyst',
            department: 'Analytics',
            yearsExperience: 5,
            workEmail: 'isabella.harris@analyticsco.com',
            workPhone: '+6789012345'
        },
        socialProfiles: {
            linkedin: 'https://www.linkedin.com/in/isabellaharris',
            twitter: 'https://twitter.com/isabellaharris',
            github: 'https://github.com/isabellaharris'
        },
        hobbies: ['Writing', 'Traveling', 'Baking'],
        languages: ['English', 'Japanese'],
        dateOfBirth: '1991-12-10'
    },
    {
        id: 19,
        name: 'Ethan Clark',
        email: 'ethan@me.com',
        avatar: 'https://api.dicebear.com/9.x/avatarStyle/svg?seed=EthanClark',
        location: {
            place: 'Old Town',
            pinCode: '202122',
            city: 'Boston',
            state: 'MA',
            country: 'USA'
        },
        address: {
            street: '5678 Old Town Rd',
            apartment: 'Apt 4B',
            city: 'Boston',
            state: 'MA',
            country: 'USA',
            postalCode: '202122'
        },
        workProfile: {
            place: 'Finance Group',
            jobTitle: 'Financial Analyst',
            department: 'Finance',
            yearsExperience: 6,
            workEmail: 'ethan.clark@financegroup.com',
            workPhone: '+7890123456'
        },
        socialProfiles: {
            linkedin: 'https://www.linkedin.com/in/ethanclark',
            twitter: 'https://twitter.com/ethanclark',
            github: 'https://github.com/ethanclark'
        },
        hobbies: ['Gaming', 'Music', 'Traveling'],
        languages: ['English', 'Italian'],
        dateOfBirth: '1994-04-22'
    },
    {
        id: 20,
        name: 'Avery Lewis',
        email: 'avery@me.com',
        avatar: 'https://api.dicebear.com/9.x/avatarStyle/svg?seed=AveryLewis',
        location: {
            place: 'Westend',
            pinCode: '212223',
            city: 'Chicago',
            state: 'IL',
            country: 'USA'
        },
        address: {
            street: '7890 Westend Ave',
            apartment: 'Suite 7B',
            city: 'Chicago',
            state: 'IL',
            country: 'USA',
            postalCode: '212223'
        },
        workProfile: {
            place: 'Tech World',
            jobTitle: 'Software Architect',
            department: 'Architecture',
            yearsExperience: 7,
            workEmail: 'avery.lewis@techworld.com',
            workPhone: '+8901234567'
        },
        socialProfiles: {
            linkedin: 'https://www.linkedin.com/in/averylewis',
            twitter: 'https://twitter.com/averylewis',
            github: 'https://github.com/averylewis'
        },
        hobbies: ['Traveling', 'Cycling', 'Reading'],
        languages: ['English', 'French'],
        dateOfBirth: '1986-01-15'
    },
    {
        id: 21,
        name: 'Lily Walker',
        email: 'lily@me.com',
        avatar: 'https://api.dicebear.com/9.x/avatarStyle/svg?seed=LilyWalker',
        location: {
            place: 'Downtown',
            pinCode: '232425',
            city: 'San Diego',
            state: 'CA',
            country: 'USA'
        },
        address: {
            street: '1234 Downtown St',
            apartment: 'Apt 5D',
            city: 'San Diego',
            state: 'CA',
            country: 'USA',
            postalCode: '232425'
        },
        workProfile: {
            place: 'Creative Minds',
            jobTitle: 'Art Director',
            department: 'Art',
            yearsExperience: 4,
            workEmail: 'lily.walker@creativeminds.com',
            workPhone: '+9012345678'
        },
        socialProfiles: {
            linkedin: 'https://www.linkedin.com/in/lilywalker',
            twitter: 'https://twitter.com/lilywalker',
            github: 'https://github.com/lilywalker'
        },
        hobbies: ['Art', 'Traveling', 'Yoga'],
        languages: ['English', 'Portuguese'],
        dateOfBirth: '1993-02-20'
    },
    {
        id: 22,
        name: 'Jackson Lee',
        email: 'jackson@me.com',
        avatar: 'https://api.dicebear.com/9.x/avatarStyle/svg?seed=JacksonLee',
        location: {
            place: 'Lakeside',
            pinCode: '242526',
            city: 'Austin',
            state: 'TX',
            country: 'USA'
        },
        address: {
            street: '2345 Lakeside Dr',
            apartment: 'Apt 6C',
            city: 'Austin',
            state: 'TX',
            country: 'USA',
            postalCode: '242526'
        },
        workProfile: {
            place: 'Tech Innovations',
            jobTitle: 'Data Scientist',
            department: 'Data',
            yearsExperience: 6,
            workEmail: 'jackson.lee@techinnovations.com',
            workPhone: '+0123456789'
        },
        socialProfiles: {
            linkedin: 'https://www.linkedin.com/in/jacksonlee',
            twitter: 'https://twitter.com/jacksonlee',
            github: 'https://github.com/jacksonlee'
        },
        hobbies: ['Photography', 'Cycling', 'Traveling'],
        languages: ['English', 'German'],
        dateOfBirth: '1988-11-11'
    }
]

export default users