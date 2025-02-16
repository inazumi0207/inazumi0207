import { Card, CardContent, CardHeader } from "@/components/ui/card"
import Image from "next/image"

export function Profile() {
  return (
    <section className="py-16">
      <div className="container px-4 md:px-6">
        <h2 className="text-2xl font-bold text-center mb-8">制作者プロフィール</h2>
        <Card className="max-w-2xl mx-auto">
          <CardHeader>
            <div className="flex items-center space-x-4">
              <div className="w-24 h-24 rounded-full overflow-hidden">
                <Image src="/images/profile.png" alt="稲積" width={96} height={96} className="object-cover" />
              </div>
              <div>
                <h3 className="text-xl font-bold">LPデザイナー 稲積</h3>
                <p className="text-gray-500">LP制作 / HP制作 / バナー制作 / メニュー表作成</p>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600">
              経験豊富なLPデザイナーとして、多くのクライアント様の集客をサポートしてきました。
              デザインからコーディングまで一貫して対応し、お客様のビジネスの成長をお手伝いいたします。
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

