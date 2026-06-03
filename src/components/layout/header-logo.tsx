import Link from "next/link"
import Image from "next/image"

export function HeaderLogo() {
  return (
    <div className="flex flex-1 items-center justify-start">
      <Link href="/" className="flex items-center gap-3 group">
        <div className="relative size-9 transition-transform duration-500 group-hover:rotate-12 group-hover:scale-110">
          <Image
            src="/images/app-icon.png"
            alt="RE-Invoice Logo"
            fill
            sizes="36px"
            className="object-contain"
          />
        </div>
        <span className="inline-block font-black text-xl tracking-tighter">RE-INVOICE</span>
      </Link>
    </div>
  )
}
