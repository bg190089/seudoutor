import Link from "next/link"
import { Check, CreditCard, Stethoscope, Users, ArrowRight, X, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-brand-turquoise to-brand-lightblue text-white py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <h1 className="leading-tight">
                <span className="block text-4xl md:text-6xl font-bold text-white">Seu Doutor</span>
                <span className="block text-2xl md:text-4xl font-medium mt-1">Cartão de Benefícios</span>
              </h1>
              <p className="text-lg md:text-xl opacity-90">
                Economize em consultas, exames e procedimentos no Dr. Saúde e em toda a rede credenciada por apenas R$
                10/mês.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-white text-brand-turquoise hover:bg-opacity-90 hover:text-brand-turquoise"
                  asChild
                >
                  <Link href="#planos">Conheça os planos</Link>
                </Button>
                <Button
                  size="lg"
                  className="bg-white text-brand-turquoise hover:bg-opacity-90 hover:text-brand-turquoise"
                  asChild
                >
                  <Link href="https://wa.me/557530237676?text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20o%20Seu%20Doutor%20Cartão%20de%20Benefícios">
                    <Phone className="mr-2 h-5 w-5" />
                    Saiba mais
                  </Link>
                </Button>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="relative bg-white p-6 rounded-xl shadow-lg">
                <div className="relative w-full h-56 md:h-64 overflow-hidden rounded-lg">
                  <div className="absolute inset-0 bg-gradient-to-r from-brand-turquoise to-brand-lightblue rounded-lg">
                    {/* Faixa branca no terço superior */}
                    <div className="absolute top-0 left-0 right-0 h-1/3 bg-white">
                      <div className="flex items-center justify-center h-full px-4">
                        <Image
                          src="/images/logo-transparent.png"
                          alt="Seu Doutor Logo"
                          width={180}
                          height={70}
                          className="h-auto w-auto object-contain"
                        />
                      </div>
                    </div>

                    {/* Resto do cartão permanece igual */}
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="h-8 bg-white/20 rounded-md mb-2"></div>
                      <div className="flex justify-between">
                        <div className="text-white text-xs">VÁLIDO ATÉ 12/25</div>
                        <div className="text-white text-xs">DR. SAÚDE</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-4 text-center text-brand-gray font-medium">Seu cartão de descontos em saúde</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="beneficios" className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-brand-gray mb-4">Por que escolher o Seu Doutor?</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              O cartão de benefícios que oferece acesso a serviços de saúde de qualidade com preços acessíveis.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-brand-lightblue/10 p-6 rounded-xl text-center hover:shadow-lg transition-all">
              <div className="w-16 h-16 bg-brand-turquoise rounded-full flex items-center justify-center mx-auto mb-4">
                <CreditCard className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-brand-turquoise mb-2">Preço acessível</h3>
              <p className="text-brand-gray">
                A partir de R$ 10/mês, você garante saúde de qualidade para toda família.
              </p>
            </div>

            <div className="bg-brand-lightblue/10 p-6 rounded-xl text-center hover:shadow-lg transition-all">
              <div className="w-16 h-16 bg-brand-turquoise rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-brand-turquoise mb-2">Benefícios para toda família</h3>
              <p className="text-brand-gray">Inclua dependentes e garanta saúde de qualidade para todos.</p>
            </div>

            <div className="bg-brand-lightblue/10 p-6 rounded-xl text-center hover:shadow-lg transition-all">
              <div className="w-16 h-16 bg-brand-turquoise rounded-full flex items-center justify-center mx-auto mb-4">
                <Stethoscope className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-brand-turquoise mb-2">Ampla rede credenciada</h3>
              <p className="text-brand-gray">Acesso a médicos, clínicas e laboratórios em Feira de Santana e região.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Plans Section */}
      <section id="planos" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-brand-gray mb-4">Escolha o plano ideal para você</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Temos opções que se adaptam às suas necessidades e de sua família.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Plano Essencial */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200 transition-transform hover:scale-105">
              <div className="bg-brand-turquoise p-6 text-white text-center">
                <h3 className="text-2xl font-bold">Seu Doutor Essencial</h3>
                <div className="mt-4 flex flex-col items-center">
                  <div className="flex items-baseline">
                    <span className="text-4xl font-bold">R$ 10</span>
                    <span className="ml-1 text-xl">/mês</span>
                  </div>
                  <span className="text-sm mt-1 opacity-80">Pagamento anual de R$ 120,00</span>
                </div>
              </div>
              <div className="p-6">
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-brand-turquoise mr-2 mt-0.5" />
                    <div>
                      <span className="text-brand-gray font-medium">Consulta com Clínico Geral</span>
                      <p className="text-sm text-gray-500">Apenas R$ 50,00</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-brand-turquoise mr-2 mt-0.5" />
                    <div>
                      <span className="text-brand-gray font-medium">10% de desconto</span>
                      <p className="text-sm text-gray-500">Em exames laboratoriais no LabSaúde</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-brand-turquoise mr-2 mt-0.5" />
                    <div>
                      <span className="text-brand-gray font-medium">5% de desconto</span>
                      <p className="text-sm text-gray-500">Em consultas e exames no Dr. Saúde</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-brand-turquoise mr-2 mt-0.5" />
                    <div>
                      <span className="text-brand-gray font-medium">Retorno gratuito</span>
                      <p className="text-sm text-gray-500">Em até 30 dias após a consulta no Dr. Saúde</p>
                    </div>
                  </li>
                </ul>
                <div className="mt-8">
                  <Link href="/pagamento?plano=essencial" className="block">
                    <Button className="w-full bg-brand-turquoise hover:bg-brand-turquoise/90 text-white">
                      Contratar agora
                    </Button>
                  </Link>
                </div>
              </div>
            </div>

            {/* Plano Premium */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200 relative transition-transform hover:scale-105">
              <div className="absolute top-0 right-0 bg-brand-orange text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
                MAIS VANTAJOSO
              </div>
              <div className="bg-brand-lightblue p-6 text-white text-center">
                <h3 className="text-2xl font-bold">Seu Doutor Premium</h3>
                <div className="mt-4 flex flex-col items-center">
                  <div className="flex items-baseline">
                    <span className="text-4xl font-bold">R$ 15</span>
                    <span className="ml-1 text-xl">/mês</span>
                  </div>
                  <span className="text-sm mt-1 opacity-80">Pagamento anual de R$ 180,00</span>
                </div>
              </div>
              <div className="p-6">
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-brand-turquoise mr-2 mt-0.5" />
                    <div>
                      <span className="text-brand-gray font-medium">Consulta com Clínico Geral</span>
                      <div className="flex items-center">
                        <Badge className="bg-brand-orange text-white mr-2">GRATUITA</Badge>
                        <span className="text-sm text-gray-500">Ilimitada</span>
                      </div>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-brand-turquoise mr-2 mt-0.5" />
                    <div>
                      <span className="text-brand-gray font-medium">Avaliação odontológica gratuita</span>
                      <p className="text-sm text-gray-500">+ 2 limpezas gratuitas ao ano</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-brand-turquoise mr-2 mt-0.5" />
                    <div>
                      <span className="text-brand-gray font-medium">15% de desconto</span>
                      <p className="text-sm text-gray-500">Em exames laboratoriais</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-brand-turquoise mr-2 mt-0.5" />
                    <div>
                      <span className="text-brand-gray font-medium">5% de desconto</span>
                      <p className="text-sm text-gray-500">Em consultas e exames no Dr. Saúde</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-brand-turquoise mr-2 mt-0.5" />
                    <div>
                      <span className="text-brand-gray font-medium">Retorno gratuito</span>
                      <p className="text-sm text-gray-500">Em até 30 dias após a consulta no Dr. Saúde</p>
                    </div>
                  </li>
                </ul>
                <div className="mt-8">
                  <Link href="/pagamento?plano=premium" className="block">
                    <Button className="w-full bg-brand-lightblue hover:bg-brand-lightblue/90 text-white">
                      Contratar agora
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 max-w-3xl mx-auto bg-white p-6 rounded-xl shadow-sm border border-gray-200">
            <h3 className="text-xl font-semibold text-brand-gray mb-4 text-center">Compare os planos</h3>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="py-3 px-4 text-left text-brand-gray">Benefícios</th>
                    <th className="py-3 px-4 text-center text-brand-turquoise">Essencial</th>
                    <th className="py-3 px-4 text-center text-brand-lightblue">Premium</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-100">
                    <td className="py-3 px-4 text-brand-gray">Valor mensal</td>
                    <td className="py-3 px-4 text-center font-medium">R$ 10/mês</td>
                    <td className="py-3 px-4 text-center font-medium">R$ 15/mês</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-3 px-4 text-brand-gray">Consulta com Clínico Geral</td>
                    <td className="py-3 px-4 text-center">R$ 50</td>
                    <td className="py-3 px-4 text-center font-medium text-brand-orange">Gratuita</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-3 px-4 text-brand-gray">Avaliação odontológica</td>
                    <td className="py-3 px-4 text-center">
                      <X className="h-5 w-5 text-red-400 mx-auto" />
                    </td>
                    <td className="py-3 px-4 text-center font-medium text-brand-orange">Gratuita</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-3 px-4 text-brand-gray">Limpeza dental</td>
                    <td className="py-3 px-4 text-center">
                      <X className="h-5 w-5 text-red-400 mx-auto" />
                    </td>
                    <td className="py-3 px-4 text-center">2x ao ano</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-3 px-4 text-brand-gray">Desconto em exames laboratoriais</td>
                    <td className="py-3 px-4 text-center">10%</td>
                    <td className="py-3 px-4 text-center">15%</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-3 px-4 text-brand-gray">Desconto em consultas e exames no Dr. Saúde</td>
                    <td className="py-3 px-4 text-center">5%</td>
                    <td className="py-3 px-4 text-center">5%</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 text-brand-gray">Retorno em até 30 dias</td>
                    <td className="py-3 px-4 text-center">
                      <Check className="h-5 w-5 text-brand-turquoise mx-auto" />
                    </td>
                    <td className="py-3 px-4 text-center">
                      <Check className="h-5 w-5 text-brand-turquoise mx-auto" />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* How it Works Section */}
      <section id="como-funciona" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-brand-gray mb-4">Como funciona</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              É simples utilizar o Seu Doutor Cartão de Benefícios. Veja como:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center relative">
              <div className="w-16 h-16 bg-brand-turquoise rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                1
              </div>
              <h3 className="text-xl font-semibold text-brand-turquoise mb-2">Escolha seu plano</h3>
              <p className="text-brand-gray">Selecione o plano que melhor atende às suas necessidades.</p>
              <ArrowRight className="hidden md:block absolute -right-4 top-8 text-brand-lightblue" />
            </div>

            <div className="text-center relative">
              <div className="w-16 h-16 bg-brand-turquoise rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                2
              </div>
              <h3 className="text-xl font-semibold text-brand-turquoise mb-2">Faça o pagamento</h3>
              <p className="text-brand-gray">Realize o pagamento de forma rápida e segura.</p>
              <ArrowRight className="hidden md:block absolute -right-4 top-8 text-brand-lightblue" />
            </div>

            <div className="text-center relative">
              <div className="w-16 h-16 bg-brand-turquoise rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                3
              </div>
              <h3 className="text-xl font-semibold text-brand-turquoise mb-2">Receba seu cartão</h3>
              <p className="text-brand-gray">Você receberá seu cartão digital imediatamente por WhatsApp.</p>
              <ArrowRight className="hidden md:block absolute -right-4 top-8 text-brand-lightblue" />
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-brand-turquoise rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                4
              </div>
              <h3 className="text-xl font-semibold text-brand-turquoise mb-2">Aproveite os benefícios</h3>
              <p className="text-brand-gray">Utilize seu cartão no Dr. Saúde e em toda a rede credenciada.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-brand-orange to-brand-yellow text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Pronto para economizar em saúde?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Adquira agora o Seu Doutor Cartão de Benefícios por apenas R$ 10/mês e comece a economizar em consultas,
            exames e procedimentos.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-brand-orange hover:bg-white/90" asChild>
              <Link href="#planos">Contratar agora</Link>
            </Button>
            <Button size="lg" className="bg-white text-brand-orange hover:bg-white/90" asChild>
              <Link href="https://wa.me/557530237676?text=Olá,%20gostaria%20de%20falar%20com%20um%20consultor%20sobre%20o%20Seu%20Doutor%20Cartão%20de%20Benefícios">
                <Phone className="mr-2 h-5 w-5" />
                Falar com um consultor
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-brand-gray mb-4">Perguntas Frequentes</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Tire suas dúvidas sobre o Seu Doutor Cartão de Benefícios.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-left text-brand-gray">
                  O que é o Seu Doutor Cartão de Benefícios?
                </AccordionTrigger>
                <AccordionContent className="text-brand-gray">
                  O Seu Doutor Cartão de Benefícios é um cartão que oferece descontos em consultas, exames e
                  procedimentos no Dr. Saúde e em toda a rede credenciada em Feira de Santana e região. Com ele, você
                  pode economizar significativamente em serviços de saúde, pagando apenas R$ 10/mês no plano Essencial
                  ou R$ 15/mês no plano Premium.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2">
                <AccordionTrigger className="text-left text-brand-gray">
                  Quais são os planos disponíveis?
                </AccordionTrigger>
                <AccordionContent className="text-brand-gray">
                  Oferecemos dois planos: Seu Doutor Essencial e Seu Doutor Premium. O plano Essencial custa R$ 10/mês
                  (pagamento anual de R$ 120) e inclui consultas com Clínico Geral por R$ 50, 10% de desconto em exames
                  laboratoriais no LabSaúde, 5% de desconto em consultas e exames no Dr. Saúde, e retorno gratuito em
                  até 30 dias. O plano Premium custa R$ 15/mês (pagamento anual de R$ 180) e inclui consultas gratuitas
                  e ilimitadas com Clínico Geral, avaliação odontológica gratuita, duas limpezas gratuitas ao ano, 15%
                  de desconto em exames laboratoriais, 5% de desconto em consultas e exames no Dr. Saúde, e retorno
                  gratuito em até 30 dias.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3">
                <AccordionTrigger className="text-left text-brand-gray">
                  Existe carência para utilizar o cartão?
                </AccordionTrigger>
                <AccordionContent className="text-brand-gray">
                  Não há carência. Você pode utilizar o cartão imediatamente após a confirmação do pagamento. Você
                  receberá seu cartão digital por WhatsApp e já poderá agendar consultas e exames com desconto.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4">
                <AccordionTrigger className="text-left text-brand-gray">
                  Quem pode ser incluído como dependente?
                </AccordionTrigger>
                <AccordionContent className="text-brand-gray">
                  Podem ser incluídos como dependentes: cônjuge, filhos, pais, sogros e outros familiares, conforme o
                  limite do seu plano. No plano Essencial, você pode incluir até 2 dependentes, e no plano Premium, até
                  5 dependentes.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5">
                <AccordionTrigger className="text-left text-brand-gray">Onde posso utilizar o cartão?</AccordionTrigger>
                <AccordionContent className="text-brand-gray">
                  O cartão pode ser utilizado no Dr. Saúde, localizado em Feira de Santana, Bahia, e em toda a rede
                  credenciada. A lista completa de estabelecimentos credenciados está disponível em nosso site e é
                  atualizada regularmente.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-6">
                <AccordionTrigger className="text-left text-brand-gray">
                  Como faço para agendar uma consulta ou exame?
                </AccordionTrigger>
                <AccordionContent className="text-brand-gray">
                  Para agendar, basta entrar em contato com o Dr. Saúde pelo telefone (75) 3023-7676 ou pelo WhatsApp,
                  informando que você é titular do Seu Doutor Cartão de Benefícios. Você também pode agendar
                  presencialmente na do Seu Doutor Cartão de Benefícios. Você também pode agendar presencialmente na
                  clínica.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>
    </div>
  )
}
