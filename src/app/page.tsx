import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '내 블로그',
  description: '개발 관련 블로그입니다',
  alternates: {
    languages: {
      en: '/en',
      ja: '/ja',
      ko: '/',
    },
  },
};

export default function RootPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">환영합니다</h1>
      {/* 메인 페이지 콘텐츠 */}
    </div>
  );
}
