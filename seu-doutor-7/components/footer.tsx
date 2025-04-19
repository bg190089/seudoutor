import Link from "next/link"
import { Facebook, Instagram, Mail, MapPin, Phone, Twitter } from "lucide-react"
import Logo from "./logo"

export default function Footer() {
  return (
    <footer className="bg-brand-gray text-gray-300">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="mb-4">
              <Logo variant="footer" />
            </div>
            <p className="text-sm mb-6">
              O Seu Doutor Cartão de Benefícios é um produto do grupo Dr. Saúde, oferecendo descontos em consultas,
              exames e procedimentos.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Links Rápidos</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-sm hover:text-white transition-colors">
                  Início
                </Link>
              </li>
              <li>
                <Link href="/#planos" className="text-sm hover:text-white transition-colors">
                  Planos
                </Link>
              </li>
              <li>
                <Link href="/#beneficios" className="text-sm hover:text-white transition-colors">
                  Benefícios
                </Link>
              </li>
              <li>
                <Link href="/#como-funciona" className="text-sm hover:text-white transition-colors">
                  Como Funciona
                </Link>
              </li>
              <li>
                <Link href="/#faq" className="text-sm hover:text-white transition-colors">
                  Perguntas Frequentes
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Planos</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/#planos" className="text-sm hover:text-white transition-colors">
                  Seu Doutor Essencial
                </Link>
              </li>
              <li>
                <Link href="/#planos" className="text-sm hover:text-white transition-colors">
                  Seu Doutor Premium
                </Link>
              </li>
              <li>
                <Link href="/pagamento" className="text-sm hover:text-white transition-colors">
                  Contratar
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Contato</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 mt-0.5 text-brand-lightblue" />
                <span className="text-sm">Av. Getúlio Vargas, 792, 2 andar, Feira de Santana - BA</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-2 text-brand-lightblue" />
                <span className="text-sm">(75) 3023-7676</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2 text-brand-lightblue" />
                <span className="text-sm">atendimento@drsaudecentromedico.com.br</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-sm text-center">
          {/* Copyright text removed as requested */}
        </div>
      </div>
    </footer>
  )
}
