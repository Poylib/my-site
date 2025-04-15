import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const LANGUAGES = {
  ko: '한국어',
  en: 'English',
  ja: '日本語',
} as const;

export type Language = keyof typeof LANGUAGES;

export function getCurrentLanguage(pathname: string): Language {
  const firstSegment = pathname.split('/')[1];
  return firstSegment === 'en' || firstSegment === 'ja' ? firstSegment : 'ko';
}

export function getLocalizedPath(path: string, lang: Language): string {
  // 현재 경로에서 언어 코드 제거
  const pathWithoutLang = path.replace(/^\/(en|ja|ko)\//, '/');

  // 모든 언어에 대해 언어 코드를 포함
  return `/${lang}${pathWithoutLang}`;
}
