"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import Logo from "./logo"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white shadow-sm">
      <div className="container mx-auto px-2 md:px-6">
        <div className="flex h-16 md:h-32 items-center">
          {/* Logo posicionado mais à esquerda */}
          <div className="flex items-center flex-1">
            <Logo />
          </div>

          <nav className="hidden md:flex items-center gap-6 ml-auto">
            <Link href="/" className="text-sm font-medium text-brand-gray hover:text-brand-turquoise transition-colors">
              Início
            </Link>
            <Link
              href="/#planos"
              className="text-sm font-medium text-brand-gray hover:text-brand-turquoise transition-colors"
            >
              Planos
            </Link>
            <Link
              href="/#beneficios"
              className="text-sm font-medium text-brand-gray hover:text-brand-turquoise transition-colors"
            >
              Benefícios
            </Link>
            <Link
              href="/#como-funciona"
              className="text-sm font-medium text-brand-gray hover:text-brand-turquoise transition-colors"
            >
              Como Funciona
            </Link>
            <Link
              href="/#faq"
              className="text-sm font-medium text-brand-gray hover:text-brand-turquoise transition-colors"
            >
              FAQ
            </Link>
          </nav>

          <div className="hidden md:flex items-center gap-4 ml-6">
            <div className="flex items-center text-brand-turquoise">
              <Phone className="h-4 w-4 mr-2" />
              <span className="text-sm font-medium">(75) 3023-7676</span>
            </div>
            <Button asChild className="bg-brand-turquoise hover:bg-brand-turquoise/90 text-white">
              <Link href="/#planos">Contratar</Link>
            </Button>
          </div>

          {/* Menu mobile melhorado */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="md:hidden ml-4">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Abrir menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[85%] sm:w-[350px]">
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-center border-b pb-4 pt-2">
                  <Logo variant="mobile" showText={false} />
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
                    Planos
                  </Link>
                  <Link
                    href="/#beneficios"
                    className="text-lg font-medium text-brand-gray hover:text-brand-turquoise transition-colors"
                  >
                    Benefícios
                  </Link>
                  <Link
                    href="/#como-funciona"
                    className="text-lg font-medium text-brand-gray hover:text-brand-turquoise transition-colors"
                  >
                    Como Funciona
                  </Link>
                  <Link
                    href="/#faq"
                    className="text-lg font-medium text-brand-gray hover:text-brand-turquoise transition-colors"
                  >
                    FAQ
                  </Link>
                </nav>
                <div className="mt-auto border-t pt-6">
                  <div className="flex items-center justify-center text-brand-turquoise mb-6">
                    <Phone className="h-5 w-5 mr-2" />
                    <span className="text-lg font-medium">(75) 3023-7676</span>
                  </div>
                  <Button
                    asChild
                    className="w-full bg-brand-turquoise hover:bg-brand-turquoise/90 text-white text-lg py-6"
                  >
                    <Link href="/#planos">Contratar</Link>
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
