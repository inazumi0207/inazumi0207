import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Check } from "lucide-react"

export function Pricing() {
  const plans = [
    {
      name: "ライトプラン",
      price: "150,000",
      features: ["スマホ表示に特化", "必要最低限のLP要素を盛り込み", "追加オプション相談可能"],
    },
    {
      name: "スタンダードプラン",
      price: "180,000",
      features: ["スマホ・PC両対応", "しっかりした構成のLP作成", "追加オプション相談可能"],
    },
  ]

  return (
    <section id="pricing" className="py-16">
      <div className="container px-4 md:px-6">
        <h2 className="text-2xl font-bold text-center mb-8">料金プラン</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:gap-8">
          {plans.map((plan, index) => (
            <Card key={index} className="flex flex-col">
              <CardHeader>
                <CardTitle>{plan.name}</CardTitle>
                <p className="text-3xl font-bold">¥{plan.price}</p>
              </CardHeader>
              <CardContent className="flex-1">
                <ul className="space-y-2">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center space-x-2">
                      <Check className="h-4 w-4 text-blue-500" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

