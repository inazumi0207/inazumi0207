import { Button } from "@/components/ui/button"
import Image from "next/image"

export function HeroSection() {
  return (
    <section className="relative bg-gradient-to-b from-blue-50 to-white py-20">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                結果にコミットした
                <br />
                LP制作やります
              </h1>
              <p className="max-w-[600px] text-gray-500 md:text-xl">
                本気で集客したい個人や経営者様のための
                <br />
                専門的なランディングページ制作サービス
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                無料相談を申し込む
              </Button>
            </div>
          </div>
          <div className="mx-auto w-full max-w-[400px] lg:max-w-none">
            <Image
              src="/images/hero.png"
              alt="スマートフォンでのLPデザイン例"
              width={600}
              height={400}
              className="aspect-[4/3] object-cover rounded-xl"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

