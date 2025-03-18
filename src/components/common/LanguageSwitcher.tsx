'use client';
import { useRouter } from 'next/navigation';

export const LanguageSwitcher = () => {
  const router = useRouter();
  const languages = [
    { code: 'ko', name: '한국어' },
    { code: 'en', name: 'English' },
    { code: 'ja', name: '日本語' },
  ];

  const handleLanguageChange = (langCode: string) => {
    // TODO: Implement language switching logic
    router.push(`/${langCode}`);
  };

  return (
    <div className="flex gap-2">
      {languages.map((lang) => (
        <button
          key={lang.code}
          onClick={() => handleLanguageChange(lang.code)}
          className="px-2 py-1 text-sm hover:bg-gray-100 rounded"
        >
          {lang.name}
        </button>
      ))}
    </div>
  );
};
