import { useTranslation } from "react-i18next";

const LangSwitcher = () => {
  const { i18n } = useTranslation();

  const toggleLanguage = async () => {
    const newLang = i18n.language === "ru" ? "en" : "ru";
    await i18n.changeLanguage(newLang);
    localStorage.setItem("lang", newLang);
  };

  return (
    <div>
      <button
        className={
          "bg-button hover:bg-button-hover transition-colors text-white px-4 py-2 rounded"
        }
        onClick={toggleLanguage}
      >
        {i18n.language === "ru" ? "Ru" : "En"}
      </button>
    </div>
  );
};

export default LangSwitcher;
