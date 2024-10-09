//import Image1 from '../../assets/Erasmus_Hadebe.jpg'
//import Image2 from '../../assets/burger2.jpg'
//import Image3 from '../../assets/bluecar.jpg'
//import Image4 from '../../assets/newspapers.jpg'
//import Image5 from '../../assets/medical1.jpg'
//import Image6 from '../../assets/jeans.jpg'
//import Image7 from '../../assets/tv3.jpg'
import Image8 from '../../assets/camera1.jpg'
//import Image9 from '../../assets/project9.jpg'

const data = [
    {
        id: 1,
        category: 'Angular',
        frontTitle: "Faster Food",
        image: "https://media1.giphy.com/media/3o7btUDtnx3gTwIlmo/giphy.webp?cid=ecf05e475ksfdza4evmgtx35c9i5xp9sf1gz6xwxno71odql&ep=v1_gifs_search&rid=giphy.webp&ct=g",
        title: "Project Title One (UIUX)",
        desc: "Provident similique accusantium nemo autem. Veritatis obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam nihil, eveniet aliquid culpa officia aut!",
        demo: 'http://egatortutorials.com',
        github: 'https://github.com/egattor'
    },
    {
        id: 2,
        category: 'React',
        frontTitle: "Hot Pot",
        image: "https://media.giphy.com/media/10SvWCbt1ytWCc/giphy.gif",
        title: "Project Title Two (Frontend)",
        desc: "Provident similique accusantium nemo autem. Veritatis obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam nihil, eveniet aliquid culpa officia aut!",
        demo: 'http://egatortutorials.com',
        github: 'https://github.com/egattor'
    },
    {
        id: 3,
        category: 'React',
        frontTitle: "Car Rent",
        image: "https://media3.giphy.com/media/ynn7Z9nOxTJRu/giphy.webp?cid=ecf05e47kedvjsdhqqhzw9fhyqfimzjl4kvjrsgus5ekccsg&ep=v1_gifs_related&rid=giphy.webp&ct=g",
        title: "Project Title Three (Frontend)",
        desc: "Provident similique accusantium nemo autem. Veritatis obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam nihil, eveniet aliquid culpa officia aut!",
        demo: 'http://egatortutorials.com',
        github: 'https://github.com/egattor'
    },
    {
        id: 4,
        category: 'Angular',
        frontTitle: "This frot",
        image: "https://media4.giphy.com/media/26n6YbzFnQfxTWD0A/giphy.webp?cid=ecf05e47vy9by2sycxojvtf6ydngiiwhdhd5hxsm2mct6ep1&ep=v1_gifs_related&rid=giphy.webp&ct=g",
        title: "Project Title Four (UIUX)",
        desc: "Provident similique accusantium nemo autem. Veritatis obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam nihil, eveniet aliquid culpa officia aut!",
        demo: 'http://egatortutorials.com',
        github: 'https://github.com/egattor'
    },
    {
        id: 5,
        category: 'Angular',
        frontTitle: "The Newspaper",
        image: "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExdG1uZDJmNjY4OXkxZGNtNzBnZGltZXliZ3c0azltZnZ1cDJrbWVweSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/lXiRLb0xFzmreM8k8/giphy.webp",
        title: "Project Title Five (UIUX)",
        desc: "Provident similique accusantium nemo autem. Veritatis obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam nihil, eveniet aliquid culpa officia aut! ",
        demo: 'http://egatortutorials.com',
        github: 'https://github.com/egattor'
    },
    {
        id: 6,
        category: 'React',
        frontTitle: "Crown Clothing",
        image: "https://media0.giphy.com/media/vlYZYUxO3Pt92WEeGw/giphy.webp?cid=ecf05e475wlxp9mgk0obct2wasgts5550fqkbpzjsfcyzz75&ep=v1_gifs_search&rid=giphy.webp&ct=g",
        title: "Project Title Six (Frontend)",
        desc: "Provident similique accusantium nemo autem. Veritatis obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam nihil, eveniet aliquid culpa officia aut!",
        demo: 'http://egatortutorials.com',
        github: 'https://github.com/egattor'
    },
    {
        id: 7,
        category: 'React',
        frontTitle: "This frot",
        image: "https://media3.giphy.com/media/h3pIXYEp3LCDr1wG3r/giphy.webp?cid=790b7611wmdkx2v3cqk4v31st0v74cy66x124olgbbbibc00&ep=v1_gifs_search&rid=giphy.webp&ct=g",
        title: "Project Title Seven (Frontend)",
        desc: "Provident similique accusantium nemo autem. Veritatis obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam nihil, eveniet aliquid culpa officia aut!",
        demo: 'http://egatortutorials.com',
        github: 'https://github.com/egattor'
    },
    {
        id: 8,
        category: '.Net Core',
        frontTitle: "Cyber TV",
        image: "https://media1.giphy.com/media/3o7ZerwmoQUdMdPE7S/giphy.webp?cid=ecf05e47z7p8zed75ngksmw59xx3w6es1rynw85z18pmd2xq&ep=v1_gifs_search&rid=giphy.webp&ct=g",
        title: "Project Title Eight (Backend)",
        desc: "Provident similique accusantium nemo autem. Veritatis obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam nihil, eveniet aliquid culpa officia aut!",
        demo: 'http://egatortutorials.com',
        github: 'https://github.com/egattor'
    },
    {
        id: 8,
        category: 'Vue',
        frontTitle: "Imaginary",
        image: "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExdzI0Yndvc2FvcXN2ajJuZmR5a2djNmhhOGV1MmwzYjh2ajFra2JwaSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/7LLviNCYAmMWA/giphy.webp",
        title: "Project Title Eight (Backend)",
        desc: "Provident similique accusantium nemo autem. Veritatis obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam nihil, eveniet aliquid culpa officia aut!",
        demo: 'http://egatortutorials.com',
        github: 'https://github.com/egattor'
    },
    {
        id: 8,
        category: 'Vue',
        frontTitle: "SnapGram",
        image: "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExeGx5dWgwc2xkdHZ2MXE5cG8xNHdzOXFhcmR3dXBnNXNyZ2tsNTd4ayZlcD12MV9naWZzX3NlYXJjaCZjdD1n/CIyXvQgk7yHwN1p4Gq/giphy.webp",
        title: "Project Title Eight (Backend)",
        desc: "Provident similique accusantium nemo autem. Veritatis obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam nihil, eveniet aliquid culpa officia aut!",
        demo: 'http://egatortutorials.com',
        github: 'https://github.com/egattor'
    },
    {
        id: 8,
        category: 'Vue',
        frontTitle: "Chat-A-Lot",
        image: "https://media2.giphy.com/media/l0JM83bF1jbRsTnNu/giphy.webp?cid=ecf05e47m9fkpk2vsdb0ng60a00bto1e6utzv0l742rdumai&ep=v1_gifs_search&rid=giphy.webp&ct=g",
        title: "Project Title Eight (Backend)",
        desc: "Provident similique accusantium nemo autem. Veritatis obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam nihil, eveniet aliquid culpa officia aut!",
        demo: 'http://egatortutorials.com',
        github: 'https://github.com/egattor'
    },
    {
        id: 9,
        category: 'React',
        frontTitle: "Hotel Book",
        image: "https://media2.giphy.com/media/46hpy8xB3MiHfruixn/200w.webp?cid=ecf05e47sonbi3kyu8p3ujwgge93d58w38ril499kc2ojh0h&ep=v1_gifs_related&rid=200w.webp&ct=g",
        title: "Project Title Nine (Frontend)",
        desc: "Provident similique accusantium nemo autem. Veritatis obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam nihil, eveniet aliquid culpa officia aut!",
        demo: 'http://egatortutorials.com',
        github: 'https://github.com/egattor'
    }
]


export default data

//https://media2.giphy.com/media/l0JM83bF1jbRsTnNu/giphy.webp?cid=ecf05e47m9fkpk2vsdb0ng60a00bto1e6utzv0l742rdumai&ep=v1_gifs_search&rid=giphy.webp&ct=g