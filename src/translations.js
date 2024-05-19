// translation.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
    resources: {
        en: {
            translation: {
                home: "Home",
                about: "About",
                welcome: "Welcome!",
                portrait: "Portraits",
                mariage: "Weddings",
                paysage: "Landscapes",
                immobilier: "Real Estate",
                metaDescription:
                    "Discover exceptional photographic. Explore photo galleries of captivating photos and immerse yourself in the world of photography.",
                settingsButton: "Settings",
                changeLanguage: "Change language",
                changeMode: "Change mode",
                showMore: "Show More",
                menu: {
                    portfolio: "Portfolio",
                    contact: "Contact",
                    instagramLandscape: "Landscape",
                    instagramPortrait: "Portrait",
                },
                contact: {
                    title: "Contact",
                    field: {
                        title: "Write to me!",
                        nameAndLastName: "Your first and last name",
                        email: "Your email",
                        text: "Your message",
                        required: "Required field",
                        invalidEmail: "Invalid email address",
                        sendSucces: "Your message has been sent !",
                        submit: "Send",
                        close: "Close",
                    },
                    intro: [
                        {
                            element: "Born in Bordeaux, France.",
                        },
                        {
                            element:
                                "I spent my childhood surrounded by the sound of my father's camera shutter.",
                        },
                        {
                            element:
                                "It was at the age of 20, with my first camera, that I discovered a passion for photography. Today, I share my photographs with you, fragments of emotions and reflections of who I am and what I love.",
                        },
                        {
                            element:
                                "Feel free to contact me to discuss potential collaborations!",
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
                            num: 90,
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
                home: "Accueil",
                about: "À propos",
                welcome: "Bienvenue !",
                portrait: "Portraits",
                mariage: "Mariages",
                paysage: "Paysages",
                immobilier: "Immobilier",
                metaDescription:
                    "Découvrez des photographies exceptionnelles. Explorez des galeries de photos captivantes et plongez-vous dans le monde de la photographie.",
                settingsButton: "Réglages",
                changeLanguage: "Changer de langue",
                changeMode: "Change le mode",
                showMore: "Voir plus",
                menu: {
                    portfolio: "Portfolio",
                    contact: "Contact",
                    instagramLandscape: "Paysage",
                    instagramPortrait: "Portrait",
                },
                contact: {
                    title: "Contact",
                    field: {
                        title: "Écrivez-moi !",
                        nameAndLastName: "Votre prénom et nom de famille",
                        email: "Votre adresse e-mail",
                        text: "Votre message",
                        required: "Champ requis",
                        invalidEmail: "Adresse e-mail invalide",
                        sendSucces: "Votre message a été envoyé !",
                        submit: "Envoyer",
                        close: "Fermer",
                    },
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
                            num: 90,
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
