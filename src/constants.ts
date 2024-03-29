/* eslint-disable indent */
import { Contributer } from './common/hooks/stateHooks/types';

/* eslint-disable default-case */
const backendURL = (devEnv: string): string => {
    switch (devEnv) {
        case 'development':
            return import.meta.env.VITE_DEVELOPMENT_BACKEND_URL;

        case 'production':
            return import.meta.env.VITE_PRODUCTION_BACKEND_URL;

        default:
            return import.meta.env.VITE_DEVELOPMENT_BACKEND_URL;
    }
};

export const BACKEND_URL = `${backendURL(process.env.NODE_ENV!)}/api/v1/`;

export const CONTRIBUTORS: Contributer[] = [
    {
        id: 2,
        name: 'Quek Ma He',
        role: 'Software Engineer',
        ghURL: 'https://github.com/mahe993/',
        linkedinURL: 'https://www.linkedin.com/in/quekmahe/',
        profilePicURL: '/assets/images/profileNoBG.png',
    },
    {
        id: 3,
        name: 'Park Chae Seong',
        role: 'Software Engineer',
        ghURL: 'https://github.com/chae-seong/',
        linkedinURL: 'https://www.linkedin.com/in/chaeseong-park/',
        profilePicURL: '/assets/images/chaeseong.png',
    },
    {
        id: 1,
        name: 'Foo Chi Hen',
        role: 'Software Engineer',
        ghURL: 'https://github.com/koushireo',
        linkedinURL: 'https://www.linkedin.com/in/chi-hen-foo/',
        profilePicURL: '/assets/images/chihen.png',
    },
];

export const whiteList = new Set([997, 998, 999]);

// export const MOCK_FOODLISTS: Foodlist[] = [
//     {
//         id: 999,
//         userID: 999, // FK
//         title: 'title',
//         recurringDay: '<day>',
//         recurringTime: '<time>',
//         currentFoodIdx: 0,
//         status: PlayState.PAUSE,
//         imgURL: '',
//     },
//     {
//         id: 1,
//         userID: 999, // FK
//         title: 'burgers',
//         recurringDay: 'monday',
//         recurringTime: '19:00',
//         currentFoodIdx: 3,
//         status: PlayState.PLAY,
//         imgURL: '/assets/images/burgers.png',
//     },
//     {
//         id: 2,
//         userID: 999, // FK
//         title: 'pasta',
//         recurringDay: 'friday',
//         recurringTime: '12:30',
//         currentFoodIdx: 0,
//         status: PlayState.PAUSE,
//         imgURL: '/assets/images/pasta.png',
//     },
// ];

