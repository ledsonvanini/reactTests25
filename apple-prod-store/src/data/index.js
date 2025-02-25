export const navItems = [
    {
        label: 'Home',
        icon: 'bx bx-home-alt-2',
        activeIcon: 'bx bxs-folder-open',
        inactiveIcon: 'bx bxs-folder',
    },
    {
        label: 'iPhone',
        icon: 'bx bx-mobile-alt',
        activeIcon: 'bx bxs-folder-open',
        inactiveIcon: 'bx bxs-folder',
    },

    {
        label: 'MacBook',
        icon: 'bx bx-laptop',
        activeIcon: 'bx bxs-folder-open',
        inactiveIcon: 'bx bxs-folder',
    }
    ,
    {
        label: 'Watch',
        icon: 'bx bxs-watch-alt',
        activeIcon: 'bx bxs-folder-open',
        inactiveIcon: 'bx bxs-folder',
    },
    {
        label: 'iMac',
        icon: 'bx bx-desktop',
        activeIcon: 'bx bxs-folder-open',
        inactiveIcon: 'bx bxs-folder',
    }
]

export const items = [
    { label: 'iPhone', img: 'images/iphone.jpg', pageIndex: 1 },
    { label: 'MacBook', img: 'images/macbook.jpg', pageIndex: 2 },
    { label: 'Smart Watch', img: 'images/watch.jpg', pageIndex: 3 },
    { label: 'iMac', img: 'images/imac.png', pageIndex: 4 },
]

export const iphoneModels = [
    {
        name: 'iPhone 16 Pro Max',
        description: 'The ultimate iPhone',
        price: 'From $1,009',
        img: 'images/iphone16-pro-max.png',
    },
    {
        name: 'iPhone 16',
        description: 'As amazing as ever',
        price: 'From $799',
        img: 'images/iphone16.png',
    }
]

export const macBookModels = [
    {
        name: 'M2',
        price: 'From $999',
        img: 'images/macbook-air-midnight-m2.jpg',
        colors: [
            { label: 'Space gray', bg: '#b2b5b8', img: 'images/macbook-air-spacegray-m2.jpg' },
            { label: 'Gold', bg: '#f0e0d3', img: 'images/macbook-air-gold-m2.jpg' },
            { label: 'Silver', bg: '#e0e2e1', img: 'images/macbook-air-silver-m2.jpg' },
        ],
        specs: ['8-Core CPU', '8-Core GPU', '16GB Unified Memory', '256GB SSD Storage'],
        icon: 'images/apple-m2-icon.png'
    },
    {
        name: 'M3',
        price: 'From $1,299',
        img: 'images/macbook-air-space-gray-m3.jpg',
        colors: [
            { label: 'Midnight', bg: '#2e3641', img: 'images/macbook-air-midnight-m3.jpg' },
            { label: 'Starlight', bg: '#f0e5d3', img: 'images/macbook-air-starlight-m3.jpg' },
            { label: 'Space gray', bg: '#7d7e80', img: 'images/macbook-air-spacegray-m3.jpg' },
            { label: 'Silver', bg: '#e3e4e6', img: 'images/macbook-air-silver-m3.jpg' },
        ],
        specs: ['8-Core CPU', '10-Core GPU', '24GB Unified Memory', '51GB SSD Storage'],
        icon: 'images/apple-m3-icon.png'
    }
]

export const watchModels = [
    {
        imgs: ['images/watch10-side.png', 'images/watch10.png'],
        name: 'Apple Watch Series 10',
        price: 'From $399',
        desc: ['45mm or 41m case size', '50m water resistent', 'Swinproof'],
    },
    {
        imgs: ['images/watch-hermes-side.png', 'images/watch-hermes.png'],
        name: 'Apple Watch Hermes',
        price: 'From $1,149',
        desc: ['44mm or 40m case size', '50m water resistent', 'Swinproof'],
    },
    {
        imgs: ['images/watch-se-side.png', 'images/watch-se.png'],
        name: 'Apple Watch Series 10',
        price: 'From $249',
        desc: ['44mm case size', '10m water resistent', 'Swinproof'],
    },
]



