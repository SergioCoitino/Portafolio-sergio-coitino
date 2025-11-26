import es from "./es.json";
import pt from "./pt.json";

const translations = { pt, es };

export function getTranslation(lang = "pt") {
  return translations[lang] || translations["pt"];
}