// export const MOCK_FOOD: Food[] = [
//     {
//         id: 1,
//         vendorID: 0, // FK
//         name: 'Cheeseburger',
//         description: 'A hamburger topped with cheese.',
//     },
//     {
//         id: 2,
//         vendorID: 0, // FK
//         name: 'Bacon Cheeseburger',
//         description: 'A cheeseburger with bacon.',
//     },
//     {
//         id: 3,
//         vendorID: 0, // FK
//         name: 'Veggie Burger',
//         description: 'A burger made from vegetables.',
//     },
//     {
//         id: 4,
//         vendorID: 0, // FK
//         name: 'Spaghetti',
//         description: 'A long, thin, cylindrical pasta.',
//     },
//     {
//         id: 5,
//         vendorID: 0, // FK
//         name: 'Fettuccine Alfredo',
//         description: 'A pasta dish made from fettuccine pasta tossed with Parmesan cheese and butter.',
//     },
//     {
//         id: 6,
//         vendorID: 0, // FK
//         name: 'Lasagna',
//         description: 'A wide, flat pasta, and possibly one of the oldest types of pasta.',
//     },
//     {
//         id: 7,
//         vendorID: 0, // FK
//         name: 'Macaroni and Cheese',
//         description: 'A dish of cooked macaroni pasta and a cheese sauce.',
//     },
//     {
//         id: 8,
//         vendorID: 0, // FK
//         name: 'Spaghetti Carbonara',
//         description: 'An Italian pasta dish from Rome made with egg, hard cheese, guanciale, and pepper.',
//     },
//     {
//         id: 9,
//         vendorID: 0, // FK
//         name: 'Penne alla Vodka',
//         description: 'A pasta dish made with vodka and penne pasta.',
//     },
//     {
//         id: 10,
//         vendorID: 0, // FK
//         name: 'Rigatoni',
//         description: 'A form of tube-shaped pasta of varying lengths and diameters.',
//     },
//     {
//         id: 11,
//         vendorID: 0, // FK
//         name: 'Linguine',
//         description: 'A form of pasta similar to fettuccine and trenette but elliptical in section rather than flat.',
//     },
//     {
//         id: 12,
//         vendorID: 0, // FK
//         name: 'Ravioli',
//         description: 'A type of pasta comprising a filling enveloped in thin pasta dough.',
//     },
//     {
//         id: 13,
//         vendorID: 0, // FK
//         name: 'Tortellini',
//         description: 'A ring-shaped pasta typically stuffed with a mix of meat or cheese.',
//     },
//     {
//         id: 14,
//         vendorID: 0, // FK
//         name: 'Gnocchi',
//         description:
//             'A variety of pasta from Italy consisting of a soft dough dumplings typically made from semolina, ordinary wheat flour, egg, cheese, potato, breadcrumbs, cornmeal, or similar ingredients.',
//     },
//     {
//         id: 15,
//         vendorID: 0, // FK
//         name: 'Pappardelle',
//         description: 'A type of pasta similar to fettuccine but wider.',
//     },
//     {
//         id: 16,
//         vendorID: 0, // FK
//         name: 'Tagliatelle',
//         description: 'A traditional type of pasta from Emilia-Romagna and Marche, regions of Italy.',
//     },
//     {
//         id: 17,
//         vendorID: 0, // FK
//         name: 'Cannelloni',
//         description:
//             'A cylindrical type of pasta generally served baked with a filling and covered by a sauce in Italian cuisine.',
//     },
//     {
//         id: 18,
//         vendorID: 0, // FK
//         name: 'Fusilli',
//         description: 'A variety of pasta that is formed into cork-screw or helical shapes.',
//     },
//     {
//         id: 19,
//         vendorID: 0, // FK
//         name: 'Double Burger',
//         description:
//             'A hamburger with two hamburger patties rather than one. The patties may be identical in size or the bottom patty may be larger.',
//     },
//     {
//         id: 20,
//         vendorID: 0, // FK
//         name: 'Sliders',
//         description: 'A small sandwich, typically around 2 in (5.1 cm) across, made with a bun.',
//     },
//     {
//         id: 21,
//         vendorID: 0, // FK
//         name: 'Chicken Burger',
//         description: 'A sandwich consisting of a boneless, skinless, breast of chicken.',
//     },
//     {
//         id: 22,
//         vendorID: 0, // FK
//         name: 'Fish Burger',
//         description: 'A sandwich consisting of a fillet of fish.',
//     },
//     {
//         id: 23,
//         vendorID: 0, // FK
//         name: 'Pork Burger',
//         description: 'A sandwich consisting of a patty of ground pork.',
//     },
//     {
//         id: 24,
//         vendorID: 0, // FK
//         name: 'Vegan Burger',
//         description: 'A sandwich consisting of a patty of ground vegetables.',
//     },
//     {
//         id: 25,
//         vendorID: 0, // FK
//         name: 'Turkey Burger',
//         description: 'A sandwich consisting of a patty of ground turkey.',
//     },
//     {
//         id: 26,
//         vendorID: 0, // FK
//         name: 'Lamb Burger',
//         description: 'A sandwich consisting of a patty of ground lamb.',
//     },
//     {
//         id: 27,
//         vendorID: 0, // FK
//         name: 'Buffalo Burger',
//         description: 'A sandwich consisting of a patty of ground buffalo.',
//     },
//     {
//         id: 28,
//         vendorID: 0, // FK
//         name: 'Kangaroo Burger',
//         description: 'A sandwich consisting of a patty of ground kangaroo.',
//     },
//     {
//         id: 29,
//         vendorID: 0, // FK
//         name: 'Venison Burger',
//         description: 'A sandwich consisting of a patty of ground venison.',
//     },
//     {
//         id: 30,
//         vendorID: 0, // FK
//         name: 'Ostrich Burger',
//         description: 'A sandwich consisting of a patty of ground ostrich.',
//     },
//     {
//         id: 31,
//         vendorID: 0, // FK
//         name: 'Elk Burger',
//         description: 'A sandwich consisting of a patty of ground elk.',
//     },
//     {
//         id: 32,
//         vendorID: 0, // FK
//         name: 'Wild Boar Burger',
//         description: 'A sandwich consisting of a patty of ground wild boar.',
//     },
// ];

