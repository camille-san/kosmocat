import i18n from "@/i18n"
import {nextTick} from "vue";

const Translation = {

    get currentLocale() {
        return i18n.global.locale.value
    },

    set currentLocale(newLocale) {
        i18n.global.locale.value = newLocale
    },

    async switchLanguage(newLocale) {
        await Translation.loadLocaleMessages(newLocale)
        Translation.currentLocale = newLocale
        document.querySelector("html").setAttribute("lang", newLocale)
        localStorage.setItem("user-locale", newLocale)
    },

    async loadLocaleMessages(locale) {
        if (!i18n.global.availableLocales.includes(locale)) {
            const messages = await import(`@/i18n/locales/${locale}.json`)
            i18n.global.setLocaleMessage(locale, messages.default)
        }

        return nextTick()
    },
}

export default Translation