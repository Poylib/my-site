import { Header } from '@/components/common/Header';
import { Footer } from '@/components/common/Footer';

export default function LocaleLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <main className="max-w-4xl mx-auto px-6 py-8">{children}</main>
      <Footer />
    </>
  );
}
