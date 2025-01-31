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
        image: "image1.jpg",
        date: new Date('2023-01-01'),
        category: { idC: 1, titleC: "Playa" }
    },
    {
        id: 2,
        title: "Second Post",
        text: "This is the text of the second post.",
        author: "Author Two",
        image: "image2.jpg",
        date: new Date('2023-02-01'),
        category: { idC: 1, titleC: "Playa" }
    },
    {
        id: 3,
        title: "Third Post",
        text: "This is the text of the third post.",
        author: "Author Three",
        image: "image3.jpg",
        date: new Date('2023-03-01'),
        category: { idC: 2, titleC: "Montaña" }
    },
    {
        id: 4,
        title: "Fourth Post",
        text: "This is the text of the fourth post.",
        author: "Author Four",
        image: "image4.jpg",
        date: new Date('2023-04-01'),
        category: { idC: 2, titleC: "Montaña" }
    },
    {
        id: 5,
        title: "Fifth Post",
        text: "This is the text of the fifth post.",
        author: "Author Five",
        image: "image5.jpg",
        date: new Date('2023-05-01'),
        category: { idC: 3, titleC: "Ciudad" }
    },
    {
        id: 6,
        title: "Sixth Post",
        text: "This is the text of the sixth post.",
        author: "Author Six",
        image: "image6.jpg",
        date: new Date('2023-06-01'),
        category: { idC: 3, titleC: "Ciudad" }
    },
    {
        id: 7,
        title: "Seventh Post",
        text: "This is the text of the seventh post.",
        author: "Author Seven",
        image: "image7.jpg",
        date: new Date('2023-07-01'),
        category: { idC: 4, titleC: "Rural" }
    },
    {
        id: 8,
        title: "Eighth Post",
        text: "This is the text of the eighth post.",
        author: "Author Eight",
        image: "image8.jpg",
        date: new Date('2023-08-01'),
        category: { idC: 4, titleC: "Rural" }
    },
    {
        id: 9,
        title: "Ninth Post",
        text: "This is the text of the ninth post.",
        author: "Author Nine",
        image: "image9.jpg",
        date: new Date('2023-09-01'),
        category: { idC: 5, titleC: "Festivales" }
    },
    {
        id: 10,
        title: "Tenth Post",
        text: "This is the text of the tenth post.",
        author: "Author Ten",
        image: "image10.jpg",
        date: new Date('2023-10-01'),
        category: { idC: 5, titleC: "Festivales" }
    }
]

