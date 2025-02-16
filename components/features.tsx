import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle2 } from "lucide-react"

export function Features() {
  const features = [
    {
      title: "制作会社に任せた時と同等以上の効果",
      description: "デザインやコーディングを一貫して対応し、細かい相談がしやすい体制を整えています。",
    },
    {
      title: "料金一律で追加料金なし",
      description: "見積もり後に余計な費用がかからない、明瞭な料金体系でご提供します。",
    },
    {
      title: "納品後のサポートも充実",
      description: "制作完了後の相談や修正対応など、放置されず継続的なフォローを提供します。",
    },
  ]

  return (
    <section id="features" className="py-16 bg-gray-50">
      <div className="container px-4 md:px-6">
        <h2 className="text-2xl font-bold text-center mb-8">選ばれる3つの理由</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {features.map((feature, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <CheckCircle2 className="h-6 w-6 text-blue-500" />
                  <span>{feature.title}</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-500">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

