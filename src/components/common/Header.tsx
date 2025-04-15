'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { LANGUAGES, getCurrentLanguage, getLocalizedPath } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Globe } from 'lucide-react';

export const Header = () => {
  const pathname = usePathname();
  const currentLang = getCurrentLanguage(pathname);

  return (
    <header className="fixed top-0 left-0 right-0 w-full py-4 px-6 border-b bg-white/80 backdrop-blur-sm z-50">
      <div className="max-w-4xl mx-auto flex justify-between items-center">
        <div className="flex items-center gap-4">
          <Link href="/" className="text-xl font-bold">
            My Blog
          </Link>
          <nav className="flex items-center gap-2">
            <Button variant="ghost" asChild>
              <Link href={getLocalizedPath('/blog', currentLang)}>Blog</Link>
            </Button>
            <Button variant="ghost" asChild>
              <Link href={getLocalizedPath('/about', currentLang)}>About</Link>
            </Button>
          </nav>
        </div>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon">
              <Globe className="h-5 w-5" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {Object.entries(LANGUAGES).map(([code, name]) => (
              <DropdownMenuItem key={code} asChild>
                <Link
                  href={getLocalizedPath(
                    pathname,
                    code as keyof typeof LANGUAGES,
                  )}
                >
                  {name}
                </Link>
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
};
