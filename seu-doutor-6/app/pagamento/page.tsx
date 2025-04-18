"use client"

import { useState, useEffect } from "react"
import { useSearchParams } from "next/navigation"
import { Check, CreditCard, Info, Lock, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Separator } from "@/components/ui/separator"

export default function PagamentoPage() {
  const searchParams = useSearchParams()
  const planoParam = searchParams.get("plano")

  const [plano, setPlano] = useState({
    nome: "Seu Doutor Essencial",
    preco: 120,
    precoMensal: 10,
    tipo: "essencial",
  })

  useEffect(() => {
    if (planoParam === "premium") {
      setPlano({
        nome: "Seu Doutor Premium",
        preco: 180,
        precoMensal: 15,
        tipo: "premium",
      })
    }
  }, [planoParam])

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-brand-gray">Finalizar compra</h1>
            <p className="text-gray-600 mt-2">Complete seus dados para adquirir o Seu Doutor Cartão de Benefícios</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Formulário de pagamento */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-xl shadow-sm p-6 md:p-8">
                <h2 className="text-xl font-semibold mb-6 text-brand-gray">Dados pessoais</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div>
                    <Label htmlFor="nome" className="text-brand-gray">
                      Nome completo
                    </Label>
                    <Input
                      id="nome"
                      placeholder="Digite seu nome completo"
                      className="mt-1 border-brand-lightblue/30 focus-visible:ring-brand-turquoise"
                    />
                  </div>
                  <div>
                    <Label htmlFor="cpf" className="text-brand-gray">
                      CPF
                    </Label>
                    <Input
                      id="cpf"
                      placeholder="000.000.000-00"
                      className="mt-1 border-brand-lightblue/30 focus-visible:ring-brand-turquoise"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email" className="text-brand-gray">
                      E-mail
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="seu@email.com"
                      className="mt-1 border-brand-lightblue/30 focus-visible:ring-brand-turquoise"
                    />
                  </div>
                  <div>
                    <Label htmlFor="telefone" className="text-brand-gray">
                      Telefone
                    </Label>
                    <Input
                      id="telefone"
                      placeholder="(00) 00000-0000"
                      className="mt-1 border-brand-lightblue/30 focus-visible:ring-brand-turquoise"
                    />
                  </div>
                </div>

                <Separator className="my-8" />

                <h2 className="text-xl font-semibold mb-6 text-brand-gray">Forma de pagamento</h2>

                <Tabs defaultValue="cartao" className="w-full">
                  <TabsList className="grid grid-cols-3 mb-6 bg-brand-lightblue/10">
                    <TabsTrigger
                      value="cartao"
                      className="flex items-center gap-2 data-[state=active]:bg-brand-turquoise data-[state=active]:text-white"
                    >
                      <CreditCard className="h-4 w-4" />
                      <span>Cartão</span>
                    </TabsTrigger>
                    <TabsTrigger
                      value="boleto"
                      className="data-[state=active]:bg-brand-turquoise data-[state=active]:text-white"
                    >
                      Boleto
                    </TabsTrigger>
                    <TabsTrigger
                      value="pix"
                      className="data-[state=active]:bg-brand-turquoise data-[state=active]:text-white"
                    >
                      Pix
                    </TabsTrigger>
                  </TabsList>

                  <TabsContent value="cartao">
                    <div className="space-y-6">
                      <div>
                        <Label htmlFor="numero-cartao" className="text-brand-gray">
                          Número do cartão
                        </Label>
                        <Input
                          id="numero-cartao"
                          placeholder="0000 0000 0000 0000"
                          className="mt-1 border-brand-lightblue/30 focus-visible:ring-brand-turquoise"
                        />
                      </div>

                      <div className="grid grid-cols-2 gap-6">
                        <div>
                          <Label htmlFor="validade" className="text-brand-gray">
                            Validade
                          </Label>
                          <Input
                            id="validade"
                            placeholder="MM/AA"
                            className="mt-1 border-brand-lightblue/30 focus-visible:ring-brand-turquoise"
                          />
                        </div>
                        <div>
                          <Label htmlFor="cvv" className="text-brand-gray">
                            CVV
                          </Label>
                          <Input
                            id="cvv"
                            placeholder="000"
                            className="mt-1 border-brand-lightblue/30 focus-visible:ring-brand-turquoise"
                          />
                        </div>
                      </div>

                      <div>
                        <Label htmlFor="nome-cartao" className="text-brand-gray">
                          Nome no cartão
                        </Label>
                        <Input
                          id="nome-cartao"
                          placeholder="Nome como está no cartão"
                          className="mt-1 border-brand-lightblue/30 focus-visible:ring-brand-turquoise"
                        />
                      </div>

                      <div>
                        <Label htmlFor="parcelas" className="text-brand-gray">
                          Parcelas
                        </Label>
                        <RadioGroup defaultValue="1" className="mt-3">
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="1" id="parcela-1" className="text-brand-turquoise" />
                            <Label htmlFor="parcela-1" className="text-brand-gray">
                              1x de R$ {plano.preco.toFixed(2)} sem juros
                            </Label>
                          </div>
                          <div className="flex items-center space-x-2 mt-2">
                            <RadioGroupItem value="2" id="parcela-2" className="text-brand-turquoise" />
                            <Label htmlFor="parcela-2" className="text-brand-gray">
                              2x de R$ {(plano.preco / 2).toFixed(2)} sem juros
                            </Label>
                          </div>
                          <div className="flex items-center space-x-2 mt-2">
                            <RadioGroupItem value="3" id="parcela-3" className="text-brand-turquoise" />
                            <Label htmlFor="parcela-3" className="text-brand-gray">
                              3x de R$ {(plano.preco / 3).toFixed(2)} sem juros
                            </Label>
                          </div>
                        </RadioGroup>
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent value="boleto">
                    <div className="bg-brand-lightblue/10 p-4 rounded-lg mb-6">
                      <div className="flex items-start">
                        <Info className="h-5 w-5 text-brand-turquoise mr-2 mt-0.5" />
                        <p className="text-sm text-brand-gray">
                          Ao finalizar sua compra, você receberá o boleto por e-mail. O prazo de compensação é de até 3
                          dias úteis após o pagamento.
                        </p>
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="cpf-boleto" className="text-brand-gray">
                        CPF do pagador
                      </Label>
                      <Input
                        id="cpf-boleto"
                        placeholder="000.000.000-00"
                        className="mt-1 border-brand-lightblue/30 focus-visible:ring-brand-turquoise"
                      />
                    </div>
                  </TabsContent>

                  <TabsContent value="pix">
                    <div className="bg-brand-lightblue/10 p-4 rounded-lg mb-6">
                      <div className="flex items-start">
                        <Info className="h-5 w-5 text-brand-turquoise mr-2 mt-0.5" />
                        <p className="text-sm text-brand-gray">
                          Ao finalizar sua compra, você receberá um QR Code para pagamento via Pix. A confirmação é
                          imediata após o pagamento.
                        </p>
                      </div>
                    </div>

                    <div className="flex justify-center p-6 bg-gray-50 rounded-lg">
                      <div className="text-center">
                        <p className="text-gray-500 mb-2">QR Code será gerado após a confirmação</p>
                        <div className="w-48 h-48 bg-gray-200 mx-auto flex items-center justify-center">
                          <span className="text-gray-400">QR Code Pix</span>
                        </div>
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>

                <Separator className="my-8" />

                <h2 className="text-xl font-semibold mb-6 text-brand-gray">Dependentes</h2>
                <p className="text-gray-600 mb-4">
                  {plano.tipo === "essencial"
                    ? "Você pode adicionar até 2 dependentes no plano Essencial."
                    : "Você pode adicionar até 5 dependentes no plano Premium."}
                </p>

                <div className="space-y-4 mb-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="dependente-1" className="text-brand-gray">
                        Nome do dependente 1
                      </Label>
                      <Input
                        id="dependente-1"
                        placeholder="Nome completo"
                        className="mt-1 border-brand-lightblue/30 focus-visible:ring-brand-turquoise"
                      />
                    </div>
                    <div>
                      <Label htmlFor="cpf-dependente-1" className="text-brand-gray">
                        CPF do dependente 1
                      </Label>
                      <Input
                        id="cpf-dependente-1"
                        placeholder="000.000.000-00"
                        className="mt-1 border-brand-lightblue/30 focus-visible:ring-brand-turquoise"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="dependente-2" className="text-brand-gray">
                        Nome do dependente 2
                      </Label>
                      <Input
                        id="dependente-2"
                        placeholder="Nome completo"
                        className="mt-1 border-brand-lightblue/30 focus-visible:ring-brand-turquoise"
                      />
                    </div>
                    <div>
                      <Label htmlFor="cpf-dependente-2" className="text-brand-gray">
                        CPF do dependente 2
                      </Label>
                      <Input
                        id="cpf-dependente-2"
                        placeholder="000.000.000-00"
                        className="mt-1 border-brand-lightblue/30 focus-visible:ring-brand-turquoise"
                      />
                    </div>
                  </div>

                  {plano.tipo === "premium" && (
                    <>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="dependente-3" className="text-brand-gray">
                            Nome do dependente 3
                          </Label>
                          <Input
                            id="dependente-3"
                            placeholder="Nome completo"
                            className="mt-1 border-brand-lightblue/30 focus-visible:ring-brand-turquoise"
                          />
                        </div>
                        <div>
                          <Label htmlFor="cpf-dependente-3" className="text-brand-gray">
                            CPF do dependente 3
                          </Label>
                          <Input
                            id="cpf-dependente-3"
                            placeholder="000.000.000-00"
                            className="mt-1 border-brand-lightblue/30 focus-visible:ring-brand-turquoise"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="dependente-4" className="text-brand-gray">
                            Nome do dependente 4
                          </Label>
                          <Input
                            id="dependente-4"
                            placeholder="Nome completo"
                            className="mt-1 border-brand-lightblue/30 focus-visible:ring-brand-turquoise"
                          />
                        </div>
                        <div>
                          <Label htmlFor="cpf-dependente-4" className="text-brand-gray">
                            CPF do dependente 4
                          </Label>
                          <Input
                            id="cpf-dependente-4"
                            placeholder="000.000.000-00"
                            className="mt-1 border-brand-lightblue/30 focus-visible:ring-brand-turquoise"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="dependente-5" className="text-brand-gray">
                            Nome do dependente 5
                          </Label>
                          <Input
                            id="dependente-5"
                            placeholder="Nome completo"
                            className="mt-1 border-brand-lightblue/30 focus-visible:ring-brand-turquoise"
                          />
                        </div>
                        <div>
                          <Label htmlFor="cpf-dependente-5" className="text-brand-gray">
                            CPF do dependente 5
                          </Label>
                          <Input
                            id="cpf-dependente-5"
                            placeholder="000.000.000-00"
                            className="mt-1 border-brand-lightblue/30 focus-visible:ring-brand-turquoise"
                          />
                        </div>
                      </div>
                    </>
                  )}
                </div>

                <Button className="w-full bg-brand-turquoise hover:bg-brand-turquoise/90 text-white mt-6">
                  <Lock className="h-4 w-4 mr-2" />
                  Finalizar compra
                </Button>

                <p className="text-xs text-gray-500 text-center mt-4">
                  Seus dados estão protegidos com criptografia de ponta a ponta
                </p>
              </div>
            </div>

            {/* Resumo da compra */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-xl shadow-sm p-6 md:p-8 sticky top-6">
                <h2 className="text-xl font-semibold mb-6 text-brand-gray">Resumo da compra</h2>

                <div className="bg-brand-lightblue/10 p-4 rounded-lg mb-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium text-brand-gray">{plano.nome}</span>
                    <span className="font-medium text-brand-gray">R$ {plano.preco.toFixed(2)}</span>
                  </div>
                  <p className="text-sm text-gray-600">
                    {plano.tipo === "essencial" ? "Titular + 2 dependentes" : "Titular + 5 dependentes"}
                  </p>
                  <div className="mt-2 text-sm text-brand-turquoise font-medium">
                    Apenas R$ {plano.precoMensal.toFixed(2)}/mês
                  </div>
                </div>

                <div className="space-y-3 mb-6">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Subtotal</span>
                    <span className="text-brand-gray">R$ {plano.preco.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Taxa de processamento</span>
                    <span className="text-brand-gray">R$ 0,00</span>
                  </div>
                  <Separator className="my-3" />
                  <div className="flex justify-between font-semibold text-lg">
                    <span className="text-brand-gray">Total</span>
                    <span className="text-brand-gray">R$ {plano.preco.toFixed(2)}</span>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start">
                    <Check className="h-5 w-5 text-brand-turquoise mr-2 mt-0.5" />
                    <span className="text-sm text-brand-gray">Acesso imediato após confirmação do pagamento</span>
                  </div>
                  <div className="flex items-start">
                    <Check className="h-5 w-5 text-brand-turquoise mr-2 mt-0.5" />
                    <span className="text-sm text-brand-gray">Cartão digital enviado por WhatsApp</span>
                  </div>
                  <div className="flex items-start">
                    <Check className="h-5 w-5 text-brand-turquoise mr-2 mt-0.5" />
                    <span className="text-sm text-brand-gray">Validade de 12 meses</span>
                  </div>
                  <div className="flex items-start">
                    <Check className="h-5 w-5 text-brand-turquoise mr-2 mt-0.5" />
                    <span className="text-sm text-brand-gray">Sem carência para utilização</span>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-gray-200">
                  <p className="text-sm text-gray-600 mb-4">Precisa de ajuda? Entre em contato:</p>
                  <div className="flex items-center">
                    <Phone className="h-5 w-5 text-brand-turquoise mr-2" />
                    <span className="text-brand-gray">(75) 3023-7676</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
