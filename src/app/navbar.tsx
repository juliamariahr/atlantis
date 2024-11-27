import React from "react"
import Link from "next/link"

const Navbar: React.FC = () => {
  return (
  <nav className="bg-pink-300 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-lg font-semibold pl-6">
          <Link href="/">Sistema Atlantis</Link>
        </div>
        <ul className="flex space-x-8 pr-14">
          <li>
            <Link href="/" className="text-white hover:underline">
              Início
            </Link>
          </li>
          <li>
            <Link href="/hospedes" className="text-white hover:underline">
              Hóspedes
            </Link>
          </li>
          <li>
            <Link href="/acomodacoes" className="text-white hover:underline">
              Acomodações
            </Link>
          </li>
          <li>
            <Link href="/hospedagens" className="text-white hover:underline">
              Hospedagens
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
