// translation.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
    resources: {
        en: {
            translation: {
                hello: "Hello",
                home: "Home",
                about: "About",
                welcome: "Welcome!",
                contact: "Contact",
                portrait: "Portraits",
                mariage: "Weddings",
                paysage: "Landscapes",
                immobilier: "Real Estate",
                nom_prenom: "Your name and surname",
                email: "Your email",
                message: "Your message",
                send: "Send",
                paragraph1: "Born in Bordeaux, France,",
                paragraph2:
                    "I spent my childhood surrounded by the sound of my father's camera shutter.",
                paragraph3:
                    "It was at the age of 20, with my first camera, that I discovered a passion for photography. Today, I share my photographs with you, fragments of emotions and reflections of who I am and what I love.",
                paragraph4:
                    "Feel free to contact me to discuss potential collaborations!",
                contactText: {
                    intro: [
                        {
                            element: "Né à Bordeaux en France.",
                        },
                        {
                            element:
                                "j’ai passé mon enfance bercé par le bruit des déclenchements d’appareil photo de mon père.",
                        },
                        {
                            element:
                                "C’est à l’âge de 20 ans et avec mon premier appareil photo que je me suis découvert une passion pour la photographie. Aujourd’hui, je partage mes photographies avec vous, fragments d’émotions et reflet de ce que je suis, de ce que j’aime.",
                        },
                        {
                            element:
                                "N’hésitez pas à me contacter pour discuter ensemble d’une potentielle collaboration !",
                        },
                        {
                            element: "Nicolas",
                        },
                    ],
                },
                portfolio: {
                    title: "Portfolio",
                    cards: [
                        {
                            title: "Portrait",
                            imgSrc: "Portfolio01",
                            folder: "portraits",
                            num: 37,
                        },
                        {
                            title: "Weddings",
                            imgSrc: "Portfolio02",
                            folder: "mariages",
                            num: 10,
                        },
                        {
                            title: "Landscapes",
                            imgSrc: "Portfolio03",
                            folder: "paysages",
                            num: 89,
                        },
                        {
                            title: "Real Estate",
                            imgSrc: "Portfolio04",
                            folder: "immobilier",
                            num: 6,
                        },
                    ],
                },
            },
        },
        fr: {
            translation: {
                hello: "Bonjour",
                home: "Accueil",
                about: "À propos",
                welcome: "Bienvenue !",
                contact: "Contact",
                portrait: "Portraits",
                mariage: "Mariages",
                paysage: "Paysages",
                immobilier: "Immobilier",
                nom_prenom: "Votre nom et prénom",
                email: "Votre email",
                message: "Votre message",
                send: "Envoyer",
                paragraph1: "Né à Bordeaux en France,",
                paragraph2:
                    "j’ai passé mon enfance bercé par le bruit des déclenchements d’appareil photo de mon père.",
                paragraph3:
                    "C’est à l’âge de 20 ans, avec mon premier appareil photo, que j’ai découvert ma passion pour la photographie. Aujourd’hui, je partage mes photographies avec vous, fragments d’émotions et reflets de ce que je suis et de ce que j’aime.",
                paragraph4:
                    "N’hésitez pas à me contacter pour discuter d’une éventuelle collaboration !",
                contactText: {
                    intro: [
                        {
                            element: "Né à Bordeaux en France.",
                        },
                        {
                            element:
                                "j’ai passé mon enfance bercé par le bruit des déclenchements d’appareil photo de mon père.",
                        },
                        {
                            element:
                                "C’est à l’âge de 20 ans et avec mon premier appareil photo que je me suis découvert une passion pour la photographie. Aujourd’hui, je partage mes photographies avec vous, fragments d’émotions et reflet de ce que je suis, de ce que j’aime.",
                        },
                        {
                            element:
                                "N’hésitez pas à me contacter pour discuter ensemble d’une potentielle collaboration !",
                        },
                        {
                            element: "Nicolas",
                        },
                    ],
                },
                portfolio: {
                    title: "Portfolio",
                    cards: [
                        {
                            title: "Portrait",
                            imgSrc: "Portfolio01",
                            folder: "portraits",
                            num: 37,
                        },
                        {
                            title: "Mariages",
                            imgSrc: "Portfolio02",
                            folder: "mariages",
                            num: 10,
                        },
                        {
                            title: "Paysages",
                            imgSrc: "Portfolio03",
                            folder: "paysages",
                            num: 89,
                        },
                        {
                            title: "Immobilier",
                            imgSrc: "Portfolio04",
                            folder: "immobilier",
                            num: 6,
                        },
                    ],
                },
            },
        },
    },
    fallbackLng: "en",
    lng: "en",
    interpolation: {
        escapeValue: false,
    },
});

export default i18n;
