"use client"

import * as React from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export function Header() {
  const [isOpen, setIsOpen] = React.useState(false)

  const menuItems = [
    { href: "#works", label: "実績紹介" },
    { href: "#features", label: "サービス内容" },
    { href: "#pricing", label: "料金体系" },
    { href: "/contact", label: "問い合わせ" },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-xl font-bold">LP制作サービス</span>
        </Link>

        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" className="px-2" aria-label={isOpen ? "メニューを閉じる" : "メニューを開く"}>
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[400px]">
            <nav className="flex flex-col space-y-4">
              {menuItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-lg font-medium text-muted-foreground transition-colors hover:text-primary"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <Button className="w-full bg-blue-600 hover:bg-blue-700">無料相談はこちら</Button>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}

