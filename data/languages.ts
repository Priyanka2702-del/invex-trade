import { Language } from "@/types/nav";

export const languages: Language[] = [
  { code: "EN", name: "English", flag: "🇬🇧", flagCode: "gb" },
  { code: "HI", name: "हिंदी", flag: "🇮🇳", flagCode: "in" },
  { code: "FR", name: "Français", flag: "🇫🇷", flagCode: "fr" },
  { code: "DE", name: "Deutsch", flag: "🇩🇪", flagCode: "de" },
  { code: "ES", name: "Español", flag: "🇪🇸", flagCode: "es" },
  { code: "PT", name: "Português", flag: "🇵🇹", flagCode: "pt" },
  { code: "IT", name: "Italiano", flag: "🇮🇹", flagCode: "it" },
  { code: "NL", name: "Nederlands", flag: "🇳🇱", flagCode: "nl" },
  { code: "TR", name: "Türkçe", flag: "🇹🇷", flagCode: "tr" },
  { code: "AR", name: "العربية", flag: "🇸🇦", flagCode: "sa" },
  { code: "VI", name: "Tiếng Việt", flag: "🇻🇳", flagCode: "vn" },
  { code: "RU", name: "Русский", flag: "🇷🇺", flagCode: "ru" },
  { code: "ZH-CN", name: "简体中文", flag: "🇨🇳", flagCode: "cn" },
  { code: "ZH-TW", name: "繁體中文", flag: "🇹🇼", flagCode: "tw" },
  { code: "KO", name: "한국어", flag: "🇰🇷", flagCode: "kr" },
  { code: "JA", name: "日本語", flag: "🇯🇵", flagCode: "jp" },
  { code: "ID", name: "Bahasa Indonesia", flag: "🇮🇩", flagCode: "id" },
  { code: "TH", name: "ไทย", flag: "🇹🇭", flagCode: "th" },
  { code: "PL", name: "Polski", flag: "🇵🇱", flagCode: "pl" },
  { code: "MS", name: "Bahasa Melayu", flag: "🇲🇾", flagCode: "my" },
];

export const defaultLanguage = languages[0];