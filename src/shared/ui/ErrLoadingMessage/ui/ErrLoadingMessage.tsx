import { useTranslation } from "react-i18next";

const ErrLoadingMessage = () => {
  const { t } = useTranslation();

  return <p className="text-center text-red-500">{t("ошибка_при_загрузке")}</p>;
};

export default ErrLoadingMessage;
