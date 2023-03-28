import {createI18n} from "vue-i18n";
import en from "./locales/en.json" // <--- add this
import fr from "./locales/fr.json" // <--- add this

export default createI18n({
    //locale: import.meta.env.VITE_DEFAULT_LOCALE, // <--- 1
    locale: 'en',
    //fallbackLocale: import.meta.env.VITE_FALLBACK_LOCALE, // <--- 2
    fallbackLocale: 'fr',
    legacy: false,
    globalInjection: true,
    messages: {
        en,
        fr
    },
})