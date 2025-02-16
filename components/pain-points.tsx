import { Card, CardContent } from "@/components/ui/card"
import { XCircle } from "lucide-react"

export function PainPoints() {
  const painPoints = [
    "自作LPのデザインがいまいち・うまくいかない",
    "LP制作の費用を抑えたい",
    "LPを作りたいが挫折してしまった",
    "LPに関する具体的なノウハウ・技術が足りない",
  ]

  return (
    <section className="py-16 bg-white">
      <div className="container px-4 md:px-6">
        <h2 className="text-2xl font-bold text-center mb-8">こんな悩みありませんか？</h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {painPoints.map((point, index) => (
            <Card key={index}>
              <CardContent className="flex items-start space-x-4 p-6">
                <XCircle className="h-6 w-6 text-red-500 flex-shrink-0" />
                <p className="text-sm">{point}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="text-center mt-8">
          <p className="text-lg font-semibold text-gray-900">ひとつでも当てはまった方は、ぜひご相談ください！</p>
        </div>
      </div>
    </section>
  )
}

