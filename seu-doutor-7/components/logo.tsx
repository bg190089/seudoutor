import Link from "next/link"

interface LogoProps {
  variant?: "default" | "footer" | "mobile"
  showText?: boolean
}

export default function Logo({ variant = "default", showText = true }: LogoProps) {
  const isFooter = variant === "footer"
  const isMobile = variant === "mobile"

  return (
    <Link href="/" className="flex items-center group">
      <div className="flex items-center">
        <div>
          <div className="text-xl font-bold">{isFooter ? "Seu Doutor" : "Seu Doutor"}</div>
        </div>
        {showText && <div className="ml-2"></div>}
      </div>
    </Link>
  )
}
