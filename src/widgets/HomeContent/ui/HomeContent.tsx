import { useTranslation } from "react-i18next";

const HomeContent = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen px-4 py-8">
      <h1 className="text-2xl font-bold mb-6 text-center">
        {t("домашняя_страница")}
      </h1>
    </div>
  );
};

export default HomeContent;
