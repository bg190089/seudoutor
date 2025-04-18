import Image from "next/image"
import Link from "next/link"

interface LogoProps {
  variant?: "default" | "footer" | "mobile"
  showText?: boolean
}

export default function Logo({ variant = "default", showText = true }: LogoProps) {
  const isFooter = variant === "footer"
  const isMobile = variant === "mobile"

  // Tamanhos para desktop
  const desktopHeight = isFooter ? 60 : 100
  const desktopWidth = isFooter ? 220 : 380

  // Tamanhos para mobile (menores para evitar espaço vazio)
  const mobileHeight = 50
  const mobileWidth = 200

  // Usar tamanhos menores para mobile na versão padrão
  const height = isMobile ? mobileHeight : desktopHeight
  const width = isMobile ? mobileWidth : desktopWidth

  return (
    <Link href="/" className="flex items-center group">
      <div
        className={`flex items-center bg-white rounded-lg p-2 ${!isMobile && !isFooter ? "md:p-2 p-1" : "p-1"}`}
        style={{
          maxHeight: isMobile ? "90%" : "auto",
          marginLeft: !isMobile && !isFooter ? "-0.5rem" : "0", // Ajuste para alinhar mais à esquerda na versão desktop
        }}
      >
        <Image
          src="/images/logo-transparent.png"
          alt="Seu Doutor Logo"
          width={width}
          height={height}
          className={`h-auto w-auto object-contain transition-transform duration-200 group-hover:scale-105`}
          priority
          style={{
            height: "auto",
            width: "100%",
            maxWidth: !isMobile && !isFooter ? `${width}px` : `${mobileWidth}px`,
            maxHeight: !isMobile && !isFooter ? `${height}px` : `${mobileHeight}px`,
            objectFit: "contain",
          }}
        />
      </div>
    </Link>
  )
}
