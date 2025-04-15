import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import NewRow from '@/components/main/NewRow';
export default function RootPage() {
  return (
    <main className="min-h-screen">
      {/* 히어로 섹션 */}
      <section className="relative h-[60vh] flex items-center justify-center">
        <div className="absolute inset-0 bg-black/50 z-10" />
        <div className="absolute inset-0">
          <img
            src="https://placehold.co/1920x1080/1a1a1a/ffffff/png?text=Photography+Blog"
            alt="히어로 이미지"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-20 text-center text-white px-4">
          <h1 className="text-5xl font-bold mb-4">포토그래피 블로그</h1>
          <p className="text-xl">사진과 함께하는 특별한 순간들</p>
        </div>
      </section>

      {/* 검색 섹션 */}
      {/* <section className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto flex gap-2">
          <Input
            type="search"
            placeholder="태그나 키워드로 검색해보세요"
            className="flex-1"
          />
          <Button>검색</Button>
        </div>
      </section> */}

      {/* 인기 태그 섹션 */}
      {/* <section className="container mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold mb-4">인기 태그</h2>
        <div className="flex flex-wrap gap-2">
          {['#필름카메라', '#야경', '#촬영팁', '#인물사진', '#풍경사진'].map(
            (tag) => (
              <Button
                key={tag}
                variant="outline"
                size="sm"
                className="cursor-pointer"
              >
                {tag}
              </Button>
            ),
          )}
        </div>
      </section> */}

      {/* 최신 글 섹션 */}
      <NewRow />

      {/* 추천 글 섹션 */}
      <section className="container mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold mb-4">추천 글</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[1, 2].map((i) => (
            <Card key={i}>
              <CardContent className="p-4">
                <div className="aspect-video bg-gray-200 mb-4 rounded-lg" />
                <h3 className="font-semibold mb-2">추천 포스트 제목 {i}</h3>
                <p className="text-sm text-gray-600">
                  추천 포스트 설명이 들어갈 자리입니다...
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* SNS 연결 섹션 */}
      <section className="container mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold mb-4">SNS</h2>
        <div className="flex gap-4">
          <Button variant="outline">Instagram</Button>
          <Button variant="outline">X (Twitter)</Button>
        </div>
      </section>
    </main>
  );
}
