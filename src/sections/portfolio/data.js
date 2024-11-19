const data = [
    // {
    //     id: 1,
    //     category: 'Angular',
    //     frontTitle: "First Sushi Man",
    //     image: "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExc2hiODVnb2NjODQzMG40dThwMWF0dWpuM3FyZnE3bnUweTJ2a3g4YSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/KmPevfkpkmaoo/giphy.webp",
    //     title: "First Sushi Man",
    //     desc: "Provident similique accusantium nemo autem. Veritatis obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam nihil, eveniet aliquid culpa officia aut!",
    //     demo: 'https://firstsushiman.netlify.app/'
    // },
    {
        id: 1,
        category: 'React',
        frontTitle: "Style King",
        image: "https://media0.giphy.com/media/vlYZYUxO3Pt92WEeGw/giphy.webp?cid=ecf05e475wlxp9mgk0obct2wasgts5550fqkbpzjsfcyzz75&ep=v1_gifs_search&rid=giphy.webp&ct=g",
        title: "Style King",
        desc: "Online clothing store where Firebase was used while React ensured a responsive and interactive UI. The store allows users to browse products, add items to their cart, all within a modern, mobile-friendly interface. ",
        demo: 'https://styleking.netlify.app/'
    },
    {
        id: 2,
        category: '.Net Core',
        frontTitle: "Cyber TV",
        image: "https://media1.giphy.com/media/3o7ZerwmoQUdMdPE7S/giphy.webp?cid=ecf05e47z7p8zed75ngksmw59xx3w6es1rynw85z18pmd2xq&ep=v1_gifs_search&rid=giphy.webp&ct=g",
        title: "Cyber TV",
        desc: "A YouTube clone using React that fetches videos from the YouTube API, allowing users to search, view, and explore videos in a responsive, interactive interface with dynamic video playback.",
        demo: 'https://cyber-tv.netlify.app/'
    },
    // {
    //     id: 2,
    //     category: 'React',
    //     frontTitle: "Hot Pot",
    //     image: "https://media.giphy.com/media/10SvWCbt1ytWCc/giphy.gif",
    //     title: "Project Title Two (Frontend)",
    //     desc: "Provident similique accusantium nemo autem. Veritatis obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam nihil, eveniet aliquid culpa officia aut!",
    //     demo: 'https://freefrontend.com/css-cards/page/5/'
    // },
    {
        id: 3,
        category: 'React',
        frontTitle: "Car Rent",
        image: "https://media3.giphy.com/media/ynn7Z9nOxTJRu/giphy.webp?cid=ecf05e47kedvjsdhqqhzw9fhyqfimzjl4kvjrsgus5ekccsg&ep=v1_gifs_related&rid=giphy.webp&ct=g",
        title: "Car Rent",
        desc: "A car renting website template using React, featuring a responsive interface where users can browse available vehicles, filter by type or price, and book rentals.",
        demo: 'https://carrrent.netlify.app/'
    },
    {
        id: 4,
        category: 'Angular',
        frontTitle: "Storysphere",
        image: "https://media4.giphy.com/media/DPH2d2WQsvTVEDVa2p/giphy.webp?cid=ecf05e475a0ptgqylbeu81cw8onzf5ofulzavd07i6ck4r15&ep=v1_gifs_search&rid=giphy.webp&ct=g",
        title: "Storysphere",
        desc: "A book publishing company website template using Next.js, featuring a modern, responsive layout to showcase the company’s services and contacts, with server-side rendering.",
        demo: 'https://story-sphere-books.vercel.app/'
    },
    // {
    //     id: 5,
    //     category: 'Angular',
    //     frontTitle: "The Newspaper",
    //     image: "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExdG1uZDJmNjY4OXkxZGNtNzBnZGltZXliZ3c0azltZnZ1cDJrbWVweSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/lXiRLb0xFzmreM8k8/giphy.webp",
    //     title: "Project Title Five (UIUX)",
    //     desc: "Provident similique accusantium nemo autem. Veritatis obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam nihil, eveniet aliquid culpa officia aut! ",
    //     demo: 'https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_navbar_hide_scroll'
    // },
    // {
    //     id: 6,
    //     category: 'React',
    //     frontTitle: "Style King",
    //     image: "https://media0.giphy.com/media/vlYZYUxO3Pt92WEeGw/giphy.webp?cid=ecf05e475wlxp9mgk0obct2wasgts5550fqkbpzjsfcyzz75&ep=v1_gifs_search&rid=giphy.webp&ct=g",
    //     title: "Style King",
    //     desc: "Provident similique accusantium nemo autem. Veritatis obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam nihil, eveniet aliquid culpa officia aut!",
    //     demo: 'https://styleking.netlify.app/'
    // },
    {
        id: 7,
        category: 'React',
        frontTitle: "Weather Man",
        image: "https://media0.giphy.com/media/13ZEwDgIZtK1y/giphy.webp?cid=ecf05e471ikz4gklhaer8p7zz4otf5vm26p9cn4aiwl9bt1k&ep=v1_gifs_search&rid=giphy.webp&ct=g",
        title: "Weather Man",
        desc: " A PWA using React that provides real-time weather updates, allowing users to check current conditions, all while offering offline capabilities and a mobile-friendly experience.",
        demo: 'https://weather-mann.netlify.app/'
    },
    // {
    //     id: 8,
    //     category: '.Net Core',
    //     frontTitle: "Cyber TV",
    //     image: "https://media1.giphy.com/media/3o7ZerwmoQUdMdPE7S/giphy.webp?cid=ecf05e47z7p8zed75ngksmw59xx3w6es1rynw85z18pmd2xq&ep=v1_gifs_search&rid=giphy.webp&ct=g",
    //     title: "Cyber TV",
    //     desc: "Provident similique accusantium nemo autem. Veritatis obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam nihil, eveniet aliquid culpa officia aut!",
    //     demo: 'https://cyber-tv.netlify.app/'
    // },
    // {
    //     id: 8,
    //     category: 'Vue',
    //     frontTitle: "Imaginary",
    //     image: "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExdzI0Yndvc2FvcXN2ajJuZmR5a2djNmhhOGV1MmwzYjh2ajFra2JwaSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/7LLviNCYAmMWA/giphy.webp",
    //     title: "Project Title Eight (Backend)",
    //     desc: "Provident similique accusantium nemo autem. Veritatis obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam nihil, eveniet aliquid culpa officia aut!",
    //     demo: 'https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_responsive_iframe_169'
    // },
    // {
    //     id: 8,
    //     category: 'Vue',
    //     frontTitle: "SnapGram",
    //     image: "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExeGx5dWgwc2xkdHZ2MXE5cG8xNHdzOXFhcmR3dXBnNXNyZ2tsNTd4ayZlcD12MV9naWZzX3NlYXJjaCZjdD1n/CIyXvQgk7yHwN1p4Gq/giphy.webp",
    //     title: "Project Title Eight (Backend)",
    //     desc: "Provident similique accusantium nemo autem. Veritatis obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam nihil, eveniet aliquid culpa officia aut!",
    //     demo: 'https://www.pexels.com/search/videos/stars/'
    // },
    // {
    //     id: 8,
    //     category: 'Vue',
    //     frontTitle: "Chat-A-Lot",
    //     image: "https://media2.giphy.com/media/l0JM83bF1jbRsTnNu/giphy.webp?cid=ecf05e47m9fkpk2vsdb0ng60a00bto1e6utzv0l742rdumai&ep=v1_gifs_search&rid=giphy.webp&ct=g",
    //     title: "Project Title Eight (Backend)",
    //     desc: "Provident similique accusantium nemo autem. Veritatis obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam nihil, eveniet aliquid culpa officia aut!",
    //     demo: 'https://getstream.io/chat/docs/sdk/react/release-guides/upgrade-to-v10/#components-removed-from-the-sdk'
    // },
    // {
    //     id: 9,
    //     category: 'React',
    //     frontTitle: "Hotel Book",
    //     image: "https://media2.giphy.com/media/46hpy8xB3MiHfruixn/200w.webp?cid=ecf05e47sonbi3kyu8p3ujwgge93d58w38ril499kc2ojh0h&ep=v1_gifs_related&rid=200w.webp&ct=g",
    //     title: "Project Title Nine (Frontend)",
    //     desc: "Provident similique accusantium nemo autem. Veritatis obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam nihil, eveniet aliquid culpa officia aut!",
    //     demo: 'https://www.pexels.com/search/videos/water/'
    // }
]


export default data