// export const MOCK_FOODLISTFOODS = [
//     // burgers
//     {
//         foodlistID: 1, // FK
//         foodID: 1, // FK
//         quantity: 1,
//         index: 1,
//     },
//     {
//         foodlistID: 1, // FK
//         foodID: 2, // FK
//         quantity: 1,
//         index: 2,
//     },
//     {
//         foodlistID: 1, // FK
//         foodID: 3, // FK
//         quantity: 1,
//         index: 3,
//     },
//     {
//         foodlistID: 1, // FK
//         foodID: 19, // FK
//         quantity: 1,
//         index: 4,
//     },
//     {
//         foodlistID: 1, // FK
//         foodID: 20, // FK
//         quantity: 1,
//         index: 5,
//     },
//     {
//         foodlistID: 1, // FK
//         foodID: 21, // FK
//         quantity: 1,
//         index: 6,
//     },
//     {
//         foodlistID: 1, // FK
//         foodID: 22, // FK
//         quantity: 1,
//         index: 7,
//     },
//     {
//         foodlistID: 1, // FK
//         foodID: 23, // FK
//         quantity: 1,
//         index: 8,
//     },
//     {
//         foodlistID: 1, // FK
//         foodID: 24, // FK
//         quantity: 1,
//         index: 9,
//     },
//     {
//         foodlistID: 1, // FK
//         foodID: 25, // FK
//         quantity: 1,
//         index: 10,
//     },
//     {
//         foodlistID: 1, // FK
//         foodID: 26, // FK
//         quantity: 1,
//         index: 11,
//     },
//     {
//         foodlistID: 1, // FK
//         foodID: 27, // FK
//         quantity: 1,
//         index: 12,
//     },
//     {
//         foodlistID: 1, // FK
//         foodID: 28, // FK
//         quantity: 1,
//         index: 13,
//     },
//     {
//         foodlistID: 1, // FK
//         foodID: 29, // FK
//         quantity: 1,
//         index: 14,
//     },
//     {
//         foodlistID: 1, // FK
//         foodID: 30, // FK
//         quantity: 1,
//         index: 15,
//     },
//     {
//         foodlistID: 1, // FK
//         foodID: 31, // FK
//         quantity: 1,
//         index: 16,
//     },
//     {
//         foodlistID: 1, // FK
//         foodID: 32, // FK
//         quantity: 1,
//         index: 17,
//     },
//     // pasta
//     {
//         foodlistID: 2, // FK
//         foodID: 4, // FK
//         quantity: 1,
//         index: 1,
//     },
//     {
//         foodlistID: 2, // FK
//         foodID: 5, // FK
//         quantity: 1,
//         index: 2,
//     },
//     {
//         foodlistID: 2, // FK
//         foodID: 6, // FK
//         quantity: 1,
//         index: 3,
//     },
//     {
//         foodlistID: 2, // FK
//         foodID: 7, // FK
//         quantity: 1,
//         index: 4,
//     },
//     {
//         foodlistID: 2, // FK
//         foodID: 8, // FK
//         quantity: 1,
//         index: 5,
//     },
//     {
//         foodlistID: 2, // FK
//         foodID: 9, // FK
//         quantity: 1,
//         index: 6,
//     },
//     {
//         foodlistID: 2, // FK
//         foodID: 10, // FK
//         quantity: 1,
//         index: 7,
//     },
//     {
//         foodlistID: 2, // FK
//         foodID: 11, // FK
//         quantity: 1,
//         index: 8,
//     },
//     {
//         foodlistID: 2, // FK
//         foodID: 12, // FK
//         quantity: 1,
//         index: 9,
//     },
//     {
//         foodlistID: 2, // FK
//         foodID: 13, // FK
//         quantity: 1,
//         index: 10,
//     },
//     {
//         foodlistID: 2, // FK
//         foodID: 14, // FK
//         quantity: 1,
//         index: 11,
//     },
//     {
//         foodlistID: 2, // FK
//         foodID: 15, // FK
//         quantity: 1,
//         index: 12,
//     },
//     {
//         foodlistID: 2, // FK
//         foodID: 16, // FK
//         quantity: 1,
//         index: 13,
//     },
//     {
//         foodlistID: 2, // FK
//         foodID: 17, // FK
//         quantity: 1,
//         index: 14,
//     },
//     {
//         foodlistID: 2, // FK
//         foodID: 18, // FK
//         quantity: 1,
//         index: 15,
//     },
// ];

export const splashMessages: string[] = [
    'Getting ready...',
    'Anytime now...',
    'Last touches...',
    'Not to worry, everything is fine',
    'hmm......',
    'So... great weather today huh?',
    'Please give it a moment!',
    'Probably too early 😅',
    'Waking it up ~',
    'I think...',
    'Should we come back another day?',
    'Maybe some other time, sorry :(',
];

export const DAYS: string[] = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];

export const TIMINGS: string[] = ['12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00'];
