export function Timeline() {
  const steps = [
    "お問い合わせ・お申し込み",
    "ヒアリング / ヒアリングシート記入",
    "ZOOM等で打ち合わせ",
    "お支払い",
    "素材・原稿の準備・提出",
    "デザイン～コーディング",
    "納品・最終確認",
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="container px-4 md:px-6">
        <h2 className="text-2xl font-bold text-center mb-8">制作の流れ</h2>
        <div className="max-w-3xl mx-auto">
          <ol className="relative border-l border-gray-200">
            {steps.map((step, index) => (
              <li key={index} className="mb-10 ml-4">
                <div className="absolute w-3 h-3 bg-blue-500 rounded-full mt-1.5 -left-1.5" />
                <div className="ml-6">
                  <h3 className="font-semibold">STEP {index + 1}</h3>
                  <p className="text-gray-500">{step}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}

