interface HomePageProps {
  params: Promise<{ lang: string }>;
}

export default async function HomePage({ params }: HomePageProps) {
  const { lang } = await params;

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">
        {lang === 'ko' && '환영합니다'}
        {lang === 'en' && 'Welcome'}
        {lang === 'ja' && 'ようこそ'}
      </h1>
    </div>
  );
}
