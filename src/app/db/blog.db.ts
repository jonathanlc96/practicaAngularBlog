import { ICategory } from './../interfaces/icategory.interface';
import { IPost } from "../interfaces/ipost.interface";

export const CATEGORIES: ICategory[] = [
    {
        idC: 1,
        titleC: "Playa"
    },
    {
        idC: 2,
        titleC: "Montaña"
    },
    {
        idC: 3,
        titleC: "Ciudad"
    },
    {
        idC: 4,
        titleC: "Rural"
    },
    {
        idC: 5,
        titleC: "Festivales"
    }
]

export const POSTS: IPost[] = [
    {
        id: 1,
        title: "First Post",
        text: "This is the text of the first post.",
        author: "Author One",
        image: "https://img.freepik.com/foto-gratis/viaje-aventura-equipaje_23-2149153255.jpg",
        date: '2023-01-01',
        category: { idC: 1, titleC: "Playa" }
    },
    {
        id: 2,
        title: "Second Post",
        text: "This is the text of the second post.",
        author: "Author Two",
        image: "https://img.freepik.com/foto-gratis/viaje-aventura-equipaje_23-2149153255.jpg",
        date: '2023-02-01',
        category: { idC: 1, titleC: "Playa" }
    },
    {
        id: 3,
        title: "Third Post",
        text: "This is the text of the third post.",
        author: "Author Three",
        image: "https://img.freepik.com/foto-gratis/viaje-aventura-equipaje_23-2149153255.jpg",
        date: '2023-03-01',
        category: { idC: 2, titleC: "Montaña" }
    },
    {
        id: 4,
        title: "Fourth Post",
        text: "This is the text of the fourth post.",
        author: "Author Four",
        image: "https://img.freepik.com/foto-gratis/viaje-aventura-equipaje_23-2149153255.jpg",
        date: '2023/04/01',
        category: { idC: 2, titleC: "Montaña" }
    },
    {
        id: 5,
        title: "Fifth Post",
        text: "This is the text of the fifth post.",
        author: "Author Five",
        image: "https://img.freepik.com/foto-gratis/viaje-aventura-equipaje_23-2149153255.jpg",
        date: '2023-05-01',
        category: { idC: 3, titleC: "Ciudad" }
    },

]

