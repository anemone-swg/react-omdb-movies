import { Suspense, useEffect } from "react";
import { I18nextProvider } from "react-i18next";
import type { Decorator } from "@storybook/react";
import i18n from "@/shared/config/i18n/i18n";
import { Loader } from "@/shared/ui/Loader";

export const I18nDecorator: Decorator = (Story, context) => {
  const { locale } = context.globals;

  useEffect(() => {
    i18n.changeLanguage(locale);
  }, [locale]);

  return (
    <Suspense fallback={<Loader />}>
      <I18nextProvider i18n={i18n}>
        <Story />
      </I18nextProvider>
    </Suspense>
  );
};
