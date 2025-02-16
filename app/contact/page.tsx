"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "@/components/ui/use-toast"

export default function ContactPage() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)

  async function onSubmit(event: React.SyntheticEvent) {
    event.preventDefault()
    setIsLoading(true)

    const form = event.target as HTMLFormElement
    const formData = new FormData(form)
    const data = Object.fromEntries(formData)

    // ここで実際のフォーム送信処理を行います
    console.log("フォームデータ:", data)

    // 送信成功を模擬
    await new Promise((resolve) => setTimeout(resolve, 1000))

    setIsLoading(false)
    toast({
      title: "送信完了",
      description: "お問い合わせありがとうございます。近日中にご連絡いたします。",
    })

    router.push("/")
  }

  return (
    <div className="container max-w-2xl mx-auto py-16 px-4">
      <h1 className="text-3xl font-bold mb-8">お問い合わせ</h1>
      <form onSubmit={onSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium mb-2">
            お名前
          </label>
          <Input id="name" name="name" required />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-2">
            メールアドレス
          </label>
          <Input id="email" name="email" type="email" required />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium mb-2">
            電話番号
          </label>
          <Input id="phone" name="phone" type="tel" />
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium mb-2">
            お問い合わせ内容
          </label>
          <Textarea id="message" name="message" required />
        </div>
        <Button type="submit" className="w-full" disabled={isLoading}>
          {isLoading ? "送信中..." : "送信する"}
        </Button>
      </form>
    </div>
  )
}

