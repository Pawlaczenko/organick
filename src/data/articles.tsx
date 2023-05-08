export interface IArticle {
    id: number,
    author: string,
    title: string,
    introduction: string,
    thumbnail: string,
    date: Date
}

export const NEWS_ARTICLES : IArticle[] = [
    {
        id: 1,
        author: "Rachi Card",
        title: "The Benefits of Vitamin D & How to Get It",
        introduction: "Simply dummy text of the printing and typesetting industry. Lorem Ipsum",
        thumbnail: "https://i.ibb.co/fqv6QKx/Photo.jpg",
        date: new Date(25,11,2023)
    },
    {
        id: 2,
        author: "Rachi Card",
        title: "Our Favourite Summertime Tommeto",
        introduction: "Simply dummy text of the printing and typesetting industry. Lorem Ipsum",
        thumbnail: "https://i.ibb.co/smVf3Zc/Photo-1.jpg",
        date: new Date(25,11,2023)
    },
]

/*
<a href="https://ibb.co/4KdvJDV"><img src="https://i.ibb.co/fqv6QKx/Photo.jpg" alt="Photo" border="0"></a>
<a href="https://ibb.co/0DG7Jx1"><img src="https://i.ibb.co/smVf3Zc/Photo-1.jpg" alt="Photo-1" border="0"></a>
<a href="https://ibb.co/VWYSMmW"><img src="https://i.ibb.co/tMpsYXM/Photo-2.jpg" alt="Photo-2" border="0"></a>
<a href="https://ibb.co/gdh3ykS"><img src="https://i.ibb.co/5kw6Tbr/Photo-3.jpg" alt="Photo-3" border="0"></a>
<a href="https://ibb.co/X7ZfkpJ"><img src="https://i.ibb.co/Cb5psv0/Photo-4.jpg" alt="Photo-4" border="0"></a>
<a href="https://ibb.co/RSzyxKw"><img src="https://i.ibb.co/qnk5t8Q/Photo-5.jpg" alt="Photo-5" border="0"></a>
*/