/* LIBRARY */
import I18n from "i18n-js";
import LocalizedStrings from "react-localization";

import en from "./locales/en";
import vi from "./locales/vi";

let locales = new LocalizedStrings();

if (Array.isArray(locales)) {
  I18n.locale = locales.setLanguage(locales);
}

I18n.fallbacks = true;
I18n.translations = {
  vi,
  en,
};

export default I18n;
