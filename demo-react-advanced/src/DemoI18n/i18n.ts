import i18n from "i18next"
import { initReactI18next } from "react-i18next"
import translationIT from './locales/it/translationIT.json'

// contient les dictionaires codés en dur ou importés (ici, fichier json pour l'italien)
const resources = {
  en: {
    translation: {
      "react lover": "I like React a lot"
    }
  },
  fr: {
    translation: {
      "react lover": "J'aime beaucoup React"
    }
  },
  it: {
    translation: translationIT
  },
}

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "en",
    interpolation: { escapeValue: false }
  })

  export default i18n