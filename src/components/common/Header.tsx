import Link from 'next/link';
import { LanguageSwitcher } from './LanguageSwitcher';

export const Header = () => {
  return (
    <header className="w-full py-4 px-6 border-b">
      <div className="max-w-4xl mx-auto flex justify-between items-center">
        <Link href="/" className="text-xl font-bold">
          My Blog
        </Link>
        <LanguageSwitcher />
      </div>
    </header>
  );
};
