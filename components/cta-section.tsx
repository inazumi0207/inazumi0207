import { Button } from "@/components/ui/button"
import Link from "next/link"

export function CtaSection() {
  return (
    <section id="contact" className="py-16 bg-blue-50">
      <div className="container px-4 md:px-6 text-center">
        <h2 className="text-2xl font-bold mb-4">無料相談を実施中</h2>
        <p className="text-gray-600 mb-8">
          まずはお気軽にご相談ください。あなたのビジネスに最適なLPを一緒に作り上げていきましょう。
        </p>
        <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
          <Link href="/contact">無料相談を申し込む</Link>
        </Button>
      </div>
    </section>
  )
}

