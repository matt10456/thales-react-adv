import { useTranslation } from "react-i18next"
import i18n from "./i18n"

const LanguageSwitcher = () => {
  const handleChangeLanguage = (lang: string) => {
    i18n.changeLanguage(lang)
  }
  return (
    <>
      <button onClick={() => handleChangeLanguage('en')}>EN</button>
      <button onClick={() => handleChangeLanguage('fr')}>FR</button>
      <button onClick={() => handleChangeLanguage('it')}>IT</button>
    </>
  )
}

const DemoI18n = () => {
  const { t } = useTranslation();
  return (
    <>
      <LanguageSwitcher />
      <h2>{t('react lover')}</h2>
    </>  
  )
}

export default DemoI18n