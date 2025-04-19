"use client"

import Link from "next/link"
import Image from "next/image"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-gray-50 shadow-sm">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo à esquerda */}
        <Link href="/" className="flex items-center">
          <Image
            src="/images/seu-doutor-logo.png"
            alt="Seu Doutor Logo"
            width={220}
            height={70}
            className="h-auto w-auto object-contain"
          />
        </Link>

        <div className="flex items-center gap-4">
          {/* Botão "Assine agora" - Tamanho reduzido */}
          <Button
            asChild
            className="bg-brand-orange hover:bg-brand-orange/90 text-white rounded-full px-6 py-5 text-lg font-medium"
          >
            <Link href="/#planos">Assine agora</Link>
          </Button>

          {/* Menu hambúrguer */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="text-gray-500">
                <Menu className="h-8 w-8" />
                <span className="sr-only">Abrir menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[85%] sm:w-[350px]">
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-center border-b pb-4 pt-2">
                  <Image
                    src="/images/seu-doutor-logo.png"
                    alt="Seu Doutor Cartão de Benefícios"
                    width={180}
                    height={50}
                    className="h-auto w-auto object-contain"
                  />
                </div>
                <nav className="flex flex-col gap-5 py-8">
                  <Link
                    href="/"
                    className="text-lg font-medium text-brand-gray hover:text-brand-turquoise transition-colors"
                  >
                    Início
                  </Link>
                  <Link
                    href="/#planos"
                    className="text-lg font-medium text-brand-gray hover:text-brand-turquoise transition-colors"
                  >
                    Conheça os planos
                  </Link>
                  <Link
                    href="https://wa.me/557530237676"
                    className="text-lg font-medium text-brand-gray hover:text-brand-turquoise transition-colors"
                  >
                    Fale conosco
                  </Link>
                  <Link
                    href="/#faq"
                    className="text-lg font-medium text-brand-gray hover:text-brand-turquoise transition-colors"
                  >
                    Dúvidas frequentes
                  </Link>
                </nav>
                <div className="mt-auto border-t pt-6">
                  <Button
                    asChild
                    className="w-full bg-brand-orange hover:bg-brand-orange/90 text-white rounded-full py-5 text-lg"
                  >
                    <Link href="/#planos">Assine agora</Link>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
