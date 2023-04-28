type ProductCategory = 'Vegetable' | 'Fresh' | 'Millets' | 'Health' | 'Nuts';

export interface IProduct {
    id: number,
    name: string,
    price: number,
    discount?: number
    rating: number,
    image_path: string,
    category: ProductCategory,
}

export const getProducts = (qnt?: number , category?: ProductCategory) => {
    let res : IProduct[] = [...PRODUCTS];
    if(category){
        res = res.filter(product => product.category === category);
    }
    if(qnt) {
        res = res.slice(0,qnt);
    }
    return res;
}

const PRODUCTS : IProduct[] = [
    {
        id: 1,
        name: "Calabrese Broccoli",
        price: 20,
        discount: 0.35,
        category: "Vegetable",
        rating: 5,
        image_path: "https://i.ibb.co/BgP7NdR/Photo-14.jpg"
    },
    {
        id: 2,
        name: "Banana",
        price: 20,
        discount: 0.4,
        category: "Fresh",
        rating: 5,
        image_path: "https://i.ibb.co/BGzGr6m/Photo-15.jpg"
    },
    {
        id: 3,
        name: "White Nuts",
        price: 23,
        category: "Millets",
        rating: 4,
        image_path: "https://i.ibb.co/Q93DHkH/Photo-16.jpg"
    },
    {
        id: 4,
        name: "Vegan Red Tomato",
        price: 21,
        category: "Vegetable",
        rating: 5,
        image_path: "https://i.ibb.co/mqpjXYn/image-13.jpg"
    },
    {
        id: 5,
        name: "Mung Bean",
        price: 15,
        category: "Health",
        rating: 3,
        image_path: "https://i.ibb.co/41NHN39/image-14.jpg"
    },
    {
        id: 6,
        name: "Brown Hazelnut",
        price: 35,
        category: "Nuts",
        rating: 5,
        image_path: "https://i.ibb.co/WH4Xfk5/Photo-17.jpg"
    },
    {
        id: 7,
        name: "Eggs",
        price: 10,
        category: "Fresh",
        rating: 4,
        image_path: "https://i.ibb.co/SNDHhjz/Photo-18.jpg"
    },
    {
        id: 8,
        name: "Zelco Suji Elaichi Rusk",
        price: 10,
        category: "Fresh",
        rating: 4,
        image_path: "https://i.ibb.co/fxkF4WD/Photo-19.jpg"
    },
    {
        id: 9,
        name: "Red Tomato",
        price: 21,
        category: "Vegetable",
        rating: 5,
        image_path: "https://i.ibb.co/mqpjXYn/image-13.jpg"
    },
    {
        id: 10,
        name: "Red Pepper",
        price: 21,
        category: "Vegetable",
        rating: 5,
        image_path: "https://i.ibb.co/mqpjXYn/image-13.jpg"
    },
]