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
        title: "Londres",
        text: "Londres es una ciudad que nos encanta. Hemos estado 4 veces y nunca nos cansamos de ir. Siempre es un buen plan, sea tu primera vez o no. Nos encantan sus contrastes, sus fachadas, sus barrios, sus mercados, su oferta gastronómica y de ocio, su diversidad… Sin duda de nuestras ciudades favoritas.",
        author: "Jaime González",
        image: "https://www.universal-assistance.com/uablog/wp-content/uploads/2022/12/londres-general-opt.png",
        date: '2023-11-24',
        category: { idC: 3, titleC: "Ciudad" }
    },
    {
        id: 2,
        title: "Bali",
        text: "Una de las mejores experiencias con unas vistas increibles",
        author: "María García",
        image: "https://digital.ihg.com/is/image/ihg/intercontinental-bali-9719167392-2x1",
        date: '2024-08-20',
        category: { idC: 1, titleC: "Playa" }
    },
    {
        id: 3,
        title: "Asturias",
        text: "Un paraíso verde donde disfrutas de la naturaleza",
        author: "Luis Aguilar",
        image: "https://www.blauhotels.com/media/uploads/cms_apps/imagenes/Asturias.png?q=pr:sharp/rs:fill/w:900/h:500/f:jpg",
        date: '2025-01-16',
        category: { idC: 2, titleC: "Montaña" }
    },
    {
        id: 4,
        title: "Tomorrowland",
        text: "Fue un día de reconocimiento, previo a algo, que a pesar de haber ya sucedido en el primer fin de semana, sería, como dijimos nada más empezar, histórico para nosotros.",
        author: "Esther González",
        image: "https://www.bloomberglinea.com/resizer/v2/GPKEAQLZZJBOTHWTOZPJIW37NM.jpg?auth=4468273b5e37a29db5c00d20c7f6a1d268aab03f3e56bc601b1181c02bcc9fea&width=800&height=526&quality=80&smart=true",
        date: '2024/05/21',
        category: { idC: 5, titleC: "Festivales" }
    },
    {
        id: 5,
        title: "Sierra de Guadarrama",
        text: "El mayor interés ornitológico de la Sierra de Guadarrama reside en las comunidades de aves ligadas al bosque, matorral y pastizales mediterráneos, sobresaliendo claramente las poblaciones nidificantes de águila imperial ibérica, cigüeña negra y buitre negro, las tres en peligro de extinción.",
        author: "Juan Pérez",
        image: "https://www.parquenacionalsierraguadarrama.es/images/categories/cat_info_practica.webp",
        date: '2023-05-27',
        category: { idC: 4, titleC: "Rural" }
    },

]

