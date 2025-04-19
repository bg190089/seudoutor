import type React from "react"
import type { Metadata } from "next/dist/lib/metadata/types/metadata-interface"
import { Inter } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Seu Doutor | Cartão de Benefícios",
  description: "Economize até 80% em consultas, exames e procedimentos médicos com o Seu Doutor Cartão de Benefícios.",
  keywords:
    "cartão de benefícios, desconto médico, consultas com desconto, exames com desconto, saúde, Feira de Santana",
  authors: [{ name: "Dr. Saúde Centro Médico" }],
  creator: "Dr. Saúde Centro Médico",
  publisher: "Dr. Saúde Centro Médico",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
